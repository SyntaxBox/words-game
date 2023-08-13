import { useState } from "react";
import { ArrayUtils } from "../../shared";
import Word from "../Word/Word";

function GameEngine({
  difficulty,
  setScore,
  word,
}: {
  difficulty: 0 | 1 | 2;
  setScore: (score: number) => unknown;
  word: string;
}) {
  const rowLength = ArrayUtils.createArray(7 - difficulty * 2);
  const [currentRow, setCurrentRow] = useState(0);
  const handleChange = (res: boolean) => {
    if (res) "console.log(res);";
    else setCurrentRow((p) => p + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {rowLength.map((_, i) => {
        return (
          <Word
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
