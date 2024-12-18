import { render, screen, fireEvent } from "@testing-library/react";
import Result from "@/app/result/page"; // Adjust the import path as needed
import { useSearchParams, useRouter } from "next/navigation";

// Mock useRouter and useSearchParams
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("Result Page", () => {
  beforeEach(() => {
    const mockPush = jest.fn();
    const mockSearchParams = new URLSearchParams({
      score: "4",
      time: "300",
    });
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  it("renders the Result page correctly with passed score", () => {
    render(<Result />);

    expect(screen.getByText("Result Of Your Practice Test")).toBeInTheDocument();
    expect(screen.getByText("Congratulations! You have scored")).toBeInTheDocument();
    expect(screen.getByText("80%")).toBeInTheDocument(); // Percentage score
    expect(screen.getByAltText("Badge")).toBeInTheDocument(); // Passed badge
    expect(screen.getByText("You earned the badge")).toBeInTheDocument();
  });

  it("renders the Result page correctly with failed score", () => {
    const mockSearchParams = new URLSearchParams({
      score: "2",
      time: "300",
    });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);

    render(<Result />);

    expect(screen.getByText("Result Of Your Practice Test")).toBeInTheDocument();
    expect(screen.getByText("40%")).toBeInTheDocument(); // Percentage score
    expect(screen.getByAltText("Earth")).toBeInTheDocument(); // Failed badge
    expect(screen.getByText("Better luck next time!")).toBeInTheDocument();
  });

  it("navigates back to home when 'Back To Home' button is clicked", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush }); // Mock push function
  
    render(<Result />); // Render the Result component
  
    const backButton = screen.getByText("Back To Home"); // Locate the back button
    fireEvent.click(backButton); // Simulate the click event
  
    expect(mockPush).toHaveBeenCalledTimes(1); // Assert that mockPush was called once
    expect(mockPush).toHaveBeenCalledWith("/"); // Assert that it navigates to "/"
  });
});
