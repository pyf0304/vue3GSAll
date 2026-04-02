
 /**
 * 类名:clsRsProvinceEN
 * 表名:RsProvince(01120107)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:24
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 省份(RsProvince)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsRsProvinceEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "RsProvince"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdProvince"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["idProvince", "provinceID", "provinceName", "provinceRecuitID", "modifyDate", "modifyUserId"];
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
private mstrIdProvince = "";    //省份流水号
private mstrProvinceID = "";    //ProvinceID
private mstrProvinceName = "";    //ProvinceName
private mstrProvinceRecuitID = "";    //ProvinceRecuitID
private mstrModifyDate = "";    //修改日期
private mstrModifyUserId = "";    //修改人

/**
 * 省份流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdProvince (value: string)
{
if (value  != undefined)
{
 this.idProvince = value;
    this.hmProperty["idProvince"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * ProvinceID(说明:;字段类型:varchar;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProvinceID (value: string)
{
if (value  != undefined)
{
 this.provinceID = value;
    this.hmProperty["provinceID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * ProvinceName(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProvinceName (value: string)
{
if (value  != undefined)
{
 this.provinceName = value;
    this.hmProperty["provinceName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * ProvinceRecuitID(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProvinceRecuitID (value: string)
{
if (value  != undefined)
{
 this.provinceRecuitID = value;
    this.hmProperty["provinceRecuitID"] = true;
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
case clsRsProvinceEN.con_IdProvince:
return this.idProvince;
case clsRsProvinceEN.con_ProvinceID:
return this.provinceID;
case clsRsProvinceEN.con_ProvinceName:
return this.provinceName;
case clsRsProvinceEN.con_ProvinceRecuitID:
return this.provinceRecuitID;
case clsRsProvinceEN.con_ModifyDate:
return this.modifyDate;
case clsRsProvinceEN.con_ModifyUserId:
return this.modifyUserId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RsProvince]中不存在!`;
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
case clsRsProvinceEN.con_IdProvince:
this.idProvince = strValue;
    this.hmProperty["idProvince"] = true;
break;
case clsRsProvinceEN.con_ProvinceID:
this.provinceID = strValue;
    this.hmProperty["provinceID"] = true;
break;
case clsRsProvinceEN.con_ProvinceName:
this.provinceName = strValue;
    this.hmProperty["provinceName"] = true;
break;
case clsRsProvinceEN.con_ProvinceRecuitID:
this.provinceRecuitID = strValue;
    this.hmProperty["provinceRecuitID"] = true;
break;
case clsRsProvinceEN.con_ModifyDate:
this.modifyDate = strValue;
    this.hmProperty["modifyDate"] = true;
break;
case clsRsProvinceEN.con_ModifyUserId:
this.modifyUserId = strValue;
    this.hmProperty["modifyUserId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RsProvince]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idProvince = "";    //省份流水号
public provinceID = "";    //ProvinceID
public provinceName = "";    //ProvinceName
public provinceRecuitID = "";    //ProvinceRecuitID
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人


 /**
 * 常量:"IdProvince"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdProvince(): string {return "idProvince";}    //省份流水号

 /**
 * 常量:"ProvinceID"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProvinceID(): string {return "provinceID";}    //ProvinceID

 /**
 * 常量:"ProvinceName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProvinceName(): string {return "provinceName";}    //ProvinceName

 /**
 * 常量:"ProvinceRecuitID"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProvinceRecuitID(): string {return "provinceRecuitID";}    //ProvinceRecuitID

 /**
 * 常量:"ModifyDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

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