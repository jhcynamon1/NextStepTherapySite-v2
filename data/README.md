# NextStep Therapy Data

## Folder Structure

```
data/
├── keywords/       # Keyword research files
├── analytics/      # GSC, GA4, and tracking data
│   ├── gsc/       # Google Search Console exports
│   ├── ga4/       # Google Analytics 4 data
│   └── analytics_2025_11_20/  # Date-stamped exports
├── exports/        # General data exports (audits, analyses)
├── archive/        # Old data exports (historical)
└── client_source_tracking.csv  # Client acquisition tracking
```

## Active Data Files

### keywords/
- `keyword-research-list-dec2024.md` - Current keyword target list
- `keyword_research_nov_2025.csv` - November 2025 research
- `ahrefs-keywords.csv` - Ahrefs keyword export

### analytics/
- `gsc/` - Google Search Console data
  - `latest_keyword_data.json` - Current GSC performance
  - Page performance snapshots
- `ga4/` - Google Analytics 4 data
  - `conversion_data.json` - Conversion tracking

### exports/
Various data exports from audits and analyses:
- Canonical audits
- Sitemap audits
- QA results
- Ranking data

### client_source_tracking.csv
Client acquisition source tracking for business analytics.

## Data Update Schedule

| Data Type | Update Frequency |
|-----------|------------------|
| GSC data | Weekly |
| Keyword research | Monthly |
| Client tracking | Per client |
| Audits | As needed |

## Archive Policy

Move data to `archive/` when:
- Data is more than 3 months old
- Superseded by newer export
- No longer actively referenced
