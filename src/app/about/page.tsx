import Link from 'next/link';

export const metadata = {
  title: 'About the All Skate Parks Rebuild',
  description: 'How All Skate Parks handles imported records, source attribution, corrections, and publication decisions.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="home-hero" style={{ padding: '4.5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '840px', position: 'relative', zIndex: 1 }}>
          <p className="section-label">About the directory</p>
          <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2rem,5vw,3.6rem)', marginBottom: '1rem' }}>IMPORTED RECORDS UNDER REVIEW</h1>
          <p className="hero-copy" style={{ margin: 0 }}>All Skate Parks is being rebuilt as a source-transparent location directory. Current entries are discovery leads, not live-verified park profiles.</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <h2 className="section-title">What the current data contains</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>The repository contains 1,228 records with a name, state, latitude, and longitude. Only 141 contain a city field, while 1,087 do not. The data represents 47 states.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>The current file contains 118 website fields, 629 surface-related tags, 174 night-lighting tags, and 27 free-admission tags. Those values have no retained extraction date or per-field source reference, so they are shown only as recorded tags and must be rechecked.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2.5rem' }}>The repository includes a workflow intended to query OpenStreetMap, but the current file also contains fields the checked-in workflow does not generate. It does not retain OpenStreetMap object IDs. We therefore do not claim that each current field is verified OpenStreetMap data.</p>

          <h2 className="section-title">Publication standard</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>A future indexable park page must cite a current operator, municipal page, or other primary source; state what was reviewed and when; and distinguish imported tags from current operator-published facts.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2.5rem' }}>State and record pages remain excluded from search indexing during this rebuild. Advertising and affiliate links will not be added to bulk imported pages.</p>

          <h2 className="section-title">Attribution and corrections</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>Open mapping attribution: <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap contributors</a>.</p>
          <p style={{ lineHeight: 1.85 }}>To report a closed park, incorrect coordinate, or other problem, use the <Link href="/contact">contact page</Link>. Include the record URL and a current source when possible. Submissions are reviewed before publication.</p>
        </div>
      </section>
    </div>
  );
}
