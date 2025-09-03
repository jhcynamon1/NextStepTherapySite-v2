# Vercel Deployment Troubleshooting Guide
## Complete Solution for 404 Errors on New Pages

### 🚨 **The Problem**
New HTML pages return 404 errors even though they exist locally and are deployed to Vercel.

### 🔍 **Root Causes Identified**
1. **Git Tracking Issues** - Files not committed to repository
2. **Domain Routing Confusion** - Multiple projects with same domain
3. **DNS Propagation Delays** - Changes take time to propagate globally
4. **Project Mismatch** - Deploying to wrong Vercel project

### ✅ **Complete Solution Steps**

#### Step 1: Identify the Correct Project
```bash
# Check which project has your real homepage
curl -s https://nextsteptherapy-fresh.vercel.app | grep "title"
curl -s https://nextsteptherapy.vercel.app | grep "title"

# The one with your actual site title is the correct project
```

#### Step 2: Fix Git Tracking
```bash
# Check if files are tracked and committed
git status
git ls-files | grep [filename]

# If files exist but aren't committed:
git add .
git commit -m "Add new page"
git push
```

#### Step 3: Link to Correct Project
```bash
# Remove incorrect project link
rm -rf .vercel

# Link to the correct project (the one with your real homepage)
vercel link --project nextsteptherapy-fresh --yes
```

#### Step 4: Deploy to Production
```bash
# Force a fresh deployment
vercel --prod --force --yes
```

#### Step 5: Update DNS Settings
- Update DNS settings in your domain provider
- Point www subdomain to correct Vercel project
- Allow 15-30 minutes for propagation

#### Step 6: Test and Verify
```bash
# Test the page (may take time for DNS propagation)
curl -I https://www.nextsteptherapy.ca/[page-name]

# If still 404, wait for DNS propagation and test in browser
```

### 🔧 **Key Commands Used**
```bash
# Project management
vercel projects ls
vercel domains ls
vercel link --project [project-name] --yes

# Deployment
vercel --prod --yes
vercel --prod --force --yes

# Git management
git status
git add .
git commit -m "message"
git push

# Testing
curl -I [url]
curl -s [url] | grep "title"
```

### 🎯 **Critical Success Factors**
1. **Use Perplexity MCP** for real-time troubleshooting guidance
2. **Identify correct project** - don't assume the first one is right
3. **Commit to Git** - Vercel only deploys committed files
4. **Wait for DNS propagation** - can take 15-30 minutes
5. **Test in browser** - curl may show cached results

### 📝 **Files Created/Modified**
- `perfectionism-and-burnout-therapy-toronto.html` - Main page file
- `vercel.json` - Deployment configuration (cleanUrls: true)
- `.vercel/project.json` - Project linking configuration

### 🚀 **Final Result**
✅ Page successfully deployed at: https://www.nextsteptherapy.ca/perfectionism-and-burnout-therapy-toronto
✅ 2,500+ words of optimized content
✅ GA4 tracking enabled (G-J8H4YBGSHR)
✅ CRPO compliance maintained
✅ Mobile-responsive design
✅ Clean URLs working

### 🔄 **For Future Issues**
1. Always check `git status` first
2. Verify you're deploying to the correct project
3. Use Perplexity MCP for real-time guidance
4. Allow time for DNS propagation
5. Test in browser, not just curl

**Date Created:** September 2, 2025
**Issue Resolved:** Perfectionism and Burnout Therapy page deployment
**Time to Resolution:** ~2 hours (including DNS propagation)

