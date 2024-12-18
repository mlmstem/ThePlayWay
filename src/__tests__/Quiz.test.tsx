import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Quiz from "@/app/quiz/page"; // Adjust the path if needed
import { useRouter, useSearchParams } from "next/navigation";
import { questions } from "@/libs/question";

// Mock useRouter and useSearchParams
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("Quiz Page", () => {
  beforeEach(() => {
    const mockPush = jest.fn();
    const mockSearchParams = new URLSearchParams({ moduleId: "test-module" });
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  it("renders the Quiz page correctly", () => {
    render(<Quiz />);
    expect(screen.getByText(/Session/)).toBeInTheDocument();
  });

  it("selects an option and activates the next button", () => {
    render(<Quiz />);

    // Simulate selecting an option
    fireEvent.click(screen.getByText(questions[0].options[0]));
    expect(screen.getByText("Next")).not.toBeDisabled();
  });

  it("progresses to the next question on clicking Next", () => {
    render(<Quiz />);
  
    // Get the current question text
    const initialQuestionText = questions[0].question;
  
    // Verify the initial question is displayed
    expect(screen.getByText(initialQuestionText)).toBeInTheDocument();
  
    // Simulate selecting an option and clicking Next
    fireEvent.click(screen.getByText(questions[0].options[0]));
    fireEvent.click(screen.getByText("Next"));
  
    // Verify the next question is displayed
    const nextQuestionText = questions[1].question;
    expect(screen.getByText(nextQuestionText)).toBeInTheDocument();
    
  });

  it("opens the finish dialog after the last question", () => {
    render(<Quiz />);

    // Simulate answering all questions
    for (let i = 0; i < questions.length; i++) {
      fireEvent.click(screen.getByText(questions[i].options[0])); // Choose the first option
      fireEvent.click(screen.getByText(i === questions.length - 1 ? "Finish" : "Next")); // Click Next/Finish
    }

    // Check that the dialog is opened
    expect(screen.getByText("Are you sure you want to submit the quiz?")).toBeInTheDocument();
  });


  it("displays a toast when two wrong answers are selected consecutively", async () => {
    render(<Quiz />);

    // Simulate selecting two wrong answers
    fireEvent.click(screen.getByText(questions[0].options[1])); // Wrong option
    fireEvent.click(screen.getByText("Next"));
    fireEvent.click(screen.getByText(questions[1].options[1])); // Another wrong option

    // Check for the toast message
    await waitFor(() =>
      expect(screen.getByText(/Please review your answer a little more carefully/)).toBeInTheDocument()
    );
  });
});


