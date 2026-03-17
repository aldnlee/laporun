import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    // Tambahkan ini untuk menghilangkan warning dideprecated
    entrypointResolution: 'auto' 
  }),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['node:buffer', 'node:stream', 'node:util', 'node:path', 'node:url', 'node:events', 'node:crypto', 'node:child_process', 'node:os', 'fs']
    }
  }
});