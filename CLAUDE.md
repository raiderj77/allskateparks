# All Skate Parks — CLAUDE.md

> Source of truth for Claude Code on this project. Last updated: 2026-04-30

## Project Identity

- **Site**: All Skate Parks
- **Domain**: allskateparks.com
- **Purpose**: Location finder for skate parks across the United States
- **Type**: utility-site (ad-supported location directory)
- **Compliance Tier**: Standard

## Tech Stack

- **Framework**: Next.js
- **Deployment**: Vercel
- **Language**: TypeScript (preferred) / JavaScript
- **Styling**: Tailwind CSS (preferred) / CSS Modules
- **Package Manager**: npm

## 1. AdSense & Monetization

- **Publisher ID**: `ca-pub-7171402107622932`
- **ads.txt** at `public/ads.txt`: `google.com, pub-7171402107622932, DIRECT, f08c47fec0942fa0`
- Include OWNERDOMAIN directive per IAB ads.txt v1.1
- Ads must never exceed content volume on any page
- Reserve explicit width/height on ad containers (prevents CLS)
- Mobile: follow Better Ads Standard
- Google Consent Mode v2: configure all 6 parameters

## 2. SEO — Google Search Essentials

- Use SSR or SSG for all public pages (critical for Googlebot and Bingbot crawlability)
- Each location page must provide substantive unique value (address, hours, surface type, features, photos)
- No cloaking, doorway pages, or thin content
- Location data must be accurate and regularly updated

## 3. Core Web Vitals

Target thresholds (75th percentile):
- **LCP** ≤ 2.5 seconds
- **INP** ≤ 200 milliseconds
- **CLS** ≤ 0.1

- Use `next/image` with width/height props (prevents CLS)
- Use `next/font` (prevents font-loading shifts)
- Reserve dimensions on all ad containers
- Location maps: lazy-load below the fold

## 4. E-E-A-T Content Standards

- Attribution: "Built by an experienced web developer" — NEVER use personal name
- Maintain About page with mission and data sources
- Include Contact page accessible from every page
- Cite data sources for location information (public parks databases, user submissions, etc.)

## 5. Structured Data (JSON-LD)

Required schema types:
- Organization
- WebSite
- LocalBusiness (per location page)
- BreadcrumbList

Rules:
- All markup must match visible page content exactly
- Include dateModified on all content
- Every location page: LocalBusiness schema with name, address, geo coordinates, and openingHours if available

## 6. Mobile-First Requirements

- Location finders are primarily mobile use — optimize for mobile-first
- Touch targets: 48px minimum (especially map interactions)
- Body text: 16px minimum
- Maps must be touch-friendly and responsive
- No intrusive interstitials blocking location results

## 7. Bing-Specific Optimization

- Include `<meta name="keywords">` tag
- SSR/SSG is MANDATORY — Bingbot has very limited JS rendering
- IndexNow: trigger on deploy and on location data updates
- Crawl-delay: 10 for Bingbot in robots.txt

## 8. GEO / AI Discoverability

### llms.txt
Serve `/llms.txt` at site root. Include site description and links to major location category pages.

### robots.txt AI Crawlers
Allow: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Applebot-Extended, DuckAssistBot, Amazonbot
Block: Bytespider, Meta-ExternalAgent

### Content Structure for AI
- Location pages: lead with city/state, key features, and surface type in first paragraph
- Question-based headings: "Are there skate parks in [City]?"
- Include notable features and amenities in structured list format

## 9. Privacy & Consent

- `/privacy` — Privacy Policy (GDPR + CCPA sections required)
- `/terms` — Terms of Service
- Honor Global Privacy Control (GPC) signals
- CCPA: "Do Not Sell or Share" link on homepage
- Location data: do not collect user location without explicit permission

## 10. Accessibility (WCAG 2.1 AA)

- Alt text on all location photos
- Color contrast: 4.5:1 normal text, 3:1 large text
- Map interactions must be keyboard accessible (provide table fallback for non-keyboard map interactions)
- Skip navigation links
- `lang` attribute on `<html>` element

## 11. Security Headers

Configure in `vercel.json`:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()
```

## 12. Sitemaps & Metadata

- Generate via `app/sitemap.ts` — include all location pages with lastmod
- Submit to Google Search Console AND Bing Webmaster Tools
- Every location page: unique title, unique meta description mentioning city/state

## Cross-Site Links

Footer links to all sister sites (exclude self):
- [FiberTools](https://fibertools.app)
- [MindCheck Tools](https://mindchecktools.com)
- [FlipMyCase](https://flipmycase.com)
- [Creator Revenue Calculator](https://creatorrevenuecalculator.com)
- [ContractExtract](https://contractextract.com)
- [Medical Bill Reader](https://medicalbillreader.com)
- [All Skating Rinks](https://allskatingrinks.com)
- [Craft Distillery Finder](https://craftdistilleryfinder.com)
- [Drive-In Tonight](https://driveintonight.com)
- [Find Swim Spots](https://findswimspots.com)
- [Nearby Escape Rooms](https://nearbyescaperooms.com)
- [Public Boat Ramps](https://publicboatramps.com)
- [Rockhounding Finder](https://rockhoundingfinder.com)
- [Soak USA](https://soakusa.net)

## Deployment

- **Platform**: Vercel
- **Branch**: main
- **Build**: `npm run build`
- **Env vars**: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (if using maps), INDEXNOW_API_KEY

### Pre-Deploy Checklist
1. `npm run build` passes
2. ads.txt present and correct
3. robots.txt has AI crawler rules
4. llms.txt present and current
5. All legal pages render
6. Cross-site links working
7. Security headers configured
8. LocalBusiness schema validates on representative location pages

## Warnings — Things Claude Code Must NEVER Do

1. Never expose the site owner's personal name in code, content, comments, or metadata
2. Never modify ads.txt unless explicitly asked
3. Never remove legal pages (privacy, terms)
4. Never hardcode API keys — use environment variables
5. Never push to main without testing build
6. Never remove sister site cross-links
7. Never remove or weaken security headers
8. Never store user location data without explicit consent
9. Never remove llms.txt or AI crawler rules from robots.txt
