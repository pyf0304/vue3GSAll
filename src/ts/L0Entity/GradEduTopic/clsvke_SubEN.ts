
 /**
 * 类名:clsvke_SubEN
 * 表名:vke_Sub(01120659)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:24
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
 * 知识经济子类视图(vke_Sub)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvke_SubEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vke_Sub"; //当前表名,与该类相关的表名
public static _KeyFldName= "KeSubId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["keSubId", "keSuperId", "keSuperNameCn", "keSuperNameEn", "keSubNameCn", "keSubNameEn", "keSuperDescribeCn", "keSubDescribeCn", "keSuperDescribeEn", "keSubDescribeEn", "updDate", "updUser", "memo", "link"];
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
case clsvke_SubEN.con_KeSubId:
return this.keSubId;
case clsvke_SubEN.con_KeSuperId:
return this.keSuperId;
case clsvke_SubEN.con_KeSuperNameCn:
return this.keSuperNameCn;
case clsvke_SubEN.con_KeSuperNameEn:
return this.keSuperNameEn;
case clsvke_SubEN.con_KeSubNameCn:
return this.keSubNameCn;
case clsvke_SubEN.con_KeSubNameEn:
return this.keSubNameEn;
case clsvke_SubEN.con_KeSuperDescribeCn:
return this.keSuperDescribeCn;
case clsvke_SubEN.con_KeSubDescribeCn:
return this.keSubDescribeCn;
case clsvke_SubEN.con_KeSuperDescribeEn:
return this.keSuperDescribeEn;
case clsvke_SubEN.con_KeSubDescribeEn:
return this.keSubDescribeEn;
case clsvke_SubEN.con_UpdDate:
return this.updDate;
case clsvke_SubEN.con_UpdUser:
return this.updUser;
case clsvke_SubEN.con_Memo:
return this.memo;
case clsvke_SubEN.con_Link:
return this.link;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vke_Sub]中不存在!`;
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
case clsvke_SubEN.con_KeSubId:
this.keSubId = strValue;
break;
case clsvke_SubEN.con_KeSuperId:
this.keSuperId = strValue;
break;
case clsvke_SubEN.con_KeSuperNameCn:
this.keSuperNameCn = strValue;
break;
case clsvke_SubEN.con_KeSuperNameEn:
this.keSuperNameEn = strValue;
break;
case clsvke_SubEN.con_KeSubNameCn:
this.keSubNameCn = strValue;
break;
case clsvke_SubEN.con_KeSubNameEn:
this.keSubNameEn = strValue;
break;
case clsvke_SubEN.con_KeSuperDescribeCn:
this.keSuperDescribeCn = strValue;
break;
case clsvke_SubEN.con_KeSubDescribeCn:
this.keSubDescribeCn = strValue;
break;
case clsvke_SubEN.con_KeSuperDescribeEn:
this.keSuperDescribeEn = strValue;
break;
case clsvke_SubEN.con_KeSubDescribeEn:
this.keSubDescribeEn = strValue;
break;
case clsvke_SubEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvke_SubEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvke_SubEN.con_Memo:
this.memo = strValue;
break;
case clsvke_SubEN.con_Link:
this.link = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vke_Sub]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public keSuperNameCn = "";    //知识分类名
public keSuperNameEn = "";    //知识分类英文名
public keSubNameCn = "";    //知识子类名
public keSubNameEn = "";    //知识子类英文名
public keSuperDescribeCn = "";    //知识分类描述
public keSubDescribeCn = "";    //知识子类描述
public keSuperDescribeEn = "";    //知识分类英文描述
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
 * 常量:"KeSuperDescribeCn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSuperDescribeCn(): string {return "keSuperDescribeCn";}    //知识分类描述

 /**
 * 常量:"KeSubDescribeCn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSubDescribeCn(): string {return "keSubDescribeCn";}    //知识子类描述

 /**
 * 常量:"KeSuperDescribeEn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KeSuperDescribeEn(): string {return "keSuperDescribeEn";}    //知识分类英文描述

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