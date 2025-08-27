#!/bin/bash

# NextStep Therapy - SEO Rank Tracking Setup Script
echo "🚀 Setting up NextStep Therapy automated rank tracking..."

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Set up environment variables (you'll need to update these)
echo "Setting up environment variables..."
cat > .env << EOF
DATAFORSEO_USERNAME=your_dataforseo_username_here
DATAFORSEO_PASSWORD=your_dataforseo_password_here
SENDER_EMAIL=your_gmail@gmail.com
SENDER_APP_PASSWORD=your_gmail_app_password
RECEIVER_EMAIL=client@nextsteptherapy.ca
EOF

echo ""
echo "📝 IMPORTANT: Edit .env file with your actual credentials:"
echo "   - DataForSEO username/password"
echo "   - Gmail credentials for alerts"
echo ""

# Make scripts executable
chmod +x nextstep_rank_tracker.py

# Initial setup of tracking
echo "🎯 Setting up keyword tracking (this may take a moment)..."
export $(cat .env | xargs)
python3 nextstep_rank_tracker.py --setup

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 What happens next:"
echo "   1. Rankings will be collected in 24-48 hours"
echo "   2. Daily updates at 6:00 AM"
echo "   3. Weekly reports every Monday 8:00 AM"
echo "   4. Alerts sent for major ranking changes"
echo ""
echo "🔄 To start the automated tracker:"
echo "   source venv/bin/activate && python3 nextstep_rank_tracker.py"
echo ""
echo "📊 Keywords being tracked:"
echo "   • Primary services: anxiety therapy ontario, depression therapy ontario, etc."
echo "   • Natural language: why do I feel anxious all the time, etc."  
echo "   • Local Toronto: anxiety therapy toronto, etc."
echo "   • High opportunity: stress management ontario, etc."
echo ""
echo "🎯 Competitors being monitored:"
echo "   • mindbeacon.com"
echo "   • inkblottherapy.com" 
echo "   • betterhelp.com"
echo "   • talkspace.com"
echo "   • psychologytoday.com"
echo "   • anxietycanada.com"