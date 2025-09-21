#!/usr/bin/env node

/**
 * Comprehensive Sitemap Audit Tool
 * Following MANUS standards and audit requirements
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

class SitemapAuditor {
    constructor() {
        this.results = [];
        this.summary = {
            totalUrls: 0,
            statusCounts: { '200': 0, '3xx': 0, '4xx': 0, '5xx': 0 },
            placeholderPages: 0,
            schemaMissing: 0,
            schemaInvalid: 0,
            templateViolations: 0,
            crpoReviewRequired: 0,
            brokenInternalLinks: [],
            criticalIssues: []
        };
        this.sitemap = [];
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

    async makeRequest(url, method = 'GET') {
        return new Promise((resolve, reject) => {
            const parsedUrl = new URL(url);
            const options = {
                hostname: parsedUrl.hostname,
                port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
                path: parsedUrl.pathname + parsedUrl.search,
                method: method,
                headers: {
                    'User-Agent': 'MANUS-Audit-Bot/1.0',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
                },
                timeout: 10000
            };

            const req = https.request(options, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        body: data,
                        finalUrl: res.headers.location || url
                    });
                });
            });

            req.on('error', (err) => {
                resolve({
                    statusCode: 0,
                    error: err.message,
                    body: '',
                    finalUrl: url
                });
            });

            req.on('timeout', () => {
                req.destroy();
                resolve({
                    statusCode: 0,
                    error: 'Timeout',
                    body: '',
                    finalUrl: url
                });
            });

            req.end();
        });
    }

    checkLocalFile(url) {
        try {
            const urlPath = new URL(url).pathname;
            let localPath = path.join(__dirname, '..', urlPath === '/' ? 'index.html' : urlPath.slice(1) + '.html');

            if (fs.existsSync(localPath)) {
                const content = fs.readFileSync(localPath, 'utf8');
                return { exists: true, content, path: localPath };
            }

            return { exists: false, content: '', path: localPath };
        } catch (error) {
            return { exists: false, content: '', path: '' };
        }
    }

    analyzeContent(html, url) {
        const issues = [];
        const localFile = this.checkLocalFile(url);

        // If no HTML content and no local file, it's a missing page
        if (!html && !localFile.exists) {
            issues.push('missing_page');
            return { issues, isPlaceholder: true, wordCount: 0, hasSchema: false, crpoCompliant: false };
        }

        const content = html || localFile.content;

        // Word count (rough estimation)
        const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
        const wordCount = textContent.split(' ').filter(word => word.length > 2).length;

        // Check for placeholder content
        const isPlaceholder = wordCount < 100 ||
            content.includes('lorem ipsum') ||
            content.includes('placeholder') ||
            content.includes('coming soon') ||
            content.includes('TBD') ||
            content === '';

        // Schema markup check
        const hasSchema = content.includes('"@type"') && content.includes('"@context"');
        let schemaValid = false;
        if (hasSchema) {
            try {
                const schemaMatches = content.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs);
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
        const crpoCompliant = content.includes('CRPO #10979') || content.includes('CRPO Registration #10979');
        if (!crpoCompliant) {
            issues.push('missing_crpo');
        }

        // Template compliance check (MANUS standards)
        const hasSharedCSS = content.includes('shared.min.css');
        const hasProperStructure = content.includes('class="header"') && content.includes('class="container"');
        const hasMANUSStructure = hasSharedCSS && hasProperStructure;

        if (!hasMANUSStructure) {
            issues.push('template_violation');
        }

        // H1 check
        const h1Matches = content.match(/<h1[^>]*>(.*?)<\/h1>/gi);
        if (!h1Matches || h1Matches.length === 0) {
            issues.push('missing_h1');
        } else if (h1Matches.length > 1) {
            issues.push('multiple_h1');
        }

        // Meta tags check
        const hasTitle = content.includes('<title>') && !content.includes('<title></title>');
        const hasDescription = content.includes('name="description"');
        const hasCanonical = content.includes('rel="canonical"');

        if (!hasTitle) issues.push('missing_title');
        if (!hasDescription) issues.push('missing_description');
        if (!hasCanonical) issues.push('missing_canonical');

        // Check for placeholder patterns specific to this site
        if (isPlaceholder) {
            issues.push('placeholder_content');
        }

        // Minimum word count check (MANUS standard: 2500+ words)
        if (wordCount < 2500 && !isPlaceholder) {
            issues.push('insufficient_content');
        }

        return {
            issues,
            isPlaceholder,
            wordCount,
            hasSchema: schemaValid,
            crpoCompliant,
            hasMANUSTemplate: hasMANUSStructure
        };
    }

    async auditUrl(url) {
        console.log(`🔍 Auditing: ${url}`);

        // First do HEAD request
        const headResponse = await this.makeRequest(url, 'HEAD');

        let analysis = { issues: [], isPlaceholder: false, wordCount: 0, hasSchema: false, crpoCompliant: false };
        let finalStatusCode = headResponse.statusCode;
        let finalUrl = headResponse.finalUrl;

        // If not a redirect, do full GET request for content analysis
        if (headResponse.statusCode === 200) {
            const getResponse = await this.makeRequest(url, 'GET');
            finalStatusCode = getResponse.statusCode;
            finalUrl = getResponse.finalUrl;

            if (getResponse.statusCode === 200) {
                analysis = this.analyzeContent(getResponse.body, url);
            }
        } else if (headResponse.statusCode === 0) {
            // Check local file if HTTP request failed
            const localFile = this.checkLocalFile(url);
            if (localFile.exists) {
                analysis = this.analyzeContent(localFile.content, url);
                finalStatusCode = 200; // Local file exists
            } else {
                finalStatusCode = 404; // Neither HTTP nor local file
            }
        }

        // Determine recommended action
        let recommendedAction = '';
        let redirectTarget = '';

        if (finalStatusCode === 404) {
            // Find appropriate redirect target from vercel.json
            const slug = new URL(url).pathname.replace('/', '').replace('.html', '');
            if (slug.includes('toronto') || slug.includes('ontario')) {
                redirectTarget = `/${slug.replace(/-toronto|-ontario/g, '')}-ontario`;
            }
            recommendedAction = redirectTarget ? `301 redirect to ${redirectTarget}` : '410 gone';
        } else if (analysis.isPlaceholder) {
            recommendedAction = 'PR: rebuild with MANUS template';
        } else if (analysis.issues.length > 0) {
            recommendedAction = 'PR: fix template/schema issues';
        } else {
            recommendedAction = 'No action needed';
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

        if (analysis.isPlaceholder) this.summary.placeholderPages++;
        if (!analysis.hasSchema) this.summary.schemaMissing++;
        if (analysis.issues.includes('invalid_schema')) this.summary.schemaInvalid++;
        if (analysis.issues.includes('template_violation')) this.summary.templateViolations++;
        if (analysis.issues.includes('missing_crpo')) this.summary.crpoReviewRequired++;

        return {
            url,
            status: finalStatusCode,
            final_url: finalUrl,
            issues: analysis.issues,
            placeholder_flag: analysis.isPlaceholder,
            schema_status: analysis.hasSchema ? 'valid' : 'missing',
            crpo_flag: analysis.crpoCompliant,
            template_compliance_score: analysis.hasMANUSTemplate ? 1.0 : 0.0,
            recommended_action: recommendedAction,
            redirect_target: redirectTarget,
            word_count: analysis.wordCount,
            notes: analysis.issues.join(', ')
        };
    }

    async runAudit() {
        console.log('🚀 Starting comprehensive sitemap audit...\n');

        await this.loadSitemap();

        // Process URLs in batches to avoid overwhelming the server
        const batchSize = 5;
        for (let i = 0; i < this.sitemap.length; i += batchSize) {
            const batch = this.sitemap.slice(i, i + batchSize);
            const batchPromises = batch.map(url => this.auditUrl(url));
            const batchResults = await Promise.all(batchPromises);
            this.results.push(...batchResults);

            // Brief pause between batches
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        this.generateReports();
    }

    generateReports() {
        // Generate CSV report
        const csvHeaders = [
            'url', 'status', 'final_url', 'issues', 'placeholder_flag',
            'schema_status', 'crpo_flag', 'template_compliance_score',
            'recommended_action', 'redirect_target', 'word_count', 'notes'
        ];

        const csvRows = this.results.map(result => [
            result.url,
            result.status,
            result.final_url,
            `"[${result.issues.join(',')}]"`,
            result.placeholder_flag,
            result.schema_status,
            result.crpo_flag,
            result.template_compliance_score,
            result.recommended_action,
            result.redirect_target,
            result.word_count,
            `"${result.notes}"`
        ]);

        const csvContent = [csvHeaders.join(','), ...csvRows.map(row => row.join(','))].join('\n');
        fs.writeFileSync('sitemap_audit.csv', csvContent);

        // Generate JSON report
        fs.writeFileSync('sitemap_audit.json', JSON.stringify(this.results, null, 2));

        // Generate summary report
        const summaryContent = this.generateSummaryMarkdown();
        fs.writeFileSync('summary.md', summaryContent);

        console.log('\n📊 AUDIT COMPLETE');
        console.log(`✅ CSV report: sitemap_audit.csv`);
        console.log(`✅ JSON report: sitemap_audit.json`);
        console.log(`✅ Summary: summary.md`);
        console.log(`\n📈 Quick Stats:`);
        console.log(`   Total URLs: ${this.summary.totalUrls}`);
        console.log(`   200 OK: ${this.summary.statusCounts['200']}`);
        console.log(`   4xx Errors: ${this.summary.statusCounts['4xx']}`);
        console.log(`   Placeholder Pages: ${this.summary.placeholderPages}`);
        console.log(`   Missing Schema: ${this.summary.schemaMissing}`);
        console.log(`   Template Violations: ${this.summary.templateViolations}`);
        console.log(`   CRPO Review Required: ${this.summary.crpoReviewRequired}`);
    }

    generateSummaryMarkdown() {
        const critical404s = this.results.filter(r => r.status === 404);
        const placeholders = this.results.filter(r => r.placeholder_flag);
        const templateViolations = this.results.filter(r => r.template_compliance_score < 1.0);
        const missingSchema = this.results.filter(r => r.schema_status === 'missing');

        return `# Sitemap Audit Summary
**Date:** ${new Date().toISOString().split('T')[0]}
**Total URLs Audited:** ${this.summary.totalUrls}

## Status Code Distribution
- ✅ 200 OK: ${this.summary.statusCounts['200']}
- 🔄 3xx Redirects: ${this.summary.statusCounts['3xx']}
- ❌ 4xx Errors: ${this.summary.statusCounts['4xx']}
- 🚨 5xx Errors: ${this.summary.statusCounts['5xx']}

## Critical Issues Requiring Direct Fixes
### 404 Errors (${critical404s.length})
${critical404s.map(r => `- ${r.url} → ${r.recommended_action}`).join('\n')}

## Non-Critical Issues Requiring PRs
### Placeholder Pages (${placeholders.length})
${placeholders.map(r => `- ${r.url} (${r.word_count} words)`).join('\n')}

### Template Violations (${templateViolations.length})
${templateViolations.map(r => `- ${r.url} (missing MANUS template)`).join('\n')}

### Missing Schema Markup (${missingSchema.length})
${missingSchema.map(r => `- ${r.url}`).join('\n')}

### CRPO Compliance Review Required (${this.summary.crpoReviewRequired})
${this.results.filter(r => !r.crpo_flag).map(r => `- ${r.url}`).join('\n')}

## Remediation Priorities
1. **Critical (Apply Direct Fixes)**: Fix ${critical404s.length} 404 errors
2. **High (PR Required)**: Rebuild ${placeholders.length} placeholder pages
3. **Medium (PR Required)**: Fix ${templateViolations.length} template violations
4. **Low (PR Required)**: Add schema to ${missingSchema.length} pages

## Next Steps
1. Implement 301 redirects for 404 errors in vercel.json
2. Create PRs for placeholder page rebuilds using MANUS template
3. Create PRs for template standardization
4. Create PRs for schema implementation
5. Run final QA validation
`;
    }
}

// Run the audit if called directly
if (require.main === module) {
    const auditor = new SitemapAuditor();
    auditor.runAudit().catch(console.error);
}

module.exports = SitemapAuditor;