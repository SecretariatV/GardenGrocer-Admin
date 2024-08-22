import { render, screen } from "@testing-library/react";
import LoadingPage from ".";

describe("LOding Page", () => {
  test("renders with animation when effect is true", () => {
    render(<LoadingPage effect={false} />);
    const rootElement = screen.getByRole("alert");
    expect(rootElement).toHaveAttribute("aria-busy", "true");
    expect(screen.getByText("Garden Grocer")).toBeInTheDocument();
  });

  test("contains hidden text for screen readers", () => {
    render(<LoadingPage effect={false} />);
    expect(screen.getByText("Loading, please wait...")).toBeInTheDocument();
  });
});
