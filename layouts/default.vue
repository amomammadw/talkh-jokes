<template>
  <UContainer class="h-dvh flex flex-col items-center justify-center">
    <div class="flex gap-2">
      <UButton
        v-for="link in headerItems"
        :to="link.link"
        :key="link.text"
        variant="link"
        active-class="!underline"
      >
        {{ link.text }}
      </UButton>
    </div>
    <UCard class="md:size-[500px] m-4 size-full overflow-auto">
      <slot />
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const headerItems = [
  {
    text: "Jokes",
    link: "/",
  },
  {
    text: "Todo",
    link: "/todo",
  },
];
</script>
