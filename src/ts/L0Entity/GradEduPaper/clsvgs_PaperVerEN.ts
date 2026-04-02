
 /**
 * 类名:clsvgs_PaperVerEN
 * 表名:vgs_PaperVer(01120677)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:54
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
 * 论文历史版本视图(vgs_PaperVer)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_PaperVerEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_PaperVer"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperVId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["paperVId", "paperId", "paperTitle", "paperContent", "periodical", "author", "researchQuestion", "keyword", "literatureSources", "literatureLink", "uploadfileUrl", "isQuotethesis", "isSubmit", "isChecked", "quoteId", "checker", "literatureTypeId", "literatureTypeName", "updUser", "updDate", "idCurrEduCls", "paperTypeId", "paperTypeName", "paperStatusId", "paperStatusName", "memo"];
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
case clsvgs_PaperVerEN.con_PaperVId:
return this.paperVId;
case clsvgs_PaperVerEN.con_PaperId:
return this.paperId;
case clsvgs_PaperVerEN.con_PaperTitle:
return this.paperTitle;
case clsvgs_PaperVerEN.con_PaperContent:
return this.paperContent;
case clsvgs_PaperVerEN.con_Periodical:
return this.periodical;
case clsvgs_PaperVerEN.con_Author:
return this.author;
case clsvgs_PaperVerEN.con_ResearchQuestion:
return this.researchQuestion;
case clsvgs_PaperVerEN.con_Keyword:
return this.keyword;
case clsvgs_PaperVerEN.con_LiteratureSources:
return this.literatureSources;
case clsvgs_PaperVerEN.con_LiteratureLink:
return this.literatureLink;
case clsvgs_PaperVerEN.con_UploadfileUrl:
return this.uploadfileUrl;
case clsvgs_PaperVerEN.con_IsQuotethesis:
return this.isQuotethesis;
case clsvgs_PaperVerEN.con_IsSubmit:
return this.isSubmit;
case clsvgs_PaperVerEN.con_IsChecked:
return this.isChecked;
case clsvgs_PaperVerEN.con_QuoteId:
return this.quoteId;
case clsvgs_PaperVerEN.con_Checker:
return this.checker;
case clsvgs_PaperVerEN.con_LiteratureTypeId:
return this.literatureTypeId;
case clsvgs_PaperVerEN.con_LiteratureTypeName:
return this.literatureTypeName;
case clsvgs_PaperVerEN.con_UpdUser:
return this.updUser;
case clsvgs_PaperVerEN.con_UpdDate:
return this.updDate;
case clsvgs_PaperVerEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_PaperVerEN.con_PaperTypeId:
return this.paperTypeId;
case clsvgs_PaperVerEN.con_PaperTypeName:
return this.paperTypeName;
case clsvgs_PaperVerEN.con_PaperStatusId:
return this.paperStatusId;
case clsvgs_PaperVerEN.con_PaperStatusName:
return this.paperStatusName;
case clsvgs_PaperVerEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_PaperVer]中不存在!`;
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
case clsvgs_PaperVerEN.con_PaperVId:
this.paperVId = Number(strValue);
break;
case clsvgs_PaperVerEN.con_PaperId:
this.paperId = strValue;
break;
case clsvgs_PaperVerEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvgs_PaperVerEN.con_PaperContent:
this.paperContent = strValue;
break;
case clsvgs_PaperVerEN.con_Periodical:
this.periodical = strValue;
break;
case clsvgs_PaperVerEN.con_Author:
this.author = strValue;
break;
case clsvgs_PaperVerEN.con_ResearchQuestion:
this.researchQuestion = strValue;
break;
case clsvgs_PaperVerEN.con_Keyword:
this.keyword = strValue;
break;
case clsvgs_PaperVerEN.con_LiteratureSources:
this.literatureSources = strValue;
break;
case clsvgs_PaperVerEN.con_LiteratureLink:
this.literatureLink = strValue;
break;
case clsvgs_PaperVerEN.con_UploadfileUrl:
this.uploadfileUrl = strValue;
break;
case clsvgs_PaperVerEN.con_IsQuotethesis:
this.isQuotethesis = Boolean(strValue);
break;
case clsvgs_PaperVerEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvgs_PaperVerEN.con_IsChecked:
this.isChecked = Boolean(strValue);
break;
case clsvgs_PaperVerEN.con_QuoteId:
this.quoteId = strValue;
break;
case clsvgs_PaperVerEN.con_Checker:
this.checker = strValue;
break;
case clsvgs_PaperVerEN.con_LiteratureTypeId:
this.literatureTypeId = strValue;
break;
case clsvgs_PaperVerEN.con_LiteratureTypeName:
this.literatureTypeName = strValue;
break;
case clsvgs_PaperVerEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvgs_PaperVerEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvgs_PaperVerEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvgs_PaperVerEN.con_PaperTypeId:
this.paperTypeId = strValue;
break;
case clsvgs_PaperVerEN.con_PaperTypeName:
this.paperTypeName = strValue;
break;
case clsvgs_PaperVerEN.con_PaperStatusId:
this.paperStatusId = strValue;
break;
case clsvgs_PaperVerEN.con_PaperStatusName:
this.paperStatusName = strValue;
break;
case clsvgs_PaperVerEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_PaperVer]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public paperVId = 0;    //PaperVId
public paperId = "";    //论文Id
public paperTitle = "";    //论文标题
public paperContent = "";    //主题内容
public periodical = "";    //期刊
public author = "";    //作者
public researchQuestion = "";    //研究问题
public keyword = "";    //关键字
public literatureSources = "";    //文献来源
public literatureLink = "";    //文献链接
public uploadfileUrl = "";    //文件地址
public isQuotethesis = false;    //是否引用论文
public isSubmit = false;    //是否提交
public isChecked = false;    //是否检查
public quoteId = "";    //引用Id
public checker = "";    //审核人
public literatureTypeId = "";    //文献类型Id
public literatureTypeName = "";    //作文类型名
public updUser = "";    //修改人
public updDate = "";    //修改日期
public idCurrEduCls = "";    //教学班流水号
public paperTypeId = "";    //论文类型Id
public paperTypeName = "";    //论文类型名
public paperStatusId = "";    //论文状态Id
public paperStatusName = "";    //论文状态名
public memo = "";    //备注


 /**
 * 常量:"PaperVId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperVId(): string {return "paperVId";}    //PaperVId

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
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"IsChecked"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsChecked(): string {return "isChecked";}    //是否检查

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
 * 常量:"LiteratureTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LiteratureTypeId(): string {return "literatureTypeId";}    //文献类型Id

 /**
 * 常量:"LiteratureTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LiteratureTypeName(): string {return "literatureTypeName";}    //作文类型名

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
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"PaperTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTypeId(): string {return "paperTypeId";}    //论文类型Id

 /**
 * 常量:"PaperTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTypeName(): string {return "paperTypeName";}    //论文类型名

 /**
 * 常量:"PaperStatusId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperStatusId(): string {return "paperStatusId";}    //论文状态Id

 /**
 * 常量:"PaperStatusName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperStatusName(): string {return "paperStatusName";}    //论文状态名

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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