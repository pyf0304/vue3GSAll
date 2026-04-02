
 /**
 * 类名:clsPaperSubResTypeEN
 * 表名:PaperSubResType(01120965)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/25 16:56:07
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 论文子资源类型(PaperSubResType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsPaperSubResTypeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "PaperSubResType"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperSubResTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["paperSubResTypeId", "paperSubResTypeName", "paperSubResTypeENName", "fileExtentNameLst", "fileExtentNameLst2", "isUse", "orderNum", "updDate", "updUser", "memo"];
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
private mstrPaperSubResTypeId = "";    //论文子资源类型Id
private mstrPaperSubResTypeName = "";    //论文子资源类型名
private mstrPaperSubResTypeENName = "";    //论文子资源类型英文名
private mstrFileExtentNameLst = "";    //文件扩展名列表
private mstrFileExtentNameLst2 = "";    //文件扩展名列表2
private mbolIsUse = false;    //是否使用
private mintOrderNum = 0;    //序号
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 论文子资源类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperSubResTypeId (value: string)
{
if (value  != undefined)
{
 this.paperSubResTypeId = value;
    this.hmProperty["paperSubResTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 论文子资源类型名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperSubResTypeName (value: string)
{
if (value  != undefined)
{
 this.paperSubResTypeName = value;
    this.hmProperty["paperSubResTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 论文子资源类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperSubResTypeENName (value: string)
{
if (value  != undefined)
{
 this.paperSubResTypeENName = value;
    this.hmProperty["paperSubResTypeENName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件扩展名列表(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileExtentNameLst (value: string)
{
if (value  != undefined)
{
 this.fileExtentNameLst = value;
    this.hmProperty["fileExtentNameLst"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件扩展名列表2(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileExtentNameLst2 (value: string)
{
if (value  != undefined)
{
 this.fileExtentNameLst2 = value;
    this.hmProperty["fileExtentNameLst2"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsUse (value: boolean)
{
if (value  != undefined)
{
 this.isUse = value;
    this.hmProperty["isUse"] = true;
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
case clsPaperSubResTypeEN.con_PaperSubResTypeId:
return this.paperSubResTypeId;
case clsPaperSubResTypeEN.con_PaperSubResTypeName:
return this.paperSubResTypeName;
case clsPaperSubResTypeEN.con_PaperSubResTypeENName:
return this.paperSubResTypeENName;
case clsPaperSubResTypeEN.con_FileExtentNameLst:
return this.fileExtentNameLst;
case clsPaperSubResTypeEN.con_FileExtentNameLst2:
return this.fileExtentNameLst2;
case clsPaperSubResTypeEN.con_IsUse:
return this.isUse;
case clsPaperSubResTypeEN.con_OrderNum:
return this.orderNum;
case clsPaperSubResTypeEN.con_UpdDate:
return this.updDate;
case clsPaperSubResTypeEN.con_UpdUser:
return this.updUser;
case clsPaperSubResTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[PaperSubResType]中不存在!`;
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
case clsPaperSubResTypeEN.con_PaperSubResTypeId:
this.paperSubResTypeId = strValue;
    this.hmProperty["paperSubResTypeId"] = true;
break;
case clsPaperSubResTypeEN.con_PaperSubResTypeName:
this.paperSubResTypeName = strValue;
    this.hmProperty["paperSubResTypeName"] = true;
break;
case clsPaperSubResTypeEN.con_PaperSubResTypeENName:
this.paperSubResTypeENName = strValue;
    this.hmProperty["paperSubResTypeENName"] = true;
break;
case clsPaperSubResTypeEN.con_FileExtentNameLst:
this.fileExtentNameLst = strValue;
    this.hmProperty["fileExtentNameLst"] = true;
break;
case clsPaperSubResTypeEN.con_FileExtentNameLst2:
this.fileExtentNameLst2 = strValue;
    this.hmProperty["fileExtentNameLst2"] = true;
break;
case clsPaperSubResTypeEN.con_IsUse:
this.isUse = Boolean(strValue);
    this.hmProperty["isUse"] = true;
break;
case clsPaperSubResTypeEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsPaperSubResTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsPaperSubResTypeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsPaperSubResTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[PaperSubResType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public paperSubResTypeId = "";    //论文子资源类型Id
public paperSubResTypeName = "";    //论文子资源类型名
public paperSubResTypeENName = "";    //论文子资源类型英文名
public fileExtentNameLst = "";    //文件扩展名列表
public fileExtentNameLst2 = "";    //文件扩展名列表2
public isUse = false;    //是否使用
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"PaperSubResTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperSubResTypeId(): string {return "paperSubResTypeId";}    //论文子资源类型Id

 /**
 * 常量:"PaperSubResTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperSubResTypeName(): string {return "paperSubResTypeName";}    //论文子资源类型名

 /**
 * 常量:"PaperSubResTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperSubResTypeENName(): string {return "paperSubResTypeENName";}    //论文子资源类型英文名

 /**
 * 常量:"FileExtentNameLst"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileExtentNameLst(): string {return "fileExtentNameLst";}    //文件扩展名列表

 /**
 * 常量:"FileExtentNameLst2"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileExtentNameLst2(): string {return "fileExtentNameLst2";}    //文件扩展名列表2

 /**
 * 常量:"IsUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsUse(): string {return "isUse";}    //是否使用

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
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
 export class enumPaperSubResType
{
 /**
 * 视频
 **/
static readonly Video_0001 = "0001";
 /**
 * 音频
 **/
static readonly Audio_0002 = "0002";
 /**
 * 动画
 **/
static readonly Animation_0003 = "0003";
 /**
 * 图片
 **/
static readonly Picture_0004 = "0004";
 /**
 * Pdf文件
 **/
static readonly Pdf_0005 = "0005";
 /**
 * PPT
 **/
static readonly PPT_0006 = "0006";
 /**
 * Word文档
 **/
static readonly Word_0007 = "0007";
 /**
 * Access文档
 **/
static readonly Access_0008 = "0008";
 /**
 * XPS文档
 **/
static readonly XPS_0009 = "0009";
 /**
 * 纯文本
 **/
static readonly Text_0010 = "0010";
 /**
 * Html文本
 **/
static readonly Html_0011 = "0011";
 /**
 * 压缩文件
 **/
static readonly CompressedFile_0012 = "0012";
 /**
 * Excel文件
 **/
static readonly Excel_0014 = "0014";
 /**
 * 源代码
 **/
static readonly SourceCode_0015 = "0015";
 /**
 * 其它
 **/
static readonly Other_0016 = "0016";
}