#!/bin/bash

# Script to replace all Jane booking links with phone CTAs
echo "Fixing Jane booking links across all HTML files..."

# Find all HTML files with Jane booking links and replace them
find /private/tmp/NextStepTherapySite-v2 -name "*.html" -not -path "*/seo-tracking/*" -type f | while read file; do
    if grep -q "janeapp" "$file"; then
        echo "Fixing: $file"
        
        # Replace the Jane booking URL with phone number
        sed -i.bak 's|https://nextsteptherapy\.janeapp\.com/#staff_member/1|tel:+14163062157|g' "$file"
        
        # Replace "Book A Free Consultation" text with "Call (416) 306-2157"
        sed -i.bak 's|Book A Free Consultation|Call (416) 306-2157|g' "$file"
        
        # Replace "Book Free Consultation" text with "Call (416) 306-2157"  
        sed -i.bak 's|Book Free Consultation|Call (416) 306-2157|g' "$file"
        
        # Remove target="_blank" attributes for phone links
        sed -i.bak 's| target="_blank"||g' "$file"
        
        # Clean up backup files
        rm "$file.bak" 2>/dev/null || true
        
        echo "✓ Fixed: $file"
    fi
done

echo "Jane booking link cleanup complete!"
echo "All links now point to phone number: (416) 306-2157"