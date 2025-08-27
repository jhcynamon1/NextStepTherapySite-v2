#!/usr/bin/env python3
"""
NextStep Therapy - Automated SEO Rank Tracking System
Uses DataForSEO API to track keyword rankings automatically
"""

import requests
import json
import pandas as pd
import sqlite3
from datetime import datetime, timedelta
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import schedule
import time
import os
from typing import List, Dict, Optional

class NextStepRankTracker:
    def __init__(self, username: str, password: str):
        self.username = username
        self.password = password
        self.base_url = "https://api.dataforseo.com/v3"
        self.domain = "nextsteptherapy.ca"
        self.db_path = "nextstep_rankings.db"
        self.setup_database()
        
    def setup_database(self):
        """Initialize SQLite database for ranking history"""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS rankings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                keyword TEXT NOT NULL,
                position INTEGER,
                search_volume INTEGER,
                competition TEXT,
                location_code INTEGER,
                date TEXT NOT NULL,
                tag TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS competitor_rankings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                keyword TEXT NOT NULL,
                competitor_domain TEXT NOT NULL,
                position INTEGER,
                date TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        conn.commit()
        conn.close()

    def get_target_keywords(self) -> Dict[str, List[str]]:
        """Define all target keywords organized by category"""
        return {
            "primary_services": [
                "anxiety therapy ontario",
                "depression therapy ontario", 
                "relationship counselling ontario",
                "workplace stress therapy ontario",
                "mental health therapy ontario",
                "online therapy ontario",
                "virtual therapy ontario"
            ],
            "natural_language": [
                "why do I feel anxious all the time",
                "can't stop worrying about work", 
                "therapist available today ontario",
                "same week therapy appointment",
                "constant stress from job",
                "sunday night anxiety",
                "panic attacks when driving ontario"
            ],
            "local_toronto": [
                "anxiety therapy toronto",
                "depression therapy toronto", 
                "therapist toronto",
                "mental health toronto",
                "counselling toronto",
                "mens mental health toronto",
                "couples therapy toronto"
            ],
            "high_opportunity": [
                "stress management ontario",
                "workplace anxiety help",
                "mental health counselling ontario",
                "therapy near me ontario",
                "anxiety counseling ontario",
                "performance anxiety therapy toronto"
            ]
        }

    def setup_rank_tracking(self):
        """Set up automated rank tracking for all target keywords"""
        keywords = self.get_target_keywords()
        all_tasks = []
        
        locations = {
            "ontario": 2124,
            "toronto": 1001942,
            "mississauga": 1001999
        }
        
        for category, keyword_list in keywords.items():
            for keyword in keyword_list:
                # Track for Ontario province
                task = {
                    "language_code": "en",
                    "location_code": 2124,  # Ontario
                    "keyword": keyword,
                    "url": self.domain,
                    "priority": 2,
                    "tag": f"nextstep_{category}",
                    "postback_url": f"https://your-webhook-url.com/ranking-update"  # Optional webhook
                }
                all_tasks.append(task)
                
                # Also track for Toronto if it's a local keyword
                if "toronto" in keyword.lower() or category == "local_toronto":
                    toronto_task = task.copy()
                    toronto_task["location_code"] = 1001942  # Toronto
                    toronto_task["tag"] = f"nextstep_{category}_toronto"
                    all_tasks.append(toronto_task)
        
        # Submit tracking tasks
        response = requests.post(
            f"{self.base_url}/serp/google/organic/tasks_post",
            auth=(self.username, self.password),
            json=all_tasks
        )
        
        return response.json()

    def setup_competitor_tracking(self):
        """Track competitors for primary keywords"""
        competitors = [
            "mindbeacon.com",
            "inkblottherapy.com", 
            "betterhelp.com",
            "talkspace.com",
            "psychologytoday.com",
            "anxietycanada.com"
        ]
        
        primary_keywords = self.get_target_keywords()["primary_services"]
        all_tasks = []
        
        for competitor in competitors:
            for keyword in primary_keywords[:5]:  # Track top 5 keywords per competitor
                task = {
                    "language_code": "en",
                    "location_code": 2124,  # Ontario
                    "keyword": keyword,
                    "url": competitor,
                    "priority": 3,
                    "tag": f"competitor_{competitor.split('.')[0]}"
                }
                all_tasks.append(task)
        
        response = requests.post(
            f"{self.base_url}/serp/google/organic/tasks_post",
            auth=(self.username, self.password),
            json=all_tasks
        )
        
        return response.json()

    def get_ranking_results(self) -> List[Dict]:
        """Retrieve all completed ranking tasks"""
        response = requests.get(
            f"{self.base_url}/serp/google/organic/tasks_ready",
            auth=(self.username, self.password)
        )
        
        all_results = []
        
        if response.json().get('status_code') == 20000:
            tasks = response.json().get('tasks', [])
            
            for task in tasks:
                if task.get('result'):
                    for result in task['result']:
                        task_id = result['id']
                        
                        # Get detailed results
                        detail_response = requests.get(
                            f"{self.base_url}/serp/google/organic/tasks_ready/{task_id}",
                            auth=(self.username, self.password)
                        )
                        
                        if detail_response.status_code == 200:
                            all_results.append(detail_response.json())
        
        return all_results

    def process_and_store_rankings(self, results: List[Dict]):
        """Process ranking results and store in database"""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        today = datetime.now().strftime('%Y-%m-%d')
        
        for result in results:
            if result.get('status_code') == 20000:
                for task in result.get('tasks', []):
                    for item in task.get('result', []):
                        keyword = item.get('keyword')
                        location_code = item.get('location_code')
                        tag = task.get('tag', '')
                        
                        # Find NextStep Therapy's ranking
                        your_position = None
                        competitor_positions = {}
                        
                        for pos, organic_result in enumerate(item.get('items', []), 1):
                            domain = organic_result.get('domain', '')
                            
                            if self.domain in domain:
                                your_position = pos
                            elif any(comp in domain for comp in ['mindbeacon', 'inkblot', 'betterhelp', 'talkspace', 'psychologytoday', 'anxietycanada']):
                                competitor_positions[domain] = pos
                        
                        # Store NextStep ranking
                        if 'nextstep' in tag:  # This is for NextStep tracking
                            cursor.execute('''
                                INSERT INTO rankings 
                                (keyword, position, search_volume, competition, location_code, date, tag)
                                VALUES (?, ?, ?, ?, ?, ?, ?)
                            ''', (
                                keyword,
                                your_position,
                                item.get('search_volume', 0),
                                item.get('competition', 'N/A'),
                                location_code,
                                today,
                                tag
                            ))
                        
                        # Store competitor rankings
                        for competitor_domain, position in competitor_positions.items():
                            cursor.execute('''
                                INSERT INTO competitor_rankings 
                                (keyword, competitor_domain, position, date)
                                VALUES (?, ?, ?, ?)
                            ''', (keyword, competitor_domain, position, today))
        
        conn.commit()
        conn.close()
        
        print(f"✅ Rankings updated for {today}")

    def generate_daily_report(self) -> Dict:
        """Generate daily ranking summary"""
        conn = sqlite3.connect(self.db_path)
        
        today = datetime.now().strftime('%Y-%m-%d')
        yesterday = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
        
        # Current rankings
        current_df = pd.read_sql_query('''
            SELECT keyword, position, search_volume, tag, location_code
            FROM rankings 
            WHERE date = ? AND position IS NOT NULL
            ORDER BY position ASC
        ''', conn, params=[today])
        
        # Previous rankings for comparison
        previous_df = pd.read_sql_query('''
            SELECT keyword, position
            FROM rankings 
            WHERE date = ? AND position IS NOT NULL
        ''', conn, params=[yesterday])
        
        conn.close()
        
        # Calculate changes
        changes = []
        if not previous_df.empty:
            for _, current_row in current_df.iterrows():
                keyword = current_row['keyword']
                current_pos = current_row['position']
                
                prev_row = previous_df[previous_df['keyword'] == keyword]
                if not prev_row.empty:
                    prev_pos = prev_row.iloc[0]['position']
                    change = prev_pos - current_pos  # Positive = improvement
                    
                    if abs(change) >= 3:  # Significant changes only
                        changes.append({
                            'keyword': keyword,
                            'current_position': current_pos,
                            'previous_position': prev_pos,
                            'change': change,
                            'search_volume': current_row['search_volume']
                        })
        
        return {
            'date': today,
            'total_keywords_tracked': len(current_df),
            'keywords_in_top_10': len(current_df[current_df['position'] <= 10]),
            'keywords_in_top_50': len(current_df[current_df['position'] <= 50]),
            'average_position': current_df['position'].mean() if not current_df.empty else 0,
            'significant_changes': sorted(changes, key=lambda x: abs(x['change']), reverse=True)[:10],
            'top_performers': current_df[current_df['position'] <= 10].to_dict('records'),
            'opportunities': current_df[(current_df['position'] > 10) & (current_df['position'] <= 50) & (current_df['search_volume'] > 100)].to_dict('records')
        }

    def send_daily_alert(self, report: Dict):
        """Send daily ranking alert if significant changes detected"""
        significant_changes = report['significant_changes']
        
        if not significant_changes:
            return
        
        # Email configuration (set these as environment variables)
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        sender_email = os.getenv('SENDER_EMAIL', 'your_email@gmail.com')
        sender_password = os.getenv('SENDER_APP_PASSWORD', 'your_app_password')
        receiver_email = os.getenv('RECEIVER_EMAIL', 'client@nextsteptherapy.ca')
        
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = f"🚨 NextStep Therapy - Ranking Alert ({report['date']})"
        
        # Create alert content
        changes_html = ""
        for change in significant_changes[:5]:  # Top 5 changes
            direction = "📈" if change['change'] > 0 else "📉"
            changes_html += f"""
            <li>{direction} <strong>"{change['keyword']}"</strong><br>
                Position: {change['previous_position']} → {change['current_position']} 
                (Change: {change['change']:+d})<br>
                Search Volume: {change['search_volume']}/month
            </li>
            """
        
        html_body = f"""
        <html>
        <body>
            <h2>🚨 NextStep Therapy Ranking Alert</h2>
            <p><strong>Date:</strong> {report['date']}</p>
            
            <h3>📊 Quick Stats</h3>
            <ul>
                <li>Keywords in Top 10: {report['keywords_in_top_10']}</li>
                <li>Keywords in Top 50: {report['keywords_in_top_50']}</li>
                <li>Average Position: {report['average_position']:.1f}</li>
            </ul>
            
            <h3>⚡ Significant Changes (±3 positions)</h3>
            <ul>
                {changes_html}
            </ul>
            
            <p><em>Full report available in tracking dashboard.</em></p>
        </body>
        </html>
        """
        
        msg.attach(MIMEText(html_body, 'html'))
        
        try:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
            server.quit()
            print(f"✅ Alert sent for {len(significant_changes)} ranking changes")
        except Exception as e:
            print(f"❌ Failed to send alert: {e}")

    def generate_weekly_report(self) -> str:
        """Generate comprehensive weekly report"""
        conn = sqlite3.connect(self.db_path)
        
        # Get data from last 7 days
        end_date = datetime.now()
        start_date = end_date - timedelta(days=7)
        
        weekly_df = pd.read_sql_query('''
            SELECT keyword, position, search_volume, date, tag
            FROM rankings 
            WHERE date >= ? AND date <= ? AND position IS NOT NULL
            ORDER BY date DESC, position ASC
        ''', conn, params=[start_date.strftime('%Y-%m-%d'), end_date.strftime('%Y-%m-%d')])
        
        competitor_df = pd.read_sql_query('''
            SELECT keyword, competitor_domain, position, date
            FROM competitor_rankings 
            WHERE date >= ? AND date <= ?
            ORDER BY date DESC, position ASC
        ''', conn, params=[start_date.strftime('%Y-%m-%d'), end_date.strftime('%Y-%m-%d')])
        
        conn.close()
        
        if weekly_df.empty:
            return "No ranking data available for weekly report."
        
        # Analysis
        latest_date = weekly_df['date'].max()
        latest_rankings = weekly_df[weekly_df['date'] == latest_date]
        
        report_html = f"""
        <html>
        <body>
            <h1>NextStep Therapy - Weekly SEO Report</h1>
            <p><strong>Week Ending:</strong> {latest_date}</p>
            
            <h2>📊 Performance Summary</h2>
            <table border="1" style="border-collapse: collapse;">
                <tr>
                    <td><strong>Total Keywords Tracked:</strong></td>
                    <td>{len(latest_rankings)}</td>
                </tr>
                <tr>
                    <td><strong>Keywords in Top 10:</strong></td>
                    <td>{len(latest_rankings[latest_rankings['position'] <= 10])}</td>
                </tr>
                <tr>
                    <td><strong>Keywords in Top 50:</strong></td>
                    <td>{len(latest_rankings[latest_rankings['position'] <= 50])}</td>
                </tr>
                <tr>
                    <td><strong>Average Position:</strong></td>
                    <td>{latest_rankings['position'].mean():.1f}</td>
                </tr>
            </table>
            
            <h2>🏆 Top Performing Keywords</h2>
            <table border="1" style="border-collapse: collapse;">
                <tr><th>Keyword</th><th>Position</th><th>Search Volume</th><th>Category</th></tr>
        """
        
        top_keywords = latest_rankings[latest_rankings['position'] <= 20].head(10)
        for _, row in top_keywords.iterrows():
            report_html += f"""
                <tr>
                    <td>{row['keyword']}</td>
                    <td>{row['position']}</td>
                    <td>{row['search_volume']}</td>
                    <td>{row['tag']}</td>
                </tr>
            """
        
        report_html += """
            </table>
            
            <h2>🎯 High-Opportunity Keywords</h2>
            <p>Keywords with high search volume ranking 11-50 (quick win potential):</p>
            <table border="1" style="border-collapse: collapse;">
                <tr><th>Keyword</th><th>Position</th><th>Search Volume</th></tr>
        """
        
        opportunities = latest_rankings[
            (latest_rankings['position'] > 10) & 
            (latest_rankings['position'] <= 50) & 
            (latest_rankings['search_volume'] > 100)
        ].head(10)
        
        for _, row in opportunities.iterrows():
            report_html += f"""
                <tr>
                    <td>{row['keyword']}</td>
                    <td>{row['position']}</td>
                    <td>{row['search_volume']}</td>
                </tr>
            """
        
        report_html += """
            </table>
            
            <h2>🔍 Competitor Analysis</h2>
        """
        
        if not competitor_df.empty:
            latest_competitors = competitor_df[competitor_df['date'] == latest_date]
            competitor_summary = latest_competitors.groupby('competitor_domain').agg({
                'position': 'mean'
            }).round(1).sort_values('position')
            
            report_html += """
            <table border="1" style="border-collapse: collapse;">
                <tr><th>Competitor</th><th>Average Position</th></tr>
            """
            
            for domain, data in competitor_summary.iterrows():
                report_html += f"""
                    <tr>
                        <td>{domain}</td>
                        <td>{data['position']}</td>
                    </tr>
                """
        
        report_html += """
            </table>
            
            <h2>📈 Next Week Action Items</h2>
            <ul>
                <li>Focus on optimizing high-opportunity keywords (position 11-50)</li>
                <li>Create more content around top-performing keyword themes</li>
                <li>Build backlinks to pages ranking in positions 11-20</li>
                <li>Monitor competitor movements for strategic keywords</li>
            </ul>
            
        </body>
        </html>
        """
        
        return report_html

    def run_daily_update(self):
        """Main function for daily automated updates"""
        print(f"🔄 Starting daily rank tracking update - {datetime.now()}")
        
        try:
            # Get latest results
            results = self.get_ranking_results()
            
            if results:
                # Process and store rankings
                self.process_and_store_rankings(results)
                
                # Generate daily report
                daily_report = self.generate_daily_report()
                
                # Send alert if significant changes
                self.send_daily_alert(daily_report)
                
                print("✅ Daily update completed successfully")
            else:
                print("ℹ️ No new ranking data available")
                
        except Exception as e:
            print(f"❌ Daily update failed: {e}")

    def run_weekly_report(self):
        """Generate and send weekly report"""
        print(f"📊 Generating weekly report - {datetime.now()}")
        
        try:
            report_html = self.generate_weekly_report()
            
            # Save report to file
            report_filename = f"weekly_report_{datetime.now().strftime('%Y%m%d')}.html"
            with open(report_filename, 'w') as f:
                f.write(report_html)
            
            print(f"✅ Weekly report saved as {report_filename}")
            
            # Optionally email the report
            # self.send_weekly_email_report(report_html)
            
        except Exception as e:
            print(f"❌ Weekly report generation failed: {e}")


def main():
    """Main execution function"""
    # Initialize with your DataForSEO credentials
    username = os.getenv('DATAFORSEO_USERNAME', 'your_username_here')
    password = os.getenv('DATAFORSEO_PASSWORD', 'your_password_here')
    
    if username == 'your_username_here' or password == 'your_password_here':
        print("❌ Please set DATAFORSEO_USERNAME and DATAFORSEO_PASSWORD environment variables")
        return
    
    tracker = NextStepRankTracker(username, password)
    
    # Initial setup (run once)
    if '--setup' in sys.argv:
        print("🚀 Setting up rank tracking...")
        
        # Set up NextStep keyword tracking
        nextstep_result = tracker.setup_rank_tracking()
        print(f"NextStep tracking setup: {nextstep_result}")
        
        # Set up competitor tracking
        competitor_result = tracker.setup_competitor_tracking()
        print(f"Competitor tracking setup: {competitor_result}")
        
        print("✅ Setup complete! Rankings will be available in 24-48 hours.")
        return
    
    # Schedule automated tasks
    schedule.every().day.at("06:00").do(tracker.run_daily_update)
    schedule.every().monday.at("08:00").do(tracker.run_weekly_report)
    
    print("⏰ NextStep Therapy rank tracker started!")
    print("Daily updates: 6:00 AM")
    print("Weekly reports: Mondays 8:00 AM")
    print("Press Ctrl+C to stop")
    
    # Run continuously
    while True:
        schedule.run_pending()
        time.sleep(60)  # Check every minute


if __name__ == "__main__":
    import sys
    main()