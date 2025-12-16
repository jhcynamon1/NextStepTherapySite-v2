#!/usr/bin/env node

/**
 * Location Page Template Generator
 * Generates city + service landing pages for rapid content expansion
 *
 * Usage: node generate-location-page.js [city] [service] [university]
 * Example: node generate-location-page.js london student-mental-health "Western University"
 */

const fs = require('fs');
const path = require('path');

// Configuration for different cities and their details
const CITY_CONFIG = {
  hamilton: {
    name: "Hamilton",
    university: "McMaster University",
    description: "McMaster students dealing with academic stress, university anxiety, and student life challenges"
  },
  london: {
    name: "London",
    university: "Western University",
    description: "Western University students facing academic pressure, social challenges, and university transitions"
  },
  kingston: {
    name: "Kingston",
    university: "Queen's University",
    description: "Queen's University students managing academic excellence, social pressures, and campus life"
  },
  ottawa: {
    name: "Ottawa",
    university: "University of Ottawa & Carleton University",
    description: "Ottawa university students balancing academic demands with capital city opportunities"
  },
  waterloo: {
    name: "Waterloo",
    university: "University of Waterloo & Wilfrid Laurier University",
    description: "Waterloo students in tech and business programs managing high academic expectations"
  }
};

// Service templates
const SERVICE_TEMPLATES = {
  "student-mental-health": {
    title: "Student Mental Health {city}",
    titleSuffix: "University Support | CRPO #10979",
    description: "Student mental health support in {city} for {university} students. Virtual therapy for university anxiety, depression, and academic stress. CRPO registered therapist.",
    heroTitle: "Student Mental Health Support in {city}",
    heroText: "University life at {university} shouldn't feel overwhelming every single day. If you're struggling with academic pressure, feeling isolated despite being surrounded by people, or questioning whether you belong here, you're not alone. Professional mental health support designed specifically for {city} students can help you navigate university challenges while building resilience for your future.",
    ctaText: "Book Free Student Consultation",
    trustPill: "{university} Experience"
  }
};

function generatePage(city, service, customUniversity = null) {
  const cityKey = city.toLowerCase();
  const cityConfig = CITY_CONFIG[cityKey];

  if (!cityConfig) {
    console.error(`Error: City "${city}" not found in configuration.`);
    console.log(`Available cities: ${Object.keys(CITY_CONFIG).join(', ')}`);
    process.exit(1);
  }

  const serviceTemplate = SERVICE_TEMPLATES[service];
  if (!serviceTemplate) {
    console.error(`Error: Service "${service}" not found in templates.`);
    console.log(`Available services: ${Object.keys(SERVICE_TEMPLATES).join(', ')}`);
    process.exit(1);
  }

  // Use custom university if provided, otherwise use default
  const university = customUniversity || cityConfig.university;

  // Read the Hamilton template as base
  const templatePath = path.join(__dirname, '..', 'student-mental-health-hamilton.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Template file not found at ${templatePath}`);
    process.exit(1);
  }

  let content = fs.readFileSync(templatePath, 'utf8');

  // Replace all instances with new city/service data
  const replacements = {
    // SEO and meta data
    'Student Mental Health Hamilton': serviceTemplate.title.replace('{city}', cityConfig.name),
    'McMaster University Support | CRPO #10979': serviceTemplate.titleSuffix,
    'Student mental health support in Hamilton for McMaster University students':
      serviceTemplate.description.replace('{city}', cityConfig.name).replace('{university}', university),

    // URLs and canonical
    '/students/student-mental-health-hamilton': `/students/${service}-${cityKey}`,
    'student-mental-health-hamilton': `${service}-${cityKey}`,

    // Schema markup
    'Student Mental Health Hamilton - McMaster University Support':
      `${serviceTemplate.title.replace('{city}', cityConfig.name)} - ${university} Support`,
    'Professional mental health support for Hamilton students, specifically McMaster University students dealing with academic stress':
      `Professional mental health support for ${cityConfig.name} students, specifically ${university} students dealing with academic stress`,

    // Hero section
    'Student Mental Health Support in Hamilton':
      serviceTemplate.heroTitle.replace('{city}', cityConfig.name),
    'University life at McMaster shouldn\'t feel overwhelming every single day. If you\'re struggling with academic pressure, feeling isolated despite being surrounded by people, or questioning whether you belong here, you\'re not alone. Professional mental health support designed specifically for Hamilton students can help you navigate university challenges while building resilience for your future.':
      serviceTemplate.heroText.replace('{city}', cityConfig.name).replace('{university}', university),

    // Trust pills
    'McMaster University Experience': serviceTemplate.trustPill.replace('{university}', university),

    // Content sections
    'The Hidden Struggles of Hamilton Students': `The Hidden Struggles of ${cityConfig.name} Students`,
    'Being a student in Hamilton, especially at McMaster University':
      `Being a student in ${cityConfig.name}, especially at ${university}`,
    'Understanding Student Mental Health in Hamilton':
      `Understanding Student Mental Health in ${cityConfig.name}`,
    'In Hamilton, with McMaster\'s academic rigor':
      `In ${cityConfig.name}, with ${university.split(' ')[0]}'s academic rigor`,
    'Common Mental Health Challenges for Hamilton Students':
      `Common Mental Health Challenges for ${cityConfig.name} Students`,
    'How Therapy Helps Hamilton Students': `How Therapy Helps ${cityConfig.name} Students`,
    'Supporting McMaster University Students': `Supporting ${university} Students`,
    'As a therapist who works with many McMaster students':
      `As a therapist who works with many ${university} students`,
    'From the intensity of programs like Health Sciences and Engineering to the pressure of competitive graduate school applications, McMaster students face distinct stressors.':
      `From the intensity of ${university}'s demanding programs to the pressure of competitive graduate school applications, ${cityConfig.name} students face distinct stressors.`,
    'Common McMaster Student Challenges': `Common ${university} Student Challenges`,
    'Hamilton Student Life Considerations': `${cityConfig.name} Student Life Considerations`,
    'Managing housing costs in Hamilton': `Managing housing costs in ${cityConfig.name}`,
    'Navigating Hamilton\'s transit system': `Navigating ${cityConfig.name}'s transit system`,
    'Finding your community within McMaster\'s large student body':
      `Finding your community within ${university}'s student body`,
    'McMaster Student Insurance': `${cityConfig.name} Student Insurance`,
    'MUSC Health & Dental Plan': `Student Health & Dental Plan`,
    'McMaster students and other Hamilton students':
      `${university} students and other ${cityConfig.name} students`,
    'extensive experience working with university students throughout Ontario, including many students from McMaster University in Hamilton':
      `extensive experience working with university students throughout Ontario, including many students from ${university} in ${cityConfig.name}`,
    'Supporting Hamilton Students & McMaster University':
      `Supporting ${cityConfig.name} Students & ${university}`,
    'Student Mental Health Specialist | Hamilton & All Ontario':
      `Student Mental Health Specialist | ${cityConfig.name} & All Ontario`,

    // Date stamps
    '2025-09-22': new Date().toISOString().split('T')[0]
  };

  // Apply all replacements
  for (const [search, replace] of Object.entries(replacements)) {
    content = content.split(search).join(replace);
  }

  // Generate output filename
  const outputFile = `${service}-${cityKey}.html`;
  const outputPath = path.join(__dirname, '..', outputFile);

  // Write the new file
  fs.writeFileSync(outputPath, content);

  console.log(`✅ Generated: ${outputFile}`);
  console.log(`📍 City: ${cityConfig.name}`);
  console.log(`🎓 University: ${university}`);
  console.log(`🔗 URL: /students/${service}-${cityKey}`);

  // Generate redirect rule for vercel.json
  const redirectRule = `    { "source": "/${service}-${cityKey}.html", "destination": "/students/${service}-${cityKey}", "permanent": true },`;
  console.log(`\n📋 Add this redirect rule to vercel.json:`);
  console.log(redirectRule);

  // Generate sitemap entry
  const sitemapEntry = `  <url>
    <loc>https://nextsteptherapy.ca/students/${service}-${cityKey}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  console.log(`\n🗺️ Add this sitemap entry to sitemap.xml:`);
  console.log(sitemapEntry);
}

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node generate-location-page.js [city] [service] [university]');
  console.log('');
  console.log('Available cities:', Object.keys(CITY_CONFIG).join(', '));
  console.log('Available services:', Object.keys(SERVICE_TEMPLATES).join(', '));
  console.log('');
  console.log('Examples:');
  console.log('  node generate-location-page.js london student-mental-health');
  console.log('  node generate-location-page.js kingston student-mental-health "Queen\'s University"');
  process.exit(1);
}

const [city, service, university] = args;
generatePage(city, service, university);