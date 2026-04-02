
 /**
 * 类名:clsvCurrEduClsStuEN
 * 表名:vCurrEduClsStu(01120127)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 17:50:56
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
 * v教学班与学生关系(vCurrEduClsStu)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvCurrEduClsStuEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vCurrEduClsStu"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsStu"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 50;
public static AttributeName = ["idEduClsStu", "idCurrEduCls", "currEduClsId", "eduClsName", "courseId", "courseCode", "courseName", "teachingSolutionId", "teachingSolutionName", "idXzCollege", "collegeId", "collegeName", "lessonQtyPerWeek", "mark", "idUniZone", "gradeBaseName", "isEffective", "idCourseType", "courseTypeId", "courseTypeName", "isDegree", "currStuNum", "idStu", "stuId", "stuName", "idSex", "sexDesc", "majorID", "majorName", "idAdminCls", "birthday", "eduClsStuStateId", "getScoreTimes", "score", "totalScores", "ranking", "percentile", "confirmed", "schoolTerm", "schoolYear", "signInDate", "signInStateID", "signInUser", "modifyDate", "modifyUserId", "collegeName4Stu", "eduClsTypeName", "isSynScore", "eduClsTypeId", "userType"];
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
case clsvCurrEduClsStuEN.con_IdEduClsStu:
return this.idEduClsStu;
case clsvCurrEduClsStuEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduClsStuEN.con_CurrEduClsId:
return this.currEduClsId;
case clsvCurrEduClsStuEN.con_EduClsName:
return this.eduClsName;
case clsvCurrEduClsStuEN.con_CourseId:
return this.courseId;
case clsvCurrEduClsStuEN.con_CourseCode:
return this.courseCode;
case clsvCurrEduClsStuEN.con_CourseName:
return this.courseName;
case clsvCurrEduClsStuEN.con_TeachingSolutionId:
return this.teachingSolutionId;
case clsvCurrEduClsStuEN.con_TeachingSolutionName:
return this.teachingSolutionName;
case clsvCurrEduClsStuEN.con_IdXzCollege:
return this.idXzCollege;
case clsvCurrEduClsStuEN.con_CollegeId:
return this.collegeId;
case clsvCurrEduClsStuEN.con_CollegeName:
return this.collegeName;
case clsvCurrEduClsStuEN.con_LessonQtyPerWeek:
return this.lessonQtyPerWeek;
case clsvCurrEduClsStuEN.con_Mark:
return this.mark;
case clsvCurrEduClsStuEN.con_IdUniZone:
return this.idUniZone;
case clsvCurrEduClsStuEN.con_GradeBaseName:
return this.gradeBaseName;
case clsvCurrEduClsStuEN.con_IsEffective:
return this.isEffective;
case clsvCurrEduClsStuEN.con_IdCourseType:
return this.idCourseType;
case clsvCurrEduClsStuEN.con_CourseTypeId:
return this.courseTypeId;
case clsvCurrEduClsStuEN.con_CourseTypeName:
return this.courseTypeName;
case clsvCurrEduClsStuEN.con_IsDegree:
return this.isDegree;
case clsvCurrEduClsStuEN.con_CurrStuNum:
return this.currStuNum;
case clsvCurrEduClsStuEN.con_IdStu:
return this.idStu;
case clsvCurrEduClsStuEN.con_StuId:
return this.stuId;
case clsvCurrEduClsStuEN.con_StuName:
return this.stuName;
case clsvCurrEduClsStuEN.con_IdSex:
return this.idSex;
case clsvCurrEduClsStuEN.con_SexDesc:
return this.sexDesc;
case clsvCurrEduClsStuEN.con_MajorID:
return this.majorID;
case clsvCurrEduClsStuEN.con_MajorName:
return this.majorName;
case clsvCurrEduClsStuEN.con_IdAdminCls:
return this.idAdminCls;
case clsvCurrEduClsStuEN.con_Birthday:
return this.birthday;
case clsvCurrEduClsStuEN.con_EduClsStuStateId:
return this.eduClsStuStateId;
case clsvCurrEduClsStuEN.con_GetScoreTimes:
return this.getScoreTimes;
case clsvCurrEduClsStuEN.con_Score:
return this.score;
case clsvCurrEduClsStuEN.con_TotalScores:
return this.totalScores;
case clsvCurrEduClsStuEN.con_Ranking:
return this.ranking;
case clsvCurrEduClsStuEN.con_Percentile:
return this.percentile;
case clsvCurrEduClsStuEN.con_Confirmed:
return this.confirmed;
case clsvCurrEduClsStuEN.con_SchoolTerm:
return this.schoolTerm;
case clsvCurrEduClsStuEN.con_SchoolYear:
return this.schoolYear;
case clsvCurrEduClsStuEN.con_SignInDate:
return this.signInDate;
case clsvCurrEduClsStuEN.con_SignInStateID:
return this.signInStateID;
case clsvCurrEduClsStuEN.con_SignInUser:
return this.signInUser;
case clsvCurrEduClsStuEN.con_ModifyDate:
return this.modifyDate;
case clsvCurrEduClsStuEN.con_ModifyUserId:
return this.modifyUserId;
case clsvCurrEduClsStuEN.con_CollegeName4Stu:
return this.collegeName4Stu;
case clsvCurrEduClsStuEN.con_EduClsTypeName:
return this.eduClsTypeName;
case clsvCurrEduClsStuEN.con_IsSynScore:
return this.isSynScore;
case clsvCurrEduClsStuEN.con_EduClsTypeId:
return this.eduClsTypeId;
case clsvCurrEduClsStuEN.con_UserType:
return this.userType;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduClsStu]中不存在!`;
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
case clsvCurrEduClsStuEN.con_IdEduClsStu:
this.idEduClsStu = Number(strValue);
break;
case clsvCurrEduClsStuEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvCurrEduClsStuEN.con_CurrEduClsId:
this.currEduClsId = strValue;
break;
case clsvCurrEduClsStuEN.con_EduClsName:
this.eduClsName = strValue;
break;
case clsvCurrEduClsStuEN.con_CourseId:
this.courseId = strValue;
break;
case clsvCurrEduClsStuEN.con_CourseCode:
this.courseCode = strValue;
break;
case clsvCurrEduClsStuEN.con_CourseName:
this.courseName = strValue;
break;
case clsvCurrEduClsStuEN.con_TeachingSolutionId:
this.teachingSolutionId = strValue;
break;
case clsvCurrEduClsStuEN.con_TeachingSolutionName:
this.teachingSolutionName = strValue;
break;
case clsvCurrEduClsStuEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvCurrEduClsStuEN.con_CollegeId:
this.collegeId = strValue;
break;
case clsvCurrEduClsStuEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvCurrEduClsStuEN.con_LessonQtyPerWeek:
this.lessonQtyPerWeek = Number(strValue);
break;
case clsvCurrEduClsStuEN.con_Mark:
this.mark = Number(strValue);
break;
case clsvCurrEduClsStuEN.con_IdUniZone:
this.idUniZone = strValue;
break;
case clsvCurrEduClsStuEN.con_GradeBaseName:
this.gradeBaseName = strValue;
break;
case clsvCurrEduClsStuEN.con_IsEffective:
this.isEffective = Boolean(strValue);
break;
case clsvCurrEduClsStuEN.con_IdCourseType:
this.idCourseType = strValue;
break;
case clsvCurrEduClsStuEN.con_CourseTypeId:
this.courseTypeId = strValue;
break;
case clsvCurrEduClsStuEN.con_CourseTypeName:
this.courseTypeName = strValue;
break;
case clsvCurrEduClsStuEN.con_IsDegree:
this.isDegree = Boolean(strValue);
break;
case clsvCurrEduClsStuEN.con_CurrStuNum:
this.currStuNum = Number(strValue);
break;
case clsvCurrEduClsStuEN.con_IdStu:
this.idStu = strValue;
break;
case clsvCurrEduClsStuEN.con_StuId:
this.stuId = strValue;
break;
case clsvCurrEduClsStuEN.con_StuName:
this.stuName = strValue;
break;
case clsvCurrEduClsStuEN.con_IdSex:
this.idSex = strValue;
break;
case clsvCurrEduClsStuEN.con_SexDesc:
this.sexDesc = strValue;
break;
case clsvCurrEduClsStuEN.con_MajorID:
this.majorID = strValue;
break;
case clsvCurrEduClsStuEN.con_MajorName:
this.majorName = strValue;
break;
case clsvCurrEduClsStuEN.con_IdAdminCls:
this.idAdminCls = strValue;
break;
case clsvCurrEduClsStuEN.con_Birthday:
this.birthday = strValue;
break;
case clsvCurrEduClsStuEN.con_EduClsStuStateId:
this.eduClsStuStateId = strValue;
break;
case clsvCurrEduClsStuEN.con_GetScoreTimes:
this.getScoreTimes = Number(strValue);
break;
case clsvCurrEduClsStuEN.con_Score:
this.score = Number(strValue);
break;
case clsvCurrEduClsStuEN.con_TotalScores:
this.totalScores = Number(strValue);
break;
case clsvCurrEduClsStuEN.con_Ranking:
this.ranking = Number(strValue);
break;
case clsvCurrEduClsStuEN.con_Percentile:
this.percentile = Number(strValue);
break;
case clsvCurrEduClsStuEN.con_Confirmed:
this.confirmed = Boolean(strValue);
break;
case clsvCurrEduClsStuEN.con_SchoolTerm:
this.schoolTerm = strValue;
break;
case clsvCurrEduClsStuEN.con_SchoolYear:
this.schoolYear = strValue;
break;
case clsvCurrEduClsStuEN.con_SignInDate:
this.signInDate = strValue;
break;
case clsvCurrEduClsStuEN.con_SignInStateID:
this.signInStateID = strValue;
break;
case clsvCurrEduClsStuEN.con_SignInUser:
this.signInUser = strValue;
break;
case clsvCurrEduClsStuEN.con_ModifyDate:
this.modifyDate = strValue;
break;
case clsvCurrEduClsStuEN.con_ModifyUserId:
this.modifyUserId = strValue;
break;
case clsvCurrEduClsStuEN.con_CollegeName4Stu:
this.collegeName4Stu = strValue;
break;
case clsvCurrEduClsStuEN.con_EduClsTypeName:
this.eduClsTypeName = strValue;
break;
case clsvCurrEduClsStuEN.con_IsSynScore:
this.isSynScore = Boolean(strValue);
break;
case clsvCurrEduClsStuEN.con_EduClsTypeId:
this.eduClsTypeId = strValue;
break;
case clsvCurrEduClsStuEN.con_UserType:
this.userType = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduClsStu]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idEduClsStu = 0;    //教学班学生流水号
public idCurrEduCls = "";    //教学班流水号
public currEduClsId = "";    //教学班Id
public eduClsName = "";    //教学班名
public courseId = "";    //课程Id
public courseCode = "";    //课程代码
public courseName = "";    //课程名称
public teachingSolutionId = "";    //教学方案Id
public teachingSolutionName = "";    //教学方案名称
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public lessonQtyPerWeek = 0;    //周课时数
public mark = 0;    //获得学分
public idUniZone = "";    //校区流水号
public gradeBaseName = "";    //年级名称
public isEffective = false;    //是否有效
public idCourseType = "";    //课程类型流水号
public courseTypeId = "";    //课程类型ID
public courseTypeName = "";    //课程类型名称
public isDegree = false;    //是否学位课
public currStuNum = 0;    //当前学生数
public idStu = "";    //学生流水号
public stuId = "";    //学号
public stuName = "";    //姓名
public idSex = "";    //性别流水号
public sexDesc = "";    //性别名称
public majorID = "";    //专业ID
public majorName = "";    //专业名称
public idAdminCls = "";    //行政班流水号
public birthday = "";    //出生日期
public eduClsStuStateId = "";    //教学班学生状态编号
public getScoreTimes = 0;    //获得成绩次数
public score = 0;    //得分
public totalScores = 0;    //总分值
public ranking = 0;    //名次
public percentile = 0;    //百分位
public confirmed = false;    //是否确认
public schoolTerm = "";    //学期
public schoolYear = "";    //学年
public signInDate = "";    //签入时间
public signInStateID = "";    //签入状态表流水号
public signInUser = "";    //签入人
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public collegeName4Stu = "";    //CollegeName4Stu
public eduClsTypeName = "";    //教学班类型名称
public isSynScore = false;    //是否同步成绩
public eduClsTypeId = "";    //教学班类型Id
public userType = "";    //用户类型


 /**
 * 常量:"IdEduClsStu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdEduClsStu(): string {return "idEduClsStu";}    //教学班学生流水号

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
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

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
 * 常量:"CurrStuNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CurrStuNum(): string {return "currStuNum";}    //当前学生数

 /**
 * 常量:"IdStu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStu(): string {return "idStu";}    //学生流水号

 /**
 * 常量:"StuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuId(): string {return "stuId";}    //学号

 /**
 * 常量:"StuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

 /**
 * 常量:"IdSex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSex(): string {return "idSex";}    //性别流水号

 /**
 * 常量:"SexDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SexDesc(): string {return "sexDesc";}    //性别名称

 /**
 * 常量:"MajorID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MajorID(): string {return "majorID";}    //专业ID

 /**
 * 常量:"MajorName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"Birthday"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Birthday(): string {return "birthday";}    //出生日期

 /**
 * 常量:"EduClsStuStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsStuStateId(): string {return "eduClsStuStateId";}    //教学班学生状态编号

 /**
 * 常量:"GetScoreTimes"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GetScoreTimes(): string {return "getScoreTimes";}    //获得成绩次数

 /**
 * 常量:"Score"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //得分

 /**
 * 常量:"TotalScores"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TotalScores(): string {return "totalScores";}    //总分值

 /**
 * 常量:"Ranking"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Ranking(): string {return "ranking";}    //名次

 /**
 * 常量:"Percentile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Percentile(): string {return "percentile";}    //百分位

 /**
 * 常量:"Confirmed"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Confirmed(): string {return "confirmed";}    //是否确认

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
 * 常量:"SignInDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SignInDate(): string {return "signInDate";}    //签入时间

 /**
 * 常量:"SignInStateID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SignInStateID(): string {return "signInStateID";}    //签入状态表流水号

 /**
 * 常量:"SignInUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SignInUser(): string {return "signInUser";}    //签入人

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
 * 常量:"CollegeName4Stu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName4Stu(): string {return "collegeName4Stu";}    //CollegeName4Stu

 /**
 * 常量:"EduClsTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsTypeName(): string {return "eduClsTypeName";}    //教学班类型名称

 /**
 * 常量:"IsSynScore"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSynScore(): string {return "isSynScore";}    //是否同步成绩

 /**
 * 常量:"EduClsTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsTypeId(): string {return "eduClsTypeId";}    //教学班类型Id

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