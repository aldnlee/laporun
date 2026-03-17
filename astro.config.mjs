import { defineConfig } from 'astro/config';
import zeabur from '@zeabur/astro-adapter';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // Wajib karena kita pakai fitur Tracker/Database
  adapter: zeabur(),
  integrations: [tailwind()],
});