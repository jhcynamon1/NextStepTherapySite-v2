#!/usr/bin/env python3
"""
Fix remaining insurance percentage claims (50-100%) across all HTML files.
Removes specific percentage claims that can't be verified.
"""

import os
import re
from pathlib import Path

def process_file(filepath):
    """Process a single HTML file to fix insurance percentages."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Patterns to replace - targeting 50-100% claims
    replacements = [
        # "typically covering 50-100% of the session cost depending on your specific plan"
        (r'typically covering 50-100% of the session cost depending on your specific plan',
         'coverage varies by plan'),

        # "covering 50-100% of"
        (r'covering 50-100% of',
         'covering'),

        # ", typically covering 50-100% of the session cost"
        (r', typically covering 50-100% of the session cost',
         ''),

        # "covers 50-100%"
        (r'covers 50-100%',
         'may cover'),

        # "50-100% coverage"
        (r'50-100% coverage',
         'coverage varies'),

        # Generic 50-100% pattern
        (r'50-100%\s+of\s+the\s+session\s+cost',
         'therapy sessions'),

        # Clean up double spaces
        (r'  +', ' '),
    ]

    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    root_dir = Path('/Users/jessecynamon/NextStepTherapy')

    # Directories to skip
    skip_dirs = {'z-archive', 'node_modules', '.git', 'public', 'templates', 'docs'}

    modified_count = 0
    checked_count = 0

    for html_file in root_dir.rglob('*.html'):
        # Skip certain directories
        if any(skip_dir in html_file.parts for skip_dir in skip_dirs):
            continue

        checked_count += 1
        if process_file(html_file):
            modified_count += 1
            print(f"✓ Modified: {html_file.relative_to(root_dir)}")

    print(f"\nDone! Modified {modified_count} of {checked_count} files checked.")

if __name__ == "__main__":
    main()
