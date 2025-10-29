#!/bin/bash

# Phase 1: Fix Canonical Tags - Manus Recovery Roadmap
# Date: October 29, 2025
# Goal: Update ALL canonical tags to include .html extension

echo "=== PHASE 1: CANONICAL TAG FIX ==="
echo "Starting canonical tag audit and fix..."
echo ""

# Create backup directory
BACKUP_DIR="canonical_fix_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "✅ Created backup directory: $BACKUP_DIR"
echo ""

# Find all HTML files (excluding backups, node_modules, .git)
HTML_FILES=$(find . -name "*.html" -type f ! -path "*/node_modules/*" ! -path "*/.git/*" ! -name "*BACKUP*" ! -name "*backup*" ! -name "*OLD*")

TOTAL_FILES=$(echo "$HTML_FILES" | wc -l | tr -d ' ')
FIXED_COUNT=0
ALREADY_CORRECT=0

echo "📊 Found $TOTAL_FILES HTML files to check"
echo ""

# Check each file
while IFS= read -r file; do
    # Skip if file doesn't have canonical tag
    if ! grep -q 'rel="canonical"' "$file"; then
        continue
    fi

    # Extract current canonical URL
    CURRENT_CANONICAL=$(grep -o 'href="https://nextsteptherapy.ca/[^"]*"' "$file" | grep 'canonical' -B1 | tail -1 | sed 's/href="//;s/"//')

    # Get filename without path
    FILENAME=$(basename "$file")

    # Determine what canonical SHOULD be
    if [ "$FILENAME" = "index.html" ]; then
        CORRECT_CANONICAL="https://nextsteptherapy.ca/"
    else
        # Remove .html from filename, then add it back (in case file is like "page.html")
        PAGE_NAME=$(basename "$file" .html)
        CORRECT_CANONICAL="https://nextsteptherapy.ca/${PAGE_NAME}.html"
    fi

    # Check if canonical is already correct
    if [ "$CURRENT_CANONICAL" = "$CORRECT_CANONICAL" ]; then
        ((ALREADY_CORRECT++))
        echo "✅ CORRECT: $FILENAME → $CORRECT_CANONICAL"
        continue
    fi

    # Fix needed!
    echo "🔧 FIXING: $FILENAME"
    echo "   OLD: $CURRENT_CANONICAL"
    echo "   NEW: $CORRECT_CANONICAL"

    # Backup original file
    cp "$file" "$BACKUP_DIR/"

    # Fix the canonical tag
    # This handles both self-closing and non-self-closing link tags
    sed -i '' "s|<link rel=\"canonical\" href=\"$CURRENT_CANONICAL\">|<link rel=\"canonical\" href=\"$CORRECT_CANONICAL\">|g" "$file"
    sed -i '' "s|<link rel=\"canonical\" href=\"$CURRENT_CANONICAL\" />|<link rel=\"canonical\" href=\"$CORRECT_CANONICAL\">|g" "$file"

    ((FIXED_COUNT++))
    echo ""

done <<< "$HTML_FILES"

echo ""
echo "=== SUMMARY ==="
echo "✅ Already correct: $ALREADY_CORRECT files"
echo "🔧 Fixed: $FIXED_COUNT files"
echo "📊 Total checked: $TOTAL_FILES files"
echo ""
echo "💾 Backups saved to: $BACKUP_DIR"
echo ""

# List the specific files that were fixed
if [ $FIXED_COUNT -gt 0 ]; then
    echo "=== FILES THAT WERE FIXED ==="
    ls -1 "$BACKUP_DIR" | head -20
    echo ""
fi

echo "=== NEXT STEPS (per Manus Phase 1) ==="
echo "1. ✅ Canonical tags updated"
echo "2. ⏳ Verify fix on 15-20 sample URLs using GSC URL Inspection Tool"
echo "3. ⏳ Commit changes to git"
echo "4. ⏳ Deploy to production (Vercel)"
echo "5. ⏳ Begin 30-day stability period (NO MORE CHANGES)"
echo ""
echo "After 30 days (Nov 29):"
echo "- Resubmit sitemap in GSC"
echo "- Request re-indexing for top 20 priority pages"
echo "- Implement CTR fixes on 5 test pages"
echo ""
echo "Expected recovery timeline: 4-6 weeks from today"
echo "Expected traffic: Return to 2-6 clicks/day by mid-November"
