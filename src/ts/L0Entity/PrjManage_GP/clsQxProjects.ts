
 /**
 * 类名:clsQxProjects
 * 表名:QxProjects(00140006)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/02 16:37:09
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:工程管理(PrjManage_GP)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 工程(QxProjects)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxProjects 
{
public static _CurrTabName= "QxProjects"; //当前表名,与该类相关的表名
public static _KeyFldName= "QxPrjId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["qxPrjId", "prjName", "prjDomain", "isDefaultPrj", "qxPrjDataBaseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public qxPrjId = "";    //项目Id
public prjName = "";    //工程名
public prjDomain = "";    //工程域名
public isDefaultPrj = false;    //是否默认工程
public qxPrjDataBaseId = "";    //项目数据库Id
public updDate = "";    //修改日期
public updUser = "";    //修改用户
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
case clsQxProjects.con_QxPrjId:
return this.qxPrjId;
case clsQxProjects.con_PrjName:
return this.prjName;
case clsQxProjects.con_PrjDomain:
return this.prjDomain;
case clsQxProjects.con_IsDefaultPrj:
return this.isDefaultPrj;
case clsQxProjects.con_QxPrjDataBaseId:
return this.qxPrjDataBaseId;
case clsQxProjects.con_UpdDate:
return this.updDate;
case clsQxProjects.con_UpdUser:
return this.updUser;
case clsQxProjects.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxProjects]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"PrjName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PrjName(): string {return "prjName";}    //工程名

 /**
 * 常量:"PrjDomain"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PrjDomain(): string {return "prjDomain";}    //工程域名

 /**
 * 常量:"IsDefaultPrj"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDefaultPrj(): string {return "isDefaultPrj";}    //是否默认工程

 /**
 * 常量:"QxPrjDataBaseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjDataBaseId(): string {return "qxPrjDataBaseId";}    //项目数据库Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改用户

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}