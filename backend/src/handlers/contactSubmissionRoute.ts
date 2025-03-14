import { Request, Response } from "express-serve-static-core";
import pool from "../db/neonDB";
import { queries } from "../queries/contact";
import { ContactSubmission } from "../types/contactSubmission";

export const submitContactForm = async (
  req: Request<{}, {}, ContactSubmission>,
  res: Response
): Promise<void> => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  try {
    await pool.query(queries.INSERT_CONTACT, [name, email, message]);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
