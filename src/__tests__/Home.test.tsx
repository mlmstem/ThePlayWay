import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import { useRouter } from "next/navigation";

// Mock the useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Home page correctly", () => {
    render(<Home />);
    expect(screen.getByText(/START A FREE/)).toBeInTheDocument();
    expect(screen.getByText(/Let['’]s do it!/i)).toBeInTheDocument();
  });

  it("navigates to the quiz page when button is clicked", () => {
    render(<Home />);
    fireEvent.click(screen.getByText(/Let['’]s do it!/i));
    expect(mockPush).toHaveBeenCalledWith("/quiz");
  });

  
});
