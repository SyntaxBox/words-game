import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

test("renders home screen with correct behavior", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Check if Welcome message is displayed
  const welcomeMessage = getByText(/Welcome/i);
  expect(welcomeMessage).toBeInTheDocument();

  // Check if the "Easy" tab is displayed
  const easyTab = getByText(/Easy/i);
  expect(easyTab).toBeInTheDocument();

  // Check if the "Select Word Length:" text is displayed
  const wordLengthText = getByText(/Select Word Length/i);
  expect(wordLengthText).toBeInTheDocument();

  // Simulate clicking the "Medium" tab
  const mediumTab = getByText(/Medium/i);
  fireEvent.click(mediumTab);

  // Simulate changing the word length using the Range component
  // You would need to find the appropriate elements and simulate interactions

  // Simulate clicking the "Start!" button
  const startButton = getByText(/Start/i);
  fireEvent.click(startButton);

  // Check if the Link to the game screen is functioning correctly
  // You might want to assert that the link's destination and state are correct

  // Simulate clicking the "Don't know how to play ?" link
  const infoLink = getByText(/Don't know how to play/i);
  fireEvent.click(infoLink);
});
