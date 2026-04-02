
 /**
 * 类名:clsvgs_RTqa_PaperRelaEN
 * 表名:vgs_RTqa_PaperRela(01120695)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:28
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
 * 主题答疑关系视图(vgs_RTqa_PaperRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_RTqa_PaperRelaEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_RTqa_PaperRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["mId", "topicId", "topicName", "idCurrEduCls", "qaPaperId", "paperId", "questionsCount", "isPublic", "isSubmit", "paperTitle", "attachmentCount", "answerCount", "shareId", "tagsCount", "updDate", "updUser", "memo", "qaUser", "qaDate", "qaUserName"];
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
case clsvgs_RTqa_PaperRelaEN.con_mId:
return this.mId;
case clsvgs_RTqa_PaperRelaEN.con_TopicId:
return this.topicId;
case clsvgs_RTqa_PaperRelaEN.con_TopicName:
return this.topicName;
case clsvgs_RTqa_PaperRelaEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_RTqa_PaperRelaEN.con_QaPaperId:
return this.qaPaperId;
case clsvgs_RTqa_PaperRelaEN.con_PaperId:
return this.paperId;
case clsvgs_RTqa_PaperRelaEN.con_QuestionsCount:
return this.questionsCount;
case clsvgs_RTqa_PaperRelaEN.con_IsPublic:
return this.isPublic;
case clsvgs_RTqa_PaperRelaEN.con_IsSubmit:
return this.isSubmit;
case clsvgs_RTqa_PaperRelaEN.con_PaperTitle:
return this.paperTitle;
case clsvgs_RTqa_PaperRelaEN.con_AttachmentCount:
return this.attachmentCount;
case clsvgs_RTqa_PaperRelaEN.con_AnswerCount:
return this.answerCount;
case clsvgs_RTqa_PaperRelaEN.con_ShareId:
return this.shareId;
case clsvgs_RTqa_PaperRelaEN.con_TagsCount:
return this.tagsCount;
case clsvgs_RTqa_PaperRelaEN.con_UpdDate:
return this.updDate;
case clsvgs_RTqa_PaperRelaEN.con_UpdUser:
return this.updUser;
case clsvgs_RTqa_PaperRelaEN.con_Memo:
return this.memo;
case clsvgs_RTqa_PaperRelaEN.con_qaUser:
return this.qaUser;
case clsvgs_RTqa_PaperRelaEN.con_qaDate:
return this.qaDate;
case clsvgs_RTqa_PaperRelaEN.con_qaUserName:
return this.qaUserName;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_RTqa_PaperRela]中不存在!`;
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
case clsvgs_RTqa_PaperRelaEN.con_mId:
this.mId = Number(strValue);
break;
case clsvgs_RTqa_PaperRelaEN.con_TopicId:
this.topicId = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_TopicName:
this.topicName = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_QaPaperId:
this.qaPaperId = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_PaperId:
this.paperId = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_QuestionsCount:
this.questionsCount = Number(strValue);
break;
case clsvgs_RTqa_PaperRelaEN.con_IsPublic:
this.isPublic = Boolean(strValue);
break;
case clsvgs_RTqa_PaperRelaEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvgs_RTqa_PaperRelaEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_AttachmentCount:
this.attachmentCount = Number(strValue);
break;
case clsvgs_RTqa_PaperRelaEN.con_AnswerCount:
this.answerCount = Number(strValue);
break;
case clsvgs_RTqa_PaperRelaEN.con_ShareId:
this.shareId = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_TagsCount:
this.tagsCount = Number(strValue);
break;
case clsvgs_RTqa_PaperRelaEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_Memo:
this.memo = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_qaUser:
this.qaUser = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_qaDate:
this.qaDate = strValue;
break;
case clsvgs_RTqa_PaperRelaEN.con_qaUserName:
this.qaUserName = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_RTqa_PaperRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public topicName = "";    //栏目主题
public idCurrEduCls = "";    //教学班流水号
public qaPaperId = "";    //论文答疑Id
public paperId = "";    //论文Id
public questionsCount = 0;    //提问计数
public isPublic = false;    //是否公开
public isSubmit = false;    //是否提交
public paperTitle = "";    //论文标题
public attachmentCount = 0;    //附件计数
public answerCount = 0;    //回答计数
public shareId = "";    //分享Id
public tagsCount = 0;    //论文标注数
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public qaUser = "";    //qaUser
public qaDate = "";    //qaDate
public qaUserName = "";    //qaUserName


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
 * 常量:"TopicName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"QaPaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QaPaperId(): string {return "qaPaperId";}    //论文答疑Id

 /**
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"QuestionsCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsCount(): string {return "questionsCount";}    //提问计数

 /**
 * 常量:"IsPublic"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsPublic(): string {return "isPublic";}    //是否公开

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"PaperTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"AttachmentCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AttachmentCount(): string {return "attachmentCount";}    //附件计数

 /**
 * 常量:"AnswerCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AnswerCount(): string {return "answerCount";}    //回答计数

 /**
 * 常量:"ShareId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ShareId(): string {return "shareId";}    //分享Id

 /**
 * 常量:"TagsCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TagsCount(): string {return "tagsCount";}    //论文标注数

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
 * 常量:"qaUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_qaUser(): string {return "qaUser";}    //qaUser

 /**
 * 常量:"qaDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_qaDate(): string {return "qaDate";}    //qaDate

 /**
 * 常量:"qaUserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_qaUserName(): string {return "qaUserName";}    //qaUserName

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