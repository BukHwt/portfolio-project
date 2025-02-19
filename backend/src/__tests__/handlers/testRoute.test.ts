import { getTestDB } from "../../handlers/testRoute";
import { Request, Response } from "express-serve-static-core";
import pool from "../../db/neonDB";

jest.mock("../../db/neonDB", () => ({
  query: jest.fn(),
}));

describe("getTestDB", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return the mocked date from the database", async () => {
    const mockDate = { now: "2025-02-19T12:34:56.789Z" };

    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockDate] });

    const mockRequest = {} as Request;
    const mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    await getTestDB(mockRequest, mockResponse);

    expect(pool.query).toHaveBeenCalledWith("SELECT NOW()");
    expect(mockResponse.json).toHaveBeenCalledWith(mockDate);
  });

  it("should return a 500 error if the database query fails", async () => {
    (pool.query as jest.Mock).mockRejectedValue(new Error("DB error"));
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const mockRequest = {} as Request;
    const mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    await getTestDB(mockRequest, mockResponse);

    expect(pool.query).toHaveBeenCalledWith("SELECT NOW()");
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith("Database connection error");
  });
});
