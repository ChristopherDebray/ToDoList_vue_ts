<template>
  <div>
    <label :for="inputId">
      {{ label }}
      <span v-if="isRequired" style="color: red">*</span>
    </label>
    <br />
    <select 
      :name="inputId"
      :id="inputId"
      v-model="input"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value=""></option>
      <option :value="option.value" v-for="option in options" :key="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref } from "vue";

interface IOption {
  value: string;
  label: string;
}

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
  isRequired: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object as PropType<IOption>,
    required: true,
  },
});
</script>

<style></style>
