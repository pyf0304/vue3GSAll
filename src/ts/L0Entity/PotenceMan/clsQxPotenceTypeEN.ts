
 /**
 * 类名:clsQxPotenceTypeEN
 * 表名:QxPotenceType(00140003)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/20 11:45:16
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 权限类型(QxPotenceType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxPotenceTypeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxPotenceType"; //当前表名,与该类相关的表名
public static _KeyFldName= "PotenceTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["potenceTypeId", "potenceTypeName", "qxPrjId", "funcModuleId", "menuId", "viewId", "isVisible", "updDate", "updUserId", "memo"];
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
private mstrPotenceTypeId = "";    //权限类型Id
private mstrPotenceTypeName = "";    //权限类型名
private mstrQxPrjId = "";    //项目Id
private mstrFuncModuleId = "";    //模块Id
private mstrMenuId = "";    //菜单Id
private mstrViewId = "";    //界面编号
private mbolIsVisible = false;    //是否显示
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 权限类型Id(说明:;字段类型:char;字段长度:6;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPotenceTypeId (value: string)
{
if (value  != undefined)
{
 this.potenceTypeId = value;
    this.hmProperty["potenceTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 权限类型名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPotenceTypeName (value: string)
{
if (value  != undefined)
{
 this.potenceTypeName = value;
    this.hmProperty["potenceTypeName"] = true;
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
 * 模块Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleId (value: string)
{
if (value  != undefined)
{
 this.funcModuleId = value;
    this.hmProperty["funcModuleId"] = true;
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
 * 界面编号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewId (value: string)
{
if (value  != undefined)
{
 this.viewId = value;
    this.hmProperty["viewId"] = true;
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
case clsQxPotenceTypeEN.con_PotenceTypeId:
return this.potenceTypeId;
case clsQxPotenceTypeEN.con_PotenceTypeName:
return this.potenceTypeName;
case clsQxPotenceTypeEN.con_QxPrjId:
return this.qxPrjId;
case clsQxPotenceTypeEN.con_FuncModuleId:
return this.funcModuleId;
case clsQxPotenceTypeEN.con_MenuId:
return this.menuId;
case clsQxPotenceTypeEN.con_ViewId:
return this.viewId;
case clsQxPotenceTypeEN.con_IsVisible:
return this.isVisible;
case clsQxPotenceTypeEN.con_UpdDate:
return this.updDate;
case clsQxPotenceTypeEN.con_UpdUserId:
return this.updUserId;
case clsQxPotenceTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxPotenceType]中不存在!`;
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
case clsQxPotenceTypeEN.con_PotenceTypeId:
this.potenceTypeId = strValue;
    this.hmProperty["potenceTypeId"] = true;
break;
case clsQxPotenceTypeEN.con_PotenceTypeName:
this.potenceTypeName = strValue;
    this.hmProperty["potenceTypeName"] = true;
break;
case clsQxPotenceTypeEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxPotenceTypeEN.con_FuncModuleId:
this.funcModuleId = strValue;
    this.hmProperty["funcModuleId"] = true;
break;
case clsQxPotenceTypeEN.con_MenuId:
this.menuId = strValue;
    this.hmProperty["menuId"] = true;
break;
case clsQxPotenceTypeEN.con_ViewId:
this.viewId = strValue;
    this.hmProperty["viewId"] = true;
break;
case clsQxPotenceTypeEN.con_IsVisible:
this.isVisible = Boolean(strValue);
    this.hmProperty["isVisible"] = true;
break;
case clsQxPotenceTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxPotenceTypeEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsQxPotenceTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxPotenceType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public potenceTypeId = "";    //权限类型Id
public potenceTypeName = "";    //权限类型名
public qxPrjId = "";    //项目Id
public funcModuleId = "";    //模块Id
public menuId = "";    //菜单Id
public viewId = "";    //界面编号
public isVisible = false;    //是否显示
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"PotenceTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceTypeId(): string {return "potenceTypeId";}    //权限类型Id

 /**
 * 常量:"PotenceTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceTypeName(): string {return "potenceTypeName";}    //权限类型名

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"FuncModuleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleId(): string {return "funcModuleId";}    //模块Id

 /**
 * 常量:"MenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuId(): string {return "menuId";}    //菜单Id

 /**
 * 常量:"ViewId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewId(): string {return "viewId";}    //界面编号

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

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