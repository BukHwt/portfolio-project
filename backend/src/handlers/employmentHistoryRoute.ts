import { Request, Response } from "express-serve-static-core";
import pool from "../db/neonDB";
import { EmploymentHistory } from "../types/employmentHistory";
import { queries } from "../queries/employmentHistory";

export const getEmploymentHistory = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(queries.GET_EMPLOYMENT_HISTORY);

    // Map the result rows to match your interface
    const mappedResults: EmploymentHistory[] = result.rows.map((row) => ({
      id: row.id,
      company: row.company,
      position: row.position,
      location: row.location,
      startMonthYear: row.startMonthYear,
      endMonthYear: row.endMonthYear,
      description: row.description || [], // Ensure descriptions is always an array
    }));

    res.json(mappedResults);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database connection error");
  }
};
