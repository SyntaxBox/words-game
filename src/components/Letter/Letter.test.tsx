import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Letter from "./Letter";

describe("Letter Component", () => {
  it("should render correctly", () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(<Letter onChange={onChangeMock} />);

    const letterInput = getByRole("textbox");
    expect(letterInput).toBeInTheDocument();
  });

  it("should focus the input when focus prop is true", () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(
      <Letter focus={true} onChange={onChangeMock} />
    );

    const letterInput = getByRole("textbox");
    expect(letterInput).toHaveFocus();
  });

  it("should not focus the input when focus prop is false", () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(
      <Letter focus={false} onChange={onChangeMock} />
    );

    const letterInput = getByRole("textbox");
    expect(letterInput).not.toHaveFocus();
  });

  it("should call onChange when a valid letter is entered", () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(<Letter onChange={onChangeMock} />);

    const letterInput = getByRole("textbox");
    fireEvent.change(letterInput, { target: { value: "A" } });

    expect(onChangeMock).toHaveBeenCalledWith("A");
  });

  it("should clear the input and call onChange with an empty string when Backspace is pressed and there's a value", () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(<Letter onChange={onChangeMock} />);

    const letterInput = getByRole("textbox");
    fireEvent.change(letterInput, { target: { value: "A" } });
    fireEvent.keyDown(letterInput, { key: "Backspace" });

    expect(onChangeMock).toHaveBeenCalledWith("A");
  });
});
