// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxtjs/supabase"],

  ui: {
    icons: ["tabler"],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  supabase: {
    redirect: false,
  },

  i18n: {
    defaultLocale: "fa",
    langDir: "./locales",
    defaultDirection: "rtl",
    baseUrl: "https://talkh-jokes.vercel.app",
    strategy: "prefix",
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: "fa",
    },
    locales: [
      {
        code: "fa",
        iso: "fa-IR",
        file: "fa.ts",
        dir: "rtl",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en.ts",
        dir: "ltr",
      },
    ],
  },

  compatibilityDate: "2024-07-04",
});
