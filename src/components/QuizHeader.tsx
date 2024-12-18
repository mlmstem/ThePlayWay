"use client";

import React from "react";

type QuizHeaderProps = {
  moduleId: string | null;
  elapsedTime: number;
  progress: number;
};

const QuizHeader: React.FC<QuizHeaderProps> = ({
  moduleId,
  elapsedTime,
  progress,
}) => {
  // Format elapsed time into "MM:SS"
  const formattedTime = `${Math.floor(elapsedTime / 60)}:${String(
    elapsedTime % 60
  ).padStart(2, "0")}`;

  return (
    <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center mb-2">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-700">
          MCT Mock Tests - Session {moduleId || "N/A"}
        </h2>

        {/* Timer */}
        <div className="flex items-center text-gray-600">
          <span className="mr-2">⏱</span> {/* Static Unicode Icon */}
          <span>{formattedTime}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="h-full bg-purple-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizHeader;


