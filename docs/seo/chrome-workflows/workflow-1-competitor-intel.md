# Workflow 1: Weekly Competitor Intelligence

**Using Claude Chrome Extension + `seo-competitor-intelligence` skill**

## What This Workflow Does

Chrome extension visually analyzes competitor pages → Skill processes data → Output: "Beat the competition" brief

**Schedule:** Weekly (Monday 9am)
**Time saved:** ~4 hours/month

---

## Prerequisites

1. Claude Pro/Team/Enterprise subscription
2. Claude for Chrome installed: [Chrome Web Store](https://chromewebstore.google.com/detail/claude)
3. Google Sheet for logging (optional)

---

## The Workflow

### Step 1: Open Claude Chrome Extension

1. Open Chrome browser
2. Click Claude icon in toolbar (or use pinned extension)
3. Side panel opens

### Step 2: Give Claude the Task

**Say this to Claude in the side panel:**

```
Analyze competitors for "anxiety therapy ontario"

1. Search Google for "anxiety therapy ontario"
2. Open the top 5 organic results (skip ads and directories like Psychology Today)
3. For each competitor page, extract:
   - URL
   - Approximate word count
   - All H2 headings (list them)
   - Is there an FAQ section? (yes/no)
   - What schema markup is present? (check page source for schema.org)
   - Is there an author byline with credentials?
   - Is there a "last updated" date?
4. Compile into a comparison table
```

### Step 3: Claude Executes (Planning Mode Recommended)

**If using "Ask before acting" mode:**

Claude will show you a plan:
```
I'll help you analyze competitors for "anxiety therapy ontario". Here's my plan:

1. Open Google and search for "anxiety therapy ontario"
2. Identify the top 5 organic results (excluding ads/directories)
3. Open each result in a new tab and group them
4. For each page, I'll extract the requested data
5. Compile findings into a comparison table

Shall I proceed?
```

**You approve → Claude executes autonomously**

### Step 4: Claude Collects Data

Claude will:
- Search Google
- Open 5 competitor pages in tabs
- Read each page visually
- Check page source for schema
- Compile structured data

**Example output from Chrome extension:**

```
## Competitor Analysis: anxiety therapy ontario

### Competitor 1: ftpsych.ca/services/anxiety-therapy-services/
- Word count: ~3,500
- H2s: 6 headings (How Do I Know If I Need Help, Should I Get Therapy Online, What Happens During CBT, How Can I Find Therapy, Ready To Take First Step, FAQ)
- FAQ: Yes (5 questions)
- Schema: Organization, WebPage, Article, FAQPage
- Author: Greg McKinnon (no credentials shown)
- Last updated: October 2025

### Competitor 2: ocdontario.com
- Word count: ~2,800
- H2s: 10 headings (OCD, Anxiety Disorders, How We Help, Treatment in Vaughan, etc.)
- FAQ: No
- Schema: WebSite only
- Author: Not visible
- Last updated: Not visible

### Competitor 3: findinnercalm.ca/anxiety
- Word count: ~3,500-4,000
- H2s: 14 headings (Anxiety Therapy, Anxiety Types, General Anxiety, Social Anxiety, etc.)
- FAQ: No (link in nav only)
- Schema: Not detected
- Author: Dr. Jennifer Barbera, Psychologist
- Last updated: Not visible

[Competitors 4-5...]
```

### Step 5: Feed to Skill

**Copy Claude Chrome's output and bring it to Claude Code:**

```
Run seo-competitor-intelligence skill.

Here's competitor data collected via Claude Chrome extension:

[paste the competitor data]

Generate a "beat the competition" brief for NextStep Therapy.
Highlight our advantages: CRPO #10979, ACT specialization, same-week availability.
```

### Step 6: Skill Generates Brief

The `seo-competitor-intelligence` skill outputs:

```markdown
# Competitor Analysis: anxiety therapy ontario
Date: 2024-12-20

## Competitor Benchmarks

| Metric | Comp 1 | Comp 2 | Comp 3 | Average | Recommended |
|--------|--------|--------|--------|---------|-------------|
| Word Count | 3,500 | 2,800 | 3,750 | 3,350 | 3,500+ |
| H2 Sections | 6 | 10 | 14 | 10 | 12 |
| FAQs | 5 | 0 | 0 | 1.7 | 12 |
| Schema Types | 4 | 1 | 0 | 1.7 | 4 |
| Author Visible | Yes | No | Yes | 66% | Yes |
| Last Updated | Yes | No | No | 33% | Yes |

## E-E-A-T Gap Analysis

### What Competitors Have:
- Author credentials visible: 2/3 (but generic)
- FAQ sections: 1/3
- Multiple schema types: 1/3
- Last updated dates: 1/3

### NextStep Advantages:
✅ Specific CRPO license number (#10979) - more credible than "registered"
✅ ACT specialization - 0/3 competitors mention ACT
✅ Same-week availability - 0/3 mention wait times
✅ Evening/weekend appointments - 0/3 mention flexible hours
✅ Virtual-first across Ontario - broader than city-specific focus

## Content Gaps Identified

1. **ACT Therapy for Anxiety** (0/3 competitors cover)
   - Opportunity: 400+ word section on ACT approach
   - Why: Unique differentiator, evidence-based

2. **Same-Week Availability** (0/3 competitors mention)
   - Opportunity: Highlight in hero + dedicated section
   - Why: Major pain point for therapy seekers

3. **FAQ Section** (only 1/3 has comprehensive FAQ)
   - Opportunity: 12 questions with FAQPage schema
   - Why: Rich snippet potential, user trust

## Recommended Outline to Beat Competitors

**H1:** Anxiety Therapy Ontario | Same-Week Sessions | NextStep Therapy

**Hero Section (200 words)**
- Pain point hook
- CRPO #10979 credential
- Same-week availability CTA

**H2: Understanding Anxiety** (300 words)
[Core topic - all competitors cover]

**H2: Signs You May Benefit from Anxiety Therapy** (250 words)
[Expected content]

**H2: ACT Therapy for Anxiety - Our Approach** (400 words)
[GAP OPPORTUNITY - 0/3 competitors cover ACT]

**H2: What to Expect in Your First Session** (300 words)
[2/3 cover but shallow]

**H2: Online vs In-Person Therapy** (250 words)
[Expected]

**H2: Same-Week Appointments Available** (200 words)
[UNIQUE - no competitors mention]

**H2: FAQ Section** (600 words - 12 questions)
[Only 1/3 has FAQ, ours will be more comprehensive]

**Target Word Count:** 3,500 words
**Schema:** MedicalWebPage + FAQPage + LocalBusiness

## Action Items

1. [ ] Create/update anxiety-therapy-ontario.html with this outline
2. [ ] Add ACT section (unique angle)
3. [ ] Highlight same-week availability throughout
4. [ ] Add 12-question FAQ with FAQPage schema
5. [ ] Include CRPO #10979 in author byline
6. [ ] Set last updated date to current month
```

---

## Recording This Workflow

**Make it repeatable:**

1. Open Claude Chrome panel
2. Click **"Record Workflow"**
3. Perform the workflow manually (Steps 1-4 above)
4. Stop recording
5. Name it: **"Weekly Competitor Analysis - Anxiety Ontario"**
6. Schedule: **Monday 9:00 AM, Weekly**

**Now it runs automatically every week.**

---

## Google Sheet Logging (Optional)

Create sheet with columns:

| Date | Keyword | Comp 1 URL | Comp 1 Words | Comp 1 H2s | Comp 1 FAQ | Comp 1 Schema | ... | Gaps Found | Action Items |
|------|---------|------------|--------------|------------|------------|---------------|-----|------------|--------------|

---

## Target Keywords

Run this workflow for each priority keyword:

| Keyword | Priority | Frequency |
|---------|----------|-----------|
| anxiety therapy ontario | P0 | Weekly |
| virtual therapy ontario | P0 | Weekly |
| depression therapy ontario | P1 | Bi-weekly |
| online therapist ontario | P1 | Bi-weekly |
| cbt therapy toronto | P2 | Monthly |

---

## Troubleshooting

### Chrome extension not seeing pages
- Ensure pages fully load before Claude reads
- Use "wait 3 seconds" in recorded workflow

### Can't read schema from source
- Ask Claude to "view page source and search for schema.org"
- Or use Rich Results Test URL instead

### Competitors behind login/paywall
- Skip those competitors
- Note in log: "Behind paywall, skipped"

---

## Success Metrics

After 4 weeks:
- [ ] 4 weekly analyses completed
- [ ] Trends visible in tracking
- [ ] 1+ page updated based on insights
- [ ] Recorded workflow running on schedule
