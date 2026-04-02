
 /**
 * 类名:clsgs_KnowledgeTypeEN
 * 表名:gs_KnowledgeType(01120954)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/12 00:40:43
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
 * 知识类型(gs_KnowledgeType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_KnowledgeTypeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_KnowledgeType"; //当前表名,与该类相关的表名
public static _KeyFldName= "gsKnowledgeTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["gsKnowledgeTypeId", "gsKnowledgeTypeName", "knowledgeTypeENName", "orderNum", "updDate", "updUser", "memo"];
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
private mstrgsKnowledgeTypeId = "";    //知识类型Id
private mstrgsKnowledgeTypeName = "";    //知识类型名
private mstrKnowledgeTypeENName = "";    //知识类型英文名
private mintOrderNum = 0;    //序号
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 知识类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetgsKnowledgeTypeId (value: string)
{
if (value  != undefined)
{
 this.gsKnowledgeTypeId = value;
    this.hmProperty["gsKnowledgeTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识类型名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetgsKnowledgeTypeName (value: string)
{
if (value  != undefined)
{
 this.gsKnowledgeTypeName = value;
    this.hmProperty["gsKnowledgeTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeTypeENName (value: string)
{
if (value  != undefined)
{
 this.knowledgeTypeENName = value;
    this.hmProperty["knowledgeTypeENName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
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
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId:
return this.gsKnowledgeTypeId;
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeName:
return this.gsKnowledgeTypeName;
case clsgs_KnowledgeTypeEN.con_KnowledgeTypeENName:
return this.knowledgeTypeENName;
case clsgs_KnowledgeTypeEN.con_OrderNum:
return this.orderNum;
case clsgs_KnowledgeTypeEN.con_UpdDate:
return this.updDate;
case clsgs_KnowledgeTypeEN.con_UpdUser:
return this.updUser;
case clsgs_KnowledgeTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgeType]中不存在!`;
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
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId:
this.gsKnowledgeTypeId = strValue;
    this.hmProperty["gsKnowledgeTypeId"] = true;
break;
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeName:
this.gsKnowledgeTypeName = strValue;
    this.hmProperty["gsKnowledgeTypeName"] = true;
break;
case clsgs_KnowledgeTypeEN.con_KnowledgeTypeENName:
this.knowledgeTypeENName = strValue;
    this.hmProperty["knowledgeTypeENName"] = true;
break;
case clsgs_KnowledgeTypeEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsgs_KnowledgeTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsgs_KnowledgeTypeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsgs_KnowledgeTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgeType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public gsKnowledgeTypeId = "";    //知识类型Id
public gsKnowledgeTypeName = "";    //知识类型名
public knowledgeTypeENName = "";    //知识类型英文名
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"gsKnowledgeTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_gsKnowledgeTypeId(): string {return "gsKnowledgeTypeId";}    //知识类型Id

 /**
 * 常量:"gsKnowledgeTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_gsKnowledgeTypeName(): string {return "gsKnowledgeTypeName";}    //知识类型名

 /**
 * 常量:"KnowledgeTypeENName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KnowledgeTypeENName(): string {return "knowledgeTypeENName";}    //知识类型英文名

 /**
 * 常量:"OrderNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
 export class enumgs_KnowledgeType
{
 /**
 * 个人观点
 **/
static readonly PersonalOpinion_01 = "01";
 /**
 * 专家观点
 **/
static readonly ExpertOpinion_02 = "02";
 /**
 * 概念
 **/
static readonly Concept_03 = "03";
 /**
 * 客观事实
 **/
static readonly ObjectiveFact_04 = "04";
 /**
 * 客观数据
 **/
static readonly ObjectiveData_05 = "05";
 /**
 * 技能
 **/
static readonly Skill_06 = "06";
 /**
 * 社会关系
 **/
static readonly SocialRelationships_07 = "07";
}