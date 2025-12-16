const https = require('https');

// DataForSEO credentials
const DATAFORSEO_LOGIN = 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = '1d54adc9ada19782';
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// HIGH-INTENT university mental health seed terms from Perplexity research
const highIntentSeeds = {
    "studentTherapySeeks": [
        "university counseling anxiety", 
        "student mental health therapy", 
        "college depression help", 
        "university student therapy"
    ],
    "parentConcerns": [
        "help university student depression", 
        "college student counseling", 
        "university student struggling", 
        "child university anxiety"
    ],
    "crisisSearches": [
        "emergency mental health students", 
        "panic attack university", 
        "university student crisis", 
        "urgent therapy students"
    ],
    "academicStress": [
        "exam anxiety therapy", 
        "academic probation support", 
        "failing grades counseling", 
        "study anxiety help"
    ],
    "socialTransition": [
        "social anxiety university", 
        "university loneliness help", 
        "homesick university", 
        "first year adjustment"
    ]
};

async function validateKeywords(seedTerms, groupName) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify([{
            "keywords": seedTerms,
            "location_name": "Canada",
            "language_code": "en",
            "include_clickstream_data": false,
            "limit": 100,
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
                        console.log(`No results for ${groupName}:`, JSON.stringify(response, null, 2));
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
    console.log('🎯 HIGH-INTENT UNIVERSITY MENTAL HEALTH KEYWORDS VALIDATION');
    console.log('======================================================================\n');

    const allResults = [];

    for (const [groupName, seedTerms] of Object.entries(highIntentSeeds)) {
        try {
            console.log(`🔍 Validating ${groupName}...`);
            console.log(`Seed terms: ${seedTerms.join(', ')}\n`);
            
            const result = await validateKeywords(seedTerms, groupName);
            
            if (result.keywords && result.keywords.length > 0) {
                console.log(`✅ Found ${result.keywords.length} keywords for ${groupName}\n`);
                
                // Filter for high-intent mental health keywords
                const mentalHealthKeywords = result.keywords.filter(kw => {
                    const keyword = kw.keyword?.toLowerCase() || '';
                    const hasUniversityContext = (
                        keyword.includes('university') || keyword.includes('college') || 
                        keyword.includes('student') || keyword.includes('campus') ||
                        keyword.includes('academic') || keyword.includes('exam') ||
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
                        keyword.includes('burnout') || keyword.includes('suicidal')
                    );
                    return hasUniversityContext && hasMentalHealthIntent && (kw.keyword_info?.search_volume || 0) >= 5;
                });

                console.log(`🎯 Mental health keywords: ${mentalHealthKeywords.length}\n`);
                
                // Show top keywords with real volumes
                const topKeywords = mentalHealthKeywords
                    .sort((a, b) => (b.keyword_info?.search_volume || 0) - (a.keyword_info?.search_volume || 0))
                    .slice(0, 8);

                console.log(`Top Mental Health Keywords for ${groupName}:`);
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
    console.log('📊 HIGH-INTENT UNIVERSITY MENTAL HEALTH SUMMARY');
    console.log('======================================================================\n');
    
    const totalKeywords = allResults.length;
    const totalVolume = allResults.reduce((sum, kw) => sum + kw.volume, 0);
    const totalOntario = allResults.reduce((sum, kw) => sum + kw.ontarioEstimate, 0);
    const lowCompetition = allResults.filter(kw => kw.competition === 'LOW').length;
    
    console.log(`✅ Total High-Intent Keywords: ${totalKeywords}`);
    console.log(`✅ Total Monthly Volume: ${totalVolume.toLocaleString()}`);
    console.log(`✅ Ontario Monthly Volume: ${totalOntario.toLocaleString()}`);
    console.log(`✅ Low Competition: ${lowCompetition}`);
    
    // Show top 20 overall by volume
    console.log('\n🏆 TOP 20 HIGH-INTENT UNIVERSITY MENTAL HEALTH KEYWORDS:');
    console.log('======================================================================\n');
    
    const top20 = allResults
        .sort((a, b) => b.volume - a.volume)
        .slice(0, 20);
    
    top20.forEach((kw, index) => {
        console.log(`${index + 1}. "${kw.keyword}" (${kw.group})`);
        console.log(`   📊 ${kw.volume}/month (${kw.ontarioEstimate} Ontario)`);
        console.log(`   🎯 ${kw.competition} competition, ${kw.cpc ? `$${kw.cpc}` : '$0'} CPC\n`);
    });
    
    // Group analysis
    console.log('\n📈 BY CATEGORY:');
    console.log('======================================================================\n');
    
    const groupStats = {};
    allResults.forEach(kw => {
        if (!groupStats[kw.group]) {
            groupStats[kw.group] = { count: 0, volume: 0, ontario: 0 };
        }
        groupStats[kw.group].count++;
        groupStats[kw.group].volume += kw.volume;
        groupStats[kw.group].ontario += kw.ontarioEstimate;
    });
    
    Object.entries(groupStats).forEach(([group, stats]) => {
        console.log(`${group}: ${stats.count} keywords, ${stats.volume} total volume (${stats.ontario} Ontario)`);
    });
    
    // Export to CSV
    const csv = 'Rank,Group,Keyword,Volume,Ontario,Competition,CPC,Intent\n' + 
        top20.map((kw, index) => 
            `${index + 1},"${kw.group}","${kw.keyword}",${kw.volume},${kw.ontarioEstimate},"${kw.competition}",${kw.cpc},"${kw.intent}"`
        ).join('\n');
    
    require('fs').writeFileSync('top_20_university_mental_health_keywords.csv', csv);
    console.log('\n📄 Top 20 exported to top_20_university_mental_health_keywords.csv');
}

main().catch(console.error);
