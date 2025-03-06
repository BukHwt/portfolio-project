import { render } from "@testing-library/vue";
import Header from "../../components/Header.vue";
import { createTestRouter } from "../testUtils/testUtils";
import { nextTick } from "vue";

describe("Header", async () => {
  beforeEach(async () => {
    global.innerWidth = 767;
    global.dispatchEvent(new Event("resize"));
  });

  it("renders the header component and checks if it exists", async () => {
    render(Header, {
      global: {
        plugins: [createTestRouter()],
      },
    });
    await nextTick();

    const links = document.querySelectorAll("a");
    expect(links.length).toBe(4);
    expect(links[1].textContent).toBe("Home");
    expect(links[2].textContent).toBe("About");
    expect(links[3].textContent).toBe("Contact");
  });

  it("shows hamburger menu", async () => {
    render(Header, {
      global: {
        plugins: [createTestRouter()],
      },
    });
    await nextTick();

    expect(document.querySelector("nav")).toBeFalsy();
    expect(document.querySelector("span")).toBeTruthy();
  });

  describe("desktop", () => {
    beforeEach(async () => {
      global.innerWidth = 1024;
      global.dispatchEvent(new Event("resize"));
    });

    it("renders the header with the logo", async () => {
      render(Header, {
        global: {
          plugins: [createTestRouter()],
        },
      });
      await nextTick();

      const logo = document.querySelector("img");
      expect(logo).toBeTruthy();
      expect(logo?.getAttribute("src")).toBe("/src/assets/wizardpng.png");
    });

    afterAll(() => {
      global.innerWidth = 767;
      global.dispatchEvent(new Event("resize"));
    });
  });
});
