
 /**
 * 类名:clsRTUserRelaENEx
 * 表名:RTUserRela(01120582)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 09:06:36
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
 * 主题用户关系(RTUserRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsRTUserRelaEN } from "@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN";

export class  clsRTUserRelaENEx extends clsRTUserRelaEN
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
case clsRTUserRelaENEx.con_ColorCode:
return this.colorCode;
case clsRTUserRelaENEx.con_CollegeName:
return this.collegeName;
case clsRTUserRelaENEx.con_UserName:
return this.userName;
case clsRTUserRelaENEx.con_MajorName:
return this.majorName;
case clsRTUserRelaENEx.con_TopicUserRoleName:
return this.topicUserRoleName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"ColorCode"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ColorCode(): string {return "colorCode";}    //颜色码

 /**
 * 常量:"CollegeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"MajorName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"TopicUserRoleName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicUserRoleName(): string {return "topicUserRoleName";}    //主题用户角色

public colorCode = "";    //颜色码
public collegeName = "";    //学院名称
public userName = "";    //用户名
public majorName = "";    //专业名称
public topicUserRoleName = "";    //主题用户角色

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
case clsRTUserRelaENEx.con_ColorCode:
this.colorCode = strValue;
    this.hmProperty["colorCode"] = true;
break;
case clsRTUserRelaENEx.con_CollegeName:
this.collegeName = strValue;
    this.hmProperty["collegeName"] = true;
break;
case clsRTUserRelaENEx.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clsRTUserRelaENEx.con_MajorName:
this.majorName = strValue;
    this.hmProperty["majorName"] = true;
break;
case clsRTUserRelaENEx.con_TopicUserRoleName:
this.topicUserRoleName = strValue;
    this.hmProperty["topicUserRoleName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RTUserRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}