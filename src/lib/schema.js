export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fenetra Industries',
    description: 'Leading manufacturer and trader of virgin and reprocessed plastic polymer granules — PP, ABS, PC, PPCP, RP-PPCP, PP-B120MA. Reliance Authorized Distributor.',
    url: 'https://fenetraindustries.com',
    logo: 'https://fenetraindustries.com/images/logo.jpg',
    email: 'fenetraindustries@gmail.com',
    telephone: '+919566326131',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 158, BVL Blossom, Next to Sathyam Grand Hotel, Chennai–Bangalore Highway',
      addressLocality: 'Sriperumbudur',
      addressRegion: 'Tamil Nadu',
      postalCode: '602105',
      addressCountry: 'IN',
    },
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919566326131',
      contactType: 'sales',
      availableLanguage: ['English', 'Tamil', 'Hindi'],
    },
  };
}

export function getLocalBusinessSchema(branch = 1) {
  const branches = {
    1: {
      name: 'Fenetra Industries - Head Office',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 158, BVL Blossom, Next to Sathyam Grand Hotel, Chennai–Bangalore Highway',
        addressLocality: 'Sriperumbudur',
        addressRegion: 'Tamil Nadu',
        postalCode: '602105',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9696',
        longitude: '79.9424',
      },
    },
    2: {
      name: 'Fenetra Industries - Branch Office',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No. 10, Thiru Nagar, Mannur–Aranvoyal Road, Mannur Village',
        addressLocality: 'Sriperumbudur',
        addressRegion: 'Tamil Nadu',
        postalCode: '602105',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9700',
        longitude: '79.9430',
      },
    },
  };

  const b = branches[branch];
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://fenetraindustries.com/#branch${branch}`,
    name: b.name,
    image: 'https://fenetraindustries.com/images/logo.jpg',
    telephone: '+919566326131',
    email: 'fenetraindustries@gmail.com',
    url: 'https://fenetraindustries.com',
    address: b.address,
    geo: b.geo,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
  };
}

export function getProductSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.name} - ${product.fullName}`,
    description: product.shortDesc,
    image: `https://fenetraindustries.com${product.image}`,
    brand: {
      '@type': 'Brand',
      name: 'Fenetra Industries',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Fenetra Industries',
    },
    category: 'Polymer Granules',
    material: product.fullName,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: 'Fenetra Industries',
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Melt Flow Index',
        value: product.mfi,
      },
      {
        '@type': 'PropertyValue',
        name: 'Density',
        value: product.density,
      },
      {
        '@type': 'PropertyValue',
        name: 'Heat Deflection Temperature',
        value: product.hdt,
      },
    ],
  };
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `https://fenetraindustries.com${item.url}` : undefined,
    })),
  };
}
