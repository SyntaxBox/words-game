import React from "react";
import { render } from "@testing-library/react";
import H1 from "./H1";

describe("H1 Component", () => {
  it("should render the children correctly", () => {
    const { getByText } = render(<H1>Hello World</H1>);
    const h1Element = getByText("Hello World");
    expect(h1Element).toBeInTheDocument();
  });
});
