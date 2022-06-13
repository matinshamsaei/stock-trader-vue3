import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/Home.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../components/Portfolio/index.vue"),
    },
    {
      path: "/stocks",
      name: "stocks",
      component: () => import("../components/Stocks/index.vue"),
    },
  ],
});

export default router;
