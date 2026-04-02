
 /**
 * 类名:clsvPaperSimEN
 * 表名:vPaperSim(01120597)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:42
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
 * 论文简化视图(vPaperSim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvPaperSimEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vPaperSim"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 39;
public static AttributeName = ["paperId", "paperTitle", "paperContent", "periodical", "author", "researchQuestion", "updDate", "userName", "idXzCollege", "collegeName", "idXzMajor", "majorName", "keyword", "literatureSources", "literatureLink", "uploadfileUrl", "isQuotethesis", "quoteId", "checker", "isChecked", "literatureTypeId", "browseNumber", "literatureTypeName", "isSubmit", "appraiseCount", "attachmentCount", "collectionCount", "downloadCount", "memo", "okCount", "pcount", "score", "stuScore", "teaScore", "paperQCount", "subVCount", "tagsCount", "teaQCount", "updUser"];
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
case clsvPaperSimEN.con_PaperId:
return this.paperId;
case clsvPaperSimEN.con_PaperTitle:
return this.paperTitle;
case clsvPaperSimEN.con_PaperContent:
return this.paperContent;
case clsvPaperSimEN.con_Periodical:
return this.periodical;
case clsvPaperSimEN.con_Author:
return this.author;
case clsvPaperSimEN.con_ResearchQuestion:
return this.researchQuestion;
case clsvPaperSimEN.con_UpdDate:
return this.updDate;
case clsvPaperSimEN.con_UserName:
return this.userName;
case clsvPaperSimEN.con_IdXzCollege:
return this.idXzCollege;
case clsvPaperSimEN.con_CollegeName:
return this.collegeName;
case clsvPaperSimEN.con_IdXzMajor:
return this.idXzMajor;
case clsvPaperSimEN.con_MajorName:
return this.majorName;
case clsvPaperSimEN.con_Keyword:
return this.keyword;
case clsvPaperSimEN.con_LiteratureSources:
return this.literatureSources;
case clsvPaperSimEN.con_LiteratureLink:
return this.literatureLink;
case clsvPaperSimEN.con_UploadfileUrl:
return this.uploadfileUrl;
case clsvPaperSimEN.con_IsQuotethesis:
return this.isQuotethesis;
case clsvPaperSimEN.con_QuoteId:
return this.quoteId;
case clsvPaperSimEN.con_Checker:
return this.checker;
case clsvPaperSimEN.con_IsChecked:
return this.isChecked;
case clsvPaperSimEN.con_LiteratureTypeId:
return this.literatureTypeId;
case clsvPaperSimEN.con_BrowseNumber:
return this.browseNumber;
case clsvPaperSimEN.con_LiteratureTypeName:
return this.literatureTypeName;
case clsvPaperSimEN.con_IsSubmit:
return this.isSubmit;
case clsvPaperSimEN.con_AppraiseCount:
return this.appraiseCount;
case clsvPaperSimEN.con_AttachmentCount:
return this.attachmentCount;
case clsvPaperSimEN.con_CollectionCount:
return this.collectionCount;
case clsvPaperSimEN.con_DownloadCount:
return this.downloadCount;
case clsvPaperSimEN.con_Memo:
return this.memo;
case clsvPaperSimEN.con_OkCount:
return this.okCount;
case clsvPaperSimEN.con_Pcount:
return this.pcount;
case clsvPaperSimEN.con_Score:
return this.score;
case clsvPaperSimEN.con_StuScore:
return this.stuScore;
case clsvPaperSimEN.con_TeaScore:
return this.teaScore;
case clsvPaperSimEN.con_PaperQCount:
return this.paperQCount;
case clsvPaperSimEN.con_SubVCount:
return this.subVCount;
case clsvPaperSimEN.con_TagsCount:
return this.tagsCount;
case clsvPaperSimEN.con_TeaQCount:
return this.teaQCount;
case clsvPaperSimEN.con_UpdUser:
return this.updUser;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vPaperSim]中不存在!`;
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
case clsvPaperSimEN.con_PaperId:
this.paperId = strValue;
break;
case clsvPaperSimEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvPaperSimEN.con_PaperContent:
this.paperContent = strValue;
break;
case clsvPaperSimEN.con_Periodical:
this.periodical = strValue;
break;
case clsvPaperSimEN.con_Author:
this.author = strValue;
break;
case clsvPaperSimEN.con_ResearchQuestion:
this.researchQuestion = strValue;
break;
case clsvPaperSimEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvPaperSimEN.con_UserName:
this.userName = strValue;
break;
case clsvPaperSimEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvPaperSimEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvPaperSimEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvPaperSimEN.con_MajorName:
this.majorName = strValue;
break;
case clsvPaperSimEN.con_Keyword:
this.keyword = strValue;
break;
case clsvPaperSimEN.con_LiteratureSources:
this.literatureSources = strValue;
break;
case clsvPaperSimEN.con_LiteratureLink:
this.literatureLink = strValue;
break;
case clsvPaperSimEN.con_UploadfileUrl:
this.uploadfileUrl = strValue;
break;
case clsvPaperSimEN.con_IsQuotethesis:
this.isQuotethesis = Boolean(strValue);
break;
case clsvPaperSimEN.con_QuoteId:
this.quoteId = strValue;
break;
case clsvPaperSimEN.con_Checker:
this.checker = strValue;
break;
case clsvPaperSimEN.con_IsChecked:
this.isChecked = Boolean(strValue);
break;
case clsvPaperSimEN.con_LiteratureTypeId:
this.literatureTypeId = strValue;
break;
case clsvPaperSimEN.con_BrowseNumber:
this.browseNumber = Number(strValue);
break;
case clsvPaperSimEN.con_LiteratureTypeName:
this.literatureTypeName = strValue;
break;
case clsvPaperSimEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvPaperSimEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvPaperSimEN.con_AttachmentCount:
this.attachmentCount = Number(strValue);
break;
case clsvPaperSimEN.con_CollectionCount:
this.collectionCount = Number(strValue);
break;
case clsvPaperSimEN.con_DownloadCount:
this.downloadCount = Number(strValue);
break;
case clsvPaperSimEN.con_Memo:
this.memo = strValue;
break;
case clsvPaperSimEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvPaperSimEN.con_Pcount:
this.pcount = Number(strValue);
break;
case clsvPaperSimEN.con_Score:
this.score = Number(strValue);
break;
case clsvPaperSimEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvPaperSimEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvPaperSimEN.con_PaperQCount:
this.paperQCount = Number(strValue);
break;
case clsvPaperSimEN.con_SubVCount:
this.subVCount = Number(strValue);
break;
case clsvPaperSimEN.con_TagsCount:
this.tagsCount = Number(strValue);
break;
case clsvPaperSimEN.con_TeaQCount:
this.teaQCount = Number(strValue);
break;
case clsvPaperSimEN.con_UpdUser:
this.updUser = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vPaperSim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public updDate = "";    //修改日期
public userName = "";    //用户名
public idXzCollege = "";    //学院流水号
public collegeName = "";    //学院名称
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
public keyword = "";    //关键字
public literatureSources = "";    //文献来源
public literatureLink = "";    //文献链接
public uploadfileUrl = "";    //文件地址
public isQuotethesis = false;    //是否引用论文
public quoteId = "";    //引用Id
public checker = "";    //审核人
public isChecked = false;    //是否检查
public literatureTypeId = "";    //文献类型Id
public browseNumber = 0;    //浏览量
public literatureTypeName = "";    //作文类型名
public isSubmit = false;    //是否提交
public appraiseCount = 0;    //评论数
public attachmentCount = 0;    //附件计数
public collectionCount = 0;    //收藏数量
public downloadCount = 0;    //下载数
public memo = "";    //备注
public okCount = 0;    //点赞统计
public pcount = 0;    //读写数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public paperQCount = 0;    //论文答疑数
public subVCount = 0;    //论文子观点数
public tagsCount = 0;    //论文标注数
public teaQCount = 0;    //教师提问数
public updUser = "";    //修改人


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
 * 常量:"PaperContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperContent(): string {return "paperContent";}    //主题内容

 /**
 * 常量:"Periodical"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Periodical(): string {return "periodical";}    //期刊

 /**
 * 常量:"Author"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Author(): string {return "author";}    //作者

 /**
 * 常量:"ResearchQuestion"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ResearchQuestion(): string {return "researchQuestion";}    //研究问题

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"IdXzCollege"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"CollegeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"IdXzMajor"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"Keyword"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Keyword(): string {return "keyword";}    //关键字

 /**
 * 常量:"LiteratureSources"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LiteratureSources(): string {return "literatureSources";}    //文献来源

 /**
 * 常量:"LiteratureLink"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LiteratureLink(): string {return "literatureLink";}    //文献链接

 /**
 * 常量:"UploadfileUrl"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UploadfileUrl(): string {return "uploadfileUrl";}    //文件地址

 /**
 * 常量:"IsQuotethesis"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsQuotethesis(): string {return "isQuotethesis";}    //是否引用论文

 /**
 * 常量:"QuoteId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuoteId(): string {return "quoteId";}    //引用Id

 /**
 * 常量:"Checker"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Checker(): string {return "checker";}    //审核人

 /**
 * 常量:"IsChecked"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsChecked(): string {return "isChecked";}    //是否检查

 /**
 * 常量:"LiteratureTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LiteratureTypeId(): string {return "literatureTypeId";}    //文献类型Id

 /**
 * 常量:"BrowseNumber"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_BrowseNumber(): string {return "browseNumber";}    //浏览量

 /**
 * 常量:"LiteratureTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LiteratureTypeName(): string {return "literatureTypeName";}    //作文类型名

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"AppraiseCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

 /**
 * 常量:"AttachmentCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AttachmentCount(): string {return "attachmentCount";}    //附件计数

 /**
 * 常量:"CollectionCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollectionCount(): string {return "collectionCount";}    //收藏数量

 /**
 * 常量:"DownloadCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DownloadCount(): string {return "downloadCount";}    //下载数

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"Pcount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Pcount(): string {return "pcount";}    //读写数

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
 * 常量:"PaperQCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperQCount(): string {return "paperQCount";}    //论文答疑数

 /**
 * 常量:"SubVCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubVCount(): string {return "subVCount";}    //论文子观点数

 /**
 * 常量:"TagsCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TagsCount(): string {return "tagsCount";}    //论文标注数

 /**
 * 常量:"TeaQCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TeaQCount(): string {return "teaQCount";}    //教师提问数

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