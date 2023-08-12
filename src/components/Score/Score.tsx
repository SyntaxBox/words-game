import P from "../../ui/typography/P";

function Score({ score }: { score: number }) {
  return (
    <div>
      <P>{score} Points</P>
    </div>
  );
}

export default Score;
