<template>
  <article>
    <h1>{{ todoElement.title }}</h1>
    <p>{{ todoElement.content }}</p>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  todoElement: Object,
});
</script>

<style scoped></style>
