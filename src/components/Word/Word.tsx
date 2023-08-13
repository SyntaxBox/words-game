import { useEffect, useState } from "react";
import Letter from "../Letter/Letter";
import { ArrayUtils, StringUtils } from "../../shared";

function Word({
  word,
  focus,
  onChange,
}: {
  word: string;
  focus?: boolean;
  onChange: (res: string) => any;
}) {
  const columns = ArrayUtils.createArray(word.length);
  const [composedWord, setComposedWord] = useState("");
  const [currentCol, setCurrentCol] = useState(0);
  const handleLetterChange = (l: string) => {
    if (l === "delete") {
      currentCol > 0 && setCurrentCol((p) => p - 1);
      composedWord.length && setComposedWord((w) => w.slice(0, -1));
    } else {
      setCurrentCol((p) => p + 1);
      setComposedWord((w) => w + l);
    }
  };

  useEffect(() => {
    if (composedWord.length === columns.length) {
      handleCompare();
    }
  }, [composedWord]);

  const handleCompare = () => {
    const diff = StringUtils.compareStrings(word, composedWord.toLowerCase());
    console.log(word);
    console.log(diff);
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {columns.map((_, i) => {
        const current = focus && i === currentCol;
        return <Letter key={i} focus={current} onChange={handleLetterChange} />;
      })}
    </div>
  );
}

export default Word;
