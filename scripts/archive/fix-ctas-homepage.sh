#!/bin/bash

echo "🔧 FIXING CTAs TO REDIRECT TO HOMEPAGE CONTACT!"
echo "================================================"

# All Phase 1 files that need CTA fixes
files=(
    "anxiety-therapy-burlington.html"
    "marriage-counselling-toronto.html"
    "therapy-near-me-ontario.html"
    "counsellor-ontario.html"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "🔄 Fixing CTAs in $file..."

        # Replace all main CTA buttons to redirect to homepage contact
        # "Book Free Consultation" should go to homepage contact form
        sed -i '' 's|href="#contact" class="manus-primary-cta"|href="/#contact" class="manus-primary-cta"|g' "$file"

        echo "✅ Fixed CTAs in $file - now redirects to homepage contact"
    else
        echo "❌ File not found: $file"
    fi
done

echo ""
echo "🎉 ALL CTAs NOW REDIRECT TO HOMEPAGE CONTACT!"
echo "Book Free Consultation buttons now go to homepage contact form"
echo "Secondary contact sections remain on-page for context"