
 /**
 * 类名:clsSysVoteTypeEN
 * 表名:SysVoteType(01120638)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:47
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
 * 系统点赞类型(SysVoteType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsSysVoteTypeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "SysVoteType"; //当前表名,与该类相关的表名
public static _KeyFldName= "VoteTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["voteTypeId", "voteTypeName", "voteTable", "voteTableId", "memo"];
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
private mstrVoteTypeId = "";    //点赞类型Id
private mstrVoteTypeName = "";    //点赞类型名称
private mstrVoteTable = "";    //点赞表
private mstrVoteTableId = "";    //点赞表Id
private mstrMemo = "";    //备注

/**
 * 点赞类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVoteTypeId (value: string)
{
if (value  != undefined)
{
 this.voteTypeId = value;
    this.hmProperty["voteTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 点赞类型名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVoteTypeName (value: string)
{
if (value  != undefined)
{
 this.voteTypeName = value;
    this.hmProperty["voteTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 点赞表(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVoteTable (value: string)
{
if (value  != undefined)
{
 this.voteTable = value;
    this.hmProperty["voteTable"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 点赞表Id(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVoteTableId (value: string)
{
if (value  != undefined)
{
 this.voteTableId = value;
    this.hmProperty["voteTableId"] = true;
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
case clsSysVoteTypeEN.con_VoteTypeId:
return this.voteTypeId;
case clsSysVoteTypeEN.con_VoteTypeName:
return this.voteTypeName;
case clsSysVoteTypeEN.con_VoteTable:
return this.voteTable;
case clsSysVoteTypeEN.con_VoteTableId:
return this.voteTableId;
case clsSysVoteTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysVoteType]中不存在!`;
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
case clsSysVoteTypeEN.con_VoteTypeId:
this.voteTypeId = strValue;
    this.hmProperty["voteTypeId"] = true;
break;
case clsSysVoteTypeEN.con_VoteTypeName:
this.voteTypeName = strValue;
    this.hmProperty["voteTypeName"] = true;
break;
case clsSysVoteTypeEN.con_VoteTable:
this.voteTable = strValue;
    this.hmProperty["voteTable"] = true;
break;
case clsSysVoteTypeEN.con_VoteTableId:
this.voteTableId = strValue;
    this.hmProperty["voteTableId"] = true;
break;
case clsSysVoteTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[SysVoteType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public voteTypeId = "";    //点赞类型Id
public voteTypeName = "";    //点赞类型名称
public voteTable = "";    //点赞表
public voteTableId = "";    //点赞表Id
public memo = "";    //备注


 /**
 * 常量:"VoteTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteTypeId(): string {return "voteTypeId";}    //点赞类型Id

 /**
 * 常量:"VoteTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteTypeName(): string {return "voteTypeName";}    //点赞类型名称

 /**
 * 常量:"VoteTable"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteTable(): string {return "voteTable";}    //点赞表

 /**
 * 常量:"VoteTableId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteTableId(): string {return "voteTableId";}    //点赞表Id

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
 export class enumSysVoteType
{
 /**
 * 论文
 **/
static readonly Paper_01 = "01";
 /**
 * 论文子观点
 **/
static readonly PaperSubViewpoint_02 = "02";
 /**
 * 个人观点
 **/
static readonly Viewpoint_03 = "03";
 /**
 * 专家观点
 **/
static readonly Viewpoint_04 = "04";
 /**
 * 主题概念
 **/
static readonly Concept_05 = "05";
 /**
 * 客观事实
 **/
static readonly TopicObjective_06 = "06";
 /**
 * 客观数据
 **/
static readonly TopicObjective_07 = "07";
 /**
 * 人员
 **/
static readonly User_08 = "08";
 /**
 * 技能
 **/
static readonly SysSkill_09 = "09";
 /**
 * 社会关系
 **/
static readonly SysSocialRelations_10 = "10";
 /**
 * 答疑提问
 **/
static readonly qa_Questions_11 = "11";
 /**
 * 答疑回答
 **/
static readonly qa_Answer_12 = "12";
 /**
 * 中学课件
 **/
static readonly zx_Text_21 = "21";
 /**
 * 中学个人观点
 **/
static readonly zx_Viewpoint_22 = "22";
 /**
 * 中学专家观点
 **/
static readonly zx_Viewpoint_23 = "23";
 /**
 * 中学概念
 **/
static readonly zx_Concept_24 = "24";
 /**
 * 中学客观事实
 **/
static readonly zx_TopicObjective_25 = "25";
 /**
 * 中学客观数据
 **/
static readonly zx_TopicObjective_26 = "26";
 /**
 * 中学技能
 **/
static readonly zx_Skill_27 = "27";
 /**
 * 中学社会关系
 **/
static readonly zx_SocialRelations_28 = "28";
}