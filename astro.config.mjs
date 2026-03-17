import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    // Kita matikan fitur-fitur yang memicu error config otomatis
    imageService: 'passthrough', 
  }),
  integrations: [tailwind()],
  // Pastikan tidak ada settingan 'image' yang aneh di sini
});