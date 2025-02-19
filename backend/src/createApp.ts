import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoute";
import employmentHistoryRouter from "./routes/employmentHistoryRoute";

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use("/test-db", testRouter);
  app.use("/employment-history", employmentHistoryRouter);
  return app;
};
