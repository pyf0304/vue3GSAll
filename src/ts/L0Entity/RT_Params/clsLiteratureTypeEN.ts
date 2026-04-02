
 /**
 * 类名:clsLiteratureTypeEN
 * 表名:LiteratureType(01120557)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/26 02:02:24
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培参数(RT_Params)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 文献类型(LiteratureType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsLiteratureTypeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "LiteratureType"; //当前表名,与该类相关的表名
public static _KeyFldName= "LiteratureTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["literatureTypeId", "literatureTypeName", "literatureTypeENName", "updUserId", "updDate"];
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
private mstrLiteratureTypeId = "";    //文献类型Id
private mstrLiteratureTypeName = "";    //文献类型名
private mstrLiteratureTypeENName = "";    //文献类型英文名
private mstrUpdUserId = "";    //修改用户Id
private mstrUpdDate = "";    //修改日期

/**
 * 文献类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLiteratureTypeId (value: string)
{
if (value  != undefined)
{
 this.literatureTypeId = value;
    this.hmProperty["literatureTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文献类型名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLiteratureTypeName (value: string)
{
if (value  != undefined)
{
 this.literatureTypeName = value;
    this.hmProperty["literatureTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文献类型英文名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLiteratureTypeENName (value: string)
{
if (value  != undefined)
{
 this.literatureTypeENName = value;
    this.hmProperty["literatureTypeENName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
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
case clsLiteratureTypeEN.con_LiteratureTypeId:
return this.literatureTypeId;
case clsLiteratureTypeEN.con_LiteratureTypeName:
return this.literatureTypeName;
case clsLiteratureTypeEN.con_LiteratureTypeENName:
return this.literatureTypeENName;
case clsLiteratureTypeEN.con_UpdUserId:
return this.updUserId;
case clsLiteratureTypeEN.con_UpdDate:
return this.updDate;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[LiteratureType]中不存在!`;
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
case clsLiteratureTypeEN.con_LiteratureTypeId:
this.literatureTypeId = strValue;
    this.hmProperty["literatureTypeId"] = true;
break;
case clsLiteratureTypeEN.con_LiteratureTypeName:
this.literatureTypeName = strValue;
    this.hmProperty["literatureTypeName"] = true;
break;
case clsLiteratureTypeEN.con_LiteratureTypeENName:
this.literatureTypeENName = strValue;
    this.hmProperty["literatureTypeENName"] = true;
break;
case clsLiteratureTypeEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsLiteratureTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[LiteratureType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public literatureTypeId = "";    //文献类型Id
public literatureTypeName = "";    //文献类型名
public literatureTypeENName = "";    //文献类型英文名
public updUserId = "";    //修改用户Id
public updDate = "";    //修改日期


 /**
 * 常量:"LiteratureTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LiteratureTypeId(): string {return "literatureTypeId";}    //文献类型Id

 /**
 * 常量:"LiteratureTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LiteratureTypeName(): string {return "literatureTypeName";}    //文献类型名

 /**
 * 常量:"LiteratureTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LiteratureTypeENName(): string {return "literatureTypeENName";}    //文献类型英文名

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

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
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumLiteratureType
{
 /**
 * 综述类
 **/
static readonly ReviewType_01 = "01";
 /**
 * 实证研究类
 **/
static readonly EmpiricalResearchType_02 = "02";
 /**
 * 理论类
 **/
static readonly TheoreticalType_03 = "03";
 /**
 * 平台研究
 **/
static readonly PlatformStudy_04 = "04";
 /**
 * 中学阅读
 **/
static readonly SecondarySchoolReading_05 = "05";
}