<template>
  <TwoColumnLayout>
    <template v-slot:leftColumn>
      <TodoListForm v-model="todoList" @TodolistAdd="TodolistAdd" />
    </template>

    <template v-slot:rightColumn>
      <TodoListItems :todo-list="todoList" />
    </template>
  </TwoColumnLayout>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import TwoColumnLayout from "@/layouts/pageContent/TwoColumnLayout.vue";
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
