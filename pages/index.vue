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
      <UButton class="mx-auto" to="/list">Browse All Jokes</UButton>
      {{ data }}
    </div>

    <div class="flex items-center *:text-2xl justify-center space-x-4" v-once>
      <template v-for="link in linkItems" :key="link.icon">
        <UButton :icon="link.icon" variant="ghost" />
      </template>

      <ToggleTheme />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/jokes");
console.log(data.value);

const linkItems = [
  {
    icon: "i-tabler-brand-twitter-filled",
  },
  {
    icon: "i-tabler-brand-instagram",
  },
  {
    icon: "i-tabler-brand-linkedin",
  },
  {
    icon: "i-tabler-brand-github",
  },
];
</script>
