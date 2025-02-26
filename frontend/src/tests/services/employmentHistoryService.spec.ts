import axios from "axios";
import { vi } from "vitest";
import type { EmploymentHistory } from "../../types/EmploymentHistory";
import { getEmploymentHistory } from "../../services/employmentHistoryService";

describe("employmentHistoryService", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should send a request to the correct endpoint", async () => {
    const mockEmploymentHistory: EmploymentHistory = {
      id: 1,
      company: "Menlo Innovations",
      position: "Software Dude",
      location: "Ann Arbor",
      startMonthYear: "start",
      endMonthYear: "end",
      description: ["first", "second"],
    };
    vi.spyOn(axios, "get").mockResolvedValue({ data: mockEmploymentHistory });
    const result = await getEmploymentHistory();
    expect(result).toEqual(mockEmploymentHistory);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:3000/employment-history"
    );
  });

  it("should throw an error when API call fails", async () => {
    const mockError = new Error("Network Error");
    vi.spyOn(axios, "get").mockRejectedValue(mockError);

    await expect(getEmploymentHistory()).rejects.toThrow("Network Error");
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:3000/employment-history"
    );
  });
});
