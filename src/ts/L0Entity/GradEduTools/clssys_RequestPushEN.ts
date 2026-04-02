
 /**
 * 类名:clssys_RequestPushEN
 * 表名:sys_RequestPush(01120726)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:59
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 请求推送表(sys_RequestPush)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clssys_RequestPushEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "sys_RequestPush"; //当前表名,与该类相关的表名
public static _KeyFldName= "RequestId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["requestId", "requesTypeId", "tableKey", "receiveUser", "isReply", "replyDate", "requestUser", "requestDate", "requestStata", "memo", "idCurrEduCls", "pushTypeId"];
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
private mlngRequestId = 0;    //RequestId
private mstrRequesTypeId = "";    //请求类型Id
private mstrTableKey = "";    //表主键
private mstrReceiveUser = "";    //接收用户
private mbolIsReply = false;    //是否回复
private mstrReplyDate = "";    //回复日期
private mstrRequestUser = "";    //RequestUser
private mstrRequestDate = "";    //RequestDate
private mstrRequestStata = "";    //RequestStata
private mstrMemo = "";    //备注
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrPushTypeId = "";    //推送类型Id

/**
 * RequestId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRequestId (value: number)
{
if (value  != undefined)
{
 this.requestId = value;
    this.hmProperty["requestId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 请求类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRequesTypeId (value: string)
{
if (value  != undefined)
{
 this.requesTypeId = value;
    this.hmProperty["requesTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 表主键(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTableKey (value: string)
{
if (value  != undefined)
{
 this.tableKey = value;
    this.hmProperty["tableKey"] = true;
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
 * RequestUser(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRequestUser (value: string)
{
if (value  != undefined)
{
 this.requestUser = value;
    this.hmProperty["requestUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * RequestDate(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRequestDate (value: string)
{
if (value  != undefined)
{
 this.requestDate = value;
    this.hmProperty["requestDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * RequestStata(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRequestStata (value: string)
{
if (value  != undefined)
{
 this.requestStata = value;
    this.hmProperty["requestStata"] = true;
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
 * 推送类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPushTypeId (value: string)
{
if (value  != undefined)
{
 this.pushTypeId = value;
    this.hmProperty["pushTypeId"] = true;
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
case clssys_RequestPushEN.con_RequestId:
return this.requestId;
case clssys_RequestPushEN.con_RequesTypeId:
return this.requesTypeId;
case clssys_RequestPushEN.con_TableKey:
return this.tableKey;
case clssys_RequestPushEN.con_ReceiveUser:
return this.receiveUser;
case clssys_RequestPushEN.con_IsReply:
return this.isReply;
case clssys_RequestPushEN.con_ReplyDate:
return this.replyDate;
case clssys_RequestPushEN.con_RequestUser:
return this.requestUser;
case clssys_RequestPushEN.con_RequestDate:
return this.requestDate;
case clssys_RequestPushEN.con_RequestStata:
return this.requestStata;
case clssys_RequestPushEN.con_Memo:
return this.memo;
case clssys_RequestPushEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clssys_RequestPushEN.con_PushTypeId:
return this.pushTypeId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[sys_RequestPush]中不存在!`;
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
case clssys_RequestPushEN.con_RequestId:
this.requestId = Number(strValue);
    this.hmProperty["requestId"] = true;
break;
case clssys_RequestPushEN.con_RequesTypeId:
this.requesTypeId = strValue;
    this.hmProperty["requesTypeId"] = true;
break;
case clssys_RequestPushEN.con_TableKey:
this.tableKey = strValue;
    this.hmProperty["tableKey"] = true;
break;
case clssys_RequestPushEN.con_ReceiveUser:
this.receiveUser = strValue;
    this.hmProperty["receiveUser"] = true;
break;
case clssys_RequestPushEN.con_IsReply:
this.isReply = Boolean(strValue);
    this.hmProperty["isReply"] = true;
break;
case clssys_RequestPushEN.con_ReplyDate:
this.replyDate = strValue;
    this.hmProperty["replyDate"] = true;
break;
case clssys_RequestPushEN.con_RequestUser:
this.requestUser = strValue;
    this.hmProperty["requestUser"] = true;
break;
case clssys_RequestPushEN.con_RequestDate:
this.requestDate = strValue;
    this.hmProperty["requestDate"] = true;
break;
case clssys_RequestPushEN.con_RequestStata:
this.requestStata = strValue;
    this.hmProperty["requestStata"] = true;
break;
case clssys_RequestPushEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clssys_RequestPushEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clssys_RequestPushEN.con_PushTypeId:
this.pushTypeId = strValue;
    this.hmProperty["pushTypeId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[sys_RequestPush]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public requestId = 0;    //RequestId
public requesTypeId = "";    //请求类型Id
public tableKey = "";    //表主键
public receiveUser = "";    //接收用户
public isReply = false;    //是否回复
public replyDate = "";    //回复日期
public requestUser = "";    //RequestUser
public requestDate = "";    //RequestDate
public requestStata = "";    //RequestStata
public memo = "";    //备注
public idCurrEduCls = "";    //教学班流水号
public pushTypeId = "";    //推送类型Id


 /**
 * 常量:"RequestId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RequestId(): string {return "requestId";}    //RequestId

 /**
 * 常量:"RequesTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RequesTypeId(): string {return "requesTypeId";}    //请求类型Id

 /**
 * 常量:"TableKey"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TableKey(): string {return "tableKey";}    //表主键

 /**
 * 常量:"ReceiveUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReceiveUser(): string {return "receiveUser";}    //接收用户

 /**
 * 常量:"IsReply"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsReply(): string {return "isReply";}    //是否回复

 /**
 * 常量:"ReplyDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReplyDate(): string {return "replyDate";}    //回复日期

 /**
 * 常量:"RequestUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RequestUser(): string {return "requestUser";}    //RequestUser

 /**
 * 常量:"RequestDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RequestDate(): string {return "requestDate";}    //RequestDate

 /**
 * 常量:"RequestStata"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RequestStata(): string {return "requestStata";}    //RequestStata

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
 * 常量:"PushTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PushTypeId(): string {return "pushTypeId";}    //推送类型Id

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