
 /**
 * 类名:clsvViewpointEN
 * 表名:vViewpoint(01120543)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:03
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
 * v观点表视图(vViewpoint)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvViewpointEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vViewpoint"; //当前表名,与该类相关的表名
public static _KeyFldName= "ViewpointId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 34;
public static AttributeName = ["viewpointId", "viewpointName", "viewpointContent", "viewpointTypeId", "viewpointTypeName", "reason", "source", "vPProposePeople", "updDate", "updUser", "memo", "isSubmit", "appraiseCount", "score", "okCount", "userTypeId", "userTypeName", "author", "citationId", "keyword", "paperTitle", "periodical", "researchQuestion", "uploadfileUrl", "citationCount", "stuScore", "teaScore", "idCurrEduCls", "pdfContent", "pdfPageNum", "versionCount", "createDate", "shareId", "isRecommend"];
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
case clsvViewpointEN.con_ViewpointId:
return this.viewpointId;
case clsvViewpointEN.con_ViewpointName:
return this.viewpointName;
case clsvViewpointEN.con_ViewpointContent:
return this.viewpointContent;
case clsvViewpointEN.con_ViewpointTypeId:
return this.viewpointTypeId;
case clsvViewpointEN.con_ViewpointTypeName:
return this.viewpointTypeName;
case clsvViewpointEN.con_Reason:
return this.reason;
case clsvViewpointEN.con_Source:
return this.source;
case clsvViewpointEN.con_VPProposePeople:
return this.vPProposePeople;
case clsvViewpointEN.con_UpdDate:
return this.updDate;
case clsvViewpointEN.con_UpdUser:
return this.updUser;
case clsvViewpointEN.con_Memo:
return this.memo;
case clsvViewpointEN.con_IsSubmit:
return this.isSubmit;
case clsvViewpointEN.con_AppraiseCount:
return this.appraiseCount;
case clsvViewpointEN.con_Score:
return this.score;
case clsvViewpointEN.con_OkCount:
return this.okCount;
case clsvViewpointEN.con_UserTypeId:
return this.userTypeId;
case clsvViewpointEN.con_UserTypeName:
return this.userTypeName;
case clsvViewpointEN.con_Author:
return this.author;
case clsvViewpointEN.con_CitationId:
return this.citationId;
case clsvViewpointEN.con_Keyword:
return this.keyword;
case clsvViewpointEN.con_PaperTitle:
return this.paperTitle;
case clsvViewpointEN.con_Periodical:
return this.periodical;
case clsvViewpointEN.con_ResearchQuestion:
return this.researchQuestion;
case clsvViewpointEN.con_UploadfileUrl:
return this.uploadfileUrl;
case clsvViewpointEN.con_CitationCount:
return this.citationCount;
case clsvViewpointEN.con_StuScore:
return this.stuScore;
case clsvViewpointEN.con_TeaScore:
return this.teaScore;
case clsvViewpointEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvViewpointEN.con_PdfContent:
return this.pdfContent;
case clsvViewpointEN.con_PdfPageNum:
return this.pdfPageNum;
case clsvViewpointEN.con_VersionCount:
return this.versionCount;
case clsvViewpointEN.con_CreateDate:
return this.createDate;
case clsvViewpointEN.con_ShareId:
return this.shareId;
case clsvViewpointEN.con_IsRecommend:
return this.isRecommend;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vViewpoint]中不存在!`;
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
case clsvViewpointEN.con_ViewpointId:
this.viewpointId = strValue;
break;
case clsvViewpointEN.con_ViewpointName:
this.viewpointName = strValue;
break;
case clsvViewpointEN.con_ViewpointContent:
this.viewpointContent = strValue;
break;
case clsvViewpointEN.con_ViewpointTypeId:
this.viewpointTypeId = strValue;
break;
case clsvViewpointEN.con_ViewpointTypeName:
this.viewpointTypeName = strValue;
break;
case clsvViewpointEN.con_Reason:
this.reason = strValue;
break;
case clsvViewpointEN.con_Source:
this.source = strValue;
break;
case clsvViewpointEN.con_VPProposePeople:
this.vPProposePeople = strValue;
break;
case clsvViewpointEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvViewpointEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvViewpointEN.con_Memo:
this.memo = strValue;
break;
case clsvViewpointEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvViewpointEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvViewpointEN.con_Score:
this.score = Number(strValue);
break;
case clsvViewpointEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvViewpointEN.con_UserTypeId:
this.userTypeId = strValue;
break;
case clsvViewpointEN.con_UserTypeName:
this.userTypeName = strValue;
break;
case clsvViewpointEN.con_Author:
this.author = strValue;
break;
case clsvViewpointEN.con_CitationId:
this.citationId = strValue;
break;
case clsvViewpointEN.con_Keyword:
this.keyword = strValue;
break;
case clsvViewpointEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvViewpointEN.con_Periodical:
this.periodical = strValue;
break;
case clsvViewpointEN.con_ResearchQuestion:
this.researchQuestion = strValue;
break;
case clsvViewpointEN.con_UploadfileUrl:
this.uploadfileUrl = strValue;
break;
case clsvViewpointEN.con_CitationCount:
this.citationCount = Number(strValue);
break;
case clsvViewpointEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvViewpointEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvViewpointEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvViewpointEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvViewpointEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
break;
case clsvViewpointEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvViewpointEN.con_CreateDate:
this.createDate = strValue;
break;
case clsvViewpointEN.con_ShareId:
this.shareId = strValue;
break;
case clsvViewpointEN.con_IsRecommend:
this.isRecommend = Boolean(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vViewpoint]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public viewpointId = "";    //观点Id
public viewpointName = "";    //观点名称
public viewpointContent = "";    //观点内容
public viewpointTypeId = "";    //观点类型Id
public viewpointTypeName = "";    //观点类型名
public reason = "";    //理由
public source = "";    //来源
public vPProposePeople = "";    //观点提出人
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public isSubmit = false;    //是否提交
public appraiseCount = 0;    //评论数
public score = 0.0;    //评分
public okCount = 0;    //点赞统计
public userTypeId = "";    //用户类型Id
public userTypeName = "";    //用户类型名称
public author = "";    //作者
public citationId = "";    //引用Id
public keyword = "";    //关键字
public paperTitle = "";    //论文标题
public periodical = "";    //期刊
public researchQuestion = "";    //研究问题
public uploadfileUrl = "";    //文件地址
public citationCount = 0;    //引用统计
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public idCurrEduCls = "";    //教学班流水号
public pdfContent = "";    //Pdf内容
public pdfPageNum = 0;    //Pdf页码
public versionCount = 0;    //版本统计
public createDate = "";    //建立日期
public shareId = "";    //分享Id
public isRecommend = false;    //是否推荐


 /**
 * 常量:"ViewpointId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointId(): string {return "viewpointId";}    //观点Id

 /**
 * 常量:"ViewpointName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointName(): string {return "viewpointName";}    //观点名称

 /**
 * 常量:"ViewpointContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointContent(): string {return "viewpointContent";}    //观点内容

 /**
 * 常量:"ViewpointTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointTypeId(): string {return "viewpointTypeId";}    //观点类型Id

 /**
 * 常量:"ViewpointTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointTypeName(): string {return "viewpointTypeName";}    //观点类型名

 /**
 * 常量:"Reason"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Reason(): string {return "reason";}    //理由

 /**
 * 常量:"Source"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Source(): string {return "source";}    //来源

 /**
 * 常量:"VPProposePeople"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VPProposePeople(): string {return "vPProposePeople";}    //观点提出人

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
 * 常量:"Score"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"UserTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

 /**
 * 常量:"UserTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserTypeName(): string {return "userTypeName";}    //用户类型名称

 /**
 * 常量:"Author"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Author(): string {return "author";}    //作者

 /**
 * 常量:"CitationId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CitationId(): string {return "citationId";}    //引用Id

 /**
 * 常量:"Keyword"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Keyword(): string {return "keyword";}    //关键字

 /**
 * 常量:"PaperTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"Periodical"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Periodical(): string {return "periodical";}    //期刊

 /**
 * 常量:"ResearchQuestion"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ResearchQuestion(): string {return "researchQuestion";}    //研究问题

 /**
 * 常量:"UploadfileUrl"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UploadfileUrl(): string {return "uploadfileUrl";}    //文件地址

 /**
 * 常量:"CitationCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CitationCount(): string {return "citationCount";}    //引用统计

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
 * 常量:"IsRecommend"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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