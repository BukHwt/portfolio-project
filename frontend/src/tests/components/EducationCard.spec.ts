import { shallowMount } from "@vue/test-utils";
import EducationCard from "../../components/EducationCard.vue";

describe("EducationCard", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(EducationCard, {
      propsData: {
        education: {
          id: 1,
          school: "School",
          degree: "Degree",
          fieldOfStudy: "Field of Study",
          from: "2020-01-01",
          to: "2020-01-01",
          current: false,
          description: "Description",
        },
      },
    });

    expect(wrapper.find(".education-card").exists()).toBe(true);
  });
});
