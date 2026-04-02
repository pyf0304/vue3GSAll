
 /**
 * 类名:clsCurrEduCls
 * 表名:CurrEduCls(01120123)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 03:47:24
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 当前教学班(CurrEduCls)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsCurrEduCls 
{
public static _CurrTabName= "CurrEduCls"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 35;
public static AttributeName = ["idCurrEduCls", "currEduClsId", "eduClsName", "eduClsTypeId", "courseId", "teachingSolutionId", "idXzCollege", "idXzMajor", "idEduWay", "idClassRoomType", "totalLessonQty", "maxStuQty", "weekQty", "scheUnitPW", "weekStatusId", "customerWeek", "lessonQtyPerWeek", "mark", "idUniZone", "idGradeBase", "isEffective", "isForPaperReading", "schoolYear", "schoolTerm", "idCourseType", "isDegree", "idScoreType", "getScoreWayId", "isProportionalCtrl", "idExamType", "examTime", "beginWeek", "modifyDate", "modifyUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public memo = "";    //备注

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsCurrEduCls.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsCurrEduCls.con_CurrEduClsId:
return this.currEduClsId;
case clsCurrEduCls.con_EduClsName:
return this.eduClsName;
case clsCurrEduCls.con_EduClsTypeId:
return this.eduClsTypeId;
case clsCurrEduCls.con_CourseId:
return this.courseId;
case clsCurrEduCls.con_TeachingSolutionId:
return this.teachingSolutionId;
case clsCurrEduCls.con_IdXzCollege:
return this.idXzCollege;
case clsCurrEduCls.con_IdXzMajor:
return this.idXzMajor;
case clsCurrEduCls.con_IdEduWay:
return this.idEduWay;
case clsCurrEduCls.con_IdClassRoomType:
return this.idClassRoomType;
case clsCurrEduCls.con_TotalLessonQty:
return this.totalLessonQty;
case clsCurrEduCls.con_MaxStuQty:
return this.maxStuQty;
case clsCurrEduCls.con_WeekQty:
return this.weekQty;
case clsCurrEduCls.con_ScheUnitPW:
return this.scheUnitPW;
case clsCurrEduCls.con_WeekStatusId:
return this.weekStatusId;
case clsCurrEduCls.con_CustomerWeek:
return this.customerWeek;
case clsCurrEduCls.con_LessonQtyPerWeek:
return this.lessonQtyPerWeek;
case clsCurrEduCls.con_Mark:
return this.mark;
case clsCurrEduCls.con_IdUniZone:
return this.idUniZone;
case clsCurrEduCls.con_IdGradeBase:
return this.idGradeBase;
case clsCurrEduCls.con_IsEffective:
return this.isEffective;
case clsCurrEduCls.con_IsForPaperReading:
return this.isForPaperReading;
case clsCurrEduCls.con_SchoolYear:
return this.schoolYear;
case clsCurrEduCls.con_SchoolTerm:
return this.schoolTerm;
case clsCurrEduCls.con_IdCourseType:
return this.idCourseType;
case clsCurrEduCls.con_IsDegree:
return this.isDegree;
case clsCurrEduCls.con_IdScoreType:
return this.idScoreType;
case clsCurrEduCls.con_GetScoreWayId:
return this.getScoreWayId;
case clsCurrEduCls.con_IsProportionalCtrl:
return this.isProportionalCtrl;
case clsCurrEduCls.con_IdExamType:
return this.idExamType;
case clsCurrEduCls.con_ExamTime:
return this.examTime;
case clsCurrEduCls.con_BeginWeek:
return this.beginWeek;
case clsCurrEduCls.con_ModifyDate:
return this.modifyDate;
case clsCurrEduCls.con_ModifyUserId:
return this.modifyUserId;
case clsCurrEduCls.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CurrEduCls]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CurrEduClsId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrEduClsId(): string {return "currEduClsId";}    //教学班Id

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"EduClsTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTypeId(): string {return "eduClsTypeId";}    //教学班类型Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"TeachingSolutionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingSolutionId(): string {return "teachingSolutionId";}    //教学方案Id

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"IdEduWay"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduWay(): string {return "idEduWay";}    //教学方式流水号

 /**
 * 常量:"IdClassRoomType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdClassRoomType(): string {return "idClassRoomType";}    //教室类型流水号

 /**
 * 常量:"TotalLessonQty"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalLessonQty(): string {return "totalLessonQty";}    //总课时数

 /**
 * 常量:"MaxStuQty"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MaxStuQty(): string {return "maxStuQty";}    //最大学生数

 /**
 * 常量:"WeekQty"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekQty(): string {return "weekQty";}    //总周数

 /**
 * 常量:"ScheUnitPW"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ScheUnitPW(): string {return "scheUnitPW";}    //周排课次数

 /**
 * 常量:"WeekStatusId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekStatusId(): string {return "weekStatusId";}    //周状态编号(单,双,全周)

 /**
 * 常量:"CustomerWeek"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CustomerWeek(): string {return "customerWeek";}    //自定义上课周

 /**
 * 常量:"LessonQtyPerWeek"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LessonQtyPerWeek(): string {return "lessonQtyPerWeek";}    //周课时数

 /**
 * 常量:"Mark"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Mark(): string {return "mark";}    //获得学分

 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //年级流水号

 /**
 * 常量:"IsEffective"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsEffective(): string {return "isEffective";}    //是否有效

 /**
 * 常量:"IsForPaperReading"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsForPaperReading(): string {return "isForPaperReading";}    //是否参与论文阅读

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"IdCourseType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCourseType(): string {return "idCourseType";}    //课程类型流水号

 /**
 * 常量:"IsDegree"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDegree(): string {return "isDegree";}    //是否学位课

 /**
 * 常量:"IdScoreType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdScoreType(): string {return "idScoreType";}    //成绩类型流水号

 /**
 * 常量:"GetScoreWayId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GetScoreWayId(): string {return "getScoreWayId";}    //获得成绩方式Id

 /**
 * 常量:"IsProportionalCtrl"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsProportionalCtrl(): string {return "isProportionalCtrl";}    //是否比例控制

 /**
 * 常量:"IdExamType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdExamType(): string {return "idExamType";}    //考试方式流水号

 /**
 * 常量:"ExamTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamTime(): string {return "examTime";}    //考试时间

 /**
 * 常量:"BeginWeek"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BeginWeek(): string {return "beginWeek";}    //开始周

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}