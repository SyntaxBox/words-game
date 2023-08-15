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
    <div>
      {letters.map(({ letter, status }, i) => {
        const d = delay * i;
        return (
          <div
            className={`py-4 px-8 inline-flex justify-center items-center gap-2 rounded-md border border-transparent  font-semibold text-xl transition-all aspect-square bg-pink-100 dark:hover:bg-[#ec489a68] dark:bg-[#ec489a3c] text-pink-500 dark:text-pink-400   ${
              status === "correct"
                ? "bg-pink-500"
                : status === "unplaced"
                ? "bg-orange-500"
                : "bg-red-500"
            }`}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
}

export default ShowResult;
