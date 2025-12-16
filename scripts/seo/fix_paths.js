const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all HTML files in public directory
const htmlFiles = glob.sync('public/*.html');

console.log(`Found ${htmlFiles.length} HTML files to fix`);

htmlFiles.forEach(filePath => {
    console.log(`Fixing paths in: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix CSS path
    content = content.replace(/href="\.\.\/css\//g, 'href="css/');
    
    // Fix image paths
    content = content.replace(/src="\.\.\/images\//g, 'src="images/');
    
    // Fix navigation links
    content = content.replace(/href="\.\.\/index\.html"/g, 'href="index.html"');
    content = content.replace(/href="\.\.\/index\.html#/g, 'href="index.html#');
    
    // Fix contact form links
    content = content.replace(/href="https:\/\/www\.nextsteptherapy\.ca\/#contact"/g, 'href="#contact"');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
});

console.log('All path fixes complete!');
