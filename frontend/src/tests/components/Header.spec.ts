import { render } from "@testing-library/vue";
import Header from "../../components/Header.vue";
import { createTestRouter } from "../testUtils/testUtils";

describe("Header", () => {
  it("renders the header component and checks if it exists", async () => {
    const { getByTestId } = render(Header, {
      global: {
        plugins: [createTestRouter()],
      },
    });
    const headerElement = getByTestId("header");
    expect(headerElement).toBeTruthy();
  });

  it("renders the header component with the correct number of links", () => {
    render(Header, {
      global: {
        plugins: [createTestRouter()],
      },
    });
    const links = document.querySelectorAll("a");
    expect(links.length).toBe(4);
    expect(links[1].textContent).toBe("Home");
    expect(links[2].textContent).toBe("About");
    expect(links[3].textContent).toBe("Contact");
  });

  it("renders the header with the logo", () => {
    render(Header, {
      global: {
        plugins: [createTestRouter()],
      },
    });
    const logo = document.querySelector("img");
    expect(logo).toBeTruthy();
    expect(logo?.getAttribute("src")).toBe("/src/assets/wizardpng.png");
  });
});
