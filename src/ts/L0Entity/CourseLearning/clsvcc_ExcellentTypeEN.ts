/**
 * 类名:clsvcc_ExcellentTypeEN
 * 表名:vcc_ExcellentType(01120063)
 * 生成代码版本:2021.09.26.2
 * 生成日期:2021/09/27 18:17:42
 * 生成者:pyf
 * 工程名称:问卷调查
 * 工程ID:0112
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:课程学习
 * 模块英文名:CourseLearning
 * 框架-层名:实体层(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * v精品课程类型(vcc_ExcellentType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab2 } from '@/ts/PubFun/clsGeneralTab2';
export class clsvcc_ExcellentTypeEN extends clsGeneralTab2 {
  [x: string]: any; //索引类型
  public static _CurrTabName = 'vcc_ExcellentType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ExcellentTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'ExcellentTypeId',
    'ExcellentTypeName',
    'id_School',
    'SchoolId',
    'SchoolName',
    'IsUse',
    'updDate',
    'updUserId',
    'memo',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  private mstrExcellentTypeId = ''; //精品课程类型Id
  private mstrExcellentTypeName = ''; //精品课程类型名称
  private mstrid_School = ''; //学校流水号
  private mstrSchoolId = ''; //学校编号
  private mstrSchoolName = ''; //学校名称
  private mbolIsUse = false; //是否使用
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //备注

  /**
   * 精品课程类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get ExcellentTypeId() {
    return this.mstrExcellentTypeId;
  }
  /**
   * 精品课程类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set ExcellentTypeId(value: string) {
    if (value != undefined) {
      this.mstrExcellentTypeId = value;
      this.hmProperty['ExcellentTypeId'] = true;
    }
  }

  /**
   * 精品课程类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get ExcellentTypeName() {
    return this.mstrExcellentTypeName;
  }
  /**
   * 精品课程类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set ExcellentTypeName(value: string) {
    if (value != undefined) {
      this.mstrExcellentTypeName = value;
      this.hmProperty['ExcellentTypeName'] = true;
    }
  }

  /**
   * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get id_School() {
    return this.mstrid_School;
  }
  /**
   * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set id_School(value: string) {
    if (value != undefined) {
      this.mstrid_School = value;
      this.hmProperty['id_School'] = true;
    }
  }

  /**
   * 学校编号(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get SchoolId() {
    return this.mstrSchoolId;
  }
  /**
   * 学校编号(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set SchoolId(value: string) {
    if (value != undefined) {
      this.mstrSchoolId = value;
      this.hmProperty['SchoolId'] = true;
    }
  }

  /**
   * 学校名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get SchoolName() {
    return this.mstrSchoolName;
  }
  /**
   * 学校名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set SchoolName(value: string) {
    if (value != undefined) {
      this.mstrSchoolName = value;
      this.hmProperty['SchoolName'] = true;
    }
  }

  /**
   * 是否使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get IsUse() {
    return this.mbolIsUse;
  }
  /**
   * 是否使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set IsUse(value: boolean) {
    if (value != undefined) {
      this.mbolIsUse = value;
      this.hmProperty['IsUse'] = true;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get updDate() {
    return this.mstrUpdDate;
  }
  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set updDate(value: string) {
    if (value != undefined) {
      this.mstrUpdDate = value;
      this.hmProperty['updDate'] = true;
    }
  }

  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get updUserId() {
    return this.mstrUpdUserId;
  }
  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set updUserId(value: string) {
    if (value != undefined) {
      this.mstrUpdUserId = value;
      this.hmProperty['updUserId'] = true;
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
   * 常量:"ExcellentTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExcellentTypeId(): string {
    return 'ExcellentTypeId';
  } //精品课程类型Id

  /**
   * 常量:"ExcellentTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExcellentTypeName(): string {
    return 'ExcellentTypeName';
  } //精品课程类型名称

  /**
   * 常量:"id_School"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_id_School(): string {
    return 'id_School';
  } //学校流水号

  /**
   * 常量:"SchoolId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SchoolId(): string {
    return 'SchoolId';
  } //学校编号

  /**
   * 常量:"SchoolName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SchoolName(): string {
    return 'SchoolName';
  } //学校名称

  /**
   * 常量:"IsUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsUse(): string {
    return 'IsUse';
  } //是否使用

  /**
   * 常量:"updDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"updUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

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
 * v精品课程类型(vcc_ExcellentType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
export class clsvcc_ExcellentTypeEN_Sim {
  [x: string]: any; //索引类型
  //以下是属性变量

  /**
   * 精品课程类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public ExcellentTypeId = '';

  /**
   * 精品课程类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public ExcellentTypeName = '';

  /**
   * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public id_School = '';

  /**
   * 学校编号(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public SchoolId = '';

  /**
   * 学校名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public SchoolName = '';

  /**
   * 是否使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public IsUse = false;

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public updDate = '';

  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public updUserId = '';

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public memo = '';

  public sfUpdFldSetStr = ''; //专门用于记录某字段属性是否修改
  public sfFldComparisonOp = ''; //专门用于记录条件对象某字段的比较运算符
}
