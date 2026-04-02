
 /**
 * 类名:clsXzSchoolEN
 * 表名:XzSchool(01120029)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:39
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 学校(XzSchool)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsXzSchoolEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "XzSchool"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdSchool"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["idSchool", "schoolId", "schoolName", "schoolENName", "schoolNameA", "schoolTypeId", "isCurrentUse", "updDate", "updUserId", "memo"];
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
private mstrIdSchool = "";    //学校流水号
private mstrSchoolId = "";    //学校编号
private mstrSchoolName = "";    //学校名称
private mstrSchoolENName = "";    //SchoolENName
private mstrSchoolNameA = "";    //学校简称
private mstrSchoolTypeId = "";    //学校类型Id
private mbolIsCurrentUse = false;    //是否当前使用
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSchool (value: string)
{
if (value  != undefined)
{
 this.idSchool = value;
    this.hmProperty["idSchool"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校编号(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolId (value: string)
{
if (value  != undefined)
{
 this.schoolId = value;
    this.hmProperty["schoolId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolName (value: string)
{
if (value  != undefined)
{
 this.schoolName = value;
    this.hmProperty["schoolName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * SchoolENName(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolENName (value: string)
{
if (value  != undefined)
{
 this.schoolENName = value;
    this.hmProperty["schoolENName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校简称(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolNameA (value: string)
{
if (value  != undefined)
{
 this.schoolNameA = value;
    this.hmProperty["schoolNameA"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolTypeId (value: string)
{
if (value  != undefined)
{
 this.schoolTypeId = value;
    this.hmProperty["schoolTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否当前使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsCurrentUse (value: boolean)
{
if (value  != undefined)
{
 this.isCurrentUse = value;
    this.hmProperty["isCurrentUse"] = true;
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
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
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
case clsXzSchoolEN.con_IdSchool:
return this.idSchool;
case clsXzSchoolEN.con_SchoolId:
return this.schoolId;
case clsXzSchoolEN.con_SchoolName:
return this.schoolName;
case clsXzSchoolEN.con_SchoolENName:
return this.schoolENName;
case clsXzSchoolEN.con_SchoolNameA:
return this.schoolNameA;
case clsXzSchoolEN.con_SchoolTypeId:
return this.schoolTypeId;
case clsXzSchoolEN.con_IsCurrentUse:
return this.isCurrentUse;
case clsXzSchoolEN.con_UpdDate:
return this.updDate;
case clsXzSchoolEN.con_UpdUserId:
return this.updUserId;
case clsXzSchoolEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzSchool]中不存在!`;
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
case clsXzSchoolEN.con_IdSchool:
this.idSchool = strValue;
    this.hmProperty["idSchool"] = true;
break;
case clsXzSchoolEN.con_SchoolId:
this.schoolId = strValue;
    this.hmProperty["schoolId"] = true;
break;
case clsXzSchoolEN.con_SchoolName:
this.schoolName = strValue;
    this.hmProperty["schoolName"] = true;
break;
case clsXzSchoolEN.con_SchoolENName:
this.schoolENName = strValue;
    this.hmProperty["schoolENName"] = true;
break;
case clsXzSchoolEN.con_SchoolNameA:
this.schoolNameA = strValue;
    this.hmProperty["schoolNameA"] = true;
break;
case clsXzSchoolEN.con_SchoolTypeId:
this.schoolTypeId = strValue;
    this.hmProperty["schoolTypeId"] = true;
break;
case clsXzSchoolEN.con_IsCurrentUse:
this.isCurrentUse = Boolean(strValue);
    this.hmProperty["isCurrentUse"] = true;
break;
case clsXzSchoolEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsXzSchoolEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsXzSchoolEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[XzSchool]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idSchool = "";    //学校流水号
public schoolId = "";    //学校编号
public schoolName = "";    //学校名称
public schoolENName = "";    //SchoolENName
public schoolNameA = "";    //学校简称
public schoolTypeId = "";    //学校类型Id
public isCurrentUse = false;    //是否当前使用
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


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
 * 常量:"SchoolENName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolENName(): string {return "schoolENName";}    //SchoolENName

 /**
 * 常量:"SchoolNameA"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolNameA(): string {return "schoolNameA";}    //学校简称

 /**
 * 常量:"SchoolTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolTypeId(): string {return "schoolTypeId";}    //学校类型Id

 /**
 * 常量:"IsCurrentUse"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsCurrentUse(): string {return "isCurrentUse";}    //是否当前使用

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

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
 export class enumXzSchool
{
 /**
 * 淮阴师范学院
 **/
static readonly HYSF_0001 = "0001";
 /**
 * 上海师范大学
 **/
static readonly SHNU_0002 = "0002";
 /**
 * 温州大学
 **/
static readonly WZU_0003 = "0003";
 /**
 * 宁波大学
 **/
static readonly NBU_0004 = "0004";
 /**
 * 淮阴师范测试
 **/
static readonly HYSF_TEST_0005 = "0005";
 /**
 * 江苏二师
 **/
static readonly JSIE_0006 = "0006";
 /**
 * 上海泰泽
 **/
static readonly TZ_0007 = "0007";
 /**
 * 上海师大第二附属中学
 **/
static readonly SSDEFZ_0008 = "0008";
 /**
 * 上海市交通局下属单位
 **/
static readonly JT_0009 = "0009";
 /**
 * 上海师大智能语音学习平台
 **/
static readonly YYXX_0010 = "0010";
}