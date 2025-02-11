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
    expect(links.length).toBe(3);
    expect(links[0].textContent).toBe("Home");
    expect(links[1].textContent).toBe("About");
    expect(links[2].textContent).toBe("Contact");
  });
});
