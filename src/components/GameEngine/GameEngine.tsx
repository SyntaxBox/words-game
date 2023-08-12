import { useState } from "react";
import Letter from "../Letter/Letter";
import { ArrayUtils } from "../../shared";

function GameEngine({
  difficulty,
  setScore,
  word,
}: {
  difficulty: 0 | 1 | 2;
  setScore: (score: number) => unknown;
  word: string;
}) {
  const [formedWord, setFormedWord] = useState("");
  const [row, setRow] = useState(0);
  const [col, setColumn] = useState(0);
  const columns = ArrayUtils.createArray(word.length);
  const rows = ArrayUtils.createArray(7 - difficulty * 2);
  const currentPositon = [row, col];
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {rows.map((_, i) => {
        return (
          <div className="flex items-center justify-center gap-3">
            {columns.map((_, j) => {
              const letterPosition = [i, j];
              return (
                <Letter focus onChange={(l) => setFormedWord(formedWord + l)} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default GameEngine;
