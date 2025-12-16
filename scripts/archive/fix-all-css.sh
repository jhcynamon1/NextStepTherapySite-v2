#!/bin/bash

echo "🔧 FIXING ALL PHASE 1 PAGES WITH CORRECT MINIFIED CSS"
echo "=================================================="

# Phase 1 files that need CSS fixes
files=(
    "marriage-counselling-toronto.html"
    "therapy-near-me-ontario.html"
    "counsellor-ontario.html"
    "mental-health-therapist-ontario.html"
)

# The correct minified CSS from working template
CORRECT_CSS='</script><style>.manus-primary-cta[data-astro-cid-ohz3nq7j]{background:#6b8e6f!important;color:#fff!important;font-weight:600!important;padding:1.25rem 2.5rem!important;border-radius:var(--radius-lg)!important;text-decoration:none!important;transition:all .3s ease!important;display:inline-block!important;min-height:48px!important;box-shadow:var(--shadow-soft)!important}.manus-primary-cta[data-astro-cid-ohz3nq7j]:hover{background:#5a7d5e!important;transform:translateY(-2px)!important;box-shadow:var(--shadow-medium)!important;color:#fff!important}.manus-secondary-cta[data-astro-cid-ohz3nq7j]{background:transparent!important;color:#6b8e6f!important;border:1.5px solid #6B8E6F!important;font-weight:600!important;padding:1rem 2rem!important;border-radius:var(--radius-lg)!important;text-decoration:none!important;transition:all .3s ease!important;display:inline-block!important;min-height:48px!important}.manus-secondary-cta[data-astro-cid-ohz3nq7j]:hover{background:#6b8e6f!important;color:#fff!important;transform:translateY(-2px)!important}.hero-with-bg[data-astro-cid-ohz3nq7j]{position:relative;background:var(--background-primary);padding:var(--space-section) 0;overflow:hidden}.hero-with-bg[data-astro-cid-ohz3nq7j]:before{content:"";position:absolute;inset:0;background-image:url(/images/therapy-session-warm.jpg);background-size:cover;background-position:center;opacity:.3;z-index:1}.hero-content[data-astro-cid-ohz3nq7j]{position:relative;z-index:2;text-align:center;max-width:700px;margin:0 auto}.hero-content[data-astro-cid-ohz3nq7j] h1[data-astro-cid-ohz3nq7j]{text-shadow:0 2px 4px rgba(0,0,0,.1)}.hero-content[data-astro-cid-ohz3nq7j] .lead-text[data-astro-cid-ohz3nq7j]{text-shadow:0 1px 2px rgba(0,0,0,.1)}.trust-pills[data-astro-cid-ohz3nq7j]{display:flex;justify-content:center;gap:var(--space-sm);flex-wrap:wrap;margin:var(--space-lg) 0}.trust-pill[data-astro-cid-ohz3nq7j]{background:#6b8e6f1a;color:#6b8e6f;padding:.5rem 1rem;border-radius:50px;font-size:.875rem;font-weight:500;border:1px solid rgba(107,142,111,.2)}.info-cards[data-astro-cid-ohz3nq7j]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:var(--space-md);max-width:800px;margin:0 auto}.info-card[data-astro-cid-ohz3nq7j]{background:#f8f9fa;padding:var(--space-lg);border-radius:var(--radius-md);text-align:center}.floating-mobile-cta[data-astro-cid-ohz3nq7j]{position:fixed;bottom:20px;right:20px;z-index:1000;background:#6b8e6f;color:#fff;padding:1rem 1.5rem;border-radius:50px;text-decoration:none;font-weight:600;box-shadow:0 4px 20px #6b8e6f4d;display:none}@media (max-width: 768px){.floating-mobile-cta[data-astro-cid-ohz3nq7j]{display:block}}
</style>'

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "🔄 Fixing CSS in $file..."

        # Create a temporary file for processing
        temp_file="${file}.tmp"

        # Use awk to replace the entire CSS style block
        awk '
        BEGIN { in_style = 0; skip = 0 }
        /<style>/ {
            print "'"$CORRECT_CSS"'"
            skip = 1
            next
        }
        /<\/style>/ {
            skip = 0
            next
        }
        !skip { print }
        ' "$file" > "$temp_file"

        # Replace original file
        mv "$temp_file" "$file"

        echo "✅ Fixed CSS in $file"
    else
        echo "❌ File not found: $file"
    fi
done

echo ""
echo "🎉 ALL PHASE 1 PAGES NOW HAVE CORRECT MINIFIED CSS!"
echo "CTAs should work properly now."