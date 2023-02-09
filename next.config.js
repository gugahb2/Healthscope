module.exports = {
  env: {
    currentEnv: 'nextjs',
  },
  images: {
    domains: [
      'cloud.squidex.io',
      'i.picsum.photos',
      'assets.squidex.io'
    ],
  },
  i18n: {
    localeDetection: false,
    locales: [
      'hs-specialist-search-uat.vercel.app',
      'hs-specialist-search.vercel.app',
      'hs-specialist-search-noodledemo.vercel.app'
    ],
    defaultLocale: 'hs-specialist-search-uat.vercel.app',
    domains: [
      {
        domain: 'hs-specialist-search-uat.vercel.app',
        defaultLocale: 'hs-specialist-search-uat.vercel.app',
      },
      {
        domain: 'hs-specialist-search.vercel.app',
        defaultLocale: 'hs-specialist-search.vercel.app',
      },
      {
        domain: 'hs-specialist-search-noodledemo.vercel.app',
        defaultLocale: 'hs-specialist-search-noodledemo.vercel.app',
      },
    ],
  },
}
