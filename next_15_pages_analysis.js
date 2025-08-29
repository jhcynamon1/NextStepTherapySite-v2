const https = require('https');

// DataForSEO credentials
const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || '1d54adc9ada19782';
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

// SEED TERMS for next 15 pages - focusing on gaps not covered by university pages
const seedTermGroups = {
    "relationshipTherapy": ["relationship counseling", "couples therapy", "marriage counseling", "relationship problems"],
    "depressionSupport": ["depression therapy", "depression help", "seasonal depression", "depression counseling"],
    "panicDisorder": ["panic disorder", "panic attacks", "panic attack help", "panic disorder treatment"],
    "socialAnxiety": ["social anxiety", "social anxiety therapy", "social phobia", "social anxiety help"],
    "sleepAnxiety": ["sleep anxiety", "insomnia anxiety", "can't sleep worry", "bedtime anxiety"],
    "workplaceIssues": ["workplace harassment", "toxic workplace", "workplace bullying", "job burnout"],
    "lifeTransitions": ["life transitions", "major life changes", "divorce counseling", "career change anxiety"],
    "parentingStress": ["parenting stress", "overwhelmed parent", "parenting anxiety", "new parent stress"],
    "healthAnxiety": ["health anxiety", "medical anxiety", "hypochondria", "illness anxiety"],
    "financialStress": ["financial stress", "money anxiety", "financial worry", "debt stress"],
    "perfectionism": ["perfectionism therapy", "perfectionist anxiety", "high achiever stress", "overachiever burnout"],
    "griefLoss": ["grief counseling", "loss therapy", "bereavement support", "grief help"]
};

async function validateKeywords(seedTerms, groupName) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify([{
            "keywords": seedTerms,
            "location_name": "Canada",
            "language_code": "en",
            "include_clickstream_data": false,
            "limit": 100,
            "filters": [["keyword_info.search_volume", ">", 30]]
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
    console.log('🎯 NEXT 15 PAGES ANALYSIS - IDENTIFYING GAPS');
    console.log('======================================================================\n');

    // Pages already built (to exclude)
    const existingPages = [
        'university-exam-anxiety', 'students-with-anxiety', 'academic-stress-university',
        'university-anxiety', 'university-depression', 'college-anxiety', 'student-mental-health',
        'child-anxious-about-university', 'help-university-student-depression', 'college-student-counseling',
        'university-student-struggling', 'failing-university-anxiety', 'university-counseling',
        'college-stress', 'study-anxiety', 'sunday-night-anxiety', 'cant-sleep-anxiety',
        'panic-attacks-driving-ontario', 'constant-stress-from-job', 'cant-stop-worrying-work',
        'virtual-therapy-busy-parents', 'work-anxiety-and-stress', 'general-anxiety-and-stress-therapy',
        'mens-mental-health', 'performance-anxiety', 'workplace-stress-burnout', 'depression-mood-support',
        'life-transitions-change', 'relationship-communication'
    ];

    const allOpportunities = [];

    for (const [groupName, seedTerms] of Object.entries(seedTermGroups)) {
        try {
            console.log(`🔍 Analyzing ${groupName}...`);
            console.log(`Seed terms: ${seedTerms.join(', ')}\n`);
            
            const result = await validateKeywords(seedTerms, groupName);
            
            if (result.keywords && result.keywords.length > 0) {
                console.log(`✅ Found ${result.keywords.length} total keywords for ${groupName}\n`);
                
                // Filter for relevant mental health keywords not already covered
                const relevantKeywords = result.keywords.filter(kw => {
                    const keyword = kw.keyword?.toLowerCase() || '';
                    
                    // Check if already covered by existing pages
                    const alreadyCovered = existingPages.some(page => {
                        const pageKeywords = page.replace(/-/g, ' ');
                        return keyword.includes(pageKeywords) || pageKeywords.includes(keyword.replace(/\s+/g, ' '));
                    });
                    
                    if (alreadyCovered) return false;
                    
                    // Must have mental health intent
                    const hasMentalHealthIntent = (
                        keyword.includes('therapy') || keyword.includes('counseling') || 
                        keyword.includes('anxiety') || keyword.includes('stress') || 
                        keyword.includes('depression') || keyword.includes('panic') || 
                        keyword.includes('help') || keyword.includes('support') || 
                        keyword.includes('treatment') || keyword.includes('mental health') ||
                        keyword.includes('grief') || keyword.includes('relationship') ||
                        keyword.includes('perfectionism') || keyword.includes('burnout') ||
                        keyword.includes('phobia') || keyword.includes('insomnia') ||
                        keyword.includes('overwhelmed') || keyword.includes('worry')
                    );
                    
                    return hasMentalHealthIntent && (kw.keyword_info?.search_volume || 0) >= 30;
                });

                console.log(`🎯 New opportunities for ${groupName}: ${relevantKeywords.length}\n`);
                
                // Show top opportunities
                const topKeywords = relevantKeywords
                    .sort((a, b) => (b.keyword_info?.search_volume || 0) - (a.keyword_info?.search_volume || 0))
                    .slice(0, 5);

                console.log(`Top New Opportunities for ${groupName}:`);
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
                    
                    allOpportunities.push({
                        group: groupName,
                        keyword: kw.keyword,
                        volume: volume,
                        ontarioEstimate: ontarioEstimate,
                        competition: competition,
                        cpc: kw.keyword_info?.cpc || 0,
                        intent: 'HIGH',
                        priority: volume > 200 ? 'HIGH' : volume > 100 ? 'MEDIUM' : 'LOW'
                    });
                });
                
                console.log('---\n');
            } else {
                console.log(`❌ No new opportunities found for ${groupName}\n`);
            }
            
            // Add delay between requests
            await new Promise(resolve => setTimeout(resolve, 2000));
            
        } catch (error) {
            console.error(`❌ Error analyzing ${groupName}:`, error.message);
        }
    }

    // Final analysis and top 15 selection
    console.log('\n======================================================================');
    console.log('📊 TOP 15 NEXT PAGES TO BUILD');
    console.log('======================================================================\n');
    
    const top15 = allOpportunities
        .sort((a, b) => {
            // Priority scoring: High volume + low competition + high intent
            const scoreA = (a.volume * 0.6) + (a.competition === 'LOW' ? 100 : a.competition === 'MEDIUM' ? 50 : 0);
            const scoreB = (b.volume * 0.6) + (b.competition === 'LOW' ? 100 : b.competition === 'MEDIUM' ? 50 : 0);
            return scoreB - scoreA;
        })
        .slice(0, 15);
    
    console.log('🏆 RECOMMENDED NEXT 15 PAGES TO BUILD:\n');
    
    top15.forEach((kw, index) => {
        console.log(`${index + 1}. "${kw.keyword}" (${kw.group})`);
        console.log(`   📊 ${kw.volume}/month (${kw.ontarioEstimate} Ontario)`);
        console.log(`   🎯 ${kw.competition} competition, ${kw.cpc ? `$${kw.cpc}` : '$0'} CPC`);
        console.log(`   🚀 Priority: ${kw.priority}\n`);
    });
    
    // Export to CSV
    const csv = 'Rank,Group,Keyword,Volume,Ontario,Competition,CPC,Priority\n' + 
        top15.map((kw, index) => 
            `${index + 1},"${kw.group}","${kw.keyword}",${kw.volume},${kw.ontarioEstimate},"${kw.competition}",${kw.cpc},"${kw.priority}"`
        ).join('\n');
    
    require('fs').writeFileSync('next_15_pages_opportunities.csv', csv);
    console.log('📄 Results exported to next_15_pages_opportunities.csv');
    
    // Summary stats
    const totalVolume = top15.reduce((sum, kw) => sum + kw.volume, 0);
    const totalOntario = top15.reduce((sum, kw) => sum + kw.ontarioEstimate, 0);
    const highPriority = top15.filter(kw => kw.priority === 'HIGH').length;
    const lowCompetition = top15.filter(kw => kw.competition === 'LOW').length;
    
    console.log('\n📈 SUMMARY STATS:');
    console.log(`✅ Total Monthly Volume: ${totalVolume.toLocaleString()}`);
    console.log(`✅ Ontario Estimate: ${totalOntario.toLocaleString()}`);
    console.log(`✅ High Priority Pages: ${highPriority}/15`);
    console.log(`✅ Low Competition: ${lowCompetition}/15`);
}

main().catch(console.error);
