#!/usr/bin/env python3
"""
Add CRPO registry link to all CRPO #10979 mentions.
Skips JSON-LD schema blocks and already-linked instances.
"""

import os
import re
from pathlib import Path

CRPO_URL = "https://my.crpo.ca/Portal/Content/Public-Register/Public-Register-Profile.aspx?ID=21403&ck=CA559D8F-6580-4B33-843F-B93695B435D3"

def process_file(filepath):
    """Process a single HTML file to add CRPO links."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Split content into JSON-LD blocks and non-JSON-LD sections
    # We want to preserve JSON-LD blocks unchanged

    # Pattern to match script tags with JSON-LD
    json_ld_pattern = r'(<script[^>]*type=["\']application/ld\+json["\'][^>]*>)(.*?)(</script>)'

    # Store JSON-LD blocks with placeholders
    json_ld_blocks = []
    def store_json_ld(match):
        placeholder = f"__JSON_LD_BLOCK_{len(json_ld_blocks)}__"
        json_ld_blocks.append(match.group(0))
        return placeholder

    # Replace JSON-LD blocks with placeholders
    content = re.sub(json_ld_pattern, store_json_ld, content, flags=re.DOTALL | re.IGNORECASE)

    # Now process CRPO mentions in the remaining content
    # Skip if already wrapped in <a> tag

    # Pattern for CRPO #10979 that's NOT already linked
    # We need to handle various contexts:
    # 1. Inside a span: >CRPO #10979<
    # 2. With parentheses: (CRPO #10979)
    # 3. Plain text: CRPO #10979.
    # 4. Bold: <strong>CRPO #10979</strong>

    # First, check if there are any CRPO mentions to process
    if 'CRPO #10979' not in content:
        return False  # No changes needed

    # Check if all instances are already linked
    if 'href="' + CRPO_URL[:50] in content:
        # Might already be processed
        pass

    # Replace CRPO #10979 with linked version, being careful about context
    # We'll look for the pattern and check it's not already in an <a> tag

    def replace_crpo(match):
        full_match = match.group(0)
        before = match.group(1) if match.lastindex >= 1 else ""
        crpo_text = match.group(2) if match.lastindex >= 2 else match.group(0)
        after = match.group(3) if match.lastindex >= 3 else ""

        # Check if already linked (look backwards for <a )
        start_pos = match.start()
        check_before = content[max(0, start_pos-100):start_pos]
        if '<a ' in check_before and '</a>' not in check_before:
            return full_match  # Already inside an anchor tag

        # Create the linked version
        linked = f'<a href="{CRPO_URL}" target="_blank" rel="noopener" class="hover:underline">CRPO #10979</a>'

        return before + linked + after

    # Pattern to match CRPO #10979 with surrounding context
    # Capture groups: (before)(CRPO #10979)(after)
    patterns = [
        # Inside span tags - replace the text content
        (r'(>)(CRPO #10979)(</span>)', r'\1<a href="' + CRPO_URL + r'" target="_blank" rel="noopener" class="hover:underline">CRPO #10979</a>\3'),
        # In parentheses - maintain parens
        (r'(\()(CRPO #10979)(\))', r'\1<a href="' + CRPO_URL + r'" target="_blank" rel="noopener">CRPO #10979</a>\3'),
        # With period after
        (r'([ >])(CRPO #10979)(\.)', r'\1<a href="' + CRPO_URL + r'" target="_blank" rel="noopener">CRPO #10979</a>\3'),
        # In strong tags
        (r'(<strong>)(CRPO #10979)(</strong>)', r'\1<a href="' + CRPO_URL + r'" target="_blank" rel="noopener">CRPO #10979</a>\3'),
        # With pipe after (footer style)
        (r'(>)(CRPO #10979)( \|)', r'\1<a href="' + CRPO_URL + r'" target="_blank" rel="noopener" class="hover:underline">CRPO #10979</a>\3'),
        # Generic fallback - any remaining instances
        (r'(?<!["\'>])(CRPO #10979)(?!["\'])', r'<a href="' + CRPO_URL + r'" target="_blank" rel="noopener">CRPO #10979</a>'),
    ]

    for pattern, replacement in patterns:
        # Only apply if not already linked
        if 'CRPO #10979</a>' not in content:
            content = re.sub(pattern, replacement, content)
        else:
            # Be more careful - only replace non-linked instances
            def careful_replace(m):
                # Check if this specific instance is already linked
                start = m.start()
                end = m.end()
                # Look for </a> shortly after this match
                after_text = content[end:end+10]
                if '</a>' in after_text or 'href=' in content[max(0,start-50):start]:
                    return m.group(0)
                return m.expand(replacement)
            content = re.sub(pattern, careful_replace, content)

    # Restore JSON-LD blocks
    for i, block in enumerate(json_ld_blocks):
        content = content.replace(f"__JSON_LD_BLOCK_{i}__", block)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    root_dir = Path('/Users/jessecynamon/NextStepTherapy')

    # Directories to skip
    skip_dirs = {'z-archive', 'node_modules', '.git', 'public', 'templates'}

    # Files to skip (test/backup files)
    skip_files = {'voice-phrase-test.html', 'voice-blind-test.html', 'index-backup-20241223.html'}

    modified_count = 0
    checked_count = 0

    for html_file in root_dir.rglob('*.html'):
        # Skip certain directories
        if any(skip_dir in html_file.parts for skip_dir in skip_dirs):
            continue

        # Skip certain files
        if html_file.name in skip_files:
            continue

        checked_count += 1
        if process_file(html_file):
            modified_count += 1
            print(f"✓ Modified: {html_file.relative_to(root_dir)}")

    print(f"\nDone! Modified {modified_count} of {checked_count} files checked.")

if __name__ == "__main__":
    main()
