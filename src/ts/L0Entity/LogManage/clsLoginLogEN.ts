
 /**
 * 类名:clsLoginLogEN
 * 表名:LoginLog(01120357)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:03
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日志管理(LogManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 登录日志(LoginLog)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsLoginLogEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "LoginLog"; //当前表名,与该类相关的表名
public static _KeyFldName= "LoginLogId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["loginLogId", "loginLogNumber", "loginIP", "failReason", "loginResult", "loginTime", "loginUserId", "onlineTime", "outTime", "memo"];
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
private mlngLoginLogId = 0;    //LoginLogId
private mstrLoginLogNumber = "";    //LoginLogNumber
private mstrLoginIP = "";    //LoginIP
private mstrFailReason = "";    //FailReason
private mstrLoginResult = "";    //LoginResult
private mstrLoginTime = "";    //LoginTime
private mstrLoginUserId = "";    //LoginUserId
private mstrOnlineTime = "";    //OnlineTime
private mstrOutTime = "";    //OutTime
private mstrMemo = "";    //备注

/**
 * LoginLogId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLoginLogId (value: number)
{
if (value  != undefined)
{
 this.loginLogId = value;
    this.hmProperty["loginLogId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * LoginLogNumber(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLoginLogNumber (value: string)
{
if (value  != undefined)
{
 this.loginLogNumber = value;
    this.hmProperty["loginLogNumber"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * LoginIP(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLoginIP (value: string)
{
if (value  != undefined)
{
 this.loginIP = value;
    this.hmProperty["loginIP"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * FailReason(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFailReason (value: string)
{
if (value  != undefined)
{
 this.failReason = value;
    this.hmProperty["failReason"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * LoginResult(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLoginResult (value: string)
{
if (value  != undefined)
{
 this.loginResult = value;
    this.hmProperty["loginResult"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * LoginTime(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLoginTime (value: string)
{
if (value  != undefined)
{
 this.loginTime = value;
    this.hmProperty["loginTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * LoginUserId(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLoginUserId (value: string)
{
if (value  != undefined)
{
 this.loginUserId = value;
    this.hmProperty["loginUserId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * OnlineTime(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOnlineTime (value: string)
{
if (value  != undefined)
{
 this.onlineTime = value;
    this.hmProperty["onlineTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * OutTime(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOutTime (value: string)
{
if (value  != undefined)
{
 this.outTime = value;
    this.hmProperty["outTime"] = true;
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
case clsLoginLogEN.con_LoginLogId:
return this.loginLogId;
case clsLoginLogEN.con_LoginLogNumber:
return this.loginLogNumber;
case clsLoginLogEN.con_LoginIP:
return this.loginIP;
case clsLoginLogEN.con_FailReason:
return this.failReason;
case clsLoginLogEN.con_LoginResult:
return this.loginResult;
case clsLoginLogEN.con_LoginTime:
return this.loginTime;
case clsLoginLogEN.con_LoginUserId:
return this.loginUserId;
case clsLoginLogEN.con_OnlineTime:
return this.onlineTime;
case clsLoginLogEN.con_OutTime:
return this.outTime;
case clsLoginLogEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[LoginLog]中不存在!`;
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
case clsLoginLogEN.con_LoginLogId:
this.loginLogId = Number(strValue);
    this.hmProperty["loginLogId"] = true;
break;
case clsLoginLogEN.con_LoginLogNumber:
this.loginLogNumber = strValue;
    this.hmProperty["loginLogNumber"] = true;
break;
case clsLoginLogEN.con_LoginIP:
this.loginIP = strValue;
    this.hmProperty["loginIP"] = true;
break;
case clsLoginLogEN.con_FailReason:
this.failReason = strValue;
    this.hmProperty["failReason"] = true;
break;
case clsLoginLogEN.con_LoginResult:
this.loginResult = strValue;
    this.hmProperty["loginResult"] = true;
break;
case clsLoginLogEN.con_LoginTime:
this.loginTime = strValue;
    this.hmProperty["loginTime"] = true;
break;
case clsLoginLogEN.con_LoginUserId:
this.loginUserId = strValue;
    this.hmProperty["loginUserId"] = true;
break;
case clsLoginLogEN.con_OnlineTime:
this.onlineTime = strValue;
    this.hmProperty["onlineTime"] = true;
break;
case clsLoginLogEN.con_OutTime:
this.outTime = strValue;
    this.hmProperty["outTime"] = true;
break;
case clsLoginLogEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[LoginLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public loginLogId = 0;    //LoginLogId
public loginLogNumber = "";    //LoginLogNumber
public loginIP = "";    //LoginIP
public failReason = "";    //FailReason
public loginResult = "";    //LoginResult
public loginTime = "";    //LoginTime
public loginUserId = "";    //LoginUserId
public onlineTime = "";    //OnlineTime
public outTime = "";    //OutTime
public memo = "";    //备注


 /**
 * 常量:"LoginLogId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LoginLogId(): string {return "loginLogId";}    //LoginLogId

 /**
 * 常量:"LoginLogNumber"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LoginLogNumber(): string {return "loginLogNumber";}    //LoginLogNumber

 /**
 * 常量:"LoginIP"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LoginIP(): string {return "loginIP";}    //LoginIP

 /**
 * 常量:"FailReason"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_FailReason(): string {return "failReason";}    //FailReason

 /**
 * 常量:"LoginResult"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LoginResult(): string {return "loginResult";}    //LoginResult

 /**
 * 常量:"LoginTime"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LoginTime(): string {return "loginTime";}    //LoginTime

 /**
 * 常量:"LoginUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LoginUserId(): string {return "loginUserId";}    //LoginUserId

 /**
 * 常量:"OnlineTime"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OnlineTime(): string {return "onlineTime";}    //OnlineTime

 /**
 * 常量:"OutTime"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OutTime(): string {return "outTime";}    //OutTime

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