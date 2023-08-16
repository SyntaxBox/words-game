import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Game from "./Game";

test("renders game with correct behavior", () => {
  const { queryByText } = render(
    <MemoryRouter>
      <Game />
    </MemoryRouter>
  );

  expect(screen).toBeDefined();
  const gameOverWord = "GameOverWord";
  const gameOverScore = 123;
  const gameOverComponent = queryByText(
    `Game Over! Word: ${gameOverWord} Score: ${gameOverScore}`
  );

  expect(gameOverComponent).not.toBeInTheDocument();
});
