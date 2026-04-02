
 /**
 * 类名:clsStudentInfoENEx
 * 表名:StudentInfo(01120131)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:50
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 学生(StudentInfo)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsStudentInfoEN } from "@/ts/L0Entity/UserManage/clsStudentInfoEN";

export class  clsStudentInfoENEx extends clsStudentInfoEN
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
case clsStudentInfoENEx.con_GradeName:
return this.gradeName;
case clsStudentInfoENEx.con_GradeBaseName:
return this.gradeBaseName;
case clsStudentInfoENEx.con_UniZoneDesc:
return this.uniZoneDesc;
case clsStudentInfoENEx.con_CollegeName:
return this.collegeName;
case clsStudentInfoENEx.con_MajorName:
return this.majorName;
case clsStudentInfoENEx.con_DateTimeSim:
return this.dateTimeSim;
case clsStudentInfoENEx.con_SexDesc:
return this.sexDesc;
case clsStudentInfoENEx.con_StuNameEx:
return this.stuNameEx;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"GradeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GradeName(): string {return "gradeName";}    //年级名称

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"UniZoneDesc"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UniZoneDesc(): string {return "uniZoneDesc";}    //校区名称

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"MajorName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"DateTimeSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DateTimeSim(): string {return "dateTimeSim";}    //简化日期时间

 /**
 * 常量:"SexDesc"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_SexDesc(): string {return "sexDesc";}    //性别名称

 /**
 * 常量:"StuNameEx"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_StuNameEx(): string {return "stuNameEx";}    //姓名Ex

public gradeName = "";    //年级名称
public gradeBaseName = "";    //年级名称
public uniZoneDesc = "";    //校区名称
public collegeName = "";    //学院名称
public majorName = "";    //专业名称
public dateTimeSim = "";    //简化日期时间
public sexDesc = "";    //性别名称
public stuNameEx = "";    //姓名Ex

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
case clsStudentInfoENEx.con_GradeName:
this.gradeName = strValue;
    this.hmProperty["gradeName"] = true;
break;
case clsStudentInfoENEx.con_GradeBaseName:
this.gradeBaseName = strValue;
    this.hmProperty["gradeBaseName"] = true;
break;
case clsStudentInfoENEx.con_UniZoneDesc:
this.uniZoneDesc = strValue;
    this.hmProperty["uniZoneDesc"] = true;
break;
case clsStudentInfoENEx.con_CollegeName:
this.collegeName = strValue;
    this.hmProperty["collegeName"] = true;
break;
case clsStudentInfoENEx.con_MajorName:
this.majorName = strValue;
    this.hmProperty["majorName"] = true;
break;
case clsStudentInfoENEx.con_DateTimeSim:
this.dateTimeSim = strValue;
    this.hmProperty["dateTimeSim"] = true;
break;
case clsStudentInfoENEx.con_SexDesc:
this.sexDesc = strValue;
    this.hmProperty["sexDesc"] = true;
break;
case clsStudentInfoENEx.con_StuNameEx:
this.stuNameEx = strValue;
    this.hmProperty["stuNameEx"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[StudentInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}