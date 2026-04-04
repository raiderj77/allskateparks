import locations from '@/data/locations.json';

export const revalidate = 86400;

const BRAND_DARK = '#1a1a2e';
const BRAND_ACCENT = '#e94560';

function getStateDisplayName(stateSlug: string): string {
  const stateMap: Record<string, string> = {
    'alabama': 'Alabama',
    'alaska': 'Alaska',
    'arizona': 'Arizona',
    'arkansas': 'Arkansas',
    'california': 'California',
    'colorado': 'Colorado',
    'connecticut': 'Connecticut',
    'delaware': 'Delaware',
    'florida': 'Florida',
    'georgia': 'Georgia',
    'hawaii': 'Hawaii',
    'idaho': 'Idaho',
    'illinois': 'Illinois',
    'indiana': 'Indiana',
    'iowa': 'Iowa',
    'kansas': 'Kansas',
    'kentucky': 'Kentucky',
    'louisiana': 'Louisiana',
    'maine': 'Maine',
    'maryland': 'Maryland',
    'massachusetts': 'Massachusetts',
    'michigan': 'Michigan',
    'minnesota': 'Minnesota',
    'mississippi': 'Mississippi',
    'missouri': 'Missouri',
    'montana': 'Montana',
    'nebraska': 'Nebraska',
    'nevada': 'Nevada',
    'new-hampshire': 'New Hampshire',
    'new-jersey': 'New Jersey',
    'new-mexico': 'New Mexico',
    'new-york': 'New York',
    'north-carolina': 'North Carolina',
    'north-dakota': 'North Dakota',
    'ohio': 'Ohio',
    'oklahoma': 'Oklahoma',
    'oregon': 'Oregon',
    'pennsylvania': 'Pennsylvania',
    'rhode-island': 'Rhode Island',
    'south-carolina': 'South Carolina',
    'south-dakota': 'South Dakota',
    'tennessee': 'Tennessee',
    'texas': 'Texas',
    'utah': 'Utah',
    'vermont': 'Vermont',
    'virginia': 'Virginia',
    'washington': 'Washington',
    'west-virginia': 'West Virginia',
    'wisconsin': 'Wisconsin',
    'wyoming': 'Wyoming',
  };
  return stateMap[stateSlug] || stateSlug;
}

interface PageProps {
  params: Promise<{ state: string; slug: string }>;
}

export function generateStaticParams() {
  return locations.map((location) => ({
    state: location.stateSlug,
    slug: location.slug,
  }));
}

export default async function ParkDetailPage({ params }: PageProps) {
  const { state, slug } = await params;
  const park = locations.find((loc) => loc.stateSlug === state && loc.slug === slug);
  const stateDisplayName = getStateDisplayName(state);

  if (!park) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '60vh', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ color: BRAND_DARK }}>Skate Park Not Found</h1>
          <p><a href={`/${state}`} style={{ color: BRAND_ACCENT }}>Back to {stateDisplayName} parks</a></p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: BRAND_DARK, color: '#ffffff', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
            <a href="/" style={{ color: BRAND_ACCENT, textDecoration: 'none' }}>Home</a>
            {' > '}
            <a href={`/${state}`} style={{ color: BRAND_ACCENT, textDecoration: 'none' }}>{stateDisplayName}</a>
            {' > '}
            <span style={{ color: '#ffffff' }}>{park.name}</span>
          </nav>
          <h1 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>{park.name}</h1>
          <p style={{ margin: '0.5rem 0', color: '#cccccc', fontSize: '1.1rem' }}>{park.city}, {park.state}</p>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: BRAND_DARK, marginTop: 0 }}>About This Park</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333333', marginBottom: '1.5rem' }}>
              {park.description}
            </p>

            <h3 style={{ fontSize: '1.2rem', color: BRAND_DARK }}>Amenities & Features</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {park.amenities.map((amenity) => (
                <div
                  key={amenity}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: '#f9f9f9',
                    border: `1px solid ${BRAND_ACCENT}`,
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: BRAND_ACCENT, fontWeight: 'bold' }}>✓</span>
                  <span style={{ fontSize: '0.95rem' }}>{amenity}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.2rem', color: BRAND_DARK }}>Location Information</h3>
            <div style={{ backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
              <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>
                <strong>City:</strong> {park.city}
              </p>
              <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>
                <strong>State:</strong> {park.state}
              </p>
              <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>
                <strong>Coordinates:</strong> {park.lat.toFixed(4)}, {park.lng.toFixed(4)}
              </p>
              <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>
                <strong>Map:</strong>{' '}
                <a
                  href={`https://maps.google.com/?q=${park.lat},${park.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: BRAND_ACCENT, textDecoration: 'none' }}
                >
                  View on Google Maps
                </a>
              </p>
            </div>

            <h3 style={{ fontSize: '1.2rem', color: BRAND_DARK }}>Tips for Your Visit</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#333333', paddingLeft: '1.5rem' }}>
              <li>Always wear appropriate protective gear including a helmet, wrist guards, elbow pads, and knee pads.</li>
              <li>Respect the park rules and show courtesy to other skaters of all skill levels.</li>
              <li>Start with appropriate difficulty levels and progress gradually.</li>
              <li>Check weather conditions before visiting, especially after rain or bad weather.</li>
              <li>Arrive early during peak hours to get the best experience.</li>
              <li>Bring water and stay hydrated during your session.</li>
              <li>Ask experienced skaters for advice and tips on park features.</li>
            </ul>
          </div>

          <div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', border: `2px solid ${BRAND_ACCENT}` }}>
              <h3 style={{ marginTop: 0, color: BRAND_DARK }}>Quick Info</h3>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                <p style={{ margin: '0.75rem 0' }}>
                  <strong style={{ color: BRAND_DARK }}>Name:</strong>
                  <br />
                  {park.name}
                </p>
                <p style={{ margin: '0.75rem 0' }}>
                  <strong style={{ color: BRAND_DARK }}>Location:</strong>
                  <br />
                  {park.city}, {park.state}
                </p>
                <p style={{ margin: '0.75rem 0' }}>
                  <strong style={{ color: BRAND_DARK }}>Featured Features:</strong>
                  <br />
                  {park.amenities.slice(0, 3).join(', ')}
                </p>
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: `1px solid #e0e0e0` }}>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#666666', textAlign: 'center' }}>
                    Visit{' '}
                    <a href={`/${state}`} style={{ color: BRAND_ACCENT }}>
                      all {stateDisplayName} parks
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": park.name,
          "description": park.description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": park.city,
            "addressRegion": park.state,
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": park.lat,
            "longitude": park.lng
          }
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://allskateparks.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": stateDisplayName,
              "item": `https://allskateparks.com/${state}`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": park.name,
              "item": `https://allskateparks.com/${state}/${park.slug}`
            }
          ]
        })
      }} />
    </div>
  );
}
