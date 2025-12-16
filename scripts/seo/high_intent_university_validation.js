const https = require('https');

// DataForSEO credentials
const DATAFORSEO_LOGIN = 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = '1d54adc9ada19782';
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// HIGH-INTENT university mental health seed terms
const highIntentSeeds = {
    "universityAnxiety": ["university anxiety", "college anxiety", "starting university anxiety", "first year anxiety"],
    "examStress": ["exam anxiety", "test anxiety", "finals stress", "midterm anxiety"],
    "socialAnxiety": ["social anxiety college", "making friends university", "lonely at university", "university social problems"],
    "academicFailure": ["failing university", "academic probation", "bad grades anxiety", "university failure"],
    "homesickness": ["homesick university", "missing home college", "university homesickness", "lonely at college"],
    "mentalHealthHelp": ["university counseling", "college therapy", "student mental health", "university depression"],
    "studyStress": ["study anxiety", "academic stress", "university burnout", "college stress"],
    "parentConcerns": ["child anxious university", "worried about college student", "university student struggling", "help college student"]
};

async function validateKeywords(seedTerms, groupName) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify([{
            "keywords": seedTerms,
            "location_name": "Canada",
            "language_code": "en",
            "include_clickstream_data": false,
            "limit": 200,
            "filters": [["keyword_info.search_volume", ">", 10]]
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
                        console.log(`No results for ${groupName}:`, response);
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
    console.log('🎯 HIGH-INTENT UNIVERSITY KEYWORDS VALIDATION');
    console.log('======================================================================\n');

    const allResults = [];

    for (const [groupName, seedTerms] of Object.entries(highIntentSeeds)) {
        try {
            console.log(`🔍 Validating ${groupName}...`);
            console.log(`Seed terms: ${seedTerms.join(', ')}\n`);
            
            const result = await validateKeywords(seedTerms, groupName);
            
            if (result.keywords && result.keywords.length > 0) {
                console.log(`✅ Found ${result.keywords.length} keywords for ${groupName}\n`);
                
                // Filter for high-intent keywords
                const highIntentKeywords = result.keywords.filter(kw => {
                    const keyword = kw.keyword?.toLowerCase() || '';
                    return (
                        // University/college terms
                        (keyword.includes('university') || keyword.includes('college') || keyword.includes('student')) &&
                        // Mental health terms
                        (keyword.includes('anxiety') || keyword.includes('stress') || keyword.includes('depression') || 
                         keyword.includes('panic') || keyword.includes('help') || keyword.includes('therapy') || 
                         keyword.includes('counseling') || keyword.includes('mental') || keyword.includes('worried') ||
                         keyword.includes('struggling') || keyword.includes('failing') || keyword.includes('lonely') ||
                         keyword.includes('homesick') || keyword.includes('scared') || keyword.includes('overwhelmed'))
                    );
                }).filter(kw => (kw.keyword_info?.search_volume || 0) >= 10);

                console.log(`🎯 High-intent keywords: ${highIntentKeywords.length}\n`);
                
                // Show top keywords with real volumes
                const topKeywords = highIntentKeywords
                    .sort((a, b) => (b.keyword_info?.search_volume || 0) - (a.keyword_info?.search_volume || 0))
                    .slice(0, 10);

                console.log(`Top High-Intent Keywords for ${groupName}:`);
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

    // Summary
    console.log('\n======================================================================');
    console.log('📊 HIGH-INTENT UNIVERSITY KEYWORDS SUMMARY');
    console.log('======================================================================\n');
    
    const totalKeywords = allResults.length;
    const totalVolume = allResults.reduce((sum, kw) => sum + kw.volume, 0);
    const totalOntario = allResults.reduce((sum, kw) => sum + kw.ontarioEstimate, 0);
    const lowCompetition = allResults.filter(kw => kw.competition === 'LOW').length;
    
    console.log(`✅ Total High-Intent Keywords: ${totalKeywords}`);
    console.log(`✅ Total Monthly Volume: ${totalVolume.toLocaleString()}`);
    console.log(`✅ Ontario Monthly Volume: ${totalOntario.toLocaleString()}`);
    console.log(`✅ Low Competition: ${lowCompetition}`);
    
    // Show top 20 overall
    console.log('\n🏆 TOP 20 HIGH-INTENT UNIVERSITY KEYWORDS:');
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
    
    require('fs').writeFileSync('high_intent_university_keywords.csv', csv);
    console.log('📄 Top 20 exported to high_intent_university_keywords.csv');
}

main().catch(console.error);
