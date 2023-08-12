import { useState } from "react";
import Letter from "../Letter/Letter";

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
  const columns = word.length;
  const rows = 7 - difficulty * 2;
  return (
    <div>
      <Letter Value={(l) => setFormedWord(formedWord + l)} />
    </div>
  );
}

export default GameEngine;
