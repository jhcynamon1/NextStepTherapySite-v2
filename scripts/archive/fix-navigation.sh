#!/bin/bash

echo "🔧 URGENT FIX: Navigation and CTA Links"
echo "========================================"

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
        echo "🔄 Fixing $file..."

        # Fix NAVIGATION links to point to homepage sections
        sed -i '' 's|href="/#approach"|href="/#approach"|g' "$file"
        sed -i '' 's|href="/#specializations"|href="/#specializations"|g' "$file"
        sed -i '' 's|href="#contact"|href="/#contact"|g' "$file" # Navigation should go to homepage

        # But KEEP main CTA buttons pointing to same page contact section
        # Fix all main CTAs to point to same-page contact form
        sed -i '' 's|<a href="/#contact" class="manus-primary-cta"|<a href="#contact" class="manus-primary-cta"|g' "$file"

        echo "✅ Fixed navigation and CTAs in $file"
    else
        echo "❌ File not found: $file"
    fi
done

echo ""
echo "📋 SUMMARY:"
echo "- Navigation links: Point to homepage (/#approach, /#specializations, /#contact)"
echo "- Primary CTAs: Point to same-page contact form (#contact)"
echo ""
echo "🧪 Test by clicking:"
echo "1. Navigation 'Contact' should go to homepage contact"
echo "2. 'Book Free Consultation' buttons should scroll to page contact"