/*-- -- -- -- -- -- -- -- -- -- --
类名:clsDataColumn
表名:ExamType(01160053)
生成代码版本:2019.07.19.1
生成日期:2019/07/21 17:06:50
生成者:
工程名称:简单工程样例
工程ID:0116
相关数据库:101.251.68.133,9433SimplePrj
PrjDataBaseId:0111
模块中文名:基本信息
模块英文名:BaseInfo
框架-层名:实体层(EntityLayer)
编程语言:TypeScript
== == == == == == == == == == == == 
*/
/// <summary>
/// 考试类型(ExamType)
/// (AutoGCLib.EntityLayer4TypeScript:GeneCode)
/// </summary>

export class clsDataColumnBak {
  //以下是属性变量

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.EntityLayer4TypeScript:GenClassConstructor1)
  /// </summary>
  constructor() {}

  private mstrFldName = ''; //考试类型Id
  private mstrColHeader = ''; //考试类型名
  private mintOrderNum = 0; //是否删除
  private mstrColumnType = ''; //列类型：Label,TextBox,Button
  private mstrFuncName: Function = () => {}; //备注

  /// <summary>
  /// 考试类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
  /// (AutoGCLib.EntityLayer4TypeScript:GenClsProperty)
  /// </summary>
  public get fldName() {
    return this.mstrFldName;
  }
  /// <summary>
  /// 考试类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
  /// (AutoGCLib.EntityLayer4TypeScript:GenClsProperty)
  /// </summary>
  public set fldName(value: string) {
    this.mstrFldName = value;
  }

  /// <summary>
  /// 考试类型名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.EntityLayer4TypeScript:GenClsProperty)
  /// </summary>
  public get colHeader() {
    return this.mstrColHeader;
  }
  /// <summary>
  /// 考试类型名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.EntityLayer4TypeScript:GenClsProperty)
  /// </summary>
  public set colHeader(value: string) {
    this.mstrColHeader = value;
  }

  /// <summary>
  /// 是否删除(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.EntityLayer4TypeScript:GenClsProperty)
  /// </summary>
  public get orderNum() {
    return this.mintOrderNum;
  }
  /// <summary>
  /// 是否删除(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.EntityLayer4TypeScript:GenClsProperty)
  /// </summary>
  public set orderNum(value: number) {
    this.mintOrderNum = value;
  }

  /// <summary>
  /// 删除日期(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.EntityLayer4TypeScript:GenClsProperty)
  /// </summary>
  public get columnType() {
    return this.mstrColumnType;
  }
  /// <summary>
  /// 删除日期(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.EntityLayer4TypeScript:GenClsProperty)
  /// </summary>
  public set columnType(value: string) {
    this.mstrColumnType = value;
  }

  /// <summary>
  /// 常量:"fldName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conFldName(): string {
    return 'fldName';
  } //考试类型Id

  /// <summary>
  /// 常量:"colHeader"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conColHeader(): string {
    return 'colHeader';
  } //考试类型名

  /// <summary>
  /// 常量:"_IsDeleted"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_IsDeleted(): string {
    return '_IsDeleted';
  } //是否删除

  /// <summary>
  /// 常量:"columnType"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conColumnType(): string {
    return 'columnType';
  } //删除日期

  /// <summary>
  /// 常量:"memo"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conMemo(): string {
    return 'memo';
  } //备注
}
