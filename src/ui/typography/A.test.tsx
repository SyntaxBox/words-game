import { render } from "@testing-library/react";
import { A } from "./A";

describe("A Component", () => {
  it("should render the children correctly", () => {
    const { getByText } = render(<A>Hello</A>);
    const buttonElement = getByText("Hello");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should apply the given props to the button", () => {
    const { getByText } = render(<A aria-label="test">Test</A>);
    const buttonElement = getByText("Test");
    expect(buttonElement).toHaveAttribute("aria-label", "test");
  });
});
