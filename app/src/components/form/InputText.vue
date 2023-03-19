<template>
  <div>
    <label :for="inputId">
      {{ label }}
      <span v-if="isRequired" style="color: red">*</span>
    </label>
    <input
      type="text"
      :id="inputId"
      :name="inputId"
      :placeholder="placeholder"
      v-model="inputValue"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const inputValue = ref("");

defineProps({
  inputId: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Enter your text here",
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
