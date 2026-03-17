import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import pwa from '@vite-pwa/astro';
import tailwindcss from '@tailwindcss/vite'; // Import plugin Vite-nya langsung

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [pwa()],
  vite: {
    plugins: [tailwindcss()], // Masukkan ke sini!
  },
});