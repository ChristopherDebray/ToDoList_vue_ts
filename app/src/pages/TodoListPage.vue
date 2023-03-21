<template>
  <div>
    <nav>
      <ul>
        <li
          v-for="(_, tab) in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
        >
          {{ tab }}
        </li>
      </ul>
    </nav>
    <div>
      <KeepAlive>
        <component :is="tabs[currentTab]" class="tab"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoListColumns from "@/components/todolist/TodoListColumns.vue";
import TodoListRows from "@/components/todolist/TodoListRows.vue";

const tabs = {
  "Row list": TodoListRows,
  "Column list": TodoListColumns,
};

const currentTab = ref("Row list");
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
