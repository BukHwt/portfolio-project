import { mount } from "@vue/test-utils";
import EducationCard from "../../components/EducationCard.vue";
import type { Education } from "../../types/Education";

describe("EducationCard", () => {
  it("renders education details correctly", () => {
    const mockEducation: Education = {
      id: 1,
      school: "Albion College",
      degree: "Bachelor of Arts",
      startMonthYear: "08/2003",
      endMonthYear: "05/2007",
      description: "Four-year undergraduate program in Computer Science.",
    };
    const wrapper = mount(EducationCard, {
      props: {
        education: mockEducation,
      },
    });

    const textContent = wrapper.text();
    expect(textContent).toContain("Albion College");
    expect(textContent).toContain("Bachelor of Arts");
    expect(textContent).toContain("Computer Science");
    expect(textContent).toContain("Start: 08/2003 End: 05/2007");
    expect(textContent).toContain(
      "Four-year undergraduate program in Computer Science."
    );
  });

  it("renders correctly when optional description is missing", () => {
    const mockEducation: Education = {
      id: 1,
      school: "Albion College",
      degree: "Bachelor of Arts",
      startMonthYear: "08/2003",
      endMonthYear: "05/2007",
    };
    const wrapper = mount(EducationCard, {
      props: {
        education: mockEducation,
      },
    });

    const textContent = wrapper.text();

    expect(textContent).toContain("Albion College");
    expect(textContent).toContain("Bachelor of Arts");
    expect(textContent).toContain("Start: 08/2003 End: 05/2007");
    expect(textContent).toContain("05/2007");
    expect(textContent).not.toContain(
      "Four-year undergraduate program in Computer Science."
    );
  });
});
