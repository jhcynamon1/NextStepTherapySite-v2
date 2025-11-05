# Ahrefs MCP Content Strategy Implementation Guide

## Overview
This guide shows how to use Ahrefs MCP tools for comprehensive content strategy: keyword research, content gap analysis, page optimization, and competitor analysis for NextStep Therapy.

## 1. Keyword Research and Idea Generation

### Function: `keywords_explorer`
**Purpose:** Discover keyword details, volume, difficulty, and related terms

### Sample Implementation:
```python
import requests

API_ENDPOINT = "https://apiv2.ahrefs.com"
ACCESS_TOKEN = "YOUR_AHREFS_TOKEN"

def get_keyword_ideas(seed_keyword, country="CA"):
    params = {
        "token": ACCESS_TOKEN,
        "from": "keywords_explorer",
        "target": seed_keyword,
        "mode": "phrase",
        "country": country,
        "limit": 50,
        "output": "json"
    }
    
    response = requests.get(API_ENDPOINT, params=params)
    return response.json()

# Usage for therapy practice
therapy_keywords = get_keyword_ideas("anxiety therapy")
depression_keywords = get_keyword_ideas("depression counseling")
```

### Key Metrics to Track:
- **Search Volume** - Minimum 100+ monthly searches
- **Keyword Difficulty (KD)** - Target 0-30 for easier wins
- **Traffic Potential (TP)** - Higher is better
- **Clicks Per Search (CPS)** - User engagement indicator

### Therapy Practice Keyword Clusters:
```python
therapy_keyword_clusters = {
    "anxiety": [
        "anxiety therapy Toronto",
        "anxiety counseling Ontario", 
        "anxiety treatment near me",
        "generalized anxiety disorder therapy"
    ],
    "depression": [
        "depression therapy Toronto",
        "depression counseling Ontario",
        "major depression treatment",
        "seasonal depression therapy"
    ],
    "virtual": [
        "virtual therapy Ontario",
        "online counseling Toronto",
        "telehealth therapy Canada",
        "remote therapy sessions"
    ]
}
```

## 2. Content Gap Analysis

### Function: `content_gap`
**Purpose:** Find keywords competitors rank for that you don't

### Sample Implementation:
```python
def find_content_gaps(competitors, your_domain):
    params = {
        "token": ACCESS_TOKEN,
        "from": "content_gap",
        "target1": competitors[0],
        "target2": competitors[1], 
        "target3": competitors[2],
        "exclude": your_domain,
        "mode": "domain",
        "limit": 100,
        "output": "json"
    }
    
    response = requests.get(API_ENDPOINT, params=params)
    return response.json()

# Usage
competitors = ["competitor1.com", "competitor2.com", "competitor3.com"]
gaps = find_content_gaps(competitors, "nextsteptherapy.ca")
```

### Content Gap Analysis Process:
1. **Identify Top Competitors** - 3-5 therapy practices in your area
2. **Run Content Gap Analysis** - Find missing keywords
3. **Filter Results** - Focus on relevant, high-volume keywords
4. **Prioritize Opportunities** - Create content calendar

### Sample Output Analysis:
```python
def analyze_content_gaps(gap_data):
    opportunities = []
    
    for keyword in gap_data['keywords']:
        if (keyword['volume'] >= 100 and 
            keyword['kd'] <= 30 and
            'therapy' in keyword['keyword'].lower()):
            opportunities.append({
                'keyword': keyword['keyword'],
                'volume': keyword['volume'],
                'difficulty': keyword['kd'],
                'priority': calculate_priority(keyword)
            })
    
    return sorted(opportunities, key=lambda x: x['priority'], reverse=True)
```

## 3. Existing Page Performance Analysis

### Function: `site_explorer`
**Purpose:** Analyze current page performance and optimization opportunities

### Sample Implementation:
```python
def analyze_page_performance(url):
    params = {
        "token": ACCESS_TOKEN,
        "from": "site_explorer",
        "target": url,
        "limit": 25,
        "output": "json"
    }
    
    response = requests.get(API_ENDPOINT, params=params)
    return response.json()

# Analyze existing therapy pages
pages_to_analyze = [
    "nextsteptherapy.ca/anxiety-therapy-ontario",
    "nextsteptherapy.ca/depression-therapy-ontario", 
    "nextsteptherapy.ca/virtual-therapy-ontario"
]

for page in pages_to_analyze:
    performance = analyze_page_performance(page)
    print(f"Analysis for {page}:")
    print(f"Organic keywords: {performance['organic_keywords']}")
    print(f"Traffic estimate: {performance['traffic']}")
    print(f"Backlinks: {performance['backlinks']}")
```

### Page Optimization Opportunities:
```python
def identify_optimization_opportunities(page_data):
    opportunities = []
    
    for keyword in page_data['organic_keywords']:
        if keyword['position'] > 10:  # Page 2 or lower
            opportunities.append({
                'keyword': keyword['keyword'],
                'current_position': keyword['position'],
                'traffic_potential': keyword['traffic'],
                'action': 'optimize_existing_content'
            })
    
    return opportunities
```

## 4. Competitor Content Analysis

### Function: `top_pages` and `organic_keywords`
**Purpose:** Identify high-performing competitor content and ranking keywords

### Sample Implementation:
```python
def analyze_competitor_content(competitor_domain):
    # Get top pages
    top_pages_params = {
        "token": ACCESS_TOKEN,
        "from": "top_pages",
        "target": competitor_domain,
        "output": "json",
        "limit": 20
    }
    
    top_pages = requests.get(API_ENDPOINT, params=top_pages_params).json()
    
    # Analyze each top page
    content_opportunities = []
    
    for page in top_pages['pages']:
        # Get keywords for this page
        keywords_params = {
            "token": ACCESS_TOKEN,
            "from": "organic_keywords",
            "target": page['url'],
            "output": "json",
            "limit": 20
        }
        
        keywords = requests.get(API_ENDPOINT, params=keywords_params).json()
        
        content_opportunities.append({
            'url': page['url'],
            'traffic': page['traffic'],
            'keywords': keywords['keywords'],
            'opportunity_score': calculate_opportunity_score(page, keywords)
        })
    
    return content_opportunities
```

### Competitor Analysis Strategy:
1. **Identify Top Competitors** - 3-5 therapy practices
2. **Analyze Top Pages** - Find highest traffic content
3. **Extract Keywords** - See what they rank for
4. **Identify Gaps** - Find topics you don't cover
5. **Create Better Content** - Improve on their approach

## 5. Content Prioritization Framework

### Prioritization Metrics:
```python
def calculate_content_priority(keyword_data, business_value=1):
    """
    Calculate priority score for content creation
    Higher score = higher priority
    """
    volume_score = min(keyword_data['volume'] / 1000, 1.0)  # Normalize to 0-1
    difficulty_score = max(0, (50 - keyword_data['kd']) / 50)  # Lower KD = higher score
    business_score = business_value  # Custom business value (1-5)
    
    priority_score = (volume_score * 0.4 + 
                     difficulty_score * 0.3 + 
                     business_score * 0.3)
    
    return priority_score

def prioritize_content_opportunities(opportunities):
    """
    Sort content opportunities by priority score
    """
    for opportunity in opportunities:
        opportunity['priority_score'] = calculate_content_priority(
            opportunity, 
            business_value=opportunity.get('business_value', 1)
        )
    
    return sorted(opportunities, key=lambda x: x['priority_score'], reverse=True)
```

### Content Priority Matrix:
| Priority Level | Volume | KD | Business Value | Action |
|----------------|--------|----|----------------|---------|
| High | 500+ | 0-20 | 4-5 | Create immediately |
| Medium | 200-500 | 20-40 | 3-4 | Plan for next month |
| Low | 100-200 | 40+ | 2-3 | Consider for future |

## 6. Complete Content Strategy Workflow

### Step-by-Step Implementation:
```python
def complete_content_strategy():
    """
    End-to-end content strategy using Ahrefs MCP
    """
    
    # 1. Keyword Research
    seed_keywords = ["anxiety therapy", "depression counseling", "virtual therapy"]
    all_keywords = []
    
    for seed in seed_keywords:
        keywords = get_keyword_ideas(seed)
        all_keywords.extend(keywords['keywords'])
    
    # 2. Content Gap Analysis
    competitors = ["competitor1.com", "competitor2.com", "competitor3.com"]
    gaps = find_content_gaps(competitors, "nextsteptherapy.ca")
    
    # 3. Existing Page Analysis
    existing_pages = [
        "nextsteptherapy.ca/anxiety-therapy-ontario",
        "nextsteptherapy.ca/depression-therapy-ontario"
    ]
    
    optimization_opportunities = []
    for page in existing_pages:
        performance = analyze_page_performance(page)
        opportunities = identify_optimization_opportunities(performance)
        optimization_opportunities.extend(opportunities)
    
    # 4. Competitor Analysis
    competitor_opportunities = []
    for competitor in competitors:
        opportunities = analyze_competitor_content(competitor)
        competitor_opportunities.extend(opportunities)
    
    # 5. Prioritize All Opportunities
    all_opportunities = gaps + optimization_opportunities + competitor_opportunities
    prioritized = prioritize_content_opportunities(all_opportunities)
    
    return prioritized
```

## 7. Content Calendar Integration

### Monthly Content Planning:
```python
def create_content_calendar(prioritized_opportunities):
    """
    Create monthly content calendar based on priorities
    """
    calendar = {
        'month_1': [],
        'month_2': [],
        'month_3': []
    }
    
    high_priority = [op for op in prioritized_opportunities if op['priority_score'] > 0.7]
    medium_priority = [op for op in prioritized_opportunities if 0.4 < op['priority_score'] <= 0.7]
    
    # Distribute high priority across first month
    for i, opportunity in enumerate(high_priority[:8]):  # 8 high-priority items
        calendar['month_1'].append(opportunity)
    
    # Distribute medium priority across months 2-3
    for i, opportunity in enumerate(medium_priority[:12]):  # 12 medium-priority items
        month = 'month_2' if i < 6 else 'month_3'
        calendar[month].append(opportunity)
    
    return calendar
```

## 8. Success Metrics and Tracking

### Key Performance Indicators:
```python
def track_content_performance():
    """
    Track content performance metrics
    """
    metrics = {
        'new_keywords_ranking': 0,
        'traffic_increase': 0,
        'backlink_acquisition': 0,
        'conversion_rate': 0
    }
    
    # Track monthly progress
    return metrics
```

### Monthly Reporting:
- **New Keywords Ranking** - Track position improvements
- **Traffic Growth** - Monitor organic traffic increases
- **Backlink Acquisition** - Count new referring domains
- **Conversion Rate** - Measure lead generation improvements

## 9. Implementation Timeline

### Week 1-2: Setup and Analysis
- Install Ahrefs MCP tools
- Run initial keyword research
- Complete content gap analysis
- Analyze existing page performance

### Week 3-4: Content Planning
- Prioritize content opportunities
- Create content calendar
- Begin content creation for high-priority items

### Month 2-3: Execution and Optimization
- Publish prioritized content
- Monitor performance metrics
- Optimize underperforming pages
- Continue competitor analysis

### Ongoing: Monitoring and Iteration
- Weekly performance tracking
- Monthly content gap analysis
- Quarterly strategy review
- Continuous optimization

This comprehensive approach uses Ahrefs MCP tools to create a data-driven content strategy that can scale with your therapy practice's growth and help you dominate local search results.
