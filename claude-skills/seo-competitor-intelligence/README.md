# SEO Competitor Intelligence Skill

A Claude Skill for analyzing top-ranking competitor pages and generating actionable "beat the competition" content briefs.

## What This Skill Does

Analyzes 5 top-ranking competitor pages to extract:
- Content structure (headings, word count, readability)
- Schema markup usage (and gaps)
- E-E-A-T signals (credentials, citations, trust indicators)
- Topic clusters (what's covered, what's missing)
- Local SEO signals (for Ontario therapy content)

Outputs a complete competitive brief you can use to create content that outranks competitors.

## Files Included

```
seo_competitor_intelligence/
├── seo_competitor_intelligence.md   # Main skill instructions
├── README.md                         # This file
├── scripts/
│   ├── analyze_structure.py         # Analyze content structure
│   ├── analyze_schema.py            # Analyze schema markup
│   ├── analyze_eeat.py              # Analyze E-E-A-T signals
│   └── generate_brief.py            # Generate competitive brief
└── references/
    └── seo_framework.md             # Healthcare SEO framework
```

## How to Install

1. Download the .zip file
2. Go to claude.ai
3. Click Settings → Capabilities → Upload a skill
4. Upload `seo_competitor_intelligence.zip`
5. Skill is now available in all conversations

## How to Use

### Basic Usage

```
Use the SEO Competitor Intelligence skill to analyze:

Target keyword: "anxiety therapy ontario"

Competitor URLs:
1. https://competitor1.com/page
2. https://competitor2.com/page
3. https://competitor3.com/page
4. https://competitor4.com/page
5. https://competitor5.com/page

My unique differentiators:
- CRPO #10979
- ACT therapy specialization
- Virtual-first practice
- Same-week availability
```

### What You'll Get

A comprehensive competitive brief including:
- Benchmark averages (word count, heading structure, etc.)
- Schema usage comparison
- E-E-A-T signal comparison
- Topic clusters (core, secondary, gaps)
- Content gap opportunities
- Schema opportunities
- E-E-A-T opportunities
- Recommended word count
- Expected impact

## Use Cases

### 1. Before Writing New Content
Get intelligence on what's already ranking to beat competitors from the start.

### 2. Optimizing Existing Pages
Identify gaps in your current content compared to top rankers.

### 3. Location Page Strategy
Analyze competitors in multiple cities to create unique, valuable location pages.

### 4. Blog Post Planning
Find underserved topics and angles competitors miss.

## Python Dependencies

If you want to run the scripts locally (optional):

```bash
pip install beautifulsoup4 textstat
```

Scripts are designed to run within Claude's environment, so local installation is not required.

## Best Practices

### Get Better Results
1. **Use Ahrefs SERP analysis** to get top 5 competitors
2. **Include your differentiators** so Claude can identify your advantages
3. **Be specific about keyword** (not just "therapy" but "anxiety therapy ontario")
4. **Check all 5 URLs** are actually ranking for your target keyword

### Therapy/Healthcare Content
- E-E-A-T is CRITICAL (YMYL content)
- MedicalWebPage schema strongly recommended
- Author credentials must be visible
- Citations to authoritative sources required

### Ontario Local SEO
- LocalBusiness schema with address
- CRPO license number (specific, not just "registered")
- Ontario insurance details
- City-specific content for location pages

## Troubleshooting

**"Unable to scrape URLs"**
- Make sure URLs are accessible
- Check if sites block scraping
- Try alternate URLs from same competitor

**"Not enough data"**
- Need at least 3 competitor URLs
- URLs must have substantial content (1000+ words)

**"Schema not detected"**
- Some sites use microdata (not JSON-LD)
- Manually check view-source for schema

## Future Enhancements

Planned features:
- Automated Ahrefs integration
- Batch analysis (analyze 10+ keywords at once)
- Track competitors over time
- Alert when competitors change

## Support

For issues or questions:
- Check claude.ai documentation on Skills
- Review the main skill .md file for detailed instructions

## Version

Version 1.0 - October 2025
Built for therapy/healthcare SEO in Ontario, Canada

---

**Ready to dominate your niche with data-driven competitive intelligence.**
