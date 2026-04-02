
 /**
 * 类名:clsQxPrjPotenceENEx
 * 表名:QxPrjPotence(00140005)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/20 23:58:38
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 工程权限(QxPrjPotence)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxPrjPotenceEN } from "@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN";

export class  clsQxPrjPotenceENEx extends clsQxPrjPotenceEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsQxPrjPotenceENEx.con_FuncModuleName:
return this.funcModuleName;
case clsQxPrjPotenceENEx.con_PotenceTypeName:
return this.potenceTypeName;
case clsQxPrjPotenceENEx.con_DateTimeSim:
return this.dateTimeSim;
case clsQxPrjPotenceENEx.con_MenuName:
return this.menuName;
case clsQxPrjPotenceENEx.con_RoleNames:
return this.roleNames;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"FuncModuleName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_FuncModuleName(): string {return "funcModuleName";}    //模块名

 /**
 * 常量:"PotenceTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_PotenceTypeName(): string {return "potenceTypeName";}    //权限类型名

 /**
 * 常量:"DateTimeSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DateTimeSim(): string {return "dateTimeSim";}    //简化日期时间

 /**
 * 常量:"MenuName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_MenuName(): string {return "menuName";}    //菜单名

 /**
 * 常量:"RoleNames"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_RoleNames(): string {return "roleNames";}    //上级菜单名

public funcModuleName = "";    //模块名
public potenceTypeName = "";    //权限类型名
public dateTimeSim = "";    //简化日期时间
public menuName = "";    //菜单名
public roleNames = "";    //上级菜单名
}