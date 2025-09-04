const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

class GSCAuth {
    constructor() {
        this.auth = null;
    }

    async authenticate() {
        console.log('🔐 Setting up Google Search Console authentication...');
        
        const credentialsPath = path.join(__dirname, 'gsc_credentials.json');
        if (!fs.existsSync(credentialsPath)) {
            console.log(`
❌ Missing credentials file!

To set up authentication:
1. Go to https://console.developers.google.com/
2. Create a new project or select existing
3. Enable Google Search Console API
4. Create credentials (OAuth 2.0 Client ID)
5. Download JSON file and save as: ${credentialsPath}

Then run this script again.
            `);
            process.exit(1);
        }

        const credentials = JSON.parse(fs.readFileSync(credentialsPath));
        const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;

        this.auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

        const tokenPath = path.join(__dirname, 'gsc_token.json');
        await this.getNewToken(tokenPath);

        console.log('✅ Google Search Console API authenticated');
    }

    async getNewToken(tokenPath) {
        const authUrl = this.auth.generateAuthUrl({
            access_type: 'offline',
            scope: ['https://www.googleapis.com/auth/webmasters.readonly'],
        });

        console.log('🔗 Authorize this app by visiting:', authUrl);
        
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const code = await new Promise((resolve) => {
            rl.question('Enter the authorization code: ', resolve);
        });
        rl.close();

        const { tokens } = await this.auth.getToken(code);
        this.auth.setCredentials(tokens);

        fs.writeFileSync(tokenPath, JSON.stringify(tokens));
        console.log('✅ Token saved for future use');
    }

    async run() {
        try {
            await this.authenticate();
        } catch (error) {
            console.error('\n❌ Error during authentication:', error.message);
            process.exit(1);
        }
    }
}

if (require.main === module) {
    const auth = new GSCAuth();
    auth.run();
}

module.exports = GSCAuth;
