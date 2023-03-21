<template>
  <MainPageContentLayout>
    <template v-slot:title>Two column todo list</template>
    <template v-slot:content>
      <TodoListColumns />
    </template>
  </MainPageContentLayout>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import MainPageContentLayout from "@/layouts/pageContent/MainPageContentLayout.vue";
import TodoListColumns from "@/components/todolist/TodoListColumns.vue";
</script>
