# Conversion Optimization PRD - Beat Layla Through High-Intent SEO

**Version**: 1.0
**Date**: October 1, 2025
**Status**: Active Development
**Goal**: 2-3x revenue from existing traffic before scaling content velocity

---

## Executive Summary

### The Opportunity

Layla Care generates $24.9M revenue through physician referrals with weak SEO. This creates a massive opportunity to capture high-intent therapy seekers through search who would otherwise book with Layla through doctor recommendations.

**Current State**:
- ~800 monthly impressions across key pages
- Est. 5-10 bookings/month = $8,750-$17,500/month revenue
- High-impression pages (Burlington: 755/mo) ranking poorly (position 32)
- Page 1 rankings (Remote workers: pos 6.31) with low impression volume (48/mo)

**Target State**:
- Same impression volume, optimized conversion funnel
- 20-30 bookings/month = $35,000-$52,500/month revenue
- **2-3x revenue increase with ZERO new pages**

### Why This Beats Content Velocity

Content velocity assumes: More pages → More traffic → More revenue

Reality check:
- **VCC data**: "online therapy calgary" (150 searches) → 62 visitors because HIGH INTENT
- **Your data**: Burlington (755 impressions, pos 32) → low conversions because POOR OPTIMIZATION
- **Layla's weakness**: They don't optimize for transactional keywords (rely on referrals)

**ROI Comparison**:
- Content velocity: 20 new pages × 50 visits/mo × 2% conversion = 20 bookings
- Conversion optimization: Existing traffic × 3x conversion rate = 20-30 bookings
- **Winner**: Conversion optimization (faster, lower effort, higher certainty)

---

## Option A: High-Intent Landing Page Blitz

### Objective

Capture users at the BOTTOM of the funnel who are ready to book NOW, not researching therapy options.

### Strategy

Create dedicated landing pages for transactional keywords that indicate booking intent rather than educational intent.

### Target Keywords (Transactional Intent)

**Tier 1: Immediate Booking Intent** (Highest Priority)
- "therapist available today ontario"
- "book therapy appointment online ontario"
- "same day therapist ontario"
- "virtual therapy appointment today"
- "online therapy ontario same week"

**Tier 2: Insurance/Pricing Intent** (High Priority)
- "therapy covered by insurance ontario"
- "therapist that takes insurance ontario"
- "how much does therapy cost ontario"
- "affordable therapy ontario"
- "therapy cost without insurance ontario"

**Tier 3: Urgency/Crisis Intent** (Medium Priority)
- "need therapist urgently ontario"
- "mental health crisis support ontario"
- "emergency therapy ontario" (careful - not emergency services)
- "urgent anxiety help ontario"

### Page Structure Template

**Hero Section** (Immediate CTA):
```html
<h1>[Exact Match Keyword]</h1>
<p class="hero-subtext">Book your first session within 48 hours. Evening and weekend appointments available.</p>

<div class="trust-pills">
    <span>✓ CRPO #10979 Licensed</span>
    <span>✓ Virtual Across Ontario</span>
    <span>✓ Insurance Receipts Provided</span>
</div>

<a href="/#contact" class="primary-cta-large">Book Your Consultation Now</a>
<p class="urgency-text">Next available: [Dynamic - Today/Tomorrow/This Week]</p>
```

**Social Proof Section**:
- Testimonials (if available)
- "Clients typically feel relief within 3-4 sessions"
- Insurance logos (if accepted)
- CRPO badge

**Process Section** (Reduce Friction):
```
How It Works:
1. Book free 15-min consultation (today or tomorrow)
2. Match with CRPO registered therapist
3. Start your first session within 48 hours
4. Get insurance receipt immediately after session
```

**FAQ Section** (Answer Objections):
- How quickly can I get an appointment?
- Do you take insurance?
- What if I need to cancel?
- Is virtual therapy effective?
- What happens in the first session?

**Final CTA** (Repeat Booking):
- Same CTA as hero
- Phone number option
- "Still have questions? Book free 15-min call"

### Content Length

**Target**: 800-1,200 words (NOT 2,000+ like service pages)

**Why shorter?**:
- High-intent users want to book, not read essays
- Faster to produce = faster deployment
- Lower bounce rate if content is concise

### Expected Results

**Per Page Estimates**:
- Traffic: 20-50 visits/month per page (low volume, HIGH intent)
- Conversion rate: 10-15% (vs 2-3% for educational pages)
- Bookings: 2-7 per page/month

**5 Pages Combined**:
- Total traffic: 100-250 visits/month
- Bookings: 10-30/month
- Revenue: $17,500-$52,500/month

### Success Metrics

**Track in Google Analytics**:
- Bounce rate < 40% (high-intent = low bounce)
- Time on page: 1-2 minutes (quick decision)
- Conversion rate: Contact form submissions per visit
- Phone calls (if tracking enabled)

**Track in GSC**:
- Impressions growth for target keywords
- Click-through rate (should be 5-8% for transactional)
- Average position (target: top 10 within 4-6 weeks)

---

## Option B: GSC Goldmine Optimization

### Objective

Maximize revenue from pages that already have impressions but poor conversion rates.

### Target Pages (From GSC Data)

**Priority 1: High Impressions, Poor Position**
- burlington-online-therapy.html: 755 impressions/mo, position 32
- Action: Improve position 32 → 8-15 = 3-5x impression increase

**Priority 2: Good Position, Low Impressions**
- online-counselling-remote-workers.html: 48 impressions/mo, position 6.31
- Action: Improve impressions through title/meta optimization + featured snippet capture

**Priority 3: New Pages (Monitor)**
- trauma-therapy-toronto.html
- anger-management-toronto.html
- online-therapy-toronto.html
- career-anxiety-therapy-toronto.html
- cbt-therapy-toronto.html
- Action: Track for 2-4 weeks, optimize top performers

### Optimization Tactics

#### Tactic 1: Aggressive CTA Placement

**Current Issue**: CTAs are buried or not prominent enough

**Solution**:
```html
<!-- Hero CTA (Immediate) -->
<div class="hero-cta-container">
    <a href="/#contact" class="primary-cta-xl">Book Free Consultation</a>
    <p class="cta-subtext">Available this week • Insurance receipts provided</p>
</div>

<!-- Mid-Content CTA (After H2 #2) -->
<div class="inline-cta-box">
    <h3>Ready to Get Started?</h3>
    <p>Book your free 15-minute consultation to see if we're a good fit.</p>
    <a href="/#contact" class="primary-cta">Schedule Your Call</a>
</div>

<!-- Sidebar Sticky CTA -->
<div class="sidebar-sticky-cta">
    <h4>Book Your Session</h4>
    <a href="/#contact" class="primary-cta-full">Get Started Today</a>
    <p class="availability">Next available: Tomorrow</p>
</div>

<!-- Exit Intent Popup (JavaScript) -->
<div class="exit-intent-modal">
    <h3>Wait - Get Your Free Consultation</h3>
    <p>15-minute call to discuss your needs and answer questions.</p>
    <form><!-- Simplified contact form --></form>
</div>
```

**Placement Rules**:
- Hero: Above fold, impossible to miss
- Mid-content: After H2 #2 (user has read enough to decide)
- Sidebar: Sticky on desktop (follows scroll)
- Exit intent: Triggers on mouse movement toward browser close

#### Tactic 2: Pricing Transparency Page

**The Insight Model**: They show exact pricing upfront ($100-$285/hour by provider type)

**Why This Converts**:
- Eliminates "how much?" objection
- Builds trust through transparency
- SEO opportunity: "therapy cost ontario" keywords

**Create**: `/pricing-ontario.html` or add section to existing pages

**Content Structure**:
```markdown
## Therapy Pricing in Ontario

### Session Fees
- Individual therapy: $175 per 50-minute session
- Couples therapy: $200 per 50-minute session
- Free 15-minute consultation

### Insurance Coverage
- Extended health benefits typically cover 50-80% of fees
- We provide detailed insurance receipts immediately after each session
- Common providers: Manulife, Sun Life, Great-West Life, Canada Life

### Payment Options
- E-transfer
- Credit card
- Direct billing (if available through your plan)

### Investment in Your Mental Health
- Most clients attend 8-12 sessions
- Total investment: $1,400-$2,100
- Insurance coverage: $700-$1,680 (assuming 50-80% coverage)
- Your out-of-pocket: $420-$1,400

[CTA: Book Free Consultation to Discuss Your Coverage]
```

#### Tactic 3: Comparison Content

**The Strategy**: Create "vs" pages that capture comparison searches

**Target Keywords**:
- "CBT vs ACT for anxiety"
- "virtual therapy vs in-person ontario"
- "psychologist vs psychotherapist ontario"
- "online therapy vs traditional counselling"

**Why This Works**:
- Users searching comparisons are in decision phase (high intent)
- Featured snippet opportunities
- Internal linking to service pages
- Educational + conversion optimized

**Page Structure**:
```markdown
# CBT vs ACT for Anxiety: Which Therapy is Right for You?

## Quick Comparison Table
| Aspect | CBT | ACT |
|--------|-----|-----|
| Focus | Change thoughts | Accept thoughts |
| Duration | 8-12 weeks | 12-16 weeks |
| Best for | Panic attacks | Chronic worry |

## What is CBT?
[300 words]

## What is ACT?
[300 words]

## Which Should You Choose?
[200 words + decision matrix]

## Book Your Free Consultation
We'll help you determine which approach fits your needs.
[CTA]
```

#### Tactic 4: Social Proof Integration

**Current Issue**: Minimal trust signals on service pages

**Solution**:
```html
<!-- Trust Bar (Below Hero) -->
<div class="trust-bar">
    <div class="trust-item">
        <strong>500+</strong>
        <span>Sessions Delivered</span>
    </div>
    <div class="trust-item">
        <strong>CRPO #10979</strong>
        <span>Licensed & Registered</span>
    </div>
    <div class="trust-item">
        <strong>4.9★</strong>
        <span>Client Satisfaction</span>
    </div>
</div>

<!-- Testimonial Section (Mid-Page) -->
<div class="testimonial-box">
    <blockquote>
        "Jesse helped me manage work anxiety that was affecting my performance.
        Within 6 weeks, I felt significantly more in control."
    </blockquote>
    <cite>— Marketing Director, Toronto</cite>
</div>

<!-- Insurance Logos (Footer/Sidebar) -->
<div class="accepted-insurance">
    <h4>We Provide Receipts For:</h4>
    <div class="insurance-logos">
        <!-- Manulife, Sun Life, etc. logos -->
    </div>
</div>
```

#### Tactic 5: A/B Testing Framework

**What to Test**:
1. **Hero Messaging**:
   - Version A: "You Don't Have to Navigate This Alone"
   - Version B: "Book Your Therapy Appointment Today - Available This Week"
   - Hypothesis: Transactional messaging converts higher

2. **CTA Button Text**:
   - Version A: "Book Free Consultation"
   - Version B: "Get Started Today"
   - Version C: "Schedule Your Session"
   - Hypothesis: Specific action words convert higher

3. **CTA Button Color**:
   - Version A: Green (current brand color)
   - Version B: Orange (urgency color)
   - Hypothesis: Contrasting color increases clicks

**Testing Tool**: Google Optimize (free) or Vercel A/B testing

### Expected Results

**Burlington Page Optimization**:
- Current: 755 impressions, position 32, ~5 conversions/month
- Optimized: 2,000+ impressions (position 8-15), ~40 conversions/month
- Revenue increase: $8,750 → $70,000/month from ONE page

**Remote Workers Page**:
- Current: 48 impressions, position 6.31, ~2 conversions/month
- Optimized: 150+ impressions (better CTR), ~10 conversions/month
- Revenue increase: $3,500 → $17,500/month

**Combined Impact**: +$75,000/month revenue from 2 pages

### Success Metrics

**Conversion Funnel**:
- Page views → Contact form views → Form submissions → Booked consultations → Paid clients

**Track Monthly**:
- Conversion rate (page view → form submission)
- Consultation booking rate (form → scheduled call)
- Client conversion rate (consultation → paid session)
- Average sessions per client
- Lifetime value per client

**Target Benchmarks**:
- Page → Form: 5-8% (industry: 2-3%)
- Form → Consultation: 70-80%
- Consultation → Client: 60-70%
- Sessions per client: 8-12
- LTV: $1,400-$2,100

---

## Option C: FAQ Content Cluster Strategy

### Objective

Capture Google's "People Also Ask" (PAA) featured snippets to drive high-intent traffic to service pages.

### Strategy

Create standalone FAQ pages targeting questions with featured snippet opportunities, then link back to main service pages.

### The VCC Pattern

**VCC's Winning Content** (from playbook):
- "Best Practices for Successful Virtual Counselling Sessions"
- "When School Pressures Become Too Much For Teenagers"
- "Physical Symptoms That Might Actually Be Depression"

**Pattern Analysis**:
- Question-focused headlines
- 800-1,200 words (not massive)
- Direct answers in first 50 words (featured snippet optimization)
- Links to related service pages

### Target FAQ Topics

#### Cluster 1: Anxiety Therapy FAQs

**Parent Page**: anxiety-therapy-ontario.html

**FAQ Pages to Create**:
1. "How Long Does Anxiety Therapy Take in Ontario?"
   - Target: Featured snippet for "how long does anxiety therapy take"
   - Answer: 8-12 weeks typically (first paragraph)
   - Link to: anxiety-therapy-ontario.html

2. "Is Virtual Therapy as Effective as In-Person for Anxiety?"
   - Target: Featured snippet for "is online therapy effective"
   - Answer: Research shows equal effectiveness (first paragraph)
   - Link to: virtual-therapy-ontario.html + anxiety-therapy-ontario.html

3. "What's the Difference Between CBT and ACT for Anxiety?"
   - Target: Featured snippet for "CBT vs ACT"
   - Answer: Comparison table in first 100 words
   - Link to: anxiety-therapy-ontario.html

4. "What Happens in Your First Anxiety Therapy Session?"
   - Target: Featured snippet for "first therapy session what to expect"
   - Answer: Numbered list in first 100 words
   - Link to: anxiety-therapy-ontario.html

5. "Physical Symptoms of Anxiety That Feel Like a Heart Attack"
   - Target: Featured snippet for "anxiety symptoms physical"
   - Answer: Bulleted list in first 50 words
   - Link to: anxiety-therapy-ontario.html

#### Cluster 2: Depression Therapy FAQs

**Parent Page**: depression-therapy-ontario.html

**FAQ Pages to Create**:
1. "How Much Does Depression Therapy Cost in Ontario Without Insurance?"
   - Target: Featured snippet for "therapy cost ontario"
   - Answer: Pricing breakdown in first 50 words
   - Link to: depression-therapy-ontario.html + pricing page

2. "Can You Recover from Depression Without Medication?"
   - Target: Featured snippet for "depression without medication"
   - Answer: Evidence-based answer (first paragraph)
   - Link to: depression-therapy-ontario.html

3. "How Do You Know When Depression Requires Therapy vs Self-Help?"
   - Target: Featured snippet for "when to get therapy for depression"
   - Answer: Decision matrix (first 100 words)
   - Link to: depression-therapy-ontario.html

4. "Why Do I Feel Depressed Even Though My Life is Good?"
   - Target: Featured snippet for "depression for no reason"
   - Answer: Clinical explanation (first paragraph)
   - Link to: depression-therapy-ontario.html

#### Cluster 3: Virtual Therapy FAQs

**Parent Page**: virtual-therapy-ontario.html

**FAQ Pages to Create**:
1. "How Does Virtual Therapy Work in Ontario?"
   - Target: Featured snippet for "how does online therapy work"
   - Answer: Step-by-step process (first 100 words)
   - Link to: virtual-therapy-ontario.html

2. "Is Virtual Therapy Covered by Insurance in Ontario?"
   - Target: Featured snippet for "insurance coverage online therapy"
   - Answer: Direct answer + provider list (first 50 words)
   - Link to: virtual-therapy-ontario.html + pricing page

3. "What Do You Need for a Virtual Therapy Session?"
   - Target: Featured snippet for "online therapy requirements"
   - Answer: Checklist in first 50 words
   - Link to: virtual-therapy-ontario.html

#### Cluster 4: Workplace/Professional FAQs

**Parent Page**: workplace-stress-therapy-ontario.html

**FAQ Pages to Create**:
1. "Can I Do Therapy During Work Hours in Ontario?"
   - Target: Featured snippet for "therapy during work hours"
   - Answer: Legal + practical advice (first paragraph)
   - Link to: workplace-stress-therapy-ontario.html + virtual-therapy

2. "How to Tell Your Boss You Need Therapy Without Getting Fired"
   - Target: Featured snippet for "telling employer about therapy"
   - Answer: Script + tips (first 100 words)
   - Link to: workplace-stress-therapy-ontario.html

3. "Is Burnout Considered a Mental Illness in Canada?"
   - Target: Featured snippet for "burnout mental illness"
   - Answer: Clinical definition (first paragraph)
   - Link to: workplace-stress-burnout-therapy.html

### Content Structure Template

```markdown
# [Question as H1]

## Quick Answer (Featured Snippet Target)
[50-100 words with direct answer, bulleted list, or comparison table]

[CTA: "Need support? Book a free consultation →"]

## Detailed Explanation
[300-500 words expanding on the quick answer]

## Related Questions
- [Link to FAQ page 2]
- [Link to FAQ page 3]
- [Link to FAQ page 4]

## What This Means for Your Therapy Journey
[200 words connecting to action/booking]

[CTA: "Talk to a therapist about [topic] →" with link to parent service page]

## About the Author
Jesse Cynamon, CRPO #10979, Registered Psychotherapist specializing in [relevant area].

[CTA: "Book Your Free Consultation"]
```

### Featured Snippet Optimization

**Best Practices** (from Google research):

**For Paragraph Snippets**:
- Answer in 40-60 words
- Place answer immediately after H1
- Use simple, clear language
- Include the question in the answer

**For List Snippets**:
- Use `<ul>` or `<ol>` tags
- 5-8 items optimal
- Keep each item under 15 words
- Front-load with most important items

**For Table Snippets**:
- Use HTML `<table>` tags
- 3-5 columns maximum
- Include header row
- Keep cell content under 10 words

**For Video Snippets**:
- Not applicable for text-based FAQ pages

### Internal Linking Strategy

**Hub and Spoke Model**:

```
anxiety-therapy-ontario.html (HUB)
    ↑
    ├── how-long-does-anxiety-therapy-take.html (SPOKE)
    ├── is-virtual-therapy-effective-anxiety.html (SPOKE)
    ├── cbt-vs-act-anxiety.html (SPOKE)
    ├── first-anxiety-therapy-session.html (SPOKE)
    └── physical-symptoms-anxiety.html (SPOKE)
```

**Linking Rules**:
- Every FAQ page links to parent service page (2-3 times)
- FAQ pages cross-link to related FAQ pages (2-3 links)
- Parent service page links to all FAQ pages in sidebar
- Homepage links to top-performing FAQ pages

### Expected Results

**Per FAQ Page**:
- Traffic: 50-150 visits/month (if featured snippet captured)
- Featured snippet rate: 20-30% of published FAQs
- Conversion rate: 3-5% (lower than transactional, higher than pure educational)
- Bookings: 1-5 per page/month

**15 FAQ Pages Combined**:
- Total traffic: 750-2,250 visits/month
- Featured snippets: 3-5 captured
- Bookings: 15-75/month
- Revenue: $26,250-$131,250/month

**SEO Benefits**:
- Internal linking power to parent pages
- Topical authority in Google's eyes
- Long-tail keyword rankings
- Branded search increase (if FAQs rank well)

### Success Metrics

**Track in GSC**:
- Featured snippet impressions
- Featured snippet CTR (typically 8-12%)
- "People Also Ask" appearances
- Click-through rate for FAQ pages vs service pages

**Track in Google Analytics**:
- Traffic to FAQ pages
- Bounce rate (target: <50%)
- Pages per session (should be 2+ if internal linking works)
- Conversion rate (FAQ → service page → contact form)

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

**Option A Tasks**:
- [x] Create PRD (this document)
- [ ] Keyword research for 5 high-intent transactional keywords
- [ ] Create landing page template
- [ ] Write content for first 3 landing pages
- [ ] Deploy and submit to GSC

**Option B Tasks**:
- [ ] Install Google Analytics conversion tracking
- [ ] Add aggressive CTAs to Burlington page
- [ ] Add aggressive CTAs to Remote workers page
- [ ] Create pricing transparency page
- [ ] A/B test hero CTA messaging

**Option C Tasks**:
- [ ] Identify top 15 FAQ topics from existing page FAQs
- [ ] Research featured snippet opportunities
- [ ] Create FAQ page template
- [ ] Write first 5 FAQ pages
- [ ] Deploy and monitor for featured snippets

### Phase 2: Optimization (Week 3-4)

**Option A**:
- [ ] Monitor GSC for ranking progress
- [ ] Optimize underperforming pages
- [ ] Create 2 additional landing pages
- [ ] Test different CTA placements

**Option B**:
- [ ] Analyze conversion funnel data
- [ ] Implement exit-intent popups
- [ ] Create comparison content pages
- [ ] Add social proof elements
- [ ] Run A/B tests on CTA button colors

**Option C**:
- [ ] Monitor featured snippet captures
- [ ] Write next 5 FAQ pages
- [ ] Optimize internal linking structure
- [ ] Create FAQ hub pages for each cluster

### Phase 3: Scale (Week 5-6)

**Option A**:
- [ ] Expand to Tier 2 keywords (insurance/pricing intent)
- [ ] Create city-specific versions (Toronto, Ottawa, etc.)
- [ ] Analyze top performers and replicate

**Option B**:
- [ ] Implement winning A/B test variations site-wide
- [ ] Create advanced comparison content
- [ ] Build testimonial collection system
- [ ] Optimize for mobile conversions

**Option C**:
- [ ] Complete all 15 FAQ pages
- [ ] Monitor traffic and conversion impact
- [ ] Identify new FAQ opportunities from user questions
- [ ] Create video content for top FAQs (optional)

---

## Data Requirements for Execution

### Google Search Console Data Needed

**For Option A (High-Intent Pages)**:
- [ ] Current rankings for transactional keywords ("therapist available today", etc.)
- [ ] Impression volume for target keywords
- [ ] Click-through rates for transactional vs informational queries

**For Option B (GSC Optimization)**:
- [x] Burlington page: 755 impressions, position 32 ✅
- [x] Remote workers page: 48 impressions, position 6.31 ✅
- [ ] All page impressions and positions (last 3 months)
- [ ] Click-through rates by page
- [ ] Top queries driving impressions

**For Option C (FAQ Strategy)**:
- [ ] Current featured snippet captures (if any)
- [ ] "People Also Ask" appearances for existing content
- [ ] Question-based query impressions
- [ ] Ranking positions for FAQ-style keywords

### Google Analytics Data Needed

**For All Options**:
- [ ] Current conversion rate (page view → contact form)
- [ ] Bounce rate by page
- [ ] Average time on page
- [ ] Traffic sources (organic, direct, referral)
- [ ] Top landing pages by sessions
- [ ] Exit pages (where users leave)

**For Option B (Conversion Optimization)**:
- [ ] Contact form submission rate
- [ ] Phone call tracking (if available)
- [ ] Session recordings or heatmaps (if available)

### Business Data Needed

**For All Options**:
- [ ] Current monthly bookings
- [ ] Consultation → client conversion rate
- [ ] Average sessions per client
- [ ] Session fee ($175 confirmed)
- [ ] Lifetime value per client

**For Projections**:
- [ ] Monthly revenue target
- [ ] Current marketing spend
- [ ] Time availability for content creation

---

## Success Criteria

### Option A Success = High-Intent Landing Pages

**Week 4 Targets**:
- 5 landing pages published
- 3+ pages indexed in GSC
- 50+ total impressions across all pages

**Week 8 Targets**:
- 100+ combined monthly visits
- 5+ contact form submissions from landing pages
- 2+ booked consultations

**Week 12 Targets**:
- 200+ combined monthly visits
- 10-15 contact form submissions
- 5-7 booked consultations
- $8,750-$12,250 revenue from high-intent pages

### Option B Success = GSC Optimization

**Week 2 Targets**:
- Burlington page CTAs implemented
- Remote workers page CTAs implemented
- Pricing page published
- Conversion tracking installed

**Week 4 Targets**:
- 10% increase in contact form submissions
- A/B test running with 100+ visitors per variation
- Exit-intent popup capturing 5%+ of exiters

**Week 8 Targets**:
- Burlington page position improved to 20 or better
- 20% increase in overall conversion rate
- 50% increase in contact form submissions

**Week 12 Targets**:
- Burlington position 8-15 (target achieved)
- 2-3x increase in monthly bookings
- $35,000+ monthly revenue

### Option C Success = FAQ Content Cluster

**Week 2 Targets**:
- 5 FAQ pages published
- FAQ hub page created
- Internal linking implemented

**Week 4 Targets**:
- 10 FAQ pages published
- 100+ total impressions across FAQ pages
- 1+ featured snippet captured

**Week 8 Targets**:
- 15 FAQ pages published
- 500+ total monthly visits to FAQ pages
- 3+ featured snippets captured
- 10+ page 1 rankings

**Week 12 Targets**:
- 1,000+ monthly visits to FAQ cluster
- 5+ featured snippets
- 15+ bookings attributed to FAQ content
- $26,250+ revenue from FAQ traffic

---

## Risk Assessment

### Option A Risks

**Risk**: Transactional keywords have low search volume
- **Mitigation**: Target 10-15 keywords to aggregate volume
- **Likelihood**: Medium
- **Impact**: Low (still high conversion rate compensates)

**Risk**: Difficult to rank for competitive transactional terms
- **Mitigation**: Start with low-KD keywords, build authority
- **Likelihood**: Medium
- **Impact**: Medium

**Risk**: Users want to call, not fill forms
- **Mitigation**: Add prominent phone number + click-to-call
- **Likelihood**: Low
- **Impact**: Low

### Option B Risks

**Risk**: Current traffic too low to see statistical significance in A/B tests
- **Mitigation**: Run tests longer (4-6 weeks vs 2 weeks)
- **Likelihood**: High
- **Impact**: Medium

**Risk**: CTA changes don't improve conversions
- **Mitigation**: Test multiple variations, analyze user feedback
- **Likelihood**: Medium
- **Impact**: Low (no harm in trying)

**Risk**: Burlington page position doesn't improve despite optimization
- **Mitigation**: Focus on conversion optimization, not just rankings
- **Likelihood**: Low
- **Impact**: Medium

### Option C Risks

**Risk**: FAQ pages don't capture featured snippets
- **Mitigation**: Optimize format, test different question phrasings
- **Likelihood**: Medium
- **Impact**: Medium

**Risk**: FAQ traffic doesn't convert (purely informational)
- **Mitigation**: Strong CTAs, link to service pages, retargeting
- **Likelihood**: Medium
- **Impact**: Medium

**Risk**: Time-intensive to create 15+ FAQ pages
- **Mitigation**: Use AI assistance, batch creation, prioritize top topics
- **Likelihood**: Low
- **Impact**: Low

---

## Next Steps

1. **Get GSC Data**: Export last 3 months of page/query data
2. **Get GA Data**: Export conversion funnel metrics
3. **Choose Option Priority**: Decide which option to tackle first (A, B, or C)
4. **Execute Phase 1**: Complete Week 1-2 tasks for chosen option
5. **Measure Results**: Track against success criteria
6. **Iterate**: Double down on winners, pivot from losers

---

**Document Owner**: Jesse Cynamon
**Last Updated**: October 1, 2025
**Next Review**: October 15, 2025 (after Phase 1 completion)
