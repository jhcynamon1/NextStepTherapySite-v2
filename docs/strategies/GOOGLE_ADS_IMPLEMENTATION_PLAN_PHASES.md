# Google Ads Implementation Plan - Detailed Phases
**Part 2 of Complete Implementation Plan**

---

## Phase 1: Foundation Setup (Days 1-3)

### Goal
Complete all technical setup and configuration to enable tracking and campaign deployment.

### Specific Tasks with Step-by-Step Instructions

#### Task 1.1: Google Ads Account Creation
**Time Required:** 30 minutes

**Steps:**
1. Go to ads.google.com
2. Click "Start Now"
3. **CRITICAL:** Select "Switch to Expert Mode" (bottom of screen)
4. Choose "Create account without a campaign" option
5. Enter billing information:
   - Use business credit card
   - Set currency to CAD (Canadian Dollar)
   - Billing address: Your practice address
6. Accept terms of service

**Deliverable:** ✅ Google Ads account ID number saved

---

#### Task 1.2: Link Google Analytics 4
**Time Required:** 15 minutes

**Steps:**
1. In Google Ads, click Tools & Settings (wrench icon)
2. Navigate to "Setup" → "Linked Accounts"
3. Find "Google Analytics (GA4) & Firebase"
4. Click "Details"
5. Select your GA4 property (G-J8H4YBGSHR)
6. Click "Link"
7. Enable:
   - ☑ Import site metrics
   - ☑ Personalized advertising
   - ☑ Google Ads data sharing

**Deliverable:** ✅ GA4 linked, data flowing confirmed

---

#### Task 1.3: Import Existing Conversion Events
**Time Required:** 20 minutes

**Your Existing Conversions (Already Tracked in GA4):**
1. `booking_click` (Jane App booking button clicks)
2. `phone_call` (Phone number clicks)

**Steps to Import:**
1. In Google Ads, go to Tools → "Conversions"
2. Click "+ New Conversion Action"
3. Select "Import" → "Google Analytics 4 properties"
4. Find these events:
   - `booking_click`
   - `phone_call`
5. Import both, set:
   - **Value:** $175 CAD (your session rate)
   - **Count:** One (count only one conversion per click)
   - **Conversion window:** 30 days click, 1 day view
   - **Attribution model:** Data-driven (or Last Click if data-driven unavailable)

**Deliverable:** ✅ 2 conversion actions imported and active

---

#### Task 1.4: Install Google Ads Conversion Tracking Tag
**Time Required:** 10 minutes

**Steps:**
1. In Google Ads Conversions, click "Set up tag" → "Use Google Tag Manager" OR "Install the tag yourself"
2. **If using Google Tag (you already have gtag.js):**
   - Copy the Google Ads Conversion ID (looks like: AW-123456789)
   - Add this line AFTER your existing GA4 config in index.html (line 26):

```javascript
gtag('config', 'AW-XXXXXXXXX'); // Replace with your actual conversion ID
```

3. **Test the tag:**
   - Use Google Tag Assistant Chrome extension
   - Visit your site, click Jane booking or phone number
   - Verify conversion fires in Tag Assistant
   - Check Google Ads → "Conversions" → verify "Recent conversions" shows test events (can take 30 min - 3 hours)

**Deliverable:** ✅ Conversion tag installed and tested

---

#### Task 1.5: Build Negative Keyword List
**Time Required:** 30 minutes

**Master Negative Keyword List for Therapy Practice:**

Copy this entire list into Google Ads (Tools → Shared Library → Negative Keyword Lists → Create List "Therapy Practice Master Negatives"):

```
free
jobs
careers
job
career
training
courses
course
class
classes
certification
school
schools
university
college
program
programs
degree
degrees
online degree
diploma
salary
salaries
how much do
cost of
how to become
requirements
diy
do it yourself
tips
ideas
advice
reddit
youtube
video
book
books
ebook
pdf
definition
meaning
what is
wiki
wikipedia
meme
funny
joke
dog
dogs
pet
pets
horse
horses
animal
animals
child therapist (unless you serve children)
couples therapist (memory ID: 8228136 - user doesn't want couples counseling)
family therapist (unless you serve families)
physical therapy
physiotherapy
massage
massage therapy
occupational therapy
speech therapy
rehab
rehabilitation
detox
addiction rehab (unless you specialize in addiction)
inpatient
residential
facility
facilities
center
centre
hospital
clinic near me (too generic)
volunteer
internship
intern
shadowing
```

**How to Add:**
1. In Google Ads, go to Tools → Shared Library → Negative Keyword Lists
2. Click "+ New negative keyword list"
3. Name it: "Therapy Practice Master Negatives"
4. Paste all keywords above (one per line)
5. Match type: Set as "Phrase match" for broader filtering

**Deliverable:** ✅ Negative keyword list with 75+ terms created

---

#### Task 1.6: Set Up Conversion Tracking Spreadsheet
**Time Required:** 15 minutes

**Create Google Sheet:** "Next Step Therapy - Google Ads Tracking"

**Tabs to Create:**
1. **Daily Performance**
   - Columns: Date | Campaign | Clicks | Impressions | CTR | Cost | Conversions | CPA | Conv. Rate

2. **Conversion by Source**
   - Columns: Date | Phone Calls | Jane Bookings | Contact Forms | Total Conversions | Notes

3. **Lead Quality Log**
   - Columns: Date | Lead Source | Converted to Client? | Service Interested In | City | Quality (1-5) | Notes

**Deliverable:** ✅ Tracking spreadsheet created and shared with team

---

### Phase 1 Success Metrics
- [ ] Google Ads account active with billing enabled
- [ ] GA4 successfully linked
- [ ] 2 conversion actions (booking_click, phone_call) imported and firing
- [ ] Negative keyword list with 75+ terms created
- [ ] Conversion tracking spreadsheet created
- [ ] Google Ads conversion tag installed and tested

**Time to Complete Phase 1:** 2-3 hours

---

## Phase 2: Campaign Build (Days 4-7)

### Goal
Build 3 Search campaigns with 9 ad groups and 45 ads (3 ads per ad group).

### Campaign Structure Overview

```
ACCOUNT: Next Step Therapy
│
├── Campaign 1: Performance Anxiety Therapy Ontario
│   ├── Budget: $800/month ($26/day)
│   ├── Ad Group 1.1: Performance Anxiety Ottawa [10 keywords, 3 ads]
│   ├── Ad Group 1.2: Performance Anxiety Hamilton [10 keywords, 3 ads]
│   └── Ad Group 1.3: Performance Anxiety London [10 keywords, 3 ads]
│
├── Campaign 2: Therapy for Entrepreneurs Ontario
│   ├── Budget: $600/month ($20/day)
│   ├── Ad Group 2.1: Entrepreneur Therapy Ottawa [8 keywords, 3 ads]
│   ├── Ad Group 2.2: Business Owner Therapy Hamilton [8 keywords, 3 ads]
│   └── Ad Group 2.3: Entrepreneur Burnout London [8 keywords, 3 ads]
│
└── Campaign 3: Virtual Therapy Ontario
    ├── Budget: $600/month ($20/day)
    ├── Ad Group 3.1: Online Therapy Ottawa [12 keywords, 3 ads]
    ├── Ad Group 3.2: Virtual Therapy Hamilton [12 keywords, 3 ads]
    └── Ad Group 3.3: Virtual Therapy London [12 keywords, 3 ads]

TOTAL BUDGET: $2,000/month ($66/day)
TOTAL AD GROUPS: 9
TOTAL ADS: 27-45 (3-5 per ad group)
```

---

### Task 2.1: Create Campaign 1 - Performance Anxiety Therapy

**Campaign Settings:**

1. **Campaign Name:** "Performance Anxiety Therapy Ontario"
2. **Campaign Type:** Search
3. **Goal:** Leads (Website conversions)
4. **Networks:**
   - ☑ Google search
   - ☐ Google Search Partners (UNCHECK - more control during test)
   - ☐ Google Display Network (UNCHECK)

5. **Locations:**
   - Target: Ottawa, Hamilton, London (Ontario, Canada)
   - **How to set:** "Enter another location" → type "Ottawa, ON" → Select "Ottawa, Ontario, Canada"
   - Repeat for Hamilton and London
   - **Location Options:** "Presence: People in or regularly in your targeted locations"

6. **Languages:** English

7. **Budget & Bidding:**
   - **Daily Budget:** $26 CAD
   - **Bidding:** Manual CPC (start here, switch to Maximize Conversions after 15-20 conversions)
   - **Starting CPC bid limit:** $5.00 CAD

8. **Ad Schedule:**
   - Monday - Friday: 9:00 AM - 9:00 PM
   - Saturday - Sunday: 10:00 AM - 6:00 PM

9. **Start Date:** Today
10. **End Date:** None

11. **Ad Rotation:** Optimize (prefer best performing ads)

**Click "Save and Continue" to create ad groups.**

---

### Task 2.2: Build Ad Groups for Campaign 1

#### Ad Group 1.1: Performance Anxiety Ottawa

**Ad Group Settings:**
- **Name:** Performance Anxiety Therapy Ottawa
- **Max CPC Bid:** $5.00 CAD

**Keywords (Phrase Match):**
```
"performance anxiety therapy ottawa"
"performance anxiety therapist ottawa"
"performance anxiety counselling ottawa"
"performance anxiety treatment ottawa"
"help with performance anxiety ottawa"
"therapy for performance anxiety ottawa"
"online therapy performance anxiety ottawa"
"virtual performance anxiety therapy ottawa"
"therapist for performance anxiety ottawa"
"performance anxiety psychotherapy ottawa"
```

**Why Phrase Match?**
- Captures variations ("best performance anxiety therapy ottawa")
- Filters out unrelated searches (vs. broad match)
- More traffic than exact match alone
- Recommended for therapy keywords with moderate search volume

---

#### Ad Copy for Ad Group 1.1: Performance Anxiety Ottawa

**Ad Variation 1: Direct + Credential**
- **Headline 1:** Performance Anxiety Therapy Ottawa
- **Headline 2:** CRPO Registered Psychotherapist
- **Headline 3:** Available This Week
- **Description 1:** Work through performance anxiety with evidence-based therapy. Virtual sessions available. CRPO #10979. Free 15-minute consultation.
- **Description 2:** Specializing in performance anxiety for professionals and students. Online therapy across Ontario. Book today.
- **Path 1:** performance-anxiety
- **Path 2:** ottawa
- **Final URL:** https://nextsteptherapy.ca/performance-anxiety-therapy-ontario.html?utm_source=google&utm_medium=cpc&utm_campaign=performance_anxiety&utm_term=ottawa

**Ad Variation 2: Benefit + Urgency**
- **Headline 1:** Performance Anxiety Therapy
- **Headline 2:** Ottawa | Available This Week
- **Headline 3:** CRPO #10979 Registered
- **Description 1:** Therapy may help with performance anxiety symptoms. Evidence-based approaches. Virtual appointments. Free consultation available.
- **Description 2:** Registered psychotherapist specializing in performance anxiety. Online sessions fit your schedule. No waitlist.
- **Path 1:** ottawa-therapy
- **Path 2:** performance-anxiety
- **Final URL:** https://nextsteptherapy.ca/performance-anxiety-therapy-ontario.html?utm_source=google&utm_medium=cpc&utm_campaign=performance_anxiety&utm_term=ottawa

**Ad Variation 3: No-BS Direct (Your Preference)**
- **Headline 1:** Performance Anxiety Therapy
- **Headline 2:** Ottawa Virtual Sessions
- **Headline 3:** CRPO Registered | Available
- **Description 1:** Therapy for professionals and students dealing with performance anxiety. Virtual sessions. CRPO #10979. Book free consultation today.
- **Description 2:** Evidence-based approaches that work. No waitlist, no fluff. Online therapy across Ontario. Get started this week.
- **Path 1:** therapy-ottawa
- **Path 2:** performance-anxiety
- **Final URL:** https://nextsteptherapy.ca/performance-anxiety-therapy-ontario.html?utm_source=google&utm_medium=cpc&utm_campaign=performance_anxiety&utm_term=ottawa

---

### Task 2.3: Add Ad Extensions (Campaign-Level)

**Sitelink Extensions:**

| Sitelink | Description Line 1 | Description Line 2 | Final URL |
|----------|-------------------|-------------------|-----------|
| Free Consultation | 15-minute consultation | No obligation, book online | /contact.html |
| About CRPO #10979 | Learn about my approach | Evidence-based therapy | /index.html |
| Virtual Therapy | Online sessions available | Across all of Ontario | /virtual-therapy-ontario.html |
| Book Appointment | Schedule via Jane App | Available this week | [Jane booking URL] |

**Callout Extensions:**
- CRPO #10979 Registered
- Virtual Therapy Available
- Free 15-Minute Consultation
- Evidence-Based Approaches
- Available This Week
- No Waitlist
- Serving All Ontario
- Flexible Scheduling

**Structured Snippet Extensions:**

| Header | Values |
|--------|--------|
| Service Highlights | Performance Anxiety, Virtual Therapy, CRPO Registered, Free Consultation |
| Therapy Types | Individual Therapy, Virtual Counseling, Evidence-Based |
| Areas Served | Ottawa, Hamilton, London, Toronto, All Ontario |

**Call Extension:**
- Phone number: [Your business phone]
- Call reporting: On (track calls from ads)
- Call click reporting: On

---

### Task 2.4: Repeat for Remaining 8 Ad Groups

**Ad Group 1.2: Performance Anxiety Hamilton**
- Copy Ad Group 1.1 structure
- Replace "Ottawa" with "Hamilton" in:
  - Ad group name
  - All keywords
  - All ad copy
  - UTM parameters (utm_term=hamilton)

**Ad Group 1.3: Performance Anxiety London**
- Copy Ad Group 1.1 structure
- Replace "Ottawa" with "London" in all elements

**Campaign 2: Therapy for Entrepreneurs Ontario**

Create 3 ad groups:
- 2.1: Entrepreneur Therapy Ottawa
- 2.2: Entrepreneur Therapy Hamilton  
- 2.3: Entrepreneur Therapy London

**Keywords (8 per ad group):**
```
"therapy for entrepreneurs [city]"
"therapist for entrepreneurs [city]"
"business owner therapy [city]"
"entrepreneur counselling [city]"
"entrepreneur burnout therapy [city]"
"small business owner therapy [city]"
"startup founder therapy [city]"
"entrepreneur mental health [city]"
```

**Landing Page:** Create new page OR use existing imposter-syndrome page (entrepreneurs often experience imposter syndrome)

---

**Campaign 3: Virtual Therapy Ontario**

Create 3 ad groups:
- 3.1: Online Therapy Ottawa
- 3.2: Virtual Therapy Hamilton
- 3.3: Virtual Therapy London

**Keywords (12 per ad group):**
```
"online therapy [city]"
"virtual therapy [city]"
"online counselling [city]"
"virtual counselling [city]"
"online therapist [city]"
"virtual therapist [city]"
"online psychotherapy [city]"
"remote therapy [city]"
"telehealth therapy [city]"
"video therapy [city]"
"internet therapy [city]"
"online mental health [city]"
```

**Landing Page:** https://nextsteptherapy.ca/virtual-therapy-ontario.html (already exists)

---

### Phase 2 Success Metrics
- [ ] 3 campaigns created with correct settings
- [ ] 9 ad groups created with tight keyword themes
- [ ] 90 keywords total (10 per ad group average)
- [ ] 27-45 ads written (3-5 per ad group)
- [ ] All ad extensions added at campaign level
- [ ] Negative keyword list applied to all campaigns
- [ ] All UTM parameters correct for tracking
- [ ] Landing pages reviewed and optimized

**Time to Complete Phase 2:** 4-6 hours

---

## Phase 3: Launch & Initial Monitoring (Week 2)

### Daily Tasks (First 7 Days)

#### Day 1 (Launch Day)
- [ ] **9:00 AM:** Launch all 3 campaigns
- [ ] **10:00 AM:** Verify ads entered review queue (status: "Under review")
- [ ] **12:00 PM:** Check for any policy violations or disapprovals
- [ ] **3:00 PM:** Monitor for first impressions (should start within 1-3 hours)
- [ ] **6:00 PM:** Verify conversion tracking firing (test phone click + Jane booking)
- [ ] **End of Day:** Log first-day metrics in tracking spreadsheet

**Expected Day 1 Results:**
- Impressions: 50-100
- Clicks: 2-5
- Cost: $10-25
- Conversions: 0-1 (rare on day 1)

---

#### Days 2-3 (Ad Approval Period)
- [ ] Morning: Check ad approval status
- [ ] Fix any policy violations:
  - Healthcare ads often flagged for "unverifiable claims"
  - **Solution:** Remove any outcome language, add "may help with", ensure CRPO # visible
- [ ] Afternoon: Monitor search terms report
- [ ] Add 3-5 negative keywords if irrelevant searches appear
- [ ] Evening: Check budget pacing (spending too fast or too slow?)

**Common Policy Issues:**
- ❌ "Cure anxiety" → ✅ "Help with anxiety symptoms"
- ❌ "Best therapist" → ✅ "CRPO registered therapist"
- ❌ "Guaranteed results" → ✅ "Evidence-based approaches"

---

#### Days 4-7 (Steady State)

**Morning Routine (15 minutes):**
1. Open Google Ads dashboard
2. Check overnight performance:
   - Total clicks
   - Cost so far today
   - Conversions (if any)
3. Review search terms from previous day
4. Add 2-3 negative keywords

**Midday Check (10 minutes):**
1. Verify budget pacing (should spend ~$66 total per day)
2. Check if any campaigns paused due to budget exhaustion
3. Verify ads still approved (sometimes re-reviewed)

**Evening Review (20 minutes):**
1. Download search terms report
2. Identify high-performing keywords:
   - High CTR (>2%)
   - Low CPC (<$4.00)
   - Relevant intent
3. Identify wasted spend:
   - Irrelevant searches
   - High CPC (>$8.00)
   - Zero conversions after 20+ clicks
4. Update tracking spreadsheet
5. Add notes on any issues or observations

---

### Search Terms Report Analysis

**How to Access:**
1. Google Ads → Reports → Predefined Reports → Search terms
2. Date range: Last 7 days
3. Columns to add:
   - Search term
   - Match type
   - Clicks
   - Cost
   - Conversions
   - Conv. value

**What to Look For:**

**✅ Good Search Terms (Keep These):**
```
Examples:
- "performance anxiety therapist ottawa"
- "virtual therapy for entrepreneurs hamilton"
- "online therapist london ontario"
- "crpo registered therapist ottawa"

Action: None needed (already being captured)
```

**❌ Irrelevant Search Terms (Add as Negatives):**
```
Examples:
- "performance anxiety therapy jobs"
- "how to become a therapist"
- "free therapy online"
- "therapy dog training"

Action: Add each as negative keyword
```

**🤔 Questionable Search Terms (Monitor):**
```
Examples:
- "performance anxiety medication" (looking for psychiatry, not therapy)
- "emergency therapy" (may need crisis line, not booking)
- "couples therapy" (you don't offer this - memory ID: 8228136)

Action: Add as negative if they don't convert after 10 clicks
```

---

### Conversion Tracking Verification

**Week 1 Checklist:**
- [ ] At least 1 conversion recorded (jane_booking_click OR phone_call)
- [ ] Conversion value is showing as $175 CAD
- [ ] Conversions appear in both Google Ads AND GA4
- [ ] UTM parameters captured in GA4 (verify source = google, medium = cpc)

**If conversions are NOT tracking:**

**Troubleshooting Steps:**
1. **Test manually:**
   - Click your own ad (from different device/network)
   - Click phone number OR Jane booking button
   - Check if conversion fires in GA4 Real-Time report
   - Wait 3 hours, check if it appears in Google Ads

2. **Common Issues:**
   - Conversion import not complete (can take 24-48 hours)
   - GA4 event not marked as "conversion" in GA4 Admin
   - Conversion window too short (should be 30 days)
   - Ad blocker or cookie blocker preventing tracking

3. **Emergency Solution:**
   - Manually log conversions in spreadsheet
   - Track source (PPC) in client intake form
   - Count phone calls from ads using call extension reporting

---

### Budget Pacing Analysis

**Expected Daily Spend Pattern:**

| Day | Expected Daily Spend | Cumulative Spend | Notes |
|-----|---------------------|------------------|-------|
| 1 | $20-30 | $20-30 | Slow start as ads enter rotation |
| 2 | $40-50 | $60-80 | Ramp up as Quality Score calculated |
| 3 | $50-60 | $110-140 | Approaching full budget |
| 4-7 | $60-70 | $350-430 | Steady state spending |

**Budget Issues & Solutions:**

**Problem: Spending Too Fast (exhausting budget by 2pm)**
- **Cause:** Bids too high or high-traffic keywords
- **Solution:** Lower max CPC bid by 20% ($5.00 → $4.00)

**Problem: Spending Too Slow (<$40/day)**
- **Cause:** Bids too low, losing auctions
- **Solution:** Increase max CPC bid by 20% ($5.00 → $6.00)

**Problem: One campaign spending all the budget**
- **Cause:** Unbalanced keyword competition
- **Solution:** Allocate campaign-level daily budgets more precisely

---

### Phase 3 Success Metrics
- [ ] All ads approved and running
- [ ] Consistent daily spend of $60-70
- [ ] 100-150 total clicks in Week 2
- [ ] 2-5 conversions recorded
- [ ] Search terms report reviewed daily
- [ ] 15-25 negative keywords added
- [ ] No policy violations
- [ ] Tracking spreadsheet updated daily

**Time Investment Week 2:** 30-45 minutes per day

---

## Phase 4: Optimization Phase (Weeks 3-4)

### Week 3 Tasks

#### Monday: Weekly Performance Review
**Time:** 1 hour

**Metrics to Analyze:**
1. **Campaign Performance:**
   - Which campaign has lowest CPA?
   - Which has highest conversion rate?
   - Are we wasting spend on any campaign?

2. **Ad Group Performance:**
   - Which ad groups have <1% CTR? (These need better ads)
   - Which have >3% CTR? (These are working, scale them)
   - Any ad groups with 0 conversions after 50 clicks? (Pause or fix)

3. **Keyword Performance:**
   - Top 5 keywords by conversions
   - Top 5 keywords by cost (are they converting?)
   - Bottom 10 keywords by CTR (consider pausing)

4. **Geographic Performance:**
   - Is Ottawa, Hamilton, or London performing better?
   - Should we shift budget between cities?

**Action Items:**
- [ ] Pause underperforming ad groups (0 conversions after 50+ clicks, CTR <0.5%)
- [ ] Increase bids on top-performing keywords (+20%)
- [ ] Decrease bids on high-cost, low-conversion keywords (-30%)

---

#### Tuesday: Ad Copy A/B Test Analysis
**Time:** 30 minutes

**Questions to Answer:**
1. Which ad variations have highest CTR?
2. Which have highest conversion rate?
3. Are "Available This Week" ads outperforming others? (Based on your homepage 1.7% CTR success)

**Action Items:**
- [ ] Pause ads with <1% CTR
- [ ] Write 2 new ad variations based on top performers
- [ ] Test adding "Free Consultation" to headline

---

#### Wednesday: Landing Page Heatmap Analysis
**Time:** 45 minutes

**Tool:** Install Hotjar or Microsoft Clarity (free heatmap tools)

**Setup:**
1. Add Hotjar tracking script to PPC landing pages
2. Let run for 7-10 days
3. Review:
   - Where do people click?
   - How far do they scroll?
   - Are they finding the CTA buttons?
   - Do they click phone number or Jane booking more?

**Action Items Based on Findings:**
- [ ] Move CTAs higher if people don't scroll to bottom
- [ ] Make phone number larger if clicks are low
- [ ] Add second "Book Now" button midway down page

---

#### Thursday: Search Query Expansion
**Time:** 30 minutes

**Goal:** Find new keyword opportunities from search terms report

**Process:**
1. Export search terms with 2+ conversions
2. Look for patterns:
   - New keyword variations
   - Related problems (e.g., "impostor syndrome therapy" from "performance anxiety" searches)
   - City variations (e.g., "Kanata" near Ottawa)
3. Add high-performing search terms as exact match keywords

**Action Items:**
- [ ] Add 5-10 new exact match keywords from search terms
- [ ] Create new ad group if finding cluster of related searches

---

#### Friday: Quality Score Optimization
**Time:** 45 minutes

**Check Quality Scores:**
1. In Google Ads, add "Quality Score" column to keywords tab
2. Identify keywords with QS <5 (these hurt campaign performance)
3. Review why QS is low:
   - Expected CTR: Write better ads
   - Ad relevance: Tighten ad group theme
   - Landing page experience: Improve page speed, add relevant content

**Action Items:**
- [ ] Rewrite ads for low QS keywords (include keyword in headline)
- [ ] Split ad groups that are too broad
- [ ] Check landing page mobile speed (use PageSpeed Insights)

---

### Week 4 Tasks

#### Bid Strategy Evaluation
**Time:** 30 minutes

**After 15-20 total conversions, consider switching to automated bidding:**

**Current:** Manual CPC
**Option to Test:** Maximize Conversions

**How to Switch:**
1. In campaign settings, change bid strategy to "Maximize Conversions"
2. Set target CPA: $150 CAD (based on your expected CPA)
3. Monitor for 7 days
4. Compare performance to previous week (manual CPC)

**When to Stay Manual:**
- If conversions are inconsistent (some weeks 2, some weeks 8)
- If total conversions still <15
- If CPL varies wildly ($50 one lead, $300 another)

**When to Switch to Automated:**
- If getting consistent 3-5 conversions per week
- If CPL is stable ($100-150 range)
- If you're spending <80% of daily budget (automation helps)

---

#### Device Performance Analysis
**Time:** 20 minutes

**Questions:**
1. Are mobile conversions lower than desktop?
2. Is mobile CPC higher or lower?
3. Do people browse on mobile but book on desktop later?

**Action Items:**
- [ ] If mobile conv. rate <50% of desktop: Decrease mobile bids by 20%
- [ ] If mobile performs well: Consider mobile-specific ad copy
- [ ] Add click-to-call button prominence on mobile landing pages

---

#### Audience Insights
**Time:** 30 minutes

**In GA4, analyze PPC traffic:**
1. Go to Reports → Life Cycle → Acquisition → Traffic Acquisition
2. Filter to google / cpc
3. Review:
   - Age ranges (are you reaching 25-35 target?)
   - Gender (are men responding as expected?)
   - Location (which cities converting best?)
   - Device (mobile vs desktop)

**Action Items:**
- [ ] If wrong demographic: Adjust ad copy tone
- [ ] If wrong cities: Reallocate budget between Ottawa/Hamilton/London
- [ ] If wrong age: Check if messaging appeals to your ICP

---

### Optimization Success Metrics (Weeks 3-4)
- [ ] Campaign CPA decreased by 10-20% vs Week 2
- [ ] Average CTR improved to 1.5-2%
- [ ] Quality Scores: 80% of keywords at QS 6+
- [ ] At least 2 ad variations tested per ad group
- [ ] 5-10 new high-performing keywords added
- [ ] Landing page improvements made based on heatmap data
- [ ] Total conversions: 15-25 for the month

**Time Investment Weeks 3-4:** 2-3 hours per week

---

## Phase 5: Scale Decision (End of Month 1)

### Analysis Framework

After 30 days (or 15-20 conversions minimum), conduct comprehensive review to determine: **Go, Adjust, or Stop**

---

### Metric 1: Cost Per Click vs. Benchmarks

**Your Results After Month 1:**
- Average CPC: $______ CAD

**Industry Benchmarks (Therapy, Ontario):**
| City | Expected CPC | Your CPC | Status |
|------|-------------|----------|--------|
| Ottawa | $3.50-6.00 | | ✅ / ⚠️ / ❌ |
| Hamilton | $3.00-5.00 | | ✅ / ⚠️ / ❌ |
| London | $2.80-5.50 | | ✅ / ⚠️ / ❌ |

**Interpretation:**
- ✅ **Good:** CPC at or below benchmark = You're competitive, Quality Score is working
- ⚠️ **Caution:** CPC 10-20% above benchmark = Acceptable, may improve over time
- ❌ **Concern:** CPC >30% above benchmark = Quality Score issues or keyword targeting problems

**Actions Based on CPC:**
- If GOOD: Maintain course, consider scaling budget
- If CAUTION: Optimize Quality Score (better ads, landing pages)
- If CONCERN: Pause expensive campaigns, revisit strategy

---

### Metric 2: Conversion Rate vs. Industry Standards

**Your Results After Month 1:**
- Total Clicks: ______
- Total Conversions: ______
- Conversion Rate: ______%

**Industry Benchmarks (Therapy Practices):**
- **Excellent:** 25-30% conversion rate
- **Good:** 15-25% conversion rate
- **Average:** 10-15% conversion rate
- **Poor:** <10% conversion rate

**What Counts as a Conversion:**
- Phone call clicks (phone_call event)
- Jane booking button clicks (booking_click event)
- Contact form submissions (if you added this)

**Interpretation:**
- ✅ **>15%:** Your offer and landing pages are working
- ⚠️ **10-15%:** Acceptable but has room for improvement
- ❌ **<10%:** Landing page or offer needs significant changes

**Actions Based on Conversion Rate:**
- If >15%: Scale budget, test new campaigns
- If 10-15%: Optimize landing pages (add social proof, simplify CTAs)
- If <10%: Major landing page overhaul needed before scaling

---

### Metric 3: Cost Per Acquisition vs. Lifetime Value

**Your Results After Month 1:**
- Total Cost: $______
- Total Conversions: ______
- **Cost Per Acquisition (CPA):** $______ per lead

**Your Economics:**
- Session price: $175
- Average sessions per client: 8 sessions (industry average)
- **Client Lifetime Value (CLV):** $175 × 8 = **$1,400**

**Break-Even Analysis:**
| CPA | % of CLV | Interpretation | Action |
|-----|----------|----------------|--------|
| $50-100 | 3-7% | Excellent, highly profitable | SCALE AGGRESSIVELY |
| $100-150 | 7-10% | Good, sustainable | Scale with confidence |
| $150-200 | 10-14% | Acceptable, watch margin | Scale cautiously |
| $200-300 | 14-21% | Break-even zone | Optimize before scaling |
| >$300 | >21% | Not profitable | PAUSE, fix issues |

**Your CPA vs. CLV:**
- CPA: $______
- CLV: $1,400
- **Ratio:** ____% of CLV
- **Status:** ✅ Profitable / ⚠️ Marginal / ❌ Unprofitable

**Actions Based on CPA:**
- If <$150: Immediately increase budget 50-100%
- If $150-200: Increase budget 25%, continue optimizing
- If $200-300: Hold budget flat, focus on conversion rate optimization
- If >$300: Pause campaigns, revisit entire strategy

---

### Metric 4: Quality Score Trends

**Check Average Quality Score:**
1. In Google Ads, add "Quality Score" column
2. Calculate average QS across all keywords
3. Review QS components:
   - Expected CTR
   - Ad Relevance
   - Landing Page Experience

**Benchmarks:**
- **Excellent:** Average QS 8-10 across 80%+ of keywords
- **Good:** Average QS 6-7 across 70%+ of keywords
- **Poor:** Average QS <5 across 50%+ of keywords

**Why Quality Score Matters:**
- QS 8-10: You pay 30-50% LESS per click than competitors
- QS 4-5: You pay 25-50% MORE per click
- QS 1-3: Ads may not show at all

**Actions:**
- If QS is improving month-over-month: Good sign, algorithms learning
- If QS is stagnant or declining: Urgent need to improve ad relevance and landing pages

---

### Metric 5: Search Impression Share

**What is Impression Share?**
- % of times your ad showed vs. total available impressions
- Example: 40% impression share = Your ad showed 4 out of 10 possible times

**Check Your Impression Share:**
1. Google Ads → Campaigns
2. Add columns:
   - Search Impression Share
   - Search Lost IS (budget)
   - Search Lost IS (rank)

**Benchmarks:**
- **50-70% Impression Share:** Healthy for new campaign
- **<30% Impression Share:** Missing most opportunities
- **>80% Impression Share:** Dominating, may be overbidding

**Lost Impression Share Reasons:**
- **Lost to Budget:** Need higher daily budget to show more
- **Lost to Rank:** Need higher bids or better Quality Score

**Actions:**
- If lost to budget >20%: Increase budget OR narrow targeting
- If lost to rank >20%: Increase bids OR improve QS
- If impression share >80%: Test lowering bids to capture more volume at lower cost

---

### Go/No-Go Decision Criteria

**✅ GO (Scale Budget):**
- [ ] CPA <$200 CAD
- [ ] Conversion rate >15%
- [ ] Average QS >6
- [ ] Month-over-month improvement in all metrics
- [ ] At least 15 conversions in Month 1 (statistical significance)
- [ ] Client quality is good (asked in intake if they found you via Google Ads)

**➡️ ADJUST (Continue Testing, Don't Scale Yet):**
- [ ] CPA $200-300 CAD
- [ ] Conversion rate 10-15%
- [ ] Average QS 5-6
- [ ] Some metrics improving, others flat
- [ ] 8-15 conversions (borderline statistical significance)
- [ ] Need more data to be confident

**❌ STOP (Pause Campaigns, Revisit Strategy):**
- [ ] CPA >$300 CAD
- [ ] Conversion rate <10%
- [ ] Average QS <5
- [ ] Metrics declining month-over-month
- [ ] <8 conversions (not enough data)
- [ ] Poor lead quality (wrong clients, not serious inquiries)

---

### Scale Strategy if GO Decision

**Month 2 Budget Increases:**

If Month 1 CPA was $100-150:
- **Increase budget 50%:** $2,000 → $3,000/month
- Allocate increase to best-performing campaign
- Expected: 400-450 clicks, 90-110 leads

If Month 1 CPA was $50-100:
- **Increase budget 100%:** $2,000 → $4,000/month
- Launch 2 additional campaigns (new services or cities)
- Expected: 650-750 clicks, 160-190 leads

**New Campaign Ideas for Month 2:**
1. **Men's Mental Health Ontario** (Tertiary ICP)
2. **University Student Therapy** (Secondary ICP)
3. **Branded Campaign** (target people searching "Next Step Therapy")
4. **Expand to Mississauga** (if Ottawa/Hamilton/London performing well)

---

### Adjust Strategy if ADJUST Decision

**Focus Areas:**

1. **Landing Page Overhaul:**
   - Add video of yourself (builds trust)
   - Simplify page (reduce from 4,000 words to 1,200 words for PPC)
   - Larger CTAs (phone button + Jane booking button)
   - Add "Available This Week" banner at top

2. **Ad Copy Testing:**
   - Test 3 completely different angles:
     - Angle 1: Credential-focused ("CRPO #10979")
     - Angle 2: Benefit-focused ("Get Help This Week")
     - Angle 3: Problem-focused ("Struggling with Performance Anxiety?")

3. **Keyword Refinement:**
   - Pause bottom 50% of keywords by performance
   - Double down on top 10 converting keywords
   - Add more negative keywords (target 150+ total)

4. **Geographic Reallocation:**
   - If Ottawa converting 2x better than London, shift $300 from London to Ottawa
   - Test adding one new city (Kitchener or Mississauga)

---

### Stop Strategy if STOP Decision

**Before Completely Stopping, Test These Fixes:**

**Week 1-2 After Pause:**
- Completely rewrite landing pages (800-1,200 words max)
- Add prominent "Book Free Consultation" hero CTA
- Test ONE campaign only (Performance Anxiety Ottawa, $300/month budget)

**Week 3-4:**
- If new landing page doesn't improve conversion rate to >15%, then:
  - ✅ Accept that PPC may not be right channel YET
  - ✅ Focus on SEO (where you're already seeing success)
  - ✅ Revisit PPC in 6 months when:
    - You have more social proof (testimonials for landing pages)
    - You've hired 2-3 therapists (can mention "team of therapists")
    - You have more content/authority (better landing pages naturally)

**Alternative Channel to Test Instead:**
- Facebook/Instagram ads (lower CPC, good for brand awareness)
- Psychology Today directory (lower cost, high-intent therapy seekers)
- Local SEO + Google Business Profile optimization (free, leverages your SEO strength)

---

## CONTINUES IN BUDGET & TEMPLATES FILE...

*Next file: GOOGLE_ADS_BUDGET_TEMPLATES_TOOLS.md*

