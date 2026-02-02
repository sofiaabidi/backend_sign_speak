import express from "express";
import { getCourse } from "../controllers/getCourse.js";
import authMiddleware from "../middleware/auth.js";
import requireEnrollment from "../middleware/requireEnrollment.js";

const router = express.Router();

router.get(
  "/:courseId",
  authMiddleware,
  requireEnrollment,
  getCourse
);

export default router;
