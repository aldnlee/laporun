import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import pwa from '@vite-pwa/astro';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    pwa({
      registerType: 'autoUpdate',
      manifest: { /* manifest kamu */ },
      workbox: {
        // PERBAIKAN DI SINI:
        // Karena kita SSR, kita tidak bisa precache rute "/" 
        // Kita hanya precache aset statis (js, css, png)
        globPatterns: ['**/*.{js,css,svg,png,ico,txt}'],
        
        // Matikan navigateFallback karena rute ditangani server
        navigateFallback: null,
        
        // Tambahkan ini agar request ke Supabase tidak dicegat salah sasaran
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
            handler: 'NetworkOnly', // Jangan simpan data upload di cache!
          }
        ]
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});