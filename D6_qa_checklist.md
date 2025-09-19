# D6: QA Checklist & Re-Audit Plan

## Pre-Deployment QA Checklist

### 1. URL Status Verification (Must Pass 100%)
- [ ] All 54 URLs from D7 list return either 301 or 200
- [ ] No 404 errors remain
- [ ] No 308 temporary redirects
- [ ] No redirect chains (A→B→C)
- [ ] No redirect loops

### 2. Canonical Verification
- [ ] Every page has exactly one canonical tag
- [ ] All canonical URLs use `https://nextsteptherapy.ca` (non-www)
- [ ] No canonical URLs contain `.html`
- [ ] No canonical URLs have trailing slashes
- [ ] Self-referencing canonicals on all final destination pages

### 3. Redirect Testing Matrix
```
| Source URL | Expected Target | Status | Result |
|------------|-----------------|--------|--------|
| www.nextsteptherapy.ca | nextsteptherapy.ca | 301 | ⏳ |
| /services.html | /services | 301 | ⏳ |
| /virtual-therapy-ontario.html | /virtual-therapy-ontario | 301 | ⏳ |
| /university-anxiety.html | /students/university-anxiety | 301 | ⏳ |
```

### 4. Sitemap Validation
- [ ] sitemap.xml contains only canonical URLs
- [ ] All URLs in sitemap return 200
- [ ] No duplicate entries
- [ ] Proper XML formatting
- [ ] Submitted to Google Search Console

### 5. Page Content Validation
- [ ] CRPO #10979 visible on every page
- [ ] Emergency disclaimer in footer
- [ ] Privacy/PHIPA notice present
- [ ] No medical claims or guarantees
- [ ] Contact information accurate (416-306-2157)

### 6. Technical SEO Checks
- [ ] Title tags 50-60 characters
- [ ] Meta descriptions 150-160 characters
- [ ] H1 contains primary keyword
- [ ] Schema markup valid (test with Google Rich Results)
- [ ] Open Graph tags present

### 7. Performance Metrics
- [ ] Core Web Vitals passing
- [ ] Mobile responsive at 375px, 768px, 1024px
- [ ] Images optimized (WebP format where possible)
- [ ] Page load under 3 seconds

## Automated QA Script

```javascript
// qa-check.js
const fs = require('fs');
const https = require('https');

// Read D7 URLs
const notUpUrls = fs.readFileSync('D7_not_up_urls.txt', 'utf8')
  .split('\n')
  .filter(line => line.startsWith('https://'));

// Read sitemap URLs
const sitemapUrls = fs.readFileSync('sitemap.xml', 'utf8')
  .match(/<loc>(.*?)<\/loc>/g)
  .map(loc => loc.replace(/<\/?loc>/g, ''));

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({
        url,
        status: res.statusCode,
        location: res.headers.location
      });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR', error: err.message });
    });
  });
}

async function runQA() {
  console.log('Checking D7 URLs...');
  for (const url of notUpUrls) {
    const result = await checkUrl(url);
    console.log(`${result.status} - ${url}`);
    if (result.status === 404) {
      console.error(`❌ FAIL: ${url} still returning 404`);
    }
  }

  console.log('\nChecking Sitemap URLs...');
  for (const url of sitemapUrls) {
    const result = await checkUrl(url);
    if (result.status !== 200) {
      console.error(`❌ FAIL: Sitemap URL ${url} returns ${result.status}`);
    }
  }

  console.log('\nChecking Canonical Format...');
  for (const url of sitemapUrls) {
    if (url.includes('www.') || url.endsWith('.html') || url.endsWith('/')) {
      console.error(`❌ FAIL: Invalid canonical format: ${url}`);
    }
  }
}

runQA();
```

## Re-Audit Success Criteria

### Must Have (Launch Blockers)
- ✅ Zero 404 errors for D7 URLs
- ✅ All redirects are 301 permanent
- ✅ Canonical consistency (non-www, extensionless)
- ✅ CRPO compliance on all pages
- ✅ Contact information correct

### Should Have (Post-Launch)
- ⭐ Schema markup on all pages
- ⭐ Performance optimization complete
- ⭐ All images optimized
- ⭐ Internal linking updated

### Nice to Have (Future)
- 💫 AMP pages for mobile
- 💫 Progressive Web App features
- 💫 Advanced schema types

## Reporting Template

```markdown
## SEO Remediation Re-Audit Report
Date: [DATE]
Branch: seo/remediation-sitemap-canonicals

### Executive Summary
- Fixed: X/54 URLs
- Redirects Implemented: X
- Pages Created/Rebuilt: X
- Canonical Issues Resolved: ✅/❌

### Before/After Metrics
| Metric | Before | After | Change |
|--------|--------|-------|--------|
| 404 Errors | 54 | 0 | -100% |
| Redirect Chains | X | 0 | -100% |
| Canonical Issues | X | 0 | -100% |
| Pages in Sitemap | X | Y | +Z% |

### Detailed Results
[Include test results for each category]

### Next Steps
1. Deploy to production
2. Submit sitemap to GSC
3. Monitor for 48 hours
4. Schedule follow-up audit
```