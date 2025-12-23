# Landing Page Optimization Plan - December 2025

**Source Inspiration:** Jack Roberts' "Million Dollar Landing Pages" (filtered for therapy appropriateness)
**Approach:** Only implementing what genuinely helps, not forcing anything

---

## Executive Summary

After auditing the current site, **most of Jack's framework doesn't apply** - NextStep already has a strong conversion-focused homepage. However, 3-4 concepts would genuinely improve the user journey without compromising trust or CRPO compliance.

**Verdict:** Cherry-pick 4 improvements, skip the rest.

---

## What We're NOT Implementing (And Why)

| Concept | Why We're Skipping |
|---------|-------------------|
| Rebuild in Gemini 3 | Site is already well-built, would be regression |
| "5 clients in 30 days" hooks | CRPO violation - outcome promises |
| Alex Hormozi-style funnels | Too aggressive for vulnerable therapy clients |
| Multi-step qualifying questionnaire | Already have the quiz (better UX) |
| High-pressure urgency CTAs | Ethically wrong for mental health |
| Lead magnet popup | Feels predatory for therapy context |
| Exit-intent offers | Same - too sales-y |

---

## What We ARE Implementing

### 1. The "Skim Test" Audit (Priority: HIGH)

**Source concept:** "People don't read websites, they skim. They take the average of what you say, not the sum."

**Current issue:** Some sections have dense paragraphs that mobile users will skip entirely.

**Implementation:**
- [ ] Audit each homepage section for "skim-ability"
- [ ] Reduce paragraph length (max 2-3 sentences)
- [ ] Add more visual breaks (icons, spacing)
- [ ] Ensure each section has ONE clear takeaway
- [ ] Bold key phrases for scanners

**Sections to tighten:**
1. "Why This Approach Works" - currently text-heavy
2. "How We'll Work Together" - could be more visual
3. FAQ answers - some are long

**Estimated effort:** 2-3 hours
**Expected impact:** Better mobile engagement, lower bounce rate

---

### 2. Email Nurture for Form Submissions (Priority: HIGH)

**Source concept:** CRM integration with automated email sequence for leads who don't book immediately.

**Current gap:**
- Form submits → FormSubmit → Jesse's inbox
- No automated follow-up
- If Jesse is busy, lead goes cold

**Implementation:**
```
Current Flow:
Form Submit → Email to Jesse → Manual follow-up

Proposed Flow:
Form Submit → Email to Jesse + Trigger automation
                    ↓
              Instant confirmation email to client
                    ↓
              Day 2: "What to expect" email
                    ↓
              Day 5: "Still thinking about it?" (gentle)
                    ↓
              Day 10: Resource share (no pressure)
```

**Tool options:**
1. **Mailchimp** (free tier, simple automation)
2. **ConvertKit** (better for sequences)
3. **Janeapp's built-in** (if available - check)

**CRPO-compliant sequence (use email-welcome-sequence-therapy skill):**
- Email 1: Confirmation + what happens next
- Email 2: "What therapy is actually like" (education)
- Email 3: "Common concerns I hear" (FAQ-style)
- Email 4: Gentle check-in with booking link
- Email 5: Helpful resource, no ask

**Estimated effort:** 4-6 hours (setup + writing)
**Expected impact:** Recover 10-20% of leads who go cold

---

### 3. Vercel Analytics + Speed Insights (Priority: MEDIUM)

**Source concept:** Install Vercel analytics for real-time performance data.

**Current state:**
- GA4 is installed and tracking conversions
- No speed/performance monitoring
- No real-time visitor data

**Why add this:**
- GA4 is great for conversions but laggy for real-time
- Speed insights help identify slow pages
- Core Web Vitals affect SEO ranking

**Implementation:**
- [ ] Enable Vercel Analytics (if hosted on Vercel)
- [ ] Or install Lighthouse CI for automated audits
- [ ] Set up speed monitoring alerts

**Note:** Check if site is on Vercel or Netlify first. If Netlify, use Netlify Analytics instead.

**Estimated effort:** 1 hour
**Expected impact:** Better performance awareness, SEO boost

---

### 4. Quiz Email Capture (Optional) (Priority: LOW)

**Source concept:** Capture email at lead magnet stage for nurture.

**Current design decision:** Quiz explicitly says "no email required" - this builds trust.

**The tension:**
- Requiring email = more leads captured = more nurture opportunities
- Not requiring email = higher quiz completion = more trust

**Recommendation:** Keep as-is, but add OPTIONAL email at end:

```
Current:
Quiz complete → Results → Booking CTA

Proposed:
Quiz complete → Results → Booking CTA
                            ↓
              "Want these insights sent to your inbox?" (optional)
                            ↓
              [Email field] - clearly optional, no pressure
```

**Why optional works:**
- Maintains trust (not forced)
- Captures warm leads who WANT to hear from you
- Doesn't kill completion rate

**Estimated effort:** 2 hours
**Expected impact:** Capture 5-10% of quiz completers for nurture

---

## Implementation Priority

| # | Task | Effort | Impact | Do First? |
|---|------|--------|--------|-----------|
| 1 | Skim Test Audit | 2-3 hrs | High | Yes |
| 2 | Email Nurture Sequence | 4-6 hrs | High | Yes |
| 3 | Speed Analytics | 1 hr | Medium | Maybe |
| 4 | Optional Quiz Email | 2 hrs | Low | Later |

**Total effort:** ~10-12 hours for high-impact items

---

## What Success Looks Like

**Metrics to track:**
1. Form submission → booking conversion rate (currently unknown)
2. Quiz completion → booking conversion rate
3. Email open rates on nurture sequence
4. Page speed scores (Core Web Vitals)
5. Mobile bounce rate (should decrease with skim improvements)

---

## Skills to Use

| Task | Skill |
|------|-------|
| Tighten copy | `brand-voice-therapy` (verify it still sounds like Jesse) |
| Write email sequence | `email-welcome-sequence-therapy` |
| Optimize CTAs | `conversion-optimizer` (if needed) |

---

## NOT Doing (Explicitly)

These came up in Jack's video but are not appropriate:

1. **Complete redesign** - Current design is strong
2. **New hero section** - Current hook is excellent
3. **Multi-step funnel** - Quiz already serves this purpose
4. **CRM like Go High Level** - Overkill for solo practice
5. **Programmatic blog articles** - Already have blog structure, content should be intentional
6. **Lead magnet popup** - Too aggressive for therapy

---

## Next Steps

1. **Confirm hosting platform** (Netlify or Vercel?) for analytics choice
2. **Decide on email tool** (Mailchimp free tier likely sufficient)
3. **Run skim test audit** on homepage
4. **Draft 5-email welcome sequence** using skill
5. **Fix price inconsistency** ($160 vs $175)

---

*Plan created: December 2025*
*Review in: 30 days after implementation*
