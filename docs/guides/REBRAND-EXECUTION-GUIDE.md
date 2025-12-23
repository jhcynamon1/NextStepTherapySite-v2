# Rebrand Execution Guide: Next Step Therapy

**Created:** December 22, 2025
**Context:** Trademark conflict with "Next Step Therapy Clinic Inc." (Application #2385915)
**Decision:** Strategic rebrand to avoid $25K-100K legal costs for a name rated 3/10 attachment

---

## Timeline Overview

You have **2+ years** before action is required. CIPO's examination backlog means the conflicting application won't be reviewed until late 2027 or 2028. Use this time strategically.

**Recommended approach:** Monitor quarterly, attempt negotiation if application progresses, rebrand only when forced.

---

## Phase 0: Evidence Preservation (Do This NOW - Regardless of Strategy)

Before any rebrand decision, document your prior use. This protects you legally whether you rebrand, negotiate, or fight.

### Evidence Checklist

- [ ] **First client documentation:** Invoice/receipt dated January 7, 2025
- [ ] **Website archive:** Capture nextsteptherapy.ca via [Wayback Machine](https://web.archive.org/)
- [ ] **Domain WHOIS:** Screenshot showing October 29, 2024 registration
- [ ] **Ontario business registration:** Certificate showing November 25, 2024 (BIN: 1001072925)
- [ ] **Google Business Profile:** Screenshots with review dates
- [ ] **Jane App records:** Export showing practice name and client history
- [ ] **Marketing materials:** Any social media posts, directory listings, business cards
- [ ] **Statutory declaration:** Written statement attesting to timeline (optional, ~$50 for notarization)

**Store these in:** `/docs/legal/trademark-evidence/`

---

## Phase 1: Monitoring (Now through 2027)

### Quarterly Check Protocol

1. Visit [CIPO Trademarks Database](https://ised-isde.canada.ca/cipo/trademark-search/srch)
2. Search: Application #2385915
3. Check status field
4. If status changes to "Advertised" → Move to Phase 2

### Status Meanings

| Status | What It Means | Your Action |
|--------|---------------|-------------|
| Formalized | In queue for examination | Wait |
| Examination | Being reviewed | Wait |
| Refused | Examiner rejected it | Celebrate - no action needed |
| Advertised | Published in Journal | 2-month clock starts - decide now |
| Registered | They got the trademark | Consider rebranding |

---

## Phase 2: Negotiation Attempt (If Application Progresses)

Before rebranding, try a $0 negotiation. You have leverage: documented prior use that could ground an opposition costing them $25K+.

### Coexistence Agreement Template

```
Subject: Re: Trademark Application #2385915 - Coexistence Proposal

Dear [Clinic Name],

I noticed your trademark application for "Next Step Therapy Clinic." I operate
"Next Step Therapy" as a virtual psychotherapy practice, registered in Ontario
since November 2024 with commercial use since January 2025.

Rather than pursue opposition proceedings (which would be costly for both parties),
I propose a simple coexistence agreement:

- You: In-person clinic services in Toronto
- Me: Virtual therapy services province-wide
- Mutual: Neither party opposes or sues the other

I believe our services are sufficiently distinct that confusion is unlikely in practice.

Would you be open to a brief call to discuss?

Best regards,
Jesse Cynamon, RP (CRPO #10979)
```

**If they agree:** Get it in writing. Consider $500-2,000 for a lawyer to formalize.
**If they ignore/refuse:** Move to Phase 3.

---

## Phase 3: Rebrand Execution

### Step 1: Name Selection (Week 1-2)

**Criteria for new name:**
- [ ] Not in CIPO trademark database (search [here](https://ised-isde.canada.ca/cipo/trademark-search/srch))
- [ ] .ca domain available
- [ ] Not generic/descriptive (avoid "Ontario Therapy," "Virtual Counselling")
- [ ] Passes the "phone test" (easy to spell when spoken)
- [ ] Not already used by another Ontario therapist (Google search)

**Naming directions to consider (from previous branding research):**
- Modern/Professional: "Session Collective," "Parallel Psychology," "Base Therapy Co."
- Functional/Clean: "Core Practice," "Main Psychology"
- Bold/Direct: "Straight Talk Therapy," "Real Work Therapy"

**Avoid (saturated patterns):**
- Nature metaphors: Willow, Bloom, Path, Tree, River
- Journey language: Step, Way, Forward, Ascend
- Wellness fluff: Balance, Harmony, Healing, Hope

### Step 2: Secure Assets (Week 2)

| Asset | Action | Cost |
|-------|--------|------|
| Domain | Register newname.ca via your registrar | $15-50/year |
| Ontario Business Name | Register via [Ontario Business Registry](https://www.ontario.ca/page/register-business-name-ontario) | $60 |
| Social handles | Claim @newname on Instagram, LinkedIn, etc. | Free |
| Optional: Trademark | File application via [CIPO](https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/trademarks) | $458 |

### Step 3: Technical Migration (Week 3)

#### 3.1 The Critical 301 Redirect

**What this does:** When someone visits nextsteptherapy.ca, they're automatically sent to newname.ca. Google transfers ~95% of your ranking power to the new domain.

**How to implement (Netlify):**

Create/edit `_redirects` file in your site root:

```
# Redirect all pages from old domain to new domain
https://nextsteptherapy.ca/* https://newname.ca/:splat 301!
```

Or in `netlify.toml`:

```toml
[[redirects]]
  from = "https://nextsteptherapy.ca/*"
  to = "https://newname.ca/:splat"
  status = 301
  force = true
```

**Important:** Keep nextsteptherapy.ca registered and redirecting for at least 1 year. This preserves SEO equity and catches anyone with old bookmarks.

#### 3.2 Google Business Profile Update

1. Log into [Google Business Profile](https://business.google.com/)
2. Click your business → Edit profile
3. Change business name to new name
4. Update website URL
5. **Do NOT create a new profile** - this keeps your 3 reviews and verification history

#### 3.3 Jane App Update

1. Log into Jane App admin
2. Settings → Clinic Settings → Clinic Name
3. Update to new name
4. Settings → Online Booking → Update booking page URL if needed
5. Download updated receipts/invoices template

#### 3.4 CRPO Update

1. Log into [CRPO Member Portal](https://www.crpo.ca/)
2. Update business/practice name in your profile
3. Fee: Likely $0-100 for administrative update
4. Your registration number (CRPO #10979) stays the same

### Step 4: Content Updates (Week 3-4)

#### Website Updates

Use find-and-replace across all HTML files:

```bash
# From project root
grep -rl "Next Step Therapy" --include="*.html" | xargs sed -i '' 's/Next Step Therapy/New Name/g'
grep -rl "nextsteptherapy" --include="*.html" | xargs sed -i '' 's/nextsteptherapy/newname/g'
```

**Manual review needed:**
- [ ] Homepage hero text
- [ ] About page
- [ ] Contact page
- [ ] Footer across all pages
- [ ] Meta titles and descriptions
- [ ] Schema markup (JSON-LD)
- [ ] Image alt text
- [ ] Email signatures in any embedded forms

#### Update External Listings

- [ ] Psychology Today profile
- [ ] Lumino Health / Sun Life directory
- [ ] Any other therapist directories
- [ ] LinkedIn company page
- [ ] Google Maps/GBP (done in 3.2)

### Step 5: Client Communication (Week 4)

#### Email Template

```
Subject: We Have a New Name!

Hi [First Name],

I wanted to let you know about an exciting update: Next Step Therapy is now
[New Name].

Same therapist, same care, same commitment to your wellbeing—just a fresh
name that better reflects where we're headed.

What's changing:
- Our website is now [newname.ca]
- Our email is now [jesse@newname.ca]

What's NOT changing:
- Your therapist (still me!)
- Your session time and format
- How you book appointments
- Your insurance receipts (still issued under my CRPO registration)

If you have any questions, just reply to this email.

Looking forward to continuing our work together.

Warmly,
Jesse Cynamon, RP (CRPO #10979)
```

### Step 6: Optional Courtesy Notice (Week 5)

After rebrand is complete, consider sending to the other clinic:

```
Subject: Next Step Therapy - Name Change Complete

Hello,

I previously operated "Next Step Therapy" as a virtual psychotherapy practice
in Ontario. To avoid any potential confusion with your clinic, I have rebranded
to [New Name] effective [date].

I wish you success with your practice.

Best regards,
Jesse Cynamon, RP
```

**Why do this:** Creates paper trail of good faith cooperation, closes the file.

---

## Cost Summary

| Item | Low Estimate | High Estimate |
|------|--------------|---------------|
| New domain (.ca) | $15 | $50 |
| Ontario business name | $60 | $60 |
| Logo refresh (optional) | $0 | $500 |
| Lawyer for coexistence agreement (if needed) | $0 | $2,000 |
| CRPO update fee | $0 | $100 |
| **Total** | **$75** | **$2,710** |

Compare to opposition costs: $25,000 - $100,000+

---

## SEO Preservation Checklist

The 301 redirect handles most SEO preservation automatically. Additional steps:

- [ ] Submit new sitemap to Google Search Console
- [ ] Add new domain as property in GSC
- [ ] Request indexing of key pages on new domain
- [ ] Update internal links to use new domain
- [ ] Monitor GSC for crawl errors for 30 days
- [ ] Keep old domain registered + redirecting for 12+ months

**Expected traffic impact:** 5-15% temporary dip, recovery within 2-4 weeks if 301s are properly configured.

---

## Decision Triggers

**Rebrand immediately if:**
- You receive a cease-and-desist letter
- The trademark is registered (status: "Registered")
- You want to eliminate uncertainty now

**Continue waiting if:**
- Application still "awaiting examination"
- No contact from the other party
- You're comfortable with the status quo

**Attempt negotiation if:**
- Application moves to "Advertised" status
- You receive contact from them first
- You want to explore keeping the name

---

## Files Referenced

- Evidence storage: `/docs/legal/trademark-evidence/`
- Previous branding research: `/docs/archive/strategies/BRANDING_RESEARCH_SUMMARY_HANDOFF.md`
- Competitor analysis: `/docs/seo/competitor-intel/SEO-COMPETITOR-INTELLIGENCE-DEC2025.md`

---

## Timeline Summary

| When | Action |
|------|--------|
| Now | Document evidence, store safely |
| Quarterly | Check CIPO database for status changes |
| If "Advertised" | Attempt negotiation within 2-month window |
| If negotiation fails | Execute rebrand (4-5 weeks) |
| If status stays "Awaiting" | Keep operating, reassess in 2027 |

---

*Last Updated: December 22, 2025*
