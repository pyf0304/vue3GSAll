
 /**
 * 类名:clsQxRoles
 * 表名:QxRoles(00140014)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/02 16:29:23
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 角色(QxRoles)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxRoles 
{
public static _CurrTabName= "QxRoles"; //当前表名,与该类相关的表名
public static _KeyFldName= "RoleId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["roleId", "roleName", "roleENName", "roleIndex", "qxPrjId", "isInUse", "updDate", "updUserId", "memo", "userType"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public roleId = "";    //角色Id
public roleName = "";    //角色名称
public roleENName = "";    //角色英文名
public roleIndex = 0;    //角色序号
public qxPrjId = "";    //项目Id
public isInUse = false;    //是否在使用
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注
public userType = "";    //用户类型

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsQxRoles.con_RoleId:
return this.roleId;
case clsQxRoles.con_RoleName:
return this.roleName;
case clsQxRoles.con_RoleENName:
return this.roleENName;
case clsQxRoles.con_RoleIndex:
return this.roleIndex;
case clsQxRoles.con_QxPrjId:
return this.qxPrjId;
case clsQxRoles.con_IsInUse:
return this.isInUse;
case clsQxRoles.con_UpdDate:
return this.updDate;
case clsQxRoles.con_UpdUserId:
return this.updUserId;
case clsQxRoles.con_Memo:
return this.memo;
case clsQxRoles.con_UserType:
return this.userType;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxRoles]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"RoleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleId(): string {return "roleId";}    //角色Id

 /**
 * 常量:"RoleName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleName(): string {return "roleName";}    //角色名称

 /**
 * 常量:"RoleENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleENName(): string {return "roleENName";}    //角色英文名

 /**
 * 常量:"RoleIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleIndex(): string {return "roleIndex";}    //角色序号

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"IsInUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsInUse(): string {return "isInUse";}    //是否在使用

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"UserType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
