import Link from 'next/link';
import { suppliers } from '@/data/suppliers';

export const metadata = {
  title: 'Our Suppliers | Fenetra Industries',
};

export default function SuppliersPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Our Trusted Supply Partners</h1>
        </div>
      </div>

      <section className="featured-supplier bg-white">
        <div className="container">
          <div className="featured-content">
            <div className="badge">Authorized Distributor</div>
            <h2>Reliance Industries Limited</h2>
            <p className="featured-desc">
              We are proud to be an authorized distributor for Reliance Industries, India&apos;s largest private sector enterprise and the most trusted name in polymer manufacturing. Our partnership ensures our clients receive premium quality polymers with consistent specifications.
            </p>
            <div className="featured-products">
              <h3>Key Products Supplied:</h3>
              <div className="tags">
                <span className="tag">Polypropylene (PP)</span>
                <span className="tag">Polyethylene (PE)</span>
                <span className="tag">PVC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="suppliers-grid-section bg-grey">
        <div className="container">
          <h2 className="section-title">Our Global Network</h2>
          <div className="suppliers-grid">
            {suppliers.map(supplier => (
              <div key={supplier.id} className="supplier-card">
                <h3>{supplier.name}</h3>
                <p className="supplier-desc">{supplier.description}</p>
                <div className="products-list">
                  <strong>Products:</strong>
                  <ul>
                    {supplier.products.map((prod, i) => (
                      <li key={i}>{prod}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="customer-benefits bg-white">
        <div className="container">
          <h2 className="section-title">What This Means For You</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon">Authenticity</div>
              <p>100% authentic materials directly sourced from manufacturers.</p>
            </div>
            <div className="benefit-card">
              <div className="icon">Pricing</div>
              <p>Competitive pricing due to our direct relationships and volume procurement.</p>
            </div>
            <div className="benefit-card">
              <div className="icon">Support</div>
              <p>Access to technical support and material data sheets directly from the source.</p>
            </div>
            <div className="benefit-card">
              <div className="icon">Reliability</div>
              <p>Stable supply chain ensuring your production lines never stop.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band bg-navy">
        <div className="container text-center">
          <h2>Partner with a reliable supplier</h2>
          <p>Get in touch with us for your polymer requirements.</p>
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

        /* Featured */
        .featured-supplier {
          text-align: center;
        }
        .featured-content {
          max-width: 800px;
          margin: 0 auto;
          background: var(--offwhite);
          padding: 60px;
          border-radius: 16px;
          border-top: 5px solid var(--cobalt);
        }
        .badge {
          display: inline-block;
          background: var(--cobalt);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .featured-content h2 {
          font-size: 2.5rem;
          color: var(--navy);
          margin-bottom: 20px;
        }
        .featured-desc {
          font-size: 1.2rem;
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .featured-products h3 {
          font-size: 1.2rem;
          color: var(--navy);
          margin-bottom: 15px;
        }
        .tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tag {
          background: white;
          color: var(--navy);
          padding: 8px 20px;
          border-radius: 20px;
          font-weight: 500;
          border: 1px solid var(--coolgrey);
        }

        /* Suppliers Grid */
        .suppliers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }
        .supplier-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }
        .supplier-card:hover {
          transform: translateY(-5px);
        }
        .supplier-card h3 {
          font-size: 1.5rem;
          color: var(--navy);
          margin-bottom: 15px;
          border-bottom: 2px solid var(--offwhite);
          padding-bottom: 15px;
        }
        .supplier-desc {
          color: var(--graphite);
          margin-bottom: 20px;
          line-height: 1.5;
        }
        .products-list strong {
          color: var(--cobalt);
          display: block;
          margin-bottom: 10px;
        }
        .products-list ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .products-list li {
          background: var(--offwhite);
          color: var(--graphite);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.9rem;
        }

        /* Benefits */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        .benefit-card {
          text-align: center;
          padding: 30px;
        }
        .benefit-card .icon {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--cobalt);
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .benefit-card p {
          color: var(--graphite);
          line-height: 1.5;
        }

        /* CTA */
        .cta-band { padding: 60px 0; }
        .cta-band h2 { font-size: 2.5rem; margin-bottom: 1rem; }
        .cta-band p { font-size: 1.2rem; color: var(--coolgrey); margin-bottom: 2rem; }

        @media (max-width: 768px) {
          .featured-content { padding: 30px; }
          .featured-content h2 { font-size: 2rem; }
        }
      `}</style>
    </>
  );
}
