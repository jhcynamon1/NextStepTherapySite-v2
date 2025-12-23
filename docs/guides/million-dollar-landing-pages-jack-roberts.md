# Million Dollar Landing Pages with AI - Jack Roberts

**Source:** YouTube Tutorial by Jack Roberts
**Topic:** Building high-converting landing pages using Gemini 3, Claude, and modern AI tools
**Saved:** December 2024

---

## Overview

Jack Roberts shares his 3D Framework for building landing pages that convert. Key insight: Most landing pages either look like "tractors" (functional but ugly) or "Ferraris with no engine" (beautiful but don't convert). The goal is a "unicorn" - amazing design AND function.

---

## The 3D Framework

### D1: Design
### D2: Data (Copy that converts)
### D3: Deploy (SEO + Analytics)

---

## Key Principles

### What Makes a Million-Dollar Landing Page

1. **Looks amazing**
2. **Converts viewers into buyers**
3. **Quick to build**
4. **Easy to maintain**
5. **Uses 1% of the 1% knowledge** (competitive advantage)

### Core Insight: People Don't Read, They Skim

> "One of the core concepts with this stuff is that people don't read websites, they skim websites. And one of the biggest traps that I see people fall into is they think that they take the sum of what you say, but they don't. They actually take the average of what you say. And sometimes less is a lot more."

---

## Landing Page Structure

```
HERO SECTION
├── Hook (speaks to core problem)
├── Clear CTA
└── Credibility (brands/logos)

VALUE PROPOSITION
├── Pain Point 1 → How We Solve It
├── Pain Point 2 → How We Solve It
└── Pain Point 3 → How We Solve It

PROOF/TESTIMONIALS
└── Social proof with images

CTA + FORM
└── Integrated questionnaire/booking
```

### User Flow After Landing

```
Landing Page
    ↓
[Option A] → Direct CTA (Book Call)
    ↓
[Option B] → Lead Magnet (Value First)
    ↓
CRM Integration → Email Sequence → Push to Form/Call
```

---

## D1: Design Process

### Step 1: Create a Mood Board

**Tools mentioned:**
- Dribbble (dribbble.com)
- Behance (behance.net)
- Canva (for mood boards)

**Process:**
1. Search for designs you like (dashboard, website, etc.)
2. Capture screenshots
3. Create mood board in Canva
4. Identify what you love about each design

### Step 2: Extract Brand Identity

**If you don't have brand guidelines:**
- Use Firecrawl to extract from websites you admire
- Go to Firecrawl playground
- Enter any website URL
- Select "branding" to see:
  - Logo
  - Primary color schemes
  - Typography

**Reference:** frontify.com has brand templates from companies like IBM, Netflix, etc.

### Step 3: Build in Gemini 3 (aistudio.google.com)

**Prompt structure:**
```
I would like you to build for me a landing page, a website with the following categories:

1. Hero section with beautiful call to action, beautiful hook
2. Three sections (value proposition 1, 2, 3) - pre-populate
3. Proof and testimonials section with images
4. Integrated form at the bottom

Typography: [paste from brand guide]

For the hero section, I want you to replicate identically what you have with [reference design]. That design is gorgeous. I've also included the HTML code below.

[Paste HTML extracted from reference site]

For your reference, there is a soft beautiful luminescence in the background and a slow-moving looping animation with stars moving left to right.
```

### Step 4: HTML Extraction

**Tool:** htmlextractor.com (or similar)
- Enter any website URL
- Get stylized code
- Download as HTML file
- Feed to Gemini for replication

### Step 5: Refine in Anti-Gravity/Cursor

**Why move from Gemini to Anti-Gravity:**
- Can open in browser and stress test
- Better for design refinement
- Can see changes in real-time

**Workflow:**
1. Publish minimal viable design to GitHub
2. Clone repo in Anti-Gravity
3. Refine design iteratively
4. Anti-Gravity for design, Claude Code for copy/thinking

**Adding images/logos:**
1. Create folder (e.g., "logos")
2. Drop image files in folder
3. Tell AI: "Replace [element] with the logo called [filename]"

---

## D2: Data (Converting Copy)

### Finding Pain Points

**Tool:** Buzzabout.ai
- Search Reddit for target avatar
- Find pain point resonance
- Filter to last 3 months (more recent = more prime)

**Goal:** Identify top 3 biggest pain points for your audience

### Structure for Value Props

```
Section 1: Pain Point 1 → How We Help
Section 2: Pain Point 2 → How We Help
Section 3: Pain Point 3 → How We Help
```

### Using Claude for Copy

**Activate Deep Think Mode:**
1. Shift + Tab → Plan mode
2. Type "ultra think" (big brain mode)

**Prompt structure:**
```
I would like you to completely re-engineer the copy of this website for my target avatar.

I help [target audience] [achieve outcome]. I only work with [qualification criteria].

For my top three points, I want you to address their pain points:
1. [Pain point 1 - e.g., "too busy to go on LinkedIn"]
2. [Pain point 2 - e.g., "don't know how to do it"]
3. [Pain point 3 - e.g., "tried before and failed"]

At the very top: value-based hook
Each section: address pain point + how we solve it + relevant image

Form/questionnaire information: [paste details]

I also want you to consider additional ways we can speak to that target avatar.
```

### Key Copy Principle: Sell Maui, Not the Flights

> "Sell the destination, not how we get to that destination."

Focus on the outcome, not the process.

### CRM Integration (Go High Level)

1. Go to gohighlevel.com
2. Click Automation → Create Workflow
3. Add trigger: Inbound Webhook
4. Copy webhook URL
5. Give URL to Claude to integrate into form
6. Map form fields to CRM fields:
   - First name
   - Last name
   - Email
   - Custom fields (revenue, employees, etc.)
7. Set up automated email sequence

### Calendar Integration (Cal.com preferred)

1. Create account on cal.com
2. Create new form/event type
3. Get embed code (inline embed)
4. Dark theme recommended
5. Give embed code to Claude to integrate

---

## D3: Deploy

### Publishing to Vercel

1. Push code to GitHub
2. Go to vercel.com
3. Add new project
4. Connect to GitHub repo
5. Click Deploy

**Updating:**
- Changes in Cursor/Claude → Push to GitHub → Auto-updates on Vercel

### Domain Setup

1. In Vercel, go to Domains
2. Search for available domain
3. Purchase through Vercel
4. Connect to project
5. Configure redirect (moved permanently)
6. Wait for SSL certificate

### Analytics Setup

**Vercel Analytics:**
1. Enable in Vercel dashboard
2. Copy install command
3. Give to Claude: "Could you please run: [command]"
4. Add React component for tracking

**Speed Insights:**
- Same process for performance monitoring

### SEO Infrastructure

**Prompt for SEO setup:**
```
I would like you to complete SEO infrastructure for the website:
- Analyze existing design
- Create article/blog post template
- Create article index pages
- Set up dynamic routing
- Implement sitemap
- Add robots.txt
```

### Blog/Articles System

**Creating programmatic articles:**
1. Find blog design you like
2. Extract HTML
3. Create "blog reference design" folder
4. Give to Claude with prompt:

```
I've added sample HTML in folder called "blog reference design." This is not production code.

Look at the style of this code and use that to create a blog page for me.

Use the same branding, typography, spacing, coloring from our existing website.

Just use the design layout as a guide, then delete the reference folder.
```

**Creating articles:**
```
I would like to do some research on the perfect SEO optimized article.

Write me one with images (from image generation or open source) on [topic].

Do another bonus article on something relevant for my target avatar based on data you find.
```

---

## Tools Summary

| Tool | Purpose |
|------|---------|
| Gemini 3 (aistudio.google.com) | Initial design generation |
| Anti-Gravity | Design refinement, browser testing |
| Claude Code/Cursor | Copy, thinking, code refinement |
| Firecrawl | Brand identity extraction |
| Buzzabout.ai | Pain point research (Reddit) |
| Go High Level | CRM, email automation |
| Cal.com | Calendar booking integration |
| Vercel | Hosting, domains, analytics |
| GitHub | Version control, deployment pipeline |

---

## Key Takeaways

1. **Design + Function = Unicorn** - Need both, not one or the other
2. **People skim, not read** - Less is more, focus on averages not sums
3. **3 Pain Points** - Address the biggest 3 problems your audience has
4. **Sell the destination** - Outcomes over process
5. **CRM integration is essential** - Capture leads who don't convert immediately
6. **Use deep think mode** - Shift+Tab + "ultra think" for better Claude output
7. **Anti-Gravity for design, Claude for copy** - Use the right tool for each job
8. **Programmatic content** - Create articles at scale with AI

---

## Relevant for NextStep Therapy

**Applicable concepts:**
- Hero section with clear hook addressing anxiety/mental health pain points
- 3 value propositions addressing top client concerns
- Integrated booking form (currently using Janeapp)
- Email nurture sequence for leads who don't book immediately
- Blog/article system for SEO (already have this structure)

**CRPO Compliance Note:** Any landing page optimization must maintain CRPO compliance - no outcome guarantees, no testimonials, factual claims only.

---

*Transcript saved for reference when optimizing landing pages and conversion flows.*
