
 /**
 * 类名:clsvgs_PaperReportEN
 * 表名:vgs_PaperReport(01120771)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:52
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
 * 论文汇报视图(vgs_PaperReport)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_PaperReportEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_PaperReport"; //当前表名,与该类相关的表名
public static _KeyFldName= "ReportId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 24;
public static AttributeName = ["memo", "reportId", "updDate", "topicName", "topicId", "paperId", "paperTitle", "reportContent", "idCurrEduCls", "isSubmit", "reportUser", "reportDate", "updUser", "versionCount", "okCount", "appraiseCount", "score", "stuScore", "teaScore", "pDFUrl", "pPTUrl", "month", "week", "year"];
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
case clsvgs_PaperReportEN.con_Memo:
return this.memo;
case clsvgs_PaperReportEN.con_ReportId:
return this.reportId;
case clsvgs_PaperReportEN.con_UpdDate:
return this.updDate;
case clsvgs_PaperReportEN.con_TopicName:
return this.topicName;
case clsvgs_PaperReportEN.con_TopicId:
return this.topicId;
case clsvgs_PaperReportEN.con_PaperId:
return this.paperId;
case clsvgs_PaperReportEN.con_PaperTitle:
return this.paperTitle;
case clsvgs_PaperReportEN.con_ReportContent:
return this.reportContent;
case clsvgs_PaperReportEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_PaperReportEN.con_IsSubmit:
return this.isSubmit;
case clsvgs_PaperReportEN.con_ReportUser:
return this.reportUser;
case clsvgs_PaperReportEN.con_ReportDate:
return this.reportDate;
case clsvgs_PaperReportEN.con_UpdUser:
return this.updUser;
case clsvgs_PaperReportEN.con_VersionCount:
return this.versionCount;
case clsvgs_PaperReportEN.con_OkCount:
return this.okCount;
case clsvgs_PaperReportEN.con_AppraiseCount:
return this.appraiseCount;
case clsvgs_PaperReportEN.con_Score:
return this.score;
case clsvgs_PaperReportEN.con_StuScore:
return this.stuScore;
case clsvgs_PaperReportEN.con_TeaScore:
return this.teaScore;
case clsvgs_PaperReportEN.con_PDFUrl:
return this.pDFUrl;
case clsvgs_PaperReportEN.con_PPTUrl:
return this.pPTUrl;
case clsvgs_PaperReportEN.con_Month:
return this.month;
case clsvgs_PaperReportEN.con_Week:
return this.week;
case clsvgs_PaperReportEN.con_Year:
return this.year;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_PaperReport]中不存在!`;
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
case clsvgs_PaperReportEN.con_Memo:
this.memo = strValue;
break;
case clsvgs_PaperReportEN.con_ReportId:
this.reportId = strValue;
break;
case clsvgs_PaperReportEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvgs_PaperReportEN.con_TopicName:
this.topicName = strValue;
break;
case clsvgs_PaperReportEN.con_TopicId:
this.topicId = strValue;
break;
case clsvgs_PaperReportEN.con_PaperId:
this.paperId = strValue;
break;
case clsvgs_PaperReportEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvgs_PaperReportEN.con_ReportContent:
this.reportContent = strValue;
break;
case clsvgs_PaperReportEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvgs_PaperReportEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvgs_PaperReportEN.con_ReportUser:
this.reportUser = strValue;
break;
case clsvgs_PaperReportEN.con_ReportDate:
this.reportDate = strValue;
break;
case clsvgs_PaperReportEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvgs_PaperReportEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvgs_PaperReportEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvgs_PaperReportEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvgs_PaperReportEN.con_Score:
this.score = Number(strValue);
break;
case clsvgs_PaperReportEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvgs_PaperReportEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvgs_PaperReportEN.con_PDFUrl:
this.pDFUrl = strValue;
break;
case clsvgs_PaperReportEN.con_PPTUrl:
this.pPTUrl = strValue;
break;
case clsvgs_PaperReportEN.con_Month:
this.month = strValue;
break;
case clsvgs_PaperReportEN.con_Week:
this.week = Number(strValue);
break;
case clsvgs_PaperReportEN.con_Year:
this.year = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_PaperReport]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public memo = "";    //备注
public reportId = "";    //汇报Id
public updDate = "";    //修改日期
public topicName = "";    //栏目主题
public topicId = "";    //主题Id
public paperId = "";    //论文Id
public paperTitle = "";    //论文标题
public reportContent = "";    //汇报内容
public idCurrEduCls = "";    //教学班流水号
public isSubmit = false;    //是否提交
public reportUser = "";    //汇报用户
public reportDate = "";    //汇报日期
public updUser = "";    //修改人
public versionCount = 0;    //版本统计
public okCount = 0;    //点赞统计
public appraiseCount = 0;    //评论数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public pDFUrl = "";    //PDFUrl
public pPTUrl = "";    //PPTUrl
public month = "";    //月
public week = 0;    //周
public year = "";    //年


 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"ReportId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReportId(): string {return "reportId";}    //汇报Id

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"TopicName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

 /**
 * 常量:"TopicId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"PaperTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"ReportContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReportContent(): string {return "reportContent";}    //汇报内容

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"ReportUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReportUser(): string {return "reportUser";}    //汇报用户

 /**
 * 常量:"ReportDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReportDate(): string {return "reportDate";}    //汇报日期

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"VersionCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VersionCount(): string {return "versionCount";}    //版本统计

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"AppraiseCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

 /**
 * 常量:"Score"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"StuScore"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StuScore(): string {return "stuScore";}    //学生平均分

 /**
 * 常量:"TeaScore"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TeaScore(): string {return "teaScore";}    //教师评分

 /**
 * 常量:"PDFUrl"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PDFUrl(): string {return "pDFUrl";}    //PDFUrl

 /**
 * 常量:"PPTUrl"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PPTUrl(): string {return "pPTUrl";}    //PPTUrl

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
 * 常量:"Year"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Year(): string {return "year";}    //年

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