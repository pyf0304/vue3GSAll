
 /**
 * 类名:clsgs_TotalDataStatisticsEN
 * 表名:gs_TotalDataStatistics(01120683)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:54
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
 * 总数据统计(gs_TotalDataStatistics)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_TotalDataStatisticsEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_TotalDataStatistics"; //当前表名,与该类相关的表名
public static _KeyFldName= "TotalDataId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["totalDataId", "idCurrEduCls", "totalDataTypeId", "tableKey", "dataUser", "dataAddDate", "month", "week", "updDate", "updUser", "memo", "score", "teaScore", "weekTimeRange", "stuScore"];
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
private mstrTotalDataId = "";    //TotalDataId
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrTotalDataTypeId = "";    //总数据类型Id
private mstrTableKey = "";    //表主键
private mstrDataUser = "";    //数据用户
private mstrDataAddDate = "";    //数据添加日期
private mintMonth = 0;    //月
private mintWeek = 0;    //周
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注
private mfltScore = 0.0;    //评分
private mfltTeaScore = 0.0;    //教师评分
private mstrWeekTimeRange = "";    //WeekTimeRange
private mfltStuScore = 0.0;    //学生平均分

/**
 * TotalDataId(说明:;字段类型:char;字段长度:12;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTotalDataId (value: string)
{
if (value  != undefined)
{
 this.totalDataId = value;
    this.hmProperty["totalDataId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 表主键(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTableKey (value: string)
{
if (value  != undefined)
{
 this.tableKey = value;
    this.hmProperty["tableKey"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据用户(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataUser (value: string)
{
if (value  != undefined)
{
 this.dataUser = value;
    this.hmProperty["dataUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据添加日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataAddDate (value: string)
{
if (value  != undefined)
{
 this.dataAddDate = value;
    this.hmProperty["dataAddDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 月(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMonth (value: number)
{
if (value  != undefined)
{
 this.month = value;
    this.hmProperty["month"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 周(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeek (value: number)
{
if (value  != undefined)
{
 this.week = value;
    this.hmProperty["week"] = true;
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
 * 评分(说明:;字段类型:float;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScore (value: number)
{
if (value  != undefined)
{
 this.score = value;
    this.hmProperty["score"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教师评分(说明:;字段类型:float;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeaScore (value: number)
{
if (value  != undefined)
{
 this.teaScore = value;
    this.hmProperty["teaScore"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * WeekTimeRange(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeekTimeRange (value: string)
{
if (value  != undefined)
{
 this.weekTimeRange = value;
    this.hmProperty["weekTimeRange"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学生平均分(说明:;字段类型:float;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStuScore (value: number)
{
if (value  != undefined)
{
 this.stuScore = value;
    this.hmProperty["stuScore"] = true;
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
case clsgs_TotalDataStatisticsEN.con_TotalDataId:
return this.totalDataId;
case clsgs_TotalDataStatisticsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsgs_TotalDataStatisticsEN.con_TotalDataTypeId:
return this.totalDataTypeId;
case clsgs_TotalDataStatisticsEN.con_TableKey:
return this.tableKey;
case clsgs_TotalDataStatisticsEN.con_DataUser:
return this.dataUser;
case clsgs_TotalDataStatisticsEN.con_DataAddDate:
return this.dataAddDate;
case clsgs_TotalDataStatisticsEN.con_Month:
return this.month;
case clsgs_TotalDataStatisticsEN.con_Week:
return this.week;
case clsgs_TotalDataStatisticsEN.con_UpdDate:
return this.updDate;
case clsgs_TotalDataStatisticsEN.con_UpdUser:
return this.updUser;
case clsgs_TotalDataStatisticsEN.con_Memo:
return this.memo;
case clsgs_TotalDataStatisticsEN.con_Score:
return this.score;
case clsgs_TotalDataStatisticsEN.con_TeaScore:
return this.teaScore;
case clsgs_TotalDataStatisticsEN.con_WeekTimeRange:
return this.weekTimeRange;
case clsgs_TotalDataStatisticsEN.con_StuScore:
return this.stuScore;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_TotalDataStatistics]中不存在!`;
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
case clsgs_TotalDataStatisticsEN.con_TotalDataId:
this.totalDataId = strValue;
    this.hmProperty["totalDataId"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_TotalDataTypeId:
this.totalDataTypeId = strValue;
    this.hmProperty["totalDataTypeId"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_TableKey:
this.tableKey = strValue;
    this.hmProperty["tableKey"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_DataUser:
this.dataUser = strValue;
    this.hmProperty["dataUser"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_DataAddDate:
this.dataAddDate = strValue;
    this.hmProperty["dataAddDate"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_Month:
this.month = Number(strValue);
    this.hmProperty["month"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_Week:
this.week = Number(strValue);
    this.hmProperty["week"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_Score:
this.score = Number(strValue);
    this.hmProperty["score"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_TeaScore:
this.teaScore = Number(strValue);
    this.hmProperty["teaScore"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_WeekTimeRange:
this.weekTimeRange = strValue;
    this.hmProperty["weekTimeRange"] = true;
break;
case clsgs_TotalDataStatisticsEN.con_StuScore:
this.stuScore = Number(strValue);
    this.hmProperty["stuScore"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_TotalDataStatistics]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public totalDataId = "";    //TotalDataId
public idCurrEduCls = "";    //教学班流水号
public totalDataTypeId = "";    //总数据类型Id
public tableKey = "";    //表主键
public dataUser = "";    //数据用户
public dataAddDate = "";    //数据添加日期
public month = 0;    //月
public week = 0;    //周
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public score = 0.0;    //评分
public teaScore = 0.0;    //教师评分
public weekTimeRange = "";    //WeekTimeRange
public stuScore = 0.0;    //学生平均分


 /**
 * 常量:"TotalDataId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TotalDataId(): string {return "totalDataId";}    //TotalDataId

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"TotalDataTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TotalDataTypeId(): string {return "totalDataTypeId";}    //总数据类型Id

 /**
 * 常量:"TableKey"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TableKey(): string {return "tableKey";}    //表主键

 /**
 * 常量:"DataUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DataUser(): string {return "dataUser";}    //数据用户

 /**
 * 常量:"DataAddDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DataAddDate(): string {return "dataAddDate";}    //数据添加日期

 /**
 * 常量:"Month"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Month(): string {return "month";}    //月

 /**
 * 常量:"Week"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Week(): string {return "week";}    //周

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
 * 常量:"Score"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"TeaScore"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TeaScore(): string {return "teaScore";}    //教师评分

 /**
 * 常量:"WeekTimeRange"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_WeekTimeRange(): string {return "weekTimeRange";}    //WeekTimeRange

 /**
 * 常量:"StuScore"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StuScore(): string {return "stuScore";}    //学生平均分

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