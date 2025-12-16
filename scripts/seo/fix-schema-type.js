const fs = require('fs');
const path = require('path');

// Correct schema for CRPO Psychotherapist
const correctSchema = `"@type": "ProfessionalService",
      "provider": {
        "@type": "Person",
        "additionalType": "Psychotherapist",
        "name": "Jesse Cynamon, RP",
        "identifier": "CRPO #10979"
      }`;

// Files to fix (production files only, excluding backups)
const filesToFix = [
  'anxiety-therapy-toronto.html',
  'anxiety-therapy-burlington.html',
  'depression-therapy-burlington.html',
  'workplace-stress-counselling-hamilton.html',
  'therapist-toronto-depression.html',
  'workplace-stress-burnout-therapy.html',
  'work-anxiety-and-stress.html',
  'virtual-therapy-burlington.html',
  'university-anxiety-therapy-ontario.html',
  'therapy-windsor-ontario.html',
  'therapy-ottawa-ontario.html',
  'therapy-near-me-ontario.html',
  'therapy-mississauga-ontario.html',
  'therapy-london-ontario.html',
  'therapy-kingston-ontario.html',
  'therapy-hamilton-ontario.html',
  'services.html',
  'performance-anxiety.html',
  'performance-anxiety-therapy-toronto.html',
  'perfectionism-and-burnout-therapy-toronto.html',
  'online-therapy-burlington.html',
  'mental-health-therapist-ontario.html',
  'mens-mental-health-therapy-london-ontario.html',
  'marriage-counselling-toronto.html',
  'depression-therapy-mississauga.html',
  'depression-therapy-london.html',
  'counsellor-ontario.html',
  'counselling-kitchener.html',
  'contact.html',
  'anxiety-therapy-ottawa.html',
  'anxiety-therapy-oshawa.html',
  'students/student-mental-health-ottawa.html',
  'students/student-mental-health-waterloo.html',
  'students/student-mental-health-london.html',
  'students/student-mental-health-kingston.html',
  'students/university-anxiety.html',
  'students/student-mental-health-hamilton.html'
];

let filesFixed = 0;
let filesSkipped = 0;
let errors = [];

console.log('🔧 Starting Schema Type Fix...\n');

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${file}`);
      filesSkipped++;
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the wrong schema
    if (!content.includes('"@type": "Psychologist"')) {
      console.log(`✓ Already correct: ${file}`);
      filesSkipped++;
      return;
    }

    // Replace the incorrect schema
    // Pattern 1: Simple provider with Psychologist type
    const pattern1 = /"provider":\s*\{\s*"@type":\s*"Psychologist",\s*"name":\s*"Jesse Cynamon,\s*RP",?\s*"identifier":\s*"CRPO\s*#10979"\s*\}/g;
    
    if (pattern1.test(content)) {
      content = content.replace(pattern1, correctSchema);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      filesFixed++;
      return;
    }

    // Pattern 2: Provider with additional fields (jobTitle, etc.)
    const pattern2 = /"provider":\s*\{\s*"@type":\s*"Psychologist"[^}]+\}/g;
    
    if (pattern2.test(content)) {
      content = content.replace(pattern2, correctSchema);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      filesFixed++;
      return;
    }

    console.log(`⚠️  Pattern not matched: ${file} (needs manual review)`);
    errors.push(file);
    
  } catch (error) {
    console.log(`❌ Error processing ${file}: ${error.message}`);
    errors.push(file);
  }
});

console.log('\n📊 Summary:');
console.log(`✅ Files fixed: ${filesFixed}`);
console.log(`⚠️  Files skipped: ${filesSkipped}`);
console.log(`❌ Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\n⚠️  Files needing manual review:');
  errors.forEach(file => console.log(`   - ${file}`));
}

console.log('\n✨ Schema type fix complete!');

