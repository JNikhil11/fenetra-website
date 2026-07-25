'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <Link href="/">
            <Image 
              src="/images/logo.jpg" 
              width={180} 
              height={48} 
              alt="Fenetra Industries" 
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <p className="footer-tagline">Excellence in Polymer Engineering</p>
          <p className="footer-about">
            A leading distributor and manufacturer of high-quality polymer granules, serving diverse industrial needs with precision and reliability.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/quality">Quality</Link></li>
            <li><Link href="/suppliers">Suppliers</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/locations">Locations</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Our Products</h4>
          <ul className="footer-links">
            <li><Link href="/products/pp">PP</Link></li>
            <li><Link href="/products/abs-pc">ABS & PC</Link></li>
            <li><Link href="/products/ppcp">PPCP</Link></li>
            <li><Link href="/products/rp-ppcp">RP-PPCP</Link></li>
            <li><Link href="/products/pp-b120ma">PP-B120MA</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <span><strong>Head Office:</strong><br />123 Industrial Area, Phase 1,<br />Mumbai, Maharashtra 400001</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <span><strong>Branch Office:</strong><br />456 GIDC Estate,<br />Ahmedabad, Gujarat 382445</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>
            <span>+91 95663 26131</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">✉️</span>
            <span>fenetraindustries@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Fenetra Industries. All rights reserved.
        </div>
        <div className="footer-badges">
          <span className="footer-badge footer-badge--iso">ISO 9001:2015</span>
          <span className="footer-badge footer-badge--distributor">Reliance Authorized Distributor</span>
        </div>
      </div>

      <style jsx>{`
        .footer { background: var(--navy); color: rgba(255,255,255,0.75); padding-top: 4rem; }
        .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.5fr; gap: 3rem; max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
        .footer-heading { color: white; font-family: var(--font-display); font-size: 1rem; font-weight: 600; margin-bottom: 1.5rem; position: relative; padding-bottom: 0.75rem; margin-top: 0; }
        .footer-heading::after { content: ''; position: absolute; bottom: 0; left: 0; width: 32px; height: 2px; background: var(--cobalt); }
        .footer-tagline { font-family: var(--font-mono); font-size: 0.8125rem; color: var(--amber); margin: 1rem 0; line-height: 1.6; font-style: italic; }
        .footer-about { font-size: 0.875rem; line-height: 1.7; color: rgba(255,255,255,0.6); }
        .footer-links { list-style: none; padding: 0; margin: 0; }
        .footer-links li { margin-bottom: 0.625rem; }
        .footer-links a { color: rgba(255,255,255,0.6); font-size: 0.9rem; transition: all 0.3s; position: relative; padding-left: 0; text-decoration: none; }
        .footer-links a:hover { color: var(--cobalt); padding-left: 4px; }
        .footer-contact-item { display: flex; gap: 0.75rem; margin-bottom: 1rem; font-size: 0.875rem; line-height: 1.6; }
        .footer-contact-icon { color: var(--cobalt); font-size: 1rem; flex-shrink: 0; margin-top: 2px; }
        .footer-divider { height: 1px; background: rgba(30,111,217,0.15); margin-top: 3rem; max-width: 1280px; margin-left: auto; margin-right: auto; }
        .footer-bottom { max-width: 1280px; margin: 0 auto; padding: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .footer-copyright { font-size: 0.8125rem; color: rgba(255,255,255,0.4); }
        .footer-badges { display: flex; gap: 1rem; align-items: center; }
        .footer-badge { font-size: 0.75rem; padding: 0.375rem 0.75rem; border-radius: 4px; font-family: var(--font-mono); font-weight: 500; }
        .footer-badge--iso { background: rgba(30,111,217,0.15); color: var(--cobalt); }
        .footer-badge--distributor { background: rgba(201,146,46,0.15); color: var(--amber); }

        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; text-align: center; } .footer-badges { justify-content: center; } }
      `}</style>
    </footer>
  );
}
