export const BASE_DIR = process.env.BASE_DIR || '/'

export const URL = 'https://example.com/'

export const OGP_URL = `${URL}ogp.png`
export const TITLE = 'Page Title'
export const DESCRIPTION = 'This is description for site share'
export const KEYWORDS = 'サンプルキーワード１,サンプルキーワード２'

export const META = {
  title: TITLE,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=750' },
    { hid: 'description', name: 'description', content: DESCRIPTION },
    { name: 'keywords', content: KEYWORDS },
    { hid: 'url', property: 'og:url', content: URL },
    { property: 'og:title', content: TITLE },
    { hid: 'ogp', property: 'og:image', content: OGP_URL },
    { property: 'og:description', content: DESCRIPTION },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: TITLE },
    { property: 'og:type', content: 'website' },
    { hid: 'twitterOgp', property: 'twitter:image', content: OGP_URL },
    { property: 'twitter:description', content: DESCRIPTION }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: `${BASE_DIR}favicon.png` },
    { hid: 'canonical', rel: 'canonical', href: URL }
    // { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png'},
  ]
}
