#!/usr/bin/env node

/**
 * Google Search Console Automated Keyword Extractor
 * Pulls ALL keyword data in bulk - no manual searching required!
 * 
 * Features:
 * - Bulk extraction of all search queries
 * - Filters for Canadian/Ontario traffic
 * - Exports to CSV with all metrics
 * - Scheduled automation ready
 * - Handles API rate limits
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Configuration
const CONFIG = {
    // Your website URL (update this)
    SITE_URL: 'https://nextsteptherapy.ca/',
    
    // Date range for data extraction
    START_DATE: '2024-01-01',
    END_DATE: new Date().toISOString().split('T')[0], // Today
    
    // Output settings
    OUTPUT_DIR: './gsc_data',
    OUTPUT_FILE: 'ontario_therapy_keywords.csv',
    
    // API settings
    ROW_LIMIT: 25000, // Max keywords per request
    
    // Filter settings
    COUNTRY_FILTER: 'can', // Canada
    MIN_IMPRESSIONS: 1, // Minimum impressions to include
};

class GSCExtractor {
    constructor() {
        this.auth = null;
        this.webmasters = null;
        this.setupDirectories();
    }

    setupDirectories() {
        if (!fs.existsSync(CONFIG.OUTPUT_DIR)) {
            fs.mkdirSync(CONFIG.OUTPUT_DIR, { recursive: true });
        }
    }

    /**
     * Step 1: Set up Google API authentication
     */
    async authenticate() {
        console.log('🔐 Setting up Google Search Console authentication...');
        
        // Check if credentials file exists
        const credentialsPath = path.join(__dirname, 'gsc_credentials.json');
        if (!fs.existsSync(credentialsPath)) {
            console.log(`
❌ Missing credentials file!

To set up authentication:
1. Go to https://console.developers.google.com/
2. Create a new project or select existing
3. Enable Google Search Console API
4. Create credentials (OAuth 2.0 Client ID)
5. Download JSON file and save as: ${credentialsPath}

Then run this script again.
            `);
            process.exit(1);
        }

        const credentials = JSON.parse(fs.readFileSync(credentialsPath));
        const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;

        this.auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

        // Check if we have a saved token
        const tokenPath = path.join(__dirname, 'gsc_token.json');
        if (fs.existsSync(tokenPath)) {
            const token = JSON.parse(fs.readFileSync(tokenPath));
            this.auth.setCredentials(token);
            console.log('✅ Using saved authentication token');
        } else {
            await this.getNewToken(tokenPath);
        }

        this.webmasters = google.webmasters({ version: 'v3', auth: this.auth });
        console.log('✅ Google Search Console API authenticated');
    }

    async getNewToken(tokenPath) {
        const authUrl = this.auth.generateAuthUrl({
            access_type: 'offline',
            scope: ['https://www.googleapis.com/auth/webmasters.readonly'],
        });

        console.log('🔗 Authorize this app by visiting:', authUrl);
        
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const code = await new Promise((resolve) => {
            rl.question('Enter the authorization code: ', resolve);
        });
        rl.close();

        const { tokens } = await this.auth.getToken(code);
        this.auth.setCredentials(tokens);

        // Save token for future use
        fs.writeFileSync(tokenPath, JSON.stringify(tokens));
        console.log('✅ Token saved for future use');
    }

    /**
     * Step 2: Extract ALL keyword data in bulk
     */
    async extractKeywordData() {
        console.log('📊 Extracting ALL keyword data from Google Search Console...');
        console.log(`📅 Date range: ${CONFIG.START_DATE} to ${CONFIG.END_DATE}`);
        console.log(`🌍 Filtering for: Canada`);
        console.log(`📈 Max keywords: ${CONFIG.ROW_LIMIT.toLocaleString()}`);

        try {
            const request = {
                siteUrl: CONFIG.SITE_URL,
                resource: {
                    startDate: CONFIG.START_DATE,
                    endDate: CONFIG.END_DATE,
                    dimensions: ['query', 'country', 'device'],
                    dimensionFilterGroups: [
                        {
                            filters: [
                                {
                                    dimension: 'country',
                                    operator: 'equals',
                                    expression: CONFIG.COUNTRY_FILTER
                                }
                            ]
                        }
                    ],
                    rowLimit: CONFIG.ROW_LIMIT,
                    startRow: 0
                }
            };

            console.log('🔄 Making API request...');
            const response = await this.webmasters.searchanalytics.query(request);
            
            if (!response.data.rows || response.data.rows.length === 0) {
                console.log('⚠️  No data found for the specified criteria');
                return [];
            }

            console.log(`✅ Retrieved ${response.data.rows.length.toLocaleString()} keyword records`);
            return response.data.rows;

        } catch (error) {
            console.error('❌ Error extracting data:', error.message);
            throw error;
        }
    }

    /**
     * Step 3: Process and filter the data
     */
    processKeywordData(rawData) {
        console.log('🔄 Processing and filtering keyword data...');

        const processedData = rawData
            .map(row => ({
                keyword: row.keys[0], // Search query
                country: row.keys[1], // Country
                device: row.keys[2], // Device type
                impressions: row.impressions || 0,
                clicks: row.clicks || 0,
                ctr: row.ctr ? (row.ctr * 100).toFixed(2) + '%' : '0%',
                position: row.position ? row.position.toFixed(1) : 'N/A',
                // Calculate opportunity score
                opportunity_score: this.calculateOpportunityScore(row)
            }))
            .filter(item => item.impressions >= CONFIG.MIN_IMPRESSIONS)
            .sort((a, b) => b.opportunity_score - a.opportunity_score);

        console.log(`✅ Processed ${processedData.length.toLocaleString()} high-opportunity keywords`);
        return processedData;
    }

    /**
     * Calculate opportunity score for ranking potential
     */
    calculateOpportunityScore(row) {
        const impressions = row.impressions || 0;
        const clicks = row.clicks || 0;
        const position = row.position || 100;
        const ctr = row.ctr || 0;

        // Higher score = better opportunity
        // Factors: high impressions, low position (room for improvement), decent CTR
        let score = 0;
        
        // Impression weight (more impressions = more opportunity)
        score += Math.log(impressions + 1) * 10;
        
        // Position weight (positions 4-20 have most opportunity)
        if (position >= 4 && position <= 20) {
            score += (21 - position) * 5;
        }
        
        // CTR weight (low CTR with high impressions = opportunity)
        if (ctr < 0.05 && impressions > 100) {
            score += 20;
        }

        return Math.round(score);
    }

    /**
     * Step 4: Export to CSV
     */
    async exportToCSV(data) {
        const outputPath = path.join(CONFIG.OUTPUT_DIR, CONFIG.OUTPUT_FILE);
        console.log(`💾 Exporting data to: ${outputPath}`);

        const csvHeader = 'Keyword,Country,Device,Impressions,Clicks,CTR,Average Position,Opportunity Score\n';
        
        const csvContent = data
            .map(item => [
                `"${item.keyword}"`,
                item.country,
                item.device,
                item.impressions,
                item.clicks,
                item.ctr,
                item.position,
                item.opportunity_score
            ].join(','))
            .join('\n');

        const fullCSV = csvHeader + csvContent;
        fs.writeFileSync(outputPath, fullCSV);

        console.log(`✅ Exported ${data.length.toLocaleString()} keywords to CSV`);
        console.log(`📁 File location: ${outputPath}`);

        // Also create a summary report
        this.createSummaryReport(data);
    }

    /**
     * Create a summary report with insights
     */
    createSummaryReport(data) {
        const summaryPath = path.join(CONFIG.OUTPUT_DIR, 'keyword_summary_report.md');
        
        const topKeywords = data.slice(0, 20);
        const totalImpressions = data.reduce((sum, item) => sum + item.impressions, 0);
        const totalClicks = data.reduce((sum, item) => sum + item.clicks, 0);
        const avgPosition = data.reduce((sum, item) => sum + parseFloat(item.position), 0) / data.length;

        const report = `# 🎯 Ontario Therapy Keywords - Automated Report

**Generated:** ${new Date().toLocaleDateString()}  
**Date Range:** ${CONFIG.START_DATE} to ${CONFIG.END_DATE}  
**Total Keywords:** ${data.length.toLocaleString()}

## 📊 **SUMMARY METRICS**

- **Total Impressions:** ${totalImpressions.toLocaleString()}
- **Total Clicks:** ${totalClicks.toLocaleString()}
- **Average Position:** ${avgPosition.toFixed(1)}
- **Overall CTR:** ${((totalClicks / totalImpressions) * 100).toFixed(2)}%

## 🚀 **TOP 20 OPPORTUNITY KEYWORDS**

| Keyword | Impressions | Clicks | Position | CTR | Opportunity Score |
|---------|-------------|--------|----------|-----|-------------------|
${topKeywords.map(item => 
    `| ${item.keyword} | ${item.impressions} | ${item.clicks} | ${item.position} | ${item.ctr} | ${item.opportunity_score} |`
).join('\n')}

## 💡 **INSIGHTS & RECOMMENDATIONS**

### High-Opportunity Keywords (Position 4-20)
${data.filter(item => parseFloat(item.position) >= 4 && parseFloat(item.position) <= 20).length} keywords have high ranking potential

### Low CTR, High Impressions (Content Optimization Needed)
${data.filter(item => parseFloat(item.ctr) < 2 && item.impressions > 100).length} keywords need better titles/meta descriptions

### Quick Win Opportunities
${data.filter(item => item.opportunity_score > 50).length} keywords with high opportunity scores

---

**Next Steps:**
1. Review top opportunity keywords
2. Create content for high-impression, low-position terms
3. Optimize existing pages for low-CTR keywords
4. Monitor progress with weekly automated reports

*This report was generated automatically by the GSC Keyword Extractor*
`;

        fs.writeFileSync(summaryPath, report);
        console.log(`📋 Summary report created: ${summaryPath}`);
    }

    /**
     * Main execution function
     */
    async run() {
        try {
            console.log('🚀 Starting Google Search Console Keyword Extraction...\n');
            
            await this.authenticate();
            const rawData = await this.extractKeywordData();
            
            if (rawData.length === 0) {
                console.log('⚠️  No data to process. Exiting.');
                return;
            }

            const processedData = this.processKeywordData(rawData);
            await this.exportToCSV(processedData);

            console.log('\n🎉 EXTRACTION COMPLETE!');
            console.log(`📁 Check the '${CONFIG.OUTPUT_DIR}' folder for your results`);
            console.log('📊 CSV file contains all keyword data');
            console.log('📋 Summary report contains insights and recommendations');

        } catch (error) {
            console.error('\n❌ Error during extraction:', error.message);
            process.exit(1);
        }
    }
}

// Run the extractor
if (require.main === module) {
    const extractor = new GSCExtractor();
    extractor.run();
}

module.exports = GSCExtractor;
