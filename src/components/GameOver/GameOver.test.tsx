import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter for routing testing
import GameOver from "./GameOver";

describe("GameOver Component", () => {
  it("should render correctly with the provided props", () => {
    const score = 10;
    const word = "example";
    const { getByText } = render(
      <MemoryRouter>
        <GameOver score={score} word={word} />
      </MemoryRouter>
    );

    // Check if the text elements are present
    const scoreText = getByText(score);
    const wordText = getByText(word.toUpperCase());
    const playAgainButton = getByText("Play Again");

    expect(scoreText).toBeInTheDocument();
    expect(wordText).toBeInTheDocument();
    expect(playAgainButton).toBeInTheDocument();
  });

  it("should navigate to the home page when 'Play Again' button is clicked", () => {
    const { getByText } = render(
      <MemoryRouter>
        <GameOver score={10} word="example" />
      </MemoryRouter>
    );

    const playAgainButton = getByText("Play Again");
    expect(playAgainButton).toBeInTheDocument();

    // Simulate click on the 'Play Again' button
    playAgainButton.click();

    // Assert the expected URL after the click
    expect(window.location.pathname).toBe("/");
  });

  // Add more test cases to cover different scenarios
});
