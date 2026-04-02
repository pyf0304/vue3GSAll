
 /**
 * 类名:clsXzGradeEN
 * 表名:XzGrade(01120349)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/26 01:34:36
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
 * 年级(XzGrade)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsXzGradeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "XzGrade"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdGrade"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["idGrade", "gradeName", "idStudyLevel", "gradeLeaderId", "gradeIndex", "modifyUserId", "modifyDate", "memo"];
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
private mstrIdGrade = "";    //年级流水号
private mstrGradeName = "";    //年级名称
private mstrIdStudyLevel = "";    //学段流水号
private mstrGradeLeaderId = "";    //年级组长Id
private mintGradeIndex = 0;    //年级序号
private mstrModifyUserId = "";    //修改人
private mstrModifyDate = "";    //修改日期
private mstrMemo = "";    //备注

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
 * 年级名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGradeName (value: string)
{
if (value  != undefined)
{
 this.gradeName = value;
    this.hmProperty["gradeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学段流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStudyLevel (value: string)
{
if (value  != undefined)
{
 this.idStudyLevel = value;
    this.hmProperty["idStudyLevel"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 年级组长Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGradeLeaderId (value: string)
{
if (value  != undefined)
{
 this.gradeLeaderId = value;
    this.hmProperty["gradeLeaderId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 年级序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGradeIndex (value: number)
{
if (value  != undefined)
{
 this.gradeIndex = value;
    this.hmProperty["gradeIndex"] = true;
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
case clsXzGradeEN.con_IdGrade:
return this.idGrade;
case clsXzGradeEN.con_GradeName:
return this.gradeName;
case clsXzGradeEN.con_IdStudyLevel:
return this.idStudyLevel;
case clsXzGradeEN.con_GradeLeaderId:
return this.gradeLeaderId;
case clsXzGradeEN.con_GradeIndex:
return this.gradeIndex;
case clsXzGradeEN.con_ModifyUserId:
return this.modifyUserId;
case clsXzGradeEN.con_ModifyDate:
return this.modifyDate;
case clsXzGradeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzGrade]中不存在!`;
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
case clsXzGradeEN.con_IdGrade:
this.idGrade = strValue;
    this.hmProperty["idGrade"] = true;
break;
case clsXzGradeEN.con_GradeName:
this.gradeName = strValue;
    this.hmProperty["gradeName"] = true;
break;
case clsXzGradeEN.con_IdStudyLevel:
this.idStudyLevel = strValue;
    this.hmProperty["idStudyLevel"] = true;
break;
case clsXzGradeEN.con_GradeLeaderId:
this.gradeLeaderId = strValue;
    this.hmProperty["gradeLeaderId"] = true;
break;
case clsXzGradeEN.con_GradeIndex:
this.gradeIndex = Number(strValue);
    this.hmProperty["gradeIndex"] = true;
break;
case clsXzGradeEN.con_ModifyUserId:
this.modifyUserId = strValue;
    this.hmProperty["modifyUserId"] = true;
break;
case clsXzGradeEN.con_ModifyDate:
this.modifyDate = strValue;
    this.hmProperty["modifyDate"] = true;
break;
case clsXzGradeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[XzGrade]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idGrade = "";    //年级流水号
public gradeName = "";    //年级名称
public idStudyLevel = "";    //学段流水号
public gradeLeaderId = "";    //年级组长Id
public gradeIndex = 0;    //年级序号
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期
public memo = "";    //备注


 /**
 * 常量:"IdGrade"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"GradeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GradeName(): string {return "gradeName";}    //年级名称

 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //学段流水号

 /**
 * 常量:"GradeLeaderId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GradeLeaderId(): string {return "gradeLeaderId";}    //年级组长Id

 /**
 * 常量:"GradeIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GradeIndex(): string {return "gradeIndex";}    //年级序号

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

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