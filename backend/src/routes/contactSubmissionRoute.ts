import { Router } from "express";
import { submitContactForm } from "../handlers/contactSubmissionRoute";

const router = Router();

router.post("/", submitContactForm);

export default router;
