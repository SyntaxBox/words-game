import { render } from "@testing-library/react";
import { TextButton } from "./textButton";
test("renders TextButton with correct styling and text content", () => {
  const buttonText = "Click me";
  const { getByText } = render(<TextButton>{buttonText}</TextButton>);

  // Check if the button text content is rendered
  const button = getByText(buttonText);
  expect(button).toBeInTheDocument();

  // Check if the button has the correct styling based on the provided class names
  expect(button).toHaveClass(
    "py-4 px-8 inline-flex justify-center items-center gap-2 rounded-md bg-pink-500 border border-transparent font-semibold text-white text-xl  hover:bg-pink-600 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800 "
  );
});
