import locations from '@/data/locations.json';

export const dynamic = 'force-static';

const BRAND_DARK = '#1a1a2e';
const BRAND_ACCENT = '#e94560';

export default function Home() {
  const featuredParks = locations.slice(0, 6);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: BRAND_DARK, color: '#ffffff', padding: '4rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>Find Skate Parks Near You</h1>
          <p style={{ fontSize: '1.2rem', margin: 0, lineHeight: '1.6' }}>Discover the best skateboarding parks across the USA. Street courses, bowls, rails, and more.</p>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem 0', color: BRAND_DARK, textAlign: 'center' }}>Featured Parks</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {featuredParks.map((park) => (
            <a
              key={park.slug}
              href={`/${park.stateSlug}/${park.slug}`}
              style={{
                padding: '1.5rem',
                border: `2px solid ${BRAND_ACCENT}`,
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s',
                backgroundColor: '#ffffff',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', color: BRAND_DARK, fontSize: '1.3rem' }}>{park.name}</h3>
              <p style={{ margin: '0 0 0.5rem 0', color: '#666666', fontSize: '0.95rem' }}>{park.city}, {park.state}</p>
              <p style={{ margin: '0 0 1rem 0', color: '#555555', fontSize: '0.9rem', lineHeight: '1.5' }}>{park.description.substring(0, 100)}...</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {park.amenities.slice(0, 3).map((amenity) => (
                  <span
                    key={amenity}
                    style={{
                      backgroundColor: '#f0f0f0',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
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
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', lineHeight: '1.8', color: '#333333' }}>
        <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem 0', color: BRAND_DARK }}>About Skate Parks</h2>

        <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
          Skateboarding parks have become vital spaces for skaters of all ages and skill levels across America. Whether you're a beginner learning your first kickflip or a seasoned professional perfecting technical tricks, finding the right skate park is essential to developing your skills and connecting with the skating community.
        </p>

        <h3 style={{ fontSize: '1.2rem', color: BRAND_DARK, marginTop: '1.5rem' }}>History and Culture of Skateboarding Parks</h3>
        <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
          Skateboarding parks emerged in the 1970s when California experienced a major drought, leaving empty swimming pools that skaters discovered could be transformed into skating venues. These "pool skating" spots evolved into purpose-built parks with wooden ramps and concrete bowls. Today, skate parks represent more than just facilities—they're cultural hubs where skaters gather to practice, compete, and build community. Modern parks range from small neighborhood spots to massive facilities hosting professional competitions.
        </p>

        <h3 style={{ fontSize: '1.2rem', color: BRAND_DARK, marginTop: '1.5rem' }}>Types of Skate Parks</h3>
        <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
          Different skate parks cater to different styles of skating. <strong>Street parks</strong> feature stairs, rails, ledges, and flat ground obstacles designed to mimic urban environments. <strong>Bowl parks</strong> offer concrete bowls and pools for carving and aerial tricks. <strong>Park-style</strong> facilities combine multiple features including ramps, spines, and hips. <strong>Flow parks</strong> provide smooth, interconnected terrain that encourages fluid, continuous movement. Understanding which type of park suits your skating style will help you make the most of your sessions.
        </p>

        <h3 style={{ fontSize: '1.2rem', color: BRAND_DARK, marginTop: '1.5rem' }}>How to Use This Directory</h3>
        <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
          Our All Skate Parks directory makes it easy to find skateboarding facilities near you. Browse parks by state, check amenities and features, and learn about operating hours and rules. Each park listing includes location information, available features, and community reviews. Whether you're traveling or exploring new local spots, use our directory to discover your next favorite place to skate.
        </p>

        <h3 style={{ fontSize: '1.2rem', color: BRAND_DARK, marginTop: '1.5rem' }}>Safety Tips for Skaters</h3>
        <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
          Safety should always be your first priority when skating. Always wear appropriate protective gear including a helmet, wrist guards, elbow pads, and knee pads. Start with appropriate difficulty levels and progress gradually. Respect park rules and the safety of other skaters. Check conditions before skating, especially after rain or bad weather. Stretch before sessions to prevent injuries, and know your limits. If you're new to a park, spend time observing before attempting advanced tricks. Remember that even professional skaters experience falls—proper protection makes all the difference.
        </p>

        <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem 0', color: BRAND_DARK }}>Frequently Asked Questions</h2>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: BRAND_DARK, margin: '0 0 0.5rem 0' }}>Are all skate parks free to use?</h4>
          <p style={{ fontSize: '1rem', margin: 0 }}>Many public skate parks are free to use, though some private facilities or premium parks may charge admission fees. Check individual park listings for specific details about admission costs.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: BRAND_DARK, margin: '0 0 0.5rem 0' }}>What protective gear do I need?</h4>
          <p style={{ fontSize: '1rem', margin: 0 }}>At minimum, wear a helmet, wrist guards, elbow pads, and knee pads. These protect against the most common skating injuries. Many parks require helmets for entry.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: BRAND_DARK, margin: '0 0 0.5rem 0' }}>Can beginners use skate parks?</h4>
          <p style={{ fontSize: '1rem', margin: 0 }}>Absolutely! Skate parks welcome skaters of all levels. Most parks have areas suitable for beginners, and the community is generally very supportive and encouraging to new skaters.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: BRAND_DARK, margin: '0 0 0.5rem 0' }}>What are the typical park hours?</h4>
          <p style={{ fontSize: '1rem', margin: 0 }}>Hours vary by location. Most public parks are open sunrise to sunset, while some have extended evening hours with lighting. Check individual park listings for specific hours.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: BRAND_DARK, margin: '0 0 0.5rem 0' }}>How do I find parks near me?</h4>
          <p style={{ fontSize: '1rem', margin: 0 }}>Use our directory to browse by state, or search for parks in your city. Each listing includes the exact location, features, and contact information to help you find the perfect spot.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "All Skate Parks",
          "url": "https://allskateparks.com",
          "description": "Discover skateboarding parks across the USA. Find public and private skate parks, bowls, street courses, and more in your area."
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "All Skate Parks",
          "url": "https://allskateparks.com",
          "logo": "https://allskateparks.com/logo.png",
          "description": "Your guide to skateboarding parks across America",
          "sameAs": ["https://www.facebook.com/allskateparks", "https://www.instagram.com/allskateparks"]
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are all skate parks free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many public skate parks are free to use, though some private facilities or premium parks may charge admission fees. Check individual park listings for specific details about admission costs."
              }
            },
            {
              "@type": "Question",
              "name": "What protective gear do I need?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At minimum, wear a helmet, wrist guards, elbow pads, and knee pads. These protect against the most common skating injuries. Many parks require helmets for entry."
              }
            },
            {
              "@type": "Question",
              "name": "Can beginners use skate parks?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Skate parks welcome skaters of all levels. Most parks have areas suitable for beginners, and the community is generally very supportive and encouraging to new skaters."
              }
            },
            {
              "@type": "Question",
              "name": "What are the typical park hours?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hours vary by location. Most public parks are open sunrise to sunset, while some have extended evening hours with lighting. Check individual park listings for specific hours."
              }
            },
            {
              "@type": "Question",
              "name": "How do I find parks near me?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use our directory to browse by state, or search for parks in your city. Each listing includes the exact location, features, and contact information to help you find the perfect spot."
              }
            }
          ]
        })
      }} />
    </div>
  );
}
