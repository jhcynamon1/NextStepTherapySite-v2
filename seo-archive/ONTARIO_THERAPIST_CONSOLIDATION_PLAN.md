# Ontario Therapist Page Consolidation Plan
**Date:** October 21, 2025  
**Objective:** Merge overlapping provincial "find a therapist" pages into a single evergreen guide (`/how-to-find-therapist-ontario.html`) and prepare for 301 redirects.

## 1. Source Pages to Consolidate
| Current URL | File | Notes |
|-------------|------|-------|
| `/counselling-ontario.html` | counselling-ontario.html | Legacy static page; mixes therapy overview + duplicate schema |
| `/counsellor-ontario.html` | counsellor-ontario.html | Near-duplicate copy; thin content |
| `/mental-health-therapist-ontario.html` | mental-health-therapist-ontario.html | Uses older layout; targets "find a therapist" intent |
| `/therapy-near-me-ontario.html` | therapy-near-me-ontario.html | Programmatic copy pointing to same queries |

## 2. New Target Page Outline (`how-to-find-therapist-ontario.html`)
1. **Hero + value prop:** Quick summary + CTA to free consult
2. **Step-by-step guide:** Understand credentials → clarify goals → use directories → confirm insurance → book a consult → prepare for session
3. **Directory toolkit:** Link out to CRPO, OSRP, Psychology Today, First Session, OAMHP
4. **Insurance + cost explainer:** Extended benefits, EAP, OHIP limitations
5. **Specialty matchmaker:** Anxiety, depression, workplace stress, relationship, student support (internal links to money pages)
6. **City hand-off:** Quick cards linking to Toronto, Hamilton, Mississauga, Oshawa, etc.
7. **FAQ schema:** 5-7 questions covering cost, OHIP, online vs in-person, red flags, therapy timeline
8. **CTA:** Book 15-min consult / email / phone

## 3. Content Tasks
- ✅ Inventory existing sections worth recycling (stats, insurance blurbs, schema snippets)
- 🔄 Draft fresh copy that addresses educational intent rather than directory intent
- 🔄 Add new visuals/table: credentials vs coverage vs OHIP
- 🔄 Build internal links to `/virtual-therapy-ontario.html`, `/anxiety-therapy-ontario.html`, `/workplace-stress-therapy-ontario.html`, and new city pages (Oshawa, Mississauga, etc.)

## 4. Technical Tasks (Post-Content)
1. Add new file at root: `how-to-find-therapist-ontario.html`
2. Update `sitemap.xml` + `sitemap_urls.txt` with new URL
3. Configure 301 redirects in `vercel.json`:
   - `/counselling-ontario.html` → `/how-to-find-therapist-ontario.html`
   - `/counsellor-ontario.html` → `/how-to-find-therapist-ontario.html`
   - `/mental-health-therapist-ontario.html` → `/how-to-find-therapist-ontario.html`
   - `/therapy-near-me-ontario.html` → `/how-to-find-therapist-ontario.html`
4. Remove old entries from sitemap + sitemap_urls once redirects live
5. Update internal links (e.g., service pages referencing old URLs) to point to new guide
6. Submit URL inspection for new page + start redirect validation in GSC

### Internal Links to Update After Redirects
- `virtual-therapy-ontario.html` (location-links list)
- `anxiety-therapy-ontario.html` (resource section)
- `counselling-ontario.html` family of pages (replace with new guide once redirects live)
- Header/footer menus if they reference any retiring URLs

## 5. Research To-Dos
- Pull top-10 SERP snapshot for "how to find a therapist in ontario" + "therapist ontario" (already captured in strategic recommendations)
- Gather insurance provider blurb to reuse from `virtual-therapy-ontario.html`
- Compile list of directories + short descriptions for toolkit section:
  - **CRPO Public Register** – verify registration/discipline standing of any psychotherapist in Ontario.
  - **OSRP Directory** – filterable list of Ontario Society of Registered Psychotherapists members with specialties.
  - **OAMHP Directory** – Ontario Association of Mental Health Professionals (includes psychotherapists, psychologists, RSWs).
  - **Psychology Today Ontario Search** – most-used consumer directory with filters by issue, modality, insurance.
  - **First Session** – curated marketplace with video intros and specialty filters for Canadian therapists.
  - **Psychotherapy Matters** – Ontario collaborative care network for psychotherapy + psychiatric support.
  - **Affordable Therapy Network** – lists reduced-fee or sliding-scale therapists across Ontario.
- Insurance coverage highlights to include:
  - Extended health benefits typically list “psychotherapy” under paramedical services; receipts must include CRPO #.
  - EAP programs (3–8 sessions) often via Morneau/Inkblot; clarify transition plan afterward.
  - OHIP coverage limited to psychiatrists/family physicians + OSP program (CBT for anxiety/depression; waitlists apply).
  - Students: UHIP/AMS/Gallagher plans cover RP services up to specified caps.

## 6. Success Criteria
- New guide published with >2,200 words, FAQ + HowTo schema validated
- All four legacy URLs 301 to new hub, no orphaned internal links
- GSC coverage: old URLs drop from "Alternate page" bucket; new page indexed within 1 week
- Position tracking: target top-5 ranking for "how to find a therapist in ontario" within 6–8 weeks
