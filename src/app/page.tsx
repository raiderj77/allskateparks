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

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://allskateparks.com',
        name:'All Skate Parks',dateModified:'2026-04-07',
        potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:'https://allskateparks.com/search?q={search_term_string}'},'query-input':'required name=search_term_string'},
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Organization',
        name:'All Skate Parks',url:'https://allskateparks.com',
        description:'Directory of public skate parks across the United States',
        dateModified:'2026-04-07',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'LocalBusiness',
        name:'All Skate Parks Directory',url:'https://allskateparks.com',
        description:'Find public skate parks near you across the United States',
        areaServed:'United States',dateModified:'2026-04-07',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',dateModified:'2026-04-07',
        mainEntity:[
          {'@type':'Question',name:'How do I find a public skate park near me?',acceptedAnswer:{'@type':'Answer',text:'Use the All Skate Parks directory to search by state or city. Each listing includes the park address, surface type, features like bowls, rails, and street sections, whether helmets are required, and whether the park is lighted for night skating.'}},
          {'@type':'Question',name:'Are public skate parks free to use?',acceptedAnswer:{'@type':'Answer',text:'Most public skate parks in the United States are free and open to the public during posted hours. Some parks in managed recreation areas or private facilities charge a small daily or membership fee. Check individual listings for current access and fee information.'}},
          {'@type':'Question',name:'What safety gear is required at skate parks?',acceptedAnswer:{'@type':'Answer',text:'Requirements vary by location. Many public skate parks require helmets for all skaters, and some require knee pads and wrist guards especially for younger skaters. Always check posted rules at the park and follow local ordinances — some cities enforce helmet laws with fines.'}},
          {'@type':'Question',name:'What skill level are public skate parks designed for?',acceptedAnswer:{'@type':'Answer',text:"Most public skate parks include a mix of features for different skill levels — beginner-friendly flat sections and gentle banks alongside intermediate street sections and advanced bowls or vert ramps. Check the listing for a description of the park's features to find one that matches your skill level."}},
          {'@type':'Question',name:'Can I skateboard, scooter, and BMX at the same skate park?',acceptedAnswer:{'@type':'Answer',text:'Many public skate parks allow skateboarding, inline skating, scooters, and BMX bikes, but some parks restrict certain activities or designate separate areas or time slots. Check the individual park listing or posted rules before visiting.'}},
        ],
      }) }} />

      <div style={{ background: '#1e1b4b', borderBottom: '3px solid #f59e0b', padding: '0.875rem 1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
        <strong style={{ color: '#f59e0b' }}>This directory is paused for editorial enrichment.</strong>{' '}
        Visit our active sites:{' '}
        <a href="https://soakusa.net" style={{ color: '#93c5fd', textDecoration: 'underline' }}>soakusa.net</a>
        {' | '}
        <a href="https://publicboatramps.com" style={{ color: '#93c5fd', textDecoration: 'underline' }}>publicboatramps.com</a>
        {' | '}
        <a href="https://fibertools.app" style={{ color: '#93c5fd', textDecoration: 'underline' }}>fibertools.app</a>
      </div>

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
          <div className="anim-fade-up anim-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="/california" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.95rem', background: 'var(--yellow)', color: 'var(--asphalt)', textDecoration: 'none', transition: 'background 0.2s' }}>Find Skate Parks →</a>
            <a href="/arizona" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.95rem', background: 'transparent', color: 'white', border: '2px solid rgba(245,230,66,0.4)', textDecoration: 'none', transition: 'background 0.2s' }}>Browse by State</a>
          </div>
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
                  <img src={getMapboxImage(loc.lat, loc.lng)} alt={loc.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>{getSkateParkPreview(loc)}</p>
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

      {/* GEO Content */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: 'var(--asphalt)', marginBottom: '0.75rem' }}>How to find the right skate park for your skill level</h2>
          <p style={{ background: 'var(--ivory)', borderLeft: '4px solid var(--yellow)', padding: '0.9rem 1.2rem', fontWeight: 600, fontFamily: 'var(--font-body)', marginBottom: '1rem', lineHeight: 1.7 }}>Search by city and look at the park features listed — beginner parks emphasize smooth flat ground and gentle transitions, while advanced parks feature deep bowls, large rails, and vert ramps.</p>
          <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body)', marginBottom: '0.85rem' }}>Each skate park listing describes the available terrain so you can match the park to where you are in your progression. A beginner doing their first kickturns needs different terrain than a skater working on tricks in a deep concrete bowl. Look for listings that mention "beginner-friendly" flat sections, mellow banks, or small quarter pipes if you are just starting out.</p>
          <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body)', marginBottom: '2.5rem' }}>There are over 3,500 public skate parks across the United States, according to the Skatepark Project, spanning everything from tiny community installations to multi-acre regional facilities. That range means skaters at every level can find appropriate terrain within a reasonable distance in most parts of the country.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: 'var(--asphalt)', marginBottom: '0.75rem' }}>What should I bring to a public skate park?</h2>
          <p style={{ background: 'var(--ivory)', borderLeft: '4px solid var(--yellow)', padding: '0.9rem 1.2rem', fontWeight: 600, fontFamily: 'var(--font-body)', marginBottom: '1rem', lineHeight: 1.7 }}>Always bring a helmet — many parks require it by law. Bring water, sunscreen for outdoor parks, and appropriate protective gear including knee pads and wrist guards especially if you are learning.</p>
          <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body)', marginBottom: '0.85rem' }}>Beginner skaters benefit most from a full protective kit: helmet, knee pads, elbow pads, and wrist guards. As you develop your skills and confidence, many skaters scale back to just a helmet — but wrist guards remain one of the highest-impact pieces of protective gear since wrists absorb the force of most falls. Over 6 million Americans skateboard regularly, according to the Sports and Fitness Industry Association, meaning skate park facilities and posted safety rules vary widely by city and county.</p>
          <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body)', marginBottom: '2.5rem' }}>Check individual park listings to see whether the facility has water fountains, restrooms, or shade structures nearby — especially important for outdoor parks during summer months.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: 'var(--asphalt)', marginBottom: '0.75rem' }}>What are the different types of skate park features?</h2>
          <p style={{ background: 'var(--ivory)', borderLeft: '4px solid var(--yellow)', padding: '0.9rem 1.2rem', fontWeight: 600, fontFamily: 'var(--font-body)', marginBottom: '1rem', lineHeight: 1.7 }}>Skate parks typically include street sections with stairs, rails, and ledges; transition sections with banks and quarter pipes; and bowl sections with full pools or kidney bowls for vert-style skating.</p>
          <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body)', marginBottom: '0.85rem' }}>Street sections replicate urban skating environments and are popular with skaters who focus on technical tricks — ollies, grinds, flips, and slides on ledges, stairs, and handrails. Transition terrain (banks and quarter pipes) is more forgiving for learning speed and flow. Bowl sections — concrete pools and kidney bowls — support a vertical skating style where skaters carve the walls and generate speed through curved transitions rather than flat approaches.</p>
          <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body)', marginBottom: '2.5rem' }}>Skateboarding was added to the Olympic Games at Tokyo 2020, driving a significant increase in public skate park construction and investment across the U.S. Many newer parks are designed with input from professional skaters to ensure the terrain supports both learning and advanced progression.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: 'var(--asphalt)', marginBottom: '0.75rem' }}>Are public skate parks open at night?</h2>
          <p style={{ background: 'var(--ivory)', borderLeft: '4px solid var(--yellow)', padding: '0.9rem 1.2rem', fontWeight: 600, fontFamily: 'var(--font-body)', marginBottom: '1rem', lineHeight: 1.7 }}>Some public skate parks have lighting for evening use, typically open until 9 or 10pm. Most unlit outdoor parks follow general park hours and close at dusk.</p>
          <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body)', marginBottom: '2.5rem' }}>Urban parks managed by city recreation departments are more likely to have permanent lighting than smaller community or suburban parks. Check individual listings for notes on lighting — parks that are lighted are tagged in the directory so you can filter for evening sessions specifically.</p>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--asphalt)', marginBottom: '1rem' }}>Further Reading</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="https://skatepark.org" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--asphalt)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>The Skatepark Project — skate park advocacy and resources</a></li>
              <li><a href="https://usaskateboarding.com" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--asphalt)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>USA Skateboarding — official national governing body</a></li>
              <li><a href="https://skateparkproject.com" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--asphalt)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Tony Hawk Foundation skate park resources</a></li>
            </ul>
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
