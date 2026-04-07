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
        <p style={{ color: '#666666' }}>Last updated: April 7, 2026</p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>1. Introduction</h2>
        <p>
          All Skate Parks ("we," "us," "our," or "Company") operates the allskateparks.com website (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>2. Information Collection and Use</h2>
        <h3 style={{ fontSize: '1.1rem', color: BRAND_DARK, marginTop: '1rem' }}>Types of Data Collected</h3>
        <p>
          <strong>Automatically Collected Data:</strong> When you visit our Site, we may automatically collect certain information about your device, including but not limited to your browser type, operating system, IP address, pages visited, and the time and date of your visits. This information helps us understand how visitors use our Site and improve our services.
        </p>
        <p>
          <strong>Google Analytics:</strong> We use Google Analytics to analyze how users interact with our Site. Google Analytics collects information such as your IP address, browser type, pages visited, and the time spent on pages. This data is used to improve the Site experience. For more information, see Google's privacy policy.
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

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>4. Google AdSense and Advertising</h2>
        <p>
          Our Site displays advertisements through Google AdSense. We work with third-party advertising partners, including Google, who may use cookies to serve ads based on your prior visits to this website or other websites. Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this Site and/or other sites on the internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{' '}
          <a href="https://ads.google.com/settings" target="_blank" rel="noopener noreferrer" style={{ color: '#e94560' }}>Google&rsquo;s Ad Settings</a>.
          You may also opt out of interest-based advertising from participating third-party advertisers by visiting{' '}
          <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: '#e94560' }}>optout.aboutads.info</a>.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>5. Cookies and Tracking Technologies</h2>
        <p>
          We may use cookies and similar tracking technologies to enhance your experience on our Site. These cookies help us remember your preferences and understand your behavior on the Site. Third-party advertising partners, including Google, may also set cookies on your device to serve ads based on your prior visits to this Site or other websites across the internet. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>6. Security of Data</h2>
        <p>
          The security of your data is important to us but remember that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>7. Links to Other Sites</h2>
        <p>
          Our Site may contain links to other websites that are not operated by us. This Privacy Policy applies only to our Site. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party site before providing your information.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
        </p>

        <h2 style={{ fontSize: '1.3rem', color: BRAND_DARK, marginTop: '2rem' }}>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:contact@allskateparks.com" style={{ color: '#e94560', textDecoration: 'none' }}>contact@allskateparks.com</a>.
        </p>
      </section>
    </div>
  );
}
