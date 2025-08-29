#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * Quick Page Creator with Built-in Tracking
 * 
 * This script creates new SEO pages with tracking already included.
 * It uses the template and prompts you for the key details.
 * 
 * Usage: node create_new_page.js
 */

class PageCreator {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        this.templatePath = 'new_page_template.html';
        this.pageData = {};
    }

    async askQuestion(question) {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer.trim());
            });
        });
    }

    async collectPageData() {
        console.log('🚀 Creating a new SEO page with tracking built-in!\n');
        
        // Page title
        this.pageData.title = await this.askQuestion('📝 Page title (e.g., "Anxiety Therapy Toronto"): ');
        
        // Page description
        this.pageData.description = await this.askQuestion('📄 Meta description (150 chars max): ');
        
        // URL slug
        const suggestedSlug = this.pageData.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        
        const slugAnswer = await this.askQuestion(`🔗 URL slug (suggested: "${suggestedSlug}"): `);
        this.pageData.slug = slugAnswer || suggestedSlug;
        
        // Directory
        const dirAnswer = await this.askQuestion('📁 Directory (seo/services/virtual/blog) [default: seo]: ');
        this.pageData.directory = dirAnswer || 'seo';
        
        // Main heading
        const headingAnswer = await this.askQuestion(`📰 Main heading (default: "${this.pageData.title}"): `);
        this.pageData.heading = headingAnswer || this.pageData.title;
        
        // Lead paragraph
        this.pageData.leadText = await this.askQuestion('✍️  Lead paragraph (2-3 sentences): ');
        
        console.log('\n📋 Page Details:');
        console.log(`   Title: ${this.pageData.title}`);
        console.log(`   Description: ${this.pageData.description}`);
        console.log(`   URL: /${this.pageData.directory}/${this.pageData.slug}.html`);
        console.log(`   Heading: ${this.pageData.heading}`);
        
        const confirm = await this.askQuestion('\n✅ Create this page? (y/n): ');
        return confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes';
    }

    createPage() {
        try {
            // Read template
            let template = fs.readFileSync(this.templatePath, 'utf8');
            
            // Replace placeholders
            template = template.replace(/PAGE_TITLE/g, this.pageData.title);
            template = template.replace(/PAGE_DESCRIPTION/g, this.pageData.description);
            template = template.replace(/PAGE_URL/g, `${this.pageData.directory}/${this.pageData.slug}`);
            template = template.replace(/PAGE_TITLE_HERE/g, this.pageData.heading);
            template = template.replace(/PAGE_DESCRIPTION_HERE/g, this.pageData.leadText);
            
            // Ensure directory exists
            const dirPath = this.pageData.directory;
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
                console.log(`📁 Created directory: ${dirPath}/`);
            }
            
            // Write file
            const filePath = path.join(dirPath, `${this.pageData.slug}.html`);
            fs.writeFileSync(filePath, template, 'utf8');
            
            console.log(`\n🎉 Page created successfully!`);
            console.log(`📄 File: ${filePath}`);
            console.log(`🌐 URL: https://nextsteptherapy.ca/${this.pageData.directory}/${this.pageData.slug}.html`);
            console.log(`\n✅ Tracking is already included!`);
            console.log(`📊 The page will track:`);
            console.log(`   • Page views`);
            console.log(`   • Form submissions → generate_lead ($175)`);
            console.log(`   • Phone clicks → phone_call ($175)`);
            
            console.log(`\n📝 Next steps:`);
            console.log(`   1. Edit the content in ${filePath}`);
            console.log(`   2. Add your specific content and keywords`);
            console.log(`   3. Test the page and tracking`);
            console.log(`   4. Upload to your website`);
            
        } catch (error) {
            console.error('❌ Error creating page:', error.message);
        }
    }

    async run() {
        try {
            // Check if template exists
            if (!fs.existsSync(this.templatePath)) {
                console.error(`❌ Template not found: ${this.templatePath}`);
                console.log('Please make sure new_page_template.html exists in this directory.');
                process.exit(1);
            }
            
            const shouldCreate = await this.collectPageData();
            
            if (shouldCreate) {
                this.createPage();
            } else {
                console.log('❌ Page creation cancelled.');
            }
            
        } catch (error) {
            console.error('❌ Error:', error.message);
        } finally {
            this.rl.close();
        }
    }
}

// Run the page creator
const creator = new PageCreator();
creator.run();
