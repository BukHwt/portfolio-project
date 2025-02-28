import { render } from "@testing-library/vue";
import About from "../../views/About.vue";
import { vi } from "vitest";
import { getEmploymentHistory } from "../../services/employmentHistoryService";
import type { EmploymentHistory } from "../../types/EmploymentHistory";
import { flushPromises, mount } from "@vue/test-utils";
import EmploymentCard from "../../components/EmploymentCard.vue";
import type { Education } from "../../types/Education";
import { getEducation } from "../../services/educationService";
import EducationCard from "../../components/EducationCard.vue";

vi.mock("../../services/employmentHistoryService", () => ({
  getEmploymentHistory: vi.fn(),
}));

vi.mock("../../services/educationService", () => ({
  getEducation: vi.fn(),
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

  describe("Education", () => {
    it("should call getEducation onMount", async () => {
      const mockEducation: Education[] = [
        {
          id: 1,
          school: "Albion College",
          degree: "Bachelor of Arts",
          startMonthYear: "Aug 2003",
          endMonthYear: "May 2007",
          description: "A school I attended",
        },
      ];
      (getEducation as jest.Mock).mockResolvedValue(mockEducation);
      const wrapper = mount(About);
      await wrapper.vm.$nextTick();
      expect(getEducation).toHaveBeenCalledTimes(1);
    });

    it("should render as many education cards as retreieved by getEducation", async () => {
      const mockEducation: Education[] = [
        {
          id: 1,
          school: "Albion College",
          degree: "Bachelor of Arts",
          startMonthYear: "Aug 2003",
          endMonthYear: "May 2007",
          description: "A school I attended",
        },
        {
          id: 2,
          school: "Olivet College",
          degree: "Certification",
          startMonthYear: "Aug 2009",
          endMonthYear: "Dec 2010",
          description: "A school I attended for school",
        },
      ];
      (getEducation as jest.Mock).mockResolvedValue(mockEducation);
      const wrapper = mount(About);
      await flushPromises();

      const educationCards = wrapper.findAllComponents(EducationCard);
      expect(educationCards.length).toBe(2);
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
