
 /**
 * 类名:clsXzClgEN
 * 表名:XzClg(01120064)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 17:00:32
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 学院(XzClg)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsXzClgEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "XzClg"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdXzCollege"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["idXzCollege", "collegeId", "collegeName", "collegeIdInGP", "clgEnglishName", "collegeNameA", "userType", "phoneNumber", "webSite", "idSchool", "idUni", "isVisible4Tea", "isVisible", "orderNum", "modifyDate", "modifyUserId", "memo"];
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
private mstrIdXzCollege = "";    //学院流水号
private mstrCollegeId = "";    //学院ID
private mstrCollegeName = "";    //学院名称
private mstrCollegeIdInGP = "";    //CollegeIdInGP
private mstrClgEnglishName = "";    //ClgEnglishName
private mstrCollegeNameA = "";    //学院名称简写
private mstrUserType = "";    //用户类型
private mstrPhoneNumber = "";    //电话
private mstrWebSite = "";    //个人主页
private mstrIdSchool = "";    //学校流水号
private mstrIdUni = "";    //id_Uni
private mbolIsVisible4Tea = false;    //IsVisible4Tea
private mbolIsVisible = false;    //是否显示
private mintOrderNum = 0;    //序号
private mstrModifyDate = "";    //修改日期
private mstrModifyUserId = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 学院流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdXzCollege (value: string)
{
if (value  != undefined)
{
 this.idXzCollege = value;
    this.hmProperty["idXzCollege"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院ID(说明:;字段类型:varchar;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCollegeId (value: string)
{
if (value  != undefined)
{
 this.collegeId = value;
    this.hmProperty["collegeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCollegeName (value: string)
{
if (value  != undefined)
{
 this.collegeName = value;
    this.hmProperty["collegeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * CollegeIdInGP(说明:;字段类型:varchar;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCollegeIdInGP (value: string)
{
if (value  != undefined)
{
 this.collegeIdInGP = value;
    this.hmProperty["collegeIdInGP"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * ClgEnglishName(说明:;字段类型:varchar;字段长度:60;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClgEnglishName (value: string)
{
if (value  != undefined)
{
 this.clgEnglishName = value;
    this.hmProperty["clgEnglishName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院名称简写(说明:;字段类型:varchar;字段长度:12;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCollegeNameA (value: string)
{
if (value  != undefined)
{
 this.collegeNameA = value;
    this.hmProperty["collegeNameA"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户类型(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserType (value: string)
{
if (value  != undefined)
{
 this.userType = value;
    this.hmProperty["userType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 电话(说明:;字段类型:varchar;字段长度:15;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPhoneNumber (value: string)
{
if (value  != undefined)
{
 this.phoneNumber = value;
    this.hmProperty["phoneNumber"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 个人主页(说明:;字段类型:varchar;字段长度:60;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWebSite (value: string)
{
if (value  != undefined)
{
 this.webSite = value;
    this.hmProperty["webSite"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSchool (value: string)
{
if (value  != undefined)
{
 this.idSchool = value;
    this.hmProperty["idSchool"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * id_Uni(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdUni (value: string)
{
if (value  != undefined)
{
 this.idUni = value;
    this.hmProperty["idUni"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * IsVisible4Tea(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsVisible4Tea (value: boolean)
{
if (value  != undefined)
{
 this.isVisible4Tea = value;
    this.hmProperty["isVisible4Tea"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsVisible (value: boolean)
{
if (value  != undefined)
{
 this.isVisible = value;
    this.hmProperty["isVisible"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModifyDate (value: string)
{
if (value  != undefined)
{
 this.modifyDate = value;
    this.hmProperty["modifyDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModifyUserId (value: string)
{
if (value  != undefined)
{
 this.modifyUserId = value;
    this.hmProperty["modifyUserId"] = true;
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
case clsXzClgEN.con_IdXzCollege:
return this.idXzCollege;
case clsXzClgEN.con_CollegeId:
return this.collegeId;
case clsXzClgEN.con_CollegeName:
return this.collegeName;
case clsXzClgEN.con_CollegeIdInGP:
return this.collegeIdInGP;
case clsXzClgEN.con_ClgEnglishName:
return this.clgEnglishName;
case clsXzClgEN.con_CollegeNameA:
return this.collegeNameA;
case clsXzClgEN.con_UserType:
return this.userType;
case clsXzClgEN.con_PhoneNumber:
return this.phoneNumber;
case clsXzClgEN.con_WebSite:
return this.webSite;
case clsXzClgEN.con_IdSchool:
return this.idSchool;
case clsXzClgEN.con_IdUni:
return this.idUni;
case clsXzClgEN.con_IsVisible4Tea:
return this.isVisible4Tea;
case clsXzClgEN.con_IsVisible:
return this.isVisible;
case clsXzClgEN.con_OrderNum:
return this.orderNum;
case clsXzClgEN.con_ModifyDate:
return this.modifyDate;
case clsXzClgEN.con_ModifyUserId:
return this.modifyUserId;
case clsXzClgEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzClg]中不存在!`;
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
case clsXzClgEN.con_IdXzCollege:
this.idXzCollege = strValue;
    this.hmProperty["idXzCollege"] = true;
break;
case clsXzClgEN.con_CollegeId:
this.collegeId = strValue;
    this.hmProperty["collegeId"] = true;
break;
case clsXzClgEN.con_CollegeName:
this.collegeName = strValue;
    this.hmProperty["collegeName"] = true;
break;
case clsXzClgEN.con_CollegeIdInGP:
this.collegeIdInGP = strValue;
    this.hmProperty["collegeIdInGP"] = true;
break;
case clsXzClgEN.con_ClgEnglishName:
this.clgEnglishName = strValue;
    this.hmProperty["clgEnglishName"] = true;
break;
case clsXzClgEN.con_CollegeNameA:
this.collegeNameA = strValue;
    this.hmProperty["collegeNameA"] = true;
break;
case clsXzClgEN.con_UserType:
this.userType = strValue;
    this.hmProperty["userType"] = true;
break;
case clsXzClgEN.con_PhoneNumber:
this.phoneNumber = strValue;
    this.hmProperty["phoneNumber"] = true;
break;
case clsXzClgEN.con_WebSite:
this.webSite = strValue;
    this.hmProperty["webSite"] = true;
break;
case clsXzClgEN.con_IdSchool:
this.idSchool = strValue;
    this.hmProperty["idSchool"] = true;
break;
case clsXzClgEN.con_IdUni:
this.idUni = strValue;
    this.hmProperty["idUni"] = true;
break;
case clsXzClgEN.con_IsVisible4Tea:
this.isVisible4Tea = Boolean(strValue);
    this.hmProperty["isVisible4Tea"] = true;
break;
case clsXzClgEN.con_IsVisible:
this.isVisible = Boolean(strValue);
    this.hmProperty["isVisible"] = true;
break;
case clsXzClgEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsXzClgEN.con_ModifyDate:
this.modifyDate = strValue;
    this.hmProperty["modifyDate"] = true;
break;
case clsXzClgEN.con_ModifyUserId:
this.modifyUserId = strValue;
    this.hmProperty["modifyUserId"] = true;
break;
case clsXzClgEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[XzClg]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public collegeIdInGP = "";    //CollegeIdInGP
public clgEnglishName = "";    //ClgEnglishName
public collegeNameA = "";    //学院名称简写
public userType = "";    //用户类型
public phoneNumber = "";    //电话
public webSite = "";    //个人主页
public idSchool = "";    //学校流水号
public idUni = "";    //id_Uni
public isVisible4Tea = false;    //IsVisible4Tea
public isVisible = false;    //是否显示
public orderNum = 0;    //序号
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"CollegeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeId(): string {return "collegeId";}    //学院ID

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"CollegeIdInGP"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeIdInGP(): string {return "collegeIdInGP";}    //CollegeIdInGP

 /**
 * 常量:"ClgEnglishName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClgEnglishName(): string {return "clgEnglishName";}    //ClgEnglishName

 /**
 * 常量:"CollegeNameA"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeNameA(): string {return "collegeNameA";}    //学院名称简写

 /**
 * 常量:"UserType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"WebSite"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WebSite(): string {return "webSite";}    //个人主页

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"IdUni"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdUni(): string {return "idUni";}    //id_Uni

 /**
 * 常量:"IsVisible4Tea"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsVisible4Tea(): string {return "isVisible4Tea";}    //IsVisible4Tea

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
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