import { createRouter, createWebHistory } from "vue-router";
import { routes } from "../../routers/index";

export const createTestRouter = () => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
};
