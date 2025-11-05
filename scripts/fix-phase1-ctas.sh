#!/bin/bash

echo "🔧 Fixing Phase 1 CTA links..."

# Phase 1 files that need fixing
files=(
    "anxiety-therapy-burlington.html"
    "marriage-counselling-toronto.html"
    "therapy-near-me-ontario.html"
    "counsellor-ontario.html"
    "mental-health-therapist-ontario.html"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing $file..."

        # Fix the main CTA links - replace /#contact with #contact
        sed -i '' 's|href="/#contact"|href="#contact"|g' "$file"

        echo "✅ Fixed $file"
    else
        echo "❌ File not found: $file"
    fi
done

echo ""
echo "🎉 Phase 1 CTA links fixed!"
echo "Checking results..."

# Verify the fixes
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        count=$(grep -c 'href="#contact"' "$file")
        echo "✓ $file now has $count correct #contact links"
    fi
done