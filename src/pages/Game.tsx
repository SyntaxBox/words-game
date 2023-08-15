import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "../ui";
import { useEffect, useState } from "react";
import GameEngine from "../components/GameEngine/GameEngine";
import Score from "../components/Score/Score";
import { ArrayUtils, StringUtils } from "../shared";
import { wordsArr } from "../assets";
import GameOver from "../components/GameOver/GameOver";

function Game() {
  const location = useLocation();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [word, setWord] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState("");

  const difficulty = location.state?.difficulty;
  const wordLength = location.state?.wordLength;
  useEffect(() => {
    if (!Number.isInteger(difficulty)) navigate("/");
    if (!Number.isInteger(wordLength)) navigate("/");
  }, []);

  useEffect(() => {
    if (Number.isInteger(wordLength))
      setWords(StringUtils.splitChunks(wordsArr[wordLength], wordLength + 3));
  }, [wordLength]);
  useEffect(() => {
    if (words) setWord(ArrayUtils.randomSelect(words));
  }, [words, score]);
  if (!word) return null;

  return (
    <Container className="flex justify-center mt-24">
      <div className="flex items-center justify-center flex-col gap-6">
        <Score score={score} />
        <GameEngine
          difficulty={difficulty}
          setScore={setScore}
          word={word}
          wordsList={words}
          onGameOver={(word) => setGameOver(word)}
        />
      </div>
      {gameOver && <GameOver word={gameOver} score={score} />}
    </Container>
  );
}

export default Game;
