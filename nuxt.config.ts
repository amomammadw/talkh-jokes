// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui"],

  routeRules: {
    // prerender index route by default
    "/": { prerender: true },
  },

  ui: {
    icons: ["tabler"],
  },

  compatibilityDate: "2024-07-04",
});
