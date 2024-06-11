import { render } from "@testing-library/react";
import { IconButton } from "./IconButton";

test("renders IconButton with correct styling and title", () => {
  const title = "Click me";
  const { getByTitle } = render(<IconButton title={title}>🌟</IconButton>);

  // Check if the button has the correct title attribute
  const button = getByTitle(title);
  expect(button).toBeInTheDocument();

  // Check if the button has the correct styling based on the provided class names
  expect(button).toHaveClass(
    "w-12 h-12 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 dark:hover:bg-[#ec489a68] dark:bg-[#ec489a3c] border border-transparent font-semibold text-pink-500 dark:text-pink-400  hover:bg-pink-200  focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-slate-900 aspect-square"
  );

  expect(button.textContent).toBe("🌟");
});
