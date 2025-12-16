# NextStep Therapy Scripts

## Folder Structure

```
scripts/
├── generators/     # Page and content generation scripts
├── analytics/      # GSC, GA4, tracking scripts
├── seo/           # Schema, canonical, keyword, audit scripts
├── build/         # Optimization, sitemap, image processing
├── archive/       # Old/deprecated scripts (kept for reference)
└── [root files]   # Servers and utilities
```

## Active Scripts

### Root Level (Servers & Utilities)
- `dashboard_server.js` - Local development dashboard
- `local_preview_server.js` - Local site preview
- `no_cache_server.py` - Cache-busting development server
- `manus-mcp-server.js` - MCP server integration
- `save_token.js` - Token management utility
- `prompt.py` - Prompt utilities

### generators/
Page generation scripts for creating new therapy pages.
- `create_new_page.js` - Interactive page creator
- `generate-city-service-page.js` - City-specific service pages
- `generate-location-page.js` - Location-based pages
- `pseo_generator.js` - Programmatic SEO page generator

### analytics/
Google Search Console and analytics extraction.
- `gsc_auth.js` - GSC authentication
- `gsc_automated_extractor.js` - Automated GSC data extraction
- `enhanced_gsc_page_extractor.js` - Enhanced page extraction
- `gsc_conversion_attribution.js` - Conversion attribution
- `track-page-performance.js` - Performance tracking

### seo/
Schema, canonical, keyword research, and auditing tools.
- `ai_schema_generator.js` - AI-powered schema generation
- `canonical_tag_auditor.js` - Canonical URL auditing
- `site-audit.js` - Comprehensive site audit
- `dataforseo_keyword_analysis_script.js` - DataForSEO keyword analysis
- Various keyword validation scripts

### build/
Build and optimization scripts.
- `optimize-images.js` - Image optimization
- `generate-sitemap.mjs` - Sitemap generation
- `generate-comprehensive-sitemap.sh` - Full sitemap generation

### archive/
Deprecated scripts kept for reference. These are old versions or one-time fix scripts.
- Multiple CTA fix scripts (superseded)
- Old tracking implementations
- Financial modeling scripts
- Legacy fix scripts

## Usage Notes

Most scripts are run via Node.js:
```bash
node scripts/generators/create_new_page.js
```

Python scripts:
```bash
python3 scripts/no_cache_server.py
```

Shell scripts:
```bash
bash scripts/build/generate-comprehensive-sitemap.sh
```
