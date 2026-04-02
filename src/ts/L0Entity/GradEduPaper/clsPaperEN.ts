
 /**
 * 类名:clsPaperEN
 * 表名:Paper(01120535)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/26 01:34:39
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 论文表(Paper)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsPaperEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = "PaperId in (Select PaperId from PaperEduClsRela where IdCurrEduCls='{0}'))"; //条件格式串
public static _CurrTabName= "Paper"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 47;
public static AttributeName = ["paperId", "paperTitle", "paperContent", "periodical", "author", "researchQuestion", "keyword", "literatureSources", "literatureLink", "uploadfileUrl", "isQuotethesis", "quoteId", "isChecked", "checker", "literatureTypeId", "browseNumber", "isSubmit", "appraiseCount", "attachmentCount", "collectionCount", "downloadCount", "okCount", "pcount", "score", "stuScore", "teaScore", "paperTypeId", "paperStatusId", "versionCount", "isPublic", "askQuestion", "researchStatus", "innovationPoints", "researchDesign", "dimensionDataProcess", "expectedConclusion", "shareId", "paperQCount", "subVCount", "tagsCount", "teaQCount", "idStudyLevel", "idGrade", "createDate", "updUser", "updDate", "memo"];
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
private mstrPaperId = "";    //论文Id
private mstrPaperTitle = "";    //论文标题
private mstrPaperContent = "";    //主题内容
private mstrPeriodical = "";    //期刊
private mstrAuthor = "";    //作者
private mstrResearchQuestion = "";    //研究问题
private mstrKeyword = "";    //关键字
private mstrLiteratureSources = "";    //文献来源
private mstrLiteratureLink = "";    //文献链接
private mstrUploadfileUrl = "";    //文件地址
private mbolIsQuotethesis = false;    //是否引用论文
private mstrQuoteId = "";    //引用Id
private mbolIsChecked = false;    //是否检查
private mstrChecker = "";    //审核人
private mstrLiteratureTypeId = "";    //文献类型Id
private mintBrowseNumber = 0;    //浏览量
private mbolIsSubmit = false;    //是否提交
private mintAppraiseCount = 0;    //评论数
private mintAttachmentCount = 0;    //附件计数
private mlngCollectionCount = 0;    //收藏数量
private mintDownloadCount = 0;    //下载数
private mintOkCount = 0;    //点赞统计
private mintPcount = 0;    //读写数
private mfltScore = 0.0;    //评分
private mfltStuScore = 0.0;    //学生平均分
private mfltTeaScore = 0.0;    //教师评分
private mstrPaperTypeId = "";    //论文类型Id
private mstrPaperStatusId = "";    //论文状态Id
private mintVersionCount = 0;    //版本统计
private mbolIsPublic = false;    //是否公开
private mstrAskQuestion = "";    //问题提出
private mstrResearchStatus = "";    //目前研究的现状
private mstrInnovationPoints = "";    //创新点
private mstrResearchDesign = "";    //研究设计
private mstrDimensionDataProcess = "";    //数据处理的维度
private mstrExpectedConclusion = "";    //预期结论
private mstrShareId = "";    //分享Id
private mintPaperQCount = 0;    //论文答疑数
private mintSubVCount = 0;    //论文子观点数
private mintTagsCount = 0;    //论文标注数
private mintTeaQCount = 0;    //教师提问数
private mstrIdStudyLevel = "";    //学段流水号
private mstrIdGrade = "";    //年级流水号
private mstrCreateDate = "";    //建立日期
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注

/**
 * 论文Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperId (value: string)
{
if (value  != undefined)
{
 this.paperId = value;
    this.hmProperty["paperId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 论文标题(说明:;字段类型:varchar;字段长度:500;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperTitle (value: string)
{
if (value  != undefined)
{
 this.paperTitle = value;
    this.hmProperty["paperTitle"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 主题内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperContent (value: string)
{
if (value  != undefined)
{
 this.paperContent = value;
    this.hmProperty["paperContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 期刊(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPeriodical (value: string)
{
if (value  != undefined)
{
 this.periodical = value;
    this.hmProperty["periodical"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 作者(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAuthor (value: string)
{
if (value  != undefined)
{
 this.author = value;
    this.hmProperty["author"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 研究问题(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetResearchQuestion (value: string)
{
if (value  != undefined)
{
 this.researchQuestion = value;
    this.hmProperty["researchQuestion"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 关键字(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeyword (value: string)
{
if (value  != undefined)
{
 this.keyword = value;
    this.hmProperty["keyword"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文献来源(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLiteratureSources (value: string)
{
if (value  != undefined)
{
 this.literatureSources = value;
    this.hmProperty["literatureSources"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文献链接(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLiteratureLink (value: string)
{
if (value  != undefined)
{
 this.literatureLink = value;
    this.hmProperty["literatureLink"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件地址(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUploadfileUrl (value: string)
{
if (value  != undefined)
{
 this.uploadfileUrl = value;
    this.hmProperty["uploadfileUrl"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否引用论文(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsQuotethesis (value: boolean)
{
if (value  != undefined)
{
 this.isQuotethesis = value;
    this.hmProperty["isQuotethesis"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 引用Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuoteId (value: string)
{
if (value  != undefined)
{
 this.quoteId = value;
    this.hmProperty["quoteId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否检查(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsChecked (value: boolean)
{
if (value  != undefined)
{
 this.isChecked = value;
    this.hmProperty["isChecked"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 审核人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetChecker (value: string)
{
if (value  != undefined)
{
 this.checker = value;
    this.hmProperty["checker"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文献类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLiteratureTypeId (value: string)
{
if (value  != undefined)
{
 this.literatureTypeId = value;
    this.hmProperty["literatureTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 浏览量(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBrowseNumber (value: number)
{
if (value  != undefined)
{
 this.browseNumber = value;
    this.hmProperty["browseNumber"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否提交(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSubmit (value: boolean)
{
if (value  != undefined)
{
 this.isSubmit = value;
    this.hmProperty["isSubmit"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评论数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAppraiseCount (value: number)
{
if (value  != undefined)
{
 this.appraiseCount = value;
    this.hmProperty["appraiseCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 附件计数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAttachmentCount (value: number)
{
if (value  != undefined)
{
 this.attachmentCount = value;
    this.hmProperty["attachmentCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 收藏数量(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCollectionCount (value: number)
{
if (value  != undefined)
{
 this.collectionCount = value;
    this.hmProperty["collectionCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 下载数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDownloadCount (value: number)
{
if (value  != undefined)
{
 this.downloadCount = value;
    this.hmProperty["downloadCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 点赞统计(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOkCount (value: number)
{
if (value  != undefined)
{
 this.okCount = value;
    this.hmProperty["okCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 读写数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPcount (value: number)
{
if (value  != undefined)
{
 this.pcount = value;
    this.hmProperty["pcount"] = true;
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
 * 论文类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperTypeId (value: string)
{
if (value  != undefined)
{
 this.paperTypeId = value;
    this.hmProperty["paperTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 论文状态Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperStatusId (value: string)
{
if (value  != undefined)
{
 this.paperStatusId = value;
    this.hmProperty["paperStatusId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 版本统计(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVersionCount (value: number)
{
if (value  != undefined)
{
 this.versionCount = value;
    this.hmProperty["versionCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否公开(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsPublic (value: boolean)
{
if (value  != undefined)
{
 this.isPublic = value;
    this.hmProperty["isPublic"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 问题提出(说明:;字段类型:varchar;字段长度:5000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAskQuestion (value: string)
{
if (value  != undefined)
{
 this.askQuestion = value;
    this.hmProperty["askQuestion"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 目前研究的现状(说明:;字段类型:varchar;字段长度:5000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetResearchStatus (value: string)
{
if (value  != undefined)
{
 this.researchStatus = value;
    this.hmProperty["researchStatus"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 创新点(说明:;字段类型:varchar;字段长度:5000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetInnovationPoints (value: string)
{
if (value  != undefined)
{
 this.innovationPoints = value;
    this.hmProperty["innovationPoints"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 研究设计(说明:;字段类型:varchar;字段长度:5000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetResearchDesign (value: string)
{
if (value  != undefined)
{
 this.researchDesign = value;
    this.hmProperty["researchDesign"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据处理的维度(说明:;字段类型:varchar;字段长度:5000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDimensionDataProcess (value: string)
{
if (value  != undefined)
{
 this.dimensionDataProcess = value;
    this.hmProperty["dimensionDataProcess"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 预期结论(说明:;字段类型:varchar;字段长度:5000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExpectedConclusion (value: string)
{
if (value  != undefined)
{
 this.expectedConclusion = value;
    this.hmProperty["expectedConclusion"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 分享Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetShareId (value: string)
{
if (value  != undefined)
{
 this.shareId = value;
    this.hmProperty["shareId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 论文答疑数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperQCount (value: number)
{
if (value  != undefined)
{
 this.paperQCount = value;
    this.hmProperty["paperQCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 论文子观点数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSubVCount (value: number)
{
if (value  != undefined)
{
 this.subVCount = value;
    this.hmProperty["subVCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 论文标注数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTagsCount (value: number)
{
if (value  != undefined)
{
 this.tagsCount = value;
    this.hmProperty["tagsCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教师提问数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeaQCount (value: number)
{
if (value  != undefined)
{
 this.teaQCount = value;
    this.hmProperty["teaQCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学段流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStudyLevel (value: string)
{
if (value  != undefined)
{
 this.idStudyLevel = value;
    this.hmProperty["idStudyLevel"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 年级流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdGrade (value: string)
{
if (value  != undefined)
{
 this.idGrade = value;
    this.hmProperty["idGrade"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 建立日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateDate (value: string)
{
if (value  != undefined)
{
 this.createDate = value;
    this.hmProperty["createDate"] = true;
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
case clsPaperEN.con_PaperId:
return this.paperId;
case clsPaperEN.con_PaperTitle:
return this.paperTitle;
case clsPaperEN.con_PaperContent:
return this.paperContent;
case clsPaperEN.con_Periodical:
return this.periodical;
case clsPaperEN.con_Author:
return this.author;
case clsPaperEN.con_ResearchQuestion:
return this.researchQuestion;
case clsPaperEN.con_Keyword:
return this.keyword;
case clsPaperEN.con_LiteratureSources:
return this.literatureSources;
case clsPaperEN.con_LiteratureLink:
return this.literatureLink;
case clsPaperEN.con_UploadfileUrl:
return this.uploadfileUrl;
case clsPaperEN.con_IsQuotethesis:
return this.isQuotethesis;
case clsPaperEN.con_QuoteId:
return this.quoteId;
case clsPaperEN.con_IsChecked:
return this.isChecked;
case clsPaperEN.con_Checker:
return this.checker;
case clsPaperEN.con_LiteratureTypeId:
return this.literatureTypeId;
case clsPaperEN.con_BrowseNumber:
return this.browseNumber;
case clsPaperEN.con_IsSubmit:
return this.isSubmit;
case clsPaperEN.con_AppraiseCount:
return this.appraiseCount;
case clsPaperEN.con_AttachmentCount:
return this.attachmentCount;
case clsPaperEN.con_CollectionCount:
return this.collectionCount;
case clsPaperEN.con_DownloadCount:
return this.downloadCount;
case clsPaperEN.con_OkCount:
return this.okCount;
case clsPaperEN.con_Pcount:
return this.pcount;
case clsPaperEN.con_Score:
return this.score;
case clsPaperEN.con_StuScore:
return this.stuScore;
case clsPaperEN.con_TeaScore:
return this.teaScore;
case clsPaperEN.con_PaperTypeId:
return this.paperTypeId;
case clsPaperEN.con_PaperStatusId:
return this.paperStatusId;
case clsPaperEN.con_VersionCount:
return this.versionCount;
case clsPaperEN.con_IsPublic:
return this.isPublic;
case clsPaperEN.con_AskQuestion:
return this.askQuestion;
case clsPaperEN.con_ResearchStatus:
return this.researchStatus;
case clsPaperEN.con_InnovationPoints:
return this.innovationPoints;
case clsPaperEN.con_ResearchDesign:
return this.researchDesign;
case clsPaperEN.con_DimensionDataProcess:
return this.dimensionDataProcess;
case clsPaperEN.con_ExpectedConclusion:
return this.expectedConclusion;
case clsPaperEN.con_ShareId:
return this.shareId;
case clsPaperEN.con_PaperQCount:
return this.paperQCount;
case clsPaperEN.con_SubVCount:
return this.subVCount;
case clsPaperEN.con_TagsCount:
return this.tagsCount;
case clsPaperEN.con_TeaQCount:
return this.teaQCount;
case clsPaperEN.con_IdStudyLevel:
return this.idStudyLevel;
case clsPaperEN.con_IdGrade:
return this.idGrade;
case clsPaperEN.con_CreateDate:
return this.createDate;
case clsPaperEN.con_UpdUser:
return this.updUser;
case clsPaperEN.con_UpdDate:
return this.updDate;
case clsPaperEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Paper]中不存在!`;
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
case clsPaperEN.con_PaperId:
this.paperId = strValue;
    this.hmProperty["paperId"] = true;
break;
case clsPaperEN.con_PaperTitle:
this.paperTitle = strValue;
    this.hmProperty["paperTitle"] = true;
break;
case clsPaperEN.con_PaperContent:
this.paperContent = strValue;
    this.hmProperty["paperContent"] = true;
break;
case clsPaperEN.con_Periodical:
this.periodical = strValue;
    this.hmProperty["periodical"] = true;
break;
case clsPaperEN.con_Author:
this.author = strValue;
    this.hmProperty["author"] = true;
break;
case clsPaperEN.con_ResearchQuestion:
this.researchQuestion = strValue;
    this.hmProperty["researchQuestion"] = true;
break;
case clsPaperEN.con_Keyword:
this.keyword = strValue;
    this.hmProperty["keyword"] = true;
break;
case clsPaperEN.con_LiteratureSources:
this.literatureSources = strValue;
    this.hmProperty["literatureSources"] = true;
break;
case clsPaperEN.con_LiteratureLink:
this.literatureLink = strValue;
    this.hmProperty["literatureLink"] = true;
break;
case clsPaperEN.con_UploadfileUrl:
this.uploadfileUrl = strValue;
    this.hmProperty["uploadfileUrl"] = true;
break;
case clsPaperEN.con_IsQuotethesis:
this.isQuotethesis = Boolean(strValue);
    this.hmProperty["isQuotethesis"] = true;
break;
case clsPaperEN.con_QuoteId:
this.quoteId = strValue;
    this.hmProperty["quoteId"] = true;
break;
case clsPaperEN.con_IsChecked:
this.isChecked = Boolean(strValue);
    this.hmProperty["isChecked"] = true;
break;
case clsPaperEN.con_Checker:
this.checker = strValue;
    this.hmProperty["checker"] = true;
break;
case clsPaperEN.con_LiteratureTypeId:
this.literatureTypeId = strValue;
    this.hmProperty["literatureTypeId"] = true;
break;
case clsPaperEN.con_BrowseNumber:
this.browseNumber = Number(strValue);
    this.hmProperty["browseNumber"] = true;
break;
case clsPaperEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
    this.hmProperty["isSubmit"] = true;
break;
case clsPaperEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
    this.hmProperty["appraiseCount"] = true;
break;
case clsPaperEN.con_AttachmentCount:
this.attachmentCount = Number(strValue);
    this.hmProperty["attachmentCount"] = true;
break;
case clsPaperEN.con_CollectionCount:
this.collectionCount = Number(strValue);
    this.hmProperty["collectionCount"] = true;
break;
case clsPaperEN.con_DownloadCount:
this.downloadCount = Number(strValue);
    this.hmProperty["downloadCount"] = true;
break;
case clsPaperEN.con_OkCount:
this.okCount = Number(strValue);
    this.hmProperty["okCount"] = true;
break;
case clsPaperEN.con_Pcount:
this.pcount = Number(strValue);
    this.hmProperty["pcount"] = true;
break;
case clsPaperEN.con_Score:
this.score = Number(strValue);
    this.hmProperty["score"] = true;
break;
case clsPaperEN.con_StuScore:
this.stuScore = Number(strValue);
    this.hmProperty["stuScore"] = true;
break;
case clsPaperEN.con_TeaScore:
this.teaScore = Number(strValue);
    this.hmProperty["teaScore"] = true;
break;
case clsPaperEN.con_PaperTypeId:
this.paperTypeId = strValue;
    this.hmProperty["paperTypeId"] = true;
break;
case clsPaperEN.con_PaperStatusId:
this.paperStatusId = strValue;
    this.hmProperty["paperStatusId"] = true;
break;
case clsPaperEN.con_VersionCount:
this.versionCount = Number(strValue);
    this.hmProperty["versionCount"] = true;
break;
case clsPaperEN.con_IsPublic:
this.isPublic = Boolean(strValue);
    this.hmProperty["isPublic"] = true;
break;
case clsPaperEN.con_AskQuestion:
this.askQuestion = strValue;
    this.hmProperty["askQuestion"] = true;
break;
case clsPaperEN.con_ResearchStatus:
this.researchStatus = strValue;
    this.hmProperty["researchStatus"] = true;
break;
case clsPaperEN.con_InnovationPoints:
this.innovationPoints = strValue;
    this.hmProperty["innovationPoints"] = true;
break;
case clsPaperEN.con_ResearchDesign:
this.researchDesign = strValue;
    this.hmProperty["researchDesign"] = true;
break;
case clsPaperEN.con_DimensionDataProcess:
this.dimensionDataProcess = strValue;
    this.hmProperty["dimensionDataProcess"] = true;
break;
case clsPaperEN.con_ExpectedConclusion:
this.expectedConclusion = strValue;
    this.hmProperty["expectedConclusion"] = true;
break;
case clsPaperEN.con_ShareId:
this.shareId = strValue;
    this.hmProperty["shareId"] = true;
break;
case clsPaperEN.con_PaperQCount:
this.paperQCount = Number(strValue);
    this.hmProperty["paperQCount"] = true;
break;
case clsPaperEN.con_SubVCount:
this.subVCount = Number(strValue);
    this.hmProperty["subVCount"] = true;
break;
case clsPaperEN.con_TagsCount:
this.tagsCount = Number(strValue);
    this.hmProperty["tagsCount"] = true;
break;
case clsPaperEN.con_TeaQCount:
this.teaQCount = Number(strValue);
    this.hmProperty["teaQCount"] = true;
break;
case clsPaperEN.con_IdStudyLevel:
this.idStudyLevel = strValue;
    this.hmProperty["idStudyLevel"] = true;
break;
case clsPaperEN.con_IdGrade:
this.idGrade = strValue;
    this.hmProperty["idGrade"] = true;
break;
case clsPaperEN.con_CreateDate:
this.createDate = strValue;
    this.hmProperty["createDate"] = true;
break;
case clsPaperEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsPaperEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsPaperEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[Paper]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
public idStudyLevel = "";    //学段流水号
public idGrade = "";    //年级流水号
public createDate = "";    //建立日期
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注


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
 * 常量:"PaperContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperContent(): string {return "paperContent";}    //主题内容

 /**
 * 常量:"Periodical"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Periodical(): string {return "periodical";}    //期刊

 /**
 * 常量:"Author"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Author(): string {return "author";}    //作者

 /**
 * 常量:"ResearchQuestion"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResearchQuestion(): string {return "researchQuestion";}    //研究问题

 /**
 * 常量:"Keyword"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Keyword(): string {return "keyword";}    //关键字

 /**
 * 常量:"LiteratureSources"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LiteratureSources(): string {return "literatureSources";}    //文献来源

 /**
 * 常量:"LiteratureLink"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LiteratureLink(): string {return "literatureLink";}    //文献链接

 /**
 * 常量:"UploadfileUrl"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UploadfileUrl(): string {return "uploadfileUrl";}    //文件地址

 /**
 * 常量:"IsQuotethesis"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsQuotethesis(): string {return "isQuotethesis";}    //是否引用论文

 /**
 * 常量:"QuoteId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuoteId(): string {return "quoteId";}    //引用Id

 /**
 * 常量:"IsChecked"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsChecked(): string {return "isChecked";}    //是否检查

 /**
 * 常量:"Checker"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Checker(): string {return "checker";}    //审核人

 /**
 * 常量:"LiteratureTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LiteratureTypeId(): string {return "literatureTypeId";}    //文献类型Id

 /**
 * 常量:"BrowseNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BrowseNumber(): string {return "browseNumber";}    //浏览量

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"AppraiseCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

 /**
 * 常量:"AttachmentCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AttachmentCount(): string {return "attachmentCount";}    //附件计数

 /**
 * 常量:"CollectionCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollectionCount(): string {return "collectionCount";}    //收藏数量

 /**
 * 常量:"DownloadCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DownloadCount(): string {return "downloadCount";}    //下载数

 /**
 * 常量:"OkCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"Pcount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Pcount(): string {return "pcount";}    //读写数

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
 * 常量:"PaperTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperTypeId(): string {return "paperTypeId";}    //论文类型Id

 /**
 * 常量:"PaperStatusId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperStatusId(): string {return "paperStatusId";}    //论文状态Id

 /**
 * 常量:"VersionCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_VersionCount(): string {return "versionCount";}    //版本统计

 /**
 * 常量:"IsPublic"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsPublic(): string {return "isPublic";}    //是否公开

 /**
 * 常量:"AskQuestion"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AskQuestion(): string {return "askQuestion";}    //问题提出

 /**
 * 常量:"ResearchStatus"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResearchStatus(): string {return "researchStatus";}    //目前研究的现状

 /**
 * 常量:"InnovationPoints"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_InnovationPoints(): string {return "innovationPoints";}    //创新点

 /**
 * 常量:"ResearchDesign"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResearchDesign(): string {return "researchDesign";}    //研究设计

 /**
 * 常量:"DimensionDataProcess"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DimensionDataProcess(): string {return "dimensionDataProcess";}    //数据处理的维度

 /**
 * 常量:"ExpectedConclusion"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExpectedConclusion(): string {return "expectedConclusion";}    //预期结论

 /**
 * 常量:"ShareId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ShareId(): string {return "shareId";}    //分享Id

 /**
 * 常量:"PaperQCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PaperQCount(): string {return "paperQCount";}    //论文答疑数

 /**
 * 常量:"SubVCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubVCount(): string {return "subVCount";}    //论文子观点数

 /**
 * 常量:"TagsCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TagsCount(): string {return "tagsCount";}    //论文标注数

 /**
 * 常量:"TeaQCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeaQCount(): string {return "teaQCount";}    //教师提问数

 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //学段流水号

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
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