import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sinchi.co.nz',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thanks') && !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date()
    })
  ]
});
