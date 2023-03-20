<template>
  <TwoColumnLayout>
    <template v-slot:titlea>Todo List column page</template>

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
