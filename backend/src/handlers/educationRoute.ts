import { Request, Response } from "express-serve-static-core";
import pool from "../db/neonDB";
import { Education } from "../types/education";
import { queries } from "../queries/education";

export const getEducation = async (req: Request, res: Response) => {
  try {
    console.log("Connecting to the database...");
    const result = await pool.query(queries.GET_EDUCATION);
    console.log("Database connected and query executed successfully");

    const mappedResults: Education[] = result.rows.map((row) => ({
      id: row.id,
      school: row.school,
      degree: row.degree,
      startMonthYear: row.start_month_year,
      endMonthYear: row.end_month_year,
      description: row.description || "",
    }));

    res.json(mappedResults);
  } catch (error) {
    console.error("Error occurred while accessing the database:", error);
    res.status(500).send("Database connection error");
  }
};
