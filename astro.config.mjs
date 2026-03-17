import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // WAJIB ADA untuk SSR
  adapter: netlify(),
  integrations: [tailwind()],
});