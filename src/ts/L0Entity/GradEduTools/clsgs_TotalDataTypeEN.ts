
 /**
 * 类名:clsgs_TotalDataTypeEN
 * 表名:gs_TotalDataType(01120685)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:10
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
 * 总数据类型表(gs_TotalDataType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_TotalDataTypeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_TotalDataType"; //当前表名,与该类相关的表名
public static _KeyFldName= "TotalDataTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["totalDataTypeId", "totalDataTypeName", "dataTable", "dataTableId", "memo", "onlyId"];
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
private mstrTotalDataTypeId = "";    //总数据类型Id
private mstrTotalDataTypeName = "";    //总数据类型名称
private mstrDataTable = "";    //数据表
private mstrDataTableId = "";    //数据表Id
private mstrMemo = "";    //备注
private mstrOnlyId = "";    //OnlyId

/**
 * 总数据类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTotalDataTypeId (value: string)
{
if (value  != undefined)
{
 this.totalDataTypeId = value;
    this.hmProperty["totalDataTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 总数据类型名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTotalDataTypeName (value: string)
{
if (value  != undefined)
{
 this.totalDataTypeName = value;
    this.hmProperty["totalDataTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据表(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataTable (value: string)
{
if (value  != undefined)
{
 this.dataTable = value;
    this.hmProperty["dataTable"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据表Id(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataTableId (value: string)
{
if (value  != undefined)
{
 this.dataTableId = value;
    this.hmProperty["dataTableId"] = true;
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
 * OnlyId(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOnlyId (value: string)
{
if (value  != undefined)
{
 this.onlyId = value;
    this.hmProperty["onlyId"] = true;
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
case clsgs_TotalDataTypeEN.con_TotalDataTypeId:
return this.totalDataTypeId;
case clsgs_TotalDataTypeEN.con_TotalDataTypeName:
return this.totalDataTypeName;
case clsgs_TotalDataTypeEN.con_DataTable:
return this.dataTable;
case clsgs_TotalDataTypeEN.con_DataTableId:
return this.dataTableId;
case clsgs_TotalDataTypeEN.con_Memo:
return this.memo;
case clsgs_TotalDataTypeEN.con_OnlyId:
return this.onlyId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_TotalDataType]中不存在!`;
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
case clsgs_TotalDataTypeEN.con_TotalDataTypeId:
this.totalDataTypeId = strValue;
    this.hmProperty["totalDataTypeId"] = true;
break;
case clsgs_TotalDataTypeEN.con_TotalDataTypeName:
this.totalDataTypeName = strValue;
    this.hmProperty["totalDataTypeName"] = true;
break;
case clsgs_TotalDataTypeEN.con_DataTable:
this.dataTable = strValue;
    this.hmProperty["dataTable"] = true;
break;
case clsgs_TotalDataTypeEN.con_DataTableId:
this.dataTableId = strValue;
    this.hmProperty["dataTableId"] = true;
break;
case clsgs_TotalDataTypeEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsgs_TotalDataTypeEN.con_OnlyId:
this.onlyId = strValue;
    this.hmProperty["onlyId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_TotalDataType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public totalDataTypeId = "";    //总数据类型Id
public totalDataTypeName = "";    //总数据类型名称
public dataTable = "";    //数据表
public dataTableId = "";    //数据表Id
public memo = "";    //备注
public onlyId = "";    //OnlyId


 /**
 * 常量:"TotalDataTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TotalDataTypeId(): string {return "totalDataTypeId";}    //总数据类型Id

 /**
 * 常量:"TotalDataTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TotalDataTypeName(): string {return "totalDataTypeName";}    //总数据类型名称

 /**
 * 常量:"DataTable"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DataTable(): string {return "dataTable";}    //数据表

 /**
 * 常量:"DataTableId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DataTableId(): string {return "dataTableId";}    //数据表Id

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"OnlyId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OnlyId(): string {return "onlyId";}    //OnlyId

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
 export class enumgs_TotalDataType
{
 /**
 * 论文
 **/
static readonly Paper_01 = "01";
 /**
 * 论文读写
 **/
static readonly PaperReadWrite_02 = "02";
 /**
 * 论文子观点
 **/
static readonly PaperSubViewpoint_03 = "03";
 /**
 * 个人观点
 **/
static readonly Viewpoint_04 = "04";
 /**
 * 专家观点
 **/
static readonly Viewpoint_05 = "05";
 /**
 * 主题概念
 **/
static readonly Concept_06 = "06";
 /**
 * 客观事实
 **/
static readonly TopicObjective_07 = "07";
 /**
 * 客观数据
 **/
static readonly TopicObjective_08 = "08";
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
}