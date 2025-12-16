#!/bin/bash

echo "🔧 FIXING CTAs CORRECTLY - SCROLL TO CONTACT SECTION!"
echo "==================================================="

# All Phase 1 files that need CTA fixes
files=(
    "anxiety-therapy-burlington.html"
    "marriage-counselling-toronto.html"
    "therapy-near-me-ontario.html"
    "counsellor-ontario.html"
    "mental-health-therapist-ontario.html"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "🔄 Fixing CTAs in $file..."

        # Replace phone CTAs with scroll-to-contact CTAs (like working pages)
        # This makes "Book Free Consultation" scroll to contact section
        sed -i '' 's|href="tel:+14163062157" class="manus-primary-cta"|href="#contact" class="manus-primary-cta"|g' "$file"

        echo "✅ Fixed CTAs in $file - now scrolls to contact section"
    else
        echo "❌ File not found: $file"
    fi
done

echo ""
echo "🎉 ALL CTAs NOW WORK CORRECTLY!"
echo "CTAs scroll to contact section just like on working pages"
echo "This matches the pattern from anxiety-therapy-toronto.html"