export class StringUtils {
  public static splitChunks(inputString: string, chunkSize: number): string[] {
    const result = [];
    for (let i = 0; i < inputString.length; i += chunkSize) {
      result.push(inputString.slice(i, i + chunkSize));
    }
    return result;
  }

  public static isAlphabetLetter(input: string) {
    // Convert the input to uppercase to handle both upper and lower case letters
    const uppercaseInput = input.toUpperCase();

    // Check if the input is exactly one character long and it's a letter
    return uppercaseInput.length === 1 && /[A-Z]/.test(uppercaseInput);
  }
  public static compareStrings(str1: string, str2: string) {
    if (str1.length !== str2.length) {
      throw new Error("Input strings must have the same length");
    }

    const result: {
      correct: boolean;
      letters: {
        letter: string;
        isEqual: boolean;
      }[];
    } = {
      correct: str1 === str2,
      letters: [],
    };
    if (result.correct) return result;
    for (let i = 0; i < str1.length; i++) {
      result.letters.push({
        letter: str2[i],
        isEqual: str1[i] === str2[i],
      });
    }

    return result;
  }
}
