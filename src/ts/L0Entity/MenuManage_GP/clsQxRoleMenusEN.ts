
 /**
 * 类名:clsQxRoleMenusEN
 * 表名:QxRoleMenus(00140007)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/10 01:27:37
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 角色菜单(QxRoleMenus)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxRoleMenusEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxRoleMenus"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["mId", "roleId", "qxPrjId", "cmPrjId", "menuSetId", "menuId", "isDisp", "updDate", "updUserId", "memo"];
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
private mlngmId = 0;    //流水号
private mstrRoleId = "";    //角色Id
private mstrQxPrjId = "";    //项目Id
private mstrCmPrjId = "";    //Cm项目Id
private mstrMenuSetId = "";    //菜单集Id
private mstrMenuId = "";    //菜单Id
private mbolIsDisp = false;    //是否显示
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetmId (value: number)
{
if (value  != undefined)
{
 this.mId = value;
    this.hmProperty["mId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 角色Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRoleId (value: string)
{
if (value  != undefined)
{
 this.roleId = value;
    this.hmProperty["roleId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQxPrjId (value: string)
{
if (value  != undefined)
{
 this.qxPrjId = value;
    this.hmProperty["qxPrjId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Cm项目Id(说明:;字段类型:char;字段长度:6;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCmPrjId (value: string)
{
if (value  != undefined)
{
 this.cmPrjId = value;
    this.hmProperty["cmPrjId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 菜单集Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMenuSetId (value: string)
{
if (value  != undefined)
{
 this.menuSetId = value;
    this.hmProperty["menuSetId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 菜单Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMenuId (value: string)
{
if (value  != undefined)
{
 this.menuId = value;
    this.hmProperty["menuId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDisp (value: boolean)
{
if (value  != undefined)
{
 this.isDisp = value;
    this.hmProperty["isDisp"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
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
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
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
case clsQxRoleMenusEN.con_mId:
return this.mId;
case clsQxRoleMenusEN.con_RoleId:
return this.roleId;
case clsQxRoleMenusEN.con_QxPrjId:
return this.qxPrjId;
case clsQxRoleMenusEN.con_CmPrjId:
return this.cmPrjId;
case clsQxRoleMenusEN.con_MenuSetId:
return this.menuSetId;
case clsQxRoleMenusEN.con_MenuId:
return this.menuId;
case clsQxRoleMenusEN.con_IsDisp:
return this.isDisp;
case clsQxRoleMenusEN.con_UpdDate:
return this.updDate;
case clsQxRoleMenusEN.con_UpdUserId:
return this.updUserId;
case clsQxRoleMenusEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxRoleMenus]中不存在!`;
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
case clsQxRoleMenusEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsQxRoleMenusEN.con_RoleId:
this.roleId = strValue;
    this.hmProperty["roleId"] = true;
break;
case clsQxRoleMenusEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxRoleMenusEN.con_CmPrjId:
this.cmPrjId = strValue;
    this.hmProperty["cmPrjId"] = true;
break;
case clsQxRoleMenusEN.con_MenuSetId:
this.menuSetId = strValue;
    this.hmProperty["menuSetId"] = true;
break;
case clsQxRoleMenusEN.con_MenuId:
this.menuId = strValue;
    this.hmProperty["menuId"] = true;
break;
case clsQxRoleMenusEN.con_IsDisp:
this.isDisp = Boolean(strValue);
    this.hmProperty["isDisp"] = true;
break;
case clsQxRoleMenusEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxRoleMenusEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsQxRoleMenusEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxRoleMenus]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //流水号
public roleId = "";    //角色Id
public qxPrjId = "";    //项目Id
public cmPrjId = "";    //Cm项目Id
public menuSetId = "";    //菜单集Id
public menuId = "";    //菜单Id
public isDisp = false;    //是否显示
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //流水号

 /**
 * 常量:"RoleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RoleId(): string {return "roleId";}    //角色Id

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"CmPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CmPrjId(): string {return "cmPrjId";}    //Cm项目Id

 /**
 * 常量:"MenuSetId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuSetId(): string {return "menuSetId";}    //菜单集Id

 /**
 * 常量:"MenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuId(): string {return "menuId";}    //菜单Id

 /**
 * 常量:"IsDisp"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDisp(): string {return "isDisp";}    //是否显示

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

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