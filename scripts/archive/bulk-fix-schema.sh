#!/bin/bash

# Bulk fix schema @type from Psychologist to Person + Psychotherapist
# Run from project root

echo "🔧 Starting bulk schema fix..."
echo ""

FILES_FIXED=0

# Find all production HTML files with incorrect schema (excluding backups)
find . -name "*.html" \
  -not -path "./canonical_fix_backup_20251029_105756/*" \
  -not -path "./backups/*" \
  -not -path "./dev/*" \
  -not -path "./nextstep-therapy-astro/*" \
  -not -path "./docs/*" \
  -not -path "./templates/*" \
  -not -name ".*" \
  -type f | while read file; do
  
  # Check if file contains incorrect schema
  if grep -q '"@type": "Psychologist"' "$file"; then
    echo "Fixing: $file"
    
    # Use sed to replace the incorrect schema
    # This handles the most common pattern
    sed -i.bak 's/"@type": "Psychologist"/"@type": "Person",\n        "additionalType": "Psychotherapist"/g' "$file"
    
    # Remove backup file
    rm "${file}.bak"
    
    FILES_FIXED=$((FILES_FIXED + 1))
  fi
done

echo ""
echo "✅ Fixed $FILES_FIXED files"
echo ""
echo "🧪 Validating a sample file..."
head -100 ./mental-health-therapist-ontario.html | grep -A 3 '"@type": "Person"' | head -5

echo ""
echo "✨ Bulk schema fix complete!"

