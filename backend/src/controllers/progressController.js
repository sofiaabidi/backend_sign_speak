import Enrollment from "../models/Enrollment.js";

export const markLectureComplete = async (req, res) => {
  const { courseId, lectureId } = req.body;
  const userId = req.user._id;

  await Enrollment.updateOne(
    { userId, courseId },
    {
      $addToSet: { completedLectures: lectureId },
      lastWatchedLecture: lectureId
    }
  );

  res.json({ success: true });
};
