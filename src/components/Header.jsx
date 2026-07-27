'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container">
          <a href="tel:+919566326131">+91 95663 26131</a>
          <a href="mailto:fenetraindustries@gmail.com">fenetraindustries@gmail.com</a>
        </div>
      </div>
      
      <div className="main-bar">
        <Link href="/" onClick={closeMobileMenu} className="logo-container">
          <Image src="/images/logo-transparent.png" width={180} height={48} className="nav-logo" alt="Fenetra Industries" priority={true} />
        </Link>
        
        <nav className="nav">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          <div className="products-dropdown">
            <Link href="/products" className={`nav-link ${pathname.startsWith('/products') ? 'active' : ''}`}>Products</Link>
            <div className="dropdown-menu">
              <Link href="/products/pp" className="dropdown-item">
                <span>PP (Polypropylene)</span>
                <span className="dropdown-code">PP</span>
              </Link>
              <Link href="/products/abs-pc" className="dropdown-item">
                <span>ABS & PC</span>
                <span className="dropdown-code">ABS/PC</span>
              </Link>
              <Link href="/products/ppcp" className="dropdown-item">
                <span>PPCP</span>
                <span className="dropdown-code">PPCP</span>
              </Link>
              <Link href="/products/rp-ppcp" className="dropdown-item">
                <span>RP-PPCP</span>
                <span className="dropdown-code">RP</span>
              </Link>
              <Link href="/products/pp-b120ma" className="dropdown-item">
                <span>PP-B120MA</span>
                <span className="dropdown-code">B120</span>
              </Link>
            </div>
          </div>
          <Link href="/industries" className={`nav-link ${pathname === '/industries' ? 'active' : ''}`}>Industries</Link>
          <Link href="/quality" className={`nav-link ${pathname === '/quality' ? 'active' : ''}`}>Quality</Link>
          <Link href="/suppliers" className={`nav-link ${pathname === '/suppliers' ? 'active' : ''}`}>Suppliers</Link>
          <Link href="/clients" className={`nav-link ${pathname === '/clients' ? 'active' : ''}`}>Clients</Link>
          <Link href="/blog" className={`nav-link ${pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
          <Link href="/locations" className={`nav-link ${pathname === '/locations' ? 'active' : ''}`}>Locations</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </nav>

        <div className="actions">
          <Link href="/contact" className="btn btn--primary btn--small">Request Quote</Link>
          <button 
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="mobile-link" onClick={closeMobileMenu}>Home</Link>
        <Link href="/about" className="mobile-link" onClick={closeMobileMenu}>About</Link>
        <div className="mobile-link">
          Products
          <div className="mobile-products">
            <Link href="/products/pp" onClick={closeMobileMenu}>PP (Polypropylene)</Link>
            <Link href="/products/abs-pc" onClick={closeMobileMenu}>ABS & PC</Link>
            <Link href="/products/ppcp" onClick={closeMobileMenu}>PPCP</Link>
            <Link href="/products/rp-ppcp" onClick={closeMobileMenu}>RP-PPCP</Link>
            <Link href="/products/pp-b120ma" onClick={closeMobileMenu}>PP-B120MA</Link>
          </div>
        </div>
        <Link href="/industries" className="mobile-link" onClick={closeMobileMenu}>Industries</Link>
        <Link href="/quality" className="mobile-link" onClick={closeMobileMenu}>Quality</Link>
        <Link href="/suppliers" className="mobile-link" onClick={closeMobileMenu}>Suppliers</Link>
        <Link href="/clients" className="mobile-link" onClick={closeMobileMenu}>Clients</Link>
        <Link href="/blog" className="mobile-link" onClick={closeMobileMenu}>Blog</Link>
        <Link href="/locations" className="mobile-link" onClick={closeMobileMenu}>Locations</Link>
        <Link href="/contact" className="mobile-link" onClick={closeMobileMenu}>Contact</Link>
      </div>

      <style jsx>{`
        .header { position: sticky; top: 0; z-index: 1000; background: white; transition: all 0.3s ease; }
        .header.scrolled { background: rgba(255,255,255,0.97); backdrop-filter: blur(12px); box-shadow: 0 1px 8px rgba(0,0,0,0.06); }
        .top-bar { background: var(--navy); color: white; padding: 0.5rem 0; font-size: 0.8125rem; font-family: var(--font-mono); }
        .top-bar .container { display: flex; justify-content: flex-end; gap: 2rem; align-items: center; padding: 0 1.5rem; max-width: 1280px; margin: 0 auto; }
        .top-bar a { color: rgba(255,255,255,0.8); text-decoration: none; }
        .top-bar a:hover { color: white; }
        .main-bar { max-width: 1280px; margin: 0 auto; padding: 0.875rem 1.5rem; display: flex; align-items: center; justify-content: space-between; }
        .logo-container { display: flex; align-items: center; }
        .nav-logo { object-fit: contain; }
        .nav { display: flex; align-items: center; gap: 1.5rem; }
        .nav-link { color: var(--graphite); font-weight: 500; font-size: 0.9375rem; position: relative; padding: 0.5rem 0; transition: color 0.3s; text-decoration: none; }
        .nav-link:hover, .nav-link.active { color: var(--cobalt); }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--cobalt); transition: width 0.3s; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .products-dropdown { position: relative; }
        .dropdown-menu { position: absolute; top: calc(100% + 8px); left: -1rem; background: white; border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,0.12); padding: 0.75rem 0; min-width: 260px; opacity: 0; visibility: hidden; transform: translateY(8px); transition: all 0.3s ease; z-index: 100; }
        .products-dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateY(0); }
        .dropdown-item { display: flex; align-items: center; padding: 0.625rem 1.25rem; color: var(--graphite); font-size: 0.9rem; transition: all 0.2s; gap: 0.75rem; text-decoration: none; justify-content: space-between; }
        .dropdown-item:hover { background: rgba(30,111,217,0.05); color: var(--cobalt); }
        .dropdown-code { font-family: var(--font-mono); font-size: 0.75rem; color: var(--cobalt); opacity: 0.7; background: rgba(30,111,217,0.1); padding: 0.125rem 0.5rem; border-radius: 4px; }
        .actions { display: flex; align-items: center; gap: 1rem; }
        .hamburger { display: none; background: none; border: none; width: 28px; height: 20px; position: relative; cursor: pointer; z-index: 1001; }
        .hamburger span { display: block; width: 100%; height: 2px; background: var(--navy); position: absolute; left: 0; transition: all 0.3s; }
        .hamburger span:nth-child(1) { top: 0; }
        .hamburger span:nth-child(2) { top: 50%; transform: translateY(-50%); }
        .hamburger span:nth-child(3) { bottom: 0; }
        .hamburger.open span:nth-child(1) { top: 50%; transform: rotate(45deg) translateY(-50%); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { bottom: 50%; transform: rotate(-45deg) translateY(50%); }
        .mobile-menu { position: fixed; inset: 0; background: white; z-index: 999; padding: 5rem 2rem 2rem; display: flex; flex-direction: column; gap: 0; transform: translateX(100%); transition: transform 0.4s ease; overflow-y: auto; }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-link { font-size: 1.25rem; font-weight: 600; color: var(--navy); padding: 1rem 0; border-bottom: 1px solid var(--coolgrey); display: block; text-decoration: none; }
        .mobile-link:hover { color: var(--cobalt); }
        .mobile-products { padding-left: 1rem; margin-top: 0.5rem; display: flex; flex-direction: column; }
        .mobile-products a { font-size: 1rem; font-weight: 500; padding: 0.625rem 0; color: var(--graphite); display: block; text-decoration: none; border: none; }

        @media (max-width: 1024px) {
          .nav { display: none; }
          .hamburger { display: block; }
          .actions .btn { display: none; }
          .top-bar { display: none; }
        }
      `}</style>
    </header>
  );
}
