
 /**
 * 类名:clsvPaperReadWriteEN
 * 表名:vPaperReadWrite(01120550)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:50
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
 * v论文读写表(vPaperReadWrite)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvPaperReadWriteEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vPaperReadWrite"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperRWId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 28;
public static AttributeName = ["paperRWId", "readerId", "paperId", "paperTitle", "paperContent", "periodical", "author", "keyword", "researchQuestion", "operationTypeId", "operationTypeName", "updDate", "memo", "literatureLink", "literatureSources", "literatureTypeId", "literatureTypeName", "uploadfileUrl", "isPublic", "isSubmit", "submitter", "pcount", "teaCount", "idCurrEduCls", "subVCount", "createDate", "shareId", "updUser"];
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
case clsvPaperReadWriteEN.con_PaperRWId:
return this.paperRWId;
case clsvPaperReadWriteEN.con_ReaderId:
return this.readerId;
case clsvPaperReadWriteEN.con_PaperId:
return this.paperId;
case clsvPaperReadWriteEN.con_PaperTitle:
return this.paperTitle;
case clsvPaperReadWriteEN.con_PaperContent:
return this.paperContent;
case clsvPaperReadWriteEN.con_Periodical:
return this.periodical;
case clsvPaperReadWriteEN.con_Author:
return this.author;
case clsvPaperReadWriteEN.con_Keyword:
return this.keyword;
case clsvPaperReadWriteEN.con_ResearchQuestion:
return this.researchQuestion;
case clsvPaperReadWriteEN.con_OperationTypeId:
return this.operationTypeId;
case clsvPaperReadWriteEN.con_OperationTypeName:
return this.operationTypeName;
case clsvPaperReadWriteEN.con_UpdDate:
return this.updDate;
case clsvPaperReadWriteEN.con_Memo:
return this.memo;
case clsvPaperReadWriteEN.con_LiteratureLink:
return this.literatureLink;
case clsvPaperReadWriteEN.con_LiteratureSources:
return this.literatureSources;
case clsvPaperReadWriteEN.con_LiteratureTypeId:
return this.literatureTypeId;
case clsvPaperReadWriteEN.con_LiteratureTypeName:
return this.literatureTypeName;
case clsvPaperReadWriteEN.con_UploadfileUrl:
return this.uploadfileUrl;
case clsvPaperReadWriteEN.con_IsPublic:
return this.isPublic;
case clsvPaperReadWriteEN.con_IsSubmit:
return this.isSubmit;
case clsvPaperReadWriteEN.con_Submitter:
return this.submitter;
case clsvPaperReadWriteEN.con_Pcount:
return this.pcount;
case clsvPaperReadWriteEN.con_TeaCount:
return this.teaCount;
case clsvPaperReadWriteEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvPaperReadWriteEN.con_SubVCount:
return this.subVCount;
case clsvPaperReadWriteEN.con_CreateDate:
return this.createDate;
case clsvPaperReadWriteEN.con_ShareId:
return this.shareId;
case clsvPaperReadWriteEN.con_UpdUser:
return this.updUser;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vPaperReadWrite]中不存在!`;
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
case clsvPaperReadWriteEN.con_PaperRWId:
this.paperRWId = strValue;
break;
case clsvPaperReadWriteEN.con_ReaderId:
this.readerId = strValue;
break;
case clsvPaperReadWriteEN.con_PaperId:
this.paperId = strValue;
break;
case clsvPaperReadWriteEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvPaperReadWriteEN.con_PaperContent:
this.paperContent = strValue;
break;
case clsvPaperReadWriteEN.con_Periodical:
this.periodical = strValue;
break;
case clsvPaperReadWriteEN.con_Author:
this.author = strValue;
break;
case clsvPaperReadWriteEN.con_Keyword:
this.keyword = strValue;
break;
case clsvPaperReadWriteEN.con_ResearchQuestion:
this.researchQuestion = strValue;
break;
case clsvPaperReadWriteEN.con_OperationTypeId:
this.operationTypeId = strValue;
break;
case clsvPaperReadWriteEN.con_OperationTypeName:
this.operationTypeName = strValue;
break;
case clsvPaperReadWriteEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvPaperReadWriteEN.con_Memo:
this.memo = strValue;
break;
case clsvPaperReadWriteEN.con_LiteratureLink:
this.literatureLink = strValue;
break;
case clsvPaperReadWriteEN.con_LiteratureSources:
this.literatureSources = strValue;
break;
case clsvPaperReadWriteEN.con_LiteratureTypeId:
this.literatureTypeId = strValue;
break;
case clsvPaperReadWriteEN.con_LiteratureTypeName:
this.literatureTypeName = strValue;
break;
case clsvPaperReadWriteEN.con_UploadfileUrl:
this.uploadfileUrl = strValue;
break;
case clsvPaperReadWriteEN.con_IsPublic:
this.isPublic = Boolean(strValue);
break;
case clsvPaperReadWriteEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvPaperReadWriteEN.con_Submitter:
this.submitter = strValue;
break;
case clsvPaperReadWriteEN.con_Pcount:
this.pcount = Number(strValue);
break;
case clsvPaperReadWriteEN.con_TeaCount:
this.teaCount = Number(strValue);
break;
case clsvPaperReadWriteEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvPaperReadWriteEN.con_SubVCount:
this.subVCount = Number(strValue);
break;
case clsvPaperReadWriteEN.con_CreateDate:
this.createDate = strValue;
break;
case clsvPaperReadWriteEN.con_ShareId:
this.shareId = strValue;
break;
case clsvPaperReadWriteEN.con_UpdUser:
this.updUser = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vPaperReadWrite]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public paperRWId = "";    //课文阅读
public readerId = "";    //阅读者Id
public paperId = "";    //论文Id
public paperTitle = "";    //论文标题
public paperContent = "";    //主题内容
public periodical = "";    //期刊
public author = "";    //作者
public keyword = "";    //关键字
public researchQuestion = "";    //研究问题
public operationTypeId = "";    //操作类型ID
public operationTypeName = "";    //操作类型名
public updDate = "";    //修改日期
public memo = "";    //备注
public literatureLink = "";    //文献链接
public literatureSources = "";    //文献来源
public literatureTypeId = "";    //文献类型Id
public literatureTypeName = "";    //作文类型名
public uploadfileUrl = "";    //文件地址
public isPublic = false;    //是否公开
public isSubmit = false;    //是否提交
public submitter = "";    //提交人
public pcount = 0;    //读写数
public teaCount = 0;    //TeaCount
public idCurrEduCls = "";    //教学班流水号
public subVCount = 0;    //论文子观点数
public createDate = "";    //建立日期
public shareId = "";    //分享Id
public updUser = "";    //修改人


 /**
 * 常量:"PaperRWId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperRWId(): string {return "paperRWId";}    //课文阅读

 /**
 * 常量:"ReaderId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ReaderId(): string {return "readerId";}    //阅读者Id

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
 * 常量:"Keyword"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Keyword(): string {return "keyword";}    //关键字

 /**
 * 常量:"ResearchQuestion"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ResearchQuestion(): string {return "researchQuestion";}    //研究问题

 /**
 * 常量:"OperationTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OperationTypeId(): string {return "operationTypeId";}    //操作类型ID

 /**
 * 常量:"OperationTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OperationTypeName(): string {return "operationTypeName";}    //操作类型名

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
 * 常量:"LiteratureLink"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LiteratureLink(): string {return "literatureLink";}    //文献链接

 /**
 * 常量:"LiteratureSources"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LiteratureSources(): string {return "literatureSources";}    //文献来源

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
 * 常量:"UploadfileUrl"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UploadfileUrl(): string {return "uploadfileUrl";}    //文件地址

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
 * 常量:"Submitter"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Submitter(): string {return "submitter";}    //提交人

 /**
 * 常量:"Pcount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Pcount(): string {return "pcount";}    //读写数

 /**
 * 常量:"TeaCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TeaCount(): string {return "teaCount";}    //TeaCount

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"SubVCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubVCount(): string {return "subVCount";}    //论文子观点数

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
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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