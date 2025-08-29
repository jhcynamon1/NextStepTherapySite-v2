#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Tracking Validation Script
 * 
 * This script scans all HTML files and reports which ones
 * are missing GA4 tracking code. Run this regularly to ensure
 * all pages have proper tracking.
 * 
 * Usage: node validate_tracking.js
 */

class TrackingValidator {
    constructor() {
        this.trackingId = 'G-J8H4YBGSHR';
        this.results = {
            withTracking: [],
            missingTracking: [],
            invalidFiles: []
        };
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
        const ignoreDirs = ['node_modules', '.git', 'dist', 'build', '.next', 'playwright_env'];
        return ignoreDirs.includes(dirName);
    }

    validateFile(filePath) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Check if it's a valid HTML file
            if (!content.includes('<html') && !content.includes('<head')) {
                this.results.invalidFiles.push({
                    file: filePath,
                    reason: 'Not a valid HTML file'
                });
                return;
            }
            
            // Check for tracking code
            const hasTrackingId = content.includes(this.trackingId);
            const hasGtagConfig = content.includes('gtag(\'config\'');
            const hasConversionEvents = content.includes('generate_lead') && content.includes('phone_call');
            
            const trackingStatus = {
                file: filePath,
                hasTrackingId,
                hasGtagConfig,
                hasConversionEvents,
                isComplete: hasTrackingId && hasGtagConfig && hasConversionEvents
            };
            
            if (trackingStatus.isComplete) {
                this.results.withTracking.push(trackingStatus);
            } else {
                this.results.missingTracking.push(trackingStatus);
            }
            
        } catch (error) {
            this.results.invalidFiles.push({
                file: filePath,
                reason: error.message
            });
        }
    }

    generateReport() {
        console.log('🔍 TRACKING VALIDATION REPORT');
        console.log('==============================\n');
        
        const totalFiles = this.results.withTracking.length + 
                          this.results.missingTracking.length + 
                          this.results.invalidFiles.length;
        
        console.log('📊 SUMMARY:');
        console.log(`Total HTML files: ${totalFiles}`);
        console.log(`✅ With complete tracking: ${this.results.withTracking.length}`);
        console.log(`⚠️  Missing/incomplete tracking: ${this.results.missingTracking.length}`);
        console.log(`❌ Invalid files: ${this.results.invalidFiles.length}\n`);
        
        // Show files with complete tracking
        if (this.results.withTracking.length > 0) {
            console.log('✅ FILES WITH COMPLETE TRACKING:');
            this.results.withTracking.forEach(file => {
                console.log(`   • ${file.file}`);
            });
            console.log('');
        }
        
        // Show files missing tracking
        if (this.results.missingTracking.length > 0) {
            console.log('⚠️  FILES MISSING/INCOMPLETE TRACKING:');
            this.results.missingTracking.forEach(file => {
                console.log(`   • ${file.file}`);
                if (!file.hasTrackingId) console.log(`     - Missing GA4 tracking ID (${this.trackingId})`);
                if (!file.hasGtagConfig) console.log(`     - Missing gtag configuration`);
                if (!file.hasConversionEvents) console.log(`     - Missing conversion events (generate_lead, phone_call)`);
            });
            console.log('');
        }
        
        // Show invalid files
        if (this.results.invalidFiles.length > 0) {
            console.log('❌ INVALID FILES:');
            this.results.invalidFiles.forEach(file => {
                console.log(`   • ${file.file} - ${file.reason}`);
            });
            console.log('');
        }
        
        // Recommendations
        this.generateRecommendations();
    }

    generateRecommendations() {
        console.log('💡 RECOMMENDATIONS:\n');
        
        if (this.results.missingTracking.length > 0) {
            console.log('🔧 TO FIX MISSING TRACKING:');
            console.log('   1. Run: node add_tracking_to_seo_pages.js');
            console.log('   2. Or manually add tracking code to each file');
            console.log('   3. Use new_page_template.html for new pages\n');
        }
        
        if (this.results.withTracking.length === 0) {
            console.log('🚨 NO FILES HAVE TRACKING!');
            console.log('   Run the tracking installation script immediately:\n');
            console.log('   node add_tracking_to_seo_pages.js\n');
        }
        
        if (this.results.missingTracking.length === 0 && this.results.withTracking.length > 0) {
            console.log('🎉 ALL FILES HAVE COMPLETE TRACKING!');
            console.log('   Your conversion tracking is properly set up.\n');
        }
        
        console.log('📅 ONGOING MAINTENANCE:');
        console.log('   • Run this validation script weekly');
        console.log('   • Use the file watcher for automatic tracking');
        console.log('   • Always use the template for new pages');
        console.log('   • Monitor GA4 for tracking issues\n');
    }

    fixMissingTracking() {
        if (this.results.missingTracking.length === 0) {
            console.log('✅ No files need fixing!');
            return;
        }
        
        console.log(`🔧 Attempting to fix ${this.results.missingTracking.length} files...\n`);
        
        const trackingCode = `
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
        
        let fixedCount = 0;
        
        this.results.missingTracking.forEach(fileInfo => {
            try {
                let content = fs.readFileSync(fileInfo.file, 'utf8');
                
                // Find insertion point
                const charsetRegex = /<meta\s+charset[^>]*>/i;
                const headRegex = /<head[^>]*>/i;
                
                if (charsetRegex.test(content)) {
                    content = content.replace(charsetRegex, (match) => match + trackingCode);
                    fs.writeFileSync(fileInfo.file, content, 'utf8');
                    console.log(`✅ Fixed: ${fileInfo.file}`);
                    fixedCount++;
                } else if (headRegex.test(content)) {
                    content = content.replace(headRegex, (match) => match + trackingCode);
                    fs.writeFileSync(fileInfo.file, content, 'utf8');
                    console.log(`✅ Fixed: ${fileInfo.file}`);
                    fixedCount++;
                } else {
                    console.log(`⚠️  Could not fix: ${fileInfo.file} (no insertion point found)`);
                }
                
            } catch (error) {
                console.log(`❌ Error fixing ${fileInfo.file}: ${error.message}`);
            }
        });
        
        console.log(`\n🎉 Fixed tracking on ${fixedCount} files!`);
        
        if (fixedCount > 0) {
            console.log('\n🔄 Re-running validation to confirm fixes...\n');
            this.run(false); // Re-run without fix option
        }
    }

    run(offerFix = true) {
        console.log('🚀 Starting tracking validation...\n');
        
        const htmlFiles = this.findAllHtmlFiles();
        console.log(`📄 Found ${htmlFiles.length} HTML files\n`);
        
        htmlFiles.forEach(file => this.validateFile(file));
        
        this.generateReport();
        
        // Offer to fix missing tracking
        if (offerFix && this.results.missingTracking.length > 0) {
            const readline = require('readline');
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            
            rl.question('🔧 Would you like to automatically fix missing tracking? (y/n): ', (answer) => {
                if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
                    this.fixMissingTracking();
                } else {
                    console.log('💡 You can fix manually or run: node add_tracking_to_seo_pages.js');
                }
                rl.close();
            });
        }
    }
}

// Run the validator
const validator = new TrackingValidator();
validator.run();
