const https = require('https');

// DataForSEO credentials
const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || '1d54adc9ada19782';
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// LOCAL SEO RESEARCH - What do people actually search for?
const keywordGroups = {
    "ontarioWide": [
        "therapy ontario", "virtual therapy ontario", "online therapy ontario", 
        "therapist ontario", "counseling ontario", "mental health ontario"
    ],
    "torontoSpecific": [
        "therapy toronto", "therapist toronto", "anxiety therapy toronto", 
        "virtual therapy toronto", "online therapy toronto", "counseling toronto"
    ],
    "ottawaSpecific": [
        "therapy ottawa", "therapist ottawa", "anxiety therapy ottawa",
        "virtual therapy ottawa", "online therapy ottawa", "counseling ottawa"
    ],
    "hamiltonSpecific": [
        "therapy hamilton", "therapist hamilton", "anxiety therapy hamilton",
        "virtual therapy hamilton", "online therapy hamilton", "counseling hamilton"
    ],
    "londonSpecific": [
        "therapy london ontario", "therapist london ontario", "anxiety therapy london ontario",
        "virtual therapy london ontario", "online therapy london ontario"
    ],
    "virtualFirst": [
        "virtual therapy", "online therapy", "teletherapy", "remote therapy",
        "virtual counseling", "online counseling", "therapy from home"
    ],
    "hybridTerms": [
        "virtual therapy toronto", "online therapy ontario", "remote therapy toronto",
        "virtual counseling ontario", "online therapist toronto", "teletherapy ontario"
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
    console.log('🎯 ONTARIO LOCAL SEO RESEARCH - WHAT DO PEOPLE ACTUALLY SEARCH?');
    console.log('======================================================================\n');

    const allResults = [];
    const summaryStats = {
        ontarioWide: { total: 0, volume: 0 },
        citySpecific: { total: 0, volume: 0 },
        virtualFirst: { total: 0, volume: 0 },
        hybrid: { total: 0, volume: 0 }
    };

    for (const [groupName, seedTerms] of Object.entries(keywordGroups)) {
        try {
            console.log(`🔍 Researching ${groupName}...`);
            console.log(`Seed terms: ${seedTerms.join(', ')}\n`);
            
            const result = await validateKeywords(seedTerms, groupName);
            
            if (result.keywords && result.keywords.length > 0) {
                console.log(`✅ Found ${result.keywords.length} total keywords for ${groupName}\n`);
                
                // Filter for therapy-related keywords
                const therapyKeywords = result.keywords.filter(kw => {
                    const keyword = kw.keyword?.toLowerCase() || '';
                    return (
                        keyword.includes('therapy') || keyword.includes('therapist') || 
                        keyword.includes('counseling') || keyword.includes('counselling') ||
                        keyword.includes('mental health') || keyword.includes('anxiety') ||
                        keyword.includes('depression') || keyword.includes('stress') ||
                        keyword.includes('virtual') || keyword.includes('online')
                    ) && (kw.keyword_info?.search_volume || 0) >= 10;
                });

                console.log(`🎯 Therapy-related keywords: ${therapyKeywords.length}\n`);
                
                // Show top keywords
                const topKeywords = therapyKeywords
                    .sort((a, b) => (b.keyword_info?.search_volume || 0) - (a.keyword_info?.search_volume || 0))
                    .slice(0, 10);

                console.log(`Top Keywords for ${groupName}:`);
                topKeywords.forEach((kw, index) => {
                    const volume = kw.keyword_info?.search_volume || 0;
                    const competition = kw.keyword_info?.competition || 'UNKNOWN';
                    const cpc = kw.keyword_info?.cpc ? `$${kw.keyword_info.cpc}` : '$0';
                    
                    console.log(`${index + 1}. "${kw.keyword}"`);
                    console.log(`   Volume: ${volume}/month`);
                    console.log(`   Competition: ${competition}`);
                    console.log(`   CPC: ${cpc}\n`);
                    
                    allResults.push({
                        group: groupName,
                        keyword: kw.keyword,
                        volume: volume,
                        competition: competition,
                        cpc: kw.keyword_info?.cpc || 0,
                        searchType: getSearchType(kw.keyword, groupName)
                    });
                });

                // Update summary stats
                const groupVolume = therapyKeywords.reduce((sum, kw) => sum + (kw.keyword_info?.search_volume || 0), 0);
                if (groupName === 'ontarioWide') {
                    summaryStats.ontarioWide = { total: therapyKeywords.length, volume: groupVolume };
                } else if (['torontoSpecific', 'ottawaSpecific', 'hamiltonSpecific', 'londonSpecific'].includes(groupName)) {
                    summaryStats.citySpecific.total += therapyKeywords.length;
                    summaryStats.citySpecific.volume += groupVolume;
                } else if (groupName === 'virtualFirst') {
                    summaryStats.virtualFirst = { total: therapyKeywords.length, volume: groupVolume };
                } else if (groupName === 'hybridTerms') {
                    summaryStats.hybrid = { total: therapyKeywords.length, volume: groupVolume };
                }
                
                console.log('---\n');
            } else {
                console.log(`❌ No keywords found for ${groupName}\n`);
            }
            
            // Add delay between requests
            await new Promise(resolve => setTimeout(resolve, 2000));
            
        } catch (error) {
            console.error(`❌ Error researching ${groupName}:`, error.message);
        }
    }

    // Analysis and recommendations
    console.log('\n======================================================================');
    console.log('📊 LOCAL SEO STRATEGY ANALYSIS');
    console.log('======================================================================\n');
    
    console.log('🎯 SEARCH VOLUME COMPARISON:\n');
    console.log(`Ontario-Wide Terms: ${summaryStats.ontarioWide.total} keywords, ${summaryStats.ontarioWide.volume.toLocaleString()} monthly volume`);
    console.log(`City-Specific Terms: ${summaryStats.citySpecific.total} keywords, ${summaryStats.citySpecific.volume.toLocaleString()} monthly volume`);
    console.log(`Virtual-First Terms: ${summaryStats.virtualFirst.total} keywords, ${summaryStats.virtualFirst.volume.toLocaleString()} monthly volume`);
    console.log(`Hybrid Terms: ${summaryStats.hybrid.total} keywords, ${summaryStats.hybrid.volume.toLocaleString()} monthly volume\n`);

    // Recommendations
    console.log('🚀 KEYWORD STRATEGY RECOMMENDATIONS:\n');
    
    if (summaryStats.citySpecific.volume > summaryStats.ontarioWide.volume) {
        console.log('✅ CITY-SPECIFIC STRATEGY: People search more with city names');
        console.log('   → Target: "therapy toronto", "anxiety therapy ottawa", etc.');
        console.log('   → Create city-specific landing pages');
        console.log('   → Higher search volume in city-specific terms\n');
    } else {
        console.log('✅ ONTARIO-WIDE STRATEGY: People search more broadly');
        console.log('   → Target: "virtual therapy ontario", "online therapy ontario"');
        console.log('   → Focus on provincial coverage messaging');
        console.log('   → Higher search volume in broad terms\n');
    }

    if (summaryStats.virtualFirst.volume > (summaryStats.ontarioWide.volume + summaryStats.citySpecific.volume) / 2) {
        console.log('✅ VIRTUAL-FIRST OPPORTUNITY: High volume for virtual-specific terms');
        console.log('   → Target: "virtual therapy", "online counseling", "teletherapy"');
        console.log('   → Emphasize virtual delivery advantages');
        console.log('   → Less geographic competition\n');
    }

    // Top opportunities
    console.log('🏆 TOP KEYWORD OPPORTUNITIES:\n');
    const topOpportunities = allResults
        .sort((a, b) => b.volume - a.volume)
        .slice(0, 15);

    topOpportunities.forEach((kw, index) => {
        console.log(`${index + 1}. "${kw.keyword}" (${kw.searchType})`);
        console.log(`   📊 ${kw.volume}/month, ${kw.competition} competition\n`);
    });

    // Export results
    const csv = 'Rank,Group,Keyword,Volume,Competition,CPC,SearchType\n' + 
        allResults.map((kw, index) => 
            `${index + 1},"${kw.group}","${kw.keyword}",${kw.volume},"${kw.competition}",${kw.cpc},"${kw.searchType}"`
        ).join('\n');
    
    require('fs').writeFileSync('ontario_local_seo_research.csv', csv);
    console.log('📄 Full results exported to ontario_local_seo_research.csv');
}

function getSearchType(keyword, group) {
    const kw = keyword.toLowerCase();
    if (kw.includes('toronto') || kw.includes('ottawa') || kw.includes('hamilton') || kw.includes('london')) {
        return 'CITY_SPECIFIC';
    } else if (kw.includes('ontario')) {
        return 'ONTARIO_WIDE';
    } else if (kw.includes('virtual') || kw.includes('online') || kw.includes('remote')) {
        return 'VIRTUAL_FIRST';
    } else {
        return 'GENERAL';
    }
}

main().catch(console.error);
