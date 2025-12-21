# Claude Skills Recommendations for NextStep Therapy
**Created:** December 9, 2024

## Executive Summary

After researching the Claude Skills ecosystem, I've identified both **existing skills to install** and **custom skills we should build** to optimize your therapy practice for SEO, client acquisition, front-end design, copywriting, CTR optimization, and competitor research.

**Key Findings:**
- ✅ 1 official skill ready to install (frontend-design)
- 🔨 6 custom skills recommended to build
- 📊 SEO automation opportunities using Claude Skills
- 🎯 Gaps in marketplace requiring custom development

---

## Part 1: Existing Skills to Install Now

### 1. Frontend Design Skill ⭐ PRIORITY

**What it does:** Creates distinctive, production-grade frontend interfaces with high design quality, avoiding generic AI aesthetics.

**Why you need it:**
- Improves conversion rates through better UI/UX
- Makes therapy pages more professional and trustworthy
- Automatically chooses distinctive fonts (avoiding generic Arial/Inter)
- Creates cohesive color themes with sharp accents
- Implements well-orchestrated page load animations

**Installation:**
```bash
npx claude-plugins install @anthropics/claude-code-plugins/frontend-design
```

**Use cases for NextStep Therapy:**
- Redesigning service pages with better visual hierarchy
- Creating high-converting CTA sections
- Improving mobile responsiveness
- Building trust signals into page design (E-E-A-T)

**Expected impact:** 15-25% improvement in page engagement and CTR

**Sources:**
- [Official frontend-design plugin](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design)
- [Improving frontend design through Skills blog](https://www.claude.com/blog/improving-frontend-design-through-skills)
- [Frontend design skill documentation](https://claude-plugins.dev/skills/@anthropics/claude-code/frontend-design)

---

## Part 2: Custom Skills to Build (Therapy Practice Specific)

### Skill 1: SEO Competitor Intelligence ⭐ HIGH PRIORITY

**Purpose:** Reverse-engineer top-ranking competitor pages to identify content gaps and create "beat the competition" briefs.

**What it does:**
1. Scrapes 5 competitor URLs for target keyword
2. Analyzes: content structure, word count, H2/H3 headings, schema markup
3. Detects E-E-A-T signals (author credentials, citations, freshness)
4. Identifies local SEO signals (Ontario-specific content, CRPO mentions)
5. Maps topic clusters (what competitors cover vs. miss)
6. Generates actionable brief with recommended outline and word count

**Triggers:**
- User mentions "competitor analysis"
- User provides competitor URLs
- User asks about ranking gaps or "why am I not ranking"

**Structure:**
```
seo-competitor-intelligence/
├── SKILL.md (main workflow)
├── scripts/
│   ├── scrape_competitors.py (web scraping)
│   ├── analyze_structure.py (content analysis)
│   ├── detect_schema.py (schema markup detection)
│   ├── analyze_eeat.py (E-E-A-T signal detection)
│   └── generate_brief.py (actionable brief creation)
└── templates/
    └── competitive_brief_template.md
```

**Expected impact:** Reduce competitive analysis time from 2 hours to 15 minutes

**References:**
- [Claude Skills for SEO workflow automation](https://aimaker.substack.com/p/what-are-claude-skills-ai-workflow-automation)
- [SEO audit with Claude](https://coconote.app/notes/162bfd5f-ae0a-4650-87e7-22c941e235ce)

---

### Skill 2: Meta Title & Description Optimizer ⭐ HIGH PRIORITY

**Purpose:** Generate and test meta titles/descriptions following NextStep's formula while maximizing CTR.

**What it does:**
1. Accepts page content + target keyword
2. Generates 5 title variations following formula: "Service + Location | Differentiator | NextStep Therapy"
3. Keeps under 60 characters
4. Avoids "CBT/ACT" unless keyword research supports
5. Tests against SERP simulator
6. Scores each variation for CTR potential
7. Generates matching meta descriptions (under 155 chars)

**Triggers:**
- User mentions "meta title" or "meta description"
- User asks to "optimize for CTR"
- User provides page URL for optimization

**Structure:**
```
meta-optimizer/
├── SKILL.md (workflow + formula)
├── scripts/
│   ├── generate_titles.py (title generation)
│   ├── serp_simulator.py (SERP preview)
│   └── ctr_scorer.py (CTR prediction)
└── data/
    ├── title_formula.yaml (NextStep formula)
    └── high_performing_titles.csv (examples)
```

**Expected impact:** 10-20% CTR improvement on optimized pages

---

### Skill 3: Therapy Page Content Generator (YMYL-Compliant) ⭐ HIGH PRIORITY

**Purpose:** Generate therapy page content that follows YMYL best practices and includes required E-E-A-T signals.

**What it does:**
1. Accepts: page type (anxiety, depression, location), target keyword, word count
2. Generates content with:
   - Author byline: "Jesse Cynamon, RP (CRPO #10979)"
   - "Last Updated: [Month Year]"
   - Citations to CRPO, CMHA, research
   - MedicalWebPage + FAQPage schema
   - FAQ section with 8-10 questions
   - Ontario-specific information
3. Follows H1 > H2 > H3 hierarchy
4. Includes 2-3 CTA boxes in strategic locations
5. Maintains 2000+ word count for competitive keywords

**Triggers:**
- User says "create new therapy page"
- User mentions specific city or condition
- User asks to "expand content" or "add word count"

**Structure:**
```
therapy-content-generator/
├── SKILL.md (workflow + E-E-A-T requirements)
├── templates/
│   ├── service_page_template.md
│   ├── location_page_template.md
│   └── student_page_template.md
├── data/
│   ├── ontario_cities.yaml
│   ├── therapy_conditions.yaml
│   └── faq_library.yaml
└── scripts/
    └── generate_schema.py (JSON-LD generation)
```

**Expected impact:** Reduce page creation time from 3 hours to 30 minutes while maintaining quality

---

### Skill 4: Keyword Research & Opportunity Finder 🔨 MEDIUM PRIORITY

**Purpose:** Identify high-value, low-competition keywords for therapy services in Ontario.

**What it does:**
1. Accepts: seed keyword, location (Ontario cities)
2. Generates keyword variations (anxiety therapy, counseling, treatment, etc.)
3. Estimates search volume + difficulty
4. Identifies "quick win" keywords (high volume, low competition)
5. Suggests internal linking opportunities
6. Maps keyword to page type (service, location, student)

**Triggers:**
- User asks "what keywords should I target"
- User mentions "keyword research" or "keyword opportunities"
- User provides Ahrefs data

**Structure:**
```
keyword-research/
├── SKILL.md (research workflow)
├── scripts/
│   ├── keyword_generator.py (variation generation)
│   ├── competition_analyzer.py (difficulty scoring)
│   └── opportunity_scorer.py (quick wins)
└── data/
    ├── ontario_therapy_keywords.csv
    └── current_rankings.csv
```

**Expected impact:** Identify 10-15 high-value keywords per month

**References:**
- [Claude for keyword research](https://www.airops.com/prompts/awesome-ai-seo-claude-prompts)
- [SEO data analysis with Claude](https://www.airops.com/prompts/data-analysis-ai-seo-claude-prompts)

---

### Skill 5: FAQ Schema Generator 🔨 MEDIUM PRIORITY

**Purpose:** Generate FAQ sections with proper FAQPage schema markup for therapy pages.

**What it does:**
1. Accepts: page topic, target audience
2. Generates 8-10 relevant FAQ questions
3. Writes concise answers (50-100 words each)
4. Includes Ontario-specific information where relevant
5. Generates JSON-LD FAQPage schema
6. Validates schema syntax

**Triggers:**
- User says "add FAQ section"
- User mentions "FAQPage schema"
- User asks to "improve rich snippets"

**Structure:**
```
faq-generator/
├── SKILL.md (FAQ best practices)
├── scripts/
│   ├── question_generator.py (FAQ creation)
│   ├── schema_generator.py (JSON-LD)
│   └── schema_validator.py (validation)
└── data/
    └── common_therapy_questions.yaml
```

**Expected impact:** Increase rich snippet appearance by 30-40%

---

### Skill 6: Conversion Copy Optimizer 🔨 LOWER PRIORITY

**Purpose:** Optimize CTA copy, hero sections, and button text for higher conversions.

**What it does:**
1. Analyzes existing CTA/hero copy
2. Identifies weak conversion language
3. Generates 5 alternative versions using proven frameworks:
   - PAS (Problem-Agitate-Solution)
   - AIDA (Attention-Interest-Desire-Action)
   - Before-After-Bridge
4. Scores each for conversion potential
5. Maintains therapy-appropriate tone (empathetic, not salesy)

**Triggers:**
- User mentions "CTA", "conversion rate", or "button text"
- User asks to "improve conversions"

**Structure:**
```
conversion-optimizer/
├── SKILL.md (copywriting frameworks)
├── scripts/
│   ├── copy_analyzer.py (weakness detection)
│   ├── variation_generator.py (alternatives)
│   └── conversion_scorer.py (scoring)
└── data/
    ├── high_converting_examples.csv
    └── therapy_tone_guidelines.yaml
```

**Expected impact:** 5-15% improvement in CTA click-through rates

---

## Part 3: Implementation Roadmap

### Phase 1: Immediate (This Week)
1. ✅ Install frontend-design skill
2. 🔨 Build **Meta Title & Description Optimizer** (highest ROI)
3. 🔨 Build **SEO Competitor Intelligence** skill

**Why these first:** These directly impact ranking and CTR, the two biggest levers for organic growth.

### Phase 2: Near-term (Next 2 Weeks)
4. 🔨 Build **Therapy Page Content Generator**
5. 🔨 Build **FAQ Schema Generator**

**Why:** Speed up content creation while maintaining YMYL compliance.

### Phase 3: Growth (Month 2+)
6. 🔨 Build **Keyword Research & Opportunity Finder**
7. 🔨 Build **Conversion Copy Optimizer**

**Why:** These optimize an existing funnel once you have traffic.

---

## Part 4: Skill Development Resources

### How to Build Custom Skills

1. **Create skill directory structure:**
```bash
mkdir -p .claude/skills/your-skill-name
cd .claude/skills/your-skill-name
touch SKILL.md
```

2. **Write SKILL.md with YAML frontmatter:**
```yaml
---
name: your-skill-name
description: What this skill does and when to use it (max 1024 chars)
---

# Your Skill Name

## Quick Start
[Step-by-step workflow]

## Examples
[Concrete examples]

## Scripts
[Reference bundled scripts]
```

3. **Add scripts/templates as needed:**
```bash
mkdir scripts templates data
```

4. **Test the skill:**
- Claude automatically discovers skills in `.claude/skills/`
- Trigger by mentioning skill description in conversation
- Debug by checking skill loads correctly

### Skill Development Best Practices

**From the documentation:**
- Use **progressive disclosure** - only load what's needed
- Keep SKILL.md under 5k tokens (main instructions)
- Put detailed reference in separate files
- Use scripts for deterministic operations
- Test thoroughly before deploying

**Resources:**
- [Agent Skills Overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Skills Cookbook (GitHub)](https://github.com/anthropics/claude-cookbooks/tree/main/skills)
- [Best Practices Guide](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)

---

## Part 5: Expected Cumulative Impact

### Traffic & Ranking Impact
| Skill | Metric | Expected Improvement |
|-------|--------|---------------------|
| SEO Competitor Intelligence | Keyword rankings | Move 5-10 pages from position 11-30 to page 1 |
| Meta Title Optimizer | CTR | +10-20% CTR on optimized pages |
| Therapy Content Generator | Indexable pages | +10-15 high-quality pages per month |
| FAQ Schema Generator | Rich snippets | +30-40% rich snippet appearance |

### Time Savings Impact
| Skill | Task | Time Saved Per Use |
|-------|------|-------------------|
| SEO Competitor Intelligence | Competitive analysis | 1.75 hours (2h → 15min) |
| Meta Title Optimizer | Title optimization | 0.75 hours (1h → 15min) |
| Therapy Content Generator | Page creation | 2.5 hours (3h → 30min) |
| FAQ Generator | FAQ section creation | 0.5 hours (45min → 15min) |

**Total monthly time savings:** 20-30 hours

### Client Acquisition Impact

Assuming conservative improvements:
- 10% CTR increase on top 10 pages
- 20% increase in qualified traffic from better rankings
- 5% improvement in conversion rate from better copy

**Estimated additional client inquiries per month:** 3-5

---

## Part 6: Marketplace Gaps & Opportunities

### What's NOT Available (Build Custom)
❌ SEO-specific skills (competitor analysis, keyword research)
❌ YMYL/medical content compliance skills
❌ Therapy-specific content generators
❌ Local SEO (Ontario) optimization skills
❌ Meta tag optimization skills
❌ CTR/conversion optimization skills

### What IS Available (Use Off-the-Shelf)
✅ Frontend design (official Anthropic skill)
✅ Document creation (PowerPoint, Excel, Word, PDF)
✅ General web development skills

**Opportunity:** NextStep Therapy can become a leader in therapy practice SEO by building and sharing these skills with other therapists.

---

## Part 7: Next Steps

### This Week
1. Install frontend-design skill
2. Use it to audit and improve CTA sections on top pages
3. Start building Meta Title Optimizer skill
4. Test on 5 pages with low CTR

### This Month
1. Complete SEO Competitor Intelligence skill
2. Run competitive analysis on top 3 keywords
3. Create content briefs for 3 new pages
4. Build Therapy Content Generator skill

### Ongoing
- Track performance of optimized pages
- Refine skills based on results
- Add new skills as needs emerge
- Document lessons learned

---

## Conclusion

The Claude Skills ecosystem offers significant opportunities for NextStep Therapy to automate SEO, content creation, and conversion optimization. While the marketplace lacks therapy/healthcare-specific skills, the custom skill development framework allows us to build exactly what we need.

**Recommended focus:** Build the 2-3 highest-impact skills first (Meta Title Optimizer, SEO Competitor Intelligence, Therapy Content Generator) rather than trying to build all 6 at once.

**Expected outcome:** 20-30 hours saved per month + measurable improvements in traffic, rankings, and client acquisition.

---

## References

### Claude Skills Documentation
- [Agent Skills Overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Agent Skills Cookbook](https://github.com/anthropics/claude-cookbooks/tree/main/skills)
- [Introducing Agent Skills](https://www.anthropic.com/news/skills)
- [How Skills Work (Engineering Blog)](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

### Marketplaces
- [SkillsMP](https://skillsmp.com/)
- [Claude Plugins Dev](https://claude-plugins.dev/)
- [Official Anthropic Skills Repository](https://github.com/anthropics/skills)
- [Claude Code Plugins Plus](https://github.com/jeremylongshore/claude-code-plugins-plus)

### SEO & Marketing Use Cases
- [Claude for SEO](https://www.pageoptimizer.pro/blog/claude-ai-for-seo)
- [Claude SEO workflow automation](https://aimaker.substack.com/p/what-are-claude-skills-ai-workflow-automation)
- [Claude competitor analysis prompts](https://www.airops.com/prompts/competitor-analysis-ai-seo-claude-prompts)
- [Claude vs ChatGPT for SEO](https://seranking.com/blog/claude-vs-chatgpt/)

### Frontend Design
- [Official frontend-design plugin](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design)
- [Improving frontend design through Skills](https://www.claude.com/blog/improving-frontend-design-through-skills)
- [Frontend design skill docs](https://claude-plugins.dev/skills/@anthropics/claude-code/frontend-design)
