
 /**
 * 类名:clsgs_TobeStudiedProblemVerEN
 * 表名:gs_TobeStudiedProblemVer(01120775)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:40
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
 * 待研究问题历史版本表(gs_TobeStudiedProblemVer)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_TobeStudiedProblemVerEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_TobeStudiedProblemVer"; //当前表名,与该类相关的表名
public static _KeyFldName= "ProblemVId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["problemVId", "problemId", "topicId", "isSubmit", "problemContent", "problemDate", "participant", "updDate", "updUser", "year", "month", "memo", "problemTitle"];
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
private mlngProblemVId = 0;    //ProblemVId
private mstrProblemId = "";    //问题Id
private mstrTopicId = "";    //主题Id
private mbolIsSubmit = false;    //是否提交
private mstrProblemContent = "";    //问题内容
private mstrProblemDate = "";    //问题日期
private mstrParticipant = "";    //参与者
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrYear = "";    //年
private mstrMonth = "";    //月
private mstrMemo = "";    //备注
private mstrProblemTitle = "";    //问题标题

/**
 * ProblemVId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProblemVId (value: number)
{
if (value  != undefined)
{
 this.problemVId = value;
    this.hmProperty["problemVId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 问题Id(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProblemId (value: string)
{
if (value  != undefined)
{
 this.problemId = value;
    this.hmProperty["problemId"] = true;
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
 * 问题内容(说明:;字段类型:varchar;字段长度:5000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProblemContent (value: string)
{
if (value  != undefined)
{
 this.problemContent = value;
    this.hmProperty["problemContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 问题日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProblemDate (value: string)
{
if (value  != undefined)
{
 this.problemDate = value;
    this.hmProperty["problemDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 参与者(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetParticipant (value: string)
{
if (value  != undefined)
{
 this.participant = value;
    this.hmProperty["participant"] = true;
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
 * 年(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetYear (value: string)
{
if (value  != undefined)
{
 this.year = value;
    this.hmProperty["year"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 月(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMonth (value: string)
{
if (value  != undefined)
{
 this.month = value;
    this.hmProperty["month"] = true;
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
 * 问题标题(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProblemTitle (value: string)
{
if (value  != undefined)
{
 this.problemTitle = value;
    this.hmProperty["problemTitle"] = true;
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
case clsgs_TobeStudiedProblemVerEN.con_ProblemVId:
return this.problemVId;
case clsgs_TobeStudiedProblemVerEN.con_ProblemId:
return this.problemId;
case clsgs_TobeStudiedProblemVerEN.con_TopicId:
return this.topicId;
case clsgs_TobeStudiedProblemVerEN.con_IsSubmit:
return this.isSubmit;
case clsgs_TobeStudiedProblemVerEN.con_ProblemContent:
return this.problemContent;
case clsgs_TobeStudiedProblemVerEN.con_ProblemDate:
return this.problemDate;
case clsgs_TobeStudiedProblemVerEN.con_Participant:
return this.participant;
case clsgs_TobeStudiedProblemVerEN.con_UpdDate:
return this.updDate;
case clsgs_TobeStudiedProblemVerEN.con_UpdUser:
return this.updUser;
case clsgs_TobeStudiedProblemVerEN.con_Year:
return this.year;
case clsgs_TobeStudiedProblemVerEN.con_Month:
return this.month;
case clsgs_TobeStudiedProblemVerEN.con_Memo:
return this.memo;
case clsgs_TobeStudiedProblemVerEN.con_ProblemTitle:
return this.problemTitle;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_TobeStudiedProblemVer]中不存在!`;
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
case clsgs_TobeStudiedProblemVerEN.con_ProblemVId:
this.problemVId = Number(strValue);
    this.hmProperty["problemVId"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_ProblemId:
this.problemId = strValue;
    this.hmProperty["problemId"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_TopicId:
this.topicId = strValue;
    this.hmProperty["topicId"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
    this.hmProperty["isSubmit"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_ProblemContent:
this.problemContent = strValue;
    this.hmProperty["problemContent"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_ProblemDate:
this.problemDate = strValue;
    this.hmProperty["problemDate"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_Participant:
this.participant = strValue;
    this.hmProperty["participant"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_Year:
this.year = strValue;
    this.hmProperty["year"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_Month:
this.month = strValue;
    this.hmProperty["month"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsgs_TobeStudiedProblemVerEN.con_ProblemTitle:
this.problemTitle = strValue;
    this.hmProperty["problemTitle"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_TobeStudiedProblemVer]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public problemVId = 0;    //ProblemVId
public problemId = "";    //问题Id
public topicId = "";    //主题Id
public isSubmit = false;    //是否提交
public problemContent = "";    //问题内容
public problemDate = "";    //问题日期
public participant = "";    //参与者
public updDate = "";    //修改日期
public updUser = "";    //修改人
public year = "";    //年
public month = "";    //月
public memo = "";    //备注
public problemTitle = "";    //问题标题


 /**
 * 常量:"ProblemVId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProblemVId(): string {return "problemVId";}    //ProblemVId

 /**
 * 常量:"ProblemId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProblemId(): string {return "problemId";}    //问题Id

 /**
 * 常量:"TopicId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"ProblemContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProblemContent(): string {return "problemContent";}    //问题内容

 /**
 * 常量:"ProblemDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProblemDate(): string {return "problemDate";}    //问题日期

 /**
 * 常量:"Participant"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Participant(): string {return "participant";}    //参与者

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Year"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Year(): string {return "year";}    //年

 /**
 * 常量:"Month"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Month(): string {return "month";}    //月

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"ProblemTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProblemTitle(): string {return "problemTitle";}    //问题标题

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