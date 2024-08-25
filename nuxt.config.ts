// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxtjs/supabase"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  supabase: {
    redirect: false,
  },

  icon: {
    collections: ["tabler"],
  },

  compatibilityDate: "2024-07-04",
});
