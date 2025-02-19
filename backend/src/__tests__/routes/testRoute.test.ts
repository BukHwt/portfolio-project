import request from "supertest";
import express from "express";
import testRoute from "../../routes/testRoute"; // Adjust path as needed
import { getTestDB } from "../../handlers/testRoute"; // Adjust path as needed

jest.mock("../../handlers/testRoute", () => ({
  getTestDB: jest.fn(),
}));

const app = express();
app.use("/", testRoute);

describe("Test / route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 with valid response", async () => {
    (getTestDB as jest.Mock).mockImplementation((req, res) => {
      res.status(200).json({ message: "Success" });
    });

    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Success" });
    expect(getTestDB).toHaveBeenCalled();
  });

  it("should return 500 when an error occurs", async () => {
    (getTestDB as jest.Mock).mockImplementation((req, res) => {
      res.status(500).send("Internal Server Error");
    });

    const response = await request(app).get("/");
    expect(response.status).toBe(500);
    expect(response.text).toBe("Internal Server Error");
    expect(getTestDB).toHaveBeenCalled();
  });
});
