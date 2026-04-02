
 /**
 * 类名:clsSysScoreWeightEN
 * 表名:SysScoreWeight(01120629)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:27
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 系统分数权重表(SysScoreWeight)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsSysScoreWeightEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "SysScoreWeight"; //当前表名,与该类相关的表名
public static _KeyFldName= "ScoreWeightId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["scoreWeightId", "memo", "isPublic", "scoreTypeId", "scoreWeightValue", "updDate", "updUser", "idCurrEduCls"];
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
private mstrScoreWeightId = "";    //分数权重Id
private mstrMemo = "";    //备注
private mbolIsPublic = false;    //是否公开
private mstrScoreTypeId = "";    //分数类型Id
private mstrScoreWeightValue = "";    //分数权重值
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrIdCurrEduCls = "";    //教学班流水号

/**
 * 分数权重Id(说明:;字段类型:char;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScoreWeightId (value: string)
{
if (value  != undefined)
{
 this.scoreWeightId = value;
    this.hmProperty["scoreWeightId"] = true;
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
 * 是否公开(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsPublic (value: boolean)
{
if (value  != undefined)
{
 this.isPublic = value;
    this.hmProperty["isPublic"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 分数类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScoreTypeId (value: string)
{
if (value  != undefined)
{
 this.scoreTypeId = value;
    this.hmProperty["scoreTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 分数权重值(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScoreWeightValue (value: string)
{
if (value  != undefined)
{
 this.scoreWeightValue = value;
    this.hmProperty["scoreWeightValue"] = true;
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
case clsSysScoreWeightEN.con_ScoreWeightId:
return this.scoreWeightId;
case clsSysScoreWeightEN.con_Memo:
return this.memo;
case clsSysScoreWeightEN.con_IsPublic:
return this.isPublic;
case clsSysScoreWeightEN.con_ScoreTypeId:
return this.scoreTypeId;
case clsSysScoreWeightEN.con_ScoreWeightValue:
return this.scoreWeightValue;
case clsSysScoreWeightEN.con_UpdDate:
return this.updDate;
case clsSysScoreWeightEN.con_UpdUser:
return this.updUser;
case clsSysScoreWeightEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysScoreWeight]中不存在!`;
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
case clsSysScoreWeightEN.con_ScoreWeightId:
this.scoreWeightId = strValue;
    this.hmProperty["scoreWeightId"] = true;
break;
case clsSysScoreWeightEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsSysScoreWeightEN.con_IsPublic:
this.isPublic = Boolean(strValue);
    this.hmProperty["isPublic"] = true;
break;
case clsSysScoreWeightEN.con_ScoreTypeId:
this.scoreTypeId = strValue;
    this.hmProperty["scoreTypeId"] = true;
break;
case clsSysScoreWeightEN.con_ScoreWeightValue:
this.scoreWeightValue = strValue;
    this.hmProperty["scoreWeightValue"] = true;
break;
case clsSysScoreWeightEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsSysScoreWeightEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsSysScoreWeightEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysScoreWeight]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public scoreWeightId = "";    //分数权重Id
public memo = "";    //备注
public isPublic = false;    //是否公开
public scoreTypeId = "";    //分数类型Id
public scoreWeightValue = "";    //分数权重值
public updDate = "";    //修改日期
public updUser = "";    //修改人
public idCurrEduCls = "";    //教学班流水号


 /**
 * 常量:"ScoreWeightId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ScoreWeightId(): string {return "scoreWeightId";}    //分数权重Id

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IsPublic"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsPublic(): string {return "isPublic";}    //是否公开

 /**
 * 常量:"ScoreTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ScoreTypeId(): string {return "scoreTypeId";}    //分数类型Id

 /**
 * 常量:"ScoreWeightValue"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ScoreWeightValue(): string {return "scoreWeightValue";}    //分数权重值

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
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

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