#!/usr/bin/env node

/**
 * Schema Enhancement Implementation Script
 * Automatically adds missing schema markup to existing pages
 * Based on AI Schema Generation methodology from the video
 */

const fs = require('fs');
const path = require('path');
const { AISchemaGenerator } = require('./ai_schema_generator.js');

class SchemaImplementer {
    constructor() {
        this.generator = new AISchemaGenerator();
        this.processedFiles = [];
    }

    // Enhanced schema for service pages
    generateEnhancedServiceSchema(pageData) {
        const schemas = [];

        // 1. Enhanced MedicalWebPage schema
        const medicalWebPage = {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": pageData.name,
            "description": pageData.description,
            "url": pageData.url,
            "provider": {
                "@type": "Person",
                "@id": "https://nextsteptherapy.ca/#jessecynamon",
                "name": "Jesse Cynamon, RP",
                "identifier": "CRPO #10979",
                "jobTitle": "Registered Psychotherapist",
                "areaServed": "Ontario, Canada"
            },
            "availableService": {
                "@type": "MedicalTherapy",
                "name": pageData.serviceName,
                "description": pageData.serviceDescription,
                "serviceType": "Telehealth",
                "provider": {
                    "@id": "https://nextsteptherapy.ca/#jessecynamon"
                }
            },
            "potentialAction": {
                "@type": "ScheduleAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://nextsteptherapy.ca/#contact"
                }
            }
        };

        // 2. LocalBusiness schema for city targeting
        const localBusiness = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Next Step Therapy - ${pageData.city}`,
            "description": `Evidence-based ${pageData.serviceType} in ${pageData.city}, Ontario. Virtual ACT therapy for professionals. CRPO registered therapist serving ${pageData.city} residents.`,
            "url": pageData.url,
            "telephone": "Book Consultation",
            "email": "jesse@nextsteptherapy.ca",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": pageData.city,
                "addressRegion": "Ontario",
                "addressCountry": "Canada"
            },
            "areaServed": {
                "@type": "City",
                "name": pageData.city,
                "containedInPlace": {
                    "@type": "State",
                    "name": "Ontario"
                }
            },
            "medicalSpecialty": pageData.serviceType,
            "serviceType": "Virtual Psychotherapy",
            "priceRange": "$175",
            "paymentAccepted": ["Insurance", "Credit Card", "E-transfer"],
            "founder": {
                "@id": "https://nextsteptherapy.ca/#jessecynamon"
            }
        };

        // 3. Enhanced FAQ schema with more questions
        const enhancedFAQs = this.generateEnhancedFAQs(pageData.serviceType, pageData.city);

        schemas.push(medicalWebPage);
        schemas.push(localBusiness);
        schemas.push(enhancedFAQs);

        return schemas;
    }

    // Generate comprehensive FAQ schema for better featured snippet coverage
    generateEnhancedFAQs(serviceType, city) {
        const baseQuestions = [
            {
                "@type": "Question",
                "name": `How does ${serviceType} work in ${city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${serviceType} in ${city} uses evidence-based approaches like ACT therapy delivered through secure virtual sessions. You can access professional support from anywhere in ${city} with flexible scheduling that works around your life.`
                }
            },
            {
                "@type": "Question", 
                "name": `Is virtual ${serviceType} covered by insurance in Ontario?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, most extended health plans in Ontario cover virtual ${serviceType} sessions with a Registered Psychotherapist. We provide detailed receipts for easy insurance reimbursement.`
                }
            },
            {
                "@type": "Question",
                "name": `How quickly can I start ${serviceType} in ${city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `You can typically book a free consultation within 24-48 hours, with your first ${serviceType} session available within one week. We offer flexible scheduling including evenings and weekends.`
                }
            },
            {
                "@type": "Question",
                "name": `What makes this approach different from other therapists in ${city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Our focus is specifically on evidence-based ACT therapy for professionals. Unlike traditional talk therapy, we provide practical, action-oriented strategies you can use immediately in your daily life.`
                }
            },
            {
                "@type": "Question",
                "name": `Do you offer evening appointments for ${serviceType}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, we offer flexible scheduling including early morning, lunch hour, and evening appointments to accommodate busy professional schedules in ${city}.`
                }
            },
            {
                "@type": "Question",
                "name": `Is everything confidential with virtual ${serviceType}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Absolutely. All virtual sessions use secure, PHIPA-compliant platforms. As a CRPO registered therapist, the same strict confidentiality standards apply to virtual sessions as in-person therapy.`
                }
            }
        ];

        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": baseQuestions
        };
    }

    // Read and parse existing HTML file
    readHTMLFile(filePath) {
        try {
            return fs.readFileSync(filePath, 'utf8');
        } catch (error) {
            console.error(`Error reading file ${filePath}:`, error.message);
            return null;
        }
    }

    // Extract existing schema from HTML
    extractExistingSchema(htmlContent) {
        const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
        const schemas = [];
        let match;

        while ((match = schemaRegex.exec(htmlContent)) !== null) {
            try {
                const schema = JSON.parse(match[1]);
                schemas.push(schema);
            } catch (error) {
                console.warn('Invalid JSON in schema:', error.message);
            }
        }

        return schemas;
    }

    // Add new schema to HTML file
    addSchemaToHTML(htmlContent, newSchemas) {
        // Find the closing </head> tag
        const headCloseIndex = htmlContent.indexOf('</head>');
        if (headCloseIndex === -1) {
            console.error('Could not find </head> tag');
            return htmlContent;
        }

        // Generate schema HTML
        const schemaHTML = newSchemas.map(schema => 
            `    <script type="application/ld+json">\n    ${JSON.stringify(schema, null, 4)}\n    </script>`
        ).join('\n\n');

        // Insert before </head>
        const beforeHead = htmlContent.substring(0, headCloseIndex);
        const afterHead = htmlContent.substring(headCloseIndex);

        return beforeHead + '\n    <!-- Enhanced Schema Markup -->\n' + schemaHTML + '\n\n' + afterHead;
    }

    // Process a specific service page
    processServicePage(filePath, pageConfig) {
        console.log(`\n🔄 Processing: ${filePath}`);
        
        const htmlContent = this.readHTMLFile(filePath);
        if (!htmlContent) return false;

        // Extract existing schema
        const existingSchemas = this.extractExistingSchema(htmlContent);
        console.log(`   Found ${existingSchemas.length} existing schemas`);

        // Check what's missing
        const hasLocalBusiness = existingSchemas.some(s => s['@type'] === 'LocalBusiness');
        const hasEnhancedFAQ = existingSchemas.some(s => 
            s['@type'] === 'FAQPage' && s.mainEntity && s.mainEntity.length > 4
        );

        const newSchemas = [];

        // Add LocalBusiness if missing
        if (!hasLocalBusiness) {
            const localBusinessSchema = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": `Next Step Therapy - ${pageConfig.city}`,
                "description": `Evidence-based ${pageConfig.serviceType} in ${pageConfig.city}, Ontario. Virtual ACT therapy for professionals. CRPO registered therapist serving ${pageConfig.city} residents.`,
                "url": `https://nextsteptherapy.ca/${path.basename(filePath)}`,
                "telephone": "Book Consultation",
                "email": "jesse@nextsteptherapy.ca",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": pageConfig.city,
                    "addressRegion": "Ontario", 
                    "addressCountry": "Canada"
                },
                "areaServed": {
                    "@type": "City",
                    "name": pageConfig.city,
                    "containedInPlace": {
                        "@type": "State",
                        "name": "Ontario"
                    }
                },
                "medicalSpecialty": pageConfig.serviceType,
                "serviceType": "Virtual Psychotherapy",
                "priceRange": "$175",
                "paymentAccepted": ["Insurance", "Credit Card", "E-transfer"],
                "founder": {
                    "@id": "https://nextsteptherapy.ca/#jessecynamon"
                }
            };
            newSchemas.push(localBusinessSchema);
            console.log(`   ✅ Adding LocalBusiness schema for ${pageConfig.city}`);
        }

        // Add enhanced FAQ if current FAQ is basic
        if (!hasEnhancedFAQ) {
            const enhancedFAQ = this.generateEnhancedFAQs(pageConfig.serviceType, pageConfig.city);
            newSchemas.push(enhancedFAQ);
            console.log(`   ✅ Adding enhanced FAQ schema (6 questions)`);
        }

        // Write updated file if we have new schemas
        if (newSchemas.length > 0) {
            const updatedHTML = this.addSchemaToHTML(htmlContent, newSchemas);
            
            // Create backup
            const backupPath = filePath + '.backup.' + Date.now();
            fs.writeFileSync(backupPath, htmlContent);
            console.log(`   💾 Backup created: ${backupPath}`);
            
            // Write updated file
            fs.writeFileSync(filePath, updatedHTML);
            console.log(`   ✅ Updated ${filePath} with ${newSchemas.length} new schemas`);
            
            this.processedFiles.push({
                file: filePath,
                schemasAdded: newSchemas.length,
                backup: backupPath
            });
            
            return true;
        } else {
            console.log(`   ℹ️  No enhancements needed - already optimized`);
            return false;
        }
    }

    // Main implementation function
    implement() {
        console.log('🚀 Starting Schema Enhancement Implementation\n');
        console.log('Based on AI Schema Generation methodology for #1 Google rankings\n');

        // Define pages to enhance
        const pagesToProcess = [
            {
                file: '/Users/jessecynamon/NextStepTherapy/anxiety-therapy-toronto.html',
                city: 'Toronto',
                serviceType: 'anxiety therapy',
                serviceName: 'Virtual Anxiety Therapy',
                serviceDescription: 'Evidence-based ACT therapy for anxiety management'
            },
            {
                file: '/Users/jessecynamon/NextStepTherapy/depression-therapy-ottawa.html', 
                city: 'Ottawa',
                serviceType: 'depression therapy',
                serviceName: 'Virtual Depression Therapy',
                serviceDescription: 'Professional support for depression using ACT approach'
            }
        ];

        let totalProcessed = 0;
        let totalEnhanced = 0;

        // Process each page
        pagesToProcess.forEach(pageConfig => {
            totalProcessed++;
            if (this.processServicePage(pageConfig.file, pageConfig)) {
                totalEnhanced++;
            }
        });

        // Summary report
        console.log('\n📊 IMPLEMENTATION SUMMARY');
        console.log('========================');
        console.log(`Pages processed: ${totalProcessed}`);
        console.log(`Pages enhanced: ${totalEnhanced}`);
        console.log(`Total schemas added: ${this.processedFiles.reduce((sum, f) => sum + f.schemasAdded, 0)}`);

        if (this.processedFiles.length > 0) {
            console.log('\n📁 Files Modified:');
            this.processedFiles.forEach(file => {
                console.log(`   ${file.file} (+${file.schemasAdded} schemas)`);
                console.log(`   Backup: ${file.backup}`);
            });

            console.log('\n🎯 Expected Results (based on video methodology):');
            console.log('   • Week 1-2: Google recognizes enhanced schema');
            console.log('   • Week 3-4: Improved rich snippet appearances');
            console.log('   • Month 2-3: Higher rankings for city + service keywords');
            console.log('   • Month 3-6: Significant traffic growth from featured snippets');

            console.log('\n📈 Next Steps:');
            console.log('   1. Validate schema with Google Rich Results Test');
            console.log('   2. Monitor GSC for rich snippet improvements');
            console.log('   3. Track ranking changes for target keywords');
            console.log('   4. Use ai_schema_generator.js for future pages');
        }

        console.log('\n✅ Schema enhancement implementation complete!');
    }
}

// Run the implementation
if (require.main === module) {
    const implementer = new SchemaImplementer();
    implementer.implement();
}

module.exports = SchemaImplementer;
