/**
 * 类名:clsgs_StructureChartNodeEN
 * 表名:gs_StructureChartNode(01120877)
 * 生成代码版本:2021.09.26.2
 * 生成日期:2021/09/27 18:01:45
 * 生成者:pyf
 * 工程名称:问卷调查
 * 工程ID:0112
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关
 * 模块英文名:Knowledges
 * 框架-层名:实体层(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 结构图节点(gs_StructureChartNode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab2 } from '@/ts/PubFun/clsGeneralTab2';
export class clsgs_StructureChartNodeEN extends clsGeneralTab2 {
  [x: string]: any; //索引类型
  public static _CurrTabName = 'gs_StructureChartNode'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 12;
  public static AttributeName = [
    'mId',
    'StructureChartId',
    'NodeId',
    'NodeTitle',
    'parentId',
    'IsRoot',
    'Expanded',
    'Direction',
    'BgColor',
    'updDate',
    'updUser',
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

  private mlngmId = 0; //mId
  private mstrStructureChartId = ''; //结构图Id
  private mstrNodeId = ''; //节点Id
  private mstrNodeTitle = ''; //节点标题
  private mstrParentId = ''; //父Id
  private mbolIsRoot = false; //IsRoot
  private mbolExpanded = false; //扩大
  private mstrDirection = ''; //方向
  private mstrBgColor = ''; //背景色
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改人
  private mstrMemo = ''; //备注

  /**
   * mId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get mId() {
    return this.mlngmId;
  }
  /**
   * mId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set mId(value: number) {
    if (value != undefined) {
      this.mlngmId = value;
      this.hmProperty['mId'] = true;
    }
  }

  /**
   * 结构图Id(说明:;字段类型:char;字段长度:10;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get StructureChartId() {
    return this.mstrStructureChartId;
  }
  /**
   * 结构图Id(说明:;字段类型:char;字段长度:10;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set StructureChartId(value: string) {
    if (value != undefined) {
      this.mstrStructureChartId = value;
      this.hmProperty['StructureChartId'] = true;
    }
  }

  /**
   * 节点Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get NodeId() {
    return this.mstrNodeId;
  }
  /**
   * 节点Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set NodeId(value: string) {
    if (value != undefined) {
      this.mstrNodeId = value;
      this.hmProperty['NodeId'] = true;
    }
  }

  /**
   * 节点标题(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get NodeTitle() {
    return this.mstrNodeTitle;
  }
  /**
   * 节点标题(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set NodeTitle(value: string) {
    if (value != undefined) {
      this.mstrNodeTitle = value;
      this.hmProperty['NodeTitle'] = true;
    }
  }

  /**
   * 父Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get parentId() {
    return this.mstrParentId;
  }
  /**
   * 父Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set parentId(value: string) {
    if (value != undefined) {
      this.mstrParentId = value;
      this.hmProperty['parentId'] = true;
    }
  }

  /**
   * IsRoot(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get IsRoot() {
    return this.mbolIsRoot;
  }
  /**
   * IsRoot(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set IsRoot(value: boolean) {
    if (value != undefined) {
      this.mbolIsRoot = value;
      this.hmProperty['IsRoot'] = true;
    }
  }

  /**
   * 扩大(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get Expanded() {
    return this.mbolExpanded;
  }
  /**
   * 扩大(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set Expanded(value: boolean) {
    if (value != undefined) {
      this.mbolExpanded = value;
      this.hmProperty['Expanded'] = true;
    }
  }

  /**
   * 方向(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get Direction() {
    return this.mstrDirection;
  }
  /**
   * 方向(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set Direction(value: string) {
    if (value != undefined) {
      this.mstrDirection = value;
      this.hmProperty['Direction'] = true;
    }
  }

  /**
   * 背景色(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get BgColor() {
    return this.mstrBgColor;
  }
  /**
   * 背景色(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set BgColor(value: string) {
    if (value != undefined) {
      this.mstrBgColor = value;
      this.hmProperty['BgColor'] = true;
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
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get updUser() {
    return this.mstrUpdUser;
  }
  /**
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set updUser(value: string) {
    if (value != undefined) {
      this.mstrUpdUser = value;
      this.hmProperty['updUser'] = true;
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
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"StructureChartId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_StructureChartId(): string {
    return 'StructureChartId';
  } //结构图Id

  /**
   * 常量:"NodeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_NodeId(): string {
    return 'NodeId';
  } //节点Id

  /**
   * 常量:"NodeTitle"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_NodeTitle(): string {
    return 'NodeTitle';
  } //节点标题

  /**
   * 常量:"parentId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParentId(): string {
    return 'parentId';
  } //父Id

  /**
   * 常量:"IsRoot"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsRoot(): string {
    return 'IsRoot';
  } //IsRoot

  /**
   * 常量:"Expanded"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Expanded(): string {
    return 'Expanded';
  } //扩大

  /**
   * 常量:"Direction"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Direction(): string {
    return 'Direction';
  } //方向

  /**
   * 常量:"BgColor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_BgColor(): string {
    return 'BgColor';
  } //背景色

  /**
   * 常量:"updDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"updUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

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
 * 结构图节点(gs_StructureChartNode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
export class clsgs_StructureChartNodeEN_Sim {
  [x: string]: any; //索引类型
  //以下是属性变量

  /**
   * mId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public mId = 0;

  /**
   * 结构图Id(说明:;字段类型:char;字段长度:10;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public StructureChartId = '';

  /**
   * 节点Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public NodeId = '';

  /**
   * 节点标题(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public NodeTitle = '';

  /**
   * 父Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public parentId = '';

  /**
   * IsRoot(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public IsRoot = false;

  /**
   * 扩大(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public Expanded = false;

  /**
   * 方向(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public Direction = '';

  /**
   * 背景色(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public BgColor = '';

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public updDate = '';

  /**
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public updUser = '';

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public memo = '';

  public sfUpdFldSetStr = ''; //专门用于记录某字段属性是否修改
  public sfFldComparisonOp = ''; //专门用于记录条件对象某字段的比较运算符
}
