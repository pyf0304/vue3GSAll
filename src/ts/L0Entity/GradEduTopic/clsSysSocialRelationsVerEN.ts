
 /**
 * 类名:clsSysSocialRelationsVerEN
 * 表名:SysSocialRelationsVer(01120645)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:50
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 社会关系版本表(SysSocialRelationsVer)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsSysSocialRelationsVerEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "SysSocialRelationsVer"; //当前表名,与该类相关的表名
public static _KeyFldName= "SocialVId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["socialVId", "socialId", "fullName", "nationality", "workUnit", "major", "achievement", "detailedDescription", "levelId", "updUser", "updDate", "idCurrEduCls", "memo", "citationId"];
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
private mlngSocialVId = 0;    //SocialVId
private mstrSocialId = "";    //社会Id
private mstrFullName = "";    //姓名
private mstrNationality = "";    //国籍
private mstrWorkUnit = "";    //工作单位
private mstrMajor = "";    //专业
private mstrAchievement = "";    //成就
private mstrDetailedDescription = "";    //详细说明
private mstrLevelId = "";    //级别Id
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrMemo = "";    //备注
private mstrCitationId = "";    //引用Id

/**
 * SocialVId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSocialVId (value: number)
{
if (value  != undefined)
{
 this.socialVId = value;
    this.hmProperty["socialVId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 社会Id(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSocialId (value: string)
{
if (value  != undefined)
{
 this.socialId = value;
    this.hmProperty["socialId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 姓名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFullName (value: string)
{
if (value  != undefined)
{
 this.fullName = value;
    this.hmProperty["fullName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 国籍(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetNationality (value: string)
{
if (value  != undefined)
{
 this.nationality = value;
    this.hmProperty["nationality"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 工作单位(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWorkUnit (value: string)
{
if (value  != undefined)
{
 this.workUnit = value;
    this.hmProperty["workUnit"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 专业(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMajor (value: string)
{
if (value  != undefined)
{
 this.major = value;
    this.hmProperty["major"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 成就(说明:;字段类型:varchar;字段长度:5000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAchievement (value: string)
{
if (value  != undefined)
{
 this.achievement = value;
    this.hmProperty["achievement"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 详细说明(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDetailedDescription (value: string)
{
if (value  != undefined)
{
 this.detailedDescription = value;
    this.hmProperty["detailedDescription"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 级别Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLevelId (value: string)
{
if (value  != undefined)
{
 this.levelId = value;
    this.hmProperty["levelId"] = true;
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
 * 引用Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCitationId (value: string)
{
if (value  != undefined)
{
 this.citationId = value;
    this.hmProperty["citationId"] = true;
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
case clsSysSocialRelationsVerEN.con_SocialVId:
return this.socialVId;
case clsSysSocialRelationsVerEN.con_SocialId:
return this.socialId;
case clsSysSocialRelationsVerEN.con_FullName:
return this.fullName;
case clsSysSocialRelationsVerEN.con_Nationality:
return this.nationality;
case clsSysSocialRelationsVerEN.con_WorkUnit:
return this.workUnit;
case clsSysSocialRelationsVerEN.con_Major:
return this.major;
case clsSysSocialRelationsVerEN.con_Achievement:
return this.achievement;
case clsSysSocialRelationsVerEN.con_DetailedDescription:
return this.detailedDescription;
case clsSysSocialRelationsVerEN.con_LevelId:
return this.levelId;
case clsSysSocialRelationsVerEN.con_UpdUser:
return this.updUser;
case clsSysSocialRelationsVerEN.con_UpdDate:
return this.updDate;
case clsSysSocialRelationsVerEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsSysSocialRelationsVerEN.con_Memo:
return this.memo;
case clsSysSocialRelationsVerEN.con_CitationId:
return this.citationId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysSocialRelationsVer]中不存在!`;
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
case clsSysSocialRelationsVerEN.con_SocialVId:
this.socialVId = Number(strValue);
    this.hmProperty["socialVId"] = true;
break;
case clsSysSocialRelationsVerEN.con_SocialId:
this.socialId = strValue;
    this.hmProperty["socialId"] = true;
break;
case clsSysSocialRelationsVerEN.con_FullName:
this.fullName = strValue;
    this.hmProperty["fullName"] = true;
break;
case clsSysSocialRelationsVerEN.con_Nationality:
this.nationality = strValue;
    this.hmProperty["nationality"] = true;
break;
case clsSysSocialRelationsVerEN.con_WorkUnit:
this.workUnit = strValue;
    this.hmProperty["workUnit"] = true;
break;
case clsSysSocialRelationsVerEN.con_Major:
this.major = strValue;
    this.hmProperty["major"] = true;
break;
case clsSysSocialRelationsVerEN.con_Achievement:
this.achievement = strValue;
    this.hmProperty["achievement"] = true;
break;
case clsSysSocialRelationsVerEN.con_DetailedDescription:
this.detailedDescription = strValue;
    this.hmProperty["detailedDescription"] = true;
break;
case clsSysSocialRelationsVerEN.con_LevelId:
this.levelId = strValue;
    this.hmProperty["levelId"] = true;
break;
case clsSysSocialRelationsVerEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsSysSocialRelationsVerEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsSysSocialRelationsVerEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsSysSocialRelationsVerEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsSysSocialRelationsVerEN.con_CitationId:
this.citationId = strValue;
    this.hmProperty["citationId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysSocialRelationsVer]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public socialVId = 0;    //SocialVId
public socialId = "";    //社会Id
public fullName = "";    //姓名
public nationality = "";    //国籍
public workUnit = "";    //工作单位
public major = "";    //专业
public achievement = "";    //成就
public detailedDescription = "";    //详细说明
public levelId = "";    //级别Id
public updUser = "";    //修改人
public updDate = "";    //修改日期
public idCurrEduCls = "";    //教学班流水号
public memo = "";    //备注
public citationId = "";    //引用Id


 /**
 * 常量:"SocialVId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SocialVId(): string {return "socialVId";}    //SocialVId

 /**
 * 常量:"SocialId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SocialId(): string {return "socialId";}    //社会Id

 /**
 * 常量:"FullName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_FullName(): string {return "fullName";}    //姓名

 /**
 * 常量:"Nationality"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Nationality(): string {return "nationality";}    //国籍

 /**
 * 常量:"WorkUnit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_WorkUnit(): string {return "workUnit";}    //工作单位

 /**
 * 常量:"Major"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Major(): string {return "major";}    //专业

 /**
 * 常量:"Achievement"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Achievement(): string {return "achievement";}    //成就

 /**
 * 常量:"DetailedDescription"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DetailedDescription(): string {return "detailedDescription";}    //详细说明

 /**
 * 常量:"LevelId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LevelId(): string {return "levelId";}    //级别Id

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"CitationId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CitationId(): string {return "citationId";}    //引用Id

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