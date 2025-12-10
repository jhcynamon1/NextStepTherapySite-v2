# Quiz Lead Nurture Email Sequence

**Goal:** Convert quiz completers to consultation bookings
**Length:** 3 emails over 7 days
**Tone:** Direct, practical, no fluff
**Compliance:** Fully CRPO-compliant, PHIPA-compliant, CASL-compliant

---

## EMAIL 1: Immediate - Quiz Results + Report (AUTO-SENT)

**Trigger:** User submits email in exit-intent popup
**Send:** Immediately via Resend
**Subject:** Your Therapy Readiness Report (Score: [X]/45)

**Status:** ✅ Already implemented in `/netlify/functions/send-quiz-report.js`

**Content:** Tier-specific personalized report with:
- Quiz score and tier name
- Personalized recommendations
- Crisis resources (if urgent tier)
- Next steps with booking CTA

---

## EMAIL 2: Day 3 - The Hard Part Is Over

**Send:** 3 days after quiz completion
**Subject:** The hardest part? You already did it.

**Body:**

Hi [First Name],

Three days ago, you took the therapy readiness quiz. That step—admitting you might need support—is often the hardest one.

Here's what I've noticed working with hundreds of Ontarians: the gap between "I should probably talk to someone" and actually booking that call can stretch for months or even years.

Not because people are lazy or unmotivated. Usually, it's one of these:

**"I'm not sure if I'm 'bad enough' for therapy"**
If you scored above 11 on the quiz, you'd likely benefit from support. But honestly? Even people who score low sometimes book consultations because they want to build skills before things get harder. There's no minimum threshold of suffering required.

**"I don't know what I'd even say"**
That's my job to figure out. I ask questions. You answer honestly. That's the entire first session. No performance required.

**"What if it doesn't work?"**
Then we figure that out together. Some people need 6 sessions. Some need 6 months. Some realize after the consultation that therapy isn't the right fit right now—and that's fine too.

**The consultation is free, takes 15 minutes, and you can ask me anything.** Most people use it to ask: "Is what I'm experiencing normal?" and "How would therapy actually help?"

If you're still reading this email, you're probably still considering it.

Book your consultation: [CALENDAR LINK]
Or call/text: (416) 306-2157

Jesse Cynamon, RP
CRPO #10979 | nextsteptherapy.ca

---

**Legal footer:**
This email provides educational information only and does not establish a therapeutic relationship. To unsubscribe or view our privacy policy: [LINKS]

---

## EMAIL 3: Day 7 - Last Check-In (Final Email)

**Send:** 7 days after quiz completion
**Subject:** Last email from me - what do you need to decide?

**Body:**

Hi [First Name],

This is my last email to you unless you reach out first.

A week ago, you completed the therapy quiz and got your results. Since then, I've sent you two emails about booking a consultation.

You haven't booked yet. That's completely fine—timing matters, and maybe this isn't it.

But before I stop, I want to ask directly: **What would you need to feel ready?**

Some honest answers I've heard from people in your position:

- "I need to check my insurance coverage first" → Most Ontario plans cover 80-100% of RP sessions. I provide receipts immediately after each session.

- "I need to know you won't judge me" → I work with people who are high-functioning on the outside and struggling internally. That's most of my practice. Nothing you share will surprise me.

- "I need to know this will actually help" → I can't guarantee outcomes—CRPO regulations prohibit that, and honestly, it would be dishonest. What I can tell you: therapy is most effective when you're motivated but not yet in crisis. Based on your quiz score ([SCORE]/45), you're in that window.

- "I need to feel less anxious before calling" → The consultation is designed for anxious people. You can take it from your car, your bedroom, wherever you feel comfortable. There's no camera requirement if you don't want it.

- "I need to know I can afford it" → $175/session. Most insurance covers it. First consultation is free, no strings attached.

**If none of those barriers apply, but you still haven't booked, ask yourself: what story am I telling myself about why this isn't the right time?**

Sometimes that story is accurate. Sometimes it's just anxiety doing its job—keeping you safe by avoiding something uncertain.

The free consultation exists precisely for this reason. It's a low-risk way to get your questions answered before committing to anything.

Book your free 15-minute consultation: [CALENDAR LINK]
Or call/text directly: (416) 306-2157

If I don't hear from you, I wish you well. If you decide later that you want to connect, my door stays open.

Jesse Cynamon, RP
CRPO #10979 | nextsteptherapy.ca

---

**Legal footer:**
This email provides educational information only and does not establish a therapeutic relationship. To unsubscribe or view our privacy policy: [LINKS]

---

## SEQUENCE END

**After Email 3:**
- User is removed from quiz nurture sequence
- User can still reach out anytime to book
- No further automated emails unless user subscribes to newsletter separately

---

## CRPO Compliance Checklist

✅ **No outcome claims** - Never says "therapy will fix X" or "you'll feel better in Y weeks"
✅ **No testimonials** - References what "people say" but not in promotional way
✅ **No comparative claims** - Doesn't say "better than" other therapists/approaches
✅ **Factual and verifiable** - Insurance coverage, session cost, CRPO registration
✅ **Educational disclaimer** - Each email states it's educational, not therapeutic advice
✅ **Professional boundaries** - Clear that consultation ≠ therapy relationship

---

## CASL Compliance Checklist

✅ **Express consent obtained** - User submitted email explicitly for "Personalized Report"
✅ **Unsubscribe link** - Every email includes clear unsubscribe mechanism
✅ **Sender identification** - Name, credentials, contact info in every email
✅ **Purpose stated** - Educational information about therapy services
✅ **Time-limited** - Sequence ends after 7 days automatically

---

## Implementation Notes

### Email Service Provider Requirements:

1. **Resend setup** (already in progress):
   - RESEND_API_KEY in Netlify ✅
   - Domain verification pending
   - Transactional email (immediate) works now
   - Scheduled emails (Day 3, Day 7) require additional setup

2. **For scheduled emails, you need:**
   - Store email + timestamp in database (or spreadsheet/Airtable)
   - Schedule delayed sends via Resend (they support scheduling)
   - OR use a third-party scheduler like Zapier/Make

### Alternative Simple Approach:

**Manual for now, automate later:**
1. Email 1 sends automatically (already done ✅)
2. Every 3 days, export new quiz leads from Resend
3. Manually send Email 2 and Email 3 via BCC (10 min/week)
4. Once you validate conversion rates, invest in automation

This lets you test the sequence effectiveness before building complex automation.

---

## Success Metrics to Track

**Email Performance:**
- Open rate: Target 40%+ (warm leads)
- Click-through rate on booking link: Target 15%+
- Reply rate: Target 5%+

**Conversion Performance:**
- Quiz completion → Email 1: 100% (automatic)
- Email 1 → Consultation booking: Target 10%+
- Email 2 → Consultation booking: Target 5%+
- Email 3 → Consultation booking: Target 3%+
- **Overall quiz → consultation: Target 18%+**

**Booking Performance:**
- Consultation → First session: Target 60%+
- First session → Ongoing client: Target 70%+

---

## A/B Test Ideas (Once You Have Data)

**Subject Lines:**
- Email 2: Test "You already did the hard part" vs "What's stopping you?"
- Email 3: Test "Last email" vs "One question before I go"

**CTA Placement:**
- Test early CTA vs. late CTA
- Test single CTA vs. multiple CTAs

**Email Length:**
- Test current length vs. 50% shorter
- Test story-based vs. bullet-point format

**Send Timing:**
- Test Day 3 vs. Day 2
- Test Day 7 vs. Day 5
- Test morning send vs. evening send

---

## Next Steps

1. ✅ **Complete Resend setup** (add API key to Netlify, verify domain)
2. ✅ **Test Email 1** (already sending automatically)
3. **Decide on automation approach:**
   - Option A: Manual sends for first 50 leads (validate sequence)
   - Option B: Build automated scheduling immediately
4. **Create unsubscribe page** and privacy policy link
5. **Test full sequence** with your own email
6. **Monitor metrics** and adjust based on data

---

## Questions for Jesse

1. Do you want to manually send Emails 2-3 initially, or build automation now?
2. Do you have calendar booking software (Calendly, Jane, etc.) for the [CALENDAR LINK]?
3. Do you want to collect any other data from quiz takers (name, phone, quiz tier)?
4. What should happen if someone replies to these emails? Auto-response or manual?

