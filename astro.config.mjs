import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare'; // Ganti dari netlify

export default defineConfig({
  output: 'server', // Tetap server karena kita pakai Supabase Auth
  adapter: cloudflare({
    mode: 'directory', // Mode standar untuk Cloudflare Pages
  }),
});