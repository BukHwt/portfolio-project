import { Request, Response } from "express-serve-static-core";
import pool from "../db/neonDB";
import { queries } from "../queries/contact";
import { ContactSubmission } from "../types/contactSubmission";
import nodemailer from "nodemailer";

const sendEmailNotification = async (contact: ContactSubmission) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "stevesmurf1400@gmail.com",
    to: "swanderson79@gmail.com",
    subject: "New Contact Form Submission",
    text: `You have a new contact form submission:\n\nName: ${contact.name}\nEmail: ${contact.email}\nMessage: ${contact.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email notification sent successfully.");
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

export const submitContactForm = async (
  req: Request<{}, {}, ContactSubmission>,
  res: Response
): Promise<void> => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  if (!validateEmail(email)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  try {
    await pool.query(queries.INSERT_CONTACT, [name, email, message]);
    await sendEmailNotification({ name, email, message });
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
