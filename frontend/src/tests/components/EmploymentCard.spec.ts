import { mount } from "@vue/test-utils";
import EmploymentCard from "../../components/EmploymentCard.vue";

describe("EmploymentCard", () => {
  it("renders employment details correctly", () => {
    const wrapper = mount(EmploymentCard, {});
    const textContent = wrapper.text();
  });

  it("renders correctly when optional description is missing", () => {});
});
