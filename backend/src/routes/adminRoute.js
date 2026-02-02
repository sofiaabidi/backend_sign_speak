import express from "express";
import upload from "../middleware/multer.js";
import {
  createCourse,
  createSection,
  createLecture
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/course", createCourse);
router.post("/section", createSection);
router.post("/lecture", upload.single("video"), createLecture);

export default router;
