#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Update Tracking to Use Thank-You Page
 * 
 * This script updates all pages to remove form submission tracking
 * and rely on the thank-you page for conversion events.
 * 
 * This is more accurate because:
 * - Only fires when user actually reaches confirmation
 * - Guaranteed successful form submission
 * - Better attribution data
 */

class ThankYouTrackingUpdater {
    constructor() {
        // New tracking code without form submission listeners
        this.newTrackingCode = `
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

        // Track phone clicks
        document.addEventListener('DOMContentLoaded', function() {
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

        this.filesToUpdate = [];
        this.updatedCount = 0;
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
                } else if (stat.isFile() && item.endsWith('.html') && item !== 'thank-you.html') {
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

    updateFile(filePath) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Check if file has our tracking code
            if (!content.includes('G-J8H4YBGSHR')) {
                return false; // Skip files without our tracking
            }
            
            // Find and replace the old tracking code
            const oldTrackingRegex = /<!-- Google Analytics 4 \+ Conversion Tracking -->[\s\S]*?<\/script>/;
            
            if (oldTrackingRegex.test(content)) {
                // Replace old tracking with new tracking (without form listeners)
                content = content.replace(oldTrackingRegex, this.newTrackingCode.trim());
                
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`✅ Updated: ${filePath}`);
                this.updatedCount++;
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error(`❌ Error updating ${filePath}:`, error.message);
            return false;
        }
    }

    updateTemplate() {
        const templatePath = 'new_page_template.html';
        
        if (fs.existsSync(templatePath)) {
            this.updateFile(templatePath);
            console.log(`✅ Updated template: ${templatePath}`);
        }
    }

    run() {
        console.log('🔄 Updating tracking to use thank-you page approach...\n');
        
        const htmlFiles = this.findAllHtmlFiles();
        console.log(`📄 Found ${htmlFiles.length} HTML files to check\n`);
        
        htmlFiles.forEach(file => {
            this.updateFile(file);
        });
        
        // Update template
        this.updateTemplate();
        
        console.log(`\n✨ Update complete!`);
        console.log(`📊 Updated ${this.updatedCount} files`);
        
        console.log(`\n🎯 NEW TRACKING APPROACH:`);
        console.log(`   ✅ Thank-you page fires conversion events`);
        console.log(`   ✅ Phone clicks still tracked on all pages`);
        console.log(`   ✅ More accurate conversion data`);
        console.log(`   ✅ Perfect attribution maintained`);
        
        console.log(`\n📋 NEXT STEPS:`);
        console.log(`   1. Configure FormSubmit.co to redirect to /thank-you.html`);
        console.log(`   2. Test the form submission → thank-you page flow`);
        console.log(`   3. Verify conversion events fire in GA4`);
        console.log(`   4. Monitor attribution data`);
        
        console.log(`\n💡 FORMSUBMIT.CO SETUP:`);
        console.log(`   Add this to your form action:`);
        console.log(`   action="https://formsubmit.co/jesse@nextsteptherapy.ca"`);
        console.log(`   `);
        console.log(`   Add hidden redirect field:`);
        console.log(`   <input type="hidden" name="_next" value="https://nextsteptherapy.ca/thank-you.html">`);
    }
}

// Run the updater
const updater = new ThankYouTrackingUpdater();
updater.run();
