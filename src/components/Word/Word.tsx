import { useEffect, useState } from "react";
import Letter from "../Letter/Letter";
import { ArrayUtils, StringUtils } from "../../shared";
import Alert from "../Alert/Alert";
import ShowResult from "../ShowResult/ShowResult";
import ConfettiExplosion from "react-confetti-explosion";

function Word({
  word,
  focus,
  wordsList,
  onChange,
}: {
  word: string;
  focus?: boolean;
  wordsList: string[];
  onChange: (res: boolean) => any;
}) {
  const [columns, setColumns] = useState(ArrayUtils.createArray(word.length));
  const [composedWord, setComposedWord] = useState("");
  const [wrongWord, setWrongWord] = useState(false);
  const [currentCol, setCurrentCol] = useState(0);
  const [result, setResult] = useState<{
    correct: boolean;
    letters: {
      letter: string;
      status: "correct" | "unplaced" | "wrong";
    }[];
  } | null>(null);
  useEffect(() => {
    setColumns(ArrayUtils.createArray(word.length));
    setComposedWord("");
    setWrongWord(false);
    setCurrentCol(0);
    setResult(null);
  }, [word]);
  const handleLetterChange = (l: string) => {
    if (wrongWord === false) setWrongWord(false);
    if (l === "delete") {
      currentCol > 0 && setCurrentCol((p) => p - 1);
      if (composedWord.length === word.length)
        setComposedWord((w) => w.slice(0, -2));
      else if (composedWord.length) setComposedWord((w) => w.slice(0, -1));
    } else {
      currentCol < word.length - 1 && setCurrentCol((p) => p + 1);
      setComposedWord((w) => w + l);
    }
  };

  useEffect(() => {
    if (composedWord.length === word.length) {
      handleCompare();
    }
  }, [composedWord]);

  useEffect(() => {
    if (currentCol === 0) setComposedWord("");
  }, [currentCol]);

  const handleCompare = () => {
    const isValidWord = wordsList.includes(composedWord.toLocaleLowerCase());
    if (isValidWord) {
      setResult(StringUtils.compareStrings(word, composedWord.toLowerCase()));
    } else setWrongWord(true);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      if (result !== null) {
        onChange(result.correct);
      }
    }, word.length * 200 + 500);
    return () => clearTimeout(t);
  }, [result]);

  return (
    <div
      data-testid="word"
      className="flex w-full items-center px-3 justify-center gap-2 sm:gap-3"
    >
      {!result ? (
        <>
          {columns.map((_, i) => {
            const current = focus && i === currentCol;
            return (
              <Letter key={i} focus={current} onChange={handleLetterChange} />
            );
          })}
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <ShowResult duration={word.length * 200} result={result} />
          {result?.correct && <ConfettiExplosion />}
        </div>
      )}
      {wrongWord && (
        <Alert
          title="Warning: Word is not Valid"
          className="absolute top-0 w-full sm:top-4 sm:right-6 lg:right-16"
        >
          <p>Please try typing another word</p>
          <p>
            Try for example:{" "}
            <strong className="text-lg text-bold">
              {" "}
              {ArrayUtils.randomSelect(wordsList).toUpperCase()}
            </strong>
          </p>
        </Alert>
      )}
    </div>
  );
}

export default Word;
