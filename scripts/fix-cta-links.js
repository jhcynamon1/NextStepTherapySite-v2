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

        // Fix main CTA links: #contact should become index.html#contact or /#contact
        const isInSubfolder = filePath.includes('/');
        const homeReference = isInSubfolder ? '../index.html#contact' : '/#contact';

        // Replace all instances of href="#contact" with proper homepage reference
        const originalContent = content;
        content = content.replace(/href="#contact"/g, `href="${homeReference}"`);

        if (content !== originalContent) {
            changesMade += (originalContent.match(/href="#contact"/g) || []).length;
        }

        if (changesMade > 0) {
            fs.writeFileSync(fullPath, content);
            console.log(`✅ Fixed ${changesMade} CTA links in ${filePath}`);
        } else {
            console.log(`⚪ No CTA changes needed in ${filePath}`);
        }

    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
    }
}

// Process all files
console.log('🔧 Fixing CTA links to point to homepage contact form...\n');

FILES_TO_FIX.forEach(filePath => {
    fixCtaLinks(filePath);
});

console.log('\n✅ CTA link fixes complete!');
console.log('\n📋 Summary: All main "Book Free Consultation" CTAs now link to homepage contact form per Manus standards');