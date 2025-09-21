#!/usr/bin/env node

/**
 * MANUS Comprehensive Site Audit
 * Follows MANUS standards and specifications
 * Detects: 404s, soft 404s, blank pages, schema issues, CRPO compliance
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

class ManusAuditor {
    constructor() {
        this.results = [];
        this.summary = {
            totalUrls: 0,
            statusCounts: { '200': 0, '3xx': 0, '4xx': 0, '5xx': 0 },
            hardErrors: 0,
            softErrors: 0,
            notLoadingPages: 0,
            placeholderPages: 0,
            schemaMissing: 0,
            schemaInvalid: 0,
            templateViolations: 0,
            crpoReviewRequired: 0,
            brokenInternalLinks: [],
            criticalIssues: []
        };
        this.sitemap = [];
        this.internalLinks = new Set();
    }

    async loadSitemap() {
        const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
        const content = fs.readFileSync(sitemapPath, 'utf8');

        // Extract URLs from sitemap
        const urlMatches = content.match(/<loc>(.*?)<\/loc>/g);
        this.sitemap = urlMatches.map(match =>
            match.replace('<loc>', '').replace('</loc>', '')
        );

        this.summary.totalUrls = this.sitemap.length;
        console.log(`📊 Found ${this.sitemap.length} URLs in sitemap`);
    }

    async makeRequest(url, method = 'GET', timeout = 15000) {
        return new Promise((resolve, reject) => {
            const parsedUrl = new URL(url);
            const options = {
                hostname: parsedUrl.hostname,
                port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
                path: parsedUrl.pathname + parsedUrl.search,
                method: method,
                headers: {
                    'User-Agent': 'MANUS-Audit-Bot/2.0',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
                },
                timeout: timeout
            };

            const startTime = Date.now();

            const req = https.request(options, (res) => {
                let data = '';
                const redirectChain = [];

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    const loadTime = Date.now() - startTime;
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        body: data,
                        finalUrl: res.headers.location || url,
                        redirectChain: redirectChain,
                        loadTime: loadTime,
                        contentLength: data.length
                    });
                });
            });

            req.on('error', (err) => {
                const loadTime = Date.now() - startTime;
                resolve({
                    statusCode: 0,
                    error: err.message,
                    body: '',
                    finalUrl: url,
                    redirectChain: [],
                    loadTime: loadTime,
                    contentLength: 0
                });
            });

            req.on('timeout', () => {
                req.destroy();
                const loadTime = Date.now() - startTime;
                resolve({
                    statusCode: 0,
                    error: 'Request timeout > 15s',
                    body: '',
                    finalUrl: url,
                    redirectChain: [],
                    loadTime: loadTime,
                    contentLength: 0
                });
            });

            req.end();
        });
    }

    checkLocalFile(url) {
        try {
            const urlPath = new URL(url).pathname;
            let localPath = path.join(__dirname, '..', urlPath === '/' ? 'index.html' : urlPath.slice(1) + '.html');

            // Check without .html extension first
            let cleanPath = path.join(__dirname, '..', urlPath.slice(1) + '.html');
            if (urlPath !== '/' && !urlPath.endsWith('.html')) {
                cleanPath = path.join(__dirname, '..', urlPath.slice(1) + '.html');
            }

            if (fs.existsSync(localPath)) {
                const content = fs.readFileSync(localPath, 'utf8');
                return { exists: true, content, path: localPath };
            } else if (fs.existsSync(cleanPath)) {
                const content = fs.readFileSync(cleanPath, 'utf8');
                return { exists: true, content, path: cleanPath };
            }

            return { exists: false, content: '', path: localPath };
        } catch (error) {
            return { exists: false, content: '', path: '' };
        }
    }

    detectSoft404(html, url, statusCode) {
        if (statusCode !== 200) return false;

        const content = html.toLowerCase();

        // Soft 404 indicators
        const soft404Signals = [
            'page not found',
            'error 404',
            '404 error',
            'page does not exist',
            'sorry, the page',
            'coming soon',
            'under construction',
            'temporarily unavailable',
            'lorem ipsum dolor sit amet',
            'placeholder text',
            'sample content',
            'default page'
        ];

        // Check for soft 404 signals
        for (const signal of soft404Signals) {
            if (content.includes(signal)) {
                return true;
            }
        }

        // Check for extremely short content (likely empty/error page)
        const textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        if (textContent.length < 200) {
            return true;
        }

        // Check for homepage redirects that lose intent
        if (url !== 'https://nextsteptherapy.ca/' &&
            content.includes('<title>next step therapy ontario') &&
            !url.includes('nextsteptherapy.ca/index')) {
            return true;
        }

        return false;
    }

    detectNotLoading(response, html) {
        // Hard criteria for "not loading"
        if (response.statusCode === 0) return true;
        if (response.error) return true;
        if (response.loadTime > 15000) return true;
        if (response.statusCode >= 400) return true;

        // Blank or near-empty DOM
        if (!html || html.trim().length < 100) return true;

        // Check for infinite redirect chains
        if (response.redirectChain && response.redirectChain.length > 2) return true;

        return false;
    }

    analyzeContent(html, url, response) {
        const issues = [];
        const localFile = this.checkLocalFile(url);

        // If HTTP failed, check local file
        if (!html && localFile.exists) {
            html = localFile.content;
        }

        // If no content at all, it's a hard error
        if (!html) {
            issues.push('missing_page');
            return {
                issues,
                isPlaceholder: true,
                isSoft404: true,
                isNotLoading: true,
                wordCount: 0,
                hasSchema: false,
                crpoCompliant: false,
                templateCompliant: false,
                hasValidMeta: false
            };
        }

        // Detect not loading
        const isNotLoading = this.detectNotLoading(response, html);
        if (isNotLoading) {
            issues.push('not_loading');
        }

        // Detect soft 404
        const isSoft404 = this.detectSoft404(html, url, response.statusCode);
        if (isSoft404) {
            issues.push('soft_404');
        }

        // Word count analysis
        const textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
        const wordCount = textContent.split(' ').filter(word => word.length > 2).length;

        // Placeholder content detection
        const isPlaceholder = wordCount < 100 ||
            html.toLowerCase().includes('lorem ipsum') ||
            html.toLowerCase().includes('placeholder') ||
            html.toLowerCase().includes('coming soon') ||
            html.toLowerCase().includes('tbd') ||
            html === '';

        if (isPlaceholder) {
            issues.push('placeholder_content');
        }

        // Schema markup validation
        let hasSchema = false;
        let schemaValid = false;

        if (html.includes('\"@type\"') && html.includes('\"@context\"')) {
            hasSchema = true;
            try {
                const schemaMatches = html.match(/<script[^>]*type=\"application\/ld\+json\"[^>]*>(.*?)<\/script>/gs);
                if (schemaMatches) {
                    schemaMatches.forEach(match => {
                        const jsonContent = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
                        JSON.parse(jsonContent.trim());
                    });
                    schemaValid = true;
                }
            } catch (e) {
                issues.push('invalid_schema');
            }
        } else {
            issues.push('missing_schema');
        }

        // CRPO compliance check
        const crpoCompliant = html.includes('CRPO #10979') ||
                             html.includes('CRPO Registration #10979') ||
                             html.includes('crpo #10979');

        if (!crpoCompliant) {
            issues.push('missing_crpo');
        }

        // MANUS template compliance check
        const hasSharedCSS = html.includes('shared.min.css') || html.includes('/shared.min.css');
        const hasProperHeader = html.includes('class=\"header') || html.includes('class=\'header');
        const hasContainer = html.includes('class=\"container') || html.includes('class=\'container');
        const hasHeroSection = html.includes('class=\"hero') || html.includes('class=\'hero');

        const templateCompliant = hasSharedCSS && hasProperHeader && hasContainer;

        if (!templateCompliant) {
            issues.push('template_violation');
        }

        // Meta tags validation
        const hasTitle = html.includes('<title>') && !html.includes('<title></title>');
        const hasDescription = html.includes('name=\"description\"');
        const hasCanonical = html.includes('rel=\"canonical\"');
        const hasValidMeta = hasTitle && hasDescription && hasCanonical;

        if (!hasTitle) issues.push('missing_title');
        if (!hasDescription) issues.push('missing_description');
        if (!hasCanonical) issues.push('missing_canonical');

        // H1 validation
        const h1Matches = html.match(/<h1[^>]*>(.*?)<\/h1>/gi);
        if (!h1Matches || h1Matches.length === 0) {
            issues.push('missing_h1');
        } else if (h1Matches.length > 1) {
            issues.push('multiple_h1');
        }

        // Extract internal links for broken link analysis
        const linkMatches = html.match(/href=["\']([^"\']*)["\'/]/gi);
        if (linkMatches) {
            linkMatches.forEach(link => {
                const url = link.replace(/href=["\']|["\']$/g, '');
                if (url.startsWith('/') || url.includes('nextsteptherapy.ca')) {
                    this.internalLinks.add(url);
                }
            });
        }

        // Content quality assessment
        if (wordCount < 2500 && !isPlaceholder) {
            issues.push('insufficient_content');
        }

        return {
            issues,
            isPlaceholder,
            isSoft404,
            isNotLoading,
            wordCount,
            hasSchema: schemaValid,
            crpoCompliant,
            templateCompliant,
            hasValidMeta
        };
    }

    async auditUrl(url) {
        console.log(`🔍 Auditing: ${url}`);

        // HEAD request first
        const headResponse = await this.makeRequest(url, 'HEAD');

        let analysis = {
            issues: [],
            isPlaceholder: false,
            isSoft404: false,
            isNotLoading: false,
            wordCount: 0,
            hasSchema: false,
            crpoCompliant: false,
            templateCompliant: false,
            hasValidMeta: false
        };

        let finalStatusCode = headResponse.statusCode;
        let finalUrl = headResponse.finalUrl;
        let loadTime = headResponse.loadTime;

        // For 200 responses, do full GET for content analysis
        if (headResponse.statusCode === 200) {
            const getResponse = await this.makeRequest(url, 'GET');
            finalStatusCode = getResponse.statusCode;
            finalUrl = getResponse.finalUrl;
            loadTime = getResponse.loadTime;

            if (getResponse.statusCode === 200) {
                analysis = this.analyzeContent(getResponse.body, url, getResponse);
            }
        } else if (headResponse.statusCode === 0) {
            // Check local file if HTTP failed
            const localFile = this.checkLocalFile(url);
            if (localFile.exists) {
                analysis = this.analyzeContent(localFile.content, url, headResponse);
                finalStatusCode = 200;
            } else {
                finalStatusCode = 404;
                analysis.isNotLoading = true;
                analysis.issues.push('not_loading');
            }
        }

        // Determine recommended action
        let recommendedAction = 'No action needed';
        let redirectTarget = '';

        if (analysis.isNotLoading || finalStatusCode >= 400) {
            // Critical - needs direct fix
            const slug = new URL(url).pathname.replace('/', '').replace('.html', '');
            if (slug.includes('services')) {
                redirectTarget = '/counselling-ontario';
            } else if (slug.includes('contact')) {
                redirectTarget = '/';
            } else if (slug.includes('university-anxiety')) {
                redirectTarget = '/university-anxiety-therapy-ontario';
            } else if (slug.includes('virtual-therapy')) {
                redirectTarget = '/virtual-therapy-ontario';
            } else if (slug.includes('online-counselling')) {
                redirectTarget = '/virtual-therapy-ontario';
            }
            recommendedAction = redirectTarget ? `301 redirect to ${redirectTarget}` : '410 gone';
        } else if (analysis.isSoft404) {
            recommendedAction = 'Critical: Fix soft 404 content';
        } else if (analysis.isPlaceholder) {
            recommendedAction = 'PR: Rebuild with MANUS template + content';
        } else if (analysis.issues.length > 0) {
            recommendedAction = 'PR: Fix template/schema/content issues';
        }

        // Update summary counts
        if (finalStatusCode >= 200 && finalStatusCode < 300) {
            this.summary.statusCounts['200']++;
        } else if (finalStatusCode >= 300 && finalStatusCode < 400) {
            this.summary.statusCounts['3xx']++;
        } else if (finalStatusCode >= 400 && finalStatusCode < 500) {
            this.summary.statusCounts['4xx']++;
        } else if (finalStatusCode >= 500) {
            this.summary.statusCounts['5xx']++;
        }

        if (finalStatusCode >= 400 || analysis.isNotLoading) this.summary.hardErrors++;
        if (analysis.isSoft404) this.summary.softErrors++;
        if (analysis.isNotLoading) this.summary.notLoadingPages++;
        if (analysis.isPlaceholder) this.summary.placeholderPages++;
        if (!analysis.hasSchema) this.summary.schemaMissing++;
        if (analysis.issues.includes('invalid_schema')) this.summary.schemaInvalid++;
        if (!analysis.templateCompliant) this.summary.templateViolations++;
        if (!analysis.crpoCompliant) this.summary.crpoReviewRequired++;

        return {
            url,
            status: finalStatusCode,
            final_url: finalUrl,
            redirect_chain: headResponse.redirectChain || [],
            load_time_ms: loadTime,
            content_length: headResponse.contentLength || 0,
            soft_404_flag: analysis.isSoft404,
            not_loading_flag: analysis.isNotLoading,
            issue_types: analysis.issues,
            schema_status: analysis.hasSchema ? 'valid' : 'missing',
            crpo_flag: analysis.crpoCompliant,
            template_compliance_score: analysis.templateCompliant ? 1.0 : 0.0,
            recommended_action: recommendedAction,
            redirect_target: redirectTarget,
            word_count: analysis.wordCount,
            notes: analysis.issues.join(', ')
        };
    }

    async runAudit() {
        console.log('🚀 Starting MANUS comprehensive audit...\\n');

        await this.loadSitemap();

        // Process URLs in batches
        const batchSize = 3;
        for (let i = 0; i < this.sitemap.length; i += batchSize) {
            const batch = this.sitemap.slice(i, i + batchSize);
            const batchPromises = batch.map(url => this.auditUrl(url));
            const batchResults = await Promise.all(batchPromises);
            this.results.push(...batchResults);

            // Pause between batches
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        this.generateReports();
    }

    generateReports() {
        // CSV report
        const csvHeaders = [
            'url', 'status', 'final_url', 'redirect_chain', 'load_time_ms',
            'content_length', 'soft_404_flag', 'not_loading_flag', 'issue_types',
            'schema_status', 'crpo_flag', 'template_compliance_score',
            'recommended_action', 'redirect_target', 'word_count', 'notes'
        ];

        const csvRows = this.results.map(result => [
            result.url,
            result.status,
            result.final_url,
            `"[${result.redirect_chain.join(',')}]"`,
            result.load_time_ms,
            result.content_length,
            result.soft_404_flag,
            result.not_loading_flag,
            `"[${result.issue_types.join(',')}]"`,
            result.schema_status,
            result.crpo_flag,
            result.template_compliance_score,
            result.recommended_action,
            result.redirect_target,
            result.word_count,
            `"${result.notes}"`
        ]);

        const csvContent = [csvHeaders.join(','), ...csvRows.map(row => row.join(','))].join('\\n');
        fs.writeFileSync(path.join(__dirname, 'sitemap_audit.csv'), csvContent);

        // JSON report
        fs.writeFileSync(
            path.join(__dirname, 'sitemap_audit.json'),
            JSON.stringify(this.results, null, 2)
        );

        // Summary report
        const summaryContent = this.generateSummaryMarkdown();
        fs.writeFileSync(path.join(__dirname, 'summary.md'), summaryContent);

        // Failing URLs report
        const failingContent = this.generateFailingUrlsReport();
        fs.writeFileSync(path.join(__dirname, 'failing_urls.md'), failingContent);

        console.log('\\n📊 MANUS AUDIT COMPLETE');
        console.log('✅ Reports generated in /audits/');
        console.log(`\\n📈 Critical Issues Found:`)
        console.log(`   Hard 4xx/5xx Errors: ${this.summary.hardErrors}`);
        console.log(`   Soft 404s: ${this.summary.softErrors}`);
        console.log(`   Not Loading: ${this.summary.notLoadingPages}`);
        console.log(`   Placeholder Pages: ${this.summary.placeholderPages}`);
    }

    generateSummaryMarkdown() {
        const critical404s = this.results.filter(r => r.status >= 400 || r.not_loading_flag);
        const soft404s = this.results.filter(r => r.soft_404_flag);
        const placeholders = this.results.filter(r => r.word_count === 0 || r.issue_types.includes('placeholder_content'));
        const templateViolations = this.results.filter(r => r.template_compliance_score < 1.0);
        const missingSchema = this.results.filter(r => r.schema_status === 'missing');

        return `# MANUS Comprehensive Audit Summary

**Date:** ${new Date().toISOString().split('T')[0]}
**Total URLs Audited:** ${this.summary.totalUrls}
**Stack:** Static HTML on Vercel with vercel.json redirects

## Status Code Distribution
- ✅ 200 OK: ${this.summary.statusCounts['200']}
- 🔄 3xx Redirects: ${this.summary.statusCounts['3xx']}
- ❌ 4xx Errors: ${this.summary.statusCounts['4xx']}
- 🚨 5xx Errors: ${this.summary.statusCounts['5xx']}

## CRITICAL ISSUES (Require Direct Fixes)

### Hard 4xx/5xx Errors (${critical404s.length})
${critical404s.map(r => `- ${r.url} → ${r.recommended_action}`).join('\\n')}

### Soft 404s (${soft404s.length})
${soft404s.map(r => `- ${r.url} → ${r.recommended_action}`).join('\\n')}

### Not Loading Pages (${this.summary.notLoadingPages})
Pages that fail to load due to timeouts, errors, or blank content.

## NON-CRITICAL ISSUES (Require PRs)

### Placeholder Pages (${placeholders.length})
${placeholders.map(r => `- ${r.url} (${r.word_count} words)`).join('\\n')}

### Template Violations (${templateViolations.length})
Pages not using MANUS template with shared.min.css:
${templateViolations.slice(0, 10).map(r => `- ${r.url}`).join('\\n')}
${templateViolations.length > 10 ? `... and ${templateViolations.length - 10} more` : ''}

### Missing Schema Markup (${missingSchema.length})
${missingSchema.slice(0, 10).map(r => `- ${r.url}`).join('\\n')}
${missingSchema.length > 10 ? `... and ${missingSchema.length - 10} more` : ''}

### CRPO Compliance Review Required (${this.summary.crpoReviewRequired})
Pages missing CRPO #10979 registration display.

## Remediation Priorities
1. **CRITICAL (Apply Direct Fixes)**: Fix ${critical404s.length + soft404s.length} hard/soft 404s
2. **HIGH (PR Required)**: Rebuild ${placeholders.length} placeholder pages
3. **MEDIUM (PR Required)**: Fix ${templateViolations.length} template violations
4. **LOW (PR Required)**: Add schema to ${missingSchema.length} pages

## Implementation Plan
1. **Week 1**: Apply all critical fixes directly to production
2. **Week 2-3**: Submit PRs for placeholder page rebuilds
3. **Week 4**: Template standardization PRs
4. **Month 2**: Schema implementation and final QA

## Technical Notes
- **Hosting**: Vercel static deployment
- **Redirect System**: vercel.json configuration
- **Template Standard**: MANUS with shared.min.css
- **Content Requirement**: 2500+ words per page
- **Schema Standard**: JSON-LD structured data
`;
    }

    generateFailingUrlsReport() {
        const hard404s = this.results.filter(r => r.status >= 400 || r.not_loading_flag);
        const soft404s = this.results.filter(r => r.soft_404_flag);
        const notLoading = this.results.filter(r => r.not_loading_flag);

        return `# Failing URLs Report

## Hard 4xx/5xx Errors (${hard404s.length})
These pages return error status codes or fail to load:

${hard404s.map(r => `
### ${r.url}
- **Status**: ${r.status}
- **Issue**: ${r.not_loading_flag ? 'Not Loading' : 'HTTP Error'}
- **Recommended Fix**: ${r.recommended_action}
- **Notes**: ${r.notes}
`).join('\\n')}

## Soft 404s (${soft404s.length})
These pages return 200 but contain error/placeholder content:

${soft404s.map(r => `
### ${r.url}
- **Status**: ${r.status} (Soft 404)
- **Word Count**: ${r.word_count}
- **Issues**: ${r.issue_types.join(', ')}
- **Recommended Fix**: ${r.recommended_action}
`).join('\\n')}

## Not Loading Pages (${notLoading.length})
Pages that fail to render or load properly:

${notLoading.map(r => `
### ${r.url}
- **Status**: ${r.status}
- **Load Time**: ${r.load_time_ms}ms
- **Content Length**: ${r.content_length} bytes
- **Recommended Fix**: ${r.recommended_action}
`).join('\\n')}

## Proposed Direct Fixes

### 301 Redirects to Implement
${hard404s.filter(r => r.redirect_target).map(r =>
`- \`{ "source": "${new URL(r.url).pathname}", "destination": "${r.redirect_target}", "permanent": true }\``
).join('\\n')}

### 410 Gone Responses
${hard404s.filter(r => !r.redirect_target).map(r =>
`- ${r.url} - No suitable redirect target found`
).join('\\n')}
`;
    }
}

// Run the audit
if (require.main === module) {
    const auditor = new ManusAuditor();
    auditor.runAudit().catch(console.error);
}

module.exports = ManusAuditor;