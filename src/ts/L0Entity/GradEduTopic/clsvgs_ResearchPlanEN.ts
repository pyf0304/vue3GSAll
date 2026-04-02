
 /**
 * 类名:clsvgs_ResearchPlanEN
 * 表名:vgs_ResearchPlan(01120662)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:23
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 主题研究计划视图(vgs_ResearchPlan)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_ResearchPlanEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_ResearchPlan"; //当前表名,与该类相关的表名
public static _KeyFldName= "PlanId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["planId", "topicId", "topicName", "idCurrEduCls", "statusId", "statusName", "planContent", "responsibleUser", "startDate", "endDate", "actualFinishingDate", "acceptanceUser", "isSubmit", "updUser", "updDate", "memo", "planTypeId"];
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
case clsvgs_ResearchPlanEN.con_PlanId:
return this.planId;
case clsvgs_ResearchPlanEN.con_TopicId:
return this.topicId;
case clsvgs_ResearchPlanEN.con_TopicName:
return this.topicName;
case clsvgs_ResearchPlanEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_ResearchPlanEN.con_StatusId:
return this.statusId;
case clsvgs_ResearchPlanEN.con_StatusName:
return this.statusName;
case clsvgs_ResearchPlanEN.con_PlanContent:
return this.planContent;
case clsvgs_ResearchPlanEN.con_ResponsibleUser:
return this.responsibleUser;
case clsvgs_ResearchPlanEN.con_StartDate:
return this.startDate;
case clsvgs_ResearchPlanEN.con_EndDate:
return this.endDate;
case clsvgs_ResearchPlanEN.con_ActualFinishingDate:
return this.actualFinishingDate;
case clsvgs_ResearchPlanEN.con_AcceptanceUser:
return this.acceptanceUser;
case clsvgs_ResearchPlanEN.con_IsSubmit:
return this.isSubmit;
case clsvgs_ResearchPlanEN.con_UpdUser:
return this.updUser;
case clsvgs_ResearchPlanEN.con_UpdDate:
return this.updDate;
case clsvgs_ResearchPlanEN.con_Memo:
return this.memo;
case clsvgs_ResearchPlanEN.con_PlanTypeId:
return this.planTypeId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_ResearchPlan]中不存在!`;
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
case clsvgs_ResearchPlanEN.con_PlanId:
this.planId = strValue;
break;
case clsvgs_ResearchPlanEN.con_TopicId:
this.topicId = strValue;
break;
case clsvgs_ResearchPlanEN.con_TopicName:
this.topicName = strValue;
break;
case clsvgs_ResearchPlanEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvgs_ResearchPlanEN.con_StatusId:
this.statusId = strValue;
break;
case clsvgs_ResearchPlanEN.con_StatusName:
this.statusName = strValue;
break;
case clsvgs_ResearchPlanEN.con_PlanContent:
this.planContent = strValue;
break;
case clsvgs_ResearchPlanEN.con_ResponsibleUser:
this.responsibleUser = strValue;
break;
case clsvgs_ResearchPlanEN.con_StartDate:
this.startDate = strValue;
break;
case clsvgs_ResearchPlanEN.con_EndDate:
this.endDate = strValue;
break;
case clsvgs_ResearchPlanEN.con_ActualFinishingDate:
this.actualFinishingDate = strValue;
break;
case clsvgs_ResearchPlanEN.con_AcceptanceUser:
this.acceptanceUser = strValue;
break;
case clsvgs_ResearchPlanEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvgs_ResearchPlanEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvgs_ResearchPlanEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvgs_ResearchPlanEN.con_Memo:
this.memo = strValue;
break;
case clsvgs_ResearchPlanEN.con_PlanTypeId:
this.planTypeId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_ResearchPlan]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public planId = "";    //计划Id
public topicId = "";    //主题Id
public topicName = "";    //栏目主题
public idCurrEduCls = "";    //教学班流水号
public statusId = "";    //状态Id
public statusName = "";    //状态名称
public planContent = "";    //计划内容
public responsibleUser = "";    //负责人/小组
public startDate = "";    //开始日期
public endDate = "";    //截止日期
public actualFinishingDate = "";    //实际完成日期
public acceptanceUser = "";    //验收用户
public isSubmit = false;    //是否提交
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注
public planTypeId = "";    //计划类型


 /**
 * 常量:"PlanId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PlanId(): string {return "planId";}    //计划Id

 /**
 * 常量:"TopicId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"TopicName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"StatusId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StatusId(): string {return "statusId";}    //状态Id

 /**
 * 常量:"StatusName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StatusName(): string {return "statusName";}    //状态名称

 /**
 * 常量:"PlanContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PlanContent(): string {return "planContent";}    //计划内容

 /**
 * 常量:"ResponsibleUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ResponsibleUser(): string {return "responsibleUser";}    //负责人/小组

 /**
 * 常量:"StartDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StartDate(): string {return "startDate";}    //开始日期

 /**
 * 常量:"EndDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_EndDate(): string {return "endDate";}    //截止日期

 /**
 * 常量:"ActualFinishingDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ActualFinishingDate(): string {return "actualFinishingDate";}    //实际完成日期

 /**
 * 常量:"AcceptanceUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AcceptanceUser(): string {return "acceptanceUser";}    //验收用户

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"PlanTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PlanTypeId(): string {return "planTypeId";}    //计划类型

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