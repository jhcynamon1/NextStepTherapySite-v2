#!/usr/bin/env python3
"""
Add booking_click tracking to pages that have GA4 but no booking tracking.
"""
import os
import re
import subprocess

# The booking tracking code to add
BOOKING_TRACKING = '''
            document.querySelectorAll('a[href*="janeapp.com"]').forEach(link => {
                link.addEventListener('click', function() {
                    gtag('event', 'booking_click', {
                        'event_category': 'conversion',
                        'event_label': 'jane_app_booking',
                        'value': 175,
                        'currency': 'CAD'
                    });
                });
            });'''

def get_pages_needing_booking_tracking():
    """Get pages with GA4 and Jane links but no booking_click."""
    ga4_pages = set(subprocess.run(
        ['grep', '-l', 'G-J8H4YBGSHR'] + [f for f in os.listdir('.') if f.endswith('.html')],
        capture_output=True, text=True
    ).stdout.strip().split('\n'))

    tracking_pages = set(subprocess.run(
        ['grep', '-l', 'booking_click'] + [f for f in os.listdir('.') if f.endswith('.html')],
        capture_output=True, text=True
    ).stdout.strip().split('\n'))

    jane_pages = set(subprocess.run(
        ['grep', '-l', 'janeapp.com'] + [f for f in os.listdir('.') if f.endswith('.html')],
        capture_output=True, text=True
    ).stdout.strip().split('\n'))

    return sorted(ga4_pages & jane_pages - tracking_pages)

def add_booking_tracking(filepath):
    """Add booking_click tracking after phone_call tracking."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Pattern 1: After phone_call tracking block (with form tracking after)
    pattern1 = r"(document\.querySelectorAll\('a\[href\^=\"tel:\"\]'\)\.forEach\(link => \{[^}]+\}[^}]+\}\);[^}]+\}\);)"

    # Pattern 2: After phone_call tracking block (end of DOMContentLoaded)
    pattern2 = r"(document\.querySelectorAll\('a\[href\^=\"tel:\"\]'\)\.forEach\(link => \{[^}]+\}[^}]+\}\);[^}]+\}\);)\s*(\n\s*\}\);)"

    # Try pattern 1 - insert after phone tracking, before form tracking
    if 'generate_lead' in content:
        # Has form tracking - insert between phone and form
        match = re.search(r"(\s+document\.querySelectorAll\('a\[href\^\=\"tel:\"\]'\)\.forEach[^}]+\}[^}]+\}\);[^}]+\}\);)", content)
        if match:
            insert_point = match.end()
            new_content = content[:insert_point] + BOOKING_TRACKING + content[insert_point:]
            with open(filepath, 'w') as f:
                f.write(new_content)
            return True

    # Try simpler pattern - just find the phone tracking and add after
    phone_pattern = r"(document\.querySelectorAll\('a\[href\^=\"tel:\"\]'\)\.forEach\(link => \{\s*link\.addEventListener\('click', function\(\) \{\s*gtag\('event', 'phone_call'[^}]+\}[^}]+\}\);[^}]+\}\);)"

    match = re.search(phone_pattern, content, re.DOTALL)
    if match:
        insert_point = match.end()
        new_content = content[:insert_point] + BOOKING_TRACKING + content[insert_point:]
        with open(filepath, 'w') as f:
            f.write(new_content)
        return True

    return False

if __name__ == '__main__':
    os.chdir('/Users/jessecynamon/NextStepTherapy')

    pages = get_pages_needing_booking_tracking()
    print(f"Found {len(pages)} pages needing booking_click tracking\n")

    success = 0
    failed = []

    for page in pages:
        if page:
            if add_booking_tracking(page):
                print(f"  ✓ {page}")
                success += 1
            else:
                print(f"  ✗ {page}")
                failed.append(page)

    print(f"\nSuccess: {success}/{len(pages)}")
    if failed:
        print(f"Failed: {failed}")
