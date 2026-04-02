
 /**
 * 类名:clsgs_MeetingMinutesVerEN
 * 表名:gs_MeetingMinutesVer(01120769)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:41
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
 * 会议纪要历史版(gs_MeetingMinutesVer)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_MeetingMinutesVerEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_MeetingMinutesVer"; //当前表名,与该类相关的表名
public static _KeyFldName= "MeetingVId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["meetingVId", "meetingId", "topicId", "isSubmit", "meetingContent", "meetingDate", "updDate", "updUser", "year", "month", "memo", "participants"];
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
private mlngMeetingVId = 0;    //MeetingVId
private mstrMeetingId = "";    //会议Id
private mstrTopicId = "";    //主题Id
private mbolIsSubmit = false;    //是否提交
private mstrMeetingContent = "";    //会议内容
private mstrMeetingDate = "";    //会议日期
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrYear = "";    //年
private mstrMonth = "";    //月
private mstrMemo = "";    //备注
private mstrParticipants = "";    //参会者

/**
 * MeetingVId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMeetingVId (value: number)
{
if (value  != undefined)
{
 this.meetingVId = value;
    this.hmProperty["meetingVId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 会议Id(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMeetingId (value: string)
{
if (value  != undefined)
{
 this.meetingId = value;
    this.hmProperty["meetingId"] = true;
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
 * 会议内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMeetingContent (value: string)
{
if (value  != undefined)
{
 this.meetingContent = value;
    this.hmProperty["meetingContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 会议日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMeetingDate (value: string)
{
if (value  != undefined)
{
 this.meetingDate = value;
    this.hmProperty["meetingDate"] = true;
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
 * 参会者(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetParticipants (value: string)
{
if (value  != undefined)
{
 this.participants = value;
    this.hmProperty["participants"] = true;
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
case clsgs_MeetingMinutesVerEN.con_MeetingVId:
return this.meetingVId;
case clsgs_MeetingMinutesVerEN.con_MeetingId:
return this.meetingId;
case clsgs_MeetingMinutesVerEN.con_TopicId:
return this.topicId;
case clsgs_MeetingMinutesVerEN.con_IsSubmit:
return this.isSubmit;
case clsgs_MeetingMinutesVerEN.con_MeetingContent:
return this.meetingContent;
case clsgs_MeetingMinutesVerEN.con_MeetingDate:
return this.meetingDate;
case clsgs_MeetingMinutesVerEN.con_UpdDate:
return this.updDate;
case clsgs_MeetingMinutesVerEN.con_UpdUser:
return this.updUser;
case clsgs_MeetingMinutesVerEN.con_Year:
return this.year;
case clsgs_MeetingMinutesVerEN.con_Month:
return this.month;
case clsgs_MeetingMinutesVerEN.con_Memo:
return this.memo;
case clsgs_MeetingMinutesVerEN.con_Participants:
return this.participants;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_MeetingMinutesVer]中不存在!`;
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
case clsgs_MeetingMinutesVerEN.con_MeetingVId:
this.meetingVId = Number(strValue);
    this.hmProperty["meetingVId"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_MeetingId:
this.meetingId = strValue;
    this.hmProperty["meetingId"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_TopicId:
this.topicId = strValue;
    this.hmProperty["topicId"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
    this.hmProperty["isSubmit"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_MeetingContent:
this.meetingContent = strValue;
    this.hmProperty["meetingContent"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_MeetingDate:
this.meetingDate = strValue;
    this.hmProperty["meetingDate"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_Year:
this.year = strValue;
    this.hmProperty["year"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_Month:
this.month = strValue;
    this.hmProperty["month"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsgs_MeetingMinutesVerEN.con_Participants:
this.participants = strValue;
    this.hmProperty["participants"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_MeetingMinutesVer]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public meetingVId = 0;    //MeetingVId
public meetingId = "";    //会议Id
public topicId = "";    //主题Id
public isSubmit = false;    //是否提交
public meetingContent = "";    //会议内容
public meetingDate = "";    //会议日期
public updDate = "";    //修改日期
public updUser = "";    //修改人
public year = "";    //年
public month = "";    //月
public memo = "";    //备注
public participants = "";    //参会者


 /**
 * 常量:"MeetingVId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MeetingVId(): string {return "meetingVId";}    //MeetingVId

 /**
 * 常量:"MeetingId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MeetingId(): string {return "meetingId";}    //会议Id

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
 * 常量:"MeetingContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MeetingContent(): string {return "meetingContent";}    //会议内容

 /**
 * 常量:"MeetingDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MeetingDate(): string {return "meetingDate";}    //会议日期

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
 * 常量:"Participants"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Participants(): string {return "participants";}    //参会者

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