
 /**
 * 类名:clsSysCommentTypeEN
 * 表名:SysCommentType(01120623)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/15 09:52:58
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
 * 评论类型表(SysCommentType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsSysCommentTypeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "SysCommentType"; //当前表名,与该类相关的表名
public static _KeyFldName= "CommentTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["commentTypeId", "commentTypeName", "commentTable", "commentTableId", "memo"];
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
private mstrCommentTypeId = "";    //评论类型Id
private mstrCommentTypeName = "";    //评论类型名
private mstrCommentTable = "";    //评论表
private mstrCommentTableId = "";    //评论表Id
private mstrMemo = "";    //备注

/**
 * 评论类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCommentTypeId (value: string)
{
if (value  != undefined)
{
 this.commentTypeId = value;
    this.hmProperty["commentTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评论类型名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCommentTypeName (value: string)
{
if (value  != undefined)
{
 this.commentTypeName = value;
    this.hmProperty["commentTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评论表(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCommentTable (value: string)
{
if (value  != undefined)
{
 this.commentTable = value;
    this.hmProperty["commentTable"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评论表Id(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCommentTableId (value: string)
{
if (value  != undefined)
{
 this.commentTableId = value;
    this.hmProperty["commentTableId"] = true;
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
case clsSysCommentTypeEN.con_CommentTypeId:
return this.commentTypeId;
case clsSysCommentTypeEN.con_CommentTypeName:
return this.commentTypeName;
case clsSysCommentTypeEN.con_CommentTable:
return this.commentTable;
case clsSysCommentTypeEN.con_CommentTableId:
return this.commentTableId;
case clsSysCommentTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysCommentType]中不存在!`;
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
case clsSysCommentTypeEN.con_CommentTypeId:
this.commentTypeId = strValue;
    this.hmProperty["commentTypeId"] = true;
break;
case clsSysCommentTypeEN.con_CommentTypeName:
this.commentTypeName = strValue;
    this.hmProperty["commentTypeName"] = true;
break;
case clsSysCommentTypeEN.con_CommentTable:
this.commentTable = strValue;
    this.hmProperty["commentTable"] = true;
break;
case clsSysCommentTypeEN.con_CommentTableId:
this.commentTableId = strValue;
    this.hmProperty["commentTableId"] = true;
break;
case clsSysCommentTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[SysCommentType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public commentTypeId = "";    //评论类型Id
public commentTypeName = "";    //评论类型名
public commentTable = "";    //评论表
public commentTableId = "";    //评论表Id
public memo = "";    //备注


 /**
 * 常量:"CommentTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentTypeId(): string {return "commentTypeId";}    //评论类型Id

 /**
 * 常量:"CommentTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentTypeName(): string {return "commentTypeName";}    //评论类型名

 /**
 * 常量:"CommentTable"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentTable(): string {return "commentTable";}    //评论表

 /**
 * 常量:"CommentTableId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentTableId(): string {return "commentTableId";}    //评论表Id

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
 export class enumSysCommentType
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
 * 教师问题回答
 **/
static readonly qa_Answer_11 = "11";
 /**
 * 论文汇报
 **/
static readonly gs_PaperReport_12 = "12";
 /**
 * 研究成果
 **/
static readonly gs_ResearchResult_13 = "13";
 /**
 * 主题人员
 **/
static readonly RTUserRela_14 = "14";
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