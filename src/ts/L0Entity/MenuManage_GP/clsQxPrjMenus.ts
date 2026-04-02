
 /**
 * 类名:clsQxPrjMenus
 * 表名:QxPrjMenus(00140004)
 * 版本:2024.02.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/27 00:55:01
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 工程菜单(QxPrjMenus)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxPrjMenus 
{
public static _CurrTabName= "QxPrjMenus"; //当前表名,与该类相关的表名
public static _KeyFldName= "MenuId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["menuId", "menuName", "qxPrjId", "upMenuId", "linkFile", "qsParameters", "tabId", "imgFile", "roleId", "orderNum", "isLeafNode", "menuSetId", "menuTitle", "pageDispModeId", "inUse", "menuControlName", "applicationTypeId", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public menuId = "";    //菜单Id
public menuName = "";    //菜单名
public qxPrjId = "";    //项目Id
public upMenuId = "";    //上级菜单Id
public linkFile = "";    //链接文件
public qsParameters = "";    //qs参数
public tabId = "";    //表ID
public imgFile = "";    //图像文件
public roleId = "";    //角色Id
public orderNum = 0;    //排序号
public isLeafNode = false;    //是否叶子
public menuSetId = "";    //菜单集Id
public menuTitle = "";    //菜单标题
public pageDispModeId = "";    //页面显示模式Id
public inUse = false;    //是否在用
public menuControlName = "";    //菜单控件名
public applicationTypeId = 0;    //应用程序类型Id
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注

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
case clsQxPrjMenus.con_MenuId:
return this.menuId;
case clsQxPrjMenus.con_MenuName:
return this.menuName;
case clsQxPrjMenus.con_QxPrjId:
return this.qxPrjId;
case clsQxPrjMenus.con_UpMenuId:
return this.upMenuId;
case clsQxPrjMenus.con_LinkFile:
return this.linkFile;
case clsQxPrjMenus.con_qsParameters:
return this.qsParameters;
case clsQxPrjMenus.con_TabId:
return this.tabId;
case clsQxPrjMenus.con_ImgFile:
return this.imgFile;
case clsQxPrjMenus.con_RoleId:
return this.roleId;
case clsQxPrjMenus.con_OrderNum:
return this.orderNum;
case clsQxPrjMenus.con_IsLeafNode:
return this.isLeafNode;
case clsQxPrjMenus.con_MenuSetId:
return this.menuSetId;
case clsQxPrjMenus.con_MenuTitle:
return this.menuTitle;
case clsQxPrjMenus.con_PageDispModeId:
return this.pageDispModeId;
case clsQxPrjMenus.con_InUse:
return this.inUse;
case clsQxPrjMenus.con_MenuControlName:
return this.menuControlName;
case clsQxPrjMenus.con_ApplicationTypeId:
return this.applicationTypeId;
case clsQxPrjMenus.con_UpdDate:
return this.updDate;
case clsQxPrjMenus.con_UpdUserId:
return this.updUserId;
case clsQxPrjMenus.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjMenus]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"MenuId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MenuId(): string {return "menuId";}    //菜单Id

 /**
 * 常量:"MenuName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MenuName(): string {return "menuName";}    //菜单名

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"UpMenuId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpMenuId(): string {return "upMenuId";}    //上级菜单Id

 /**
 * 常量:"LinkFile"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LinkFile(): string {return "linkFile";}    //链接文件

 /**
 * 常量:"qsParameters"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_qsParameters(): string {return "qsParameters";}    //qs参数

 /**
 * 常量:"TabId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TabId(): string {return "tabId";}    //表ID

 /**
 * 常量:"ImgFile"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ImgFile(): string {return "imgFile";}    //图像文件

 /**
 * 常量:"RoleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleId(): string {return "roleId";}    //角色Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //排序号

 /**
 * 常量:"IsLeafNode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsLeafNode(): string {return "isLeafNode";}    //是否叶子

 /**
 * 常量:"MenuSetId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MenuSetId(): string {return "menuSetId";}    //菜单集Id

 /**
 * 常量:"MenuTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MenuTitle(): string {return "menuTitle";}    //菜单标题

 /**
 * 常量:"PageDispModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PageDispModeId(): string {return "pageDispModeId";}    //页面显示模式Id

 /**
 * 常量:"InUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

 /**
 * 常量:"MenuControlName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MenuControlName(): string {return "menuControlName";}    //菜单控件名

 /**
 * 常量:"ApplicationTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ApplicationTypeId(): string {return "applicationTypeId";}    //应用程序类型Id

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
}