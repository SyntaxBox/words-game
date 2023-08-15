export class ArrayUtils {
  public static createArray(number: number) {
    return Array.from({ length: number }, (_, index) => index);
  }

  public static compare(array1: Array<any>, array2: Array<any>) {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }

  public static randomSelect(array: Array<any>) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}
