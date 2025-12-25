#!/usr/bin/env python3
"""
Upgrade simple GA4 configs to include full conversion tracking.
"""
import os
import re

# Pages with simple GA4 that need upgrading
PAGES = [
    'booking-success.html', 'counselling-services.html', 'crisis-resources.html',
    'faq.html', 'first-year-university-anxiety.html', 'how-to-find-therapist-ontario.html',
    'queens-university-student-therapy.html', 'sunday-night-anxiety.html', 'thank-you.html',
    'therapy-brampton-ontario.html', 'therapy-costs-ontario.html', 'therapy-hamilton-ontario.html',
    'toronto-metropolitan-university-student-therapy.html',
    'university-grade-anxiety-when-b-feels-like-failure.html',
    'why-smart-students-fail-university-academic-anxiety.html'
]

# Old simple pattern
OLD_PATTERN = r'''<script async src="https://www\.googletagmanager\.com/gtag/js\?id=G-J8H4YBGSHR"></script>\s*<script>\s*window\.dataLayer = window\.dataLayer \|\| \[\];\s*function gtag\(\)\{dataLayer\.push\(arguments\);\}\s*gtag\('js', new Date\(\)\);\s*gtag\('config', 'G-J8H4YBGSHR'\);\s*</script>'''

# New full tracking block
NEW_TRACKING = '''<!-- Google Analytics 4 + Conversion Tracking -->
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
    </script>'''

def upgrade_ga4(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    if 'booking_click' in content:
        return 'already_done'

    # Try the pattern match
    if re.search(OLD_PATTERN, content):
        new_content = re.sub(OLD_PATTERN, NEW_TRACKING, content)
        with open(filepath, 'w') as f:
            f.write(new_content)
        return 'success'

    return 'failed'

if __name__ == '__main__':
    os.chdir('/Users/jessecynamon/NextStepTherapy')

    success = 0
    failed = []

    for page in PAGES:
        if os.path.exists(page):
            result = upgrade_ga4(page)
            if result == 'success':
                print(f"  ✓ {page}")
                success += 1
            elif result == 'already_done':
                print(f"  ○ {page} (already has tracking)")
            else:
                print(f"  ✗ {page}")
                failed.append(page)

    print(f"\nSuccess: {success}/{len(PAGES)}")
    if failed:
        print(f"Need manual: {failed}")
