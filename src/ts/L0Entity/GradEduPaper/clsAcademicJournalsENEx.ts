
 /**
 * 类名:clsAcademicJournalsENEx
 * 表名:AcademicJournals(01120929)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:05
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 学术期刊(AcademicJournals)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsAcademicJournalsEN } from "@/ts/L0Entity/GradEduPaper/clsAcademicJournalsEN";

export class  clsAcademicJournalsENEx extends clsAcademicJournalsEN
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
case clsAcademicJournalsENEx.con_JournalSubjectCategoryName:
return this.journalSubjectCategoryName;
case clsAcademicJournalsENEx.con_JournalSubjectName:
return this.journalSubjectName;
case clsAcademicJournalsENEx.con_JournalSubjectCode:
return this.journalSubjectCode;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"JournalSubjectCategoryName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_JournalSubjectCategoryName(): string {return "journalSubjectCategoryName";}    //期刊学科门类名称

 /**
 * 常量:"JournalSubjectName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_JournalSubjectName(): string {return "journalSubjectName";}    //期刊学科名称

 /**
 * 常量:"JournalSubjectCode"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_JournalSubjectCode(): string {return "journalSubjectCode";}    //期刊学科代码

public journalSubjectCategoryName = "";    //期刊学科门类名称
public journalSubjectName = "";    //期刊学科名称
public journalSubjectCode = "";    //期刊学科代码

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
case clsAcademicJournalsENEx.con_JournalSubjectCategoryName:
this.journalSubjectCategoryName = strValue;
    this.hmProperty["journalSubjectCategoryName"] = true;
break;
case clsAcademicJournalsENEx.con_JournalSubjectName:
this.journalSubjectName = strValue;
    this.hmProperty["journalSubjectName"] = true;
break;
case clsAcademicJournalsENEx.con_JournalSubjectCode:
this.journalSubjectCode = strValue;
    this.hmProperty["journalSubjectCode"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[AcademicJournals]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}