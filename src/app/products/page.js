import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { Check } from 'lucide-react';
import Marquee from 'react-fast-marquee';

export const metadata = {
  title: 'Products | Fenetra Industries',
  description: 'Virgin and reprocessed PP, ABS, PC, and PPCP grades for injection moulding, automotive, packaging, and consumer goods applications.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Industrial-Grade Polymer Granules</h1>
          <p className="subtitle">Virgin and reprocessed PP, ABS, PC, and PPCP grades for injection moulding, automotive, packaging, and consumer goods applications.</p>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container">
          <div className="product-marquee-container">
            <Marquee direction="right" pauseOnHover={true} speed={40} gradient={false}>
              {[...products, ...products].map((product, idx) => (
                <div key={`${product.slug}-${idx}`} className="product-card marquee-card">
                  <div className="card-image">
                    <div className={`type-badge ${product.type.toLowerCase()}`}>
                      {product.type}
                    </div>
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      width={400} 
                      height={300} 
                    />
                  </div>
                  <div className="card-content">
                    <h3>{product.name}</h3>
                    <div className="full-name">{product.fullName}</div>
                    
                    <div className="tags">
                      {product.properties.slice(0, 3).map(prop => (
                        <span key={prop} className="tag">{prop}</span>
                      ))}
                    </div>

                    <div className="spec-plate-mini">
                      <div className="spec">
                        <span className="label">MFI</span>
                        <span className="value">{product.mfi}</span>
                      </div>
                      <div className="spec">
                        <span className="label">Density</span>
                        <span className="value">{product.density}</span>
                      </div>
                      <div className="spec">
                        <span className="label">HDT</span>
                        <span className="value">{product.hdt}</span>
                      </div>
                    </div>

                    <div className="primary-use">
                      <span className="label">PRIMARY USE:</span>
                      <span className="value">{product.applications[0]}</span>
                    </div>

                    <div className="actions">
                      <Link href={`/products/${product.slug}`} className="btn-link">View Details</Link>
                      <a href="/Fenetra-Industries-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-link secondary">Download Datasheet</a>
                      <Link href={`/contact?product=${product.slug}`} className="btn-link accent">Request Quote</Link>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <section className="quality-callout">
        <div className="container">
          <div className="spec-plate-section">
            <h2>Our Quality Commitment</h2>
            <div className="commitments">
              <div className="item">
                <span className="check" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--cobalt)' }}><Check size={20} strokeWidth={2.5} /></span>
                <span>Consistent Melt Flow Index (MFI)</span>
              </div>
              <div className="item">
                <span className="check" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--cobalt)' }}><Check size={20} strokeWidth={2.5} /></span>
                <span>High Purity & Cleanliness</span>
              </div>
              <div className="item">
                <span className="check" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--cobalt)' }}><Check size={20} strokeWidth={2.5} /></span>
                <span>Custom Colour Matching Available</span>
              </div>
              <div className="item">
                <span className="check" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--cobalt)' }}><Check size={20} strokeWidth={2.5} /></span>
                <span>Rigorous Batch Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Grade?</h2>
            <p>Our team can engineer specific properties to meet your exact manufacturing requirements.</p>
            <Link href="/contact" className="btn btn-primary">Contact Technical Sales</Link>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background-color: var(--color-navy, #0a192f);
          color: white;
          padding: 80px 0;
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .page-hero h1 {
          font-size: 3rem;
          margin: 0 0 16px;
        }
        .subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .products-grid-section {
          padding: 80px 0;
          background-color: #f9fafb;
        }
        .product-marquee-container {
          margin: 0 -1.5rem;
          padding: 1rem 0;
        }
        .marquee-card {
          margin: 0 16px;
          width: 350px;
        }
        .product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border, #e5e7eb);
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border-color: var(--color-cobalt, #1d4ed8);
        }
        .card-image {
          position: relative;
          height: 220px;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .type-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 6px 12px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 10;
        }
        .type-badge.virgin {
          background-color: var(--color-cobalt, #1d4ed8);
          color: white;
        }
        .type-badge.reprocessed {
          background-color: var(--color-green, #10b981);
          color: white;
        }
        
        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-content h3 {
          margin: 0 0 4px;
          font-size: 1.5rem;
          color: var(--color-navy, #0a192f);
        }
        .full-name {
          font-size: 0.875rem;
          color: var(--color-text-body, #4b5563);
          margin-bottom: 16px;
        }
        
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .tag {
          background-color: #f3f4f6;
          color: #374151;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .spec-plate-mini {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          padding: 12px;
          margin-bottom: 20px;
        }
        .spec {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-right: 1px solid #e2e8f0;
        }
        .spec:last-child {
          border-right: none;
        }
        .spec .label {
          font-size: 0.625rem;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .spec .value {
          font-family: var(--font-mono, monospace);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-navy, #0a192f);
        }

        .primary-use {
          font-family: var(--font-mono, monospace);
          font-size: 0.875rem;
          margin-bottom: 24px;
          background-color: #eff6ff;
          padding: 8px 12px;
          border-radius: 4px;
          color: #1e3a8a;
        }
        .primary-use .label {
          font-weight: 700;
          margin-right: 8px;
        }

        .actions {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .btn-link {
          display: block;
          text-align: center;
          padding: 10px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.2s;
          border: 1px solid var(--color-cobalt, #1d4ed8);
          color: var(--color-cobalt, #1d4ed8);
        }
        .btn-link:hover {
          background-color: #eff6ff;
        }
        .btn-link.secondary {
          border-color: #d1d5db;
          color: #4b5563;
        }
        .btn-link.secondary:hover {
          background-color: #f3f4f6;
          border-color: #9ca3af;
        }
        .btn-link.accent {
          background-color: var(--color-amber, #ffb703);
          border-color: var(--color-amber, #ffb703);
          color: var(--color-navy, #0a192f);
        }
        .btn-link.accent:hover {
          background-color: #e5a400;
        }

        .quality-callout {
          padding: 80px 0;
          background-color: white;
        }
        .spec-plate-section {
          background-color: var(--color-navy, #0a192f);
          color: white;
          padding: 48px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-left: 8px solid var(--color-amber, #ffb703);
        }
        .spec-plate-section h2 {
          font-size: 2rem;
          margin: 0;
        }
        .commitments {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .commitments .item {
          display: flex;
          align-items: center;
          font-size: 1.125rem;
        }
        .check {
          color: var(--color-amber, #ffb703);
          font-weight: bold;
          margin-right: 12px;
          font-size: 1.25rem;
        }

        .cta-band {
          background-color: #f3f4f6;
          padding: 60px 0;
          text-align: center;
        }
        .cta-content h2 {
          font-size: 2rem;
          color: var(--color-navy, #0a192f);
          margin: 0 0 16px;
        }
        .cta-content p {
          font-size: 1.125rem;
          color: var(--color-text-body, #4b5563);
          margin: 0 auto 32px;
          max-width: 600px;
        }
        .btn {
          display: inline-block;
          padding: 14px 28px;
          font-weight: 600;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .btn-primary {
          background-color: var(--color-cobalt, #1d4ed8);
          color: white;
        }
        .btn-primary:hover {
          background-color: #1e40af;
        }

        @media (max-width: 900px) {
          .spec-plate-section {
            flex-direction: column;
            text-align: center;
            gap: 32px;
          }
          .commitments {
            text-align: left;
          }
        }
        @media (max-width: 600px) {
          .commitments {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
