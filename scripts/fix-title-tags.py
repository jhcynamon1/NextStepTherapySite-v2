#!/usr/bin/env python3
"""
Fix title tags that accidentally have anchor tags inside them.
Removes <a href="...">CRPO #10979</a> from titles, leaving just "CRPO #10979"
"""

import re
from pathlib import Path

def fix_title(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Pattern to find title tags with anchor tags inside
    # Match: <title>...anything...<a href="...">CRPO #10979</a>...</title>
    pattern = r'(<title>.*?)<a href="[^"]*"[^>]*>CRPO #10979</a>(.*?</title>)'
    replacement = r'\1CRPO #10979\2'

    content = re.sub(pattern, replacement, content, flags=re.DOTALL | re.IGNORECASE)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    root = Path('/Users/jessecynamon/NextStepTherapy')
    skip_dirs = {'z-archive', 'node_modules', '.git', 'public', 'templates'}

    fixed = 0
    for html_file in root.rglob('*.html'):
        if any(d in html_file.parts for d in skip_dirs):
            continue
        if fix_title(html_file):
            fixed += 1
            print(f"✓ Fixed: {html_file.relative_to(root)}")

    print(f"\nFixed {fixed} files")

if __name__ == "__main__":
    main()
