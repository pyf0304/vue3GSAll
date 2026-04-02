
 /**
 * 类名:clsvXzUniZoneEN
 * 表名:vXzUniZone(01120332)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:57
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * v校区(vXzUniZone)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvXzUniZoneEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vXzUniZone"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdUniZone"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["idUniZone", "uniZoneID", "uniZoneDesc", "uniZoneDescA", "idSchool", "schoolId", "schoolName", "schoolNameA", "idUni", "modifyDate", "modifyUserId", "memo"];
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
case clsvXzUniZoneEN.con_IdUniZone:
return this.idUniZone;
case clsvXzUniZoneEN.con_UniZoneID:
return this.uniZoneID;
case clsvXzUniZoneEN.con_UniZoneDesc:
return this.uniZoneDesc;
case clsvXzUniZoneEN.con_UniZoneDescA:
return this.uniZoneDescA;
case clsvXzUniZoneEN.con_IdSchool:
return this.idSchool;
case clsvXzUniZoneEN.con_SchoolId:
return this.schoolId;
case clsvXzUniZoneEN.con_SchoolName:
return this.schoolName;
case clsvXzUniZoneEN.con_SchoolNameA:
return this.schoolNameA;
case clsvXzUniZoneEN.con_IdUni:
return this.idUni;
case clsvXzUniZoneEN.con_ModifyDate:
return this.modifyDate;
case clsvXzUniZoneEN.con_ModifyUserId:
return this.modifyUserId;
case clsvXzUniZoneEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vXzUniZone]中不存在!`;
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
case clsvXzUniZoneEN.con_IdUniZone:
this.idUniZone = strValue;
break;
case clsvXzUniZoneEN.con_UniZoneID:
this.uniZoneID = strValue;
break;
case clsvXzUniZoneEN.con_UniZoneDesc:
this.uniZoneDesc = strValue;
break;
case clsvXzUniZoneEN.con_UniZoneDescA:
this.uniZoneDescA = strValue;
break;
case clsvXzUniZoneEN.con_IdSchool:
this.idSchool = strValue;
break;
case clsvXzUniZoneEN.con_SchoolId:
this.schoolId = strValue;
break;
case clsvXzUniZoneEN.con_SchoolName:
this.schoolName = strValue;
break;
case clsvXzUniZoneEN.con_SchoolNameA:
this.schoolNameA = strValue;
break;
case clsvXzUniZoneEN.con_IdUni:
this.idUni = strValue;
break;
case clsvXzUniZoneEN.con_ModifyDate:
this.modifyDate = strValue;
break;
case clsvXzUniZoneEN.con_ModifyUserId:
this.modifyUserId = strValue;
break;
case clsvXzUniZoneEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vXzUniZone]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idUniZone = "";    //校区流水号
public uniZoneID = "";    //校区编号
public uniZoneDesc = "";    //校区名称
public uniZoneDescA = "";    //UniZoneDescA
public idSchool = "";    //学校流水号
public schoolId = "";    //学校编号
public schoolName = "";    //学校名称
public schoolNameA = "";    //学校简称
public idUni = "";    //id_Uni
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"IdUniZone"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"UniZoneID"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UniZoneID(): string {return "uniZoneID";}    //校区编号

 /**
 * 常量:"UniZoneDesc"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UniZoneDesc(): string {return "uniZoneDesc";}    //校区名称

 /**
 * 常量:"UniZoneDescA"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UniZoneDescA(): string {return "uniZoneDescA";}    //UniZoneDescA

 /**
 * 常量:"IdSchool"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"SchoolId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolId(): string {return "schoolId";}    //学校编号

 /**
 * 常量:"SchoolName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolName(): string {return "schoolName";}    //学校名称

 /**
 * 常量:"SchoolNameA"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolNameA(): string {return "schoolNameA";}    //学校简称

 /**
 * 常量:"IdUni"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdUni(): string {return "idUni";}    //id_Uni

 /**
 * 常量:"ModifyDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

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