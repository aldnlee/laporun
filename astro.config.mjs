import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // Ini memastikan Astro membuat script server yang sesuai dengan standar Pages
    platformProxy: { enabled: true } 
  }),
  integrations: [tailwind()],
});