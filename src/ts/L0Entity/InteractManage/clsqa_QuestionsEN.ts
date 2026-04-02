
 /**
 * 类名:clsqa_QuestionsEN
 * 表名:qa_Questions(01120642)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:28
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
 * 答疑提问表(qa_Questions)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsqa_QuestionsEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "qa_Questions"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionsId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 27;
public static AttributeName = ["questionsId", "qaPaperId", "questionsContent", "pdfContent", "pdfPageNum", "isDelete", "isPublic", "isEnd", "voteCount", "answerCount", "orderNum", "updUser", "updDate", "memo", "pdfDivLet", "pdfDivTop", "pdfPageNumIn", "pdfPageTop", "pdfZoom", "paperId", "userId", "questionsTypeId", "discussCount", "groupDiscussCount", "recommendAnswerCount", "createDate", "idCurrEduCls"];
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
private mstrQuestionsId = "";    //提问Id
private mstrQaPaperId = "";    //论文答疑Id
private mstrQuestionsContent = "";    //提问内容
private mstrPdfContent = "";    //Pdf内容
private mintPdfPageNum = 0;    //Pdf页码
private mbolIsDelete = false;    //是否删除
private mbolIsPublic = false;    //是否公开
private mbolIsEnd = false;    //是否结束
private mintVoteCount = 0;    //点赞计数
private mintAnswerCount = 0;    //回答计数
private mintOrderNum = 0;    //序号
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注
private mstrPdfDivLet = "";    //PdfDivLet
private mstrPdfDivTop = "";    //PdfDivTop
private mstrPdfPageNumIn = "";    //PdfPageNumIn
private mintPdfPageTop = 0;    //pdf页面顶部位置
private mstrPdfZoom = "";    //PdfZoom
private mstrPaperId = "";    //论文Id
private mstrUserId = "";    //用户ID
private mstrQuestionsTypeId = "";    //问题类型Id
private mintDiscussCount = 0;    //DiscussCount
private mintGroupDiscussCount = 0;    //GroupDiscussCount
private mintRecommendAnswerCount = 0;    //RecommendAnswerCount
private mstrCreateDate = "";    //建立日期
private mstrIdCurrEduCls = "";    //教学班流水号

/**
 * 提问Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionsId (value: string)
{
if (value  != undefined)
{
 this.questionsId = value;
    this.hmProperty["questionsId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 论文答疑Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQaPaperId (value: string)
{
if (value  != undefined)
{
 this.qaPaperId = value;
    this.hmProperty["qaPaperId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 提问内容(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionsContent (value: string)
{
if (value  != undefined)
{
 this.questionsContent = value;
    this.hmProperty["questionsContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Pdf内容(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfContent (value: string)
{
if (value  != undefined)
{
 this.pdfContent = value;
    this.hmProperty["pdfContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Pdf页码(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfPageNum (value: number)
{
if (value  != undefined)
{
 this.pdfPageNum = value;
    this.hmProperty["pdfPageNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否删除(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDelete (value: boolean)
{
if (value  != undefined)
{
 this.isDelete = value;
    this.hmProperty["isDelete"] = true;
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
 * 是否结束(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsEnd (value: boolean)
{
if (value  != undefined)
{
 this.isEnd = value;
    this.hmProperty["isEnd"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 点赞计数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVoteCount (value: number)
{
if (value  != undefined)
{
 this.voteCount = value;
    this.hmProperty["voteCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答计数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerCount (value: number)
{
if (value  != undefined)
{
 this.answerCount = value;
    this.hmProperty["answerCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
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
 * PdfDivLet(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfDivLet (value: string)
{
if (value  != undefined)
{
 this.pdfDivLet = value;
    this.hmProperty["pdfDivLet"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PdfDivTop(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfDivTop (value: string)
{
if (value  != undefined)
{
 this.pdfDivTop = value;
    this.hmProperty["pdfDivTop"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PdfPageNumIn(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfPageNumIn (value: string)
{
if (value  != undefined)
{
 this.pdfPageNumIn = value;
    this.hmProperty["pdfPageNumIn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * pdf页面顶部位置(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfPageTop (value: number)
{
if (value  != undefined)
{
 this.pdfPageTop = value;
    this.hmProperty["pdfPageTop"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PdfZoom(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfZoom (value: string)
{
if (value  != undefined)
{
 this.pdfZoom = value;
    this.hmProperty["pdfZoom"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserId (value: string)
{
if (value  != undefined)
{
 this.userId = value;
    this.hmProperty["userId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 问题类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionsTypeId (value: string)
{
if (value  != undefined)
{
 this.questionsTypeId = value;
    this.hmProperty["questionsTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * DiscussCount(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDiscussCount (value: number)
{
if (value  != undefined)
{
 this.discussCount = value;
    this.hmProperty["discussCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * GroupDiscussCount(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGroupDiscussCount (value: number)
{
if (value  != undefined)
{
 this.groupDiscussCount = value;
    this.hmProperty["groupDiscussCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * RecommendAnswerCount(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRecommendAnswerCount (value: number)
{
if (value  != undefined)
{
 this.recommendAnswerCount = value;
    this.hmProperty["recommendAnswerCount"] = true;
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
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
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
case clsqa_QuestionsEN.con_QuestionsId:
return this.questionsId;
case clsqa_QuestionsEN.con_QaPaperId:
return this.qaPaperId;
case clsqa_QuestionsEN.con_QuestionsContent:
return this.questionsContent;
case clsqa_QuestionsEN.con_PdfContent:
return this.pdfContent;
case clsqa_QuestionsEN.con_PdfPageNum:
return this.pdfPageNum;
case clsqa_QuestionsEN.con_IsDelete:
return this.isDelete;
case clsqa_QuestionsEN.con_IsPublic:
return this.isPublic;
case clsqa_QuestionsEN.con_IsEnd:
return this.isEnd;
case clsqa_QuestionsEN.con_VoteCount:
return this.voteCount;
case clsqa_QuestionsEN.con_AnswerCount:
return this.answerCount;
case clsqa_QuestionsEN.con_OrderNum:
return this.orderNum;
case clsqa_QuestionsEN.con_UpdUser:
return this.updUser;
case clsqa_QuestionsEN.con_UpdDate:
return this.updDate;
case clsqa_QuestionsEN.con_Memo:
return this.memo;
case clsqa_QuestionsEN.con_PdfDivLet:
return this.pdfDivLet;
case clsqa_QuestionsEN.con_PdfDivTop:
return this.pdfDivTop;
case clsqa_QuestionsEN.con_PdfPageNumIn:
return this.pdfPageNumIn;
case clsqa_QuestionsEN.con_PdfPageTop:
return this.pdfPageTop;
case clsqa_QuestionsEN.con_PdfZoom:
return this.pdfZoom;
case clsqa_QuestionsEN.con_PaperId:
return this.paperId;
case clsqa_QuestionsEN.con_UserId:
return this.userId;
case clsqa_QuestionsEN.con_QuestionsTypeId:
return this.questionsTypeId;
case clsqa_QuestionsEN.con_DiscussCount:
return this.discussCount;
case clsqa_QuestionsEN.con_GroupDiscussCount:
return this.groupDiscussCount;
case clsqa_QuestionsEN.con_RecommendAnswerCount:
return this.recommendAnswerCount;
case clsqa_QuestionsEN.con_CreateDate:
return this.createDate;
case clsqa_QuestionsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[qa_Questions]中不存在!`;
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
case clsqa_QuestionsEN.con_QuestionsId:
this.questionsId = strValue;
    this.hmProperty["questionsId"] = true;
break;
case clsqa_QuestionsEN.con_QaPaperId:
this.qaPaperId = strValue;
    this.hmProperty["qaPaperId"] = true;
break;
case clsqa_QuestionsEN.con_QuestionsContent:
this.questionsContent = strValue;
    this.hmProperty["questionsContent"] = true;
break;
case clsqa_QuestionsEN.con_PdfContent:
this.pdfContent = strValue;
    this.hmProperty["pdfContent"] = true;
break;
case clsqa_QuestionsEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
    this.hmProperty["pdfPageNum"] = true;
break;
case clsqa_QuestionsEN.con_IsDelete:
this.isDelete = Boolean(strValue);
    this.hmProperty["isDelete"] = true;
break;
case clsqa_QuestionsEN.con_IsPublic:
this.isPublic = Boolean(strValue);
    this.hmProperty["isPublic"] = true;
break;
case clsqa_QuestionsEN.con_IsEnd:
this.isEnd = Boolean(strValue);
    this.hmProperty["isEnd"] = true;
break;
case clsqa_QuestionsEN.con_VoteCount:
this.voteCount = Number(strValue);
    this.hmProperty["voteCount"] = true;
break;
case clsqa_QuestionsEN.con_AnswerCount:
this.answerCount = Number(strValue);
    this.hmProperty["answerCount"] = true;
break;
case clsqa_QuestionsEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsqa_QuestionsEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsqa_QuestionsEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsqa_QuestionsEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsqa_QuestionsEN.con_PdfDivLet:
this.pdfDivLet = strValue;
    this.hmProperty["pdfDivLet"] = true;
break;
case clsqa_QuestionsEN.con_PdfDivTop:
this.pdfDivTop = strValue;
    this.hmProperty["pdfDivTop"] = true;
break;
case clsqa_QuestionsEN.con_PdfPageNumIn:
this.pdfPageNumIn = strValue;
    this.hmProperty["pdfPageNumIn"] = true;
break;
case clsqa_QuestionsEN.con_PdfPageTop:
this.pdfPageTop = Number(strValue);
    this.hmProperty["pdfPageTop"] = true;
break;
case clsqa_QuestionsEN.con_PdfZoom:
this.pdfZoom = strValue;
    this.hmProperty["pdfZoom"] = true;
break;
case clsqa_QuestionsEN.con_PaperId:
this.paperId = strValue;
    this.hmProperty["paperId"] = true;
break;
case clsqa_QuestionsEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsqa_QuestionsEN.con_QuestionsTypeId:
this.questionsTypeId = strValue;
    this.hmProperty["questionsTypeId"] = true;
break;
case clsqa_QuestionsEN.con_DiscussCount:
this.discussCount = Number(strValue);
    this.hmProperty["discussCount"] = true;
break;
case clsqa_QuestionsEN.con_GroupDiscussCount:
this.groupDiscussCount = Number(strValue);
    this.hmProperty["groupDiscussCount"] = true;
break;
case clsqa_QuestionsEN.con_RecommendAnswerCount:
this.recommendAnswerCount = Number(strValue);
    this.hmProperty["recommendAnswerCount"] = true;
break;
case clsqa_QuestionsEN.con_CreateDate:
this.createDate = strValue;
    this.hmProperty["createDate"] = true;
break;
case clsqa_QuestionsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[qa_Questions]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public questionsId = "";    //提问Id
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
public pdfDivLet = "";    //PdfDivLet
public pdfDivTop = "";    //PdfDivTop
public pdfPageNumIn = "";    //PdfPageNumIn
public pdfPageTop = 0;    //pdf页面顶部位置
public pdfZoom = "";    //PdfZoom
public paperId = "";    //论文Id
public userId = "";    //用户ID
public questionsTypeId = "";    //问题类型Id
public discussCount = 0;    //DiscussCount
public groupDiscussCount = 0;    //GroupDiscussCount
public recommendAnswerCount = 0;    //RecommendAnswerCount
public createDate = "";    //建立日期
public idCurrEduCls = "";    //教学班流水号


 /**
 * 常量:"QuestionsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsId(): string {return "questionsId";}    //提问Id

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
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

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
 * 常量:"CreateDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

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