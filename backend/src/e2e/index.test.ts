import request from "supertest";
import { type Express } from "express-serve-static-core";
import { createApp } from "../createApp";

describe("/api/users", () => {
  let app: Express;

  beforeAll(() => {
    app = createApp();
  });
  it("should return an empty array when getting /api/users", async () => {
    const response = await request(app).get("/test-db");
    expect(JSON.parse(response.text)).toMatchObject({
      now: expect.any(String),
    });
  });
});
