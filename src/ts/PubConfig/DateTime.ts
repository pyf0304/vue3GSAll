/*-- -- -- -- -- -- -- -- -- -- --
类名:DateTime
表名:DateTime(00050565)
生成代码版本:2020.06.13.1
生成日期:2020/06/15 19:14:32
生成者:
工程名称:AGC
工程ID:0005
相关数据库:tzar.tpddns.cn,19433AGC_CS12
prjDataBaseId:0213
模块中文名:系统参数
模块英文名:SysPara
框架-层名:纯粹类(PureClass)
编程语言:TypeScript
== == == == == == == == == == == == 
*/
/// <summary>
/// DateTime(DateTime)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
export class DateTime {
  public static _CurrTabName = 'DateTime'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 7;
  public attributeName = ['mId', 'Year', 'Month', 'Day', 'Hour', 'Minute', 'Second'];
  //以下是属性变量

  private mlngmId = 0; //mId
  private mintYear = 0; //年
  private mintMonth = 0; //月
  private mintDay = 0; //日
  private mintWeek = 0; //日
  private mintHour = 0; //时
  private mintMinute = 0; //分
  private mintSecond = 0; //秒

  /// <summary>
  /// mId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get mId() {
    return this.mlngmId;
  }
  /// <summary>
  /// mId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set mId(value: number) {
    this.mlngmId = value;
  }

  /// <summary>
  /// 年(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get Year() {
    return this.mintYear;
  }
  /// <summary>
  /// 年(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set Year(value: number) {
    this.mintYear = value;
  }

  /// <summary>
  /// 月(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get Month() {
    return this.mintMonth;
  }
  /// <summary>
  /// 月(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set Month(value: number) {
    this.mintMonth = value;
  }

  /// <summary>
  /// 日(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get Day() {
    return this.mintDay;
  }
  /// <summary>
  /// 日(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set Day(value: number) {
    this.mintDay = value;
  }

  /// <summary>
  /// 日(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get Week() {
    return this.mintWeek;
  }
  /// <summary>
  /// 日(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set Week(value: number) {
    this.mintWeek = value;
  }

  /// <summary>
  /// 时(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get Hour() {
    return this.mintHour;
  }
  /// <summary>
  /// 时(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set Hour(value: number) {
    this.mintHour = value;
  }

  /// <summary>
  /// 分(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get Minute() {
    return this.mintMinute;
  }
  /// <summary>
  /// 分(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set Minute(value: number) {
    this.mintMinute = value;
  }

  /// <summary>
  /// 秒(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get Second() {
    return this.mintSecond;
  }
  /// <summary>
  /// 秒(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set Second(value: number) {
    this.mintSecond = value;
  }

  /// <summary>
  /// 常量:"mId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /// <summary>
  /// 常量:"Year"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_Year(): string {
    return 'Year';
  } //年

  /// <summary>
  /// 常量:"Month"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_Month(): string {
    return 'Month';
  } //月

  /// <summary>
  /// 常量:"Day"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_Day(): string {
    return 'Day';
  } //日

  /// <summary>
  /// 常量:"Hour"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_Hour(): string {
    return 'Hour';
  } //时

  /// <summary>
  /// 常量:"Minute"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_Minute(): string {
    return 'Minute';
  } //分

  /// <summary>
  /// 常量:"Second"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_Second(): string {
    return 'Second';
  } //秒
}
