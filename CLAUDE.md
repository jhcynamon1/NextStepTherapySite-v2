# NextStep Therapy - Comprehensive Project Guide

## About
- **Website:** nextsteptherapy.ca
- **Owner:** Jesse Cynamon, RP (CRPO #10979)
- **Location:** Ontario, Canada
- **Focus:** Virtual therapy practice, ACT specialization

## Unique Differentiators (Use in All Content)
- **CRPO #10979** - Specific license number (not just "registered")
- **ACT therapy specialization** - Acceptance and Commitment Therapy
- **Virtual-first practice** with same-week availability
- **Evening and weekend appointments**
- **Insurance receipts** provided for all Ontario insurance providers

---

## CRITICAL: Design System Reference (READ FIRST)

**BEFORE creating or editing ANY page, you MUST read the Gemini Design System document:**

**[/docs/GEMINI-DESIGN-SYSTEM.md](docs/GEMINI-DESIGN-SYSTEM.md)**

This document contains:
- Complete Tailwind CSS configuration with custom colors
- Fixed header component (exact code to copy)
- 2-column hero layout patterns
- Section styling patterns
- CTA components
- Footer component
- Schema markup requirements
- GA4 tracking setup
- Internal linking strategy
- Complete page template

**Why this matters:**
- All pages MUST use the Gemini design system for consistency
- The old v4-design-system.css is deprecated for new pages
- Using incorrect patterns will create visual inconsistencies
- The design doc has copy-paste code blocks for every component

**Quick Reference:**
```
Technology: Tailwind CSS (CDN) + custom config
Colors: navy (#1e3a4f), sage (#4a7c59), cream (#f8f6f2), sand (#e5e0d8)
Fonts: Playfair Display (headings), Inter (body)
Icons: Lucide Icons (CDN)
Header: Fixed position, white/95 backdrop blur
Hero: 2-column layout with feature cards grid
```

---

## CRITICAL: Page Requirements Checklist (NEW PAGES)

**Every new therapy page MUST include these elements for AI citation optimization, SEO, and voice consistency:**

### 1. AI Citation Statistics Section (REQUIRED)

Add immediately after the hero section. This is what makes pages citable by ChatGPT/Perplexity.

**Anxiety Pages - Use these stats:**
```html
<!-- Anxiety Statistics Section - AI Citation Optimized -->
<section class="py-16 px-6 bg-sage/5">
    <div class="max-w-4xl mx-auto">
        <h2 class="font-display text-3xl font-semibold text-navy text-center mb-4">Anxiety in Ontario: The Numbers</h2>
        <p class="text-center text-gray-600 mb-10">Anxiety isn't a personal failing—it's one of the most common mental health challenges Canadians face.</p>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-sand/30">
                <h3 class="text-2xl font-bold text-sage mb-2">5 Million</h3>
                <p class="text-navy/80">Canadians report symptoms of anxiety disorders annually. <em class="text-navy/60">(Source: CAMH)</em></p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-sand/30">
                <h3 class="text-2xl font-bold text-sage mb-2">60-80%</h3>
                <p class="text-navy/80">Improvement rate with evidence-based therapies like ACT and CBT. <em class="text-navy/60">(Source: APA)</em></p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-sand/30">
                <h3 class="text-2xl font-bold text-sage mb-2">Only 50%</h3>
                <p class="text-navy/80">Of Canadians with anxiety seek professional help. <em class="text-navy/60">(Source: CMHA)</em></p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-sand/30">
                <h3 class="text-2xl font-bold text-sage mb-2">$51 Billion</h3>
                <p class="text-navy/80">Annual cost to Canadian economy from mental health conditions. <em class="text-navy/60">(Source: MHCC)</em></p>
            </div>
        </div>
    </div>
</section>
```

**Depression Pages - Use these stats:**
```html
<!-- Depression Statistics Section - AI Citation Optimized -->
<section class="py-16 px-6 bg-sage/5">
    <div class="max-w-4xl mx-auto">
        <h2 class="font-display text-3xl font-semibold text-navy text-center mb-4">Depression in Ontario: The Numbers</h2>
        <p class="text-center text-gray-600 mb-10">Depression isn't weakness—it's one of the most common mental health conditions in the world.</p>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-sand/30">
                <h3 class="text-2xl font-bold text-sage mb-2">1 in 8</h3>
                <p class="text-navy/80">Canadians will experience major depression at some point. <em class="text-navy/60">(Source: CMHA)</em></p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-sand/30">
                <h3 class="text-2xl font-bold text-sage mb-2">70%</h3>
                <p class="text-navy/80">Respond positively to evidence-based treatments like ACT and CBT. <em class="text-navy/60">(Source: APA)</em></p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-sand/30">
                <h3 class="text-2xl font-bold text-sage mb-2">Only 40%</h3>
                <p class="text-navy/80">Of Canadians with depression receive adequate treatment. <em class="text-navy/60">(Source: CMHA)</em></p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-sand/30">
                <h3 class="text-2xl font-bold text-sage mb-2">#1 Cause</h3>
                <p class="text-navy/80">Depression is the leading cause of disability worldwide. <em class="text-navy/60">(Source: WHO)</em></p>
            </div>
        </div>
    </div>
</section>
```

### 2. Voice Pattern (REQUIRED)

Use Jesse's "I Don't Know If This Is You, But..." opening pattern:

```html
<h2 class="section-title">I Don't Know If This Is You, But...</h2>
<p>Maybe you're still getting things done. Still showing up. But it feels like moving through thick air...</p>
```

**Voice DNA markers to include:**
- Start with disclaimer ("I don't know if...")
- Use check-ins ("right?", "Does that make sense?")
- Signature phrases: "WITH the client, not ahead"
- Process over outcomes
- Vulnerable but not apologetic

### 3. Schema Markup (REQUIRED)

Every therapy page MUST include:
- **MedicalWebPage** schema (required for YMYL content)
- **FAQPage** schema (10-12 questions)
- **LocalBusiness** schema (include CRPO #10979)

### 4. E-E-A-T Signals (REQUIRED)

- Author byline: "Jesse Cynamon, RP (CRPO #10979)"
- "Last Updated: [Month Year]"
- Citations to CRPO, CMHA, APA, MHCC
- Contact information visible

### 5. SEO Checklist

- [ ] H1 includes primary keyword + city/location
- [ ] Meta title under 60 chars: `Service + Location | Differentiator | NextStep Therapy`
- [ ] FAQPage schema with 10-12 questions
- [ ] Statistics section with citable sources
- [ ] Internal links to related pages
- [ ] 2000+ words for competitive keywords

### 6. GA4 Conversion Tracking (REQUIRED)

**Every page MUST include the GA4 + Conversion Tracking block.** This tracks which pages lead to booking clicks.

Add this in the `<head>` section after favicon links:

```html
<!-- Google Analytics 4 + Conversion Tracking -->
<link rel="preconnect" href="https://www.googletagmanager.com">
<script>
    window.addEventListener('load', function() {
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-J8H4YBGSHR';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-J8H4YBGSHR', {
            'allow_enhanced_conversions': true,
            'send_page_view': true
        });

        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', function() {
                gtag('event', 'phone_call', {
                    'event_category': 'conversion',
                    'value': 175,
                    'currency': 'CAD'
                });
            });
        });

        document.querySelectorAll('a[href*="janeapp.com"]').forEach(link => {
            link.addEventListener('click', function() {
                gtag('event', 'booking_click', {
                    'event_category': 'conversion',
                    'event_label': 'jane_app_booking',
                    'value': 175,
                    'currency': 'CAD'
                });
            });
        });
    });
</script>
```

**What this tracks:**
- `booking_click` - When someone clicks a Jane booking link (tracks which page they clicked from)
- `phone_call` - When someone clicks a phone number link
- Page views with enhanced conversions enabled

**How to view in GA4:**
1. Go to **Reports → Engagement → Events**
2. Click on `booking_click`
3. Add secondary dimension: **Page path**
4. See which pages drive the most booking clicks

---

## Project Structure

### Key Folders
- `/css/` - Stylesheets (primary: v4-design-system.css)
- `/js/` - JavaScript files
- `/images/` - All image assets
- `/blog/` - Blog posts
- `/students/` - University student-focused pages
- `/virtual/` - Virtual therapy service pages
- `/professionals/` - Professional/workplace stress pages
- `/data/` - CSV/JSON data files
- `/docs/` - Documentation and guides
  - `/docs/seo/` - Current SEO work
  - `/docs/guides/` - Implementation guides
  - `/docs/checklists/` - QA checklists
  - `/docs/archive/` - Historical docs (old audits, strategies, reports)
- `/scripts/` - Utility scripts
- `/templates/` - Page templates
- `/z-archive/` - Old experiments and exports (can be deleted if needed)

### Data Files
- `/data/client_source_tracking.csv` - Client acquisition tracking
- `/data/keyword-research-list-dec2024.md` - Current keyword research

---

## Data Requests (IMPORTANT)

**Always request data from the user when working on SEO tasks.** The user can provide:

### Ahrefs Data
- Keyword Explorer exports (search volume, difficulty)
- Organic keywords reports for competitors
- Content gap analysis
- Backlink data

### Google Search Console (GSC) Data
- Queries report (clicks, impressions, CTR, position)
- Pages report (performance by URL)
- Indexing status

### Other Data
- Google Analytics (traffic, conversions, bounce rate)
- Heatmaps (Hotjar, CrazyEgg) if available
- Historical performance reports

**How to request:**
```
To provide the best recommendations, I need some data:

1. Can you export the Ahrefs Keyword Explorer data for [keyword]?
2. Can you share GSC data for the last 3 months showing:
   - Queries with clicks, impressions, CTR, avg position?
   - Pages performance?
3. Do you have competitor URLs to analyze?
```

---

## Current Workflows

### SEO Optimization

#### Meta Title Formula
```
Service + Location | Differentiator | NextStep Therapy
```
- Keep under 60 characters
- Keyword first
- Avoid "CBT" or "ACT" in titles unless keyword research explicitly supports it
- Examples:
  - "Anxiety Therapy Ontario | Same-Week Virtual Sessions | NextStep Therapy"
  - "University Anxiety Support | CRPO Registered Therapist | NextStep"

#### Schema Markup Requirements
Always include on therapy pages:
1. **MedicalWebPage** schema (required for YMYL content)
2. **FAQPage** schema (for FAQ sections)
3. **LocalBusiness** schema (include CRPO #10979, Ontario address)

#### E-E-A-T Signals (Critical for YMYL)
Every page must include:
- Author byline: "Jesse Cynamon, RP (CRPO #10979)"
- "Last Updated: [Month Year]"
- Citations to authoritative sources (CRPO, CMHA, research)
- Contact information
- Privacy policy link

### Front-End Development

#### CSS System
- **Primary stylesheet:** `/css/v4-design-system.css`
- **Color palette:**
  - Navy: `#1a2332` (primary brand color)
  - White: `#ffffff`
  - Accent colors defined in v4-design-system.css

#### CTA Buttons
- Use `.btn .btn-primary` classes
- Style: White text on navy background
- Always test on mobile after changes

#### Responsive Design
- Mobile-first approach
- Test all changes on mobile viewports
- Check spacing, button visibility, and readability

### Creating New Pages

#### Standard Page Structure
1. **Hero section** - H1, brief intro, CTA
2. **Main content sections** - H2/H3 hierarchy
3. **FAQ section** - Structured with schema
4. **CTA boxes** - Throughout page (use v4 design system)
5. **Author byline and last updated date**

#### Copy from Similar Pages
- For city pages: Copy structure from existing city pages (e.g., anxiety-therapy-burlington.html)
- For student pages: Use students/ folder templates
- For service pages: Copy from virtual/ folder templates

#### Post-Creation Checklist
- [ ] Add MedicalWebPage and FAQPage schema
- [ ] Include author byline with CRPO #10979
- [ ] Add "Last Updated" date
- [ ] Verify CTA buttons are visible (white on navy)
- [ ] Test mobile layout
- [ ] Add to sitemap.xml
- [ ] Submit to Google Search Console

### Content Guidelines

#### Author Attribution
```html
<p class="author-byline">Jesse Cynamon, RP (CRPO #10979)</p>
<p class="last-updated">Last Updated: December 2024</p>
```

#### Citing Authoritative Sources
Always cite:
- CRPO (College of Registered Psychotherapists of Ontario)
- CMHA (Canadian Mental Health Association)
- Peer-reviewed research (when applicable)
- Government health resources (Ontario, Canada)

#### Ontario-Specific Content
- Mention specific Ontario cities
- Reference OHIP coverage (or lack thereof for therapy)
- List Ontario insurance providers that cover therapy
- Include CRPO regulatory information

---

## Common Tasks & How to Execute

### "Analyze Google Search Console Data"
1. Export performance data from GSC
2. Review clicks, impressions, CTR by page/query
3. Identify pages on page 2-3 (positions 11-30) for optimization
4. Look for high-impression, low-CTR queries (title optimization opportunity)

### "Optimize Meta Titles"
1. Follow meta title formula (Service + Location | Differentiator | Business Name)
2. Keep under 60 characters
3. Keyword-first approach
4. Update HTML `<title>` tag
5. Test in Google SERP simulator

### "Fix CTA Buttons"
1. Check [v4-design-system.css](css/v4-design-system.css)
2. Verify `.btn .btn-primary` classes are applied
3. Ensure white text on navy background (`#1a2332`)
4. Test visibility on mobile

### "Create New [City] Page"
1. Copy template from existing city page (e.g., [anxiety-therapy-burlington.html](anxiety-therapy-burlington.html))
2. Update all city references
3. Customize FAQ section for local relevance
4. Add city-specific schema (LocalBusiness with address)
5. Follow post-creation checklist above

### "Add New Blog Post"
1. Create file in `/blog/` folder
2. Follow SEO best practices (title, headings, schema)
3. Include author byline and last updated
4. Add internal links to relevant service pages
5. Update [blog.html](blog.html) index

---

## SEO Strategy (Current Focus)

### Priority Keywords (Dec 2024)
Reference: `/data/keyword-research-list-dec2024.md`

### Top Performing Pages
- Virtual therapy pages (Ontario, Burlington, etc.)
- University anxiety pages (students/ folder)
- Depression therapy pages

### Pages Needing Optimization
- Review GSC data for pages on positions 11-30
- Focus on high-impression, low-CTR pages first

### Link Building Strategy
Reference: `/docs/BACKLINK_ACQUISITION_STRATEGY_NOV_2025.md` (in archive)

---

## Tools & Data Sources

### Analytics & SEO
- **Google Search Console** - Performance tracking, indexing issues
- **Ahrefs** - Keyword research, competitor analysis, backlink monitoring
- **Google Analytics** - User behavior, conversion tracking

### Development
- **VSCode** - Primary code editor
- **Git** - Version control
- **Netlify** - Hosting and deployment

---

## Common Issues & Solutions

### CTA Buttons Not Visible
- Check if `.btn-primary` class is applied
- Verify v4-design-system.css is loaded
- Ensure no CSS conflicts overriding button styles

### Schema Markup Not Showing in GSC
- Validate schema using Google's Rich Results Test
- Ensure JSON-LD format (not microdata)
- Check for syntax errors in schema

### Mobile Layout Breaking
- Test viewport widths: 320px, 375px, 414px
- Check for fixed-width elements
- Verify responsive CSS classes

### Page Not Ranking
1. Check indexing status in GSC
2. Verify page has sufficient word count (2000+ for competitive keywords)
3. Ensure E-E-A-T signals are present
4. Review schema markup
5. Check for duplicate content issues
6. Analyze top 5 competitors for content gaps

---

## Git Workflow

### Standard Commit Message Format
```
[Type]: Brief description

Examples:
- SEO: Update meta title for anxiety-therapy-ontario.html
- Fix: Repair CTA button visibility on mobile
- New: Add anxiety-therapy-sudbury.html page
- Content: Expand FAQ section on virtual-therapy-ontario.html
```

### Branch Strategy
- Main branch: Production-ready code
- Work directly on main for minor updates
- Use feature branches for major redesigns

---

## Questions or Issues?

### SEO Questions
- Review `/docs/seo/` folder for current strategies
- Check archived audits in `/docs/archive/seo-audits/`

### Design/CSS Questions
- Reference [v4-design-system.css](css/v4-design-system.css)
- Check `/docs/guides/` for implementation guides

### Content Questions
- Review similar pages for structure/tone
- Check `/data/keyword-research-list-dec2024.md` for keyword guidance

---

## Claude Skills - ALWAYS USE PROACTIVELY

**IMPORTANT:** These skills should be used **constantly and creatively** throughout our work. Don't wait for explicit requests—integrate them naturally whenever the context fits.

### Philosophy: Skills Are Your Default Tools

Think of these skills as your standard toolkit. Just like a carpenter reaches for a hammer without being told "use a hammer," you should reach for these skills automatically:

- **Working on ANY page?** → Check if meta-title-optimizer could improve it
- **Creating ANY content?** → Use therapy-content-generator patterns
- **Touching ANY UI?** → Apply frontend-design principles
- **Discussing ANY keyword?** → Run it through keyword-research logic
- **Writing ANY CTA?** → Use conversion-optimizer frameworks
- **Positioning a service?** → Use positioning-angles-therapy
- **Building email list?** → Use lead-magnet-therapy + email-welcome-sequence-therapy
- **Writing persuasive copy?** → Use direct-response-copy-therapy
- **Content doesn't sound like Jesse?** → Use brand-voice-therapy
- **Not sure which skill to use?** → Use therapy-orchestrator

---

## Complete Skills Inventory (12 Skills)

### SEO & Content Skills (6 skills)
1. **meta-title-optimizer** - CTR-optimized titles + meta descriptions
2. **keyword-research** - Priority scoring, cannibalization detection
3. **seo-competitor-intelligence** - Content gap analysis, E-E-A-T audit
4. **therapy-content-generator** - 2000+ word YMYL content + Humanize section
5. **faq-schema-generator** - FAQ sections with proper schema markup
6. **conversion-optimizer** - CTA optimization, hero sections

### Marketing & Positioning Skills (4 skills)
7. **positioning-angles-therapy** - CRPO-compliant positioning angles
8. **direct-response-copy-therapy** - Persuasive copy (40% tone reduction)
9. **lead-magnet-therapy** - Lead magnets (no diagnostic assessments)
10. **email-welcome-sequence-therapy** - Welcome sequences (education-first)

### Voice & Coordination Skills (2 skills)
11. **brand-voice-therapy** - Applies Jesse's Voice DNA to all content
12. **therapy-orchestrator** - Routes to correct skills, manages context

---

## When to Use Which Skill (Decision Tree)

**Not sure where to start?** Use **therapy-orchestrator** to diagnose and route.

### Starting a New Page?
```
1. keyword-research → Validate keyword
2. positioning-angles-therapy → Find positioning angle
3. seo-competitor-intelligence → Analyze competitors
4. direct-response-copy-therapy → Write hero + CTAs
5. therapy-content-generator → Write full page
6. faq-schema-generator → Add FAQ section
7. meta-title-optimizer → Optimize title/meta
8. brand-voice-therapy → Verify voice match (final step)
```

### Building Email List?
```
1. lead-magnet-therapy → Create concept
2. direct-response-copy-therapy → Landing page
3. email-welcome-sequence-therapy → Nurture sequence
4. brand-voice-therapy → Verify all copy sounds like Jesse
```

### Optimizing Existing Page?
```
1. meta-title-optimizer → Improve title/meta
2. conversion-optimizer → Improve CTAs
3. therapy-content-generator (Humanize) → Sound less AI
4. faq-schema-generator → Add/expand FAQ
5. brand-voice-therapy → Final voice check
```

### Competitive Research?
```
1. seo-competitor-intelligence → Analyze competitors
2. keyword-research → Find keyword gaps
3. positioning-angles-therapy → Differentiate
4. therapy-content-generator → Create superior content
```

### Content Sounds Like AI?
```
1. brand-voice-therapy (Verify Mode) → Identify voice breaks
2. therapy-content-generator (Humanize) → Rewrite flagged sections
3. brand-voice-therapy → Final verification
```

---

## The Context Paradox (CRITICAL FOR MULTI-SKILL WORK)

**Why more context ≠ better output:**

When passing context between skills, loading all previous research overwhelms the model and degrades output quality. Output becomes hedged, committee-sounding, and unfocused.

### Context Passing Rules

| To This Skill | Pass This | OMIT This |
|---------------|-----------|-----------|
| positioning-angles-therapy | Audience (1 sentence), keyword | Full competitor analysis |
| direct-response-copy-therapy | Angle (1-2 sentences), 5 voice markers | Full Voice DNA |
| therapy-content-generator | Primary keyword + outline | Competitor deep dive |
| conversion-optimizer | Current CTA, page goal | Content drafts |
| meta-title-optimizer | Primary keyword, 3 differentiators | Full page content |
| brand-voice-therapy | Draft content only | Research data |

### When to Run Fresh (No Context)

Run a skill with minimal context when:
- Previous skill output feels off
- Output is getting worse through iterations
- Copy sounds like a committee wrote it
- You need bold, punchy content

**Fresh start prompt:** "Write [content type] for [topic]. Audience: [1 sentence]. Angle: [1 sentence]. Be bold. Ignore everything else."

---

### Skill 1: meta-title-optimizer

**USE THIS WHENEVER:**
- Opening or reading any HTML file (check the `<title>` tag)
- Discussing any page's performance, ranking, or traffic
- User mentions Google, search, clicks, impressions, ranking
- Creating new pages (generate title before writing content)
- Noticing a title that's too long, generic, or missing keywords
- User shares GSC data showing low CTR
- Before committing changes to any page

**CREATIVE TRIGGERS:**
- "Let's look at this page" → Check its meta title first
- "This page needs work" → Start with title optimization
- "How can I get more traffic?" → Audit titles across top pages
- "I updated the content" → Does the title still match?

**Output:** 5 scored variations (0-100) with SERP previews

---

### Skill 2: seo-competitor-intelligence

**USE THIS WHENEVER:**
- User shares ANY external URL
- Discussing why a page isn't ranking
- Planning content for a competitive keyword
- User asks about any competitor or "other therapists"
- Before writing long-form content (research first!)
- User mentions any therapy/mental health website
- Analyzing what's working in the market

**CREATIVE TRIGGERS:**
- "I saw this site..." → Analyze it
- "Why am I on page 2?" → Pull top 5 competitors
- "What should this page cover?" → Research competitors first
- "Other therapists are doing X" → Full competitive analysis
- "Let's create content for [keyword]" → Competitor research FIRST

**Output:** Content gap analysis + actionable brief

---

### Skill 3: frontend-design

**USE THIS WHENEVER:**
- Creating ANY new HTML element
- User mentions anything visual (colors, spacing, layout, look)
- Fixing CSS or styling issues
- Building CTAs, hero sections, cards, or forms
- User says something "doesn't look right" or "looks weird"
- Mobile responsiveness work
- Any UI/UX improvement discussion

**CREATIVE TRIGGERS:**
- "Fix this section" → Apply proper design principles
- "Make a new page" → Design-first approach
- "The button isn't working" → Review full component design
- "Something looks off" → Full visual audit
- "Can you improve this?" → Redesign with intention

**Output:** Production-ready, distinctive code

---

### Skill 4: therapy-content-generator

**USE THIS WHENEVER:**
- Creating ANY new therapy page (service, location, condition)
- Expanding existing content
- User mentions a city, condition, or audience
- Building topic clusters or pillar content
- Content is under 2000 words for competitive keywords
- Writing about mental health topics
- Adding new sections to existing pages

**CREATIVE TRIGGERS:**
- "Add a page for [city/condition]" → Full content generation
- "This page is thin" → Expand with structured content
- "Cover more about anxiety" → Generate comprehensive section
- "We need more content" → Plan content using this skill
- ANY mention of: anxiety, depression, stress, burnout, students, professionals

**Output:** 2000+ word YMYL-compliant content with schema

---

### Skill 5: faq-schema-generator

**USE THIS WHENEVER:**
- Creating or editing ANY therapy page
- Page doesn't have an FAQ section (add one!)
- User mentions FAQs, questions, or schema
- Wanting to improve rich snippet chances
- After writing main content (FAQ complements it)
- User asks "what questions do people have about X?"

**CREATIVE TRIGGERS:**
- "Finish this page" → Add FAQ if missing
- "Help it rank better" → FAQ schema helps
- "What else should be on this page?" → FAQ section
- After completing ANY page → Check for FAQ
- "People ask me about..." → Turn into FAQ section

**Output:** 10-12 Q&As with valid JSON-LD schema

---

### Skill 6: keyword-research

**USE THIS WHENEVER:**
- Planning ANY content strategy
- User shares Ahrefs or GSC data
- Discussing what pages to create
- Prioritizing work across pages
- User mentions traffic, rankings, or keywords
- Checking for keyword cannibalization
- Before creating new pages (research first!)

**CREATIVE TRIGGERS:**
- "What should I focus on?" → Keyword priority analysis
- "Is this keyword worth targeting?" → Full research
- "These pages might compete" → Cannibalization check
- "Where are the opportunities?" → Quick win analysis
- "Let's plan content" → Keyword-first approach
- User provides ANY data → Analyze with this skill

**Output:** Priority-scored keyword list with recommendations

---

### Skill 7: conversion-optimizer

**USE THIS WHENEVER:**
- Writing ANY CTA copy (buttons, headlines, hero text)
- User mentions bookings, conversions, or clients
- Creating call-to-action sections
- Page has traffic but few conversions
- Writing persuasive copy of any kind
- Designing booking flows or contact sections
- User says "how do I get more bookings?"

**CREATIVE TRIGGERS:**
- "Add a CTA" → Use conversion frameworks
- "People aren't booking" → Audit all CTAs
- "Write the hero section" → Conversion-focused copy
- "Make this more compelling" → Apply PAS/AIDA/BAB
- ANY button text or headline → Optimize it
- "Improve this section" → Check for conversion opportunities

**Output:** A/B variations with conversion scores

---

### Skill 8: positioning-angles-therapy

**USE THIS WHENEVER:**
- Starting ANY new service page
- User asks "how should I position this?"
- Discussing differentiation from other therapists
- Creating landing pages
- Writing service descriptions
- User mentions "what's my unique value?"
- Planning marketing strategy

**CREATIVE TRIGGERS:**
- "Create a page for [service]" → Find angle FIRST
- "How do I stand out?" → Generate 3-5 angles
- "What makes me different?" → Use differentiators
- "Write copy for [service]" → Start with angle
- ANY new service launch → Position it first

**Output:** 3-5 CRPO-compliant angle options with headlines

---

### Skill 9: direct-response-copy-therapy

**USE THIS WHENEVER:**
- Writing ANY service page copy
- Creating hero sections
- Writing CTAs (buttons, headlines)
- Landing pages
- Email copy (with email-welcome-sequence-therapy)
- Persuasive content of any kind

**CREATIVE TRIGGERS:**
- "Write copy for [service page]" → Use frameworks
- "This copy feels too pushy" → Apply 40% reduction
- "Make this convert" → Use therapy-adapted PAS
- "Write a hero section" → Empathetic + trust signals
- ANY persuasive writing → Filter through CRPO compliance

**Output:** CRPO-compliant copy (empathetic, no pressure, trust-focused)

---

### Skill 10: lead-magnet-therapy

**USE THIS WHENEVER:**
- User wants to build email list
- Discussing top-of-funnel strategy
- User asks "how do I get more leads?"
- Planning content upgrades
- Creating free resources

**CREATIVE TRIGGERS:**
- "Build my email list" → Create lead magnet concept
- "Free resource ideas" → Generate 3-5 concepts
- "Content upgrade" → Suggest appropriate magnet
- "How do I capture emails?" → Lead magnet + landing page
- ANY mention of email list growth → Suggest lead magnet

**Output:** CRPO-safe lead magnet concept (no assessments)

---

### Skill 11: email-welcome-sequence-therapy

**USE THIS WHENEVER:**
- User mentions contact form submissions
- Discussing lead nurture
- User says "people ghost after contacting me"
- Planning email strategy
- Reducing no-show rates

**CREATIVE TRIGGERS:**
- "People don't respond after inquiry" → Welcome sequence
- "How do I nurture leads?" → 5-7 email sequence
- "Reduce no-shows" → Educational email series
- "Build trust with leads" → Welcome automation
- Contact form exists but no follow-up → Suggest sequence

**Output:** 5-7 email welcome sequence (education-first, no pressure)

---

### Skill 12: brand-voice-therapy

**USE THIS WHENEVER:**
- Writing ANY content (service pages, emails, CTAs)
- Content "doesn't sound like Jesse"
- Reviewing AI-generated copy
- Before publishing any client-facing content
- User says "sounds like AI" or "too generic"

**CREATIVE TRIGGERS:**
- "Check this copy" → Run Verify Mode
- "Make this sound like me" → Apply Voice DNA
- Writing any content → Use Apply Mode patterns
- "This is too polished" → Add vulnerability and check-ins
- ANY final draft → Voice verification before publish

**Output:** Voice-matched content or verification pass/fail with fixes

**Key patterns:**
- Start with disclaimer ("I don't know if...")
- Use check-ins ("right?", "Does that make sense?")
- Signature phrases: "WITH the client, not ahead"
- Process over outcomes
- Vulnerable but not apologetic

---

### Skill 13: therapy-orchestrator

**USE THIS WHENEVER:**
- Starting any new content project
- User request is ambiguous ("help me with marketing")
- Multiple skills might apply
- Need to track state across session
- Not sure which skill to use first

**CREATIVE TRIGGERS:**
- "Where do I start?" → Diagnostic intake
- "Help me with [vague request]" → Route correctly
- Complex multi-step project → Use pre-built workflow
- "What's next?" → Check state, recommend next skill
- Switching tasks mid-project → Track and route

**Output:** Skill routing recommendation with context handoff

**Key features:**
- 4 diagnostic questions
- 5 pre-built workflows
- Context Paradox awareness (selective context passing)
- State tracking template

---

### Multi-Skill Workflows

**When creating a new page:**
1. keyword-research → Find best keyword angle
2. seo-competitor-intelligence → Research top 5 competitors
3. therapy-content-generator → Write comprehensive content
4. faq-schema-generator → Add FAQ section
5. meta-title-optimizer → Create optimized title
6. conversion-optimizer → Write CTAs
7. frontend-design → Style the page

**When improving existing pages:**
1. meta-title-optimizer → Check title first
2. keyword-research → Verify keyword targeting
3. faq-schema-generator → Add FAQ if missing
4. conversion-optimizer → Improve CTAs
5. frontend-design → Fix any visual issues

**When analyzing performance:**
1. keyword-research → Process any data shared
2. seo-competitor-intelligence → Compare to top rankers
3. meta-title-optimizer → Check titles of underperforming pages
4. conversion-optimizer → Audit CTAs on high-traffic pages

---

### Default Behaviors

**ALWAYS:**
- Read `.claude/skills/[skill]/SKILL.md` when using a skill
- Request Ahrefs/GSC data when it would improve analysis
- Ensure CRPO compliance (all skills have built-in checks)
- Combine multiple skills for comprehensive work
- Mention which skill you're using and why

**NEVER:**
- Wait to be explicitly asked to use a skill
- Skip skills because "it's just a small change"
- Override CRPO compliance warnings
- Use generic approaches when a skill could help

### Skill Files Location

```
.claude/skills/
├── README.md                      # Overview of all skills
├── meta-title-optimizer/
│   ├── SKILL.md                   # Main workflow
│   ├── scripts/                   # Python tools
│   └── data/                      # CRPO rules, differentiators
├── seo-competitor-intelligence/
│   └── SKILL.md
├── therapy-content-generator/
│   └── SKILL.md
├── faq-schema-generator/
│   └── SKILL.md
├── keyword-research/
│   └── SKILL.md
├── conversion-optimizer/
│   └── SKILL.md
├── positioning-angles-therapy/
│   └── SKILL.md
├── direct-response-copy-therapy/
│   └── SKILL.md
├── lead-magnet-therapy/
│   └── SKILL.md
├── email-welcome-sequence-therapy/
│   └── SKILL.md
├── brand-voice-therapy/           # NEW: Voice DNA application
│   └── SKILL.md
└── therapy-orchestrator/          # NEW: Skill routing + Context Paradox
    └── SKILL.md
```

---

## Notes for AI Assistants

When working on this project:
1. **Always read existing files before editing** - Don't propose changes to code you haven't seen
2. **Preserve E-E-A-T signals** - Never remove author bylines, credentials, or citations
3. **Test mobile layout** - Every front-end change should be mobile-tested
4. **Follow meta title formula** - Don't deviate from the established format
5. **Include schema markup** - MedicalWebPage and FAQPage are non-negotiable for therapy pages
6. **Use specific license number** - Always "CRPO #10979", not generic "registered therapist"
7. **Ontario-specific content** - Don't use generic Canadian or North American references
8. **Avoid over-engineering** - Simple, focused solutions are preferred
9. **CRPO COMPLIANCE IS CRITICAL** - All advertising/content must be factual, verifiable, non-misleading. NO testimonials, outcome guarantees, or unverifiable superlatives.
10. **Use skills proactively** - Don't wait for user to request them; activate when context matches triggers

---

## Auto-Trigger Hook System

This project uses a UserPromptSubmit hook to automatically detect SEO-related patterns and remind Claude to use appropriate skills.

### How It Works

1. User submits a prompt
2. Hook script (`/.claude/hooks/detect-seo-patterns.py`) analyzes the prompt
3. If patterns match, skill recommendations are injected as context
4. Claude sees recommendations and should act on them

### Pattern Detection

| Pattern | Keywords Detected | Skill Triggered |
|---------|-------------------|-----------------|
| GSC Data | clicks, impressions, ctr, position, queries | keyword-research |
| Ahrefs Data | ahrefs, keyword difficulty, search volume | keyword-research |
| Competitor | competitor, ranking, page 2, position | seo-competitor-intelligence |
| Content Creation | create page, write content, new page | therapy-content-generator |
| Meta Title | meta title, serp, truncate, 60 char | meta-title-optimizer |
| CTA Work | button, cta, conversion, booking, hero | conversion-optimizer |
| FAQ Work | faq, schema, rich snippet | faq-schema-generator |
| Design | css, layout, responsive, mobile, visual | frontend-design |

### Files

- **Hook Script:** `.claude/hooks/detect-seo-patterns.py`
- **Settings:** `.claude/settings.local.json` (hooks configuration)

### Expected Behavior

When patterns are detected, Claude will see a message like:
```
SKILL TRIGGERS DETECTED:
  * GSC data detected - use keyword-research skill for priority scoring and quick wins

Remember: Use these skills proactively without waiting for explicit requests.
```

**Claude should then invoke the recommended skill immediately.**

---

## Claude Chrome Extension - NEW CAPABILITIES

**Reference:** [Getting Started with Claude in Chrome](https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome)

The Claude Chrome extension unlocks capabilities we couldn't do before. This section documents how to use it with our skills for SEO automation.

### What Chrome Extension Can Do (That We Couldn't Before)

| Capability | What It Means for SEO |
|------------|----------------------|
| **See webpages visually** | Claude reads competitor pages directly, extracts structure, counts elements |
| **Click and navigate** | Automate multi-step research across sites |
| **Multi-tab workflows** | Analyze 5 competitors simultaneously in one session |
| **Record workflows** | Teach Claude a research pattern once, replay forever |
| **Schedule tasks** | Weekly competitor checks run automatically |
| **Read console/DOM** | Check schema markup, meta tags, page structure directly |
| **Planning mode** | Approve a research plan, Claude executes autonomously |

### Installation

1. **Get Claude Pro/Team/Enterprise** (required)
2. **Install extension:** [Chrome Web Store - Claude in Chrome](https://chromewebstore.google.com/detail/claude)
3. **Pin it:** Click puzzle icon → thumbtack next to Claude
4. **Grant permissions:** Required for page reading and navigation
5. **Choose model:** Opus 4.5 (complex), Sonnet 4.5 (balanced), Haiku 4.5 (fast)

### Core Features for SEO Work

#### 1. Multi-Tab Competitor Analysis
```
You: "Open these 5 competitor URLs and analyze each one"
Claude: Opens all tabs, groups them, reads each page
Claude: Extracts word count, H2 structure, FAQ presence, schema types
Claude: Compiles comparison in side panel
```

#### 2. Workflow Recording (Game-Changer)
```
1. Click "Record Workflow" in Claude panel
2. Manually perform your research steps once:
   - Search keyword on Google
   - Open top 5 results
   - Check each for: word count, headings, FAQ, schema
   - Log to Google Sheet
3. Save as "Weekly Competitor Check"
4. Claude repeats this exact workflow on schedule
```

#### 3. Scheduled Tasks
```
Set once → Claude runs automatically:
- Daily: Check rankings
- Weekly: Competitor analysis
- Monthly: Full site audit
- Annually: Content refresh review
```

#### 4. Planning Mode ("Ask Before Acting")
```
You: "Analyze top 5 competitors for 'anxiety therapy ontario'"
Claude: Creates plan for approval:
  1. Search Google for keyword
  2. Open top 5 organic results
  3. Extract data from each
  4. Compile comparison
  5. Generate recommendations
You: Approve plan
Claude: Executes entire workflow autonomously
```

#### 5. Console/DOM Reading (Technical SEO)
```
You: "Check the schema markup on this page"
Claude: Reads page source, finds JSON-LD
Claude: Reports: "Found MedicalWebPage, FAQPage, missing LocalBusiness"
```

### SEO Workflows + Skills Integration

The magic: **Chrome extension collects data → Skills process it**

#### Workflow 1: Weekly Competitor Intelligence

**Chrome Extension Does:**
1. Searches "anxiety therapy ontario" on Google
2. Opens top 5 organic results in tab group
3. For each page, extracts:
   - URL
   - Word count (reads full page)
   - H2 heading structure
   - FAQ section presence
   - Schema markup (reads source)
   - Author byline
   - Last updated date
4. Compiles data into structured format

**Then Feed to Skill:** `seo-competitor-intelligence`
```
"Here's the competitor data Claude Chrome collected:
[paste extracted data]
Generate a 'beat the competition' brief for NextStep Therapy."
```

**Output:** Content gap analysis + actionable outline

#### Workflow 2: Monthly Meta Title Audit

**Chrome Extension Does:**
1. Opens nextsteptherapy.ca/sitemap.xml
2. Clicks through each therapy page URL
3. Reads `<title>` tag from each page
4. Records character count
5. Logs to Google Sheet

**Then Feed to Skill:** `meta-title-optimizer`
```
"Here are current meta titles from our site:
[paste titles with character counts]
Score each and generate optimized alternatives."
```

**Output:** 5 variations per title with CTR scores

#### Workflow 3: Weekly GSC Position Tracking

**Chrome Extension Does:**
1. Opens Google Search Console
2. Navigates to Performance → Search Results
3. Exports queries report
4. Opens tracking spreadsheet
5. Pastes new data
6. Highlights position changes > 3 spots

**Then Feed to Skill:** `keyword-research`
```
"Here's this week's GSC data:
[paste export]
Identify quick wins and cannibalization risks."
```

**Output:** Priority-scored keyword list

#### Workflow 4: Schema Validation

**Chrome Extension Does:**
1. Opens Google Rich Results Test
2. Tests each therapy page URL
3. Screenshots pass/fail results
4. Logs which schema types detected
5. Flags pages missing required schema

**Then Feed to Skill:** `faq-schema-generator`
```
"These pages are missing FAQPage schema:
[list URLs]
Generate FAQ sections with valid JSON-LD for each."
```

**Output:** Ready-to-implement FAQ sections

### Recording a Workflow (Step-by-Step)

1. **Open Claude Chrome panel**
2. **Click "Record Workflow"**
3. **Perform your task manually:**
   - Every click, scroll, and action is recorded
   - Talk to Claude as you go: "Now I'm checking the H2 structure"
4. **Stop recording**
5. **Name it:** "Weekly Competitor Analysis - Anxiety Ontario"
6. **Test replay:** Claude performs exact same steps
7. **Schedule:** Set to run Monday 9am weekly

### Slash Commands (Shortcuts)

Save prompts you use repeatedly:

```
/competitor-check
"Search Google for [keyword], open top 5 organic results,
extract word count, H2s, FAQ presence, schema types,
compile into comparison table"

/schema-audit
"Open Rich Results Test, test [URL], report all schema
types found and any errors"

/title-check
"Open [URL], read the <title> tag, count characters,
flag if over 60 chars"
```

### Best Practices

1. **Start with Planning Mode** - Review Claude's plan before execution
2. **Record repetitive workflows** - Don't repeat manual research
3. **Use multi-tab for competitors** - Analyze 5 at once, not one at a time
4. **Schedule recurring tasks** - Automate weekly checks
5. **Feed outputs to skills** - Chrome collects, skills process
6. **Choose right model:**
   - Haiku 4.5: Quick lookups, simple navigation
   - Sonnet 4.5: Multi-step workflows, analysis
   - Opus 4.5: Complex research, detailed extraction

### Safety Notes

- Don't use on sensitive sites (banking, medical records)
- Review plans before approving
- High-risk actions (purchases, publishing) require explicit approval
- Chrome only (not Edge, Firefox, or mobile)

### Workflow Documentation

Detailed workflow docs: `/docs/seo/chrome-workflows/`
- [workflow-1-competitor-intel.md](docs/seo/chrome-workflows/workflow-1-competitor-intel.md) - Weekly competitor analysis

### Competitor Intelligence Reports

| Report | Date | Key Finding |
|--------|------|-------------|
| [SEO-COMPETITOR-INTELLIGENCE-DEC2025.md](docs/seo/SEO-COMPETITOR-INTELLIGENCE-DEC2025.md) | Dec 2025 | Market is thin, competitors weak, opportunity HIGH |

### Priority Keywords (From Research)

| Keyword | Opportunity | Action |
|---------|-------------|--------|
| **anxiety therapy burlington** | HIGH (2,200/mo, difficulty 6) | Create 2,500+ word page |
| **men's mental health therapy ontario** | HIGH (practice-dominated) | Create dedicated page |
| **virtual therapy ontario** | MEDIUM | Strengthen existing page |

### De-Prioritized Keywords

- "therapy near me ontario" - Directory dominated
- "depression therapy ontario" - Government dominated
- "anxiety therapy ontario" - Government dominated

### Key Insight (Dec 2025)

**Competitors made ZERO improvements in 12 months.** NextStep can dominate by implementing:
- CRPO #10979 display (0% of competitors do this)
- 2,000+ word content (0% of competitors have this)
- FAQ schema (only ~20% have basic FAQ)
- Author bylines with credentials (~10% have this)

---


