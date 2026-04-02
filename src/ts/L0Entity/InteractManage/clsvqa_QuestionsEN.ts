
 /**
 * 类名:clsvqa_QuestionsEN
 * 表名:vqa_Questions(01120636)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:05
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
 * v答疑提问(vqa_Questions)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvqa_QuestionsEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vqa_Questions"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionsId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 30;
public static AttributeName = ["questionsId", "paperId", "isSubmit", "qaPaperId", "questionsContent", "pdfContent", "pdfPageNum", "isDelete", "isPublic", "isEnd", "voteCount", "answerCount", "orderNum", "updUser", "updDate", "memo", "userName", "idCurrEduCls", "paperTitle", "pdfDivLet", "pdfDivTop", "pdfPageNumIn", "pdfPageTop", "pdfZoom", "userId", "questionsTypeId", "questionsTypeName", "discussCount", "groupDiscussCount", "recommendAnswerCount"];
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
case clsvqa_QuestionsEN.con_QuestionsId:
return this.questionsId;
case clsvqa_QuestionsEN.con_PaperId:
return this.paperId;
case clsvqa_QuestionsEN.con_IsSubmit:
return this.isSubmit;
case clsvqa_QuestionsEN.con_QaPaperId:
return this.qaPaperId;
case clsvqa_QuestionsEN.con_QuestionsContent:
return this.questionsContent;
case clsvqa_QuestionsEN.con_PdfContent:
return this.pdfContent;
case clsvqa_QuestionsEN.con_PdfPageNum:
return this.pdfPageNum;
case clsvqa_QuestionsEN.con_IsDelete:
return this.isDelete;
case clsvqa_QuestionsEN.con_IsPublic:
return this.isPublic;
case clsvqa_QuestionsEN.con_IsEnd:
return this.isEnd;
case clsvqa_QuestionsEN.con_VoteCount:
return this.voteCount;
case clsvqa_QuestionsEN.con_AnswerCount:
return this.answerCount;
case clsvqa_QuestionsEN.con_OrderNum:
return this.orderNum;
case clsvqa_QuestionsEN.con_UpdUser:
return this.updUser;
case clsvqa_QuestionsEN.con_UpdDate:
return this.updDate;
case clsvqa_QuestionsEN.con_Memo:
return this.memo;
case clsvqa_QuestionsEN.con_UserName:
return this.userName;
case clsvqa_QuestionsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvqa_QuestionsEN.con_PaperTitle:
return this.paperTitle;
case clsvqa_QuestionsEN.con_PdfDivLet:
return this.pdfDivLet;
case clsvqa_QuestionsEN.con_PdfDivTop:
return this.pdfDivTop;
case clsvqa_QuestionsEN.con_PdfPageNumIn:
return this.pdfPageNumIn;
case clsvqa_QuestionsEN.con_PdfPageTop:
return this.pdfPageTop;
case clsvqa_QuestionsEN.con_PdfZoom:
return this.pdfZoom;
case clsvqa_QuestionsEN.con_UserId:
return this.userId;
case clsvqa_QuestionsEN.con_QuestionsTypeId:
return this.questionsTypeId;
case clsvqa_QuestionsEN.con_QuestionsTypeName:
return this.questionsTypeName;
case clsvqa_QuestionsEN.con_DiscussCount:
return this.discussCount;
case clsvqa_QuestionsEN.con_GroupDiscussCount:
return this.groupDiscussCount;
case clsvqa_QuestionsEN.con_RecommendAnswerCount:
return this.recommendAnswerCount;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vqa_Questions]中不存在!`;
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
case clsvqa_QuestionsEN.con_QuestionsId:
this.questionsId = strValue;
break;
case clsvqa_QuestionsEN.con_PaperId:
this.paperId = strValue;
break;
case clsvqa_QuestionsEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvqa_QuestionsEN.con_QaPaperId:
this.qaPaperId = strValue;
break;
case clsvqa_QuestionsEN.con_QuestionsContent:
this.questionsContent = strValue;
break;
case clsvqa_QuestionsEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvqa_QuestionsEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
break;
case clsvqa_QuestionsEN.con_IsDelete:
this.isDelete = Boolean(strValue);
break;
case clsvqa_QuestionsEN.con_IsPublic:
this.isPublic = Boolean(strValue);
break;
case clsvqa_QuestionsEN.con_IsEnd:
this.isEnd = Boolean(strValue);
break;
case clsvqa_QuestionsEN.con_VoteCount:
this.voteCount = Number(strValue);
break;
case clsvqa_QuestionsEN.con_AnswerCount:
this.answerCount = Number(strValue);
break;
case clsvqa_QuestionsEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvqa_QuestionsEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvqa_QuestionsEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvqa_QuestionsEN.con_Memo:
this.memo = strValue;
break;
case clsvqa_QuestionsEN.con_UserName:
this.userName = strValue;
break;
case clsvqa_QuestionsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvqa_QuestionsEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvqa_QuestionsEN.con_PdfDivLet:
this.pdfDivLet = strValue;
break;
case clsvqa_QuestionsEN.con_PdfDivTop:
this.pdfDivTop = strValue;
break;
case clsvqa_QuestionsEN.con_PdfPageNumIn:
this.pdfPageNumIn = strValue;
break;
case clsvqa_QuestionsEN.con_PdfPageTop:
this.pdfPageTop = Number(strValue);
break;
case clsvqa_QuestionsEN.con_PdfZoom:
this.pdfZoom = strValue;
break;
case clsvqa_QuestionsEN.con_UserId:
this.userId = strValue;
break;
case clsvqa_QuestionsEN.con_QuestionsTypeId:
this.questionsTypeId = strValue;
break;
case clsvqa_QuestionsEN.con_QuestionsTypeName:
this.questionsTypeName = strValue;
break;
case clsvqa_QuestionsEN.con_DiscussCount:
this.discussCount = Number(strValue);
break;
case clsvqa_QuestionsEN.con_GroupDiscussCount:
this.groupDiscussCount = Number(strValue);
break;
case clsvqa_QuestionsEN.con_RecommendAnswerCount:
this.recommendAnswerCount = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vqa_Questions]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public questionsId = "";    //提问Id
public paperId = "";    //论文Id
public isSubmit = false;    //是否提交
public qaPaperId = "";    //论文答疑Id
public questionsContent = "";    //提问内容
public pdfContent = "";    //Pdf内容
public pdfPageNum = 0;    //Pdf页码
public isDelete = false;    //是否删除
public isPublic = false;    //是否公开
public isEnd = false;    //是否结束
public voteCount = 0;    //点赞计数
public answerCount = 0;    //回答计数
public orderNum = 0;    //序号
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注
public userName = "";    //用户名
public idCurrEduCls = "";    //教学班流水号
public paperTitle = "";    //论文标题
public pdfDivLet = "";    //PdfDivLet
public pdfDivTop = "";    //PdfDivTop
public pdfPageNumIn = "";    //PdfPageNumIn
public pdfPageTop = 0;    //pdf页面顶部位置
public pdfZoom = "";    //PdfZoom
public userId = "";    //用户ID
public questionsTypeId = "";    //问题类型Id
public questionsTypeName = "";    //问题类型名称
public discussCount = 0;    //DiscussCount
public groupDiscussCount = 0;    //GroupDiscussCount
public recommendAnswerCount = 0;    //RecommendAnswerCount


 /**
 * 常量:"QuestionsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsId(): string {return "questionsId";}    //提问Id

 /**
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"QaPaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QaPaperId(): string {return "qaPaperId";}    //论文答疑Id

 /**
 * 常量:"QuestionsContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsContent(): string {return "questionsContent";}    //提问内容

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
 * 常量:"IsDelete"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsDelete(): string {return "isDelete";}    //是否删除

 /**
 * 常量:"IsPublic"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsPublic(): string {return "isPublic";}    //是否公开

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
 * 常量:"AnswerCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AnswerCount(): string {return "answerCount";}    //回答计数

 /**
 * 常量:"OrderNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"PaperTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"PdfDivLet"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfDivLet(): string {return "pdfDivLet";}    //PdfDivLet

 /**
 * 常量:"PdfDivTop"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfDivTop(): string {return "pdfDivTop";}    //PdfDivTop

 /**
 * 常量:"PdfPageNumIn"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfPageNumIn(): string {return "pdfPageNumIn";}    //PdfPageNumIn

 /**
 * 常量:"PdfPageTop"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfPageTop(): string {return "pdfPageTop";}    //pdf页面顶部位置

 /**
 * 常量:"PdfZoom"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfZoom(): string {return "pdfZoom";}    //PdfZoom

 /**
 * 常量:"UserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

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
 * 常量:"DiscussCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DiscussCount(): string {return "discussCount";}    //DiscussCount

 /**
 * 常量:"GroupDiscussCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_GroupDiscussCount(): string {return "groupDiscussCount";}    //GroupDiscussCount

 /**
 * 常量:"RecommendAnswerCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_RecommendAnswerCount(): string {return "recommendAnswerCount";}    //RecommendAnswerCount

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