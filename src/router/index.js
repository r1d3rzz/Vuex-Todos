import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddTodo from "../views/AddTodo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addTodo",
    name: "addTodo",
    component: AddTodo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
