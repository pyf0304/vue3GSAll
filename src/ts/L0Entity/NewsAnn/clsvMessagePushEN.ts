
 /**
 * 类名:clsvMessagePushEN
 * 表名:vMessagePush(01120282)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:58
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
 * 消息推送视图(vMessagePush)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvMessagePushEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vMessagePush"; //当前表名,与该类相关的表名
public static _KeyFldName= "MessagePushId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["messagePushId", "messagePushNumber", "messageTitle", "messageContent", "receivePeople", "messageTypeId", "messageTypeName", "isAllpush", "isReceive", "clientVersionTypeId", "updDate", "memo"];
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
case clsvMessagePushEN.con_MessagePushId:
return this.messagePushId;
case clsvMessagePushEN.con_MessagePushNumber:
return this.messagePushNumber;
case clsvMessagePushEN.con_MessageTitle:
return this.messageTitle;
case clsvMessagePushEN.con_MessageContent:
return this.messageContent;
case clsvMessagePushEN.con_ReceivePeople:
return this.receivePeople;
case clsvMessagePushEN.con_MessageTypeId:
return this.messageTypeId;
case clsvMessagePushEN.con_MessageTypeName:
return this.messageTypeName;
case clsvMessagePushEN.con_IsAllpush:
return this.isAllpush;
case clsvMessagePushEN.con_IsReceive:
return this.isReceive;
case clsvMessagePushEN.con_ClientVersionTypeId:
return this.clientVersionTypeId;
case clsvMessagePushEN.con_UpdDate:
return this.updDate;
case clsvMessagePushEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vMessagePush]中不存在!`;
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
case clsvMessagePushEN.con_MessagePushId:
this.messagePushId = strValue;
break;
case clsvMessagePushEN.con_MessagePushNumber:
this.messagePushNumber = strValue;
break;
case clsvMessagePushEN.con_MessageTitle:
this.messageTitle = strValue;
break;
case clsvMessagePushEN.con_MessageContent:
this.messageContent = strValue;
break;
case clsvMessagePushEN.con_ReceivePeople:
this.receivePeople = strValue;
break;
case clsvMessagePushEN.con_MessageTypeId:
this.messageTypeId = strValue;
break;
case clsvMessagePushEN.con_MessageTypeName:
this.messageTypeName = strValue;
break;
case clsvMessagePushEN.con_IsAllpush:
this.isAllpush = Boolean(strValue);
break;
case clsvMessagePushEN.con_IsReceive:
this.isReceive = Boolean(strValue);
break;
case clsvMessagePushEN.con_ClientVersionTypeId:
this.clientVersionTypeId = strValue;
break;
case clsvMessagePushEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvMessagePushEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vMessagePush]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public messageTypeName = "";    //消息类型名称
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
 * 常量:"MessageTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MessageTypeName(): string {return "messageTypeName";}    //消息类型名称

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