import { ArrayUtils } from "./ArrayUtils";

describe("ArrayUtils", () => {
  describe("createArray", () => {
    it("should create an array of the specified length", () => {
      const length = 5;
      const result = ArrayUtils.createArray(length);
      expect(result).toHaveLength(length);
      expect(result).toEqual([0, 1, 2, 3, 4]);
    });
  });

  describe("compare", () => {
    it("should compare two arrays and return true for equal arrays", () => {
      const array1 = [1, 2, 3];
      const array2 = [1, 2, 3];
      const result = ArrayUtils.compare(array1, array2);
      expect(result).toBe(true);
    });

    it("should compare two arrays and return false for different arrays", () => {
      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];
      const result = ArrayUtils.compare(array1, array2);
      expect(result).toBe(false);
    });
  });

  describe("randomSelect", () => {
    it("should select a random element from the array", () => {
      const array = [1, 2, 3, 4, 5];
      const randomElement = ArrayUtils.randomSelect(array);
      expect(array).toContain(randomElement);
    });
  });
});
