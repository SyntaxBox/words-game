import { useEffect, useState } from "react";
import "./flippingCard.css";

function ResultBlock({
  status,
  letter,
  delay,
}: {
  status: "correct" | "unplaced" | "wrong" | "correctWord";
  letter: string;
  delay: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(true);
    }, delay);
  }, []);
  return (
    <div
      style={{ maxWidth: "48px" }}
      className={`flip-card max-h-12 max-w-12 ${isFlipped ? "flipped" : ""}`}
    >
      <div className="flip-card-inner" style={{ maxWidth: "48px" }}>
        <div className="flip-card-front w-fit">
          <input
            className="font-bold inter w-full max-w-[48px] bg-pink-100 dark:hover:bg-[#ec489a68] dark:bg-[#ec489a3c] border border-transparent text-pink-500 dark:text-pink-400 text-center rounded-md text-base sm:text-xl transition-all aspect-square"
            value={letter}
            disabled
          />
        </div>
        <div className="flip-card-back w-fit">
          <input
            className={`font-bold aspect-square inter w-full max-w-[48px] text-center rounded-md text-white text-base sm:text-xl transition-all ${
              status === "correctWord"
                ? "bg-pink-500"
                : status === "correct"
                ? "bg-green-500"
                : status === "unplaced"
                ? "bg-orange-500"
                : "bg-red-500"
            }`}
            value={letter}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default ResultBlock;
