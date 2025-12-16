const https = require('https');

// DataForSEO credentials
const DATAFORSEO_LOGIN = 'jesse@nextsteptherapy.ca';
const DATAFORSEO_PASSWORD = '1d54adc9ada19782';
const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

async function debugAPI() {
    return new Promise((resolve, reject) => {
        // Simplified request - no filters, fewer seed terms
        const postData = JSON.stringify([{
            "keywords": ["anxiety therapy", "virtual therapy"],
            "location_name": "Canada", 
            "language_code": "en",
            "limit": 50
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
                console.log('🔍 DEBUG: Full API Response');
                console.log('Status Code:', res.statusCode);
                console.log('Headers:', res.headers);
                console.log('Raw Response:', data);
                
                try {
                    const response = JSON.parse(data);
                    console.log('\n📊 Parsed Response:');
                    console.log(JSON.stringify(response, null, 2));
                    resolve(response);
                } catch (error) {
                    console.log('❌ JSON Parse Error:', error.message);
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            console.log('❌ Request Error:', error.message);
            reject(error);
        });
        
        req.write(postData);
        req.end();
    });
}

async function main() {
    console.log('🔧 DEBUGGING DATAFORSEO API CONNECTION');
    console.log('======================================\n');
    
    try {
        await debugAPI();
    } catch (error) {
        console.error('❌ Debug failed:', error.message);
    }
}

main();
