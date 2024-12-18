"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

export default function Result() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = searchParams.get("score") || "0"; // Fetch score from query params
  const timeElapsed = searchParams.get("time") || "0"; // Fetch elapsed time
  const totalQuestions = 5; // Total questions
  const percentage = Math.round((Number(score) / totalQuestions) * 100); // Calculate percentage
  const isPassed = percentage >= 50; // Determine pass or fail

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/result-background.png')" }}
    >
      <div className="bg-white rounded-2xl shadow-md max-w-4xl w-full p-8 text-center space-y-6">
        {/* Title & Elapsed Time Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Result Of Your Practice Test
          </h2>
          <div className="flex items-center text-gray-500">
            <span className="mr-1">⏳</span>
            <span>
              Time Elapsed: {Math.floor(Number(timeElapsed) / 60)}m{" "}
              {Number(timeElapsed) % 60}s
            </span>
          </div>
        </div>

        {/* Score Section */}
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-500 inline-flex justify-center">
            Congratulations! You have scored
          </p>
          <p className="text-5xl font-extrabold text-purple-700">{percentage}%</p>
        </div>

        {/* Badge or Earth Image */}
        <div className="flex justify-center items-center">
          {isPassed ? (
            <Image
              src="/assets/badge.svg" // Path to badge image
              alt="Badge"
              width={150}
              height={150}
              priority
            />
          ) : (
            <Image
              src="/assets/earth.png" // Path to earth image
              alt="Earth"
              width={150}
              height={150}
              priority
            />
          )}
        </div>

        {/* Badge Message */}
        <p className="text-gray-600 text-lg">
          {isPassed ? "You earned the badge" : "Better luck next time!"}
        </p>

        {/* Back to Home Button */}
        <button
          onClick={handleBackToHome}
          className="w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}
