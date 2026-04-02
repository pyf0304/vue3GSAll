import { Dictionary } from './tzDictionary';

export class stuLoginPara {
  /// <summary>
  /// 每页记录数
  /// </summary>
  public qxPrjId = '';
  /// <summary>
  /// 页序号
  /// </summary>
  public effectiveDate = '';

  /// <summary>
  /// 条件串
  /// </summary>
  public loginName = '';
  /// <summary>
  /// 排序表达式
  /// </summary>
  public userPassword = '';

  ///// <summary>
  ///// 排除的检查字符串列表
  ///// </summary>
  //public QxPrjId: Array<string> = new Array<string>();

  ///// <summary>
  ///// 是否检查SQL攻击
  ///// </summary>
  //public IsCheckSQLAttack: boolean = false;

  public static GetMapParam(objLoginPara: stuLoginPara): Dictionary {
    //List < string > arrLst = new List<string>(objLoginPara.QxPrjId);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strLoginName', objLoginPara.loginName);
    mapParam.add('strUserPassword', objLoginPara.userPassword);
    mapParam.add('intEffectiveDate', objLoginPara.effectiveDate);
    mapParam.add('intQxPrjId', objLoginPara.qxPrjId);

    return mapParam;
  }
}
