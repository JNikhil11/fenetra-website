import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Quality & Certifications | Fenetra Industries',
};

export default function QualityPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Quality & Certifications</h1>
        </div>
      </div>

      <section className="certifications-section bg-grey">
        <div className="container">
          <div className="cert-cards">
            <div className="cert-card">
              <div className="cert-icon">🏆</div>
              <h2>ISO 9001:2015</h2>
              <p>Certified Quality Management System ensuring consistent product quality and continuous improvement.</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✅</div>
              <h2>Industry Standards</h2>
              <p>All our products comply with leading industry standards for safety, durability, and performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="commitments-section bg-white">
        <div className="container">
          <h2 className="section-title">Our Quality Commitments</h2>
          <div className="commitment-cards">
            <div className="commitment-card">
              <div className="icon">📊</div>
              <h3>Consistent MFI</h3>
              <p>We rigorously test Melt Flow Index (MFI) to ensure uniform processing characteristics across all batches.</p>
            </div>
            <div className="commitment-card">
              <div className="icon">✨</div>
              <h3>High Purity</h3>
              <p>Zero contamination guarantee. We maintain strict material handling protocols to prevent cross-contamination.</p>
            </div>
            <div className="commitment-card">
              <div className="icon">🎨</div>
              <h3>Custom Colour Matching</h3>
              <p>Precision color matching services using advanced spectrophotometers for exact brand requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lab-section bg-grey">
        <div className="container">
          <div className="lab-content">
            <div className="lab-text">
              <h2>State-of-the-Art Laboratory</h2>
              <p>Our in-house quality assurance laboratory is equipped with the latest testing instruments to guarantee product specifications.</p>
              <ul className="equipment-list">
                <li>
                  <strong>MFI Tester</strong>
                  <span>Measures flow characteristics to ensure consistent moldability.</span>
                </li>
                <li>
                  <strong>Moisture Analyzer</strong>
                  <span>Detects precise moisture content, critical for engineering plastics.</span>
                </li>
                <li>
                  <strong>Digital Weighing Scale</strong>
                  <span>High-precision scales for accurate formulation and batching.</span>
                </li>
              </ul>
            </div>
            <div className="lab-image">
              <div className="image-placeholder">Lab Equipment Image</div>
            </div>
          </div>
        </div>
      </section>

      <section className="supply-chain bg-white">
        <div className="container">
          <h2 className="section-title">Supply Chain Strengths</h2>
          <div className="strengths-grid">
            <div className="strength-item">
              <div className="icon">🏭</div>
              <h3>Bulk Sourcing</h3>
              <p>Direct sourcing from major manufacturers ensures competitive pricing and reliable supply.</p>
            </div>
            <div className="strength-item">
              <div className="icon">🌡️</div>
              <h3>Climate-Controlled</h3>
              <p>Proper warehousing conditions to maintain material integrity and prevent moisture absorption.</p>
            </div>
            <div className="strength-item">
              <div className="icon">⏱️</div>
              <h3>On-Time Delivery</h3>
              <p>Reliable logistics ensuring continuous production for our manufacturing clients.</p>
            </div>
            <div className="strength-item">
              <div className="icon">🚚</div>
              <h3>Own Transport Fleet</h3>
              <p>Dedicated transportation infrastructure for flexible and rapid delivery capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band bg-navy">
        <div className="container text-center">
          <h2>Experience Uncompromised Quality</h2>
          <p>Partner with us for reliable, high-performance polymer solutions.</p>
          <div className="btn-group">
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background-color: var(--navy);
          color: white;
          padding: 80px 0;
          text-align: center;
        }
        .page-hero h1 {
          font-size: 3rem;
        }
        .bg-grey { background-color: var(--offwhite); }
        .bg-white { background-color: #ffffff; }
        .bg-navy { background-color: var(--navy); color: white; }
        
        section { padding: 80px 0; }
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          color: var(--navy);
          margin-bottom: 50px;
        }

        /* Certifications */
        .cert-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }
        .cert-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        .cert-icon { font-size: 3rem; margin-bottom: 20px; }
        .cert-card h2 { color: var(--navy); margin-bottom: 15px; }
        .cert-card p { color: var(--graphite); line-height: 1.6; }

        /* Commitments */
        .commitment-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .commitment-card {
          background: var(--offwhite);
          padding: 40px;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .commitment-card:hover { transform: translateY(-5px); }
        .commitment-card .icon { font-size: 3rem; margin-bottom: 20px; }
        .commitment-card h3 { color: var(--cobalt); margin-bottom: 15px; font-size: 1.5rem; }
        .commitment-card p { color: var(--graphite); line-height: 1.6; }

        /* Lab Section */
        .lab-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .lab-text h2 { color: var(--navy); font-size: 2.5rem; margin-bottom: 20px; }
        .lab-text p { color: var(--graphite); font-size: 1.1rem; margin-bottom: 30px; line-height: 1.6; }
        .equipment-list { list-style: none; padding: 0; }
        .equipment-list li {
          background: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 15px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .equipment-list strong {
          display: block;
          color: var(--cobalt);
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        .equipment-list span { color: var(--graphite); }
        .image-placeholder {
          width: 100%;
          height: 400px;
          background-color: var(--navy);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          font-size: 1.2rem;
        }

        /* Supply Chain */
        .strengths-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        .strength-item {
          text-align: center;
          padding: 30px;
          border: 1px solid var(--coolgrey);
          border-radius: 12px;
        }
        .strength-item .icon { font-size: 2.5rem; margin-bottom: 20px; }
        .strength-item h3 { color: var(--navy); margin-bottom: 15px; font-size: 1.3rem; }
        .strength-item p { color: var(--graphite); line-height: 1.5; }

        /* CTA */
        .cta-band { padding: 60px 0; }
        .cta-band h2 { font-size: 2.5rem; margin-bottom: 1rem; }
        .cta-band p { font-size: 1.2rem; color: var(--coolgrey); margin-bottom: 2rem; }

        @media (max-width: 768px) {
          .cert-cards, .lab-content { grid-template-columns: 1fr; }
          .image-placeholder { height: 300px; }
        }
      `}</style>
    </>
  );
}
