#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dataPath = resolve(root, 'nextstep-therapy-astro', 'data', 'canonicals.json');
const outputPath = resolve(root, 'nextstep-therapy-astro', 'public', 'sitemap.xml');

const canonicals = JSON.parse(readFileSync(dataPath, 'utf8'));
const activeUrls = canonicals.filter((entry) => entry && entry.noindex === false);

const now = new Date('2025-01-01T00:00:00.000Z').toISOString();

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  activeUrls
    .map((entry) => {
      const loc = entry.url.replace(/\/$/, '/');
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`;
    })
    .join('\n') +
  '\n</urlset>\n';

writeFileSync(outputPath, xml, 'utf8');
console.log(`Generated sitemap with ${activeUrls.length} URLs at ${outputPath}`);
