import { createRouter, createWebHistory } from "vue-router";

export const createTestRoute = () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: {} },
      { path: "/about", component: {} },
      { path: "/contact", component: {} },
    ],
  });
  return router;
};
