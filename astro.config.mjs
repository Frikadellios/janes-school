import alpine from '@astrojs/alpinejs'
import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import { defineConfig, passthroughImageService } from 'astro/config'
import AutoImport from 'unplugin-auto-import/astro'

import { baseLocale, locales } from './src/i18n/i18n-util.ts'
import { remarkReadingTime } from './src/lib/readTime.ts'
import { SITE } from './src/site-config.ts'
const sitemapLocales = Object.fromEntries(locales.map((_, i) => [locales[i], locales[i]])) // Create an object with keys and values based on locales

import postCssOklabPolyfill from '@csstools/postcss-oklab-function'
import tailwindcss from '@tailwindcss/vite'
import cssDiscardComments from 'postcss-discard-comments'
import rehypeExternalLinks from 'rehype-external-links'
import handlebars from 'vite-plugin-handlebars'
import lightningcss from 'vite-plugin-lightningcss'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollectionCache: true
  },
  site: SITE || 'localhost:4321',
  i18n: {
    defaultLocale: baseLocale,
    locales: locales,
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: {
    build: {
      minify: true,
      cssMinify: 'lightningcss',
      chunkSizeWarningLimit: 2000
    },
    server: {
      fs: {
        // Allow serving files from hoisted root node_modules
        allow: ['../..']
      }
    },
    ssr: {
      external: ['node:buffer', 'reading-time', 'three']
    },
    plugins: [
      lightningcss({
        browserslist: ['>= 0.25%', 'last 2 versions', 'maintained node versions', 'Firefox ESR', 'not dead'] // Correctly set browser queries
      }),
      tailwindcss(),
      handlebars()
    ],
    css: {
      postcss: {
        plugins: [postCssOklabPolyfill({ preserve: true }), cssDiscardComments({ removeAll: true })]
      }
    }
  },
  image: { service: passthroughImageService() },
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'cloudflare',
    functionPerRoute: true,
    platformProxy: {
      enabled: true
    }
  }),
  prefetch: {
    prefetchAll: true
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' },
          target: '_blank',
          rel: ['nofollow', 'noreferrer']
        }
      ]
    ],
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    },
    gfm: true
  },
  integrations: [
    AutoImport({
      defaultExportByFilename: false,
      include: [/\.[tj]sx?$/, /\.md$/],
      packagePresets: ['detect-browser-es'],
      imports: ['react', 'react-router'],
      viteOptimizeDeps: true,
      injectAtEnd: true,
      dirs: ['./src/utils/*.ts', './src/hooks'],
      dts: '.astro/auto-imports.d.ts'
    }),
    alpine({ entrypoint: '/src/entrypoint' }),
    react(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark-dimmed'
      },
      gfm: true
    }),
    sitemap({
      entryLimit: 10000,
      i18n: {
        filter: (page) => page.secret !== true,
        defaultLocale: baseLocale,
        locales: sitemapLocales
      }
    }),
    robotsTxt({
      sitemap: 'https://www.janes-school.pages.dev/sitemap-0.xml',
      host: 'janes-school.pages.dev'
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
        debug: false
      }
    }),
    icon()
  ]
})
