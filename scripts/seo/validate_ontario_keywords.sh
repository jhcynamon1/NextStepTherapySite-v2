#!/bin/bash

# Ontario Therapy Keywords Validation Script
# Using DataForSEO API to validate search volumes and competition

echo "🔍 Validating Ontario Therapy Keywords with DataForSEO..."
echo "================================================="

# Keywords to validate
keywords=(
    "trauma counselling toronto"
    "adhd therapy toronto"
    "grief counselling toronto"
    "addiction therapy toronto"
    "anxiety therapy mississauga"
    "depression therapy mississauga"
    "workplace stress therapy ottawa"
    "anxiety therapy ottawa"
    "depression therapy hamilton"
    "anxiety therapy london ontario"
    "depression therapy london ontario"
    "adhd therapy ottawa"
    "trauma counselling mississauga"
    "burnout therapy toronto"
    "grief counselling ottawa"
)

# Function to validate keywords using Keyword Overview API
validate_keywords() {
    echo "📊 Getting keyword overview data..."

    # Create JSON payload with all keywords
    json_payload='[{
        "keywords": [
            "trauma counselling toronto",
            "adhd therapy toronto",
            "grief counselling toronto",
            "addiction therapy toronto",
            "anxiety therapy mississauga",
            "depression therapy mississauga",
            "workplace stress therapy ottawa",
            "anxiety therapy ottawa",
            "depression therapy hamilton",
            "anxiety therapy london ontario",
            "depression therapy london ontario",
            "adhd therapy ottawa",
            "trauma counselling mississauga",
            "burnout therapy toronto",
            "grief counselling ottawa"
        ],
        "location_name": "Canada",
        "language_code": "en"
    }]'

    echo "Making API call to DataForSEO Keyword Overview..."
    curl -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_overview/live" \
        -H "Authorization: Basic amVzc2VAbmV4dHN0ZXB0aGVyYXB5LmNhOjFkNTRhZGM5YWRhMTk3ODI=" \
        -H "Content-Type: application/json" \
        -d "$json_payload" > keyword_overview_results.json

    echo "✅ Results saved to keyword_overview_results.json"
}

# Function to get related keywords using broad seed terms
get_related_keywords() {
    echo "🔍 Getting related keywords using seed terms..."

    # Get broader keyword ideas that might include our targets
    json_payload='[{
        "keywords": ["trauma counselling", "adhd therapy", "grief counselling", "addiction therapy", "anxiety therapy", "depression therapy", "workplace stress therapy", "burnout therapy"],
        "location_name": "Canada",
        "language_code": "en",
        "limit": 200,
        "filters": [["keyword_info.search_volume", ">", 5]]
    }]'

    echo "Making API call to DataForSEO Keyword Ideas..."
    curl -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live" \
        -H "Authorization: Basic amVzc2VAbmV4dHN0ZXB0aGVyYXB5LmNhOjFkNTRhZGM5YWRhMTk3ODI=" \
        -H "Content-Type: application/json" \
        -d "$json_payload" > keyword_ideas_results.json

    echo "✅ Results saved to keyword_ideas_results.json"
}

# Function to get city-specific variations
get_city_variations() {
    echo "🏙️ Getting city-specific therapy keywords..."

    json_payload='[{
        "keywords": ["toronto therapy", "mississauga therapy", "ottawa therapy", "hamilton therapy", "london ontario therapy"],
        "location_name": "Canada",
        "language_code": "en",
        "limit": 150,
        "filters": [["keyword_info.search_volume", ">", 5]]
    }]'

    echo "Making API call for city variations..."
    curl -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live" \
        -H "Authorization: Basic amVzc2VAbmV4dHN0ZXB0aGVyYXB5LmNhOjFkNTRhZGM5YWRhMTk3ODI=" \
        -H "Content-Type: application/json" \
        -d "$json_payload" > city_variations_results.json

    echo "✅ Results saved to city_variations_results.json"
}

# Run all validation functions
echo "Starting keyword validation process..."
echo ""

validate_keywords
echo ""
get_related_keywords
echo ""
get_city_variations

echo ""
echo "🎯 Validation Complete!"
echo "================================================="
echo "📁 Results files created:"
echo "   - keyword_overview_results.json (direct keyword data)"
echo "   - keyword_ideas_results.json (related keywords)"
echo "   - city_variations_results.json (city-specific variations)"
echo ""
echo "Next steps:"
echo "1. Review JSON files for actual search volume data"
echo "2. Filter for Ontario-specific terms"
echo "3. Identify keywords with real search volume (non-null)"
echo "4. Analyze competition levels"
echo ""