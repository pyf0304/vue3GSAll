/*
 * 功能:用于分页获取对象列表的参数结构
 * 版本:2019-07-24-01
 * 作者:潘以锋
 * */
import { Dictionary } from './tzDictionary';

export class stuPagerPara {
  /// <summary>
  /// 每页记录数
  /// </summary>
  public pageSize = 0;
  /// <summary>
  /// 页序号
  /// </summary>
  public pageIndex = 0;

  /// <summary>
  /// 条件串
  /// </summary>
  public whereCond = '';
  /// <summary>
  /// 排序表达式
  /// </summary>
  public orderBy = '';
  /*
   * 用于排序的函数
   * */
  //public sortFun = (ascOrDesc: string) => { return 0; };
  public sortFun = (x: any, y: any) => {
    x = y;
    return 0;
  };

  ///// <summary>
  ///// 排除的检查字符串列表
  ///// </summary>
  //public pageSize: Array<string> = new Array<string>();

  ///// <summary>
  ///// 是否检查SQL攻击
  ///// </summary>
  //public IsCheckSQLAttack: boolean = false;

  public static GetMapParam(objPagerPara: stuPagerPara): Dictionary {
    //Array < string > arrLst = new Array<string>(objPagerPara.pageSize);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', objPagerPara.whereCond);
    mapParam.add('strOrderBy', objPagerPara.orderBy);
    mapParam.add('intPageIndex', objPagerPara.pageIndex.toString());
    mapParam.add('intPageSize', objPagerPara.pageSize.toString());

    return mapParam;
    //const mapParam: Dictionary = new Dictionary()
    //{
    //    "strWhereCond" = objPagerPara.whereCond,
    //        "strOrderBy" = objPagerPara.orderBy,
    //        "intPageIndex" = objPagerPara.pageIndex.toString(),
    //        ["arrPageSize"] = clsArray.GetSqlInStrByArray(arrLst, false),
    //        ["bolIsCheckSQLAttack"] = objPagerPara.IsCheckSQLAttack.ToString(),
    //    };
    //return dictParam;
  }
}
