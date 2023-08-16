import { render } from "@testing-library/react";
import DarkModeButton from "./DarkMode";

describe("DarkModeButton Component", () => {
  it("should toggle dark mode on button click", () => {
    const { getByTestId } = render(<DarkModeButton />);
    const darkModeButton = getByTestId("dark-mode-button");

    expect(darkModeButton).toBeInTheDocument();
  });
});
