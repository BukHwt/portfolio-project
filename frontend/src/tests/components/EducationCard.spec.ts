import { mount } from "@vue/test-utils";
import EducationCard from "../../components/EducationCard.vue";

describe("EducationCard", () => {
  it("renders education details correctly", () => {
    const wrapper = mount(EducationCard, {
      props: {
        school: "Albion College",
        degree: "Bachelor of Arts",
        fieldOfStudy: "Computer Science",
        startMonthYear: "08/2003",
        endMonthYear: "05/2007",
        description: "Four-year undergraduate program in Computer Science.",
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
    const wrapper = mount(EducationCard, {
      props: {
        school: "Albion College",
        degree: "Bachelor of Arts",
        fieldOfStudy: "N/A",
        startMonthYear: "Start: 08/2003 End: 05/2007",
        endMonthYear: "05/2007",
        description: undefined,
      },
    });

    const textContent = wrapper.text();

    expect(textContent).toContain("Albion College");
    expect(textContent).toContain("Bachelor of Arts");
    expect(textContent).toContain("N/A");
    expect(textContent).toContain("Start: 08/2003 End: 05/2007");
    expect(textContent).toContain("05/2007");
    expect(textContent).not.toContain(
      "Four-year undergraduate program in Computer Science."
    );
  });
});
