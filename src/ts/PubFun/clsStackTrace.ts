/*
 * 功能：用于跟踪的功能函数
 * 版本：2019-07-24-01
 * 作者：潘以锋
 * */

export class clsStackTrace {
  constructor() {}
  public static GetCurrClassFunction(): string {
    const result = '未知';
    return result;
  }
  public static GetCurrClassFunctionByLevel(intLevel: Number): string {
    const result = `未知:${intLevel}`;
    return result;
  }
}
