/**
 * 类名:clsvUserRolesEN
 * 表名:vUserRoles(01120026)
 * 生成代码版本:2021.09.26.2
 * 生成日期:2021/09/27 18:18:54
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
 * v角色(vUserRoles)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab2 } from '@/ts/PubFun/clsGeneralTab2';
export class clsvUserRolesEN extends clsGeneralTab2 {
  [x: string]: any; //索引类型
  public static _CurrTabName = 'vUserRoles'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'roleId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'roleId',
    'roleName',
    'QuestionnaireSetId',
    'QuestionnaireSetName',
    'PrjId',
    'memo',
    'IsInUse',
    'updDate',
    'updUserId',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  private mstrRoleId = ''; //角色Id
  private mstrRoleName = ''; //角色名
  private mstrQuestionnaireSetId = ''; //问卷集ID
  private mstrQuestionnaireSetName = ''; //问卷集名
  private mstrPrjId = ''; //PrjId
  private mstrMemo = ''; //备注
  private mbolIsInUse = false; //IsInUse
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id

  /**
   * 角色Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get roleId() {
    return this.mstrRoleId;
  }
  /**
   * 角色Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set roleId(value: string) {
    if (value != undefined) {
      this.mstrRoleId = value;
      this.hmProperty['roleId'] = true;
    }
  }

  /**
   * 角色名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get roleName() {
    return this.mstrRoleName;
  }
  /**
   * 角色名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set roleName(value: string) {
    if (value != undefined) {
      this.mstrRoleName = value;
      this.hmProperty['roleName'] = true;
    }
  }

  /**
   * 问卷集ID(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get QuestionnaireSetId() {
    return this.mstrQuestionnaireSetId;
  }
  /**
   * 问卷集ID(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set QuestionnaireSetId(value: string) {
    if (value != undefined) {
      this.mstrQuestionnaireSetId = value;
      this.hmProperty['QuestionnaireSetId'] = true;
    }
  }

  /**
   * 问卷集名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get QuestionnaireSetName() {
    return this.mstrQuestionnaireSetName;
  }
  /**
   * 问卷集名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set QuestionnaireSetName(value: string) {
    if (value != undefined) {
      this.mstrQuestionnaireSetName = value;
      this.hmProperty['QuestionnaireSetName'] = true;
    }
  }

  /**
   * PrjId(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get PrjId() {
    return this.mstrPrjId;
  }
  /**
   * PrjId(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set PrjId(value: string) {
    if (value != undefined) {
      this.mstrPrjId = value;
      this.hmProperty['PrjId'] = true;
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
   * IsInUse(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get IsInUse() {
    return this.mbolIsInUse;
  }
  /**
   * IsInUse(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set IsInUse(value: boolean) {
    if (value != undefined) {
      this.mbolIsInUse = value;
      this.hmProperty['IsInUse'] = true;
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
   * 常量:"roleId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RoleId(): string {
    return 'roleId';
  } //角色Id

  /**
   * 常量:"roleName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RoleName(): string {
    return 'roleName';
  } //角色名

  /**
   * 常量:"QuestionnaireSetId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_QuestionnaireSetId(): string {
    return 'QuestionnaireSetId';
  } //问卷集ID

  /**
   * 常量:"QuestionnaireSetName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_QuestionnaireSetName(): string {
    return 'QuestionnaireSetName';
  } //问卷集名

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'PrjId';
  } //PrjId

  /**
   * 常量:"memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 常量:"IsInUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsInUse(): string {
    return 'IsInUse';
  } //IsInUse

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
 * v角色(vUserRoles)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
export class clsvUserRolesEN_Sim {
  [x: string]: any; //索引类型
  //以下是属性变量

  /**
   * 角色Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public roleId = '';

  /**
   * 角色名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public roleName = '';

  /**
   * 问卷集ID(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public QuestionnaireSetId = '';

  /**
   * 问卷集名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public QuestionnaireSetName = '';

  /**
   * PrjId(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public PrjId = '';

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public memo = '';

  /**
   * IsInUse(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public IsInUse = false;

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

  public sfUpdFldSetStr = ''; //专门用于记录某字段属性是否修改
  public sfFldComparisonOp = ''; //专门用于记录条件对象某字段的比较运算符
}
