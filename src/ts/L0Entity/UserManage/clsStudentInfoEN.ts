
 /**
 * 类名:clsStudentInfoEN
 * 表名:StudentInfo(01120131)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:48
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
 * 学生(StudentInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsStudentInfoEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "StudentInfo"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStudentInfo"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 39;
public static AttributeName = ["idStudentInfo", "stuId", "stuName", "idPolitics", "idSex", "idEthnic", "idUniZone", "idStuType", "idXzCollege", "idXzMajor", "idGradeBase", "idGrade", "idAdminCls", "birthday", "nativePlace", "duty", "idCardNo", "stuCardNo", "liveAddress", "homePhone", "idCardNo2", "cardNo", "isGpUser", "isLocalUser", "isLeaved", "userId", "userType", "enrollmentDate", "postCode", "email", "isMessage", "microblog", "phoneNumber", "headphoto", "qQ", "registerPassword", "updDate", "updUser", "memo"];
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
private mstrIdStudentInfo = "";    //学生流水号
private mstrStuId = "";    //学号
private mstrStuName = "";    //姓名
private mstrIdPolitics = "";    //政治面貌流水号
private mstrIdSex = "";    //性别流水号
private mstrIdEthnic = "";    //民族流水号
private mstrIdUniZone = "";    //校区流水号
private mstrIdStuType = "";    //学生类别流水号
private mstrIdXzCollege = "";    //学院流水号
private mstrIdXzMajor = "";    //专业流水号
private mstrIdGradeBase = "";    //年级流水号
private mstrIdGrade = "";    //年级流水号
private mstrIdAdminCls = "";    //行政班流水号
private mstrBirthday = "";    //出生日期
private mstrNativePlace = "";    //籍贯
private mstrDuty = "";    //职位
private mstrIdCardNo = "";    //身份证号
private mstrStuCardNo = "";    //学生证号
private mstrLiveAddress = "";    //居住地址
private mstrHomePhone = "";    //住宅电话
private mstrIdCardNo2 = "";    //内卡号
private mstrCardNo = "";    //卡号
private mbolIsGpUser = false;    //是否Gp用户
private mbolIsLocalUser = false;    //是否本地用户
private mbolIsLeaved = false;    //是否离开
private mstrUserId = "";    //用户ID
private mstrUserType = "";    //用户类型
private mstrEnrollmentDate = "";    //入校日期
private mstrPostCode = "";    //邮编
private mstrEmail = "";    //电子邮箱
private mbolIsMessage = false;    //IsMessage
private mstrMicroblog = "";    //Microblog
private mstrPhoneNumber = "";    //电话
private mstrHeadphoto = "";    //Headphoto
private mstrQQ = "";    //QQ
private mstrRegisterPassword = "";    //RegisterPassword
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 学生流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStudentInfo (value: string)
{
if (value  != undefined)
{
 this.idStudentInfo = value;
    this.hmProperty["idStudentInfo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学号(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStuId (value: string)
{
if (value  != undefined)
{
 this.stuId = value;
    this.hmProperty["stuId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 姓名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStuName (value: string)
{
if (value  != undefined)
{
 this.stuName = value;
    this.hmProperty["stuName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 政治面貌流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdPolitics (value: string)
{
if (value  != undefined)
{
 this.idPolitics = value;
    this.hmProperty["idPolitics"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 性别流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSex (value: string)
{
if (value  != undefined)
{
 this.idSex = value;
    this.hmProperty["idSex"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 民族流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdEthnic (value: string)
{
if (value  != undefined)
{
 this.idEthnic = value;
    this.hmProperty["idEthnic"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 校区流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdUniZone (value: string)
{
if (value  != undefined)
{
 this.idUniZone = value;
    this.hmProperty["idUniZone"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学生类别流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStuType (value: string)
{
if (value  != undefined)
{
 this.idStuType = value;
    this.hmProperty["idStuType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdXzCollege (value: string)
{
if (value  != undefined)
{
 this.idXzCollege = value;
    this.hmProperty["idXzCollege"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 专业流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdXzMajor (value: string)
{
if (value  != undefined)
{
 this.idXzMajor = value;
    this.hmProperty["idXzMajor"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 年级流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdGradeBase (value: string)
{
if (value  != undefined)
{
 this.idGradeBase = value;
    this.hmProperty["idGradeBase"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 年级流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdGrade (value: string)
{
if (value  != undefined)
{
 this.idGrade = value;
    this.hmProperty["idGrade"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 行政班流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdAdminCls (value: string)
{
if (value  != undefined)
{
 this.idAdminCls = value;
    this.hmProperty["idAdminCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 出生日期(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBirthday (value: string)
{
if (value  != undefined)
{
 this.birthday = value;
    this.hmProperty["birthday"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 籍贯(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetNativePlace (value: string)
{
if (value  != undefined)
{
 this.nativePlace = value;
    this.hmProperty["nativePlace"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 职位(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDuty (value: string)
{
if (value  != undefined)
{
 this.duty = value;
    this.hmProperty["duty"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 身份证号(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCardNo (value: string)
{
if (value  != undefined)
{
 this.idCardNo = value;
    this.hmProperty["idCardNo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学生证号(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStuCardNo (value: string)
{
if (value  != undefined)
{
 this.stuCardNo = value;
    this.hmProperty["stuCardNo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 居住地址(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLiveAddress (value: string)
{
if (value  != undefined)
{
 this.liveAddress = value;
    this.hmProperty["liveAddress"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 住宅电话(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetHomePhone (value: string)
{
if (value  != undefined)
{
 this.homePhone = value;
    this.hmProperty["homePhone"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 内卡号(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCardNo2 (value: string)
{
if (value  != undefined)
{
 this.idCardNo2 = value;
    this.hmProperty["idCardNo2"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 卡号(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCardNo (value: string)
{
if (value  != undefined)
{
 this.cardNo = value;
    this.hmProperty["cardNo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否Gp用户(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsGpUser (value: boolean)
{
if (value  != undefined)
{
 this.isGpUser = value;
    this.hmProperty["isGpUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否本地用户(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsLocalUser (value: boolean)
{
if (value  != undefined)
{
 this.isLocalUser = value;
    this.hmProperty["isLocalUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否离开(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsLeaved (value: boolean)
{
if (value  != undefined)
{
 this.isLeaved = value;
    this.hmProperty["isLeaved"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserId (value: string)
{
if (value  != undefined)
{
 this.userId = value;
    this.hmProperty["userId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户类型(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserType (value: string)
{
if (value  != undefined)
{
 this.userType = value;
    this.hmProperty["userType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 入校日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEnrollmentDate (value: string)
{
if (value  != undefined)
{
 this.enrollmentDate = value;
    this.hmProperty["enrollmentDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 邮编(说明:;字段类型:char;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPostCode (value: string)
{
if (value  != undefined)
{
 this.postCode = value;
    this.hmProperty["postCode"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 电子邮箱(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEmail (value: string)
{
if (value  != undefined)
{
 this.email = value;
    this.hmProperty["email"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * IsMessage(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsMessage (value: boolean)
{
if (value  != undefined)
{
 this.isMessage = value;
    this.hmProperty["isMessage"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Microblog(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMicroblog (value: string)
{
if (value  != undefined)
{
 this.microblog = value;
    this.hmProperty["microblog"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 电话(说明:;字段类型:varchar;字段长度:15;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPhoneNumber (value: string)
{
if (value  != undefined)
{
 this.phoneNumber = value;
    this.hmProperty["phoneNumber"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Headphoto(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetHeadphoto (value: string)
{
if (value  != undefined)
{
 this.headphoto = value;
    this.hmProperty["headphoto"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * QQ(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQQ (value: string)
{
if (value  != undefined)
{
 this.qQ = value;
    this.hmProperty["qQ"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * RegisterPassword(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRegisterPassword (value: string)
{
if (value  != undefined)
{
 this.registerPassword = value;
    this.hmProperty["registerPassword"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
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
case clsStudentInfoEN.con_IdStudentInfo:
return this.idStudentInfo;
case clsStudentInfoEN.con_StuId:
return this.stuId;
case clsStudentInfoEN.con_StuName:
return this.stuName;
case clsStudentInfoEN.con_IdPolitics:
return this.idPolitics;
case clsStudentInfoEN.con_IdSex:
return this.idSex;
case clsStudentInfoEN.con_IdEthnic:
return this.idEthnic;
case clsStudentInfoEN.con_IdUniZone:
return this.idUniZone;
case clsStudentInfoEN.con_IdStuType:
return this.idStuType;
case clsStudentInfoEN.con_IdXzCollege:
return this.idXzCollege;
case clsStudentInfoEN.con_IdXzMajor:
return this.idXzMajor;
case clsStudentInfoEN.con_IdGradeBase:
return this.idGradeBase;
case clsStudentInfoEN.con_IdGrade:
return this.idGrade;
case clsStudentInfoEN.con_IdAdminCls:
return this.idAdminCls;
case clsStudentInfoEN.con_Birthday:
return this.birthday;
case clsStudentInfoEN.con_NativePlace:
return this.nativePlace;
case clsStudentInfoEN.con_Duty:
return this.duty;
case clsStudentInfoEN.con_IdCardNo:
return this.idCardNo;
case clsStudentInfoEN.con_StuCardNo:
return this.stuCardNo;
case clsStudentInfoEN.con_LiveAddress:
return this.liveAddress;
case clsStudentInfoEN.con_HomePhone:
return this.homePhone;
case clsStudentInfoEN.con_IdCardNo2:
return this.idCardNo2;
case clsStudentInfoEN.con_CardNo:
return this.cardNo;
case clsStudentInfoEN.con_IsGpUser:
return this.isGpUser;
case clsStudentInfoEN.con_IsLocalUser:
return this.isLocalUser;
case clsStudentInfoEN.con_IsLeaved:
return this.isLeaved;
case clsStudentInfoEN.con_UserId:
return this.userId;
case clsStudentInfoEN.con_UserType:
return this.userType;
case clsStudentInfoEN.con_EnrollmentDate:
return this.enrollmentDate;
case clsStudentInfoEN.con_PostCode:
return this.postCode;
case clsStudentInfoEN.con_Email:
return this.email;
case clsStudentInfoEN.con_IsMessage:
return this.isMessage;
case clsStudentInfoEN.con_Microblog:
return this.microblog;
case clsStudentInfoEN.con_PhoneNumber:
return this.phoneNumber;
case clsStudentInfoEN.con_Headphoto:
return this.headphoto;
case clsStudentInfoEN.con_QQ:
return this.qQ;
case clsStudentInfoEN.con_RegisterPassword:
return this.registerPassword;
case clsStudentInfoEN.con_UpdDate:
return this.updDate;
case clsStudentInfoEN.con_UpdUser:
return this.updUser;
case clsStudentInfoEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[StudentInfo]中不存在!`;
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
case clsStudentInfoEN.con_IdStudentInfo:
this.idStudentInfo = strValue;
    this.hmProperty["idStudentInfo"] = true;
break;
case clsStudentInfoEN.con_StuId:
this.stuId = strValue;
    this.hmProperty["stuId"] = true;
break;
case clsStudentInfoEN.con_StuName:
this.stuName = strValue;
    this.hmProperty["stuName"] = true;
break;
case clsStudentInfoEN.con_IdPolitics:
this.idPolitics = strValue;
    this.hmProperty["idPolitics"] = true;
break;
case clsStudentInfoEN.con_IdSex:
this.idSex = strValue;
    this.hmProperty["idSex"] = true;
break;
case clsStudentInfoEN.con_IdEthnic:
this.idEthnic = strValue;
    this.hmProperty["idEthnic"] = true;
break;
case clsStudentInfoEN.con_IdUniZone:
this.idUniZone = strValue;
    this.hmProperty["idUniZone"] = true;
break;
case clsStudentInfoEN.con_IdStuType:
this.idStuType = strValue;
    this.hmProperty["idStuType"] = true;
break;
case clsStudentInfoEN.con_IdXzCollege:
this.idXzCollege = strValue;
    this.hmProperty["idXzCollege"] = true;
break;
case clsStudentInfoEN.con_IdXzMajor:
this.idXzMajor = strValue;
    this.hmProperty["idXzMajor"] = true;
break;
case clsStudentInfoEN.con_IdGradeBase:
this.idGradeBase = strValue;
    this.hmProperty["idGradeBase"] = true;
break;
case clsStudentInfoEN.con_IdGrade:
this.idGrade = strValue;
    this.hmProperty["idGrade"] = true;
break;
case clsStudentInfoEN.con_IdAdminCls:
this.idAdminCls = strValue;
    this.hmProperty["idAdminCls"] = true;
break;
case clsStudentInfoEN.con_Birthday:
this.birthday = strValue;
    this.hmProperty["birthday"] = true;
break;
case clsStudentInfoEN.con_NativePlace:
this.nativePlace = strValue;
    this.hmProperty["nativePlace"] = true;
break;
case clsStudentInfoEN.con_Duty:
this.duty = strValue;
    this.hmProperty["duty"] = true;
break;
case clsStudentInfoEN.con_IdCardNo:
this.idCardNo = strValue;
    this.hmProperty["idCardNo"] = true;
break;
case clsStudentInfoEN.con_StuCardNo:
this.stuCardNo = strValue;
    this.hmProperty["stuCardNo"] = true;
break;
case clsStudentInfoEN.con_LiveAddress:
this.liveAddress = strValue;
    this.hmProperty["liveAddress"] = true;
break;
case clsStudentInfoEN.con_HomePhone:
this.homePhone = strValue;
    this.hmProperty["homePhone"] = true;
break;
case clsStudentInfoEN.con_IdCardNo2:
this.idCardNo2 = strValue;
    this.hmProperty["idCardNo2"] = true;
break;
case clsStudentInfoEN.con_CardNo:
this.cardNo = strValue;
    this.hmProperty["cardNo"] = true;
break;
case clsStudentInfoEN.con_IsGpUser:
this.isGpUser = Boolean(strValue);
    this.hmProperty["isGpUser"] = true;
break;
case clsStudentInfoEN.con_IsLocalUser:
this.isLocalUser = Boolean(strValue);
    this.hmProperty["isLocalUser"] = true;
break;
case clsStudentInfoEN.con_IsLeaved:
this.isLeaved = Boolean(strValue);
    this.hmProperty["isLeaved"] = true;
break;
case clsStudentInfoEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsStudentInfoEN.con_UserType:
this.userType = strValue;
    this.hmProperty["userType"] = true;
break;
case clsStudentInfoEN.con_EnrollmentDate:
this.enrollmentDate = strValue;
    this.hmProperty["enrollmentDate"] = true;
break;
case clsStudentInfoEN.con_PostCode:
this.postCode = strValue;
    this.hmProperty["postCode"] = true;
break;
case clsStudentInfoEN.con_Email:
this.email = strValue;
    this.hmProperty["email"] = true;
break;
case clsStudentInfoEN.con_IsMessage:
this.isMessage = Boolean(strValue);
    this.hmProperty["isMessage"] = true;
break;
case clsStudentInfoEN.con_Microblog:
this.microblog = strValue;
    this.hmProperty["microblog"] = true;
break;
case clsStudentInfoEN.con_PhoneNumber:
this.phoneNumber = strValue;
    this.hmProperty["phoneNumber"] = true;
break;
case clsStudentInfoEN.con_Headphoto:
this.headphoto = strValue;
    this.hmProperty["headphoto"] = true;
break;
case clsStudentInfoEN.con_QQ:
this.qQ = strValue;
    this.hmProperty["qQ"] = true;
break;
case clsStudentInfoEN.con_RegisterPassword:
this.registerPassword = strValue;
    this.hmProperty["registerPassword"] = true;
break;
case clsStudentInfoEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsStudentInfoEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsStudentInfoEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[StudentInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"IdStudentInfo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"StuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuId(): string {return "stuId";}    //学号

 /**
 * 常量:"StuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

 /**
 * 常量:"IdPolitics"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdPolitics(): string {return "idPolitics";}    //政治面貌流水号

 /**
 * 常量:"IdSex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSex(): string {return "idSex";}    //性别流水号

 /**
 * 常量:"IdEthnic"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdEthnic(): string {return "idEthnic";}    //民族流水号

 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"IdStuType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStuType(): string {return "idStuType";}    //学生类别流水号

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //年级流水号

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"Birthday"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Birthday(): string {return "birthday";}    //出生日期

 /**
 * 常量:"NativePlace"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_NativePlace(): string {return "nativePlace";}    //籍贯

 /**
 * 常量:"Duty"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Duty(): string {return "duty";}    //职位

 /**
 * 常量:"IdCardNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCardNo(): string {return "idCardNo";}    //身份证号

 /**
 * 常量:"StuCardNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuCardNo(): string {return "stuCardNo";}    //学生证号

 /**
 * 常量:"LiveAddress"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LiveAddress(): string {return "liveAddress";}    //居住地址

 /**
 * 常量:"HomePhone"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_HomePhone(): string {return "homePhone";}    //住宅电话

 /**
 * 常量:"IdCardNo2"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCardNo2(): string {return "idCardNo2";}    //内卡号

 /**
 * 常量:"CardNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CardNo(): string {return "cardNo";}    //卡号

 /**
 * 常量:"IsGpUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsGpUser(): string {return "isGpUser";}    //是否Gp用户

 /**
 * 常量:"IsLocalUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsLocalUser(): string {return "isLocalUser";}    //是否本地用户

 /**
 * 常量:"IsLeaved"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsLeaved(): string {return "isLeaved";}    //是否离开

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UserType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型

 /**
 * 常量:"EnrollmentDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EnrollmentDate(): string {return "enrollmentDate";}    //入校日期

 /**
 * 常量:"PostCode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PostCode(): string {return "postCode";}    //邮编

 /**
 * 常量:"Email"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //电子邮箱

 /**
 * 常量:"IsMessage"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMessage(): string {return "isMessage";}    //IsMessage

 /**
 * 常量:"Microblog"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Microblog(): string {return "microblog";}    //Microblog

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"Headphoto"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Headphoto(): string {return "headphoto";}    //Headphoto

 /**
 * 常量:"QQ"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QQ(): string {return "qQ";}    //QQ

 /**
 * 常量:"RegisterPassword"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RegisterPassword(): string {return "registerPassword";}    //RegisterPassword

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