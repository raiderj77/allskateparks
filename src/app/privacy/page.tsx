import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'All Skate Parks privacy policy.',
};

const BRAND_DARK = '#1a1a2e';

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: BRAND_DARK, color: '#ffffff', padding: '2rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Privacy Policy</h1>
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem', lineHeight: '1.8', color: '#333333', fontSize: '0.95rem' }}>
        <p style={{ color: '#666666' }}>Last updated: July 13, 2026</p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>1. Introduction</h2>
        <p>
          All Skate Parks ("we," "us," "our," or "Company") operates the allskateparks.com website (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>2. Information Collection and Use</h2>
        <h3 style={{ fontSize: '1.1rem', color: BRAND_DARK, marginTop: '1rem' }}>Types of Data Collected</h3>
        <p>
          <strong>Service and security data:</strong> Our hosting and security providers may process request information such as IP address, browser type, requested page, and timestamp to deliver the Site, prevent abuse, and diagnose failures. Retention is controlled by those providers and our service settings.
        </p>
        <p>
          <strong>Optional analytics:</strong> Google Analytics and Microsoft Clarity are not currently enabled on the Site. We will update this policy and implement any required consent controls before enabling optional analytics.
        </p>
        <p>
          <strong>Contact Information:</strong> If you contact us via email, we may collect your email address and any information you provide in your message. This information is used solely to respond to your inquiry.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>3. Use of Data</h2>
        <p>All Skate Parks uses the collected data for various purposes:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>To provide and maintain our Site</li>
          <li>To understand how visitors use our Site and improve functionality</li>
          <li>To respond to your inquiries and support requests</li>
          <li>To monitor and analyze trends, usage, and activities</li>
          <li>To detect, prevent, and address fraud and security issues</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>4. Advertising Status</h2>
        <p>
          Google AdSense is not currently enabled and the Site does not currently load advertising scripts or serve personalized ads. A publisher identifier may remain in public metadata or ads.txt solely for ownership verification and does not itself place advertising cookies.
        </p>
        <p>
          If advertising is enabled later, we will first update this notice, satisfy applicable platform requirements, and add consent controls where required.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>5. MODPA (Maryland Online Data Privacy Act) Compliance</h2>
        <p>
          All Skate Parks is committed to complying with the Maryland Online Data Privacy Act (MODPA), effective April 1, 2026. Under MODPA, consumers residing in Maryland have the following rights:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li><strong>Right to Access:</strong> You have the right to request access to the personal data we collect about you.</li>
          <li><strong>Right to Correct:</strong> You have the right to request correction of inaccurate personal data.</li>
          <li><strong>Right to Delete:</strong> You have the right to request deletion of your personal data.</li>
          <li><strong>Right to Opt-Out of Sale and Targeted Advertising:</strong> You have the right to opt out of the sale of your personal data and targeted advertising.</li>
          <li><strong>Right to Data Portability:</strong> You have the right to obtain a copy of your personal data in a portable format.</li>
        </ul>
        <p>
          <strong>Global Privacy Control (GPC):</strong> The Site does not currently sell personal data or run targeted advertising. If processing subject to an opt-out is introduced later, we will honor applicable GPC signals and provide any additional required controls.
        </p>
        <p>
          <strong>Data Sale Policy:</strong> All Skate Parks does not sell your personal data to third parties.
        </p>
        <p>
          <strong>Response Timeline:</strong> We will respond to consumer rights requests within 45 days of receipt. To exercise any of these rights, please contact us at{' '}
          <a href="mailto:privacy@allskateparks.com" style={{ color: '#e94560', textDecoration: 'none' }}>privacy@allskateparks.com</a>.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>6. Cookies and Tracking Technologies</h2>
        <p>
          The Site does not currently set optional analytics or advertising cookies. Essential delivery and security mechanisms may be used by our hosting providers. External sites you choose to visit have their own cookie and privacy practices.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>7. Security of Data</h2>
        <p>
          The security of your data is important to us but remember that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>8. Links to Other Sites</h2>
        <p>
          Our Site may contain links to other websites that are not operated by us. This Privacy Policy applies only to our Site. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party site before providing your information.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>9. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:contact@allskateparks.com" style={{ color: '#e94560', textDecoration: 'none' }}>contact@allskateparks.com</a>.
        </p>
      </section>
    </div>
  );
}
