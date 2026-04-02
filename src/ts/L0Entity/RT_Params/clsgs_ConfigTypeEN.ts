
 /**
 * 类名:clsgs_ConfigTypeEN
 * 表名:gs_ConfigType(01120692)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:43
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
 * 配置类型(gs_ConfigType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_ConfigTypeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_ConfigType"; //当前表名,与该类相关的表名
public static _KeyFldName= "ConfigTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["configTypeId", "configTypeName", "dataTable", "dataTableId", "memo"];
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
private mstrConfigTypeId = "";    //配置类型Id
private mstrConfigTypeName = "";    //配置类型名称
private mstrDataTable = "";    //数据表
private mstrDataTableId = "";    //数据表Id
private mstrMemo = "";    //备注

/**
 * 配置类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetConfigTypeId (value: string)
{
if (value  != undefined)
{
 this.configTypeId = value;
    this.hmProperty["configTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 配置类型名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetConfigTypeName (value: string)
{
if (value  != undefined)
{
 this.configTypeName = value;
    this.hmProperty["configTypeName"] = true;
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
case clsgs_ConfigTypeEN.con_ConfigTypeId:
return this.configTypeId;
case clsgs_ConfigTypeEN.con_ConfigTypeName:
return this.configTypeName;
case clsgs_ConfigTypeEN.con_DataTable:
return this.dataTable;
case clsgs_ConfigTypeEN.con_DataTableId:
return this.dataTableId;
case clsgs_ConfigTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_ConfigType]中不存在!`;
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
case clsgs_ConfigTypeEN.con_ConfigTypeId:
this.configTypeId = strValue;
    this.hmProperty["configTypeId"] = true;
break;
case clsgs_ConfigTypeEN.con_ConfigTypeName:
this.configTypeName = strValue;
    this.hmProperty["configTypeName"] = true;
break;
case clsgs_ConfigTypeEN.con_DataTable:
this.dataTable = strValue;
    this.hmProperty["dataTable"] = true;
break;
case clsgs_ConfigTypeEN.con_DataTableId:
this.dataTableId = strValue;
    this.hmProperty["dataTableId"] = true;
break;
case clsgs_ConfigTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[gs_ConfigType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public configTypeId = "";    //配置类型Id
public configTypeName = "";    //配置类型名称
public dataTable = "";    //数据表
public dataTableId = "";    //数据表Id
public memo = "";    //备注


 /**
 * 常量:"ConfigTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ConfigTypeId(): string {return "configTypeId";}    //配置类型Id

 /**
 * 常量:"ConfigTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ConfigTypeName(): string {return "configTypeName";}    //配置类型名称

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