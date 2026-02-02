import Course from "../models/Course.js";
import Section from "../models/Section.js";
import Lecture from "../models/Lecture.js";
import cloudinary from "../config/cloudinary.js";

export const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
};

export const createSection = async (req, res) => {
  const section = await Section.create(req.body);

  await Course.findByIdAndUpdate(section.courseId, {
    $push: { sections: section._id }
  });

  res.status(201).json(section);
};

export const createLecture = async (req, res) => {
  const { title, courseId, sectionId } = req.body;

  const uploadResult = await cloudinary.uploader.upload(req.file.path, {
    resource_type: "video",
    folder: `courses/${courseId}`
  });

  const lecture = await Lecture.create({
    title,
    courseId,
    sectionId,
    videoPublicId: uploadResult.public_id,
    duration: Math.round(uploadResult.duration) + " sec"
  });

  await Section.findByIdAndUpdate(sectionId, {
    $push: { lectures: lecture._id }
  });

  res.status(201).json(lecture);
};
