'use client';

import Link from 'next/link';
import { clients, clientCategories } from '@/data/clients';


export default function ClientsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Our Valued Clients</h1>
        </div>
      </div>

      <section className="positioning-section bg-white">
        <div className="container text-center">
          <h2 className="positioning-text">
            Trusted by leading OEMs and Tier-1 manufacturers across India for consistent quality and reliable delivery.
          </h2>
        </div>
      </section>

      <section className="clients-grid-section bg-grey">
        <div className="container">
          <h2 className="section-title">Key Relationships</h2>
          <div className="clients-grid">
            {clients.map(client => (
              <div key={client.id} className="client-card">
                <div className="client-header">
                  <h3>{client.name}</h3>
                  <span className="client-type">{client.type}</span>
                </div>
                <p className="client-desc">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section bg-white">
        <div className="container">
          <h2 className="section-title">Industries We Empower</h2>
          <div className="categories-grid">
            {clientCategories.map(category => (
              <div key={category.id} className="category-card">
                <div className="cat-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section bg-grey">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="quote">Fenetra's consistent MFI and on-time delivery have been crucial to our automotive component production lines. They are a reliable partner.</p>
              <div className="author">
                <strong>Production Manager</strong>
                <span>Tier-1 Automotive Supplier</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="quote">The custom colour matching services provided by Fenetra saved us significant time and ensured our household products met brand standards.</p>
              <div className="author">
                <strong>Procurement Head</strong>
                <span>Home Appliances Manufacturer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band bg-navy">
        <div className="container text-center">
          <h2>Join our network of satisfied clients</h2>
          <p>Let us help you optimize your manufacturing process with our premium polymers.</p>
          <div className="btn-group">
            <Link href="/contact" className="btn btn-primary">Request Quotation</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
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

        /* Positioning */
        .positioning-section { padding: 60px 0; }
        .positioning-text {
          font-size: 1.8rem;
          color: var(--navy);
          line-height: 1.6;
          max-width: 900px;
          margin: 0 auto;
          font-weight: 400;
        }

        /* Clients Grid */
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .client-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          border-top: 4px solid var(--cobalt);
        }
        .client-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .client-header h3 {
          font-size: 1.5rem;
          color: var(--navy);
          margin: 0;
        }
        .client-type {
          background: var(--offwhite);
          color: var(--graphite);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .client-desc {
          color: var(--graphite);
          line-height: 1.5;
        }

        /* Categories */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        .category-card {
          text-align: center;
          padding: 30px;
          background: var(--offwhite);
          border-radius: 12px;
          transition: transform 0.3s ease;
        }
        .category-card:hover {
          transform: translateY(-5px);
        }
        .cat-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .category-card h3 {
          color: var(--navy);
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        .category-card p {
          color: var(--graphite);
          line-height: 1.5;
        }

        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .testimonial-card {
          background: white;
          padding: 50px;
          border-radius: 16px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .quote-mark {
          position: absolute;
          top: 20px;
          left: 30px;
          font-size: 5rem;
          color: var(--cobalt);
          opacity: 0.2;
          font-family: serif;
          line-height: 1;
        }
        .quote {
          font-size: 1.2rem;
          color: var(--graphite);
          line-height: 1.7;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }
        .author strong {
          display: block;
          color: var(--navy);
          font-size: 1.1rem;
        }
        .author span {
          color: var(--graphite);
          font-size: 0.9rem;
        }

        /* CTA */
        .cta-band { padding: 60px 0; }
        .cta-band h2 { font-size: 2.5rem; margin-bottom: 1rem; }
        .cta-band p { font-size: 1.2rem; color: var(--coolgrey); margin-bottom: 2rem; }

        @media (max-width: 768px) {
          .positioning-text { font-size: 1.4rem; }
          .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
