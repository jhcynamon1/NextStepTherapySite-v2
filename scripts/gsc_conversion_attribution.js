#!/usr/bin/env node

/**
 * GSC to Conversion Attribution System
 * Connects Google Search Console keyword data to actual therapy conversions
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

class GSCConversionAttributor {
  constructor() {
    this.outputDir = './gsc_data';
    this.setupDirectories();
  }

  setupDirectories() {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  /**
   * Main attribution analysis
   */
  async runAttributionAnalysis() {
    console.log('🔍 Starting GSC-to-Conversion Attribution Analysis...\n');

    try {
      // Get GSC keyword data
      console.log('📊 Fetching GSC keyword data...');
      const gscData = await this.getGSCKeywordData();
      
      // Get conversion data (simulated - replace with your GA4 API)
      console.log('💰 Fetching conversion data...');
      const conversionData = await this.getConversionData();
      
      // Perform attribution matching
      console.log('🔗 Matching keywords to conversions...');
      const attributionResults = this.performAttribution(gscData, conversionData);
      
      // Generate reports
      console.log('📋 Generating attribution reports...');
      await this.generateReports(attributionResults);
      
      console.log('\n✅ Attribution analysis complete!');
      console.log(`📁 Check ${this.outputDir} for detailed reports`);

    } catch (error) {
      console.error('❌ Attribution analysis failed:', error.message);
      throw error;
    }
  }

  /**
   * Get GSC keyword data using existing extractor
   */
  async getGSCKeywordData() {
    try {
      // Use existing GSC extractor
      const GSCExtractor = require('./gsc_automated_extractor.js');
      const extractor = new GSCExtractor();
      
      await extractor.authenticate();
      const rawData = await extractor.extractKeywordData();
      
      if (!rawData || rawData.length === 0) {
        throw new Error('No GSC data available');
      }

      // Process for attribution
      const processedData = rawData.map(row => ({
        keyword: row.keys[0],
        country: row.keys[1],
        device: row.keys[2],
        impressions: row.impressions || 0,
        clicks: row.clicks || 0,
        ctr: row.ctr || 0,
        position: row.position || 100,
        date: new Date().toISOString().split('T')[0] // Today's date
      }));

      console.log(`✅ Retrieved ${processedData.length} GSC keyword records`);
      return processedData;

    } catch (error) {
      console.error('❌ Failed to get GSC data:', error.message);
      throw error;
    }
  }

  /**
   * Get conversion data (replace with actual GA4 API integration)
   */
  async getConversionData() {
    // Simulated conversion data - replace with actual GA4 API calls
    const mockConversions = [
      {
        id: 'conv_001',
        date: '2025-01-15',
        landing_page: '/anxiety-therapy',
        conversion_type: 'form_submission',
        therapy_type: 'anxiety_therapy',
        value: 150,
        session_duration: 240000, // 4 minutes
        page_views: 3,
        user_intent: 'high_intent'
      },
      {
        id: 'conv_002', 
        date: '2025-01-15',
        landing_page: '/virtual-therapy-ontario',
        conversion_type: 'phone_call',
        therapy_type: 'virtual_therapy',
        value: 150,
        session_duration: 180000, // 3 minutes
        page_views: 2,
        user_intent: 'medium_intent'
      },
      {
        id: 'conv_003',
        date: '2025-01-15', 
        landing_page: '/work-stress-management',
        conversion_type: 'booking_start',
        therapy_type: 'work_stress_therapy',
        value: 200,
        session_duration: 300000, // 5 minutes
        page_views: 4,
        user_intent: 'high_intent'
      },
      {
        id: 'conv_004',
        date: '2025-01-15',
        landing_page: '/university-student-anxiety',
        conversion_type: 'form_submission',
        therapy_type: 'student_therapy', 
        value: 150,
        session_duration: 150000, // 2.5 minutes
        page_views: 2,
        user_intent: 'medium_intent'
      },
      {
        id: 'conv_005',
        date: '2025-01-15',
        landing_page: '/cant-sleep-anxiety',
        conversion_type: 'phone_call',
        therapy_type: 'anxiety_therapy',
        value: 150,
        session_duration: 420000, // 7 minutes
        page_views: 5,
        user_intent: 'high_intent'
      }
    ];

    console.log(`✅ Retrieved ${mockConversions.length} conversion records`);
    return mockConversions;
  }

  /**
   * Perform keyword-to-conversion attribution
   */
  performAttribution(gscData, conversions) {
    const attributionResults = [];

    conversions.forEach(conversion => {
      // Find keywords that could have driven this conversion
      const candidateKeywords = this.findCandidateKeywords(gscData, conversion);
      
      candidateKeywords.forEach(keyword => {
        const attributionScore = this.calculateAttributionScore(keyword, conversion);
        
        attributionResults.push({
          conversion_id: conversion.id,
          keyword: keyword.keyword,
          landing_page: conversion.landing_page,
          therapy_type: conversion.therapy_type,
          conversion_type: conversion.conversion_type,
          conversion_value: conversion.value,
          keyword_impressions: keyword.impressions,
          keyword_clicks: keyword.clicks,
          keyword_position: keyword.position,
          keyword_ctr: keyword.ctr,
          attribution_score: attributionScore,
          attribution_confidence: this.getAttributionConfidence(attributionScore),
          revenue_attribution: this.calculateRevenueAttribution(conversion.value, attributionScore)
        });
      });
    });

    // Sort by attribution score
    return attributionResults.sort((a, b) => b.attribution_score - a.attribution_score);
  }

  /**
   * Find keywords that could have driven a conversion
   */
  findCandidateKeywords(gscData, conversion) {
    const landingPage = conversion.landing_page;
    const therapyType = conversion.therapy_type;
    
    return gscData.filter(keyword => {
      // Match by therapy type in keyword
      const keywordLower = keyword.keyword.toLowerCase();
      const therapyMatch = this.matchesTherapyType(keywordLower, therapyType);
      
      // Match by landing page relevance
      const pageMatch = this.matchesLandingPage(keywordLower, landingPage);
      
      // Must have clicks to drive conversion
      const hasClicks = keyword.clicks > 0;
      
      return (therapyMatch || pageMatch) && hasClicks;
    });
  }

  /**
   * Check if keyword matches therapy type
   */
  matchesTherapyType(keyword, therapyType) {
    const typeMatches = {
      'anxiety_therapy': ['anxiety', 'panic', 'worry', 'stress'],
      'depression_therapy': ['depression', 'mood', 'sad', 'hopeless'],
      'virtual_therapy': ['virtual', 'online', 'remote', 'video'],
      'work_stress_therapy': ['work', 'job', 'career', 'workplace', 'burnout'],
      'student_therapy': ['student', 'university', 'college', 'academic'],
      'couples_therapy': ['couples', 'relationship', 'marriage', 'partner']
    };

    const matchTerms = typeMatches[therapyType] || [];
    return matchTerms.some(term => keyword.includes(term));
  }

  /**
   * Check if keyword matches landing page
   */
  matchesLandingPage(keyword, landingPage) {
    const pageTerms = landingPage.toLowerCase()
      .replace(/[^a-z0-9]/g, ' ')
      .split(' ')
      .filter(term => term.length > 2);
    
    return pageTerms.some(term => keyword.includes(term));
  }

  /**
   * Calculate attribution score (0-100)
   */
  calculateAttributionScore(keyword, conversion) {
    let score = 0;

    // Click volume weight (30 points max)
    score += Math.min(keyword.clicks * 3, 30);

    // Position weight (25 points max) - better positions get higher scores
    const positionScore = Math.max(0, (21 - keyword.position) * 1.25);
    score += Math.min(positionScore, 25);

    // CTR weight (20 points max) - higher CTR indicates relevance
    score += Math.min(keyword.ctr * 400, 20);

    // Impression weight (15 points max) - shows demand
    score += Math.min(Math.log(keyword.impressions + 1) * 2, 15);

    // Conversion intent weight (10 points max)
    const intentScore = this.getIntentScore(keyword.keyword, conversion);
    score += intentScore;

    return Math.round(Math.min(score, 100));
  }

  /**
   * Get intent score based on keyword and conversion type
   */
  getIntentScore(keyword, conversion) {
    const keywordLower = keyword.toLowerCase();
    let intentScore = 0;

    // High-intent keywords
    const highIntentTerms = ['book', 'appointment', 'help', 'now', 'today', 'urgent', 'need'];
    if (highIntentTerms.some(term => keywordLower.includes(term))) {
      intentScore += 10;
    }

    // Medium-intent keywords  
    const mediumIntentTerms = ['therapy', 'counseling', 'treatment', 'support'];
    if (mediumIntentTerms.some(term => keywordLower.includes(term))) {
      intentScore += 6;
    }

    // Location-based intent
    const locationTerms = ['toronto', 'ontario', 'virtual', 'online'];
    if (locationTerms.some(term => keywordLower.includes(term))) {
      intentScore += 4;
    }

    return Math.min(intentScore, 10);
  }

  /**
   * Get attribution confidence level
   */
  getAttributionConfidence(score) {
    if (score >= 80) return 'Very High';
    if (score >= 60) return 'High';
    if (score >= 40) return 'Medium';
    if (score >= 20) return 'Low';
    return 'Very Low';
  }

  /**
   * Calculate revenue attribution based on score
   */
  calculateRevenueAttribution(conversionValue, attributionScore) {
    const attributionWeight = attributionScore / 100;
    return Math.round(conversionValue * attributionWeight);
  }

  /**
   * Generate comprehensive attribution reports
   */
  async generateReports(attributionResults) {
    // 1. Detailed attribution CSV
    await this.generateAttributionCSV(attributionResults);
    
    // 2. Summary report
    await this.generateSummaryReport(attributionResults);
    
    // 3. Keyword performance report
    await this.generateKeywordReport(attributionResults);
    
    // 4. Revenue attribution report
    await this.generateRevenueReport(attributionResults);
  }

  /**
   * Generate detailed attribution CSV
   */
  async generateAttributionCSV(results) {
    const csvHeader = [
      'Conversion ID',
      'Keyword',
      'Landing Page', 
      'Therapy Type',
      'Conversion Type',
      'Conversion Value',
      'Keyword Impressions',
      'Keyword Clicks',
      'Keyword Position',
      'Keyword CTR',
      'Attribution Score',
      'Attribution Confidence',
      'Revenue Attribution'
    ].join(',') + '\n';

    const csvContent = results.map(row => [
      row.conversion_id,
      `"${row.keyword}"`,
      row.landing_page,
      row.therapy_type,
      row.conversion_type,
      row.conversion_value,
      row.keyword_impressions,
      row.keyword_clicks,
      row.keyword_position.toFixed(1),
      (row.keyword_ctr * 100).toFixed(2) + '%',
      row.attribution_score,
      row.attribution_confidence,
      row.revenue_attribution
    ].join(',')).join('\n');

    const filename = `seo_conversion_attribution_${new Date().toISOString().split('T')[0]}.csv`;
    const filepath = path.join(this.outputDir, filename);
    
    fs.writeFileSync(filepath, csvHeader + csvContent);
    console.log(`✅ Attribution CSV exported: ${filename}`);
  }

  /**
   * Generate summary report
   */
  async generateSummaryReport(results) {
    const totalConversions = [...new Set(results.map(r => r.conversion_id))].length;
    const totalRevenue = results.reduce((sum, r) => sum + r.revenue_attribution, 0);
    const avgAttributionScore = results.reduce((sum, r) => sum + r.attribution_score, 0) / results.length;
    
    const topKeywords = this.getTopKeywordsByRevenue(results, 10);
    const topPages = this.getTopPagesByConversions(results, 5);
    
    const report = `# 🎯 SEO Conversion Attribution Report

**Generated:** ${new Date().toLocaleDateString()}  
**Analysis Period:** Last 7 days

## 📊 SUMMARY METRICS

- **Total Conversions Analyzed:** ${totalConversions}
- **Total Revenue Attributed:** $${totalRevenue.toLocaleString()}
- **Average Attribution Score:** ${avgAttributionScore.toFixed(1)}/100
- **Keywords with High Confidence:** ${results.filter(r => r.attribution_score >= 60).length}

## 🚀 TOP PERFORMING KEYWORDS (By Revenue Attribution)

| Keyword | Revenue | Conversions | Avg Score | Confidence |
|---------|---------|-------------|-----------|------------|
${topKeywords.map(k => 
  `| ${k.keyword} | $${k.revenue} | ${k.conversions} | ${k.avgScore} | ${k.confidence} |`
).join('\n')}

## 📄 TOP CONVERTING PAGES

| Landing Page | Conversions | Revenue | Top Keyword |
|--------------|-------------|---------|-------------|
${topPages.map(p => 
  `| ${p.page} | ${p.conversions} | $${p.revenue} | ${p.topKeyword} |`
).join('\n')}

## 💡 KEY INSIGHTS

### High-Opportunity Keywords
${this.getHighOpportunityInsights(results)}

### Conversion Optimization Recommendations
${this.getOptimizationRecommendations(results)}

### Revenue Growth Opportunities
${this.getRevenueOpportunities(results)}

---

*This report shows which SEO keywords are driving actual therapy conversions and revenue.*
`;

    const filename = `seo_attribution_summary_${new Date().toISOString().split('T')[0]}.md`;
    const filepath = path.join(this.outputDir, filename);
    
    fs.writeFileSync(filepath, report);
    console.log(`✅ Summary report generated: ${filename}`);
  }

  /**
   * Get top keywords by revenue attribution
   */
  getTopKeywordsByRevenue(results, limit = 10) {
    const keywordStats = {};
    
    results.forEach(r => {
      if (!keywordStats[r.keyword]) {
        keywordStats[r.keyword] = {
          keyword: r.keyword,
          revenue: 0,
          conversions: 0,
          totalScore: 0,
          count: 0
        };
      }
      
      keywordStats[r.keyword].revenue += r.revenue_attribution;
      keywordStats[r.keyword].conversions += 1;
      keywordStats[r.keyword].totalScore += r.attribution_score;
      keywordStats[r.keyword].count += 1;
    });
    
    return Object.values(keywordStats)
      .map(k => ({
        ...k,
        avgScore: (k.totalScore / k.count).toFixed(1),
        confidence: this.getAttributionConfidence(k.totalScore / k.count)
      }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, limit);
  }

  /**
   * Get top pages by conversions
   */
  getTopPagesByConversions(results, limit = 5) {
    const pageStats = {};
    
    results.forEach(r => {
      if (!pageStats[r.landing_page]) {
        pageStats[r.landing_page] = {
          page: r.landing_page,
          conversions: 0,
          revenue: 0,
          keywords: []
        };
      }
      
      pageStats[r.landing_page].conversions += 1;
      pageStats[r.landing_page].revenue += r.revenue_attribution;
      pageStats[r.landing_page].keywords.push(r.keyword);
    });
    
    return Object.values(pageStats)
      .map(p => ({
        ...p,
        topKeyword: [...new Set(p.keywords)][0] || 'N/A'
      }))
      .sort((a, b) => b.conversions - a.conversions)
      .slice(0, limit);
  }

  /**
   * Generate insights and recommendations
   */
  getHighOpportunityInsights(results) {
    const highScoreKeywords = results.filter(r => r.attribution_score >= 70);
    return `- ${highScoreKeywords.length} keywords with 70+ attribution scores\n- Focus content optimization on these high-converting terms\n- Average revenue per high-score keyword: $${(highScoreKeywords.reduce((sum, r) => sum + r.revenue_attribution, 0) / highScoreKeywords.length).toFixed(0)}`;
  }

  getOptimizationRecommendations(results) {
    const mediumScoreKeywords = results.filter(r => r.attribution_score >= 40 && r.attribution_score < 70);
    return `- ${mediumScoreKeywords.length} keywords with optimization potential (40-70 score)\n- Improve page content and meta descriptions for these terms\n- Potential revenue uplift: $${(mediumScoreKeywords.length * 50).toLocaleString()}`;
  }

  getRevenueOpportunities(results) {
    const totalRevenue = results.reduce((sum, r) => sum + r.revenue_attribution, 0);
    const projectedGrowth = totalRevenue * 0.3; // 30% growth potential
    return `- Current attributed revenue: $${totalRevenue.toLocaleString()}\n- Projected growth with optimization: $${projectedGrowth.toFixed(0)}\n- Focus on improving attribution scores for medium-confidence keywords`;
  }

  /**
   * Generate keyword performance report
   */
  async generateKeywordReport(results) {
    const keywordPerformance = this.getTopKeywordsByRevenue(results, 20);
    
    const csvHeader = 'Keyword,Revenue Attribution,Conversions,Avg Attribution Score,Confidence Level,Optimization Priority\n';
    const csvContent = keywordPerformance.map(k => [
      `"${k.keyword}"`,
      k.revenue,
      k.conversions,
      k.avgScore,
      k.confidence,
      this.getOptimizationPriority(k)
    ].join(',')).join('\n');

    const filename = `keyword_performance_${new Date().toISOString().split('T')[0]}.csv`;
    const filepath = path.join(this.outputDir, filename);
    
    fs.writeFileSync(filepath, csvHeader + csvContent);
    console.log(`✅ Keyword performance report: ${filename}`);
  }

  /**
   * Generate revenue attribution report
   */
  async generateRevenueReport(results) {
    const therapyTypes = [...new Set(results.map(r => r.therapy_type))];
    const revenueByType = {};
    
    therapyTypes.forEach(type => {
      const typeResults = results.filter(r => r.therapy_type === type);
      revenueByType[type] = {
        revenue: typeResults.reduce((sum, r) => sum + r.revenue_attribution, 0),
        conversions: [...new Set(typeResults.map(r => r.conversion_id))].length,
        avgScore: typeResults.reduce((sum, r) => sum + r.attribution_score, 0) / typeResults.length
      };
    });

    const csvHeader = 'Therapy Type,Revenue Attribution,Conversions,Avg Attribution Score,Revenue Per Conversion\n';
    const csvContent = Object.entries(revenueByType).map(([type, data]) => [
      type,
      data.revenue,
      data.conversions,
      data.avgScore.toFixed(1),
      (data.revenue / data.conversions).toFixed(0)
    ].join(',')).join('\n');

    const filename = `revenue_attribution_${new Date().toISOString().split('T')[0]}.csv`;
    const filepath = path.join(this.outputDir, filename);
    
    fs.writeFileSync(filepath, csvHeader + csvContent);
    console.log(`✅ Revenue attribution report: ${filename}`);
  }

  /**
   * Get optimization priority for keyword
   */
  getOptimizationPriority(keyword) {
    if (keyword.avgScore >= 70) return 'Maintain';
    if (keyword.avgScore >= 50) return 'High';
    if (keyword.avgScore >= 30) return 'Medium';
    return 'Low';
  }
}

// Run attribution analysis
if (require.main === module) {
  const attributor = new GSCConversionAttributor();
  attributor.runAttributionAnalysis().catch(console.error);
}

module.exports = GSCConversionAttributor;
