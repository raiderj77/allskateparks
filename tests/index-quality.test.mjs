import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the homepage and trust pages may be indexed', () => {
  const layout = read('src/app/layout.tsx');
  assert.match(layout, /robots:\s*{[\s\S]*?index:\s*true,[\s\S]*?googleBot:\s*{\s*index:\s*true/);
});

test('thin state and listing routes remain noindex,follow', () => {
  for (const path of ['src/app/[state]/page.tsx', 'src/app/[state]/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    assert.match(source, /googleBot:\s*{\s*index:\s*false,\s*follow:\s*true/);
  }
});

test('directory-only browse hubs remain noindex when present', () => {
  for (const path of ['src/app/browse/page.tsx', 'src/app/browse-states/page.tsx']) {
    const url = new URL(`../${path}`, import.meta.url);
    if (existsSync(url)) {
      assert.match(read(path), /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    }
  }
});

test('the sitemap contains only an explicit allowlist', () => {
  const sitemap = read('src/app/sitemap.ts');
  assert.match(sitemap, /INDEXABLE_PATHS/);
  assert.doesNotMatch(sitemap, /data\/locations|locations\.map|statePages|locationPages|parkPages/);
  assert.match(sitemap, /'\/about'/);
  assert.match(sitemap, /'\/contact'/);
});

test('Googlebot can crawl pages to observe route-level noindex rules', () => {
  const robots = read('public/robots.txt');
  assert.match(robots, /User-agent:\s*Googlebot[\s\S]*?Allow:\s*\//i);
});

test('imported records are not presented as live-verified park profiles', () => {
  const home = read('src/app/page.tsx');
  const state = read('src/app/[state]/page.tsx');
  const detail = read('src/app/[state]/[slug]/page.tsx');
  const llms = read('public/llms.txt');

  assert.match(home, /imported location records, not live-verified park profiles/i);
  assert.match(home, /0[\s\S]*Live-verified profiles/);
  assert.match(state, /Not live-verified/);
  assert.match(detail, /original object ID, extraction date, and per-field provenance are not retained/i);
  assert.doesNotMatch(detail, /SportsActivityLocation/);
  assert.match(llms, /Bulk imported pages are not monetization-ready/);
});

test('unsupported free, public, safety, and coverage claims stay retired', () => {
  const home = read('src/app/page.tsx');
  const about = read('src/app/about/page.tsx');
  const contact = read('src/app/contact/page.tsx');
  const detail = read('src/app/[state]/[slug]/page.tsx');

  for (const source of [home, about]) {
    assert.doesNotMatch(source, /All 50 States|100%[\s\S]*Free Access|All free|over 3,500 public|6 million Americans/i);
    assert.doesNotMatch(source, /Most public skate ?parks (?:are|require)/i);
  }
  assert.doesNotMatch(detail, /Free \/ Public|Public Skatepark|Free public access/);
  assert.doesNotMatch(contact, /respond.+24-48 hours/i);
});

test('source limits, attribution, and accessible navigation are visible', () => {
  const layout = read('src/app/layout.tsx');
  const home = read('src/app/page.tsx');
  const about = read('src/app/about/page.tsx');
  const css = read('src/app/globals.css');

  assert.match(home, /OpenStreetMap object ID, extraction date, or per-field provenance/i);
  assert.match(home, /openstreetmap\.org\/copyright/);
  assert.match(about, /© OpenStreetMap contributors/);
  assert.match(layout, /href="\/#browse-regions"/);
  assert.match(layout, /Skip to main content/);
  assert.match(css, /:focus-visible/);
  assert.doesNotMatch(layout, /href="\/browse-states"/);
});
