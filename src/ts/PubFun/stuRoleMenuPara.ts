import { Dictionary } from './tzDictionary';

export class stuRoleMenuPara {
  /// <summary>
  /// 每页记录数
  /// </summary>
  public qxPrjId = '';
  /// <summary>
  /// 页序号
  /// </summary>
  public roleId = '';

  /// <summary>
  /// 条件串
  /// </summary>
  public menuSetId = '';
  /// <summary>
  /// 排序表达式
  /// </summary>
  public isUpMenuId = '';

  ///// <summary>
  ///// 排除的检查字符串列表
  ///// </summary>
  //public QxPrjId: Array<string> = new Array<string>();

  ///// <summary>
  ///// 是否检查SQL攻击
  ///// </summary>
  //public IsCheckSQLAttack: boolean = false;

  public static GetMapParam(objRoleMenuPara: stuRoleMenuPara): Dictionary {
    //List < string > arrLst = new List<string>(objRoleMenuPara.QxPrjId);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('menuSetId', objRoleMenuPara.menuSetId);
    mapParam.add('isUpMenuId', objRoleMenuPara.isUpMenuId);
    mapParam.add('roleId', objRoleMenuPara.roleId);
    mapParam.add('QxPrjId', objRoleMenuPara.qxPrjId);

    return mapParam;
  }
}
