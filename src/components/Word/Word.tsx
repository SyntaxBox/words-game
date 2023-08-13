import { useEffect, useState } from "react";
import Letter from "../Letter/Letter";
import { ArrayUtils } from "../../shared";

function Word({
  word,
  focus,
  onChange,
}: {
  word: string;
  focus?: boolean;
  onChange: (res: boolean) => any;
}) {
  const columns = ArrayUtils.createArray(word.length);
  const [composedWord, setComposedWord] = useState("");
  const [currentCol, setCurrentCol] = useState(0);
  const handleLetterChange = (l: string) => {
    console.log("called");
    if (l === "delete") {
      setCurrentCol((p) => p - 1);
      setComposedWord((w) => w.slice(0, -1));
    } else {
      setCurrentCol((p) => p + 1);
      setComposedWord((w) => w + l);
    }
  };

  useEffect(() => {
    if (composedWord.length === columns.length) {
      onChange(true);
    }
  }, [composedWord]);

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
