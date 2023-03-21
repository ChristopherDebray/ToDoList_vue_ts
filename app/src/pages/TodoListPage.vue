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

<style scoped>
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  cursor: pointer;
  display: inline-block;
}

.tab-button {
  padding: 6px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
