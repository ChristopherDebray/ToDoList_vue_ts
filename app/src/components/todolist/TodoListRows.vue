<template>
  <TwoRowLayout>
    <template v-slot:upperRow>
      <TodoListForm v-model="todoList" @TodolistAdd="TodolistAdd" />
    </template>

    <template v-slot:lowerRow>
      <TodoListItems :todo-list="todoList" />
    </template>
  </TwoRowLayout>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import TwoRowLayout from "@/layouts/pageContent/TwoRowLayout.vue";
import TodoListItems from '@/components/todolist/TodoListItems.vue';
import TodoListForm from '@/components/todolist/TodoListForm.vue';

const todoList = reactive([]);

function TodolistAdd(todoListElement) {
  const todoElement = {};
  for (const property in todoListElement) {
    todoElement[property] = todoListElement[property].value;
  }
  todoList.push(todoElement);
}
</script>

<style scoped>
.twoColumnLayout {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.twoColumnLayout > section {
  min-width: 450px;
  min-height: 200px;
  margin: 1.5rem 0;
  background-color: rgba(212, 212, 212, 0.211);
}
</style>
