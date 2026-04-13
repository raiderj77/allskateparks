/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

function getMapboxImage(lat: number, lng: number, width = 800, height = 500): string {
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/${lng},${lat},16,0/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

function getSkateParkPreview(d: { name: string; state: string; city: string; amenities: string[]; description: string }): string {
  const amenityCount = d.amenities.length;
  const location = d.city ? `${d.city}, ${d.state}` : d.state;
  if (amenityCount >= 2) {
    return `Skate park in ${location} with ${d.amenities.slice(0, 2).join(' and ').toLowerCase()}.`;
  }
  return `Public skate park in ${location}. Free access for skaters.`;
}

export const revalidate = 86400;

const stateList = [
  { name: 'Alabama', slug: 'alabama' }, { name: 'Alaska', slug: 'alaska' },
  { name: 'Arizona', slug: 'arizona' }, { name: 'Arkansas', slug: 'arkansas' },
  { name: 'California', slug: 'california' }, { name: 'Colorado', slug: 'colorado' },
  { name: 'Connecticut', slug: 'connecticut' }, { name: 'Delaware', slug: 'delaware' },
  { name: 'Florida', slug: 'florida' }, { name: 'Georgia', slug: 'georgia' },
  { name: 'Hawaii', slug: 'hawaii' }, { name: 'Idaho', slug: 'idaho' },
  { name: 'Illinois', slug: 'illinois' }, { name: 'Indiana', slug: 'indiana' },
  { name: 'Iowa', slug: 'iowa' }, { name: 'Kansas', slug: 'kansas' },
  { name: 'Kentucky', slug: 'kentucky' }, { name: 'Louisiana', slug: 'louisiana' },
  { name: 'Maine', slug: 'maine' }, { name: 'Maryland', slug: 'maryland' },
  { name: 'Massachusetts', slug: 'massachusetts' }, { name: 'Michigan', slug: 'michigan' },
  { name: 'Minnesota', slug: 'minnesota' }, { name: 'Mississippi', slug: 'mississippi' },
  { name: 'Missouri', slug: 'missouri' }, { name: 'Montana', slug: 'montana' },
  { name: 'Nebraska', slug: 'nebraska' }, { name: 'Nevada', slug: 'nevada' },
  { name: 'New Hampshire', slug: 'new-hampshire' }, { name: 'New Jersey', slug: 'new-jersey' },
  { name: 'New Mexico', slug: 'new-mexico' }, { name: 'New York', slug: 'new-york' },
  { name: 'North Carolina', slug: 'north-carolina' }, { name: 'North Dakota', slug: 'north-dakota' },
  { name: 'Ohio', slug: 'ohio' }, { name: 'Oklahoma', slug: 'oklahoma' },
  { name: 'Oregon', slug: 'oregon' }, { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Rhode Island', slug: 'rhode-island' }, { name: 'South Carolina', slug: 'south-carolina' },
  { name: 'South Dakota', slug: 'south-dakota' }, { name: 'Tennessee', slug: 'tennessee' },
  { name: 'Texas', slug: 'texas' }, { name: 'Utah', slug: 'utah' },
  { name: 'Vermont', slug: 'vermont' }, { name: 'Virginia', slug: 'virginia' },
  { name: 'Washington', slug: 'washington' }, { name: 'West Virginia', slug: 'west-virginia' },
  { name: 'Wisconsin', slug: 'wisconsin' }, { name: 'Wyoming', slug: 'wyoming' },
];

function getStateName(slug: string) {
  return stateList.find((s) => s.slug === slug)?.name ?? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

export function generateStaticParams() {
  return stateList.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const stateName = getStateName(state);
  return {
    title: `Skateparks in ${stateName}`,
    description: `Find public skateparks in ${stateName}. Bowls, street courses, and free parks with amenities and GPS coordinates.`,
    alternates: { canonical: `https://allskateparks.com/${state}` },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const stateName = getStateName(state);
  const spots = locations.filter((l) => l.stateSlug === state);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BreadcrumbList',
        itemListElement:[
          { '@type':'ListItem',position:1,name:'Home',item:'https://allskateparks.com'},
          { '@type':'ListItem',position:2,name:stateName,item:`https://allskateparks.com/${state}`},
        ],
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'var(--asphalt)', padding: '4rem 1.5rem 3.5rem', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: 'var(--yellow)' }} />
        <div aria-hidden style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'rgba(30,30,30,0.08)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/" style={{ color: 'var(--yellow)', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>← All States</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,4rem)', color: 'white', marginBottom: '0.75rem' }}>
            SKATEPARKS IN <span style={{ color: 'var(--yellow)' }}>{stateName.toUpperCase()}</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="chip chip-yellow">{spots.length} {spots.length===1?'Park':'Parks'} Listed</span>
            <span style={{ color: 'var(--mid-gray)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>Public &amp; free access</span>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Grid */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          {spots.length > 0 ? (
            <div className="grid-3">
              {spots.map((spot, i) => (
                <Link key={spot.slug} href={`/${state}/${spot.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <img src={getMapboxImage(spot.lat, spot.lng)} alt={spot.name} className="card-img" loading="lazy" width={800} height={500} />
                    <div className="card-body">
                      <div className="card-meta"><span>📍</span><span>{spot.city ? `${spot.city}, ` : ''}{spot.state}</span></div>
                      <h2 className="card-title">{spot.name}</h2>
                      <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>{getSkateParkPreview(spot)}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {spot.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '5rem 2rem', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛹</p>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--asphalt)', marginBottom: '0.75rem', fontSize: '2rem' }}>COMING SOON</h2>
              <p style={{ color: 'var(--gray)', fontFamily: 'var(--font-body)' }}>{"We're adding parks in "}{stateName}{" — check back soon!"}</p>
              <Link href="/" className="btn btn-yellow" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>Browse Other States</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
