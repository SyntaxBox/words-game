import { render } from "@testing-library/react";
import P from "./P";

describe("P Component", () => {
  it("should render the children correctly", () => {
    const { getByText } = render(<P>Hello World</P>);
    const PElement = getByText("Hello World");
    expect(PElement).toBeInTheDocument();
  });
});
