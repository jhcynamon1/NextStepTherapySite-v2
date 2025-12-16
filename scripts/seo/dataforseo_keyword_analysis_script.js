// DataForSEO Keyword Analysis Script for NextStep Therapy
// Based on the "Keywords For Keywords" approach from our SEO guide

// ============================================
// AUTHENTICATION SETUP
// ============================================

// You need to add your DataForSEO credentials here
// Get them from: https://app.dataforseo.com/api-access
const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || '1d54adc9ada19782';

// Create base64 auth string
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// ============================================
// SEED TERMS STRATEGY (The Correct Approach)
// ============================================

const seedTermGroups = {
  // Priority 1: Sunday Anxiety (Your Perfect Match)
  sundayAnxiety: [
    'sunday anxiety',
    'sunday scaries',
    'sunday night',
    'work anxiety',
    'monday anxiety'
  ],
  
  // Priority 2: Male Mental Health (Your Specialty)
  maleTherapy: [
    'mens therapy',
    'male therapist',
    'mens mental health',
    'therapy for men'
  ],
  
  // Priority 3: ACT Therapy (Your Certification)
  actTherapy: [
    'ACT therapy',
    'acceptance commitment therapy',
    'acceptance therapy'
  ],
  
  // Priority 4: CRPO Registration (Trust Signal)
  crpoTherapist: [
    'CRPO therapist',
    'registered psychotherapist',
    'psychotherapist ontario'
  ],
  
  // Priority 5: Insurance Keywords (High Value)
  insuranceCoverage: [
    'therapy insurance',
    'sun life therapy',
    'manulife therapy',
    'green shield therapy',
    'therapy coverage'
  ],
  
  // Priority 6: Workplace Stress
  workplaceStress: [
    'workplace anxiety',
    'work stress',
    'burnout therapy',
    'job stress'
  ],
  
  // Priority 7: Physical Symptoms
  anxietySymptoms: [
    'panic attacks',
    'anxiety symptoms',
    'chest tightness anxiety',
    'anxiety attack'
  ],
  
  // Priority 8: Time-Sensitive
  urgentTherapy: [
    'same day therapy',
    'urgent therapy',
    'immediate therapy',
    'therapy tonight'
  ]
};

// ============================================
// API CALLS
// ============================================

async function getKeywordIdeas(seedTerms, groupName) {
  const url = 'https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live';
  
  const requestBody = [{
    keywords: seedTerms,
    location_name: "Canada",
    language_code: "en",
    include_seed_keyword: true,
    include_clickstream_data: false,
    limit: 1000,
    filters: [
      ["keyword_info.competition_level", "in", ["LOW", "MEDIUM"]],
      "and",
      ["keyword_info.search_volume", ">", 0]
    ],
    order_by: ["keyword_info.search_volume,desc"]
  }];
  
  console.log(`\n🔍 Analyzing ${groupName}...`);
  console.log(`Seed terms: ${seedTerms.join(', ')}`);
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.tasks && data.tasks[0] && data.tasks[0].result) {
      const results = data.tasks[0].result[0].items || [];
      console.log(`✅ Found ${results.length} keyword opportunities!`);
      
      // Display top 10 results
      console.log('\nTop 10 Keywords:');
      results.slice(0, 10).forEach((item, index) => {
        console.log(`${index + 1}. "${item.keyword}"`);
        console.log(`   Volume: ${item.keyword_info.search_volume}/month`);
        console.log(`   Competition: ${item.keyword_info.competition_level}`);
        console.log(`   CPC: $${item.keyword_info.cpc}`);
        console.log('');
      });
      
      return results;
    }
    
    return [];
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return [];
  }
}

async function getKeywordOverview(keywords) {
  const url = 'https://api.dataforseo.com/v3/dataforseo_labs/google/keywords_data/live';
  
  const requestBody = [{
    keywords: keywords,
    location_name: "Canada",
    language_code: "en"
  }];
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.tasks[0].result[0].items || [];
    
  } catch (error) {
    console.error(`❌ Error getting overview: ${error.message}`);
    return [];
  }
}

// ============================================
// MAIN ANALYSIS FUNCTION
// ============================================

async function runFullAnalysis() {
  console.log('=' .repeat(60));
  console.log('🚀 DATAFORSEO KEYWORD ANALYSIS FOR NEXTSTEP THERAPY');
  console.log('=' .repeat(60));
  
  if (DATAFORSEO_LOGIN === 'YOUR_LOGIN_HERE') {
    console.log('\n⚠️  Please add your DataForSEO credentials first!');
    console.log('Get them at: https://app.dataforseo.com/api-access');
    return;
  }
  
  const allResults = [];
  
  // Run analysis for each seed term group
  for (const [groupName, seedTerms] of Object.entries(seedTermGroups)) {
    const results = await getKeywordIdeas(seedTerms, groupName);
    allResults.push({
      group: groupName,
      seedTerms: seedTerms,
      results: results
    });
    
    // Wait 1 second between API calls to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Generate summary report
  console.log('\n' + '=' .repeat(60));
  console.log('📊 ANALYSIS SUMMARY');
  console.log('=' .repeat(60));
  
  let totalKeywords = 0;
  let lowCompetition = 0;
  let highVolume = 0;
  
  allResults.forEach(group => {
    totalKeywords += group.results.length;
    group.results.forEach(keyword => {
      if (keyword.keyword_info.competition_level === 'LOW') {
        lowCompetition++;
      }
      if (keyword.keyword_info.search_volume >= 100) {
        highVolume++;
      }
    });
  });
  
  console.log(`\n✅ Total Keywords Found: ${totalKeywords}`);
  console.log(`✅ Low Competition Keywords: ${lowCompetition}`);
  console.log(`✅ High Volume Keywords (100+): ${highVolume}`);
  
  // Export results to CSV
  exportToCSV(allResults);
  
  console.log('\n✅ Analysis complete! Check nextstep_keywords.csv for full results.');
}

// ============================================
// EXPORT FUNCTION
// ============================================

function exportToCSV(allResults) {
  const fs = require('fs');
  
  let csv = 'Group,Keyword,Search Volume,Competition,CPC,Keyword Difficulty\n';
  
  allResults.forEach(group => {
    group.results.forEach(item => {
      csv += `"${group.group}","${item.keyword}",${item.keyword_info.search_volume},"${item.keyword_info.competition_level}",${item.keyword_info.cpc || 0},${item.keyword_info.keyword_difficulty || 0}\n`;
    });
  });
  
  fs.writeFileSync('nextstep_keywords.csv', csv);
}

// ============================================
// RUN THE ANALYSIS
// ============================================

// To run this script:
// 1. Add your DataForSEO credentials above
// 2. Run: node dataforseo_keyword_analysis_script.js

if (require.main === module) {
  runFullAnalysis();
}

module.exports = { seedTermGroups, getKeywordIdeas, getKeywordOverview };
