import { Request, Response } from "express-serve-static-core";
import pool from "../db/neonDB";
import { EmploymentHistory } from "../types/employmentHistory";
import { queries } from "../queries/employmentHistory";

export const getEmploymentHistory = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(queries.GET_EMPLOYMENT_HISTORY);

    const mappedResults: EmploymentHistory[] = result.rows.map((row) => ({
      id: row.id,
      company: row.company,
      position: row.position,
      location: row.location,
      startMonthYear: row.start_month_year,
      endMonthYear: row.end_month_year,
      description: row.description || [],
    }));

    res.json(mappedResults);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database connection error");
  }
};
