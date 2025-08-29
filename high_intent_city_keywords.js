const https = require('https');

// DataForSEO credentials
const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || '1d54adc9ada19782';
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// HIGH-INTENT CITY-SPECIFIC SEED TERMS for virtual therapy
const seedTermGroups = {
    "torontoHighIntent": [
        "anxiety therapy toronto", "virtual therapy toronto", "online therapy toronto",
        "depression therapy toronto", "therapist toronto", "counseling toronto"
    ],
    "ottawaHighIntent": [
        "anxiety therapy ottawa", "virtual therapy ottawa", "online therapy ottawa", 
        "depression therapy ottawa", "therapist ottawa", "counseling ottawa"
    ],
    "hamiltonHighIntent": [
        "anxiety therapy hamilton", "virtual therapy hamilton", "online therapy hamilton",
        "depression therapy hamilton", "therapist hamilton", "counseling hamilton"
    ],
    "mississaugaHighIntent": [
        "anxiety therapy mississauga", "virtual therapy mississauga", "online therapy mississauga",
        "depression therapy mississauga", "therapist mississauga", "counseling mississauga"
    ],
    "londonHighIntent": [
        "anxiety therapy london ontario", "virtual therapy london ontario", "online therapy london ontario",
        "depression therapy london ontario", "therapist london ontario", "counseling london ontario"
    ],
    "kitchenerHighIntent": [
        "anxiety therapy kitchener", "virtual therapy kitchener", "online therapy kitchener",
        "depression therapy kitchener", "therapist kitchener", "counseling kitchener"
    ],
    "windsorHighIntent": [
        "anxiety therapy windsor", "virtual therapy windsor", "online therapy windsor",
        "depression therapy windsor", "therapist windsor", "counseling windsor"
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
    console.log('🎯 HIGH-INTENT CITY-SPECIFIC KEYWORDS - DATAFORSEO VALIDATION');
    console.log('======================================================================\n');

    const allOpportunities = [];

    for (const [groupName, seedTerms] of Object.entries(seedTermGroups)) {
        try {
            console.log(`🔍 Analyzing ${groupName}...`);
            console.log(`Seed terms: ${seedTerms.join(', ')}\n`);
            
            const result = await validateKeywords(seedTerms, groupName);
            
            if (result.keywords && result.keywords.length > 0) {
                console.log(`✅ Found ${result.keywords.length} total keywords for ${groupName}\n`);
                
                // Filter for high-intent therapy keywords with city names
                const highIntentKeywords = result.keywords.filter(kw => {
                    const keyword = kw.keyword?.toLowerCase() || '';
                    
                    // Must have therapy/mental health intent
                    const hasTherapyIntent = (
                        keyword.includes('therapy') || keyword.includes('therapist') || 
                        keyword.includes('counseling') || keyword.includes('counselling') ||
                        keyword.includes('anxiety') || keyword.includes('depression') || 
                        keyword.includes('stress') || keyword.includes('panic') ||
                        keyword.includes('mental health') || keyword.includes('virtual') ||
                        keyword.includes('online') || keyword.includes('help')
                    );
                    
                    // Must have city name
                    const hasCityName = (
                        keyword.includes('toronto') || keyword.includes('ottawa') || 
                        keyword.includes('hamilton') || keyword.includes('mississauga') ||
                        keyword.includes('london') || keyword.includes('kitchener') ||
                        keyword.includes('windsor')
                    );
                    
                    // Must have some search volume
                    const hasVolume = (kw.keyword_info?.search_volume || 0) >= 5;
                    
                    return hasTherapyIntent && hasCityName && hasVolume;
                });

                console.log(`🎯 High-intent city keywords: ${highIntentKeywords.length}\n`);
                
                // Show top keywords for this city
                const topKeywords = highIntentKeywords
                    .sort((a, b) => {
                        // Priority scoring: Volume + Low Competition + High Intent
                        const volumeA = a.keyword_info?.search_volume || 0;
                        const volumeB = b.keyword_info?.search_volume || 0;
                        const compA = a.keyword_info?.competition === 'LOW' ? 100 : a.keyword_info?.competition === 'MEDIUM' ? 50 : 0;
                        const compB = b.keyword_info?.competition === 'LOW' ? 100 : b.keyword_info?.competition === 'MEDIUM' ? 50 : 0;
                        
                        const scoreA = (volumeA * 0.7) + compA;
                        const scoreB = (volumeB * 0.7) + compB;
                        
                        return scoreB - scoreA;
                    })
                    .slice(0, 5);

                console.log(`Top High-Intent Keywords for ${groupName}:`);
                topKeywords.forEach((kw, index) => {
                    const volume = kw.keyword_info?.search_volume || 0;
                    const competition = kw.keyword_info?.competition || 'UNKNOWN';
                    const cpc = kw.keyword_info?.cpc ? `$${kw.keyword_info.cpc}` : '$0';
                    
                    // Calculate intent score
                    let intentScore = 'MEDIUM';
                    if (kw.keyword.toLowerCase().includes('virtual') || kw.keyword.toLowerCase().includes('online')) {
                        intentScore = 'VERY HIGH';
                    } else if (kw.keyword.toLowerCase().includes('anxiety') || kw.keyword.toLowerCase().includes('depression')) {
                        intentScore = 'HIGH';
                    }
                    
                    console.log(`${index + 1}. "${kw.keyword}"`);
                    console.log(`   Volume: ${volume}/month`);
                    console.log(`   Competition: ${competition}`);
                    console.log(`   CPC: ${cpc}`);
                    console.log(`   Intent: ${intentScore}\n`);
                    
                    allOpportunities.push({
                        city: groupName.replace('HighIntent', ''),
                        keyword: kw.keyword,
                        volume: volume,
                        competition: competition,
                        cpc: kw.keyword_info?.cpc || 0,
                        intent: intentScore,
                        rankingDifficulty: competition === 'LOW' ? 'EASY' : competition === 'MEDIUM' ? 'MEDIUM' : 'HARD'
                    });
                });
                
                console.log('---\n');
            } else {
                console.log(`❌ No keywords found for ${groupName}\n`);
            }
            
            // Add delay between requests
            await new Promise(resolve => setTimeout(resolve, 2000));
            
        } catch (error) {
            console.error(`❌ Error analyzing ${groupName}:`, error.message);
        }
    }

    // Final selection of top 15
    console.log('\n======================================================================');
    console.log('🏆 TOP 15 HIGH-INTENT CITY KEYWORDS TO TARGET FIRST');
    console.log('======================================================================\n');
    
    const top15 = allOpportunities
        .sort((a, b) => {
            // Scoring: High intent + Good volume + Low competition = Fast ranking
            const scoreA = (a.volume * 0.4) + 
                          (a.intent === 'VERY HIGH' ? 100 : a.intent === 'HIGH' ? 70 : 40) +
                          (a.competition === 'LOW' ? 80 : a.competition === 'MEDIUM' ? 40 : 0);
            const scoreB = (b.volume * 0.4) + 
                          (b.intent === 'VERY HIGH' ? 100 : b.intent === 'HIGH' ? 70 : 40) +
                          (b.competition === 'LOW' ? 80 : b.competition === 'MEDIUM' ? 40 : 0);
            return scoreB - scoreA;
        })
        .slice(0, 15);
    
    console.log('🎯 RECOMMENDED FIRST 15 KEYWORDS (High Intent + Fast Ranking):\n');
    
    top15.forEach((kw, index) => {
        console.log(`${index + 1}. "${kw.keyword}" (${kw.city})`);
        console.log(`   📊 ${kw.volume}/month | ${kw.competition} competition`);
        console.log(`   🎯 ${kw.intent} intent | ${kw.rankingDifficulty} to rank`);
        console.log(`   💰 ${kw.cpc ? `$${kw.cpc}` : '$0'} CPC\n`);
    });
    
    // Export to CSV
    const csv = 'Rank,City,Keyword,Volume,Competition,Intent,RankingDifficulty,CPC\n' + 
        top15.map((kw, index) => 
            `${index + 1},"${kw.city}","${kw.keyword}",${kw.volume},"${kw.competition}","${kw.intent}","${kw.rankingDifficulty}",${kw.cpc}`
        ).join('\n');
    
    require('fs').writeFileSync('top_15_city_keywords.csv', csv);
    console.log('📄 Results exported to top_15_city_keywords.csv');
    
    // Summary stats
    const totalVolume = top15.reduce((sum, kw) => sum + kw.volume, 0);
    const easyToRank = top15.filter(kw => kw.rankingDifficulty === 'EASY').length;
    const veryHighIntent = top15.filter(kw => kw.intent === 'VERY HIGH').length;
    const avgCPC = top15.reduce((sum, kw) => sum + kw.cpc, 0) / top15.length;
    
    console.log('\n📈 SUMMARY:');
    console.log(`✅ Total Monthly Volume: ${totalVolume.toLocaleString()}`);
    console.log(`✅ Easy to Rank: ${easyToRank}/15 keywords`);
    console.log(`✅ Very High Intent: ${veryHighIntent}/15 keywords`);
    console.log(`✅ Average CPC: $${avgCPC.toFixed(2)}`);
    
    console.log('\n🚀 NEXT STEPS:');
    console.log('1. Create city-specific landing pages for these keywords');
    console.log('2. Focus on unique content for each city');
    console.log('3. Emphasize virtual delivery + local understanding');
    console.log('4. Target the "EASY" ranking keywords first for quick wins');
}

main().catch(console.error);
