
 /**
 * 类名:clsCacheUseStateENEx
 * 表名:CacheUseState(01120689)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/04 10:05:14
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 缓存使用状态(CacheUseState)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCacheUseStateEN } from "@/ts/L0Entity/SystemSet/clsCacheUseStateEN";

export class  clsCacheUseStateENEx extends clsCacheUseStateEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsCacheUseStateENEx.con_CacheModeName:
return this.cacheModeName;
case clsCacheUseStateENEx.con_CacheModeENName:
return this.cacheModeENName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CacheModeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CacheModeName(): string {return "cacheModeName";}    //缓存方式名

 /**
 * 常量:"CacheModeENName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CacheModeENName(): string {return "cacheModeENName";}    //缓存方式英文名

public cacheModeName = "";    //缓存方式名
public cacheModeENName = "";    //缓存方式英文名

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
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
case clsCacheUseStateENEx.con_CacheModeName:
this.cacheModeName = strValue;
    this.hmProperty["cacheModeName"] = true;
break;
case clsCacheUseStateENEx.con_CacheModeENName:
this.cacheModeENName = strValue;
    this.hmProperty["cacheModeENName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CacheUseState]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}