
 /**
 * 类名:clsStudentInfo
 * 表名:StudentInfo(01120131)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/15 04:15:17
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 学生(StudentInfo)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsStudentInfo 
{
public static _CurrTabName= "StudentInfo"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStudentInfo"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 39;
public static AttributeName = ["idStudentInfo", "stuId", "stuName", "idPolitics", "idSex", "idEthnic", "idUniZone", "idStuType", "idXzCollege", "idXzMajor", "idGradeBase", "idGrade", "idAdminCls", "birthday", "nativePlace", "duty", "idCardNo", "stuCardNo", "liveAddress", "homePhone", "idCardNo2", "cardNo", "isGpUser", "isLocalUser", "isLeaved", "userId", "userType", "enrollmentDate", "postCode", "email", "isMessage", "microblog", "phoneNumber", "headphoto", "qQ", "registerPassword", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idStudentInfo = "";    //学生流水号
public stuId = "";    //学号
public stuName = "";    //姓名
public idPolitics = "";    //政治面貌流水号
public idSex = "";    //性别流水号
public idEthnic = "";    //民族流水号
public idUniZone = "";    //校区流水号
public idStuType = "";    //学生类别流水号
public idXzCollege = "";    //学院流水号
public idXzMajor = "";    //专业流水号
public idGradeBase = "";    //年级流水号
public idGrade = "";    //年级流水号
public idAdminCls = "";    //行政班流水号
public birthday = "";    //出生日期
public nativePlace = "";    //籍贯
public duty = "";    //职位
public idCardNo = "";    //身份证号
public stuCardNo = "";    //学生证号
public liveAddress = "";    //居住地址
public homePhone = "";    //住宅电话
public idCardNo2 = "";    //内卡号
public cardNo = "";    //卡号
public isGpUser = false;    //是否Gp用户
public isLocalUser = false;    //是否本地用户
public isLeaved = false;    //是否离开
public userId = "";    //用户ID
public userType = "";    //用户类型
public enrollmentDate = "";    //入校日期
public postCode = "";    //邮编
public email = "";    //电子邮箱
public isMessage = false;    //IsMessage
public microblog = "";    //Microblog
public phoneNumber = "";    //电话
public headphoto = "";    //Headphoto
public qQ = "";    //QQ
public registerPassword = "";    //RegisterPassword
public updDate = "";    //修改日期
public updUser = "";    //修改人
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
case clsStudentInfo.con_IdStudentInfo:
return this.idStudentInfo;
case clsStudentInfo.con_StuId:
return this.stuId;
case clsStudentInfo.con_StuName:
return this.stuName;
case clsStudentInfo.con_IdPolitics:
return this.idPolitics;
case clsStudentInfo.con_IdSex:
return this.idSex;
case clsStudentInfo.con_IdEthnic:
return this.idEthnic;
case clsStudentInfo.con_IdUniZone:
return this.idUniZone;
case clsStudentInfo.con_IdStuType:
return this.idStuType;
case clsStudentInfo.con_IdXzCollege:
return this.idXzCollege;
case clsStudentInfo.con_IdXzMajor:
return this.idXzMajor;
case clsStudentInfo.con_IdGradeBase:
return this.idGradeBase;
case clsStudentInfo.con_IdGrade:
return this.idGrade;
case clsStudentInfo.con_IdAdminCls:
return this.idAdminCls;
case clsStudentInfo.con_Birthday:
return this.birthday;
case clsStudentInfo.con_NativePlace:
return this.nativePlace;
case clsStudentInfo.con_Duty:
return this.duty;
case clsStudentInfo.con_IdCardNo:
return this.idCardNo;
case clsStudentInfo.con_StuCardNo:
return this.stuCardNo;
case clsStudentInfo.con_LiveAddress:
return this.liveAddress;
case clsStudentInfo.con_HomePhone:
return this.homePhone;
case clsStudentInfo.con_IdCardNo2:
return this.idCardNo2;
case clsStudentInfo.con_CardNo:
return this.cardNo;
case clsStudentInfo.con_IsGpUser:
return this.isGpUser;
case clsStudentInfo.con_IsLocalUser:
return this.isLocalUser;
case clsStudentInfo.con_IsLeaved:
return this.isLeaved;
case clsStudentInfo.con_UserId:
return this.userId;
case clsStudentInfo.con_UserType:
return this.userType;
case clsStudentInfo.con_EnrollmentDate:
return this.enrollmentDate;
case clsStudentInfo.con_PostCode:
return this.postCode;
case clsStudentInfo.con_Email:
return this.email;
case clsStudentInfo.con_IsMessage:
return this.isMessage;
case clsStudentInfo.con_Microblog:
return this.microblog;
case clsStudentInfo.con_PhoneNumber:
return this.phoneNumber;
case clsStudentInfo.con_Headphoto:
return this.headphoto;
case clsStudentInfo.con_QQ:
return this.qQ;
case clsStudentInfo.con_RegisterPassword:
return this.registerPassword;
case clsStudentInfo.con_UpdDate:
return this.updDate;
case clsStudentInfo.con_UpdUser:
return this.updUser;
case clsStudentInfo.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[StudentInfo]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"StuId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuId(): string {return "stuId";}    //学号

 /**
 * 常量:"StuName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

 /**
 * 常量:"IdPolitics"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPolitics(): string {return "idPolitics";}    //政治面貌流水号

 /**
 * 常量:"IdSex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSex(): string {return "idSex";}    //性别流水号

 /**
 * 常量:"IdEthnic"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEthnic(): string {return "idEthnic";}    //民族流水号

 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"IdStuType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStuType(): string {return "idStuType";}    //学生类别流水号

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //年级流水号

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"Birthday"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Birthday(): string {return "birthday";}    //出生日期

 /**
 * 常量:"NativePlace"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_NativePlace(): string {return "nativePlace";}    //籍贯

 /**
 * 常量:"Duty"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Duty(): string {return "duty";}    //职位

 /**
 * 常量:"IdCardNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCardNo(): string {return "idCardNo";}    //身份证号

 /**
 * 常量:"StuCardNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuCardNo(): string {return "stuCardNo";}    //学生证号

 /**
 * 常量:"LiveAddress"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LiveAddress(): string {return "liveAddress";}    //居住地址

 /**
 * 常量:"HomePhone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_HomePhone(): string {return "homePhone";}    //住宅电话

 /**
 * 常量:"IdCardNo2"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCardNo2(): string {return "idCardNo2";}    //内卡号

 /**
 * 常量:"CardNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CardNo(): string {return "cardNo";}    //卡号

 /**
 * 常量:"IsGpUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsGpUser(): string {return "isGpUser";}    //是否Gp用户

 /**
 * 常量:"IsLocalUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsLocalUser(): string {return "isLocalUser";}    //是否本地用户

 /**
 * 常量:"IsLeaved"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsLeaved(): string {return "isLeaved";}    //是否离开

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UserType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型

 /**
 * 常量:"EnrollmentDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EnrollmentDate(): string {return "enrollmentDate";}    //入校日期

 /**
 * 常量:"PostCode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PostCode(): string {return "postCode";}    //邮编

 /**
 * 常量:"Email"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //电子邮箱

 /**
 * 常量:"IsMessage"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMessage(): string {return "isMessage";}    //IsMessage

 /**
 * 常量:"Microblog"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Microblog(): string {return "microblog";}    //Microblog

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"Headphoto"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Headphoto(): string {return "headphoto";}    //Headphoto

 /**
 * 常量:"QQ"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QQ(): string {return "qQ";}    //QQ

 /**
 * 常量:"RegisterPassword"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RegisterPassword(): string {return "registerPassword";}    //RegisterPassword

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}