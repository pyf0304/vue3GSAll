
 /**
 * 类名:clsPaper
 * 表名:Paper(01120535)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/19 04:29:59
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 论文表(Paper)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsPaper 
{
public static _CurrTabName= "Paper"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 45;
public static AttributeName = ["paperId", "paperTitle", "paperContent", "periodical", "author", "researchQuestion", "keyword", "literatureSources", "literatureLink", "uploadfileUrl", "isQuotethesis", "quoteId", "isChecked", "checker", "literatureTypeId", "browseNumber", "isSubmit", "appraiseCount", "attachmentCount", "collectionCount", "downloadCount", "okCount", "pcount", "score", "stuScore", "teaScore", "paperTypeId", "paperStatusId", "versionCount", "isPublic", "askQuestion", "researchStatus", "innovationPoints", "researchDesign", "dimensionDataProcess", "expectedConclusion", "shareId", "paperQCount", "subVCount", "tagsCount", "teaQCount", "createDate", "updUser", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public paperId = "";    //论文Id
public paperTitle = "";    //论文标题
public paperContent = "";    //主题内容
public periodical = "";    //期刊
public author = "";    //作者
public researchQuestion = "";    //研究问题
public keyword = "";    //关键字
public literatureSources = "";    //文献来源
public literatureLink = "";    //文献链接
public uploadfileUrl = "";    //文件地址
public isQuotethesis = false;    //是否引用论文
public quoteId = "";    //引用Id
public isChecked = false;    //是否检查
public checker = "";    //审核人
public literatureTypeId = "";    //文献类型Id
public browseNumber = 0;    //浏览量
public isSubmit = false;    //是否提交
public appraiseCount = 0;    //评论数
public attachmentCount = 0;    //附件计数
public collectionCount = 0;    //收藏数量
public downloadCount = 0;    //下载数
public okCount = 0;    //点赞统计
public pcount = 0;    //读写数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public paperTypeId = "";    //论文类型Id
public paperStatusId = "";    //论文状态Id
public versionCount = 0;    //版本统计
public isPublic = false;    //是否公开
public askQuestion = "";    //问题提出
public researchStatus = "";    //目前研究的现状
public innovationPoints = "";    //创新点
public researchDesign = "";    //研究设计
public dimensionDataProcess = "";    //数据处理的维度
public expectedConclusion = "";    //预期结论
public shareId = "";    //分享Id
public paperQCount = 0;    //论文答疑数
public subVCount = 0;    //论文子观点数
public tagsCount = 0;    //论文标注数
public teaQCount = 0;    //教师提问数
public createDate = "";    //建立日期
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsPaper.con_PaperId:
return this.paperId;
case clsPaper.con_PaperTitle:
return this.paperTitle;
case clsPaper.con_PaperContent:
return this.paperContent;
case clsPaper.con_Periodical:
return this.periodical;
case clsPaper.con_Author:
return this.author;
case clsPaper.con_ResearchQuestion:
return this.researchQuestion;
case clsPaper.con_Keyword:
return this.keyword;
case clsPaper.con_LiteratureSources:
return this.literatureSources;
case clsPaper.con_LiteratureLink:
return this.literatureLink;
case clsPaper.con_UploadfileUrl:
return this.uploadfileUrl;
case clsPaper.con_IsQuotethesis:
return this.isQuotethesis;
case clsPaper.con_QuoteId:
return this.quoteId;
case clsPaper.con_IsChecked:
return this.isChecked;
case clsPaper.con_Checker:
return this.checker;
case clsPaper.con_LiteratureTypeId:
return this.literatureTypeId;
case clsPaper.con_BrowseNumber:
return this.browseNumber;
case clsPaper.con_IsSubmit:
return this.isSubmit;
case clsPaper.con_AppraiseCount:
return this.appraiseCount;
case clsPaper.con_AttachmentCount:
return this.attachmentCount;
case clsPaper.con_CollectionCount:
return this.collectionCount;
case clsPaper.con_DownloadCount:
return this.downloadCount;
case clsPaper.con_OkCount:
return this.okCount;
case clsPaper.con_Pcount:
return this.pcount;
case clsPaper.con_Score:
return this.score;
case clsPaper.con_StuScore:
return this.stuScore;
case clsPaper.con_TeaScore:
return this.teaScore;
case clsPaper.con_PaperTypeId:
return this.paperTypeId;
case clsPaper.con_PaperStatusId:
return this.paperStatusId;
case clsPaper.con_VersionCount:
return this.versionCount;
case clsPaper.con_IsPublic:
return this.isPublic;
case clsPaper.con_AskQuestion:
return this.askQuestion;
case clsPaper.con_ResearchStatus:
return this.researchStatus;
case clsPaper.con_InnovationPoints:
return this.innovationPoints;
case clsPaper.con_ResearchDesign:
return this.researchDesign;
case clsPaper.con_DimensionDataProcess:
return this.dimensionDataProcess;
case clsPaper.con_ExpectedConclusion:
return this.expectedConclusion;
case clsPaper.con_ShareId:
return this.shareId;
case clsPaper.con_PaperQCount:
return this.paperQCount;
case clsPaper.con_SubVCount:
return this.subVCount;
case clsPaper.con_TagsCount:
return this.tagsCount;
case clsPaper.con_TeaQCount:
return this.teaQCount;
case clsPaper.con_CreateDate:
return this.createDate;
case clsPaper.con_UpdUser:
return this.updUser;
case clsPaper.con_UpdDate:
return this.updDate;
case clsPaper.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Paper]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"PaperId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"PaperTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"PaperContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperContent(): string {return "paperContent";}    //主题内容

 /**
 * 常量:"Periodical"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Periodical(): string {return "periodical";}    //期刊

 /**
 * 常量:"Author"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Author(): string {return "author";}    //作者

 /**
 * 常量:"ResearchQuestion"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResearchQuestion(): string {return "researchQuestion";}    //研究问题

 /**
 * 常量:"Keyword"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Keyword(): string {return "keyword";}    //关键字

 /**
 * 常量:"LiteratureSources"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LiteratureSources(): string {return "literatureSources";}    //文献来源

 /**
 * 常量:"LiteratureLink"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LiteratureLink(): string {return "literatureLink";}    //文献链接

 /**
 * 常量:"UploadfileUrl"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UploadfileUrl(): string {return "uploadfileUrl";}    //文件地址

 /**
 * 常量:"IsQuotethesis"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsQuotethesis(): string {return "isQuotethesis";}    //是否引用论文

 /**
 * 常量:"QuoteId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuoteId(): string {return "quoteId";}    //引用Id

 /**
 * 常量:"IsChecked"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsChecked(): string {return "isChecked";}    //是否检查

 /**
 * 常量:"Checker"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Checker(): string {return "checker";}    //审核人

 /**
 * 常量:"LiteratureTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LiteratureTypeId(): string {return "literatureTypeId";}    //文献类型Id

 /**
 * 常量:"BrowseNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BrowseNumber(): string {return "browseNumber";}    //浏览量

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"AppraiseCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

 /**
 * 常量:"AttachmentCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AttachmentCount(): string {return "attachmentCount";}    //附件计数

 /**
 * 常量:"CollectionCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollectionCount(): string {return "collectionCount";}    //收藏数量

 /**
 * 常量:"DownloadCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DownloadCount(): string {return "downloadCount";}    //下载数

 /**
 * 常量:"OkCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"Pcount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Pcount(): string {return "pcount";}    //读写数

 /**
 * 常量:"Score"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"StuScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuScore(): string {return "stuScore";}    //学生平均分

 /**
 * 常量:"TeaScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeaScore(): string {return "teaScore";}    //教师评分

 /**
 * 常量:"PaperTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperTypeId(): string {return "paperTypeId";}    //论文类型Id

 /**
 * 常量:"PaperStatusId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperStatusId(): string {return "paperStatusId";}    //论文状态Id

 /**
 * 常量:"VersionCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_VersionCount(): string {return "versionCount";}    //版本统计

 /**
 * 常量:"IsPublic"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsPublic(): string {return "isPublic";}    //是否公开

 /**
 * 常量:"AskQuestion"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AskQuestion(): string {return "askQuestion";}    //问题提出

 /**
 * 常量:"ResearchStatus"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResearchStatus(): string {return "researchStatus";}    //目前研究的现状

 /**
 * 常量:"InnovationPoints"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_InnovationPoints(): string {return "innovationPoints";}    //创新点

 /**
 * 常量:"ResearchDesign"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResearchDesign(): string {return "researchDesign";}    //研究设计

 /**
 * 常量:"DimensionDataProcess"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DimensionDataProcess(): string {return "dimensionDataProcess";}    //数据处理的维度

 /**
 * 常量:"ExpectedConclusion"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExpectedConclusion(): string {return "expectedConclusion";}    //预期结论

 /**
 * 常量:"ShareId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ShareId(): string {return "shareId";}    //分享Id

 /**
 * 常量:"PaperQCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperQCount(): string {return "paperQCount";}    //论文答疑数

 /**
 * 常量:"SubVCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SubVCount(): string {return "subVCount";}    //论文子观点数

 /**
 * 常量:"TagsCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TagsCount(): string {return "tagsCount";}    //论文标注数

 /**
 * 常量:"TeaQCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeaQCount(): string {return "teaQCount";}    //教师提问数

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}