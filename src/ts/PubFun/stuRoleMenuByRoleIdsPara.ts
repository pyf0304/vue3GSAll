import { Dictionary } from './tzDictionary';

export class stuRoleMenuByRoleIdsPara {
  /// <summary>
  /// 工程id
  /// </summary>
  public qxPrjId = '';
  /// <summary>
  /// 角色Id列表
  /// </summary>

  public roleIdLst: Array<string> = [];
  /// <summary>
  /// 菜单集Id
  /// </summary>
  public menuSetId = '';
  /// <summary>
  /// 是否是上级菜单
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

  public static GetMapParam(objRoleMenuByRoleIdsPara: stuRoleMenuByRoleIdsPara): Dictionary {
    //List < string > arrLst = new List<string>(objRoleMenuByRoleIdsPara.QxPrjId);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('menuSetId', objRoleMenuByRoleIdsPara.menuSetId);
    mapParam.add('isUpMenuId', objRoleMenuByRoleIdsPara.isUpMenuId);
    mapParam.add('roleIdLst', objRoleMenuByRoleIdsPara.roleIdLst.join(','));
    mapParam.add('QxPrjId', objRoleMenuByRoleIdsPara.qxPrjId);

    return mapParam;
  }
}
