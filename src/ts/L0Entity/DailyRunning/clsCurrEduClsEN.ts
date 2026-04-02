
 /**
 * 类名:clsCurrEduClsEN
 * 表名:CurrEduCls(01120123)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 17:00:31
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
 * 当前教学班(CurrEduCls)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsCurrEduClsEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "07"; //PiniaStore
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "CurrEduCls"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 36;
public static AttributeName = ["idCurrEduCls", "currEduClsId", "eduClsName", "eduClsTypeId", "courseId", "teachingSolutionId", "idXzCollege", "idXzMajor", "idEduWay", "idClassRoomType", "totalLessonQty", "maxStuQty", "weekQty", "scheUnitPW", "weekStatusId", "customerWeek", "lessonQtyPerWeek", "mark", "idUniZone", "idGradeBase", "isEffective", "isForPaperReading", "schoolYear", "schoolTerm", "idCourseType", "isDegree", "idScoreType", "getScoreWayId", "isProportionalCtrl", "idExamType", "examTime", "beginWeek", "userType", "modifyDate", "modifyUserId", "memo"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrCurrEduClsId = "";    //教学班Id
private mstrEduClsName = "";    //教学班名
private mstrEduClsTypeId = "";    //教学班类型Id
private mstrCourseId = "";    //课程Id
private mstrTeachingSolutionId = "";    //教学方案Id
private mstrIdXzCollege = "";    //学院流水号
private mstrIdXzMajor = "";    //专业流水号
private mstrIdEduWay = "";    //教学方式流水号
private mstrIdClassRoomType = "";    //教室类型流水号
private mintTotalLessonQty = 0;    //总课时数
private mintMaxStuQty = 0;    //最大学生数
private mintWeekQty = 0;    //总周数
private mshtScheUnitPW = 0;    //周排课次数
private mstrWeekStatusId = "";    //周状态编号(单,双,全周)
private mstrCustomerWeek = "";    //自定义上课周
private mshtLessonQtyPerWeek = 0;    //周课时数
private mdblMark = 0;    //获得学分
private mstrIdUniZone = "";    //校区流水号
private mstrIdGradeBase = "";    //年级流水号
private mbolIsEffective = false;    //是否有效
private mbolIsForPaperReading = false;    //是否参与论文阅读
private mstrSchoolYear = "";    //学年
private mstrSchoolTerm = "";    //学期
private mstrIdCourseType = "";    //课程类型流水号
private mbolIsDegree = false;    //是否学位课
private mstrIdScoreType = "";    //成绩类型流水号
private mstrGetScoreWayId = "";    //获得成绩方式Id
private mbolIsProportionalCtrl = false;    //是否比例控制
private mstrIdExamType = "";    //考试方式流水号
private mstrExamTime = "";    //考试时间
private mshtBeginWeek = 0;    //开始周
private mstrUserType = "";    //用户类型
private mstrModifyDate = "";    //修改日期
private mstrModifyUserId = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班Id(说明:;字段类型:varchar;字段长度:15;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCurrEduClsId (value: string)
{
if (value  != undefined)
{
 this.currEduClsId = value;
    this.hmProperty["currEduClsId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEduClsName (value: string)
{
if (value  != undefined)
{
 this.eduClsName = value;
    this.hmProperty["eduClsName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEduClsTypeId (value: string)
{
if (value  != undefined)
{
 this.eduClsTypeId = value;
    this.hmProperty["eduClsTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学方案Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingSolutionId (value: string)
{
if (value  != undefined)
{
 this.teachingSolutionId = value;
    this.hmProperty["teachingSolutionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdXzCollege (value: string)
{
if (value  != undefined)
{
 this.idXzCollege = value;
    this.hmProperty["idXzCollege"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 专业流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdXzMajor (value: string)
{
if (value  != undefined)
{
 this.idXzMajor = value;
    this.hmProperty["idXzMajor"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学方式流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdEduWay (value: string)
{
if (value  != undefined)
{
 this.idEduWay = value;
    this.hmProperty["idEduWay"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教室类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdClassRoomType (value: string)
{
if (value  != undefined)
{
 this.idClassRoomType = value;
    this.hmProperty["idClassRoomType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 总课时数(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTotalLessonQty (value: number)
{
if (value  != undefined)
{
 this.totalLessonQty = value;
    this.hmProperty["totalLessonQty"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 最大学生数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMaxStuQty (value: number)
{
if (value  != undefined)
{
 this.maxStuQty = value;
    this.hmProperty["maxStuQty"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 总周数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeekQty (value: number)
{
if (value  != undefined)
{
 this.weekQty = value;
    this.hmProperty["weekQty"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 周排课次数(说明:;字段类型:smallint;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScheUnitPW (value: number)
{
if (value  != undefined)
{
 this.scheUnitPW = value;
    this.hmProperty["scheUnitPW"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 周状态编号(单,双,全周)(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeekStatusId (value: string)
{
if (value  != undefined)
{
 this.weekStatusId = value;
    this.hmProperty["weekStatusId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 自定义上课周(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCustomerWeek (value: string)
{
if (value  != undefined)
{
 this.customerWeek = value;
    this.hmProperty["customerWeek"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 周课时数(说明:;字段类型:smallint;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLessonQtyPerWeek (value: number)
{
if (value  != undefined)
{
 this.lessonQtyPerWeek = value;
    this.hmProperty["lessonQtyPerWeek"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 获得学分(说明:;字段类型:decimal;字段长度:7;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMark (value: number)
{
if (value  != undefined)
{
 this.mark = value;
    this.hmProperty["mark"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 校区流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdUniZone (value: string)
{
if (value  != undefined)
{
 this.idUniZone = value;
    this.hmProperty["idUniZone"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 年级流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdGradeBase (value: string)
{
if (value  != undefined)
{
 this.idGradeBase = value;
    this.hmProperty["idGradeBase"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否有效(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsEffective (value: boolean)
{
if (value  != undefined)
{
 this.isEffective = value;
    this.hmProperty["isEffective"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否参与论文阅读(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsForPaperReading (value: boolean)
{
if (value  != undefined)
{
 this.isForPaperReading = value;
    this.hmProperty["isForPaperReading"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学年(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolYear (value: string)
{
if (value  != undefined)
{
 this.schoolYear = value;
    this.hmProperty["schoolYear"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学期(说明:;字段类型:char;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolTerm (value: string)
{
if (value  != undefined)
{
 this.schoolTerm = value;
    this.hmProperty["schoolTerm"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCourseType (value: string)
{
if (value  != undefined)
{
 this.idCourseType = value;
    this.hmProperty["idCourseType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否学位课(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDegree (value: boolean)
{
if (value  != undefined)
{
 this.isDegree = value;
    this.hmProperty["isDegree"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 成绩类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdScoreType (value: string)
{
if (value  != undefined)
{
 this.idScoreType = value;
    this.hmProperty["idScoreType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 获得成绩方式Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGetScoreWayId (value: string)
{
if (value  != undefined)
{
 this.getScoreWayId = value;
    this.hmProperty["getScoreWayId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否比例控制(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsProportionalCtrl (value: boolean)
{
if (value  != undefined)
{
 this.isProportionalCtrl = value;
    this.hmProperty["isProportionalCtrl"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 考试方式流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdExamType (value: string)
{
if (value  != undefined)
{
 this.idExamType = value;
    this.hmProperty["idExamType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 考试时间(说明:;字段类型:varchar;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExamTime (value: string)
{
if (value  != undefined)
{
 this.examTime = value;
    this.hmProperty["examTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 开始周(说明:;字段类型:smallint;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBeginWeek (value: number)
{
if (value  != undefined)
{
 this.beginWeek = value;
    this.hmProperty["beginWeek"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户类型(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserType (value: string)
{
if (value  != undefined)
{
 this.userType = value;
    this.hmProperty["userType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModifyDate (value: string)
{
if (value  != undefined)
{
 this.modifyDate = value;
    this.hmProperty["modifyDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModifyUserId (value: string)
{
if (value  != undefined)
{
 this.modifyUserId = value;
    this.hmProperty["modifyUserId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsCurrEduClsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsCurrEduClsEN.con_CurrEduClsId:
return this.currEduClsId;
case clsCurrEduClsEN.con_EduClsName:
return this.eduClsName;
case clsCurrEduClsEN.con_EduClsTypeId:
return this.eduClsTypeId;
case clsCurrEduClsEN.con_CourseId:
return this.courseId;
case clsCurrEduClsEN.con_TeachingSolutionId:
return this.teachingSolutionId;
case clsCurrEduClsEN.con_IdXzCollege:
return this.idXzCollege;
case clsCurrEduClsEN.con_IdXzMajor:
return this.idXzMajor;
case clsCurrEduClsEN.con_IdEduWay:
return this.idEduWay;
case clsCurrEduClsEN.con_IdClassRoomType:
return this.idClassRoomType;
case clsCurrEduClsEN.con_TotalLessonQty:
return this.totalLessonQty;
case clsCurrEduClsEN.con_MaxStuQty:
return this.maxStuQty;
case clsCurrEduClsEN.con_WeekQty:
return this.weekQty;
case clsCurrEduClsEN.con_ScheUnitPW:
return this.scheUnitPW;
case clsCurrEduClsEN.con_WeekStatusId:
return this.weekStatusId;
case clsCurrEduClsEN.con_CustomerWeek:
return this.customerWeek;
case clsCurrEduClsEN.con_LessonQtyPerWeek:
return this.lessonQtyPerWeek;
case clsCurrEduClsEN.con_Mark:
return this.mark;
case clsCurrEduClsEN.con_IdUniZone:
return this.idUniZone;
case clsCurrEduClsEN.con_IdGradeBase:
return this.idGradeBase;
case clsCurrEduClsEN.con_IsEffective:
return this.isEffective;
case clsCurrEduClsEN.con_IsForPaperReading:
return this.isForPaperReading;
case clsCurrEduClsEN.con_SchoolYear:
return this.schoolYear;
case clsCurrEduClsEN.con_SchoolTerm:
return this.schoolTerm;
case clsCurrEduClsEN.con_IdCourseType:
return this.idCourseType;
case clsCurrEduClsEN.con_IsDegree:
return this.isDegree;
case clsCurrEduClsEN.con_IdScoreType:
return this.idScoreType;
case clsCurrEduClsEN.con_GetScoreWayId:
return this.getScoreWayId;
case clsCurrEduClsEN.con_IsProportionalCtrl:
return this.isProportionalCtrl;
case clsCurrEduClsEN.con_IdExamType:
return this.idExamType;
case clsCurrEduClsEN.con_ExamTime:
return this.examTime;
case clsCurrEduClsEN.con_BeginWeek:
return this.beginWeek;
case clsCurrEduClsEN.con_UserType:
return this.userType;
case clsCurrEduClsEN.con_ModifyDate:
return this.modifyDate;
case clsCurrEduClsEN.con_ModifyUserId:
return this.modifyUserId;
case clsCurrEduClsEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CurrEduCls]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsCurrEduClsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsCurrEduClsEN.con_CurrEduClsId:
this.currEduClsId = strValue;
    this.hmProperty["currEduClsId"] = true;
break;
case clsCurrEduClsEN.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsCurrEduClsEN.con_EduClsTypeId:
this.eduClsTypeId = strValue;
    this.hmProperty["eduClsTypeId"] = true;
break;
case clsCurrEduClsEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsCurrEduClsEN.con_TeachingSolutionId:
this.teachingSolutionId = strValue;
    this.hmProperty["teachingSolutionId"] = true;
break;
case clsCurrEduClsEN.con_IdXzCollege:
this.idXzCollege = strValue;
    this.hmProperty["idXzCollege"] = true;
break;
case clsCurrEduClsEN.con_IdXzMajor:
this.idXzMajor = strValue;
    this.hmProperty["idXzMajor"] = true;
break;
case clsCurrEduClsEN.con_IdEduWay:
this.idEduWay = strValue;
    this.hmProperty["idEduWay"] = true;
break;
case clsCurrEduClsEN.con_IdClassRoomType:
this.idClassRoomType = strValue;
    this.hmProperty["idClassRoomType"] = true;
break;
case clsCurrEduClsEN.con_TotalLessonQty:
this.totalLessonQty = Number(strValue);
    this.hmProperty["totalLessonQty"] = true;
break;
case clsCurrEduClsEN.con_MaxStuQty:
this.maxStuQty = Number(strValue);
    this.hmProperty["maxStuQty"] = true;
break;
case clsCurrEduClsEN.con_WeekQty:
this.weekQty = Number(strValue);
    this.hmProperty["weekQty"] = true;
break;
case clsCurrEduClsEN.con_ScheUnitPW:
this.scheUnitPW = Number(strValue);
    this.hmProperty["scheUnitPW"] = true;
break;
case clsCurrEduClsEN.con_WeekStatusId:
this.weekStatusId = strValue;
    this.hmProperty["weekStatusId"] = true;
break;
case clsCurrEduClsEN.con_CustomerWeek:
this.customerWeek = strValue;
    this.hmProperty["customerWeek"] = true;
break;
case clsCurrEduClsEN.con_LessonQtyPerWeek:
this.lessonQtyPerWeek = Number(strValue);
    this.hmProperty["lessonQtyPerWeek"] = true;
break;
case clsCurrEduClsEN.con_Mark:
this.mark = Number(strValue);
    this.hmProperty["mark"] = true;
break;
case clsCurrEduClsEN.con_IdUniZone:
this.idUniZone = strValue;
    this.hmProperty["idUniZone"] = true;
break;
case clsCurrEduClsEN.con_IdGradeBase:
this.idGradeBase = strValue;
    this.hmProperty["idGradeBase"] = true;
break;
case clsCurrEduClsEN.con_IsEffective:
this.isEffective = Boolean(strValue);
    this.hmProperty["isEffective"] = true;
break;
case clsCurrEduClsEN.con_IsForPaperReading:
this.isForPaperReading = Boolean(strValue);
    this.hmProperty["isForPaperReading"] = true;
break;
case clsCurrEduClsEN.con_SchoolYear:
this.schoolYear = strValue;
    this.hmProperty["schoolYear"] = true;
break;
case clsCurrEduClsEN.con_SchoolTerm:
this.schoolTerm = strValue;
    this.hmProperty["schoolTerm"] = true;
break;
case clsCurrEduClsEN.con_IdCourseType:
this.idCourseType = strValue;
    this.hmProperty["idCourseType"] = true;
break;
case clsCurrEduClsEN.con_IsDegree:
this.isDegree = Boolean(strValue);
    this.hmProperty["isDegree"] = true;
break;
case clsCurrEduClsEN.con_IdScoreType:
this.idScoreType = strValue;
    this.hmProperty["idScoreType"] = true;
break;
case clsCurrEduClsEN.con_GetScoreWayId:
this.getScoreWayId = strValue;
    this.hmProperty["getScoreWayId"] = true;
break;
case clsCurrEduClsEN.con_IsProportionalCtrl:
this.isProportionalCtrl = Boolean(strValue);
    this.hmProperty["isProportionalCtrl"] = true;
break;
case clsCurrEduClsEN.con_IdExamType:
this.idExamType = strValue;
    this.hmProperty["idExamType"] = true;
break;
case clsCurrEduClsEN.con_ExamTime:
this.examTime = strValue;
    this.hmProperty["examTime"] = true;
break;
case clsCurrEduClsEN.con_BeginWeek:
this.beginWeek = Number(strValue);
    this.hmProperty["beginWeek"] = true;
break;
case clsCurrEduClsEN.con_UserType:
this.userType = strValue;
    this.hmProperty["userType"] = true;
break;
case clsCurrEduClsEN.con_ModifyDate:
this.modifyDate = strValue;
    this.hmProperty["modifyDate"] = true;
break;
case clsCurrEduClsEN.con_ModifyUserId:
this.modifyUserId = strValue;
    this.hmProperty["modifyUserId"] = true;
break;
case clsCurrEduClsEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CurrEduCls]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idCurrEduCls = "";    //教学班流水号
public currEduClsId = "";    //教学班Id
public eduClsName = "";    //教学班名
public eduClsTypeId = "";    //教学班类型Id
public courseId = "";    //课程Id
public teachingSolutionId = "";    //教学方案Id
public idXzCollege = "";    //学院流水号
public idXzMajor = "";    //专业流水号
public idEduWay = "";    //教学方式流水号
public idClassRoomType = "";    //教室类型流水号
public totalLessonQty = 0;    //总课时数
public maxStuQty = 0;    //最大学生数
public weekQty = 0;    //总周数
public scheUnitPW = 0;    //周排课次数
public weekStatusId = "";    //周状态编号(单,双,全周)
public customerWeek = "";    //自定义上课周
public lessonQtyPerWeek = 0;    //周课时数
public mark = 0;    //获得学分
public idUniZone = "";    //校区流水号
public idGradeBase = "";    //年级流水号
public isEffective = false;    //是否有效
public isForPaperReading = false;    //是否参与论文阅读
public schoolYear = "";    //学年
public schoolTerm = "";    //学期
public idCourseType = "";    //课程类型流水号
public isDegree = false;    //是否学位课
public idScoreType = "";    //成绩类型流水号
public getScoreWayId = "";    //获得成绩方式Id
public isProportionalCtrl = false;    //是否比例控制
public idExamType = "";    //考试方式流水号
public examTime = "";    //考试时间
public beginWeek = 0;    //开始周
public userType = "";    //用户类型
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CurrEduClsId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CurrEduClsId(): string {return "currEduClsId";}    //教学班Id

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"EduClsTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsTypeId(): string {return "eduClsTypeId";}    //教学班类型Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"TeachingSolutionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingSolutionId(): string {return "teachingSolutionId";}    //教学方案Id

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"IdEduWay"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdEduWay(): string {return "idEduWay";}    //教学方式流水号

 /**
 * 常量:"IdClassRoomType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdClassRoomType(): string {return "idClassRoomType";}    //教室类型流水号

 /**
 * 常量:"TotalLessonQty"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TotalLessonQty(): string {return "totalLessonQty";}    //总课时数

 /**
 * 常量:"MaxStuQty"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MaxStuQty(): string {return "maxStuQty";}    //最大学生数

 /**
 * 常量:"WeekQty"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WeekQty(): string {return "weekQty";}    //总周数

 /**
 * 常量:"ScheUnitPW"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ScheUnitPW(): string {return "scheUnitPW";}    //周排课次数

 /**
 * 常量:"WeekStatusId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WeekStatusId(): string {return "weekStatusId";}    //周状态编号(单,双,全周)

 /**
 * 常量:"CustomerWeek"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CustomerWeek(): string {return "customerWeek";}    //自定义上课周

 /**
 * 常量:"LessonQtyPerWeek"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LessonQtyPerWeek(): string {return "lessonQtyPerWeek";}    //周课时数

 /**
 * 常量:"Mark"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Mark(): string {return "mark";}    //获得学分

 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //年级流水号

 /**
 * 常量:"IsEffective"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsEffective(): string {return "isEffective";}    //是否有效

 /**
 * 常量:"IsForPaperReading"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsForPaperReading(): string {return "isForPaperReading";}    //是否参与论文阅读

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"IdCourseType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCourseType(): string {return "idCourseType";}    //课程类型流水号

 /**
 * 常量:"IsDegree"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDegree(): string {return "isDegree";}    //是否学位课

 /**
 * 常量:"IdScoreType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdScoreType(): string {return "idScoreType";}    //成绩类型流水号

 /**
 * 常量:"GetScoreWayId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GetScoreWayId(): string {return "getScoreWayId";}    //获得成绩方式Id

 /**
 * 常量:"IsProportionalCtrl"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsProportionalCtrl(): string {return "isProportionalCtrl";}    //是否比例控制

 /**
 * 常量:"IdExamType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdExamType(): string {return "idExamType";}    //考试方式流水号

 /**
 * 常量:"ExamTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExamTime(): string {return "examTime";}    //考试时间

 /**
 * 常量:"BeginWeek"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BeginWeek(): string {return "beginWeek";}    //开始周

 /**
 * 常量:"UserType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
}