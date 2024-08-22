import { useApp } from "@contexts/appContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { HamburgerButton } from ".";

vi.mock("@contexts/appContext", () => ({
  useApp: vi.fn(),
}));

describe("Hamburger Button", () => {
  it("renders the button with the correct initial area-label", () => {
    // @ts-ignore
    (useApp as vi.Mock).mockReturnValue({
      app: { hamburger: false },
      setApp: vi.fn(),
    });

    render(<HamburgerButton />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Open menu");
  });

  it("toggles aria-expanded attribute on click", () => {
    const setApp = vi.fn();
    // @ts-ignore
    (useApp as vi.Mock).mockReturnValue({
      app: { hamburger: false },
      setApp,
    });

    render(<HamburgerButton />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(button);
    expect(setApp).toHaveBeenCalled();
  });
});
