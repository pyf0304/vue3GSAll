/**
 * 类名:clsTeachingSolutionEN
 * 表名:TeachingSolution(01120137)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:07
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 教学方案(TeachingSolution)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsTeachingSolutionEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'TeachingSolution'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TeachingSolutionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'teachingSolutionId',
    'teachingSolutionName',
    'courseId',
    'idTeacher',
    'briefIntroduction',
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

  /**
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrTeachingSolutionId = ''; //教学方案Id
  private mstrTeachingSolutionName = ''; //教学方案名称
  private mstrCourseId = ''; //课程Id
  private mstrIdTeacher = ''; //教师流水号
  private mstrBriefIntroduction = ''; //简介
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改人
  private mstrMemo = ''; //备注

  /**
   * 教学方案Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTeachingSolutionId(value: string) {
    if (value != undefined) {
      this.teachingSolutionId = value;
      this.hmProperty['teachingSolutionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教学方案名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTeachingSolutionName(value: string) {
    if (value != undefined) {
      this.teachingSolutionName = value;
      this.hmProperty['teachingSolutionName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCourseId(value: string) {
    if (value != undefined) {
      this.courseId = value;
      this.hmProperty['courseId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教师流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdTeacher(value: string) {
    if (value != undefined) {
      this.idTeacher = value;
      this.hmProperty['idTeacher'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 简介(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetBriefIntroduction(value: string) {
    if (value != undefined) {
      this.briefIntroduction = value;
      this.hmProperty['briefIntroduction'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
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
      case clsTeachingSolutionEN.con_TeachingSolutionId:
        return this.teachingSolutionId;
      case clsTeachingSolutionEN.con_TeachingSolutionName:
        return this.teachingSolutionName;
      case clsTeachingSolutionEN.con_CourseId:
        return this.courseId;
      case clsTeachingSolutionEN.con_IdTeacher:
        return this.idTeacher;
      case clsTeachingSolutionEN.con_BriefIntroduction:
        return this.briefIntroduction;
      case clsTeachingSolutionEN.con_UpdDate:
        return this.updDate;
      case clsTeachingSolutionEN.con_UpdUser:
        return this.updUser;
      case clsTeachingSolutionEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[TeachingSolution]中不存在!`;
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
      case clsTeachingSolutionEN.con_TeachingSolutionId:
        this.teachingSolutionId = strValue;
        this.hmProperty['teachingSolutionId'] = true;
        break;
      case clsTeachingSolutionEN.con_TeachingSolutionName:
        this.teachingSolutionName = strValue;
        this.hmProperty['teachingSolutionName'] = true;
        break;
      case clsTeachingSolutionEN.con_CourseId:
        this.courseId = strValue;
        this.hmProperty['courseId'] = true;
        break;
      case clsTeachingSolutionEN.con_IdTeacher:
        this.idTeacher = strValue;
        this.hmProperty['idTeacher'] = true;
        break;
      case clsTeachingSolutionEN.con_BriefIntroduction:
        this.briefIntroduction = strValue;
        this.hmProperty['briefIntroduction'] = true;
        break;
      case clsTeachingSolutionEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsTeachingSolutionEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsTeachingSolutionEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[TeachingSolution]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public teachingSolutionId = ''; //教学方案Id
  public teachingSolutionName = ''; //教学方案名称
  public courseId = ''; //课程Id
  public idTeacher = ''; //教师流水号
  public briefIntroduction = ''; //简介
  public updDate = ''; //修改日期
  public updUser = ''; //修改人
  public memo = ''; //备注

  /**
   * 常量:"TeachingSolutionId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TeachingSolutionId(): string {
    return 'teachingSolutionId';
  } //教学方案Id

  /**
   * 常量:"TeachingSolutionName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TeachingSolutionName(): string {
    return 'teachingSolutionName';
  } //教学方案名称

  /**
   * 常量:"CourseId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseId(): string {
    return 'courseId';
  } //课程Id

  /**
   * 常量:"IdTeacher"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdTeacher(): string {
    return 'idTeacher';
  } //教师流水号

  /**
   * 常量:"BriefIntroduction"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_BriefIntroduction(): string {
    return 'briefIntroduction';
  } //简介

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

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
