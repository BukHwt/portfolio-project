import { Request, Response } from "express-serve-static-core";
import pool from "../db/neonDB";
import { EmploymentHistory } from "../types/employmentHistory";

const getEmploymentHistoryQuery = `
  SELECT 
    eh."id", 
    eh.company, 
    eh."position", 
    eh."location", 
    eh.start_month_year, 
    eh.end_month_year, 
    ARRAY_AGG(jd.description ORDER BY jd.id) AS "description" 
  FROM employment_history eh 
  JOIN job_descriptions jd ON eh.id = jd.employment_id 
  GROUP BY eh."id", eh.company, eh."position", eh."location", eh.start_month_year, eh.end_month_year;
`;

export const getEmploymentHistory = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(getEmploymentHistoryQuery);

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
