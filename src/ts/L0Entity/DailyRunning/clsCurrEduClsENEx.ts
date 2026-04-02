
 /**
 * 类名:clsCurrEduClsENEx
 * 表名:CurrEduCls(01120123)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 17:00:32
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 当前教学班(CurrEduCls)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCurrEduClsEN } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsEN";

export class  clsCurrEduClsENEx extends clsCurrEduClsEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsCurrEduClsENEx.con_CollegeName:
return this.collegeName;
case clsCurrEduClsENEx.con_GradeBaseName:
return this.gradeBaseName;
case clsCurrEduClsENEx.con_CourseName:
return this.courseName;
case clsCurrEduClsENEx.con_CourseCode:
return this.courseCode;
case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
return this.classRoomTypeDesc;
case clsCurrEduClsENEx.con_LastVisitedDate:
return this.lastVisitedDate;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"CourseCode"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseCode(): string {return "courseCode";}    //课程代码

 /**
 * 常量:"ClassRoomTypeDesc"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ClassRoomTypeDesc(): string {return "classRoomTypeDesc";}    //教室类型描述

 /**
 * 常量:"LastVisitedDate"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_LastVisitedDate(): string {return "lastVisitedDate";}    //修改日期

public collegeName = "";    //学院名称
public gradeBaseName = "";    //年级名称
public courseName = "";    //课程名称
public courseCode = "";    //课程代码
public classRoomTypeDesc = "";    //教室类型描述
public lastVisitedDate = "";    //修改日期

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
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
case clsCurrEduClsENEx.con_CollegeName:
this.collegeName = strValue;
    this.hmProperty["collegeName"] = true;
break;
case clsCurrEduClsENEx.con_GradeBaseName:
this.gradeBaseName = strValue;
    this.hmProperty["gradeBaseName"] = true;
break;
case clsCurrEduClsENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsCurrEduClsENEx.con_CourseCode:
this.courseCode = strValue;
    this.hmProperty["courseCode"] = true;
break;
case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
this.classRoomTypeDesc = strValue;
    this.hmProperty["classRoomTypeDesc"] = true;
break;
case clsCurrEduClsENEx.con_LastVisitedDate:
this.lastVisitedDate = strValue;
    this.hmProperty["lastVisitedDate"] = true;
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
}