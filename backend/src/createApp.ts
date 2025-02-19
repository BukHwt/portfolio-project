import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoute";

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use("/test-db", testRouter);
  return app;
};
