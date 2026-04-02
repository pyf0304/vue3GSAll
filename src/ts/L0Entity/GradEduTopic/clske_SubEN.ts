
 /**
 * 类名:clske_SubEN
 * 表名:ke_Sub(01120660)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:51
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 知识经济子类(ke_Sub)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clske_SubEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ke_Sub"; //当前表名,与该类相关的表名
public static _KeyFldName= "KeSubId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["keSubId", "keSuperId", "keSubNameCn", "keSubNameEn", "keSubDescribeCn", "keSubDescribeEn", "updDate", "updUser", "memo", "link"];
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
private mstrKeSubId = "";    //知识子类Id
private mstrKeSuperId = "";    //知识分类Id
private mstrKeSubNameCn = "";    //知识子类名
private mstrKeSubNameEn = "";    //知识子类英文名
private mstrKeSubDescribeCn = "";    //知识子类描述
private mstrKeSubDescribeEn = "";    //知识子类英文描述
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注
private mstrLink = "";    //相应链接

/**
 * 知识子类Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSubId (value: string)
{
if (value  != undefined)
{
 this.keSubId = value;
    this.hmProperty["keSubId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识分类Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSuperId (value: string)
{
if (value  != undefined)
{
 this.keSuperId = value;
    this.hmProperty["keSuperId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识子类名(说明:;字段类型:varchar;字段长度:200;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSubNameCn (value: string)
{
if (value  != undefined)
{
 this.keSubNameCn = value;
    this.hmProperty["keSubNameCn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识子类英文名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSubNameEn (value: string)
{
if (value  != undefined)
{
 this.keSubNameEn = value;
    this.hmProperty["keSubNameEn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识子类描述(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSubDescribeCn (value: string)
{
if (value  != undefined)
{
 this.keSubDescribeCn = value;
    this.hmProperty["keSubDescribeCn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识子类英文描述(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSubDescribeEn (value: string)
{
if (value  != undefined)
{
 this.keSubDescribeEn = value;
    this.hmProperty["keSubDescribeEn"] = true;
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
 * 相应链接(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLink (value: string)
{
if (value  != undefined)
{
 this.link = value;
    this.hmProperty["link"] = true;
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
case clske_SubEN.con_KeSubId:
return this.keSubId;
case clske_SubEN.con_KeSuperId:
return this.keSuperId;
case clske_SubEN.con_KeSubNameCn:
return this.keSubNameCn;
case clske_SubEN.con_KeSubNameEn:
return this.keSubNameEn;
case clske_SubEN.con_KeSubDescribeCn:
return this.keSubDescribeCn;
case clske_SubEN.con_KeSubDescribeEn:
return this.keSubDescribeEn;
case clske_SubEN.con_UpdDate:
return this.updDate;
case clske_SubEN.con_UpdUser:
return this.updUser;
case clske_SubEN.con_Memo:
return this.memo;
case clske_SubEN.con_Link:
return this.link;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ke_Sub]中不存在!`;
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
case clske_SubEN.con_KeSubId:
this.keSubId = strValue;
    this.hmProperty["keSubId"] = true;
break;
case clske_SubEN.con_KeSuperId:
this.keSuperId = strValue;
    this.hmProperty["keSuperId"] = true;
break;
case clske_SubEN.con_KeSubNameCn:
this.keSubNameCn = strValue;
    this.hmProperty["keSubNameCn"] = true;
break;
case clske_SubEN.con_KeSubNameEn:
this.keSubNameEn = strValue;
    this.hmProperty["keSubNameEn"] = true;
break;
case clske_SubEN.con_KeSubDescribeCn:
this.keSubDescribeCn = strValue;
    this.hmProperty["keSubDescribeCn"] = true;
break;
case clske_SubEN.con_KeSubDescribeEn:
this.keSubDescribeEn = strValue;
    this.hmProperty["keSubDescribeEn"] = true;
break;
case clske_SubEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clske_SubEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clske_SubEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clske_SubEN.con_Link:
this.link = strValue;
    this.hmProperty["link"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ke_Sub]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public keSubId = "";    //知识子类Id
public keSuperId = "";    //知识分类Id
public keSubNameCn = "";    //知识子类名
public keSubNameEn = "";    //知识子类英文名
public keSubDescribeCn = "";    //知识子类描述
public keSubDescribeEn = "";    //知识子类英文描述
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public link = "";    //相应链接


 /**
 * 常量:"KeSubId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSubId(): string {return "keSubId";}    //知识子类Id

 /**
 * 常量:"KeSuperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSuperId(): string {return "keSuperId";}    //知识分类Id

 /**
 * 常量:"KeSubNameCn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSubNameCn(): string {return "keSubNameCn";}    //知识子类名

 /**
 * 常量:"KeSubNameEn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSubNameEn(): string {return "keSubNameEn";}    //知识子类英文名

 /**
 * 常量:"KeSubDescribeCn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSubDescribeCn(): string {return "keSubDescribeCn";}    //知识子类描述

 /**
 * 常量:"KeSubDescribeEn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSubDescribeEn(): string {return "keSubDescribeEn";}    //知识子类英文描述

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
 * 常量:"Link"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Link(): string {return "link";}    //相应链接

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