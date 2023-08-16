import { useState } from "react";
import { ArrayUtils } from "../../shared";
import Word from "../Word/Word";

function GameEngine({
  difficulty,
  setScore,
  word,
  wordsList,
  onGameOver,
}: {
  difficulty: 0 | 1 | 2;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  word: string;
  wordsList: string[];
  onGameOver: (word: string) => void;
}) {
  const rowLength = ArrayUtils.createArray(7 - difficulty * 2);
  const [currentRow, setCurrentRow] = useState(0);
  const handleChange = (res: boolean) => {
    if (res) {
      setScore(
        (p: number) => p + word.length * rowLength.length - currentRow * 2
      );
      setCurrentRow(0);
    } else {
      if (currentRow < rowLength.length - 1) setCurrentRow((p) => p + 1);
      else {
        onGameOver(word);
      }
    }
  };
  return (
    <div
      data-testid="game-engine"
      className={`flex max-w-[500px] w-screen flex-col items-center justify-center gap-2 sm:gap-3`}
    >
      {rowLength.map((_, i) => {
        return (
          <Word
            wordsList={wordsList}
            onChange={handleChange}
            focus={currentRow === i}
            word={word}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default GameEngine;
