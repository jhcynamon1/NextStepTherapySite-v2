#!/usr/bin/env python3
"""
Meta Title Validator
Checks title for character count, keyword placement, and CRPO compliance
"""

import re
import yaml
from pathlib import Path

# Load CRPO compliance rules
SCRIPT_DIR = Path(__file__).parent
DATA_DIR = SCRIPT_DIR.parent / "data"

with open(DATA_DIR / "crpo_compliance_rules.yaml") as f:
    CRPO_RULES = yaml.safe_load(f)

class TitleValidator:
    def __init__(self):
        self.errors = []
        self.warnings = []
        self.score = 0

    def validate(self, title, keyword=None):
        """Run all validation checks on a meta title"""
        self.errors = []
        self.warnings = []
        self.score = 0

        # Check character count
        self._check_length(title)

        # Check CRPO compliance
        self._check_crpo_compliance(title)

        # Check keyword placement (if provided)
        if keyword:
            self._check_keyword_placement(title, keyword)

        # Check for common issues
        self._check_common_issues(title)

        return {
            "valid": len(self.errors) == 0,
            "score": self.score,
            "errors": self.errors,
            "warnings": self.warnings,
            "character_count": len(title)
        }

    def _check_length(self, title):
        """Check if title length is within optimal range"""
        length = len(title)

        if length > 60:
            self.errors.append(f"Title is {length} characters (max 60). Will be truncated in SERPs.")
            self.score -= 25
        elif length > 55:
            self.warnings.append(f"Title is {length} characters. May be truncated on mobile.")
            self.score += 15
        elif 50 <= length <= 55:
            self.score += 25  # Optimal length
        elif 45 <= length < 50:
            self.warnings.append(f"Title is {length} characters. Could be slightly longer for more impact.")
            self.score += 20
        else:
            self.warnings.append(f"Title is {length} characters. Consider adding more descriptive content.")
            self.score += 10

    def _check_crpo_compliance(self, title):
        """Check for CRPO compliance violations"""
        title_lower = title.lower()

        # Check for prohibited high-risk keywords
        high_risk = CRPO_RULES["auto_flags"]["high_risk"]["keywords"]
        for keyword in high_risk:
            if keyword in title_lower:
                self.errors.append(
                    f"CRPO VIOLATION: '{keyword}' is prohibited. "
                    f"Claims must be factual and verifiable."
                )
                self.score -= 50

        # Check for medium-risk keywords
        medium_risk = CRPO_RULES["auto_flags"]["medium_risk"]["keywords"]
        for keyword in medium_risk:
            if keyword in title_lower:
                self.warnings.append(
                    f"CAUTION: '{keyword}' requires verification. "
                    f"Ensure claim is factual and provable."
                )
                self.score -= 10

        # Check credential format
        if "crpo" in title_lower:
            # Verify proper format
            if not re.search(r'RP\s*#?\s*\d{5}', title, re.IGNORECASE):
                if not re.search(r'CRPO\s+(Registered|#\d{5})', title, re.IGNORECASE):
                    self.warnings.append(
                        "CRPO credential mentioned but not in standard format. "
                        "Recommended: 'RP #10979' or 'CRPO Registered'"
                    )

    def _check_keyword_placement(self, title, keyword):
        """Check if keyword is front-loaded"""
        title_lower = title.lower()
        keyword_lower = keyword.lower()

        # Check if keyword appears at all
        if keyword_lower not in title_lower:
            self.warnings.append(f"Target keyword '{keyword}' not found in title")
            return

        # Check position
        position = title_lower.find(keyword_lower)

        if position == 0:
            self.score += 25  # Front-loaded
        elif position <= 15:
            self.score += 15  # Early in title
        else:
            self.warnings.append(f"Keyword '{keyword}' appears late in title. Consider front-loading.")
            self.score += 5

    def _check_common_issues(self, title):
        """Check for common SEO title issues"""
        # Check for multiple pipes (formatting)
        pipe_count = title.count('|')
        if pipe_count > 2:
            self.warnings.append(
                f"Title has {pipe_count} separators. Consider simplifying structure."
            )

        # Check for excessive capitalization
        if title.isupper():
            self.warnings.append("Title is all caps. May appear spammy in SERPs.")

        # Check for special characters that may cause issues
        problematic_chars = ['#', '@', '*', '!', '?']
        found_chars = [char for char in problematic_chars if char in title and char not in ['#']]  # Allow # for license numbers
        if found_chars:
            self.warnings.append(
                f"Special characters found: {', '.join(found_chars)}. "
                f"May affect SERP display."
            )

        # Check word count
        word_count = len(title.split())
        if word_count > 10:
            self.warnings.append(f"Title has {word_count} words. Recommended: 6-10 words.")
        elif word_count < 4:
            self.warnings.append(f"Title has only {word_count} words. Consider adding more context.")

def validate_title(title, keyword=None):
    """Main function to validate a title"""
    validator = TitleValidator()
    return validator.validate(title, keyword)

if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: python validate_title.py 'Your Title Here' [optional_keyword]")
        sys.exit(1)

    title = sys.argv[1]
    keyword = sys.argv[2] if len(sys.argv) > 2 else None

    result = validate_title(title, keyword)

    print(f"\n{'='*60}")
    print(f"TITLE VALIDATION RESULTS")
    print(f"{'='*60}")
    print(f"\nTitle: {title}")
    print(f"Length: {result['character_count']} characters")
    print(f"Score: {result['score']}/100")
    print(f"Status: {'✅ VALID' if result['valid'] else '❌ INVALID'}")

    if result['errors']:
        print(f"\n🚫 ERRORS ({len(result['errors'])}):")
        for error in result['errors']:
            print(f"  - {error}")

    if result['warnings']:
        print(f"\n⚠️  WARNINGS ({len(result['warnings'])}):")
        for warning in result['warnings']:
            print(f"  - {warning}")

    if not result['errors'] and not result['warnings']:
        print("\n✅ No issues found!")

    print(f"\n{'='*60}\n")
