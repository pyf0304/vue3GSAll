
 /**
 * 类名:clsvUsersEN
 * 表名:vUsers(01120027)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/15 09:52:51
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
 * v用户(vUsers)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvUsersEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vUsers"; //当前表名,与该类相关的表名
public static _KeyFldName= "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 36;
public static AttributeName = ["userId", "userName", "userStateId", "userStateName", "password", "isGpUser", "beginYearMonth", "endYearMonth", "idGradeBase", "gradeBaseName", "idXzCollege", "collegeId", "collegeName", "collegeNameA", "idXzMajor", "majorName", "isLeaved", "stuIdTeacherId", "identityId", "identityDesc", "auditDate", "auditUser", "isAudit", "isRegister", "registerDate", "mobilePhone", "updDate", "updUser", "memo", "userNameWithUserId", "openId", "avatarsPicture", "email", "phoneNumber", "headPic", "isGSuser"];
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
case clsvUsersEN.con_UserId:
return this.userId;
case clsvUsersEN.con_UserName:
return this.userName;
case clsvUsersEN.con_UserStateId:
return this.userStateId;
case clsvUsersEN.con_UserStateName:
return this.userStateName;
case clsvUsersEN.con_Password:
return this.password;
case clsvUsersEN.con_IsGpUser:
return this.isGpUser;
case clsvUsersEN.con_BeginYearMonth:
return this.beginYearMonth;
case clsvUsersEN.con_EndYearMonth:
return this.endYearMonth;
case clsvUsersEN.con_IdGradeBase:
return this.idGradeBase;
case clsvUsersEN.con_GradeBaseName:
return this.gradeBaseName;
case clsvUsersEN.con_IdXzCollege:
return this.idXzCollege;
case clsvUsersEN.con_CollegeId:
return this.collegeId;
case clsvUsersEN.con_CollegeName:
return this.collegeName;
case clsvUsersEN.con_CollegeNameA:
return this.collegeNameA;
case clsvUsersEN.con_IdXzMajor:
return this.idXzMajor;
case clsvUsersEN.con_MajorName:
return this.majorName;
case clsvUsersEN.con_IsLeaved:
return this.isLeaved;
case clsvUsersEN.con_StuIdTeacherId:
return this.stuIdTeacherId;
case clsvUsersEN.con_IdentityId:
return this.identityId;
case clsvUsersEN.con_IdentityDesc:
return this.identityDesc;
case clsvUsersEN.con_AuditDate:
return this.auditDate;
case clsvUsersEN.con_AuditUser:
return this.auditUser;
case clsvUsersEN.con_IsAudit:
return this.isAudit;
case clsvUsersEN.con_IsRegister:
return this.isRegister;
case clsvUsersEN.con_RegisterDate:
return this.registerDate;
case clsvUsersEN.con_MobilePhone:
return this.mobilePhone;
case clsvUsersEN.con_UpdDate:
return this.updDate;
case clsvUsersEN.con_UpdUser:
return this.updUser;
case clsvUsersEN.con_Memo:
return this.memo;
case clsvUsersEN.con_UserNameWithUserId:
return this.userNameWithUserId;
case clsvUsersEN.con_OpenId:
return this.openId;
case clsvUsersEN.con_AvatarsPicture:
return this.avatarsPicture;
case clsvUsersEN.con_Email:
return this.email;
case clsvUsersEN.con_PhoneNumber:
return this.phoneNumber;
case clsvUsersEN.con_HeadPic:
return this.headPic;
case clsvUsersEN.con_IsGSuser:
return this.isGSuser;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vUsers]中不存在!`;
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
case clsvUsersEN.con_UserId:
this.userId = strValue;
break;
case clsvUsersEN.con_UserName:
this.userName = strValue;
break;
case clsvUsersEN.con_UserStateId:
this.userStateId = strValue;
break;
case clsvUsersEN.con_UserStateName:
this.userStateName = strValue;
break;
case clsvUsersEN.con_Password:
this.password = strValue;
break;
case clsvUsersEN.con_IsGpUser:
this.isGpUser = Boolean(strValue);
break;
case clsvUsersEN.con_BeginYearMonth:
this.beginYearMonth = strValue;
break;
case clsvUsersEN.con_EndYearMonth:
this.endYearMonth = strValue;
break;
case clsvUsersEN.con_IdGradeBase:
this.idGradeBase = strValue;
break;
case clsvUsersEN.con_GradeBaseName:
this.gradeBaseName = strValue;
break;
case clsvUsersEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvUsersEN.con_CollegeId:
this.collegeId = strValue;
break;
case clsvUsersEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvUsersEN.con_CollegeNameA:
this.collegeNameA = strValue;
break;
case clsvUsersEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvUsersEN.con_MajorName:
this.majorName = strValue;
break;
case clsvUsersEN.con_IsLeaved:
this.isLeaved = Boolean(strValue);
break;
case clsvUsersEN.con_StuIdTeacherId:
this.stuIdTeacherId = strValue;
break;
case clsvUsersEN.con_IdentityId:
this.identityId = strValue;
break;
case clsvUsersEN.con_IdentityDesc:
this.identityDesc = strValue;
break;
case clsvUsersEN.con_AuditDate:
this.auditDate = strValue;
break;
case clsvUsersEN.con_AuditUser:
this.auditUser = strValue;
break;
case clsvUsersEN.con_IsAudit:
this.isAudit = Boolean(strValue);
break;
case clsvUsersEN.con_IsRegister:
this.isRegister = Boolean(strValue);
break;
case clsvUsersEN.con_RegisterDate:
this.registerDate = strValue;
break;
case clsvUsersEN.con_MobilePhone:
this.mobilePhone = strValue;
break;
case clsvUsersEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvUsersEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvUsersEN.con_Memo:
this.memo = strValue;
break;
case clsvUsersEN.con_UserNameWithUserId:
this.userNameWithUserId = strValue;
break;
case clsvUsersEN.con_OpenId:
this.openId = strValue;
break;
case clsvUsersEN.con_AvatarsPicture:
this.avatarsPicture = strValue;
break;
case clsvUsersEN.con_Email:
this.email = strValue;
break;
case clsvUsersEN.con_PhoneNumber:
this.phoneNumber = strValue;
break;
case clsvUsersEN.con_HeadPic:
this.headPic = strValue;
break;
case clsvUsersEN.con_IsGSuser:
this.isGSuser = Boolean(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vUsers]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public userStateName = "";    //用户状态名
public password = "";    //口令
public isGpUser = false;    //是否Gp用户
public beginYearMonth = "";    //开始年月
public endYearMonth = "";    //结束年月
public idGradeBase = "";    //年级流水号
public gradeBaseName = "";    //年级名称
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public collegeNameA = "";    //学院名称简写
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
public isLeaved = false;    //是否离开
public stuIdTeacherId = "";    //学工号
public identityId = "";    //身份Id
public identityDesc = "";    //身份描述
public auditDate = "";    //AuditDate
public auditUser = "";    //AuditUser
public isAudit = false;    //是否审核
public isRegister = false;    //IsRegister
public registerDate = "";    //RegisterDate
public mobilePhone = "";    //手机
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public userNameWithUserId = "";    //UserNameWithUserId
public openId = "";    //微信OpenId
public avatarsPicture = "";    //虚拟头像
public email = "";    //电子邮箱
public phoneNumber = "";    //电话
public headPic = "";    //头像
public isGSuser = false;    //是否GS用户


 /**
 * 常量:"UserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"UserStateId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserStateId(): string {return "userStateId";}    //用户状态Id

 /**
 * 常量:"UserStateName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserStateName(): string {return "userStateName";}    //用户状态名

 /**
 * 常量:"Password"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Password(): string {return "password";}    //口令

 /**
 * 常量:"IsGpUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsGpUser(): string {return "isGpUser";}    //是否Gp用户

 /**
 * 常量:"BeginYearMonth"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_BeginYearMonth(): string {return "beginYearMonth";}    //开始年月

 /**
 * 常量:"EndYearMonth"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_EndYearMonth(): string {return "endYearMonth";}    //结束年月

 /**
 * 常量:"IdGradeBase"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //年级流水号

 /**
 * 常量:"GradeBaseName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"IdXzCollege"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"CollegeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollegeId(): string {return "collegeId";}    //学院ID

 /**
 * 常量:"CollegeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"CollegeNameA"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollegeNameA(): string {return "collegeNameA";}    //学院名称简写

 /**
 * 常量:"IdXzMajor"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"IsLeaved"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsLeaved(): string {return "isLeaved";}    //是否离开

 /**
 * 常量:"StuIdTeacherId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StuIdTeacherId(): string {return "stuIdTeacherId";}    //学工号

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
 * 常量:"AuditDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AuditDate(): string {return "auditDate";}    //AuditDate

 /**
 * 常量:"AuditUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AuditUser(): string {return "auditUser";}    //AuditUser

 /**
 * 常量:"IsAudit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsAudit(): string {return "isAudit";}    //是否审核

 /**
 * 常量:"IsRegister"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsRegister(): string {return "isRegister";}    //IsRegister

 /**
 * 常量:"RegisterDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RegisterDate(): string {return "registerDate";}    //RegisterDate

 /**
 * 常量:"MobilePhone"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MobilePhone(): string {return "mobilePhone";}    //手机

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"UserNameWithUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserNameWithUserId(): string {return "userNameWithUserId";}    //UserNameWithUserId

 /**
 * 常量:"OpenId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OpenId(): string {return "openId";}    //微信OpenId

 /**
 * 常量:"AvatarsPicture"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AvatarsPicture(): string {return "avatarsPicture";}    //虚拟头像

 /**
 * 常量:"Email"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //电子邮箱

 /**
 * 常量:"PhoneNumber"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"HeadPic"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_HeadPic(): string {return "headPic";}    //头像

 /**
 * 常量:"IsGSuser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsGSuser(): string {return "isGSuser";}    //是否GS用户

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