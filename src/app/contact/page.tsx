import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with All Skate Parks. We'd love to hear from you.",
};

const BRAND_DARK = '#1a1a2e';
const BRAND_ACCENT = '#e94560';

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: BRAND_DARK, color: '#ffffff', padding: '2rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Contact Us</h1>
        </div>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', lineHeight: '1.8', color: '#333333' }}>
        <h2 style={{ fontSize: '1.5rem', color: BRAND_DARK, marginTop: '2rem' }}>Get in Touch</h2>
        <p>
          We'd love to hear from you! Whether you have questions, suggestions, or want to report information about a skate park, please don't hesitate to reach out.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: BRAND_DARK, marginTop: '2rem' }}>Email</h2>
        <p>
          <a href="mailto:contact@allskateparks.com" style={{ color: BRAND_ACCENT, textDecoration: 'none', fontSize: '1.1rem' }}>
            contact@allskateparks.com
          </a>
        </p>
        <p style={{ color: '#666666', fontSize: '0.95rem' }}>
          We typically respond to emails within 24-48 hours during business days.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: BRAND_DARK, marginTop: '2rem' }}>What Can We Help With?</h2>
        <ul style={{ paddingLeft: '1.5rem', color: '#333333' }}>
          <li>Questions about specific skateboarding parks</li>
          <li>Suggestions for parks we should add to our directory</li>
          <li>Corrections or updates to park information</li>
          <li>General inquiries about skateboarding</li>
          <li>Partnership and collaboration opportunities</li>
          <li>Feedback on our site and services</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', color: BRAND_DARK, marginTop: '2rem' }}>Help & Resources</h2>
        <p>
          Before reaching out, you might find the answers you're looking for in our{' '}
          <a href="/" style={{ color: BRAND_ACCENT, textDecoration: 'none' }}>FAQ section</a> on the homepage.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: BRAND_DARK, marginTop: '2rem' }}>Privacy</h2>
        <p>
          Your privacy is important to us. Please see our <a href="/privacy" style={{ color: BRAND_ACCENT, textDecoration: 'none' }}>privacy policy</a> for details on how we handle your information.
        </p>
      </section>
    </div>
  );
}
