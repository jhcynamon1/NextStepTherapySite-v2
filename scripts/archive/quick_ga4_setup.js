#!/usr/bin/env node

/**
 * Quick GA4 Setup Helper for NextStep Therapy
 * Guides through GA4 setup and configures tracking
 */

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 NextStep Therapy - Quick GA4 Setup Helper\n');

console.log('📋 STEP 1: GET YOUR GA4 MEASUREMENT ID');
console.log('=========================================\n');

console.log('1. Open this link in your browser:');
console.log('   👉 https://analytics.google.com/\n');

console.log('2. Sign in with your Google account (same one used for Search Console)\n');

console.log('3. Create Analytics Account:');
console.log('   - Account name: "NextStep Therapy"');
console.log('   - Keep default data sharing settings');
console.log('   - Click "Next"\n');

console.log('4. Create Property:');
console.log('   - Property name: "NextStep Therapy Website"');
console.log('   - Time zone: "Canada - Eastern Time"');
console.log('   - Currency: "Canadian Dollar (CAD)"');
console.log('   - Click "Next"\n');

console.log('5. Business Information:');
console.log('   - Industry: "Health & Fitness" or "Professional Services"');
console.log('   - Business size: "Small (1-10 employees)"');
console.log('   - Check: "Examine user behavior", "Measure advertising ROI"');
console.log('   - Click "Create"\n');

console.log('6. Accept Terms:');
console.log('   - Country: Canada');
console.log('   - Accept Google Analytics Terms');
console.log('   - Click "I Accept"\n');

console.log('7. Set Up Data Stream:');
console.log('   - Choose "Web"');
console.log('   - Website URL: "https://nextsteptherapy.ca"');
console.log('   - Stream name: "NextStep Therapy Main Site"');
console.log('   - Click "Create stream"\n');

console.log('8. Copy Your Measurement ID:');
console.log('   - Look for: G-XXXXXXXXXX (like G-ABC123DEF4)');
console.log('   - Copy this entire ID\n');

console.log('🎯 ONCE YOU HAVE YOUR G-XXXXXXXXXX ID:');
console.log('=====================================\n');

console.log('Option 1 - Automatic Setup:');
console.log('  Run: node setup_tracking.js');
console.log('  (Enter your G-ID when prompted)\n');

console.log('Option 2 - Manual Configuration:');
console.log('  1. Edit tracking_implementation.js');
console.log('  2. Replace G-XXXXXXXXXX with your actual ID');
console.log('  3. Add tracking code to your website pages\n');

console.log('📊 ENHANCED CONVERSIONS SETUP:');
console.log('==============================\n');

console.log('After getting your Measurement ID:');
console.log('1. In GA4, go to Admin → Data display → Attribution');
console.log('2. Enable "Enhanced conversions for web"');
console.log('3. Choose "Google tag or Google Tag Manager"');
console.log('4. Save settings\n');

console.log('🎯 SET UP CONVERSION EVENTS:');
console.log('============================\n');

console.log('In GA4, go to Admin → Events → Create event:');
console.log('');
console.log('Event 1 - Form Submissions:');
console.log('  - Event name: generate_lead');
console.log('  - Mark as conversion: Yes');
console.log('  - Value: 150\n');

console.log('Event 2 - Phone Calls:');
console.log('  - Event name: phone_call');
console.log('  - Mark as conversion: Yes');
console.log('  - Value: 150\n');

console.log('Event 3 - Booking Starts:');
console.log('  - Event name: begin_checkout');
console.log('  - Mark as conversion: Yes');
console.log('  - Value: 200\n');

console.log('🔗 LINK TO SEARCH CONSOLE:');
console.log('===========================\n');

console.log('In GA4, go to Admin → Product links → Search Console links:');
console.log('1. Click "Link"');
console.log('2. Select: nextsteptherapy.ca');
console.log('3. Choose data streams to link');
console.log('4. Submit\n');

console.log('✅ VERIFICATION:');
console.log('================\n');

console.log('Test your setup:');
console.log('1. Go to GA4 Reports → Realtime');
console.log('2. Visit your website in another tab');
console.log('3. Should see active users and page views');
console.log('4. Test form submission - should see conversion event\n');

console.log('📁 HELPFUL FILES CREATED:');
console.log('=========================\n');

console.log('- GA4_SETUP_GUIDE.md - Detailed setup instructions');
console.log('- tracking_implementation.js - Main tracking script');
console.log('- tracking_template.html - HTML implementation example');
console.log('- gsc_conversion_attribution.js - Attribution analysis');
console.log('- COMPLETE_SEO_CONVERSION_TRACKING_SETUP.md - Full documentation\n');

console.log('🚀 READY TO PROCEED?');
console.log('====================\n');

console.log('Once you have your G-XXXXXXXXXX Measurement ID:');
console.log('');
console.log('1. Run: node setup_tracking.js');
console.log('2. Enter your Measurement ID when prompted');
console.log('3. Follow the generated implementation guide');
console.log('4. Add tracking code to your website');
console.log('5. Test conversions and start getting attribution data!\n');

console.log('💡 TIP: The whole GA4 setup takes about 5-10 minutes.');
console.log('     Once done, you\'ll have complete SEO → conversion tracking!\n');

// Check if user wants to open GA4 setup
console.log('Would you like me to open Google Analytics in your browser? (y/n)');

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    const answer = chunk.trim().toLowerCase();
    if (answer === 'y' || answer === 'yes') {
      try {
        // Try to open GA4 in browser
        const platform = process.platform;
        if (platform === 'darwin') {
          execSync('open https://analytics.google.com/');
        } else if (platform === 'win32') {
          execSync('start https://analytics.google.com/');
        } else {
          execSync('xdg-open https://analytics.google.com/');
        }
        console.log('\n✅ Google Analytics opened in your browser!');
        console.log('Follow the steps above to get your Measurement ID.\n');
      } catch (error) {
        console.log('\n❌ Could not open browser automatically.');
        console.log('Please manually go to: https://analytics.google.com/\n');
      }
    } else {
      console.log('\n👍 No problem! Go to https://analytics.google.com/ when ready.');
    }
    
    console.log('📞 NEXT: Once you have your G-XXXXXXXXXX ID, run:');
    console.log('      node setup_tracking.js\n');
    
    process.exit(0);
  }
});

process.stdin.on('end', () => {
  process.exit(0);
});
