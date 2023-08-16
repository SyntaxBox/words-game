import { render } from "@testing-library/react";
import Range from "./Range";

describe("Range Component", () => {
  it("should render correctly with initial props", () => {
    const { getByText } = render(
      <Range
        min={0}
        max={10}
        value={5}
        setValue={() => {}}
        correctionFactor={2}
        text="Test Range"
      />
    );

    const labelElement = getByText("Test Range");
    const valueElement = getByText("7"); // value + correctionFactor

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
