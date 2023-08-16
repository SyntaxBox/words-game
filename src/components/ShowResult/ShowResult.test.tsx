import { render, waitFor } from "@testing-library/react";
import ShowResult from "./ShowResult";

describe("ShowResult Component", () => {
  const result: {
    correct: boolean;
    letters: {
      letter: string;
      status: "correct" | "unplaced" | "wrong";
    }[];
  } = {
    correct: true,
    letters: [
      { letter: "A", status: "correct" },
      { letter: "B", status: "unplaced" },
      { letter: "C", status: "wrong" },
    ],
  };

  const { getAllByDisplayValue, container } = render(
    <ShowResult result={result} duration={1000} />
  );

  // Check if the ResultBlocks are rendered for each letter
  const resultBlockElements = container.querySelectorAll(".flip-card");
  expect(resultBlockElements).toHaveLength(result.letters.length);

  it("should render correctly with correct result", async () => {
    // Check if each letter's status is correctly displayed
    await waitFor(() => {
      result.letters.forEach(({ letter, status }) => {
        const inputElement = getAllByDisplayValue(letter.toUpperCase());
        expect(inputElement[0]).toBeInTheDocument();
        expect(inputElement[1]).toBeInTheDocument();
        expect(
          inputElement[1].className.includes(
            status === "correct"
              ? "bg-pink-500"
              : status === "unplaced"
              ? "bg-orange-500"
              : "bg-red-500"
          )
        );
      });
    });
  });
});
