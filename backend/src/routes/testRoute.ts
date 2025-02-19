import { Router } from "express";
import { getTestDB } from "../handlers/testRoute";

const router = Router();
router.get("/", getTestDB);

export default router;
