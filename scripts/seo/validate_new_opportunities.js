#!/usr/bin/env node

/**
 * Validate NEW Service Opportunities - NOT existing rankings
 * Focus on keywords for pages that DON'T exist yet
 */

const { google } = require('googleapis');
const fs = require('fs');

// NEW service keywords - NOT what we already rank for
const NEW_SERVICE_KEYWORDS = [
    // Mental health conditions not covered
    'ocd therapy ontario',
    'adhd counselling ontario', 
    'eating disorder therapy ontario',
    'ptsd treatment ontario',
    'bipolar disorder therapy ontario',
    'panic disorder therapy ontario',
    'social anxiety therapy ontario',
    
    // Life stages not covered
    'teen mental health ontario',
    'university student counselling ontario',
    'postpartum depression therapy ontario',
    'senior mental health ontario',
    
    // Relationships not covered
    'couples therapy ontario',
    'marriage counselling ontario',
    'divorce recovery therapy ontario',
    'family therapy ontario',
    'dating anxiety therapy ontario',
    
    // Trauma types not covered
    'childhood trauma therapy ontario',
    'medical trauma counselling ontario',
    'sexual assault therapy ontario',
    'accident trauma therapy ontario',
    
    // Addiction not covered
    'addiction counselling ontario',
    'alcohol abuse therapy ontario',
    'substance use therapy ontario',
    'gambling addiction ontario',
    
    // Performance issues not covered
    'academic performance anxiety ontario',
    'test anxiety therapy ontario',
    'public speaking anxiety ontario',
    'sports performance anxiety ontario',
    
    // Identity issues not covered
    'lgbtq therapy ontario',
    'gender identity counselling ontario',
    'coming out support ontario',
    
    // Grief types not covered
    'grief counselling ontario',
    'bereavement therapy ontario',
    'job loss depression ontario',
    'relationship breakup therapy ontario',
    
    // Therapy modalities not covered
    'cbt therapy ontario',
    'dbt therapy ontario',
    'emdr therapy ontario',
    'mindfulness therapy ontario',
    
    // Crisis situations not covered
    'suicidal thoughts counselling ontario',
    'panic attack therapy ontario',
    'crisis mental health ontario'
];

async function validateNewOpportunities() {
    console.log('🔍 Validating NEW Service Opportunities (Not Current Rankings)...\n');
    
    try {
        // Load credentials and token
        const credentials = JSON.parse(fs.readFileSync('gsc_credentials.json'));
        const token = JSON.parse(fs.readFileSync('gsc_token.json'));
        
        const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
        const auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        auth.setCredentials(token);
        
        const webmasters = google.webmasters({ version: 'v3', auth });
        
        // Get ALL current keywords to exclude
        console.log('📊 Getting current keyword rankings to exclude...');
        const currentRequest = {
            siteUrl: 'sc-domain:nextsteptherapy.ca',
            resource: {
                startDate: '2024-01-01',
                endDate: new Date().toISOString().split('T')[0],
                dimensions: ['query'],
                rowLimit: 25000
            }
        };
        
        const currentResponse = await webmasters.searchanalytics.query(currentRequest);
        const currentKeywords = new Set();
        
        if (currentResponse.data.rows) {
            currentResponse.data.rows.forEach(row => {
                currentKeywords.add(row.keys[0].toLowerCase());
            });
        }
        
        console.log(`✅ Found ${currentKeywords.size} current keywords to exclude\n`);
        
        // Now validate NEW opportunities using broader keyword research
        const results = [];
        
        for (const keyword of NEW_SERVICE_KEYWORDS) {
            console.log(`🔄 Researching: ${keyword}`);
            
            try {
                // Use broader search to find related terms
                const baseWord = keyword.split(' ')[0]; // First word (ocd, adhd, etc.)
                
                const request = {
                    siteUrl: 'sc-domain:nextsteptherapy.ca',
                    resource: {
                        startDate: '2024-01-01',
                        endDate: new Date().toISOString().split('T')[0],
                        dimensions: ['query'],
                        dimensionFilterGroups: [
                            {
                                filters: [
                                    {
                                        dimension: 'query',
                                        operator: 'contains',
                                        expression: baseWord
                                    }
                                ]
                            }
                        ],
                        rowLimit: 100
                    }
                };
                
                const response = await webmasters.searchanalytics.query(request);
                
                if (response.data.rows) {
                    // Find related keywords that suggest demand for this service
                    const related = response.data.rows.filter(row => {
                        const query = row.keys[0].toLowerCase();
                        // Look for keywords that suggest people are searching for this service
                        // but we don't currently have a dedicated page
                        return query.includes(baseWord) && 
                               (row.impressions || 0) > 0 &&
                               !currentKeywords.has(query);
                    });
                    
                    if (related.length > 0) {
                        const totalImpressions = related.reduce((sum, r) => sum + (r.impressions || 0), 0);
                        
                        results.push({
                            serviceGap: keyword,
                            relatedSearches: related.length,
                            totalImpressions: totalImpressions,
                            topSearches: related
                                .sort((a, b) => (b.impressions || 0) - (a.impressions || 0))
                                .slice(0, 3)
                                .map(r => ({
                                    keyword: r.keys[0],
                                    impressions: r.impressions || 0,
                                    position: r.position ? r.position.toFixed(1) : 'N/A'
                                }))
                        });
                    }
                }
                
                // Small delay to avoid rate limits
                await new Promise(resolve => setTimeout(resolve, 100));
                
            } catch (error) {
                console.log(`   ⚠️  Error checking ${keyword}: ${error.message}`);
            }
        }
        
        // Generate report
        console.log('\n📊 NEW SERVICE OPPORTUNITIES:\n');
        
        const csvContent = ['Service Gap,Related Searches,Total Impressions,Top Search,Impressions,Position\n'];
        
        // Sort by total impressions
        results.sort((a, b) => b.totalImpressions - a.totalImpressions);
        
        results.forEach(result => {
            if (result.totalImpressions > 0) {
                console.log(`🎯 ${result.serviceGap.toUpperCase()}:`);
                console.log(`   📈 ${result.totalImpressions} total monthly impressions`);
                console.log(`   🔍 ${result.relatedSearches} related searches`);
                
                if (result.topSearches.length > 0) {
                    console.log(`   Top searches:`);
                    result.topSearches.forEach((search, i) => {
                        console.log(`     ${i + 1}. "${search.keyword}" - ${search.impressions} impressions, pos ${search.position}`);
                    });
                    
                    // Add to CSV
                    const topSearch = result.topSearches[0];
                    csvContent.push(`"${result.serviceGap}",${result.relatedSearches},${result.totalImpressions},"${topSearch.keyword}",${topSearch.impressions},${topSearch.position}\n`);
                } else {
                    csvContent.push(`"${result.serviceGap}",${result.relatedSearches},${result.totalImpressions},"No specific matches",0,N/A\n`);
                }
                console.log('');
            }
        });
        
        // Save results
        fs.writeFileSync('new_service_opportunities.csv', csvContent.join(''));
        
        console.log(`\n✅ Results saved to new_service_opportunities.csv`);
        
        const totalOpportunities = results.filter(r => r.totalImpressions > 0);
        console.log(`📈 Found ${totalOpportunities.length} NEW service opportunities with real demand`);
        
        if (totalOpportunities.length > 0) {
            const totalImpressions = totalOpportunities.reduce((sum, r) => sum + r.totalImpressions, 0);
            console.log(`🔥 Total monthly impressions available: ${totalImpressions}`);
            
            console.log('\n🚀 TOP 10 NEW SERVICE OPPORTUNITIES:');
            totalOpportunities.slice(0, 10).forEach((opp, i) => {
                console.log(`${i + 1}. ${opp.serviceGap} - ${opp.totalImpressions} impressions`);
            });
        }
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

validateNewOpportunities();
