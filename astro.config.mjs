import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: "https://sumaolin.netlify.app",
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  integrations: [react()],
});
