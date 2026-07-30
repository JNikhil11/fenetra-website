import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata = {
  title: 'Locations | Fenetra Industries',
  description: 'Visit our headquarters and branch offices. Find contact details and directions to Fenetra Industries.',
};
export default function LocationsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Our Locations</h1>
          <p className="hero-subtitle">Two branches in Sriperumbudur, serving all of India</p>
        </div>
      </div>

      <section className="locations-section bg-grey">
        <div className="container">
          <div className="branch-card">
            <div className="branch-info">
              <span className="badge">Headquarters</span>
              <h2>Branch 1 (HQ)</h2>
              <div className="contact-details">
                <p><strong>Address:</strong><br />{COMPANY_INFO.addresses.headquarters.split(', ').map((line, i, arr) => <React.Fragment key={i}>{line}{i < arr.length - 1 && ', '}{(i === 2) && <br/>}</React.Fragment>)}</p>
                <p><strong>Phone:</strong> {COMPANY_INFO.phone.primary}</p>
                <p><strong>Email:</strong> {COMPANY_INFO.emails.primary}</p>
              </div>
            </div>
            <div className="branch-map" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--coolgrey)', borderRadius: '12px', minHeight: '300px' }}>
              <a href="https://maps.app.goo.gl/ut2J4rckmFNXMJ9b6" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={20} /> View HQ on Google Maps
              </a>
            </div>
          </div>

          <div className="branch-card">
            <div className="branch-map mobile-order-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--coolgrey)', borderRadius: '12px', minHeight: '300px' }}>
              <a href="https://maps.app.goo.gl/hBPH14qsYuFbr5ot9" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={20} /> View Branch 2 on Google Maps
              </a>
            </div>
            <div className="branch-info mobile-order-1">
              <span className="badge">Warehouse & Distribution</span>
              <h2>Branch 2</h2>
              <div className="contact-details">
                <p><strong>Address:</strong><br />{COMPANY_INFO.addresses.branch.split(', ').map((line, i, arr) => <React.Fragment key={i}>{line}{i < arr.length - 1 && ', '}{(i === 2) && <br/>}</React.Fragment>)}</p>
                <p><strong>Phone:</strong> {COMPANY_INFO.phone.primary}</p>
                <p><strong>Email:</strong> {COMPANY_INFO.emails.sales}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="coverage-section bg-white">
        <div className="container">
          <div className="coverage-content">
            <h2>Serving All of India</h2>
            <p>From our strategic locations in the industrial hub of Sriperumbudur, we maintain a robust logistics network capable of delivering premium polymers across the subcontinent.</p>
            <div className="regions-grid">
              <div className="region">South India (Primary)</div>
              <div className="region">West India</div>
              <div className="region">North India</div>
              <div className="region">East India</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band bg-navy">
        <div className="container text-center">
          <h2>Ready to discuss your requirements?</h2>
          <p>Our team is available across both branches to assist you.</p>
          <div className="btn-group">
            <a href="/contact" className="btn btn-primary">Contact Us</a>
            <a href="/contact" className="btn btn-outline" style={{color: 'white', borderColor: 'white'}}>Request Quotation</a>
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
        .page-hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero-subtitle { font-size: 1.25rem; color: var(--coolgrey); }
        
        .bg-grey { background-color: var(--offwhite); }
        .bg-white { background-color: #ffffff; }
        .bg-navy { background-color: var(--navy); color: white; }
        
        section { padding: 80px 0; }

        /* Branches */
        .branch-card {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          margin-bottom: 60px;
        }
        .branch-card:last-child { margin-bottom: 0; }
        .branch-info {
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .badge {
          align-self: flex-start;
          background: var(--cobalt);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .branch-info h2 {
          color: var(--navy);
          font-size: 2rem;
          margin-bottom: 25px;
        }
        .contact-details p {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }
        .contact-details strong { color: var(--navy); }
        .branch-map { min-height: 400px; }

        /* Coverage */
        .coverage-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .coverage-content h2 {
          font-size: 2.5rem;
          color: var(--navy);
          margin-bottom: 20px;
        }
        .coverage-content p {
          font-size: 1.2rem;
          color: var(--graphite);
          margin-bottom: 40px;
          line-height: 1.6;
        }
        .regions-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .region {
          background: var(--offwhite);
          color: var(--navy);
          padding: 15px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1.1rem;
          border: 1px solid var(--coolgrey);
        }

        /* CTA */
        .cta-band { padding: 60px 0; }
        .cta-band h2 { font-size: 2.5rem; margin-bottom: 1rem; }
        .cta-band p { font-size: 1.2rem; color: var(--coolgrey); margin-bottom: 2rem; }

        @media (max-width: 992px) {
          .branch-card { grid-template-columns: 1fr; }
          .mobile-order-1 { order: 1; }
          .mobile-order-2 { order: 2; }
          .branch-map { height: 300px; min-height: auto; }
          .branch-info { padding: 30px; }
        }
      `}</style>
    </>
  );
}
