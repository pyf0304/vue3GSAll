/**
 * 类名:clsvcc_CourseEN
 * 表名:vcc_Course(01120058)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:59
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
 * v课程(vcc_Course)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvcc_CourseEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vcc_Course'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CourseId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 31;
  public static AttributeName = [
    'courseId',
    'likeCount',
    'courseCode',
    'courseDescription',
    'courseName',
    'courseTypeId',
    'courseTypeName',
    'createDate',
    'excellentTypeId',
    'excellentTypeName',
    'excellentYear',
    'isBuildingCourse',
    'isDoubleLanguageCourse',
    'isOpen',
    'isRecommendedCourse',
    'isSelfPropelledCourse',
    'operationDate',
    'orderNum',
    'outerLink',
    'viewCount',
    'themeId',
    'themeName',
    'exampleImgPath',
    'idXzMajor',
    'majorID',
    'majorName',
    'idXzCollege',
    'collegeId',
    'collegeName',
    'collegeNameA',
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
      case clsvcc_CourseEN.con_CourseId:
        return this.courseId;
      case clsvcc_CourseEN.con_LikeCount:
        return this.likeCount;
      case clsvcc_CourseEN.con_CourseCode:
        return this.courseCode;
      case clsvcc_CourseEN.con_CourseDescription:
        return this.courseDescription;
      case clsvcc_CourseEN.con_CourseName:
        return this.courseName;
      case clsvcc_CourseEN.con_CourseTypeId:
        return this.courseTypeId;
      case clsvcc_CourseEN.con_CourseTypeName:
        return this.courseTypeName;
      case clsvcc_CourseEN.con_CreateDate:
        return this.createDate;
      case clsvcc_CourseEN.con_ExcellentTypeId:
        return this.excellentTypeId;
      case clsvcc_CourseEN.con_ExcellentTypeName:
        return this.excellentTypeName;
      case clsvcc_CourseEN.con_ExcellentYear:
        return this.excellentYear;
      case clsvcc_CourseEN.con_IsBuildingCourse:
        return this.isBuildingCourse;
      case clsvcc_CourseEN.con_IsDoubleLanguageCourse:
        return this.isDoubleLanguageCourse;
      case clsvcc_CourseEN.con_IsOpen:
        return this.isOpen;
      case clsvcc_CourseEN.con_IsRecommendedCourse:
        return this.isRecommendedCourse;
      case clsvcc_CourseEN.con_IsSelfPropelledCourse:
        return this.isSelfPropelledCourse;
      case clsvcc_CourseEN.con_OperationDate:
        return this.operationDate;
      case clsvcc_CourseEN.con_OrderNum:
        return this.orderNum;
      case clsvcc_CourseEN.con_OuterLink:
        return this.outerLink;
      case clsvcc_CourseEN.con_ViewCount:
        return this.viewCount;
      case clsvcc_CourseEN.con_ThemeId:
        return this.themeId;
      case clsvcc_CourseEN.con_ThemeName:
        return this.themeName;
      case clsvcc_CourseEN.con_ExampleImgPath:
        return this.exampleImgPath;
      case clsvcc_CourseEN.con_IdXzMajor:
        return this.idXzMajor;
      case clsvcc_CourseEN.con_MajorID:
        return this.majorID;
      case clsvcc_CourseEN.con_MajorName:
        return this.majorName;
      case clsvcc_CourseEN.con_IdXzCollege:
        return this.idXzCollege;
      case clsvcc_CourseEN.con_CollegeId:
        return this.collegeId;
      case clsvcc_CourseEN.con_CollegeName:
        return this.collegeName;
      case clsvcc_CourseEN.con_CollegeNameA:
        return this.collegeNameA;
      case clsvcc_CourseEN.con_Memo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vcc_Course]中不存在!`;
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
      case clsvcc_CourseEN.con_CourseId:
        this.courseId = strValue;
        break;
      case clsvcc_CourseEN.con_LikeCount:
        this.likeCount = Number(strValue);
        break;
      case clsvcc_CourseEN.con_CourseCode:
        this.courseCode = strValue;
        break;
      case clsvcc_CourseEN.con_CourseDescription:
        this.courseDescription = strValue;
        break;
      case clsvcc_CourseEN.con_CourseName:
        this.courseName = strValue;
        break;
      case clsvcc_CourseEN.con_CourseTypeId:
        this.courseTypeId = strValue;
        break;
      case clsvcc_CourseEN.con_CourseTypeName:
        this.courseTypeName = strValue;
        break;
      case clsvcc_CourseEN.con_CreateDate:
        this.createDate = strValue;
        break;
      case clsvcc_CourseEN.con_ExcellentTypeId:
        this.excellentTypeId = strValue;
        break;
      case clsvcc_CourseEN.con_ExcellentTypeName:
        this.excellentTypeName = strValue;
        break;
      case clsvcc_CourseEN.con_ExcellentYear:
        this.excellentYear = Number(strValue);
        break;
      case clsvcc_CourseEN.con_IsBuildingCourse:
        this.isBuildingCourse = Boolean(strValue);
        break;
      case clsvcc_CourseEN.con_IsDoubleLanguageCourse:
        this.isDoubleLanguageCourse = Boolean(strValue);
        break;
      case clsvcc_CourseEN.con_IsOpen:
        this.isOpen = Boolean(strValue);
        break;
      case clsvcc_CourseEN.con_IsRecommendedCourse:
        this.isRecommendedCourse = Boolean(strValue);
        break;
      case clsvcc_CourseEN.con_IsSelfPropelledCourse:
        this.isSelfPropelledCourse = Boolean(strValue);
        break;
      case clsvcc_CourseEN.con_OperationDate:
        this.operationDate = strValue;
        break;
      case clsvcc_CourseEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvcc_CourseEN.con_OuterLink:
        this.outerLink = strValue;
        break;
      case clsvcc_CourseEN.con_ViewCount:
        this.viewCount = Number(strValue);
        break;
      case clsvcc_CourseEN.con_ThemeId:
        this.themeId = strValue;
        break;
      case clsvcc_CourseEN.con_ThemeName:
        this.themeName = strValue;
        break;
      case clsvcc_CourseEN.con_ExampleImgPath:
        this.exampleImgPath = strValue;
        break;
      case clsvcc_CourseEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        break;
      case clsvcc_CourseEN.con_MajorID:
        this.majorID = strValue;
        break;
      case clsvcc_CourseEN.con_MajorName:
        this.majorName = strValue;
        break;
      case clsvcc_CourseEN.con_IdXzCollege:
        this.idXzCollege = strValue;
        break;
      case clsvcc_CourseEN.con_CollegeId:
        this.collegeId = strValue;
        break;
      case clsvcc_CourseEN.con_CollegeName:
        this.collegeName = strValue;
        break;
      case clsvcc_CourseEN.con_CollegeNameA:
        this.collegeNameA = strValue;
        break;
      case clsvcc_CourseEN.con_Memo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vcc_Course]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public courseId = ''; //课程Id
  public likeCount = 0; //LikeCount
  public courseCode = ''; //课程代码
  public courseDescription = ''; //课程描述
  public courseName = ''; //课程名称
  public courseTypeId = ''; //课程类型ID
  public courseTypeName = ''; //课程类型名称
  public createDate = ''; //建立日期
  public excellentTypeId = ''; //精品课程类型Id
  public excellentTypeName = ''; //精品课程类型名称
  public excellentYear = 0; //课程年份
  public isBuildingCourse = false; //是否已建设课程
  public isDoubleLanguageCourse = false; //是否双语课程
  public isOpen = false; //是否公开
  public isRecommendedCourse = false; //是否推荐课程
  public isSelfPropelledCourse = false; //是否自荐课程
  public operationDate = ''; //操作时间
  public orderNum = 0; //序号
  public outerLink = ''; //外链地址
  public viewCount = 0; //浏览量
  public themeId = ''; //主题Id
  public themeName = ''; //主题名
  public exampleImgPath = ''; //示例图路径
  public idXzMajor = ''; //专业流水号
  public majorID = ''; //专业ID
  public majorName = ''; //专业名称
  public idXzCollege = ''; //学院流水号
  public collegeId = ''; //学院ID
  public collegeName = ''; //学院名称
  public collegeNameA = ''; //学院名称简写
  public memo = ''; //备注

  /**
   * 常量:"CourseId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseId(): string {
    return 'courseId';
  } //课程Id

  /**
   * 常量:"LikeCount"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LikeCount(): string {
    return 'likeCount';
  } //LikeCount

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
   * 常量:"CourseName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseName(): string {
    return 'courseName';
  } //课程名称

  /**
   * 常量:"CourseTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseTypeId(): string {
    return 'courseTypeId';
  } //课程类型ID

  /**
   * 常量:"CourseTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CourseTypeName(): string {
    return 'courseTypeName';
  } //课程类型名称

  /**
   * 常量:"CreateDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CreateDate(): string {
    return 'createDate';
  } //建立日期

  /**
   * 常量:"ExcellentTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExcellentTypeId(): string {
    return 'excellentTypeId';
  } //精品课程类型Id

  /**
   * 常量:"ExcellentTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExcellentTypeName(): string {
    return 'excellentTypeName';
  } //精品课程类型名称

  /**
   * 常量:"ExcellentYear"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExcellentYear(): string {
    return 'excellentYear';
  } //课程年份

  /**
   * 常量:"IsBuildingCourse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsBuildingCourse(): string {
    return 'isBuildingCourse';
  } //是否已建设课程

  /**
   * 常量:"IsDoubleLanguageCourse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsDoubleLanguageCourse(): string {
    return 'isDoubleLanguageCourse';
  } //是否双语课程

  /**
   * 常量:"IsOpen"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsOpen(): string {
    return 'isOpen';
  } //是否公开

  /**
   * 常量:"IsRecommendedCourse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsRecommendedCourse(): string {
    return 'isRecommendedCourse';
  } //是否推荐课程

  /**
   * 常量:"IsSelfPropelledCourse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsSelfPropelledCourse(): string {
    return 'isSelfPropelledCourse';
  } //是否自荐课程

  /**
   * 常量:"OperationDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OperationDate(): string {
    return 'operationDate';
  } //操作时间

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"OuterLink"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OuterLink(): string {
    return 'outerLink';
  } //外链地址

  /**
   * 常量:"ViewCount"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewCount(): string {
    return 'viewCount';
  } //浏览量

  /**
   * 常量:"ThemeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ThemeId(): string {
    return 'themeId';
  } //主题Id

  /**
   * 常量:"ThemeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ThemeName(): string {
    return 'themeName';
  } //主题名

  /**
   * 常量:"ExampleImgPath"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExampleImgPath(): string {
    return 'exampleImgPath';
  } //示例图路径

  /**
   * 常量:"IdXzMajor"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

  /**
   * 常量:"MajorID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorID(): string {
    return 'majorID';
  } //专业ID

  /**
   * 常量:"MajorName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MajorName(): string {
    return 'majorName';
  } //专业名称

  /**
   * 常量:"IdXzCollege"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdXzCollege(): string {
    return 'idXzCollege';
  } //学院流水号

  /**
   * 常量:"CollegeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CollegeId(): string {
    return 'collegeId';
  } //学院ID

  /**
   * 常量:"CollegeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CollegeName(): string {
    return 'collegeName';
  } //学院名称

  /**
   * 常量:"CollegeNameA"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CollegeNameA(): string {
    return 'collegeNameA';
  } //学院名称简写

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
