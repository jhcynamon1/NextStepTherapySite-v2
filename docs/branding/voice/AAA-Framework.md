# AAA Framework: Authentic Authority Accelerator

> **Source:** Workshop by Zach Lloyd (Black Sheep Systems) - December 2024
> **GitHub Repo:** https://github.com/zeek2fit/aaa-authority-acceleration

---

## Overview

The AAA (Authentic Authority Accelerator) Framework transforms a single 20-30 minute brand interview into 12+ months of authentic, AI-assisted content. The key innovation is achieving **90-95% voice authenticity** through strategic analysis rather than generic prompting.

### The Core Promise

> "Turn ten hours a week of creating content into ten hours a year."

This is achieved through:
- **Modular skills** instead of monolithic agents
- **Complete context loading** instead of RAG (Retrieval Augmented Generation)
- **Voice DNA extraction** for authentic tone matching
- **Boundary mapping** to know what the brand would *never* say

---

## Why Skills Over Agents?

From Anthropic's agent team (Barry and Mahesh): **"Don't build agents, build skills instead."**

### The Problem with Agents
- Context window overflow with large prompts
- Loss of control over decision-making
- Difficulty managing complex multi-step workflows

### The Skills Solution
- **Small, modular skills** load only when needed
- Each skill is called automatically based on context
- Claude knows when to invoke which skill
- Resources are pulled in as needed, keeping context clean

**Visual:** Instead of loading a massive .md file upfront, skills load first (small footprint), then pull in additional resources as the conversation requires.

---

## The Four Layers

### Layer 0: CAPTURE (Brand Intake)

**Purpose:** Gather raw material for voice analysis

**Input Sources:**
- Podcast episodes (guest appearances)
- YouTube video transcripts
- Email newsletters
- Speaking engagement transcripts
- Blog posts
- Social media posts

**Minimum Viable Capture:** ~50,000-70,000 words (approximately 7-16 pieces of content)

**Case Study (Stephanie Janus):**
- 16 podcast episodes
- 16 emails
- 1 TED X talk transcript
- Result: Under 50,000 words, produced excellent voice match

**If Starting Fresh (No Existing Content):**
Use the 39 strategic brand discovery questions to create the foundation through an interview.

### Layer 1: ANALYZE (Voice Meta)

Two critical outputs:

#### Voice DNA (The Positive Patterns)
Five extraction layers:
1. **Sentence Structure** - Short/long, simple/complex patterns
2. **Vocabulary Preferences** - Industry jargon, casual vs. formal
3. **Rhetorical Devices** - Questions, lists, metaphors used regularly
4. **Tone Markers** - Confident, conversational, authoritative
5. **Storytelling Style** - Personal anecdotes, case studies, data-driven

#### Disgust Mapper (The Negative Boundaries)
What the brand would NEVER say:
- Banned phrases ("hustle culture," "boss babe," "grind harder")
- Ideological conflicts (if brand is about sustainable growth, avoid "go hard mode" language)
- Industry clichés to avoid
- Competitors' language patterns

**Why This Matters:** LLMs default to generic patterns. Without boundaries, AI writing about "sustainable growth" will naturally drift toward hustle language. The Disgust Mapper prevents this.

**Example (Stephanie's Brand):**
- Grace-based encouragement (not pressure tactics)
- Sustainable growth (not hustle culture)
- Faith-integrated (but not preachy)

### Layer 2: CREATE (Content Generation)

#### The ERISE Framework
125 variables across 5 categories, each with 25 content approaches:

| Category | Purpose | Example Formats |
|----------|---------|-----------------|
| **E**ducate | Teaching content | Listicles, how-tos, tutorials |
| **R**elate | Connection content | Personal stories, "me too" moments |
| **I**nspire | Motivational content | Transformation stories, vision casting |
| **S**tory | Narrative content | Case studies, journey posts |
| **E**ngage | Interactive content | Questions, polls, debates |

#### The Math
- 1 brand interview → 7 content themes
- 7 themes → 50-100 strategic topics
- 1 topic → 19 content pieces (across formats)
- **Result:** 1,900+ unique pieces = 12+ months of content

#### Content Multiplication Per Topic
From a single topic like "Digital Sabbath":
- 2+ blog posts (different angles)
- 2+ email newsletters
- 3+ Twitter/X threads
- 3+ LinkedIn posts
- 3+ Instagram posts
- Short-form video scripts
- Long-form video scripts

### Layer 3: DISTRIBUTE (Publishing Pipeline)

**Stack:**
- **Airtable** - Content queue and calendar management
- **n8n** - Automation workflows
- **Kit (ConvertKit)** - Email publishing
- **Social platforms** - Twitter, LinkedIn, Instagram

**Workflow:**
1. Content generated → Stored in Airtable
2. Human review → Approve/edit in Airtable
3. Approval triggers webhook → n8n receives signal
4. n8n routes to appropriate platform
5. Content published on schedule

**Airtable Structure:**
- **AAA Clients** - Client profiles and voice data
- **AAA Topics** - Topic library with status
- **AAA Content Pieces** - Individual pieces with approval status

---

## The 23 Skills Inventory

### Core Workflow (7 Skills)
| Skill | Purpose |
|-------|---------|
| `/aaa-workflow` | Master orchestrator - guides full process |
| `/deep-brand-intake` | Content capture and organization |
| `/brand-discovery` | 39-question strategic interview |
| `/voice-dna` | 5-layer voice extraction |
| `/disgust-mapper` | Negative boundary mapping |
| `/generate-topics` | Combinatorial topic generation |
| `/topic-to-matrix` | Expands 1 topic → 19 pieces |

### Authority Engine (6 Skills)
| Skill | Purpose |
|-------|---------|
| `/authority-engine` | Overall authority positioning |
| `/competitor-analysis` | Deep competitor research |
| `/competitor-hooks` | Extract winning hooks |
| `/competitor-structures` | Analyze content formats |
| `/competitor-topics` | Identify competitor themes |
| `/competitor-gaps` | Find white-space opportunities |

### Trust Signals / E-E-A-T (7 Skills)
| Skill | Purpose |
|-------|---------|
| `/trust-signal-generator` | Create credibility markers |
| `/trust-case-studies` | Build proof stories |
| `/trust-frameworks` | Develop proprietary methods |
| `/trust-contrarian` | Strategic disagreement content |
| `/trust-metrics` | Data-driven authority |
| `/trust-deep-dives` | Comprehensive expertise pieces |
| `/trust-provenance` | Behind-the-scenes transparency |

### Pipeline & Utilities (4 Skills)
| Skill | Purpose |
|-------|---------|
| `/content-to-airtable` | Push content to queue |
| `/content-calendar` | Schedule management |
| `/content-review` | Quality check workflow |
| `/session-handoff` | Save context between sessions |

---

## Why Complete Context Over RAG?

Traditional RAG fragments content into chunks and retrieves relevant pieces. This misses:
- **Signature patterns** (how someone starts emails, opens videos)
- **Rhythmic structures** (sentence cadence, paragraph flow)
- **Cross-content consistency** (themes that appear across different formats)

**The AAA Approach:**
- Load 500k-800k tokens in one shot
- Use Gemini's extended context window for initial analysis
- Extract patterns from the COMPLETE picture
- Store extracted patterns in skills for ongoing use

**Cost:** Less than $1 for the full analysis run

---

## Installation & Setup

### Prerequisites
- Claude Code environment
- Airtable account + MCP connection
- Kit (ConvertKit) account for email
- n8n instance (self-hosted or cloud)
- Python 3.9+ for extraction scripts

### Quick Start
```bash
# Clone the repo
git clone https://github.com/Zeek2Fit/aaa-authority-acceleration.git
cd aaa-authority-acceleration

# Copy skills to Claude
cp -r .claude/skills/* ~/.claude/skills/
cp -r .claude/commands/* ~/.claude/commands/

# Verify installation
ls ~/.claude/skills/
ls ~/.claude/commands/

# Install Python dependencies for extraction
pip install youtube-transcript-api requests beautifulsoup4
```

### Activation
Type `/aaa` + Tab for autocomplete of available commands.

Start with: `/aaa-workflow`

---

## Extraction Tools

Python scripts for gathering source material:

| Script | Purpose |
|--------|---------|
| `youtube_transcript_extractor.py` | Download video transcripts |
| `kit_email_extractor.py` | Pull ConvertKit broadcasts |
| `podcast_transcript_extractor.py` | Buzzsprout transcripts |
| `gemini_voice_synthesizer.py` | Analyze 500k+ tokens |

---

## Practical Implementation Timeline

### Week 1-2: Foundation
- Gather source material (aim for 50k+ words)
- Run brand discovery if needed
- Execute voice DNA extraction
- Map disgust boundaries

### Week 3-4: Generation
- Generate topic library (50-100 topics)
- Create first batch of content
- Set up Airtable structure
- Configure n8n webhooks

### Week 5-6: Refinement
- Review and edit generated content
- Retrain on your edits
- Identify which content types work best
- Begin scheduling

### Week 7+: Optimization
- Analyze engagement data
- Double down on winning formats
- Add contrarian spice intermittently
- Consider ad budget for top performers

---

## Key Insights from the Workshop

### On Authenticity
> "The magic is using it once, then retraining on new data. You could realistically get to 90-95% accuracy of capturing someone's voice."

### On Human Review
The recommendation varies by risk tolerance:
- **High risk tolerance:** Schedule and let it run, iterate based on data
- **Low risk tolerance:** Review everything, especially emails (longer form = more scrutiny)
- **Middle ground:** Review emails, auto-publish short social posts

### On Starting Small
- Pick 1-2 channels first
- Run for 2-4 weeks
- Collect engagement data
- Use data to retrain the system
- Then expand to more channels

### On Feedback Loops
Use Apify or similar to scrape your own published content performance, then feed engagement metrics back into the system to double down on what's working.

### On the Future Vision
> "Capture your daily thoughts in Obsidian or a journal. Export weekly to your system. AI reviews and generates fresh content ideas from your actual week—not generic AI slop, but your real voice talking about real things."

---

## Recommended Books & Resources

- **"The Art of Possibility"** by Rosamund Stone Zander and Benjamin Zander
- **Seth Godin's work** on marketing and positioning
- **Brian Harris** for marketing fundamentals

---

## Technical Stack Summary

| Component | Tool | Purpose |
|-----------|------|---------|
| AI Model | Claude Sonnet 4/4.5, Gemini 2.5/3 | Content generation |
| Skills | Claude Code Skills | Modular workflows |
| Database | Airtable | Content management |
| Automation | n8n | Publishing pipeline |
| Research | Perplexity | Competitor analysis |
| Extraction | Python scripts | Source material gathering |
| Email | Kit (ConvertKit) | Newsletter publishing |

---

## Use Cases

1. **Personal Brands** - Coaches, consultants, authors scaling content
2. **Marketing Agencies** - Managing multiple client voices efficiently
3. **Executives/CEOs** - Have the voice, lack the time
4. **SaaS Founders** - Need consistent content for product marketing
5. **Content Creators** - Multiplication without losing authenticity

---

## License

MIT License - Free to use with attribution to Zach Lloyd / Black Sheep Systems

---

## Next Steps for NextStep Therapy

Consider adapting this framework for:
1. **Jesse's content** - Extract voice DNA from existing videos, blogs, emails
2. **Therapy-specific topics** - Generate ACT, anxiety, depression content at scale
3. **E-E-A-T compliance** - Use trust signal skills for YMYL content
4. **Ontario localization** - Combine with existing city page workflows

The framework's emphasis on authenticity and trust signals aligns well with therapy content requirements.
