import type { Metadata } from 'next';
import Script from 'next/script';
import { headers } from 'next/headers';
import { Archivo_Black, Barlow } from 'next/font/google';
import './globals.css';

const archivoBlack = Archivo_Black({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: '400' });
const barlow = Barlow({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400','500','600','700'] });

export const metadata: Metadata = {
  title: { template: '%s | All Skate Parks', default: 'All Skate Parks — Find Skateparks Across America' },
  description: 'Find skateparks near you. The complete directory of public skate parks across all 50 states with amenities, surfaces, and directions.',
  keywords: 'skatepark, skate park near me, public skatepark, skateboarding, bowl, street skating',
  metadataBase: new URL('https://allskateparks.com'),
  alternates: { canonical: 'https://allskateparks.com' },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  verification: { google: 'UMcPqSXvA9j38lmCLm0RSNAV_4EcqQI6YJQnbN0KgG0' },
};

const toolSites = [
  { name: 'Fiber Tools', href: 'https://fibertools.app' }, { name: 'Mind Check Tools', href: 'https://mindchecktools.com' },
  { name: 'Flip My Case', href: 'https://flipmycase.com' }, { name: 'Creator Revenue Calculator', href: 'https://creatorrevenuecalculator.com' },
  { name: 'Contract Extract', href: 'https://contractextract.com' }, { name: 'Medical Bill Reader', href: 'https://medicalbillreader.com' },
  { name: 'Tax Break Tools', href: 'https://taxbreaktools.com' }, { name: '524 Tracker', href: 'https://524tracker.com' },
];
const directorySites = [
  { name: 'Public Boat Ramps', href: 'https://publicboatramps.com' }, { name: 'Find Swim Spots', href: 'https://findswimspots.com' },
  { name: 'Craft Distillery Finder', href: 'https://craftdistilleryfinder.com' }, { name: 'Drive-In Tonight', href: 'https://driveintonight.com' },
  { name: 'Rockhounding Finder', href: 'https://rockhoundingfinder.com' }, { name: 'Nearby Escape Rooms', href: 'https://nearbyescaperooms.com' },
  { name: 'All Skating Rinks', href: 'https://allskatingrinks.com' }, { name: 'Soak USA', href: 'https://soakusa.net' },
];

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const gpcHeader = headersList.get('sec-gpc') === '1'
  return (
    <html lang="en" className={`${archivoBlack.variable} ${barlow.variable}`}>
      <head>
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="consent-mode" strategy="beforeInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',wait_for_update:500});`}</Script>
        {!gpcHeader && (
          <>
            <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932" strategy="afterInteractive" />
            <Script id="microsoft-clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","vsqobt7va0");`}</Script>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-714LJNFZHW" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-714LJNFZHW');`}
            </Script>
          </>
        )}
        <Script id="gpc-client-check" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(){var g=typeof navigator!=='undefined'&&!!navigator.globalPrivacyControl;var c=document.cookie.indexOf('empire_gpc=1')!==-1;if(g||c){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','update',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied'});}})();`
        }} />
      </head>
      <body>
        <header style={{ background: 'var(--asphalt)', borderBottom: '3px solid var(--yellow)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>🛹</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.2rem', color: 'var(--yellow)', letterSpacing: '0.02em' }}>ALL SKATE PARKS</span>
            </a>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: 'var(--mid-gray)', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Home</a>
              <a href="/browse-states" style={{ color: 'var(--mid-gray)', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Browse</a>
              <a href="/about" style={{ color: 'var(--mid-gray)', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>About</a>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>

        <footer style={{ background: 'var(--asphalt)', borderTop: '3px solid var(--asphalt-lt)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--yellow)', fontWeight: 400, fontSize: '1.1rem', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>🛹 ALL SKATE PARKS</p>
                <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.7 }}>The complete directory of public skateparks across the United States. Find bowls, street courses, and parks near you.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--yellow)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Directory Sites</h4>
                <ul style={{ listStyle: 'none' }}>
                  {directorySites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: '#666', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--yellow)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Tools</h4>
                <ul style={{ listStyle: 'none' }}>
                  {toolSites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: '#666', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: '#444', fontSize: '0.85rem', fontFamily: 'var(--font-body)' }}>© 2026 All Skate Parks. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Contact', '/contact'], ['About', '/about']].map(([l, h]) => (
                  <a key={h} href={h} style={{ color: '#444', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
