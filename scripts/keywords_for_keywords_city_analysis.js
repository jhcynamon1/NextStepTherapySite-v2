const https = require('https');

// DataForSEO credentials - same as in MCP config
const DATAFORSEO_LOGIN = 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = '1d54adc9ada19782';
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// KEYWORDS FOR KEYWORDS approach - using seed terms to get related keywords
const seedTerms = [
    // Core therapy terms
    "anxiety therapy", "depression therapy", "virtual therapy", "online therapy",
    // City-specific seeds
    "therapist toronto", "therapy ottawa", "counseling hamilton", 
    "therapist mississauga", "therapy london ontario",
    // High-intent combinations
    "virtual counseling", "online counseling", "teletherapy", "remote therapy"
];

async function getKeywordIdeas() {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify([{
            "keywords": seedTerms,
            "location_name": "Canada", 
            "language_code": "en",
            "include_clickstream_data": false,
            "limit": 500,
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
                        resolve(response.tasks[0].result);
                    } else {
                        console.log('Response:', JSON.stringify(response, null, 2));
                        reject(new Error('No results found'));
                    }
                } catch (error) {
                    console.log('Raw response:', data);
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
    console.log('🎯 KEYWORDS FOR KEYWORDS - HIGH-INTENT CITY ANALYSIS');
    console.log('======================================================================\n');
    console.log('Using DataForSEO "Keywords For Keywords" methodology...\n');

    try {
        const allKeywords = await getKeywordIdeas();
        console.log(`✅ Found ${allKeywords.length} total keywords from seed terms\n`);

        // Filter for high-intent city-specific therapy keywords
        const cityTherapyKeywords = allKeywords.filter(kw => {
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
            
            // Check for Ontario cities OR virtual/online terms
            const hasLocationRelevance = (
                keyword.includes('toronto') || keyword.includes('ottawa') || 
                keyword.includes('hamilton') || keyword.includes('mississauga') ||
                keyword.includes('london') || keyword.includes('kitchener') ||
                keyword.includes('windsor') || keyword.includes('ontario') ||
                keyword.includes('virtual') || keyword.includes('online') ||
                keyword.includes('remote') || keyword.includes('teletherapy')
            );
            
            // Must have search volume
            const hasVolume = (kw.keyword_info?.search_volume || 0) >= 5;
            
            return hasTherapyIntent && hasLocationRelevance && hasVolume;
        });

        console.log(`🎯 High-intent city/virtual therapy keywords: ${cityTherapyKeywords.length}\n`);

        // Categorize keywords
        const categories = {
            citySpecific: [],
            virtualOntario: [],
            highIntent: []
        };

        cityTherapyKeywords.forEach(kw => {
            const keyword = kw.keyword.toLowerCase();
            if (keyword.includes('toronto') || keyword.includes('ottawa') || keyword.includes('hamilton') || 
                keyword.includes('mississauga') || keyword.includes('london') || keyword.includes('kitchener') || 
                keyword.includes('windsor')) {
                categories.citySpecific.push(kw);
            } else if (keyword.includes('ontario') || keyword.includes('virtual') || keyword.includes('online')) {
                categories.virtualOntario.push(kw);
            } else {
                categories.highIntent.push(kw);
            }
        });

        // Sort each category by priority score
        const sortByPriority = (keywords) => {
            return keywords.sort((a, b) => {
                const volumeA = a.keyword_info?.search_volume || 0;
                const volumeB = b.keyword_info?.search_volume || 0;
                const compA = a.keyword_info?.competition === 'LOW' ? 100 : a.keyword_info?.competition === 'MEDIUM' ? 50 : 0;
                const compB = b.keyword_info?.competition === 'LOW' ? 100 : b.keyword_info?.competition === 'MEDIUM' ? 50 : 0;
                
                // Priority: Volume + Low Competition
                const scoreA = (volumeA * 0.7) + compA;
                const scoreB = (volumeB * 0.7) + compB;
                
                return scoreB - scoreA;
            });
        };

        categories.citySpecific = sortByPriority(categories.citySpecific);
        categories.virtualOntario = sortByPriority(categories.virtualOntario);
        categories.highIntent = sortByPriority(categories.highIntent);

        // Display results
        console.log('🏙️ CITY-SPECIFIC KEYWORDS (Top 10):');
        console.log('======================================\n');
        categories.citySpecific.slice(0, 10).forEach((kw, index) => {
            const volume = kw.keyword_info?.search_volume || 0;
            const competition = kw.keyword_info?.competition || 'UNKNOWN';
            const cpc = kw.keyword_info?.cpc ? `$${kw.keyword_info.cpc}` : '$0';
            
            console.log(`${index + 1}. "${kw.keyword}"`);
            console.log(`   Volume: ${volume}/month | Competition: ${competition} | CPC: ${cpc}\n`);
        });

        console.log('💻 VIRTUAL/ONTARIO KEYWORDS (Top 10):');
        console.log('======================================\n');
        categories.virtualOntario.slice(0, 10).forEach((kw, index) => {
            const volume = kw.keyword_info?.search_volume || 0;
            const competition = kw.keyword_info?.competition || 'UNKNOWN';
            const cpc = kw.keyword_info?.cpc ? `$${kw.keyword_info.cpc}` : '$0';
            
            console.log(`${index + 1}. "${kw.keyword}"`);
            console.log(`   Volume: ${volume}/month | Competition: ${competition} | CPC: ${cpc}\n`);
        });

        // Select top 15 overall
        const allCombined = [...categories.citySpecific, ...categories.virtualOntario, ...categories.highIntent];
        const top15 = sortByPriority(allCombined).slice(0, 15);

        console.log('🏆 TOP 15 HIGH-INTENT KEYWORDS TO TARGET:');
        console.log('==========================================\n');
        
        top15.forEach((kw, index) => {
            const volume = kw.keyword_info?.search_volume || 0;
            const competition = kw.keyword_info?.competition || 'UNKNOWN';
            const cpc = kw.keyword_info?.cpc ? `$${kw.keyword_info.cpc}` : '$0';
            
            // Determine keyword type
            const keyword = kw.keyword.toLowerCase();
            let type = 'GENERAL';
            if (keyword.includes('toronto') || keyword.includes('ottawa') || keyword.includes('hamilton')) {
                type = 'CITY_SPECIFIC';
            } else if (keyword.includes('virtual') || keyword.includes('online')) {
                type = 'VIRTUAL_FOCUSED';
            } else if (keyword.includes('ontario')) {
                type = 'ONTARIO_WIDE';
            }
            
            console.log(`${index + 1}. "${kw.keyword}" (${type})`);
            console.log(`   📊 ${volume}/month | ${competition} competition | ${cpc} CPC`);
            console.log(`   🎯 Ranking Difficulty: ${competition === 'LOW' ? 'EASY' : competition === 'MEDIUM' ? 'MEDIUM' : 'HARD'}\n`);
        });

        // Export results
        const csv = 'Rank,Keyword,Type,Volume,Competition,CPC,RankingDifficulty\n' + 
            top15.map((kw, index) => {
                const keyword = kw.keyword.toLowerCase();
                let type = 'GENERAL';
                if (keyword.includes('toronto') || keyword.includes('ottawa') || keyword.includes('hamilton')) {
                    type = 'CITY_SPECIFIC';
                } else if (keyword.includes('virtual') || keyword.includes('online')) {
                    type = 'VIRTUAL_FOCUSED';
                } else if (keyword.includes('ontario')) {
                    type = 'ONTARIO_WIDE';
                }
                
                const volume = kw.keyword_info?.search_volume || 0;
                const competition = kw.keyword_info?.competition || 'UNKNOWN';
                const cpc = kw.keyword_info?.cpc || 0;
                const difficulty = competition === 'LOW' ? 'EASY' : competition === 'MEDIUM' ? 'MEDIUM' : 'HARD';
                
                return `${index + 1},"${kw.keyword}","${type}",${volume},"${competition}",${cpc},"${difficulty}"`;
            }).join('\n');
        
        require('fs').writeFileSync('top_15_high_intent_keywords.csv', csv);
        
        // Summary
        const totalVolume = top15.reduce((sum, kw) => sum + (kw.keyword_info?.search_volume || 0), 0);
        const easyToRank = top15.filter(kw => (kw.keyword_info?.competition || '') === 'LOW').length;
        const citySpecificCount = top15.filter(kw => {
            const keyword = kw.keyword.toLowerCase();
            return keyword.includes('toronto') || keyword.includes('ottawa') || keyword.includes('hamilton');
        }).length;
        
        console.log('📊 SUMMARY:');
        console.log(`✅ Total Monthly Volume: ${totalVolume.toLocaleString()}`);
        console.log(`✅ Easy to Rank (LOW competition): ${easyToRank}/15`);
        console.log(`✅ City-Specific Keywords: ${citySpecificCount}/15`);
        console.log(`✅ Virtual/Ontario Keywords: ${15 - citySpecificCount}/15`);
        console.log('\n📄 Results exported to top_15_high_intent_keywords.csv');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.log('\n🔧 Troubleshooting:');
        console.log('1. Check DataForSEO API credentials');
        console.log('2. Verify API quota/limits');
        console.log('3. Check network connectivity');
    }
}

main();
