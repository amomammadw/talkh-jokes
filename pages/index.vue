<template>
  <!-- https://ihmuzwpqycvbrsvfzaki.supabase.co/auth/v1/callback -->
  <div>
    <div>
      <UForm @submit="onSubmit" :state :schema class="space-y-3">
        <UFormGroup label="Who is Joking" required name="name">
          <UInput v-model="state.name" placeholder="Enter Name Here" />
        </UFormGroup>
        <UFormGroup label="Joke" required name="joke">
          <UInput v-model="state.joke" placeholder="Enter Joke Here" />
        </UFormGroup>
        <UButton type="submit" :disabled="listStatus === 'pending'">
          Submit
        </UButton>
      </UForm>

      <div v-if="listStatus === 'pending'" class="space-y-3 mt-5">
        <USkeleton class="w-full h-5" v-for="i in 7" :key="i" />
      </div>
      <template v-else>
        <ul class="mt-5 space-y-3">
          <template v-for="joke in data">
            <li class="flex items-start justify-between">
              <p>{{ joke.name }} : {{ joke.joke }}</p>
              <UButton
                @click="openDialog(joke)"
                size="sm"
                icon="tabler:trash"
                color="red"
                variant="ghost"
              ></UButton>
            </li>
          </template>
        </ul>
      </template>
    </div>
    <UModal v-model="showDialog">
      <UCard>
        <h3>
          You wanted to delete
          <b class="text-green-500">{{ activeJoke?.joke }}</b> that is said by
          <b class="text-green-500"> {{ activeJoke?.name }} </b> ? 😂
          <br />
          that ain't gonna happen خوشگله
        </h3>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import type { IJokeItem } from "~/types/jokes.type";

const schema = object({
  name: string().required(),
  joke: string().required(),
});

type Schema = InferType<typeof schema>;

const state = reactive<Schema>({
  name: "",
  joke: "",
});

const activeJoke = ref<IJokeItem>();

const {
  data,
  refresh,
  status: listStatus,
} = await useLazyFetch("/api/jokes", {
  getCachedData(key, nuxtApp) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});
const { execute, status } = await useFetch("/api/jokes", {
  method: "POST",
  immediate: false,
  watch: false,
  body: state,
});

const showDialog = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await execute();
  if (status.value === "success") {
    refresh();
    state.joke = "";
    state.name = "";
  }
}

function openDialog(joke?: IJokeItem) {
  activeJoke.value = joke;
  showDialog.value = true;
}
</script>
