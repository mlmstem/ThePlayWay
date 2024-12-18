"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import QuizHeader from "@/components/QuizHeader";
import QuestionSlide from "@/components/QuestionSlide";
import FinishDialog from "@/components/FinishDialog";
import { questions } from "@/libs/question";

export default function Quiz() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const moduleId = searchParams.get("moduleId") || "Unknown";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const [wrongStreak, setWrongStreak] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const { toast } = useToast();

  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => setElapsedTime((time) => time + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    const correctAnswer = questions[currentIndex]?.answer;

    if (selectedOption !== correctAnswer) {
      setWrongStreak((prev) => prev + 1);
      if (wrongStreak === 1) {
        toast({
          title: "❕Careful!",
          description: `Please review your answer a little more carefully.\nIf you're struggling, we suggest checking out our online course.`,
          variant: "destructive",
        });
        setWrongStreak(0);
      }
    } else {
      setScore(score + 1);
      setWrongStreak(0);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setOpenDialog(true);
    }
  };

  const handleConfirmFinish = () => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/result?score=${score}&time=${elapsedTime}`);
    }, 1500);
  };

  return (
    <Suspense fallback={<div>Loading Quiz...</div>}>
      <div
        className="min-h-screen flex flex-col items-center bg-quiz-background bg-cover bg-center px-2 py-4"
        style={{ backgroundImage: "url('/assets/quiz-background.webp')" }}
      >
        {/* Header */}
        <div className="w-full max-w-4xl px-2 sm:px-4">
          <QuizHeader
            moduleId={moduleId}
            elapsedTime={elapsedTime}
            progress={((currentIndex + 1) / questions.length) * 100}
          />
        </div>

        <Toaster />

        {/* Content */}
        <div className="w-full max-w-4xl px-2 sm:px-4">
          {loading ? (
            <div className="text-center text-lg sm:text-xl font-semibold text-purple-700 mt-10">
              Loading Results...
            </div>
          ) : (
            <QuestionSlide
              currentIndex={currentIndex}
              question={questions[currentIndex]?.question}
              options={questions[currentIndex]?.options}
              onSelect={handleAnswer}
              selectedOption={selectedOption}
            />
          )}
        </div>

        {/* Buttons */}
        <div className="w-full max-w-4xl flex justify-end mt-4 px-2 sm:px-4">
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`w-full sm:w-auto px-4 py-2 rounded-lg text-sm sm:text-base transition ${
              selectedOption
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {currentIndex === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>

        {/* Finish Confirmation Dialog */}
        <FinishDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          onConfirm={handleConfirmFinish}
        />
      </div>
    </Suspense>
  );
}










