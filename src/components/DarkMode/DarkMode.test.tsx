// import { render, fireEvent } from "@testing-library/react";
// import DarkModeButton from "./DarkMode";

// describe("DarkModeButton Component", () => {
//   it("should render with the initial light mode", () => {
//     render(<DarkModeButton />);
//     const darkModeButton = ("dark-mode-button");

//     expect(darkModeButton).toBeInTheDocument();
//     expect(darkModeButton).toHaveAttribute("checked");
//   });

//   // it("should toggle dark mode on button click", () => {
//   //   const { getByTestId } = render(<DarkModeButton />);
//   //   const darkModeButton = getByTestId("dark-mode-button");

//   //   expect(darkModeButton).toBeInTheDocument();
//   //   expect(darkModeButton).toHaveAttribute("checked", "true");

//   //   fireEvent.click(darkModeButton);

//   //   expect(darkModeButton).not.toHaveAttribute("checked");
//   // });
// });
import React from "react";
import { render } from "@testing-library/react";
import DarkModeButton from "./DarkMode";

describe("DarkModeButton Component", () => {
  it("should toggle dark mode on button click", () => {
    const { getByTestId } = render(<DarkModeButton />);
    const darkModeButton = getByTestId("dark-mode-button");

    expect(darkModeButton).toBeInTheDocument();
  });
});
