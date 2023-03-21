<template>
  <MainPageContentLayout>
    <template v-slot:title>Two column todo list</template>
    <template v-slot:content>
      <TodoListRows />
    </template>
  </MainPageContentLayout>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import TodoListRows from "@/components/todolist/TodoListRows.vue";
import MainPageContentLayout from "@/layouts/pageContent/MainPageContentLayout.vue";

const todoList = reactive([]);
</script>
