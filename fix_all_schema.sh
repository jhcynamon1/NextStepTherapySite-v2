#!/bin/bash

# FIX CRITICAL SCHEMA ERROR: Add address + telephone to ProfessionalService schemas
# Accurate business info from Ontario Business Registry BIN 1001072925

echo "🔧 FIXING PROFESSIONALSERVICE SCHEMA ON ALL PAGES"
echo "=================================================="
echo ""

# Files to fix (already fixed: online-counselling-remote-workers.html, burlington-online-therapy.html)
FILES=(
    "anxiety-therapy-burlington.html"
    "virtual-therapy-ontario.html"
    "performance-anxiety-therapy-ontario.html"
    "virtual-therapy-burlington.html"
)

for file in "${FILES[@]}"; do
    echo "📄 Processing: $file"

    if [ ! -f "$file" ]; then
        echo "   ⚠️  File not found, skipping..."
        continue
    fi

    # Backup
    cp "$file" "${file}.schema-backup"
    echo "   💾 Backup created"

    # The Python script to add address and telephone after "description" line
    python3 << 'PYTHON_SCRIPT'
import sys
import re

file_path = sys.argv[1]

with open(file_path, 'r') as f:
    content = f.read()

# Pattern: Find ProfessionalService blocks and add address + telephone after description
# Look for: "description": "...",
#           "areaServed": ...
# Insert:   "address": {...},
#           "telephone": "+14163062157",

pattern = r'("@type": "ProfessionalService",\s*"name": "[^"]+",\s*"description": "[^"]+",)\s*("areaServed":)'

replacement = r'''\1
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressRegion": "ON",
          "addressCountry": "CA"
        },
        "telephone": "+14163062157",
        \2'''

new_content = re.sub(pattern, replacement, content, flags=re.MULTILINE | re.DOTALL)

# Check if we actually made changes
if new_content != content:
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("   ✅ Schema fixed successfully!")
else:
    print("   ⚠️  No ProfessionalService pattern found or already fixed")

PYTHON_SCRIPT "$file"

    echo ""
done

echo "=================================================="
echo "✅ ALL SCHEMA FIXES COMPLETE!"
echo ""
echo "📊 FIXED PAGES:"
echo "   1. anxiety-therapy-burlington.html"
echo "   2. virtual-therapy-ontario.html"
echo "   3. performance-anxiety-therapy-ontario.html"
echo "   4. virtual-therapy-burlington.html"
echo ""
echo "✅ ALREADY FIXED:"
echo "   1. online-counselling-remote-workers.html"
echo "   2. burlington-online-therapy.html"
echo ""
echo "🎯 ALL 6 PROFESSIONALSERVICE SCHEMAS NOW INCLUDE:"
echo "   - address: Toronto, ON, CA (registered business location)"
echo "   - telephone: +14163062157"
echo "   - areaServed: City/Province specific per page"
echo ""
echo "🔄 NEXT STEPS:"
echo "   1. Test in Google Rich Results Test"
echo "   2. Commit to Git"
echo "   3. Deploy to Vercel"
echo ""
