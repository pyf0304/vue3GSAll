
 /**
 * 类名:clsvRTViewpointEN
 * 表名:vRTViewpoint(01120956)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:26:14
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
 * vRTViewpoint(vRTViewpoint)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvRTViewpointEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vRTViewpoint"; //当前表名,与该类相关的表名
public static _KeyFldName= "TopicId,SubViewpointId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 50;
public static AttributeName = ["topicId", "subViewpointId", "topicName", "versionCount", "citationCount", "topicContent", "topicProposePeople", "gsKnowledgeTypeName", "levelName", "operationTypeName", "subViewpointContent", "paperId", "paperTitle", "isSubmit", "sectionId", "sectionName", "subViewpointTypeId", "subViewpointTypeName", "explainTypeId", "explainTypeName", "explainContent", "isPublic", "literatureSourcesId", "operationTypeId", "levelId", "conclusion", "nationality", "achievement", "major", "workUnit", "pageNumber", "pdfContent", "appraiseCount", "okCount", "score", "stuScore", "teaScore", "createDate", "shareId", "subViewpointTypeOrderNum", "proposePeople", "gsKnowledgeTypeId", "classificationId", "idCurrEduCls", "updDate", "updUser", "memo", "viewPointUserId", "viewPointDate", "isRecommend"];
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
case clsvRTViewpointEN.con_TopicId:
return this.topicId;
case clsvRTViewpointEN.con_SubViewpointId:
return this.subViewpointId;
case clsvRTViewpointEN.con_TopicName:
return this.topicName;
case clsvRTViewpointEN.con_VersionCount:
return this.versionCount;
case clsvRTViewpointEN.con_CitationCount:
return this.citationCount;
case clsvRTViewpointEN.con_TopicContent:
return this.topicContent;
case clsvRTViewpointEN.con_TopicProposePeople:
return this.topicProposePeople;
case clsvRTViewpointEN.con_gsKnowledgeTypeName:
return this.gsKnowledgeTypeName;
case clsvRTViewpointEN.con_LevelName:
return this.levelName;
case clsvRTViewpointEN.con_OperationTypeName:
return this.operationTypeName;
case clsvRTViewpointEN.con_SubViewpointContent:
return this.subViewpointContent;
case clsvRTViewpointEN.con_PaperId:
return this.paperId;
case clsvRTViewpointEN.con_PaperTitle:
return this.paperTitle;
case clsvRTViewpointEN.con_IsSubmit:
return this.isSubmit;
case clsvRTViewpointEN.con_SectionId:
return this.sectionId;
case clsvRTViewpointEN.con_SectionName:
return this.sectionName;
case clsvRTViewpointEN.con_SubViewpointTypeId:
return this.subViewpointTypeId;
case clsvRTViewpointEN.con_SubViewpointTypeName:
return this.subViewpointTypeName;
case clsvRTViewpointEN.con_ExplainTypeId:
return this.explainTypeId;
case clsvRTViewpointEN.con_ExplainTypeName:
return this.explainTypeName;
case clsvRTViewpointEN.con_ExplainContent:
return this.explainContent;
case clsvRTViewpointEN.con_IsPublic:
return this.isPublic;
case clsvRTViewpointEN.con_LiteratureSourcesId:
return this.literatureSourcesId;
case clsvRTViewpointEN.con_OperationTypeId:
return this.operationTypeId;
case clsvRTViewpointEN.con_LevelId:
return this.levelId;
case clsvRTViewpointEN.con_Conclusion:
return this.conclusion;
case clsvRTViewpointEN.con_Nationality:
return this.nationality;
case clsvRTViewpointEN.con_Achievement:
return this.achievement;
case clsvRTViewpointEN.con_Major:
return this.major;
case clsvRTViewpointEN.con_WorkUnit:
return this.workUnit;
case clsvRTViewpointEN.con_PageNumber:
return this.pageNumber;
case clsvRTViewpointEN.con_PdfContent:
return this.pdfContent;
case clsvRTViewpointEN.con_AppraiseCount:
return this.appraiseCount;
case clsvRTViewpointEN.con_OkCount:
return this.okCount;
case clsvRTViewpointEN.con_Score:
return this.score;
case clsvRTViewpointEN.con_StuScore:
return this.stuScore;
case clsvRTViewpointEN.con_TeaScore:
return this.teaScore;
case clsvRTViewpointEN.con_CreateDate:
return this.createDate;
case clsvRTViewpointEN.con_ShareId:
return this.shareId;
case clsvRTViewpointEN.con_SubViewpointTypeOrderNum:
return this.subViewpointTypeOrderNum;
case clsvRTViewpointEN.con_ProposePeople:
return this.proposePeople;
case clsvRTViewpointEN.con_gsKnowledgeTypeId:
return this.gsKnowledgeTypeId;
case clsvRTViewpointEN.con_ClassificationId:
return this.classificationId;
case clsvRTViewpointEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvRTViewpointEN.con_UpdDate:
return this.updDate;
case clsvRTViewpointEN.con_UpdUser:
return this.updUser;
case clsvRTViewpointEN.con_Memo:
return this.memo;
case clsvRTViewpointEN.con_ViewPointUserId:
return this.viewPointUserId;
case clsvRTViewpointEN.con_ViewPointDate:
return this.viewPointDate;
case clsvRTViewpointEN.con_IsRecommend:
return this.isRecommend;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTViewpoint]中不存在!`;
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
case clsvRTViewpointEN.con_TopicId:
this.topicId = strValue;
break;
case clsvRTViewpointEN.con_SubViewpointId:
this.subViewpointId = Number(strValue);
break;
case clsvRTViewpointEN.con_TopicName:
this.topicName = strValue;
break;
case clsvRTViewpointEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvRTViewpointEN.con_CitationCount:
this.citationCount = Number(strValue);
break;
case clsvRTViewpointEN.con_TopicContent:
this.topicContent = strValue;
break;
case clsvRTViewpointEN.con_TopicProposePeople:
this.topicProposePeople = strValue;
break;
case clsvRTViewpointEN.con_gsKnowledgeTypeName:
this.gsKnowledgeTypeName = strValue;
break;
case clsvRTViewpointEN.con_LevelName:
this.levelName = strValue;
break;
case clsvRTViewpointEN.con_OperationTypeName:
this.operationTypeName = strValue;
break;
case clsvRTViewpointEN.con_SubViewpointContent:
this.subViewpointContent = strValue;
break;
case clsvRTViewpointEN.con_PaperId:
this.paperId = strValue;
break;
case clsvRTViewpointEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvRTViewpointEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvRTViewpointEN.con_SectionId:
this.sectionId = strValue;
break;
case clsvRTViewpointEN.con_SectionName:
this.sectionName = strValue;
break;
case clsvRTViewpointEN.con_SubViewpointTypeId:
this.subViewpointTypeId = strValue;
break;
case clsvRTViewpointEN.con_SubViewpointTypeName:
this.subViewpointTypeName = strValue;
break;
case clsvRTViewpointEN.con_ExplainTypeId:
this.explainTypeId = strValue;
break;
case clsvRTViewpointEN.con_ExplainTypeName:
this.explainTypeName = strValue;
break;
case clsvRTViewpointEN.con_ExplainContent:
this.explainContent = strValue;
break;
case clsvRTViewpointEN.con_IsPublic:
this.isPublic = Boolean(strValue);
break;
case clsvRTViewpointEN.con_LiteratureSourcesId:
this.literatureSourcesId = strValue;
break;
case clsvRTViewpointEN.con_OperationTypeId:
this.operationTypeId = strValue;
break;
case clsvRTViewpointEN.con_LevelId:
this.levelId = strValue;
break;
case clsvRTViewpointEN.con_Conclusion:
this.conclusion = strValue;
break;
case clsvRTViewpointEN.con_Nationality:
this.nationality = strValue;
break;
case clsvRTViewpointEN.con_Achievement:
this.achievement = strValue;
break;
case clsvRTViewpointEN.con_Major:
this.major = strValue;
break;
case clsvRTViewpointEN.con_WorkUnit:
this.workUnit = strValue;
break;
case clsvRTViewpointEN.con_PageNumber:
this.pageNumber = Number(strValue);
break;
case clsvRTViewpointEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvRTViewpointEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvRTViewpointEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvRTViewpointEN.con_Score:
this.score = Number(strValue);
break;
case clsvRTViewpointEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvRTViewpointEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvRTViewpointEN.con_CreateDate:
this.createDate = strValue;
break;
case clsvRTViewpointEN.con_ShareId:
this.shareId = strValue;
break;
case clsvRTViewpointEN.con_SubViewpointTypeOrderNum:
this.subViewpointTypeOrderNum = Number(strValue);
break;
case clsvRTViewpointEN.con_ProposePeople:
this.proposePeople = strValue;
break;
case clsvRTViewpointEN.con_gsKnowledgeTypeId:
this.gsKnowledgeTypeId = strValue;
break;
case clsvRTViewpointEN.con_ClassificationId:
this.classificationId = Number(strValue);
break;
case clsvRTViewpointEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvRTViewpointEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvRTViewpointEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvRTViewpointEN.con_Memo:
this.memo = strValue;
break;
case clsvRTViewpointEN.con_ViewPointUserId:
this.viewPointUserId = strValue;
break;
case clsvRTViewpointEN.con_ViewPointDate:
this.viewPointDate = strValue;
break;
case clsvRTViewpointEN.con_IsRecommend:
this.isRecommend = Boolean(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTViewpoint]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public topicId = "";    //主题Id
public subViewpointId = 0;    //子观点Id
public topicName = "";    //栏目主题
public versionCount = 0;    //版本统计
public citationCount = 0;    //引用统计
public topicContent = "";    //主题内容
public topicProposePeople = "";    //主题提出人
public gsKnowledgeTypeName = "";    //知识类型名
public levelName = "";    //级别名称
public operationTypeName = "";    //操作类型名
public subViewpointContent = "";    //详情内容
public paperId = "";    //论文Id
public paperTitle = "";    //论文标题
public isSubmit = false;    //是否提交
public sectionId = "";    //节Id
public sectionName = "";    //节名
public subViewpointTypeId = "";    //类型Id
public subViewpointTypeName = "";    //类型名称
public explainTypeId = "";    //说明类型Id
public explainTypeName = "";    //说明类型名
public explainContent = "";    //说明内容
public isPublic = false;    //是否公开
public literatureSourcesId = "";    //文献来源
public operationTypeId = "";    //操作类型ID
public levelId = "";    //级别Id
public conclusion = "";    //结论
public nationality = "";    //国籍
public achievement = "";    //成就
public major = "";    //专业
public workUnit = "";    //工作单位
public pageNumber = 0;    //页码
public pdfContent = "";    //Pdf内容
public appraiseCount = 0;    //评论数
public okCount = 0;    //点赞统计
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public createDate = "";    //建立日期
public shareId = "";    //分享Id
public subViewpointTypeOrderNum = 0;    //子观点类型序号
public proposePeople = "";    //提出人
public gsKnowledgeTypeId = "";    //知识类型Id
public classificationId = 0;    //分类Id
public idCurrEduCls = "";    //教学班流水号
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public viewPointUserId = "";    //观点用户Id
public viewPointDate = "";    //观点日期
public isRecommend = false;    //是否推荐


 /**
 * 常量:"TopicId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"SubViewpointId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubViewpointId(): string {return "subViewpointId";}    //子观点Id

 /**
 * 常量:"TopicName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

 /**
 * 常量:"VersionCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_VersionCount(): string {return "versionCount";}    //版本统计

 /**
 * 常量:"CitationCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CitationCount(): string {return "citationCount";}    //引用统计

 /**
 * 常量:"TopicContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TopicContent(): string {return "topicContent";}    //主题内容

 /**
 * 常量:"TopicProposePeople"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TopicProposePeople(): string {return "topicProposePeople";}    //主题提出人

 /**
 * 常量:"gsKnowledgeTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_gsKnowledgeTypeName(): string {return "gsKnowledgeTypeName";}    //知识类型名

 /**
 * 常量:"LevelName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelName(): string {return "levelName";}    //级别名称

 /**
 * 常量:"OperationTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OperationTypeName(): string {return "operationTypeName";}    //操作类型名

 /**
 * 常量:"SubViewpointContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubViewpointContent(): string {return "subViewpointContent";}    //详情内容

 /**
 * 常量:"PaperId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"PaperTitle"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"SectionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionId(): string {return "sectionId";}    //节Id

 /**
 * 常量:"SectionName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionName(): string {return "sectionName";}    //节名

 /**
 * 常量:"SubViewpointTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubViewpointTypeId(): string {return "subViewpointTypeId";}    //类型Id

 /**
 * 常量:"SubViewpointTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubViewpointTypeName(): string {return "subViewpointTypeName";}    //类型名称

 /**
 * 常量:"ExplainTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExplainTypeId(): string {return "explainTypeId";}    //说明类型Id

 /**
 * 常量:"ExplainTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExplainTypeName(): string {return "explainTypeName";}    //说明类型名

 /**
 * 常量:"ExplainContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExplainContent(): string {return "explainContent";}    //说明内容

 /**
 * 常量:"IsPublic"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsPublic(): string {return "isPublic";}    //是否公开

 /**
 * 常量:"LiteratureSourcesId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LiteratureSourcesId(): string {return "literatureSourcesId";}    //文献来源

 /**
 * 常量:"OperationTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OperationTypeId(): string {return "operationTypeId";}    //操作类型ID

 /**
 * 常量:"LevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelId(): string {return "levelId";}    //级别Id

 /**
 * 常量:"Conclusion"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Conclusion(): string {return "conclusion";}    //结论

 /**
 * 常量:"Nationality"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Nationality(): string {return "nationality";}    //国籍

 /**
 * 常量:"Achievement"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Achievement(): string {return "achievement";}    //成就

 /**
 * 常量:"Major"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Major(): string {return "major";}    //专业

 /**
 * 常量:"WorkUnit"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WorkUnit(): string {return "workUnit";}    //工作单位

 /**
 * 常量:"PageNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PageNumber(): string {return "pageNumber";}    //页码

 /**
 * 常量:"PdfContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfContent(): string {return "pdfContent";}    //Pdf内容

 /**
 * 常量:"AppraiseCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

 /**
 * 常量:"OkCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"Score"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"StuScore"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuScore(): string {return "stuScore";}    //学生平均分

 /**
 * 常量:"TeaScore"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeaScore(): string {return "teaScore";}    //教师评分

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"ShareId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ShareId(): string {return "shareId";}    //分享Id

 /**
 * 常量:"SubViewpointTypeOrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubViewpointTypeOrderNum(): string {return "subViewpointTypeOrderNum";}    //子观点类型序号

 /**
 * 常量:"ProposePeople"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ProposePeople(): string {return "proposePeople";}    //提出人

 /**
 * 常量:"gsKnowledgeTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_gsKnowledgeTypeId(): string {return "gsKnowledgeTypeId";}    //知识类型Id

 /**
 * 常量:"ClassificationId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClassificationId(): string {return "classificationId";}    //分类Id

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"ViewPointUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewPointUserId(): string {return "viewPointUserId";}    //观点用户Id

 /**
 * 常量:"ViewPointDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewPointDate(): string {return "viewPointDate";}    //观点日期

 /**
 * 常量:"IsRecommend"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

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