import { Dictionary } from '@/ts/PubFun/tzDictionary';

export class stuExcelData {
  /// <summary>
  /// 当前选择工程Id
  /// </summary>
  public Csv = '';
  /// <summary>
  /// 当前用户
  /// </summary>
  public userId = '';
  /// <summary>
  /// 年级流水号
  /// </summary>
  public QuestionTypeName = '';

  /// <summary>
  /// 是否四舍五入
  /// </summary>
  public bolRound = true;

  public static GetMapParam(objUserLoginInfo: stuExcelData): Dictionary {
    
    const mapParam = new Dictionary();
    mapParam.add('userId', objUserLoginInfo.userId);
    mapParam.add('Csv', objUserLoginInfo.Csv);

    return mapParam;
  }
}
