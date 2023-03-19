<template>
  <form action="">
    <InputText
      :input-id="'task_title'"
      :label="'Task title'"
      :placeholder="'Type your task title here'"
      :is-required="true"
      v-model="titleInputValue"
    />
    <InputText
      :input-id="'task_content'"
      :label="'Task content'"
      :placeholder="'Type your task content here'"
      :is-required="true"
      v-model="contentInputValue"
    />
    <button @click.prevent="onSubmit">Enregistrer</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "../form/InputText.vue";

const titleInputValue = ref("");
const contentInputValue = ref("");

function onSubmit() {
  console.log("Submitted");
  console.log(titleInputValue);
  console.log(contentInputValue);
}
</script>

<style></style>
