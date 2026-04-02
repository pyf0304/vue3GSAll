/*
 * 功能：用于按范围获取对象列表的参数结构
 * 版本：2019-07-24-01
 * 作者：潘以锋
 * */

import { Dictionary } from './tzDictionary';

export class stuRangePara {
  /// <summary>
  /// 记录范围的最小记录号
  /// </summary>
  public MinNum = 0;
  /// <summary>
  /// 记录范围的最大记录号
  /// </summary>
  public MaxNum = 0;

  /// <summary>
  /// 条件串
  /// </summary>
  public whereCond = '';
  /// <summary>
  /// 排序表达式
  /// </summary>
  public orderBy = '';

  ///// <summary>
  ///// 排除的检查字符串列表
  ///// </summary>
  //public MinNum: Array<string> = new Array<string>();

  ///// <summary>
  ///// 是否检查SQL攻击
  ///// </summary>
  //public IsCheckSQLAttack: boolean = false;

  public static GetMapParam(objRangePara: stuRangePara): Dictionary {
    //List < string > arrLst = new List<string>(objRangePara.MinNum);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', objRangePara.whereCond);
    mapParam.add('strOrderBy', objRangePara.orderBy);
    mapParam.add('intMaxNum', objRangePara.MaxNum.toString());
    mapParam.add('intMinNum', objRangePara.MinNum.toString());

    return mapParam;
    //strIdCurrEduclsmapParam: Dictionary = new Dictionary()
    //{
    //    "strWhereCond" = objRangePara.whereCond,
    //        "strOrderBy" = objRangePara.orderBy,
    //        "intMaxNum" = objRangePara.MaxNum.toString(),
    //        ["arrMinNum"] = clsArray.GetSqlInStrByArray(arrLst, false),
    //        ["bolIsCheckSQLAttack"] = objRangePara.IsCheckSQLAttack.ToString(),
    //    };
    //return dictParam;
  }
}
