export class ArrayUtils {
  public static createArray(number: number) {
    return Array.from({ length: number }, (_, index) => index);
  }
}
