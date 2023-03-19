<template>
  <TwoRowLayout>
    <template v-slot:titlea>Todo List page</template>
    
    <template v-slot:upperRow>
      <TodoListForm />
    </template>

    <template v-slot:lowerRow>
      <TodoListItems />
    </template>
  </TwoRowLayout>
</template>

<script setup lang="ts">
import TwoRowLayout from '@/layouts/pageContent/TwoRowLayout.vue';
import TodoListItems from '@/components/todolist/TodoListItems.vue';
import TodoListForm from '@/components/todolist/TodoListForm.vue';
</script>

<style></style>
