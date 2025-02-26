import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoute";
import employmentHistoryRouter from "./routes/employmentHistoryRoute";
import educationRouter from "./routes/educationRoute";

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use("/test-db", testRouter);
  app.use("/employment-history", employmentHistoryRouter);
  app.use("/education", educationRouter);
  return app;
};
