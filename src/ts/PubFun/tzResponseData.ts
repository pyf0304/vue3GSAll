/*
 * 功能：返回数据的结构
 * 版本：2019-07-24-01
 * 作者：潘以锋
 * */

export class tzResponseData {
  public data = '';
  public what = 0;
  public IsFinished = false;
  public faultString = '';
  public errorId = 0;
  public returnBool = false;
  public returnString = '';

  public returnObject: any = null;
  public returnObjectList: Array<any> = new Array<any>();
}
