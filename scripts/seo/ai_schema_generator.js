#!/usr/bin/env node

/**
 * AI Schema Generator for NextStepTherapy.ca
 * Automated schema markup generation following CRPO compliance guidelines
 * Based on the video methodology for ranking #1 in Google
 */

const fs = require('fs');
const path = require('path');

// CRPO-Compliant Schema Templates
const SCHEMA_TEMPLATES = {
    // 1. LocalBusiness/MedicalBusiness Schema (CRPO Compliant)
    localBusiness: {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "@id": "https://nextsteptherapy.ca/#organization",
        "name": "Next Step Therapy",
        "alternateName": "Next Step Therapy Ontario",
        "description": "[DESCRIPTION]", // Must be factual, no cure claims
        "url": "https://nextsteptherapy.ca",
        "logo": {
            "@type": "ImageObject",
            "url": "https://nextsteptherapy.ca/images/asset104.png"
        },
        "image": "https://nextsteptherapy.ca/images/asset104.png",
        "telephone": "[PHONE]",
        "email": "jesse@nextsteptherapy.ca",
        "founder": {
            "@id": "https://nextsteptherapy.ca/#jessecynamon"
        },
        "employee": {
            "@id": "https://nextsteptherapy.ca/#jessecynamon"
        },
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Ontario",
            "addressCountry": "Canada"
        },
        "areaServed": [
            {
                "@type": "State",
                "name": "Ontario",
                "containedInPlace": {
                    "@type": "Country",
                    "name": "Canada"
                }
            }
        ],
        "medicalSpecialty": [
            "Psychotherapy",
            "Mental Health Counseling",
            "Acceptance and Commitment Therapy"
        ],
        "healthcareProvider": {
            "@id": "https://nextsteptherapy.ca/#jessecynamon"
        },
        "license": "CRPO #10979",
        "accreditation": {
            "@type": "Organization",
            "name": "College of Registered Psychotherapists of Ontario",
            "url": "https://crpo.ca"
        },
        "serviceType": [
            "Individual Psychotherapy",
            "Virtual Therapy Sessions",
            "Mental Health Counseling"
        ],
        "priceRange": "$175",
        "paymentAccepted": [
            "Insurance",
            "Credit Card",
            "E-transfer"
        ],
        "currenciesAccepted": "CAD"
    },

    // 2. Person Schema for Jesse Cynamon (CRPO Compliant)
    person: {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://nextsteptherapy.ca/#jessecynamon",
        "name": "Jesse Cynamon",
        "givenName": "Jesse",
        "familyName": "Cynamon",
        "additionalName": "RP",
        "jobTitle": "Registered Psychotherapist",
        "description": "Registered Psychotherapist specializing in Acceptance and Commitment Therapy (ACT) for anxiety, depression, and workplace stress in Ontario.",
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "name": "Registered Psychotherapist",
                "credentialCategory": "Professional License",
                "recognizedBy": {
                    "@type": "Organization",
                    "name": "College of Registered Psychotherapists of Ontario",
                    "url": "https://crpo.ca"
                },
                "identifier": "CRPO #10979"
            }
        ],
        "memberOf": {
            "@type": "Organization",
            "name": "College of Registered Psychotherapists of Ontario",
            "url": "https://crpo.ca"
        },
        "knowsAbout": [
            "Acceptance and Commitment Therapy",
            "Anxiety Disorders",
            "Depression Treatment",
            "Men's Mental Health",
            "Workplace Stress Management",
            "Virtual Therapy"
        ],
        "workLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressRegion": "Ontario",
                "addressCountry": "CA"
            }
        },
        "worksFor": {
            "@id": "https://nextsteptherapy.ca/#organization"
        }
    },

    // 3. FAQPage Schema Template (CRPO Compliant)
    faqPage: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": "[FAQ_ARRAY]" // Will be populated with specific FAQs
    },

    // 4. Article Schema Template (CRPO Compliant)
    article: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "[HEADLINE]",
        "description": "[DESCRIPTION]",
        "wordCount": "[WORD_COUNT]",
        "author": {
            "@type": "Person",
            "@id": "https://nextsteptherapy.ca/#jessecynamon",
            "name": "Jesse Cynamon, RP",
            "identifier": "CRPO #10979",
            "jobTitle": "Registered Psychotherapist"
        },
        "publisher": {
            "@id": "https://nextsteptherapy.ca/#organization"
        },
        "datePublished": "[DATE_PUBLISHED]",
        "dateModified": "[DATE_MODIFIED]"
    },

    // 5. MedicalWebPage Schema (CRPO Compliant)
    medicalWebPage: {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "[PAGE_NAME]",
        "description": "[DESCRIPTION]",
        "provider": {
            "@type": "Person", // Changed from Psychologist to Person for CRPO compliance
            "name": "Jesse Cynamon, RP",
            "identifier": "CRPO #10979",
            "areaServed": "Ontario, Canada"
        },
        "availableService": {
            "@type": "MedicalTherapy",
            "name": "[SERVICE_NAME]",
            "description": "[SERVICE_DESCRIPTION]",
            "serviceType": "Telehealth"
        },
        "potentialAction": {
            "@type": "ScheduleAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://nextsteptherapy.ca/#contact"
            }
        }
    }
};

// CRPO-Compliant FAQ Templates
const FAQ_TEMPLATES = {
    anxiety: [
        {
            "@type": "Question",
            "name": "What is ACT therapy and how does it help with anxiety?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Acceptance and Commitment Therapy (ACT) is an evidence-based approach that helps you change your relationship with anxious thoughts. Instead of trying to eliminate anxiety, you learn practical skills to handle it effectively while focusing on your goals."
            }
        },
        {
            "@type": "Question",
            "name": "Is virtual therapy as effective as in-person sessions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Research confirms that virtual therapy is just as effective as in-person sessions for anxiety. For busy professionals, it is often a more sustainable and convenient option."
            }
        }
    ],
    depression: [
        {
            "@type": "Question",
            "name": "What kind of therapy is effective for depression?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evidence-based approaches like Acceptance and Commitment Therapy (ACT) are highly effective. We focus on ACT to provide practical skills for managing depressive thoughts and feelings while reconnecting with a meaningful life."
            }
        },
        {
            "@type": "Question",
            "name": "I'm a high-performing professional. Is my depression 'bad enough' for therapy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "High-functioning depression is very real. If you're going through the motions, feeling disconnected, or finding it hard to motivate yourself despite your success, therapy can provide the tools to move from just 'functioning' to thriving."
            }
        }
    ],
    general: [
        {
            "@type": "Question",
            "name": "Do you provide receipts for insurance?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide official receipts for all sessions that you can submit to your extended health plan for reimbursement. Most plans cover services provided by a Registered Psychotherapist."
            }
        },
        {
            "@type": "Question",
            "name": "How quickly can I start therapy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can typically book a free consultation within 24-48 hours, with your first full therapy session available shortly after. We do not have a waitlist for virtual appointments."
            }
        }
    ]
};

// CRPO Compliance Checker
class CRPOComplianceChecker {
    static PROHIBITED_WORDS = [
        '\\bcure\\b', '\\beliminate\\b', '\\bfix\\b', '\\bbest\\b', '\\btop\\b', '\\bleading\\b', '\\bguaranteed\\b', 
        '\\bmiracle\\b', '\\binstant\\b', '\\bpermanent\\b', 'complete recovery', 'total healing'
    ];

    static REQUIRED_DISCLAIMERS = [
        'CRPO #10979',
        'Registered Psychotherapist',
        'evidence-based'
    ];

    static checkCompliance(text) {
        const issues = [];
        const lowerText = text.toLowerCase();

        // Check for prohibited words using regex for word boundaries
        this.PROHIBITED_WORDS.forEach(word => {
            const regex = new RegExp(word, 'i');
            if (regex.test(text)) {
                issues.push(`Prohibited word found: "${word.replace(/\\b/g, '')}"`);
            }
        });

        // Check for required elements (at least one should be present)
        const hasRequiredElement = this.REQUIRED_DISCLAIMERS.some(disclaimer => 
            lowerText.includes(disclaimer.toLowerCase())
        );

        if (!hasRequiredElement) {
            issues.push('Missing required professional identification');
        }

        return {
            compliant: issues.length === 0,
            issues: issues
        };
    }
}

// Schema Generator Class
class AISchemaGenerator {
    constructor() {
        this.templates = SCHEMA_TEMPLATES;
        this.faqTemplates = FAQ_TEMPLATES;
    }

    // Generate LocalBusiness schema for a specific page
    generateLocalBusinessSchema(pageData) {
        const schema = JSON.parse(JSON.stringify(this.templates.localBusiness));
        
        // Customize based on page data
        schema.description = pageData.description || "Evidence-based therapy practice in Ontario using Acceptance and Commitment Therapy (ACT) approach. Specializing in anxiety, depression, men's mental health, and workplace stress. CRPO registered therapist offering virtual sessions throughout Ontario.";
        schema.telephone = pageData.phone || "Book Consultation";
        
        // Add specific services if provided
        if (pageData.services) {
            schema.hasOfferCatalog = {
                "@type": "OfferCatalog",
                "name": "Therapy Services",
                "itemListElement": pageData.services.map(service => ({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MedicalTherapy",
                        "name": service.name,
                        "description": service.description
                    },
                    "price": "175",
                    "priceCurrency": "CAD",
                    "availability": "InStock"
                }))
            };
        }

        return this.validateAndReturn(schema);
    }

    // Generate Person schema
    generatePersonSchema() {
        return this.validateAndReturn(this.templates.person);
    }

    // Generate FAQ schema for specific topic
    generateFAQSchema(topic, customFAQs = []) {
        const schema = JSON.parse(JSON.stringify(this.templates.faqPage));
        
        let faqs = [];
        
        // Add topic-specific FAQs
        if (this.faqTemplates[topic]) {
            faqs = faqs.concat(this.faqTemplates[topic]);
        }
        
        // Add general FAQs
        faqs = faqs.concat(this.faqTemplates.general);
        
        // Add custom FAQs
        if (customFAQs.length > 0) {
            faqs = faqs.concat(customFAQs);
        }

        schema.mainEntity = faqs;
        
        return this.validateAndReturn(schema);
    }

    // Generate Article schema
    generateArticleSchema(articleData) {
        const schema = JSON.parse(JSON.stringify(this.templates.article));
        
        schema.headline = articleData.headline;
        schema.description = articleData.description;
        schema.wordCount = articleData.wordCount || "2000";
        schema.datePublished = articleData.datePublished || new Date().toISOString().split('T')[0];
        schema.dateModified = articleData.dateModified || new Date().toISOString().split('T')[0];
        
        return this.validateAndReturn(schema);
    }

    // Generate MedicalWebPage schema
    generateMedicalWebPageSchema(pageData) {
        const schema = JSON.parse(JSON.stringify(this.templates.medicalWebPage));
        
        schema.name = pageData.name;
        schema.description = pageData.description;
        schema.availableService.name = pageData.serviceName || "Virtual Psychotherapy";
        schema.availableService.description = pageData.serviceDescription || "Online therapy sessions via secure video";
        
        return this.validateAndReturn(schema);
    }

    // Validate schema for CRPO compliance
    validateAndReturn(schema) {
        const schemaString = JSON.stringify(schema);
        const compliance = CRPOComplianceChecker.checkCompliance(schemaString);
        
        if (!compliance.compliant) {
            console.warn('CRPO Compliance Issues Found:', compliance.issues);
            // In production, you might want to throw an error or fix automatically
        }
        
        return schema;
    }

    // Generate complete schema package for a page
    generatePageSchemaPackage(pageType, pageData) {
        const schemas = [];
        
        // Always include Person schema
        schemas.push(this.generatePersonSchema());
        
        switch (pageType) {
            case 'homepage':
                schemas.push(this.generateLocalBusinessSchema(pageData));
                schemas.push(this.generateFAQSchema('general', pageData.customFAQs));
                break;
                
            case 'service':
                schemas.push(this.generateMedicalWebPageSchema(pageData));
                schemas.push(this.generateFAQSchema(pageData.topic, pageData.customFAQs));
                break;
                
            case 'article':
                schemas.push(this.generateArticleSchema(pageData));
                if (pageData.topic) {
                    schemas.push(this.generateFAQSchema(pageData.topic));
                }
                break;
                
            case 'location':
                schemas.push(this.generateLocalBusinessSchema({
                    ...pageData,
                    description: `Evidence-based therapy in ${pageData.city}, Ontario. Virtual ACT therapy for anxiety, depression, and workplace stress. CRPO registered therapist serving ${pageData.city} residents.`
                }));
                schemas.push(this.generateFAQSchema('general'));
                break;
        }
        
        return schemas;
    }

    // Generate HTML script tags for schemas
    generateSchemaHTML(schemas) {
        return schemas.map(schema => 
            `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`
        ).join('\n\n');
    }
}

// CLI Interface
function main() {
    const generator = new AISchemaGenerator();
    
    // Example usage for different page types
    const examples = {
        homepage: {
            description: "Evidence-based therapy practice in Ontario using Acceptance and Commitment Therapy (ACT) approach.",
            phone: "Book Consultation",
            services: [
                {
                    name: "Individual Therapy Session",
                    description: "50-minute evidence-based therapy session using ACT approach"
                }
            ]
        },
        
        anxietyService: {
            name: "Anxiety Therapy in Toronto",
            description: "Evidence-based virtual anxiety therapy for professionals dealing with workplace stress, worry, and burnout.",
            serviceName: "Virtual Anxiety Therapy",
            serviceDescription: "Online ACT therapy sessions for anxiety management",
            topic: "anxiety"
        },
        
        depressionService: {
            name: "Depression Therapy in Ottawa", 
            description: "Professional, evidence-based virtual therapy for individuals struggling with depression.",
            serviceName: "Virtual Depression Therapy",
            serviceDescription: "Online ACT therapy sessions for depression support",
            topic: "depression"
        }
    };

    // Generate schema for homepage
    console.log('=== HOMEPAGE SCHEMA ===');
    const homepageSchemas = generator.generatePageSchemaPackage('homepage', examples.homepage);
    console.log(generator.generateSchemaHTML(homepageSchemas));

    console.log('\n=== ANXIETY SERVICE PAGE SCHEMA ===');
    const anxietySchemas = generator.generatePageSchemaPackage('service', examples.anxietyService);
    console.log(generator.generateSchemaHTML(anxietySchemas));

    console.log('\n=== DEPRESSION SERVICE PAGE SCHEMA ===');
    const depressionSchemas = generator.generatePageSchemaPackage('service', examples.depressionService);
    console.log(generator.generateSchemaHTML(depressionSchemas));
}

// Export for use in other scripts
module.exports = {
    AISchemaGenerator,
    CRPOComplianceChecker,
    SCHEMA_TEMPLATES,
    FAQ_TEMPLATES
};

// Run if called directly
if (require.main === module) {
    main();
}
