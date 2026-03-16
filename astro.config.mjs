import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory', // Ini kunci supaya Cloudflare baca folder dist sebagai Pages
    runtime: { mode: 'complete' } // Supaya semua fitur Node/Worker aktif
  }),
  integrations: [tailwind()],
});