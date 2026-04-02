
 /**
 * 类名:clsQxUserIdentityEN
 * 表名:QxUserIdentity(01120922)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/19 11:14:29
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
 * 用户权限身份(QxUserIdentity)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxUserIdentityEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxUserIdentity"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdentityId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["identityId", "identityDesc", "identityEnName", "userType", "memo"];
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
private mstrIdentityId = "";    //身份Id
private mstrIdentityDesc = "";    //身份描述
private mstrIdentityEnName = "";    //身份英文名
private mstrUserType = "";    //用户类型
private mstrMemo = "";    //备注

/**
 * 身份Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdentityId (value: string)
{
if (value  != undefined)
{
 this.identityId = value;
    this.hmProperty["identityId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 身份描述(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdentityDesc (value: string)
{
if (value  != undefined)
{
 this.identityDesc = value;
    this.hmProperty["identityDesc"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 身份英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdentityEnName (value: string)
{
if (value  != undefined)
{
 this.identityEnName = value;
    this.hmProperty["identityEnName"] = true;
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
case clsQxUserIdentityEN.con_IdentityId:
return this.identityId;
case clsQxUserIdentityEN.con_IdentityDesc:
return this.identityDesc;
case clsQxUserIdentityEN.con_IdentityEnName:
return this.identityEnName;
case clsQxUserIdentityEN.con_UserType:
return this.userType;
case clsQxUserIdentityEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUserIdentity]中不存在!`;
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
case clsQxUserIdentityEN.con_IdentityId:
this.identityId = strValue;
    this.hmProperty["identityId"] = true;
break;
case clsQxUserIdentityEN.con_IdentityDesc:
this.identityDesc = strValue;
    this.hmProperty["identityDesc"] = true;
break;
case clsQxUserIdentityEN.con_IdentityEnName:
this.identityEnName = strValue;
    this.hmProperty["identityEnName"] = true;
break;
case clsQxUserIdentityEN.con_UserType:
this.userType = strValue;
    this.hmProperty["userType"] = true;
break;
case clsQxUserIdentityEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxUserIdentity]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public identityId = "";    //身份Id
public identityDesc = "";    //身份描述
public identityEnName = "";    //身份英文名
public userType = "";    //用户类型
public memo = "";    //备注


 /**
 * 常量:"IdentityId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdentityId(): string {return "identityId";}    //身份Id

 /**
 * 常量:"IdentityDesc"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdentityDesc(): string {return "identityDesc";}    //身份描述

 /**
 * 常量:"IdentityEnName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdentityEnName(): string {return "identityEnName";}    //身份英文名

 /**
 * 常量:"UserType"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型

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
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumQxUserIdentity
{
 /**
 * 未知
 **/
static readonly Unknown_00 = "00";
 /**
 * 大学管理员
 **/
static readonly University_Administrator_01 = "01";
 /**
 * 中学管理员
 **/
static readonly Secondary_School_Administrator_02 = "02";
 /**
 * 大学教师
 **/
static readonly University_Teacher_03 = "03";
 /**
 * 大学学生
 **/
static readonly University_Student_04 = "04";
 /**
 * 公司员工
 **/
static readonly Company_Employee_05 = "05";
 /**
 * 公司管理
 **/
static readonly Company_Management_06 = "06";
 /**
 * 中小学教师
 **/
static readonly K_12_Teacher_07 = "07";
 /**
 * 中小学学生
 **/
static readonly K_12_Student_08 = "08";
}