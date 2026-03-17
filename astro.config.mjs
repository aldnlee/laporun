import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // output: 'static' adalah default, jadi tidak perlu ditulis
  integrations: [tailwind()],
});