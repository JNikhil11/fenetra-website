import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  return {
    title: product ? `${product.name} - ${product.fullName} | Fenetra Industries` : 'Product Not Found',
    description: product?.shortDesc || 'Product details',
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="hero-content">
            <div className="text-col">
              <div className="breadcrumb">
                <Link href="/">Home</Link>
                <span className="separator">/</span>
                <Link href="/products">Products</Link>
                <span className="separator">/</span>
                <span className="current">{product.name}</span>
              </div>
              <span className="overline">{product.type} POLYMER</span>
              <h1>{product.name}</h1>
              <h2 className="full-name">{product.fullName}</h2>
              <p className="short-desc">{product.shortDesc}</p>
              
              <div className="tags">
                {product.properties.map(prop => (
                  <span key={prop} className="tag">{prop}</span>
                ))}
              </div>

              <div className="hero-actions">
                <Link href={`/contact?product=${product.slug}`} className="btn btn-primary">Request Quote</Link>
                <a href="#" className="btn btn-outline">Download Datasheet</a>
              </div>
            </div>
            
            <div className="image-col">
              <div className="image-wrap">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={600} 
                  height={500} 
                  className="main-img"
                  priority
                />
                <div className={`type-badge ${product.type.toLowerCase()}`}>
                  {product.type} Grade
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-specs-section">
        <div className="container">
          <h2>Technical Specifications</h2>
          <div className="spec-plate">
            <div className="spec-header">
              <div className="brand-logo">FENETRA LAB DATA</div>
              <div className="grade-id">GRADE: {product.name}</div>
            </div>
            <div className="spec-grid">
              <div className="spec-row">
                <div className="spec-label">Melt Flow Index (MFI)</div>
                <div className="spec-value mono">{product.mfi}</div>
              </div>
              <div className="spec-row">
                <div className="spec-label">Density</div>
                <div className="spec-value mono">{product.density}</div>
              </div>
              <div className="spec-row">
                <div className="spec-label">Heat Deflection Temp (HDT)</div>
                <div className="spec-value mono">{product.hdt}</div>
              </div>
              <div className="spec-row">
                <div className="spec-label">Tensile Strength</div>
                <div className="spec-value mono">{product.tensile}</div>
              </div>
              <div className="spec-row">
                <div className="spec-label">Material Type</div>
                <div className="spec-value mono">{product.type}</div>
              </div>
            </div>
            <div className="spec-footer">
              * Values shown are typical and should not be construed as specifications.
            </div>
          </div>
        </div>
      </section>

      <section className="details-section">
        <div className="container">
          <div className="two-col">
            <div className="description">
              <h2>Product Description</h2>
              <div className="desc-content">
                {product.description.split('\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              
              <h3 className="suppliers-title">Available From Suppliers:</h3>
              <div className="suppliers-list">
                {product.suppliers.map(supplier => (
                  <span key={supplier} className="supplier-tag">{supplier}</span>
                ))}
              </div>
            </div>
            
            <div className="applications">
              <h2>Key Applications</h2>
              <ul className="app-list">
                {product.applications.map((app, idx) => (
                  <li key={idx}>
                    <span className="check">✓</span>
                    {app}
                  </li>
                ))}
              </ul>

              <div className="industries-box">
                <h3>Related Industries</h3>
                <div className="ind-tags">
                  {product.industries.map(ind => (
                    <span key={ind} className="ind-tag">{ind}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to place an order?</h2>
            <p>Contact our sales team for current pricing and availability of {product.name}.</p>
            <Link href={`/contact?product=${product.slug}`} className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>

      <style>{`
        .product-hero {
          background-color: var(--navy);
          color: white;
          padding: 60px 0 100px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .breadcrumb {
          font-family: var(--font-mono, monospace);
          font-size: 0.875rem;
          margin-bottom: 24px;
          color: rgba(255, 255, 255, 0.7);
        }
        .breadcrumb a {
          color: white;
          text-decoration: none;
        }
        .breadcrumb a:hover {
          color: var(--amber);
        }
        .separator {
          margin: 0 8px;
        }
        
        .overline {
          display: inline-block;
          color: var(--amber);
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 16px;
          font-size: 0.875rem;
          border: 1px solid var(--amber);
          padding: 4px 12px;
          border-radius: 4px;
        }
        
        .product-hero h1 {
          font-size: 3.5rem;
          margin: 0 0 8px;
          line-height: 1.1;
        }
        .full-name {
          font-size: 1.5rem;
          color: #94a3b8;
          font-weight: 400;
          margin: 0 0 24px;
        }
        .short-desc {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #cbd5e1;
          margin-bottom: 32px;
          max-width: 500px;
        }
        
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }
        .tag {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hero-actions {
          display: flex;
          gap: 16px;
        }
        .btn {
          display: inline-block;
          padding: 14px 28px;
          font-weight: 600;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.2s;
          text-align: center;
        }
        .btn-primary {
          background-color: var(--amber);
          color: var(--navy);
          border: 2px solid var(--amber);
        }
        .btn-primary:hover {
          background-color: #e5a400;
          border-color: #e5a400;
        }
        .btn-outline {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }
        .btn-outline:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .image-wrap {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .main-img {
          width: 100%;
          height: auto;
          display: block;
        }
        .type-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 10;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .type-badge.virgin {
          background-color: var(--cobalt);
          color: white;
        }
        .type-badge.reprocessed {
          background-color: var(--cobalt);
          color: white;
        }

        .tech-specs-section {
          padding: 80px 0;
          background-color: #f8fafc;
          margin-top: -60px;
          position: relative;
          z-index: 10;
          border-radius: 24px 24px 0 0;
        }
        .tech-specs-section h2 {
          text-align: center;
          font-size: 2.5rem;
          color: var(--navy);
          margin-bottom: 40px;
        }
        
        .spec-plate {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border: 2px solid #cbd5e1;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        .spec-header {
          background-color: #f1f5f9;
          padding: 20px 24px;
          border-bottom: 2px solid #cbd5e1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand-logo {
          font-family: var(--font-mono, monospace);
          font-weight: 700;
          color: #64748b;
          letter-spacing: 2px;
        }
        .grade-id {
          font-weight: 700;
          color: var(--navy);
          font-size: 1.125rem;
        }
        .spec-row {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          padding: 16px 24px;
        }
        .spec-row:last-child {
          border-bottom: none;
        }
        .spec-label {
          flex: 1;
          font-weight: 600;
          color: #475569;
        }
        .spec-value {
          flex: 1;
          font-weight: 700;
          color: var(--navy);
        }
        .mono {
          font-family: var(--font-mono, monospace);
        }
        .spec-footer {
          background-color: #f8fafc;
          padding: 12px 24px;
          font-size: 0.75rem;
          color: #94a3b8;
          border-top: 1px solid #e2e8f0;
          text-align: right;
        }

        .details-section {
          padding: 80px 0;
          background-color: white;
        }
        .two-col {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
        }
        .details-section h2 {
          font-size: 2rem;
          color: var(--navy);
          margin-bottom: 24px;
        }
        .desc-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--graphite);
          margin-bottom: 20px;
        }
        
        .suppliers-title {
          font-size: 1.25rem;
          margin: 40px 0 16px;
          color: var(--navy);
        }
        .suppliers-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .supplier-tag {
          background-color: #f1f5f9;
          color: #334155;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.875rem;
          border: 1px solid #cbd5e1;
        }

        .applications {
          background-color: #f8fafc;
          padding: 32px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          height: fit-content;
        }
        .app-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px;
        }
        .app-list li {
          font-size: 1.125rem;
          color: #334155;
          margin-bottom: 16px;
          display: flex;
          align-items: flex-start;
        }
        .app-list .check {
          color: var(--cobalt);
          font-weight: bold;
          margin-right: 12px;
          margin-top: 2px;
        }
        
        .industries-box h3 {
          font-size: 1.25rem;
          color: var(--navy);
          margin-bottom: 16px;
          padding-top: 32px;
          border-top: 1px solid #cbd5e1;
        }
        .ind-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .ind-tag {
          background-color: var(--cobalt);
          color: white;
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .cta-band {
          background-color: var(--cobalt);
          padding: 60px 0;
          text-align: center;
          color: white;
        }
        .cta-content h2 {
          font-size: 2.25rem;
          margin: 0 0 16px;
        }
        .cta-content p {
          font-size: 1.25rem;
          margin: 0 auto 32px;
          opacity: 0.9;
          max-width: 600px;
        }

        @media (max-width: 900px) {
          .hero-content, .two-col {
            grid-template-columns: 1fr;
          }
          .image-col {
            order: -1;
          }
          .product-hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
