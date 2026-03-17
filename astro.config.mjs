import { defineConfig } from 'astro/config';
import pwa from '@vite-pwa/astro';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    pwa({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ngabuburun Tracker',
        short_name: 'Ngabuburun',
        description: 'Lightweight Running Tracker for Everyone',
        theme_color: '#ea580c',
        background_color: '#ffffff',
        display: 'standalone', // Bikin web berasa kayak App asli
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        // Cache semua file statis agar aplikasi bisa dibuka offline
        globPatterns: ['**/*.{js,css,html,svg,png,jpg}'],
        // Strategi agar aplikasi tetap jalan meskipun Supabase offline sementara
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts' }
          }
        ]
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});