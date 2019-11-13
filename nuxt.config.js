const testServer = 'http://192.168.2.137:8080/api'
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Partner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/katren.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },
  /*
  ** Global CSS
  */
  css:[
    '@/styles/fonts.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/Vuelidate'},
    {src: '~/plugins/vue-the-mask'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  env: {
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? testServer
        : ''
  },
}
