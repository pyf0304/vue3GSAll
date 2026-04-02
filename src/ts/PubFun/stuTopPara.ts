/*
 * 功能：用于获取顶部对象列表的参数结构
 * 版本：2019-07-24-01
 * 作者：潘以锋
 * */

import { Dictionary } from './tzDictionary';

export class stuTopPara {
  /// <summary>
  /// 顶部记录数
  /// </summary>
  public TopSize = 0;

  /// <summary>
  /// 条件串
  /// </summary>
  public whereCond = '';
  /// <summary>
  /// 排序表达式
  /// </summary>
  public orderBy = '';

  /// <summary>
  /// 排除的检查字符串列表
  /// </summary>
  public Exclude = '';

  /// <summary>
  /// 是否检查SQL攻击
  /// </summary>
  public IsCheckSQLAttack = 'false';

  public static GetMapParam(objTopPara: stuTopPara): Dictionary {
    //List < string > arrLst = new List<string>(objTopPara.Exclude);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', objTopPara.whereCond);
    mapParam.add('strOrderBy', objTopPara.orderBy);
    mapParam.add('intTopSize', objTopPara.TopSize.toString());
    mapParam.add('arrExclude', objTopPara.Exclude);
    mapParam.add('bolIsCheckSQLAttack', objTopPara.IsCheckSQLAttack.toString());
    return mapParam;
    //strIdCurrEduclsmapParam: Dictionary = new Dictionary()
    //{
    //    "strWhereCond" = objTopPara.whereCond,
    //        "strOrderBy" = objTopPara.orderBy,
    //        "intTopSize" = objTopPara.TopSize.toString(),
    //        ["arrExclude"] = clsArray.GetSqlInStrByArray(arrLst, false),
    //        ["bolIsCheckSQLAttack"] = objTopPara.IsCheckSQLAttack.ToString(),
    //    };
    //return dictParam;
  }
}
