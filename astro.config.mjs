import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    // Tambahkan ini biar Netlify nggak bingung nyari file statis vs dynamic route
    edgeMiddleware: false 
  }),
  integrations: [tailwind()],
});