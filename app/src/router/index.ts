import TodoListRow from "@/pages/TodoListRow.vue";
import TodoListColumn from "@/pages/TodoListColumn.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: TodoListRow },
  { path: "/todolistColumn", component: TodoListColumn },
];

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes,
});
