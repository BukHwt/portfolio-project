import { render } from "@testing-library/vue";
import Home from "../../views/Home.vue";

describe("Home View", () => {
  it("should render the home view and check if it exists", () => {
    const { getByTestId } = render(Home);
    const homeElement = getByTestId("home");
    expect(homeElement).toBeTruthy();
  });
});
