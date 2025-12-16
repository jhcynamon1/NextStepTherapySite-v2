#!/usr/bin/env node

/**
 * Validate Gap Keywords with Real GSC Data
 * Tests Perplexity keyword ideas against actual search volume
 */

const { google } = require('googleapis');
const fs = require('fs');

// High-priority keywords from Perplexity analysis
const KEYWORD_SEEDS = [
    // Therapy types
    'cognitive behavioral therapy ontario',
    'emdr therapy ontario',
    'dialectical behavior therapy ontario',
    
    // Professional issues
    'imposter syndrome therapy ontario',
    'high functioning anxiety ontario',
    'workplace bullying counseling ontario',
    'perfectionism therapy ontario',
    
    // Life stages
    'university student mental health ontario',
    'new parent anxiety ontario',
    'midlife crisis therapy ontario',
    'empty nest syndrome ontario',
    
    // Relationships
    'dating anxiety therapy ontario',
    'divorce counseling ontario',
    'toxic family dynamics therapy ontario',
    
    // Performance
    'sports performance anxiety ontario',
    'stage fright therapy ontario',
    'test anxiety ontario',
    
    // Trauma
    'childhood trauma therapy ontario',
    'ptsd online therapy ontario',
    'workplace trauma ontario',
    
    // Addiction
    'alcohol addiction counseling ontario',
    'substance use therapy ontario',
    
    // Cities
    'toronto anxiety therapist',
    'ottawa depression counseling',
    'hamilton trauma therapy',
    'mississauga therapist',
    
    // Virtual specific
    'online therapy effective ontario',
    'virtual therapy ontario',
    'secure video therapy ontario',
    
    // Insurance
    'ohip cover therapy ontario',
    'affordable counseling ontario',
    'therapy insurance ontario'
];

async function validateKeywords() {
    console.log('🔍 Validating Gap Keywords with Real Search Console Data...\n');
    
    try {
        // Load credentials and token
        const credentials = JSON.parse(fs.readFileSync('gsc_credentials.json'));
        const token = JSON.parse(fs.readFileSync('gsc_token.json'));
        
        const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
        const auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        auth.setCredentials(token);
        
        const webmasters = google.webmasters({ version: 'v3', auth });
        
        const results = [];
        
        for (const keyword of KEYWORD_SEEDS) {
            console.log(`🔄 Checking: ${keyword}`);
            
            try {
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
                                        expression: keyword.split(' ')[0] // First word
                                    }
                                ]
                            }
                        ],
                        rowLimit: 100
                    }
                };
                
                const response = await webmasters.searchanalytics.query(request);
                
                if (response.data.rows) {
                    // Find related keywords
                    const related = response.data.rows.filter(row => {
                        const query = row.keys[0].toLowerCase();
                        const keywordWords = keyword.toLowerCase().split(' ');
                        return keywordWords.some(word => query.includes(word));
                    });
                    
                    if (related.length > 0) {
                        results.push({
                            seed: keyword,
                            found: related.length,
                            topMatches: related.slice(0, 3).map(r => ({
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
        console.log('\n📊 VALIDATION RESULTS:\n');
        
        const csvContent = ['Seed Keyword,Related Found,Top Match,Impressions,Position\n'];
        
        results.forEach(result => {
            console.log(`🎯 ${result.seed}:`);
            console.log(`   Found ${result.found} related keywords`);
            
            if (result.topMatches.length > 0) {
                result.topMatches.forEach((match, i) => {
                    console.log(`   ${i + 1}. "${match.keyword}" - ${match.impressions} impressions, pos ${match.position}`);
                    
                    if (i === 0) {
                        csvContent.push(`"${result.seed}",${result.found},"${match.keyword}",${match.impressions},${match.position}\n`);
                    }
                });
            } else {
                csvContent.push(`"${result.seed}",${result.found},"No matches",0,N/A\n`);
            }
            console.log('');
        });
        
        // Save results
        fs.writeFileSync('gap_keyword_validation.csv', csvContent.join(''));
        
        console.log(`\n✅ Results saved to gap_keyword_validation.csv`);
        console.log(`📈 Found ${results.length} keyword opportunities with real search data`);
        
        // Show top opportunities
        const topOpportunities = results
            .filter(r => r.topMatches.length > 0 && r.topMatches[0].impressions > 0)
            .sort((a, b) => b.topMatches[0].impressions - a.topMatches[0].impressions)
            .slice(0, 10);
            
        if (topOpportunities.length > 0) {
            console.log('\n🔥 TOP 10 OPPORTUNITIES:');
            topOpportunities.forEach((opp, i) => {
                const match = opp.topMatches[0];
                console.log(`${i + 1}. "${match.keyword}" - ${match.impressions} impressions (pos ${match.position})`);
            });
        }
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

validateKeywords();
