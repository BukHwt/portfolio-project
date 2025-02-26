import { EmploymentHistory } from "../../types/employmentHistory";
import pool from "../../db/neonDB";
import { getEmploymentHistory } from "../../handlers/employmentHistoryRoute";
import { Request, Response } from "express-serve-static-core";
import { queries } from "../../queries/employmentHistory";

jest.mock("../../db/neonDB", () => ({
  query: jest.fn(),
}));

describe("getTestDB", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return the mocked data from the database", async () => {
    const mockDBResponse = {
      id: 1,
      company: "Test Company",
      position: "Test Title",
      location: "Test Location",
      start_month_year: "Jun 2020",
      end_month_year: "Apr 2021",
      description: ["Test Description"],
    };

    const mockEmploymentHistory: EmploymentHistory = {
      id: 1,
      company: "Test Company",
      position: "Test Title",
      location: "Test Location",
      startMonthYear: "Jun 2020",
      endMonthYear: "Apr 2021",
      description: ["Test Description"],
    };

    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockDBResponse] });

    const mockRequest = {} as Request;
    const mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    await getEmploymentHistory(mockRequest, mockResponse);
    expect(pool.query).toHaveBeenCalledWith(queries.GET_EMPLOYMENT_HISTORY);
    expect(mockResponse.json).toHaveBeenCalledWith([mockEmploymentHistory]);
  });
});
