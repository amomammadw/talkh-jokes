<template>
  <UContainer class="h-dvh flex flex-col items-center justify-center">
    <UCard class="md:size-[500px] m-4 size-full overflow-auto">
      <UForm @submit="onSubmit" :state :schema class="space-y-3">
        <UFormGroup label="Who is Joking" required name="name">
          <UInput v-model="state.name" placeholder="Enter Name Here" />
        </UFormGroup>
        <UFormGroup label="Joke" required name="joke">
          <UInput v-model="state.joke" placeholder="Enter Joke Here" />
        </UFormGroup>
        <UButton type="submit" :loading="listStatus === 'pending'">
          Submit
        </UButton>
      </UForm>

      <ul class="mt-5">
        <template v-for="joke in data">
          <li>{{ joke.name }} said {{ joke.joke }}</li>
        </template>
      </ul>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  name: string().required(),
  joke: string().required(),
});

type Schema = InferType<typeof schema>;

const state = reactive<Schema>({
  name: "",
  joke: "",
});

const { data, refresh, status: listStatus } = await useFetch("/api/jokes");
const { execute, status } = await useFetch("/api/jokes", {
  method: "POST",
  immediate: false,
  watch: false,
  body: state,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await execute();
  if (status.value === "success") {
    refresh();
  }
}
</script>
