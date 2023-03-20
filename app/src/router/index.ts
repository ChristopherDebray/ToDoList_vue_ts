import Home from "@/pages/Home.vue";
import TodoList from "@/pages/TodoList.vue";
import TodoListRow from "@/pages/TodoListRow.vue";
import TodoListColumn from "@/pages/TodoListColumn.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/todolist", component: TodoList },
  { path: "/todolistColumn", component: TodoListColumn },
  { path: "/todolistRow", component: TodoListRow },
];

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes,
});
