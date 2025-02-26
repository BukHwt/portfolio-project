import { mount } from "@vue/test-utils";
import EducationCard from "../../components/EducationCard.vue";
import type { Education } from "../../types/Education";

describe("EducationCard", () => {
  const defaultEducation: Education = {
    id: 1,
    school: "Albion College",
    degree: "Bachelor of Arts",
    startMonthYear: "08/2003",
    endMonthYear: "05/2007",
    description: "Four-year undergraduate program in Computer Science.",
  };

  describe("with full education details", () => {
    it("renders all details correctly", () => {
      const wrapper = mount(EducationCard, {
        props: { education: defaultEducation },
      });
      expect(wrapper.find("h2").text()).toBe("Albion College");
      expect(wrapper.find("strong").text()).toBe("Bachelor of Arts");
      expect(wrapper.findAll("em")[0].text()).toContain(
        "Start: 08/2003 End: 05/2007"
      );
      expect(wrapper.findAll("em")[1].text()).toBe(
        "Four-year undergraduate program in Computer Science."
      );
    });
  });

  describe("with missing description", () => {
    it("renders without description", () => {
      const wrapper = mount(EducationCard, {
        props: {
          education: {
            ...defaultEducation,
            description: undefined,
          },
        },
      });
      expect(wrapper.find("h2").text()).toBe("Albion College");
      expect(wrapper.find("strong").text()).toBe("Bachelor of Arts");
      expect(wrapper.find("em").text()).toContain(
        "Start: 08/2003 End: 05/2007"
      );
      expect(wrapper.findAll("em")).toHaveLength(1);
    });
  });
});
