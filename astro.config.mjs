import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // Matikan fitur binding otomatis yang bikin error tadi
    imageService: 'passthrough', 
  }),
  integrations: [tailwind()],
});