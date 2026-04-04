import locations from '@/data/locations.json';

export const revalidate = 86400;

const BRAND_DARK = '#1a1a2e';
const BRAND_ACCENT = '#e94560';

const allStates = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware',
  'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky',
  'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi',
  'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey', 'new-mexico',
  'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania',
  'rhode-island', 'south-carolina', 'south-dakota', 'tennessee', 'texas', 'utah', 'vermont',
  'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming'
];

export function generateStaticParams() {
  return allStates.map((state) => ({
    state,
  }));
}

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
  params: Promise<{ state: string }>;
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params;
  const stateLocations = locations.filter((loc) => loc.stateSlug === state);
  const stateDisplayName = getStateDisplayName(state);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: BRAND_DARK, color: '#ffffff', padding: '2rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
            <a href="/" style={{ color: BRAND_ACCENT, textDecoration: 'none' }}>Home</a>
            {' > '}
            <span style={{ color: '#ffffff' }}>{stateDisplayName}</span>
          </nav>
          <h1 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>Skate Parks in {stateDisplayName}</h1>
          <p style={{ margin: 0, color: '#cccccc' }}>
            {stateLocations.length > 0 ? `${stateLocations.length} skate park${stateLocations.length !== 1 ? 's' : ''} found` : 'No skate parks listed yet'}
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {stateLocations.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {stateLocations.map((park) => (
              <a
                key={park.slug}
                href={`/${state}/${park.slug}`}
                style={{
                  padding: '1.5rem',
                  border: `2px solid ${BRAND_ACCENT}`,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  backgroundColor: '#ffffff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(233, 69, 96, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 style={{ margin: '0 0 0.5rem 0', color: BRAND_DARK, fontSize: '1.2rem' }}>{park.name}</h3>
                <p style={{ margin: '0 0 0.5rem 0', color: '#666666', fontSize: '0.9rem' }}>{park.city}</p>
                <p style={{ margin: '0 0 1rem 0', color: '#555555', fontSize: '0.85rem', lineHeight: '1.5' }}>{park.description.substring(0, 90)}...</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {park.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      style={{
                        backgroundColor: '#f0f0f0',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        color: BRAND_DARK,
                      }}
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#666666' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>No skate parks listed in {stateDisplayName} yet.</p>
            <p>Check back soon or explore other states.</p>
          </div>
        )}
      </section>

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
            }
          ]
        })
      }} />
    </div>
  );
}
