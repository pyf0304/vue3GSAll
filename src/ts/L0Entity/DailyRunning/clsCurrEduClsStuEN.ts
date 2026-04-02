
 /**
 * 类名:clsCurrEduClsStuEN
 * 表名:CurrEduClsStu(01120125)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:00
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 教学班与学生关系(CurrEduClsStu)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsCurrEduClsStuEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "CurrEduClsStu"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsStu"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["idEduClsStu", "idCurrEduCls", "idStu", "eduClsStuStateId", "getScoreTimes", "score", "totalScores", "ranking", "percentile", "ranking2", "percentile2", "ranking3", "percentile3", "confirmed", "schoolTerm", "schoolYear", "exportDate", "signInDate", "signInStateID", "signInUser", "isOpByTeacher", "isSynScore", "lastVisitedDate", "modifyDate", "modifyUserId", "memo"];
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
private mlngIdEduClsStu = 0;    //教学班学生流水号
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrIdStu = "";    //学生流水号
private mstrEduClsStuStateId = "";    //教学班学生状态编号
private mshtGetScoreTimes = 0;    //获得成绩次数
private mdblScore = 0;    //得分
private mdblTotalScores = 0;    //总分值
private mintRanking = 0;    //名次
private mdblPercentile = 0;    //百分位
private mintRanking2 = 0;    //Ranking2
private mdblPercentile2 = 0;    //Percentile2
private mintRanking3 = 0;    //Ranking3
private mdblPercentile3 = 0;    //Percentile3
private mbolConfirmed = false;    //是否确认
private mstrSchoolTerm = "";    //学期
private mstrSchoolYear = "";    //学年
private mstrExportDate = "";    //导出日期
private mstrSignInDate = "";    //签入时间
private mstrSignInStateID = "";    //签入状态表流水号
private mstrSignInUser = "";    //签入人
private mbolIsOpByTeacher = false;    //是否教师操作
private mbolIsSynScore = false;    //是否同步成绩
private mstrLastVisitedDate = "";    //最后访问时间
private mstrModifyDate = "";    //修改日期
private mstrModifyUserId = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 教学班学生流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdEduClsStu (value: number)
{
if (value  != undefined)
{
 this.idEduClsStu = value;
    this.hmProperty["idEduClsStu"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学生流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStu (value: string)
{
if (value  != undefined)
{
 this.idStu = value;
    this.hmProperty["idStu"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班学生状态编号(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEduClsStuStateId (value: string)
{
if (value  != undefined)
{
 this.eduClsStuStateId = value;
    this.hmProperty["eduClsStuStateId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 获得成绩次数(说明:;字段类型:tinyint;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGetScoreTimes (value: number)
{
if (value  != undefined)
{
 this.getScoreTimes = value;
    this.hmProperty["getScoreTimes"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 得分(说明:;字段类型:decimal;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScore (value: number)
{
if (value  != undefined)
{
 this.score = value;
    this.hmProperty["score"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 总分值(说明:;字段类型:decimal;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTotalScores (value: number)
{
if (value  != undefined)
{
 this.totalScores = value;
    this.hmProperty["totalScores"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 名次(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRanking (value: number)
{
if (value  != undefined)
{
 this.ranking = value;
    this.hmProperty["ranking"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 百分位(说明:;字段类型:decimal;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPercentile (value: number)
{
if (value  != undefined)
{
 this.percentile = value;
    this.hmProperty["percentile"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Ranking2(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRanking2 (value: number)
{
if (value  != undefined)
{
 this.ranking2 = value;
    this.hmProperty["ranking2"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Percentile2(说明:;字段类型:decimal;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPercentile2 (value: number)
{
if (value  != undefined)
{
 this.percentile2 = value;
    this.hmProperty["percentile2"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Ranking3(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRanking3 (value: number)
{
if (value  != undefined)
{
 this.ranking3 = value;
    this.hmProperty["ranking3"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Percentile3(说明:;字段类型:decimal;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPercentile3 (value: number)
{
if (value  != undefined)
{
 this.percentile3 = value;
    this.hmProperty["percentile3"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否确认(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetConfirmed (value: boolean)
{
if (value  != undefined)
{
 this.confirmed = value;
    this.hmProperty["confirmed"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学期(说明:;字段类型:char;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolTerm (value: string)
{
if (value  != undefined)
{
 this.schoolTerm = value;
    this.hmProperty["schoolTerm"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学年(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolYear (value: string)
{
if (value  != undefined)
{
 this.schoolYear = value;
    this.hmProperty["schoolYear"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 导出日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExportDate (value: string)
{
if (value  != undefined)
{
 this.exportDate = value;
    this.hmProperty["exportDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 签入时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSignInDate (value: string)
{
if (value  != undefined)
{
 this.signInDate = value;
    this.hmProperty["signInDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 签入状态表流水号(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSignInStateID (value: string)
{
if (value  != undefined)
{
 this.signInStateID = value;
    this.hmProperty["signInStateID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 签入人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSignInUser (value: string)
{
if (value  != undefined)
{
 this.signInUser = value;
    this.hmProperty["signInUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否教师操作(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsOpByTeacher (value: boolean)
{
if (value  != undefined)
{
 this.isOpByTeacher = value;
    this.hmProperty["isOpByTeacher"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否同步成绩(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSynScore (value: boolean)
{
if (value  != undefined)
{
 this.isSynScore = value;
    this.hmProperty["isSynScore"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 最后访问时间(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLastVisitedDate (value: string)
{
if (value  != undefined)
{
 this.lastVisitedDate = value;
    this.hmProperty["lastVisitedDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModifyDate (value: string)
{
if (value  != undefined)
{
 this.modifyDate = value;
    this.hmProperty["modifyDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModifyUserId (value: string)
{
if (value  != undefined)
{
 this.modifyUserId = value;
    this.hmProperty["modifyUserId"] = true;
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
case clsCurrEduClsStuEN.con_IdEduClsStu:
return this.idEduClsStu;
case clsCurrEduClsStuEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsCurrEduClsStuEN.con_IdStu:
return this.idStu;
case clsCurrEduClsStuEN.con_EduClsStuStateId:
return this.eduClsStuStateId;
case clsCurrEduClsStuEN.con_GetScoreTimes:
return this.getScoreTimes;
case clsCurrEduClsStuEN.con_Score:
return this.score;
case clsCurrEduClsStuEN.con_TotalScores:
return this.totalScores;
case clsCurrEduClsStuEN.con_Ranking:
return this.ranking;
case clsCurrEduClsStuEN.con_Percentile:
return this.percentile;
case clsCurrEduClsStuEN.con_Ranking2:
return this.ranking2;
case clsCurrEduClsStuEN.con_Percentile2:
return this.percentile2;
case clsCurrEduClsStuEN.con_Ranking3:
return this.ranking3;
case clsCurrEduClsStuEN.con_Percentile3:
return this.percentile3;
case clsCurrEduClsStuEN.con_Confirmed:
return this.confirmed;
case clsCurrEduClsStuEN.con_SchoolTerm:
return this.schoolTerm;
case clsCurrEduClsStuEN.con_SchoolYear:
return this.schoolYear;
case clsCurrEduClsStuEN.con_ExportDate:
return this.exportDate;
case clsCurrEduClsStuEN.con_SignInDate:
return this.signInDate;
case clsCurrEduClsStuEN.con_SignInStateID:
return this.signInStateID;
case clsCurrEduClsStuEN.con_SignInUser:
return this.signInUser;
case clsCurrEduClsStuEN.con_IsOpByTeacher:
return this.isOpByTeacher;
case clsCurrEduClsStuEN.con_IsSynScore:
return this.isSynScore;
case clsCurrEduClsStuEN.con_LastVisitedDate:
return this.lastVisitedDate;
case clsCurrEduClsStuEN.con_ModifyDate:
return this.modifyDate;
case clsCurrEduClsStuEN.con_ModifyUserId:
return this.modifyUserId;
case clsCurrEduClsStuEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CurrEduClsStu]中不存在!`;
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
case clsCurrEduClsStuEN.con_IdEduClsStu:
this.idEduClsStu = Number(strValue);
    this.hmProperty["idEduClsStu"] = true;
break;
case clsCurrEduClsStuEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsCurrEduClsStuEN.con_IdStu:
this.idStu = strValue;
    this.hmProperty["idStu"] = true;
break;
case clsCurrEduClsStuEN.con_EduClsStuStateId:
this.eduClsStuStateId = strValue;
    this.hmProperty["eduClsStuStateId"] = true;
break;
case clsCurrEduClsStuEN.con_GetScoreTimes:
this.getScoreTimes = Number(strValue);
    this.hmProperty["getScoreTimes"] = true;
break;
case clsCurrEduClsStuEN.con_Score:
this.score = Number(strValue);
    this.hmProperty["score"] = true;
break;
case clsCurrEduClsStuEN.con_TotalScores:
this.totalScores = Number(strValue);
    this.hmProperty["totalScores"] = true;
break;
case clsCurrEduClsStuEN.con_Ranking:
this.ranking = Number(strValue);
    this.hmProperty["ranking"] = true;
break;
case clsCurrEduClsStuEN.con_Percentile:
this.percentile = Number(strValue);
    this.hmProperty["percentile"] = true;
break;
case clsCurrEduClsStuEN.con_Ranking2:
this.ranking2 = Number(strValue);
    this.hmProperty["ranking2"] = true;
break;
case clsCurrEduClsStuEN.con_Percentile2:
this.percentile2 = Number(strValue);
    this.hmProperty["percentile2"] = true;
break;
case clsCurrEduClsStuEN.con_Ranking3:
this.ranking3 = Number(strValue);
    this.hmProperty["ranking3"] = true;
break;
case clsCurrEduClsStuEN.con_Percentile3:
this.percentile3 = Number(strValue);
    this.hmProperty["percentile3"] = true;
break;
case clsCurrEduClsStuEN.con_Confirmed:
this.confirmed = Boolean(strValue);
    this.hmProperty["confirmed"] = true;
break;
case clsCurrEduClsStuEN.con_SchoolTerm:
this.schoolTerm = strValue;
    this.hmProperty["schoolTerm"] = true;
break;
case clsCurrEduClsStuEN.con_SchoolYear:
this.schoolYear = strValue;
    this.hmProperty["schoolYear"] = true;
break;
case clsCurrEduClsStuEN.con_ExportDate:
this.exportDate = strValue;
    this.hmProperty["exportDate"] = true;
break;
case clsCurrEduClsStuEN.con_SignInDate:
this.signInDate = strValue;
    this.hmProperty["signInDate"] = true;
break;
case clsCurrEduClsStuEN.con_SignInStateID:
this.signInStateID = strValue;
    this.hmProperty["signInStateID"] = true;
break;
case clsCurrEduClsStuEN.con_SignInUser:
this.signInUser = strValue;
    this.hmProperty["signInUser"] = true;
break;
case clsCurrEduClsStuEN.con_IsOpByTeacher:
this.isOpByTeacher = Boolean(strValue);
    this.hmProperty["isOpByTeacher"] = true;
break;
case clsCurrEduClsStuEN.con_IsSynScore:
this.isSynScore = Boolean(strValue);
    this.hmProperty["isSynScore"] = true;
break;
case clsCurrEduClsStuEN.con_LastVisitedDate:
this.lastVisitedDate = strValue;
    this.hmProperty["lastVisitedDate"] = true;
break;
case clsCurrEduClsStuEN.con_ModifyDate:
this.modifyDate = strValue;
    this.hmProperty["modifyDate"] = true;
break;
case clsCurrEduClsStuEN.con_ModifyUserId:
this.modifyUserId = strValue;
    this.hmProperty["modifyUserId"] = true;
break;
case clsCurrEduClsStuEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[CurrEduClsStu]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idEduClsStu = 0;    //教学班学生流水号
public idCurrEduCls = "";    //教学班流水号
public idStu = "";    //学生流水号
public eduClsStuStateId = "";    //教学班学生状态编号
public getScoreTimes = 0;    //获得成绩次数
public score = 0;    //得分
public totalScores = 0;    //总分值
public ranking = 0;    //名次
public percentile = 0;    //百分位
public ranking2 = 0;    //Ranking2
public percentile2 = 0;    //Percentile2
public ranking3 = 0;    //Ranking3
public percentile3 = 0;    //Percentile3
public confirmed = false;    //是否确认
public schoolTerm = "";    //学期
public schoolYear = "";    //学年
public exportDate = "";    //导出日期
public signInDate = "";    //签入时间
public signInStateID = "";    //签入状态表流水号
public signInUser = "";    //签入人
public isOpByTeacher = false;    //是否教师操作
public isSynScore = false;    //是否同步成绩
public lastVisitedDate = "";    //最后访问时间
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"IdEduClsStu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdEduClsStu(): string {return "idEduClsStu";}    //教学班学生流水号

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"IdStu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStu(): string {return "idStu";}    //学生流水号

 /**
 * 常量:"EduClsStuStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsStuStateId(): string {return "eduClsStuStateId";}    //教学班学生状态编号

 /**
 * 常量:"GetScoreTimes"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GetScoreTimes(): string {return "getScoreTimes";}    //获得成绩次数

 /**
 * 常量:"Score"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //得分

 /**
 * 常量:"TotalScores"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TotalScores(): string {return "totalScores";}    //总分值

 /**
 * 常量:"Ranking"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Ranking(): string {return "ranking";}    //名次

 /**
 * 常量:"Percentile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Percentile(): string {return "percentile";}    //百分位

 /**
 * 常量:"Ranking2"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Ranking2(): string {return "ranking2";}    //Ranking2

 /**
 * 常量:"Percentile2"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Percentile2(): string {return "percentile2";}    //Percentile2

 /**
 * 常量:"Ranking3"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Ranking3(): string {return "ranking3";}    //Ranking3

 /**
 * 常量:"Percentile3"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Percentile3(): string {return "percentile3";}    //Percentile3

 /**
 * 常量:"Confirmed"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Confirmed(): string {return "confirmed";}    //是否确认

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"ExportDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExportDate(): string {return "exportDate";}    //导出日期

 /**
 * 常量:"SignInDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SignInDate(): string {return "signInDate";}    //签入时间

 /**
 * 常量:"SignInStateID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SignInStateID(): string {return "signInStateID";}    //签入状态表流水号

 /**
 * 常量:"SignInUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SignInUser(): string {return "signInUser";}    //签入人

 /**
 * 常量:"IsOpByTeacher"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsOpByTeacher(): string {return "isOpByTeacher";}    //是否教师操作

 /**
 * 常量:"IsSynScore"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSynScore(): string {return "isSynScore";}    //是否同步成绩

 /**
 * 常量:"LastVisitedDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LastVisitedDate(): string {return "lastVisitedDate";}    //最后访问时间

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

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