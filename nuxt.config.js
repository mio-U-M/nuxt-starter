import { META, BASE_DIR } from './config'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: META,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** routing
   */
  router: {
    base: BASE_DIR
  },
  /*
   ** file generate
   */
  generate: {
    dir: `./public${BASE_DIR}`,
    fallback: true
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  eslint: {
    fix: true
  },
  /*
   ** vue setting for release web site
   */
  // vue: {
  //   config: {
  //    productionTip: false,
  //    devtools: false,
  //    debug: false,
  //    silent: true
  //   }
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
      css: () => '[name].js',
      img: () => '[path][name].[ext]',
      font: () => '[path][name].[ext]',
      video: () => '[path][name].[ext]'
    },
    extend(config, ctx) {}
  }
}
