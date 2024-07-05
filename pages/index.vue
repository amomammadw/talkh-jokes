<template>
  <div
    class="min-h-dvh flex flex-col overflow-hidden items-center justify-between py-4"
  >
    <p class="text-xs text-gray-600">Build with love by mammad</p>

    <div class="space-y-3">
      <h1 class="xl:text-7xl md:text-6xl text-3xl font-bold">
        Talkh Jokes For You :)
      </h1>
      <UInput size="lg" placeholder="Add Your Joke :)" />
      <UButton class="mx-auto block">Browse All Jokes</UButton>
    </div>

    <div class="flex items-center *:text-2xl justify-center space-x-4">
      <!-- <template v-for="link in items" :key="link.icon" v-once>
        <UButton :icon="link.icon" variant="ghost" :to="link.link" />
      </template> -->

      <ToggleTheme />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t("pages.homepage.meta.title"),
  meta: [{ name: "description", content: t("pages.homepage.meta.desc") }],
});
</script>
