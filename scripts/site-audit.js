const { chromium } = require('playwright');
const fs = require('fs');

async function auditSite() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const results = [];
    const visited = new Set();
    const toVisit = ['https://nextsteptherapy.ca'];
    
    while (toVisit.length > 0) {
        const url = toVisit.shift();
        
        if (visited.has(url) || !url.includes('nextsteptherapy.ca')) {
            continue;
        }
        
        visited.add(url);
        console.log(`Auditing: ${url}`);
        
        try {
            await page.goto(url, { waitUntil: 'networkidle' });
            
            // Extract page data
            const pageData = await page.evaluate(() => {
                const h1 = document.querySelector('h1')?.textContent?.trim();
                const title = document.title?.trim();
                const metaDescription = document.querySelector('meta[name="description"]')?.content?.trim();
                const firstParagraph = document.querySelector('p')?.textContent?.trim()?.substring(0, 200);
                
                // Check if it looks like a generic homepage
                const hasHeroSection = !!document.querySelector('.hero, [class*="hero"], [class*="banner"]');
                const hasServicesSection = !!document.querySelector('[class*="service"], [class*="offering"]');
                const hasAboutSection = !!document.querySelector('[class*="about"]');
                const isGeneric = hasHeroSection && hasServicesSection && hasAboutSection;
                
                // Get all internal links for crawling
                const links = Array.from(document.querySelectorAll('a[href]'))
                    .map(a => a.href)
                    .filter(href => href.includes('nextsteptherapy.ca'))
                    .filter(href => !href.includes('#'))
                    .filter(href => !href.includes('mailto:'))
                    .filter(href => !href.includes('tel:'));
                
                return {
                    h1,
                    title,
                    metaDescription,
                    firstParagraph,
                    isGeneric,
                    links: [...new Set(links)]
                };
            });
            
            // Add new links to crawl
            pageData.links.forEach(link => {
                if (!visited.has(link)) {
                    toVisit.push(link);
                }
            });
            
            // Analyze URL vs content match
            const urlPath = new URL(url).pathname.toLowerCase();
            const urlKeywords = urlPath.split(/[-\/]/).filter(word => word.length > 2);
            
            let urlContentMatch = 'good';
            let issues = [];
            
            // Check if H1 matches URL intent
            if (pageData.h1) {
                const h1Lower = pageData.h1.toLowerCase();
                const hasUrlKeywords = urlKeywords.some(keyword => 
                    h1Lower.includes(keyword) || keyword.includes(h1Lower.split(' ')[0])
                );
                
                if (!hasUrlKeywords && urlPath !== '/' && !urlPath.includes('contact') && !urlPath.includes('about')) {
                    urlContentMatch = 'poor';
                    issues.push('H1 does not match URL keywords');
                }
            } else {
                issues.push('Missing H1 tag');
            }
            
            // Check if title matches URL
            if (pageData.title) {
                const titleLower = pageData.title.toLowerCase();
                const hasUrlKeywordsInTitle = urlKeywords.some(keyword => titleLower.includes(keyword));
                
                if (!hasUrlKeywordsInTitle && urlPath !== '/' && !urlPath.includes('contact') && !urlPath.includes('about')) {
                    if (urlContentMatch === 'good') urlContentMatch = 'fair';
                    issues.push('Title does not match URL keywords');
                }
            }
            
            // Check for generic homepage content
            if (pageData.isGeneric && urlPath !== '/') {
                issues.push('Appears to be generic homepage content');
                urlContentMatch = 'poor';
            }
            
            // Check for placeholder or generic text
            const genericPhrases = [
                'welcome to our website',
                'lorem ipsum',
                'placeholder text',
                'default content',
                'coming soon'
            ];
            
            if (pageData.firstParagraph) {
                const hasGeneric = genericPhrases.some(phrase => 
                    pageData.firstParagraph.toLowerCase().includes(phrase)
                );
                if (hasGeneric) {
                    issues.push('Contains generic placeholder text');
                    urlContentMatch = 'poor';
                }
            }
            
            results.push({
                url,
                urlPath,
                h1: pageData.h1 || 'MISSING',
                title: pageData.title || 'MISSING',
                metaDescription: pageData.metaDescription || 'MISSING',
                firstParagraph: pageData.firstParagraph?.substring(0, 150) + '...' || 'MISSING',
                urlContentMatch,
                issues: issues.length > 0 ? issues : ['No issues detected'],
                isGeneric: pageData.isGeneric
            });
            
        } catch (error) {
            results.push({
                url,
                error: error.message,
                issues: ['Page failed to load']
            });
            console.log(`Error auditing ${url}: ${error.message}`);
        }
        
        // Rate limiting
        await page.waitForTimeout(1000);
    }
    
    await browser.close();
    
    // Generate report
    const report = {
        timestamp: new Date().toISOString(),
        totalPages: results.length,
        summary: {
            good: results.filter(r => r.urlContentMatch === 'good').length,
            fair: results.filter(r => r.urlContentMatch === 'fair').length,
            poor: results.filter(r => r.urlContentMatch === 'poor').length,
            errors: results.filter(r => r.error).length
        },
        pages: results
    };
    
    // Save detailed report
    fs.writeFileSync('site-audit-report.json', JSON.stringify(report, null, 2));
    
    // Create readable summary
    let summary = `NEXTSTEPTHERAPY.CA SITE AUDIT REPORT
Generated: ${report.timestamp}
Total Pages: ${report.totalPages}

SUMMARY:
✅ Good matches: ${report.summary.good}
⚠️ Fair matches: ${report.summary.fair}  
❌ Poor matches: ${report.summary.poor}
💥 Errors: ${report.summary.errors}

DETAILED FINDINGS:

`;

    results.forEach(page => {
        const status = page.urlContentMatch === 'good' ? '✅' : 
                     page.urlContentMatch === 'fair' ? '⚠️' : '❌';
        
        summary += `${status} ${page.url}
   H1: ${page.h1}
   Title: ${page.title}
   Issues: ${page.issues.join(', ')}
   
`;
    });

    fs.writeFileSync('site-audit-summary.txt', summary);
    
    console.log('\n' + summary);
    console.log('Full report saved to: site-audit-report.json');
    console.log('Summary saved to: site-audit-summary.txt');
}

auditSite().catch(console.error);