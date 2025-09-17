#!/usr/bin/env python3
"""
NextStepTherapy.ca Revenue Impact Analysis
Calculate potential revenue from fixing technical SEO issues
"""

import pandas as pd
import numpy as np

def calculate_revenue_impact():
    """Calculate revenue impact of fixing 404 errors and technical issues"""
    
    # Load GSC data
    queries_df = pd.read_csv('/home/ubuntu/gsc_queries.csv')
    pages_df = pd.read_csv('/home/ubuntu/gsc_pages.csv')
    
    # Conservative click value for NextStepTherapy (25% of market research value)
    # Market research showed $24.30 CAD per click, using 25% for conservative estimate
    value_per_click = 24.30 * 0.25  # $6.08 CAD per click
    
    # Current performance
    current_clicks = queries_df['Clicks'].sum()
    current_impressions = queries_df['Impressions'].sum()
    current_ctr = current_clicks / current_impressions if current_impressions > 0 else 0
    
    print("=== NEXTSTEPTHERAPY.CA REVENUE IMPACT ANALYSIS ===")
    print(f"Current Performance (28 days):")
    print(f"• Total Clicks: {current_clicks}")
    print(f"• Total Impressions: {current_impressions:,}")
    print(f"• Current CTR: {current_ctr:.3f}% ({current_ctr*100:.1f}%)")
    print(f"• Current Monthly Revenue: ${current_clicks * value_per_click:.2f} CAD")
    
    # Identify 404 error pages and their impact
    broken_pages = [
        {'url': 'virtual-therapy-ontario.html', 'impressions': 412, 'position': 84.7, 'issue': '404 Error'},
        {'url': 'online-counselling-remote-workers.html', 'impressions': 86, 'position': 8.8, 'issue': '404 Error'},
        {'url': 'virtual-therapy-burlington.html', 'impressions': 658, 'position': 34.0, 'issue': '404 Error (likely)'},
        {'url': 'services/life-transitions.html', 'impressions': 190, 'position': 82.6, 'issue': '404 Error (likely)'},
        {'url': 'therapist-mississauga.html', 'impressions': 144, 'position': 55.7, 'issue': '404 Error (likely)'}
    ]
    
    print(f"\n=== CRITICAL 404 ERROR IMPACT ===")
    
    total_lost_impressions = 0
    total_potential_revenue = 0
    
    # CTR benchmarks by position
    ctr_by_position = {
        1: 0.316, 2: 0.246, 3: 0.212, 4: 0.147, 5: 0.103,
        6: 0.082, 7: 0.067, 8: 0.056, 9: 0.048, 10: 0.042,
        15: 0.025, 20: 0.015, 30: 0.008, 50: 0.003, 80: 0.001
    }
    
    def get_ctr_for_position(pos):
        """Get CTR for a given position"""
        if pos <= 10:
            return ctr_by_position.get(int(pos), 0.02)
        elif pos <= 20:
            return 0.015
        elif pos <= 30:
            return 0.008
        elif pos <= 50:
            return 0.003
        else:
            return 0.001
    
    for page in broken_pages:
        impressions = page['impressions']
        position = page['position']
        current_ctr = get_ctr_for_position(position)
        
        # If page worked, expected clicks at current position
        expected_clicks = impressions * current_ctr
        potential_revenue = expected_clicks * value_per_click
        
        total_lost_impressions += impressions
        total_potential_revenue += potential_revenue
        
        print(f"• {page['url'][:50]}...")
        print(f"  {impressions} impressions at pos {position:.1f} → {expected_clicks:.1f} lost clicks = ${potential_revenue:.2f} CAD/month")
    
    print(f"\nTotal Lost Opportunity from 404 Errors:")
    print(f"• Lost Impressions: {total_lost_impressions:,}")
    print(f"• Lost Monthly Revenue: ${total_potential_revenue:.2f} CAD")
    print(f"• Lost Annual Revenue: ${total_potential_revenue * 12:.2f} CAD")
    
    # Calculate improvement scenarios
    print(f"\n=== IMPROVEMENT SCENARIOS ===")
    
    # Scenario 1: Fix 404 errors only
    scenario1_clicks = current_clicks + (total_lost_impressions * 0.01)  # Conservative 1% CTR
    scenario1_revenue = scenario1_clicks * value_per_click
    scenario1_uplift = scenario1_revenue - (current_clicks * value_per_click)
    
    print(f"Scenario 1 - Fix 404 Errors (1% CTR):")
    print(f"• Monthly Clicks: {current_clicks} → {scenario1_clicks:.0f} (+{scenario1_clicks - current_clicks:.0f})")
    print(f"• Monthly Revenue: ${current_clicks * value_per_click:.2f} → ${scenario1_revenue:.2f} (+${scenario1_uplift:.2f})")
    print(f"• Annual Revenue Uplift: ${scenario1_uplift * 12:.2f}")
    
    # Scenario 2: Fix 404s + improve positions to top 10
    high_potential_queries = queries_df[
        (queries_df['Impressions'] >= 20) & 
        (queries_df['Position'] > 10) & 
        (queries_df['Clicks'] == 0)
    ].copy()
    
    scenario2_additional_clicks = 0
    for _, query in high_potential_queries.head(10).iterrows():
        # Assume improvement to position 8 (5.6% CTR)
        potential_clicks = query['Impressions'] * 0.056
        scenario2_additional_clicks += potential_clicks
    
    scenario2_total_clicks = scenario1_clicks + scenario2_additional_clicks
    scenario2_revenue = scenario2_total_clicks * value_per_click
    scenario2_uplift = scenario2_revenue - (current_clicks * value_per_click)
    
    print(f"\nScenario 2 - Fix 404s + Improve Top Keywords to Pos 8:")
    print(f"• Monthly Clicks: {current_clicks} → {scenario2_total_clicks:.0f} (+{scenario2_total_clicks - current_clicks:.0f})")
    print(f"• Monthly Revenue: ${current_clicks * value_per_click:.2f} → ${scenario2_revenue:.2f} (+${scenario2_uplift:.2f})")
    print(f"• Annual Revenue Uplift: ${scenario2_uplift * 12:.2f}")
    
    # Scenario 3: Aggressive optimization - top 3 positions
    scenario3_additional_clicks = 0
    for _, query in high_potential_queries.head(15).iterrows():
        # Assume improvement to position 3 (21.2% CTR)
        potential_clicks = query['Impressions'] * 0.212
        scenario3_additional_clicks += potential_clicks
    
    scenario3_total_clicks = scenario1_clicks + scenario3_additional_clicks
    scenario3_revenue = scenario3_total_clicks * value_per_click
    scenario3_uplift = scenario3_revenue - (current_clicks * value_per_click)
    
    print(f"\nScenario 3 - Fix 404s + Aggressive SEO (Top 3 positions):")
    print(f"• Monthly Clicks: {current_clicks} → {scenario3_total_clicks:.0f} (+{scenario3_total_clicks - current_clicks:.0f})")
    print(f"• Monthly Revenue: ${current_clicks * value_per_click:.2f} → ${scenario3_revenue:.2f} (+${scenario3_uplift:.2f})")
    print(f"• Annual Revenue Uplift: ${scenario3_uplift * 12:.2f}")
    
    # Rank-and-rent potential
    print(f"\n=== RANK-AND-RENT REVENUE POTENTIAL ===")
    
    # Conservative rank-and-rent pricing (15% of generated revenue)
    rent_rate_conservative = 0.15
    rent_rate_moderate = 0.25
    rent_rate_aggressive = 0.35
    
    print(f"Monthly Rank-and-Rent Pricing Potential:")
    print(f"• Conservative (15%): ${scenario2_revenue * rent_rate_conservative:.2f}/month")
    print(f"• Moderate (25%): ${scenario2_revenue * rent_rate_moderate:.2f}/month") 
    print(f"• Aggressive (35%): ${scenario2_revenue * rent_rate_aggressive:.2f}/month")
    
    print(f"\nAnnual Rank-and-Rent Revenue Potential:")
    print(f"• Conservative: ${scenario2_revenue * rent_rate_conservative * 12:.2f}/year")
    print(f"• Moderate: ${scenario2_revenue * rent_rate_moderate * 12:.2f}/year")
    print(f"• Aggressive: ${scenario2_revenue * rent_rate_aggressive * 12:.2f}/year")
    
    # ROI for therapist
    therapist_investment_moderate = scenario2_revenue * rent_rate_moderate * 12
    therapist_revenue_gain = scenario2_uplift * 12
    therapist_net_gain = therapist_revenue_gain - therapist_investment_moderate
    therapist_roi = (therapist_net_gain / therapist_investment_moderate) * 100 if therapist_investment_moderate > 0 else 0
    
    print(f"\n=== THERAPIST ROI ANALYSIS ===")
    print(f"Annual Investment (25% rate): ${therapist_investment_moderate:.2f}")
    print(f"Annual Revenue Gain: ${therapist_revenue_gain:.2f}")
    print(f"Annual Net Gain: ${therapist_net_gain:.2f}")
    print(f"ROI: {therapist_roi:.1f}%")
    
    return {
        'current_revenue': current_clicks * value_per_click,
        'scenario1_revenue': scenario1_revenue,
        'scenario2_revenue': scenario2_revenue,
        'scenario3_revenue': scenario3_revenue,
        'rent_potential_moderate': scenario2_revenue * rent_rate_moderate,
        'therapist_roi': therapist_roi
    }

if __name__ == "__main__":
    results = calculate_revenue_impact()

