#!/bin/bash

# Script to implement precise dual CTA strategy
echo "Implementing precise dual CTA strategy..."

# Function to fix dual CTAs in a file
fix_dual_ctas() {
    local file="$1"
    local contact_path="$2"
    
    # Check if file contains the problematic pattern
    if grep -q 'btn-primary">Call (416) 306-2157</a>' "$file" && grep -q 'btn-secondary">(416) 306-2157</a>' "$file"; then
        echo "Fixing dual CTAs: $file"
        
        # Use Python for more precise replacement
        python3 << EOF
import re

with open('$file', 'r') as f:
    content = f.read()

# Pattern to match the dual phone CTA structure
pattern = r'(<a href="tel:\+14163062157" class="btn btn-primary">)Call \(416\) 306-2157(</a>\s*<a href="tel:\+14163062157" class="btn btn-secondary">)\(416\) 306-2157(</a>)'

# Replacement with dual CTA strategy
replacement = r'\1Call or Text (416) 306-2157\2Get Help Today\3'

# Apply the replacement but change the href of second button
content = re.sub(pattern, replacement, content)

# Now fix the second button's href to point to contact form
content = re.sub(
    r'(<a href="tel:\+14163062157" class="btn btn-secondary">Get Help Today</a>)',
    r'<a href="' + '$contact_path' + r'" class="btn btn-secondary">Get Help Today</a>',
    content
)

with open('$file', 'w') as f:
    f.write(content)
EOF
        echo "✓ Fixed dual CTAs: $file"
    fi
}

# Process service pages (one level up to index.html)
for file in /private/tmp/NextStepTherapySite-v2/services/*.html; do
    if [ -f "$file" ]; then
        fix_dual_ctas "$file" "../index.html#contact"
    fi
done

# Process SEO pages (two levels up to index.html)
for file in /private/tmp/NextStepTherapySite-v2/seo/*.html; do
    if [ -f "$file" ]; then
        fix_dual_ctas "$file" "../../index.html#contact"
    fi
done

# Process root level pages (same level as index.html)
for file in /private/tmp/NextStepTherapySite-v2/*.html; do
    if [ -f "$file" ] && [ "$(basename "$file")" != "index.html" ]; then
        fix_dual_ctas "$file" "index.html#contact"
    fi
done

echo "Precise dual CTA strategy implementation complete!"
echo "All pages now have: Call/Text + Contact Form CTAs"