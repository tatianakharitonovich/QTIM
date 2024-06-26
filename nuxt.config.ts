// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  imports: {
    dirs: ['types/*.ts', 'types/**/*.ts'],
  },
})
