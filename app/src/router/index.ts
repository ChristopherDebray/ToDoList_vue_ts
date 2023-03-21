import Home from "@/pages/Home.vue";
import TodoListPage from "@/pages/TodoListPage.vue";
import TodoListRowPage from "@/pages/TodoListRowPage.vue";
import TodoListColumnPage from "@/pages/TodoListColumnPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/todolist", component: TodoListPage },
  { path: "/todolistColumn", component: TodoListColumnPage },
  { path: "/todolistRow", component: TodoListRowPage },
];

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes,
});
