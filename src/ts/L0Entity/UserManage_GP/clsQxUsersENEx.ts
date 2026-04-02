
 /**
 * 类名:clsQxUsersENEx
 * 表名:QxUsers(00140015)
 * 版本:2024.05.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/05/19 00:42:44
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 用户(QxUsers)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxUsersEN } from "@/ts/L0Entity/UserManage_GP/clsQxUsersEN";

export class  clsQxUsersENEx extends clsQxUsersEN
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
case clsQxUsersENEx.con_DepartmentName:
return this.departmentName;
case clsQxUsersENEx.con_DepartmentTypeId:
return this.departmentTypeId;
case clsQxUsersENEx.con_DepartmentTypeName:
return this.departmentTypeName;
case clsQxUsersENEx.con_DuUserName:
return this.duUserName;
case clsQxUsersENEx.con_UserStateName:
return this.userStateName;
case clsQxUsersENEx.con_IdentityDesc:
return this.identityDesc;
case clsQxUsersENEx.con_CollegeName:
return this.collegeName;
case clsQxUsersENEx.con_SchoolName:
return this.schoolName;
case clsQxUsersENEx.con_GradeBaseName:
return this.gradeBaseName;
case clsQxUsersENEx.con_RoleNames:
return this.roleNames;
case clsQxUsersENEx.con_DateTimeSim:
return this.dateTimeSim;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"DepartmentName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DepartmentName(): string {return "departmentName";}    //部门名

 /**
 * 常量:"DepartmentTypeId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DepartmentTypeId(): string {return "departmentTypeId";}    //部门类型ID

 /**
 * 常量:"DepartmentTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DepartmentTypeName(): string {return "departmentTypeName";}    //部门类型名

 /**
 * 常量:"DuUserName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DuUserName(): string {return "duUserName";}    //用户名

 /**
 * 常量:"UserStateName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserStateName(): string {return "userStateName";}    //用户状态名

 /**
 * 常量:"IdentityDesc"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_IdentityDesc(): string {return "identityDesc";}    //身份描述

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名

 /**
 * 常量:"SchoolName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_SchoolName(): string {return "schoolName";}    //学校名称

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"RoleNames"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_RoleNames(): string {return "roleNames";}    //上级菜单名

 /**
 * 常量:"DateTimeSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DateTimeSim(): string {return "dateTimeSim";}    //简化日期时间

public departmentName = "";    //部门名
public departmentTypeId = "";    //部门类型ID
public departmentTypeName = "";    //部门类型名
public duUserName = "";    //用户名
public userStateName = "";    //用户状态名
public identityDesc = "";    //身份描述
public collegeName = "";    //学院名
public schoolName = "";    //学校名称
public gradeBaseName = "";    //年级名称
public roleNames = "";    //上级菜单名
public dateTimeSim = "";    //简化日期时间
}