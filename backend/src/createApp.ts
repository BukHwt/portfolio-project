import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoute";
import employmentHistoryRouter from "./routes/employmentHistoryRoute";
import educationRouter from "./routes/educationRoute";

const corsOptions = {
  origin: [
    "http://localhost:5173", // Local Vue dev server
    "https://portfolio-project-bukhwt-steve-andersons-projects-d862a8e0.vercel.app", //preview
    "https://steveandersonthedeveloper.com", // Production deployment
  ],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

export const createApp = () => {
  const app = express();
  app.use(cors(corsOptions));
  app.use("/test-db", testRouter);
  app.use("/employment-history", employmentHistoryRouter);
  app.use("/education", educationRouter);
  return app;
};
