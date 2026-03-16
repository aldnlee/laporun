import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // MODE INI AKAN MENGHENTIKAN ASTRO MEMBUAT WRANGLER.JSON YANG RUSAK
    mode: 'directory', 
    runtime: { mode: 'complete' }
  }),
  integrations: [tailwind()],
});