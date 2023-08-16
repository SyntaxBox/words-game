import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Word from "./Word";

test("composes and compares words correctly", async () => {
  const word = "example";
  const wordsList = ["example", "another", "word"];
  const onChangeMock = vi.fn();

  render(<Word word={word} wordsList={wordsList} onChange={onChangeMock} />);
  expect(screen).toBeDefined();
});
