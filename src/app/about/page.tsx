import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about All Skate Parks, your comprehensive guide to skateboarding parks across America.',
};

const BRAND_DARK = '#1a1a2e';
const BRAND_ACCENT = '#e94560';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: BRAND_DARK, color: '#ffffff', padding: '2rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>About All Skate Parks</h1>
        </div>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', lineHeight: '1.8', color: '#333333' }}>
        <h2 style={{ fontSize: '1.8rem', color: BRAND_DARK, marginTop: '2rem' }}>Our Mission</h2>
        <p>
          All Skate Parks exists to connect the global skateboarding community with the incredible facilities available across the United States. Whether you're a beginner learning your first ollie or a professional practicing for competition, finding the right skate park should be easy.
        </p>

        <h2 style={{ fontSize: '1.8rem', color: BRAND_DARK, marginTop: '2rem' }}>What We Do</h2>
        <p>
          We maintain a comprehensive, up-to-date directory of public and private skateboarding parks throughout all 50 states. Our listings include detailed information about:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Park locations and addresses</li>
          <li>Available features and amenities</li>
          <li>Operating hours and access information</li>
          <li>Contact details and maps</li>
          <li>Community reviews and insights</li>
        </ul>

        <h2 style={{ fontSize: '1.8rem', color: BRAND_DARK, marginTop: '2rem' }}>Our Commitment</h2>
        <p>
          We're committed to providing accurate, helpful information that makes it easy for skaters to discover new parks and plan their sessions. Our team continually updates park information to ensure accuracy and relevance.
        </p>

        <h2 style={{ fontSize: '1.8rem', color: BRAND_DARK, marginTop: '2rem' }}>Safety First</h2>
        <p>
          We believe that skateboarding should be fun and safe. Throughout our site, we emphasize the importance of proper protective equipment, respect for park rules, and supportive community behavior. Every skater deserves to feel welcome and safe at their local skate park.
        </p>

        <h2 style={{ fontSize: '1.8rem', color: BRAND_DARK, marginTop: '2rem' }}>The Skate Community</h2>
        <p>
          The skateboarding community is diverse, inclusive, and welcoming. From young kids riding their first board to seasoned professionals, from street skaters to bowl riders, skate parks bring people together. We're proud to support this vibrant community.
        </p>

        <h2 style={{ fontSize: '1.8rem', color: BRAND_DARK, marginTop: '2rem' }}>Contact & Support</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you. Please visit our{' '}
          <a href="/contact" style={{ color: BRAND_ACCENT, textDecoration: 'none' }}>contact page</a> to get in touch.
        </p>
      </section>
    </div>
  );
}
