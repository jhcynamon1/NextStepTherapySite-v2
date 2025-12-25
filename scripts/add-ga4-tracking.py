#!/usr/bin/env python3
"""
Add GA4 + booking click tracking to pages missing it.
"""
import os
import re
import subprocess

# Standard GA4 + Conversion Tracking block
TRACKING_BLOCK = '''
    <!-- Google Analytics 4 + Conversion Tracking -->
    <link rel="preconnect" href="https://www.googletagmanager.com">
    <script>
        window.addEventListener('load', function() {
            var script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-J8H4YBGSHR';
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J8H4YBGSHR', {
                'allow_enhanced_conversions': true,
                'send_page_view': true
            });

            document.querySelectorAll('a[href^="tel:"]').forEach(link => {
                link.addEventListener('click', function() {
                    gtag('event', 'phone_call', {
                        'event_category': 'conversion',
                        'value': 175,
                        'currency': 'CAD'
                    });
                });
            });

            document.querySelectorAll('a[href*="janeapp.com"]').forEach(link => {
                link.addEventListener('click', function() {
                    gtag('event', 'booking_click', {
                        'event_category': 'conversion',
                        'event_label': 'jane_app_booking',
                        'value': 175,
                        'currency': 'CAD'
                    });
                });
            });
        });
    </script>
'''

def get_pages_needing_full_ga4():
    """Get pages with Jane links but no GA4."""
    jane_pages = subprocess.run(
        ['grep', '-l', 'janeapp.com'] + [f for f in os.listdir('.') if f.endswith('.html')],
        capture_output=True, text=True
    ).stdout.strip().split('\n')

    ga4_pages = subprocess.run(
        ['grep', '-l', 'G-J8H4YBGSHR'] + [f for f in os.listdir('.') if f.endswith('.html')],
        capture_output=True, text=True
    ).stdout.strip().split('\n')

    return [p for p in jane_pages if p and p not in ga4_pages]

def get_pages_needing_tracking_only():
    """Get pages with GA4 but no booking_click tracking."""
    ga4_pages = subprocess.run(
        ['grep', '-l', 'G-J8H4YBGSHR'] + [f for f in os.listdir('.') if f.endswith('.html')],
        capture_output=True, text=True
    ).stdout.strip().split('\n')

    tracking_pages = subprocess.run(
        ['grep', '-l', 'booking_click'] + [f for f in os.listdir('.') if f.endswith('.html')],
        capture_output=True, text=True
    ).stdout.strip().split('\n')

    jane_pages = subprocess.run(
        ['grep', '-l', 'janeapp.com'] + [f for f in os.listdir('.') if f.endswith('.html')],
        capture_output=True, text=True
    ).stdout.strip().split('\n')

    # Pages that have GA4 and Jane links, but no booking_click
    return [p for p in ga4_pages if p and p in jane_pages and p not in tracking_pages]

def add_full_ga4(filepath):
    """Add full GA4 + tracking block to a page."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Find insertion point - after apple-touch-icon or after charset
    patterns = [
        (r'(<link rel="apple-touch-icon"[^>]*>)', r'\1' + TRACKING_BLOCK),
        (r'(<link rel="icon"[^>]*>\s*\n\s*<link rel="icon"[^>]*>)', r'\1' + TRACKING_BLOCK),
        (r'(<meta charset="UTF-8">)', r'\1' + TRACKING_BLOCK),
    ]

    for pattern, replacement in patterns:
        if re.search(pattern, content):
            new_content = re.sub(pattern, replacement, content, count=1)
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                return True

    return False

def add_tracking_to_existing_ga4(filepath):
    """Add booking_click tracking to page that already has GA4."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Check if it has the old-style GA4 (without event listeners)
    # Look for gtag('config', 'G-J8H4YBGSHR' and add listeners after

    # Pattern for simple GA4 config without tracking
    old_pattern = r"gtag\('config', 'G-J8H4YBGSHR'[^}]*\}\);\s*\n(\s*)\}\);"

    tracking_listeners = '''gtag('config', 'G-J8H4YBGSHR', {
                'allow_enhanced_conversions': true,
                'send_page_view': true
            });

            document.querySelectorAll('a[href^="tel:"]').forEach(link => {
                link.addEventListener('click', function() {
                    gtag('event', 'phone_call', {
                        'event_category': 'conversion',
                        'value': 175,
                        'currency': 'CAD'
                    });
                });
            });

            document.querySelectorAll('a[href*="janeapp.com"]').forEach(link => {
                link.addEventListener('click', function() {
                    gtag('event', 'booking_click', {
                        'event_category': 'conversion',
                        'event_label': 'jane_app_booking',
                        'value': 175,
                        'currency': 'CAD'
                    });
                });
            });
        });'''

    if re.search(old_pattern, content):
        new_content = re.sub(old_pattern, tracking_listeners, content)
        if new_content != content:
            with open(filepath, 'w') as f:
                f.write(new_content)
            return True

    return False

if __name__ == '__main__':
    os.chdir('/Users/jessecynamon/NextStepTherapy')

    # Part 1: Pages needing full GA4
    print("=" * 50)
    print("PAGES NEEDING FULL GA4 + TRACKING")
    print("=" * 50)

    pages_no_ga4 = get_pages_needing_full_ga4()
    print(f"Found {len(pages_no_ga4)} pages\n")

    success_full = 0
    failed_full = []
    for page in pages_no_ga4:
        if add_full_ga4(page):
            print(f"  ✓ {page}")
            success_full += 1
        else:
            print(f"  ✗ {page} (needs manual review)")
            failed_full.append(page)

    # Part 2: Pages needing tracking only
    print("\n" + "=" * 50)
    print("PAGES WITH GA4 BUT MISSING TRACKING")
    print("=" * 50)

    pages_no_tracking = get_pages_needing_tracking_only()
    print(f"Found {len(pages_no_tracking)} pages\n")

    for page in pages_no_tracking:
        print(f"  - {page} (needs manual update)")

    # Summary
    print("\n" + "=" * 50)
    print("SUMMARY")
    print("=" * 50)
    print(f"Full GA4 added: {success_full}/{len(pages_no_ga4)}")
    print(f"Need manual tracking update: {len(pages_no_tracking)}")
    if failed_full:
        print(f"Failed (need manual): {len(failed_full)}")
