
 /**
 * 类名:clsvqa_PushEN
 * 表名:vqa_Push(01120634)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:03
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * v答疑推送(vqa_Push)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvqa_PushEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vqa_Push"; //当前表名,与该类相关的表名
public static _KeyFldName= "PushId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 24;
public static AttributeName = ["pushId", "questionsId", "questionsContent", "receiveUser", "receiveDate", "userName", "isReceive", "updDate", "answerCount", "isEnd", "voteCount", "memo", "idCurrEduCls", "pdfContent", "qaPaperId", "isPublic", "paperId", "paperTitle", "pdfPageNum", "isReply", "isRequestReply", "replyDate", "questionsTypeId", "questionsTypeName"];
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
case clsvqa_PushEN.con_PushId:
return this.pushId;
case clsvqa_PushEN.con_QuestionsId:
return this.questionsId;
case clsvqa_PushEN.con_QuestionsContent:
return this.questionsContent;
case clsvqa_PushEN.con_ReceiveUser:
return this.receiveUser;
case clsvqa_PushEN.con_ReceiveDate:
return this.receiveDate;
case clsvqa_PushEN.con_UserName:
return this.userName;
case clsvqa_PushEN.con_IsReceive:
return this.isReceive;
case clsvqa_PushEN.con_UpdDate:
return this.updDate;
case clsvqa_PushEN.con_AnswerCount:
return this.answerCount;
case clsvqa_PushEN.con_IsEnd:
return this.isEnd;
case clsvqa_PushEN.con_VoteCount:
return this.voteCount;
case clsvqa_PushEN.con_Memo:
return this.memo;
case clsvqa_PushEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvqa_PushEN.con_PdfContent:
return this.pdfContent;
case clsvqa_PushEN.con_QaPaperId:
return this.qaPaperId;
case clsvqa_PushEN.con_IsPublic:
return this.isPublic;
case clsvqa_PushEN.con_PaperId:
return this.paperId;
case clsvqa_PushEN.con_PaperTitle:
return this.paperTitle;
case clsvqa_PushEN.con_PdfPageNum:
return this.pdfPageNum;
case clsvqa_PushEN.con_IsReply:
return this.isReply;
case clsvqa_PushEN.con_IsRequestReply:
return this.isRequestReply;
case clsvqa_PushEN.con_ReplyDate:
return this.replyDate;
case clsvqa_PushEN.con_QuestionsTypeId:
return this.questionsTypeId;
case clsvqa_PushEN.con_QuestionsTypeName:
return this.questionsTypeName;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vqa_Push]中不存在!`;
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
case clsvqa_PushEN.con_PushId:
this.pushId = Number(strValue);
break;
case clsvqa_PushEN.con_QuestionsId:
this.questionsId = strValue;
break;
case clsvqa_PushEN.con_QuestionsContent:
this.questionsContent = strValue;
break;
case clsvqa_PushEN.con_ReceiveUser:
this.receiveUser = strValue;
break;
case clsvqa_PushEN.con_ReceiveDate:
this.receiveDate = strValue;
break;
case clsvqa_PushEN.con_UserName:
this.userName = strValue;
break;
case clsvqa_PushEN.con_IsReceive:
this.isReceive = Boolean(strValue);
break;
case clsvqa_PushEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvqa_PushEN.con_AnswerCount:
this.answerCount = Number(strValue);
break;
case clsvqa_PushEN.con_IsEnd:
this.isEnd = Boolean(strValue);
break;
case clsvqa_PushEN.con_VoteCount:
this.voteCount = Number(strValue);
break;
case clsvqa_PushEN.con_Memo:
this.memo = strValue;
break;
case clsvqa_PushEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvqa_PushEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvqa_PushEN.con_QaPaperId:
this.qaPaperId = strValue;
break;
case clsvqa_PushEN.con_IsPublic:
this.isPublic = Boolean(strValue);
break;
case clsvqa_PushEN.con_PaperId:
this.paperId = strValue;
break;
case clsvqa_PushEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvqa_PushEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
break;
case clsvqa_PushEN.con_IsReply:
this.isReply = Boolean(strValue);
break;
case clsvqa_PushEN.con_IsRequestReply:
this.isRequestReply = Boolean(strValue);
break;
case clsvqa_PushEN.con_ReplyDate:
this.replyDate = strValue;
break;
case clsvqa_PushEN.con_QuestionsTypeId:
this.questionsTypeId = strValue;
break;
case clsvqa_PushEN.con_QuestionsTypeName:
this.questionsTypeName = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vqa_Push]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public pushId = 0;    //推送d
public questionsId = "";    //提问Id
public questionsContent = "";    //提问内容
public receiveUser = "";    //接收用户
public receiveDate = "";    //接收日期
public userName = "";    //用户名
public isReceive = false;    //是否接收
public updDate = "";    //修改日期
public answerCount = 0;    //回答计数
public isEnd = false;    //是否结束
public voteCount = 0;    //点赞计数
public memo = "";    //备注
public idCurrEduCls = "";    //教学班流水号
public pdfContent = "";    //Pdf内容
public qaPaperId = "";    //论文答疑Id
public isPublic = false;    //是否公开
public paperId = "";    //论文Id
public paperTitle = "";    //论文标题
public pdfPageNum = 0;    //Pdf页码
public isReply = false;    //是否回复
public isRequestReply = false;    //是否要求回复
public replyDate = "";    //回复日期
public questionsTypeId = "";    //问题类型Id
public questionsTypeName = "";    //问题类型名称


 /**
 * 常量:"PushId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PushId(): string {return "pushId";}    //推送d

 /**
 * 常量:"QuestionsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsId(): string {return "questionsId";}    //提问Id

 /**
 * 常量:"QuestionsContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsContent(): string {return "questionsContent";}    //提问内容

 /**
 * 常量:"ReceiveUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReceiveUser(): string {return "receiveUser";}    //接收用户

 /**
 * 常量:"ReceiveDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReceiveDate(): string {return "receiveDate";}    //接收日期

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"IsReceive"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsReceive(): string {return "isReceive";}    //是否接收

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"AnswerCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AnswerCount(): string {return "answerCount";}    //回答计数

 /**
 * 常量:"IsEnd"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsEnd(): string {return "isEnd";}    //是否结束

 /**
 * 常量:"VoteCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteCount(): string {return "voteCount";}    //点赞计数

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
 * 常量:"QaPaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QaPaperId(): string {return "qaPaperId";}    //论文答疑Id

 /**
 * 常量:"IsPublic"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsPublic(): string {return "isPublic";}    //是否公开

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
 * 常量:"PdfPageNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfPageNum(): string {return "pdfPageNum";}    //Pdf页码

 /**
 * 常量:"IsReply"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsReply(): string {return "isReply";}    //是否回复

 /**
 * 常量:"IsRequestReply"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsRequestReply(): string {return "isRequestReply";}    //是否要求回复

 /**
 * 常量:"ReplyDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReplyDate(): string {return "replyDate";}    //回复日期

 /**
 * 常量:"QuestionsTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsTypeId(): string {return "questionsTypeId";}    //问题类型Id

 /**
 * 常量:"QuestionsTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsTypeName(): string {return "questionsTypeName";}    //问题类型名称

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