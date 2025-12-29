# NextStep Therapy - Project Guide

## About
- **Website:** nextsteptherapy.ca
- **Owner:** Jesse Cynamon, RP (CRPO #10979)
- **Location:** Ontario, Canada
- **Focus:** Virtual therapy practice, ACT specialization

## Unique Differentiators (Use in All Content)
- **CRPO #10979** - Specific license number (not just "registered")
- **ACT therapy specialization** - Acceptance and Commitment Therapy
- **Virtual-first practice** with same-week availability
- **Evening and weekend appointments**
- **Insurance receipts** provided for all Ontario insurance providers

---

## CRITICAL: Design System Reference

**BEFORE creating or editing ANY page, read:** [/docs/GEMINI-DESIGN-SYSTEM.md](docs/GEMINI-DESIGN-SYSTEM.md)

**Quick Reference:**
- Technology: Tailwind CSS (CDN) + custom config
- Colors: navy (#1e3a4f), sage (#4a7c59), cream (#f8f6f2), sand (#e5e0d8)
- Fonts: Playfair Display (headings), Inter (body)
- Icons: Lucide Icons (CDN)
- Header: Fixed position, white/95 backdrop blur
- Hero: 2-column layout with feature cards grid

---

## CRITICAL: Voice Pattern

**DO NOT use "I don't know if this is you" or similar hedging. Jesse HATES this.**

Use confident vulnerability - direct statements about THEM:

```html
<!-- GOOD -->
<p>You've built a good life here. The house, the career, maybe the family. But your brain never stops.</p>
<p>If any of that sounds familiar, you don't have to keep pushing through it alone. Let's talk.</p>

<!-- BAD - NEVER USE -->
<p>I don't know if this is you, but...</p>
```

**Voice DNA markers:**
- Direct statements about THEM (not questions, not disclaimers)
- "Sound familiar?" as the ONLY check-in phrase allowed
- "I don't have all the answers. But I can..." (confident vulnerability)
- "WITH the client, not ahead"
- Process over outcomes
- Confident but not arrogant

**KILL LIST - NEVER USE:**
| Phrase | Why |
|--------|-----|
| "I don't know if this is you, but..." | Hedging |
| "I don't know if this will resonate..." | Undermines confidence |
| "Honestly..." | Filler |
| "I can't promise..." | Negative framing |
| "Right?" / "Does that make sense?" | Seeking validation |
| "I want to be WITH you" | Soft; say "I'm with you" |
| "I'm not the therapist who..." | Defines by what you're NOT |
| "No homework. No worksheets." | CRPO violation |
| Questions as hero openers | Less confident than statements |

---

## CRITICAL: CRPO Compliance

All content must be factual, verifiable, non-misleading. NO testimonials, outcome guarantees, or unverifiable superlatives.

| Requirement | Check |
|-------------|-------|
| No outcome guarantees | ❌ "Therapy will help you..." → ✅ "In therapy, we often explore..." |
| No testimonials | ❌ "My clients tell me..." → ✅ "Here's what I've seen..." |
| No disparagement | ❌ "No homework. No worksheets." → ✅ Focus on what you DO |
| Process-focused | ❌ "Reduce your anxiety" → ✅ "Change your relationship with anxiety" |
| CRPO #10979 displayed | Header badge + body text + schema |

---

## Page Requirements (New Pages)

Every therapy page MUST include:

1. **Statistics Section** - Copy from `/docs/templates/stats-sections.html`
2. **GA4 Tracking** - Copy from `/docs/templates/ga4-tracking.html`
3. **Schema Markup** - MedicalWebPage + FAQPage (10-12 questions)
4. **E-E-A-T Signals** - Author byline, Last Updated, citations
5. **Voice** - Use brand-voice-therapy skill to verify

**SEO Checklist:**
- H1 includes primary keyword + city/location
- Meta title under 60 chars: `Service + Location | Differentiator | NextStep Therapy`
- 2000+ words for competitive keywords
- Internal links to related pages

**Full checklist:** `/docs/checklists/pseo-quality-checklist.md`

---

## Project Structure

### Key Folders
- `/css/` - Stylesheets (primary: v4-design-system.css)
- `/images/` - All image assets
- `/blog/` - Blog posts
- `/students/` - University student-focused pages
- `/virtual/` - Virtual therapy service pages
- `/professionals/` - Professional/workplace stress pages
- `/docs/` - Documentation
  - `/docs/seo/` - Current SEO work
  - `/docs/guides/` - Implementation guides
  - `/docs/checklists/` - QA checklists
  - `/docs/templates/` - HTML templates (stats, GA4)
- `.claude/skills/` - Skill definitions

### Data Files
- `/data/client_source_tracking.csv` - Client acquisition tracking
- `/data/keyword-research-list-dec2024.md` - Current keyword research

---

## SEO Workflow

### Meta Title Formula
```
Service + Location | Differentiator | NextStep Therapy
```
- Keep under 60 characters
- Keyword first
- Avoid "CBT" or "ACT" in titles unless keyword research supports it

### Schema Requirements
1. **MedicalWebPage** schema (required for YMYL)
2. **FAQPage** schema (10-12 questions)
3. **LocalBusiness** schema (include CRPO #10979)

### Request Data
Always request Ahrefs/GSC data when working on SEO:
- Keyword Explorer exports (volume, difficulty)
- GSC queries report (clicks, impressions, CTR, position)
- Competitor URLs to analyze

---

## Claude Skills - USE PROACTIVELY

**Full skill docs:** `.claude/skills/[skill-name]/SKILL.md`

These skills should be used **constantly and automatically** when context matches.

### Quick Reference

| Skill | Use When | Output |
|-------|----------|--------|
| **meta-title-optimizer** | Reading any HTML, GSC data, new pages | 5 scored title variations |
| **keyword-research** | Planning content, GSC/Ahrefs data | Priority-scored keyword list |
| **seo-competitor-intelligence** | External URLs, "why not ranking", competitors | Content gap analysis |
| **therapy-content-generator** | New therapy pages, expanding content | 2000+ word YMYL content |
| **faq-schema-generator** | Any therapy page needs FAQ | 10-12 Q&As + JSON-LD |
| **conversion-optimizer** | CTAs, hero sections, low conversions | A/B variations with scores |
| **positioning-angles-therapy** | New service pages, differentiation | 3-5 CRPO-compliant angles |
| **direct-response-copy-therapy** | Persuasive copy, landing pages | CRPO-compliant copy |
| **lead-magnet-therapy** | Email list building | Lead magnet concepts |
| **email-welcome-sequence-therapy** | Lead nurture, no-shows | 5-7 email sequence |
| **brand-voice-therapy** | All content, "sounds like AI" | Voice verification |
| **therapy-orchestrator** | Not sure which skill, multi-step | Skill routing |

### Trigger Keywords

| Pattern | Skill to Use |
|---------|--------------|
| GSC data, clicks, impressions, CTR | keyword-research |
| Ahrefs, keyword difficulty, volume | keyword-research |
| Competitor, ranking, page 2 | seo-competitor-intelligence |
| Create page, new page, write content | therapy-content-generator |
| Meta title, SERP, 60 chars | meta-title-optimizer |
| CTA, button, conversion, booking | conversion-optimizer |
| FAQ, schema, rich snippet | faq-schema-generator |
| CSS, layout, responsive, mobile | frontend-design |
| Sounds like AI, doesn't sound like me | brand-voice-therapy |

### Multi-Skill Workflows

**New page:**
1. keyword-research → Validate keyword
2. seo-competitor-intelligence → Analyze competitors
3. therapy-content-generator → Write content
4. faq-schema-generator → Add FAQ
5. meta-title-optimizer → Optimize title
6. brand-voice-therapy → Verify voice

**Optimize existing:**
1. meta-title-optimizer → Check title
2. conversion-optimizer → Improve CTAs
3. faq-schema-generator → Add/expand FAQ
4. brand-voice-therapy → Final voice check

### Context Paradox

When passing context between skills, **less is more**. Too much context degrades output.

| To This Skill | Pass This | OMIT |
|---------------|-----------|------|
| positioning-angles-therapy | Audience (1 sentence), keyword | Full competitor analysis |
| direct-response-copy-therapy | Angle (1-2 sentences), 5 voice markers | Full Voice DNA |
| therapy-content-generator | Primary keyword + outline | Competitor deep dive |
| brand-voice-therapy | Draft content only | Research data |

---

## City Localization - CRITICAL

**MUST READ:** `/docs/CITY-LOCALIZATION-GUIDE.md` before writing ANY city page.

**NO GENERIC TECH TROPES.** Each city has real industries.

**KILL LIST - Never use unless city has tech:**
- "Quarterly targets" / "Performance reviews"
- "Slack notifications at dinner"
- "Colleagues in different time zones"
- "Startup pressure"

**Tech copy OK:** Richmond Hill, Markham, Kitchener-Waterloo, Ottawa (Kanata)
**Tech copy WRONG:** Barrie, Hamilton, Windsor, London, Cambridge, Sudbury, Thunder Bay, St. Catharines, Oshawa, Ajax, Pickering, Whitby, Guelph

---

## Chrome Extension Workflows

For browser automation and SEO research using Claude Chrome extension, see:
`/docs/guides/chrome-extension-seo.md`

---

## Git Workflow

### Commit Format
```
[Type]: Brief description

Examples:
- SEO: Update meta title for anxiety-therapy-ontario.html
- Fix: Repair CTA button visibility on mobile
- New: Add anxiety-therapy-sudbury.html page
```

### Branch Strategy
- Main branch: Production-ready code
- Work directly on main for minor updates
- Feature branches for major redesigns

---

## Notes for AI Assistants

1. **Always read existing files before editing**
2. **Preserve E-E-A-T signals** - Never remove author bylines, credentials, citations
3. **Follow meta title formula** - Don't deviate
4. **Include schema markup** - MedicalWebPage and FAQPage required
5. **Use specific license number** - Always "CRPO #10979"
6. **Ontario-specific content** - Don't use generic Canadian references
7. **Avoid over-engineering** - Simple, focused solutions
8. **Use skills proactively** - Don't wait for explicit requests

---

## Template Files

| Template | Location | Use For |
|----------|----------|---------|
| Stats sections (Anxiety/Depression) | `/docs/templates/stats-sections.html` | AI citation optimization |
| GA4 tracking code | `/docs/templates/ga4-tracking.html` | All pages |
| Page examples | `anxiety-therapy-whitby.html`, `anxiety-therapy-barrie.html` | City pages |
| pSEO checklist | `/docs/checklists/pseo-quality-checklist.md` | QA before deploy |

---

## Auto-Trigger Hook System

Hook script (`.claude/hooks/detect-seo-patterns.py`) detects SEO patterns and recommends skills.

When you see:
```
SKILL TRIGGERS DETECTED:
  * GSC data detected - use keyword-research skill
```

**Invoke the recommended skill immediately.**
