export class StringUtils {
  public static splitChunks(inputString: string, chunkSize: number): string[] {
    const result = [];
    for (let i = 0; i < inputString.length; i += chunkSize) {
      result.push(inputString.slice(i, i + chunkSize));
    }
    return result;
  }
}
