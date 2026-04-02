
 /**
 * 类名:clsvTopicObjectiveENEx
 * 表名:vTopicObjective(01120617)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:38
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
 * 客观表视图(vTopicObjective)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvTopicObjectiveEN } from "@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN";

export class  clsvTopicObjectiveENEx extends clsvTopicObjectiveEN
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
case clsvTopicObjectiveENEx.con_mId:
return this.mId;
case clsvTopicObjectiveENEx.con_RelaUpdDate:
return this.relaUpdDate;
case clsvTopicObjectiveENEx.con_RelaUpdUser:
return this.relaUpdUser;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"mId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"RelaUpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RelaUpdDate(): string {return "relaUpdDate";}    //修改日期

 /**
 * 常量:"RelaUpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RelaUpdUser(): string {return "relaUpdUser";}    //修改人

public mId = 0;    //mId
public relaUpdDate = "";    //修改日期
public relaUpdUser = "";    //修改人

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
case clsvTopicObjectiveENEx.con_mId:
this.mId = Number(strValue);
break;
case clsvTopicObjectiveENEx.con_RelaUpdDate:
this.relaUpdDate = strValue;
break;
case clsvTopicObjectiveENEx.con_RelaUpdUser:
this.relaUpdUser = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vTopicObjective]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}