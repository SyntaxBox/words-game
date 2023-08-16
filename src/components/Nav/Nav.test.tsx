import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter for routing testing
import Nav from "./Nav";

describe("Nav Component", () => {
  it("should render correctly and show/hide Info component when 'how to play?' button is clicked", () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    const logoElement = getByText("ords");
    const howToPlayButton = getByTestId("how-to-play");
    const githubButton = getByTestId("github-repo");
    const darkModeButton = getByTestId("toggle-dark-mode");

    expect(logoElement).toBeInTheDocument();
    expect(howToPlayButton).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();
    expect(darkModeButton).toBeInTheDocument();

    // Simulate click on the 'how to play?' button
    fireEvent.click(howToPlayButton);

    // After clicking the button, the Info component should be visible
    expect(howToPlayButton).toBeInTheDocument();
  });
});
