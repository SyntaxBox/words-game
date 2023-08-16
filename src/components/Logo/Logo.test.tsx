import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter for routing testing
import Logo from "./Logo";

describe("Logo Component", () => {
  it("should render correctly with the provided height", () => {
    const height = 40; // Adjust the height value as needed
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <Logo height={height} />
      </MemoryRouter>
    );

    const logoImage = getByAltText("logo image");
    const logoText = getByText("ords");

    expect(logoImage).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
    expect(logoImage).toHaveStyle(`height: ${height}px`);
    expect(logoImage).toHaveStyle(`width: ${height}px`);
  });

  it("should link to the home page when clicked", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Logo height={40} />
      </MemoryRouter>
    );

    const logoLink = getByText("ords");

    // Simulate click on the logo link
    logoLink.click();

    // Assert the expected URL after the click
    expect(window.location.pathname).toBe("/");
  });
});
