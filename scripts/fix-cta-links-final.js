#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define the files that need CTA fixes
const FILES_TO_FIX = [
    'anxiety-therapy-ottawa.html',
    'depression-therapy-london.html',
    'counselling-kitchener.html',
    'anxiety-therapy-mississauga.html',
    'depression-therapy-mississauga.html',
    'performance-anxiety-therapy-toronto.html',
    'students/student-mental-health-hamilton.html',
    'students/student-mental-health-london.html',
    'students/student-mental-health-kingston.html',
    'students/student-mental-health-ottawa.html',
    'students/student-mental-health-waterloo.html'
];

function fixCtaLinks(filePath) {
    try {
        const fullPath = path.join('/Users/jessecynamon/NextStepTherapy', filePath);

        if (!fs.existsSync(fullPath)) {
            console.log(`❌ File not found: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(fullPath, 'utf8');

        // Track changes
        let changesMade = 0;

        // Replace all variations with standardized /#contact
        const patterns = [
            /href="#contact"/g,
            /href="\.\.\/index\.html#contact"/g,
            /href="index\.html#contact"/g
        ];

        const originalContent = content;

        patterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                changesMade += matches.length;
                content = content.replace(pattern, 'href="/#contact"');
            }
        });

        if (changesMade > 0) {
            fs.writeFileSync(fullPath, content);
            console.log(`✅ Standardized ${changesMade} CTA links in ${filePath}`);
        } else {
            console.log(`⚪ No CTA changes needed in ${filePath}`);
        }

    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
    }
}

// Process all files
console.log('🔧 Standardizing all CTA links to /#contact format...\n');

FILES_TO_FIX.forEach(filePath => {
    fixCtaLinks(filePath);
});

console.log('\n✅ CTA standardization complete!');
console.log('\n📋 All CTAs now use href="/#contact" format for consistent cross-site navigation');