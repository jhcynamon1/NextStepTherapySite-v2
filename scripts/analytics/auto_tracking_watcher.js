#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

/**
 * Automatic Tracking Watcher
 * 
 * This script monitors your project for new HTML files and automatically
 * adds GA4 tracking code to them. Run it in the background while developing.
 * 
 * Usage: node auto_tracking_watcher.js
 * Or: npm start (if you add it to package.json)
 */

class AutoTrackingWatcher {
    constructor() {
        this.trackingCode = `
    <!-- Google Analytics 4 + Conversion Tracking -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-J8H4YBGSHR"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-J8H4YBGSHR', {
            'allow_enhanced_conversions': true,
            'send_page_view': true
        });

        // Track form submissions
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('form').forEach(form => {
                form.addEventListener('submit', function() {
                    gtag('event', 'generate_lead', {
                        'event_category': 'conversion',
                        'value': 175,
                        'currency': 'CAD'
                    });
                });
            });

            // Track phone clicks
            document.querySelectorAll('a[href^="tel:"]').forEach(link => {
                link.addEventListener('click', function() {
                    gtag('event', 'phone_call', {
                        'event_category': 'conversion',
                        'value': 175,
                        'currency': 'CAD'
                    });
                });
            });
        });
    </script>`;

        this.watchPaths = [
            '**/*.html',
            'seo/**/*.html',
            'services/**/*.html', 
            'virtual/**/*.html',
            'blog/**/*.html'
        ];

        this.ignorePaths = [
            'node_modules/**',
            '.git/**',
            'dist/**',
            'build/**'
        ];
    }

    addTrackingToFile(filePath) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Check if tracking is already added
            if (content.includes('G-J8H4YBGSHR')) {
                console.log(`✅ Tracking already exists in: ${filePath}`);
                return false;
            }
            
            // Check if it's a valid HTML file with head section
            if (!content.includes('<head') || !content.includes('</head>')) {
                console.log(`⚠️  Not a valid HTML file (no head section): ${filePath}`);
                return false;
            }
            
            // Find the best insertion point
            let insertionPoint = null;
            let insertAfter = '';
            
            // Try to insert after charset meta tag (best practice)
            const charsetRegex = /<meta\s+charset[^>]*>/i;
            if (charsetRegex.test(content)) {
                insertionPoint = 'charset';
                insertAfter = charsetRegex;
            }
            // Fallback: insert after opening head tag
            else {
                const headRegex = /<head[^>]*>/i;
                if (headRegex.test(content)) {
                    insertionPoint = 'head';
                    insertAfter = headRegex;
                }
            }
            
            if (insertionPoint) {
                content = content.replace(insertAfter, (match) => {
                    return match + this.trackingCode;
                });
                
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`🎯 Added tracking to: ${filePath}`);
                return true;
            } else {
                console.log(`⚠️  Could not find insertion point in: ${filePath}`);
                return false;
            }
            
        } catch (error) {
            console.error(`❌ Error processing ${filePath}:`, error.message);
            return false;
        }
    }

    validateExistingFiles() {
        console.log('🔍 Checking existing HTML files for tracking...\n');
        
        const htmlFiles = this.findAllHtmlFiles();
        let addedCount = 0;
        
        htmlFiles.forEach(filePath => {
            if (this.addTrackingToFile(filePath)) {
                addedCount++;
            }
        });
        
        console.log(`\n✨ Validation complete! Added tracking to ${addedCount} files.\n`);
    }

    findAllHtmlFiles() {
        const files = [];
        
        const scanDirectory = (dir) => {
            if (!fs.existsSync(dir)) return;
            
            const items = fs.readdirSync(dir);
            
            items.forEach(item => {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory() && !this.shouldIgnoreDirectory(item)) {
                    scanDirectory(fullPath);
                } else if (stat.isFile() && item.endsWith('.html')) {
                    files.push(fullPath);
                }
            });
        };
        
        scanDirectory('.');
        return files;
    }

    shouldIgnoreDirectory(dirName) {
        const ignoreDirs = ['node_modules', '.git', 'dist', 'build', '.next'];
        return ignoreDirs.includes(dirName);
    }

    startWatching() {
        console.log('👀 Starting file watcher for automatic tracking...');
        console.log('📁 Watching paths:', this.watchPaths);
        console.log('🚫 Ignoring paths:', this.ignorePaths);
        console.log('');

        const watcher = chokidar.watch(this.watchPaths, {
            ignored: this.ignorePaths,
            persistent: true,
            ignoreInitial: true
        });

        watcher
            .on('add', (filePath) => {
                console.log(`📄 New HTML file detected: ${filePath}`);
                setTimeout(() => {
                    this.addTrackingToFile(filePath);
                }, 1000); // Small delay to ensure file is fully written
            })
            .on('change', (filePath) => {
                // Only process if tracking is missing (in case file was edited)
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    if (!content.includes('G-J8H4YBGSHR')) {
                        console.log(`🔄 HTML file changed (no tracking): ${filePath}`);
                        this.addTrackingToFile(filePath);
                    }
                } catch (error) {
                    // File might be in the middle of being written
                }
            })
            .on('error', (error) => {
                console.error('❌ Watcher error:', error);
            });

        console.log('✅ File watcher is running! Press Ctrl+C to stop.\n');
        console.log('💡 Create any new HTML file and tracking will be added automatically.\n');
    }

    run() {
        console.log('🚀 Auto Tracking System Starting...\n');
        
        // First, validate all existing files
        this.validateExistingFiles();
        
        // Then start watching for new files
        this.startWatching();
    }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Stopping file watcher...');
    process.exit(0);
});

// Check if chokidar is installed
try {
    require.resolve('chokidar');
} catch (e) {
    console.log('📦 Installing chokidar for file watching...');
    const { execSync } = require('child_process');
    try {
        execSync('npm install chokidar', { stdio: 'inherit' });
        console.log('✅ chokidar installed successfully!\n');
    } catch (installError) {
        console.error('❌ Failed to install chokidar. Please run: npm install chokidar');
        process.exit(1);
    }
}

// Run the watcher
const watcher = new AutoTrackingWatcher();
watcher.run();
