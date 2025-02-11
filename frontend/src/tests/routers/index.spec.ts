import { render, screen, waitFor } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import "@testing-library/jest-dom";
import { routes } from "../../routers/index";
import App from "../../App.vue";

describe("Router", () => {
  const testRouteRendering = (routePath: string, testId: string) => {
    test(`navigating to ${routePath} renders the correct component`, async () => {
      const router = createRouter({
        history: createWebHistory(),
        routes,
      });

      render(App, {
        global: {
          plugins: [router],
        },
      });

      await router.push(routePath);
      await router.isReady();
      await waitFor(() => {
        expect(screen.getByTestId(testId)).toBeInTheDocument();
      });
    });
  };
  testRouteRendering("/about", "about");
  testRouteRendering("/contact", "contact");
  testRouteRendering("/", "home");
});
