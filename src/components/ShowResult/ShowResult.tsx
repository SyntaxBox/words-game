import ResultBlock from "./ResultBlock";

function ShowResult({
  result,
  duration,
}: {
  duration: number;
  result: {
    correct: boolean;
    letters: {
      letter: string;
      status: "correct" | "unplaced" | "wrong";
    }[];
  };
}) {
  const { letters, correct } = result;
  const eachLetterDuration = duration / result.letters.length;
  const delay = eachLetterDuration + 20;
  return (
    <div className="w-full flex gap-2 sm:gap-3 items-center justify-center max-w-[500px]">
      {letters.map(({ letter, status }, i) => {
        const d = delay * i;
        return (
          <ResultBlock
            key={i}
            letter={letter.toUpperCase()}
            status={correct ? "correctWord" : status}
            delay={d}
          />
        );
      })}
    </div>
  );
}

export default ShowResult;
