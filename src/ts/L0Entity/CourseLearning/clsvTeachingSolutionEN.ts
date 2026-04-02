/**
 * 类名:clsvTeachingSolutionEN
 * 表名:vTeachingSolution(01120138)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:58
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
 * v教学方案(vTeachingSolution)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvTeachingSolutionEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vTeachingSolution'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TeachingSolutionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 20;
  public static AttributeName = [
    'teachingSolutionId',
    'teachingSolutionName',
    'courseId',
    'courseCode',
    'courseDescription',
    'idTeacher',
    'teacherId',
    'teacherName',
    'idSex',
    'sexDesc',
    'collegeName',
    'idProfGrade',
    'profenssionalGradeName',
    'collegeId',
    'idXzCollege',
    'idXzMajor',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvTeachingSolutionEN.con_TeachingSolutionId:
        return this.teachingSolutionId;
      case clsvTeachingSolutionEN.con_TeachingSolutionName:
        return this.teachingSolutionName;
      case clsvTeachingSolutionEN.con_CourseId:
        return this.courseId;
      case clsvTeachingSolutionEN.con_CourseCode:
        return this.courseCode;
      case clsvTeachingSolutionEN.con_CourseDescription:
        return this.courseDescription;
      case clsvTeachingSolutionEN.con_IdTeacher:
        return this.idTeacher;
      case clsvTeachingSolutionEN.con_TeacherId:
        return this.teacherId;
      case clsvTeachingSolutionEN.con_TeacherName:
        return this.teacherName;
      case clsvTeachingSolutionEN.con_IdSex:
        return this.idSex;
      case clsvTeachingSolutionEN.con_SexDesc:
        return this.sexDesc;
      case clsvTeachingSolutionEN.con_CollegeName:
        return this.collegeName;
      case clsvTeachingSolutionEN.con_IdProfGrade:
        return this.idProfGrade;
      case clsvTeachingSolutionEN.con_ProfenssionalGradeName:
        return this.profenssionalGradeName;
      case clsvTeachingSolutionEN.con_CollegeId:
        return this.collegeId;
      case clsvTeachingSolutionEN.con_IdXzCollege:
        return this.idXzCollege;
      case clsvTeachingSolutionEN.con_IdXzMajor:
        return this.idXzMajor;
      case clsvTeachingSolutionEN.con_BriefIntroduction:
        return this.briefIntroduction;
      case clsvTeachingSolutionEN.con_UpdDate:
        return this.updDate;
      case clsvTeachingSolutionEN.con_UpdUser:
        return this.updUser;
      case clsvTeachingSolutionEN.con_Memo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vTeachingSolution]中不存在!`;
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
      case clsvTeachingSolutionEN.con_TeachingSolutionId:
        this.teachingSolutionId = strValue;
        break;
      case clsvTeachingSolutionEN.con_TeachingSolutionName:
        this.teachingSolutionName = strValue;
        break;
      case clsvTeachingSolutionEN.con_CourseId:
        this.courseId = strValue;
        break;
      case clsvTeachingSolutionEN.con_CourseCode:
        this.courseCode = strValue;
        break;
      case clsvTeachingSolutionEN.con_CourseDescription:
        this.courseDescription = strValue;
        break;
      case clsvTeachingSolutionEN.con_IdTeacher:
        this.idTeacher = strValue;
        break;
      case clsvTeachingSolutionEN.con_TeacherId:
        this.teacherId = strValue;
        break;
      case clsvTeachingSolutionEN.con_TeacherName:
        this.teacherName = strValue;
        break;
      case clsvTeachingSolutionEN.con_IdSex:
        this.idSex = strValue;
        break;
      case clsvTeachingSolutionEN.con_SexDesc:
        this.sexDesc = strValue;
        break;
      case clsvTeachingSolutionEN.con_CollegeName:
        this.collegeName = strValue;
        break;
      case clsvTeachingSolutionEN.con_IdProfGrade:
        this.idProfGrade = strValue;
        break;
      case clsvTeachingSolutionEN.con_ProfenssionalGradeName:
        this.profenssionalGradeName = strValue;
        break;
      case clsvTeachingSolutionEN.con_CollegeId:
        this.collegeId = strValue;
        break;
      case clsvTeachingSolutionEN.con_IdXzCollege:
        this.idXzCollege = strValue;
        break;
      case clsvTeachingSolutionEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        break;
      case clsvTeachingSolutionEN.con_BriefIntroduction:
        this.briefIntroduction = strValue;
        break;
      case clsvTeachingSolutionEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvTeachingSolutionEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvTeachingSolutionEN.con_Memo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vTeachingSolution]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public courseCode = ''; //课程代码
  public courseDescription = ''; //课程描述
  public idTeacher = ''; //教师流水号
  public teacherId = ''; //教师工号
  public teacherName = ''; //教师姓名
  public idSex = ''; //性别流水号
  public sexDesc = ''; //性别名称
  public collegeName = ''; //学院名称
  public idProfGrade = ''; //专业职称流水号
  public profenssionalGradeName = ''; //专业职称
  public collegeId = ''; //学院ID
  public idXzCollege = ''; //学院流水号
  public idXzMajor = ''; //专业流水号
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
   * 常量:"CourseCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseCode(): string {
    return 'courseCode';
  } //课程代码

  /**
   * 常量:"CourseDescription"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseDescription(): string {
    return 'courseDescription';
  } //课程描述

  /**
   * 常量:"IdTeacher"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdTeacher(): string {
    return 'idTeacher';
  } //教师流水号

  /**
   * 常量:"TeacherId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TeacherId(): string {
    return 'teacherId';
  } //教师工号

  /**
   * 常量:"TeacherName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TeacherName(): string {
    return 'teacherName';
  } //教师姓名

  /**
   * 常量:"IdSex"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdSex(): string {
    return 'idSex';
  } //性别流水号

  /**
   * 常量:"SexDesc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SexDesc(): string {
    return 'sexDesc';
  } //性别名称

  /**
   * 常量:"CollegeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CollegeName(): string {
    return 'collegeName';
  } //学院名称

  /**
   * 常量:"IdProfGrade"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdProfGrade(): string {
    return 'idProfGrade';
  } //专业职称流水号

  /**
   * 常量:"ProfenssionalGradeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ProfenssionalGradeName(): string {
    return 'profenssionalGradeName';
  } //专业职称

  /**
   * 常量:"CollegeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CollegeId(): string {
    return 'collegeId';
  } //学院ID

  /**
   * 常量:"IdXzCollege"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzCollege(): string {
    return 'idXzCollege';
  } //学院流水号

  /**
   * 常量:"IdXzMajor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

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
