import { P } from "../../ui";

function Score({ score }: { score: number }) {
  return (
    <div>
      <P>{score} Points</P>
    </div>
  );
}

export default Score;
