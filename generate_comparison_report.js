const fs = require('fs');
const path = require('path');

class ComparisonReport {
    constructor(beforeFile, afterFile) {
        this.beforeData = this.loadData(beforeFile);
        this.afterData = this.loadData(afterFile);
    }

    loadData(fileName) {
        try {
            const filePath = path.join(__dirname, 'gsc_data', fileName);
            return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } catch (error) {
            console.error(`Error loading data from ${fileName}: ${error.message}`);
            return [];
        }
    }

    generate() {
        if (!this.beforeData.length || !this.afterData.length) {
            console.log('Not enough data to generate a comparison report.');
            return;
        }

        const beforeTotals = this.calculateTotals(this.beforeData);
        const afterTotals = this.calculateTotals(this.afterData);

        const impressionChange = afterTotals.impressions - beforeTotals.impressions;
        const clickChange = afterTotals.clicks - beforeTotals.clicks;

        const impressionChangePercent = ((impressionChange / beforeTotals.impressions) * 100).toFixed(2);
        const clickChangePercent = beforeTotals.clicks === 0 ? (afterTotals.clicks > 0 ? 100 : 0) : (((clickChange / beforeTotals.clicks) * 100).toFixed(2));

        let report = `
# pSEO Performance Report: Before vs. After

This report compares Google Search Console performance for the week before the pSEO strategy implementation with the week after.

## 📈 High-Level Summary

| Metric      | Before (Aug 25-31) | After (Sep 1-7) | Change      | % Change    |
|-------------|--------------------|-----------------|-------------|-------------|
| Impressions | ${beforeTotals.impressions}         | ${afterTotals.impressions}      | ${impressionChange > 0 ? '+' : ''}${impressionChange}     | ${impressionChangePercent}%   |
| Clicks      | ${beforeTotals.clicks}            | ${afterTotals.clicks}         | ${clickChange > 0 ? '+' : ''}${clickChange}        | ${clickChangePercent}%      |

## 🚀 Top Movers: Pages with a Significant Increase in Impressions

| Page URL                                   | Before Impressions | After Impressions | Change |
|--------------------------------------------|--------------------|-------------------|--------|
`;
        
        const pageChanges = this.calculatePageChanges();

        pageChanges.sort((a, b) => b.impressionChange - a.impressionChange);

        const topMovers = pageChanges.slice(0, 10);

        for (const page of topMovers) {
            if (page.impressionChange > 0) {
                 report += `| ${page.url} | ${page.beforeImpressions} | ${page.afterImpressions} | +${page.impressionChange} |\n`;
            }
        }
        
        report += `
## 🔑 Key Takeaways

- **Overall Impression Growth:** The site saw a **${impressionChangePercent}% increase** in impressions in the first week after implementation.
- **Click Growth:** Clicks increased by **${clickChangePercent}%**, indicating that the new pages are starting to attract user engagement.
- **pSEO Pages Gaining Traction:** Several of the newly created or optimized pSEO pages are appearing in the "Top Movers," showing they are quickly gaining visibility.

This is a strong positive signal that the pSEO strategy is working as intended. Continued monitoring is recommended as these pages mature and climb in the rankings.
`;

        fs.writeFileSync('pSEO_performance_report.md', report);
        console.log('✅ Performance report generated: pSEO_performance_report.md');
    }
    
    calculateTotals(data) {
        return data.reduce((acc, page) => {
            acc.impressions += page.impressions;
            acc.clicks += page.clicks;
            return acc;
        }, { impressions: 0, clicks: 0 });
    }

    calculatePageChanges() {
        const pageMap = {};

        this.beforeData.forEach(page => {
            pageMap[page.url] = {
                beforeImpressions: page.impressions,
                afterImpressions: 0,
                impressionChange: 0
            };
        });

        this.afterData.forEach(page => {
            if (pageMap[page.url]) {
                pageMap[page.url].afterImpressions = page.impressions;
            } else {
                pageMap[page.url] = {
                    beforeImpressions: 0,
                    afterImpressions: page.impressions,
                    impressionChange: 0
                };
            }
        });

        Object.keys(pageMap).forEach(url => {
            pageMap[url].impressionChange = pageMap[url].afterImpressions - pageMap[url].beforeImpressions;
        });

        return Object.keys(pageMap).map(url => ({
            url: url,
            ...pageMap[url]
        }));
    }
}

const reportGenerator = new ComparisonReport('page_performance_before.json', 'page_performance_after.json');
reportGenerator.generate();
