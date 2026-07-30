import Link from 'next/link';
import Image from 'next/image';
import { Target, Shield, Users, Trophy } from 'lucide-react';

export const metadata = {
  title: 'About Us | Fenetra Industries',
  description: 'Learn about Fenetra Industries, our mission, vision, and commitment to providing premium virgin and reprocessed polymer materials.',
};
export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">About Us</span>
          </div>
          <span className="overline">ABOUT US</span>
          <h1>Trusted Polymer Solutions Since Day One</h1>
        </div>
      </section>

      <section className="who-we-are">
        <div className="container">
          <div className="two-col">
            <div className="narrative">
              <h2>Who We Are</h2>
              <p>
                Fenetra Industries is a leading distributor and manufacturer of virgin and reprocessed plastic granules. 
                Based in the industrial hub of Sriperumbudur, Chennai region, we serve clients across all of India. 
                We are committed to delivering high-quality polymer materials for injection moulding, automotive, packaging, and consumer goods applications.
              </p>
            </div>
            <div className="image-wrap">
              <Image 
                src="/images/products/ppcp.jpg" 
                alt="Fenetra PPCP product" 
                width={600} 
                height={400} 
                className="product-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="vision-statement">
        <div className="container">
          <div className="pull-quote">
            <blockquote>
              &quot;To become a trusted and sustainable leader in the polymer industry by delivering high-quality recycled PPCP materials and reliable polymer solutions, creating value for customers while contributing to a greener future.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            <div className="spec-plate-item">
              <span className="icon">01</span>
              <p>Manufacture premium-quality PPCP reprocessed materials with consistent performance and reliability.</p>
            </div>
            <div className="spec-plate-item">
              <span className="icon">02</span>
              <p>Supply high-quality virgin polymers, including PP and ABS, from leading manufacturers such as Reliance, Kingfa, and IOC.</p>
            </div>
            <div className="spec-plate-item">
              <span className="icon">03</span>
              <p>Provide cost-effective, sustainable, customer-focused material solutions.</p>
            </div>
            <div className="spec-plate-item">
              <span className="icon">04</span>
              <p>Build long-term partnerships through quality, timely delivery, and technical support.</p>
            </div>
            <div className="spec-plate-item">
              <span className="icon">05</span>
              <p>Promote circular-economy practices by maximizing plastic recycling and reducing environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reliance-callout">
        <div className="container">
          <div className="highlight-box">
            <div className="badge">Reliance Authorized Distributor</div>
            <h3>Premium Virgin Polymers</h3>
            <p>
              As an authorized distributor for Reliance Industries, we provide direct access to premium grade virgin polymers. 
              Our customers benefit from consistent quality, competitive pricing, and reliable supply chains backed by India&apos;s largest manufacturer.
            </p>
          </div>
        </div>
      </section>

      <section className="our-reach">
        <div className="container">
          <h2>Our Reach</h2>
          <p>With 2 branches strategically located in Sriperumbudur, we efficiently serve manufacturing partners across all of India.</p>
          <Link href="/locations" className="text-link">View our locations &rarr;</Link>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Partner with Fenetra Industries</h2>
            <Link href="/contact" className="btn btn-primary">Request a Quotation</Link>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background-color: var(--navy);
          color: white;
          padding: 80px 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
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
          display: block;
          color: var(--amber);
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 12px;
          font-size: 0.875rem;
        }
        .page-hero h1 {
          font-size: 3rem;
          margin: 0;
          max-width: 800px;
          line-height: 1.2;
        }

        .who-we-are {
          padding: 80px 0;
          background-color: white;
        }
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .narrative h2 {
          color: var(--navy);
          font-size: 2.5rem;
          margin-bottom: 24px;
        }
        .narrative p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--graphite);
        }
        .product-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .vision-statement {
          background-color: #f3f4f6;
          padding: 100px 0;
          text-align: center;
        }
        .pull-quote blockquote {
          font-size: 1.75rem;
          line-height: 1.6;
          color: var(--navy);
          font-weight: 500;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .pull-quote blockquote::before {
          content: '"';
          position: absolute;
          top: -40px;
          left: -20px;
          font-size: 80px;
          color: var(--amber);
          opacity: 0.3;
          font-family: serif;
        }

        .mission-section {
          padding: 80px 0;
          background-color: white;
        }
        .mission-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 48px;
          color: var(--navy);
        }
        .mission-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .spec-plate-item {
          border: 1px solid var(--coolgrey);
          padding: 32px;
          background-color: #f9fafb;
          border-radius: 4px;
          display: flex;
          gap: 20px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .spec-plate-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          border-color: var(--amber);
        }
        .spec-plate-item .icon {
          font-family: var(--font-mono, monospace);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--amber);
        }
        .spec-plate-item p {
          margin: 0;
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--navy);
          font-weight: 500;
        }

        .reliance-callout {
          padding: 80px 0;
          background-color: white;
        }
        .highlight-box {
          border: 2px solid var(--amber);
          padding: 64px;
          border-radius: 8px;
          text-align: center;
          background: linear-gradient(to right, #fffdf5, white);
        }
        .highlight-box .badge {
          display: inline-block;
          background-color: var(--amber);
          color: var(--navy);
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 4px;
          margin-bottom: 24px;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .highlight-box h3 {
          font-size: 2rem;
          margin-bottom: 16px;
          color: var(--navy);
        }
        .highlight-box p {
          font-size: 1.125rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
          color: var(--graphite);
        }

        .our-reach {
          padding: 80px 0;
          background-color: #f9fafb;
          text-align: center;
        }
        .our-reach h2 {
          font-size: 2.5rem;
          margin-bottom: 24px;
          color: var(--navy);
        }
        .our-reach p {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 32px;
          color: var(--graphite);
        }
        .text-link {
          color: var(--cobalt);
          font-weight: 600;
          text-decoration: none;
        }
        .text-link:hover {
          text-decoration: underline;
        }

        .cta-band {
          background-color: var(--cobalt);
          padding: 60px 0;
          color: white;
        }
        .cta-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cta-content h2 {
          font-size: 2rem;
          margin: 0;
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
          background-color: var(--amber);
          color: var(--navy);
        }
        .btn-primary:hover {
          background-color: #e5a400;
        }

        @media (max-width: 768px) {
          .two-col, .cta-content {
            grid-template-columns: 1fr;
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
          .page-hero h1 {
            font-size: 2.25rem;
          }
          .pull-quote blockquote {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
