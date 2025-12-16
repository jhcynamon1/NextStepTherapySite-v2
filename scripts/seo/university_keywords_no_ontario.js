const https = require('https');

// DataForSEO credentials
const DATAFORSEO_LOGIN = 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = '1d54adc9ada19782';
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// HIGH-INTENT university keywords WITHOUT "Ontario" - should get better volumes
const keywordGroups = {
    "crisisSearches": [
        "university student mental health crisis",
        "panic attack university student", 
        "university student struggling help",
        "emergency mental health students"
    ],
    "parentConcerns": [
        "help university student depression",
        "child anxious about university", 
        "college student counseling services",
        "worried about university student"
    ],
    "academicStress": [
        "failing university anxiety",
        "academic probation mental health",
        "university counseling anxiety", 
        "study anxiety university students"
    ],
    "socialTransition": [
        "social anxiety university students",
        "university loneliness help",
        "first year university anxiety",
        "homesick university student"
    ],
    "therapySeeks": [
        "university depression help",
        "university student therapy",
        "college mental health counseling",
        "student mental health support"
    ]
};

async function validateKeywords(seedTerms, groupName) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify([{
            "keywords": seedTerms,
            "location_name": "Canada",
            "language_code": "en",
            "include_clickstream_data": false,
            "limit": 150,
            "filters": [["keyword_info.search_volume", ">", 5]]
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
                        console.log(`Limited results for ${groupName}`);
                        resolve({ group: groupName, keywords: [] });
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
    console.log('🎯 UNIVERSITY KEYWORDS WITHOUT "ONTARIO" - BETTER VOLUMES');
    console.log('======================================================================\n');

    const allResults = [];

    for (const [groupName, seedTerms] of Object.entries(keywordGroups)) {
        try {
            console.log(`🔍 Validating ${groupName}...`);
            console.log(`Seed terms: ${seedTerms.join(', ')}\n`);
            
            const result = await validateKeywords(seedTerms, groupName);
            
            if (result.keywords && result.keywords.length > 0) {
                console.log(`✅ Found ${result.keywords.length} total keywords for ${groupName}\n`);
                
                // Filter for university + mental health keywords
                const relevantKeywords = result.keywords.filter(kw => {
                    const keyword = kw.keyword?.toLowerCase() || '';
                    const hasUniversityContext = (
                        keyword.includes('university') || keyword.includes('college') || 
                        keyword.includes('student') || keyword.includes('academic') ||
                        keyword.includes('campus') || keyword.includes('exam') ||
                        keyword.includes('study') || keyword.includes('school')
                    );
                    const hasMentalHealthIntent = (
                        keyword.includes('anxiety') || keyword.includes('stress') || 
                        keyword.includes('depression') || keyword.includes('panic') || 
                        keyword.includes('help') || keyword.includes('therapy') || 
                        keyword.includes('counseling') || keyword.includes('mental') || 
                        keyword.includes('crisis') || keyword.includes('support') ||
                        keyword.includes('struggling') || keyword.includes('worried') ||
                        keyword.includes('failing') || keyword.includes('lonely') ||
                        keyword.includes('homesick') || keyword.includes('overwhelmed') ||
                        keyword.includes('burnout')
                    );
                    return hasUniversityContext && hasMentalHealthIntent && (kw.keyword_info?.search_volume || 0) >= 10;
                });

                console.log(`🎯 Relevant university mental health keywords: ${relevantKeywords.length}\n`);
                
                // Show top keywords
                const topKeywords = relevantKeywords
                    .sort((a, b) => (b.keyword_info?.search_volume || 0) - (a.keyword_info?.search_volume || 0))
                    .slice(0, 10);

                console.log(`Top Keywords for ${groupName}:`);
                topKeywords.forEach((kw, index) => {
                    const volume = kw.keyword_info?.search_volume || 0;
                    const ontarioEstimate = Math.round(volume * 0.38);
                    const competition = kw.keyword_info?.competition || 'UNKNOWN';
                    const cpc = kw.keyword_info?.cpc ? `$${kw.keyword_info.cpc}` : '$0';
                    
                    console.log(`${index + 1}. "${kw.keyword}"`);
                    console.log(`   Volume: ${volume}/month`);
                    console.log(`   Ontario: ${ontarioEstimate}/month`);
                    console.log(`   Competition: ${competition}`);
                    console.log(`   CPC: ${cpc}\n`);
                    
                    allResults.push({
                        group: groupName,
                        keyword: kw.keyword,
                        volume: volume,
                        ontarioEstimate: ontarioEstimate,
                        competition: competition,
                        cpc: kw.keyword_info?.cpc || 0,
                        intent: 'HIGH'
                    });
                });
                
                console.log('---\n');
            } else {
                console.log(`❌ No keywords found for ${groupName}\n`);
            }
            
            // Add delay between requests
            await new Promise(resolve => setTimeout(resolve, 2000));
            
        } catch (error) {
            console.error(`❌ Error validating ${groupName}:`, error.message);
        }
    }

    // Summary and Top 20
    console.log('\n======================================================================');
    console.log('📊 UNIVERSITY KEYWORDS WITHOUT ONTARIO - SUMMARY');
    console.log('======================================================================\n');
    
    const totalKeywords = allResults.length;
    const totalVolume = allResults.reduce((sum, kw) => sum + kw.volume, 0);
    const totalOntario = allResults.reduce((sum, kw) => sum + kw.ontarioEstimate, 0);
    const lowCompetition = allResults.filter(kw => kw.competition === 'LOW').length;
    
    console.log(`✅ Total Keywords Found: ${totalKeywords}`);
    console.log(`✅ Total Monthly Volume: ${totalVolume.toLocaleString()}`);
    console.log(`✅ Ontario Estimate: ${totalOntario.toLocaleString()}`);
    console.log(`✅ Low Competition: ${lowCompetition}`);
    
    // Show top 20 by volume
    console.log('\n🏆 TOP 20 UNIVERSITY MENTAL HEALTH KEYWORDS (NO ONTARIO):');
    console.log('======================================================================\n');
    
    const top20 = allResults
        .sort((a, b) => b.volume - a.volume)
        .slice(0, 20);
    
    top20.forEach((kw, index) => {
        console.log(`${index + 1}. "${kw.keyword}" (${kw.group})`);
        console.log(`   📊 ${kw.volume}/month (${kw.ontarioEstimate} Ontario)`);
        console.log(`   🎯 ${kw.competition} competition, ${kw.cpc ? `$${kw.cpc}` : '$0'} CPC\n`);
    });
    
    // Export to CSV
    const csv = 'Rank,Group,Keyword,Volume,Ontario,Competition,CPC,Intent\n' + 
        top20.map((kw, index) => 
            `${index + 1},"${kw.group}","${kw.keyword}",${kw.volume},${kw.ontarioEstimate},"${kw.competition}",${kw.cpc},"${kw.intent}"`
        ).join('\n');
    
    require('fs').writeFileSync('university_keywords_no_ontario.csv', csv);
    console.log('📄 Results exported to university_keywords_no_ontario.csv');
}

main().catch(console.error);
