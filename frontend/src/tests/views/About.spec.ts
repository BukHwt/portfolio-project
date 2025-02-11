import { render } from "@testing-library/vue";
import About from "../../views/About.vue";

describe("About view", () => {
  it("should render the About view", () => {
    const { getByTestId } = render(About);
    const aboutElement = getByTestId("about");
    expect(aboutElement).toBeTruthy();
  });
});
