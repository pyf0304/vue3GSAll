import { Dictionary } from '@/ts/PubFun/tzDictionary';

export class stuViewInfo4Session {
  /// <summary>
  /// 当前选择工程Id
  /// </summary>
  public currSelPrjId = '';
  /// <summary>
  /// 当前选择工程
  /// </summary>
  public currSelPrjName = '';

  /// <summary>
  /// 用户Id
  /// </summary>
  public funcModuleNameSim = '';
  /// <summary>
  /// 用户名
  /// </summary>
  public funcModuleENName = '';

  /// <summary>
  /// 用于测试的关键字
  /// </summary>
  public keyId4Test = '';

  /// <summary>
  /// 数据库Id
  /// </summary>
  public mainTabId = '';

  public outTabId = '';

  public cmPrjId = '';

  /// <summary>
  /// 应用类型Id
  /// </summary>
  public applicationTypeId = 0;
  /// <summary>
  /// 应用类型Id
  /// </summary>
  public applicationTypeName = '';

  public static GetMapParam(objUserLoginInfo: stuViewInfo4Session): Dictionary {
    //Array < string > arrLst = new Array<string>(objUserLoginInfo.currSelPrjId);
    const mapParam: Dictionary = new Dictionary();
    //mapParam.add("viewId",  objUserLoginInfo.viewId);
    //mapParam.add("viewName", objUserLoginInfo.viewName);
    //mapParam.add("roleId", objUserLoginInfo.roleId);
    //mapParam.add("roleName", objUserLoginInfo.roleName);
    mapParam.add('currSelPrjId', objUserLoginInfo.currSelPrjId);
    mapParam.add('currSelPrjName', objUserLoginInfo.currSelPrjName);

    //mapParam.add("CurrPrjDataBaseId", objUserLoginInfo.CurrPrjDataBaseId);
    //mapParam.add("prjDataBaseName", objUserLoginInfo.prjDataBaseName);
    //mapParam.add("CurrDataBaseTypeId", objUserLoginInfo.CurrDataBaseTypeId);
    mapParam.add('applicationTypeId', objUserLoginInfo.applicationTypeId);
    mapParam.add('applicationTypeName', objUserLoginInfo.applicationTypeName);

    return mapParam;
  }
  /*
   *把Html string 转换成对象。先转换成JSON string , 然后再转换成对象
   */
  //public static GetObjByHtmlStringBak(strUserLoginInfo: string): stuViewInfo4Session {
  //    const strUserLoginInfo2 = $.parseHTML(strUserLoginInfo);
  //    const objUserLoginInfo: stuViewInfo4Session = JSON.parse(strUserLoginInfo2[0].wholeText);
  //    return objUserLoginInfo;
  //}
}
