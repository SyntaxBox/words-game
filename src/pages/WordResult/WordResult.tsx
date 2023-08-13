import { StringUtils } from "../../shared";

function WordResult({ correct, typed }: { correct: string; typed: string }) {
  const res = StringUtils.compareStrings(correct, typed);
  console.log(res);
  return <div>WordResult</div>;
}

export default WordResult;
