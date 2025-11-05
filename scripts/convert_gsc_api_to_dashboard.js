#!/usr/bin/env node

const fs = require('fs');
const csv = require('csv-parser');

/**
 * Convert GSC API data to Dashboard format
 * Takes the CSV output from simple_gsc_extractor.js and converts to JSON for dashboard
 */

async function convertGSCData() {
    console.log('🔄 Converting GSC API data to dashboard format...');
    
    const gscData = [];
    
    return new Promise((resolve, reject) => {
        fs.createReadStream('ontario_keywords.csv')
            .pipe(csv())
            .on('data', (row) => {
                // Convert CSV row to dashboard format using correct column names
                const dashboardRow = {
                    page: '/', // GSC API data doesn't include page, will be aggregated
                    query: row.Keyword || row.keyword,
                    impressions: parseInt(row.Impressions) || 0,
                    clicks: parseInt(row.Clicks) || 0,
                    position: parseFloat(row.Position) || 0,
                    ctr: parseFloat(row.CTR?.replace('%', '')) || 0,
                    device: row.Device || 'ALL',
                    country: row.Country || 'can'
                };
                
                gscData.push(dashboardRow);
            })
            .on('end', () => {
                // Ensure gsc_data directory exists
                if (!fs.existsSync('gsc_data')) {
                    fs.mkdirSync('gsc_data', { recursive: true });
                }
                
                // Save to proper location for dashboard
                fs.writeFileSync('gsc_data/latest_keyword_data.json', JSON.stringify(gscData, null, 2));
                
                console.log(`✅ Converted ${gscData.length} GSC records to JSON format`);
                console.log('📁 Saved to: gsc_data/latest_keyword_data.json');
                
                // Show sample of converted data
                console.log('\n📊 Sample converted data:');
                gscData.slice(0, 3).forEach((row, i) => {
                    console.log(`${i + 1}. "${row.query}" - ${row.impressions} impressions, ${row.clicks} clicks, pos ${row.position}`);
                });
                
                resolve(gscData);
            })
            .on('error', reject);
    });
}

if (require.main === module) {
    convertGSCData()
        .then(() => {
            console.log('\n🎯 Next: Run dashboard integration to update with real data');
            console.log('   node dashboard_data_integration.js integrate');
        })
        .catch(error => {
            console.error('❌ Conversion failed:', error.message);
        });
}

module.exports = convertGSCData;
