
 /**
 * 类名:clsvCurrEduClsTeacherEN
 * 表名:vCurrEduClsTeacher(01120128)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 17:50:54
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
 * v当前教学班教师(vCurrEduClsTeacher)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvCurrEduClsTeacherEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vCurrEduClsTeacher"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsTeacher"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 60;
public static AttributeName = ["idEduClsTeacher", "idCurrEduCls", "currEduClsId", "eduClsName", "eduClsTypeId", "eduClsTypeName", "courseId", "courseCode", "courseName", "exampleImgPath", "teachingSolutionId", "teachingSolutionName", "idXzCollege", "collegeId", "idEduWay", "totalLessonQty", "maxStuQty", "weekQty", "scheUnitPW", "weekStatusId", "customerWeek", "lessonQtyPerWeek", "idUniZone", "idGradeBase", "gradeBaseId", "gradeBaseName", "isEffective", "idCourseType", "courseTypeId", "courseTypeName", "isDegree", "idScoreType", "isProportionalCtrl", "idExamType", "beginWeek", "currStuNumValid", "currStuNum", "idTeacher", "teacherId", "teacherName", "idProfGrade", "profenssionalGradeName", "degreeName", "birthday", "isGpUser", "collegeName", "idPk2EduClsTeacherType", "eduClsTeacherTypeId", "eduClsTeacherTypeDesc", "schoolTerm", "schoolYear", "openBeginDate", "openEndDate", "orderNum", "updDate", "updUser", "memo", "collegeName4EduCls", "collegeName4Teacher", "userType"];
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
case clsvCurrEduClsTeacherEN.con_IdEduClsTeacher:
return this.idEduClsTeacher;
case clsvCurrEduClsTeacherEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduClsTeacherEN.con_CurrEduClsId:
return this.currEduClsId;
case clsvCurrEduClsTeacherEN.con_EduClsName:
return this.eduClsName;
case clsvCurrEduClsTeacherEN.con_EduClsTypeId:
return this.eduClsTypeId;
case clsvCurrEduClsTeacherEN.con_EduClsTypeName:
return this.eduClsTypeName;
case clsvCurrEduClsTeacherEN.con_CourseId:
return this.courseId;
case clsvCurrEduClsTeacherEN.con_CourseCode:
return this.courseCode;
case clsvCurrEduClsTeacherEN.con_CourseName:
return this.courseName;
case clsvCurrEduClsTeacherEN.con_ExampleImgPath:
return this.exampleImgPath;
case clsvCurrEduClsTeacherEN.con_TeachingSolutionId:
return this.teachingSolutionId;
case clsvCurrEduClsTeacherEN.con_TeachingSolutionName:
return this.teachingSolutionName;
case clsvCurrEduClsTeacherEN.con_IdXzCollege:
return this.idXzCollege;
case clsvCurrEduClsTeacherEN.con_CollegeId:
return this.collegeId;
case clsvCurrEduClsTeacherEN.con_IdEduWay:
return this.idEduWay;
case clsvCurrEduClsTeacherEN.con_TotalLessonQty:
return this.totalLessonQty;
case clsvCurrEduClsTeacherEN.con_MaxStuQty:
return this.maxStuQty;
case clsvCurrEduClsTeacherEN.con_WeekQty:
return this.weekQty;
case clsvCurrEduClsTeacherEN.con_ScheUnitPW:
return this.scheUnitPW;
case clsvCurrEduClsTeacherEN.con_WeekStatusId:
return this.weekStatusId;
case clsvCurrEduClsTeacherEN.con_CustomerWeek:
return this.customerWeek;
case clsvCurrEduClsTeacherEN.con_LessonQtyPerWeek:
return this.lessonQtyPerWeek;
case clsvCurrEduClsTeacherEN.con_IdUniZone:
return this.idUniZone;
case clsvCurrEduClsTeacherEN.con_IdGradeBase:
return this.idGradeBase;
case clsvCurrEduClsTeacherEN.con_GradeBaseId:
return this.gradeBaseId;
case clsvCurrEduClsTeacherEN.con_GradeBaseName:
return this.gradeBaseName;
case clsvCurrEduClsTeacherEN.con_IsEffective:
return this.isEffective;
case clsvCurrEduClsTeacherEN.con_IdCourseType:
return this.idCourseType;
case clsvCurrEduClsTeacherEN.con_CourseTypeId:
return this.courseTypeId;
case clsvCurrEduClsTeacherEN.con_CourseTypeName:
return this.courseTypeName;
case clsvCurrEduClsTeacherEN.con_IsDegree:
return this.isDegree;
case clsvCurrEduClsTeacherEN.con_IdScoreType:
return this.idScoreType;
case clsvCurrEduClsTeacherEN.con_IsProportionalCtrl:
return this.isProportionalCtrl;
case clsvCurrEduClsTeacherEN.con_IdExamType:
return this.idExamType;
case clsvCurrEduClsTeacherEN.con_BeginWeek:
return this.beginWeek;
case clsvCurrEduClsTeacherEN.con_CurrStuNumValid:
return this.currStuNumValid;
case clsvCurrEduClsTeacherEN.con_CurrStuNum:
return this.currStuNum;
case clsvCurrEduClsTeacherEN.con_IdTeacher:
return this.idTeacher;
case clsvCurrEduClsTeacherEN.con_TeacherId:
return this.teacherId;
case clsvCurrEduClsTeacherEN.con_TeacherName:
return this.teacherName;
case clsvCurrEduClsTeacherEN.con_IdProfGrade:
return this.idProfGrade;
case clsvCurrEduClsTeacherEN.con_ProfenssionalGradeName:
return this.profenssionalGradeName;
case clsvCurrEduClsTeacherEN.con_DegreeName:
return this.degreeName;
case clsvCurrEduClsTeacherEN.con_Birthday:
return this.birthday;
case clsvCurrEduClsTeacherEN.con_IsGpUser:
return this.isGpUser;
case clsvCurrEduClsTeacherEN.con_CollegeName:
return this.collegeName;
case clsvCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
return this.idPk2EduClsTeacherType;
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeId:
return this.eduClsTeacherTypeId;
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeDesc:
return this.eduClsTeacherTypeDesc;
case clsvCurrEduClsTeacherEN.con_SchoolTerm:
return this.schoolTerm;
case clsvCurrEduClsTeacherEN.con_SchoolYear:
return this.schoolYear;
case clsvCurrEduClsTeacherEN.con_OpenBeginDate:
return this.openBeginDate;
case clsvCurrEduClsTeacherEN.con_OpenEndDate:
return this.openEndDate;
case clsvCurrEduClsTeacherEN.con_OrderNum:
return this.orderNum;
case clsvCurrEduClsTeacherEN.con_UpdDate:
return this.updDate;
case clsvCurrEduClsTeacherEN.con_UpdUser:
return this.updUser;
case clsvCurrEduClsTeacherEN.con_Memo:
return this.memo;
case clsvCurrEduClsTeacherEN.con_CollegeName4EduCls:
return this.collegeName4EduCls;
case clsvCurrEduClsTeacherEN.con_CollegeName4Teacher:
return this.collegeName4Teacher;
case clsvCurrEduClsTeacherEN.con_UserType:
return this.userType;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduClsTeacher]中不存在!`;
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
case clsvCurrEduClsTeacherEN.con_IdEduClsTeacher:
this.idEduClsTeacher = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CurrEduClsId:
this.currEduClsId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_EduClsName:
this.eduClsName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_EduClsTypeId:
this.eduClsTypeId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_EduClsTypeName:
this.eduClsTypeName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CourseId:
this.courseId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CourseCode:
this.courseCode = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CourseName:
this.courseName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_ExampleImgPath:
this.exampleImgPath = strValue;
break;
case clsvCurrEduClsTeacherEN.con_TeachingSolutionId:
this.teachingSolutionId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_TeachingSolutionName:
this.teachingSolutionName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CollegeId:
this.collegeId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_IdEduWay:
this.idEduWay = strValue;
break;
case clsvCurrEduClsTeacherEN.con_TotalLessonQty:
this.totalLessonQty = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_MaxStuQty:
this.maxStuQty = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_WeekQty:
this.weekQty = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_ScheUnitPW:
this.scheUnitPW = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_WeekStatusId:
this.weekStatusId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CustomerWeek:
this.customerWeek = strValue;
break;
case clsvCurrEduClsTeacherEN.con_LessonQtyPerWeek:
this.lessonQtyPerWeek = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_IdUniZone:
this.idUniZone = strValue;
break;
case clsvCurrEduClsTeacherEN.con_IdGradeBase:
this.idGradeBase = strValue;
break;
case clsvCurrEduClsTeacherEN.con_GradeBaseId:
this.gradeBaseId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_GradeBaseName:
this.gradeBaseName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_IsEffective:
this.isEffective = Boolean(strValue);
break;
case clsvCurrEduClsTeacherEN.con_IdCourseType:
this.idCourseType = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CourseTypeId:
this.courseTypeId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CourseTypeName:
this.courseTypeName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_IsDegree:
this.isDegree = Boolean(strValue);
break;
case clsvCurrEduClsTeacherEN.con_IdScoreType:
this.idScoreType = strValue;
break;
case clsvCurrEduClsTeacherEN.con_IsProportionalCtrl:
this.isProportionalCtrl = Boolean(strValue);
break;
case clsvCurrEduClsTeacherEN.con_IdExamType:
this.idExamType = strValue;
break;
case clsvCurrEduClsTeacherEN.con_BeginWeek:
this.beginWeek = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_CurrStuNumValid:
this.currStuNumValid = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_CurrStuNum:
this.currStuNum = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_IdTeacher:
this.idTeacher = strValue;
break;
case clsvCurrEduClsTeacherEN.con_TeacherId:
this.teacherId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_TeacherName:
this.teacherName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_IdProfGrade:
this.idProfGrade = strValue;
break;
case clsvCurrEduClsTeacherEN.con_ProfenssionalGradeName:
this.profenssionalGradeName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_DegreeName:
this.degreeName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_Birthday:
this.birthday = strValue;
break;
case clsvCurrEduClsTeacherEN.con_IsGpUser:
this.isGpUser = Boolean(strValue);
break;
case clsvCurrEduClsTeacherEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
this.idPk2EduClsTeacherType = strValue;
break;
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeId:
this.eduClsTeacherTypeId = strValue;
break;
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeDesc:
this.eduClsTeacherTypeDesc = strValue;
break;
case clsvCurrEduClsTeacherEN.con_SchoolTerm:
this.schoolTerm = strValue;
break;
case clsvCurrEduClsTeacherEN.con_SchoolYear:
this.schoolYear = strValue;
break;
case clsvCurrEduClsTeacherEN.con_OpenBeginDate:
this.openBeginDate = strValue;
break;
case clsvCurrEduClsTeacherEN.con_OpenEndDate:
this.openEndDate = strValue;
break;
case clsvCurrEduClsTeacherEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvCurrEduClsTeacherEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvCurrEduClsTeacherEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvCurrEduClsTeacherEN.con_Memo:
this.memo = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CollegeName4EduCls:
this.collegeName4EduCls = strValue;
break;
case clsvCurrEduClsTeacherEN.con_CollegeName4Teacher:
this.collegeName4Teacher = strValue;
break;
case clsvCurrEduClsTeacherEN.con_UserType:
this.userType = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduClsTeacher]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idEduClsTeacher = 0;    //教学班老师流水号
public idCurrEduCls = "";    //教学班流水号
public currEduClsId = "";    //教学班Id
public eduClsName = "";    //教学班名
public eduClsTypeId = "";    //教学班类型Id
public eduClsTypeName = "";    //教学班类型名称
public courseId = "";    //课程Id
public courseCode = "";    //课程代码
public courseName = "";    //课程名称
public exampleImgPath = "";    //示例图路径
public teachingSolutionId = "";    //教学方案Id
public teachingSolutionName = "";    //教学方案名称
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public idEduWay = "";    //教学方式流水号
public totalLessonQty = 0;    //总课时数
public maxStuQty = 0;    //最大学生数
public weekQty = 0;    //总周数
public scheUnitPW = 0;    //周排课次数
public weekStatusId = "";    //周状态编号(单,双,全周)
public customerWeek = "";    //自定义上课周
public lessonQtyPerWeek = 0;    //周课时数
public idUniZone = "";    //校区流水号
public idGradeBase = "";    //年级流水号
public gradeBaseId = "";    //年级代号
public gradeBaseName = "";    //年级名称
public isEffective = false;    //是否有效
public idCourseType = "";    //课程类型流水号
public courseTypeId = "";    //课程类型ID
public courseTypeName = "";    //课程类型名称
public isDegree = false;    //是否学位课
public idScoreType = "";    //成绩类型流水号
public isProportionalCtrl = false;    //是否比例控制
public idExamType = "";    //考试方式流水号
public beginWeek = 0;    //开始周
public currStuNumValid = 0;    //CurrStuNum_Valid
public currStuNum = 0;    //当前学生数
public idTeacher = "";    //教师流水号
public teacherId = "";    //教师工号
public teacherName = "";    //教师姓名
public idProfGrade = "";    //专业职称流水号
public profenssionalGradeName = "";    //专业职称
public degreeName = "";    //学位名称
public birthday = "";    //出生日期
public isGpUser = false;    //是否Gp用户
public collegeName = "";    //学院名称
public idPk2EduClsTeacherType = "";    //教学班老师角色(主讲,辅导)流水号
public eduClsTeacherTypeId = "";    //教学班教学类型ID
public eduClsTeacherTypeDesc = "";    //教学班教师类型名
public schoolTerm = "";    //学期
public schoolYear = "";    //学年
public openBeginDate = "";    //开放开始日期
public openEndDate = "";    //开放结束日期
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public collegeName4EduCls = "";    //学院名_教学班
public collegeName4Teacher = "";    //学院名_教师
public userType = "";    //用户类型


 /**
 * 常量:"IdEduClsTeacher"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdEduClsTeacher(): string {return "idEduClsTeacher";}    //教学班老师流水号

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
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

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
 * 常量:"IdEduWay"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdEduWay(): string {return "idEduWay";}    //教学方式流水号

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
 * 常量:"IsEffective"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsEffective(): string {return "isEffective";}    //是否有效

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
 * 常量:"IdProfGrade"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdProfGrade(): string {return "idProfGrade";}    //专业职称流水号

 /**
 * 常量:"ProfenssionalGradeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ProfenssionalGradeName(): string {return "profenssionalGradeName";}    //专业职称

 /**
 * 常量:"DegreeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DegreeName(): string {return "degreeName";}    //学位名称

 /**
 * 常量:"Birthday"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Birthday(): string {return "birthday";}    //出生日期

 /**
 * 常量:"IsGpUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsGpUser(): string {return "isGpUser";}    //是否Gp用户

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"IdPk2EduClsTeacherType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdPk2EduClsTeacherType(): string {return "idPk2EduClsTeacherType";}    //教学班老师角色(主讲,辅导)流水号

 /**
 * 常量:"EduClsTeacherTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsTeacherTypeId(): string {return "eduClsTeacherTypeId";}    //教学班教学类型ID

 /**
 * 常量:"EduClsTeacherTypeDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsTeacherTypeDesc(): string {return "eduClsTeacherTypeDesc";}    //教学班教师类型名

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"OpenBeginDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OpenBeginDate(): string {return "openBeginDate";}    //开放开始日期

 /**
 * 常量:"OpenEndDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OpenEndDate(): string {return "openEndDate";}    //开放结束日期

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"CollegeName4EduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName4EduCls(): string {return "collegeName4EduCls";}    //学院名_教学班

 /**
 * 常量:"CollegeName4Teacher"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName4Teacher(): string {return "collegeName4Teacher";}    //学院名_教师

 /**
 * 常量:"UserType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型

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