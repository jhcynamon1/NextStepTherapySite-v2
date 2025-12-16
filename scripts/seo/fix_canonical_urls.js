#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing all canonical URLs to use apex domain (no www)...\n');

// Find all HTML files with www canonical URLs
const findCommand = `find . -name "*.html" -type f -exec grep -l "canonical.*www.nextsteptherapy.ca" {} \\;`;

try {
    const files = execSync(findCommand, { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.trim() !== '');

    console.log(`Found ${files.length} files with www canonical URLs:\n`);

    let fixedCount = 0;

    files.forEach(filePath => {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Replace www canonical URLs with apex domain
            const updatedContent = content.replace(
                /https:\/\/www\.nextsteptherapy\.ca/g,
                'https://nextsteptherapy.ca'
            );

            if (content !== updatedContent) {
                fs.writeFileSync(filePath, updatedContent);
                console.log(`✅ Fixed: ${filePath}`);
                fixedCount++;
            }
        } catch (error) {
            console.error(`❌ Error processing ${filePath}:`, error.message);
        }
    });

    console.log(`\n🎯 Summary: Fixed ${fixedCount} files`);
    console.log('\n✅ All canonical URLs now use apex domain (nextsteptherapy.ca)');
    console.log('\n📝 Next steps:');
    console.log('1. Set nextsteptherapy.ca as primary domain in Vercel');
    console.log('2. Set www.nextsteptherapy.ca to redirect to apex');
    console.log('3. Commit and deploy these changes');

} catch (error) {
    console.error('❌ Error finding files:', error.message);
}
