import { vi } from "vitest";
import type { Education } from "../../types/Education";
import axios from "axios";
import { getEducation } from "../../services/educationService";

describe("educationService", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should send a request to the correct endpoint", async () => {
    const mockEducation: Education = {
      id: 1,
      school: "Albion College",
      degree: "Bachelor of Arts",
      startMonthYear: "Aug 2003",
      endMonthYear: "May 2007",
      description: "A school I attended",
    };
    vi.spyOn(axios, "get").mockResolvedValue({ data: mockEducation });
    const result = await getEducation();
    expect(result).toEqual(mockEducation);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/education");
  });

  it("should throw an error when API call fails", async () => {
    const mockError = new Error("Network Error");
    vi.spyOn(axios, "get").mockRejectedValue(mockError);

    await expect(getEducation()).rejects.toThrow("Network Error");
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/education");
  });
});
