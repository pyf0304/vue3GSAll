/**
* 类名:clsColumns
* 表名:FieldTab(00050021)
* 生成代码版本:2022.01.04.1
* 生成日期:2022/01/04 12:12:20
* 生成者:pyf
工程名称:AGC(0005)
CM工程:AgcSpa前端(变量首字母小写)
* 相关数据库:103.116.76.183,9433AGCCS12
* prjDataBaseId:0005
模块中文名:字段、表维护(Table_Field)
* 框架-层名:实体层(EntityLayer)
* 编程语言:TypeScript
**/
/**
 * 工程字段(FieldTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/

import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsColumns extends clsGeneralTab {
  [x: string]: any; //索引类型
  public static CacheModeId = ''; //
  public static CurrTabName = 'Columns'; //当前表名,与该类相关的表名
  public static KeyColumnName = 'fldId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 25;
  public static AttributeName = [
    'fldId',
    'columnName',
    'typeName',
    'length',
    'precision',
    'isNullable',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:GenENClassConstructor1)
   */
  constructor() {
    super();
  }

  private mstrFldId = ''; //字段Id
  private mstrColumnName = ''; //字段名
  private mstrTypeName = ''; //数据类型Id
  private mintlength = 0; //字段长度
  private mintPrecision = 0; //精度，小数位数
  private mstrIsNullable = ''; //是否可空
  private mbolIsNeedTransCode = false; //是否需要转换代码

  /**
   * 字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public get fldId() {
    return this.mstrFldId;
  }
  /**
   * 字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public set fldId(value: string) {
    if (value != undefined) {
      this.mstrFldId = value;
      this.hmProperty['fldId'] = true;
    }
  }

  /**
   * 字段名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public get columnName() {
    return this.mstrColumnName;
  }
  /**
   * 字段名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public set columnName(value: string) {
    if (value != undefined) {
      this.mstrColumnName = value;
      this.hmProperty['columnName'] = true;
    }
  }

  /**
   * 数据类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public get typeName() {
    return this.mstrTypeName;
  }
  /**
   * 数据类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public set typeName(value: string) {
    if (value != undefined) {
      this.mstrTypeName = value;
      this.hmProperty['typeName'] = true;
    }
  }

  /**
   * 字段长度(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public get length() {
    return this.mintlength;
  }
  /**
   * 字段长度(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public set length(value: number) {
    if (value != undefined) {
      this.mintlength = value;
      this.hmProperty['length'] = true;
    }
  }

  /**
   * 精确度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public get precision() {
    return this.mintPrecision;
  }
  /**
   * 精确度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public set precision(value: number) {
    if (value != undefined) {
      this.mintPrecision = value;
      this.hmProperty['precision'] = true;
    }
  }

  /**
   * 是否可空(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public get isNullable() {
    return this.mstrIsNullable;
  }
  /**
   * 是否可空(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenENClsProperty)
   */
  public set isNullable(value: string) {
    if (value != undefined) {
      this.mstrIsNullable = value;
      this.hmProperty['isNullable'] = true;
    }
  }

  /**
   * 常量:"fldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"ColumnName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conColumnName(): string {
    return 'columnName';
  } //字段名

  /**
   * 常量:"TypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conTypeName(): string {
    return 'typeName';
  } //数据类型Id

  /**
   * 常量:"length"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conlength(): string {
    return 'length';
  } //字段长度

  /**
   * 常量:"precision"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conPrecision(): string {
    return 'precision';
  } //精确度

  /**
   * 常量:"IsNullable"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conIsNullable(): string {
    return 'isNullable';
  } //是否可空
}
/**
 * 工程字段(FieldTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
export class clsFieldTabENSim {
  [x: string]: any; //索引类型
  //以下是属性变量

  /**
   * 字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenSimENClsProperty)
   */
  public fldId = '';

  /**
   * 字段名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenSimENClsProperty)
   */
  public columnName = '';
  /**
   * 数据类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenSimENClsProperty)
   */
  public typeName = '';

  /**
   * 字段长度(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenSimENClsProperty)
   */
  public length = 0;

  /**
   * 精确度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:GenSimENClsProperty)
   */
  public precision = 0;
  /**
   * 是否可空(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenSimENClsProperty)
   */
  public isNullable = false;

  /**
   * 是否需要转换代码(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:GenSimENClsProperty)
   */
  public isNeedTransCode = false;

  public sfUpdFldSetStr = ''; //专门用于记录某字段属性是否修改
  public sfFldComparisonOp = ''; //专门用于记录条件对象某字段的比较运算符
}
