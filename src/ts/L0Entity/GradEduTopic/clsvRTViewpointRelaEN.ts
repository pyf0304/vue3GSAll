
 /**
 * 类名:clsvRTViewpointRelaEN
 * 表名:vRTViewpointRela(01120541)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 02:05:00
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
 * v主题观点关系(vRTViewpointRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvRTViewpointRelaEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vRTViewpointRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 36;
public static AttributeName = ["mId", "viewpointName", "viewpointContent", "viewpointId", "proposePeople", "viewpointTypeId", "viewpointTypeName", "reason", "source", "topicId", "topicName", "topicContent", "topicProposePeople", "updDate", "updUser", "memo", "isSubmit", "appraiseCount", "okCount", "score", "userTypeId", "userTypeName", "citationCount", "citationId", "stuScore", "teaScore", "viewsDate", "viewsUserId", "idCurrEduCls", "pdfContent", "pdfPageNum", "versionCount", "createDate", "shareId", "isRecommend", "classificationId"];
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
case clsvRTViewpointRelaEN.con_mId:
return this.mId;
case clsvRTViewpointRelaEN.con_ViewpointName:
return this.viewpointName;
case clsvRTViewpointRelaEN.con_ViewpointContent:
return this.viewpointContent;
case clsvRTViewpointRelaEN.con_ViewpointId:
return this.viewpointId;
case clsvRTViewpointRelaEN.con_ProposePeople:
return this.proposePeople;
case clsvRTViewpointRelaEN.con_ViewpointTypeId:
return this.viewpointTypeId;
case clsvRTViewpointRelaEN.con_ViewpointTypeName:
return this.viewpointTypeName;
case clsvRTViewpointRelaEN.con_Reason:
return this.reason;
case clsvRTViewpointRelaEN.con_Source:
return this.source;
case clsvRTViewpointRelaEN.con_TopicId:
return this.topicId;
case clsvRTViewpointRelaEN.con_TopicName:
return this.topicName;
case clsvRTViewpointRelaEN.con_TopicContent:
return this.topicContent;
case clsvRTViewpointRelaEN.con_TopicProposePeople:
return this.topicProposePeople;
case clsvRTViewpointRelaEN.con_UpdDate:
return this.updDate;
case clsvRTViewpointRelaEN.con_UpdUser:
return this.updUser;
case clsvRTViewpointRelaEN.con_Memo:
return this.memo;
case clsvRTViewpointRelaEN.con_IsSubmit:
return this.isSubmit;
case clsvRTViewpointRelaEN.con_AppraiseCount:
return this.appraiseCount;
case clsvRTViewpointRelaEN.con_OkCount:
return this.okCount;
case clsvRTViewpointRelaEN.con_Score:
return this.score;
case clsvRTViewpointRelaEN.con_UserTypeId:
return this.userTypeId;
case clsvRTViewpointRelaEN.con_UserTypeName:
return this.userTypeName;
case clsvRTViewpointRelaEN.con_CitationCount:
return this.citationCount;
case clsvRTViewpointRelaEN.con_CitationId:
return this.citationId;
case clsvRTViewpointRelaEN.con_StuScore:
return this.stuScore;
case clsvRTViewpointRelaEN.con_TeaScore:
return this.teaScore;
case clsvRTViewpointRelaEN.con_ViewsDate:
return this.viewsDate;
case clsvRTViewpointRelaEN.con_ViewsUserId:
return this.viewsUserId;
case clsvRTViewpointRelaEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvRTViewpointRelaEN.con_PdfContent:
return this.pdfContent;
case clsvRTViewpointRelaEN.con_PdfPageNum:
return this.pdfPageNum;
case clsvRTViewpointRelaEN.con_VersionCount:
return this.versionCount;
case clsvRTViewpointRelaEN.con_CreateDate:
return this.createDate;
case clsvRTViewpointRelaEN.con_ShareId:
return this.shareId;
case clsvRTViewpointRelaEN.con_IsRecommend:
return this.isRecommend;
case clsvRTViewpointRelaEN.con_ClassificationId:
return this.classificationId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTViewpointRela]中不存在!`;
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
case clsvRTViewpointRelaEN.con_mId:
this.mId = Number(strValue);
break;
case clsvRTViewpointRelaEN.con_ViewpointName:
this.viewpointName = strValue;
break;
case clsvRTViewpointRelaEN.con_ViewpointContent:
this.viewpointContent = strValue;
break;
case clsvRTViewpointRelaEN.con_ViewpointId:
this.viewpointId = strValue;
break;
case clsvRTViewpointRelaEN.con_ProposePeople:
this.proposePeople = strValue;
break;
case clsvRTViewpointRelaEN.con_ViewpointTypeId:
this.viewpointTypeId = strValue;
break;
case clsvRTViewpointRelaEN.con_ViewpointTypeName:
this.viewpointTypeName = strValue;
break;
case clsvRTViewpointRelaEN.con_Reason:
this.reason = strValue;
break;
case clsvRTViewpointRelaEN.con_Source:
this.source = strValue;
break;
case clsvRTViewpointRelaEN.con_TopicId:
this.topicId = strValue;
break;
case clsvRTViewpointRelaEN.con_TopicName:
this.topicName = strValue;
break;
case clsvRTViewpointRelaEN.con_TopicContent:
this.topicContent = strValue;
break;
case clsvRTViewpointRelaEN.con_TopicProposePeople:
this.topicProposePeople = strValue;
break;
case clsvRTViewpointRelaEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvRTViewpointRelaEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvRTViewpointRelaEN.con_Memo:
this.memo = strValue;
break;
case clsvRTViewpointRelaEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvRTViewpointRelaEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvRTViewpointRelaEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvRTViewpointRelaEN.con_Score:
this.score = Number(strValue);
break;
case clsvRTViewpointRelaEN.con_UserTypeId:
this.userTypeId = strValue;
break;
case clsvRTViewpointRelaEN.con_UserTypeName:
this.userTypeName = strValue;
break;
case clsvRTViewpointRelaEN.con_CitationCount:
this.citationCount = Number(strValue);
break;
case clsvRTViewpointRelaEN.con_CitationId:
this.citationId = strValue;
break;
case clsvRTViewpointRelaEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvRTViewpointRelaEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvRTViewpointRelaEN.con_ViewsDate:
this.viewsDate = strValue;
break;
case clsvRTViewpointRelaEN.con_ViewsUserId:
this.viewsUserId = strValue;
break;
case clsvRTViewpointRelaEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvRTViewpointRelaEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvRTViewpointRelaEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
break;
case clsvRTViewpointRelaEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvRTViewpointRelaEN.con_CreateDate:
this.createDate = strValue;
break;
case clsvRTViewpointRelaEN.con_ShareId:
this.shareId = strValue;
break;
case clsvRTViewpointRelaEN.con_IsRecommend:
this.isRecommend = Boolean(strValue);
break;
case clsvRTViewpointRelaEN.con_ClassificationId:
this.classificationId = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTViewpointRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public viewpointName = "";    //观点名称
public viewpointContent = "";    //观点内容
public viewpointId = "";    //观点Id
public proposePeople = "";    //提出人
public viewpointTypeId = "";    //观点类型Id
public viewpointTypeName = "";    //观点类型名
public reason = "";    //理由
public source = "";    //来源
public topicId = "";    //主题Id
public topicName = "";    //栏目主题
public topicContent = "";    //主题内容
public topicProposePeople = "";    //主题提出人
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public isSubmit = false;    //是否提交
public appraiseCount = 0;    //评论数
public okCount = 0;    //点赞统计
public score = 0.0;    //评分
public userTypeId = "";    //用户类型Id
public userTypeName = "";    //用户类型名称
public citationCount = 0;    //引用统计
public citationId = "";    //引用Id
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public viewsDate = "";    //观点日期
public viewsUserId = "";    //观点用户Id
public idCurrEduCls = "";    //教学班流水号
public pdfContent = "";    //Pdf内容
public pdfPageNum = 0;    //Pdf页码
public versionCount = 0;    //版本统计
public createDate = "";    //建立日期
public shareId = "";    //分享Id
public isRecommend = false;    //是否推荐
public classificationId = 0;    //分类Id


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"ViewpointName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewpointName(): string {return "viewpointName";}    //观点名称

 /**
 * 常量:"ViewpointContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewpointContent(): string {return "viewpointContent";}    //观点内容

 /**
 * 常量:"ViewpointId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewpointId(): string {return "viewpointId";}    //观点Id

 /**
 * 常量:"ProposePeople"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ProposePeople(): string {return "proposePeople";}    //提出人

 /**
 * 常量:"ViewpointTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewpointTypeId(): string {return "viewpointTypeId";}    //观点类型Id

 /**
 * 常量:"ViewpointTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewpointTypeName(): string {return "viewpointTypeName";}    //观点类型名

 /**
 * 常量:"Reason"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Reason(): string {return "reason";}    //理由

 /**
 * 常量:"Source"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Source(): string {return "source";}    //来源

 /**
 * 常量:"TopicId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"TopicName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

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
 * 常量:"UserTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

 /**
 * 常量:"UserTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserTypeName(): string {return "userTypeName";}    //用户类型名称

 /**
 * 常量:"CitationCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CitationCount(): string {return "citationCount";}    //引用统计

 /**
 * 常量:"CitationId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CitationId(): string {return "citationId";}    //引用Id

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
 * 常量:"ViewsDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewsDate(): string {return "viewsDate";}    //观点日期

 /**
 * 常量:"ViewsUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewsUserId(): string {return "viewsUserId";}    //观点用户Id

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"PdfContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfContent(): string {return "pdfContent";}    //Pdf内容

 /**
 * 常量:"PdfPageNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfPageNum(): string {return "pdfPageNum";}    //Pdf页码

 /**
 * 常量:"VersionCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_VersionCount(): string {return "versionCount";}    //版本统计

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
 * 常量:"IsRecommend"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

 /**
 * 常量:"ClassificationId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClassificationId(): string {return "classificationId";}    //分类Id

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