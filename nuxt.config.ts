import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    vite: true
  },
  build: {
    transpile: ['vuetify', 'vuetify/lib']
  },
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    treeShake: true,
    theme: {
      options: { customProperties: true },
      dark: false,
      themes: {
        light: {
          primary: '#556efd',
          accent: '#0d6efd',
          secondary: '#8A8D93',
          success: '#56CA00',
          info: '#16B1FF',
          warning: '#FFB400',
          error: '#FF4C51'
        },
        dark: {
          primary: '#556efd',
          accent: '#0d6efd',
          secondary: '#8A8D93',
          success: '#56CA00',
          info: '#16B1FF',
          warning: '#FFB400',
          error: '#FF4C51'
        }
      }
    }
  },
})
