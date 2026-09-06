import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://srtconverters.info',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          pt: 'pt',
          es: 'es',
          ko: 'ko',
          vi: 'vi',
          id: 'id',
          ja: 'ja',
          fr: 'fr',
          de: 'de',
          ar: 'ar',
        },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es', 'ko', 'vi', 'id', 'ja', 'fr', 'de', 'ar'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
