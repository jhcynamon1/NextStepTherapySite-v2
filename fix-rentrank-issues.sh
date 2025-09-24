#!/bin/bash

echo "🔧 Fixing CTAs and Headlines for Rent & Rank Pages..."

# Array of rent & rank pages to fix
pages=(
    "online-therapy-depression-ontario.html"
    "family-therapy-toronto.html"
    "couples-therapy-toronto.html"
    "anxiety-therapy-toronto-rent-rank.html"
    "depression-counselling-toronto.html"
)

# Fix CTAs to redirect to homepage
for file in "${pages[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing CTAs in $file..."
        sed -i '' 's|href="#contact" class="manus-primary-cta"|href="/#contact" class="manus-primary-cta"|g' "$file"
        echo "✅ CTAs fixed in $file"
    fi
done

echo "✅ All CTAs now redirect to homepage contact form!"
echo ""
echo "Now fixing headlines for better CTR..."

# Fix headlines - make them more compelling and benefit-focused

# Online Therapy Depression
sed -i '' 's|<h1 data-astro-cid-ohz3nq7j>Online Therapy for Depression | CRPO Registered Therapist | Next Step Therapy</h1>|<h1 data-astro-cid-ohz3nq7j>Start Feeling Like Yourself Again - Depression Therapy Ontario</h1>|' online-therapy-depression-ontario.html
sed -i '' 's|<title>Online Therapy for Depression | CRPO Registered Therapist | Ontario</title>|<title>Depression Therapy That Works | Virtual Sessions Ontario | Book Today</title>|' online-therapy-depression-ontario.html
echo "✅ Fixed: Depression page headline"

# Family Therapy Toronto
sed -i '' 's|<h1 data-astro-cid-ohz3nq7j>Family Therapy Toronto | CRPO Registered Therapist | Next Step Therapy</h1>|<h1 data-astro-cid-ohz3nq7j>Reconnect Your Family - Professional Therapy in Toronto</h1>|' family-therapy-toronto.html
sed -i '' 's|<title>Family Therapy Toronto | CRPO Registered Therapist | Ontario</title>|<title>Family Therapy Toronto | Rebuild Connection & Communication</title>|' family-therapy-toronto.html
echo "✅ Fixed: Family therapy headline"

# Couples Therapy Toronto
sed -i '' 's|<h1 data-astro-cid-ohz3nq7j>Couples Therapy Toronto | CRPO Registered Therapist | Next Step Therapy</h1>|<h1 data-astro-cid-ohz3nq7j>Save Your Relationship - Expert Couples Therapy Toronto</h1>|' couples-therapy-toronto.html
sed -i '' 's|<title>Couples Therapy Toronto | CRPO Registered Therapist | Ontario</title>|<title>Couples Therapy Toronto | Transform Your Relationship Today</title>|' couples-therapy-toronto.html
echo "✅ Fixed: Couples therapy headline"

# Anxiety Therapy Toronto
sed -i '' 's|<h1 data-astro-cid-ohz3nq7j>Anxiety Therapy Toronto | CRPO Registered Therapist | Next Step Therapy</h1>|<h1 data-astro-cid-ohz3nq7j>Stop Anxiety From Running Your Life - Toronto Therapy</h1>|' anxiety-therapy-toronto-rent-rank.html
sed -i '' 's|<title>Anxiety Therapy Toronto | CRPO Registered Therapist | Ontario</title>|<title>Anxiety Therapy Toronto | Get Relief in Weeks, Not Years</title>|' anxiety-therapy-toronto-rent-rank.html
echo "✅ Fixed: Anxiety therapy headline"

# Depression Counselling Toronto
sed -i '' 's|<h1 data-astro-cid-ohz3nq7j>Depression Counselling Toronto | CRPO Registered Therapist | Next Step Therapy</h1>|<h1 data-astro-cid-ohz3nq7j>Find Hope Again - Depression Counselling Toronto</h1>|' depression-counselling-toronto.html
sed -i '' 's|<title>Depression Counselling Toronto | CRPO Registered Therapist | Ontario</title>|<title>Depression Counselling Toronto | Start Healing Today</title>|' depression-counselling-toronto.html
echo "✅ Fixed: Depression counselling headline"

echo ""
echo "✅ All headlines updated for better CTR!"
echo "✅ Script complete!"