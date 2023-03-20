<template>
  <article :class="todoElement.status">
    <h1>{{ todoElement.title }}</h1>
    <p>{{ todoElement.content }}</p>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  todoElement: Object,
});
</script>

<style scoped>
.active {
  background-color: lightblue;
}
.inactive {
  background-color: lightgray;
}
.done {
  background-color: lightgreen;
}
.cancelled {
  background-color: lightcoral;
}
</style>
