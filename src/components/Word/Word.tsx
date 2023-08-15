import { useEffect, useState } from "react";
import Letter from "../Letter/Letter";
import { ArrayUtils, StringUtils } from "../../shared";
import Alert from "../Alert/Alert";

function Word({
  word,
  focus,
  wordsList,
  onChange,
}: {
  word: string;
  focus?: boolean;
  wordsList: string[];
  onChange: (res: string) => any;
}) {
  const columns = ArrayUtils.createArray(word.length);
  const [composedWord, setComposedWord] = useState("");
  const [wrongWord, setWrongWord] = useState(false);
  const [currentCol, setCurrentCol] = useState(0);
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
      const diff = StringUtils.compareStrings(word, composedWord.toLowerCase());
      if (diff.correct) onChange("");
    } else setWrongWord(true);
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {columns.map((_, i) => {
        const current = focus && i === currentCol;
        return <Letter key={i} focus={current} onChange={handleLetterChange} />;
      })}
      {wrongWord && (
        <Alert
          title="Word is not Valid"
          description="this word is not valid in our words base. please try typing another word"
          className="absolute top-0 right-0"
        />
      )}
    </div>
  );
}

export default Word;
