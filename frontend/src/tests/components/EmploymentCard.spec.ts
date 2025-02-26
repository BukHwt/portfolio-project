import { mount } from "@vue/test-utils";
import EmploymentCard from "../../components/EmploymentCard.vue";

describe("EmploymentCard", () => {
  const defaultProps = {
    employmentHistory: {
      id: 1,
      company: "Menlo Innovations",
      position: "Software Consultant",
      location: "Ann Arbor, MI",
      startMonthYear: "08/2007",
      endMonthYear: "05/2010",
      description: [
        "Developed software applications for clients.",
        "Collaborated with team members on various projects",
      ],
    },
  };

  describe("with full employment details", () => {
    it("renders all details correctly", () => {
      const wrapper = mount(EmploymentCard, { props: defaultProps });
      expect(wrapper.find("h2").text()).toBe("Menlo Innovations");
      expect(wrapper.find("strong").text()).toBe("Software Consultant");
      expect(wrapper.findAll("em")[0].text()).toBe("Ann Arbor, MI");
      expect(wrapper.findAll("em")[1].text()).toContain(
        "Start: 08/2007 End: 05/2010"
      );
      const bulletPoints = wrapper.findAll("li");
      expect(bulletPoints).toHaveLength(2);
      expect(bulletPoints[0].find("em").text()).toBe(
        "Developed software applications for clients."
      );
      expect(bulletPoints[1].find("em").text()).toBe(
        "Collaborated with team members on various projects"
      );
    });
  });

  describe("with missing description", () => {
    it("renders without bullet points", () => {
      const wrapper = mount(EmploymentCard, {
        props: {
          employmentHistory: {
            ...defaultProps.employmentHistory,
            description: undefined,
          },
        },
      });
      expect(wrapper.find("h2").text()).toBe("Menlo Innovations");
      expect(wrapper.find("strong").text()).toBe("Software Consultant");
      expect(wrapper.findAll("em")[0].text()).toBe("Ann Arbor, MI");
      expect(wrapper.findAll("em")[1].text()).toContain(
        "Start: 08/2007 End: 05/2010"
      );
      expect(wrapper.findAll("li")).toHaveLength(0);
    });
  });
});
