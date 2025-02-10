import { Request, Response } from "express-serve-static-core";
import pool from "../db/neonDB";

export const getTestDB = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database connection error");
  }
};
