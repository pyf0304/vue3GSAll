/**
 * 类名:clsvcc_Course_SimEN
 * 表名:vcc_Course_Sim(01120950)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:50
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * vcc_Course_Sim(vcc_Course_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvcc_Course_SimEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vcc_Course_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CourseId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'courseId',
    'courseCode',
    'courseName',
    'orderNum',
    'courseTypeId',
    'idXzMajor',
    'idXzCollege',
    'excellentTypeId',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvcc_Course_SimEN.con_CourseId:
        return this.courseId;
      case clsvcc_Course_SimEN.con_CourseCode:
        return this.courseCode;
      case clsvcc_Course_SimEN.con_CourseName:
        return this.courseName;
      case clsvcc_Course_SimEN.con_OrderNum:
        return this.orderNum;
      case clsvcc_Course_SimEN.con_CourseTypeId:
        return this.courseTypeId;
      case clsvcc_Course_SimEN.con_IdXzMajor:
        return this.idXzMajor;
      case clsvcc_Course_SimEN.con_IdXzCollege:
        return this.idXzCollege;
      case clsvcc_Course_SimEN.con_ExcellentTypeId:
        return this.excellentTypeId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vcc_Course_Sim]中不存在!`;
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
      case clsvcc_Course_SimEN.con_CourseId:
        this.courseId = strValue;
        break;
      case clsvcc_Course_SimEN.con_CourseCode:
        this.courseCode = strValue;
        break;
      case clsvcc_Course_SimEN.con_CourseName:
        this.courseName = strValue;
        break;
      case clsvcc_Course_SimEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvcc_Course_SimEN.con_CourseTypeId:
        this.courseTypeId = strValue;
        break;
      case clsvcc_Course_SimEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        break;
      case clsvcc_Course_SimEN.con_IdXzCollege:
        this.idXzCollege = strValue;
        break;
      case clsvcc_Course_SimEN.con_ExcellentTypeId:
        this.excellentTypeId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vcc_Course_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public courseId = ''; //课程Id
  public courseCode = ''; //课程代码
  public courseName = ''; //课程名称
  public orderNum = 0; //序号
  public courseTypeId = ''; //课程类型ID
  public idXzMajor = ''; //专业流水号
  public idXzCollege = ''; //学院流水号
  public excellentTypeId = ''; //精品课程类型Id

  /**
   * 常量:"CourseId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseId(): string {
    return 'courseId';
  } //课程Id

  /**
   * 常量:"CourseCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseCode(): string {
    return 'courseCode';
  } //课程代码

  /**
   * 常量:"CourseName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseName(): string {
    return 'courseName';
  } //课程名称

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"CourseTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseTypeId(): string {
    return 'courseTypeId';
  } //课程类型ID

  /**
   * 常量:"IdXzMajor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

  /**
   * 常量:"IdXzCollege"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzCollege(): string {
    return 'idXzCollege';
  } //学院流水号

  /**
   * 常量:"ExcellentTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExcellentTypeId(): string {
    return 'excellentTypeId';
  } //精品课程类型Id

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
