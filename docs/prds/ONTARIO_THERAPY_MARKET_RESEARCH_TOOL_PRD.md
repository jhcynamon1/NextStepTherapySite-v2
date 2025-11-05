# Ontario Therapy Market Research & Opportunity Analysis Tool - PRD

## Executive Summary

Based on The Vibe Marketers' proven local market research automation that generated $30K/month in "boring" businesses, this PRD outlines a specialized cloud-code implementation for analyzing therapy opportunities across Ontario. The tool will help determine whether to pursue therapy marketing/SEO services, rent-and-rank strategies, or clinic establishment by providing data-driven insights into local therapy markets.

## Background & Inspiration

This project is directly inspired by The Vibe Marketers' successful n8n automation workflow that:
- **Generated $30K/month** in a diesel mechanic business through systematic market analysis
- **Uses Google Maps as a "treasure trove"** of market intelligence via Apify scraping
- **Identifies underserved niches** through review velocity and provider density analysis
- **Leverages AI to synthesize** market opportunities and pain points into actionable insights
- **Creates newsletter content** targeting end customers for lead generation and monetization

**Key Quote from James**: *"You don't necessarily have to go and be an expert in any one of these markets to create a successful business here... You could start a local newsletter that attracts the end customer."*

## Problem Statement

Teams considering entry into the Ontario therapy market lack systematic methods to:

1. **Identify Market Gaps**: Which cities/regions have high demand but insufficient therapy providers?
2. **Understand Customer Pain Points**: What are clients consistently complaining about in reviews?
3. **Assess Competition Density**: How saturated is each market segment (couples therapy, anxiety, depression, etc.)?
4. **Validate Business Models**: Should we do marketing services, rent-and-rank, or open clinics?
5. **Find Arbitrage Opportunities**: Where can we provide better service than existing providers?
6. **Generate Newsletter Content**: What topics would attract therapy clients for lead generation?

## Solution Overview

A cloud-code based market research tool that replicates The Vibe Marketers' proven methodology, specifically adapted for therapy-related businesses across Ontario, using AI analysis to identify opportunities and generate actionable insights.

## Core Methodology (Based on Proven System)

### 1. Data Collection Engine

**Primary Data Source**: Google Maps Business Listings via Apify
- **Target Keywords**: 
  - "therapy", "counselling", "psychologist", "mental health"
  - "couples therapy", "family therapy", "addiction counselling"
  - "anxiety therapy", "depression therapy", "PTSD therapy"
  - "virtual therapy", "online counselling"

**Geographic Scope**: Ontario cities/regions including:
- Tier 1: Toronto, Ottawa, Hamilton, London
- Tier 2: Kitchener-Waterloo, Windsor, Oshawa, St. Catharines
- Tier 3: Smaller cities with growth potential

**Exact Data Points Collected** (from actual workflow):
```javascript
{
  // Business Overview
  title: string,
  categoryName: string,
  totalScore: number,
  reviewsCount: number,
  
  // Contact Information
  address: string,
  neighborhood: string,
  street: string,
  city: string,
  postalCode: string,
  state: string,
  phone: string,
  phoneUnformatted: string,
  website: string,
  emails: string[],
  
  // Social Media Presence
  instagrams: string[],
  facebooks: string[],
  linkedIns: string[],
  youtubes: string[],
  tiktoks: string[],
  twitters: string[],
  pinterests: string[],
  
  // Reviews & Ratings
  reviewsDistribution: {
    oneStar: number,
    twoStar: number,
    threeStar: number,
    fourStar: number,
    fiveStar: number
  },
  reviewsTags: [{title: string, count: number}],
  
  // Individual Reviews
  reviews: [{
    reviewerId: string,
    reviewerName: string,
    stars: number,
    text: string,
    publishedAtDate: string,
    likesCount: number,
    responseFromOwnerText: string,
    // ... additional review metadata
  }],
  
  // Popular Times & Activity
  popularTimesHistogram: object,
  popularTimesLiveText: string,
  popularTimesLivePercent: number,
  
  // Competitive Intelligence
  peopleAlsoSearch: [{title: string}],
  
  // Location Data
  location: {lat: number, lng: number},
  plusCode: string
}
```

### 2. Market Intelligence Calculations (Exact Formulas)

**Review Velocity (RV) Analysis**:
```javascript
// Calculate demand indicators (100-day window)
const windowDays = 100;
const cutoff = new Date(now.getTime() - windowDays * 24 * 60 * 60 * 1000);

// Count recent reviews per business
const recentReviews = reviews.filter(r => new Date(r.publishedAtDate) >= cutoff).length;

// Monthly review velocity
const RV = recentReviews > 0 ? (recentReviews / windowDays) * 30 : 0;
```

**Provider Density (PD) Mapping**:
```javascript
// Count providers per search keyword/location
const providerDensity = {
  totalProviders: businesses.length,
  providersPerKeyword: businesses.groupBy('searchString'),
  marketSaturation: calculateSaturation(totalProviders, population)
};
```

**Average Rating (AR) and Variance (VAR)**:
```javascript
// Calculate from review distribution
const counts = {1: oneStar, 2: twoStar, 3: threeStar, 4: fourStar, 5: fiveStar};
const total = Object.values(counts).reduce((a,b) => a+b, 0);

// Average rating
const avgRating = Object.entries(counts)
  .reduce((sum, [star, count]) => sum + (parseInt(star) * count), 0) / total;

// Rating variance
const variance = Object.entries(counts)
  .reduce((sum, [star, count]) => {
    const diff = parseInt(star) - avgRating;
    return sum + count * diff * diff;
  }, 0) / total;
```

**Incumbency Score (INC)**:
```javascript
// Identify entrenched market leaders
const INC = (avgRating >= 4.6 && variance < 0.15 && reviewsCount > 50) ? 1 : 0;

// Calculate market incumbency percentage
const marketINC = incumbentBusinesses / totalBusinesses;
```

### 3. AI Analysis Engine (Exact Prompts from System)

**Market Opportunity Identification**:
```
PROMPT: "Each business entry includes fields such as title, category, reviewsCount, avgRating, ratingVariance, website, phone, address, and other metadata.

Data point for you to go through:
- Search string/keyword: {{ keyword }}
- Business with avg rating and variance rating: {{ businesses }}
- Top 10 and bottom 10 liked by customers: {{ providers }}
- Tags mentioned a lot in reviews: {{ tags }}
- Reviews: {{ texts }}
- Categories: {{ categories }}
- PeopleAlsoAsk: {{ peopleAlsoSearch }}

Analyze the dataset and provide insights on niches and market opportunities for the given search string. Specifically:

Most Common Niches (High Saturation):
- Identify categories or business types that are most frequently mentioned in the dataset.
- Highlight which types dominate the local results and are potentially oversaturated.

High-Potential Missing Niches (Gaps):
- Identify niches, categories, or service types that are not present (or very underrepresented) in the dataset but are relevant to the search string.
- Think of "low-competition, high-demand" opportunities.

Unique / Differentiated Niches:
- Spot business models or service categories in the dataset that stand out as unusual, rare, or differentiated.
- Explain why they could represent a unique opportunity in this market.

Output Format: Provide your response in three clear sections:
a. Most Common Niches
b. Missing High-Potential Niches  
c. Unique or Differentiated Niches

Support your findings with references to counts, relative frequency, or notable business examples from the dataset where possible."
```

**Opportunity Assessment**:
```
PROMPT: "Based on this Google Maps business data with fields like: title, category, reviewsCount, avgRating, ratingVariance, tags, RV (review velocity), INC (incumbency).

Search string/keyword: {{ keyword }}
Business with avg rating and variance rating: {{ businesses }}
Top 10 and bottom 10 liked by customers: {{ providers }}
Tags mentioned a lot in reviews: {{ tags }}
Reviews: {{ texts }}
Categories: {{ categories }}
PeopleAlsoAsk: {{ peopleAlsoSearch }}

Based on this data, analyze the niche and return insights in the required JSON format.

Make sure the output includes:
1. Volume (give me the count based on no of reviews and review count)
2. Underserved (Give me percentage or dollar value based on the variables I shared)
3. End customers (Add more persona and their spending nature based on reviews text)
4. Arbitrage (is there anything else other than newsletter that can be profitable and no need of investment)
5. High ticket (give me dollar value what is the minimum to maximum the businesses service are offered or customers pay from reviews and business details)

Make sure you collect data from our scraped info I listed above."
```

**Market Study Analysis**:
```
PROMPT: "Analyze the dataset to provide a deep business study. Your job is to uncover what businesses are doing well, what they are failing at, and where opportunities exist.

Each business record includes:
- Business title
- Website / domain  
- Social presence (Instagram, Facebook, LinkedIn, Twitter, YouTube, TikTok, Pinterest)
- Popular Times Histogram (hourly activity data from Google, showing occupancy/foot traffic patterns)

Output Requirements:
Volume / Visibility:
- Is there enough business activity and presence?
- Do businesses have a strong digital footprint (socials, websites)?
- Is customer activity (via popular times) sufficient to signal demand?

Strengths (What they are doing well):
- Which businesses are standout examples of strong digital + physical presence?
- Which are using multiple channels effectively?

Weaknesses (What they are not doing):
- Missing websites, socials, or low engagement.
- Low or inconsistent activity at physical locations.

Opportunities / Differentiators:
- Where can new players enter and win?
- Which gaps in online presence or customer engagement could be exploited?

Top Businesses to Watch:
- Highlight 3–5 businesses worth tracking.
- Explain why (e.g., strong brand, dominant traffic, smart social usage).

Top but Underperforming Businesses:
- Identify businesses that should be leaders (size, location, reviews) but are not doing well.
- Explain what's missing.

Interesting Insights:
- Surprising or unique observations from the dataset."
```

### 4. Newsletter Content Generation (Proven System)

**Newsletter Topic Generation**:
```
PROMPT: "Based on these inputs, generate 30 newsletter ideas that meet these requirements:

Inputs (from analysis data):
- Most common niche: {{ most_common_niches }}
- Market volume: {{ volume }}
- Underserved opportunities: {{ underserved }}
- End customers (target newsletter subscribers): {{ end_customers }}
- High-ticket potential (customer spending capacity): {{ high_ticket }}
- Newsletter arbitrage opportunity: {{ arbitrage_newsletter }}
- Interesting market insights: {{ interesting_insights }}

Task: Generate 30 newsletter ideas that meet these requirements:

Topic & Theme → Catchy, highly relevant to the end customers' needs (not business owners). Should map to the most common niche(s), underserved opportunities, or unique market insights.

Unique Angle → Make the topic stand out (insider knowledge, hidden pain points, trend spotting, exclusive local insights, actionable advice also something around DIY too).

Value for End Customers → Clearly explain what subscribers (residents, homeowners, renters, etc.) will gain — e.g., money savings, better choices, time saved, lifestyle improvements, inspiration, or avoiding common mistakes.

Strong Subject Lines → Provide 2 emotionally engaging, highly clickable subject line options for each topic.

Excitement Factor → Explain why subscribers would feel compelled to open this newsletter and keep reading every week.

Business Rationale → Show how this topic indirectly creates monetization opportunities by aligning with high-volume niches, underserved pain points, newsletter arbitrage potential, or high-ticket local spending patterns."
```

## Technical Implementation (Cloud Code Approach)

### Architecture Overview
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Data Sources  │───▶│  Processing      │───▶│   AI Analysis   │
│                 │    │  Engine          │    │                 │
│ • Apify API     │    │ • Data cleaning  │    │ • Market gaps   │
│ • Google Maps   │    │ • Calculations   │    │ • Opportunities │
│ • Reviews       │    │ • Aggregation    │    │ • Content gen   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   Output        │
                       │                 │
                       │ • Google Sheets │
                       │ • Reports       │
                       │ • Dashboards    │
                       └─────────────────┘
```

### Core Components

**1. Data Scraper Module** (`src/scrapers/apifyGoogleMaps.js`):
```javascript
class TherapyMarketScraper {
  constructor(apifyApiKey) {
    this.apifyApiKey = apifyApiKey;
    this.baseUrl = 'https://api.apify.com/v2';
  }

  async scrapeTherapyBusinesses(city, keywords) {
    const config = {
      "includeWebResults": false,
      "language": "en", 
      "locationQuery": `${city}, Ontario, Canada`,
      "maxImages": 0,
      "maxReviews": 10,
      "reviewsSort": "newest",
      "reviewsStartDate": "100 days",
      "scrapeContacts": true,
      "scrapeDirectories": false,
      "scrapeImageAuthors": false,
      "scrapePlaceDetailPage": true,
      "scrapeReviewsPersonalData": true,
      "scrapeTableReservationProvider": false,
      "searchStringsArray": keywords,
      "skipClosedPlaces": true
    };

    // Run Apify actor and return dataset ID
    const run = await this.runApifyActor(config);
    return this.getDatasetResults(run.defaultDatasetId);
  }

  async runApifyActor(config) {
    const response = await fetch(`${this.baseUrl}/acts/compass~google-maps-scraper/runs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apifyApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(config)
    });
    return response.json();
  }

  async getDatasetResults(datasetId) {
    const response = await fetch(`${this.baseUrl}/datasets/${datasetId}/items?token=${this.apifyApiKey}`);
    return response.json();
  }
}
```

**2. Market Analysis Engine** (`src/analysis/marketAnalyzer.js`):
```javascript
class MarketAnalyzer {
  calculateReviewVelocity(reviews, windowDays = 100) {
    const cutoff = new Date(Date.now() - windowDays * 24 * 60 * 60 * 1000);
    const recentReviews = reviews.filter(r => new Date(r.publishedAtDate) >= cutoff);
    return recentReviews.length > 0 ? (recentReviews.length / windowDays) * 30 : 0;
  }

  calculateProviderDensity(businesses, searchString) {
    const providersForKeyword = businesses.filter(b => b.searchString === searchString);
    return {
      totalProviders: providersForKeyword.length,
      searchString: searchString,
      titles: providersForKeyword.map(b => b.title)
    };
  }

  calculateRatingMetrics(reviewsDistribution) {
    const counts = {
      1: reviewsDistribution.oneStar || 0,
      2: reviewsDistribution.twoStar || 0, 
      3: reviewsDistribution.threeStar || 0,
      4: reviewsDistribution.fourStar || 0,
      5: reviewsDistribution.fiveStar || 0
    };

    const total = Object.values(counts).reduce((a,b) => a+b, 0);
    if (total === 0) return { avgRating: null, variance: null };

    // Calculate average
    const avgRating = Object.entries(counts)
      .reduce((sum, [star, count]) => sum + (parseInt(star) * count), 0) / total;

    // Calculate variance  
    const variance = Object.entries(counts)
      .reduce((sum, [star, count]) => {
        const diff = parseInt(star) - avgRating;
        return sum + count * diff * diff;
      }, 0) / total;

    return { avgRating, variance, reviewsCount: total };
  }

  calculateIncumbencyScore(avgRating, variance, reviewsCount) {
    return (avgRating >= 4.6 && variance < 0.15 && reviewsCount > 50) ? 1 : 0;
  }

  identifyTopBottomPerformers(businesses) {
    const sorted = businesses
      .filter(b => b.avgRating !== null)
      .sort((a, b) => {
        if (b.INC !== a.INC) return b.INC - a.INC;
        return (b.reviewsCount || 0) - (a.reviewsCount || 0);
      });

    return {
      top10: sorted.slice(0, 10),
      bottom10: sorted.slice(-10)
    };
  }
}
```

**3. AI Integration** (`src/ai/opportunityAnalyzer.js`):
```javascript
class OpportunityAnalyzer {
  constructor(aiProvider = 'openai') {
    this.aiProvider = aiProvider;
  }

  async analyzeMarketOpportunities(marketData) {
    const prompt = this.buildNicheAnalysisPrompt(marketData);
    
    const response = await this.callAI(prompt, {
      model: 'gpt-4-turbo',
      response_format: { type: "json_object" },
      schema: {
        type: "object",
        properties: {
          a_most_common_niches: {
            type: "array",
            items: {
              type: "object", 
              properties: {
                niche: { type: "string" },
                count: { type: "number" },
                example_businesses: { type: "array", items: { type: "string" } }
              }
            }
          },
          b_missing_high_potential_niches: {
            type: "array",
            items: {
              type: "object",
              properties: {
                niche: { type: "string" },
                rationale: { type: "string" }
              }
            }
          },
          c_unique_or_differentiated_niches: {
            type: "array", 
            items: {
              type: "object",
              properties: {
                niche: { type: "string" },
                example_business: { type: "string" },
                rationale: { type: "string" }
              }
            }
          }
        }
      }
    });

    return response;
  }

  async analyzeOpportunityMetrics(marketData) {
    const prompt = this.buildOpportunityPrompt(marketData);
    
    return await this.callAI(prompt, {
      schema: {
        type: "object",
        properties: {
          volume: {
            type: "object",
            properties: {
              number: { type: "number" },
              answer: { type: "string", enum: ["yes", "no"] },
              rationale: { type: "string" }
            }
          },
          underserved: {
            type: "object", 
            properties: {
              answer: { type: "string", enum: ["yes", "no"] },
              what_is_underserved: { type: "string" },
              rationale: { type: "string" }
            }
          },
          end_customers: {
            type: "object",
            properties: {
              who: { type: "string" },
              rationale: { type: "string" }
            }
          },
          arbitrage_newsletter: {
            type: "object",
            properties: {
              answer: { type: "string", enum: ["yes", "no"] },
              what_arbitrage: { type: "string" },
              rationale: { type: "string" }
            }
          },
          high_ticket: {
            type: "object",
            properties: {
              what_is_high_ticket: { type: "string" },
              answer: { type: "string", enum: ["yes", "no"] },
              rationale: { type: "string" }
            }
          },
          summary: { type: "string" }
        }
      }
    });
  }

  async generateNewsletterContent(analysisData) {
    const prompt = this.buildNewsletterPrompt(analysisData);
    
    return await this.callAI(prompt, {
      schema: {
        type: "array",
        items: {
          type: "object",
          properties: {
            topic: { type: "string" },
            angle: { type: "string" },
            end_customer_value: { type: "string" },
            subject_lines: { type: "array", items: { type: "string" } },
            excitement_factor: { type: "string" },
            business_rationale: { type: "string" }
          }
        }
      }
    });
  }

  buildNicheAnalysisPrompt(data) {
    return `Each business entry includes fields such as title, category, reviewsCount, avgRating, ratingVariance, website, phone, address, and other metadata.

Data point for you to go through:
Search string/keyword - ${data.keyword}
Business with avg rating and variance rating ${JSON.stringify(data.businesses)}
Top 10 and bottom 10 liked by customers ${JSON.stringify(data.providers)} 
Tags mentioned a lot in reviews - ${JSON.stringify(data.tags)}
Reviews - ${JSON.stringify(data.texts)}
Categories - ${JSON.stringify(data.categories)}
PeopleAlsoAsk - ${JSON.stringify(data.peopleAlsoSearch)}

Analyze the dataset and provide insights on niches and market opportunities for the given search string. Specifically:

Most Common Niches (High Saturation):
Identify categories or business types that are most frequently mentioned in the dataset.
Highlight which types dominate the local results and are potentially oversaturated.

High-Potential Missing Niches (Gaps):
Identify niches, categories, or service types that are not present (or very underrepresented) in the dataset but are relevant to the search string.
Think of "low-competition, high-demand" opportunities.

Unique / Differentiated Niches:
Spot business models or service categories in the dataset that stand out as unusual, rare, or differentiated.
Explain why they could represent a unique opportunity in this market.

Output Format:
Provide your response in three clear sections:
a. Most Common Niches
b. Missing High-Potential Niches
c. Unique or Differentiated Niches

Support your findings with references to counts, relative frequency, or notable business examples from the dataset where possible.`;
  }
}
```

**4. Data Pipeline** (`src/pipeline/therapyPipeline.js`):
```javascript
class TherapyMarketPipeline {
  constructor(config) {
    this.scraper = new TherapyMarketScraper(config.apifyApiKey);
    this.analyzer = new MarketAnalyzer();
    this.aiAnalyzer = new OpportunityAnalyzer();
    this.sheets = new GoogleSheetsClient(config.googleCredentials);
  }

  async runFullAnalysis(city, keywords) {
    console.log(`Starting analysis for ${city} with keywords: ${keywords.join(', ')}`);

    // Step 1: Scrape data
    const rawData = await this.scraper.scrapeTherapyBusinesses(city, keywords);
    
    // Step 2: Process and calculate metrics
    const processedData = this.processRawData(rawData);
    
    // Step 3: Run AI analysis
    const aiInsights = await this.runAIAnalysis(processedData);
    
    // Step 4: Generate newsletter content
    const newsletterIdeas = await this.aiAnalyzer.generateNewsletterContent(aiInsights);
    
    // Step 5: Save to Google Sheets
    await this.saveResults(city, processedData, aiInsights, newsletterIdeas);
    
    return {
      city,
      processedData,
      aiInsights,
      newsletterIdeas,
      sheetsUrl: this.sheetsUrl
    };
  }

  processRawData(rawData) {
    const businesses = [];
    const reviews = [];
    
    for (const business of rawData) {
      // Calculate metrics for each business
      const ratingMetrics = this.analyzer.calculateRatingMetrics(business.reviewsDistribution);
      const reviewVelocity = this.analyzer.calculateReviewVelocity(business.reviews || []);
      const incumbencyScore = this.analyzer.calculateIncumbencyScore(
        ratingMetrics.avgRating, 
        ratingMetrics.variance, 
        ratingMetrics.reviewsCount
      );

      businesses.push({
        ...business,
        ...ratingMetrics,
        reviewVelocity,
        incumbencyScore
      });

      // Collect all reviews for analysis
      if (business.reviews) {
        reviews.push(...business.reviews.map(r => ({
          ...r,
          businessTitle: business.title,
          searchString: business.searchString
        })));
      }
    }

    // Calculate market-level metrics
    const marketMetrics = this.calculateMarketMetrics(businesses);
    
    return {
      businesses,
      reviews,
      marketMetrics,
      topBottomPerformers: this.analyzer.identifyTopBottomPerformers(businesses)
    };
  }

  calculateMarketMetrics(businesses) {
    const byKeyword = {};
    
    for (const business of businesses) {
      const keyword = business.searchString || 'unknown';
      
      if (!byKeyword[keyword]) {
        byKeyword[keyword] = {
          keyword,
          businesses: [],
          totalProviders: 0,
          avgReviewVelocity: 0,
          avgRating: 0,
          avgVariance: 0,
          incumbencyRate: 0
        };
      }
      
      byKeyword[keyword].businesses.push(business);
      byKeyword[keyword].totalProviders++;
    }

    // Calculate averages per keyword
    for (const [keyword, data] of Object.entries(byKeyword)) {
      const validBusinesses = data.businesses.filter(b => b.avgRating !== null);
      
      data.avgReviewVelocity = data.businesses
        .reduce((sum, b) => sum + (b.reviewVelocity || 0), 0) / data.businesses.length;
      
      if (validBusinesses.length > 0) {
        data.avgRating = validBusinesses
          .reduce((sum, b) => sum + b.avgRating, 0) / validBusinesses.length;
        data.avgVariance = validBusinesses
          .reduce((sum, b) => sum + b.variance, 0) / validBusinesses.length;
        data.incumbencyRate = validBusinesses
          .reduce((sum, b) => sum + b.incumbencyScore, 0) / validBusinesses.length;
      }
    }

    return byKeyword;
  }

  async runAIAnalysis(processedData) {
    const results = {};
    
    for (const [keyword, data] of Object.entries(processedData.marketMetrics)) {
      console.log(`Running AI analysis for keyword: ${keyword}`);
      
      const analysisInput = {
        keyword,
        businesses: data.businesses,
        providers: processedData.topBottomPerformers,
        tags: this.extractTags(data.businesses),
        texts: this.extractReviewTexts(processedData.reviews, keyword),
        categories: this.extractCategories(data.businesses),
        peopleAlsoSearch: this.extractPeopleAlsoSearch(data.businesses)
      };

      // Run all AI analyses in parallel
      const [nicheAnalysis, opportunityAnalysis, marketStudy] = await Promise.all([
        this.aiAnalyzer.analyzeMarketOpportunities(analysisInput),
        this.aiAnalyzer.analyzeOpportunityMetrics(analysisInput), 
        this.aiAnalyzer.analyzeMarketStudy(analysisInput)
      ]);

      results[keyword] = {
        nicheAnalysis,
        opportunityAnalysis,
        marketStudy,
        marketMetrics: data
      };
    }
    
    return results;
  }

  extractTags(businesses) {
    const allTags = [];
    for (const business of businesses) {
      if (business.reviewsTags) {
        allTags.push(...business.reviewsTags.map(tag => tag.title || tag));
      }
    }
    return [...new Set(allTags)];
  }

  extractReviewTexts(reviews, keyword) {
    return reviews
      .filter(r => r.searchString === keyword)
      .map(r => r.text)
      .filter(Boolean)
      .slice(0, 50); // Limit to 50 reviews
  }

  extractCategories(businesses) {
    return [...new Set(businesses.map(b => b.categoryName).filter(Boolean))];
  }

  extractPeopleAlsoSearch(businesses) {
    const allPAS = [];
    for (const business of businesses) {
      if (business.peopleAlsoSearch) {
        allPAS.push(...business.peopleAlsoSearch.map(p => p.title || p));
      }
    }
    return [...new Set(allPAS)];
  }

  async saveResults(city, processedData, aiInsights, newsletterIdeas) {
    // Create new spreadsheet
    const spreadsheet = await this.sheets.createSpreadsheet(`${city} Therapy Market Analysis ${new Date().toISOString().split('T')[0]}`);
    this.sheetsUrl = spreadsheet.spreadsheetUrl;

    // Create sheets for different data types
    await this.sheets.createSheet(spreadsheet.spreadsheetId, 'Market Overview');
    await this.sheets.createSheet(spreadsheet.spreadsheetId, 'Business Details');
    await this.sheets.createSheet(spreadsheet.spreadsheetId, 'AI Insights');
    await this.sheets.createSheet(spreadsheet.spreadsheetId, 'Newsletter Ideas');

    // Populate sheets with data
    await this.populateMarketOverviewSheet(spreadsheet.spreadsheetId, processedData);
    await this.populateBusinessDetailsSheet(spreadsheet.spreadsheetId, processedData.businesses);
    await this.populateAIInsightsSheet(spreadsheet.spreadsheetId, aiInsights);
    await this.populateNewsletterIdeasSheet(spreadsheet.spreadsheetId, newsletterIdeas);
  }
}
```

## Ontario-Specific Considerations

### 1. Regulatory Compliance
- **CRPO (College of Registered Psychotherapists of Ontario)** requirements
- **CPSO (College of Physicians and Surgeons of Ontario)** for psychiatrists  
- **CPO (College of Psychologists of Ontario)** regulations
- Privacy legislation (PIPEDA, PHIPA)

### 2. Market Segmentation
**Urban vs. Rural Analysis**:
- Urban: Focus on specialization and convenience
- Rural: Emphasize accessibility and virtual services
- Suburban: Balance of both approaches

**Therapy Type Opportunities**:
- Individual therapy (anxiety, depression, trauma)
- Couples and family therapy
- Specialized therapy (EMDR, CBT, DBT)
- Virtual therapy platforms
- Corporate mental health services

### 3. Seasonal Patterns
- **January-March**: High demand (New Year resolutions, seasonal depression)
- **September**: Back-to-school anxiety, life transitions
- **November-December**: Holiday stress, family issues

## Implementation Phases

### Phase 1: MVP Development (4-6 weeks)
**Core Features**:
- Apify Google Maps scraping for 5 major Ontario cities
- Basic market metrics calculation (RV, PD, AR, VAR, INC)
- Simple AI analysis for opportunity identification
- Google Sheets output with structured data

**Success Criteria**:
- Successfully scrape and analyze therapy businesses in Toronto
- Generate actionable market insights using proven formulas
- Identify at least 3 clear market opportunities per city

### Phase 2: Enhanced Analysis (4-6 weeks)
**Additional Features**:
- Review sentiment analysis using exact tag extraction methods
- Competitive benchmarking with top/bottom performer identification
- Newsletter content generation using proven prompts
- Interactive dashboard for real-time insights

**Success Criteria**:
- Comprehensive analysis of all major Ontario markets
- AI-generated newsletter content ready for publication
- Dashboard providing actionable business intelligence

### Phase 3: Automation & Scale (4-6 weeks)
**Advanced Features**:
- Automated weekly market updates
- Trend analysis and forecasting
- Integration with business planning tools
- Multi-user collaboration features

**Success Criteria**:
- Fully automated market monitoring system
- Predictive analytics for market trends
- Scalable to other provinces/markets

## Technical Requirements

### Development Stack
- **Backend**: Node.js with Express
- **Database**: PostgreSQL for structured data, MongoDB for unstructured
- **AI Integration**: OpenAI GPT-4 or Anthropic Claude
- **Scraping**: Apify Google Maps Scraper API
- **Frontend**: React with data visualization libraries (Chart.js, D3.js)
- **Hosting**: Vercel or AWS for scalability
- **Sheets Integration**: Google Sheets API

### Data Storage Schema
```sql
-- Core business data
CREATE TABLE therapy_businesses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address TEXT,
  city VARCHAR(100),
  province VARCHAR(50),
  phone VARCHAR(20),
  website VARCHAR(255),
  google_rating DECIMAL(2,1),
  total_reviews INTEGER,
  review_velocity DECIMAL(5,2),
  incumbency_score INTEGER,
  specialties TEXT[],
  search_string VARCHAR(255),
  scraped_at TIMESTAMP,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Market analysis results
CREATE TABLE market_analysis (
  id SERIAL PRIMARY KEY,
  city VARCHAR(100),
  search_string VARCHAR(255),
  analysis_date DATE,
  provider_density INTEGER,
  avg_review_velocity DECIMAL(5,2),
  avg_rating DECIMAL(3,2),
  rating_variance DECIMAL(5,4),
  incumbency_rate DECIMAL(3,2),
  opportunity_score INTEGER,
  ai_insights JSONB,
  created_at TIMESTAMP
);

-- Newsletter content
CREATE TABLE newsletter_ideas (
  id SERIAL PRIMARY KEY,
  city VARCHAR(100),
  topic VARCHAR(255),
  angle TEXT,
  end_customer_value TEXT,
  subject_lines TEXT[],
  excitement_factor TEXT,
  business_rationale TEXT,
  generated_at TIMESTAMP
);
```

### API Integrations
- **Apify Google Maps Scraper**: Primary data source
- **OpenAI/Anthropic**: AI analysis and content generation
- **Statistics Canada**: Population and demographic data
- **Google Sheets API**: Data output and collaboration
- **Google Places API**: Additional business information

## Success Metrics & KPIs

### Market Research Accuracy
- **Opportunity Validation Rate**: 80%+ of identified opportunities should show actual market potential
- **Prediction Accuracy**: Market entry recommendations should achieve projected success rates
- **Data Freshness**: Market data updated weekly with 95% accuracy

### Business Impact Metrics
- **Market Entry ROI**: Track success of businesses launched based on tool recommendations
- **Time to Market**: Reduce market research time from weeks to hours
- **Cost Savings**: Eliminate need for expensive market research firms ($15,000+ saved per analysis)

### Tool Performance
- **Processing Speed**: Complete city analysis in under 30 minutes
- **Report Quality**: AI-generated insights should require minimal human editing
- **User Adoption**: 90% of users find insights actionable within first use

## Budget Estimation

### Development Costs (One-time)
- **Development Team**: $50,000 - $75,000
- **AI API Credits**: $2,000 - $5,000 during development
- **Infrastructure Setup**: $3,000 - $5,000
- **Total Development**: $55,000 - $85,000

### Operational Costs (Monthly)
- **Hosting & Infrastructure**: $200 - $500
- **Apify API Costs**: $300 - $800 (based on scraping volume)
- **AI Processing**: $400 - $1,000 (based on analysis volume)
- **Google Workspace**: $100 - $300
- **Total Monthly**: $1,000 - $2,600

### Revenue Potential
Based on The Vibe Marketers' proven success model:
- **Market Research Reports**: $2,000 - $5,000 per city analysis
- **Ongoing Market Monitoring**: $500 - $1,500/month per client
- **Newsletter Services**: $1,000 - $3,000/month per market
- **Consultation Services**: $150 - $300/hour
- **Potential Monthly Revenue**: $10,000 - $30,000 (following their model)

## Risk Mitigation

### Technical Risks
- **Rate Limiting**: Implement proper delays and API rotation
- **Data Quality**: Multiple validation layers and human review checkpoints
- **API Dependencies**: Backup scraping methods and alternative data sources

### Legal Risks  
- **Data Privacy**: Comply with Canadian privacy laws (PIPEDA, PHIPA)
- **Scraping Compliance**: Respect robots.txt and terms of service
- **Professional Regulations**: Ensure recommendations don't constitute professional advice

### Market Risks
- **Regulation Changes**: Monitor healthcare regulation updates
- **Market Saturation**: Continuously validate opportunity assessments
- **Economic Factors**: Account for economic impacts on therapy demand

## Competitive Advantages

### Unique Value Propositions
1. **Ontario-Specific Focus**: Deep understanding of local regulations and market dynamics
2. **Therapy Market Specialization**: Purpose-built for mental health services
3. **Proven AI Methodology**: Based on successful $30K/month business model
4. **Actionable Recommendations**: Specific business model guidance
5. **Continuous Monitoring**: Real-time market intelligence

### Differentiation from Generic Tools
- **Healthcare Compliance**: Built-in understanding of therapy regulations
- **Specialized Metrics**: Therapy-specific KPIs and success factors
- **Local Market Knowledge**: Ontario cities, demographics, and trends
- **Business Model Guidance**: Specific recommendations for market entry strategies
- **Newsletter Integration**: Built-in content generation for lead generation

## Success Stories & Use Cases

### Potential Applications

**Use Case 1: Marketing Agency Decision**
- Analyze Kitchener-Waterloo therapy market using proven methodology
- Identify 15 therapists with poor online presence but good reviews
- Recommend SEO/marketing services targeting anxiety therapy keywords
- Projected revenue: $5,000-$15,000/month (based on proven results)

**Use Case 2: Rent-and-Rank Strategy**
- Identify underserved "couples therapy Hamilton" market
- Low competition, high search volume detected by AI analysis
- Build authority site using newsletter content generation
- Generate leads for partner therapists

**Use Case 3: New Clinic Opportunity**
- Discover Oshawa has high therapy demand but only 3 providers
- Significant wait times mentioned in reviews (extracted by AI)
- Recommend opening specialized anxiety clinic
- Market supports 2-3 additional providers based on density analysis

## Implementation Roadmap

### Month 1-2: Foundation
- Set up development environment and cloud infrastructure
- Implement Apify integration and data scraping pipeline
- Build core market analysis calculations (RV, PD, AR, VAR, INC)
- Create basic Google Sheets output functionality

### Month 3-4: AI Integration
- Implement AI analysis using proven prompts from The Vibe Marketers
- Build niche identification and opportunity assessment
- Create market study analysis functionality
- Develop newsletter content generation system

### Month 5-6: Enhancement & Testing
- Build user interface and dashboard
- Implement automated reporting and scheduling
- Conduct thorough testing with Ontario therapy markets
- Refine AI prompts based on therapy-specific insights

### Month 7-8: Launch & Scale
- Launch beta version with select Ontario cities
- Gather user feedback and iterate
- Scale to full Ontario coverage
- Develop go-to-market strategy

## Conclusion

This Ontario Therapy Market Research Tool represents a significant opportunity to apply The Vibe Marketers' proven "Boring Business" methodology to the growing mental health market. By leveraging their exact technical implementation, AI prompts, and business model, we can identify underserved opportunities and provide data-driven guidance for market entry decisions.

The tool addresses a real need in the therapy market while building on validated techniques that have already generated $30,000/month in revenue in other sectors. With Ontario's growing focus on mental health and the increasing acceptance of therapy services, the timing is optimal for this specialized market research solution.

**Key Success Factors**:
1. **Proven Methodology**: Direct implementation of successful automation workflow
2. **Exact Technical Replication**: Using their precise calculations and AI prompts
3. **Therapy Market Focus**: Specialized for mental health services and regulations
4. **Actionable Outputs**: Clear business model recommendations and newsletter content
5. **Scalable Architecture**: Cloud-based system that can expand to other markets

**Next Steps**:
1. Validate technical feasibility with Apify Google Maps scraper
2. Conduct initial market research on 2-3 Ontario cities using their methodology
3. Build MVP focusing on core scraping, analysis, and AI features
4. Test with potential users and iterate based on feedback
5. Scale to full Ontario coverage and advanced features

This PRD provides a comprehensive roadmap for building a specialized tool that could become the definitive resource for therapy market intelligence in Ontario, with potential for expansion to other provinces and healthcare sectors using the same proven framework.
