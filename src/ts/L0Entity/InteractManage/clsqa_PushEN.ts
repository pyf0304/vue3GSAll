
 /**
 * 类名:clsqa_PushEN
 * 表名:qa_Push(01120640)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:25
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 答疑推送(qa_Push)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsqa_PushEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "qa_Push"; //当前表名,与该类相关的表名
public static _KeyFldName= "PushId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["pushId", "questionsId", "receiveUser", "receiveDate", "isReceive", "updDate", "memo", "idCurrEduCls", "isReply", "isRequestReply", "replyDate"];
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
private mlngPushId = 0;    //推送d
private mstrQuestionsId = "";    //提问Id
private mstrReceiveUser = "";    //接收用户
private mstrReceiveDate = "";    //接收日期
private mbolIsReceive = false;    //是否接收
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注
private mstrIdCurrEduCls = "";    //教学班流水号
private mbolIsReply = false;    //是否回复
private mbolIsRequestReply = false;    //是否要求回复
private mstrReplyDate = "";    //回复日期

/**
 * 推送d(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPushId (value: number)
{
if (value  != undefined)
{
 this.pushId = value;
    this.hmProperty["pushId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 提问Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionsId (value: string)
{
if (value  != undefined)
{
 this.questionsId = value;
    this.hmProperty["questionsId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 接收用户(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetReceiveUser (value: string)
{
if (value  != undefined)
{
 this.receiveUser = value;
    this.hmProperty["receiveUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 接收日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetReceiveDate (value: string)
{
if (value  != undefined)
{
 this.receiveDate = value;
    this.hmProperty["receiveDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否接收(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsReceive (value: boolean)
{
if (value  != undefined)
{
 this.isReceive = value;
    this.hmProperty["isReceive"] = true;
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
 * 是否回复(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsReply (value: boolean)
{
if (value  != undefined)
{
 this.isReply = value;
    this.hmProperty["isReply"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否要求回复(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRequestReply (value: boolean)
{
if (value  != undefined)
{
 this.isRequestReply = value;
    this.hmProperty["isRequestReply"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回复日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetReplyDate (value: string)
{
if (value  != undefined)
{
 this.replyDate = value;
    this.hmProperty["replyDate"] = true;
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
case clsqa_PushEN.con_PushId:
return this.pushId;
case clsqa_PushEN.con_QuestionsId:
return this.questionsId;
case clsqa_PushEN.con_ReceiveUser:
return this.receiveUser;
case clsqa_PushEN.con_ReceiveDate:
return this.receiveDate;
case clsqa_PushEN.con_IsReceive:
return this.isReceive;
case clsqa_PushEN.con_UpdDate:
return this.updDate;
case clsqa_PushEN.con_Memo:
return this.memo;
case clsqa_PushEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsqa_PushEN.con_IsReply:
return this.isReply;
case clsqa_PushEN.con_IsRequestReply:
return this.isRequestReply;
case clsqa_PushEN.con_ReplyDate:
return this.replyDate;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[qa_Push]中不存在!`;
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
case clsqa_PushEN.con_PushId:
this.pushId = Number(strValue);
    this.hmProperty["pushId"] = true;
break;
case clsqa_PushEN.con_QuestionsId:
this.questionsId = strValue;
    this.hmProperty["questionsId"] = true;
break;
case clsqa_PushEN.con_ReceiveUser:
this.receiveUser = strValue;
    this.hmProperty["receiveUser"] = true;
break;
case clsqa_PushEN.con_ReceiveDate:
this.receiveDate = strValue;
    this.hmProperty["receiveDate"] = true;
break;
case clsqa_PushEN.con_IsReceive:
this.isReceive = Boolean(strValue);
    this.hmProperty["isReceive"] = true;
break;
case clsqa_PushEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsqa_PushEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsqa_PushEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsqa_PushEN.con_IsReply:
this.isReply = Boolean(strValue);
    this.hmProperty["isReply"] = true;
break;
case clsqa_PushEN.con_IsRequestReply:
this.isRequestReply = Boolean(strValue);
    this.hmProperty["isRequestReply"] = true;
break;
case clsqa_PushEN.con_ReplyDate:
this.replyDate = strValue;
    this.hmProperty["replyDate"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[qa_Push]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public pushId = 0;    //推送d
public questionsId = "";    //提问Id
public receiveUser = "";    //接收用户
public receiveDate = "";    //接收日期
public isReceive = false;    //是否接收
public updDate = "";    //修改日期
public memo = "";    //备注
public idCurrEduCls = "";    //教学班流水号
public isReply = false;    //是否回复
public isRequestReply = false;    //是否要求回复
public replyDate = "";    //回复日期


 /**
 * 常量:"PushId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PushId(): string {return "pushId";}    //推送d

 /**
 * 常量:"QuestionsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsId(): string {return "questionsId";}    //提问Id

 /**
 * 常量:"ReceiveUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReceiveUser(): string {return "receiveUser";}    //接收用户

 /**
 * 常量:"ReceiveDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReceiveDate(): string {return "receiveDate";}    //接收日期

 /**
 * 常量:"IsReceive"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsReceive(): string {return "isReceive";}    //是否接收

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
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"IsReply"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsReply(): string {return "isReply";}    //是否回复

 /**
 * 常量:"IsRequestReply"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsRequestReply(): string {return "isRequestReply";}    //是否要求回复

 /**
 * 常量:"ReplyDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReplyDate(): string {return "replyDate";}    //回复日期

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