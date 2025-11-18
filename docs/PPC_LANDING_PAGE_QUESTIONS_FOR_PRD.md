# PPC Landing Page Implementation Questions - For PRD Creator

## Context
I'm implementing the Google Ads PRD for Next Step Therapy. I have:
- 2 campaigns planned: Anxiety Therapy ($450/mo) + Professional/Workplace Therapy ($450/mo)
- Existing Jane booking software: `https://nextsteptherapy.janeapp.com/`
- Professional headshot available: `images/asset103.png`
- Current website with navigation (organic SEO pages)

---

## Questions for PRD Creator

### 1. BOOKING FLOW CLARIFICATION

**PRD recommends (lines 428-442):**
- Two-step flow: Form → Thank you page → Jane booking widget

**My situation:**
- I already have Jane booking software set up
- Direct booking link available

**QUESTION:** Should I:
- **Option A:** CTA buttons directly to Jane (simpler, less friction, 1 click)
- **Option B:** Build form → thank you page → Jane widget (captures lead first)

**Follow-up:** If Option B, what happens when someone fills the form but doesn't book? What's the email follow-up sequence?

---

### 2. THERAPIST PHOTO PLACEMENT

**PRD mentions photos in TWO places:**
- Line 369: "Jesse's photo" in hero trust signals (right side)
- Line 384: "Professional photo" in About Jesse section

**QUESTIONS:**
- Should the photo appear in BOTH locations?
- If only one location, which is more important for conversion?
- Hero photo placement: floating on right side, or integrated differently?
- Image size recommendations? (200x200px? Larger?)

---

### 3. SPORTS OPS BACKGROUND DETAIL

**PRD mentions (line 388):**
- "Sports ops background"

**CONTEXT:**
- Jesse has background in sports operations prior to becoming RP
- Currently working with professionals/high-achievers

**QUESTIONS:**
- How much detail about sports ops? (1 sentence? 1 paragraph?)
- Where to place it? (About section? Or brief mention in hero trust signals?)
- How to position this background as relevant to therapy for professionals?
- Suggested phrasing that connects sports ops → understanding high-performance mindset?

---

### 4. HERO LAYOUT SPECIFICS

**PRD says (lines 358-370):**
```
Trust signals (right side):
- Large CRPO #10979 badge
- "$175/session | Insurance Accepted"
- Jesse's photo
```

**QUESTIONS:**
- Desktop layout: Should trust signals/photo be literally on RIGHT side (two-column layout)?
- Mobile layout: How should this stack? Photo first, then trust signals?
- Should photo be circular or square?
- Approximate dimensions for trust signals section?

---

### 5. CRPO COMPLIANCE - TESTIMONIALS

**PRD mentions (line 392):**
- "Cannot use client outcome testimonials per CRPO"

**QUESTION:**
- Can I use process testimonials like: *"Working with Jesse helped me understand my anxiety patterns"* (process) vs *"My anxiety is 80% better"* (outcome)?
- Any examples of CRPO-compliant testimonial language?
- Should I skip testimonials entirely for safety?

---

### 6. LOAD SPEED & TECHNICAL

**PRD says (line 422):**
- "Load speed < 3 seconds (use Google PageSpeed Insights)"

**QUESTIONS:**
- Should I compress/optimize Jesse's headshot before adding?
- Any specific image format recommendations? (WebP? PNG?)
- Should background images be removed for faster load?
- Mobile-first loading priorities?

---

### 7. CONVERSION TRACKING SETUP

**Current setup:**
- Google Analytics 4 configured (G-J8H4YBGSHR)
- Phone click tracking in place
- Jane booking click tracking ready

**QUESTIONS:**
- If using form (Option B), what specific GA4 events to track?
- Should form submission trigger `generate_lead` event?
- What value to assign to form submission vs phone call?
- How to track Jane bookings completed (vs just clicks to Jane)?

---

### 8. CONTENT ADJUSTMENTS

**PRD provides specific copy for Anxiety page:**
- Headline: "Find Relief From Anxiety in Toronto | Evidence-Based ACT Therapy"
- Subheadline: "Using ACT, we'll develop practical skills you can use - not years of analysis. Virtual across Ontario."

**QUESTIONS:**
- Should I use PRD copy exactly as written?
- Any adjustments needed for CRPO compliance?
- For Professional/Workplace page, should I follow same structure/tone?
- Any phrases that need to be avoided per Ontario regulations?

---

### 9. CAMPAIGN STRUCTURE CONFIRMATION

**My revised structure (skipping ADHD since I don't offer it):**

**Campaign 1: Anxiety Therapy Toronto - $450/month**
- Landing page: `ads-anxiety-therapy-toronto.html`
- Keywords: anxiety therapy Toronto, anxiety therapist Toronto, social anxiety, performance anxiety

**Campaign 2: Professional/Workplace Therapy - $450/month**
- Landing page: `ads-professional-workplace-therapy.html`
- Keywords: men's mental health, workplace stress, burnout therapy, professional therapy

**QUESTION:** Does this split make sense? Or should I allocate budget differently?

---

### 10. MISSING ELEMENTS CHECK

**What I've built so far:**
✅ No navigation (logo only)
✅ CRPO #10979 badge prominent
✅ 3 CTA placements (hero, mid-page, bottom)
✅ Trust signals ($175, Insurance, Start This Week, Free Call)
✅ Mobile click-to-call floating button
✅ All 7 sections from PRD structure
✅ GA4 conversion tracking
✅ No-index meta tag

**QUESTIONS:**
- Am I missing any critical elements from the PRD?
- Any additional trust signals I should add?
- Should I include office location even though virtual-only?
- Emergency resources section necessary for PPC pages?

---

### 11. LAUNCH READINESS

**Before launching ads:**

**QUESTIONS:**
- Should I A/B test two versions (with/without photo)?
- How long to run pages before evaluating performance?
- What conversion rate should I aim for? (clicks to calls/bookings)
- When should I adjust vs when to wait for more data?

---

## PRIORITY QUESTIONS (Need answers to proceed):

1. **Form vs Direct Jane booking** - which for my setup?
2. **Photo placement** - hero only, About only, or both?
3. **Sports ops background** - how much detail and where?
4. **Load speed** - specific image optimization requirements?

---

## Additional Context

**Current website stats:**
- Domain authority: Low (new site)
- Monthly organic traffic: Growing but small
- This is first paid ads campaign
- Budget: $900/month total
- Goal: 4-6 clients/month (break even at 5 clients)

**Jesse's credentials:**
- Registered Psychotherapist (CRPO #10979)
- Sports operations background
- Specializes in: Anxiety, men's mental health, workplace stress
- Virtual-only practice across Ontario

---

Please provide guidance on the priority questions first, then any additional recommendations based on the full context above.

