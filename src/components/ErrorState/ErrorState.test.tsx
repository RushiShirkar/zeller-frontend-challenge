import { render, screen, fireEvent } from "@testing-library/react";
import ErrorState from "./index";

describe("ErrorState", () => {
  it("renders with default props", () => {
    render(<ErrorState />);

    expect(screen.getByText("Error fetching customers")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong. Please try again.")).toBeInTheDocument();
  });

  it("renders with custom title and message", () => {
    render(<ErrorState title="Custom Error Title" message="Custom error message" />);
    expect(screen.getByText("Custom Error Title")).toBeInTheDocument();
    expect(screen.getByText("Custom error message")).toBeInTheDocument();
  });

  it("calls onRetry when retry button is clicked", () => {
    const mockRetry = jest.fn();
    render(<ErrorState onRetry={mockRetry} />);

    const retryButton = screen.getByRole("button", { name: /try again/i });
    fireEvent.click(retryButton);

    expect(mockRetry).toHaveBeenCalledTimes(1);
  });
});
