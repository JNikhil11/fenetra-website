'use client';

import Link from 'next/link';
import { industries } from '@/data/industries';
import { Car, Package, Armchair } from 'lucide-react';

const industryIcons = {
  automotive: <Car size={40} strokeWidth={1.5} className="mr-3 text-cobalt" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '1rem', color: 'var(--cobalt)' }} />,
  packaging: <Package size={40} strokeWidth={1.5} className="mr-3 text-cobalt" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '1rem', color: 'var(--cobalt)' }} />,
  'consumer-goods': <Armchair size={40} strokeWidth={1.5} className="mr-3 text-cobalt" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '1rem', color: 'var(--cobalt)' }} />
};


export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="overline" style={{ color: 'var(--amber)' }}>INDUSTRIES WE SERVE</span>
          <h1 style={{ color: 'white' }}>Powering India&apos;s Manufacturing</h1>
          <p className="hero-subtitle">
            Supplying premium polymer solutions to automotive, packaging, and consumer goods manufacturers across India.
          </p>
        </div>
      </section>

      {industries.map((industry, index) => (
        <section key={industry.slug} className={`section ${index % 2 !== 0 ? 'section--grey' : ''}`}>
          <div className="container">
            <div className="industry-layout">
              <div className="industry-text">
                <span className="overline">{industry.name.toUpperCase()}</span>
                <h2 style={{ display: 'flex', alignItems: 'center', fontWeight: '600' }}>
                  {industryIcons[industry.slug]} 
                  <span>{industry.name}</span>
                </h2>
                <p className="lead">{industry.longDescription || industry.description}</p>

                <div className="industry-details">
                  <div>
                    <h3>Recommended Grades</h3>
                    <div className="tags-row">
                      {industry.grades.map((grade, i) => (
                        <span key={i} className="tag">{grade}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3>Key Applications</h3>
                    <ul className="apps-list">
                      {industry.applications.map((app, i) => (
                        <li key={i}>
                          <span className="app-dot">●</span> {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link href="/products" className="btn btn--primary" style={{ marginTop: 'var(--space-lg)' }}>
                  View Products →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="overline">ALSO SERVING</span>
            <h2>More Industries We Support</h2>
          </div>
          <div className="also-serving-grid">
            <div className="card">
              <div className="also-icon">⚙️</div>
              <h3>Injection Moulding Component Manufacturers</h3>
              <p>Supplying consistent, high-quality raw materials optimised for precision injection moulding operations. Our batch-to-batch MFI uniformity ensures stable machine settings across production runs.</p>
            </div>
            <div className="card">
              <div className="also-icon">🔄</div>
              <h3>Polymer Traders &amp; Distributors</h3>
              <p>Reliable bulk supply of virgin and reprocessed polymers at competitive wholesale pricing. Our climate-controlled storage and own transport fleet ensure timely delivery across India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>Need Raw Materials for Your Industry?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 0 }}>Contact our experts to find the perfect polymer grade for your specific application.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn--white">Request a Quotation</Link>
            <Link href="/products" className="btn btn--ghost">View Products</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          background: var(--navy);
          color: white;
          padding: 5rem 0 4rem;
          text-align: center;
        }
        .page-hero h1 {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          margin-bottom: var(--space-md);
        }
        .hero-subtitle {
          font-size: 1.125rem;
          color: rgba(255,255,255,0.7);
          max-width: 600px;
          margin: 0 auto;
        }
        .industry-layout {
          max-width: 900px;
        }
        .industry-text h2 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .industry-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-top: var(--space-xl);
        }
        .tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .apps-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .apps-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--graphite);
        }
        .app-dot {
          color: var(--cobalt);
          font-size: 0.5rem;
        }
        .also-serving-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
        }
        .also-icon {
          font-size: 2rem;
          margin-bottom: var(--space-md);
        }
        .cta-section {
          background: var(--cobalt);
          padding: var(--space-2xl) 0;
        }
        .cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-lg);
        }
        .cta-actions {
          display: flex;
          gap: var(--space-md);
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .industry-details {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
          .also-serving-grid {
            grid-template-columns: 1fr;
          }
          .cta-inner {
            flex-direction: column;
            text-align: center;
          }
          .cta-actions {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
