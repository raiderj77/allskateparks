import type { Metadata } from 'next';
import Script from 'next/script';

const BRAND_DARK = '#1a1a2e';
const BRAND_ACCENT = '#e94560';

export const metadata: Metadata = {
  title: {
    template: '%s | All Skate Parks',
    default: 'All Skate Parks - Find Skate Parks Near You',
  },
  description: 'Discover skateboarding parks across the USA. Find public and private skate parks, bowls, street courses, and more in your area.',
  keywords: [
    'skate parks',
    'skateboarding',
    'skate ramps',
    'skate bowls',
    'skateboard parks',
    'street skating',
    'skate spots',
    'skate park directory',
  ],
  canonical: 'https://allskateparks.com',
  openGraph: {
    title: 'All Skate Parks - Find Skate Parks Near You',
    description: 'Discover skateboarding parks across the USA. Find public and private skate parks, bowls, street courses, and more in your area.',
    url: 'https://allskateparks.com',
    siteName: 'All Skate Parks',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Skate Parks',
    description: 'Find skateboarding parks near you',
  },
  other: {
    'msvalidate.01': 'C4C9B6256BDEDED169E4DE01CA953390',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', backgroundColor: '#ffffff', color: '#333333' }}>
        <header style={{ backgroundColor: BRAND_DARK, color: '#ffffff', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: BRAND_ACCENT }}>sk8</span> Parks
            </a>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem' }}>About</a>
              <a href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</a>
              <a href="/privacy" style={{ color: '#cccccc', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy</a>
              <a href="/terms" style={{ color: '#cccccc', textDecoration: 'none', fontSize: '0.9rem' }}>Terms</a>
            </div>
          </nav>
        </header>

        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>

        <footer style={{ backgroundColor: BRAND_DARK, color: '#ffffff', padding: '2rem 0', marginTop: '3rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ color: BRAND_ACCENT, marginTop: 0, fontSize: '1.1rem' }}>Tools</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://fibertools.app" style={{ color: '#ffffff', textDecoration: 'none' }}>Fiber Tools</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://mindchecktools.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Mind Check Tools</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://flipmycase.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Flip My Case</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://creatorrevenuecalculator.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Creator Revenue Calculator</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://contractextract.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Contract Extract</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://medicalbillreader.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Medical Bill Reader</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://taxbreaktools.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Tax Break Tools</a></li>
                  <li><a href="https://524tracker.com" style={{ color: '#ffffff', textDecoration: 'none' }}>524 Tracker</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: BRAND_ACCENT, marginTop: 0, fontSize: '1.1rem' }}>Directory Sites</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://publicboatramps.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Public Boat Ramps</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://findswimspots.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Find Swim Spots</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://craftdistilleryfinder.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Craft Distillery Finder</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://driveintonight.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Drive-In Tonight</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://rockhoundingfinder.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Rockhounding Finder</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://nearbyescaperooms.com" style={{ color: '#ffffff', textDecoration: 'none' }}>Nearby Escape Rooms</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="https://allskatingrinks.com" style={{ color: '#ffffff', textDecoration: 'none' }}>All Skating Rinks</a></li>
                  <li><a href="https://soakusa.net" style={{ color: '#ffffff', textDecoration: 'none' }}>Soak USA</a></li>
                </ul>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #444444', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#cccccc' }}>
              <p style={{ margin: '0.5rem 0' }}>All Skate Parks - Your Guide to Skateboarding Parks Across America</p>
              <p style={{ margin: '0.5rem 0' }}>© 2025 All Skate Parks. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
