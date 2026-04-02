
 /**
 * 类名:clsRsPoliticsEN
 * 表名:RsPolitics(01120110)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/27 16:36:48
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
 * 政治面貌(RsPolitics)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsRsPoliticsEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "RsPolitics"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdPolitics"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["idPolitics", "politicsId", "politicsName", "politicsIdNgb", "politicsRecruitId", "modifyDate", "modifyUserId"];
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
private mstrIdPolitics = "";    //政治面貌流水号
private mstrPoliticsId = "";    //政治面貌Id
private mstrPoliticsName = "";    //政治面貌
private mstrPoliticsIdNgb = "";    //PoliticsId_NGB
private mstrPoliticsRecruitId = "";    //PoliticsRecruitId
private mstrModifyDate = "";    //修改日期
private mstrModifyUserId = "";    //修改人

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
 * 政治面貌Id(说明:;字段类型:varchar;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPoliticsId (value: string)
{
if (value  != undefined)
{
 this.politicsId = value;
    this.hmProperty["politicsId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 政治面貌(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPoliticsName (value: string)
{
if (value  != undefined)
{
 this.politicsName = value;
    this.hmProperty["politicsName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PoliticsId_NGB(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPoliticsIdNgb (value: string)
{
if (value  != undefined)
{
 this.politicsIdNgb = value;
    this.hmProperty["politicsIdNgb"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PoliticsRecruitId(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPoliticsRecruitId (value: string)
{
if (value  != undefined)
{
 this.politicsRecruitId = value;
    this.hmProperty["politicsRecruitId"] = true;
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
case clsRsPoliticsEN.con_IdPolitics:
return this.idPolitics;
case clsRsPoliticsEN.con_PoliticsId:
return this.politicsId;
case clsRsPoliticsEN.con_PoliticsName:
return this.politicsName;
case clsRsPoliticsEN.con_PoliticsIdNgb:
return this.politicsIdNgb;
case clsRsPoliticsEN.con_PoliticsRecruitId:
return this.politicsRecruitId;
case clsRsPoliticsEN.con_ModifyDate:
return this.modifyDate;
case clsRsPoliticsEN.con_ModifyUserId:
return this.modifyUserId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RsPolitics]中不存在!`;
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
case clsRsPoliticsEN.con_IdPolitics:
this.idPolitics = strValue;
    this.hmProperty["idPolitics"] = true;
break;
case clsRsPoliticsEN.con_PoliticsId:
this.politicsId = strValue;
    this.hmProperty["politicsId"] = true;
break;
case clsRsPoliticsEN.con_PoliticsName:
this.politicsName = strValue;
    this.hmProperty["politicsName"] = true;
break;
case clsRsPoliticsEN.con_PoliticsIdNgb:
this.politicsIdNgb = strValue;
    this.hmProperty["politicsIdNgb"] = true;
break;
case clsRsPoliticsEN.con_PoliticsRecruitId:
this.politicsRecruitId = strValue;
    this.hmProperty["politicsRecruitId"] = true;
break;
case clsRsPoliticsEN.con_ModifyDate:
this.modifyDate = strValue;
    this.hmProperty["modifyDate"] = true;
break;
case clsRsPoliticsEN.con_ModifyUserId:
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
strMsg = `字段名:[${strFldName}]在表对象:[RsPolitics]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idPolitics = "";    //政治面貌流水号
public politicsId = "";    //政治面貌Id
public politicsName = "";    //政治面貌
public politicsIdNgb = "";    //PoliticsId_NGB
public politicsRecruitId = "";    //PoliticsRecruitId
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人


 /**
 * 常量:"IdPolitics"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdPolitics(): string {return "idPolitics";}    //政治面貌流水号

 /**
 * 常量:"PoliticsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PoliticsId(): string {return "politicsId";}    //政治面貌Id

 /**
 * 常量:"PoliticsName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PoliticsName(): string {return "politicsName";}    //政治面貌

 /**
 * 常量:"PoliticsIdNgb"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PoliticsIdNgb(): string {return "politicsIdNgb";}    //PoliticsId_NGB

 /**
 * 常量:"PoliticsRecruitId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PoliticsRecruitId(): string {return "politicsRecruitId";}    //PoliticsRecruitId

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