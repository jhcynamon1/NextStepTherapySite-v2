# Resend Email Integration Setup

## Overview

The homepage quiz now captures emails via an exit-intent popup and sends personalized therapy readiness reports using Resend API.

## Setup Steps

### 1. Create Resend Account

1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Log in to Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Name it: `Next Step Therapy - Quiz Reports`
5. Copy the API key (starts with `re_`)

### 3. Add API Key to Netlify

1. Log in to your Netlify dashboard
2. Go to **Site Settings** → **Environment Variables**
3. Click **Add Variable**
4. Add:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (paste it here)
5. Save changes

### 4. Verify Domain (Required for Production)

**Important:** Resend requires domain verification to send emails from your domain.

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter: `nextsteptherapy.ca`
4. Resend will provide DNS records to add:
   - TXT record for domain verification
   - MX, SPF, and DKIM records for email authentication
5. Add these records to your domain DNS settings (wherever your domain is hosted)
6. Wait for verification (usually 5-10 minutes)

### 5. Install Dependencies

```bash
cd /Users/jessecynamon/NextStepTherapy
npm install
```

### 6. Test Locally (Optional)

```bash
# Set environment variable locally
export RESEND_API_KEY="re_your_api_key_here"

# Start Netlify dev server
netlify dev
```

Visit http://localhost:8888 and test the quiz → exit popup → email flow.

### 7. Deploy to Production

```bash
git add .
git commit -m "Add Resend email integration for quiz reports"
git push
```

Netlify will automatically deploy with the environment variable you set in step 3.

## How It Works

### User Flow:
1. User completes 15-question therapy quiz
2. User sees results page
3. On exit-intent (mouse leave or scroll-up), popup appears
4. User enters email to get "Personalized Therapy Readiness Report"
5. Email sent via Resend with:
   - Their score (0-45)
   - Tier-specific recommendations
   - Personalized next steps
   - CTA to book consultation

### Email Content by Tier:

- **Green (0-10):** Maintenance tips, optional therapy info
- **Amber (11-20):** Preventive therapy benefits, free consultation CTA
- **Red (21-30):** Urgent support messaging, immediate booking CTA
- **Urgent (31-45):** Crisis resources + urgent consultation CTA

## Email Sending Limits

**Resend Free Tier:**
- 3,000 emails/month
- 100 emails/day

This should be sufficient for quiz lead capture. If you exceed limits, upgrade to paid plan ($20/month for 50,000 emails).

## Monitoring

### Check Email Delivery:
1. Go to Resend dashboard → **Logs**
2. See all sent emails, opens, clicks, bounces

### Check Quiz Conversions:
1. Go to Google Analytics 4
2. Events → `generate_lead` (quiz email capture)
3. Events → `quiz_complete` (completion rate)

## Troubleshooting

### Emails not sending?
- Check Netlify environment variables are set correctly
- Verify domain in Resend dashboard
- Check Resend logs for error messages
- Ensure `from` email matches verified domain

### Test email locally:
```javascript
// In browser console after completing quiz:
submitExitIntentForm({preventDefault: () => {}})
```

Check Network tab to see API request/response.

## Next Steps

### A. Create Email Sequences (Recommended)

Based on quiz score, create nurture sequences:

**Green Tier (0-10) - "Resilience Building":**
- Day 0: Quiz results + self-care tips
- Day 3: "5 Mental Health Practices for Busy Professionals"
- Day 7: "When Prevention Beats Crisis: Benefits of Early Support"
- Day 14: Optional consultation offer

**Amber Tier (11-20) - "Early Intervention":**
- Day 0: Quiz results + therapy benefits
- Day 1: "What to Expect in Your First Therapy Session"
- Day 3: Free consultation reminder
- Day 7: Success stories (CRPO-compliant)
- Day 14: Booking urgency (limited slots)

**Red/Urgent Tier (21-45) - "Immediate Support":**
- Day 0: Quiz results + crisis resources
- Day 1: Immediate consultation CTA
- Day 2: "You Don't Have to Do This Alone" (personal message)
- Day 3: Final booking reminder

### B. Integrate with CRM (Optional)

- Export Resend contacts to Mailchimp/ConvertKit
- Tag by quiz score tier
- Trigger automated sequences
- Track lifetime value per lead source

## Environment Variables Reference

```bash
# Required for production:
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Optional (if using multiple domains):
RESEND_FROM_EMAIL=hello@nextsteptherapy.ca
```

## Support

- **Resend Docs:** https://resend.com/docs
- **Netlify Functions:** https://docs.netlify.com/functions/overview/
- **Questions:** jesse@nextsteptherapy.ca
