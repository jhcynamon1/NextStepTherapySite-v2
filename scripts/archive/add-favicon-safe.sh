#!/bin/bash

# Safely add favicon to important HTML files
echo "🔧 Adding favicon to key pages..."

# List of important files to fix (excluding already working ones)
FILES=(
    "mens-mental-health.html"
    "anxiety-therapy-toronto.html"
    "toronto-anxiety-therapy.html"
    "anger-management-kitchener.html"
    "grief-counselling-toronto.html"
    "faq.html"
    "faq-ontario-therapy.html"
    "virtual-therapy-ontario.html"
    "depression-therapy-ottawa.html"
    "workplace-stress-counselling-hamilton.html"
    "perfectionism-and-burnout-therapy-toronto.html"
    "therapist-toronto-depression.html"
    "teen-eating-disorder-help.html"
    "homesick-university.html"
    "child-anxious-about-university.html"
    "first-year-university-anxiety.html"
    "sunday-night-anxiety.html"
)

FAVICON_LINES='    <link rel="icon" type="image/png" sizes="32x32" href="images/asset104.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/asset104.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/asset104-180.png">'

fixed=0

for file in "${FILES[@]}"; do
    if [[ -f "$file" ]]; then
        # Check if file already has favicon
        if grep -q 'rel="icon"' "$file"; then
            echo "✓ $file already has favicon"
        else
            echo "🔧 Adding favicon to: $file"

            # Create backup
            cp "$file" "$file.backup"

            # Add favicon after charset meta tag using Python for safety
            python3 -c "
import sys
with open('$file', 'r') as f:
    content = f.read()

# Find the position after charset meta tag
import re
pattern = r'(<meta charset=\"[^\"]*\"[^>]*>)'
match = re.search(pattern, content)

if match:
    insert_pos = match.end()
    new_content = content[:insert_pos] + '\n    <!-- Favicon -->\n$FAVICON_LINES\n' + content[insert_pos:]

    with open('$file', 'w') as f:
        f.write(new_content)
    print(f'Added favicon to $file')
else:
    print(f'Could not find charset meta tag in $file')
"
            fixed=$((fixed + 1))
        fi
    else
        echo "⚠️  File not found: $file"
    fi
done

echo "✅ Favicon fix complete!"
echo "🔧 Fixed: $fixed files"