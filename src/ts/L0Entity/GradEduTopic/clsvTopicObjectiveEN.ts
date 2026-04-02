
 /**
 * 类名:clsvTopicObjectiveEN
 * 表名:vTopicObjective(01120617)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:37
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
 * 客观表视图(vTopicObjective)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvTopicObjectiveEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vTopicObjective"; //当前表名,与该类相关的表名
public static _KeyFldName= "TopicObjectiveId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 27;
public static AttributeName = ["paperTitle", "paperContent", "author", "keyword", "topicObjectiveId", "objectiveName", "objectiveContent", "objectiveType", "sourceId", "conclusion", "isSubmit", "updDate", "memo", "objectiveTypeName", "citationCount", "appraiseCount", "score", "stuScore", "teaScore", "idCurrEduCls", "pdfContent", "pdfPageNum", "okCount", "versionCount", "createDate", "shareId", "updUser"];
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
case clsvTopicObjectiveEN.con_PaperTitle:
return this.paperTitle;
case clsvTopicObjectiveEN.con_PaperContent:
return this.paperContent;
case clsvTopicObjectiveEN.con_Author:
return this.author;
case clsvTopicObjectiveEN.con_Keyword:
return this.keyword;
case clsvTopicObjectiveEN.con_TopicObjectiveId:
return this.topicObjectiveId;
case clsvTopicObjectiveEN.con_ObjectiveName:
return this.objectiveName;
case clsvTopicObjectiveEN.con_ObjectiveContent:
return this.objectiveContent;
case clsvTopicObjectiveEN.con_ObjectiveType:
return this.objectiveType;
case clsvTopicObjectiveEN.con_SourceId:
return this.sourceId;
case clsvTopicObjectiveEN.con_Conclusion:
return this.conclusion;
case clsvTopicObjectiveEN.con_IsSubmit:
return this.isSubmit;
case clsvTopicObjectiveEN.con_UpdDate:
return this.updDate;
case clsvTopicObjectiveEN.con_Memo:
return this.memo;
case clsvTopicObjectiveEN.con_ObjectiveTypeName:
return this.objectiveTypeName;
case clsvTopicObjectiveEN.con_CitationCount:
return this.citationCount;
case clsvTopicObjectiveEN.con_AppraiseCount:
return this.appraiseCount;
case clsvTopicObjectiveEN.con_Score:
return this.score;
case clsvTopicObjectiveEN.con_StuScore:
return this.stuScore;
case clsvTopicObjectiveEN.con_TeaScore:
return this.teaScore;
case clsvTopicObjectiveEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvTopicObjectiveEN.con_PdfContent:
return this.pdfContent;
case clsvTopicObjectiveEN.con_PdfPageNum:
return this.pdfPageNum;
case clsvTopicObjectiveEN.con_OkCount:
return this.okCount;
case clsvTopicObjectiveEN.con_VersionCount:
return this.versionCount;
case clsvTopicObjectiveEN.con_CreateDate:
return this.createDate;
case clsvTopicObjectiveEN.con_ShareId:
return this.shareId;
case clsvTopicObjectiveEN.con_UpdUser:
return this.updUser;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vTopicObjective]中不存在!`;
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
case clsvTopicObjectiveEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvTopicObjectiveEN.con_PaperContent:
this.paperContent = strValue;
break;
case clsvTopicObjectiveEN.con_Author:
this.author = strValue;
break;
case clsvTopicObjectiveEN.con_Keyword:
this.keyword = strValue;
break;
case clsvTopicObjectiveEN.con_TopicObjectiveId:
this.topicObjectiveId = strValue;
break;
case clsvTopicObjectiveEN.con_ObjectiveName:
this.objectiveName = strValue;
break;
case clsvTopicObjectiveEN.con_ObjectiveContent:
this.objectiveContent = strValue;
break;
case clsvTopicObjectiveEN.con_ObjectiveType:
this.objectiveType = strValue;
break;
case clsvTopicObjectiveEN.con_SourceId:
this.sourceId = strValue;
break;
case clsvTopicObjectiveEN.con_Conclusion:
this.conclusion = strValue;
break;
case clsvTopicObjectiveEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvTopicObjectiveEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvTopicObjectiveEN.con_Memo:
this.memo = strValue;
break;
case clsvTopicObjectiveEN.con_ObjectiveTypeName:
this.objectiveTypeName = strValue;
break;
case clsvTopicObjectiveEN.con_CitationCount:
this.citationCount = Number(strValue);
break;
case clsvTopicObjectiveEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvTopicObjectiveEN.con_Score:
this.score = Number(strValue);
break;
case clsvTopicObjectiveEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvTopicObjectiveEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvTopicObjectiveEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvTopicObjectiveEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvTopicObjectiveEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
break;
case clsvTopicObjectiveEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvTopicObjectiveEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvTopicObjectiveEN.con_CreateDate:
this.createDate = strValue;
break;
case clsvTopicObjectiveEN.con_ShareId:
this.shareId = strValue;
break;
case clsvTopicObjectiveEN.con_UpdUser:
this.updUser = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vTopicObjective]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public paperTitle = "";    //论文标题
public paperContent = "";    //主题内容
public author = "";    //作者
public keyword = "";    //关键字
public topicObjectiveId = "";    //客观Id
public objectiveName = "";    //客观名称
public objectiveContent = "";    //客观内容
public objectiveType = "";    //客观类型
public sourceId = "";    //来源Id
public conclusion = "";    //结论
public isSubmit = false;    //是否提交
public updDate = "";    //修改日期
public memo = "";    //备注
public objectiveTypeName = "";    //ObjectiveTypeName
public citationCount = 0;    //引用统计
public appraiseCount = 0;    //评论数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public idCurrEduCls = "";    //教学班流水号
public pdfContent = "";    //Pdf内容
public pdfPageNum = 0;    //Pdf页码
public okCount = 0;    //点赞统计
public versionCount = 0;    //版本统计
public createDate = "";    //建立日期
public shareId = "";    //分享Id
public updUser = "";    //修改人


 /**
 * 常量:"PaperTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"PaperContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperContent(): string {return "paperContent";}    //主题内容

 /**
 * 常量:"Author"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Author(): string {return "author";}    //作者

 /**
 * 常量:"Keyword"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Keyword(): string {return "keyword";}    //关键字

 /**
 * 常量:"TopicObjectiveId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicObjectiveId(): string {return "topicObjectiveId";}    //客观Id

 /**
 * 常量:"ObjectiveName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveName(): string {return "objectiveName";}    //客观名称

 /**
 * 常量:"ObjectiveContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveContent(): string {return "objectiveContent";}    //客观内容

 /**
 * 常量:"ObjectiveType"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveType(): string {return "objectiveType";}    //客观类型

 /**
 * 常量:"SourceId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SourceId(): string {return "sourceId";}    //来源Id

 /**
 * 常量:"Conclusion"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Conclusion(): string {return "conclusion";}    //结论

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"ObjectiveTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveTypeName(): string {return "objectiveTypeName";}    //ObjectiveTypeName

 /**
 * 常量:"CitationCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CitationCount(): string {return "citationCount";}    //引用统计

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
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"PdfContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfContent(): string {return "pdfContent";}    //Pdf内容

 /**
 * 常量:"PdfPageNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfPageNum(): string {return "pdfPageNum";}    //Pdf页码

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"VersionCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VersionCount(): string {return "versionCount";}    //版本统计

 /**
 * 常量:"CreateDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"ShareId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ShareId(): string {return "shareId";}    //分享Id

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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