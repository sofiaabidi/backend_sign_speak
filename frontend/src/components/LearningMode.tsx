import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BookOpen, Star, Clock, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const lessons = [
  {
    id: 1,
    title: "Basics",
    description: "Start with fundamental concepts and hand positions",
    duration: "15 min",
    difficulty: "Beginner",
    lessons: 12,
    icon: "👋",
    color: "blue",
    courseId: "basics"
  },
  {
    id: 2,
    title: "Alphabet",
    description: "Learn the complete sign language alphabet",
    duration: "30 min",
    difficulty: "Beginner",
    lessons: 26,
    icon: "🔤",
    color: "teal",
    courseId: "alphabet"
  },
  {
    id: 3,
    title: "Common Words",
    description: "Master everyday words and expressions",
    duration: "45 min",
    difficulty: "Intermediate",
    lessons: 50,
    icon: "💬",
    color: "purple",
    courseId: "commonWords"
  },
  {
    id: 4,
    title: "Phrases",
    description: "Practice common phrases and sentences",
    duration: "60 min",
    difficulty: "Intermediate",
    lessons: 35,
    icon: "💡",
    color: "orange",
    courseId: "phrases"
  },
  {
    id: 5,
    title: "Conversational",
    description: "Engage in full conversations with confidence",
    duration: "90 min",
    difficulty: "Advanced",
    lessons: 40,
    icon: "🗣️",
    color: "green",
    courseId: "conversational"
  }
];

const difficultyColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700"
};

export function LearningMode() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLessonClick = (courseId: string) => {
    if (user) {
      navigate(`/course/${courseId}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <section id="learn" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Learning Mode
          </Badge>
          <h2 className="text-gray-900 mb-4">
            Learn Sign Language Step by Step
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Structured lessons designed by experts to take you from beginner to conversational in sign language.
          </p>
        </div>

        {!user && (
          <div className="mb-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Login Required to Access Courses
              </h3>
              <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                Please login to your account or create a new account to view and access our sign language courses.
                Join our community of learners today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/login">Login to Account</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                  <Link to="/signup">Create New Account</Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {lessons.map((lesson) => (
            <Card 
              key={lesson.id} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-200"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center text-3xl">
                  {lesson.icon}
                </div>

                {/* Title and Difficulty */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-900">{lesson.title}</h3>
                    <Badge className={difficultyColors[lesson.difficulty as keyof typeof difficultyColors]}>
                      {lesson.difficulty}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {lesson.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{lesson.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900">0%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full gap-2 ${user ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 hover:bg-gray-500'}`} 
                  onClick={() => handleLessonClick(lesson.courseId)}
                  disabled={!user}
                >
                  {user ? 'Start Lesson' : 'Login Required'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white border-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <Star className="w-5 h-5 text-yellow-300" />
                <Star className="w-5 h-5 text-yellow-300" />
                <Star className="w-5 h-5 text-yellow-300" />
                <Star className="w-5 h-5 text-yellow-300" />
              </div>
              <h3 className="text-white mb-2">
                {user ? 'Continue Your Learning Journey' : 'Join Our Learning Community'}
              </h3>
              <p className="text-blue-100">
                {user 
                  ? 'Keep progressing through your personalized sign language courses.'
                  : 'Create your account today and start learning sign language with our interactive platform.'
                }
              </p>
            </div>
            {user ? (
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap">
                View All Courses
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                  <Link to="/signup">Sign Up Free</Link>
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
