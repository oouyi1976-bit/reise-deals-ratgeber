import type { APIRoute } from 'astro';
import { SITE, sitemapPages } from '../data/site';

export const GET: APIRoute = () => {
	const urls = sitemapPages
		.map(
			(page) => `
	<url>
		<loc>${new URL(page.href, SITE.url).toString()}</loc>
		<changefreq>weekly</changefreq>
		<priority>${page.priority}</priority>
	</url>`
		)
		.join('');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};
