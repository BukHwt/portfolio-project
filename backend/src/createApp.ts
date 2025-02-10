import express from "express";
import usersRouter from "./routes/users";
import cors from "cors";
import testRouter from "./routes/testRoute";

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use("/api/users", usersRouter);
  app.use("/test-db", testRouter);
  return app;
};
