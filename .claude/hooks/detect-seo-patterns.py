#!/usr/bin/env python3
"""
Detect SEO-related patterns in user input and inject context
to encourage proactive skill usage.

This hook runs on UserPromptSubmit and adds skill recommendations
when it detects relevant patterns in the user's message.
"""
import json
import sys
import re


def detect_patterns(prompt: str) -> list:
    """Detect SEO patterns and return relevant skill hints."""
    prompt_lower = prompt.lower()

    patterns = {
        "gsc_data": {
            "regex": r"clicks|impressions|ctr|avg.position|queries|search appearance|pages report",
            "hint": "GSC data detected - use keyword-research skill for priority scoring and quick wins"
        },
        "ahrefs_data": {
            "regex": r"ahrefs|keyword difficulty|search volume|organic keywords|parent topic|kd\s*\d",
            "hint": "Ahrefs data detected - use keyword-research skill for analysis"
        },
        "competitor_urls": {
            "regex": r"competitor|ranking|page 2|page 3|position \d|why.*(not|isn't).*ranking",
            "hint": "Competitor/ranking context - use seo-competitor-intelligence skill"
        },
        "content_creation": {
            "regex": r"create.*page|write.*content|new.*page|add.*page|build.*page|expand.*content",
            "hint": "Content creation - use therapy-content-generator skill for YMYL-compliant content"
        },
        "meta_title": {
            "regex": r"meta.*title|title.*tag|serp|truncat|60.char|character.*limit",
            "hint": "Title optimization - use meta-title-optimizer skill for 5 scored variations"
        },
        "cta_work": {
            "regex": r"button|cta|call.to.action|conversion|booking|hero.*section|more.*bookings",
            "hint": "CTA/conversion work - use conversion-optimizer skill for CRPO-compliant copy"
        },
        "faq_work": {
            "regex": r"faq|frequently.asked|schema.*markup|rich.snippet|structured.data",
            "hint": "FAQ/schema work - use faq-schema-generator skill for valid JSON-LD"
        },
        "design_work": {
            "regex": r"css|styling|layout|responsive|mobile|design|visual|spacing|color",
            "hint": "Design/UI work - use frontend-design skill for production-grade code"
        }
    }

    detected = []
    for pattern_name, pattern_info in patterns.items():
        if re.search(pattern_info["regex"], prompt_lower):
            detected.append(pattern_info["hint"])

    return detected


def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(0)

    prompt = input_data.get("prompt", "")
    hints = detect_patterns(prompt)

    if hints:
        # Remove duplicates while preserving order
        unique_hints = list(dict.fromkeys(hints))

        context = "SKILL TRIGGERS DETECTED:\n" + "\n".join(f"  * {h}" for h in unique_hints)
        context += "\n\nRemember: Use these skills proactively without waiting for explicit requests."

        output = {
            "hookSpecificOutput": {
                "hookEventName": "UserPromptSubmit",
                "additionalContext": context
            }
        }
        print(json.dumps(output))

    sys.exit(0)


if __name__ == "__main__":
    main()
