import {
  defineConfig
} from 'astro/config'

import react from '@astrojs/react'

import netlify from '@astrojs/netlify'
import remarkToc from 'remark-toc'

// https://astro.build/config
export default defineConfig( {
  site: 'https://sumaolin.netlify.app',
  output: 'server',
  adapter: netlify( {
    edgeMiddleware: true,
  } ),
  integrations: [ react() ],
  markdown: {
    remarkPlugins: [
      [ remarkToc, {
        heading: 'contents'
      } ]
    ],
  },
  prefetch: {
    prefetchAll: true
  },
  server: {
    host: true,
    // open: '/about'
  },
  devToolbar: {
    enabled: false,
  },
} )
