import { useLocation } from "react-router-dom";
import Container from "../ui/layout/Container";
import { useState } from "react";
import GameEngine from "../components/GameEngine/GameEngine";
import Score from "../components/Score/Score";

function Game() {
  const location = useLocation();
  const [score, setScore] = useState(0);
  const difficulty = location.state?.difficulty ?? 1;
  return (
    <Container className="flex gap-4">
      <div className="w-fit">
        <Score score={score} />
      </div>
      <div className="flex items-center justify-center">
        <GameEngine difficulty={difficulty} setScore={setScore} word="hello" />
      </div>
    </Container>
  );
}

export default Game;
