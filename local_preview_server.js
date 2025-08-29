/**
 * Local Preview Server for NextStepTherapy pSEO Templates
 * Run this to see your generated pages in a browser
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3456;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Create server
const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url}`);
    
    // Default to index page
    let filePath = req.url === '/' ? '/template_preview_sunday_anxiety.html' : req.url;
    
    // Security: prevent directory traversal
    filePath = filePath.replace(/\.\./g, '');
    
    // Get the actual file path
    const actualPath = path.join(__dirname, filePath);
    
    // Check if file exists
    fs.access(actualPath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                <head>
                    <title>404 - Page Not Found</title>
                    <style>
                        body { 
                            font-family: system-ui, -apple-system, sans-serif; 
                            max-width: 600px; 
                            margin: 100px auto; 
                            padding: 20px;
                            text-align: center;
                        }
                        h1 { color: #4A6B7A; }
                        a { 
                            color: #6B8E6F; 
                            text-decoration: none;
                            font-weight: 600;
                        }
                        .file-list {
                            text-align: left;
                            background: #f5f6f7;
                            padding: 20px;
                            border-radius: 8px;
                            margin-top: 30px;
                        }
                        .file-list a {
                            display: block;
                            padding: 8px 0;
                        }
                    </style>
                </head>
                <body>
                    <h1>404 - Page Not Found</h1>
                    <p>The page "${filePath}" was not found.</p>
                    <div class="file-list">
                        <h3>Available Preview Pages:</h3>
                        <a href="/template_preview_sunday_anxiety.html">→ Sunday Night Anxiety (Template Demo)</a>
                        <a href="/programmatic_seo_templates.html">→ Template Documentation</a>
                        <a href="/cant-stop-worrying-work.html">→ Can't Stop Worrying (If exists)</a>
                        <a href="/sunday-night-anxiety.html">→ Sunday Night Anxiety (If exists)</a>
                    </div>
                </body>
                </html>
            `);
            return;
        }
        
        // Read and serve the file
        fs.readFile(actualPath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading file');
                return;
            }
            
            // Get file extension
            const ext = path.extname(filePath).toLowerCase();
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            
            // Send the file
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        });
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   🚀 NextStep Therapy - Local Preview Server                 ║
║                                                               ║
║   Server running at: http://localhost:${PORT}                    ║
║                                                               ║
║   Available pages:                                            ║
║   → http://localhost:${PORT}/template_preview_sunday_anxiety.html ║
║   → http://localhost:${PORT}/programmatic_seo_templates.html      ║
║                                                               ║
║   Press Ctrl+C to stop the server                            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
    `);
});

// Handle server errors
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Port ${PORT} is already in use. Try closing other servers or use a different port.\n`);
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n👋 Shutting down preview server...\n');
    server.close(() => {
        process.exit(0);
    });
});
