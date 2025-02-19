import { render } from "@testing-library/vue";
import About from "../../views/About.vue";
import { vi } from "vitest";
import { getEmploymentHistory } from "../../services/employmentHistoryService";
import type { EmploymentHistory } from "../../types/EmploymentHistory";
import { mount } from "@vue/test-utils";

vi.mock("../../services/employmentHistoryService", () => ({
  getEmploymentHistory: vi.fn(),
}));

describe("About view", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("should render the About view", () => {
    const { getByTestId } = render(About);
    const aboutElement = getByTestId("about");
    expect(aboutElement).toBeTruthy();
  });

  it("should call getEmploymentHistory onMount", async () => {
    const mockEmploymentHistory: EmploymentHistory = {
      id: 1,
      company: "Menlo Innovations",
      position: "Software Dude",
      location: "Ann Arbor",
      startMonthYear: "start",
      endMonthYear: "end",
      description: ["first", "second"],
    };
    (getEmploymentHistory as jest.Mock).mockResolvedValue(
      mockEmploymentHistory
    );
    const wrapper = mount(About);
    await wrapper.vm.$nextTick();

    expect(getEmploymentHistory).toHaveBeenCalledTimes(1);
  });
});
