export class ArrayUtils {
  public static createArray(number: number) {
    return Array.from({ length: number }, (_, index) => index);
  }
  public static compare(array1: Array<unknown>, array2: Array<unknown>) {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }
}
