import { render, screen } from "@testing-library/vue";
import About from "../../views/About.vue";
import { vi } from "vitest";
import { getEmploymentHistory } from "../../services/employmentHistoryService";
import type { EmploymentHistory } from "../../types/EmploymentHistory";
import { flushPromises, mount } from "@vue/test-utils";
import EmploymentCard from "../../components/EmploymentCard.vue";

vi.mock("../../services/employmentHistoryService", () => ({
  getEmploymentHistory: vi.fn(),
}));

describe("About view", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("rendering the view", () => {
    it("should render the About view", () => {
      const { getByTestId } = render(About);
      const aboutElement = getByTestId("about");
      expect(aboutElement).toBeTruthy();
    });

    it("should contain an About Section", async () => {
      (getEmploymentHistory as jest.Mock).mockResolvedValue([]);
      const wrapper = mount(About);
      await wrapper.vm.$nextTick();
      const aboutSection = wrapper.find("#about-content");
      expect(aboutSection).toBeTruthy();
    });

    it("should contain an Education Section", async () => {
      (getEmploymentHistory as jest.Mock).mockResolvedValue([]);
      const wrapper = mount(About);
      await wrapper.vm.$nextTick();
      const aboutSection = wrapper.find("#education-content");
      expect(aboutSection).toBeTruthy();
    });

    it("should contain an Employment History Section", async () => {
      (getEmploymentHistory as jest.Mock).mockResolvedValue([]);
      const wrapper = mount(About);
      await wrapper.vm.$nextTick();
      const aboutSection = wrapper.find("#employment-history");
      expect(aboutSection).toBeTruthy();
    });
  });

  describe("Employment History", () => {
    it("should call getEmploymentHistory onMount", async () => {
      const mockEmploymentHistory: EmploymentHistory[] = [
        {
          id: 1,
          company: "Menlo Innovations",
          position: "Software Dude",
          location: "Ann Arbor",
          startMonthYear: "start",
          endMonthYear: "end",
          description: ["first", "second"],
        },
      ];
      (getEmploymentHistory as jest.Mock).mockResolvedValue(
        mockEmploymentHistory
      );
      const wrapper = mount(About);
      await wrapper.vm.$nextTick();

      expect(getEmploymentHistory).toHaveBeenCalledTimes(1);
    });

    it("should render as many employment cards as retreived by getEmploymentHistory", async () => {
      const mockEmploymentHistory: EmploymentHistory[] = [
        {
          id: 1,
          company: "Menlo Innovations",
          position: "Software Dude",
          location: "Ann Arbor",
          startMonthYear: "start",
          endMonthYear: "end",
          description: ["first", "second"],
        },
        {
          id: 2,
          company: "Menlo",
          position: "Dude",
          location: "Arbor",
          startMonthYear: "theStart",
          endMonthYear: "theEnd",
          description: ["first", "second"],
        },
      ];
      (getEmploymentHistory as jest.Mock).mockResolvedValue(
        mockEmploymentHistory
      );
      const wrapper = mount(About);
      await flushPromises();

      const employmentCards = wrapper.findAllComponents(EmploymentCard);
      expect(employmentCards.length).toBe(2);
    });
  });
});
