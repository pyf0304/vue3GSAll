
 /**
 * 类名:clscc_CourseKnowledgesENEx
 * 表名:cc_CourseKnowledges(01120082)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:10
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点(cc_CourseKnowledges)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscc_CourseKnowledgesEN } from "@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN";

export class  clscc_CourseKnowledgesENEx extends clscc_CourseKnowledgesEN
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
case clscc_CourseKnowledgesENEx.con_CourseName:
return this.courseName;
case clscc_CourseKnowledgesENEx.con_CourseChapterName:
return this.courseChapterName;
case clscc_CourseKnowledgesENEx.con_KnowledgeTypeName:
return this.knowledgeTypeName;
case clscc_CourseKnowledgesENEx.con_QuestionNum:
return this.questionNum;
case clscc_CourseKnowledgesENEx.con_ChapterName:
return this.chapterName;
case clscc_CourseKnowledgesENEx.con_UserName:
return this.userName;
case clscc_CourseKnowledgesENEx.con_CourseCode:
return this.courseCode;
case clscc_CourseKnowledgesENEx.con_SectionNameSim:
return this.sectionNameSim;
case clscc_CourseKnowledgesENEx.con_ChapterNameSim:
return this.chapterNameSim;
case clscc_CourseKnowledgesENEx.con_SectionName:
return this.sectionName;
case clscc_CourseKnowledgesENEx.con_KnowledgeModuleName:
return this.knowledgeModuleName;
case clscc_CourseKnowledgesENEx.con_DateTimeSim:
return this.dateTimeSim;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"CourseChapterName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseChapterName(): string {return "courseChapterName";}    //课程章节名称

 /**
 * 常量:"KnowledgeTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_KnowledgeTypeName(): string {return "knowledgeTypeName";}    //知识点类型名

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

 /**
 * 常量:"ChapterName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ChapterName(): string {return "chapterName";}    //章名

 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"CourseCode"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseCode(): string {return "courseCode";}    //课程代码

 /**
 * 常量:"SectionNameSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_SectionNameSim(): string {return "sectionNameSim";}    //节名简称

 /**
 * 常量:"ChapterNameSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ChapterNameSim(): string {return "chapterNameSim";}    //章名简称

 /**
 * 常量:"SectionName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_SectionName(): string {return "sectionName";}    //节名

 /**
 * 常量:"KnowledgeModuleName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_KnowledgeModuleName(): string {return "knowledgeModuleName";}    //知识点模块名称

 /**
 * 常量:"DateTimeSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DateTimeSim(): string {return "dateTimeSim";}    //简化日期时间

public courseName = "";    //课程名称
public courseChapterName = "";    //课程章节名称
public knowledgeTypeName = "";    //知识点类型名
public questionNum = 0;    //题目数
public chapterName = "";    //章名
public userName = "";    //用户名
public courseCode = "";    //课程代码
public sectionNameSim = "";    //节名简称
public chapterNameSim = "";    //章名简称
public sectionName = "";    //节名
public knowledgeModuleName = "";    //知识点模块名称
public dateTimeSim = "";    //简化日期时间

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
case clscc_CourseKnowledgesENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clscc_CourseKnowledgesENEx.con_CourseChapterName:
this.courseChapterName = strValue;
    this.hmProperty["courseChapterName"] = true;
break;
case clscc_CourseKnowledgesENEx.con_KnowledgeTypeName:
this.knowledgeTypeName = strValue;
    this.hmProperty["knowledgeTypeName"] = true;
break;
case clscc_CourseKnowledgesENEx.con_QuestionNum:
this.questionNum = Number(strValue);
    this.hmProperty["questionNum"] = true;
break;
case clscc_CourseKnowledgesENEx.con_ChapterName:
this.chapterName = strValue;
    this.hmProperty["chapterName"] = true;
break;
case clscc_CourseKnowledgesENEx.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clscc_CourseKnowledgesENEx.con_CourseCode:
this.courseCode = strValue;
    this.hmProperty["courseCode"] = true;
break;
case clscc_CourseKnowledgesENEx.con_SectionNameSim:
this.sectionNameSim = strValue;
    this.hmProperty["sectionNameSim"] = true;
break;
case clscc_CourseKnowledgesENEx.con_ChapterNameSim:
this.chapterNameSim = strValue;
    this.hmProperty["chapterNameSim"] = true;
break;
case clscc_CourseKnowledgesENEx.con_SectionName:
this.sectionName = strValue;
    this.hmProperty["sectionName"] = true;
break;
case clscc_CourseKnowledgesENEx.con_KnowledgeModuleName:
this.knowledgeModuleName = strValue;
    this.hmProperty["knowledgeModuleName"] = true;
break;
case clscc_CourseKnowledgesENEx.con_DateTimeSim:
this.dateTimeSim = strValue;
    this.hmProperty["dateTimeSim"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseKnowledges]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}