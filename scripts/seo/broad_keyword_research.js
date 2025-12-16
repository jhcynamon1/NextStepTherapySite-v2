#!/usr/bin/env node

/**
 * Broad Keyword Research for NEW Services
 * Use DataForSEO to find what people search for that we don't serve
 */

const https = require('https');

// Credentials from your previous setup
const LOGIN = 'jesse@nextsteptherapy.ca';
const PASSWORD = '1d54adc9ada19782';
const AUTH = Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');

// Seed terms for services we DON'T currently offer
const SERVICE_SEEDS = [
    'ocd therapy',
    'adhd counselling', 
    'eating disorder therapy',
    'ptsd treatment',
    'couples therapy',
    'family therapy',
    'addiction counselling',
    'grief counselling',
    'teen therapy',
    'university student mental health',
    'postpartum depression',
    'cbt therapy',
    'emdr therapy',
    'trauma therapy'
];

function makeDataForSEORequest(keywords) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify([{
            keywords: keywords,
            location_name: "Canada",
            language_code: "en",
            limit: 100
        }]);

        const options = {
            hostname: 'api.dataforseo.com',
            port: 443,
            path: '/v3/dataforseo_labs/google/keyword_ideas/live',
            method: 'POST',
            headers: {
                'Authorization': `Basic ${AUTH}`,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(postData);
        req.end();
    });
}

async function researchNewServices() {
    console.log('🔍 Researching NEW Service Opportunities with DataForSEO...\n');
    
    const allOpportunities = [];
    
    // Process seeds in batches
    for (let i = 0; i < SERVICE_SEEDS.length; i += 3) {
        const batch = SERVICE_SEEDS.slice(i, i + 3);
        console.log(`🔄 Researching batch: ${batch.join(', ')}`);
        
        try {
            const response = await makeDataForSEORequest(batch);
            
            if (response.tasks && response.tasks[0] && response.tasks[0].result) {
                const keywords = response.tasks[0].result;
                
                keywords.forEach(keyword => {
                    const kw = keyword.keyword_info;
                    if (kw && kw.search_volume && kw.search_volume > 10) {
                        // Filter for Ontario/Canada relevant terms
                        const keywordText = kw.keyword.toLowerCase();
                        if (keywordText.includes('ontario') || 
                            keywordText.includes('canada') || 
                            keywordText.includes('toronto') ||
                            keywordText.includes('therapy') ||
                            keywordText.includes('counseling') ||
                            keywordText.includes('counselling')) {
                            
                            allOpportunities.push({
                                keyword: kw.keyword,
                                volume: kw.search_volume,
                                competition: kw.competition_level,
                                cpc: kw.cpc || 0,
                                seed: batch.find(seed => keywordText.includes(seed.split(' ')[0]))
                            });
                        }
                    }
                });
            }
            
            // Delay between requests
            await new Promise(resolve => setTimeout(resolve, 1000));
            
        } catch (error) {
            console.log(`   ⚠️  Error with batch ${batch.join(', ')}: ${error.message}`);
        }
    }
    
    // Sort by search volume
    allOpportunities.sort((a, b) => b.volume - a.volume);
    
    console.log('\n📊 NEW SERVICE OPPORTUNITIES FOUND:\n');
    
    // Group by service type
    const serviceGroups = {};
    allOpportunities.forEach(opp => {
        const service = opp.seed || 'other';
        if (!serviceGroups[service]) {
            serviceGroups[service] = [];
        }
        serviceGroups[service].push(opp);
    });
    
    // Generate CSV
    const csvContent = ['Service Type,Keyword,Monthly Volume,Competition,CPC\n'];
    
    Object.keys(serviceGroups).forEach(service => {
        console.log(`🎯 ${service.toUpperCase()}:`);
        const opportunities = serviceGroups[service].slice(0, 5); // Top 5 per service
        
        opportunities.forEach((opp, i) => {
            console.log(`   ${i + 1}. "${opp.keyword}" - ${opp.volume} searches/month, ${opp.competition} competition`);
            csvContent.push(`"${service}","${opp.keyword}",${opp.volume},"${opp.competition}",${opp.cpc}\n`);
        });
        console.log('');
    });
    
    // Save results
    const fs = require('fs');
    fs.writeFileSync('new_service_keyword_opportunities.csv', csvContent.join(''));
    
    console.log(`✅ Found ${allOpportunities.length} new service opportunities`);
    console.log(`📁 Results saved to new_service_keyword_opportunities.csv`);
    
    // Show top 15 overall
    console.log('\n🔥 TOP 15 NEW SERVICE OPPORTUNITIES:');
    allOpportunities.slice(0, 15).forEach((opp, i) => {
        console.log(`${i + 1}. "${opp.keyword}" - ${opp.volume} searches/month`);
    });
}

researchNewServices().catch(console.error);
