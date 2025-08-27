#!/usr/bin/env python3
"""
Simple runner script for NextStep Therapy rank tracking
Use this for easier manual testing and one-time reports
"""

import os
import sys
from nextstep_rank_tracker import NextStepRankTracker

def load_env():
    """Load environment variables from .env file"""
    try:
        with open('.env', 'r') as f:
            for line in f:
                if '=' in line and not line.startswith('#'):
                    key, value = line.strip().split('=', 1)
                    os.environ[key] = value
    except FileNotFoundError:
        print("❌ .env file not found. Run setup_tracking.sh first.")
        sys.exit(1)

def main():
    load_env()
    
    username = os.getenv('DATAFORSEO_USERNAME')
    password = os.getenv('DATAFORSEO_PASSWORD')
    
    if not username or not password:
        print("❌ DataForSEO credentials not found in .env file")
        sys.exit(1)
    
    tracker = NextStepRankTracker(username, password)
    
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python3 run_tracker.py setup     - Initial keyword setup")
        print("  python3 run_tracker.py update    - Get latest rankings")
        print("  python3 run_tracker.py report    - Generate daily report")
        print("  python3 run_tracker.py weekly    - Generate weekly report")
        print("  python3 run_tracker.py start     - Start automated tracking")
        return
    
    command = sys.argv[1].lower()
    
    if command == 'setup':
        print("🎯 Setting up keyword tracking...")
        nextstep_result = tracker.setup_rank_tracking()
        print(f"NextStep tracking: {nextstep_result}")
        
        competitor_result = tracker.setup_competitor_tracking()
        print(f"Competitor tracking: {competitor_result}")
        
        print("✅ Setup complete! Rankings available in 24-48 hours.")
        
    elif command == 'update':
        print("🔄 Getting latest rankings...")
        tracker.run_daily_update()
        
    elif command == 'report':
        print("📊 Generating daily report...")
        report = tracker.generate_daily_report()
        
        print(f"\n📈 NEXTSTEP THERAPY DAILY RANKINGS - {report['date']}")
        print("=" * 50)
        print(f"Total keywords tracked: {report['total_keywords_tracked']}")
        print(f"Keywords in top 10: {report['keywords_in_top_10']}")
        print(f"Keywords in top 50: {report['keywords_in_top_50']}")
        print(f"Average position: {report['average_position']:.1f}")
        
        if report['significant_changes']:
            print(f"\n🚨 Significant changes:")
            for change in report['significant_changes'][:5]:
                direction = "📈 UP" if change['change'] > 0 else "📉 DOWN"
                print(f"  {direction} '{change['keyword']}': {change['previous_position']} → {change['current_position']}")
        
        if report['top_performers']:
            print(f"\n🏆 Top performers (position ≤10):")
            for keyword in report['top_performers'][:5]:
                print(f"  #{keyword['position']} - {keyword['keyword']} ({keyword['search_volume']}/month)")
                
    elif command == 'weekly':
        print("📅 Generating weekly report...")
        report_html = tracker.generate_weekly_report()
        
        filename = f"weekly_report_{tracker.generate_daily_report()['date']}.html"
        with open(filename, 'w') as f:
            f.write(report_html)
        print(f"✅ Weekly report saved as {filename}")
        
    elif command == 'start':
        print("⏰ Starting automated tracking...")
        print("Daily updates: 6:00 AM")
        print("Weekly reports: Mondays 8:00 AM") 
        print("Press Ctrl+C to stop")
        
        import schedule
        import time
        
        schedule.every().day.at("06:00").do(tracker.run_daily_update)
        schedule.every().monday.at("08:00").do(tracker.run_weekly_report)
        
        while True:
            schedule.run_pending()
            time.sleep(60)
            
    else:
        print(f"❌ Unknown command: {command}")

if __name__ == "__main__":
    main()