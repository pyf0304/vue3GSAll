//import { clsvUserRoleRelationEN } from "../L0_Entity/UserManage/clsvUserRoleRelationEN.js";
import $ from 'jquery';

import { Dictionary } from '@/ts/PubFun/tzDictionary.js';
import { clsQxUserRoleRelationEN } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelationEN';

export class stuUserLoginInfo {
  /// <summary>
  /// 当前选择工程Id
  /// </summary>
  public CurrSelPrjId = '';
  /// <summary>
  /// 当前选择工程
  /// </summary>
  public CurrSelPrjName = '';
  /// <summary>
  /// 角色Id
  /// </summary>
  public roleId = '';
  /// <summary>
  /// 角色
  /// </summary>
  public roleName = '';
  /// <summary>
  /// 用户Id
  /// </summary>
  public userId = '';
  /// <summary>
  /// 用户名
  /// </summary>
  public userName = '';

  /// <summary>
  /// 数据库Id
  /// </summary>
  public CurrPrjDataBaseId = '';

  /// <summary>
  /// 数据库名
  /// </summary>
  public PrjDataBaseName = '';

  /// <summary>
  /// 当前数据库类型Id
  /// </summary>
  public CurrDataBaseTypeId = '';
  /// <summary>
  /// 应用类型Id
  /// </summary>
  public ApplicationTypeId = 0;

  /// <summary>
  /// 课程Id
  /// </summary>
  public courseId = '';

  /// <summary>
  /// 论文Id
  /// </summary>
  public ThesisId = '';

  /// <summary>
  /// 专业id
  /// </summary>
  public id_XzMajor = '';

  ///// <summary>
  ///// 排除的检查字符串列表
  ///// </summary>
  //public CurrSelPrjId: Array<string> = new Array<string>();

  ///// <summary>
  ///// 是否检查SQL攻击
  ///// </summary>
  //public IsCheckSQLAttack: boolean = false;

  public static GetMapParam(objUserLoginInfo: stuUserLoginInfo): Dictionary {
    //List < string > arrLst = new List<string>(objUserLoginInfo.CurrSelPrjId);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('userId', objUserLoginInfo.userId);
    mapParam.add('userName', objUserLoginInfo.userName);
    mapParam.add('roleId', objUserLoginInfo.roleId);
    mapParam.add('roleName', objUserLoginInfo.roleName);
    mapParam.add('CurrSelPrjId', objUserLoginInfo.CurrSelPrjId);
    mapParam.add('CurrSelPrjName', objUserLoginInfo.CurrSelPrjName);

    mapParam.add('courseId', objUserLoginInfo.courseId);

    mapParam.add('ThesisId', objUserLoginInfo.ThesisId);

    mapParam.add('CurrPrjDataBaseId', objUserLoginInfo.CurrPrjDataBaseId);
    mapParam.add('PrjDataBaseName', objUserLoginInfo.PrjDataBaseName);
    mapParam.add('CurrDataBaseTypeId', objUserLoginInfo.CurrDataBaseTypeId);
    mapParam.add('ApplicationTypeId', objUserLoginInfo.ApplicationTypeId);
    mapParam.add('id_XzMajor', objUserLoginInfo.id_XzMajor);

    return mapParam;
  }
  /*
   *把Html string 转换成对象。先转换成JSON string , 然后再转换成对象
   */
  public static GetObjByHtmlString(strUserLoginInfo: string): stuUserLoginInfo {
    const strUserLoginInfo2 = $.parseHTML(strUserLoginInfo);
    const objUserLoginInfo: stuUserLoginInfo = JSON.parse(strUserLoginInfo2[0].textContent ?? '');
    return objUserLoginInfo;
  }

  public static GetObjByHtmlString2(strUserRoleRelation: string): clsQxUserRoleRelationEN {
    const strUserLoginInfo2 = $.parseHTML(strUserRoleRelation);
    const objvUserRoleRelation: clsQxUserRoleRelationEN = JSON.parse(
      //      strUserLoginInfo2[0].wholeText,
      strUserLoginInfo2[0].textContent ?? '',
    );
    return objvUserRoleRelation;
  }
}
