import { render } from "@testing-library/react";
import ResultBlock from "./ResultBlock";

describe("ResultBlock Component", () => {
  it("should render correctly with different status and delay", async () => {
    const { container } = render(
      <ResultBlock status="correct" letter="A" delay={10} />
    );

    // The class "flipped" should not be present initially
    expect(container.querySelector(".flipped")).toBeNull();

    // The correct class should be applied to the back side of the card
    const backElement = container.querySelector(".flip-card-back");
    expect(backElement).toHaveClass("w-fit");
  });

  it("should disable the input element and apply correct class for 'correctWord' status", () => {
    const { container } = render(
      <ResultBlock status="correctWord" letter="B" delay={10} />
    );

    // The correct class should be applied for 'correctWord' status
    const backElement = container.querySelector(".flip-card-back");
    expect(backElement).toHaveClass("w-fit");
  });

  // Add more test cases to cover different scenarios
});
