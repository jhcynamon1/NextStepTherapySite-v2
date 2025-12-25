# pSEO Audit & Fixes - December 24, 2024

## Summary

Comprehensive audit and fix of all 40+ location therapy pages to meet quality standards for:
- AI recommendability
- Jesse's voice
- CRPO compliance
- Schema markup
- SEO optimization
- Conversion optimization
- City-specific localization

---

## Problem Identified

All pSEO pages were using **generic tech industry tropes** regardless of actual city economy:
- "Slack notifications at dinner"
- "Quarterly targets"
- "Colleagues in different time zones"
- "AMD/IBM/Oracle" references in non-tech cities
- "Parents sacrificed" immigrant stereotyping

This was WRONG for cities like Barrie (healthcare/retail), Durham Region (logistics/auto), Cambridge (manufacturing), etc.

---

## Solution Implemented

### 1. Created City Localization Guide
**File:** `/docs/CITY-LOCALIZATION-GUIDE.md`

Comprehensive reference for each Ontario city:
- Real economy/industries
- Major employers
- Key highways
- Realistic struggles for "Sound Familiar?" sections

### 2. Updated CLAUDE.md Standards
Added permanent standards:
- KILL LIST of phrases to never use
- City classifications (tech vs non-tech)
- pSEO Auto-Pass Quality Checklist

### 3. Fixed All Location Pages

---

## Files Modified

### Commit 1: City Localization (df23e10)
**19 files changed, 349 insertions, 85 deletions**

| File | Key Changes |
|------|-------------|
| anxiety-therapy-whitby.html | GO Train, Lakeridge Health, warehouse work |
| depression-therapy-whitby.html | GO Train exhaustion, healthcare burnout |
| anxiety-therapy-ajax.html | Amazon warehouse, 401 commute, manufacturing |
| depression-therapy-ajax.html | Shift work, commute depression |
| anxiety-therapy-pickering.html | Nuclear plant stress, GO Train, young families |
| depression-therapy-pickering.html | Nuclear shift work, GO exhaustion |
| anxiety-therapy-oshawa.html | GM layoffs, auto uncertainty, Lakeridge |
| depression-therapy-oshawa.html | GM layoff depression, healthcare exhaustion |
| anxiety-therapy-barrie.html | 400 commute, RVH, Georgian Mall, trades |
| depression-therapy-barrie.html | 400 commute, RVH depletion, retail burnout |
| depression-therapy-oakville.html | QEW, Ford plant, Siemens/pharma |
| depression-therapy-st-catharines.html | Wine/tourism, Niagara Health, Brock |
| depression-therapy-cambridge.html | Toyota, auto suppliers, manufacturing |
| depression-therapy-guelph.html | U of Guelph, agriculture, food processing |
| anxiety-therapy-mississauga.html | Pearson Airport, Square One, warehouse |
| depression-therapy-mississauga.html | Pearson exhaustion, corporate burnout |
| anxiety-therapy-markham.html | Removed immigrant stereotyping (kept tech - appropriate) |
| CLAUDE.md | Localization standards, KILL LIST |
| docs/CITY-LOCALIZATION-GUIDE.md | NEW - Complete city reference |

### Commit 2: Cambridge Fix (369266c)
**1 file changed**
- depression-therapy-cambridge.html: "Slack notifications" → "overtime shifts"

### Commit 3: Comprehensive Audit (09e27e5)
**14 files changed, 230 insertions, 92 deletions**

| Fix Type | Files Affected |
|----------|----------------|
| Remove "tech employers" | Barrie, Cambridge, Guelph |
| Remove hedging phrases | All Durham, Barrie, Pickering |
| Add E-E-A-T (author/date) | Toronto, Sudbury, Thunder Bay |
| Add FAQPage schema | Thunder Bay |
| Replace emojis with Lucide | Richmond Hill (anxiety + depression) |
| Fix phone numbers | Richmond Hill |

---

## Quality Standards Now Met

### Localization
- [x] No generic tech tropes in non-tech cities
- [x] Real local employers referenced (RVH, GM, Lakeridge, Toyota, etc.)
- [x] Correct highways (400, 401, GO Train, QEW)
- [x] Real neighborhoods mentioned

### Voice
- [x] No "I don't know if this is you"
- [x] No "Honestly..."
- [x] No "Here's something that might surprise you"
- [x] "Sound familiar?" as only check-in
- [x] Direct statements, not questions as openers

### CRPO Compliance
- [x] No outcome promises
- [x] No testimonials
- [x] No disparaging other approaches
- [x] No immigrant stereotyping

### Schema
- [x] MedicalWebPage on all pages
- [x] FAQPage schema where FAQs exist
- [x] lastReviewed dates added

### E-E-A-T
- [x] Author byline: Jesse Cynamon, RP (CRPO #10979)
- [x] Last Updated dates
- [x] CRPO license displayed

### Design
- [x] Lucide icons (not emojis)
- [x] Correct phone numbers

---

## Cities by Category

### Tech Cities (tech content appropriate)
- Markham
- Richmond Hill
- Kitchener-Waterloo
- Ottawa (Kanata)
- Toronto (King West, Liberty Village)

### Non-Tech Cities (NEVER use tech tropes)
- Barrie → Healthcare (RVH), retail, trades, 400 commuters
- Durham (Whitby, Ajax, Pickering, Oshawa) → GO Train, Lakeridge, warehouses, GM
- Hamilton → Healthcare (HHS), steel, McMaster
- Cambridge → Toyota, auto suppliers, manufacturing
- Guelph → University, agriculture, food processing
- London → Healthcare (LHSC), Western, insurance
- Windsor → Auto (Stellantis), cross-border, casino
- St. Catharines → Wine/tourism, Niagara Health, Brock
- Oakville → Ford plant, corporate, pharma
- Burlington → Corporate, Joseph Brant Hospital
- Sudbury → Mining (Vale), Health Sciences North
- Thunder Bay → Healthcare, forestry, port

---

## Permanent Documentation

These files ensure future pages auto-pass:

1. **`/docs/CITY-LOCALIZATION-GUIDE.md`** - Look up any city's real economy
2. **`CLAUDE.md`** - Contains KILL LIST and standards
3. **This file** - Record of what was fixed

---

## Verification

To verify a page meets standards, check:

```bash
# Should return NOTHING for non-tech cities:
grep -i "slack\|quarterly targets\|time zones\|tech clients\|AMD\|IBM\|Oracle" [filename].html

# Should return matches:
grep -i "CRPO #10979\|Last Updated" [filename].html
grep -i "MedicalWebPage\|FAQPage" [filename].html
```

---

## Next Steps

1. Monitor GSC for ranking improvements
2. Add "Sound Familiar?" sections to pages that don't have them (Hamilton, London, Windsor)
3. Consider expanding to more cities based on keyword research

---

*Last Updated: December 24, 2024*
*Author: Claude Code + Jesse Cynamon*
