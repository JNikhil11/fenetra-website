'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { industries } from '@/data/industries';

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="hero">
        <video 
          className="hero-video-bg"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-overline">RELIANCE AUTHORIZED DISTRIBUTOR</div>
            <h1>
              Premium Raw Material Supplier
              <span>Plastic & Polymer Granules</span>
            </h1>
            <p className="hero-tagline">
              Quality Polymers. Sustainable Solutions. Trusted Partnerships.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn--amber btn--large">Request a Quotation</Link>
              <a href="/Fenetra-Industries-Brochure.pdf" download className="btn btn--ghost btn--large">Download Brochure</a>
            </div>
          </div>
          <div className="hero-spec">
            <div className="spec-plate">
              <div className="spec-row">
                <span className="spec-label">GRADE</span>
                <span className="spec-value">PP-B120MA</span>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-row">
                <span className="spec-label">MFI</span>
                <span className="spec-value">20-30 g/10min</span>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-row">
                <span className="spec-label">DENSITY</span>
                <span className="spec-value">0.90-0.91 g/cm³</span>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-row">
                <span className="spec-label">TYPE</span>
                <span className="spec-value">Virgin</span>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-row">
                <span className="spec-label">APPLICATION</span>
                <span className="spec-value">Injection Moulding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS STRIP */}
      <section className="stats-strip section--dark">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-block">
              <div className="stat-number font-display" data-verify="true">8+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-block">
              <div className="stat-number font-display">200+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-block">
              <div className="stat-number font-display">5+</div>
              <div className="stat-label">Product Grades</div>
            </div>
            <div className="stat-block">
              <div className="stat-number font-display">98%</div>
              <div className="stat-label">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO WE ARE */}
      <section className="who-we-are section--white">
        <div className="container">
          <div className="two-col">
            <div className="col-text">
              <div className="section-overline">WHO WE ARE</div>
              <h2>Leading Distributor of Virgin & Reprocessed Polymer Granules</h2>
              <p>
                Fenetra Industries is a trusted partner for manufacturing companies across India, providing high-quality polymer raw materials that power essential industries. We bridge the gap between global petrochemical giants and local manufacturers.
              </p>
              <div className="vision-mission">
                <div className="vm-block">
                  <h3>Our Vision</h3>
                  <p>To be India's most reliable and customer-centric polymer distribution network.</p>
                </div>
                <div className="vm-block">
                  <h3>Our Mission</h3>
                  <p>Delivering consistent quality, competitive pricing, and unparalleled technical support to empower manufacturers.</p>
                </div>
              </div>
              <Link href="/about" className="link-arrow">Learn More &rarr;</Link>
            </div>
            <div className="col-image">
              <div className="image-wrapper rounded-corner">
                <Image src="/images/products/pp.jpg" alt="Polymer Pellets" width={600} height={400} className="rounded-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT RANGE */}
      <section className="product-range section--grey">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-overline">OUR PRODUCTS</div>
            <h2>Industrial-Grade Polymer Granules</h2>
          </div>
          <div className="product-grid">
            {products.slice(0, 5).map(product => (
              <div className="card product-card" key={product.slug}>
                <div className="card-image-wrap">
                  <Image src={product.image} alt={product.name} width={400} height={250} className="card-image" />
                </div>
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p className="full-name">{product.fullName}</p>
                  <div className="tags">
                    {product.properties.slice(0, 2).map((prop, i) => (
                      <span key={i} className="tag">{prop}</span>
                    ))}
                  </div>
                  <div className="primary-use">Use: {product.primaryUse}</div>
                  <div className="card-actions">
                    <Link href={`/products/${product.slug}`} className="btn btn--outline btn--small">View Spec Sheet</Link>
                    <Link href={`/contact?product=${product.slug}`} className="btn btn--amber btn--small">Request Quote</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY FENETRA */}
      <section className="why-fenetra section--white">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-overline">WHY CHOOSE US</div>
            <h2>The Fenetra Advantage</h2>
          </div>
          <div className="advantage-grid">
            <div className="advantage-card">
              <div className="icon-circle">🔄</div>
              <h3>Batch-to-Batch Uniformity</h3>
              <p>Consistent quality control ensures your manufacturing process remains stable and uninterrupted, reducing rejection rates.</p>
            </div>
            <div className="advantage-card">
              <div className="icon-circle">💰</div>
              <h3>Competitive Wholesale Pricing</h3>
              <p>Direct sourcing from manufacturers allows us to provide the best market rates for premium polymer grades.</p>
            </div>
            <div className="advantage-card">
              <div className="icon-circle">👨‍🔬</div>
              <h3>Dedicated Technical Support</h3>
              <p>Our material experts help you select the exact grade and specifications needed for your specific moulding applications.</p>
            </div>
            <div className="advantage-card">
              <div className="icon-circle">🚚</div>
              <h3>On-Time Delivery</h3>
              <p>With our own transport fleet and strategic warehousing, we guarantee prompt delivery to keep your production lines running.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SUPPLIER TRUST STRIP */}
      <section className="supplier-strip section--white">
        <div className="container">
          <div className="trust-header text-center">
            <div className="section-overline">TRUSTED BY INDIA'S LEADING MANUFACTURERS</div>
            <h2>Our Supply Partners</h2>
          </div>
          <div className="trust-strip">
            <div className="trust-strip__text">
              <span className="partner-name">Reliance</span>
              <span className="partner-badge">Authorized Distributor</span>
            </div>
            <div className="trust-strip__text">Indian Oil Corporation</div>
            <div className="trust-strip__text">Kingfa</div>
            <div className="trust-strip__text">Loxim</div>
            <div className="trust-strip__text">LG</div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLIENT TRUST STRIP */}
      <section className="client-strip section--white">
        <div className="container">
          <div className="trust-strip client-strip-inner">
            <div className="trust-strip__text">Alpha Industries</div>
            <div className="trust-strip__text">Aultra Polymers</div>
            <div className="trust-strip__text">Vikas Polymers</div>
            <div className="trust-strip__text highlight">+ OEM & Tier-1 Partners</div>
          </div>
        </div>
      </section>

      {/* SECTION 8: INDUSTRIES SERVED */}
      <section className="industries-served section--grey">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-overline">INDUSTRIES WE SERVE</div>
            <h2>Powering India's Manufacturing</h2>
          </div>
          <div className="industry-grid">
            {industries.map(ind => (
              <div className="industry-card" key={ind.slug}>
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.name}</h3>
                <p>{ind.description}</p>
                <div className="recommended-grades">
                  <strong>Recommended:</strong>
                  <div className="tags">
                    {ind.grades.map(g => <span key={g} className="tag tag--small">{g}</span>)}
                  </div>
                </div>
                <Link href="/industries" className="link-arrow">Learn More &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: QUALITY TEASER */}
      <section className="quality-teaser section--white">
        <div className="container">
          <div className="two-col quality-col">
            <div className="col-text">
              <div className="iso-badge">ISO 9001:2015 CERTIFIED</div>
              <h2>Uncompromising Quality Standards</h2>
              <p>We understand that raw material consistency is critical to your product's success. Our rigorous quality assurance protocol guarantees:</p>
              <ul className="quality-list">
                <li>Strict MFI consistency across all batches</li>
                <li>Zero contamination guarantee for virgin grades</li>
                <li>Custom colour matching with precise delta-E tolerance</li>
                <li>Moisture and density verification prior to dispatch</li>
              </ul>
              <Link href="/quality" className="btn btn--outline mt-4">View Quality Standards</Link>
            </div>
            <div className="col-image">
              <div className="image-wrapper rounded-corner">
                <Image src="/images/quality/lab-equipment.jpg" alt="Quality Lab Equipment" width={600} height={500} className="rounded-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: BLOG PREVIEW */}
      <section className="blog-preview section--grey">
        <div className="container">
          <div className="section-header">
            <h2>Latest Insights</h2>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-date">Oct 15, 2026</div>
              <h3>Understanding Melt Flow Index and Why It Matters</h3>
              <p>Learn how MFI affects processability and the final mechanical properties of your moulded products.</p>
              <Link href="#" className="link-arrow">Read More &rarr;</Link>
            </div>
            <div className="blog-card">
              <div className="blog-date">Sep 28, 2026</div>
              <h3>Virgin vs. Reprocessed PPCP: How to Choose</h3>
              <p>A comprehensive guide to selecting the right polymer grade based on application requirements and cost constraints.</p>
              <Link href="#" className="link-arrow">Read More &rarr;</Link>
            </div>
            <div className="blog-card">
              <div className="blog-date">Sep 10, 2026</div>
              <h3>The Circular Economy in Indian Plastics Manufacturing</h3>
              <p>Exploring the growing role of high-quality reprocessed materials in sustainable manufacturing practices.</p>
              <Link href="#" className="link-arrow">Read More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: CLOSING CTA BAND */}
      <section className="cta-band">
        <div className="container text-center">
          <h2>Ready to Source Premium Polymer Granules?</h2>
          <p className="cta-subtitle">Get a quote within 24 hours. Our team is ready to help.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn--white btn--large">Request a Quotation</Link>
            <a href="/Fenetra-Industries-Brochure.pdf" download className="btn btn--ghost btn--large">Download Brochure</a>
            <a href="tel:+919566326131" className="btn btn--ghost btn--large">Call +91 95663 26131</a>
          </div>
        </div>
      </section>

      <style>{`
        /* Global Section Styles */
        section {
          padding: 5rem 0;
        }
        
        .section--white { background-color: #ffffff; }
        .section--grey { background-color: var(--offwhite); }
        .section--dark { background-color: var(--navy); color: white; }
        
        .section-header { margin-bottom: 3.5rem; }
        .text-center { text-align: center; }
        .section-overline {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--cobalt);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        h2 { font-size: 2.25rem; color: var(--navy); margin-bottom: 1.5rem; }
        .section--dark h2 { color: white; }
        .mt-4 { margin-top: 1.5rem; }

        /* Buttons & Links */
        
        .btn--large { padding: 1rem 2rem; font-size: 1.125rem; }
        .btn--small { padding: 0.5rem 1rem; font-size: 0.875rem; }
        .btn--amber { background: var(--amber); color: #fff; border: 1px solid var(--amber); }
        .btn--amber:hover { background: #d97706; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2); }
        .btn--ghost { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); }
        .btn--ghost:hover { background: rgba(255,255,255,0.1); border-color: white; }
        .btn--outline { background: transparent; color: var(--navy); border: 1px solid var(--navy); }
        .btn--outline:hover { background: var(--navy); color: white; }
        .btn--white { background: white; color: var(--cobalt); }
        .btn--white:hover { background: #f8fafc; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        
        .link-arrow {
          display: inline-block;
          color: var(--cobalt);
          font-weight: 600;
          text-decoration: none;
          margin-top: 1rem;
          transition: color 0.2s ease;
        }
        .link-arrow:hover { color: var(--navy); }

        /* Section 1: Hero */
        .hero { 
          background: var(--navy); 
          color: white; 
          padding: 5rem 0 4rem; 
          position: relative; 
          overflow: hidden; 
          min-height: 600px; 
          display: flex; 
          align-items: center; 
        }
        .hero-video-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translateX(-50%) translateY(-50%);
          z-index: 0;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(11, 36, 64, 0.65);
          z-index: 1;
        }
        .hero .container {
          position: relative;
          z-index: 2;
        }
        .hero::before { 
          content: ''; 
          position: absolute; 
          top: 0; 
          right: 0; 
          width: 50%; 
          height: 100%; 
          background: radial-gradient(circle at 70% 50%, rgba(37,99,235,0.15) 0%, transparent 60%); 
        }
        .hero 
        .hero-overline { 
          font-family: var(--font-mono); 
          font-size: 0.75rem; 
          text-transform: uppercase; 
          letter-spacing: 0.12em; 
          color: var(--amber); 
          margin-bottom: 1.5rem; 
          display: flex; 
          align-items: center; 
          gap: 0.75rem; 
        }
        .hero-overline::before { 
          content: ''; 
          width: 32px; 
          height: 2px; 
          background: var(--amber); 
        }
        .hero h1 { 
          font-size: clamp(2.5rem, 5vw, 3.75rem); 
          margin-bottom: 1.5rem; 
          color: white; 
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .hero h1 span { 
          color: var(--cobalt); 
          display: block; 
          margin-top: 0.5rem;
        }
        .hero-tagline { 
          font-size: 1.125rem; 
          color: rgba(255,255,255,0.7); 
          margin-bottom: 2.5rem; 
          max-width: 500px; 
          line-height: 1.7; 
        }
        .hero-actions { 
          display: flex; 
          gap: 1rem; 
          flex-wrap: wrap; 
        }
        .spec-plate {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }
        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          font-family: var(--font-mono);
          font-size: 0.875rem;
        }
        .spec-label { color: rgba(255,255,255,0.5); }
        .spec-value { color: white; font-weight: 500; text-align: right; }
        .spec-divider { height: 1px; background: rgba(255,255,255,0.1); }

        /* Section 2: Stats */
        .stats-strip { padding: 3rem 0; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }
        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--amber);
          margin-bottom: 0.5rem;
        }
        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Two Col Layouts */
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .col-text p {
          color: var(--grey-600);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }
        .vision-mission {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 2rem 0;
        }
        .vm-block h3 {
          font-size: 1.125rem;
          color: var(--navy);
          margin-bottom: 0.75rem;
          border-left: 3px solid var(--amber);
          padding-left: 0.75rem;
        }
        .vm-block p { font-size: 1rem; margin: 0; }
        .rounded-image {
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        /* Section 4: Products */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
        }
        .card-image-wrap { position: relative; height: 200px; width: 100%; }
        .card-image { object-fit: cover; width: 100%; height: 100%; }
        .card-content { padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; }
        .card-content h3 { font-size: 1.25rem; margin: 0 0 0.25rem 0; }
        .full-name { font-size: 0.875rem; color: var(--grey-500); margin-bottom: 1rem; }
        .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
        .tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background: var(--grey-100);
          color: var(--navy);
          border-radius: 4px;
          font-weight: 500;
        }
        .primary-use {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--cobalt);
          margin-bottom: 1.5rem;
        }
        .card-actions {
          margin-top: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        /* Section 5: Advantage */
        .advantage-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .advantage-card {
          text-align: center;
          padding: 2rem 1.5rem;
          background: var(--offwhite);
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .advantage-card:hover { background: white; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); }
        .icon-circle {
          width: 64px;
          height: 64px;
          background: rgba(37,99,235,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.5rem;
        }
        .advantage-card h3 { font-size: 1.125rem; margin-bottom: 1rem; color: var(--navy); }
        .advantage-card p { color: var(--grey-600); font-size: 0.9375rem; line-height: 1.6; margin: 0; }

        /* Trust Strips */
        .trust-strip {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 3rem;
        }
        .trust-strip__text {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--grey-300);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
        }
        .partner-name { color: var(--navy); }
        .partner-badge {
          font-size: 0.625rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          background: var(--amber);
          color: white;
          padding: 0.125rem 0.375rem;
          border-radius: 2px;
          margin-top: 0.375rem;
          letter-spacing: 0.05em;
        }
        .client-strip { padding: 3rem 0; border-top: 1px solid var(--grey-100); }
        .client-strip-inner .trust-strip__text { color: var(--grey-400); font-size: 1.25rem; }
        .client-strip-inner .highlight { color: var(--cobalt); font-size: 1rem; }

        /* Industries */
        .industry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .industry-card {
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        .industry-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .industry-card h3 { font-size: 1.5rem; margin-bottom: 1rem; }
        .industry-card p { color: var(--grey-600); line-height: 1.6; margin-bottom: 1.5rem; }
        .recommended-grades { margin-bottom: 1.5rem; }
        .recommended-grades strong { display: block; font-size: 0.875rem; color: var(--navy); margin-bottom: 0.5rem; }
        .tag--small { font-size: 0.6875rem; }

        /* Quality Teaser */
        .iso-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.375rem 0.75rem;
          background: rgba(37,99,235,0.1);
          color: var(--cobalt);
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }
        .quality-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0 2rem;
        }
        .quality-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--grey-600);
          line-height: 1.5;
        }
        .quality-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--cobalt);
          font-weight: bold;
        }

        /* Blog Preview */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .blog-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        .blog-date {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--grey-500);
          margin-bottom: 1rem;
        }
        .blog-card h3 { font-size: 1.25rem; margin-bottom: 1rem; line-height: 1.4; color: var(--navy); }
        .blog-card p { color: var(--grey-600); font-size: 0.9375rem; margin-bottom: 1.5rem; line-height: 1.6; }

        /* CTA Band */
        .cta-band {
          background: var(--cobalt);
          color: white;
          padding: 6rem 0;
        }
        .cta-band h2 { color: white; margin-bottom: 1rem; font-size: 2.5rem; }
        .cta-subtitle { font-size: 1.25rem; color: rgba(255,255,255,0.9); margin-bottom: 3rem; }
        .cta-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid, .advantage-grid { grid-template-columns: repeat(2, 1fr); }
          .industry-grid, .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .hero h1 { font-size: 3rem; }
        }
        
        @media (max-width: 768px) {
          .hero .container, .two-col { grid-template-columns: 1fr; gap: 3rem; }
          .hero-content { text-align: center; }
          .hero-overline { justify-content: center; }
          .hero-actions { justify-content: center; }
          .spec-plate { max-width: 500px; margin: 0 auto; }
          
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .industry-grid, .blog-grid, .advantage-grid { grid-template-columns: 1fr; }
          .vision-mission { grid-template-columns: 1fr; }
          .product-grid { grid-template-columns: 1fr; }
          .card-actions { grid-template-columns: 1fr; }
          
          .cta-actions { flex-direction: column; width: 100%; max-width: 300px; margin: 0 auto; }
          .cta-actions 
        }
        
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr; }
          .trust-strip { gap: 2rem; }
        }
      `}</style>
    </>
  );
}
