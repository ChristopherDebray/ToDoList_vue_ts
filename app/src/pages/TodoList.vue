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
      <component :is="tabs[currentTab]" class="tab"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoListColumn from "./TodoListColumn.vue";
import TodoListRow from "./TodoListRow.vue";

const tabs = {
  ToDoListRow,
  ToDoListColumn
};

const currentTab = ref("ToDoListRow");
</script>

<style scoped>
nav ul li {
  cursor: pointer;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
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
