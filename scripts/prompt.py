#!/usr/bin/env python3
"""
Custom Prompt Generator for Next Step Therapy
Uses AI to generate high-quality, tailored marketing prompts
"""

import sys
import subprocess
import json
from pathlib import Path

# Business context
BUSINESS_CONTEXT = """
- **Industry:** Private therapy clinics serving high-achieving young professionals (ages 22-35) in Ontario
- **Target Issues:** Anxiety, overwhelm, existential issues, life transitions, work stress, ADHD, men's mental health
- **Business Model:** Multi-therapist platform (Layla.care model), virtual therapy across Ontario, 38% platform commission
- **Brand Values:** Elevated, trustworthy, professional, warm, evidence-based
- **Regulatory:** CRPO marketing guidelines (no comparisons, no superiority claims, no outcome guarantees) and PHIPA compliance
- **Current State:** Rebranding from "Next Step Therapy" due to trademark conflict, keeping nextsteptherapy.ca domain (DR 2.7)
- **Target Revenue:** Few million dollars/year in Ontario
- **Growth Strategy:** Local SEO, Google Business Profiles, regular SEO as main client acquisition
"""

META_PROMPT_TEMPLATE = """You are a world-class prompt engineering expert specializing in marketing and business strategy for therapy clinics.

## Your Task:
Generate a high-quality, custom, actionable prompt for this request:

**"{user_request}"**

## Business Context (include relevant parts in your generated prompt):
{business_context}

## Prompt Engineering Guidelines:

### 1. Role & Persona
- Define a specific expert role relevant to the request (e.g., "direct response copywriter", "brand strategist", "SEO specialist", "conversion optimizer")
- Make it feel like talking to a real expert

### 2. Structure
Your generated prompt should have:
- **Context & Role** section
- **Specific Request** (from user)
- **Business Context** (relevant details from above)
- **Strategic Questions** (5-10 questions tailored to THIS request)
- **Output Requirements** (format, specificity, rankings, etc.)

### 3. Strategic Questions (Customize Based on Request Type)

**For Branding/Naming:**
- Analyze successful platform names and patterns
- Apply naming frameworks (e.g., Alex Hormozi principles)
- Check domain availability and trademarks
- Score on memorability, professional appeal, conflicts
- Request competitor differentiation analysis
- Ask for market gap analysis

**For Copy/Landing Pages:**
- Identify psychological triggers and pain points
- Request specific copy improvements with before/after examples
- Ask for trust-building elements (CRPO-compliant)
- Request A/B testing ideas
- Ask for conversion optimization ranked by impact/effort

**For SEO/Content:**
- Request keyword research with actual search volume
- Ask for content calendar with topics ranked by impact/effort
- Request internal linking strategy
- Ask what pain points aren't being addressed
- Request distribution channel strategy

**For Funnels/Conversion:**
- Ask for customer journey mapping
- Request friction point analysis
- Ask for trust-building mechanisms at each stage
- Request time-to-value optimization
- Ask for offer ladder (entry → core → premium)

### 4. Marketing Psychology Integration
Include where relevant:
- Pain points specific to high-achieving professionals
- Influence principles: authority, reciprocity, scarcity, social proof
- Buyer psychology for therapy services
- Trust-building for regulated services

### 5. Output Requirements
- Specify exact format (table, ranked list, step-by-step plan, etc.)
- Request impact/effort rankings
- Ask for specific examples and tools
- Request "What am I missing?" analysis
- Include compliance requirements (CRPO/PHIPA) if creating client-facing content

### 6. Make It Actionable
- Avoid vague advice
- Request specific numbers, tools, platforms
- Ask for prioritized action items
- Include implementation considerations

## Example Structure:

```
**You're a [specific expert role] specialized in [relevant domain].**

**Context:**
[Relevant business details for this specific request]

**My Request:**
[User's specific request]

**Strategic Analysis Needed:**

1. [Specific question #1 tailored to request]
2. [Specific question #2 tailored to request]
...

**Deliverables:**
- [Specific output #1]
- [Specific output #2]
- Format as: [specific structure]
- Rank all recommendations by Impact (H/M/L) and Effort (H/M/L)

**Critical:**
- [Any compliance or special requirements]
- Focus on [what matters most for this request]
```

## Now Generate:

Create a complete, professional, strategically-sound prompt for: **"{user_request}"**

The prompt should be:
- ✅ Highly specific to this request (not generic)
- ✅ Strategically sophisticated
- ✅ Actionable and practical
- ✅ Compliant with CRPO/PHIPA where relevant
- ✅ Focused on moving the business forward

Generate the full prompt now:
"""

def print_color(text, color_code):
    """Print colored text"""
    colors = {
        'blue': '\033[0;34m',
        'green': '\033[0;32m',
        'yellow': '\033[1;33m',
        'red': '\033[0;31m',
        'reset': '\033[0m'
    }
    print(f"{colors.get(color_code, '')}{text}{colors['reset']}")

def copy_to_clipboard(text):
    """Copy text to macOS clipboard"""
    try:
        process = subprocess.Popen(['pbcopy'], stdin=subprocess.PIPE)
        process.communicate(text.encode('utf-8'))
        return True
    except:
        return False

def generate_prompt_with_claude(user_request):
    """
    Generate custom prompt using Claude/Cursor
    This function would integrate with MCP or Claude API
    """
    
    meta_prompt = META_PROMPT_TEMPLATE.format(
        user_request=user_request,
        business_context=BUSINESS_CONTEXT
    )
    
    print_color("\n" + "="*70, 'blue')
    print_color("🤖 CUSTOM PROMPT GENERATOR", 'blue')
    print_color("="*70 + "\n", 'blue')
    
    print_color(f"Request: {user_request}\n", 'yellow')
    
    # For now, output the meta-prompt that user can paste into Claude/Perplexity
    print_color("="*70, 'green')
    print_color("📋 PASTE THIS INTO PERPLEXITY/CLAUDE:", 'green')
    print_color("="*70 + "\n", 'green')
    
    print(meta_prompt)
    
    print_color("\n" + "="*70, 'green')
    
    # Copy to clipboard
    if copy_to_clipboard(meta_prompt):
        print_color("✓ Meta-prompt copied to clipboard!", 'green')
    
    print_color("\n💡 Next Steps:", 'blue')
    print_color("1. Paste into Perplexity or Claude (already in clipboard)", 'reset')
    print_color("2. AI will generate your custom prompt", 'reset')
    print_color("3. Use that generated prompt for your actual task\n", 'reset')
    
    return meta_prompt

def main():
    if len(sys.argv) < 2:
        # Interactive mode
        print_color("="*70, 'blue')
        print_color("🚀 Next Step Therapy - Custom Prompt Generator", 'blue')
        print_color("="*70 + "\n", 'blue')
        
        print_color("What do you need a prompt for?\n", 'yellow')
        print("Examples:")
        print("  • Brand name ideas for therapy platform")
        print("  • Landing page optimization for anxiety therapy")
        print("  • Email sequence for new leads")
        print("  • Content strategy for SEO")
        print("  • Google Ads campaign structure\n")
        
        user_request = input("Your request: ").strip()
        
        if not user_request:
            print_color("No input provided. Exiting.", 'yellow')
            sys.exit(1)
    else:
        # Direct mode
        user_request = ' '.join(sys.argv[1:])
    
    generate_prompt_with_claude(user_request)

if __name__ == "__main__":
    main()

