const https = require('https');

// DataForSEO credentials
const DATAFORSEO_LOGIN = 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = '1d54adc9ada19782';
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// University keyword groups to validate
const keywordGroups = {
    "universityAnxiety": ["university anxiety", "starting university", "first year university", "university stress"],
    "academicStress": ["failing university", "academic stress", "exam anxiety", "study stress"],
    "socialIssues": ["university social anxiety", "making friends university", "homesick university", "lonely university"],
    "studentSupport": ["student wellness", "university counseling", "student mental health", "university therapy"],
    "parentSearches": ["child anxious university", "help university student", "worried about student", "university student struggling"]
};

async function validateKeywords(seedTerms, groupName) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify([{
            "keywords": seedTerms,
            "location_name": "Canada",
            "language_code": "en",
            "include_clickstream_data": false,
            "limit": 100,
            "filters": [["keyword_info.search_volume", ">", 0]]
        }]);

        const options = {
            hostname: 'api.dataforseo.com',
            port: 443,
            path: '/v3/dataforseo_labs/google/keyword_ideas/live',
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    if (response.tasks && response.tasks[0] && response.tasks[0].result) {
                        resolve({
                            group: groupName,
                            keywords: response.tasks[0].result
                        });
                    } else {
                        reject(new Error(`No results for ${groupName}`));
                    }
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

async function main() {
    console.log('🎓 UNIVERSITY KEYWORDS REAL VALIDATION - DataForSEO');
    console.log('======================================================================\n');

    const allResults = [];

    for (const [groupName, seedTerms] of Object.entries(keywordGroups)) {
        try {
            console.log(`🔍 Validating ${groupName}...`);
            console.log(`Seed terms: ${seedTerms.join(', ')}\n`);
            
            const result = await validateKeywords(seedTerms, groupName);
            
            if (result.keywords && result.keywords.length > 0) {
                console.log(`✅ Found ${result.keywords.length} keywords for ${groupName}\n`);
                
                // Filter for university/student related keywords
                const universityKeywords = result.keywords.filter(kw => 
                    kw.keyword && (
                        kw.keyword.includes('university') ||
                        kw.keyword.includes('student') ||
                        kw.keyword.includes('college') ||
                        kw.keyword.includes('academic') ||
                        kw.keyword.includes('exam') ||
                        kw.keyword.includes('study') ||
                        kw.keyword.includes('anxiety') ||
                        kw.keyword.includes('stress') ||
                        kw.keyword.includes('mental') ||
                        kw.keyword.includes('wellness') ||
                        kw.keyword.includes('counseling') ||
                        kw.keyword.includes('therapy')
                    )
                );

                console.log(`🎯 University-related keywords: ${universityKeywords.length}\n`);
                
                // Show top 15 with real volumes
                const topKeywords = universityKeywords
                    .sort((a, b) => (b.keyword_info?.search_volume || 0) - (a.keyword_info?.search_volume || 0))
                    .slice(0, 15);

                console.log(`Top 15 Keywords for ${groupName}:`);
                topKeywords.forEach((kw, index) => {
                    const volume = kw.keyword_info?.search_volume || 0;
                    const ontarioEstimate = Math.round(volume * 0.38); // 38% of Canadian traffic
                    const competition = kw.keyword_info?.competition || 'UNKNOWN';
                    const cpc = kw.keyword_info?.cpc ? `$${kw.keyword_info.cpc}` : '$null';
                    
                    console.log(`${index + 1}. "${kw.keyword}"`);
                    console.log(`   Volume: ${volume}/month`);
                    console.log(`   Ontario Estimate: ${ontarioEstimate}/month`);
                    console.log(`   Competition: ${competition}`);
                    console.log(`   CPC: ${cpc}\n`);
                    
                    allResults.push({
                        group: groupName,
                        keyword: kw.keyword,
                        volume: volume,
                        ontarioEstimate: ontarioEstimate,
                        competition: competition,
                        cpc: kw.keyword_info?.cpc || 0
                    });
                });
                
                console.log('---\n');
            }
            
            // Add delay between requests
            await new Promise(resolve => setTimeout(resolve, 1000));
            
        } catch (error) {
            console.error(`❌ Error validating ${groupName}:`, error.message);
        }
    }

    // Summary
    console.log('\n======================================================================');
    console.log('📊 REAL UNIVERSITY KEYWORDS VALIDATION SUMMARY');
    console.log('======================================================================\n');
    
    const totalKeywords = allResults.length;
    const totalVolume = allResults.reduce((sum, kw) => sum + kw.volume, 0);
    const totalOntario = allResults.reduce((sum, kw) => sum + kw.ontarioEstimate, 0);
    const lowCompetition = allResults.filter(kw => kw.competition === 'LOW').length;
    
    console.log(`✅ Total University Keywords Validated: ${totalKeywords}`);
    console.log(`✅ Total Monthly Search Volume: ${totalVolume.toLocaleString()}`);
    console.log(`✅ Ontario Monthly Estimate: ${totalOntario.toLocaleString()}`);
    console.log(`✅ Low Competition Keywords: ${lowCompetition}`);
    
    // Export to CSV
    const csv = 'Group,Keyword,Volume,Ontario Estimate,Competition,CPC\n' + 
        allResults.map(kw => 
            `"${kw.group}","${kw.keyword}",${kw.volume},${kw.ontarioEstimate},"${kw.competition}",${kw.cpc}`
        ).join('\n');
    
    require('fs').writeFileSync('university_real_validation.csv', csv);
    console.log('\n📄 Results exported to university_real_validation.csv');
}

main().catch(console.error);
