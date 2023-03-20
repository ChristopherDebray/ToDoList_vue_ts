<template>
  <TwoRowLayout>
    <template v-slot:titlea>Todo List row page</template>

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
import TwoRowLayout from '@/layouts/pageContent/TwoRowLayout.vue';
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
