#!/bin/bash

echo "🔧 FIXING CTAs TO WORK PROPERLY - DIRECT PHONE CALLS!"
echo "=================================================="

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

        # Replace all main CTA buttons with direct phone calls
        # This makes "Book Free Consultation" actually functional
        sed -i '' 's|href="#contact" class="manus-primary-cta"|href="tel:+14163062157" class="manus-primary-cta"|g' "$file"

        echo "✅ Fixed CTAs in $file - now calls phone directly"
    else
        echo "❌ File not found: $file"
    fi
done

echo ""
echo "🎉 ALL CTAs NOW WORK PROPERLY!"
echo "When users click 'Book Free Consultation' it calls the phone directly"
echo "This is much better UX than just scrolling to contact section"