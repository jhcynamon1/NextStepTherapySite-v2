#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const canonicalsPath = resolve(new URL('..', import.meta.url).pathname, 'nextstep-therapy-astro', 'data', 'canonicals.json');
const canonicalEntries = JSON.parse(readFileSync(canonicalsPath, 'utf8'));

const productionBase = 'https://nextsteptherapy.ca';
const siteBase = process.env.SITE_BASE || productionBase;

const redirects = [
  { from: 'https://nextsteptherapy.ca/services.html', to: 'https://nextsteptherapy.ca/services' },
  { from: 'https://nextsteptherapy.ca/contact.html', to: 'https://nextsteptherapy.ca/contact' },
  { from: 'https://nextsteptherapy.ca/university-exam-anxiety.html', to: 'https://nextsteptherapy.ca/students/university-exam-anxiety' },
  { from: 'https://nextsteptherapy.ca/university-anxiety.html', to: 'https://nextsteptherapy.ca/students/university-anxiety' },
  { from: 'https://nextsteptherapy.ca/student-mental-health.html', to: 'https://nextsteptherapy.ca/students/student-mental-health' },
  { from: 'https://nextsteptherapy.ca/university-depression.html', to: 'https://nextsteptherapy.ca/students/university-depression' },
  { from: 'https://nextsteptherapy.ca/students-with-anxiety.html', to: 'https://nextsteptherapy.ca/students/anxiety-support' },
  { from: 'https://nextsteptherapy.ca/college-anxiety.html', to: 'https://nextsteptherapy.ca/students/college-anxiety' },
  { from: 'https://nextsteptherapy.ca/college-stress.html', to: 'https://nextsteptherapy.ca/students/college-stress' },
  { from: 'https://nextsteptherapy.ca/college-student-counseling.html', to: 'https://nextsteptherapy.ca/students/college-counselling' },
  { from: 'https://nextsteptherapy.ca/study-anxiety.html', to: 'https://nextsteptherapy.ca/students/study-anxiety' },
  { from: 'https://nextsteptherapy.ca/academic-stress-university.html', to: 'https://nextsteptherapy.ca/students/academic-stress' },
  { from: 'https://nextsteptherapy.ca/first-year-university-anxiety.html', to: 'https://nextsteptherapy.ca/students/first-year-anxiety' },
  { from: 'https://nextsteptherapy.ca/failing-university-anxiety.html', to: 'https://nextsteptherapy.ca/students/failing-university-anxiety' },
  { from: 'https://nextsteptherapy.ca/university-counseling.html', to: 'https://nextsteptherapy.ca/students/university-counselling' },
  { from: 'https://nextsteptherapy.ca/university-student-struggling.html', to: 'https://nextsteptherapy.ca/students/university-student-struggling' },
  { from: 'https://nextsteptherapy.ca/university-student-therapy.html', to: 'https://nextsteptherapy.ca/students/university-therapy' },
  { from: 'https://nextsteptherapy.ca/child-anxious-about-university.html', to: 'https://nextsteptherapy.ca/students/child-anxiety' },
  { from: 'https://nextsteptherapy.ca/help-university-student-depression.html', to: 'https://nextsteptherapy.ca/students/student-depression-help' },
  { from: 'https://nextsteptherapy.ca/social-anxiety-university.html', to: 'https://nextsteptherapy.ca/students/social-anxiety' },
  { from: 'https://nextsteptherapy.ca/panic-attacks-university.html', to: 'https://nextsteptherapy.ca/students/panic-attacks' },
  { from: 'https://nextsteptherapy.ca/homesick-university.html', to: 'https://nextsteptherapy.ca/students/homesickness-support' },
  { from: 'https://nextsteptherapy.ca/same-day-virtual-therapy-ontario.html', to: 'https://nextsteptherapy.ca/virtual-therapy-ontario' },
  { from: 'https://nextsteptherapy.ca/virtual-therapy-thunder-bay.html', to: 'https://nextsteptherapy.ca/locations/thunder-bay/virtual-therapy' },
  { from: 'https://nextsteptherapy.ca/online-mental-health-support-ontario.html', to: 'https://nextsteptherapy.ca/virtual-therapy/mental-health-support' },
  { from: 'https://nextsteptherapy.ca/mental-health-northern-ontario.html', to: 'https://nextsteptherapy.ca/locations/northern-ontario/mental-health-support' },
  { from: 'https://nextsteptherapy.ca/therapy-cost-without-insurance.html', to: 'https://nextsteptherapy.ca/resources/therapy-cost-without-insurance' },
  { from: 'https://nextsteptherapy.ca/therapy-covered-insurance-ontario.html', to: 'https://nextsteptherapy.ca/resources/therapy-covered-by-insurance' },
  { from: 'https://nextsteptherapy.ca/therapist-available-today-ontario.html', to: 'https://nextsteptherapy.ca/services/therapist-available-today' },
  { from: 'https://nextsteptherapy.ca/same-week-therapy-appointment.html', to: 'https://nextsteptherapy.ca/services/same-week-therapy' },
  { from: 'https://nextsteptherapy.ca/why-feel-anxious-all-time.html', to: 'https://nextsteptherapy.ca/resources/why-feel-anxious-all-the-time' },
  { from: 'https://nextsteptherapy.ca/cant-sleep-anxiety.html', to: 'https://nextsteptherapy.ca/resources/cant-sleep-due-to-anxiety' },
  { from: 'https://nextsteptherapy.ca/cant-stop-worrying-work.html', to: 'https://nextsteptherapy.ca/professionals/work-anxiety' },
  { from: 'https://nextsteptherapy.ca/constant-stress-from-job.html', to: 'https://nextsteptherapy.ca/professionals/constant-work-stress' },
  { from: 'https://nextsteptherapy.ca/sunday-night-anxiety.html', to: 'https://nextsteptherapy.ca/professionals/sunday-night-anxiety' },
  { from: 'https://nextsteptherapy.ca/panic-attacks-driving-ontario.html', to: 'https://nextsteptherapy.ca/resources/panic-attacks-driving' },
  { from: 'https://nextsteptherapy.ca/mental-health-ontario-professionals.html', to: 'https://nextsteptherapy.ca/professionals/mental-health-ontario' },
  { from: 'https://nextsteptherapy.ca/virtual-therapy-busy-parents.html', to: 'https://nextsteptherapy.ca/virtual-therapy/busy-parents' },
  { from: 'https://nextsteptherapy.ca/performance-anxiety.html', to: 'https://nextsteptherapy.ca/professionals/performance-anxiety' },
  { from: 'https://nextsteptherapy.ca/work-anxiety-and-stress.html', to: 'https://nextsteptherapy.ca/professionals/workplace-stress' },
  { from: 'https://nextsteptherapy.ca/workplace-stress-burnout-therapy.html', to: 'https://nextsteptherapy.ca/professionals/workplace-burnout-therapy' },
  { from: 'https://nextsteptherapy.ca/teen-eating-disorder-help.html', to: 'https://nextsteptherapy.ca/students/teen-eating-disorder-help' },
  { from: 'https://nextsteptherapy.ca/anger-management-kitchener.html', to: 'https://nextsteptherapy.ca/locations/kitchener/anger-management' },
  { from: 'https://nextsteptherapy.ca/therapist-toronto-depression.html', to: 'https://nextsteptherapy.ca/locations/toronto/depression-therapy' },
  { from: 'https://nextsteptherapy.ca/workplace-stress-counselling-hamilton.html', to: 'https://nextsteptherapy.ca/locations/hamilton/workplace-stress' },
  { from: 'https://nextsteptherapy.ca/mens-mental-health-therapy-london-ontario.html', to: 'https://nextsteptherapy.ca/locations/london/mens-mental-health' },
  { from: 'https://nextsteptherapy.ca/depression-therapy-ottawa.html', to: 'https://nextsteptherapy.ca/locations/ottawa/depression-therapy' },
  { from: 'https://nextsteptherapy.ca/acceptance-commitment-therapy-act.html', to: 'https://nextsteptherapy.ca/services/acceptance-commitment-therapy' },
  { from: 'https://nextsteptherapy.ca/anxiety-counseling-ontario.html', to: 'https://nextsteptherapy.ca/anxiety-therapy-ontario' },
  { from: 'https://nextsteptherapy.ca/toronto-depression-therapy.html', to: 'https://nextsteptherapy.ca/locations/toronto/depression-therapy' },
  { from: 'https://nextsteptherapy.ca/online-therapy-depression.html', to: 'https://nextsteptherapy.ca/services/online-therapy-depression' },
  { from: 'https://nextsteptherapy.ca/therapy-goals-depression.html', to: 'https://nextsteptherapy.ca/resources/therapy-goals-depression' },
  { from: 'https://nextsteptherapy.ca/psychotherapy-counselling-depression.html', to: 'https://nextsteptherapy.ca/depression-therapy-ontario' },
  { from: 'https://nextsteptherapy.ca/virtual-therapy-ontario-qa-comprehensive.html', to: 'https://nextsteptherapy.ca/virtual-therapy-ontario' },
  { from: 'https://nextsteptherapy.ca/life-transitions-qa-comprehensive.html', to: 'https://nextsteptherapy.ca/life-transitions' },
  { from: 'https://nextsteptherapy.ca/therapist-mississauga-qa-comprehensive.html', to: 'https://nextsteptherapy.ca/therapist-mississauga' },
  { from: 'https://nextsteptherapy.ca/online-therapy-burlington.html', to: 'https://nextsteptherapy.ca/virtual-therapy-burlington' },
  { from: 'https://nextsteptherapy.ca/burlington-online-therapy.html', to: 'https://nextsteptherapy.ca/virtual-therapy-burlington' },
  { from: 'https://www.nextsteptherapy.ca/contact', to: 'https://nextsteptherapy.ca/contact' }
];

const failures = [];

function buildUrl(pathname) {
  if (pathname.startsWith('http')) return pathname;
  return new URL(pathname, siteBase).toString();
}

async function verifyCanonical(entry) {
  const targetUrl = buildUrl(entry.path || entry.url);
  const res = await fetch(targetUrl, { redirect: 'manual' });
  if (res.status !== 200) {
    failures.push({ type: 'status', url: targetUrl, message: `Expected 200, received ${res.status}` });
    return;
  }
  const body = await res.text();
  const match = body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  if (!match) {
    failures.push({ type: 'canonical', url: targetUrl, message: 'Missing canonical tag' });
    return;
  }
  const canonicalHref = match[1];
  const expected = entry.url && siteBase === productionBase ? entry.url : targetUrl;
  if (canonicalHref !== expected) {
    failures.push({ type: 'canonical', url: targetUrl, message: `Canonical mismatch (${canonicalHref})` });
  }
}

async function verifyRedirect(entry) {
  const res = await fetch(entry.from, { redirect: 'manual' });
  if (res.status !== 301) {
    failures.push({ type: 'redirect', url: entry.from, message: `Expected 301, received ${res.status}` });
    return;
  }
  const location = res.headers.get('location');
  if (!location || location !== entry.to) {
    failures.push({ type: 'redirect', url: entry.from, message: `Expected location ${entry.to}, received ${location}` });
  }
}

const canonicalChecks = canonicalEntries.filter((entry) => entry.noindex === false).map(verifyCanonical);
await Promise.all(canonicalChecks);

if (siteBase === productionBase) {
  for (const entry of redirects) {
    await verifyRedirect(entry);
  }
} else {
  console.log(`Skipping redirect checks because SITE_BASE is ${siteBase}`);
}

if (failures.length) {
  console.error('Canonical/redirect audit failed:');
  for (const failure of failures) {
    console.error(`- [${failure.type}] ${failure.url}: ${failure.message}`);
  }
  process.exit(1);
}

console.log(`Canonical audit passed for ${canonicalChecks.length} canonical URLs${siteBase === productionBase ? ' and all redirects' : ''}.`);
