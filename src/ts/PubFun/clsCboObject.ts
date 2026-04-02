/*
 * 功能:为Web提供下拉框对象类
 * 版本:2019-08-03-01
 * 作者:潘以锋
 * */

/// <summary>
/// 下拉框对象类
/// </summary>
export class clsCboObject {
  /*[Index: string]: string;*/
  /*
    /// <param name="strValue"></param>
    /// <param name="strText"></param>
    */
  constructor(strValue: string, strText: string) {
    this.value = strValue;
    this.text = strText;
  }
  /// <summary>
  /// 值
  /// </summary>
  public value = '';
  /// <summary>
  /// 文本
  /// </summary>
  public text = '';
  /// <summary>
  /// 常量:"Text"
  /// </summary>
  public static get con_Text(): string {
    return 'text';
  } //文本
  /// <summary>
  /// 常量:"Value"
  /// </summary>
  public static get con_Value(): string {
    return 'value';
  } //值

  public static GetFldValue(objCbo: clsCboObject, strFldName: string) {
    // const strThisFuncName = 'GetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsCboObject.con_Text:
        return objCbo.text;
      case clsCboObject.con_Value:
        return objCbo.value;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[clsCboObject]中不存在！`;
        console.error(strMsg);
        return '';
    }
  }
}
