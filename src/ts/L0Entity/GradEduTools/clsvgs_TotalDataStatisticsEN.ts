
 /**
 * 类名:clsvgs_TotalDataStatisticsEN
 * 表名:vgs_TotalDataStatistics(01120682)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:17
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
 * 总数据统计视图(vgs_TotalDataStatistics)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_TotalDataStatisticsEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_TotalDataStatistics"; //当前表名,与该类相关的表名
public static _KeyFldName= "TotalDataId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 22;
public static AttributeName = ["totalDataId", "idCurrEduCls", "eduClsName", "schoolYear", "totalDataTypeId", "schoolTerm", "tableKey", "dataUser", "dataAddDate", "dataTable", "month", "dataTableId", "week", "updDate", "updUser", "memo", "score", "teaScore", "weekTimeRange", "onlyId", "totalDataTypeName", "stuScore"];
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
case clsvgs_TotalDataStatisticsEN.con_TotalDataId:
return this.totalDataId;
case clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_TotalDataStatisticsEN.con_EduClsName:
return this.eduClsName;
case clsvgs_TotalDataStatisticsEN.con_SchoolYear:
return this.schoolYear;
case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId:
return this.totalDataTypeId;
case clsvgs_TotalDataStatisticsEN.con_SchoolTerm:
return this.schoolTerm;
case clsvgs_TotalDataStatisticsEN.con_TableKey:
return this.tableKey;
case clsvgs_TotalDataStatisticsEN.con_DataUser:
return this.dataUser;
case clsvgs_TotalDataStatisticsEN.con_DataAddDate:
return this.dataAddDate;
case clsvgs_TotalDataStatisticsEN.con_DataTable:
return this.dataTable;
case clsvgs_TotalDataStatisticsEN.con_Month:
return this.month;
case clsvgs_TotalDataStatisticsEN.con_DataTableId:
return this.dataTableId;
case clsvgs_TotalDataStatisticsEN.con_Week:
return this.week;
case clsvgs_TotalDataStatisticsEN.con_UpdDate:
return this.updDate;
case clsvgs_TotalDataStatisticsEN.con_UpdUser:
return this.updUser;
case clsvgs_TotalDataStatisticsEN.con_Memo:
return this.memo;
case clsvgs_TotalDataStatisticsEN.con_Score:
return this.score;
case clsvgs_TotalDataStatisticsEN.con_TeaScore:
return this.teaScore;
case clsvgs_TotalDataStatisticsEN.con_WeekTimeRange:
return this.weekTimeRange;
case clsvgs_TotalDataStatisticsEN.con_OnlyId:
return this.onlyId;
case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeName:
return this.totalDataTypeName;
case clsvgs_TotalDataStatisticsEN.con_StuScore:
return this.stuScore;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_TotalDataStatistics]中不存在!`;
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
case clsvgs_TotalDataStatisticsEN.con_TotalDataId:
this.totalDataId = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_EduClsName:
this.eduClsName = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_SchoolYear:
this.schoolYear = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId:
this.totalDataTypeId = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_SchoolTerm:
this.schoolTerm = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_TableKey:
this.tableKey = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_DataUser:
this.dataUser = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_DataAddDate:
this.dataAddDate = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_DataTable:
this.dataTable = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_Month:
this.month = Number(strValue);
break;
case clsvgs_TotalDataStatisticsEN.con_DataTableId:
this.dataTableId = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_Week:
this.week = Number(strValue);
break;
case clsvgs_TotalDataStatisticsEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_Memo:
this.memo = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_Score:
this.score = Number(strValue);
break;
case clsvgs_TotalDataStatisticsEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvgs_TotalDataStatisticsEN.con_WeekTimeRange:
this.weekTimeRange = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_OnlyId:
this.onlyId = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeName:
this.totalDataTypeName = strValue;
break;
case clsvgs_TotalDataStatisticsEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_TotalDataStatistics]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public eduClsName = "";    //教学班名
public schoolYear = "";    //学年
public totalDataTypeId = "";    //总数据类型Id
public schoolTerm = "";    //学期
public tableKey = "";    //表主键
public dataUser = "";    //数据用户
public dataAddDate = "";    //数据添加日期
public dataTable = "";    //数据表
public month = 0;    //月
public dataTableId = "";    //数据表Id
public week = 0;    //周
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public score = 0.0;    //评分
public teaScore = 0.0;    //教师评分
public weekTimeRange = "";    //WeekTimeRange
public onlyId = "";    //OnlyId
public totalDataTypeName = "";    //总数据类型名称
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
 * 常量:"EduClsName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"SchoolYear"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"TotalDataTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TotalDataTypeId(): string {return "totalDataTypeId";}    //总数据类型Id

 /**
 * 常量:"SchoolTerm"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

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
 * 常量:"DataTable"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DataTable(): string {return "dataTable";}    //数据表

 /**
 * 常量:"Month"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Month(): string {return "month";}    //月

 /**
 * 常量:"DataTableId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DataTableId(): string {return "dataTableId";}    //数据表Id

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
 * 常量:"OnlyId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OnlyId(): string {return "onlyId";}    //OnlyId

 /**
 * 常量:"TotalDataTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TotalDataTypeName(): string {return "totalDataTypeName";}    //总数据类型名称

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