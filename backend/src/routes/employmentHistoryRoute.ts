import { Router } from "express";
import { getEmploymentHistory } from "../handlers/employmentHistoryRoute";

const router = Router();
router.get("/", getEmploymentHistory);

export default router;
