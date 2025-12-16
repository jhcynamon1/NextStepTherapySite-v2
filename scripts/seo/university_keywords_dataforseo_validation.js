// DataForSEO University Keywords Validation Script
// Validates search volumes for university student mental health keywords in Ontario

// ============================================
// AUTHENTICATION SETUP
// ============================================

// DataForSEO credentials - automatically loaded from environment or fallback
const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || '1d54adc9ada19782';

// Create base64 auth string
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// ============================================
// UNIVERSITY KEYWORDS TO VALIDATE
// ============================================

const universityKeywordGroups = {
  // Priority 1: Back-to-School Anxiety
  backToSchool: [
    'university anxiety',
    'starting university',
    'first year anxiety',
    'college anxiety',
    'moving away university'
  ],
  
  // Priority 2: Academic Stress
  academicStress: [
    'exam anxiety',
    'failing university',
    'academic stress',
    'midterm anxiety',
    'finals stress'
  ],
  
  // Priority 3: Social Issues
  socialIssues: [
    'social anxiety university',
    'homesick university',
    'making friends university',
    'lonely at university',
    'university isolation'
  ],
  
  // Priority 4: Identity & Confidence
  identityCrisis: [
    'imposter syndrome university',
    'not smart enough university',
    'changing majors',
    'wrong program anxiety',
    'career confusion'
  ],
  
  // Priority 5: Financial Stress (Ontario-specific)
  financialStress: [
    'OSAP anxiety',
    'student debt stress',
    'financial stress university',
    'cant afford university',
    'student loan anxiety'
  ],
  
  // Priority 6: Parent Searches
  parentSearches: [
    'child anxious university',
    'help university student',
    'worried about child university',
    'daughter son university anxiety',
    'parent guide university'
  ],
  
  // Priority 7: Mature Students
  matureStudents: [
    'mature student anxiety',
    'going back school 30',
    'older student university',
    'returning to school anxiety',
    'adult student stress'
  ]
};

// ============================================
// API FUNCTIONS
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
      ["keyword_info.search_volume", ">", 0]
    ],
    order_by: ["keyword_info.search_volume,desc"]
  }];
  
  console.log(`\n🎓 Analyzing ${groupName}...`);
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
      console.log(`✅ Found ${results.length} university keyword opportunities!`);
      
      // Filter for university-specific terms
      const universityKeywords = results.filter(item => 
        item.keyword.toLowerCase().includes('university') ||
        item.keyword.toLowerCase().includes('college') ||
        item.keyword.toLowerCase().includes('student') ||
        item.keyword.toLowerCase().includes('exam') ||
        item.keyword.toLowerCase().includes('osap') ||
        item.keyword.toLowerCase().includes('academic')
      );
      
      console.log(`🎯 University-specific keywords: ${universityKeywords.length}`);
      
      // Display top 15 university results
      console.log('\nTop 15 University Keywords:');
      universityKeywords.slice(0, 15).forEach((item, index) => {
        console.log(`${index + 1}. "${item.keyword}"`);
        console.log(`   Volume: ${item.keyword_info.search_volume}/month`);
        console.log(`   Competition: ${item.keyword_info.competition_level}`);
        console.log(`   CPC: $${item.keyword_info.cpc}`);
        console.log(`   Difficulty: ${item.keyword_info.keyword_difficulty || 'N/A'}`);
        console.log('');
      });
      
      return universityKeywords;
    }
    
    return [];
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return [];
  }
}

async function validateSpecificKeywords(keywords) {
  const url = 'https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_overview/live';
  
  const requestBody = [{
    keywords: keywords,
    location_name: "Canada",
    language_code: "en"
  }];
  
  console.log('\n📊 VALIDATING SPECIFIC UNIVERSITY KEYWORDS');
  console.log('=' .repeat(60));
  
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
    const results = data.tasks[0].result[0].items || [];
    
    console.log('\nSPECIFIC KEYWORD VALIDATION:');
    results.forEach((item, index) => {
      if (item.keyword_info && item.keyword_info.search_volume > 0) {
        console.log(`✅ "${item.keyword}"`);
        console.log(`   Volume: ${item.keyword_info.search_volume}/month`);
        console.log(`   Competition: ${item.keyword_info.competition_level}`);
        console.log(`   CPC: $${item.keyword_info.cpc}`);
        console.log(`   Difficulty: ${item.keyword_info.keyword_difficulty || 'N/A'}`);
      } else {
        console.log(`❌ "${item.keyword}" - No data (OPPORTUNITY!)`);
      }
      console.log('');
    });
    
    return results;
    
  } catch (error) {
    console.error(`❌ Error validating keywords: ${error.message}`);
    return [];
  }
}

// ============================================
// MAIN ANALYSIS FUNCTION
// ============================================

async function runUniversityKeywordValidation() {
  console.log('=' .repeat(70));
  console.log('🎓 UNIVERSITY STUDENT KEYWORDS VALIDATION - ONTARIO/CANADA');
  console.log('=' .repeat(70));
  
  if (DATAFORSEO_LOGIN === 'YOUR_LOGIN_HERE') {
    console.log('\n⚠️  Please add your DataForSEO credentials first!');
    console.log('Get them at: https://app.dataforseo.com/api-access');
    return;
  }
  
  const allResults = [];
  
  // Run analysis for each keyword group
  for (const [groupName, seedTerms] of Object.entries(universityKeywordGroups)) {
    const results = await getKeywordIdeas(seedTerms, groupName);
    allResults.push({
      group: groupName,
      seedTerms: seedTerms,
      results: results
    });
    
    // Wait 2 seconds between API calls to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Validate our specific target keywords
  const targetKeywords = [
    'starting university anxiety',
    'university exam anxiety',
    'homesick at university',
    'social anxiety university',
    'failing university anxiety',
    'imposter syndrome university',
    'OSAP anxiety',
    'mature student anxiety',
    'changing majors anxiety',
    'worried about child at university'
  ];
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  await validateSpecificKeywords(targetKeywords);
  
  // Generate summary report
  console.log('\n' + '=' .repeat(70));
  console.log('📊 UNIVERSITY KEYWORDS ANALYSIS SUMMARY');
  console.log('=' .repeat(70));
  
  let totalKeywords = 0;
  let lowCompetition = 0;
  let highVolume = 0;
  let zeroData = 0;
  
  allResults.forEach(group => {
    totalKeywords += group.results.length;
    group.results.forEach(keyword => {
      if (keyword.keyword_info.competition_level === 'LOW') {
        lowCompetition++;
      }
      if (keyword.keyword_info.search_volume >= 100) {
        highVolume++;
      }
      if (keyword.keyword_info.search_volume === 0) {
        zeroData++;
      }
    });
  });
  
  console.log(`\n✅ Total University Keywords Found: ${totalKeywords}`);
  console.log(`✅ Low Competition Keywords: ${lowCompetition}`);
  console.log(`✅ High Volume Keywords (100+): ${highVolume}`);
  console.log(`🎯 Zero Data Keywords (OPPORTUNITIES): ${zeroData}`);
  
  // Calculate Ontario-specific estimates
  console.log('\n🍁 ONTARIO-SPECIFIC ESTIMATES:');
  console.log('(Ontario represents ~38% of Canadian search volume)');
  console.log(`✅ Estimated Ontario Keywords: ${Math.round(totalKeywords * 0.38)}`);
  console.log(`✅ Estimated Ontario High Volume: ${Math.round(highVolume * 0.38)}`);
  
  // Export results to CSV
  exportUniversityKeywords(allResults);
  
  console.log('\n✅ University keyword validation complete!');
  console.log('📄 Check university_keywords_validated.csv for full results.');
}

// ============================================
// EXPORT FUNCTION
// ============================================

function exportUniversityKeywords(allResults) {
  const fs = require('fs');
  
  let csv = 'Group,Keyword,Search Volume,Ontario Estimate,Competition,CPC,Difficulty,Opportunity Score\n';
  
  allResults.forEach(group => {
    group.results.forEach(item => {
      const ontarioEstimate = Math.round(item.keyword_info.search_volume * 0.38);
      const opportunityScore = calculateOpportunityScore(item);
      
      csv += `"${group.group}","${item.keyword}",${item.keyword_info.search_volume},${ontarioEstimate},"${item.keyword_info.competition_level}",${item.keyword_info.cpc || 0},${item.keyword_info.keyword_difficulty || 0},${opportunityScore}\n`;
    });
  });
  
  fs.writeFileSync('university_keywords_validated.csv', csv);
}

function calculateOpportunityScore(item) {
  let score = 0;
  
  // Volume scoring
  if (item.keyword_info.search_volume >= 200) score += 3;
  else if (item.keyword_info.search_volume >= 100) score += 2;
  else if (item.keyword_info.search_volume >= 50) score += 1;
  
  // Competition scoring
  if (item.keyword_info.competition_level === 'LOW') score += 3;
  else if (item.keyword_info.competition_level === 'MEDIUM') score += 1;
  
  // Difficulty scoring
  if (item.keyword_info.keyword_difficulty <= 30) score += 2;
  else if (item.keyword_info.keyword_difficulty <= 50) score += 1;
  
  // University-specific bonus
  if (item.keyword.toLowerCase().includes('university') || 
      item.keyword.toLowerCase().includes('student') ||
      item.keyword.toLowerCase().includes('osap')) {
    score += 1;
  }
  
  return Math.min(score, 10); // Cap at 10
}

// ============================================
// RUN THE VALIDATION
// ============================================

// To run this script:
// 1. Add your DataForSEO credentials above
// 2. Run: node university_keywords_dataforseo_validation.js

if (require.main === module) {
  runUniversityKeywordValidation();
}

module.exports = { universityKeywordGroups, getKeywordIdeas, validateSpecificKeywords };
