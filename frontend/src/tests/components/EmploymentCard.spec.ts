import { mount } from "@vue/test-utils";
import EmploymentCard from "../../components/EmploymentCard.vue";

describe("EmploymentCard", () => {
  it("renders employment details correctly", () => {
    const wrapper = mount(EmploymentCard, {
      props: {
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
      },
    });
    const textContent = wrapper.text();
    expect(textContent).toContain("Menlo Innovations");
    expect(textContent).toContain("Software Consultant");
    expect(textContent).toContain("Ann Arbor, MI");
    expect(textContent).toContain("Start: 08/2007 End: 05/2010");
    expect(textContent).toContain(
      "Developed software applications for clients."
    );
    expect(textContent).toContain(
      "Collaborated with team members on various projects"
    );
    const bulletPoints = wrapper.findAll("li");
    expect(bulletPoints.length).toBe(2);
  });

  it("renders correctly when optional description is missing", () => {
    const wrapper = mount(EmploymentCard, {
      props: {
        employmentHistory: {
          id: 1,
          company: "Menlo Innovations",
          position: "Software Consultant",
          location: "Ann Arbor, MI",
          startMonthYear: "08/2007",
          endMonthYear: "05/2010",
        },
      },
    });
    const textContent = wrapper.text();
    expect(textContent).toContain("Menlo Innovations");
    expect(textContent).toContain("Software Consultant");
    expect(textContent).toContain("Ann Arbor, MI");
    expect(textContent).toContain("Start: 08/2007 End: 05/2010");
    expect(textContent).not.toContain(
      "Developed software applications for clients."
    );
    expect(textContent).not.toContain(
      "Collaborated with team members on various projects"
    );
    const bulletPoints = wrapper.findAll("li");
    expect(bulletPoints.length).toBe(0);
  });
});
