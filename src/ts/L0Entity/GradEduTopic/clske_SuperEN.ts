
 /**
 * 类名:clske_SuperEN
 * 表名:ke_Super(01120661)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:53
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
 * 知识经济父类(ke_Super)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clske_SuperEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ke_Super"; //当前表名,与该类相关的表名
public static _KeyFldName= "KeSuperId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["keSuperId", "keSuperNameCn", "keSuperNameEn", "keSuperDescribeCn", "keSuperDescribeEn", "updDate", "updUser", "memo"];
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
private mstrKeSuperId = "";    //知识分类Id
private mstrKeSuperNameCn = "";    //知识分类名
private mstrKeSuperNameEn = "";    //知识分类英文名
private mstrKeSuperDescribeCn = "";    //知识分类描述
private mstrKeSuperDescribeEn = "";    //知识分类英文描述
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

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
 * 知识分类名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSuperNameCn (value: string)
{
if (value  != undefined)
{
 this.keSuperNameCn = value;
    this.hmProperty["keSuperNameCn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识分类英文名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSuperNameEn (value: string)
{
if (value  != undefined)
{
 this.keSuperNameEn = value;
    this.hmProperty["keSuperNameEn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识分类描述(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSuperDescribeCn (value: string)
{
if (value  != undefined)
{
 this.keSuperDescribeCn = value;
    this.hmProperty["keSuperDescribeCn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识分类英文描述(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeSuperDescribeEn (value: string)
{
if (value  != undefined)
{
 this.keSuperDescribeEn = value;
    this.hmProperty["keSuperDescribeEn"] = true;
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
case clske_SuperEN.con_KeSuperId:
return this.keSuperId;
case clske_SuperEN.con_KeSuperNameCn:
return this.keSuperNameCn;
case clske_SuperEN.con_KeSuperNameEn:
return this.keSuperNameEn;
case clske_SuperEN.con_KeSuperDescribeCn:
return this.keSuperDescribeCn;
case clske_SuperEN.con_KeSuperDescribeEn:
return this.keSuperDescribeEn;
case clske_SuperEN.con_UpdDate:
return this.updDate;
case clske_SuperEN.con_UpdUser:
return this.updUser;
case clske_SuperEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ke_Super]中不存在!`;
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
case clske_SuperEN.con_KeSuperId:
this.keSuperId = strValue;
    this.hmProperty["keSuperId"] = true;
break;
case clske_SuperEN.con_KeSuperNameCn:
this.keSuperNameCn = strValue;
    this.hmProperty["keSuperNameCn"] = true;
break;
case clske_SuperEN.con_KeSuperNameEn:
this.keSuperNameEn = strValue;
    this.hmProperty["keSuperNameEn"] = true;
break;
case clske_SuperEN.con_KeSuperDescribeCn:
this.keSuperDescribeCn = strValue;
    this.hmProperty["keSuperDescribeCn"] = true;
break;
case clske_SuperEN.con_KeSuperDescribeEn:
this.keSuperDescribeEn = strValue;
    this.hmProperty["keSuperDescribeEn"] = true;
break;
case clske_SuperEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clske_SuperEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clske_SuperEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[ke_Super]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public keSuperId = "";    //知识分类Id
public keSuperNameCn = "";    //知识分类名
public keSuperNameEn = "";    //知识分类英文名
public keSuperDescribeCn = "";    //知识分类描述
public keSuperDescribeEn = "";    //知识分类英文描述
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"KeSuperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSuperId(): string {return "keSuperId";}    //知识分类Id

 /**
 * 常量:"KeSuperNameCn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSuperNameCn(): string {return "keSuperNameCn";}    //知识分类名

 /**
 * 常量:"KeSuperNameEn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSuperNameEn(): string {return "keSuperNameEn";}    //知识分类英文名

 /**
 * 常量:"KeSuperDescribeCn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSuperDescribeCn(): string {return "keSuperDescribeCn";}    //知识分类描述

 /**
 * 常量:"KeSuperDescribeEn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSuperDescribeEn(): string {return "keSuperDescribeEn";}    //知识分类英文描述

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