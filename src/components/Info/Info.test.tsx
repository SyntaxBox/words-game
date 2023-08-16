import { render } from "@testing-library/react";
import Info from "./Info";

describe("Info Component", () => {
  it("should show the correct color meanings for letter comparisons", () => {
    const { queryByText } = render(<Info setShowInfo={() => {}} />);

    const greenText = queryByText("Green:");
    const orangeText = queryByText("Orange:");
    const redText = queryByText("Red:");
    const pinkText = queryByText("Pink:");

    expect(greenText).toBeInTheDocument();
    expect(orangeText).toBeInTheDocument();
    expect(redText).toBeInTheDocument();
    expect(pinkText).toBeInTheDocument();
  });

  it("should display example results correctly", () => {
    const { queryByText } = render(<Info setShowInfo={() => {}} />);

    // Check if the initial example results are visible
    expect(queryByText("Green:")).toBeInTheDocument();
    expect(queryByText("Orange:")).toBeInTheDocument();
    expect(queryByText("Red:")).toBeInTheDocument();
    expect(queryByText("Pink:")).toBeInTheDocument();

    // Simulate waiting for the example result to finish
    setTimeout(() => {
      // After the example result animation, the corresponding texts should not be in the document
      expect(queryByText("Green:")).not.toBeInTheDocument();
      expect(queryByText("Orange:")).not.toBeInTheDocument();
      expect(queryByText("Red:")).not.toBeInTheDocument();
      expect(queryByText("Pink:")).not.toBeInTheDocument();
    }, 1000);
  });
});
