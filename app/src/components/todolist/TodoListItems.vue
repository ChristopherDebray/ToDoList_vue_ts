<template>
  <section>
    <TodoListItemsElement
      v-for="todoElement in todoList"
      :key="todoElement.title"
      :todo-element="todoElement"
    />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import TodoListItemsElement from "@/components/todolist/TodoListItemsElement.vue";

defineProps({
  todoList: Array,
});
</script>

<style scoped></style>
