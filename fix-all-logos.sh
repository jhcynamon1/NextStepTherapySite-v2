#!/bin/bash

# Array of all files to fix (all 18 SEO/virtual pages except cant-sleep-anxiety which is already fixed)
files=(
    "cant-stop-worrying-work.html"
    "constant-stress-from-job.html" 
    "mental-health-ontario-professionals.html"
    "online-counselling-remote-workers.html"
    "panic-attacks-driving-ontario.html"
    "same-week-therapy-appointment.html"
    "sunday-night-anxiety.html"
    "therapist-available-today-ontario.html"
    "therapy-cost-without-insurance.html"
    "therapy-covered-insurance-ontario.html"
    "virtual-therapy-busy-parents.html"
    "why-feel-anxious-all-time.html"
    "virtual-therapy-ontario.html"
    "online-mental-health-support-ontario.html"
    "same-day-virtual-therapy-ontario.html"
    "mental-health-northern-ontario.html"
    "virtual-therapy-thunder-bay.html"
)

echo "Fixing logo styling and navigation on 17 pages..."

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing $file..."
        
        # Fix logo CSS to match homepage
        sed -i '' 's/display: flex;/height: 42px;/g' "$file"
        sed -i '' '/align-items: center;/d' "$file"
        sed -i '' '/gap: var(--space-xs);/d' "$file"
        sed -i '' '/text-decoration: none;/d' "$file"
        sed -i '' '/color: var(--text-primary);/d' "$file"
        sed -i '' 's/width: 40px;/width: auto;/g' "$file"
        sed -i '' '/height: 40px;/d' "$file"
        sed -i '' '/border-radius: 50%;/d' "$file"
        sed -i '' 's/font-weight: 600;/font-weight: 400;/g' "$file"
        sed -i '' '/color: var(--primary-soft-blue);/a\
            font-style: italic;' "$file"
        sed -i '' '/color: var(--primary-soft-blue);/a\
            letter-spacing: -0.01em;' "$file"
        
        # Remove Services link from navigation
        sed -i '' 's/<a href="services.html">Services<\/a>//g' "$file"
        
        echo "Fixed $file"
    else
        echo "Warning: $file not found"
    fi
done

echo "Logo fixes complete!"