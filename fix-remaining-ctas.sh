#!/bin/bash

echo "Fixing CTAs to redirect to homepage contact form..."

# Phase 1 pages that need fixing
phase1_pages=(
    "marriage-counselling-toronto.html"
    "therapy-near-me-ontario.html"
    "counsellor-ontario.html"
    "mental-health-therapist-ontario.html"
)

# Phase 3 bonus pages that need fixing
phase3_pages=(
    "therapy-kingston-ontario.html"
    "therapy-windsor-ontario.html"
)

# Fix Phase 1 pages
for file in "${phase1_pages[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing CTAs in $file..."
        # Replace href="#contact" with href="/#contact" for CTA buttons
        sed -i '' 's|href="#contact" class="manus-primary-cta"|href="/#contact" class="manus-primary-cta"|g' "$file"
        echo "✅ Fixed: $file"
    else
        echo "❌ File not found: $file"
    fi
done

# Fix Phase 3 pages
for file in "${phase3_pages[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing CTAs in $file..."
        # Replace href="#contact" with href="/#contact" for CTA buttons
        sed -i '' 's|href="#contact" class="manus-primary-cta"|href="/#contact" class="manus-primary-cta"|g' "$file"
        echo "✅ Fixed: $file"
    else
        echo "❌ File not found: $file"
    fi
done

echo "All CTAs fixed! Testing..."

# Test that fixes worked
echo -e "\n--- Testing Phase 1 Pages ---"
for file in "${phase1_pages[@]}"; do
    if [ -f "$file" ]; then
        count=$(grep -c 'href="/#contact" class="manus-primary-cta"' "$file")
        echo "$file: $count CTAs now redirect to homepage"
    fi
done

echo -e "\n--- Testing Phase 3 Pages ---"
for file in "${phase3_pages[@]}"; do
    if [ -f "$file" ]; then
        count=$(grep -c 'href="/#contact" class="manus-primary-cta"' "$file")
        echo "$file: $count CTAs now redirect to homepage"
    fi
done

echo -e "\n✅ Script complete!"