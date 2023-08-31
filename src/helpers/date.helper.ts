export class DateHelper {
  public static dateToTimeStamp(d: Date): number {
    const strDate = d.toISOString();
    const datum = Date.parse(strDate);
    return Math.floor(datum / 1000);
  }

  public static now(): number {
    return Math.floor(new Date().getTime() / 1000);
  }
  public static sleep(seconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  }
}

export function sleep(seconds: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}
