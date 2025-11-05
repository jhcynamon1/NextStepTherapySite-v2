#!/usr/bin/env node

/**
 * Simple Google Search Console Keyword Extractor
 * Simplified version that's more reliable
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    SITE_URL: 'sc-domain:nextsteptherapy.ca',
    START_DATE: '2024-01-01',
    END_DATE: new Date().toISOString().split('T')[0],
    OUTPUT_FILE: 'ontario_keywords.csv',
    ROW_LIMIT: 25000,
};

async function main() {
    console.log('🚀 Starting Simple GSC Keyword Extractor...\n');
    
    try {
        // Check credentials
        if (!fs.existsSync('gsc_credentials.json')) {
            console.log('❌ Missing gsc_credentials.json file');
            process.exit(1);
        }

        const credentials = JSON.parse(fs.readFileSync('gsc_credentials.json'));
        const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;

        const auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

        // Check for existing token
        if (fs.existsSync('gsc_token.json')) {
            console.log('✅ Using existing token...');
            const token = JSON.parse(fs.readFileSync('gsc_token.json'));
            auth.setCredentials(token);
        } else {
            console.log('❌ No token found. Need to authorize first.');
            console.log('\n🔗 Visit this URL to authorize:');
            
            const authUrl = auth.generateAuthUrl({
                access_type: 'offline',
                scope: ['https://www.googleapis.com/auth/webmasters.readonly'],
            });
            
            console.log(authUrl);
            console.log('\n📋 After authorization:');
            console.log('1. Copy the code from the URL (after code=)');
            console.log('2. Run: node save_token.js YOUR_CODE_HERE');
            console.log('3. Then run this script again');
            process.exit(0);
        }

        // Create webmasters service
        const webmasters = google.webmasters({ version: 'v3', auth });

        console.log('📊 Extracting keyword data...');
        
        const request = {
            siteUrl: CONFIG.SITE_URL,
            resource: {
                startDate: CONFIG.START_DATE,
                endDate: CONFIG.END_DATE,
                dimensions: ['query', 'country', 'device'],
                dimensionFilterGroups: [
                    {
                        filters: [
                            {
                                dimension: 'country',
                                operator: 'equals',
                                expression: 'can'
                            }
                        ]
                    }
                ],
                rowLimit: CONFIG.ROW_LIMIT,
                startRow: 0
            }
        };

        const response = await webmasters.searchanalytics.query(request);
        
        if (!response.data.rows || response.data.rows.length === 0) {
            console.log('⚠️  No data found. Make sure:');
            console.log('   - nextsteptherapy.ca is added to your Google Search Console');
            console.log('   - The site has search traffic data');
            console.log('   - You have the correct permissions');
            process.exit(1);
        }

        console.log(`✅ Found ${response.data.rows.length} keyword records`);

        // Process and export data
        const csvHeader = 'Keyword,Country,Device,Impressions,Clicks,CTR,Position\n';
        const csvContent = response.data.rows
            .map(row => [
                `"${row.keys[0]}"`, // keyword
                row.keys[1], // country
                row.keys[2], // device
                row.impressions || 0,
                row.clicks || 0,
                row.ctr ? (row.ctr * 100).toFixed(2) + '%' : '0%',
                row.position ? row.position.toFixed(1) : 'N/A'
            ].join(','))
            .join('\n');

        const fullCSV = csvHeader + csvContent;
        fs.writeFileSync(CONFIG.OUTPUT_FILE, fullCSV);

        console.log(`\n🎉 SUCCESS!`);
        console.log(`📁 Data exported to: ${CONFIG.OUTPUT_FILE}`);
        console.log(`📊 Total keywords: ${response.data.rows.length}`);
        
        // Show top 10 keywords
        console.log('\n🔥 Top 10 Keywords by Impressions:');
        const topKeywords = response.data.rows
            .sort((a, b) => (b.impressions || 0) - (a.impressions || 0))
            .slice(0, 10);
            
        topKeywords.forEach((row, i) => {
            console.log(`${i + 1}. "${row.keys[0]}" - ${row.impressions || 0} impressions`);
        });

    } catch (error) {
        console.error('❌ Error:', error.message);
        if (error.code === 401) {
            console.log('\n🔐 Authorization expired. Delete gsc_token.json and re-authorize.');
        }
        process.exit(1);
    }
}

main();
