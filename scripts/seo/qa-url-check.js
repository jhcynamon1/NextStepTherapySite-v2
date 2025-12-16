#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

class URLChecker {
    constructor() {
        this.results = {
            sitemap: [],
            d7_urls: [],
            canonicals: [],
            summary: {
                total_checks: 0,
                passed: 0,
                failed: 0,
                warnings: 0
            }
        };
    }

    async checkUrl(url, expectedStatus = 200) {
        return new Promise((resolve) => {
            const urlObj = new URL(url);
            const options = {
                hostname: urlObj.hostname,
                port: 443,
                path: urlObj.pathname,
                method: 'HEAD',
                timeout: 10000,
                headers: {
                    'User-Agent': 'SEO-Audit-Bot/1.0'
                }
            };

            const req = https.request(options, (res) => {
                resolve({
                    url,
                    status: res.statusCode,
                    location: res.headers.location,
                    expected: expectedStatus,
                    passed: res.statusCode === expectedStatus
                });
            });

            req.on('error', (err) => {
                resolve({
                    url,
                    status: 'ERROR',
                    error: err.message,
                    expected: expectedStatus,
                    passed: false
                });
            });

            req.on('timeout', () => {
                req.abort();
                resolve({
                    url,
                    status: 'TIMEOUT',
                    expected: expectedStatus,
                    passed: false
                });
            });

            req.end();
        });
    }

    async readSitemapUrls() {
        try {
            const sitemapContent = await readFile('sitemap.xml', 'utf8');
            const urls = sitemapContent
                .match(/<loc>(.*?)<\/loc>/g)
                ?.map(loc => loc.replace(/<\/?loc>/g, '')) || [];

            console.log(`📄 Found ${urls.length} URLs in sitemap.xml`);
            return urls;
        } catch (error) {
            console.error('❌ Error reading sitemap.xml:', error.message);
            return [];
        }
    }

    async readD7Urls() {
        try {
            const d7Content = await readFile('D7_not_up_urls.txt', 'utf8');
            const urls = d7Content
                .split('\n')
                .filter(line => line.startsWith('https://'))
                .slice(0, 20); // Limit to first 20 for testing

            console.log(`📄 Found ${urls.length} D7 URLs to check`);
            return urls;
        } catch (error) {
            console.error('❌ Error reading D7_not_up_urls.txt:', error.message);
            return [];
        }
    }

    validateCanonicalFormat(urls) {
        const issues = [];

        for (const url of urls) {
            if (url.includes('www.')) {
                issues.push(`❌ CANONICAL: Contains www - ${url}`);
            }
            if (url.endsWith('.html')) {
                issues.push(`❌ CANONICAL: Contains .html - ${url}`);
            }
            if (url.endsWith('/') && url !== 'https://nextsteptherapy.ca/') {
                issues.push(`❌ CANONICAL: Has trailing slash - ${url}`);
            }
            if (!url.startsWith('https://nextsteptherapy.ca/')) {
                issues.push(`❌ CANONICAL: Wrong domain - ${url}`);
            }
        }

        return issues;
    }

    async runQA() {
        console.log('🚀 Starting SEO URL QA Check\n');

        // Check Sitemap URLs
        console.log('📊 Checking Sitemap URLs (expecting 200)...');
        const sitemapUrls = await this.readSitemapUrls();

        for (const url of sitemapUrls.slice(0, 10)) { // Limit for demo
            const result = await this.checkUrl(url, 200);
            this.results.sitemap.push(result);
            this.results.summary.total_checks++;

            if (result.passed) {
                console.log(`✅ ${result.status} - ${url}`);
                this.results.summary.passed++;
            } else {
                console.log(`❌ ${result.status} - ${url}`);
                this.results.summary.failed++;
            }
        }

        // Check D7 URLs (should redirect or return 200)
        console.log('\n📊 Checking D7 URLs (expecting 301 or 200)...');
        const d7Urls = await this.readD7Urls();

        for (const url of d7Urls.slice(0, 10)) { // Limit for demo
            const result = await this.checkUrl(url);
            this.results.d7_urls.push(result);
            this.results.summary.total_checks++;

            if (result.status === 200 || result.status === 301) {
                console.log(`✅ ${result.status} - ${url}`);
                if (result.location) {
                    console.log(`   → ${result.location}`);
                }
                this.results.summary.passed++;
            } else if (result.status === 404) {
                console.log(`❌ ${result.status} - ${url} (STILL 404!)`);
                this.results.summary.failed++;
            } else {
                console.log(`⚠️  ${result.status} - ${url}`);
                this.results.summary.warnings++;
            }
        }

        // Validate Canonical Format
        console.log('\n📊 Validating Canonical URL Format...');
        const canonicalIssues = this.validateCanonicalFormat(sitemapUrls);

        if (canonicalIssues.length === 0) {
            console.log('✅ All sitemap URLs follow canonical format');
            this.results.summary.passed++;
        } else {
            console.log(`❌ Found ${canonicalIssues.length} canonical format issues:`);
            canonicalIssues.forEach(issue => console.log(issue));
            this.results.summary.failed += canonicalIssues.length;
        }

        this.results.canonicals = canonicalIssues;

        // Summary
        console.log('\n' + '='.repeat(50));
        console.log('📋 QA SUMMARY');
        console.log('='.repeat(50));
        console.log(`Total Checks: ${this.results.summary.total_checks}`);
        console.log(`✅ Passed: ${this.results.summary.passed}`);
        console.log(`❌ Failed: ${this.results.summary.failed}`);
        console.log(`⚠️  Warnings: ${this.results.summary.warnings}`);

        const successRate = ((this.results.summary.passed / this.results.summary.total_checks) * 100).toFixed(1);
        console.log(`📊 Success Rate: ${successRate}%`);

        if (this.results.summary.failed === 0) {
            console.log('\n🎉 All critical checks PASSED! Ready for deployment.');
        } else {
            console.log('\n⚠️  Some checks FAILED. Review issues before deployment.');
        }

        // Save detailed results
        fs.writeFileSync('qa-results.json', JSON.stringify(this.results, null, 2));
        console.log('\n📄 Detailed results saved to qa-results.json');
    }
}

// Run the QA check
if (require.main === module) {
    const checker = new URLChecker();
    checker.runQA().catch(console.error);
}

module.exports = URLChecker;