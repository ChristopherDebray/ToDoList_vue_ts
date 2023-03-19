<template>
  <div>
    <label :for="inputId">
      {{ label }}
      <span v-if="isRequired" style="color: red">*</span>
    </label>
    <br />
    <input
      type="text"
      :id="inputId"
      :name="inputId"
      :placeholder="placeholder"
      v-model="input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const input = ref("");

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
