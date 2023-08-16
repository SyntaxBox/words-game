import { render } from "@testing-library/react";
import Score from "./Score";

describe("Score Component", () => {
  it("should render the score correctly", () => {
    const { getByText } = render(<Score score={100} />);

    const scoreElement = getByText("100 Points");
    expect(scoreElement).toBeInTheDocument();
  });
});
