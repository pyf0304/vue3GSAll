
 /**
 * 类名:clsSubViewpointTypeEN
 * 表名:SubViewpointType(01120533)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:38
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
 * 子观点类型表(SubViewpointType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsSubViewpointTypeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "SubViewpointType"; //当前表名,与该类相关的表名
public static _KeyFldName= "SubViewpointTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["subViewpointTypeId", "subViewpointTypeName", "subViewpointTypeENName", "defaTitle", "orderNum", "updDate", "updUserId", "memo"];
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
private mstrSubViewpointTypeId = "";    //类型Id
private mstrSubViewpointTypeName = "";    //类型名称
private mstrSubViewpointTypeENName = "";    //类型英文名
private mstrDefaTitle = "";    //默认标题
private mintOrderNum = 0;    //序号
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 类型Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSubViewpointTypeId (value: string)
{
if (value  != undefined)
{
 this.subViewpointTypeId = value;
    this.hmProperty["subViewpointTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 类型名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSubViewpointTypeName (value: string)
{
if (value  != undefined)
{
 this.subViewpointTypeName = value;
    this.hmProperty["subViewpointTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 类型英文名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSubViewpointTypeENName (value: string)
{
if (value  != undefined)
{
 this.subViewpointTypeENName = value;
    this.hmProperty["subViewpointTypeENName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 默认标题(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDefaTitle (value: string)
{
if (value  != undefined)
{
 this.defaTitle = value;
    this.hmProperty["defaTitle"] = true;
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
case clsSubViewpointTypeEN.con_SubViewpointTypeId:
return this.subViewpointTypeId;
case clsSubViewpointTypeEN.con_SubViewpointTypeName:
return this.subViewpointTypeName;
case clsSubViewpointTypeEN.con_SubViewpointTypeENName:
return this.subViewpointTypeENName;
case clsSubViewpointTypeEN.con_DefaTitle:
return this.defaTitle;
case clsSubViewpointTypeEN.con_OrderNum:
return this.orderNum;
case clsSubViewpointTypeEN.con_UpdDate:
return this.updDate;
case clsSubViewpointTypeEN.con_UpdUserId:
return this.updUserId;
case clsSubViewpointTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SubViewpointType]中不存在!`;
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
case clsSubViewpointTypeEN.con_SubViewpointTypeId:
this.subViewpointTypeId = strValue;
    this.hmProperty["subViewpointTypeId"] = true;
break;
case clsSubViewpointTypeEN.con_SubViewpointTypeName:
this.subViewpointTypeName = strValue;
    this.hmProperty["subViewpointTypeName"] = true;
break;
case clsSubViewpointTypeEN.con_SubViewpointTypeENName:
this.subViewpointTypeENName = strValue;
    this.hmProperty["subViewpointTypeENName"] = true;
break;
case clsSubViewpointTypeEN.con_DefaTitle:
this.defaTitle = strValue;
    this.hmProperty["defaTitle"] = true;
break;
case clsSubViewpointTypeEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsSubViewpointTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsSubViewpointTypeEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsSubViewpointTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[SubViewpointType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public subViewpointTypeId = "";    //类型Id
public subViewpointTypeName = "";    //类型名称
public subViewpointTypeENName = "";    //类型英文名
public defaTitle = "";    //默认标题
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"SubViewpointTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubViewpointTypeId(): string {return "subViewpointTypeId";}    //类型Id

 /**
 * 常量:"SubViewpointTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubViewpointTypeName(): string {return "subViewpointTypeName";}    //类型名称

 /**
 * 常量:"SubViewpointTypeENName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubViewpointTypeENName(): string {return "subViewpointTypeENName";}    //类型英文名

 /**
 * 常量:"DefaTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DefaTitle(): string {return "defaTitle";}    //默认标题

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
 * 常量:"UpdUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

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
 export class enumSubViewpointType
{
 /**
 * 问题提出过程
 **/
static readonly QuestioningProcess_00000001 = "00000001";
 /**
 * 文献综述
 **/
static readonly LiteratureReview_00000002 = "00000002";
 /**
 * 研究意义
 **/
static readonly Significance_00000003 = "00000003";
 /**
 * 关键概念定义
 **/
static readonly DefinitionOfKeyConcepts_00000004 = "00000004";
 /**
 * 研究问题
 **/
static readonly ResearchProblem_00000005 = "00000005";
 /**
 * 研究流程
 **/
static readonly ResearchProcess_00000006 = "00000006";
 /**
 * 研究工具
 **/
static readonly ResearchTool_00000007 = "00000007";
 /**
 * 表格解读
 **/
static readonly TableInterpretation_00000008 = "00000008";
 /**
 * 学习预测模型
 **/
static readonly LearningPredictiveModels_00000009 = "00000009";
 /**
 * 讨论总结
 **/
static readonly DiscussionSummary_00000010 = "00000010";
}