#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Local Dashboard Server
 * Serves your SEO dashboard with proper CORS and file handling
 */

class DashboardServer {
    constructor(port = 3000) {
        this.port = port;
        this.server = null;
    }

    start() {
        this.server = http.createServer((req, res) => {
            this.handleRequest(req, res);
        });

        this.server.listen(this.port, () => {
            console.log('🚀 SEO Dashboard Server Started!');
            console.log('');
            console.log(`📊 Dashboard URL: http://localhost:${this.port}`);
            console.log(`📈 Live Dashboard: http://localhost:${this.port}/seo_dashboard_live.html`);
            console.log('');
            console.log('✅ Features Available:');
            console.log('   • Interactive charts and visualizations');
            console.log('   • Real-time data updates');
            console.log('   • Mobile responsive design');
            console.log('   • AI-powered insights');
            console.log('');
            console.log('🔄 Auto-refresh: Dashboard updates every 5 minutes');
            console.log('⏹️  Stop server: Press Ctrl+C');
            console.log('');

            // Try to open browser automatically
            this.openBrowser();
        });

        // Auto-refresh data every 5 minutes
        setInterval(() => {
            this.refreshDashboardData();
        }, 5 * 60 * 1000);

        // Handle server shutdown gracefully
        process.on('SIGINT', () => {
            console.log('\n🛑 Shutting down dashboard server...');
            this.server.close(() => {
                console.log('✅ Server stopped successfully');
                process.exit(0);
            });
        });
    }

    handleRequest(req, res) {
        let filePath = req.url === '/' ? '/seo_dashboard_live.html' : req.url;
        
        // Remove query parameters
        filePath = filePath.split('?')[0];
        
        // Security: prevent directory traversal
        filePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, '');
        
        const fullPath = path.join(__dirname, filePath);

        // Check if file exists
        if (!fs.existsSync(fullPath)) {
            this.send404(res, filePath);
            return;
        }

        // Get file extension for content type
        const ext = path.extname(filePath).toLowerCase();
        const contentType = this.getContentType(ext);

        // Set CORS headers for API requests
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        try {
            const content = fs.readFileSync(fullPath);
            
            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            
            res.end(content);
            
            console.log(`📄 Served: ${filePath} (${content.length} bytes)`);
            
        } catch (error) {
            console.error(`❌ Error serving ${filePath}:`, error.message);
            this.send500(res, error.message);
        }
    }

    getContentType(ext) {
        const types = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf',
            '.eot': 'application/vnd.ms-fontobject'
        };
        
        return types[ext] || 'text/plain';
    }

    send404(res, filePath) {
        const html404 = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>404 - File Not Found</title>
            <style>
                body { font-family: sans-serif; text-align: center; padding: 50px; }
                h1 { color: #e74c3c; }
                .back-link { color: #3498db; text-decoration: none; }
            </style>
        </head>
        <body>
            <h1>404 - File Not Found</h1>
            <p>The file <code>${filePath}</code> was not found.</p>
            <p><a href="/" class="back-link">← Back to Dashboard</a></p>
        </body>
        </html>`;
        
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(html404);
        
        console.log(`❌ 404: ${filePath}`);
    }

    send500(res, error) {
        const html500 = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>500 - Server Error</title>
            <style>
                body { font-family: sans-serif; text-align: center; padding: 50px; }
                h1 { color: #e74c3c; }
                .error { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px; }
            </style>
        </head>
        <body>
            <h1>500 - Server Error</h1>
            <div class="error">
                <p><strong>Error:</strong> ${error}</p>
            </div>
            <p><a href="/">← Back to Dashboard</a></p>
        </body>
        </html>`;
        
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(html500);
        
        console.log(`❌ 500: ${error}`);
    }

    refreshDashboardData() {
        console.log('🔄 Auto-refreshing dashboard data...');
        
        try {
            execSync('node automated_data_collector.js collect', { 
                stdio: 'pipe',
                timeout: 30000 
            });
            console.log('✅ Dashboard data refreshed');
        } catch (error) {
            console.log('⚠️  Auto-refresh failed:', error.message);
        }
    }

    openBrowser() {
        const url = `http://localhost:${this.port}`;
        
        try {
            // Try to open browser automatically
            const platform = process.platform;
            
            if (platform === 'darwin') {
                execSync(`open "${url}"`, { stdio: 'ignore' });
            } else if (platform === 'win32') {
                execSync(`start "${url}"`, { stdio: 'ignore' });
            } else {
                execSync(`xdg-open "${url}"`, { stdio: 'ignore' });
            }
            
            console.log('🌐 Browser opened automatically');
            
        } catch (error) {
            console.log('⚠️  Could not open browser automatically');
            console.log(`   Please open: http://localhost:${this.port}`);
        }
    }

    // Static method to check if port is available
    static async checkPort(port) {
        return new Promise((resolve) => {
            const server = http.createServer();
            
            server.listen(port, () => {
                server.close(() => resolve(true));
            });
            
            server.on('error', () => resolve(false));
        });
    }

    // Find available port
    static async findAvailablePort(startPort = 3000) {
        for (let port = startPort; port < startPort + 100; port++) {
            if (await DashboardServer.checkPort(port)) {
                return port;
            }
        }
        throw new Error('No available ports found');
    }
}

// CLI interface
if (require.main === module) {
    const args = process.argv.slice(2);
    const port = parseInt(args[0]) || 3000;

    console.log('🚀 Starting SEO Dashboard Server...\n');

    // Check if dashboard files exist
    const requiredFiles = [
        'seo_dashboard_live.html',
        'dashboard_data/dashboard_data.json'
    ];

    const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));

    if (missingFiles.length > 0) {
        console.log('⚠️  Missing required files:');
        missingFiles.forEach(file => console.log(`   • ${file}`));
        console.log('\n🔧 Running data collection first...\n');
        
        try {
            execSync('node automated_data_collector.js collect', { stdio: 'inherit' });
            console.log('\n✅ Data collection complete!\n');
        } catch (error) {
            console.error('❌ Data collection failed:', error.message);
            console.log('   Continuing with sample data...\n');
        }
    }

    // Start server
    DashboardServer.findAvailablePort(port)
        .then(availablePort => {
            const server = new DashboardServer(availablePort);
            server.start();
        })
        .catch(error => {
            console.error('❌ Failed to start server:', error.message);
            process.exit(1);
        });
}

module.exports = DashboardServer;
