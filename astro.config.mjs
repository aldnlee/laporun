import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // Matikan semua fitur otomatis yang bikin wrangler.json rusak
    imageService: 'passthrough',
    runtime: { mode: 'complete', binding: false }
  }),
  integrations: [tailwind()],
});