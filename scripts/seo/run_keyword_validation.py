#!/usr/bin/env python3
import json
import requests
import base64
from typing import List, Dict

# DataForSEO credentials
username = "jesse@nextsteptherapy.ca"
password = "1d54adc9ada19782"
credentials = base64.b64encode(f"{username}:{password}".encode()).decode()

# Target keywords to validate
target_keywords = [
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
]

def validate_keywords_overview(keywords: List[str]) -> Dict:
    """Get keyword overview data for specific keywords"""

    url = "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_overview/live"
    headers = {
        "Authorization": f"Basic {credentials}",
        "Content-Type": "application/json"
    }

    payload = [{
        "keywords": keywords,
        "location_name": "Canada",
        "language_code": "en"
    }]

    print(f"🔍 Validating {len(keywords)} specific keywords...")

    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"❌ Error: {e}")
        return None

def get_related_keywords(seed_terms: List[str], limit: int = 200) -> Dict:
    """Get related keywords using seed terms"""

    url = "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live"
    headers = {
        "Authorization": f"Basic {credentials}",
        "Content-Type": "application/json"
    }

    payload = [{
        "keywords": seed_terms,
        "location_name": "Canada",
        "language_code": "en",
        "limit": limit,
        "filters": [["keyword_info.search_volume", ">", 5]]
    }]

    print(f"🔍 Getting related keywords for seed terms: {seed_terms}")

    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"❌ Error: {e}")
        return None

def analyze_results(data: Dict, analysis_type: str):
    """Analyze and display keyword data"""

    if not data or "tasks" not in data:
        print(f"❌ No valid data returned for {analysis_type}")
        return

    print(f"\n📊 {analysis_type} Results:")
    print("=" * 60)

    for task in data["tasks"]:
        if task["status_code"] != 20000:
            print(f"❌ Task failed: {task.get('status_message', 'Unknown error')}")
            continue

        result = task.get("result", [])
        if not result:
            print("❌ No results returned")
            continue

        valid_keywords = []

        for item in result:
            if "keyword_info" in item and item["keyword_info"]:
                keyword = item.get("keyword", "")
                ki = item["keyword_info"]

                # Only include keywords with real data
                if ki.get("search_volume") and ki.get("search_volume") > 0:
                    valid_keywords.append({
                        "keyword": keyword,
                        "search_volume": ki.get("search_volume", 0),
                        "competition": ki.get("competition", "N/A"),
                        "competition_level": ki.get("competition_level", "N/A"),
                        "cpc": ki.get("cpc", "N/A")
                    })

        # Sort by search volume descending
        valid_keywords.sort(key=lambda x: x["search_volume"], reverse=True)

        print(f"Found {len(valid_keywords)} keywords with real search volume data:\n")

        for kw in valid_keywords:
            comp_display = f"{kw['competition']:.2f}" if isinstance(kw['competition'], (int, float)) else kw['competition']
            cpc_display = f"${kw['cpc']:.2f}" if isinstance(kw['cpc'], (int, float)) else kw['cpc']

            print(f"🎯 {kw['keyword']}")
            print(f"   📈 Volume: {kw['search_volume']:,}")
            print(f"   ⚔️  Competition: {comp_display} ({kw['competition_level']})")
            print(f"   💰 CPC: {cpc_display}")
            print()

def main():
    print("🚀 Ontario Therapy Keywords Validation")
    print("=" * 50)

    # Step 1: Direct keyword validation
    print("\n🎯 Step 1: Validating specific target keywords...")
    overview_data = validate_keywords_overview(target_keywords)
    if overview_data:
        analyze_results(overview_data, "Direct Keyword Validation")

        # Save raw data
        with open("/Users/jessecynamon/NextStepTherapy/keyword_overview_results.json", "w") as f:
            json.dump(overview_data, f, indent=2)
        print("✅ Saved to keyword_overview_results.json")

    # Step 2: Related keywords using therapy types as seeds
    print("\n🔍 Step 2: Finding related keywords...")
    seed_terms = [
        "trauma counselling", "adhd therapy", "grief counselling",
        "addiction therapy", "anxiety therapy", "depression therapy",
        "workplace stress therapy", "burnout therapy"
    ]

    related_data = get_related_keywords(seed_terms, 300)
    if related_data:
        analyze_results(related_data, "Related Keywords from Therapy Types")

        # Save raw data
        with open("/Users/jessecynamon/NextStepTherapy/therapy_types_keywords.json", "w") as f:
            json.dump(related_data, f, indent=2)
        print("✅ Saved to therapy_types_keywords.json")

    # Step 3: City-specific keywords
    print("\n🏙️ Step 3: Finding city-specific therapy keywords...")
    city_seeds = [
        "toronto therapy", "mississauga therapy", "ottawa therapy",
        "hamilton therapy", "london ontario therapy"
    ]

    city_data = get_related_keywords(city_seeds, 250)
    if city_data:
        analyze_results(city_data, "City-Specific Therapy Keywords")

        # Save raw data
        with open("/Users/jessecynamon/NextStepTherapy/city_specific_keywords.json", "w") as f:
            json.dump(city_data, f, indent=2)
        print("✅ Saved to city_specific_keywords.json")

    print("\n🎉 Validation Complete!")
    print("\n📋 Summary:")
    print("- Direct validation of your 15 target keywords")
    print("- Related keywords from therapy type seeds")
    print("- City-specific therapy keyword variations")
    print("\n📁 Data files created for further analysis")

if __name__ == "__main__":
    main()