#!/usr/bin/env node

/**
 * Critical CSS Extraction Tool for Next Step Therapy
 * Extracts above-the-fold CSS for mobile performance optimization
 */

const fs = require('fs');
const path = require('path');

// Critical CSS for mobile-first therapy website
const criticalCSS = `
/* Critical CSS - Above-the-fold styles for mobile performance */
:root {
    --primary-soft-blue: #4a6b7a;
    --primary-deep: #36525f;
    --accent-warm: #c4a191;
    --text-primary: #2d3748;
    --text-secondary: #4a5568;
    --background-primary: #fefefe;
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-body);
    line-height: 1.7;
    color: var(--text-primary);
    background-color: var(--background-primary);
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    overscroll-behavior: none;
    -webkit-overflow-scrolling: touch;
}

/* Critical Typography */
h1, h2, h3, h4 {
    font-family: var(--font-display);
    line-height: 1.2;
    color: var(--text-primary);
    text-rendering: optimizeSpeed;
}

h1 {
    font-size: clamp(2rem, 8vw, 3rem);
    font-weight: 600;
    font-style: italic;
    margin-bottom: 1.5rem;
}

h2 {
    font-size: clamp(1.75rem, 6vw, 2.25rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
}

p {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    max-width: 65ch;
}

/* Critical Layout */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Critical Navigation */
.nav {
    background: var(--background-primary);
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-deep);
}

/* Critical Hero Section */
.hero {
    position: relative;
    min-height: 600px;
    display: flex;
    align-items: center;
    text-align: center;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
    will-change: transform;
}

.hero-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    transform: translate3d(0,0,0);
}

.hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
}

.lead-text {
    font-size: 1.25rem;
    color: var(--text-primary);
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 60ch;
    margin-left: auto;
    margin-right: auto;
}

/* Critical CTA Buttons */
.primary-cta {
    background: var(--primary-soft-blue);
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
}

.primary-cta:hover {
    background: var(--primary-deep);
}

.secondary-ctas {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.secondary-cta {
    color: var(--primary-soft-blue);
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--primary-soft-blue);
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.secondary-cta:hover {
    background: var(--primary-soft-blue);
    color: white;
}

/* Critical Mobile Styles */
@media (max-width: 768px) {
    body {
        font-size: 16px;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .hero {
        min-height: 500px;
        padding: 2rem 0;
    }
    
    .secondary-ctas {
        flex-direction: column;
        align-items: center;
    }
    
    .secondary-cta {
        width: 100%;
        max-width: 300px;
        text-align: center;
    }
}

/* Critical Animations - Reduced Motion Friendly */
@media (prefers-reduced-motion: no-preference) {
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
}

/* Hidden elements for optimization */
.hidden-until-loaded {
    visibility: hidden;
}

.loaded .hidden-until-loaded {
    visibility: visible;
}
`;

// Function to create critical CSS file
function createCriticalCSS() {
    console.log('🎯 Creating critical CSS for mobile performance optimization...');
    
    // Write critical CSS file
    fs.writeFileSync('critical.css', criticalCSS.trim());
    
    console.log('✅ Critical CSS created: critical.css');
    console.log('📊 Size:', (criticalCSS.length / 1024).toFixed(1) + 'KB');
    console.log('');
    console.log('Next steps:');
    console.log('1. Inline this CSS in <head> for fastest render');
    console.log('2. Load remaining CSS asynchronously');
    console.log('3. Test on mobile devices');
    console.log('');
    console.log('Usage in HTML:');
    console.log('<style>' + criticalCSS.substring(0, 100) + '...</style>');
    console.log('<link rel="preload" href="remaining-styles.css" as="style" onload="this.rel=\'stylesheet\'">');
}

// Function to analyze current CSS files
function analyzeCSSFiles() {
    console.log('📋 Analyzing current CSS files...');
    console.log('');
    
    const cssDir = path.join(__dirname, 'css');
    
    if (!fs.existsSync(cssDir)) {
        console.log('❌ CSS directory not found');
        return;
    }
    
    const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
    let totalSize = 0;
    
    cssFiles.forEach(file => {
        const filePath = path.join(cssDir, file);
        const stats = fs.statSync(filePath);
        const sizeKB = (stats.size / 1024).toFixed(1);
        totalSize += stats.size;
        
        console.log(`${file}: ${sizeKB}KB`);
        
        if (stats.size > 250000) { // Files over 250KB
            console.log(`  ⚠️  Large file - consider optimization`);
        }
    });
    
    console.log('');
    console.log(`Total CSS size: ${(totalSize / 1024).toFixed(1)}KB`);
    console.log('');
    
    if (totalSize > 500000) { // Over 500KB
        console.log('🚨 CSS payload is quite large for mobile');
        console.log('   Recommendations:');
        console.log('   - Extract critical CSS (above-the-fold)');
        console.log('   - Remove unused CSS rules');
        console.log('   - Minify and compress CSS files');
        console.log('   - Load non-critical CSS asynchronously');
    }
}

// Main execution
if (require.main === module) {
    console.log('🚀 Next Step Therapy - Critical CSS Extraction Tool');
    console.log('==================================================');
    console.log('');
    
    analyzeCSSFiles();
    createCriticalCSS();
    
    console.log('🎯 Performance optimization recommendations:');
    console.log('');
    console.log('1. CRITICAL CSS (Inline in <head>):');
    console.log('   - Typography and layout for above-the-fold content');
    console.log('   - Hero section styles');
    console.log('   - Navigation styles');
    console.log('   - Critical mobile responsive styles');
    console.log('');
    console.log('2. DEFERRED CSS (Load asynchronously):');
    console.log('   - Form styles');
    console.log('   - Footer styles');
    console.log('   - Animation styles');
    console.log('   - Non-critical responsive styles');
    console.log('');
    console.log('3. EXPECTED PERFORMANCE GAINS:');
    console.log('   - Faster First Contentful Paint (FCP)');
    console.log('   - Improved Largest Contentful Paint (LCP)');
    console.log('   - Reduced render-blocking resources');
    console.log('   - Better mobile user experience');
}

module.exports = { createCriticalCSS, analyzeCSSFiles };