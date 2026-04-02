/**
 * 类名:clsvViewpointScoreEN
 * 表名:vViewpointScore(01120609)
 * 生成代码版本:2021.09.26.2
 * 生成日期:2021/09/27 18:15:50
 * 生成者:pyf
 * 工程名称:问卷调查
 * 工程ID:0112
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研究生培养
 * 模块英文名:GraduateEdu
 * 框架-层名:实体层(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * vViewpointScore(vViewpointScore)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab2 } from '@/ts/PubFun/clsGeneralTab2';
export class clsvViewpointScoreEN extends clsGeneralTab2 {
  [x: string]: any; //索引类型
  public static _CurrTabName = 'vViewpointScore'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ViewpointScoreId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'ViewpointScoreId',
    'viewpointScore',
    'viewpointId',
    'updDate',
    'updUserId',
    'memo',
    'userName',
    'viewpointName',
    'viewpointContent',
    'reason',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  private mlngViewpointScoreId = 0; //评分Id
  private mfltViewpointScore = 0.0; //评分
  private mstrViewpointId = ''; //观点Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //备注
  private mstrUserName = ''; //用户名
  private mstrViewpointName = ''; //观点名称
  private mstrViewpointContent = ''; //观点内容
  private mstrReason = ''; //理由

  /**
   * 评分Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get ViewpointScoreId() {
    return this.mlngViewpointScoreId;
  }
  /**
   * 评分Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set ViewpointScoreId(value: number) {
    if (value != undefined) {
      this.mlngViewpointScoreId = value;
      this.hmProperty['ViewpointScoreId'] = true;
    }
  }

  /**
   * 评分(说明:;字段类型:float;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get viewpointScore() {
    return this.mfltViewpointScore;
  }
  /**
   * 评分(说明:;字段类型:float;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set viewpointScore(value: number) {
    if (value != undefined) {
      this.mfltViewpointScore = value;
      this.hmProperty['viewpointScore'] = true;
    }
  }

  /**
   * 观点Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get viewpointId() {
    return this.mstrViewpointId;
  }
  /**
   * 观点Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set viewpointId(value: string) {
    if (value != undefined) {
      this.mstrViewpointId = value;
      this.hmProperty['viewpointId'] = true;
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
   * 用户名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get userName() {
    return this.mstrUserName;
  }
  /**
   * 用户名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set userName(value: string) {
    if (value != undefined) {
      this.mstrUserName = value;
      this.hmProperty['userName'] = true;
    }
  }

  /**
   * 观点名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get viewpointName() {
    return this.mstrViewpointName;
  }
  /**
   * 观点名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set viewpointName(value: string) {
    if (value != undefined) {
      this.mstrViewpointName = value;
      this.hmProperty['viewpointName'] = true;
    }
  }

  /**
   * 观点内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get viewpointContent() {
    return this.mstrViewpointContent;
  }
  /**
   * 观点内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set viewpointContent(value: string) {
    if (value != undefined) {
      this.mstrViewpointContent = value;
      this.hmProperty['viewpointContent'] = true;
    }
  }

  /**
   * 理由(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get reason() {
    return this.mstrReason;
  }
  /**
   * 理由(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set reason(value: string) {
    if (value != undefined) {
      this.mstrReason = value;
      this.hmProperty['reason'] = true;
    }
  }

  /**
   * 常量:"ViewpointScoreId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewpointScoreId(): string {
    return 'ViewpointScoreId';
  } //评分Id

  /**
   * 常量:"viewpointScore"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewpointScore(): string {
    return 'viewpointScore';
  } //评分

  /**
   * 常量:"viewpointId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewpointId(): string {
    return 'viewpointId';
  } //观点Id

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

  /**
   * 常量:"userName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  /**
   * 常量:"viewpointName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewpointName(): string {
    return 'viewpointName';
  } //观点名称

  /**
   * 常量:"viewpointContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewpointContent(): string {
    return 'viewpointContent';
  } //观点内容

  /**
   * 常量:"reason"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Reason(): string {
    return 'reason';
  } //理由

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
 * vViewpointScore(vViewpointScore)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
export class clsvViewpointScoreEN_Sim {
  [x: string]: any; //索引类型
  //以下是属性变量

  /**
   * 评分Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public ViewpointScoreId = 0;

  /**
   * 评分(说明:;字段类型:float;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public viewpointScore = 0.0;

  /**
   * 观点Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public viewpointId = '';

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

  /**
   * 用户名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public userName = '';

  /**
   * 观点名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public viewpointName = '';

  /**
   * 观点内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public viewpointContent = '';

  /**
   * 理由(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public reason = '';

  public sfUpdFldSetStr = ''; //专门用于记录某字段属性是否修改
  public sfFldComparisonOp = ''; //专门用于记录条件对象某字段的比较运算符
}
