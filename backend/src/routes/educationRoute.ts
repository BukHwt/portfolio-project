import { Router } from "express";
import { getEducation } from "../handlers/educationRoute";

const router = Router();
router.get("/", getEducation);

export default router;
