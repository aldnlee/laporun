import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
  }),
  // MATIKAN SERVICE GAMBAR AGAR SHARP TIDAK DIPANGGIL
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  integrations: [tailwind()],
  vite: {
    ssr: {
      // Paksa Vite mengabaikan modul-modul Node.js yang biasanya dipakai Sharp
      external: ['node:buffer', 'node:stream', 'node:util', 'node:path', 'fs']
    }
  }
});