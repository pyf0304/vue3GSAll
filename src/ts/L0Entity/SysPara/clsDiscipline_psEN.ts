/**
 * 类名:clsDiscipline_psEN
 * 表名:Discipline_ps(01120100)
 * 生成代码版本:2021.09.26.2
 * 生成日期:2021/09/27 17:59:04
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
 * 学科_ps(Discipline_ps)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab2 } from '@/ts/PubFun/clsGeneralTab2';
export class clsDiscipline_psEN extends clsGeneralTab2 {
  [x: string]: any; //索引类型
  public static _CurrTabName = 'Discipline_ps'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'id_Discipline_Ps'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'id_Discipline_Ps',
    'DisciplineID',
    'DisciplineName',
    'orderNum',
    'isVisible',
    'id_School',
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

  private mstrid_Discipline_Ps = ''; //学科流水号
  private mstrDisciplineID = ''; //学科ID
  private mstrDisciplineName = ''; //学科名称
  private mintOrderNum = 0; //序号
  private mbolIsVisible = false; //是否显示
  private mstrid_School = ''; //学校流水号
  private mstrMemo = ''; //备注

  /**
   * 学科流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get id_Discipline_Ps() {
    return this.mstrid_Discipline_Ps;
  }
  /**
   * 学科流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set id_Discipline_Ps(value: string) {
    if (value != undefined) {
      this.mstrid_Discipline_Ps = value;
      this.hmProperty['id_Discipline_Ps'] = true;
    }
  }

  /**
   * 学科ID(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get DisciplineID() {
    return this.mstrDisciplineID;
  }
  /**
   * 学科ID(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set DisciplineID(value: string) {
    if (value != undefined) {
      this.mstrDisciplineID = value;
      this.hmProperty['DisciplineID'] = true;
    }
  }

  /**
   * 学科名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get DisciplineName() {
    return this.mstrDisciplineName;
  }
  /**
   * 学科名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set DisciplineName(value: string) {
    if (value != undefined) {
      this.mstrDisciplineName = value;
      this.hmProperty['DisciplineName'] = true;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get orderNum() {
    return this.mintOrderNum;
  }
  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set orderNum(value: number) {
    if (value != undefined) {
      this.mintOrderNum = value;
      this.hmProperty['orderNum'] = true;
    }
  }

  /**
   * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get isVisible() {
    return this.mbolIsVisible;
  }
  /**
   * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set isVisible(value: boolean) {
    if (value != undefined) {
      this.mbolIsVisible = value;
      this.hmProperty['isVisible'] = true;
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
   * 常量:"id_Discipline_Ps"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_id_Discipline_Ps(): string {
    return 'id_Discipline_Ps';
  } //学科流水号

  /**
   * 常量:"DisciplineID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DisciplineID(): string {
    return 'DisciplineID';
  } //学科ID

  /**
   * 常量:"DisciplineName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DisciplineName(): string {
    return 'DisciplineName';
  } //学科名称

  /**
   * 常量:"orderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"isVisible"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsVisible(): string {
    return 'isVisible';
  } //是否显示

  /**
   * 常量:"id_School"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_id_School(): string {
    return 'id_School';
  } //学校流水号

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
 * 学科_ps(Discipline_ps)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
export class clsDiscipline_psEN_Sim {
  [x: string]: any; //索引类型
  //以下是属性变量

  /**
   * 学科流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public id_Discipline_Ps = '';

  /**
   * 学科ID(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public DisciplineID = '';

  /**
   * 学科名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public DisciplineName = '';

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public orderNum = 0;

  /**
   * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public isVisible = false;

  /**
   * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public id_School = '';

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public memo = '';

  public sfUpdFldSetStr = ''; //专门用于记录某字段属性是否修改
  public sfFldComparisonOp = ''; //专门用于记录条件对象某字段的比较运算符
}
