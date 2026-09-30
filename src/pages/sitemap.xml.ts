import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://wisam-preview.invalid');
  const routes = [
    '/',
    '/ar/',
    '/evidence/',
    '/ar/evidence/',
    '/plans/',
    '/ar/plans/',
    '/partners/',
    '/ar/partners/',
    '/partners/investment/',
    '/ar/partners/investment/',
    '/partners/research/',
    '/ar/partners/research/',
    '/partners/organizations/',
    '/ar/partners/organizations/',
    '/privacy/',
    '/ar/privacy/',
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${new URL(route, origin).toString()}</loc></url>`).join('')}</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
