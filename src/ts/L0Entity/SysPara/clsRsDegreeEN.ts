/**
 * 类名:clsRsDegreeEN
 * 表名:RsDegree(01120106)
 * 生成代码版本:2021.09.26.2
 * 生成日期:2021/09/27 17:59:27
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
 * 学位(RsDegree)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab2 } from '@/ts/PubFun/clsGeneralTab2';
export class clsRsDegreeEN extends clsGeneralTab2 {
  [x: string]: any; //索引类型
  public static _CurrTabName = 'RsDegree'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'id_Degree'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 3;
  public static AttributeName = ['id_Degree', 'DegreeID', 'DegreeName'];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  private mstrid_Degree = ''; //学位流水号
  private mstrDegreeID = ''; //学位代号
  private mstrDegreeName = ''; //学位名称

  /**
   * 学位流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get id_Degree() {
    return this.mstrid_Degree;
  }
  /**
   * 学位流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set id_Degree(value: string) {
    if (value != undefined) {
      this.mstrid_Degree = value;
      this.hmProperty['id_Degree'] = true;
    }
  }

  /**
   * 学位代号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get DegreeID() {
    return this.mstrDegreeID;
  }
  /**
   * 学位代号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set DegreeID(value: string) {
    if (value != undefined) {
      this.mstrDegreeID = value;
      this.hmProperty['DegreeID'] = true;
    }
  }

  /**
   * 学位名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public get DegreeName() {
    return this.mstrDegreeName;
  }
  /**
   * 学位名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public set DegreeName(value: string) {
    if (value != undefined) {
      this.mstrDegreeName = value;
      this.hmProperty['DegreeName'] = true;
    }
  }

  /**
   * 常量:"id_Degree"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_id_Degree(): string {
    return 'id_Degree';
  } //学位流水号

  /**
   * 常量:"DegreeID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DegreeID(): string {
    return 'DegreeID';
  } //学位代号

  /**
   * 常量:"DegreeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DegreeName(): string {
    return 'DegreeName';
  } //学位名称

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
 * 学位(RsDegree)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
export class clsRsDegreeEN_Sim {
  [x: string]: any; //索引类型
  //以下是属性变量

  /**
   * 学位流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public id_Degree = '';

  /**
   * 学位代号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public DegreeID = '';

  /**
   * 学位名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_SimEN_ClsProperty)
   */
  public DegreeName = '';

  public sfUpdFldSetStr = ''; //专门用于记录某字段属性是否修改
  public sfFldComparisonOp = ''; //专门用于记录条件对象某字段的比较运算符
}
