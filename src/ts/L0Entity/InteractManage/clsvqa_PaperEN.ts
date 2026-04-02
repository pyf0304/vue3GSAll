
 /**
 * 类名:clsvqa_PaperEN
 * 表名:vqa_Paper(01120637)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:07
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
 * v论文答疑(vqa_Paper)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvqa_PaperEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vqa_Paper"; //当前表名,与该类相关的表名
public static _KeyFldName= "QaPaperId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 24;
public static AttributeName = ["qaPaperId", "paperId", "questionsCount", "isDelete", "isPublic", "isSubmit", "updUser", "userName", "updDate", "memo", "paperTitle", "attachmentCount", "paperContent", "periodical", "author", "researchQuestion", "literatureSources", "uploadfileUrl", "idXzMajor", "majorName", "idCurrEduCls", "answerCount", "shareId", "tagsCount"];
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
case clsvqa_PaperEN.con_QaPaperId:
return this.qaPaperId;
case clsvqa_PaperEN.con_PaperId:
return this.paperId;
case clsvqa_PaperEN.con_QuestionsCount:
return this.questionsCount;
case clsvqa_PaperEN.con_IsDelete:
return this.isDelete;
case clsvqa_PaperEN.con_IsPublic:
return this.isPublic;
case clsvqa_PaperEN.con_IsSubmit:
return this.isSubmit;
case clsvqa_PaperEN.con_UpdUser:
return this.updUser;
case clsvqa_PaperEN.con_UserName:
return this.userName;
case clsvqa_PaperEN.con_UpdDate:
return this.updDate;
case clsvqa_PaperEN.con_Memo:
return this.memo;
case clsvqa_PaperEN.con_PaperTitle:
return this.paperTitle;
case clsvqa_PaperEN.con_AttachmentCount:
return this.attachmentCount;
case clsvqa_PaperEN.con_PaperContent:
return this.paperContent;
case clsvqa_PaperEN.con_Periodical:
return this.periodical;
case clsvqa_PaperEN.con_Author:
return this.author;
case clsvqa_PaperEN.con_ResearchQuestion:
return this.researchQuestion;
case clsvqa_PaperEN.con_LiteratureSources:
return this.literatureSources;
case clsvqa_PaperEN.con_UploadfileUrl:
return this.uploadfileUrl;
case clsvqa_PaperEN.con_IdXzMajor:
return this.idXzMajor;
case clsvqa_PaperEN.con_MajorName:
return this.majorName;
case clsvqa_PaperEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvqa_PaperEN.con_AnswerCount:
return this.answerCount;
case clsvqa_PaperEN.con_ShareId:
return this.shareId;
case clsvqa_PaperEN.con_TagsCount:
return this.tagsCount;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vqa_Paper]中不存在!`;
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
case clsvqa_PaperEN.con_QaPaperId:
this.qaPaperId = strValue;
break;
case clsvqa_PaperEN.con_PaperId:
this.paperId = strValue;
break;
case clsvqa_PaperEN.con_QuestionsCount:
this.questionsCount = Number(strValue);
break;
case clsvqa_PaperEN.con_IsDelete:
this.isDelete = Boolean(strValue);
break;
case clsvqa_PaperEN.con_IsPublic:
this.isPublic = Boolean(strValue);
break;
case clsvqa_PaperEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvqa_PaperEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvqa_PaperEN.con_UserName:
this.userName = strValue;
break;
case clsvqa_PaperEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvqa_PaperEN.con_Memo:
this.memo = strValue;
break;
case clsvqa_PaperEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvqa_PaperEN.con_AttachmentCount:
this.attachmentCount = Number(strValue);
break;
case clsvqa_PaperEN.con_PaperContent:
this.paperContent = strValue;
break;
case clsvqa_PaperEN.con_Periodical:
this.periodical = strValue;
break;
case clsvqa_PaperEN.con_Author:
this.author = strValue;
break;
case clsvqa_PaperEN.con_ResearchQuestion:
this.researchQuestion = strValue;
break;
case clsvqa_PaperEN.con_LiteratureSources:
this.literatureSources = strValue;
break;
case clsvqa_PaperEN.con_UploadfileUrl:
this.uploadfileUrl = strValue;
break;
case clsvqa_PaperEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvqa_PaperEN.con_MajorName:
this.majorName = strValue;
break;
case clsvqa_PaperEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvqa_PaperEN.con_AnswerCount:
this.answerCount = Number(strValue);
break;
case clsvqa_PaperEN.con_ShareId:
this.shareId = strValue;
break;
case clsvqa_PaperEN.con_TagsCount:
this.tagsCount = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vqa_Paper]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public qaPaperId = "";    //论文答疑Id
public paperId = "";    //论文Id
public questionsCount = 0;    //提问计数
public isDelete = false;    //是否删除
public isPublic = false;    //是否公开
public isSubmit = false;    //是否提交
public updUser = "";    //修改人
public userName = "";    //用户名
public updDate = "";    //修改日期
public memo = "";    //备注
public paperTitle = "";    //论文标题
public attachmentCount = 0;    //附件计数
public paperContent = "";    //主题内容
public periodical = "";    //期刊
public author = "";    //作者
public researchQuestion = "";    //研究问题
public literatureSources = "";    //文献来源
public uploadfileUrl = "";    //文件地址
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
public idCurrEduCls = "";    //教学班流水号
public answerCount = 0;    //回答计数
public shareId = "";    //分享Id
public tagsCount = 0;    //论文标注数


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
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

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
 * 常量:"LiteratureSources"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LiteratureSources(): string {return "literatureSources";}    //文献来源

 /**
 * 常量:"UploadfileUrl"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UploadfileUrl(): string {return "uploadfileUrl";}    //文件地址

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
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

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