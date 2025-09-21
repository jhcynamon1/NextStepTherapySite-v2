#!/bin/bash

# Fix canonical URLs according to MANUS standards
# Remove www and .html extensions, ensure self-referencing

echo "Fixing canonical URLs according to MANUS standards..."

# Find all HTML files and fix canonical tags
find . -name "*.html" -not -path "./node_modules/*" -not -path "./audits/*" -not -path "./.git/*" | while read file; do
    if [ -f "$file" ]; then
        # Extract filename without path and extension
        basename=$(basename "$file" .html)
        
        # Skip backup files and system files
        if [[ "$basename" == *".backup"* ]] || [[ "$basename" == .* ]]; then
            continue
        fi
        
        echo "Processing: $file"
        
        # Fix canonical URLs - remove www and .html, ensure proper format
        sed -i.bak 's|<link rel="canonical" href="https://www\.nextsteptherapy\.ca/\([^"]*\)\.html">|<link rel="canonical" href="https://nextsteptherapy.ca/\1">|g' "$file"
        sed -i.bak2 's|<link rel="canonical" href="https://www\.nextsteptherapy\.ca/\([^"]*\)">|<link rel="canonical" href="https://nextsteptherapy.ca/\1">|g' "$file"
        
        # Clean up backup files
        rm -f "${file}.bak" "${file}.bak2" 2>/dev/null
    fi
done

echo "Canonical URL fixes completed!"
