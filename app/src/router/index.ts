import HomePage from "@/pages/HomePage.vue";
import TodoListPage from "@/pages/TodoListPage.vue";
import TodoListRowPage from "@/pages/TodoListRowPage.vue";
import TodoListColumnPage from "@/pages/TodoListColumnPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/todoList",
    children: [
      { path: "main", component: TodoListPage },
      { path: "columnView", component: TodoListColumnPage },
      { path: "rowView", component: TodoListRowPage },
    ],
  },
];

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes,
});
