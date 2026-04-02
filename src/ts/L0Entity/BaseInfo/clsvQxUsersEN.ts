
 /**
 * 类名:clsvQxUsersEN
 * 表名:vQxUsers(01120564)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:26:11
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * vQx用户(vQxUsers)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxUsersEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxUsers"; //当前表名,与该类相关的表名
public static _KeyFldName= "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["userId", "userName", "userStateId", "memo", "userStateName", "departmentId", "upDepartmentId", "departmentName", "upDepartmentName", "departmentTypeName", "departmentTypeId", "departmentAbbrName", "updDate", "updUser", "effitiveBeginDate", "effitiveEndDate", "stuTeacherId", "identityId", "password", "identityDesc", "isSynch", "synchDate", "openId", "collegeName", "idXzCollege", "email"];
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
case clsvQxUsersEN.con_UserId:
return this.userId;
case clsvQxUsersEN.con_UserName:
return this.userName;
case clsvQxUsersEN.con_UserStateId:
return this.userStateId;
case clsvQxUsersEN.con_Memo:
return this.memo;
case clsvQxUsersEN.con_UserStateName:
return this.userStateName;
case clsvQxUsersEN.con_DepartmentId:
return this.departmentId;
case clsvQxUsersEN.con_UpDepartmentId:
return this.upDepartmentId;
case clsvQxUsersEN.con_DepartmentName:
return this.departmentName;
case clsvQxUsersEN.con_UpDepartmentName:
return this.upDepartmentName;
case clsvQxUsersEN.con_DepartmentTypeName:
return this.departmentTypeName;
case clsvQxUsersEN.con_DepartmentTypeId:
return this.departmentTypeId;
case clsvQxUsersEN.con_DepartmentAbbrName:
return this.departmentAbbrName;
case clsvQxUsersEN.con_UpdDate:
return this.updDate;
case clsvQxUsersEN.con_UpdUser:
return this.updUser;
case clsvQxUsersEN.con_EffitiveBeginDate:
return this.effitiveBeginDate;
case clsvQxUsersEN.con_EffitiveEndDate:
return this.effitiveEndDate;
case clsvQxUsersEN.con_StuTeacherId:
return this.stuTeacherId;
case clsvQxUsersEN.con_IdentityId:
return this.identityId;
case clsvQxUsersEN.con_Password:
return this.password;
case clsvQxUsersEN.con_IdentityDesc:
return this.identityDesc;
case clsvQxUsersEN.con_IsSynch:
return this.isSynch;
case clsvQxUsersEN.con_SynchDate:
return this.synchDate;
case clsvQxUsersEN.con_OpenId:
return this.openId;
case clsvQxUsersEN.con_CollegeName:
return this.collegeName;
case clsvQxUsersEN.con_IdXzCollege:
return this.idXzCollege;
case clsvQxUsersEN.con_Email:
return this.email;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUsers]中不存在!`;
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
case clsvQxUsersEN.con_UserId:
this.userId = strValue;
break;
case clsvQxUsersEN.con_UserName:
this.userName = strValue;
break;
case clsvQxUsersEN.con_UserStateId:
this.userStateId = strValue;
break;
case clsvQxUsersEN.con_Memo:
this.memo = strValue;
break;
case clsvQxUsersEN.con_UserStateName:
this.userStateName = strValue;
break;
case clsvQxUsersEN.con_DepartmentId:
this.departmentId = strValue;
break;
case clsvQxUsersEN.con_UpDepartmentId:
this.upDepartmentId = strValue;
break;
case clsvQxUsersEN.con_DepartmentName:
this.departmentName = strValue;
break;
case clsvQxUsersEN.con_UpDepartmentName:
this.upDepartmentName = strValue;
break;
case clsvQxUsersEN.con_DepartmentTypeName:
this.departmentTypeName = strValue;
break;
case clsvQxUsersEN.con_DepartmentTypeId:
this.departmentTypeId = strValue;
break;
case clsvQxUsersEN.con_DepartmentAbbrName:
this.departmentAbbrName = strValue;
break;
case clsvQxUsersEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxUsersEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvQxUsersEN.con_EffitiveBeginDate:
this.effitiveBeginDate = strValue;
break;
case clsvQxUsersEN.con_EffitiveEndDate:
this.effitiveEndDate = strValue;
break;
case clsvQxUsersEN.con_StuTeacherId:
this.stuTeacherId = strValue;
break;
case clsvQxUsersEN.con_IdentityId:
this.identityId = strValue;
break;
case clsvQxUsersEN.con_Password:
this.password = strValue;
break;
case clsvQxUsersEN.con_IdentityDesc:
this.identityDesc = strValue;
break;
case clsvQxUsersEN.con_IsSynch:
this.isSynch = Boolean(strValue);
break;
case clsvQxUsersEN.con_SynchDate:
this.synchDate = strValue;
break;
case clsvQxUsersEN.con_OpenId:
this.openId = strValue;
break;
case clsvQxUsersEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvQxUsersEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvQxUsersEN.con_Email:
this.email = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUsers]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public userId = "";    //用户ID
public userName = "";    //用户名
public userStateId = "";    //用户状态Id
public memo = "";    //备注
public userStateName = "";    //用户状态名
public departmentId = "";    //部门Id
public upDepartmentId = "";    //UpDepartmentId
public departmentName = "";    //部门名称
public upDepartmentName = "";    //UpDepartmentName
public departmentTypeName = "";    //DepartmentTypeName
public departmentTypeId = "";    //DepartmentTypeId
public departmentAbbrName = "";    //DepartmentAbbrName
public updDate = "";    //修改日期
public updUser = "";    //修改人
public effitiveBeginDate = "";    //有效开始日期
public effitiveEndDate = "";    //有效结束日期
public stuTeacherId = "";    //学工号
public identityId = "";    //身份Id
public password = "";    //口令
public identityDesc = "";    //身份描述
public isSynch = false;    //是否同步
public synchDate = "";    //同步日期
public openId = "";    //微信OpenId
public collegeName = "";    //学院名称
public idXzCollege = "";    //学院流水号
public email = "";    //电子邮箱


 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"UserStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserStateId(): string {return "userStateId";}    //用户状态Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"UserStateName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserStateName(): string {return "userStateName";}    //用户状态名

 /**
 * 常量:"DepartmentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentId(): string {return "departmentId";}    //部门Id

 /**
 * 常量:"UpDepartmentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpDepartmentId(): string {return "upDepartmentId";}    //UpDepartmentId

 /**
 * 常量:"DepartmentName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentName(): string {return "departmentName";}    //部门名称

 /**
 * 常量:"UpDepartmentName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpDepartmentName(): string {return "upDepartmentName";}    //UpDepartmentName

 /**
 * 常量:"DepartmentTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentTypeName(): string {return "departmentTypeName";}    //DepartmentTypeName

 /**
 * 常量:"DepartmentTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentTypeId(): string {return "departmentTypeId";}    //DepartmentTypeId

 /**
 * 常量:"DepartmentAbbrName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentAbbrName(): string {return "departmentAbbrName";}    //DepartmentAbbrName

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"EffitiveBeginDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EffitiveBeginDate(): string {return "effitiveBeginDate";}    //有效开始日期

 /**
 * 常量:"EffitiveEndDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EffitiveEndDate(): string {return "effitiveEndDate";}    //有效结束日期

 /**
 * 常量:"StuTeacherId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuTeacherId(): string {return "stuTeacherId";}    //学工号

 /**
 * 常量:"IdentityId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdentityId(): string {return "identityId";}    //身份Id

 /**
 * 常量:"Password"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Password(): string {return "password";}    //口令

 /**
 * 常量:"IdentityDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdentityDesc(): string {return "identityDesc";}    //身份描述

 /**
 * 常量:"IsSynch"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSynch(): string {return "isSynch";}    //是否同步

 /**
 * 常量:"SynchDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SynchDate(): string {return "synchDate";}    //同步日期

 /**
 * 常量:"OpenId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OpenId(): string {return "openId";}    //微信OpenId

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"Email"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //电子邮箱

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