import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'All Skate Parks terms of service.',
};

const BRAND_DARK = '#1a1a2e';

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: BRAND_DARK, color: '#ffffff', padding: '2rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Terms of Service</h1>
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem', lineHeight: '1.8', color: '#333333', fontSize: '0.95rem' }}>
        <p style={{ color: '#666666' }}>Last updated: April 4, 2025</p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the All Skate Parks website (allskateparks.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on All Skate Parks for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Modifying or copying the materials</li>
          <li>Using the materials for any commercial purpose or for any public display</li>
          <li>Attempting to decompile or reverse engineer any software contained on the Site</li>
          <li>Removing any copyright or other proprietary notations from the materials</li>
          <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          <li>Violating any applicable laws or regulations</li>
        </ul>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>3. Disclaimer</h2>
        <p>
          The materials on the All Skate Parks website are provided on an 'as is' basis. All Skate Parks makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>4. Limitations</h2>
        <p>
          In no event shall All Skate Parks or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the All Skate Parks website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>5. Accuracy of Materials</h2>
        <p>
          The materials appearing on the All Skate Parks website could include technical, typographical, or photographic errors. All Skate Parks does not warrant that any of the materials on its website are accurate, complete, or current. All Skate Parks may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>6. Links</h2>
        <p>
          All Skate Parks has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by All Skate Parks of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>7. Modifications</h2>
        <p>
          All Skate Parks may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>8. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>9. Safety and Responsibility</h2>
        <p>
          Skateboarding is an inherently risky activity. The information provided on All Skate Parks is for informational purposes only. Users are responsible for their own safety and should always wear appropriate protective equipment. All Skate Parks is not responsible for any injuries or accidents that occur at any skateboarding facility.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>10. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at{' '}
          <a href="mailto:contact@allskateparks.com" style={{ color: '#e94560', textDecoration: 'none' }}>contact@allskateparks.com</a>.
        </p>
      </section>
    </div>
  );
}
