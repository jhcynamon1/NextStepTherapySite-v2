#!/usr/bin/env node

/**
 * Missing Queries SEO Strategy Implementation
 * Based on the viral ecom SEO tweet - adapted for therapy services
 * 
 * This script:
 * 1. Analyzes GSC data to find top performing pages
 * 2. Identifies queries each page ranks for but aren't in the content
 * 3. Suggests content optimizations and internal linking opportunities
 * 4. Generates actionable SEO recommendations
 */

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Configuration
const CONFIG = {
    GSC_DATA_DIR: './gsc_data',
    PAGES_DIR: './',
    OUTPUT_FILE: './missing_queries_analysis.json',
    MIN_IMPRESSIONS: 10, // Minimum impressions to consider a query
    MIN_POSITION: 50,    // Only analyze queries ranking in top 50
    TOP_PAGES_LIMIT: 20  // Number of top pages to analyze
};

class MissingQueriesAnalyzer {
    constructor() {
        this.gscData = [];
        this.pageContent = new Map();
        this.analysis = {
            topPages: [],
            missingQueries: new Map(),
            internalLinkOpportunities: [],
            recommendations: []
        };
    }

    async run() {
        console.log('🔍 Starting Missing Queries Analysis...\n');
        
        try {
            await this.loadGSCData();
            await this.identifyTopPages();
            await this.loadPageContent();
            await this.findMissingQueries();
            await this.generateInternalLinkOpportunities();
            await this.generateRecommendations();
            await this.saveResults();
            
            console.log('✅ Analysis complete! Check missing_queries_analysis.json');
            this.printSummary();
            
        } catch (error) {
            console.error('❌ Error:', error.message);
        }
    }

    async loadGSCData() {
        console.log('📊 Loading GSC data...');
        
        const jsonFile = path.join(CONFIG.GSC_DATA_DIR, 'latest_keyword_data.json');
        
        if (!fs.existsSync(jsonFile)) {
            throw new Error('No GSC JSON file found. Run gsc_automated_extractor.js first.');
        }
        
        console.log(`📁 Using: ${jsonFile}`);
        
        const rawData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
        
        // Filter and process data
        rawData.forEach(row => {
            const impressions = parseInt(row.impressions) || 0;
            const position = parseFloat(row.position) || 100;
            const clicks = parseInt(row.clicks) || 0;
            
            if (impressions >= CONFIG.MIN_IMPRESSIONS && position <= CONFIG.MIN_POSITION) {
                this.gscData.push({
                    query: row.query?.toLowerCase().trim(),
                    page: row.page?.replace('https://nextsteptherapy.ca', '') || row.page,
                    impressions,
                    clicks,
                    position,
                    ctr: parseFloat(row.ctr) || 0
                });
            }
        });
        
        console.log(`✅ Loaded ${this.gscData.length} qualifying queries`);
    }

    async identifyTopPages() {
        console.log('🏆 Identifying top performing pages...');
        
        // Group by page and calculate total performance
        const pageStats = new Map();
        
        this.gscData.forEach(row => {
            if (!pageStats.has(row.page)) {
                pageStats.set(row.page, {
                    page: row.page,
                    totalImpressions: 0,
                    totalClicks: 0,
                    queries: [],
                    avgPosition: 0
                });
            }
            
            const stats = pageStats.get(row.page);
            stats.totalImpressions += row.impressions;
            stats.totalClicks += row.clicks;
            stats.queries.push(row);
        });
        
        // Calculate average position and sort by performance
        pageStats.forEach(stats => {
            const totalPosition = stats.queries.reduce((sum, q) => sum + (q.position * q.impressions), 0);
            stats.avgPosition = totalPosition / stats.totalImpressions;
        });
        
        // Sort by total clicks + impressions (weighted performance)
        this.analysis.topPages = Array.from(pageStats.values())
            .sort((a, b) => (b.totalClicks * 10 + b.totalImpressions) - (a.totalClicks * 10 + a.totalImpressions))
            .slice(0, CONFIG.TOP_PAGES_LIMIT);
        
        console.log(`✅ Identified ${this.analysis.topPages.length} top pages`);
        
        // Show top 5
        console.log('\n🔝 Top 5 Pages:');
        this.analysis.topPages.slice(0, 5).forEach((page, i) => {
            console.log(`${i + 1}. ${page.page} - ${page.totalClicks} clicks, ${page.totalImpressions} impressions`);
        });
    }

    async loadPageContent() {
        console.log('\n📄 Loading page content...');
        
        for (const pageStats of this.analysis.topPages) {
            const filePath = pageStats.page.startsWith('/') 
                ? path.join(CONFIG.PAGES_DIR, pageStats.page.substring(1))
                : path.join(CONFIG.PAGES_DIR, pageStats.page);
            
            try {
                if (fs.existsSync(filePath)) {
                    const content = fs.readFileSync(filePath, 'utf8').toLowerCase();
                    this.pageContent.set(pageStats.page, content);
                    console.log(`✅ Loaded: ${pageStats.page}`);
                } else {
                    console.log(`⚠️  File not found: ${filePath}`);
                }
            } catch (error) {
                console.log(`❌ Error loading ${pageStats.page}: ${error.message}`);
            }
        }
    }

    async findMissingQueries() {
        console.log('\n🔍 Finding missing queries...');
        
        for (const pageStats of this.analysis.topPages) {
            const content = this.pageContent.get(pageStats.page);
            if (!content) continue;
            
            const missingQueries = [];
            
            pageStats.queries.forEach(queryData => {
                const query = queryData.query;
                const queryWords = query.split(' ');
                
                // Check if query appears in content (exact match or partial)
                const exactMatch = content.includes(query);
                const partialMatch = queryWords.every(word => 
                    word.length > 2 && content.includes(word)
                );
                
                // Count occurrences
                const exactCount = (content.match(new RegExp(query, 'g')) || []).length;
                const isUnderOptimized = exactCount <= 1;
                
                if (!exactMatch || isUnderOptimized) {
                    missingQueries.push({
                        query,
                        impressions: queryData.impressions,
                        clicks: queryData.clicks,
                        position: queryData.position,
                        exactMatch,
                        partialMatch,
                        exactCount,
                        priority: this.calculatePriority(queryData)
                    });
                }
            });
            
            // Sort by priority (high impressions, good position, low clicks = opportunity)
            missingQueries.sort((a, b) => b.priority - a.priority);
            
            this.analysis.missingQueries.set(pageStats.page, missingQueries);
            
            console.log(`📊 ${pageStats.page}: ${missingQueries.length} missing/under-optimized queries`);
        }
    }

    calculatePriority(queryData) {
        // Higher impressions + better position + lower CTR = higher opportunity
        const impressionScore = Math.log(queryData.impressions + 1) * 10;
        const positionScore = (51 - queryData.position) * 2;
        const ctrScore = queryData.ctr < 0.05 ? 20 : 0; // Low CTR = opportunity
        
        return impressionScore + positionScore + ctrScore;
    }

    async generateInternalLinkOpportunities() {
        console.log('\n🔗 Generating internal link opportunities...');
        
        // For each top page, find other pages that could link to it
        this.analysis.topPages.forEach(targetPage => {
            const targetQueries = this.analysis.missingQueries.get(targetPage.page) || [];
            const topTargetQueries = targetQueries.slice(0, 5);
            
            if (topTargetQueries.length === 0) return;
            
            // Find other pages that could link to this one
            const linkingSources = this.analysis.topPages
                .filter(sourcePage => sourcePage.page !== targetPage.page)
                .slice(0, 8) // Top 8 other pages
                .map(sourcePage => ({
                    sourcePage: sourcePage.page,
                    targetPage: targetPage.page,
                    suggestedAnchor: this.generateAnchorText(topTargetQueries[0].query),
                    targetQueries: topTargetQueries.slice(0, 3).map(q => q.query)
                }));
            
            this.analysis.internalLinkOpportunities.push(...linkingSources);
        });
        
        console.log(`✅ Generated ${this.analysis.internalLinkOpportunities.length} internal link opportunities`);
    }

    generateAnchorText(query) {
        // Convert query to natural anchor text
        const words = query.split(' ');
        return words.map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    async generateRecommendations() {
        console.log('\n💡 Generating recommendations...');
        
        this.analysis.topPages.forEach(pageStats => {
            const missingQueries = this.analysis.missingQueries.get(pageStats.page) || [];
            const topMissing = missingQueries.slice(0, 10);
            
            if (topMissing.length > 0) {
                this.analysis.recommendations.push({
                    page: pageStats.page,
                    priority: 'HIGH',
                    action: 'Add Missing Queries to Content',
                    details: {
                        topMissingQueries: topMissing.slice(0, 5).map(q => ({
                            query: q.query,
                            impressions: q.impressions,
                            position: q.position,
                            suggestion: this.generateContentSuggestion(q.query)
                        })),
                        suggestedHeadings: this.generateHeadingSuggestions(topMissing.slice(0, 3)),
                        internalLinksNeeded: this.analysis.internalLinkOpportunities
                            .filter(link => link.targetPage === pageStats.page)
                            .length
                    }
                });
            }
        });
    }

    generateContentSuggestion(query) {
        if (query.includes('how')) return `Add H3: "How ${query.replace('how ', '')}"`;
        if (query.includes('what')) return `Add H3: "${query.charAt(0).toUpperCase() + query.slice(1)}"`;
        if (query.includes('best')) return `Add section about quality/effectiveness`;
        if (query.includes('cost') || query.includes('price')) return `Add pricing/insurance info`;
        return `Include "${query}" in content, preferably in headings`;
    }

    generateHeadingSuggestions(queries) {
        return queries.map(q => {
            const query = q.query;
            if (query.includes('how')) return `H2: How ${query.replace('how ', '').charAt(0).toUpperCase() + query.replace('how ', '').slice(1)}`;
            if (query.includes('what')) return `H2: ${query.charAt(0).toUpperCase() + query.slice(1)}`;
            if (query.includes('therapy') && query.includes('toronto')) return `H2: Professional ${query.charAt(0).toUpperCase() + query.slice(1)} Services`;
            return `H3: ${query.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`;
        });
    }

    async saveResults() {
        const output = {
            generatedAt: new Date().toISOString(),
            summary: {
                totalPagesAnalyzed: this.analysis.topPages.length,
                totalMissingQueries: Array.from(this.analysis.missingQueries.values()).reduce((sum, queries) => sum + queries.length, 0),
                totalInternalLinkOpportunities: this.analysis.internalLinkOpportunities.length,
                totalRecommendations: this.analysis.recommendations.length
            },
            topPages: this.analysis.topPages,
            missingQueries: Object.fromEntries(this.analysis.missingQueries),
            internalLinkOpportunities: this.analysis.internalLinkOpportunities,
            recommendations: this.analysis.recommendations
        };
        
        fs.writeFileSync(CONFIG.OUTPUT_FILE, JSON.stringify(output, null, 2));
    }

    printSummary() {
        console.log('\n📋 SUMMARY:');
        console.log(`📊 Pages analyzed: ${this.analysis.topPages.length}`);
        console.log(`🔍 Missing queries found: ${Array.from(this.analysis.missingQueries.values()).reduce((sum, queries) => sum + queries.length, 0)}`);
        console.log(`🔗 Internal link opportunities: ${this.analysis.internalLinkOpportunities.length}`);
        console.log(`💡 Recommendations generated: ${this.analysis.recommendations.length}`);
        
        console.log('\n🎯 TOP RECOMMENDATIONS:');
        this.analysis.recommendations.slice(0, 3).forEach((rec, i) => {
            console.log(`\n${i + 1}. ${rec.page}`);
            console.log(`   Action: ${rec.action}`);
            if (rec.details.topMissingQueries) {
                console.log(`   Top missing query: "${rec.details.topMissingQueries[0].query}" (${rec.details.topMissingQueries[0].impressions} impressions)`);
            }
        });
        
        console.log('\n🚀 NEXT STEPS:');
        console.log('1. Review missing_queries_analysis.json');
        console.log('2. Update page content with suggested headings');
        console.log('3. Add internal links between top pages');
        console.log('4. Monitor GSC for improvements');
    }
}

// Run the analysis
if (require.main === module) {
    const analyzer = new MissingQueriesAnalyzer();
    analyzer.run();
}

module.exports = MissingQueriesAnalyzer;
