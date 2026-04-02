
 /**
 * 类名:clsgs_VpClassificationRelaENEx
 * 表名:gs_VpClassificationRela(01120777)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:47
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 观点分类主题关系表(gs_VpClassificationRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsgs_VpClassificationRelaEN } from "@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaEN";

export class  clsgs_VpClassificationRelaENEx extends clsgs_VpClassificationRelaEN
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
case clsgs_VpClassificationRelaENEx.con_ClassificationName:
return this.classificationName;
case clsgs_VpClassificationRelaENEx.con_DateTimeSim:
return this.dateTimeSim;
case clsgs_VpClassificationRelaENEx.con_TopicName:
return this.topicName;
case clsgs_VpClassificationRelaENEx.con_IdCurrEduCls:
return this.idCurrEduCls;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"ClassificationName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ClassificationName(): string {return "classificationName";}    //分类名称

 /**
 * 常量:"DateTimeSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DateTimeSim(): string {return "dateTimeSim";}    //简化日期时间

 /**
 * 常量:"TopicName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

public classificationName = "";    //分类名称
public dateTimeSim = "";    //简化日期时间
public topicName = "";    //栏目主题
public idCurrEduCls = "";    //教学班流水号

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
case clsgs_VpClassificationRelaENEx.con_ClassificationName:
this.classificationName = strValue;
    this.hmProperty["classificationName"] = true;
break;
case clsgs_VpClassificationRelaENEx.con_DateTimeSim:
this.dateTimeSim = strValue;
    this.hmProperty["dateTimeSim"] = true;
break;
case clsgs_VpClassificationRelaENEx.con_TopicName:
this.topicName = strValue;
    this.hmProperty["topicName"] = true;
break;
case clsgs_VpClassificationRelaENEx.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_VpClassificationRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}