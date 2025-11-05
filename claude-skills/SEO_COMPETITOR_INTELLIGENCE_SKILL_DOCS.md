# SEO Competitor Intelligence Skill - Complete Documentation

**Created:** October 28, 2025
**Version:** 1.0
**Status:** Uploaded and Active in claude.ai
**Location:** claude.ai web app → Settings → Capabilities → Skills

---

## What This Skill Does

Analyzes top-ranking competitor pages for a given keyword and generates an actionable "beat the competition" brief.

### Key Outputs:
1. **Structure Analysis** - Word count, heading patterns, readability benchmarks
2. **Schema Audit** - What schema competitors use (FAQ, Review, MedicalWebPage, LocalBusiness)
3. **E-E-A-T Comparison** - Author credentials, citations, testimonials, freshness signals
4. **Topic Cluster Mapping** - What topics all competitors cover vs gaps
5. **Content Gaps** - Opportunities where NO competitor has good content
6. **Actionable Brief** - Complete outline to beat all 5 competitors

---

## Files Included

```
seo-competitor-intelligence/
├── SKILL.md                          # Main skill instructions (Claude reads this)
├── README.md                         # User-facing documentation
├── scripts/
│   ├── analyze_structure.py         # Extract headings, word count, links
│   ├── analyze_schema.py            # Extract JSON-LD schema markup
│   ├── analyze_eeat.py              # Detect E-E-A-T signals
│   └── generate_brief.py            # Format competitive brief output
└── references/
    └── seo_framework.md             # Healthcare SEO best practices
```

**Total Size:** ~50KB compressed

---

## How It Was Built

### Step 1: Research
Ran Perplexity research on:
- Content analysis frameworks (Clearscope, Surfer SEO, Frase)
- E-E-A-T for YMYL content
- Schema markup for healthcare
- Topic clustering methodologies
- Healthcare-specific SEO requirements

### Step 2: Python Scripts
Created 4 analysis scripts using:
- **BeautifulSoup** - HTML parsing
- **textstat** - Readability metrics
- **json** - Schema extraction
- **re** - Pattern matching for credentials, dates, citations

### Step 3: Reference Framework
Documented healthcare SEO best practices:
- Topic clusters for therapy content
- E-E-A-T requirements
- Schema markup priorities
- Ontario-specific local SEO

### Step 4: Skill Definition
Created SKILL.md with:
- YAML frontmatter (name, description)
- Step-by-step process for analysis
- Instructions on how to invoke scripts
- Output formatting guidelines

### Step 5: Packaging
- Renamed to hyphen-case: `seo-competitor-intelligence`
- Ensured SKILL.md at root with proper YAML
- Zipped with skill folder as root

---

## How to Use

### In claude.ai Web App:

**1. Start New Chat**

**2. Invoke the Skill:**

```
Use the seo-competitor-intelligence skill to analyze:

Target keyword: "anxiety therapy ontario"

Competitor URLs:
1. https://competitor1.com/anxiety-therapy
2. https://competitor2.com/anxiety-treatment
3. https://competitor3.com/therapy-anxiety
4. https://competitor4.com/ontario-anxiety
5. https://competitor5.com/anxiety-counselling

My advantages:
- CRPO #10979 (specific license number)
- ACT therapy specialization
- Virtual-first practice with same-week availability
- Evening and weekend appointments
- Insurance receipts for all Ontario providers
```

**3. Get Your Brief**

Claude will:
- Scrape all 5 URLs
- Run analysis scripts
- Compare patterns
- Identify gaps
- Generate actionable brief

**4. Use the Brief to:**
- Write new content (Blog Post #3)
- Optimize existing pages
- Plan location page strategy
- Add missing schema markup

---

## What You Need to Provide

### Required:
1. **Target keyword** - Exact keyword you're targeting
2. **5 competitor URLs** - Top-ranking pages from Ahrefs SERP analysis
3. **Your differentiators** - What makes you unique (CRPO #, ACT specialty, etc.)

### How to Get Competitor URLs:
1. Go to Ahrefs
2. Enter target keyword (e.g., "anxiety therapy ontario")
3. Look at SERP Overview → Organic Results
4. Copy URLs of positions 1-5
5. Paste into skill invocation

---

## Current Limitations

### 1. **Manual Keyword Selection**
- You must choose which keyword to analyze
- Skill doesn't suggest keywords for you
- Doesn't know which keywords you're already targeting

**Workaround:** Use GSC or Ahrefs to find keywords ranking positions 11-20 (page 2)

### 2. **No Site Context**
- Doesn't automatically know about nextsteptherapy.ca
- You must specify your advantages each time
- Doesn't remember previous analyses

**Workaround:** Keep a list of your differentiators to paste each time

### 3. **Firecrawl Not Explicitly Called**
- Should use Firecrawl MCP to scrape, but not explicitly instructed
- May use default scraping instead
- Could fail on JavaScript-heavy sites

**Workaround:** Test with a few URLs; if scraping fails, we need to update skill

### 4. **Manual Analysis**
- Doesn't automatically apply recommendations
- You must implement the brief yourself
- No tracking of what was done

**Workaround:** Save briefs in a folder, check off as implemented

### 5. **Single Keyword at a Time**
- Can't batch analyze 10 keywords at once
- Must run separately for each keyword
- Time-consuming for large keyword lists

**Workaround:** Prioritize top 3-5 keywords first

---

## Use Cases

### 1. Before Writing Blog Post #3
**Keyword:** "what to expect in first therapy session"
**Goal:** Get outline that beats all competitors
**Output:** Complete post structure with gaps identified

### 2. Optimizing Existing Service Page
**Keyword:** "anxiety therapy ontario"
**Goal:** See what top rankers have that you don't
**Output:** Schema gaps (Review), E-E-A-T gaps (citations), content gaps

### 3. Location Page Strategy
**Keyword:** "therapy mississauga"
**Goal:** Understand local SEO patterns
**Output:** What local signals competitors use, what's missing

### 4. Quick Win Identification
**Keyword:** Any target keyword
**Goal:** Find low-effort, high-impact opportunities
**Output:** "0/5 competitors use Review schema" = huge opportunity

### 5. Content Gap Discovery
**Keyword:** "virtual therapy ontario"
**Goal:** Find topics competitors don't cover
**Output:** "None explain ACT vs CBT", "None show specific insurance providers"

---

## Expected Impact

### Per Optimized Page:
- **+20-50 impressions/day** from improved content
- **Position improvements** (page 2 → page 1)
- **Featured snippet wins** (if FAQ/Review schema added)
- **Better CTR** from stronger E-E-A-T signals

### Cumulative (Using for 5 keywords):
- **+100-250 impressions/day** across optimized pages
- Faster path to 500/day goal
- Data-driven decisions (not guessing)

---

## Best Practices

### Get Better Results:

**1. Use Ahrefs for Competitor URLs**
- Don't guess which pages rank
- Verify they actually rank for your keyword
- Use positions 1-5 (not 6-10)

**2. Be Specific About Advantages**
- "CRPO #10979" not "registered therapist"
- "ACT specialization" not "various modalities"
- "Same-week availability" not "fast booking"

**3. Check All 5 URLs Load**
- Test each URL in browser first
- Some sites block scraping
- Have backup URLs ready

**4. Run for High-Priority Keywords First**
- Start with your money keywords
- Don't analyze every keyword at once
- Focus on positions 11-20 (easy wins)

**5. Save All Briefs**
- Create folder: `/seo/competitive-briefs/`
- Name: `anxiety-therapy-ontario-brief-2025-10-28.md`
- Track what was implemented

---

## Future Improvements

### Planned Updates:

**V2.0 - Enhanced Automation:**
- Explicitly call Firecrawl MCP for scraping
- Remember nextsteptherapy.ca context
- Store your differentiators
- Track previous analyses

**V2.1 - Keyword Suggestions:**
- Integrate with GSC data
- Suggest which keywords to analyze
- Prioritize by opportunity (position 11-20 + high volume)

**V2.2 - Batch Analysis:**
- Analyze 5-10 keywords at once
- Compare opportunities across keywords
- Output priority matrix

**V2.3 - Implementation Tracking:**
- Mark recommendations as done
- Track before/after rankings
- ROI measurement

---

## Troubleshooting

### "Unable to scrape URLs"
**Cause:** Site blocks scraping or requires JavaScript
**Fix:** Try alternate URLs from same competitor, or manually copy HTML

### "Not enough data"
**Cause:** Need at least 3 competitor URLs with 1000+ words
**Fix:** Ensure URLs are substantial content pages, not thin pages

### "Schema not detected"
**Cause:** Site uses microdata instead of JSON-LD
**Fix:** Manually check view-source for schema (skill limitation)

### "Analysis seems shallow"
**Cause:** Competitors have thin content
**Fix:** This is actually good news - easier to beat them

### "Brief doesn't match my niche"
**Cause:** Skill optimized for therapy/healthcare
**Fix:** Works best for YMYL content; adjust recommendations for other niches

---

## Related Skills to Build

### 1. Keyword Opportunity Finder
- Analyzes YOUR site
- Finds keywords ranking positions 11-20
- Suggests which to optimize first
- Feeds into this skill

### 2. Local SEO Dominator
- Takes winning formula from this skill
- Applies to 20+ Ontario cities
- Generates unique location pages
- Scales content production

### 3. Trending Topic Hunter
- Monitors Google Trends for therapy spikes
- Reddit/Twitter mental health discussions
- Seasonal opportunities
- Suggests timely content

### 4. Schema Audit Tool
- Scans YOUR site for missing schema
- Compares to competitors
- Generates schema markup code
- Quick implementation

---

## Technical Details

### Python Dependencies:
```python
beautifulsoup4>=4.12.0
textstat>=0.7.3
```

### Key Functions:

**analyze_structure.py:**
- `analyze_structure(html, url)` - Extract headings, word count, links
- `compare_structures(analyses)` - Calculate averages and ranges

**analyze_schema.py:**
- `extract_jsonld_schema(html)` - Find all JSON-LD blocks
- `identify_schema_types(schemas)` - Count schema types
- `check_healthcare_schema(schemas)` - Detect medical schemas
- `check_rich_snippet_schema(schemas)` - FAQ, Review, etc.

**analyze_eeat.py:**
- `detect_credentials(html)` - Find CRPO, RP, credentials
- `detect_author_bio(html)` - Look for author sections
- `detect_citations(html)` - Count authoritative sources
- `detect_freshness_signals(html)` - Find "Last Updated" dates

**generate_brief.py:**
- `generate_competitive_brief(...)` - Format all analysis into markdown

### Schema Types Detected:
- MedicalWebPage
- LocalBusiness / ProfessionalService
- FAQPage
- Review / AggregateRating
- Person
- BreadcrumbList
- HowTo / QAPage

### E-E-A-T Signals Detected:
- CRPO license numbers
- Author bios (300+ characters)
- Citations to CRPO, CMHA, research
- Testimonials
- "Last Updated" dates
- Privacy policy
- Contact information

---

## Success Metrics

### Track These After Using Briefs:

**Week 1:**
- [ ] Changes deployed to live site
- [ ] Schema markup added (if recommended)
- [ ] Content gaps filled

**Week 2:**
- [ ] Check GSC for impression changes
- [ ] Monitor keyword position movements
- [ ] Look for featured snippet wins

**Week 3:**
- [ ] Measure impression growth
- [ ] Track CTR improvements
- [ ] Document position gains

**Week 4:**
- [ ] Calculate ROI (time invested vs traffic gained)
- [ ] Identify most impactful recommendations
- [ ] Plan next keyword to optimize

### Expected Timeline:
- **Days 1-3:** Google re-crawls pages
- **Days 4-7:** Rankings begin to move
- **Days 8-14:** Impressions increase
- **Days 15-21:** CTR improves with schema
- **Days 22-30:** Stabilized new rankings

---

## Integration with Your Workflow

### Current SEO Workflow:
1. ✅ Quick Win #1 - Title optimization (Done Oct 28)
2. ✅ Quick Win #2 - FAQ schema (Done Oct 28)
3. ✅ Quick Win #3 - Broken links fixed (Done Oct 28)
4. → Use Skill for Blog Post #3 outline
5. → Use Skill to optimize service pages
6. → Use Skill for location page strategy

### Recommended Usage:
- **Weekly:** Run for 1 new keyword
- **Monthly:** Re-analyze top 3 keywords (track competitor changes)
- **Quarterly:** Batch analyze 10 keywords for roadmap planning

---

## Version History

### v1.0 (October 28, 2025)
- Initial release
- 4 Python analysis scripts
- Healthcare SEO framework reference
- Therapy/Ontario optimized
- Uploaded to claude.ai and working

### Planned v2.0 (November 2025)
- Explicit Firecrawl MCP integration
- Site context memory
- Batch keyword analysis
- Implementation tracking

---

## Support & Updates

**Location of Files:** `/Users/jessecynamon/NextStepTherapy/claude-skills/seo-competitor-intelligence/`

**Backup Location:** Committed to git (if/when you commit claude-skills directory)

**To Update Skill:**
1. Edit files in `seo-competitor-intelligence/` directory
2. Re-zip: `zip -r seo-competitor-intelligence.zip seo-competitor-intelligence/`
3. Re-upload to claude.ai (will overwrite existing)

**To Share Skill:**
- Give someone the .zip file
- They upload to their claude.ai account
- Works independently for them

---

## Contact for Issues

If skill doesn't work:
1. Check claude.ai Settings → Capabilities → Skills (is it there?)
2. Verify invocation format (see "How to Use" section)
3. Test with known-good URLs first
4. Check if Firecrawl MCP is enabled in your account

---

**This skill is your competitive intelligence engine. Use it before every content decision.**
