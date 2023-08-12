import { useEffect, useState } from "react";
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
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    row,
    col,
  ]);
  const colLength = ArrayUtils.createArray(word.length);
  const rowLength = ArrayUtils.createArray(7 - difficulty * 2);
  const handleLetterChange = (l: string) => {
    setFormedWord(formedWord + l);
    if (row === rowLength.length - 1) {
      setRow(0);
      setColumn((p) => p + 1);
    } else setRow((p) => p + 1);
  };

  useEffect(() => {
    setCurrentPosition([row, col]);
  }, [col, row]);
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {rowLength.map((_, i) => {
        return (
          <div className="flex items-center justify-center gap-3">
            {colLength.map((_, j) => {
              const letterPosition = [i, j];
              const current = ArrayUtils.compare(
                currentPosition,
                letterPosition
              );
              return <Letter focus={current} onChange={handleLetterChange} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default GameEngine;
