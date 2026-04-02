
 /**
 * 类名:clsgs_ResearchPlanEN
 * 表名:gs_ResearchPlan(01120663)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:10
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
 * 主题研究计划(gs_ResearchPlan)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_ResearchPlanEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_ResearchPlan"; //当前表名,与该类相关的表名
public static _KeyFldName= "PlanId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["planId", "topicId", "statusId", "planContent", "responsibleUser", "startDate", "endDate", "actualFinishingDate", "acceptanceUser", "isSubmit", "updUser", "updDate", "memo", "planTypeId", "idCurrEduCls"];
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
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrPlanId = "";    //计划Id
private mstrTopicId = "";    //主题Id
private mstrStatusId = "";    //状态Id
private mstrPlanContent = "";    //计划内容
private mstrResponsibleUser = "";    //负责人/小组
private mstrStartDate = "";    //开始日期
private mstrEndDate = "";    //截止日期
private mstrActualFinishingDate = "";    //实际完成日期
private mstrAcceptanceUser = "";    //验收用户
private mbolIsSubmit = false;    //是否提交
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注
private mstrPlanTypeId = "";    //计划类型
private mstrIdCurrEduCls = "";    //教学班流水号

/**
 * 计划Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPlanId (value: string)
{
if (value  != undefined)
{
 this.planId = value;
    this.hmProperty["planId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 主题Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTopicId (value: string)
{
if (value  != undefined)
{
 this.topicId = value;
    this.hmProperty["topicId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 状态Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStatusId (value: string)
{
if (value  != undefined)
{
 this.statusId = value;
    this.hmProperty["statusId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 计划内容(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPlanContent (value: string)
{
if (value  != undefined)
{
 this.planContent = value;
    this.hmProperty["planContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 负责人/小组(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetResponsibleUser (value: string)
{
if (value  != undefined)
{
 this.responsibleUser = value;
    this.hmProperty["responsibleUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 开始日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStartDate (value: string)
{
if (value  != undefined)
{
 this.startDate = value;
    this.hmProperty["startDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 截止日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEndDate (value: string)
{
if (value  != undefined)
{
 this.endDate = value;
    this.hmProperty["endDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 实际完成日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetActualFinishingDate (value: string)
{
if (value  != undefined)
{
 this.actualFinishingDate = value;
    this.hmProperty["actualFinishingDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 验收用户(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAcceptanceUser (value: string)
{
if (value  != undefined)
{
 this.acceptanceUser = value;
    this.hmProperty["acceptanceUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否提交(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSubmit (value: boolean)
{
if (value  != undefined)
{
 this.isSubmit = value;
    this.hmProperty["isSubmit"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 计划类型(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPlanTypeId (value: string)
{
if (value  != undefined)
{
 this.planTypeId = value;
    this.hmProperty["planTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
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
case clsgs_ResearchPlanEN.con_PlanId:
return this.planId;
case clsgs_ResearchPlanEN.con_TopicId:
return this.topicId;
case clsgs_ResearchPlanEN.con_StatusId:
return this.statusId;
case clsgs_ResearchPlanEN.con_PlanContent:
return this.planContent;
case clsgs_ResearchPlanEN.con_ResponsibleUser:
return this.responsibleUser;
case clsgs_ResearchPlanEN.con_StartDate:
return this.startDate;
case clsgs_ResearchPlanEN.con_EndDate:
return this.endDate;
case clsgs_ResearchPlanEN.con_ActualFinishingDate:
return this.actualFinishingDate;
case clsgs_ResearchPlanEN.con_AcceptanceUser:
return this.acceptanceUser;
case clsgs_ResearchPlanEN.con_IsSubmit:
return this.isSubmit;
case clsgs_ResearchPlanEN.con_UpdUser:
return this.updUser;
case clsgs_ResearchPlanEN.con_UpdDate:
return this.updDate;
case clsgs_ResearchPlanEN.con_Memo:
return this.memo;
case clsgs_ResearchPlanEN.con_PlanTypeId:
return this.planTypeId;
case clsgs_ResearchPlanEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_ResearchPlan]中不存在!`;
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
case clsgs_ResearchPlanEN.con_PlanId:
this.planId = strValue;
    this.hmProperty["planId"] = true;
break;
case clsgs_ResearchPlanEN.con_TopicId:
this.topicId = strValue;
    this.hmProperty["topicId"] = true;
break;
case clsgs_ResearchPlanEN.con_StatusId:
this.statusId = strValue;
    this.hmProperty["statusId"] = true;
break;
case clsgs_ResearchPlanEN.con_PlanContent:
this.planContent = strValue;
    this.hmProperty["planContent"] = true;
break;
case clsgs_ResearchPlanEN.con_ResponsibleUser:
this.responsibleUser = strValue;
    this.hmProperty["responsibleUser"] = true;
break;
case clsgs_ResearchPlanEN.con_StartDate:
this.startDate = strValue;
    this.hmProperty["startDate"] = true;
break;
case clsgs_ResearchPlanEN.con_EndDate:
this.endDate = strValue;
    this.hmProperty["endDate"] = true;
break;
case clsgs_ResearchPlanEN.con_ActualFinishingDate:
this.actualFinishingDate = strValue;
    this.hmProperty["actualFinishingDate"] = true;
break;
case clsgs_ResearchPlanEN.con_AcceptanceUser:
this.acceptanceUser = strValue;
    this.hmProperty["acceptanceUser"] = true;
break;
case clsgs_ResearchPlanEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
    this.hmProperty["isSubmit"] = true;
break;
case clsgs_ResearchPlanEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsgs_ResearchPlanEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsgs_ResearchPlanEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsgs_ResearchPlanEN.con_PlanTypeId:
this.planTypeId = strValue;
    this.hmProperty["planTypeId"] = true;
break;
case clsgs_ResearchPlanEN.con_IdCurrEduCls:
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
strMsg = `字段名:[${strFldName}]在表对象:[gs_ResearchPlan]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public statusId = "";    //状态Id
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
public idCurrEduCls = "";    //教学班流水号


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
 * 常量:"StatusId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StatusId(): string {return "statusId";}    //状态Id

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
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

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