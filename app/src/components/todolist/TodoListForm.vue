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
    <InputSelect
      :input-id="'task_status'"
      :label="'Status of the task'"
      :is-required="true"
      :options="taskStatus"
      v-model="statusSelectValue"
    />
    <button @click.prevent="$emit('TodolistAdd', todoListItem)">Enregistrer</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "../form/InputText.vue";
import InputSelect from "../form/InputSelect.vue";

const titleInputValue = ref("");
const contentInputValue = ref("");
const statusSelectValue = ref("");

const todoListItem = {
  title: titleInputValue,
  content: contentInputValue,
  status: statusSelectValue,
};

const taskStatus = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "cancelled",
    label: "Cancelled",
  },
];

function onSubmit() {
  console.log("submitted");
}
</script>

<style scoped>
form {
  padding: 20px;
}
</style>
