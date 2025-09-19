#!/bin/bash

# Fix canonical tags across all HTML files to use non-www, no .html extension

echo "Fixing canonical tags across all HTML files..."

# Loop through all HTML files
for file in *.html; do
    # Skip if no HTML files found
    [ -f "$file" ] || continue

    # Extract filename without extension
    slug=$(basename "$file" .html)

    # Map special cases
    case "$slug" in
        "index")
            canonical_path="/"
            ;;
        "CRITICAL_HOMEPAGE_BACKUP_20250903_131433")
            # Skip backup files
            continue
            ;;
        "critical-css")
            # Skip CSS files
            continue
            ;;
        *)
            # Check if it's a comprehensive page and map to simplified version
            if [[ "$slug" == *"-qa-comprehensive" ]]; then
                canonical_path="/$(echo $slug | sed 's/-qa-comprehensive//')"
            else
                canonical_path="/$slug"
            fi
            ;;
    esac

    echo "Processing $file -> canonical: https://nextsteptherapy.ca${canonical_path}"

    # Check if file has a canonical tag
    if grep -q '<link rel="canonical"' "$file"; then
        # Replace existing canonical tag
        sed -i '' "s|<link rel=\"canonical\"[^>]*>|<link rel=\"canonical\" href=\"https://nextsteptherapy.ca${canonical_path}\">|g" "$file"
        echo "  ✓ Updated existing canonical tag"
    else
        # Add canonical tag after <title> if it doesn't exist
        sed -i '' "/<title>/a\\
    <link rel=\"canonical\" href=\"https://nextsteptherapy.ca${canonical_path}\">
" "$file"
        echo "  ✓ Added new canonical tag"
    fi
done

echo "Canonical tag fixes complete!"