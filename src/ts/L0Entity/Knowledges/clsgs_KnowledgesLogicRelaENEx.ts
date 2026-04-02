
 /**
 * 类名:clsgs_KnowledgesLogicRelaENEx
 * 表名:gs_KnowledgesLogicRela(01120870)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:11
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
 * 知识点逻辑关系表(gs_KnowledgesLogicRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsgs_KnowledgesLogicRelaEN } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaEN";

export class  clsgs_KnowledgesLogicRelaENEx extends clsgs_KnowledgesLogicRelaEN
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
case clsgs_KnowledgesLogicRelaENEx.con_RelaTypeName:
return this.relaTypeName;
case clsgs_KnowledgesLogicRelaENEx.con_CourseKnowledgeNameB:
return this.courseKnowledgeNameB;
case clsgs_KnowledgesLogicRelaENEx.con_CourseKnowledgeNameA:
return this.courseKnowledgeNameA;
case clsgs_KnowledgesLogicRelaENEx.con_KnowledgeGraphName:
return this.knowledgeGraphName;
case clsgs_KnowledgesLogicRelaENEx.con_KnowledgeName:
return this.knowledgeName;
case clsgs_KnowledgesLogicRelaENEx.con_KnowledgeNameB:
return this.knowledgeNameB;
case clsgs_KnowledgesLogicRelaENEx.con_KnowledgeNameA:
return this.knowledgeNameA;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"RelaTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RelaTypeName(): string {return "relaTypeName";}    //关系类型名

 /**
 * 常量:"CourseKnowledgeNameB"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CourseKnowledgeNameB(): string {return "courseKnowledgeNameB";}    //连连看图名

 /**
 * 常量:"CourseKnowledgeNameA"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CourseKnowledgeNameA(): string {return "courseKnowledgeNameA";}    //连连看图名

 /**
 * 常量:"KnowledgeGraphName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KnowledgeGraphName(): string {return "knowledgeGraphName";}    //连连看图名

 /**
 * 常量:"KnowledgeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KnowledgeName(): string {return "knowledgeName";}    //知识点名称

 /**
 * 常量:"KnowledgeNameB"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KnowledgeNameB(): string {return "knowledgeNameB";}    //知识点名称

 /**
 * 常量:"KnowledgeNameA"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KnowledgeNameA(): string {return "knowledgeNameA";}    //知识点名称

public relaTypeName = "";    //关系类型名
public courseKnowledgeNameB = "";    //连连看图名
public courseKnowledgeNameA = "";    //连连看图名
public knowledgeGraphName = "";    //连连看图名
public knowledgeName = "";    //知识点名称
public knowledgeNameB = "";    //知识点名称
public knowledgeNameA = "";    //知识点名称

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
case clsgs_KnowledgesLogicRelaENEx.con_RelaTypeName:
this.relaTypeName = strValue;
    this.hmProperty["relaTypeName"] = true;
break;
case clsgs_KnowledgesLogicRelaENEx.con_CourseKnowledgeNameB:
this.courseKnowledgeNameB = strValue;
    this.hmProperty["courseKnowledgeNameB"] = true;
break;
case clsgs_KnowledgesLogicRelaENEx.con_CourseKnowledgeNameA:
this.courseKnowledgeNameA = strValue;
    this.hmProperty["courseKnowledgeNameA"] = true;
break;
case clsgs_KnowledgesLogicRelaENEx.con_KnowledgeGraphName:
this.knowledgeGraphName = strValue;
    this.hmProperty["knowledgeGraphName"] = true;
break;
case clsgs_KnowledgesLogicRelaENEx.con_KnowledgeName:
this.knowledgeName = strValue;
    this.hmProperty["knowledgeName"] = true;
break;
case clsgs_KnowledgesLogicRelaENEx.con_KnowledgeNameB:
this.knowledgeNameB = strValue;
    this.hmProperty["knowledgeNameB"] = true;
break;
case clsgs_KnowledgesLogicRelaENEx.con_KnowledgeNameA:
this.knowledgeNameA = strValue;
    this.hmProperty["knowledgeNameA"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgesLogicRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}