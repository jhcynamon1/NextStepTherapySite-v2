#!/usr/bin/env node

/**
 * Token Saver - Saves OAuth token from authorization code
 * Usage: node save_token.js YOUR_AUTHORIZATION_CODE
 */

const { google } = require('googleapis');
const fs = require('fs');

async function saveToken() {
    const authCode = process.argv[2];
    
    if (!authCode) {
        console.log('❌ Please provide the authorization code');
        console.log('Usage: node save_token.js YOUR_CODE_HERE');
        process.exit(1);
    }

    try {
        // Load credentials
        const credentials = JSON.parse(fs.readFileSync('gsc_credentials.json'));
        const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;

        const auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

        console.log('🔄 Exchanging code for token...');
        const { tokens } = await auth.getToken(authCode);
        
        // Save token
        fs.writeFileSync('gsc_token.json', JSON.stringify(tokens, null, 2));
        
        console.log('✅ Token saved successfully!');
        console.log('🚀 Now run: node simple_gsc_extractor.js');
        
    } catch (error) {
        console.error('❌ Error saving token:', error.message);
        console.log('\n💡 Make sure:');
        console.log('   - You copied the full authorization code');
        console.log('   - The code is recent (they expire quickly)');
        console.log('   - You have gsc_credentials.json file');
        process.exit(1);
    }
}

saveToken();
