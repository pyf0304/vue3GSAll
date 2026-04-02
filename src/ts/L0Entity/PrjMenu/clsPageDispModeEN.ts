
 /**
 * 类名:clsPageDispModeEN
 * 表名:PageDispMode(01120908)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:48
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(PrjMenu)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 页面显示模式(PageDispMode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsPageDispModeEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "PageDispMode"; //当前表名,与该类相关的表名
public static _KeyFldName= "PageDispModeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["pageDispModeId", "pageDispModeName", "pageDispModeENName", "memo"];
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
private mstrPageDispModeId = "";    //页面显示模式Id
private mstrPageDispModeName = "";    //页面显示模式名称
private mstrPageDispModeENName = "";    //页面显示模式英文名
private mstrMemo = "";    //备注

/**
 * 页面显示模式Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPageDispModeId (value: string)
{
if (value  != undefined)
{
 this.pageDispModeId = value;
    this.hmProperty["pageDispModeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 页面显示模式名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPageDispModeName (value: string)
{
if (value  != undefined)
{
 this.pageDispModeName = value;
    this.hmProperty["pageDispModeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 页面显示模式英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPageDispModeENName (value: string)
{
if (value  != undefined)
{
 this.pageDispModeENName = value;
    this.hmProperty["pageDispModeENName"] = true;
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
case clsPageDispModeEN.con_PageDispModeId:
return this.pageDispModeId;
case clsPageDispModeEN.con_PageDispModeName:
return this.pageDispModeName;
case clsPageDispModeEN.con_PageDispModeENName:
return this.pageDispModeENName;
case clsPageDispModeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[PageDispMode]中不存在!`;
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
case clsPageDispModeEN.con_PageDispModeId:
this.pageDispModeId = strValue;
    this.hmProperty["pageDispModeId"] = true;
break;
case clsPageDispModeEN.con_PageDispModeName:
this.pageDispModeName = strValue;
    this.hmProperty["pageDispModeName"] = true;
break;
case clsPageDispModeEN.con_PageDispModeENName:
this.pageDispModeENName = strValue;
    this.hmProperty["pageDispModeENName"] = true;
break;
case clsPageDispModeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[PageDispMode]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public pageDispModeId = "";    //页面显示模式Id
public pageDispModeName = "";    //页面显示模式名称
public pageDispModeENName = "";    //页面显示模式英文名
public memo = "";    //备注


 /**
 * 常量:"PageDispModeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PageDispModeId(): string {return "pageDispModeId";}    //页面显示模式Id

 /**
 * 常量:"PageDispModeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PageDispModeName(): string {return "pageDispModeName";}    //页面显示模式名称

 /**
 * 常量:"PageDispModeENName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PageDispModeENName(): string {return "pageDispModeENName";}    //页面显示模式英文名

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
 export class enumPageDispMode
{
 /**
 * 弹出框
 **/
static readonly PopupBox_01 = "01";
 /**
 * 右边
 **/
static readonly Right_02 = "02";
 /**
 * 下边
 **/
static readonly Below_03 = "03";
 /**
 * 左边
 **/
static readonly Left_04 = "04";
 /**
 * 全页
 **/
static readonly FullPage_05 = "05";
}