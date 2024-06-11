import { render } from "@testing-library/react";
import { Container } from "./Container";

describe("Container Component", () => {
  it("should render the children correctly", () => {
    const { getByText } = render(<Container>Hello World</Container>);
    const containerElement = getByText("Hello World");
    expect(containerElement).toBeInTheDocument();
  });
});
