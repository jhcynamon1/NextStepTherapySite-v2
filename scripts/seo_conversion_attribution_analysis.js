#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * SEO Conversion Attribution Analysis
 * 
 * This script analyzes the relationship between:
 * - GSC keyword performance (impressions, clicks, positions)
 * - GA4 conversion events (generate_lead, phone_call)
 * - Revenue attribution per SEO page
 * 
 * Run this weekly to optimize your highest-converting SEO content.
 */

class SEOAttributionAnalyzer {
    constructor() {
        this.gscData = [];
        this.ga4Data = [];
        this.conversionValue = 175; // CAD per conversion
        this.results = [];
    }

    // Load GSC data (you'll export this from GSC or use the API)
    loadGSCData(filePath = 'gsc_data/latest_keyword_data.json') {
        try {
            if (fs.existsSync(filePath)) {
                this.gscData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                console.log(`✅ Loaded ${this.gscData.length} GSC keyword records`);
            } else {
                console.log(`⚠️  GSC data file not found: ${filePath}`);
                console.log('   Export keyword data from GSC or run the GSC extractor script');
            }
        } catch (error) {
            console.error('❌ Error loading GSC data:', error.message);
        }
    }

    // Load GA4 data (you'll export this from GA4 or use the API)
    loadGA4Data(filePath = 'ga4_data/conversion_data.json') {
        try {
            if (fs.existsSync(filePath)) {
                this.ga4Data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                console.log(`✅ Loaded ${this.ga4Data.length} GA4 conversion records`);
            } else {
                console.log(`⚠️  GA4 data file not found: ${filePath}`);
                console.log('   Export conversion data from GA4 or use the Reporting API');
            }
        } catch (error) {
            console.error('❌ Error loading GA4 data:', error.message);
        }
    }

    // Analyze attribution between GSC keywords and GA4 conversions
    analyzeAttribution() {
        console.log('\n🔍 Analyzing SEO conversion attribution...\n');

        // Group GSC data by landing page
        const gscByPage = this.groupGSCByPage();
        
        // Group GA4 data by landing page
        const ga4ByPage = this.groupGA4ByPage();

        // Calculate attribution for each page
        Object.keys(gscByPage).forEach(page => {
            const gscMetrics = gscByPage[page];
            const ga4Metrics = ga4ByPage[page] || { conversions: 0, revenue: 0 };

            const analysis = {
                page: page,
                keywords: gscMetrics.keywords.length,
                totalImpressions: gscMetrics.totalImpressions,
                totalClicks: gscMetrics.totalClicks,
                avgPosition: gscMetrics.avgPosition,
                ctr: (gscMetrics.totalClicks / gscMetrics.totalImpressions * 100).toFixed(2),
                conversions: ga4Metrics.conversions,
                revenue: ga4Metrics.revenue,
                conversionRate: gscMetrics.totalClicks > 0 ? 
                    (ga4Metrics.conversions / gscMetrics.totalClicks * 100).toFixed(2) : '0.00',
                revenuePerClick: gscMetrics.totalClicks > 0 ? 
                    (ga4Metrics.revenue / gscMetrics.totalClicks).toFixed(2) : '0.00',
                opportunityScore: this.calculateOpportunityScore(gscMetrics, ga4Metrics)
            };

            this.results.push(analysis);
        });

        // Sort by opportunity score (highest first)
        this.results.sort((a, b) => b.opportunityScore - a.opportunityScore);
    }

    groupGSCByPage() {
        const grouped = {};
        
        this.gscData.forEach(row => {
            const page = row.page || row.landing_page;
            if (!grouped[page]) {
                grouped[page] = {
                    keywords: [],
                    totalImpressions: 0,
                    totalClicks: 0,
                    positions: []
                };
            }
            
            grouped[page].keywords.push(row.query || row.keyword);
            grouped[page].totalImpressions += parseInt(row.impressions) || 0;
            grouped[page].totalClicks += parseInt(row.clicks) || 0;
            grouped[page].positions.push(parseFloat(row.position) || 0);
        });

        // Calculate average positions
        Object.keys(grouped).forEach(page => {
            const positions = grouped[page].positions.filter(p => p > 0);
            grouped[page].avgPosition = positions.length > 0 ? 
                (positions.reduce((a, b) => a + b, 0) / positions.length).toFixed(1) : 0;
        });

        return grouped;
    }

    groupGA4ByPage() {
        const grouped = {};
        
        this.ga4Data.forEach(row => {
            const page = row.landing_page || row.page_path;
            if (!grouped[page]) {
                grouped[page] = {
                    conversions: 0,
                    revenue: 0
                };
            }
            
            grouped[page].conversions += parseInt(row.conversions) || 0;
            grouped[page].revenue += parseFloat(row.revenue) || (parseInt(row.conversions) * this.conversionValue);
        });

        return grouped;
    }

    calculateOpportunityScore(gscMetrics, ga4Metrics) {
        // Opportunity score based on:
        // - High impressions (visibility potential)
        // - Good position (ranking strength)
        // - Low conversion rate (improvement potential)
        
        const impressionScore = Math.min(gscMetrics.totalImpressions / 1000, 10);
        const positionScore = gscMetrics.avgPosition > 0 ? (20 - gscMetrics.avgPosition) / 2 : 0;
        const conversionGap = gscMetrics.totalClicks > 0 ? 
            Math.max(0, 5 - (ga4Metrics.conversions / gscMetrics.totalClicks * 100)) : 5;
        
        return (impressionScore + positionScore + conversionGap).toFixed(1);
    }

    generateReport() {
        console.log('📊 SEO CONVERSION ATTRIBUTION REPORT');
        console.log('=====================================\n');

        if (this.results.length === 0) {
            console.log('⚠️  No data to analyze. Please ensure GSC and GA4 data files are available.\n');
            this.showSampleDataFormat();
            return;
        }

        // Summary metrics
        const totalImpressions = this.results.reduce((sum, r) => sum + r.totalImpressions, 0);
        const totalClicks = this.results.reduce((sum, r) => sum + r.totalClicks, 0);
        const totalConversions = this.results.reduce((sum, r) => sum + r.conversions, 0);
        const totalRevenue = this.results.reduce((sum, r) => sum + r.revenue, 0);

        console.log('📈 SUMMARY METRICS:');
        console.log(`Total Impressions: ${totalImpressions.toLocaleString()}`);
        console.log(`Total Clicks: ${totalClicks.toLocaleString()}`);
        console.log(`Total Conversions: ${totalConversions}`);
        console.log(`Total Revenue: $${totalRevenue.toLocaleString()} CAD`);
        console.log(`Overall CTR: ${(totalClicks / totalImpressions * 100).toFixed(2)}%`);
        console.log(`Overall Conversion Rate: ${(totalConversions / totalClicks * 100).toFixed(2)}%`);
        console.log(`Revenue per Click: $${(totalRevenue / totalClicks).toFixed(2)}\n`);

        // Top performing pages
        console.log('🏆 TOP 10 HIGHEST OPPORTUNITY PAGES:');
        console.log('(Ranked by optimization potential)\n');
        
        this.results.slice(0, 10).forEach((result, index) => {
            console.log(`${index + 1}. ${result.page}`);
            console.log(`   Keywords: ${result.keywords} | Impressions: ${result.totalImpressions.toLocaleString()}`);
            console.log(`   Clicks: ${result.totalClicks} | Position: ${result.avgPosition} | CTR: ${result.ctr}%`);
            console.log(`   Conversions: ${result.conversions} | Rate: ${result.conversionRate}% | Revenue: $${result.revenue}`);
            console.log(`   Opportunity Score: ${result.opportunityScore}/20\n`);
        });

        // Action recommendations
        this.generateRecommendations();
        
        // Save detailed report
        this.saveDetailedReport();
    }

    generateRecommendations() {
        console.log('💡 OPTIMIZATION RECOMMENDATIONS:\n');

        const highImpressionLowCTR = this.results.filter(r => r.totalImpressions > 1000 && r.ctr < 3);
        const highClicksLowConversion = this.results.filter(r => r.totalClicks > 50 && r.conversionRate < 2);
        const goodPositionLowCTR = this.results.filter(r => r.avgPosition < 5 && r.ctr < 5);

        if (highImpressionLowCTR.length > 0) {
            console.log('🎯 IMPROVE TITLE/META DESCRIPTIONS (High impressions, low CTR):');
            highImpressionLowCTR.slice(0, 5).forEach(page => {
                console.log(`   • ${page.page} - ${page.totalImpressions} impressions, ${page.ctr}% CTR`);
            });
            console.log('');
        }

        if (highClicksLowConversion.length > 0) {
            console.log('🔄 OPTIMIZE CONVERSION FUNNEL (High clicks, low conversions):');
            highClicksLowConversion.slice(0, 5).forEach(page => {
                console.log(`   • ${page.page} - ${page.totalClicks} clicks, ${page.conversionRate}% conversion`);
            });
            console.log('');
        }

        if (goodPositionLowCTR.length > 0) {
            console.log('📝 ENHANCE CONTENT APPEAL (Good position, low CTR):');
            goodPositionLowCTR.slice(0, 5).forEach(page => {
                console.log(`   • ${page.page} - Position ${page.avgPosition}, ${page.ctr}% CTR`);
            });
            console.log('');
        }
    }

    saveDetailedReport() {
        const reportData = {
            generatedAt: new Date().toISOString(),
            summary: {
                totalPages: this.results.length,
                totalImpressions: this.results.reduce((sum, r) => sum + r.totalImpressions, 0),
                totalClicks: this.results.reduce((sum, r) => sum + r.totalClicks, 0),
                totalConversions: this.results.reduce((sum, r) => sum + r.conversions, 0),
                totalRevenue: this.results.reduce((sum, r) => sum + r.revenue, 0)
            },
            pages: this.results
        };

        const fileName = `seo_attribution_report_${new Date().toISOString().split('T')[0]}.json`;
        fs.writeFileSync(fileName, JSON.stringify(reportData, null, 2));
        console.log(`💾 Detailed report saved: ${fileName}\n`);
    }

    showSampleDataFormat() {
        console.log('📋 SAMPLE DATA FORMAT:\n');
        
        console.log('GSC Data (gsc_data/latest_keyword_data.json):');
        console.log(JSON.stringify([
            {
                "query": "anxiety therapy toronto",
                "page": "/seo/anxiety-therapy-toronto.html",
                "impressions": 1250,
                "clicks": 48,
                "position": 3.2
            }
        ], null, 2));
        
        console.log('\nGA4 Data (ga4_data/conversion_data.json):');
        console.log(JSON.stringify([
            {
                "landing_page": "/seo/anxiety-therapy-toronto.html",
                "conversions": 3,
                "revenue": 525
            }
        ], null, 2));
        
        console.log('\n📖 HOW TO GET THIS DATA:');
        console.log('1. GSC: Use the GSC extractor script or export from Search Console');
        console.log('2. GA4: Export from GA4 or use the Reporting API');
        console.log('3. Run this script weekly for optimization insights\n');
    }

    run() {
        console.log('🚀 Starting SEO Conversion Attribution Analysis...\n');
        
        this.loadGSCData();
        this.loadGA4Data();
        this.analyzeAttribution();
        this.generateReport();
        
        console.log('✨ Analysis complete! Use insights to optimize your highest-opportunity pages.\n');
    }
}

// Run the analysis
const analyzer = new SEOAttributionAnalyzer();
analyzer.run();
