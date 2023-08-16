import { vi } from "vitest";
import { render } from "@testing-library/react";
import GameEngine from "./GameEngine";
import { wordsArr } from "../../assets";
import { StringUtils } from "../../shared";

const wordsList = StringUtils.splitChunks(wordsArr[1], 4);

describe("GameEngine", () => {
  const gameOver = vi.fn();
  const { getByTestId } = render(
    <GameEngine
      difficulty={0}
      setScore={vi.fn()}
      word="hello"
      wordsList={wordsList}
      onGameOver={gameOver}
    />
  );
  it("should be defined and displayed", () => {
    const gameEngineComponent = getByTestId("game-engine");
    expect(gameEngineComponent).toBeDefined();
    expect(gameEngineComponent).toBeInTheDocument();
  });
});
