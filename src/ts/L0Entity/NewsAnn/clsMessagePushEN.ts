
 /**
 * 类名:clsMessagePushEN
 * 表名:MessagePush(01120280)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:23
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 消息推送(MessagePush)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsMessagePushEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "MessagePush"; //当前表名,与该类相关的表名
public static _KeyFldName= "MessagePushId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["messagePushId", "messagePushNumber", "messageTitle", "messageContent", "receivePeople", "messageTypeId", "isAllpush", "isReceive", "clientVersionTypeId", "updDate", "memo"];
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
private mstrMessagePushId = "";    //消息Id
private mstrMessagePushNumber = "";    //消息编号
private mstrMessageTitle = "";    //消息标题
private mstrMessageContent = "";    //消息内容
private mstrReceivePeople = "";    //接收人员
private mstrMessageTypeId = "";    //消息类型Id
private mbolIsAllpush = false;    //是否全体推送
private mbolIsReceive = false;    //是否接收
private mstrClientVersionTypeId = "";    //客户端版本类型Id
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注

/**
 * 消息Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMessagePushId (value: string)
{
if (value  != undefined)
{
 this.messagePushId = value;
    this.hmProperty["messagePushId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 消息编号(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMessagePushNumber (value: string)
{
if (value  != undefined)
{
 this.messagePushNumber = value;
    this.hmProperty["messagePushNumber"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 消息标题(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMessageTitle (value: string)
{
if (value  != undefined)
{
 this.messageTitle = value;
    this.hmProperty["messageTitle"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 消息内容(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMessageContent (value: string)
{
if (value  != undefined)
{
 this.messageContent = value;
    this.hmProperty["messageContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 接收人员(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetReceivePeople (value: string)
{
if (value  != undefined)
{
 this.receivePeople = value;
    this.hmProperty["receivePeople"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 消息类型Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMessageTypeId (value: string)
{
if (value  != undefined)
{
 this.messageTypeId = value;
    this.hmProperty["messageTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否全体推送(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAllpush (value: boolean)
{
if (value  != undefined)
{
 this.isAllpush = value;
    this.hmProperty["isAllpush"] = true;
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
 * 客户端版本类型Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClientVersionTypeId (value: string)
{
if (value  != undefined)
{
 this.clientVersionTypeId = value;
    this.hmProperty["clientVersionTypeId"] = true;
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
case clsMessagePushEN.con_MessagePushId:
return this.messagePushId;
case clsMessagePushEN.con_MessagePushNumber:
return this.messagePushNumber;
case clsMessagePushEN.con_MessageTitle:
return this.messageTitle;
case clsMessagePushEN.con_MessageContent:
return this.messageContent;
case clsMessagePushEN.con_ReceivePeople:
return this.receivePeople;
case clsMessagePushEN.con_MessageTypeId:
return this.messageTypeId;
case clsMessagePushEN.con_IsAllpush:
return this.isAllpush;
case clsMessagePushEN.con_IsReceive:
return this.isReceive;
case clsMessagePushEN.con_ClientVersionTypeId:
return this.clientVersionTypeId;
case clsMessagePushEN.con_UpdDate:
return this.updDate;
case clsMessagePushEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[MessagePush]中不存在!`;
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
case clsMessagePushEN.con_MessagePushId:
this.messagePushId = strValue;
    this.hmProperty["messagePushId"] = true;
break;
case clsMessagePushEN.con_MessagePushNumber:
this.messagePushNumber = strValue;
    this.hmProperty["messagePushNumber"] = true;
break;
case clsMessagePushEN.con_MessageTitle:
this.messageTitle = strValue;
    this.hmProperty["messageTitle"] = true;
break;
case clsMessagePushEN.con_MessageContent:
this.messageContent = strValue;
    this.hmProperty["messageContent"] = true;
break;
case clsMessagePushEN.con_ReceivePeople:
this.receivePeople = strValue;
    this.hmProperty["receivePeople"] = true;
break;
case clsMessagePushEN.con_MessageTypeId:
this.messageTypeId = strValue;
    this.hmProperty["messageTypeId"] = true;
break;
case clsMessagePushEN.con_IsAllpush:
this.isAllpush = Boolean(strValue);
    this.hmProperty["isAllpush"] = true;
break;
case clsMessagePushEN.con_IsReceive:
this.isReceive = Boolean(strValue);
    this.hmProperty["isReceive"] = true;
break;
case clsMessagePushEN.con_ClientVersionTypeId:
this.clientVersionTypeId = strValue;
    this.hmProperty["clientVersionTypeId"] = true;
break;
case clsMessagePushEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsMessagePushEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[MessagePush]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public messagePushId = "";    //消息Id
public messagePushNumber = "";    //消息编号
public messageTitle = "";    //消息标题
public messageContent = "";    //消息内容
public receivePeople = "";    //接收人员
public messageTypeId = "";    //消息类型Id
public isAllpush = false;    //是否全体推送
public isReceive = false;    //是否接收
public clientVersionTypeId = "";    //客户端版本类型Id
public updDate = "";    //修改日期
public memo = "";    //备注


 /**
 * 常量:"MessagePushId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MessagePushId(): string {return "messagePushId";}    //消息Id

 /**
 * 常量:"MessagePushNumber"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MessagePushNumber(): string {return "messagePushNumber";}    //消息编号

 /**
 * 常量:"MessageTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MessageTitle(): string {return "messageTitle";}    //消息标题

 /**
 * 常量:"MessageContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MessageContent(): string {return "messageContent";}    //消息内容

 /**
 * 常量:"ReceivePeople"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReceivePeople(): string {return "receivePeople";}    //接收人员

 /**
 * 常量:"MessageTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MessageTypeId(): string {return "messageTypeId";}    //消息类型Id

 /**
 * 常量:"IsAllpush"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsAllpush(): string {return "isAllpush";}    //是否全体推送

 /**
 * 常量:"IsReceive"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsReceive(): string {return "isReceive";}    //是否接收

 /**
 * 常量:"ClientVersionTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ClientVersionTypeId(): string {return "clientVersionTypeId";}    //客户端版本类型Id

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