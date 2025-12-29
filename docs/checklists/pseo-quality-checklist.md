# pSEO Auto-Pass Quality Checklist

**Every new pSEO page MUST pass ALL these checks before deployment.**

---

## 1. AI Recommendability (E-E-A-T)

| Requirement | Implementation |
|-------------|----------------|
| Author byline | `Jesse Cynamon, RP (CRPO #10979)` in hero and footer |
| Last Updated | `Last Updated: [Month Year]` visible on page |
| Citations | Stats from CAMH, APA, CMHA, MHCC with source attribution |
| MedicalWebPage schema | JSON-LD in `<head>` |
| FAQPage schema | JSON-LD with 10-12 localized Q&As |
| Local crisis resources | City-specific crisis line, hospital, CMHA branch |

**Stats to include:**
- Anxiety: 5M Canadians (CAMH), 60-80% improvement (APA), 50% seek help (CMHA), $51B cost (MHCC)
- Depression: 1 in 8 (CMHA), 70% respond (APA), 40% adequate treatment (CMHA), #1 disability (WHO)

---

## 2. Jesse's Voice

| DO | DON'T |
|----|-------|
| Direct statements about THEM | Questions as openers |
| "Sound familiar?" | "Right?" or "Does that make sense?" |
| "I don't have all the answers. But I can..." | "I can't promise..." |
| "I'm with you" | "I want to be WITH you" |
| "Here's what I've seen..." | "Honestly..." or "At least, that's been my experience" |
| State what you DO | Define by what you're NOT |

**Hero opener pattern:**
```
[Direct observation about their life]
[Acknowledgment of the struggle]
If any of that sounds familiar, you don't have to keep pushing through it alone. Let's talk.
```

---

## 3. CRPO Compliance

| Requirement | Check |
|-------------|-------|
| No outcome guarantees | ❌ "Therapy will help you..." → ✅ "In therapy, we often explore..." |
| No testimonials | ❌ "My clients tell me..." → ✅ "Here's what I've seen..." |
| No disparagement | ❌ "No homework. No worksheets." → ✅ Focus on what you DO |
| Process-focused | ❌ "Reduce your anxiety" → ✅ "Change your relationship with anxiety" |
| CRPO #10979 displayed | Header badge + body text + schema |

---

## 4. Schema Markup

**Required on every therapy page:**
```javascript
// Check with:
Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
  .map(s => JSON.parse(s.textContent)['@type'])
// Should return: ["MedicalWebPage", "FAQPage"]
```

- MedicalWebPage: author, dateModified, about, specialty
- FAQPage: 10-12 questions with localized answers

---

## 5. SEO Elements

| Element | Requirement |
|---------|-------------|
| Meta title | `[Service] [City] \| [Differentiator] \| NextStep` under 60 chars |
| H1 | `[Service] in [City]` - keyword first |
| H2s | Clear hierarchy, include keyword variations |
| Word count | 2000+ for competitive keywords |
| Internal links | Related services, other city pages |
| FAQ | 10-12 localized questions |

---

## 6. Conversion/CTAs

| Element | Requirement |
|---------|-------------|
| Hero CTAs | 2 options: Book button + Phone number |
| Trust badges | CRPO #10979, $175/session, Same-Week, Insurance |
| Mid-page CTA | After "Sound familiar?" section |
| Bottom CTA | Navy box with "Free 15-minute consultation" |
| Phone visible | Header + at least 2 places in body |

**Approved CTA copy:**
- Buttons: "Let's talk" / "Book a Free Consultation" / "Skip the [City] Waitlist"
- Supporting: "Free 15-minute consultation. No pressure."

---

## 7. Localization - CRITICAL

**MUST READ:** `/docs/CITY-LOCALIZATION-GUIDE.md` before writing ANY city page.

| Element | Requirement |
|---------|-------------|
| City economy research | CHECK the guide - what do people actually DO in this city? |
| "Sound Familiar?" section | Use REAL local industries (NOT generic tech) |
| Local employers | Name actual employers (RVH, Lakeridge, Ford, etc.) |
| Highway references | Correct highway for that city (400, 401, QEW, GO Train) |
| Local crisis resources | City-specific crisis line, hospital, CMHA branch |
| FAQ questions | "How much does therapy cost in [City]?" etc. |

**KILL LIST - Never use unless city actually has tech industry:**
- "Quarterly targets" / "Performance reviews" (generic)
- "Slack notifications at dinner"
- "Colleagues in different time zones"
- "Highly educated colleagues" / imposter syndrome (tech version)
- "Startup pressure"

**Cities where tech copy IS appropriate:** Richmond Hill, Markham, Kitchener-Waterloo, Ottawa (Kanata)

**Cities where tech copy is WRONG:** Barrie, Hamilton, Windsor, London, Cambridge, Sudbury, Thunder Bay, St. Catharines, Oshawa, Ajax, Pickering, Whitby, Guelph

---

## 8. Technical

| Element | Requirement |
|---------|-------------|
| GA4 tracking | G-J8H4YBGSHR with booking_click and phone_call events |
| Responsive | Mobile-first, test 375px width |
| Page speed | Images optimized, lazy loading |
| Sitemap | Add new page to sitemap.xml |

---

## Page Template Reference

**Best examples to copy from:**
- `anxiety-therapy-whitby.html` - Phase 2 Durham (excellent localization)
- `anxiety-therapy-barrie.html` - Phase 3 (Highway 400 reference)
- `depression-therapy-mississauga.html` - Rewritten Dec 2024

**Template structure:**
1. Hero (2-column with feature cards)
2. "Sound familiar?" checklist
3. Statistics section (citable)
4. "What We Work On" symptoms
5. "Our Approach" (ACT explanation)
6. About therapist (credentials)
7. Same-week appointments
8. Virtual therapy (privacy)
9. Mid-page CTA
10. Crisis resources (local)
11. Related services (internal links)
12. FAQ (10-12 questions with schema)
13. Footer CTA
