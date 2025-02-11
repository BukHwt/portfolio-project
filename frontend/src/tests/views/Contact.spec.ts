import { render } from "@testing-library/vue";
import Contact from "../../views/Contact.vue";

describe("Contact View", () => {
  it("should render the contact view", () => {
    const { getByTestId } = render(Contact);
    const contactElement = getByTestId("contact");
    expect(contactElement).toBeTruthy();
  });
});
