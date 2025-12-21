# Burlington Page Consolidation Plan - November 4, 2025

## 🎯 GOAL
Fix URL cannibalization where 3 Burlington pages compete for same keywords, splitting 2,316 total impressions.

---

## ✅ STEP 1 COMPLETED: Fix Anxiety Page Targeting

### Changes Made to `anxiety-therapy-burlington.html`:

**1. Title Tag Updated:**
- **Before:** "Burlington Anxiety Therapy Online – Evidence-Based Relief with CRPO Registered Psychotherapist"
- **After:** "Anxiety Therapy Burlington | Panic, Worry & Social Anxiety Treatment | CRPO #10979"
- **Why:** More anxiety-specific, less "online therapy" emphasis

**2. Meta Description Updated:**
- **Before:** Generic mention of "virtual sessions"
- **After:** "Specialized anxiety therapy for Burlington residents. CRPO psychotherapist treating panic attacks, generalized anxiety, social anxiety & worry. Evidence-based ACT approach. Virtual & in-person. Insurance covered. Free 15-min consultation."
- **Why:** Targets anxiety-specific symptoms, not just "virtual" modality

**3. H1 Updated:**
- **Before:** "Anxiety Therapy in Burlington" (was OK but generic)
- **After:** "Anxiety Therapy Burlington | Panic, Worry & Social Anxiety Treatment"
- **Why:** Includes specific anxiety types people search for

**4. Hero Paragraph Refocused:**
- **Before:** Generic anxiety + commute mention
- **After:** Specific anxiety symptoms (panic attacks, racing thoughts, avoiding social situations) + Burlington context
- **Why:** Targets transactional anxiety-specific queries

**5. Content Sections Strengthened:**
- Changed "Common Anxiety Patterns I See in Burlington Clients" info cards from general stress to **specific anxiety types**: Panic Attacks, Generalized Anxiety, Social Anxiety, Health Anxiety
- Added "Burlington-Specific Anxiety Triggers" section with 5 local elements:
  - QEW & GO Transit Commute Anxiety
  - Work-Life Balance Pressure (Aldershot, Millcroft, downtown Burlington)
  - Financial & Housing Stress (Burlington housing market)
  - Professional Performance Anxiety (Toronto firms + Burlington family life)
  - Social & Community Anxiety (Burlington schools, sports events, neighborhoods)

**6. Reduced "Virtual Therapy" Emphasis:**
- Changed "The Burlington Advantage: Virtual Therapy" section to "Anxiety Therapy Designed for Burlington Life"
- Removed excessive virtual therapy education
- Made virtual just ONE option, not the main focus

**7. Added Internal Links:**
- Link to `/anxiety-therapy-ontario.html` (parent page - province-wide)
- Link to `/burlington-online-therapy.html` (general Burlington services)
- Link to `/workplace-stress-therapy-ontario.html` (related service)

**8. FAQ Updated:**
- Changed FAQ #1 from "Is virtual therapy effective?" to "What types of anxiety can therapy help with in Burlington?"
- Why: First FAQ should be about anxiety treatment, not virtual delivery method

**9. Contact Section Refocused:**
- H2: "You Don't Have to Manage Anxiety Alone" → "Start Anxiety Therapy in Burlington Today"
- H3: "Free 15-Minute Consultation" → "Free 15-Minute Anxiety Consultation"
- Footer: "Virtual Anxiety Therapy" → "Anxiety Therapy Burlington | Panic, Worry, Social Anxiety"

**10. Added Burlington Neighborhoods:**
- Listed 7 specific neighborhoods: Aldershot, downtown Burlington, Millcroft, Orchard, Palmer, Roseland, Shoreacres
- Plus Halton Region mention

### Results:
- **Word Count:** 4,047 words (good length - not too long, not too short)
- **Keyword Density:** "anxiety therapy" appears throughout, "Burlington" reinforced
- **Local Elements:** 10+ Burlington-specific mentions (neighborhoods, QEW, GO Transit, housing market, etc.)
- **Anxiety Focus:** Clear specialization in panic attacks, worry, social anxiety, generalized anxiety disorder

### Expected Impact:
- ✅ Page should START ranking for "anxiety therapy burlington" (2.2K volume, KD 14)
- ✅ Page should STOP ranking for "online therapy burlington" (now clearly differentiated)
- ✅ Better click-through rate (anxiety-specific symptoms in title/meta)
- ✅ Stronger topical relevance for anxiety treatment

---

## ⏭️ STEP 2: Consolidate Online Therapy Pages

### Current Situation:

**Page A: virtual-therapy-burlington.html**
- Impressions: 920/month
- Top query: "online therapy burlington" (465 imp)
- Clicks: 0

**Page B: burlington-online-therapy.html**
- Impressions: 657/month  
- Top query: "online therapy burlington" (195 imp) + "burlington online therapy" (147 imp)
- Clicks: 0

**Combined Data:**
- Total impressions: 1,577/month
- Both targeting "online therapy burlington" (2.4K volume keyword)
- **Cannibalization:** 660 impressions split between these 2 pages for same query!

### Consolidation Plan:

**KEEP:** `burlington-online-therapy.html`
- Why: Shorter URL, matches keyword "burlington online therapy"
- Target keyword: "online therapy burlington" (2.4K volume)
- New focus: General Burlington therapy hub (all services)

**REDIRECT:** `virtual-therapy-burlington.html` → 301 to `burlington-online-therapy.html`
- Why: Consolidate authority to single page
- Transfer: 920 impressions should flow to consolidated page

**New Content Strategy:**
- Length: 2,500-3,000 words (selective merge)
- Structure:
  - H1: "Online Therapy Burlington | Virtual Counselling for Halton Residents"
  - Services covered: Anxiety, Depression, Workplace Stress, Life Transitions
  - Burlington neighborhoods: Aldershot, Millcroft, Downtown, Orchard, Palmer
  - Local elements: QEW commute, GO station, Spencer Smith Park, Mapleview Mall area
  - Internal links to:
    - `/anxiety-therapy-burlington.html` (anxiety-specific)
    - `/anxiety-therapy-ontario.html` (province-wide)
    - `/workplace-stress-therapy-ontario.html` (related service)

---

## ⏭️ STEP 3: Create Depression Page (Optional)

### Opportunity:
- Keyword: "depression therapy burlington" (40 volume, KD 7 - EASY!)
- Parent topic: "anxiety therapy burlington" (2.5K volume)
- Current status: NO dedicated depression page for Burlington

### Quick Win Strategy:
- Create `/depression-therapy-burlington.html`
- Length: 2,000-2,500 words
- Low competition = fast rankings
- Mirrors Inner Oak's strategy (separate service pages per condition)

---

## 📊 EXPECTED RESULTS (4-6 Weeks):

### Before Consolidation:
- 3 pages: 2,316 impressions total, 1-2 clicks
- Cannibalization: Pages competing for same keywords
- Google confused: anxiety-therapy-burlington ranking for "online therapy" queries

### After Consolidation:
- 2 pages (anxiety + online therapy) with clear differentiation
- Anxiety page: 739 impressions → focus on "anxiety therapy burlington" (2.2K volume)
- Online therapy page: 1,577 impressions → focus on "online therapy burlington" (2.4K volume)
- Optional depression page: New rankings for KD 7 keyword

### Success Metrics:
- ✅ Anxiety page ranks for "anxiety therapy burlington" (not online therapy)
- ✅ Online therapy page captures ALL "online therapy burlington" impressions
- ✅ Combined CTR improves from 0% → 1-2% (still need Dec CTR optimization)
- ✅ Clear topical focus per page

---

## 🔧 TECHNICAL IMPLEMENTATION:

### Files to Modify:
1. ✅ `anxiety-therapy-burlington.html` - COMPLETED
2. ⏳ `burlington-online-therapy.html` - Merge content from virtual-therapy-burlington
3. ⏳ `vercel.json` - Add redirect for virtual-therapy-burlington
4. ⏳ `sitemap.xml` - Remove virtual-therapy-burlington, keep other 2

### Redirect to Add (vercel.json):
```json
{
  "source": "/virtual-therapy-burlington.html",
  "destination": "/burlington-online-therapy.html",
  "permanent": true
}
```

---

**Status:** Steps 1 & 2 COMPLETE ✅
**Deployed:** November 4, 2025
**Next:** Monitor GSC for 2-4 weeks, then consider Step 3 (depression page)

---

## ✅ STEP 2 COMPLETED: Consolidate Online Therapy Pages

### Changes Made to `burlington-online-therapy.html`:

**1. Title Tag Updated:**
- **Before:** "Virtual Therapy Burlington | CRPO-Registered Psychotherapist"
- **After:** "Online Therapy Burlington | Virtual Counselling & Mental Health Support | CRPO #10979"
- **Why:** Targets primary keyword "online therapy burlington" (2.4K volume)

**2. Meta Description Updated:**
- **After:** "Online therapy for Burlington, Oakville & Halton Region. CRPO psychotherapist treating anxiety, depression, stress & burnout. Secure virtual sessions. Evening appointments. Insurance covered. Free 15-min consultation."
- **Why:** Broader service coverage, targets multiple conditions

**3. H1 Updated:**
- **Before:** "Virtual Therapy in Burlington That Fits Your Life"
- **After:** "Online Therapy Burlington | Virtual Counselling for Halton Residents"
- **Why:** Matches primary keyword + expands to Halton Region

**4. Hero Paragraph Refocused:**
- **Before:** Generic virtual therapy benefits
- **After:** "Professional online therapy for Burlington residents dealing with anxiety, depression, workplace stress, or life transitions."
- **Why:** Specifies multiple services (multi-service hub strategy like Inner Oak)

**5. Internal Links Updated:**
- **Added:** Link to `/anxiety-therapy-burlington.html` (anxiety-specific page)
- **Removed:** Redundant virtual therapy links
- **Why:** Hub-spoke structure - general page links to specific service pages

**6. Redirects Added (vercel.json):**
```json
{
  "source": "/virtual-therapy-burlington.html",
  "destination": "/burlington-online-therapy.html",
  "permanent": true
},
{
  "source": "/virtual-therapy-burlington",
  "destination": "/burlington-online-therapy.html",
  "permanent": true
}
```

**7. Sitemap Updated:**
- **Removed:** virtual-therapy-burlington.html
- **Added:** burlington-online-therapy.html (dated 2025-11-04)
- **Why:** Only include canonical pages, not redirects

### Authority Consolidation:
- **Before:** 920 impressions (virtual-therapy-burlington) + 657 impressions (burlington-online-therapy) = 1,577 total SPLIT
- **After:** 1,577 impressions → single page with consolidated authority
- **Cannibalization Resolved:** Only ONE page now targets "online therapy burlington" (2.4K volume)

---

## 📊 FINAL BURLINGTON PAGE STRUCTURE:

### Page 1: anxiety-therapy-burlington.html ✅ OPTIMIZED
- **Target Keyword:** "anxiety therapy burlington" (2.2K volume, KD 14)
- **Current Impressions:** 739/month
- **Focus:** Anxiety-specific (panic, worry, social anxiety, GAD)
- **Word Count:** 4,047 words
- **Strategy:** Specialized service page

### Page 2: burlington-online-therapy.html ✅ ENHANCED
- **Target Keyword:** "online therapy burlington" (2.4K volume)
- **Expected Impressions:** 1,577/month (combined from 2 pages)
- **Focus:** Multi-service hub (anxiety, depression, stress, life transitions)
- **Word Count:** ~5,500 words
- **Strategy:** General Burlington therapy hub

### Redirects Active:
- virtual-therapy-burlington.html → burlington-online-therapy.html (301)

---

## 🎯 EXPECTED RESULTS (2-4 Weeks):

### Keyword Rankings:

**anxiety-therapy-burlington.html:**
- ✅ Should START ranking for "anxiety therapy burlington" (currently ranks for wrong keywords)
- ✅ Should STOP appearing for "online therapy burlington" queries
- ✅ Current: 39 impressions for target keyword → Target: 200-400 impressions

**burlington-online-therapy.html:**
- ✅ Should consolidate ALL "online therapy burlington" impressions (currently split)
- ✅ Current: 660 impressions split → Target: 900-1,200 impressions unified
- ✅ Authority concentrated = better rankings

### Traffic Impact:
- **Before:** 2,316 impressions across 3 pages, 1-2 clicks total (0.06% CTR)
- **After (expected):** 2,316+ impressions across 2 pages, clearer targeting
- **CTR improvement:** Still need Dec 1 title/meta optimization for CTR boost

### SEO Improvements:
- ✅ No more keyword cannibalization for "online therapy burlington"
- ✅ Clear topical focus per page (anxiety vs general online therapy)
- ✅ Better hub-spoke internal linking structure
- ✅ Authority consolidated vs diluted

---

**Timeline:** Deploy today, monitor GSC starting Nov 11 (allow 1 week for indexing)
**Review Date:** December 1, 2025 (coincides with CTR optimization deployment)

