"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component

export default function Home() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-only state logic here
      setIsClient(true);
    }
  }, []);

  // Start Quiz Handler
  const startQuiz = () => {
    if (!activeButton) {
      setActiveButton(true); // Set active state
      router.push("/quiz"); // Navigate to the quiz page
    }
  };

  if (!isClient) {
    // Render nothing or a loader while waiting for client-side rendering
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header with Logo */}
      <header className="w-full max-w-6xl py-4 px-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-600">
          <span className="text-purple-500">THE</span>
          <span className="text-teal-400">PlayWay</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center max-w-6xl px-6 mt-6 lg:mt-12">
        {/* Left Section - Text Content */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 leading-snug">
            START A FREE <br />
            <span className="text-purple-500">QUIZ</span>{" "}
            <span className="text-yellow-400">NOW</span>
          </h1>
          <p className="text-gray-600 text-lg">
            This is a quiz to test your parenting skills, make sure you have studied our online course before taking this test.
          </p>
          {/* Start Quiz Button */}
          <button
            onClick={startQuiz}
            disabled={activeButton} // Prevent duplicate clicks
            className={`px-6 py-3 text-lg font-semibold rounded-full shadow-md transition ${
              activeButton
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-green-500"
            }`}
          >
            Let&apos;s do it!
          </button>
        </div>

        {/* Right Section - Side Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/welcome.webp" // Path to the image
            alt="Welcome Illustration"
            width={500} // Adjust width
            height={400} // Adjust height
            priority // Load image as a priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}






