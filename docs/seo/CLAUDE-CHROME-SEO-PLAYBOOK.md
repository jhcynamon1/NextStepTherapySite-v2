# Claude Chrome Extension - SEO Playbook for NextStep Therapy

## Overview

This playbook outlines automated SEO workflows using Claude for Chrome to maintain competitive advantage with minimal ongoing effort.

---

## Prerequisites

1. **Claude Pro/Team subscription** (extension now available to all paid tiers)
2. **Install Claude for Chrome:** [claude.com/chrome](https://claude.com/chrome)
3. **Accounts needed:**
   - Google Search Console access
   - Google Sheets (for output)
   - Ahrefs (optional, for deeper analysis)

---

## Workflow 1: Weekly Competitor SERP Analysis

**Goal:** Track what top-ranking competitors are doing for target keywords

### Setup (One-Time)

1. Open Claude Chrome extension
2. Click "Record Workflow"
3. Perform these steps manually:

```
Step 1: Open Google.com
Step 2: Search "anxiety therapy Ontario"
Step 3: Open top 5 organic results in new tabs
Step 4: For each result, note:
        - URL
        - Word count (approx)
        - Number of H2 headings
        - FAQ section present? (yes/no)
        - Author byline present? (yes/no)
        - Schema markup visible in source
Step 5: Open Google Sheet "Competitor Tracking"
Step 6: Add new row with today's date
Step 7: Paste collected data
```

4. Save workflow as "Weekly SERP Analysis"
5. Schedule: Every Monday at 9am

### Keywords to Track

| Priority | Keyword | Your Current Position |
|----------|---------|----------------------|
| P0 | anxiety therapy ontario | Check GSC |
| P0 | virtual therapy ontario | Check GSC |
| P1 | depression therapy ontario | Check GSC |
| P1 | online therapist ontario | Check GSC |
| P2 | cbt therapy toronto | Check GSC |

### Output Template (Google Sheet)

| Date | Keyword | #1 URL | #1 Word Count | #1 Has FAQ | #1 Has Schema | Notes |
|------|---------|--------|---------------|------------|---------------|-------|
| 2024-12-20 | anxiety therapy ontario | competitor.com/anxiety | 2500 | Yes | MedicalWebPage | Strong E-E-A-T |

---

## Workflow 2: Monthly Schema Validation

**Goal:** Ensure all therapy pages have proper schema markup

### Setup (One-Time)

1. Open Claude Chrome extension
2. Click "Record Workflow"
3. Perform these steps:

```
Step 1: Open Google Rich Results Test
        https://search.google.com/test/rich-results
Step 2: Enter first URL: nextsteptherapy.ca/anxiety-therapy-ontario.html
Step 3: Wait for results
Step 4: Screenshot or note:
        - Pass/Fail status
        - Schema types detected
        - Any errors
Step 5: Open Google Sheet "Schema Audit"
Step 6: Log results
Step 7: Repeat for next URL in list
```

4. Save workflow as "Monthly Schema Check"
5. Schedule: 1st of each month

### Pages to Validate

```
Priority 1 (Revenue pages):
- /anxiety-therapy-ontario.html
- /virtual-therapy-ontario.html
- /depression-therapy-ontario.html
- /cbt-therapy-toronto.html

Priority 2 (Student pages):
- /students/university-anxiety.html
- /students/academic-stress.html

Priority 3 (City pages):
- /anxiety-therapy-burlington.html
- /virtual-therapy-burlington.html
```

### Expected Schema Types

Each therapy page should have:
- [ ] MedicalWebPage
- [ ] FAQPage
- [ ] LocalBusiness (with CRPO #10979)

---

## Workflow 3: GSC Position Tracking

**Goal:** Catch ranking drops before they become problems

### Setup (One-Time)

1. Open Claude Chrome extension
2. Click "Record Workflow"
3. Perform these steps:

```
Step 1: Open Google Search Console
        https://search.google.com/search-console
Step 2: Select nextsteptherapy.ca property
Step 3: Go to Performance > Search Results
Step 4: Set date range: Last 7 days
Step 5: Export to Google Sheets
Step 6: Open tracking spreadsheet
Step 7: Compare to last week's positions
Step 8: Flag any keywords that dropped >3 positions
```

4. Save workflow as "Weekly GSC Check"
5. Schedule: Every Friday at 5pm

### Alert Thresholds

| Condition | Action |
|-----------|--------|
| Position drops 3+ spots | Add to review queue |
| Position drops from page 1 to page 2 | Urgent review |
| Impressions drop >20% | Content freshness check |
| CTR drops >15% | Meta title optimization |

---

## Workflow 4: Content Freshness Audit

**Goal:** Identify pages needing updates

### Setup (One-Time)

1. Open Claude Chrome extension
2. Click "Record Workflow"
3. Perform these steps:

```
Step 1: Open nextsteptherapy.ca/sitemap.xml
Step 2: For each therapy page URL:
        - Open the page
        - Find "Last Updated" date
        - Check for outdated references (old years, deprecated info)
        - Note content quality issues
Step 3: Log to Google Sheet with:
        - URL
        - Last Updated date
        - Days since update
        - Issues found
        - Priority score (1-5)
```

4. Save workflow as "Quarterly Content Audit"
5. Schedule: 1st of quarter (Jan, Apr, Jul, Oct)

### Freshness Standards

| Page Type | Max Age Before Update |
|-----------|----------------------|
| Core service pages | 6 months |
| Blog posts | 12 months |
| City pages | 9 months |
| Student pages | 6 months (before each semester) |

---

## Workflow 5: Local Citation Check

**Goal:** Ensure NAP consistency across directories

### Setup (One-Time)

1. Open Claude Chrome extension
2. Click "Record Workflow"
3. Check these directories:

```
Step 1: Psychology Today profile
        - Verify name, phone, address
        - Check credentials listed
Step 2: GoodTherapy profile (if exists)
Step 3: TherapyDen profile (if exists)
Step 4: Google Business Profile
Step 5: Compare all to canonical info:
        - Name: Jesse Cynamon, RP
        - CRPO: #10979
        - Phone: [your number]
        - Address: [your address]
Step 6: Flag any inconsistencies
```

4. Save workflow as "Monthly Citation Check"
5. Schedule: 15th of each month

### Canonical Business Info

```
Business Name: NextStep Therapy
Therapist: Jesse Cynamon, RP (CRPO #10979)
Type: Virtual Therapy Practice
Province: Ontario, Canada
Website: nextsteptherapy.ca
```

---

## Workflow 6: Review Monitoring

**Goal:** Catch and respond to reviews quickly

### Setup (One-Time)

1. Open Claude Chrome extension
2. Click "Record Workflow"
3. Perform these steps:

```
Step 1: Open Google Business Profile
Step 2: Check for new reviews
Step 3: If new review found:
        - Screenshot
        - Note sentiment (positive/negative/neutral)
        - Draft response template
Step 4: Check Psychology Today profile for messages
Step 5: Log to "Review Tracking" spreadsheet
```

4. Save workflow as "Weekly Review Check"
5. Schedule: Every Wednesday at 10am

### Response Guidelines

| Review Type | Response Time | Template |
|-------------|---------------|----------|
| Positive (4-5 stars) | Within 48 hours | Thank you template |
| Neutral (3 stars) | Within 24 hours | Acknowledgment + improvement |
| Negative (1-2 stars) | Within 12 hours | Private conversation offer |

---

## Implementation Timeline

### Week 1: Foundation
- [ ] Subscribe to Claude Pro/Team (if not already)
- [ ] Install Claude for Chrome extension
- [ ] Create Google Sheets for tracking:
  - Competitor Tracking
  - Schema Audit
  - GSC Position Tracking
  - Content Freshness
  - Citation Check
  - Review Tracking

### Week 2: Core Workflows
- [ ] Record Workflow 1: Weekly SERP Analysis
- [ ] Record Workflow 3: GSC Position Tracking
- [ ] Test both manually
- [ ] Set up schedules

### Week 3: Quality Workflows
- [ ] Record Workflow 2: Monthly Schema Validation
- [ ] Record Workflow 4: Content Freshness Audit
- [ ] Test both manually

### Week 4: Reputation Workflows
- [ ] Record Workflow 5: Local Citation Check
- [ ] Record Workflow 6: Review Monitoring
- [ ] Set up all remaining schedules
- [ ] Create weekly review calendar event to check outputs

---

## Maintenance

### Weekly (15 min)
- Review automated outputs
- Action any alerts/flags
- Verify workflows ran successfully

### Monthly (30 min)
- Review all tracking spreadsheets
- Identify trends
- Prioritize optimization tasks

### Quarterly (2 hours)
- Full audit of workflow effectiveness
- Adjust keywords being tracked
- Update competitor list
- Review scheduling

---

## Troubleshooting

### Workflow Not Running
1. Check Chrome is open and logged in
2. Verify extension is enabled
3. Check scheduled task settings
4. Re-record if site UI changed

### Incomplete Data
1. Add wait times between steps
2. Break into smaller workflows
3. Use "Ask before acting" mode to debug

### Site Changes Breaking Workflow
1. Re-record the workflow
2. Use more general selectors
3. Add error handling steps

---

## ROI Expectations

| Workflow | Time Saved/Month | SEO Impact |
|----------|------------------|------------|
| SERP Analysis | 4 hours | Competitive intelligence |
| Schema Validation | 2 hours | Rich snippet eligibility |
| GSC Tracking | 3 hours | Early ranking drop detection |
| Content Freshness | 2 hours | Content quality signals |
| Citation Check | 1 hour | Local SEO consistency |
| Review Monitoring | 2 hours | Reputation management |
| **Total** | **14 hours/month** | **Systematic SEO maintenance** |

---

## Next Steps

1. Restart Claude Code to activate MCP servers
2. Install Claude for Chrome
3. Start with Workflow 1 (SERP Analysis) - highest impact
4. Add one new workflow per week
5. Build the habit of reviewing outputs weekly

---

*Created: December 2024*
*For: NextStep Therapy SEO Automation*
