<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const supabase = useSupabaseClient();

onMounted(async () => {
  if (route.query.code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(
      route.query.code as string
    );
    console.log(data, error, route);
  }
});
</script>
