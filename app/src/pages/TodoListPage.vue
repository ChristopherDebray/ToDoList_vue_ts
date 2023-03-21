<template>
  <MainPageContentLayout>
    <template v-slot:title>Todo list page</template>
    <template v-slot:content>
      <TabPanel :tabs="tabs" :keepalive="true" />
    </template>
  </MainPageContentLayout>
</template>

<script setup lang="ts">
import MainPageContentLayout from "@/layouts/pageContent/MainPageContentLayout.vue";
import TodoListColumns from "@/components/todolist/TodoListColumns.vue";
import TodoListRows from "@/components/todolist/TodoListRows.vue";
import TabPanel from "@/components/block/TabPanel.vue";

const tabs = {
  "Row list": TodoListRows,
  "Column list": TodoListColumns,
};
</script>
