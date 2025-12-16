#!/usr/bin/env node

/**
 * NextStep Therapy - Tracking Setup Script
 * Automates the complete SEO + Conversion tracking setup
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

class TrackingSetup {
  constructor() {
    this.config = {
      ga4_id: '',
      organic_phone: '647-555-0100',
      direct_phone: '647-555-0101',
      call_tracking_provider: 'calltrackingmetrics',
      site_url: 'https://nextsteptherapy.ca'
    };
  }

  async run() {
    console.log('🚀 NextStep Therapy - Complete Tracking Setup\n');
    console.log('This will set up comprehensive SEO + conversion tracking.\n');

    try {
      // Get configuration from user
      await this.getConfiguration();
      
      // Update tracking files
      await this.updateTrackingFiles();
      
      // Create implementation guide
      await this.createImplementationGuide();
      
      // Set up automation
      await this.setupAutomation();
      
      console.log('\n✅ TRACKING SETUP COMPLETE!');
      console.log('\n📋 Next Steps:');
      console.log('1. Add the tracking code to all your pages');
      console.log('2. Set up your Google Analytics 4 property');
      console.log('3. Configure call tracking service');
      console.log('4. Test form submissions and phone clicks');
      console.log('5. Run weekly attribution reports');
      console.log('\n📁 Check the generated files for detailed instructions.');

    } catch (error) {
      console.error('❌ Setup failed:', error.message);
      process.exit(1);
    }
  }

  async getConfiguration() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log('📝 Configuration Setup\n');

    // Get GA4 Measurement ID
    this.config.ga4_id = await this.askQuestion(rl, 
      'Enter your Google Analytics 4 Measurement ID (G-XXXXXXXXXX): ');

    // Confirm phone numbers
    const useDefaultPhones = await this.askQuestion(rl, 
      `Use default phone numbers?\n- Organic: ${this.config.organic_phone}\n- Direct: ${this.config.direct_phone}\n(y/n): `);
    
    if (useDefaultPhones.toLowerCase() !== 'y') {
      this.config.organic_phone = await this.askQuestion(rl, 'Enter organic tracking phone: ');
      this.config.direct_phone = await this.askQuestion(rl, 'Enter direct phone: ');
    }

    // Call tracking provider
    const provider = await this.askQuestion(rl, 
      'Call tracking provider (calltrackingmetrics/callrail/none): ');
    if (provider) {
      this.config.call_tracking_provider = provider;
    }

    rl.close();
    
    console.log('\n✅ Configuration saved');
  }

  askQuestion(rl, question) {
    return new Promise((resolve) => {
      rl.question(question, resolve);
    });
  }

  async updateTrackingFiles() {
    console.log('\n🔧 Updating tracking files with your configuration...');

    // Update tracking implementation
    await this.updateTrackingImplementation();
    
    // Update HTML template
    await this.updateHTMLTemplate();
    
    // Update attribution script
    await this.updateAttributionScript();

    console.log('✅ Tracking files updated');
  }

  async updateTrackingImplementation() {
    let content = fs.readFileSync('tracking_implementation.js', 'utf8');
    
    // Replace placeholders
    content = content.replace(/G-XXXXXXXXXX/g, this.config.ga4_id);
    content = content.replace(/647-555-0100/g, this.config.organic_phone);
    content = content.replace(/647-555-0101/g, this.config.direct_phone);
    
    fs.writeFileSync('tracking_implementation_configured.js', content);
  }

  async updateHTMLTemplate() {
    let content = fs.readFileSync('tracking_template.html', 'utf8');
    
    // Replace placeholders
    content = content.replace(/G-XXXXXXXXXX/g, this.config.ga4_id);
    content = content.replace(/647-555-0100/g, this.config.organic_phone);
    content = content.replace(/647-555-0101/g, this.config.direct_phone);
    
    fs.writeFileSync('tracking_template_configured.html', content);
  }

  async updateAttributionScript() {
    // Attribution script doesn't need configuration changes
    console.log('  - Attribution script ready to use');
  }

  async createImplementationGuide() {
    console.log('\n📋 Creating implementation guide...');

    const guide = `# 🚀 NextStep Therapy - Tracking Implementation Guide

## ✅ CONFIGURATION COMPLETE

Your tracking system has been configured with:
- **GA4 ID**: ${this.config.ga4_id}
- **Organic Phone**: ${this.config.organic_phone}
- **Direct Phone**: ${this.config.direct_phone}
- **Call Tracking**: ${this.config.call_tracking_provider}

## 🔧 IMPLEMENTATION STEPS

### Step 1: Google Analytics 4 Setup
1. Go to https://analytics.google.com/
2. Create property for: ${this.config.site_url}
3. Use Measurement ID: ${this.config.ga4_id}
4. Enable Enhanced Conversions
5. Set up conversion goals:
   - Form submissions (value: $150)
   - Phone calls (value: $150)
   - Booking starts (value: $200)

### Step 2: Add Tracking Code to Pages
Copy the tracking code from \`tracking_template_configured.html\` and add to ALL pages:

\`\`\`html
<!-- Add this to <head> section of every page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${this.config.ga4_id}"></script>
<script>
  // Your configured tracking code here
</script>
\`\`\`

### Step 3: Call Tracking Setup
${this.getCallTrackingInstructions()}

### Step 4: Form Enhancement
Update all contact forms to include:
- Hidden tracking fields (automatically populated)
- Therapy type selection dropdown
- Proper form submission tracking

### Step 5: Test Everything
1. **Form Submissions**: Fill out and submit contact forms
2. **Phone Clicks**: Click phone numbers and verify tracking
3. **GA4 Events**: Check real-time reports in Google Analytics
4. **Attribution**: Run \`node gsc_conversion_attribution.js\`

## 📊 WEEKLY AUTOMATION

Set up weekly attribution reports:
\`\`\`bash
# Add to crontab (runs every Monday at 9 AM)
0 9 * * 1 cd ${process.cwd()} && node gsc_conversion_attribution.js
\`\`\`

## 🎯 SUCCESS METRICS TO TRACK

### SEO Performance (GSC):
- Keyword rankings (positions 1-10)
- Click-through rates by page
- Impressions growth
- New keyword discoveries

### Conversion Performance (GA4):
- Organic conversion rate (target: 3-5%)
- Cost per conversion (organic vs. paid)
- Conversion value by keyword
- Lead quality scores

### Attribution Metrics:
- Keywords driving actual clients
- Revenue per organic visitor
- Lifetime value of SEO clients
- ROI of content creation

## 📁 FILES CREATED

- \`tracking_implementation_configured.js\` - Main tracking script
- \`tracking_template_configured.html\` - HTML template with tracking
- \`gsc_conversion_attribution.js\` - Attribution analysis script
- \`COMPLETE_SEO_CONVERSION_TRACKING_SETUP.md\` - Complete documentation

## 🚨 IMPORTANT NOTES

1. **Privacy Compliance**: Ensure you have proper privacy policy and consent
2. **CRPO Compliance**: All tracking respects therapy practice regulations
3. **Data Security**: Conversion data includes therapy-specific information
4. **Testing**: Always test in a staging environment first

## 🆘 TROUBLESHOOTING

### GA4 Not Tracking:
- Verify Measurement ID is correct
- Check browser console for errors
- Ensure gtag is loading properly

### Forms Not Converting:
- Check form submission event in GA4 real-time
- Verify hidden fields are populated
- Test with different browsers

### Attribution Not Working:
- Ensure GSC API credentials are set up
- Check \`gsc_data\` folder for output files
- Verify conversion data is available

## 📞 NEXT STEPS

1. **Week 1**: Implement tracking code on all pages
2. **Week 2**: Set up call tracking and test conversions
3. **Week 3**: Run first attribution analysis
4. **Week 4**: Optimize based on initial data

**Result**: Complete visibility into which SEO efforts drive actual therapy clients and revenue.

---

*Generated on ${new Date().toLocaleDateString()} by NextStep Therapy Tracking Setup*
`;

    fs.writeFileSync('TRACKING_IMPLEMENTATION_GUIDE.md', guide);
    console.log('✅ Implementation guide created');
  }

  getCallTrackingInstructions() {
    switch (this.config.call_tracking_provider) {
      case 'calltrackingmetrics':
        return `**CallTrackingMetrics Setup:**
1. Sign up at https://calltrackingmetrics.com/
2. Get tracking numbers:
   - Organic: ${this.config.organic_phone}
   - Direct: ${this.config.direct_phone}
3. Set up dynamic number insertion
4. Configure conversion tracking
5. Cost: ~$45/month`;

      case 'callrail':
        return `**CallRail Setup:**
1. Sign up at https://callrail.com/
2. Get tracking numbers:
   - Organic: ${this.config.organic_phone}
   - Direct: ${this.config.direct_phone}
3. Set up swap targets for organic traffic
4. Enable call recording and transcription
5. Cost: ~$30/month`;

      default:
        return `**Manual Call Tracking:**
1. Use separate phone numbers for different traffic sources
2. Organic traffic sees: ${this.config.organic_phone}
3. Direct traffic sees: ${this.config.direct_phone}
4. Track manually or use Google Voice
5. Cost: Free (manual tracking)`;
    }
  }

  async setupAutomation() {
    console.log('\n⚙️ Setting up automation...');

    // Create package.json scripts if it doesn't exist
    const packagePath = 'package.json';
    let packageJson = {};
    
    if (fs.existsSync(packagePath)) {
      packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    } else {
      packageJson = {
        name: 'nextstep-therapy-tracking',
        version: '1.0.0',
        description: 'SEO and conversion tracking for NextStep Therapy'
      };
    }

    // Add tracking scripts
    packageJson.scripts = packageJson.scripts || {};
    packageJson.scripts['extract-gsc'] = 'node gsc_automated_extractor.js';
    packageJson.scripts['attribution-analysis'] = 'node gsc_conversion_attribution.js';
    packageJson.scripts['weekly-report'] = 'npm run extract-gsc && npm run attribution-analysis';

    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));

    // Create cron job helper
    const cronScript = `#!/bin/bash
# NextStep Therapy - Weekly Attribution Report
# Add this to crontab: 0 9 * * 1 /path/to/this/script

cd ${process.cwd()}
npm run weekly-report

# Optional: Email results
# mail -s "Weekly SEO Attribution Report" your-email@domain.com < gsc_data/seo_attribution_summary_$(date +%Y-%m-%d).md
`;

    fs.writeFileSync('weekly_attribution_cron.sh', cronScript);
    fs.chmodSync('weekly_attribution_cron.sh', '755');

    console.log('✅ Automation scripts created');
    console.log('  - package.json updated with tracking scripts');
    console.log('  - weekly_attribution_cron.sh created for automation');
  }
}

// Run setup
if (require.main === module) {
  const setup = new TrackingSetup();
  setup.run().catch(console.error);
}

module.exports = TrackingSetup;
