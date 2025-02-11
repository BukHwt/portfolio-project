import { render, screen, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import App from "../../App.vue";
import { createTestRouter } from "../testUtils/testUtils";

describe("Router", () => {
  const testRouteRendering = (routePath: string, testId: string) => {
    test(`navigating to ${routePath} renders the correct component`, async () => {
      const router = createTestRouter();

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

  test("navigating to an invalid route redirects to the home page", async () => {
    const router = createTestRouter();

    render(App, {
      global: {
        plugins: [router],
      },
    });

    await router.push("/non-existent");
    await router.isReady();

    expect(router.currentRoute.value.path).toBe("/");

    await waitFor(() => {
      expect(screen.getByTestId("home")).toBeInTheDocument();
    });
  });
});
