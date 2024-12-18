"use client";

import React from "react";
import { motion } from "framer-motion";
import QuestionCard from "@/components/QuestionCard";

type QuestionSlideProps = {
  currentIndex: number;
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
};

const QuestionSlide: React.FC<QuestionSlideProps> = ({
  currentIndex,
  question,
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <motion.div
      key={currentIndex} // Trigger animation on index change
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl"
    >
      <QuestionCard
        question={question}
        options={options}
        onSelect={onSelect}
        activeOption={selectedOption}
      />
    </motion.div>
  );
};

export default QuestionSlide;
