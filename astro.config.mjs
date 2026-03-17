import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
// Hapus import pwa di sini

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    // Hapus pwa() dari sini
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});