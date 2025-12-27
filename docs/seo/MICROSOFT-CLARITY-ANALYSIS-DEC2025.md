# Microsoft Clarity Analysis - December 2025

## Overview

**Data Period:** August 1, 2025 - December 27, 2025
**Total Sessions:** 201 (162 bot sessions excluded)
**Unique Users:** 113
**Project ID:** u8v6vfikjr

> **Important Note:** Many pages have been redesigned and copy updated since this data was collected. These findings focus on **behavioral patterns** that remain relevant regardless of design changes.

---

## Executive Summary

### Key Metrics
| Metric | Value | Assessment |
|--------|-------|------------|
| Sessions | 201 | Baseline data |
| Pages/Session | 2.55 | Good - users explore |
| Scroll Depth | 38.31% | ⚠️ Needs attention |
| Active Time | 2 min | Decent engagement |
| Returning Users | 37.81% | Good retention |

### Critical Issues Identified
1. **Dead clicks: 12.44%** - Users clicking non-interactive elements
2. **Low scroll depth: 38%** - Most content below fold unseen
3. **Research-heavy behavior** - Extended browsing without conversion
4. **Cost page engagement without booking** - Information seekers not converting

---

## Behavioral Insights (AI-Generated from 195 Recordings)

### 1. Dead Clicks on Credentials and Location Names

> "Multiple visitors repeatedly clicked non-interactive text such as therapist credentials or location names (e.g., 'Next Step Therapy CRPO #...', 'Markham has become one of...'), often in rapid succession, generating rage click events without navigation."

**What This Means:**
- Users expect CRPO credentials to link somewhere (maybe to CRPO registry?)
- Location mentions look clickable but aren't
- This creates frustration (rage clicks)

**General Principle:** Any text that looks like it could be a link (credentials, locations, terms) should either BE a link or be styled to clearly NOT look clickable.

---

### 2. Extended Multi-Page Exploration Without Conversion

> "Some users spent over an hour navigating between multiple city-specific therapy pages (e.g., Markham, Whitby, Barrie) and condition-focused content (high-functioning anxiety, depression), with intermittent refreshes but no form submissions observed."

**What This Means:**
- Users are doing deep research across location pages
- They're comparing services but not taking action
- Long sessions (1+ hour) suggest indecision or information gathering

**General Principle:** Research-mode visitors need a gentle nudge toward action. Consider:
- Sticky CTAs that follow scroll
- "Ready to talk?" prompts after extended time on site
- Comparison tools that reduce decision paralysis

---

### 3. Cost/Insurance Information Draws Sustained Attention

> "Several sessions involved prolonged viewing of the 'How Much Does Therapy Cost' page, sometimes returning multiple times within a session and clicking coverage-related anchors ('How to Check Your Coverage', 'Affording Quality Therapy'). These visits showed steady scrolling and occasional quick back clicks but no booking actions."

**What This Means:**
- Cost is a MAJOR concern for visitors
- 28.89% of clicks on costs page go to insurance info
- People need reassurance about affordability
- Multiple return visits = price anxiety

**General Principle:** Address cost concerns proactively on ALL pages:
- Mention "$175/session" early
- Highlight insurance coverage prominently
- Consider "Most clients pay $0-50 out of pocket with insurance" messaging

---

### 4. University Student Pages Work Well

> "Visitors arriving from search engines to targeted student mental health pages (e.g., UofT Student Therapy) often stayed focused on that page for several minutes without navigation loops or errors before exiting—indicating efficient access to sought information."

**What This Means:**
- Student pages deliver what searchers want
- No confusion or frustration
- Clean user journey from search → content → exit

**General Principle:** Student page structure/copy can serve as a model for other pages.

---

## Page-Specific Findings

### Homepage

**Scroll Depth Analysis:**
| Scroll % | % of Visitors |
|----------|---------------|
| 5% | 88.46% |
| 10% | 50.00% ⚠️ |
| 25% | 42.31% |
| 50% | 39.74% |
| 90% | 21.79% |

**Key Issue:** 38% of visitors leave before scrolling past 10%. This was on the OLD homepage design, but the pattern is worth monitoring on the new design.

**Top Clicked Elements (Old Design):**
1. Process - 2 clicks (6.06%)
2. Services - 2 clicks (6.06%)
3. #name - 2 clicks (6.06%)
4. Jesse Cynamon, RP section - 2 clicks (6.06%)

**AI Insight:** "Repeated dead clicks on navigation and content elements: Multiple visitors attempted to click main menu items (e.g., 'Approach', 'Services', 'Process') or in-page headings without resulting navigation."

---

### Therapy Costs Page (therapy-costs-ontario.html)

**Scroll Depth Analysis:**
| Scroll % | % of Visitors |
|----------|---------------|
| 5-10% | 100% ✅ |
| 15% | 70.91% |
| 25% | 47.27% |
| 50% | 29.09% |

**Much better engagement** - 100% scroll to 10% (vs 50% on homepage). People seeking cost info are more motivated.

**Top Clicked Elements:**
| Rank | Element | Clicks |
|------|---------|--------|
| 1 | Insurance section heading | 13 (28.89%) |
| 2 | Insurance | 4 (8.89%) |
| 3 | How to Check Your Coverage | 4 (8.89%) |
| 4 | OHIP coverage info | 4 (8.89%) |

**Key Insight:** Nearly 30% of all clicks go to insurance-related content. Cost/coverage is the #1 concern.

---

## Top 10 Pages by Traffic

| Rank | Page | URL |
|------|------|-----|
| 1 | Homepage | / |
| 2 | Therapy Costs Ontario | /therapy-costs-ontario.html |
| 3 | Anxiety Therapy Burlington | /anxiety-therapy-burlington.html |
| 4 | Virtual Therapy Ontario | /virtual-therapy-ontario.html |
| 5 | Depression Therapy Hamilton | /depression-therapy-hamilton.html |
| 6 | UofT Student Therapy | /university-of-toronto-student-therapy.html |
| 7 | Depression Therapy Mississauga | /depression-therapy-mississauga.html |
| 8 | Online Therapy Ontario | (Electron app) |
| 9 | Anxiety Therapy Barrie | /anxiety-therapy-barrie.html |
| 10 | Sunday Night Anxiety | /sunday-night-anxiety.html |

---

## Actionable Learnings (Design-Agnostic)

### 1. Make Interactive Elements Obvious

**Problem:** 12.44% dead click rate
**Cause:** Text that looks clickable but isn't

**Principles:**
- Credentials (CRPO #10979) - either link to CRPO registry or style as plain text
- Location names - if mentioned, consider linking to that city's page
- Section headings - if clickable, style as links; if not, style as headings
- Buttons should look like buttons, text should look like text

---

### 2. Front-Load Critical Information

**Problem:** Only 50% scroll past 10% on homepage
**Cause:** Content below fold is invisible to half of visitors

**Principles:**
- Key value props must be visible above the fold
- CTA should be visible without scrolling
- Don't bury important info (pricing, availability) deep in page
- Use "TL;DR" sections like the costs page does

---

### 3. Address Cost Anxiety Early and Often

**Problem:** Users obsess over cost page but don't book
**Cause:** Price anxiety, insurance confusion

**Principles:**
- Mention pricing on ALL service pages, not just costs page
- "Insurance accepted" messaging should be prominent
- Consider: "Most clients pay $0-50 out of pocket with insurance"
- Link to costs page from every service page

---

### 4. Support Research-Mode Visitors

**Problem:** 1+ hour sessions with no conversion
**Cause:** Users comparing, researching, but not ready to act

**Principles:**
- Provide comparison tools (city vs city, service vs service)
- Offer low-commitment next steps (email signup, free guide)
- Sticky CTAs that stay visible during long browsing sessions
- Exit-intent offers for researchers

---

### 5. Reduce Decision Paralysis

**Problem:** Users browse many city pages without choosing
**Cause:** Too many similar options, unclear differentiation

**Principles:**
- All city pages lead to same service (virtual) - clarify this
- Don't make users choose a location if service is virtual
- Simplify navigation to reduce choice overload

---

## Metrics to Monitor Going Forward

With Clarity now installed on all 147 pages, track these monthly:

1. **Scroll depth** - Target: >50% reaching 25% of page
2. **Dead click rate** - Target: <5%
3. **Rage clicks** - Target: <1%
4. **Quick backs** - Target: <3%
5. **Session duration on key pages** - Costs, homepage, top service pages
6. **Conversion path** - Which pages lead to booking clicks?

---

## Technical Notes

- **Clarity Project ID:** u8v6vfikjr
- **Dashboard:** [clarity.microsoft.com](https://clarity.microsoft.com)
- **Installed on:** 147 production pages (as of Dec 27, 2025)
- **GA4 Property:** G-J8H4YBGSHR (tracks booking_click and phone_call events)

---

## Next Steps

1. **Baseline new design** - Let Clarity collect 30 days of data on redesigned pages
2. **Compare scroll depth** - Is new homepage keeping users engaged longer?
3. **Monitor dead clicks** - Has the redesign reduced false affordances?
4. **Track conversion paths** - Which pages now lead to booking clicks?
5. **A/B test CTAs** - Test sticky vs static CTAs for researchers

---

## Reminders for Next Analysis (30 Days)

### Questions to Answer with Fresh Data:
- [ ] Is the new homepage scroll depth better than 50% at 10%?
- [ ] Are dead clicks on CRPO credentials reduced now that they link to registry?
- [ ] Are dead clicks on nav items ("Process", "Services") reduced in new design?
- [ ] Is the cost page still the #2 most visited? (If so, insurance language working?)
- [ ] What's the new conversion path? Which pages lead to booking_click events in GA4?

### CTA Language Decision:
The Dec 2025 analysis showed extended research sessions (1+ hour) without conversion. Current CTA language was deemed good and on-brand. If fresh data shows:
- Users reaching CTAs but not clicking → Consider language changes
- Users NOT reaching CTAs (scroll depth issue) → Consider sticky CTAs or placement
- Users clicking CTAs but not completing booking → Issue is in Jane booking flow, not site

---

*Report generated: December 27, 2025*
*Data source: Microsoft Clarity*
