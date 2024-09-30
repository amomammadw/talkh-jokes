<template>
  <div class="pt-8">
    <UButton block icon="tabler-brand-google-filled" @click="loginWithGoogle">
      Login With Google
    </UButton>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
function loginWithGoogle() {
  supabase.auth.signInWithOAuth({
    provider: "google",
  });
}
</script>
