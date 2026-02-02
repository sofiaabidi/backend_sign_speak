import express from "express";
import { markLectureComplete } from "../controllers/progressController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/complete", authMiddleware, markLectureComplete);

export default router;
