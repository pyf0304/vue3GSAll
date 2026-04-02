
 /**
 * 类名:clsvCurrEduClsEN
 * 表名:vCurrEduCls(01120126)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 17:00:29
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
 * v当前教学班(vCurrEduCls)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvCurrEduClsEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vCurrEduCls"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 57;
public static AttributeName = ["idCurrEduCls", "currEduClsId", "eduClsName", "eduClsTypeId", "eduClsTypeName", "courseId", "courseCode", "courseDescription", "courseName", "viewCount", "exampleImgPath", "teachingSolutionId", "teachingSolutionName", "idTeacher", "teacherId", "teacherName", "idXzCollege", "collegeId", "collegeName", "clgEnglishName", "phoneNumber", "idXzMajor", "majorName", "idEduWay", "idClassRoomType", "totalLessonQty", "maxStuQty", "weekQty", "scheUnitPW", "weekStatusId", "customerWeek", "lessonQtyPerWeek", "mark", "idUniZone", "idGradeBase", "gradeBaseId", "gradeBaseName", "gradeBaseNameA", "isEffective", "isForPaperReading", "schoolYear", "schoolTerm", "idCourseType", "courseTypeId", "courseTypeName", "isDegree", "idScoreType", "getScoreWayId", "isProportionalCtrl", "idExamType", "beginWeek", "userType", "modifyDate", "modifyUserId", "memo", "currStuNumValid", "currStuNum"];
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
case clsvCurrEduClsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduClsEN.con_CurrEduClsId:
return this.currEduClsId;
case clsvCurrEduClsEN.con_EduClsName:
return this.eduClsName;
case clsvCurrEduClsEN.con_EduClsTypeId:
return this.eduClsTypeId;
case clsvCurrEduClsEN.con_EduClsTypeName:
return this.eduClsTypeName;
case clsvCurrEduClsEN.con_CourseId:
return this.courseId;
case clsvCurrEduClsEN.con_CourseCode:
return this.courseCode;
case clsvCurrEduClsEN.con_CourseDescription:
return this.courseDescription;
case clsvCurrEduClsEN.con_CourseName:
return this.courseName;
case clsvCurrEduClsEN.con_ViewCount:
return this.viewCount;
case clsvCurrEduClsEN.con_ExampleImgPath:
return this.exampleImgPath;
case clsvCurrEduClsEN.con_TeachingSolutionId:
return this.teachingSolutionId;
case clsvCurrEduClsEN.con_TeachingSolutionName:
return this.teachingSolutionName;
case clsvCurrEduClsEN.con_IdTeacher:
return this.idTeacher;
case clsvCurrEduClsEN.con_TeacherId:
return this.teacherId;
case clsvCurrEduClsEN.con_TeacherName:
return this.teacherName;
case clsvCurrEduClsEN.con_IdXzCollege:
return this.idXzCollege;
case clsvCurrEduClsEN.con_CollegeId:
return this.collegeId;
case clsvCurrEduClsEN.con_CollegeName:
return this.collegeName;
case clsvCurrEduClsEN.con_ClgEnglishName:
return this.clgEnglishName;
case clsvCurrEduClsEN.con_PhoneNumber:
return this.phoneNumber;
case clsvCurrEduClsEN.con_IdXzMajor:
return this.idXzMajor;
case clsvCurrEduClsEN.con_MajorName:
return this.majorName;
case clsvCurrEduClsEN.con_IdEduWay:
return this.idEduWay;
case clsvCurrEduClsEN.con_IdClassRoomType:
return this.idClassRoomType;
case clsvCurrEduClsEN.con_TotalLessonQty:
return this.totalLessonQty;
case clsvCurrEduClsEN.con_MaxStuQty:
return this.maxStuQty;
case clsvCurrEduClsEN.con_WeekQty:
return this.weekQty;
case clsvCurrEduClsEN.con_ScheUnitPW:
return this.scheUnitPW;
case clsvCurrEduClsEN.con_WeekStatusId:
return this.weekStatusId;
case clsvCurrEduClsEN.con_CustomerWeek:
return this.customerWeek;
case clsvCurrEduClsEN.con_LessonQtyPerWeek:
return this.lessonQtyPerWeek;
case clsvCurrEduClsEN.con_Mark:
return this.mark;
case clsvCurrEduClsEN.con_IdUniZone:
return this.idUniZone;
case clsvCurrEduClsEN.con_IdGradeBase:
return this.idGradeBase;
case clsvCurrEduClsEN.con_GradeBaseId:
return this.gradeBaseId;
case clsvCurrEduClsEN.con_GradeBaseName:
return this.gradeBaseName;
case clsvCurrEduClsEN.con_GradeBaseNameA:
return this.gradeBaseNameA;
case clsvCurrEduClsEN.con_IsEffective:
return this.isEffective;
case clsvCurrEduClsEN.con_IsForPaperReading:
return this.isForPaperReading;
case clsvCurrEduClsEN.con_SchoolYear:
return this.schoolYear;
case clsvCurrEduClsEN.con_SchoolTerm:
return this.schoolTerm;
case clsvCurrEduClsEN.con_IdCourseType:
return this.idCourseType;
case clsvCurrEduClsEN.con_CourseTypeId:
return this.courseTypeId;
case clsvCurrEduClsEN.con_CourseTypeName:
return this.courseTypeName;
case clsvCurrEduClsEN.con_IsDegree:
return this.isDegree;
case clsvCurrEduClsEN.con_IdScoreType:
return this.idScoreType;
case clsvCurrEduClsEN.con_GetScoreWayId:
return this.getScoreWayId;
case clsvCurrEduClsEN.con_IsProportionalCtrl:
return this.isProportionalCtrl;
case clsvCurrEduClsEN.con_IdExamType:
return this.idExamType;
case clsvCurrEduClsEN.con_BeginWeek:
return this.beginWeek;
case clsvCurrEduClsEN.con_UserType:
return this.userType;
case clsvCurrEduClsEN.con_ModifyDate:
return this.modifyDate;
case clsvCurrEduClsEN.con_ModifyUserId:
return this.modifyUserId;
case clsvCurrEduClsEN.con_Memo:
return this.memo;
case clsvCurrEduClsEN.con_CurrStuNumValid:
return this.currStuNumValid;
case clsvCurrEduClsEN.con_CurrStuNum:
return this.currStuNum;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduCls]中不存在!`;
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
case clsvCurrEduClsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvCurrEduClsEN.con_CurrEduClsId:
this.currEduClsId = strValue;
break;
case clsvCurrEduClsEN.con_EduClsName:
this.eduClsName = strValue;
break;
case clsvCurrEduClsEN.con_EduClsTypeId:
this.eduClsTypeId = strValue;
break;
case clsvCurrEduClsEN.con_EduClsTypeName:
this.eduClsTypeName = strValue;
break;
case clsvCurrEduClsEN.con_CourseId:
this.courseId = strValue;
break;
case clsvCurrEduClsEN.con_CourseCode:
this.courseCode = strValue;
break;
case clsvCurrEduClsEN.con_CourseDescription:
this.courseDescription = strValue;
break;
case clsvCurrEduClsEN.con_CourseName:
this.courseName = strValue;
break;
case clsvCurrEduClsEN.con_ViewCount:
this.viewCount = Number(strValue);
break;
case clsvCurrEduClsEN.con_ExampleImgPath:
this.exampleImgPath = strValue;
break;
case clsvCurrEduClsEN.con_TeachingSolutionId:
this.teachingSolutionId = strValue;
break;
case clsvCurrEduClsEN.con_TeachingSolutionName:
this.teachingSolutionName = strValue;
break;
case clsvCurrEduClsEN.con_IdTeacher:
this.idTeacher = strValue;
break;
case clsvCurrEduClsEN.con_TeacherId:
this.teacherId = strValue;
break;
case clsvCurrEduClsEN.con_TeacherName:
this.teacherName = strValue;
break;
case clsvCurrEduClsEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvCurrEduClsEN.con_CollegeId:
this.collegeId = strValue;
break;
case clsvCurrEduClsEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvCurrEduClsEN.con_ClgEnglishName:
this.clgEnglishName = strValue;
break;
case clsvCurrEduClsEN.con_PhoneNumber:
this.phoneNumber = strValue;
break;
case clsvCurrEduClsEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvCurrEduClsEN.con_MajorName:
this.majorName = strValue;
break;
case clsvCurrEduClsEN.con_IdEduWay:
this.idEduWay = strValue;
break;
case clsvCurrEduClsEN.con_IdClassRoomType:
this.idClassRoomType = strValue;
break;
case clsvCurrEduClsEN.con_TotalLessonQty:
this.totalLessonQty = Number(strValue);
break;
case clsvCurrEduClsEN.con_MaxStuQty:
this.maxStuQty = Number(strValue);
break;
case clsvCurrEduClsEN.con_WeekQty:
this.weekQty = Number(strValue);
break;
case clsvCurrEduClsEN.con_ScheUnitPW:
this.scheUnitPW = Number(strValue);
break;
case clsvCurrEduClsEN.con_WeekStatusId:
this.weekStatusId = strValue;
break;
case clsvCurrEduClsEN.con_CustomerWeek:
this.customerWeek = strValue;
break;
case clsvCurrEduClsEN.con_LessonQtyPerWeek:
this.lessonQtyPerWeek = Number(strValue);
break;
case clsvCurrEduClsEN.con_Mark:
this.mark = Number(strValue);
break;
case clsvCurrEduClsEN.con_IdUniZone:
this.idUniZone = strValue;
break;
case clsvCurrEduClsEN.con_IdGradeBase:
this.idGradeBase = strValue;
break;
case clsvCurrEduClsEN.con_GradeBaseId:
this.gradeBaseId = strValue;
break;
case clsvCurrEduClsEN.con_GradeBaseName:
this.gradeBaseName = strValue;
break;
case clsvCurrEduClsEN.con_GradeBaseNameA:
this.gradeBaseNameA = strValue;
break;
case clsvCurrEduClsEN.con_IsEffective:
this.isEffective = Boolean(strValue);
break;
case clsvCurrEduClsEN.con_IsForPaperReading:
this.isForPaperReading = Boolean(strValue);
break;
case clsvCurrEduClsEN.con_SchoolYear:
this.schoolYear = strValue;
break;
case clsvCurrEduClsEN.con_SchoolTerm:
this.schoolTerm = strValue;
break;
case clsvCurrEduClsEN.con_IdCourseType:
this.idCourseType = strValue;
break;
case clsvCurrEduClsEN.con_CourseTypeId:
this.courseTypeId = strValue;
break;
case clsvCurrEduClsEN.con_CourseTypeName:
this.courseTypeName = strValue;
break;
case clsvCurrEduClsEN.con_IsDegree:
this.isDegree = Boolean(strValue);
break;
case clsvCurrEduClsEN.con_IdScoreType:
this.idScoreType = strValue;
break;
case clsvCurrEduClsEN.con_GetScoreWayId:
this.getScoreWayId = strValue;
break;
case clsvCurrEduClsEN.con_IsProportionalCtrl:
this.isProportionalCtrl = Boolean(strValue);
break;
case clsvCurrEduClsEN.con_IdExamType:
this.idExamType = strValue;
break;
case clsvCurrEduClsEN.con_BeginWeek:
this.beginWeek = Number(strValue);
break;
case clsvCurrEduClsEN.con_UserType:
this.userType = strValue;
break;
case clsvCurrEduClsEN.con_ModifyDate:
this.modifyDate = strValue;
break;
case clsvCurrEduClsEN.con_ModifyUserId:
this.modifyUserId = strValue;
break;
case clsvCurrEduClsEN.con_Memo:
this.memo = strValue;
break;
case clsvCurrEduClsEN.con_CurrStuNumValid:
this.currStuNumValid = Number(strValue);
break;
case clsvCurrEduClsEN.con_CurrStuNum:
this.currStuNum = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduCls]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public eduClsTypeName = "";    //教学班类型名称
public courseId = "";    //课程Id
public courseCode = "";    //课程代码
public courseDescription = "";    //课程描述
public courseName = "";    //课程名称
public viewCount = 0;    //浏览量
public exampleImgPath = "";    //示例图路径
public teachingSolutionId = "";    //教学方案Id
public teachingSolutionName = "";    //教学方案名称
public idTeacher = "";    //教师流水号
public teacherId = "";    //教师工号
public teacherName = "";    //教师姓名
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public clgEnglishName = "";    //ClgEnglishName
public phoneNumber = "";    //电话
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
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
public gradeBaseId = "";    //年级代号
public gradeBaseName = "";    //年级名称
public gradeBaseNameA = "";    //年级名称缩写
public isEffective = false;    //是否有效
public isForPaperReading = false;    //是否参与论文阅读
public schoolYear = "";    //学年
public schoolTerm = "";    //学期
public idCourseType = "";    //课程类型流水号
public courseTypeId = "";    //课程类型ID
public courseTypeName = "";    //课程类型名称
public isDegree = false;    //是否学位课
public idScoreType = "";    //成绩类型流水号
public getScoreWayId = "";    //获得成绩方式Id
public isProportionalCtrl = false;    //是否比例控制
public idExamType = "";    //考试方式流水号
public beginWeek = 0;    //开始周
public userType = "";    //用户类型
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public memo = "";    //备注
public currStuNumValid = 0;    //CurrStuNum_Valid
public currStuNum = 0;    //当前学生数


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
 * 常量:"EduClsTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsTypeName(): string {return "eduClsTypeName";}    //教学班类型名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CourseCode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseCode(): string {return "courseCode";}    //课程代码

 /**
 * 常量:"CourseDescription"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseDescription(): string {return "courseDescription";}    //课程描述

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"ViewCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewCount(): string {return "viewCount";}    //浏览量

 /**
 * 常量:"ExampleImgPath"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExampleImgPath(): string {return "exampleImgPath";}    //示例图路径

 /**
 * 常量:"TeachingSolutionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingSolutionId(): string {return "teachingSolutionId";}    //教学方案Id

 /**
 * 常量:"TeachingSolutionName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingSolutionName(): string {return "teachingSolutionName";}    //教学方案名称

 /**
 * 常量:"IdTeacher"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeacher(): string {return "idTeacher";}    //教师流水号

 /**
 * 常量:"TeacherId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeacherId(): string {return "teacherId";}    //教师工号

 /**
 * 常量:"TeacherName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeacherName(): string {return "teacherName";}    //教师姓名

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"CollegeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeId(): string {return "collegeId";}    //学院ID

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"ClgEnglishName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClgEnglishName(): string {return "clgEnglishName";}    //ClgEnglishName

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

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
 * 常量:"GradeBaseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GradeBaseId(): string {return "gradeBaseId";}    //年级代号

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"GradeBaseNameA"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GradeBaseNameA(): string {return "gradeBaseNameA";}    //年级名称缩写

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
 * 常量:"CourseTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseTypeId(): string {return "courseTypeId";}    //课程类型ID

 /**
 * 常量:"CourseTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseTypeName(): string {return "courseTypeName";}    //课程类型名称

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
 * 常量:"CurrStuNumValid"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CurrStuNumValid(): string {return "currStuNumValid";}    //CurrStuNum_Valid

 /**
 * 常量:"CurrStuNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CurrStuNum(): string {return "currStuNum";}    //当前学生数

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