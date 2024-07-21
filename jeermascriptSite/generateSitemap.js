import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://jeermascriptagency.africa';

const pages = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.8' },
  { path: '/portfolio', priority: '0.8' },
  { path: '/contact', priority: '0.8' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>${page.priority}</priority>
    </url>
  `
    )
    .join('')}
</urlset>
`;

  fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();