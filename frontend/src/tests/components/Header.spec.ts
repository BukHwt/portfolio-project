import { render } from "@testing-library/vue";
import Header from "../../components/Header.vue"; // Adjust path as necessary
import { it, expect } from "vitest";

it("renders the header component and checks if it exists", async () => {
  const { getByTestId } = render(Header); // Render the Header component
  const headerElement = getByTestId("header"); // Use a test ID to locate the element
  expect(headerElement).toBeTruthy(); // Expect the header to be in the document
});
