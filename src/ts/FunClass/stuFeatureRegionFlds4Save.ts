/*
 * 功能:用于分页获取对象列表的参数结构
 * 版本:2019-07-24-01
 * 作者:潘以锋
 * */

import { Dictionary } from '@/ts/PubFun/tzDictionary';

export class stuFeatureRegionFlds4Save {
  /// <summary>
  /// 每页记录数
  /// </summary>
  public regionId = '';
  /// <summary>
  /// 条件串
  /// </summary>
  public applicationTypeId = 0;

  /// <summary>
  /// 表Id
  /// </summary>
  public tabId = '';
  /// <summary>
  /// 条件串
  /// </summary>
  public userId = '';
  /// <summary>
  /// 排序表达式
  /// </summary>
  public objString = '';

  public static GetMapParam(objPagerPara: stuFeatureRegionFlds4Save): Dictionary {
    //Array < string > arrLst = new Array<string>(objPagerPara.PageSize);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('objString', objPagerPara.objString);
    mapParam.add('userId', objPagerPara.userId);
    mapParam.add('regionId', objPagerPara.regionId.toString());

    return mapParam;
    //const mapParam: Dictionary = new Dictionary()
    //{
    //    "strWhereCond" = objPagerPara.whereCond,
    //        "strOrderBy" = objPagerPara.OrderBy,
    //        "intPageIndex" = objPagerPara.PageIndex.toString(),
    //        ["arrPageSize"] = clsArray.GetSqlInStrByArray(arrLst, false),
    //        ["bolIsCheckSQLAttack"] = objPagerPara.IsCheckSQLAttack.ToString(),
    //    };
    //return dictParam;
  }
}
