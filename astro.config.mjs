import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

export default defineConfig({
  // output: 'static' adalah default, jadi tidak perlu ditulis
  integrations: [tailwind()],

  adapter: netlify(),
});