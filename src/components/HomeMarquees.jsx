'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { products } from '@/data/products';
import { suppliers } from '@/data/suppliers';

export function FeaturedProductsMarquee() {
  return (
    <Marquee direction="right" pauseOnHover={true} speed={40} gradient={false}>
      {[...products.slice(0, 5), ...products.slice(0, 5)].map((product, idx) => (
        <div className="card product-card marquee-card" key={`${product.slug}-${idx}`}>
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
    </Marquee>
  );
}

export function SupplyPartnersMarquee() {
  return (
    <Marquee direction="left" pauseOnHover={true} speed={50} gradient={false} className="supplier-marquee">
      {[...suppliers, ...suppliers].map((sup, idx) => (
        <div key={`${sup.name}-${idx}`} className="supplier-marquee-card">
          {sup.domain && (
            <img 
              src={`https://logo.clearbit.com/${sup.domain}`} 
              alt={`${sup.shortName} Logo`} 
              className="supplier-logo" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <div className="supplier-name">
            {sup.name}
            {sup.badge && <span className="supplier-badge">{sup.badge}</span>}
          </div>
        </div>
      ))}
    </Marquee>
  );
}
