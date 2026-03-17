import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // WAJIB ADA untuk SSR
  adapter: cloudflare(),
  integrations: [tailwind()],
});