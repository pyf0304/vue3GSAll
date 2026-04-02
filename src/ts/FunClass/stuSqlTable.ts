import { Dictionary } from '@/ts/PubFun/tzDictionary';

export class stuSqlTable {
  /// <summary>
  /// 表名
  /// </summary>
  public tabName = '';
  /// <summary>
  /// Sql类型Id
  /// </summary>
  public sqlTypeId = '';

  public static GetMapParam(objSqlTable: stuSqlTable): Dictionary {
    
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('tabName', objSqlTable.tabName);
    mapParam.add('sqlTypeId', objSqlTable.sqlTypeId);
    return mapParam;
  }
}
