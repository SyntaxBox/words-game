import { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "../components/Tabs/Tabs";
import { H1, Container, A, TextButton } from "../ui";
import Range from "../components/Range/Range";
import Info from "../components/Info/Info";

function Home() {
  const [difficulty, setDifficulty] = useState<number>(0);
  const [wordLength, setWordLength] = useState<number>(3);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Container className="flex flex-col items-center justify-between gap-8 sm:gap-12 py-24 min-h-[calc(100vh-20px)] max-h-screen">
      <H1>
        Welcome To <span className="text-pink-500">Words</span> Game
      </H1>
      <div className="flex flex-col items-start justify-center gap-6">
        <Tabs
          tabs={["Easy", "Medium", "Hard"]}
          currentTab={difficulty}
          text="Select Difficulty:"
          setCurrentTab={setDifficulty}
        />
        <Range
          min={0}
          max={5}
          value={wordLength}
          correctionFactor={3}
          setValue={setWordLength}
          text="Select Word Length:"
        />
      </div>
      <Link to="/game" state={{ difficulty, wordLength }}>
        <TextButton>Start!</TextButton>
      </Link>
      <A onClick={() => setShowInfo(true)}>Don't know how to play ?</A>
      {showInfo && <Info setShowInfo={setShowInfo} />}
    </Container>
  );
}

export default Home;
