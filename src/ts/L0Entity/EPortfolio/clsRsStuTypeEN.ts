/**
 * 类名:clsRsStuTypeEN
 * 表名:RsStuType(01120162)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:44
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:成长档案(EPortfolio)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 学生类别(RsStuType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsRsStuTypeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'RsStuType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'IdStuType'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'idStuType',
    'stuTypeID',
    'stuTypeDesc',
    'modifyDate',
    'modifyUserId',
    'specUniLenDesc',
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

  /**
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrIdStuType = ''; //学生类别流水号
  private mstrStuTypeID = ''; //学生类别ID
  private mstrStuTypeDesc = ''; //学生类别名称
  private mstrModifyDate = ''; //修改日期
  private mstrModifyUserId = ''; //修改人
  private mstrSpecUniLenDesc = ''; //SpecUniLenDesc
  private mstrMemo = ''; //备注

  /**
   * 学生类别流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdStuType(value: string) {
    if (value != undefined) {
      this.idStuType = value;
      this.hmProperty['idStuType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学生类别ID(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStuTypeID(value: string) {
    if (value != undefined) {
      this.stuTypeID = value;
      this.hmProperty['stuTypeID'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学生类别名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStuTypeDesc(value: string) {
    if (value != undefined) {
      this.stuTypeDesc = value;
      this.hmProperty['stuTypeDesc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetModifyDate(value: string) {
    if (value != undefined) {
      this.modifyDate = value;
      this.hmProperty['modifyDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetModifyUserId(value: string) {
    if (value != undefined) {
      this.modifyUserId = value;
      this.hmProperty['modifyUserId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * SpecUniLenDesc(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSpecUniLenDesc(value: string) {
    if (value != undefined) {
      this.specUniLenDesc = value;
      this.hmProperty['specUniLenDesc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsRsStuTypeEN.con_IdStuType:
        return this.idStuType;
      case clsRsStuTypeEN.con_StuTypeID:
        return this.stuTypeID;
      case clsRsStuTypeEN.con_StuTypeDesc:
        return this.stuTypeDesc;
      case clsRsStuTypeEN.con_ModifyDate:
        return this.modifyDate;
      case clsRsStuTypeEN.con_ModifyUserId:
        return this.modifyUserId;
      case clsRsStuTypeEN.con_SpecUniLenDesc:
        return this.specUniLenDesc;
      case clsRsStuTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[RsStuType]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsRsStuTypeEN.con_IdStuType:
        this.idStuType = strValue;
        this.hmProperty['idStuType'] = true;
        break;
      case clsRsStuTypeEN.con_StuTypeID:
        this.stuTypeID = strValue;
        this.hmProperty['stuTypeID'] = true;
        break;
      case clsRsStuTypeEN.con_StuTypeDesc:
        this.stuTypeDesc = strValue;
        this.hmProperty['stuTypeDesc'] = true;
        break;
      case clsRsStuTypeEN.con_ModifyDate:
        this.modifyDate = strValue;
        this.hmProperty['modifyDate'] = true;
        break;
      case clsRsStuTypeEN.con_ModifyUserId:
        this.modifyUserId = strValue;
        this.hmProperty['modifyUserId'] = true;
        break;
      case clsRsStuTypeEN.con_SpecUniLenDesc:
        this.specUniLenDesc = strValue;
        this.hmProperty['specUniLenDesc'] = true;
        break;
      case clsRsStuTypeEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[RsStuType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public idStuType = ''; //学生类别流水号
  public stuTypeID = ''; //学生类别ID
  public stuTypeDesc = ''; //学生类别名称
  public modifyDate = ''; //修改日期
  public modifyUserId = ''; //修改人
  public specUniLenDesc = ''; //SpecUniLenDesc
  public memo = ''; //备注

  /**
   * 常量:"IdStuType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdStuType(): string {
    return 'idStuType';
  } //学生类别流水号

  /**
   * 常量:"StuTypeID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_StuTypeID(): string {
    return 'stuTypeID';
  } //学生类别ID

  /**
   * 常量:"StuTypeDesc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_StuTypeDesc(): string {
    return 'stuTypeDesc';
  } //学生类别名称

  /**
   * 常量:"ModifyDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ModifyDate(): string {
    return 'modifyDate';
  } //修改日期

  /**
   * 常量:"ModifyUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ModifyUserId(): string {
    return 'modifyUserId';
  } //修改人

  /**
   * 常量:"SpecUniLenDesc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SpecUniLenDesc(): string {
    return 'specUniLenDesc';
  } //SpecUniLenDesc

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
}
