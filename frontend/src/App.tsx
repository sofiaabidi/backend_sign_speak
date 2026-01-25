import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { LiveTranslation } from "./components/LiveTranslation";
import { LearningMode } from "./components/LearningMode";
import { PracticeMode } from "./components/PracticeMode";
import { Accessibility } from "./components/Accessibility";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserStatsPage from "./pages/UserStatsPage";
import LessonPage from "./pages/LessonPage";
import DesignCourseApp from "./pages/Design Course Lesson Page/src/app/App";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuth } from "./contexts/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <LiveTranslation />
        <LearningMode />
        <PracticeMode />
        <Accessibility />

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/stats" element={<UserStatsPage />} />
      <Route
        path="/lesson/:courseId"
        element={
          <ProtectedRoute>
            <LessonPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/course/:courseId"
        element={
          <ProtectedRoute>
            <DesignCourseApp />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
