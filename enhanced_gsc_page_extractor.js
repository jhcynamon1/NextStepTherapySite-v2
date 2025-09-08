#!/usr/bin/env node

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path'); // Added for path.join

/**
 * Enhanced GSC Page-Level Data Extractor
 * Gets detailed page performance data for SEO analysis
 */

class EnhancedGSCExtractor {
    constructor() {
        this.searchconsole = null;
        this.siteUrl = 'https://www.nextsteptherapy.ca/';
    }

    async initialize() {
        console.log('🚀 Initializing Enhanced GSC Page Extractor...');
        
        // Load credentials
        const credentials = JSON.parse(fs.readFileSync('gsc_credentials.json'));
        const token = JSON.parse(fs.readFileSync('gsc_token.json'));
        
        const auth = new google.auth.OAuth2(
            credentials.installed.client_id,
            credentials.installed.client_secret,
            credentials.installed.redirect_uris[0]
        );
        
        auth.setCredentials(token);
        this.searchconsole = google.searchconsole({ version: 'v1', auth });
        
        console.log('✅ GSC API initialized');
    }

    async extractPageLevelData(startDate, endDate, fileName) {
        console.log(`📊 Extracting page-level performance data from ${startDate} to ${endDate}...`);
        
        try {
            // Get page-level data
            const pageResponse = await this.searchconsole.searchanalytics.query({
                siteUrl: this.siteUrl,
                requestBody: {
                    startDate: startDate,
                    endDate: endDate,
                    dimensions: ['page'],
                    rowLimit: 1000,
                    startRow: 0
                }
            });

            // Get page + query data for detailed analysis
            const pageQueryResponse = await this.searchconsole.searchanalytics.query({
                siteUrl: this.siteUrl,
                requestBody: {
                    startDate: startDate,
                    endDate: endDate,
                    dimensions: ['page', 'query'],
                    rowLimit: 5000,
                    startRow: 0
                }
            });

            const pageData = this.processPageData(pageResponse.data.rows || []);
            const pageQueryData = this.processPageQueryData(pageQueryResponse.data.rows || []);
            
            // Combine data
            const enhancedPageData = this.combinePageData(pageData, pageQueryData);
            
            // Save data
            await this.savePageData(enhancedPageData, fileName);
            
            console.log(`✅ Extracted data for ${enhancedPageData.length} pages`);
            return enhancedPageData;
            
        } catch (error) {
            console.error('❌ Error extracting page data:', error.message);
            throw error;
        }
    }

    processPageData(rows) {
        return rows.map(row => ({
            page: row.keys[0],
            impressions: row.impressions || 0,
            clicks: row.clicks || 0,
            ctr: row.ctr || 0,
            position: row.position || 0
        }));
    }

    processPageQueryData(rows) {
        const pageQueries = {};
        
        rows.forEach(row => {
            const page = row.keys[0];
            const query = row.keys[1];
            
            if (!pageQueries[page]) {
                pageQueries[page] = [];
            }
            
            pageQueries[page].push({
                query: query,
                impressions: row.impressions || 0,
                clicks: row.clicks || 0,
                ctr: row.ctr || 0,
                position: row.position || 0
            });
        });
        
        return pageQueries;
    }

    combinePageData(pageData, pageQueryData) {
        return pageData.map(page => {
            const queries = pageQueryData[page.page] || [];
            
            // Sort queries by impressions
            queries.sort((a, b) => b.impressions - a.impressions);
            
            // Get page title from URL
            const title = this.getPageTitle(page.page);
            
            // Calculate additional metrics
            const topQueries = queries.slice(0, 10);
            const avgPosition = queries.length > 0 ? 
                queries.reduce((sum, q) => sum + q.position, 0) / queries.length : 0;
            
            return {
                ...page,
                title: title,
                pageType: this.getPageType(page.page),
                topQueries: topQueries,
                totalQueries: queries.length,
                avgPosition: Math.round(avgPosition * 10) / 10,
                ctr: Math.round(page.ctr * 10000) / 100, // Convert to percentage
                opportunityScore: this.calculateOpportunityScore(page, queries)
            };
        });
    }

    getPageTitle(url) {
        const titles = {
            'https://www.nextsteptherapy.ca/': 'Homepage',
            'https://www.nextsteptherapy.ca/about.html': 'About',
            'https://www.nextsteptherapy.ca/services.html': 'Services',
            'https://www.nextsteptherapy.ca/contact.html': 'Contact',
            'https://www.nextsteptherapy.ca/anxiety-therapy.html': 'Anxiety Therapy',
            'https://www.nextsteptherapy.ca/performance-anxiety.html': 'Performance Anxiety',
            'https://www.nextsteptherapy.ca/work-anxiety-and-stress.html': 'Work Anxiety & Stress',
            'https://www.nextsteptherapy.ca/mens-mental-health.html': 'Men\'s Mental Health',
            'https://www.nextsteptherapy.ca/stress-and-burnout.html': 'Stress & Burnout'
        };
        
        // Check for SEO pages
        if (url.includes('/seo/')) {
            const filename = url.split('/').pop().replace('.html', '');
            return filename.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        }
        
        return titles[url] || url.split('/').pop().replace('.html', '') || 'Unknown Page';
    }

    getPageType(url) {
        if (url === 'https://www.nextsteptherapy.ca/') return 'Homepage';
        if (url.includes('/seo/')) return 'SEO Page';
        if (url.includes('/services/')) return 'Service Page';
        if (url.includes('/virtual/')) return 'Virtual Service';
        if (url.includes('about') || url.includes('contact')) return 'Info Page';
        return 'Content Page';
    }

    calculateOpportunityScore(page, queries) {
        // Score based on impressions vs clicks, position, and potential
        let score = 0;
        
        // High impressions but low CTR = opportunity
        if (page.impressions > 100 && page.ctr < 3) score += 3;
        
        // Position 4-10 = good opportunity to reach top 3
        if (page.position > 3 && page.position <= 10) score += 4;
        
        // Position 11-20 = medium opportunity
        if (page.position > 10 && page.position <= 20) score += 2;
        
        // Many queries = content is relevant
        if (queries.length > 10) score += 2;
        
        // High impression volume
        if (page.impressions > 500) score += 2;
        
        return Math.min(score, 10); // Cap at 10
    }

    async savePageData(data, fileName) {
        const filePath = path.join(__dirname, 'gsc_data', `${fileName}.json`);
        console.log(`💾 Saving page data to ${filePath}...`);
        
        try {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log('✅ Page data saved successfully!');
        } catch (err) {
            console.error(`❌ Error saving page data: ${err.message}`);
            console.error(err);
        }
    }

    convertToCSV(data) {
        const headers = [
            'Page', 'Title', 'Page Type', 'Impressions', 'Clicks', 'CTR', 
            'Avg Position', 'Total Queries', 'Opportunity Score', 'Top Query'
        ];
        
        const rows = data.map(page => [
            page.page,
            page.title,
            page.pageType,
            page.impressions,
            page.clicks,
            page.ctr + '%',
            page.avgPosition,
            page.totalQueries,
            page.opportunityScore + '/10',
            page.topQueries[0]?.query || 'N/A'
        ]);
        
        return [headers, ...rows].map(row => 
            row.map(cell => `"${cell}"`).join(',')
        ).join('\n');
    }

    async generatePageReport(fileName) {
        console.log('\n📊 PAGE PERFORMANCE REPORT');
        console.log('==========================\n');
        
        const data = JSON.parse(fs.readFileSync(`gsc_data/${fileName}.json`, 'utf8'));
        
        // Sort by impressions
        data.sort((a, b) => b.impressions - a.impressions);
        
        console.log('🏆 TOP PERFORMING PAGES:');
        data.slice(0, 10).forEach((page, i) => {
            console.log(`${i + 1}. ${page.title}`);
            console.log(`   📊 ${page.impressions} impressions, ${page.clicks} clicks (${page.ctr}% CTR)`);
            console.log(`   📍 Position ${page.avgPosition} | ${page.totalQueries} keywords`);
            console.log(`   🎯 Opportunity Score: ${page.opportunityScore}/10`);
            console.log(`   🔍 Top Query: "${page.topQueries[0]?.query || 'N/A'}"`);
            console.log('');
        });
        
        // Opportunity analysis
        const opportunities = data.filter(p => p.opportunityScore >= 6).slice(0, 5);
        if (opportunities.length > 0) {
            console.log('🚀 HIGH OPPORTUNITY PAGES:');
            opportunities.forEach((page, i) => {
                console.log(`${i + 1}. ${page.title} (Score: ${page.opportunityScore}/10)`);
                console.log(`   💡 ${page.impressions} impressions at position ${page.avgPosition}`);
            });
            console.log('');
        }
        
        // Page type breakdown
        const pageTypes = {};
        data.forEach(page => {
            pageTypes[page.pageType] = (pageTypes[page.pageType] || 0) + 1;
        });
        
        console.log('📋 PAGE TYPE BREAKDOWN:');
        Object.entries(pageTypes).forEach(([type, count]) => {
            console.log(`   • ${type}: ${count} pages`);
        });
    }
}

// CLI interface
if (require.main === module) {
    const extractor = new EnhancedGSCExtractor();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'extract':
            const startDate = process.argv[3];
            const endDate = process.argv[4];
            const fileName = process.argv[5];

            if (!startDate || !endDate || !fileName) {
                console.error('Usage: node enhanced_gsc_page_extractor.js extract <YYYY-MM-DD_start> <YYYY-MM-DD_end> <output_filename_no_extension>');
                process.exit(1);
            }

            extractor.initialize()
                .then(() => extractor.extractPageLevelData(startDate, endDate, fileName))
                .then(() => extractor.generatePageReport(fileName))
                .catch(console.error);
            break;
        case 'report':
            const reportFileName = process.argv[3];
            if (!reportFileName) {
                console.log('Please provide the filename (without extension) of the data to report on.');
                console.log('Usage: node enhanced_gsc_page_extractor.js report <filename>');
                break;
            }
            extractor.generatePageReport(reportFileName).catch(console.error);
            break;
        default:
            console.log('📊 Enhanced GSC Page-Level Data Extractor');
            console.log('');
            console.log('Usage:');
            console.log('  node enhanced_gsc_page_extractor.js extract <start_date> <end_date> <filename> # Extract page-level data for a date range');
            console.log('  node enhanced_gsc_page_extractor.js report <filename>   # Generate performance report from a file');
            console.log('');
            console.log('Example:');
            console.log('  node enhanced_gsc_page_extractor.js extract 2024-05-01 2024-05-28 may_performance_data');
            console.log('');
            console.log('Output files will be saved in the "gsc_data" directory.');
    }
}

module.exports = EnhancedGSCExtractor;
