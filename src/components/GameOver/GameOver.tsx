import { Link } from "react-router-dom";

function GameOver({ score, word }: { score: number; word: string }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-slate-900 outline-none focus:outline-none">
            <div className="dark:text-white flex items-start justify-between p-5 border-b border-solid border-slate-200 dark:border-slate-700 rounded-t">
              <h3 className="text-3xl font-semibold">Game Over :(</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 dark:text-slate-400  text-lg leading-relaxed">
                You got{" "}
                <strong className="text-2xl text-pink-500">{score}</strong>{" "}
                point
                {score !== 1 && "s"}
              </p>
              <p className="my-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                The Word Was{" "}
                <strong className="text-2xl text-pink-500">
                  {word.toUpperCase()}
                </strong>
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 dark:border-slate-700 rounded-b">
              <Link
                to="/"
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Play Again
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
export default GameOver;
