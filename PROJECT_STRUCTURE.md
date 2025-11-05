# Next Step Therapy - Project Organization

## Directory Structure

This document explains the organization of the Next Step Therapy project for easy navigation by both humans and AI agents.

### Root Directory
**Contains:** All active HTML pages (104 therapy/service pages), `index.html`, `contact.html`, `faq.html`, etc.
- These files must stay in root for proper web serving
- Also contains: `robots.txt`, essential config files

### `/docs` - All Documentation
Centralized location for all project documentation, making it easy to find guides, requirements, and reports.

- **`/docs/prds/`** - Product Requirement Documents
  - All PRD files defining features and requirements
  - Landing page production specs
  - Conversion optimization PRDs
  
- **`/docs/strategies/`** - Strategic Plans
  - SEO strategies
  - Content strategies
  - Business model documents
  - Implementation playbooks

- **`/docs/checklists/`** - Action Items & Monitoring
  - Daily/weekly checklists
  - Monitoring plans
  - Action item lists

- **`/docs/audits/`** - Audit Reports & Analysis
  - Site audits
  - Performance reports
  - Analysis documents
  - Comparison studies

- **`/docs/guides/`** - Implementation Guides
  - Setup instructions
  - How-to guides
  - Troubleshooting documentation

### `/research` - All Research & Analysis
Market intelligence and keyword research organized for AI agent access.

- **`/research/keywords/`** - Keyword Research
  - Keyword analysis files (.md, .csv)
  - Keyword opportunities
  - Search volume data

- **`/research/market/`** - Market Analysis
  - Blue ocean analysis
  - Market validation
  - Boring Marketing research
  - Business scenarios

- **`/research/competitors/`** - Competitor Intelligence
  - Competitor analysis reports
  - Content gap analysis
  - Competitive patterns

### `/scripts` - Automation Scripts
All executable scripts for automation and tooling.

- JavaScript files (`.js`)
- Shell scripts (`.sh`)
- Node automation tools
- Data collection scripts
- Schema generators

### `/data` - Data Files & Exports
Centralized data storage for analytics and exports.

- **`/data/gsc/`** - Google Search Console data
- **`/data/ga4/`** - Google Analytics 4 data
- **`/data/exports/`** - CSV, JSON, and other exports

### `/templates` - Page Templates & Drafts
Reusable templates and draft content.

- Page templates
- Prompt templates
- Draft content
- Response templates

### `/backups` - Backup Files
Historical backups and old versions.

- HTML backup files
- Deployment backups
- Historical versions

### `/archive` - Deprecated/Old Files
Files no longer actively used but kept for reference.

### Other Directories

- **`/assets/`** - Static assets
- **`/css/`** - Stylesheets
- **`/js/`** - JavaScript files for web pages
- **`/images/`** - Image assets
- **`/blog/`** - Blog content
- **`/locations/`** - Location-specific pages
- **`/services/`** - Service pages
- **`/students/`** - Student-focused pages
- **`/professionals/`** - Professional pages

## AI Agent Navigation Tips

1. **Looking for requirements?** → Check `/docs/prds/`
2. **Need strategy docs?** → Check `/docs/strategies/`
3. **Searching for keywords?** → Check `/research/keywords/`
4. **Need to run a script?** → Check `/scripts/`
5. **Looking for data?** → Check `/data/exports/`, `/data/gsc/`, or `/data/ga4/`
6. **Need a template?** → Check `/templates/`
7. **Looking for audit reports?** → Check `/docs/audits/`

## File Naming Conventions

- ALL_CAPS_WITH_UNDERSCORES.md = Documentation/reports
- lowercase-with-hyphens.html = Web pages
- lowercase_with_underscores.js = Scripts
- lowercase_data.csv = Data exports

---

**Last Updated:** October 29, 2025
**Organization Version:** 2.0

