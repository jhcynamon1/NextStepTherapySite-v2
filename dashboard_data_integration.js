#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * SEO Dashboard Data Integration
 * 
 * This script combines data from multiple sources to power your dashboard:
 * - Google Search Console (GSC) - Rankings, impressions, clicks
 * - Google Analytics 4 (GA4) - Conversions, revenue, user behavior
 * - DataForSEO API - Keyword rankings and competitor data
 * 
 * Run this script to update your dashboard with fresh data.
 */

class DashboardDataIntegrator {
    constructor() {
        this.dataDir = 'dashboard_data';
        this.outputFile = 'dashboard_data.json';
        
        // Ensure data directory exists
        if (!fs.existsSync(this.dataDir)) {
            fs.mkdirSync(this.dataDir, { recursive: true });
        }
    }

    async integrateAllData() {
        console.log('🔄 Starting dashboard data integration...\n');
        
        try {
            // Load data from all sources
            const gscData = await this.loadGSCData();
            const ga4Data = await this.loadGA4Data();
            const rankingData = await this.loadRankingData();
            
            // Combine and analyze data
            const combinedData = this.combineDataSources(gscData, ga4Data, rankingData);
            
            // Generate insights
            const insights = this.generateInsights(combinedData);
            
            // Create final dashboard data
            const dashboardData = {
                lastUpdated: new Date().toISOString(),
                summary: this.calculateSummaryMetrics(combinedData),
                pages: combinedData.pages,
                trends: combinedData.trends,
                insights: insights,
                rawData: {
                    gscRecords: gscData.length,
                    ga4Records: ga4Data.length,
                    rankingRecords: rankingData.length
                }
            };
            
            // Save dashboard data
            this.saveDashboardData(dashboardData);
            
            console.log('✅ Dashboard data integration complete!\n');
            console.log(`📊 Summary:`);
            console.log(`   • ${dashboardData.pages.length} pages analyzed`);
            console.log(`   • ${dashboardData.summary.totalImpressions.toLocaleString()} total impressions`);
            console.log(`   • ${dashboardData.summary.totalClicks.toLocaleString()} total clicks`);
            console.log(`   • ${dashboardData.summary.totalConversions} conversions`);
            console.log(`   • $${dashboardData.summary.totalRevenue.toLocaleString()} revenue attributed`);
            console.log(`   • ${insights.length} AI insights generated\n`);
            
            return dashboardData;
            
        } catch (error) {
            console.error('❌ Error integrating dashboard data:', error.message);
            throw error;
        }
    }

    async loadGSCData() {
        console.log('📈 Loading Google Search Console data...');
        
        // Try to load from existing GSC export
        const gscFiles = [
            'gsc_data/latest_keyword_data.json',
            'gsc_data/search_console_data.json',
            'keyword_performance_data.json'
        ];
        
        for (const file of gscFiles) {
            if (fs.existsSync(file)) {
                try {
                    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
                    console.log(`✅ Loaded ${data.length} GSC records from ${file}`);
                    return data;
                } catch (error) {
                    console.log(`⚠️  Could not parse ${file}: ${error.message}`);
                }
            }
        }
        
        // If no GSC data found, create sample data structure
        console.log('⚠️  No GSC data found. Using sample data structure.');
        console.log('   Export your GSC data to: gsc_data/latest_keyword_data.json');
        
        return this.createSampleGSCData();
    }

    async loadGA4Data() {
        console.log('📊 Loading Google Analytics 4 data...');
        
        // Try to load from existing GA4 export
        const ga4Files = [
            'ga4_data/conversion_data.json',
            'ga4_data/analytics_data.json',
            'conversion_tracking_data.json'
        ];
        
        for (const file of ga4Files) {
            if (fs.existsSync(file)) {
                try {
                    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
                    console.log(`✅ Loaded ${data.length} GA4 records from ${file}`);
                    return data;
                } catch (error) {
                    console.log(`⚠️  Could not parse ${file}: ${error.message}`);
                }
            }
        }
        
        console.log('⚠️  No GA4 data found. Using sample data structure.');
        console.log('   Export your GA4 data to: ga4_data/conversion_data.json');
        
        return this.createSampleGA4Data();
    }

    async loadRankingData() {
        console.log('🔍 Loading ranking data...');
        
        // Try to load from DataForSEO or other ranking sources
        const rankingFiles = [
            'ranking_data/current_rankings.json',
            'dataforseo_rankings.json'
        ];
        
        for (const file of rankingFiles) {
            if (fs.existsSync(file)) {
                try {
                    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
                    console.log(`✅ Loaded ${data.length} ranking records from ${file}`);
                    return data;
                } catch (error) {
                    console.log(`⚠️  Could not parse ${file}: ${error.message}`);
                }
            }
        }
        
        console.log('⚠️  No ranking data found. Using sample data structure.');
        
        return this.createSampleRankingData();
    }

    combineDataSources(gscData, ga4Data, rankingData) {
        console.log('🔗 Combining data sources...');
        
        // Group data by page
        const pageMap = new Map();
        
        // Process GSC data
        gscData.forEach(row => {
            const page = this.normalizePage(row.page || row.landing_page);
            if (!pageMap.has(page)) {
                pageMap.set(page, {
                    page: page,
                    title: this.getPageTitle(page),
                    impressions: 0,
                    clicks: 0,
                    ctr: 0,
                    avgPosition: 0,
                    conversions: 0,
                    revenue: 0,
                    keywords: []
                });
            }
            
            const pageData = pageMap.get(page);
            pageData.impressions += parseInt(row.impressions) || 0;
            pageData.clicks += parseInt(row.clicks) || 0;
            pageData.keywords.push(row.query || row.keyword);
            
            // Calculate weighted average position
            if (row.position) {
                pageData.avgPosition = ((pageData.avgPosition * (pageData.keywords.length - 1)) + 
                                     parseFloat(row.position)) / pageData.keywords.length;
            }
        });
        
        // Process GA4 data
        ga4Data.forEach(row => {
            const page = this.normalizePage(row.landing_page || row.page_path);
            if (pageMap.has(page)) {
                const pageData = pageMap.get(page);
                pageData.conversions += parseInt(row.conversions) || 0;
                pageData.revenue += parseFloat(row.revenue) || 
                                  (parseInt(row.conversions) * 175); // Default $175 per conversion
            }
        });
        
        // Calculate CTR and conversion rates
        pageMap.forEach(pageData => {
            pageData.ctr = pageData.impressions > 0 ? 
                (pageData.clicks / pageData.impressions * 100) : 0;
            pageData.conversionRate = pageData.clicks > 0 ? 
                (pageData.conversions / pageData.clicks * 100) : 0;
            pageData.avgPosition = Math.round(pageData.avgPosition * 10) / 10;
            pageData.ctr = Math.round(pageData.ctr * 100) / 100;
            pageData.conversionRate = Math.round(pageData.conversionRate * 100) / 100;
        });
        
        const pages = Array.from(pageMap.values())
            .filter(page => page.impressions > 0)
            .sort((a, b) => b.revenue - a.revenue);
        
        // Generate trends data (simplified for now)
        const trends = this.generateTrendsData(pages);
        
        return { pages, trends };
    }

    calculateSummaryMetrics(combinedData) {
        const { pages } = combinedData;
        
        const summary = {
            totalImpressions: pages.reduce((sum, p) => sum + p.impressions, 0),
            totalClicks: pages.reduce((sum, p) => sum + p.clicks, 0),
            totalConversions: pages.reduce((sum, p) => sum + p.conversions, 0),
            totalRevenue: pages.reduce((sum, p) => sum + p.revenue, 0),
            averageCTR: 0,
            averagePosition: 0,
            changes: {
                impressions: Math.random() * 20 - 10, // Placeholder - calculate from historical data
                clicks: Math.random() * 20 - 10,
                ctr: Math.random() * 10 - 5,
                conversions: Math.random() * 30 - 15,
                revenue: Math.random() * 30 - 15,
                position: Math.random() * 4 - 2
            }
        };
        
        summary.averageCTR = summary.totalImpressions > 0 ? 
            (summary.totalClicks / summary.totalImpressions * 100) : 0;
        
        const positionSum = pages.reduce((sum, p) => sum + (p.avgPosition * p.impressions), 0);
        summary.averagePosition = summary.totalImpressions > 0 ? 
            positionSum / summary.totalImpressions : 0;
        
        // Round values
        summary.averageCTR = Math.round(summary.averageCTR * 100) / 100;
        summary.averagePosition = Math.round(summary.averagePosition * 10) / 10;
        
        return summary;
    }

    generateInsights(combinedData) {
        const insights = [];
        const { pages } = combinedData;
        
        // High opportunity pages (high impressions, low CTR)
        const highOpportunity = pages.filter(p => p.impressions > 1000 && p.ctr < 3);
        if (highOpportunity.length > 0) {
            const page = highOpportunity[0];
            insights.push({
                type: 'High Opportunity',
                text: `Your "${page.title}" page has high impressions (${page.impressions.toLocaleString()}) but low CTR (${page.ctr}%). Improving the title and meta description could increase clicks by 40-60%.`
            });
        }
        
        // Top performers
        const topConverter = pages.find(p => p.conversionRate > 0);
        if (topConverter) {
            insights.push({
                type: 'Top Performer',
                text: `The "${topConverter.title}" page is your best converter at ${topConverter.conversionRate}%. Consider creating similar content around related topics.`
            });
        }
        
        // Ranking opportunities
        const rankingOpportunity = pages.filter(p => p.avgPosition > 3 && p.avgPosition < 10 && p.impressions > 500);
        if (rankingOpportunity.length > 0) {
            const page = rankingOpportunity[0];
            insights.push({
                type: 'Ranking Opportunity',
                text: `You're ranking #${page.avgPosition} for "${page.title}" keywords. With some content optimization, you could reach top 3 and increase traffic by 35%.`
            });
        }
        
        // Revenue insights
        const totalRevenue = pages.reduce((sum, p) => sum + p.revenue, 0);
        if (totalRevenue > 0) {
            const topRevenuePage = pages[0];
            insights.push({
                type: 'Revenue Driver',
                text: `Your "${topRevenuePage.title}" page generates $${topRevenuePage.revenue.toLocaleString()} (${Math.round(topRevenuePage.revenue / totalRevenue * 100)}% of total revenue). Double down on similar content.`
            });
        }
        
        return insights;
    }

    // Helper methods
    normalizePage(page) {
        if (!page) return '/';
        return page.replace(/^https?:\/\/[^\/]+/, '').replace(/\/$/, '') || '/';
    }

    getPageTitle(page) {
        // Extract title from page path - you could enhance this by reading actual HTML titles
        const titles = {
            '/seo/cant-sleep-anxiety.html': 'Can\'t Sleep Because of Anxiety',
            '/seo/university-anxiety.html': 'University Anxiety Support',
            '/seo/work-anxiety-and-stress.html': 'Work Anxiety and Stress',
            '/': 'Homepage'
        };
        
        return titles[page] || page.split('/').pop().replace('.html', '').replace(/-/g, ' ');
    }

    generateTrendsData(pages) {
        // Generate sample trends data - replace with actual historical data
        const trends = [];
        const today = new Date();
        
        for (let i = 29; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            
            trends.push({
                date: date.toISOString().split('T')[0],
                impressions: Math.floor(Math.random() * 2000) + 1000,
                clicks: Math.floor(Math.random() * 100) + 30,
                conversions: Math.floor(Math.random() * 5)
            });
        }
        
        return trends;
    }

    saveDashboardData(data) {
        const outputPath = path.join(this.dataDir, this.outputFile);
        fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
        console.log(`💾 Dashboard data saved to: ${outputPath}`);
    }

    // Sample data generators for when real data isn't available
    createSampleGSCData() {
        return [
            {
                page: '/seo/cant-sleep-anxiety.html',
                query: 'cant sleep anxiety',
                impressions: 8450,
                clicks: 412,
                position: 3.2
            },
            {
                page: '/seo/university-anxiety.html',
                query: 'university anxiety',
                impressions: 6230,
                clicks: 287,
                position: 5.8
            }
        ];
    }

    createSampleGA4Data() {
        return [
            {
                landing_page: '/seo/cant-sleep-anxiety.html',
                conversions: 8,
                revenue: 1400
            },
            {
                landing_page: '/seo/university-anxiety.html',
                conversions: 5,
                revenue: 875
            }
        ];
    }

    createSampleRankingData() {
        return [
            {
                page: '/seo/cant-sleep-anxiety.html',
                keyword: 'cant sleep anxiety',
                position: 3,
                search_volume: 2400
            }
        ];
    }

    // Method to update dashboard HTML with real data
    updateDashboardHTML() {
        const dashboardPath = 'seo_performance_dashboard.html';
        const dataPath = path.join(this.dataDir, this.outputFile);
        
        if (!fs.existsSync(dataPath)) {
            console.log('⚠️  No dashboard data found. Run integration first.');
            return;
        }
        
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        
        // Update the dashboard HTML to load real data
        let html = fs.readFileSync(dashboardPath, 'utf8');
        
        // Replace the loadSampleData function with real data
        const realDataScript = `
        async function loadSampleData() {
            // Load real data from integration
            dashboardData = ${JSON.stringify(data, null, 12)};
        }`;
        
        html = html.replace(/async function loadSampleData\(\) \{[\s\S]*?\}/, realDataScript);
        
        // Save updated dashboard
        fs.writeFileSync('seo_dashboard_live.html', html);
        console.log('✅ Live dashboard created: seo_dashboard_live.html');
    }
}

// CLI interface
if (require.main === module) {
    const integrator = new DashboardDataIntegrator();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'integrate':
            integrator.integrateAllData()
                .then(() => integrator.updateDashboardHTML())
                .catch(console.error);
            break;
        case 'update-html':
            integrator.updateDashboardHTML();
            break;
        default:
            console.log('📊 SEO Dashboard Data Integration');
            console.log('');
            console.log('Usage:');
            console.log('  node dashboard_data_integration.js integrate    # Integrate all data sources');
            console.log('  node dashboard_data_integration.js update-html  # Update dashboard HTML');
            console.log('');
            console.log('Data Sources:');
            console.log('  • GSC: gsc_data/latest_keyword_data.json');
            console.log('  • GA4: ga4_data/conversion_data.json');
            console.log('  • Rankings: ranking_data/current_rankings.json');
    }
}

module.exports = DashboardDataIntegrator;
