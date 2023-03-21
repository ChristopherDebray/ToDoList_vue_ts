import HomePage from "@/pages/HomePage.vue";
import TodoListPage from "@/pages/TodoListPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/todoList", component: TodoListPage },
];

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes,
});
