# NextStep Therapy - Automated SEO Rank Tracking

Complete automated system for tracking keyword rankings using DataForSEO API.

## 🎯 What It Tracks

### Your Keywords (60+ total)
- **Primary Services**: "anxiety therapy ontario", "depression therapy ontario", "relationship counselling ontario"
- **Natural Language SEO**: "why do I feel anxious all the time", "therapist available today ontario" 
- **Local Toronto**: "anxiety therapy toronto", "mental health toronto"
- **High Opportunity**: "stress management ontario", "workplace anxiety help"

### Competitor Analysis
Monitors 6 major competitors across your primary keywords:
- mindbeacon.com
- inkblottherapy.com  
- betterhelp.com
- talkspace.com
- psychologytoday.com
- anxietycanada.com

## 🚀 Quick Setup

1. **Run setup script**:
   ```bash
   ./setup_tracking.sh
   ```

2. **Edit credentials** in `.env` file:
   ```
   DATAFORSEO_USERNAME=your_username
   DATAFORSEO_PASSWORD=your_password
   SENDER_EMAIL=your_gmail@gmail.com
   SENDER_APP_PASSWORD=your_app_password
   RECEIVER_EMAIL=client@nextsteptherapy.ca
   ```

3. **Start tracking**:
   ```bash
   python3 run_tracker.py setup    # Initial setup
   python3 run_tracker.py start    # Start automated tracking
   ```

## 📊 Features

### Automated Daily Updates
- **6:00 AM daily**: Collects latest rankings
- **Instant alerts**: Email alerts for major changes (±3 positions)
- **SQLite database**: Stores historical ranking data

### Weekly Reports
- **Every Monday 8:00 AM**: Comprehensive weekly analysis
- **Top performers**: Keywords ranking in top 10
- **Opportunities**: High-volume keywords in positions 11-50
- **Competitor analysis**: How competitors rank vs you

### Manual Commands
```bash
python3 run_tracker.py update    # Get latest rankings now
python3 run_tracker.py report    # Generate daily report  
python3 run_tracker.py weekly    # Generate weekly report
```

## 📈 Dashboard Data

### Key Metrics Tracked
- **Position tracking**: Exact Google ranking position
- **Search volume**: Monthly search volume per keyword
- **Competition level**: Keyword competition analysis
- **Historical trends**: Position changes over time
- **Competitor positions**: Where competitors rank

### Alert System
Automatic email alerts when:
- Any keyword moves ±3 positions
- New keywords enter top 50
- Competitors overtake your positions
- High-opportunity keywords identified

## 🎛️ Customization

### Add New Keywords
Edit `get_target_keywords()` in `nextstep_rank_tracker.py`:

```python
"new_category": [
    "your new keyword",
    "another keyword"
]
```

### Add Competitors
Edit `setup_competitor_tracking()`:

```python
competitors = [
    "mindbeacon.com",
    "your-new-competitor.com"
]
```

### Change Alert Thresholds
Modify alert sensitivity in `generate_daily_report()`:

```python
if abs(change) >= 5:  # Alert for ±5 position changes
```

## 📁 File Structure

```
seo-tracking/
├── nextstep_rank_tracker.py  # Main tracking system
├── run_tracker.py            # Easy manual runner
├── setup_tracking.sh         # One-click setup
├── requirements.txt          # Python dependencies  
├── .env                      # Your credentials (edit this!)
├── nextstep_rankings.db      # SQLite database (auto-created)
└── weekly_report_YYYYMMDD.html # Generated reports
```

## 🔧 Troubleshooting

### No ranking data?
- Wait 24-48 hours after initial setup
- Check DataForSEO API credits/limits
- Verify credentials in `.env` file

### Alerts not sending?
- Enable Gmail "App Passwords" 
- Update email credentials in `.env`
- Check spam folder

### Database issues?
- Delete `nextstep_rankings.db` to reset
- Re-run `python3 run_tracker.py setup`

## 📊 Sample Output

```
📈 NEXTSTEP THERAPY DAILY RANKINGS - 2025-08-27
==================================================
Total keywords tracked: 67
Keywords in top 10: 8
Keywords in top 50: 23
Average position: 31.4

🚨 Significant changes:
  📈 UP 'anxiety therapy ontario': 15 → 9
  📉 DOWN 'depression therapy ontario': 12 → 18
  📈 UP 'why do I feel anxious all the time': 45 → 38

🏆 Top performers (position ≤10):
  #3 - therapist available today ontario (1,300/month)
  #7 - anxiety therapy ontario (8,100/month)
  #9 - same week therapy appointment (590/month)
```

## 💡 Next Steps

1. **Run setup**: `./setup_tracking.sh`
2. **Edit credentials**: Update `.env` file
3. **Initial tracking**: `python3 run_tracker.py setup`  
4. **Start automation**: `python3 run_tracker.py start`
5. **Check in 2 days**: `python3 run_tracker.py report`

Your rankings will be automatically tracked, analyzed, and reported with zero manual effort!