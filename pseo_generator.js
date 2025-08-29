/**
 * Programmatic SEO Page Generator for NextStepTherapy.ca
 * Generates CRPO-compliant therapy pages at scale
 * Based on existing page templates from the site
 */

const fs = require('fs');
const path = require('path');

// ====================
// TEMPLATE DEFINITIONS
// ====================

/**
 * Template for Natural Language/Long-tail Query Pages
 * Examples: "Can't Stop Worrying About Work", "Sunday Night Anxiety"
 */
const LONGTAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Preload Critical Resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- SEO Meta Data -->
    <title>{{NATURAL_QUERY}} | Virtual Therapy Ontario | Next Step Therapy</title>
    <meta name="description" content="{{META_DESCRIPTION}}">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="{{NATURAL_QUERY}} | Next Step Therapy">
    <meta property="og:description" content="{{OG_DESCRIPTION}}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://nextsteptherapy.ca/{{URL_SLUG}}">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://nextsteptherapy.ca/{{URL_SLUG}}">
    
    <!-- Article Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "{{NATURAL_QUERY}}",
      "description": "{{SCHEMA_DESCRIPTION}}",
      "author": {
        "@type": "Person",
        "@id": "https://nextsteptherapy.ca/#jessecynamon",
        "name": "Jesse Cynamon, RP",
        "identifier": "CRPO #10979"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://nextsteptherapy.ca/#organization",
        "name": "Next Step Therapy"
      },
      "mainEntity": {
        "@type": "MedicalCondition",
        "name": "{{MEDICAL_CONDITION}}",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Psychotherapy"
        }
      }
    }
    </script>
    
    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "{{FAQ_QUESTION_1}}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "{{FAQ_ANSWER_1}}"
          }
        },
        {
          "@type": "Question",
          "name": "{{FAQ_QUESTION_2}}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "{{FAQ_ANSWER_2}}"
          }
        },
        {
          "@type": "Question",
          "name": "{{FAQ_QUESTION_3}}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "{{FAQ_ANSWER_3}}"
          }
        }
      ]
    }
    </script>
    
    {{CSS_STYLES}}
</head>
<body>
    {{HEADER_NAV}}
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>{{H1_HEADLINE}}</h1>
            <p class="lead-text">{{LEAD_TEXT}}</p>
            
            <!-- Trust Indicators -->
            <div class="trust-bar">
                <span class="trust-pill">CRPO #10979</span>
                <span class="trust-pill">Virtual Sessions</span>
                <span class="trust-pill">Insurance Receipts</span>
                <span class="trust-pill">Evening Appointments</span>
            </div>
            
            <!-- CTAs -->
            <div class="button-group">
                <a href="/book" class="btn-primary">Book Free Consultation</a>
                <a href="#understanding" class="btn-secondary">Learn More</a>
            </div>
        </div>
    </section>
    
    <!-- Sound Familiar Section -->
    <section class="content-section">
        <div class="container-narrow">
            <h2>Sound Familiar?</h2>
            {{SYMPTOM_LIST}}
            <p class="validation">{{VALIDATION_TEXT}}</p>
        </div>
    </section>
    
    <!-- Understanding Section -->
    <section id="understanding" class="content-section">
        <div class="container-narrow">
            <h2>{{UNDERSTANDING_HEADLINE}}</h2>
            {{WHY_IT_HAPPENS}}
        </div>
    </section>
    
    <!-- How Therapy Helps -->
    <section class="content-section">
        <div class="container-narrow">
            <h2>How Therapy Can Help</h2>
            {{HOW_THERAPY_HELPS}}
        </div>
    </section>
    
    <!-- What to Expect -->
    <section class="content-section">
        <div class="container-narrow">
            <h2>What to Expect</h2>
            {{WHAT_TO_EXPECT}}
            
            <div class="info-cards">
                <div class="info-card">
                    <span class="label">Session Length</span>
                    <span class="value">50 Minutes</span>
                </div>
                <div class="info-card">
                    <span class="label">Format</span>
                    <span class="value">Virtual (Ontario)</span>
                </div>
                <div class="info-card">
                    <span class="label">Investment</span>
                    <span class="value">$175/session</span>
                </div>
                <div class="info-card">
                    <span class="label">Insurance</span>
                    <span class="value">Receipts Provided</span>
                </div>
            </div>
        </div>
    </section>
    
    <!-- About Your Therapist -->
    <section class="content-section therapist-section">
        <div class="container-narrow">
            <h2>About Your Therapist</h2>
            {{THERAPIST_SECTION}}
        </div>
    </section>
    
    <!-- Getting Started -->
    <section class="content-section">
        <div class="container-narrow">
            <h2>Ready to Take the Next Step?</h2>
            {{GETTING_STARTED}}
            
            <div class="button-group center">
                <a href="/book" class="btn-primary">Book Free Consultation</a>
                <a href="tel:xxx-xxx-xxxx" class="btn-secondary">Call Now</a>
            </div>
        </div>
    </section>
    
    {{FOOTER}}
</body>
</html>`;

/**
 * Template for Location-Based Pages
 * Examples: "Anxiety Therapy in Toronto", "Stress Management in Mississauga"
 */
const LOCATION_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>{{SERVICE}} in {{CITY}}, Ontario | Virtual Therapy | Next Step Therapy</title>
    <meta name="description" content="{{SERVICE}} for {{CITY}} residents. Virtual therapy throughout Ontario. CRPO registered psychotherapist #10979. Free consultation available.">
    
    <link rel="canonical" href="https://nextsteptherapy.ca/{{SERVICE_SLUG}}-{{CITY_SLUG}}">
    
    <!-- Service + Location Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "{{SERVICE}} in {{CITY}}",
      "description": "Virtual {{SERVICE}} services for residents of {{CITY}}, Ontario",
      "provider": {
        "@type": "Person",
        "@id": "https://nextsteptherapy.ca/#jessecynamon",
        "name": "Jesse Cynamon, RP",
        "identifier": "CRPO #10979"
      },
      "areaServed": {
        "@type": "City",
        "name": "{{CITY}}",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Ontario",
          "containedInPlace": {
            "@type": "Country",
            "name": "Canada"
          }
        }
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://nextsteptherapy.ca/book",
        "servicePhone": "{{PHONE}}",
        "availableLanguage": ["English"]
      }
    }
    </script>
    
    {{CSS_STYLES}}
</head>
<body>
    {{HEADER_NAV}}
    
    <section class="hero location-hero">
        <div class="hero-content">
            <h1>{{SERVICE}} for {{CITY}} Residents</h1>
            <p class="lead-text">Professional virtual therapy services available to all {{CITY}} residents. 
            Connect with a registered psychotherapist from the comfort of your home.</p>
            
            <div class="trust-bar">
                <span class="trust-pill">Serving {{CITY}}</span>
                <span class="trust-pill">CRPO #10979</span>
                <span class="trust-pill">Virtual Sessions</span>
                <span class="trust-pill">Insurance Coverage</span>
            </div>
        </div>
    </section>
    
    <section class="content-section">
        <div class="container-narrow">
            <h2>{{SERVICE}} in {{CITY}}</h2>
            <p>{{LOCAL_CONTEXT}}</p>
            {{SERVICE_DESCRIPTION}}
        </div>
    </section>
    
    {{COMMON_CONTENT_SECTIONS}}
    
    <section class="content-section">
        <div class="container-narrow">
            <h2>Serving All {{CITY}} Neighborhoods</h2>
            <p>Our virtual therapy services are available to residents throughout {{CITY}} and surrounding areas in {{REGION}}.</p>
            {{NEIGHBORHOOD_LIST}}
        </div>
    </section>
    
    {{FOOTER}}
</body>
</html>`;

// ====================
// CONTENT GENERATORS
// ====================

/**
 * Generate page content for long-tail keyword pages
 */
function generateLongtailContent(data) {
    const content = { ...data };
    
    // Generate meta descriptions if not provided
    if (!content.META_DESCRIPTION) {
        content.META_DESCRIPTION = `${data.NATURAL_QUERY}? You're not alone. Virtual therapy for ${data.EMOTIONAL_STATE} throughout Ontario. Free consultation. CRPO #10979.`;
    }
    
    // Generate FAQ questions if not provided
    if (!content.FAQ_QUESTION_1) {
        content.FAQ_QUESTION_1 = `Why do I ${data.EMOTIONAL_STATE} about ${data.SITUATION}?`;
        content.FAQ_ANSWER_1 = "This is a common response to stress and anxiety. Many factors can contribute, including work pressure, life transitions, and underlying anxiety patterns. Understanding these patterns is the first step toward change.";
    }
    
    if (!content.FAQ_QUESTION_2) {
        content.FAQ_QUESTION_2 = `Is it normal to ${data.NATURAL_QUERY.toLowerCase()}?`;
        content.FAQ_ANSWER_2 = "Yes, many people experience this. It's often a sign that your mind and body are signaling a need for support or change. Therapy can help you understand and address these signals.";
    }
    
    if (!content.FAQ_QUESTION_3) {
        content.FAQ_QUESTION_3 = "How can therapy help with my specific situation?";
        content.FAQ_ANSWER_3 = "Therapy provides a safe space to explore your concerns, develop coping strategies, and work toward meaningful change. Using evidence-based approaches, we'll work together to address your unique needs.";
    }
    
    return content;
}

/**
 * Generate page content for location-based pages
 */
function generateLocationContent(data) {
    const content = { ...data };
    
    // City-specific context based on actual Ontario cities
    const cityContexts = {
        'Toronto': 'With its fast-paced environment and competitive job market, Toronto residents often face unique stressors.',
        'Mississauga': 'As one of Canada\'s most diverse cities, Mississauga residents navigate cultural transitions alongside daily stressors.',
        'Ottawa': 'The capital city\'s government sector and bilingual environment create specific workplace pressures.',
        'Hamilton': 'Hamilton\'s economic transformation and revitalization bring both opportunities and adjustment challenges.',
        'London': 'As a major hub for education and healthcare, London residents balance academic and professional pressures.',
        'Kitchener': 'The tech boom in Kitchener-Waterloo creates a high-pressure environment for many professionals.',
        'Windsor': 'Border city dynamics and manufacturing sector changes affect mental health for many Windsor residents.',
        'Vaughan': 'Rapid growth and suburban pressures in Vaughan can impact family and work-life balance.',
        'Markham': 'Markham\'s tech sector and diverse communities face unique professional and cultural stressors.',
        'Richmond Hill': 'The blend of urban growth and family life in Richmond Hill creates specific mental health needs.'
    };
    
    content.LOCAL_CONTEXT = cityContexts[data.CITY] || `${data.CITY} residents face unique challenges that can impact mental health and well-being.`;
    
    return content;
}

// ====================
// CRPO COMPLIANCE CHECK
// ====================

function checkCRPOCompliance(html) {
    const violations = [];
    
    // Prohibited terms that violate CRPO standards
    const prohibitedTerms = [
        'best therapist',
        'top therapist',
        'number one',
        '#1 therapist',
        'guaranteed results',
        'cure',
        'testimonial',
        'client review',
        '5 star',
        'five star',
        'rated',
        'compared to other',
        'better than',
        'superior to',
        'only therapist',
        'unique approach', // Can't claim uniqueness
        'revolutionary',
        'breakthrough',
        'miraculous',
        'life-changing', // Implies guarantee
        'transform your life', // Implies guarantee
        'never feel anxious again', // Unrealistic promise
        'eliminate anxiety', // Medical claim
        'treat depression', // Medical terminology
        'diagnose'
    ];
    
    const htmlLower = html.toLowerCase();
    
    // Check for prohibited terms
    prohibitedTerms.forEach(term => {
        if (htmlLower.includes(term)) {
            violations.push(`Found prohibited term: "${term}"`);
        }
    });
    
    // Check for required elements
    if (!html.includes('CRPO #10979')) {
        violations.push('Missing CRPO registration number');
    }
    
    if (!html.includes('Registered Psychotherapist') && !html.includes('RP')) {
        violations.push('Missing professional designation');
    }
    
    // Check for fear-based appeals
    const fearPhrases = [
        'before it\'s too late',
        'don\'t wait until',
        'consequences of not',
        'dangers of ignoring',
        'risks of untreated'
    ];
    
    fearPhrases.forEach(phrase => {
        if (htmlLower.includes(phrase)) {
            violations.push(`Fear-based appeal found: "${phrase}"`);
        }
    });
    
    return {
        compliant: violations.length === 0,
        violations: violations
    };
}

// ====================
// PAGE GENERATION
// ====================

/**
 * Generate a single page from template and data
 */
function generatePage(templateType, data) {
    let template;
    let processedData;
    
    switch(templateType) {
        case 'longtail':
            template = LONGTAIL_TEMPLATE;
            processedData = generateLongtailContent(data);
            break;
        case 'location':
            template = LOCATION_TEMPLATE;
            processedData = generateLocationContent(data);
            break;
        default:
            throw new Error(`Unknown template type: ${templateType}`);
    }
    
    // Replace all variables in template
    let html = template;
    Object.keys(processedData).forEach(key => {
        const regex = new RegExp(`{{${key}}}`, 'g');
        html = html.replace(regex, processedData[key] || '');
    });
    
    // Check CRPO compliance
    const compliance = checkCRPOCompliance(html);
    
    return {
        html: html,
        compliance: compliance
    };
}

// ====================
// BULK GENERATION
// ====================

/**
 * Generate multiple pages from data array
 */
function generateBulkPages(templateType, dataArray, outputDir) {
    console.log(`\n🚀 Starting bulk generation of ${dataArray.length} pages...`);
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const results = {
        successful: [],
        failed: []
    };
    
    dataArray.forEach((data, index) => {
        try {
            const result = generatePage(templateType, data);
            
            if (result.compliance.compliant) {
                // Generate filename
                const filename = data.URL_SLUG || data.SHORT_QUERY || 
                               `${data.SERVICE_SLUG}-${data.CITY_SLUG}` || 
                               `page-${index}`;
                               
                const filepath = path.join(outputDir, `${filename}.html`);
                
                // Write file
                fs.writeFileSync(filepath, result.html);
                
                results.successful.push(filename);
                console.log(`✅ Generated: ${filename}.html`);
            } else {
                results.failed.push({
                    page: data.NATURAL_QUERY || data.SERVICE || 'Unknown',
                    violations: result.compliance.violations
                });
                console.log(`❌ Failed compliance: ${data.NATURAL_QUERY || data.SERVICE}`);
                result.compliance.violations.forEach(v => console.log(`   - ${v}`));
            }
        } catch (error) {
            console.error(`Error generating page ${index}:`, error.message);
            results.failed.push({
                page: `Page ${index}`,
                error: error.message
            });
        }
    });
    
    // Summary
    console.log('\n📊 Generation Summary:');
    console.log(`✅ Successful: ${results.successful.length} pages`);
    console.log(`❌ Failed: ${results.failed.length} pages`);
    
    return results;
}

// ====================
// SAMPLE DATA
// ====================

const sampleLongtailPages = [
    {
        NATURAL_QUERY: "Can't Stop Worrying About Work",
        URL_SLUG: "cant-stop-worrying-work",
        EMOTIONAL_STATE: "worried",
        SITUATION: "work",
        MEDICAL_CONDITION: "Workplace Anxiety",
        H1_HEADLINE: "Can't Stop Worrying About Work?",
        LEAD_TEXT: "When work thoughts consume your evenings and weekends, it's time for support.",
        VALIDATION_TEXT: "You're not alone - workplace anxiety affects millions of professionals.",
        UNDERSTANDING_HEADLINE: "Why Work Worry Takes Over"
    },
    {
        NATURAL_QUERY: "Sunday Night Anxiety",
        URL_SLUG: "sunday-night-anxiety",
        EMOTIONAL_STATE: "anxious",
        SITUATION: "Sunday nights",
        MEDICAL_CONDITION: "Anticipatory Anxiety",
        H1_HEADLINE: "Sunday Night Anxiety",
        LEAD_TEXT: "That familiar Sunday dread doesn't have to control your weekends.",
        VALIDATION_TEXT: "The 'Sunday Scaries' affect up to 80% of professionals.",
        UNDERSTANDING_HEADLINE: "Understanding the Sunday Scaries"
    },
    {
        NATURAL_QUERY: "Can't Sleep Because of Anxiety",
        URL_SLUG: "cant-sleep-anxiety",
        EMOTIONAL_STATE: "anxious",
        SITUATION: "bedtime",
        MEDICAL_CONDITION: "Anxiety-Related Insomnia",
        H1_HEADLINE: "Can't Sleep Because of Anxiety?",
        LEAD_TEXT: "When your mind races the moment your head hits the pillow.",
        VALIDATION_TEXT: "Anxiety-related sleep issues are one of the most common concerns in therapy.",
        UNDERSTANDING_HEADLINE: "The Anxiety-Sleep Connection"
    }
];

const sampleLocationPages = [
    {
        CITY: "Toronto",
        CITY_SLUG: "toronto",
        SERVICE: "Anxiety Therapy",
        SERVICE_SLUG: "anxiety-therapy",
        REGION: "Greater Toronto Area",
        PHONE: "xxx-xxx-xxxx"
    },
    {
        CITY: "Mississauga",
        CITY_SLUG: "mississauga",
        SERVICE: "Stress Management",
        SERVICE_SLUG: "stress-management",
        REGION: "Peel Region",
        PHONE: "xxx-xxx-xxxx"
    },
    {
        CITY: "Ottawa",
        CITY_SLUG: "ottawa",
        SERVICE: "Depression Support",
        SERVICE_SLUG: "depression-support",
        REGION: "National Capital Region",
        PHONE: "xxx-xxx-xxxx"
    }
];

// ====================
// EXPORT FOR USE
// ====================

module.exports = {
    generatePage,
    generateBulkPages,
    checkCRPOCompliance,
    LONGTAIL_TEMPLATE,
    LOCATION_TEMPLATE,
    sampleLongtailPages,
    sampleLocationPages
};

// ====================
// CLI EXECUTION
// ====================

if (require.main === module) {
    // Run directly from command line
    console.log('🎯 NextStep Therapy - Programmatic SEO Generator');
    console.log('================================================\n');
    
    // Example: Generate sample pages
    const args = process.argv.slice(2);
    
    if (args[0] === 'test') {
        console.log('Running test generation...');
        
        // Generate longtail pages
        generateBulkPages('longtail', sampleLongtailPages, './output/seo');
        
        // Generate location pages
        generateBulkPages('location', sampleLocationPages, './output/locations');
        
        console.log('\n✨ Test generation complete! Check the output directory.');
    } else {
        console.log('Usage:');
        console.log('  node pseo_generator.js test     - Generate sample pages');
        console.log('  node pseo_generator.js [csv]    - Generate from CSV file');
    }
}
