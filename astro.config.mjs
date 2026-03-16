import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // Paksa mode paling simpel agar tidak membuat binding otomatis
    platformProxy: { enabled: false },
    runtime: { mode: 'complete', binding: false }
  }),
  integrations: [tailwind()],
});