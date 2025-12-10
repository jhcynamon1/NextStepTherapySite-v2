# Ahrefs MCP Rent & Rank Strategy Implementation

## Overview
This document outlines how to use Ahrefs MCP tools to validate and build a rent and rank strategy for NextStep Therapy's local SEO efforts.

## 1. Setup and Configuration

### Install Ahrefs MCP Server
```bash
npm install --prefix=~/.global-node-modules @ahrefs/mcp -g
```

### Configuration (add to AI assistant config)
```json
{
    "mcpServers": {
        "ahrefs": {
            "command": "npx",
            "args": [
                "--prefix=~/.global-node-modules",
                "@ahrefs/mcp"
            ],
            "env": {
                "API_KEY": "YOUR_AHREFS_API_KEY"
            }
        }
    }
}
```

## 2. Core Ahrefs MCP Tools for Rent & Rank Strategy

### Available Functions:
- `get_backlink_stats` - Domain authority and backlink metrics
- `batch_analysis` - Compare up to 100 competitors
- `get_matching_terms` - Keyword discovery and research
- `list_backlinks` - Detailed backlink analysis
- `list_referring_domains` - Referring domain metrics
- `get_search_volume_history` - Keyword trend analysis
- `get_rank_tracker_data` - Position monitoring

## 3. Implementation Strategy

### Phase 1: Competitive Intelligence
**Goal:** Understand the local therapy market landscape

**Tools to Use:**
- `batch_analysis` - Compare nextsteptherapy.ca against top local competitors
- `list_referring_domains` - Analyze competitor backlink sources
- `get_matching_terms` - Discover competitor keyword strategies

**Sample Queries:**
```json
{
    "tool": "batch_analysis",
    "params": {
        "targets": ["nextsteptherapy.ca", "competitor1.com", "competitor2.com"],
        "metrics": ["organic_traffic", "domain_rating", "backlinks"],
        "country": "CA"
    }
}
```

### Phase 2: Keyword Research & Content Gap Analysis
**Goal:** Identify high-value, low-competition keywords

**Tools to Use:**
- `get_matching_terms` - Find keyword variations
- `get_search_volume_history` - Analyze seasonal trends
- `batch_analysis` - Identify content gaps

**Target Keywords:**
- "anxiety therapy Toronto"
- "depression counseling Ontario"
- "virtual therapy [city]"
- "therapist near me [location]"

### Phase 3: Backlink Acquisition Strategy
**Goal:** Build high-quality local backlinks

**Tools to Use:**
- `list_backlinks` - Analyze competitor backlink sources
- `list_referring_domains` - Identify link opportunities
- `get_backlink_stats` - Track progress

**Strategy:**
1. Identify local directories linking to competitors
2. Find industry-specific websites (.edu, .gov, healthcare sites)
3. Target local business associations and chambers of commerce

### Phase 4: Performance Monitoring
**Goal:** Track rent and rank strategy effectiveness

**Tools to Use:**
- `get_rank_tracker_data` - Monitor keyword positions
- `get_backlink_stats` - Track domain authority growth
- `batch_analysis` - Compare against competitors

## 4. Automated Monitoring Setup

### Daily Monitoring Script
```bash
#!/bin/bash
# Daily Ahrefs MCP monitoring for therapy practice

# Track keyword rankings
node ~/.global-node-modules/@ahrefs/mcp keywordRankings \
  --keywords "anxiety therapy Toronto,depression counseling Ontario" \
  --domain "nextsteptherapy.ca" \
  --country "CA" >> ~/therapy_ranking_log.txt

# Monitor competitor backlinks
node ~/.global-node-modules/@ahrefs/mcp backlinkStats \
  --competitors "competitor1.com,competitor2.com" \
  --domain "nextsteptherapy.ca" >> ~/competitor_analysis.txt
```

### Weekly Reports
- Keyword position changes
- New backlink acquisitions
- Competitor analysis updates
- Content gap opportunities

## 5. ROI Measurement Integration

### Google Analytics Integration
```python
from google.analytics.data_v1beta import BetaAnalyticsDataClient

# Correlate Ahrefs rankings with GA sessions
def measure_seo_roi(keyword, rank_position, sessions):
    if rank_position <= 3:
        return sessions * 0.3  # 30% CTR for top 3
    elif rank_position <= 10:
        return sessions * 0.1  # 10% CTR for top 10
    else:
        return sessions * 0.01  # 1% CTR for lower positions
```

### Google Search Console Integration
```bash
# Fetch keyword performance data
curl -H "Authorization: Bearer [OAUTH_TOKEN]" \
  "https://searchconsole.googleapis.com/v1/sites/[propertyUrl]/searchAnalytics/query" \
  -d '{
    "startDate": "2025-09-01",
    "endDate": "2025-09-22",
    "dimensions": ["query"],
    "filters": [{
      "dimension": "query",
      "operator": "contains",
      "expression": "therapy"
    }]
  }'
```

## 6. Key Metrics to Track

### Primary KPIs:
- **SERP Position** for target keywords
- **Domain Rating (DR)** growth
- **Organic Traffic** estimates
- **Backlink Count** and quality
- **Referring Domains** growth

### Secondary KPIs:
- **Click-through Rate** from search
- **Conversion Rate** from organic traffic
- **Cost per Acquisition** vs. paid channels
- **Local Pack** appearances

## 7. Content Strategy Integration

### Content Gap Analysis Process:
1. Use `batch_analysis` to identify competitor top pages
2. Use `get_matching_terms` to find related keywords
3. Create content targeting identified gaps
4. Monitor performance with `get_rank_tracker_data`

### Content Types to Prioritize:
- Location-specific service pages
- FAQ pages for common therapy questions
- Resource pages for mental health topics
- Local directory submissions

## 8. Limitations and Considerations

### Rate Limits:
- Batch analysis: 100 targets per request
- Daily quota depends on Ahrefs API plan
- Data freshness: Not real-time (based on crawls)

### Best Practices:
- Focus on local modifiers in all queries
- Combine keyword and backlink analysis
- Monitor competitors weekly, not daily
- Track both rankings and traffic metrics

## 9. Implementation Timeline

### Week 1-2: Setup and Initial Analysis
- Install and configure Ahrefs MCP
- Run initial competitor analysis
- Identify target keywords and content gaps

### Week 3-4: Content Creation
- Create content based on gap analysis
- Optimize existing pages for target keywords
- Begin local directory submissions

### Month 2-3: Link Building
- Execute backlink acquisition strategy
- Monitor progress with automated tools
- Adjust strategy based on results

### Ongoing: Monitoring and Optimization
- Daily keyword position tracking
- Weekly competitor analysis
- Monthly strategy review and adjustment

## 10. Success Metrics

### 3-Month Goals:
- Top 3 rankings for 5+ local keywords
- 20+ new high-quality backlinks
- 50% increase in organic traffic
- Improved domain rating by 10+ points

### 6-Month Goals:
- Top 3 rankings for 15+ local keywords
- 50+ new backlinks from relevant sources
- 100% increase in organic traffic
- Domain rating improvement of 20+ points

This strategy leverages Ahrefs MCP tools to create a data-driven, automated approach to local SEO that can scale with your therapy practice's growth.
