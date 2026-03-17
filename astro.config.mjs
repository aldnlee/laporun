import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory', // Mode ini paling aman buat struktur dist/
  }),
  // Matikan optimasi gambar Sharp karena Cloudflare gak support
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop' 
    }
  },
  integrations: [tailwind()],
});