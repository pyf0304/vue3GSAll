/**
 * 类名:clsWorkTypeEN
 * 表名:WorkType(01120196)
 * 生成代码版本:2021.09.26.2
 * 生成日期:2021/09/27 23:49:27
 * 生成者:pyf
 * 工程名称:问卷调查
 * 工程ID:0112
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统参数
 * 模块英文名:SysPara
 * 框架-层名:实体层(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 作业类型(WorkType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab2 } from '@/ts/PubFun/clsGeneralTab2';
export class clsWorkTypeEN extends clsGeneralTab2 {
  [x: string]: any; //索引类型
  public static _CurrTabName = 'WorkType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'WorkTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 3;
  public static AttributeName = ['WorkTypeId', 'WorkTypeName', 'memo'];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  private mstrWorkTypeId = ''; //作业类型Id
  private mstrWorkTypeName = ''; //作业类型名称
  private mstrMemo = ''; //备注

  /**
   * 作业类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get WorkTypeId() {
    return this.mstrWorkTypeId;
  }
  /**
   * 作业类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set WorkTypeId(value: string) {
    if (value != undefined) {
      this.mstrWorkTypeId = value;
      this.hmProperty['WorkTypeId'] = true;
    }
  }

  /**
   * 作业类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get WorkTypeName() {
    return this.mstrWorkTypeName;
  }
  /**
   * 作业类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set WorkTypeName(value: string) {
    if (value != undefined) {
      this.mstrWorkTypeName = value;
      this.hmProperty['WorkTypeName'] = true;
    }
  }

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get memo() {
    return this.mstrMemo;
  }
  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set memo(value: string) {
    if (value != undefined) {
      this.mstrMemo = value;
      this.hmProperty['memo'] = true;
    }
  }

  /**
   * 常量:"WorkTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WorkTypeId(): string {
    return 'WorkTypeId';
  } //作业类型Id

  /**
   * 常量:"WorkTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WorkTypeName(): string {
    return 'WorkTypeName';
  } //作业类型名称

  /**
   * 常量:"memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this[strFldName] = strFldValue;
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
}
/**
 * 作业类型(WorkType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
export class clsWorkTypeEN_Sim {
  [x: string]: any; //索引类型
  //以下是属性变量

  /**
   * 作业类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public WorkTypeId = '';

  /**
   * 作业类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public WorkTypeName = '';

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public memo = '';

  public sfUpdFldSetStr = ''; //专门用于记录某字段属性是否修改
  public sfFldComparisonOp = ''; //专门用于记录条件对象某字段的比较运算符
}
