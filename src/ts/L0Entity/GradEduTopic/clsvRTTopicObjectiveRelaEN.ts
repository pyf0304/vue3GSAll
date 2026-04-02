
 /**
 * 类名:clsvRTTopicObjectiveRelaEN
 * 表名:vRTTopicObjectiveRela(01120616)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:40
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
 * vRTTopicObjectiveRela(vRTTopicObjectiveRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvRTTopicObjectiveRelaEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vRTTopicObjectiveRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 29;
public static AttributeName = ["mId", "topicId", "topicObjectiveId", "updDate", "updUser", "objectiveTypeName", "objectiveType", "sourceId", "isSubmit", "objectiveName", "objectiveContent", "conclusion", "topicContent", "topicName", "appraiseCount", "citationCount", "score", "stuScore", "teaScore", "objDate", "objUserId", "idCurrEduCls", "pdfContent", "pdfPageNum", "okCount", "versionCount", "createDate", "shareId", "classificationId"];
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
case clsvRTTopicObjectiveRelaEN.con_mId:
return this.mId;
case clsvRTTopicObjectiveRelaEN.con_TopicId:
return this.topicId;
case clsvRTTopicObjectiveRelaEN.con_TopicObjectiveId:
return this.topicObjectiveId;
case clsvRTTopicObjectiveRelaEN.con_UpdDate:
return this.updDate;
case clsvRTTopicObjectiveRelaEN.con_UpdUser:
return this.updUser;
case clsvRTTopicObjectiveRelaEN.con_ObjectiveTypeName:
return this.objectiveTypeName;
case clsvRTTopicObjectiveRelaEN.con_ObjectiveType:
return this.objectiveType;
case clsvRTTopicObjectiveRelaEN.con_SourceId:
return this.sourceId;
case clsvRTTopicObjectiveRelaEN.con_IsSubmit:
return this.isSubmit;
case clsvRTTopicObjectiveRelaEN.con_ObjectiveName:
return this.objectiveName;
case clsvRTTopicObjectiveRelaEN.con_ObjectiveContent:
return this.objectiveContent;
case clsvRTTopicObjectiveRelaEN.con_Conclusion:
return this.conclusion;
case clsvRTTopicObjectiveRelaEN.con_TopicContent:
return this.topicContent;
case clsvRTTopicObjectiveRelaEN.con_TopicName:
return this.topicName;
case clsvRTTopicObjectiveRelaEN.con_AppraiseCount:
return this.appraiseCount;
case clsvRTTopicObjectiveRelaEN.con_CitationCount:
return this.citationCount;
case clsvRTTopicObjectiveRelaEN.con_Score:
return this.score;
case clsvRTTopicObjectiveRelaEN.con_StuScore:
return this.stuScore;
case clsvRTTopicObjectiveRelaEN.con_TeaScore:
return this.teaScore;
case clsvRTTopicObjectiveRelaEN.con_ObjDate:
return this.objDate;
case clsvRTTopicObjectiveRelaEN.con_ObjUserId:
return this.objUserId;
case clsvRTTopicObjectiveRelaEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvRTTopicObjectiveRelaEN.con_PdfContent:
return this.pdfContent;
case clsvRTTopicObjectiveRelaEN.con_PdfPageNum:
return this.pdfPageNum;
case clsvRTTopicObjectiveRelaEN.con_OkCount:
return this.okCount;
case clsvRTTopicObjectiveRelaEN.con_VersionCount:
return this.versionCount;
case clsvRTTopicObjectiveRelaEN.con_CreateDate:
return this.createDate;
case clsvRTTopicObjectiveRelaEN.con_ShareId:
return this.shareId;
case clsvRTTopicObjectiveRelaEN.con_ClassificationId:
return this.classificationId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTTopicObjectiveRela]中不存在!`;
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
case clsvRTTopicObjectiveRelaEN.con_mId:
this.mId = Number(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_TopicId:
this.topicId = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_TopicObjectiveId:
this.topicObjectiveId = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_ObjectiveTypeName:
this.objectiveTypeName = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_ObjectiveType:
this.objectiveType = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_SourceId:
this.sourceId = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_ObjectiveName:
this.objectiveName = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_ObjectiveContent:
this.objectiveContent = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_Conclusion:
this.conclusion = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_TopicContent:
this.topicContent = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_TopicName:
this.topicName = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_CitationCount:
this.citationCount = Number(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_Score:
this.score = Number(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_ObjDate:
this.objDate = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_ObjUserId:
this.objUserId = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvRTTopicObjectiveRelaEN.con_CreateDate:
this.createDate = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_ShareId:
this.shareId = strValue;
break;
case clsvRTTopicObjectiveRelaEN.con_ClassificationId:
this.classificationId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTTopicObjectiveRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public topicId = "";    //主题Id
public topicObjectiveId = "";    //客观Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public objectiveTypeName = "";    //ObjectiveTypeName
public objectiveType = "";    //客观类型
public sourceId = "";    //来源Id
public isSubmit = false;    //是否提交
public objectiveName = "";    //客观名称
public objectiveContent = "";    //客观内容
public conclusion = "";    //结论
public topicContent = "";    //主题内容
public topicName = "";    //栏目主题
public appraiseCount = 0;    //评论数
public citationCount = 0;    //引用统计
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public objDate = "";    //ObjDate
public objUserId = "";    //ObjUserId
public idCurrEduCls = "";    //教学班流水号
public pdfContent = "";    //Pdf内容
public pdfPageNum = 0;    //Pdf页码
public okCount = 0;    //点赞统计
public versionCount = 0;    //版本统计
public createDate = "";    //建立日期
public shareId = "";    //分享Id
public classificationId = "";    //分类Id


 /**
 * 常量:"mId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"TopicId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"TopicObjectiveId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicObjectiveId(): string {return "topicObjectiveId";}    //客观Id

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
 * 常量:"ObjectiveTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveTypeName(): string {return "objectiveTypeName";}    //ObjectiveTypeName

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
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

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
 * 常量:"Conclusion"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Conclusion(): string {return "conclusion";}    //结论

 /**
 * 常量:"TopicContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicContent(): string {return "topicContent";}    //主题内容

 /**
 * 常量:"TopicName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

 /**
 * 常量:"AppraiseCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

 /**
 * 常量:"CitationCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CitationCount(): string {return "citationCount";}    //引用统计

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
 * 常量:"ObjDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjDate(): string {return "objDate";}    //ObjDate

 /**
 * 常量:"ObjUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjUserId(): string {return "objUserId";}    //ObjUserId

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
 * 常量:"ClassificationId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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