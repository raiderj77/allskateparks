/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

function getMapboxImage(lat: number, lng: number, width = 800, height = 500): string {
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/${lng},${lat},16,0/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'All Skate Parks - Imported Location Record Rebuild',
  description: 'Browse imported skate-park location records and learn what to verify with the current park operator before visiting.',
};

export default function Home() {
  const recordsWithCity = locations.filter((location) => location.city).length;
  const recordsWithWebsite = locations.filter((location) => location.website).length;
  const regions = Array.from(new Map(locations.filter((location) => location.stateSlug).map((location) => [location.stateSlug, location.state])).entries()).sort((a, b) => a[1].localeCompare(b[1]));
  const featured = locations.filter((location) => location.city && location.amenities.length > 1).slice(0, 6);

  return (
    <>
      <div className="notice-bar"><strong>Editorial rebuild:</strong> these are imported location records, not live-verified park profiles.</div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org', '@type':'WebSite', url:'https://allskateparks.com', name:'All Skate Parks',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org', '@type':'Organization', name:'All Skate Parks', url:'https://allskateparks.com',
        description:'A skate-park location directory undergoing source and editorial review',
      }) }} />

      <section className="home-hero">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="section-label">Skate-park location records</p>
          <h1 className="hero-title"><span>FIND A RECORD.</span><br />CHECK THE PARK.</h1>
          <p className="hero-copy">Browse {locations.length.toLocaleString()} imported names and map coordinates. Confirm the exact location, operating status, access, hours, rules, permitted equipment, and facilities with the current park operator before visiting.</p>
          <a href="#browse-regions" className="btn btn-yellow">Browse represented states</a>
        </div>
      </section>

      <section aria-label="Directory inventory" style={{ background: 'var(--white)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="container stats-grid">
          <div className="stat-item"><div className="stat-number">{locations.length.toLocaleString()}</div><div className="stat-label">Imported records</div></div>
          <div className="stat-item"><div className="stat-number">{recordsWithCity}</div><div className="stat-label">With a city field</div></div>
          <div className="stat-item"><div className="stat-number">{recordsWithWebsite}</div><div className="stat-label">With a website field</div></div>
          <div className="stat-item"><div className="stat-number">0</div><div className="stat-label">Live-verified profiles</div></div>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">Sample records</p>
          <h2 className="section-title">What the imported directory contains</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>These examples contain a city and at least one recorded feature tag. The records do not establish that a park is currently open, public, free, safe, or suitable for a particular skill level.</p>
          <div className="grid-3">
            {featured.map((location) => (
              <Link key={`${location.stateSlug}-${location.slug}`} href={`/${location.stateSlug}/${location.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <img src={getMapboxImage(location.lat, location.lng)} alt={`Map imagery near the recorded coordinates for ${location.name}`} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span aria-hidden>Map</span><span>{location.city}, {location.state}</span></div>
                    <h3 className="card-title">{location.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65 }}>Recorded tags: {location.amenities.slice(0, 3).join(', ')}. Verify them with a current source.</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}><p className="section-label">Before visiting</p><h2 className="section-title" style={{ color: 'var(--white)' }}>CHECK CURRENT PARK DETAILS</h2></div>
          <div className="grid-3">
            {[
              ['Confirm the location', 'Use the name and coordinates as a starting point. Confirm the park exists and identify the current operator.'],
              ['Read current rules', 'Check hours, closures, access, fees, age rules, required protective equipment, and whether skateboards, bikes, or scooters are allowed.'],
              ['Inspect conditions', 'Conditions can change. Follow posted signs, evaluate the surface and obstacles on arrival, and choose terrain appropriate to your own ability.'],
            ].map(([title, description]) => <article key={title} className="check-card"><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section id="browse-regions" style={{ padding: '5rem 1.5rem', scrollMarginTop: '6rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">Imported directory</p><h2 className="section-title">Browse the 47 represented states</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>State and record routes remain out of search indexing while the directory is rebuilt with traceable, current sources.</p>
          </div>
          <div className="grid-states">{regions.map(([slug, name]) => <Link key={slug} href={`/${slug}`} className="state-link">{name}</Link>)}</div>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem', background: '#f5f5f5', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <h2 className="section-title">Source and publication standard</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>The repository contains a reseed workflow that queries OpenStreetMap, but the current data file does not retain an OpenStreetMap object ID, extraction date, or per-field provenance. It also contains fields not generated by the checked-in reseed script. For that reason, this release treats every entry as an imported legacy record rather than a verified OpenStreetMap profile.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>A future indexable page must cite a current park operator, municipal page, or other primary source and state what was reviewed and when. Recorded surface, lighting, website, or fee tags must be rechecked before being presented as current.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>Open mapping attribution: <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap contributors</a>.</p>
          <p style={{ lineHeight: 1.85 }}>To report a record problem, use the <Link href="/contact">contact page</Link> and include the record URL plus a current source when possible.</p>
        </div>
      </section>
    </>
  );
}
