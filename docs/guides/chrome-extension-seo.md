# Claude Chrome Extension - SEO Workflows

**Reference:** [Getting Started with Claude in Chrome](https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome)

## What Chrome Extension Can Do

| Capability | What It Means for SEO |
|------------|----------------------|
| **See webpages visually** | Read competitor pages directly, extract structure |
| **Click and navigate** | Automate multi-step research |
| **Multi-tab workflows** | Analyze 5 competitors simultaneously |
| **Record workflows** | Teach a pattern once, replay forever |
| **Schedule tasks** | Weekly competitor checks automatically |
| **Read console/DOM** | Check schema markup, meta tags directly |
| **Planning mode** | Approve plan, Claude executes autonomously |

## Installation

1. Get Claude Pro/Team/Enterprise (required)
2. Install: [Chrome Web Store - Claude in Chrome](https://chromewebstore.google.com/detail/claude)
3. Pin it: Click puzzle icon → thumbtack next to Claude
4. Grant permissions for page reading
5. Choose model: Opus 4.5 (complex), Sonnet 4.5 (balanced), Haiku 4.5 (fast)

---

## SEO Workflows

### Workflow 1: Weekly Competitor Intelligence

**Chrome Extension Does:**
1. Searches "anxiety therapy ontario" on Google
2. Opens top 5 organic results in tab group
3. For each page, extracts: URL, word count, H2 structure, FAQ presence, schema, author byline
4. Compiles data into structured format

**Then Feed to Skill:** `seo-competitor-intelligence`

### Workflow 2: Monthly Meta Title Audit

**Chrome Extension Does:**
1. Opens nextsteptherapy.ca/sitemap.xml
2. Clicks through each therapy page URL
3. Reads `<title>` tag, records character count
4. Logs to tracking spreadsheet

**Then Feed to Skill:** `meta-title-optimizer`

### Workflow 3: Weekly GSC Position Tracking

**Chrome Extension Does:**
1. Opens Google Search Console
2. Navigates to Performance → Search Results
3. Exports queries report
4. Highlights position changes > 3 spots

**Then Feed to Skill:** `keyword-research`

### Workflow 4: Schema Validation

**Chrome Extension Does:**
1. Opens Google Rich Results Test
2. Tests each therapy page URL
3. Logs which schema types detected
4. Flags pages missing required schema

**Then Feed to Skill:** `faq-schema-generator`

---

## Recording a Workflow

1. Open Claude Chrome panel
2. Click "Record Workflow"
3. Perform task manually (every click is recorded)
4. Stop recording
5. Name it (e.g., "Weekly Competitor Analysis - Anxiety Ontario")
6. Test replay
7. Schedule (e.g., Monday 9am weekly)

---

## Slash Commands (Shortcuts)

```
/competitor-check
"Search Google for [keyword], open top 5 organic results,
extract word count, H2s, FAQ presence, schema types,
compile into comparison table"

/schema-audit
"Open Rich Results Test, test [URL], report all schema
types found and any errors"

/title-check
"Open [URL], read the <title> tag, count characters,
flag if over 60 chars"
```

---

## Best Practices

1. **Start with Planning Mode** - Review Claude's plan before execution
2. **Record repetitive workflows** - Don't repeat manual research
3. **Use multi-tab for competitors** - Analyze 5 at once
4. **Schedule recurring tasks** - Automate weekly checks
5. **Feed outputs to skills** - Chrome collects, skills process

**Model Selection:**
- Haiku 4.5: Quick lookups, simple navigation
- Sonnet 4.5: Multi-step workflows, analysis
- Opus 4.5: Complex research, detailed extraction

---

## Safety Notes

- Don't use on sensitive sites (banking, medical records)
- Review plans before approving
- High-risk actions require explicit approval
- Chrome only (not Edge, Firefox, or mobile)

---

## Key Competitor Insights (Dec 2025)

**Competitors made ZERO improvements in 12 months.** NextStep can dominate by implementing:
- CRPO #10979 display (0% of competitors do this)
- 2,000+ word content (0% of competitors have this)
- FAQ schema (only ~20% have basic FAQ)
- Author bylines with credentials (~10% have this)

### Priority Keywords

| Keyword | Opportunity | Action |
|---------|-------------|--------|
| anxiety therapy burlington | HIGH (2,200/mo, difficulty 6) | Create 2,500+ word page |
| men's mental health therapy ontario | HIGH (practice-dominated) | Create dedicated page |
| virtual therapy ontario | MEDIUM | Strengthen existing page |

### De-Prioritized Keywords
- "therapy near me ontario" - Directory dominated
- "depression therapy ontario" - Government dominated
- "anxiety therapy ontario" - Government dominated
