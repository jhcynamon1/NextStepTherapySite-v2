#!/usr/bin/env python3
"""
Fix insurance language across all HTML files.
Removes specific dollar amounts and percentage claims.
"""

import os
import re
from pathlib import Path

def process_file(filepath):
    """Process a single HTML file to fix insurance language."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Patterns to replace
    replacements = [
        # $500-$3,000 patterns
        (r'Coverage typically ranges from \$500-\$3,000 per year\.',
         'Check your benefits to confirm coverage.'),
        (r'Coverage typically ranges from \$500-\$3,000 annually\.',
         'Check your benefits to confirm coverage.'),
        (r'Typical coverage ranges from \$500-\$3,000 per year\.',
         'Check your benefits to confirm coverage.'),
        (r'typical coverage ranging from \$500-\$3,000 per year',
         'coverage varies by plan—check your benefits'),
        (r'Typical coverage: \$500-\$3,000 annually',
         'Check your benefits to confirm coverage'),
        (r'with typical \$500-\$3,000 annual benefits',
         'faster access if your plan covers therapy'),
        (r'at \$500-\$3,000 annually',
         ''),
        (r'cover \$500-\$3,000 per year for therapy',
         'cover therapy services—check your benefits for coverage details'),
        (r', with many plans providing \$1,000-\$3,000 annual coverage for psychotherapy services',
         '—check your benefits to confirm coverage'),

        # 80-100% patterns
        (r'Many professionals find their sessions are 80-100% covered\.',
         'Many professionals have coverage through their benefits.'),
        (r'covers 80-100% of sessions',
         'covers therapy sessions'),
        (r'that covers 80-100% of session costs',
         'that covers therapy sessions'),

        # Clean up any double spaces or awkward constructs
        (r'services at \. Sessions', 'services. Sessions'),
        (r'services at \. I provide', 'services. I provide'),
        (r'\s+\.', '.'),
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
    skip_dirs = {'z-archive', 'node_modules', '.git', 'public', 'templates'}

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
