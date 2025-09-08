const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { parseStringPromise } = require('xml2js');

class CanonicalAuditor {
    constructor(sitemapUrl) {
        this.sitemapUrl = sitemapUrl;
        this.results = [];
    }

    async runAudit() {
        console.log('🚀 Starting Canonical Tag Audit...');
        try {
            const urls = await this.getUrlsFromSitemap();
            console.log(`🗺️ Found ${urls.length} URLs in the sitemap.`);

            for (const url of urls) {
                await this.checkUrlForCanonical(url);
            }

            this.saveReport();
            console.log('✅ Audit complete. Report saved to canonical_audit_report.json');
        } catch (error) {
            console.error(`❌ An error occurred during the audit: ${error.message}`);
        }
    }

    async getUrlsFromSitemap() {
        try {
            const response = await axios.get(this.sitemapUrl);
            const sitemapXml = response.data;
            const result = await parseStringPromise(sitemapXml);
            return result.urlset.url.map(urlObj => urlObj.loc[0]);
        } catch (error) {
            console.error(`❌ Error fetching or parsing sitemap: ${error.message}`);
            return [];
        }
    }

    async checkUrlForCanonical(url) {
        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);
            const canonicalTag = $('link[rel="canonical"]');

            if (canonicalTag.length > 0) {
                const canonicalHref = canonicalTag.attr('href');
                console.log(`🔎 Found canonical on ${url} -> ${canonicalHref}`);
                this.results.push({
                    url: url,
                    canonicalUrl: canonicalHref,
                    isSelfReferencing: url === canonicalHref
                });
            } else {
                 this.results.push({
                    url: url,
                    canonicalUrl: 'Not Found',
                    isSelfReferencing: false
                });
            }
        } catch (error) {
            console.error(`⚠️ Could not fetch or parse ${url}: ${error.message}`);
             this.results.push({
                url: url,
                canonicalUrl: 'Error Fetching Page',
                isSelfReferencing: false
            });
        }
    }

    saveReport() {
        fs.writeFileSync('canonical_audit_report.json', JSON.stringify(this.results, null, 2));
    }
}

// Configuration
const SITEMAP_URL = 'https://www.nextsteptherapy.ca/sitemap.xml'; 

// Run the audit
(async () => {
    const auditor = new CanonicalAuditor(SITEMAP_URL);
    await auditor.runAudit();
})();
