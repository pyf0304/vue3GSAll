/*
 * 功能:为Web提供下拉框对象类
 * 版本:2019-08-03-01
 * 作者:潘以锋
 * */

/// <summary>
/// 下拉框对象类
/// </summary>
export class clsBtnItem {
  /*[Index: string]: string;*/
  /*
    /// <param name="strKeyId"></param>
    /// <param name="strText"></param>
    */
  constructor(strKeyId: string, strText: string) {
    this.keyId = strKeyId;
    this.text = strText;
  }
  /**
   * 类型
   **/
  public type = '';

  /**
   * 关键字
   **/
  public keyId = '';
  /**
   * 按钮文本
   **/
  public text = '';
  /**
   * Tooltip
   **/
  public title = '';
  // /**
  //  * 是否有文本输入
  //  **/
  // public isHasInput = false;

  /// <summary>
  /// 常量:"Text"
  /// </summary>
  public static get con_Text(): string {
    return 'text';
  } //文本
  /// <summary>
  /// 常量:"Value"
  /// </summary>
  public static get con_KeyId(): string {
    return 'keyId';
  } //值

  public static GetFldValue(objCbo: clsBtnItem, strFldName: string) {
    // const strThisFuncName = 'GetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsBtnItem.con_Text:
        return objCbo.text;
      case clsBtnItem.con_KeyId:
        return objCbo.keyId;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[clsBtnItem]中不存在！`;
        console.error(strMsg);
        return '';
    }
  }
}
