
 /**
 * 类名:clsvgs_ResearchResultEN
 * 表名:vgs_ResearchResult(01120778)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:20
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
 * 研究成果视图(vgs_ResearchResult)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_ResearchResultEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_ResearchResult"; //当前表名,与该类相关的表名
public static _KeyFldName= "ResultId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 19;
public static AttributeName = ["resultId", "topicId", "topicName", "paperId", "idCurrEduCls", "resultTypeId", "resultName", "resultContent", "author", "division", "versionCount", "okCount", "appraiseCount", "score", "stuScore", "teaScore", "updDate", "updUser", "memo"];
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
case clsvgs_ResearchResultEN.con_ResultId:
return this.resultId;
case clsvgs_ResearchResultEN.con_TopicId:
return this.topicId;
case clsvgs_ResearchResultEN.con_TopicName:
return this.topicName;
case clsvgs_ResearchResultEN.con_PaperId:
return this.paperId;
case clsvgs_ResearchResultEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_ResearchResultEN.con_ResultTypeId:
return this.resultTypeId;
case clsvgs_ResearchResultEN.con_ResultName:
return this.resultName;
case clsvgs_ResearchResultEN.con_ResultContent:
return this.resultContent;
case clsvgs_ResearchResultEN.con_Author:
return this.author;
case clsvgs_ResearchResultEN.con_Division:
return this.division;
case clsvgs_ResearchResultEN.con_VersionCount:
return this.versionCount;
case clsvgs_ResearchResultEN.con_OkCount:
return this.okCount;
case clsvgs_ResearchResultEN.con_AppraiseCount:
return this.appraiseCount;
case clsvgs_ResearchResultEN.con_Score:
return this.score;
case clsvgs_ResearchResultEN.con_StuScore:
return this.stuScore;
case clsvgs_ResearchResultEN.con_TeaScore:
return this.teaScore;
case clsvgs_ResearchResultEN.con_UpdDate:
return this.updDate;
case clsvgs_ResearchResultEN.con_UpdUser:
return this.updUser;
case clsvgs_ResearchResultEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_ResearchResult]中不存在!`;
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
case clsvgs_ResearchResultEN.con_ResultId:
this.resultId = strValue;
break;
case clsvgs_ResearchResultEN.con_TopicId:
this.topicId = strValue;
break;
case clsvgs_ResearchResultEN.con_TopicName:
this.topicName = strValue;
break;
case clsvgs_ResearchResultEN.con_PaperId:
this.paperId = strValue;
break;
case clsvgs_ResearchResultEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvgs_ResearchResultEN.con_ResultTypeId:
this.resultTypeId = strValue;
break;
case clsvgs_ResearchResultEN.con_ResultName:
this.resultName = strValue;
break;
case clsvgs_ResearchResultEN.con_ResultContent:
this.resultContent = strValue;
break;
case clsvgs_ResearchResultEN.con_Author:
this.author = strValue;
break;
case clsvgs_ResearchResultEN.con_Division:
this.division = strValue;
break;
case clsvgs_ResearchResultEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvgs_ResearchResultEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvgs_ResearchResultEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvgs_ResearchResultEN.con_Score:
this.score = Number(strValue);
break;
case clsvgs_ResearchResultEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvgs_ResearchResultEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvgs_ResearchResultEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvgs_ResearchResultEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvgs_ResearchResultEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_ResearchResult]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public resultId = "";    //成果Id
public topicId = "";    //主题Id
public topicName = "";    //栏目主题
public paperId = "";    //论文Id
public idCurrEduCls = "";    //教学班流水号
public resultTypeId = "";    //成果类型Id
public resultName = "";    //成果名称
public resultContent = "";    //成果内容
public author = "";    //作者
public division = "";    //分工
public versionCount = 0;    //版本统计
public okCount = 0;    //点赞统计
public appraiseCount = 0;    //评论数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"ResultId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ResultId(): string {return "resultId";}    //成果Id

 /**
 * 常量:"TopicId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"TopicName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

 /**
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"ResultTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ResultTypeId(): string {return "resultTypeId";}    //成果类型Id

 /**
 * 常量:"ResultName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ResultName(): string {return "resultName";}    //成果名称

 /**
 * 常量:"ResultContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ResultContent(): string {return "resultContent";}    //成果内容

 /**
 * 常量:"Author"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Author(): string {return "author";}    //作者

 /**
 * 常量:"Division"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Division(): string {return "division";}    //分工

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