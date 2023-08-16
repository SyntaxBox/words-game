import { render } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert Component", () => {
  it("should render the title and children", () => {
    const title = "Test Title";
    const childrenText = "Test Children";

    const { getByText } = render(
      <Alert title={title}>
        <p>{childrenText}</p>
      </Alert>
    );

    const titleElement = getByText(title);
    const childrenElement = getByText(childrenText);

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });

  it("should render with additional class name", () => {
    const title = "Test Title";
    const className = "custom-class";

    const { container } = render(
      <Alert title={title} className={className}>
        <p>Test Children</p>
      </Alert>
    );

    const alertElement = container.firstChild;

    expect(alertElement).toHaveClass(className);
  });

  it("should render the alert icon", () => {
    const title = "Test Title";
    const { container } = render(
      <Alert title={title}>
        <p>Test Children</p>
      </Alert>
    );

    const iconElement = container.querySelector("svg");
    expect(iconElement).toBeInTheDocument();
  });
});
