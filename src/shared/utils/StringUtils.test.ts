import { StringUtils } from "./StringUtils";

describe("StringUtils", () => {
  describe("splitChunks", () => {
    it("should split a string into chunks of the specified size", () => {
      const inputString = "abcdefghijk";
      const chunkSize = 3;
      const result = StringUtils.splitChunks(inputString, chunkSize);
      expect(result).toEqual(["abc", "def", "ghi", "jk"]);
    });
  });

  describe("isAlphabetLetter", () => {
    it("should return true for a single alphabet letter", () => {
      const result = StringUtils.isAlphabetLetter("A");
      expect(result).toBe(true);
    });

    it("should return false for a non-alphabet character", () => {
      const result = StringUtils.isAlphabetLetter("1");
      expect(result).toBe(false);
    });
  });

  describe("compareStrings", () => {
    it("should compare two equal strings and mark all letters as correct", () => {
      const str1 = "hello";
      const str2 = "hello";
      const result = StringUtils.compareStrings(str1, str2);
      expect(result.correct).toBe(true);
      expect(result.letters).toEqual([
        { letter: "h", status: "correct" },
        { letter: "e", status: "correct" },
        { letter: "l", status: "correct" },
        { letter: "l", status: "correct" },
        { letter: "o", status: "correct" },
      ]);
    });

    it("should compare two different strings and mark correct, unplaced, and wrong letters", () => {
      const str1 = "create";
      const str2 = "orange";
      const result = StringUtils.compareStrings(str1, str2);
      expect(result.correct).toBe(false);
      expect(result.letters).toEqual([
        { letter: "o", status: "wrong" },
        { letter: "r", status: "correct" },
        { letter: "a", status: "unplaced" },
        { letter: "n", status: "wrong" },
        { letter: "g", status: "wrong" },
        { letter: "e", status: "correct" },
      ]);
    });

    it("should throw an error if the string are not the same length", () => {
      const str1 = "create";
      const str2 = "available";
      expect(() => StringUtils.compareStrings(str1, str2)).toThrow(
        "Input strings must have the same length"
      );
    });
  });
});
