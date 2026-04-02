/**
 * 类名:clsPk2EduClsTeacherTypeEN
 * 表名:Pk2EduClsTeacherType(01120133)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:24
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 教学班教师角色表2(Pk2EduClsTeacherType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPk2EduClsTeacherTypeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'Pk2EduClsTeacherType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'IdPk2EduClsTeacherType'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 3;
  public static AttributeName = [
    'idPk2EduClsTeacherType',
    'eduClsTeacherTypeId',
    'eduClsTeacherTypeDesc',
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
  private mstrIdPk2EduClsTeacherType = ''; //教学班老师角色(主讲,辅导)流水号
  private mstrEduClsTeacherTypeId = ''; //教学班教学类型ID
  private mstrEduClsTeacherTypeDesc = ''; //教学班教师类型名

  /**
   * 教学班老师角色(主讲,辅导)流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdPk2EduClsTeacherType(value: string) {
    if (value != undefined) {
      this.idPk2EduClsTeacherType = value;
      this.hmProperty['idPk2EduClsTeacherType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教学班教学类型ID(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEduClsTeacherTypeId(value: string) {
    if (value != undefined) {
      this.eduClsTeacherTypeId = value;
      this.hmProperty['eduClsTeacherTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教学班教师类型名(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEduClsTeacherTypeDesc(value: string) {
    if (value != undefined) {
      this.eduClsTeacherTypeDesc = value;
      this.hmProperty['eduClsTeacherTypeDesc'] = true;
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
      case clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType:
        return this.idPk2EduClsTeacherType;
      case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeId:
        return this.eduClsTeacherTypeId;
      case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeDesc:
        return this.eduClsTeacherTypeDesc;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Pk2EduClsTeacherType]中不存在!`;
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
      case clsPk2EduClsTeacherTypeEN.con_IdPk2EduClsTeacherType:
        this.idPk2EduClsTeacherType = strValue;
        this.hmProperty['idPk2EduClsTeacherType'] = true;
        break;
      case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeId:
        this.eduClsTeacherTypeId = strValue;
        this.hmProperty['eduClsTeacherTypeId'] = true;
        break;
      case clsPk2EduClsTeacherTypeEN.con_EduClsTeacherTypeDesc:
        this.eduClsTeacherTypeDesc = strValue;
        this.hmProperty['eduClsTeacherTypeDesc'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Pk2EduClsTeacherType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public idPk2EduClsTeacherType = ''; //教学班老师角色(主讲,辅导)流水号
  public eduClsTeacherTypeId = ''; //教学班教学类型ID
  public eduClsTeacherTypeDesc = ''; //教学班教师类型名

  /**
   * 常量:"IdPk2EduClsTeacherType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdPk2EduClsTeacherType(): string {
    return 'idPk2EduClsTeacherType';
  } //教学班老师角色(主讲,辅导)流水号

  /**
   * 常量:"EduClsTeacherTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_EduClsTeacherTypeId(): string {
    return 'eduClsTeacherTypeId';
  } //教学班教学类型ID

  /**
   * 常量:"EduClsTeacherTypeDesc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_EduClsTeacherTypeDesc(): string {
    return 'eduClsTeacherTypeDesc';
  } //教学班教师类型名

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
