
 /**
 * 类名:clsvRTSysSocialRelaEN
 * 表名:vRTSysSocialRela(01120655)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:26
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
 * vRTSysSocialRela(vRTSysSocialRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvRTSysSocialRelaEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vRTSysSocialRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "SubViewpointId,TopicId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 31;
public static AttributeName = ["subViewpointId", "topicId", "topicName", "topicContent", "topicProposePeople", "orderNum", "idCurrEduCls", "fullName", "nationality", "workUnit", "major", "achievement", "detailedDescription", "levelId", "levelName", "socialUpdUser", "socialUpdDate", "isSubmit", "okCount", "updDate", "updUser", "memo", "appraiseCount", "score", "stuScore", "teaScore", "createDate", "shareId", "pdfContent", "classificationId", "paperId"];
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
case clsvRTSysSocialRelaEN.con_SubViewpointId:
return this.subViewpointId;
case clsvRTSysSocialRelaEN.con_TopicId:
return this.topicId;
case clsvRTSysSocialRelaEN.con_TopicName:
return this.topicName;
case clsvRTSysSocialRelaEN.con_TopicContent:
return this.topicContent;
case clsvRTSysSocialRelaEN.con_TopicProposePeople:
return this.topicProposePeople;
case clsvRTSysSocialRelaEN.con_OrderNum:
return this.orderNum;
case clsvRTSysSocialRelaEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvRTSysSocialRelaEN.con_FullName:
return this.fullName;
case clsvRTSysSocialRelaEN.con_Nationality:
return this.nationality;
case clsvRTSysSocialRelaEN.con_WorkUnit:
return this.workUnit;
case clsvRTSysSocialRelaEN.con_Major:
return this.major;
case clsvRTSysSocialRelaEN.con_Achievement:
return this.achievement;
case clsvRTSysSocialRelaEN.con_DetailedDescription:
return this.detailedDescription;
case clsvRTSysSocialRelaEN.con_LevelId:
return this.levelId;
case clsvRTSysSocialRelaEN.con_LevelName:
return this.levelName;
case clsvRTSysSocialRelaEN.con_SocialUpdUser:
return this.socialUpdUser;
case clsvRTSysSocialRelaEN.con_SocialUpdDate:
return this.socialUpdDate;
case clsvRTSysSocialRelaEN.con_IsSubmit:
return this.isSubmit;
case clsvRTSysSocialRelaEN.con_OkCount:
return this.okCount;
case clsvRTSysSocialRelaEN.con_UpdDate:
return this.updDate;
case clsvRTSysSocialRelaEN.con_UpdUser:
return this.updUser;
case clsvRTSysSocialRelaEN.con_Memo:
return this.memo;
case clsvRTSysSocialRelaEN.con_AppraiseCount:
return this.appraiseCount;
case clsvRTSysSocialRelaEN.con_Score:
return this.score;
case clsvRTSysSocialRelaEN.con_StuScore:
return this.stuScore;
case clsvRTSysSocialRelaEN.con_TeaScore:
return this.teaScore;
case clsvRTSysSocialRelaEN.con_CreateDate:
return this.createDate;
case clsvRTSysSocialRelaEN.con_ShareId:
return this.shareId;
case clsvRTSysSocialRelaEN.con_PdfContent:
return this.pdfContent;
case clsvRTSysSocialRelaEN.con_ClassificationId:
return this.classificationId;
case clsvRTSysSocialRelaEN.con_PaperId:
return this.paperId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTSysSocialRela]中不存在!`;
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
case clsvRTSysSocialRelaEN.con_SubViewpointId:
this.subViewpointId = Number(strValue);
break;
case clsvRTSysSocialRelaEN.con_TopicId:
this.topicId = strValue;
break;
case clsvRTSysSocialRelaEN.con_TopicName:
this.topicName = strValue;
break;
case clsvRTSysSocialRelaEN.con_TopicContent:
this.topicContent = strValue;
break;
case clsvRTSysSocialRelaEN.con_TopicProposePeople:
this.topicProposePeople = strValue;
break;
case clsvRTSysSocialRelaEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvRTSysSocialRelaEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvRTSysSocialRelaEN.con_FullName:
this.fullName = strValue;
break;
case clsvRTSysSocialRelaEN.con_Nationality:
this.nationality = strValue;
break;
case clsvRTSysSocialRelaEN.con_WorkUnit:
this.workUnit = strValue;
break;
case clsvRTSysSocialRelaEN.con_Major:
this.major = strValue;
break;
case clsvRTSysSocialRelaEN.con_Achievement:
this.achievement = strValue;
break;
case clsvRTSysSocialRelaEN.con_DetailedDescription:
this.detailedDescription = strValue;
break;
case clsvRTSysSocialRelaEN.con_LevelId:
this.levelId = strValue;
break;
case clsvRTSysSocialRelaEN.con_LevelName:
this.levelName = strValue;
break;
case clsvRTSysSocialRelaEN.con_SocialUpdUser:
this.socialUpdUser = strValue;
break;
case clsvRTSysSocialRelaEN.con_SocialUpdDate:
this.socialUpdDate = strValue;
break;
case clsvRTSysSocialRelaEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvRTSysSocialRelaEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvRTSysSocialRelaEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvRTSysSocialRelaEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvRTSysSocialRelaEN.con_Memo:
this.memo = strValue;
break;
case clsvRTSysSocialRelaEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvRTSysSocialRelaEN.con_Score:
this.score = Number(strValue);
break;
case clsvRTSysSocialRelaEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvRTSysSocialRelaEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvRTSysSocialRelaEN.con_CreateDate:
this.createDate = strValue;
break;
case clsvRTSysSocialRelaEN.con_ShareId:
this.shareId = strValue;
break;
case clsvRTSysSocialRelaEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvRTSysSocialRelaEN.con_ClassificationId:
this.classificationId = strValue;
break;
case clsvRTSysSocialRelaEN.con_PaperId:
this.paperId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTSysSocialRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public subViewpointId = 0;    //子观点Id
public topicId = "";    //主题Id
public topicName = "";    //栏目主题
public topicContent = "";    //主题内容
public topicProposePeople = "";    //主题提出人
public orderNum = 0;    //序号
public idCurrEduCls = "";    //教学班流水号
public fullName = "";    //姓名
public nationality = "";    //国籍
public workUnit = "";    //工作单位
public major = "";    //专业
public achievement = "";    //成就
public detailedDescription = "";    //详细说明
public levelId = "";    //级别Id
public levelName = "";    //级别名称
public socialUpdUser = "";    //SocialUpdUser
public socialUpdDate = "";    //SocialUpdDate
public isSubmit = false;    //是否提交
public okCount = 0;    //点赞统计
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public appraiseCount = 0;    //评论数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public createDate = "";    //建立日期
public shareId = "";    //分享Id
public pdfContent = "";    //Pdf内容
public classificationId = "";    //分类Id
public paperId = "";    //论文Id


 /**
 * 常量:"SubViewpointId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubViewpointId(): string {return "subViewpointId";}    //子观点Id

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
 * 常量:"TopicContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicContent(): string {return "topicContent";}    //主题内容

 /**
 * 常量:"TopicProposePeople"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicProposePeople(): string {return "topicProposePeople";}    //主题提出人

 /**
 * 常量:"OrderNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"FullName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_FullName(): string {return "fullName";}    //姓名

 /**
 * 常量:"Nationality"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Nationality(): string {return "nationality";}    //国籍

 /**
 * 常量:"WorkUnit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_WorkUnit(): string {return "workUnit";}    //工作单位

 /**
 * 常量:"Major"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Major(): string {return "major";}    //专业

 /**
 * 常量:"Achievement"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Achievement(): string {return "achievement";}    //成就

 /**
 * 常量:"DetailedDescription"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DetailedDescription(): string {return "detailedDescription";}    //详细说明

 /**
 * 常量:"LevelId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LevelId(): string {return "levelId";}    //级别Id

 /**
 * 常量:"LevelName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LevelName(): string {return "levelName";}    //级别名称

 /**
 * 常量:"SocialUpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SocialUpdUser(): string {return "socialUpdUser";}    //SocialUpdUser

 /**
 * 常量:"SocialUpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SocialUpdDate(): string {return "socialUpdDate";}    //SocialUpdDate

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

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
 * 常量:"PdfContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfContent(): string {return "pdfContent";}    //Pdf内容

 /**
 * 常量:"ClassificationId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ClassificationId(): string {return "classificationId";}    //分类Id

 /**
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

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