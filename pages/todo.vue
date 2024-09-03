<template>
  <div>
    <UForm @submit="onSubmit" :state :schema class="space-y-3">
      <UFormGroup label="Title" required name="title">
        <UInput v-model="state.title" placeholder="Task Title" />
      </UFormGroup>
      <UFormGroup label="Priority" required name="priority">
        <USelect
          v-model="state.priority"
          placeholder="Task Priority"
          :options="todoOptions"
        />
      </UFormGroup>
      <UButton type="submit">Submit</UButton>
    </UForm>

    <UModal v-model="showDialog">
      <UCard>
        <h3>Submitting task is not ready yet, write on paper for now</h3>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const showDialog = ref(false);

const schema = object({
  title: string().required(),
  priority: string().required(),
});

type Schema = InferType<typeof schema>;

const state = reactive<Schema>({
  title: "",
  priority: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  showDialog.value = true;
}

const todoOptions = ["low", "medium", "high"];
</script>
