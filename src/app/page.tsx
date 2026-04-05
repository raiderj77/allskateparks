/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'All Skate Parks — Find Skateparks Across America',
  description: 'Discover public skateparks near you. The complete directory of skate parks across all 50 states with surfaces, amenities, and GPS coordinates.',
};

const ALL_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const IMG_KEYWORDS = ['skatepark','skateboarding+park','concrete+skatepark','skate+bowl','street+skating','skateboard+ramp'];

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://allskateparks.com',
        name:'All Skate Parks',
        potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:'https://allskateparks.com/search?q={search_term_string}'},'query-input':'required name=search_term_string'},
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'var(--asphalt)', overflow: 'hidden', padding: '7rem 1.5rem 8rem' }}>
        {/* Concrete texture lines */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.01) 80px, rgba(255,255,255,0.01) 81px)', pointerEvents: 'none' }} />
        {/* Yellow accent bar */}
        <div aria-hidden style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: 'var(--yellow)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="anim-fade-up" style={{ display: 'inline-block', color: 'var(--asphalt)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1.25rem', fontFamily: 'var(--font-body)', background: 'var(--yellow)', padding: '0.35rem 1rem', borderRadius: '2px' }}>
            🛹 Free Skatepark Directory
          </p>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: 'var(--white)', marginBottom: '0.5rem', lineHeight: 1, letterSpacing: '-0.01em' }}>
            FIND YOUR<br /><span style={{ color: 'var(--yellow)' }}>SKATEPARK</span>
          </h1>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1rem', color: 'var(--mid-gray)', marginBottom: '2.75rem', maxWidth: '440px', margin: '0 auto 2.75rem', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}>
            {locations.length}+ public skateparks across America. Bowls, street courses, and free parks — all in one place.
          </p>
          <form method="GET" action="/search" className="anim-fade-up anim-delay-3">
            <div className="search-wrap">
              <input type="text" name="q" placeholder="Search by state, city, or park name…" className="search-input" />
              <button type="submit" className="search-btn">Find Parks</button>
            </div>
          </form>
        </div>
        <svg aria-hidden viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,25 C480,50 960,0 1440,25 L1440,50 L0,50 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n:`${locations.length}+`, l:'Skate Parks' },
            { n:`${statesWithData}`, l:'States' },
            { n:'100%', l:'Free Access' },
            { n:'All', l:'Skill Levels' },
          ].map(({n,l}) => (
            <div key={l} className="stat-item">
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">Top Parks</p>
          <h2 className="section-title">Featured Skateparks</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>Iconic public skateparks across America — from concrete bowls to world-class street plazas.</p>
          <div className="grid-3">
            {featured.map((loc, i) => (
              <Link key={loc.slug} href={`/${loc.stateSlug}/${loc.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <img src={`https://picsum.photos/seed/${loc.slug}/800/500`} alt={loc.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>{loc.description.slice(0,110)}…</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {loc.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'var(--asphalt)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--yellow)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.75rem', fontFamily: 'var(--font-body)' }}>How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', color: 'var(--white)' }}>FIND YOUR SPOT</h2>
          </div>
          <div className="grid-3">
            {[
              { icon:'🗺️', title:'BROWSE BY STATE', desc:'Pick your state to see every public skatepark — sorted by city, with full details on surfaces and features.' },
              { icon:'🔍', title:'CHECK THE PARK', desc:'Review the park type, surfaces, lighting, parking, and all available amenities before you go.' },
              { icon:'🛹', title:'DROP IN', desc:"Navigate to your spot and skate. It's that simple. All parks in our directory are publicly accessible." },
            ].map(({icon,title,desc}) => (
              <div key={title} style={{ padding: '2rem 1.5rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius)' }}>
                <div className="step-icon">{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--yellow)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--mid-gray)', lineHeight: 1.7, fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--asphalt)', marginBottom: '1.25rem' }}>{"America's Skatepark Scene"}</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'var(--font-body)' }}>From the legendary concrete bowls of California to the vibrant urban skateplazas of New York and Chicago, the United States has one of the most diverse and expansive networks of public skateparks in the world. Cities large and small have invested in quality skate infrastructure, recognizing the cultural and athletic significance of skateboarding.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'var(--font-body)' }}>Public skateparks range from small community parks with a few ramps and a quarter pipe, to massive world-class facilities spanning acres with competition-grade bowls, street courses, and flow areas. Many modern parks are designed by professional skaters and architects working together to create the ultimate skating experience.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--asphalt)', marginTop: '2rem', marginBottom: '0.75rem' }}>Know Before You Go</h3>
          <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body)' }}>Most public skateparks require helmets for minors and strongly recommend them for all skaters. Hours vary — many parks have lighting for night skating while others close at dusk. Always check local rules, as some parks prohibit bikes or scooters in certain areas.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f5f5f5', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </div>
          {[
            { q:'Are public skateparks free?', a:'Most public skateparks in the United States are completely free and open to the public. They are maintained by local parks and recreation departments. A small number may charge a nominal fee during certain hours.' },
            { q:'Do I need a helmet at a public skatepark?', a:'Rules vary by location and age. Most parks require helmets for minors under 18. Many parks also require knee and elbow pads for younger children. Always check posted rules at the park.' },
            { q:'Can I bring my bike or scooter to a skatepark?', a:'This depends entirely on the individual park. Many skateparks are skateboards and inline skates only, while others allow BMX bikes and scooters during certain hours. Look for posted rules or check with your local parks department.' },
            { q:'What surfaces are common in skateparks?', a:'Concrete (poured in place or precast) is the gold standard — it\'s smooth, durable, and fast. Some parks use asphalt, skatelite (a hardboard surface), or steel for specific features. New parks are almost exclusively concrete.' },
            { q:'How do I find the skatepark nearest to me?', a:'Use our directory to search by state and city. Each listing includes GPS coordinates for precise navigation directly to the park entrance.' },
          ].map(({q,a}) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Browse States */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">All 50 States</p>
            <h2 className="section-title">Browse Parks by State</h2>
          </div>
          <div className="grid-states">
            {ALL_STATES.map((s) => (
              <Link key={s} href={`/${s.toLowerCase().replace(/\s+/g,'-')}`} className="state-link">{s}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--asphalt)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--yellow)', marginBottom: '0.75rem' }}>DROP IN.</h2>
          <p style={{ color: 'var(--mid-gray)', marginBottom: '2rem', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{locations.length}+ skateparks across {statesWithData} states. All free. Find yours now.</p>
          <Link href="/browse-states" className="btn btn-yellow" style={{ padding: '0.9rem 2.5rem' }}>Explore Skateparks →</Link>
        </div>
      </section>
    </>
  );
}
