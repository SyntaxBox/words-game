import { useState } from "react";
import Tabs from "../components/Tabs/Tabs";
import Container from "../ui/layout/Container";
import H1 from "../ui/typography/H1";
import P from "../ui/typography/P";
import TextButton from "../ui/buttons/textButton";
import A from "../ui/typography/A";
import { Link } from "react-router-dom";

function Home() {
  const [currentTab, setCurrentTab] = useState<0 | 1 | 2>(0);
  return (
    <Container className="flex flex-col items-center justify-between gap-12 mt-16">
      <H1>
        Welcome To <span className="text-pink-500">Words</span> Game
      </H1>
      <div className="flex flex-col gap-3">
        <P>Select Difficulty</P>
        <Tabs
          tabs={["Easy", "Medium", "Hard"]}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      <Link to="/game" state={{ difficulty: currentTab }}>
        <TextButton>Start!</TextButton>
      </Link>
      <A>Don't know how to play ?</A>
    </Container>
  );
}

export default Home;
