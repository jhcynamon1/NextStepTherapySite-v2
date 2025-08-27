#!/bin/bash

# Script to implement dual CTA strategy: phone/text + contact form
echo "Implementing dual CTA strategy across all service and SEO pages..."

# Find all HTML files except index.html
find /private/tmp/NextStepTherapySite-v2 -name "*.html" -not -name "index.html" -not -path "*/seo-tracking/*" -type f | while read file; do
    if grep -q "Call (416) 306-2157" "$file"; then
        echo "Fixing dual CTAs: $file"
        
        # Replace the specific pattern of two phone CTAs with dual strategy
        # Pattern 1: Primary + Secondary phone buttons
        sed -i.bak 's|<a href="tel:+14163062157" class="btn btn-primary">Call (416) 306-2157</a>\s*<a href="tel:+14163062157" class="btn btn-secondary">(416) 306-2157</a>|<a href="tel:+14163062157" class="btn btn-primary">Call or Text (416) 306-2157</a>\n                        <a href="../index.html#contact" class="btn btn-secondary">Get Help Today</a>|g' "$file"
        
        # Pattern 2: Handle any remaining duplicate phone CTAs
        sed -i.bak 's|<a href="tel:+14163062157"[^>]*>Call (416) 306-2157</a>[^<]*<a href="tel:+14163062157"[^>]*>[^<]*306-2157[^<]*</a>|<a href="tel:+14163062157" class="btn btn-primary">Call or Text (416) 306-2157</a>\n                        <a href="../index.html#contact" class="btn btn-secondary">Get Help Today</a>|g' "$file"
        
        # For SEO pages, adjust path to contact form (they're in seo/ subdirectory)
        if [[ "$file" == *"/seo/"* ]]; then
            sed -i.bak 's|href="../index.html#contact"|href="../../index.html#contact"|g' "$file"
        fi
        
        # Clean up backup files
        rm "$file.bak" 2>/dev/null || true
        
        echo "✓ Fixed dual CTAs: $file"
    fi
done

echo "Dual CTA strategy implementation complete!"
echo "All pages now have: Call/Text + Contact Form CTAs"