---
name: seo-competitor-intelligence
description: Analyze top-ranking competitor pages to identify content gaps, schema opportunities, and E-E-A-T signals. Generate actionable briefs to beat the competition.
---

# SEO Competitor Intelligence Skill

## Purpose
Analyze top-ranking competitor pages to reverse-engineer their success and identify content gaps. Generate actionable "beat the competition" briefs for therapy/healthcare content targeting Ontario audiences.

## What This Skill Does

This skill performs deep competitive analysis on top-ranking pages to extract:

1. **Content Structure Analysis** - Headings, word count, readability, content flow
2. **Topic Cluster Mapping** - Semantic topics covered, depth of coverage, missing subtopics
3. **E-E-A-T Signal Detection** - Author credentials, citations, expert verification, freshness
4. **Schema Markup Audit** - What schema is used (or missing) for rich snippets
5. **Local SEO Signals** - Ontario-specific content, local schema, regional compliance
6. **Content Gap Identification** - What competitors miss that you can exploit
7. **Actionable Brief Generation** - Complete outline to beat the competition

## When to Use This Skill

- Before writing new blog posts or service pages
- When optimizing existing pages that rank on page 2-3
- For location page strategy (multiple cities)
- To understand why competitors rank and you don't
- To find "quick win" content gaps

## How to Invoke

```
Use the SEO Competitor Intelligence skill to analyze:
- Target keyword: [your keyword]
- Competitor URLs: [5 top-ranking URLs from Ahrefs]
- My unique differentiators: [CRPO #10979, ACT specialty, etc.]
```

## Step-by-Step Process

### Step 1: Scrape Competitor Pages
Use Firecrawl MCP to fetch all 5 competitor pages. Extract full HTML for analysis.

### Step 2: Structure Analysis
Run `scripts/analyze_structure.py` to extract:
- All H1-H6 headings
- Word count
- Readability grade (Flesch-Kincaid)
- Number of paragraphs, lists, tables
- Internal/external link count

**Output Format:**
```
Competitor 1: [URL]
- Word count: 2,847
- H2 count: 12
- H3 count: 24
- Readability: Grade 8
- Internal links: 18
- External links: 7
```

### Step 3: Schema Audit
Run `scripts/analyze_schema.py` to detect:
- All schema types present (MedicalWebPage, LocalBusiness, FAQ, Review, etc.)
- Format (JSON-LD preferred, microdata, RDFa)
- Completeness of schema properties

**Output Format:**
```
Schema Usage Summary:
- 4/5 use FAQ schema
- 2/5 use MedicalWebPage
- 0/5 use Review schema (OPPORTUNITY!)
- 3/5 use LocalBusiness
```

### Step 4: E-E-A-T Analysis
Run `scripts/analyze_eeat.py` to detect:
- Author bio presence and credentials
- Expert verification badges
- Citations to authoritative sources (CRPO, CMHA, research)
- Patient testimonials/reviews
- Last updated dates (freshness signals)
- Privacy policy links
- Contact information

**Output Format:**
```
E-E-A-T Comparison:
✅ 4/5 show therapist credentials
✅ 3/5 cite authoritative sources
❌ Only 1/5 has detailed author bio
❌ 2/5 show "last updated" dates
⚠️  3/5 have testimonials but no Review schema
```

### Step 5: Topic Cluster Extraction
Analyze semantic topics covered across all 5 competitors:

1. Extract all H2/H3 headings
2. Group by semantic similarity (topic clustering)
3. Identify "core" topics (covered by 4-5 competitors)
4. Identify "secondary" topics (covered by 2-3 competitors)
5. Find gaps (topics only 0-1 competitors cover)

Reference `references/seo_framework.md` for healthcare content topic patterns.

**Output Format:**
```
TOPIC CLUSTERS:

Core (covered by 5/5):
- Treatment approaches (CBT, ACT, etc.)
- Cost and insurance information
- Therapist qualifications
- Session structure

Secondary (covered by 3-4/5):
- Virtual vs in-person comparison
- Treatment timeline/success rates
- What to expect in first session

GAPS (covered by 0-1/5):
❌ Specific CRPO license number mention
❌ ACT vs CBT detailed comparison
❌ Patient success stories with specifics
❌ Ontario insurance coverage details (most are vague)
```

### Step 6: Local SEO Signal Detection
For therapy content targeting Ontario, check:
- Mentions of Ontario cities
- CRPO/provincial regulatory info
- OHIP coverage details
- Insurance specifics (Ontario providers)
- LocalBusiness schema with Ontario address
- GeoCoordinates for location

**Output Format:**
```
LOCAL SIGNALS:
- 5/5 mention "Ontario" in title
- 3/5 have specific city mentions
- 2/5 detail CRPO regulation
- 1/5 has LocalBusiness schema with address
- 0/5 have GeoCoordinates (OPPORTUNITY!)
```

### Step 7: Content Gap Summary
Synthesize all analysis to identify:

1. **Structural gaps** - Schema they're missing
2. **Content gaps** - Topics/questions they don't answer
3. **E-E-A-T gaps** - Trust signals they lack
4. **Local gaps** - Ontario-specific info missing

Prioritize by:
- **High impact** = Likely to improve rankings
- **Low effort** = Easy to implement
- **Unique** = Hard for competitors to replicate

### Step 8: Generate "Beat the Competition" Brief
Run `scripts/generate_brief.py` to output:

```markdown
## COMPETITIVE BRIEF: [Target Keyword]

### COMPETITOR BENCHMARKS
- Average word count: 2,847
- Average H2 count: 12
- Average H3 count: 24
- Readability: 8th grade
- Schema usage: [summary]

### YOUR ADVANTAGES
✓ [Unique differentiator 1]
✓ [Unique differentiator 2]
✓ [Unique differentiator 3]

### RECOMMENDED OUTLINE
H1: [Optimized title with year, power words, trust signals]

H2: [Topic 1 - must cover]
  H3: [Subtopic 1a]
  H3: [Subtopic 1b]

H2: [Topic 2 - competitor gap]
  H3: [Your unique angle]

[... full outline ...]

### SCHEMA TO ADD
✓ MedicalWebPage (only 2/5 use - advantage)
✓ FAQ (4/5 use - must have)
✓ Review (0/5 use - HUGE OPPORTUNITY)
✓ LocalBusiness with Ontario location

### INTERNAL LINKS TO ADD
→ [Related service page]
→ [Related blog post]
→ [Related location page]

### WORD COUNT TARGET
2,800-3,200 words (beats average without being excessive)

### UNIQUE VALUE ADDS
1. [Gap opportunity 1]
2. [Gap opportunity 2]
3. [Gap opportunity 3]

### EXPECTED IMPACT
Based on gaps identified, this content should:
- Rank higher due to: [schema advantages]
- Better user experience: [E-E-A-T signals]
- Capture featured snippets: [FAQ/Review schema]
- Local dominance: [Ontario-specific content]
```

## Important Notes

### For Healthcare/Therapy Content (YMYL):
- E-E-A-T signals are CRITICAL (Google prioritizes heavily)
- MedicalWebPage schema strongly recommended
- Author credentials must be visible
- Citations to authoritative sources required
- Privacy/security signals important

### For Ontario Local SEO:
- LocalBusiness schema with Ontario address
- CRPO license number (specific, not just "registered")
- Ontario insurance details (not generic)
- City-specific content (not template spam)

### Context Management:
This skill uses lazy-loaded context:
- Scripts only run when needed
- Reference files loaded only if relevant
- Prevents context overload and hallucination

## Output
The skill will provide a complete competitive brief that you can immediately use to:
1. Write new content that beats competitors
2. Optimize existing pages with gaps identified
3. Plan location page strategy
4. Prioritize schema markup additions
5. Improve E-E-A-T signals

## Example Invocation

```
Use the SEO Competitor Intelligence skill for:

Target keyword: "anxiety therapy ontario"

Competitor URLs:
1. https://example1.com/anxiety-therapy-ontario
2. https://example2.com/ontario-anxiety-treatment
3. https://example3.com/anxiety-counselling-ontario
4. https://example4.com/therapy-anxiety-ontario
5. https://example5.com/anxiety-therapy-ontario

My unique differentiators:
- CRPO #10979 (specific license number)
- ACT therapy specialization
- Virtual-first practice with same-week availability
- Evening and weekend appointments
- Insurance receipts provided
```

**Expected output:** Full competitive brief with actionable outline to beat all 5 competitors.
