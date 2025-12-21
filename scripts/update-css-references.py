#!/usr/bin/env python3
"""
Update all HTML files to use the unified CSS file.
Replaces references to shared.min.css, v4-design-system.css, and design-fixes.css
with a single reference to nextstep-unified.css
"""

import os
import re
from pathlib import Path

def update_html_file(filepath):
    """Update CSS references in a single HTML file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Pattern to match the three CSS file references (with various path formats)
    # Handle both absolute paths (/shared.min.css) and relative (shared.min.css, ../shared.min.css)

    # Remove shared.min.css reference
    content = re.sub(
        r'\s*<link[^>]*href=["\'][^"\']*shared\.min\.css[^"\']*["\'][^>]*>\s*\n?',
        '',
        content
    )

    # Remove v4-design-system.css reference
    content = re.sub(
        r'\s*<link[^>]*href=["\'][^"\']*v4-design-system\.css[^"\']*["\'][^>]*>\s*\n?',
        '',
        content
    )

    # Replace design-fixes.css reference with unified CSS
    # Keep the same path structure (absolute vs relative)

    # For absolute paths (/css/design-fixes.css)
    content = re.sub(
        r'<link[^>]*href=["\']/css/design-fixes\.css[^"\']*["\'][^>]*>',
        '<link rel="stylesheet" href="/css/nextstep-unified.css?v=20251221">',
        content
    )

    # For relative paths from root (css/design-fixes.css) - used by index.html
    content = re.sub(
        r'<link[^>]*href=["\']css/design-fixes\.css[^"\']*["\'][^>]*>',
        '<link rel="stylesheet" href="css/nextstep-unified.css?v=20251221">',
        content
    )

    # For relative paths with ../ (../../css/design-fixes.css) - used by nested pages
    content = re.sub(
        r'<link[^>]*href=["\'](\.\./)+css/design-fixes\.css[^"\']*["\'][^>]*>',
        lambda m: f'<link rel="stylesheet" href="{m.group(1)}css/nextstep-unified.css?v=20251221">',
        content
    )

    # Clean up any double newlines that might have been created
    content = re.sub(r'\n{3,}', '\n\n', content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    """Process all HTML files."""
    root_dir = Path('.')
    updated_count = 0
    skipped_count = 0

    # Find all HTML files, excluding archives and test files
    for html_file in root_dir.rglob('*.html'):
        # Skip archive directories and test files
        if 'z-archive' in str(html_file) or 'node_modules' in str(html_file):
            continue
        if 'test-unified-css.html' in str(html_file):
            continue

        if update_html_file(html_file):
            print(f"Updated: {html_file}")
            updated_count += 1
        else:
            skipped_count += 1

    print(f"\nSummary:")
    print(f"  Updated: {updated_count} files")
    print(f"  Unchanged: {skipped_count} files")

if __name__ == '__main__':
    main()
