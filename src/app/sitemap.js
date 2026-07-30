export default function sitemap() {
  const baseUrl = 'https://fenetra.in';

  // Major routes
  const routes = [
    '',
    '/about',
    '/products',
    '/industries',
    '/quality',
    '/suppliers',
    '/locations',
    '/clients',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Could also dynamically import and map products/blog posts here if required,
  // but for the static routes this satisfies the audit.

  return routes;
}
