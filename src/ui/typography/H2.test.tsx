import { render } from "@testing-library/react";
import { H2 } from "./H2";

describe("H2 Component", () => {
  it("should render the children correctly", () => {
    const { getByText } = render(<H2>Hello World</H2>);
    const H2Element = getByText("Hello World");
    expect(H2Element).toBeInTheDocument();
  });
});
