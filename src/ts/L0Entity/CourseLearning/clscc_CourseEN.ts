/**
 * 类名:clscc_CourseEN
 * 表名:cc_Course(01120056)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:21
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
 * 课程(cc_Course)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clscc_CourseEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'cc_Course'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CourseId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 24;
  public static AttributeName = [
    'courseId',
    'courseCode',
    'courseDescription',
    'courseName',
    'courseTypeId',
    'createDate',
    'excellentTypeId',
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
    'idSchool',
    'idXzMajor',
    'idXzCollege',
    'updDate',
    'updUserId',
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
  private mstrCourseId = ''; //课程Id
  private mstrCourseCode = ''; //课程代码
  private mstrCourseDescription = ''; //课程描述
  private mstrCourseName = ''; //课程名称
  private mstrCourseTypeId = ''; //课程类型ID
  private mstrCreateDate = ''; //建立日期
  private mstrExcellentTypeId = ''; //精品课程类型Id
  private mintExcellentYear = 0; //课程年份
  private mbolIsBuildingCourse = false; //是否已建设课程
  private mbolIsDoubleLanguageCourse = false; //是否双语课程
  private mbolIsOpen = false; //是否公开
  private mbolIsRecommendedCourse = false; //是否推荐课程
  private mbolIsSelfPropelledCourse = false; //是否自荐课程
  private mstrOperationDate = ''; //操作时间
  private mintOrderNum = 0; //序号
  private mstrOuterLink = ''; //外链地址
  private mintViewCount = 0; //浏览量
  private mstrThemeId = ''; //主题Id
  private mstrIdSchool = ''; //学校流水号
  private mstrIdXzMajor = ''; //专业流水号
  private mstrIdXzCollege = ''; //学院流水号
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //备注

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
   * 课程代码(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCourseCode(value: string) {
    if (value != undefined) {
      this.courseCode = value;
      this.hmProperty['courseCode'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 课程描述(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCourseDescription(value: string) {
    if (value != undefined) {
      this.courseDescription = value;
      this.hmProperty['courseDescription'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 课程名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCourseName(value: string) {
    if (value != undefined) {
      this.courseName = value;
      this.hmProperty['courseName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 课程类型ID(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCourseTypeId(value: string) {
    if (value != undefined) {
      this.courseTypeId = value;
      this.hmProperty['courseTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 建立日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreateDate(value: string) {
    if (value != undefined) {
      this.createDate = value;
      this.hmProperty['createDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 精品课程类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetExcellentTypeId(value: string) {
    if (value != undefined) {
      this.excellentTypeId = value;
      this.hmProperty['excellentTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 课程年份(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetExcellentYear(value: number) {
    if (value != undefined) {
      this.excellentYear = value;
      this.hmProperty['excellentYear'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否已建设课程(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsBuildingCourse(value: boolean) {
    if (value != undefined) {
      this.isBuildingCourse = value;
      this.hmProperty['isBuildingCourse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否双语课程(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsDoubleLanguageCourse(value: boolean) {
    if (value != undefined) {
      this.isDoubleLanguageCourse = value;
      this.hmProperty['isDoubleLanguageCourse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否公开(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsOpen(value: boolean) {
    if (value != undefined) {
      this.isOpen = value;
      this.hmProperty['isOpen'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否推荐课程(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsRecommendedCourse(value: boolean) {
    if (value != undefined) {
      this.isRecommendedCourse = value;
      this.hmProperty['isRecommendedCourse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否自荐课程(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSelfPropelledCourse(value: boolean) {
    if (value != undefined) {
      this.isSelfPropelledCourse = value;
      this.hmProperty['isSelfPropelledCourse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 操作时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOperationDate(value: string) {
    if (value != undefined) {
      this.operationDate = value;
      this.hmProperty['operationDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 外链地址(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOuterLink(value: string) {
    if (value != undefined) {
      this.outerLink = value;
      this.hmProperty['outerLink'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 浏览量(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewCount(value: number) {
    if (value != undefined) {
      this.viewCount = value;
      this.hmProperty['viewCount'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主题Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetThemeId(value: string) {
    if (value != undefined) {
      this.themeId = value;
      this.hmProperty['themeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdSchool(value: string) {
    if (value != undefined) {
      this.idSchool = value;
      this.hmProperty['idSchool'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdXzMajor(value: string) {
    if (value != undefined) {
      this.idXzMajor = value;
      this.hmProperty['idXzMajor'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学院流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdXzCollege(value: string) {
    if (value != undefined) {
      this.idXzCollege = value;
      this.hmProperty['idXzCollege'] = true;
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
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUserId(value: string) {
    if (value != undefined) {
      this.updUserId = value;
      this.hmProperty['updUserId'] = true;
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
      case clscc_CourseEN.con_CourseId:
        return this.courseId;
      case clscc_CourseEN.con_CourseCode:
        return this.courseCode;
      case clscc_CourseEN.con_CourseDescription:
        return this.courseDescription;
      case clscc_CourseEN.con_CourseName:
        return this.courseName;
      case clscc_CourseEN.con_CourseTypeId:
        return this.courseTypeId;
      case clscc_CourseEN.con_CreateDate:
        return this.createDate;
      case clscc_CourseEN.con_ExcellentTypeId:
        return this.excellentTypeId;
      case clscc_CourseEN.con_ExcellentYear:
        return this.excellentYear;
      case clscc_CourseEN.con_IsBuildingCourse:
        return this.isBuildingCourse;
      case clscc_CourseEN.con_IsDoubleLanguageCourse:
        return this.isDoubleLanguageCourse;
      case clscc_CourseEN.con_IsOpen:
        return this.isOpen;
      case clscc_CourseEN.con_IsRecommendedCourse:
        return this.isRecommendedCourse;
      case clscc_CourseEN.con_IsSelfPropelledCourse:
        return this.isSelfPropelledCourse;
      case clscc_CourseEN.con_OperationDate:
        return this.operationDate;
      case clscc_CourseEN.con_OrderNum:
        return this.orderNum;
      case clscc_CourseEN.con_OuterLink:
        return this.outerLink;
      case clscc_CourseEN.con_ViewCount:
        return this.viewCount;
      case clscc_CourseEN.con_ThemeId:
        return this.themeId;
      case clscc_CourseEN.con_IdSchool:
        return this.idSchool;
      case clscc_CourseEN.con_IdXzMajor:
        return this.idXzMajor;
      case clscc_CourseEN.con_IdXzCollege:
        return this.idXzCollege;
      case clscc_CourseEN.con_UpdDate:
        return this.updDate;
      case clscc_CourseEN.con_UpdUserId:
        return this.updUserId;
      case clscc_CourseEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[cc_Course]中不存在!`;
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
      case clscc_CourseEN.con_CourseId:
        this.courseId = strValue;
        this.hmProperty['courseId'] = true;
        break;
      case clscc_CourseEN.con_CourseCode:
        this.courseCode = strValue;
        this.hmProperty['courseCode'] = true;
        break;
      case clscc_CourseEN.con_CourseDescription:
        this.courseDescription = strValue;
        this.hmProperty['courseDescription'] = true;
        break;
      case clscc_CourseEN.con_CourseName:
        this.courseName = strValue;
        this.hmProperty['courseName'] = true;
        break;
      case clscc_CourseEN.con_CourseTypeId:
        this.courseTypeId = strValue;
        this.hmProperty['courseTypeId'] = true;
        break;
      case clscc_CourseEN.con_CreateDate:
        this.createDate = strValue;
        this.hmProperty['createDate'] = true;
        break;
      case clscc_CourseEN.con_ExcellentTypeId:
        this.excellentTypeId = strValue;
        this.hmProperty['excellentTypeId'] = true;
        break;
      case clscc_CourseEN.con_ExcellentYear:
        this.excellentYear = Number(strValue);
        this.hmProperty['excellentYear'] = true;
        break;
      case clscc_CourseEN.con_IsBuildingCourse:
        this.isBuildingCourse = Boolean(strValue);
        this.hmProperty['isBuildingCourse'] = true;
        break;
      case clscc_CourseEN.con_IsDoubleLanguageCourse:
        this.isDoubleLanguageCourse = Boolean(strValue);
        this.hmProperty['isDoubleLanguageCourse'] = true;
        break;
      case clscc_CourseEN.con_IsOpen:
        this.isOpen = Boolean(strValue);
        this.hmProperty['isOpen'] = true;
        break;
      case clscc_CourseEN.con_IsRecommendedCourse:
        this.isRecommendedCourse = Boolean(strValue);
        this.hmProperty['isRecommendedCourse'] = true;
        break;
      case clscc_CourseEN.con_IsSelfPropelledCourse:
        this.isSelfPropelledCourse = Boolean(strValue);
        this.hmProperty['isSelfPropelledCourse'] = true;
        break;
      case clscc_CourseEN.con_OperationDate:
        this.operationDate = strValue;
        this.hmProperty['operationDate'] = true;
        break;
      case clscc_CourseEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clscc_CourseEN.con_OuterLink:
        this.outerLink = strValue;
        this.hmProperty['outerLink'] = true;
        break;
      case clscc_CourseEN.con_ViewCount:
        this.viewCount = Number(strValue);
        this.hmProperty['viewCount'] = true;
        break;
      case clscc_CourseEN.con_ThemeId:
        this.themeId = strValue;
        this.hmProperty['themeId'] = true;
        break;
      case clscc_CourseEN.con_IdSchool:
        this.idSchool = strValue;
        this.hmProperty['idSchool'] = true;
        break;
      case clscc_CourseEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        this.hmProperty['idXzMajor'] = true;
        break;
      case clscc_CourseEN.con_IdXzCollege:
        this.idXzCollege = strValue;
        this.hmProperty['idXzCollege'] = true;
        break;
      case clscc_CourseEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clscc_CourseEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clscc_CourseEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[cc_Course]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public courseDescription = ''; //课程描述
  public courseName = ''; //课程名称
  public courseTypeId = ''; //课程类型ID
  public createDate = ''; //建立日期
  public excellentTypeId = ''; //精品课程类型Id
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
  public idSchool = ''; //学校流水号
  public idXzMajor = ''; //专业流水号
  public idXzCollege = ''; //学院流水号
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //备注

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
   * 常量:"IdSchool"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdSchool(): string {
    return 'idSchool';
  } //学校流水号

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
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

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
