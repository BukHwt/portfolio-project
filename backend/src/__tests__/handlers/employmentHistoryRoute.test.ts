import { EmploymentHistory } from "../../types/employmentHistory";
import pool from "../../db/neonDB";
import { getEmploymentHistory } from "../../handlers/employmentHistoryRoute";
import { Request, Response } from "express-serve-static-core";

jest.mock("../../db/neonDB", () => ({
  query: jest.fn(),
}));

describe("getTestDB", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const getEmploymentHistoryQuery = `
  SELECT 
    eh."id", 
    eh.company, 
    eh."position", 
    eh."location", 
    eh.start_month_year, 
    eh.end_month_year, 
    ARRAY_AGG(jd.description ORDER BY jd.id) AS "description" 
  FROM employment_history eh 
  JOIN job_descriptions jd ON eh.id = jd.employment_id 
  GROUP BY eh."id", eh.company, eh."position", eh."location", eh.start_month_year, eh.end_month_year;
`;

  it("should return the mocked data from the database", async () => {
    const mockEmploymentHistory: EmploymentHistory = {
      id: 1,
      company: "Test Company",
      position: "Test Title",
      location: "Test Location",
      startMonthYear: "Jun 2020",
      endMonthYear: "Apr 2021",
      description: ["Test Description"],
    };

    (pool.query as jest.Mock).mockResolvedValue({
      rows: [mockEmploymentHistory],
    });

    const mockRequest = {} as Request;
    const mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    await getEmploymentHistory(mockRequest, mockResponse);
    expect(pool.query).toHaveBeenCalledWith(getEmploymentHistoryQuery);
    expect(mockResponse.json).toHaveBeenCalledWith([mockEmploymentHistory]);
  });
});
