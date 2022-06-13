import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/HomePage.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../components/portfolio/PortfolioData.vue"),
    },
    {
      path: "/stocks",
      name: "stocks",
      component: () => import("../components/stocks/StocksList.vue"),
    },
  ],
});

export default router;
