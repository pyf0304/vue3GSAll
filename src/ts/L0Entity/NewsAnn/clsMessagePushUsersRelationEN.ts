
 /**
 * 类名:clsMessagePushUsersRelationEN
 * 表名:MessagePushUsersRelation(01120284)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:23
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
 * 消息推送与用户关系(MessagePushUsersRelation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsMessagePushUsersRelationEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "MessagePushUsersRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "MessagePushUsersRelationId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["messagePushUsersRelationId", "messagePushId", "receivePeople", "isReceive", "createTime", "memo"];
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
private mlngMessagePushUsersRelationId = 0;    //消息推送用户关系Id
private mstrMessagePushId = "";    //消息Id
private mstrReceivePeople = "";    //接收人员
private mbolIsReceive = false;    //是否接收
private mstrCreateTime = "";    //建立时间
private mstrMemo = "";    //备注

/**
 * 消息推送用户关系Id(说明:;字段类型:bigint identity;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMessagePushUsersRelationId (value: number)
{
if (value  != undefined)
{
 this.messagePushUsersRelationId = value;
    this.hmProperty["messagePushUsersRelationId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 建立时间(说明:;字段类型:varchar;字段长度:16;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateTime (value: string)
{
if (value  != undefined)
{
 this.createTime = value;
    this.hmProperty["createTime"] = true;
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
case clsMessagePushUsersRelationEN.con_MessagePushUsersRelationId:
return this.messagePushUsersRelationId;
case clsMessagePushUsersRelationEN.con_MessagePushId:
return this.messagePushId;
case clsMessagePushUsersRelationEN.con_ReceivePeople:
return this.receivePeople;
case clsMessagePushUsersRelationEN.con_IsReceive:
return this.isReceive;
case clsMessagePushUsersRelationEN.con_CreateTime:
return this.createTime;
case clsMessagePushUsersRelationEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[MessagePushUsersRelation]中不存在!`;
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
case clsMessagePushUsersRelationEN.con_MessagePushUsersRelationId:
this.messagePushUsersRelationId = Number(strValue);
    this.hmProperty["messagePushUsersRelationId"] = true;
break;
case clsMessagePushUsersRelationEN.con_MessagePushId:
this.messagePushId = strValue;
    this.hmProperty["messagePushId"] = true;
break;
case clsMessagePushUsersRelationEN.con_ReceivePeople:
this.receivePeople = strValue;
    this.hmProperty["receivePeople"] = true;
break;
case clsMessagePushUsersRelationEN.con_IsReceive:
this.isReceive = Boolean(strValue);
    this.hmProperty["isReceive"] = true;
break;
case clsMessagePushUsersRelationEN.con_CreateTime:
this.createTime = strValue;
    this.hmProperty["createTime"] = true;
break;
case clsMessagePushUsersRelationEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[MessagePushUsersRelation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public messagePushUsersRelationId = 0;    //消息推送用户关系Id
public messagePushId = "";    //消息Id
public receivePeople = "";    //接收人员
public isReceive = false;    //是否接收
public createTime = "";    //建立时间
public memo = "";    //备注


 /**
 * 常量:"MessagePushUsersRelationId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MessagePushUsersRelationId(): string {return "messagePushUsersRelationId";}    //消息推送用户关系Id

 /**
 * 常量:"MessagePushId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MessagePushId(): string {return "messagePushId";}    //消息Id

 /**
 * 常量:"ReceivePeople"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReceivePeople(): string {return "receivePeople";}    //接收人员

 /**
 * 常量:"IsReceive"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsReceive(): string {return "isReceive";}    //是否接收

 /**
 * 常量:"CreateTime"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CreateTime(): string {return "createTime";}    //建立时间

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