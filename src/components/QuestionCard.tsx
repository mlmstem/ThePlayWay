import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

type QuestionCardProps = {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  activeOption: string | null;
};

const QuestionCard = ({ question, options, onSelect, activeOption }: QuestionCardProps) => {
  return (
    <Card className="w-full shadow-md border rounded-lg bg-white">
      {/* Question Header */}
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-800">{question}</CardTitle>
      </CardHeader>

      {/* Options */}
      <CardContent>
        <div className="flex flex-col space-y-3">
          {options.map((option, index) => (
          <Button
          key={index}
          variant="outline"
          onClick={() => onSelect(option)}
          onTouchStart={() => onSelect(option)} // Instant feedback on touch
          className={`w-full text-left px-4 py-2 rounded-lg break-words whitespace-normal h-auto`}
          style={{
            backgroundColor: activeOption === option ? "#48bb78" : "#f7fafc", // Tailwind green and gray
            WebkitTapHighlightColor: "transparent", // Removes tap highlight on mobile
          }}
        >
           {option}
         </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;

