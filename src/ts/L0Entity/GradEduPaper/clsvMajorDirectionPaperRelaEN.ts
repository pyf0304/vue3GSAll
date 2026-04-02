
 /**
 * 类名:clsvMajorDirectionPaperRelaEN
 * 表名:vMajorDirectionPaperRela(01120555)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:54
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
 * v专业方向论文关系(vMajorDirectionPaperRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvMajorDirectionPaperRelaEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vMajorDirectionPaperRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["mId", "majorDirectionId", "paperId", "updDate", "updUser", "memo", "idXzMajor", "majorDirectionENName", "majorDirectionName", "majorDirectionExplain", "isVisible", "paperTitle", "paperContent", "periodical", "author", "researchQuestion", "keyword", "literatureSources", "literatureLink", "uploadfileUrl", "isQuotethesis", "checker", "isChecked", "majorID", "majorName", "userName"];
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
case clsvMajorDirectionPaperRelaEN.con_mId:
return this.mId;
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionId:
return this.majorDirectionId;
case clsvMajorDirectionPaperRelaEN.con_PaperId:
return this.paperId;
case clsvMajorDirectionPaperRelaEN.con_UpdDate:
return this.updDate;
case clsvMajorDirectionPaperRelaEN.con_UpdUser:
return this.updUser;
case clsvMajorDirectionPaperRelaEN.con_Memo:
return this.memo;
case clsvMajorDirectionPaperRelaEN.con_IdXzMajor:
return this.idXzMajor;
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionENName:
return this.majorDirectionENName;
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionName:
return this.majorDirectionName;
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionExplain:
return this.majorDirectionExplain;
case clsvMajorDirectionPaperRelaEN.con_IsVisible:
return this.isVisible;
case clsvMajorDirectionPaperRelaEN.con_PaperTitle:
return this.paperTitle;
case clsvMajorDirectionPaperRelaEN.con_PaperContent:
return this.paperContent;
case clsvMajorDirectionPaperRelaEN.con_Periodical:
return this.periodical;
case clsvMajorDirectionPaperRelaEN.con_Author:
return this.author;
case clsvMajorDirectionPaperRelaEN.con_ResearchQuestion:
return this.researchQuestion;
case clsvMajorDirectionPaperRelaEN.con_Keyword:
return this.keyword;
case clsvMajorDirectionPaperRelaEN.con_LiteratureSources:
return this.literatureSources;
case clsvMajorDirectionPaperRelaEN.con_LiteratureLink:
return this.literatureLink;
case clsvMajorDirectionPaperRelaEN.con_UploadfileUrl:
return this.uploadfileUrl;
case clsvMajorDirectionPaperRelaEN.con_IsQuotethesis:
return this.isQuotethesis;
case clsvMajorDirectionPaperRelaEN.con_Checker:
return this.checker;
case clsvMajorDirectionPaperRelaEN.con_IsChecked:
return this.isChecked;
case clsvMajorDirectionPaperRelaEN.con_MajorID:
return this.majorID;
case clsvMajorDirectionPaperRelaEN.con_MajorName:
return this.majorName;
case clsvMajorDirectionPaperRelaEN.con_UserName:
return this.userName;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vMajorDirectionPaperRela]中不存在!`;
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
case clsvMajorDirectionPaperRelaEN.con_mId:
this.mId = Number(strValue);
break;
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionId:
this.majorDirectionId = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_PaperId:
this.paperId = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_Memo:
this.memo = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionENName:
this.majorDirectionENName = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionName:
this.majorDirectionName = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionExplain:
this.majorDirectionExplain = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_IsVisible:
this.isVisible = Boolean(strValue);
break;
case clsvMajorDirectionPaperRelaEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_PaperContent:
this.paperContent = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_Periodical:
this.periodical = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_Author:
this.author = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_ResearchQuestion:
this.researchQuestion = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_Keyword:
this.keyword = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_LiteratureSources:
this.literatureSources = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_LiteratureLink:
this.literatureLink = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_UploadfileUrl:
this.uploadfileUrl = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_IsQuotethesis:
this.isQuotethesis = Boolean(strValue);
break;
case clsvMajorDirectionPaperRelaEN.con_Checker:
this.checker = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_IsChecked:
this.isChecked = Boolean(strValue);
break;
case clsvMajorDirectionPaperRelaEN.con_MajorID:
this.majorID = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_MajorName:
this.majorName = strValue;
break;
case clsvMajorDirectionPaperRelaEN.con_UserName:
this.userName = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vMajorDirectionPaperRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public majorDirectionId = "";    //研究方向Id
public paperId = "";    //论文Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public idXzMajor = "";    //专业流水号
public majorDirectionENName = "";    //研究方向英文名
public majorDirectionName = "";    //研究方向名
public majorDirectionExplain = "";    //专业方向说明
public isVisible = false;    //是否显示
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
public checker = "";    //审核人
public isChecked = false;    //是否检查
public majorID = "";    //专业ID
public majorName = "";    //专业名称
public userName = "";    //用户名


 /**
 * 常量:"mId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"MajorDirectionId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorDirectionId(): string {return "majorDirectionId";}    //研究方向Id

 /**
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

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
 * 常量:"IdXzMajor"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorDirectionENName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorDirectionENName(): string {return "majorDirectionENName";}    //研究方向英文名

 /**
 * 常量:"MajorDirectionName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorDirectionName(): string {return "majorDirectionName";}    //研究方向名

 /**
 * 常量:"MajorDirectionExplain"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorDirectionExplain(): string {return "majorDirectionExplain";}    //专业方向说明

 /**
 * 常量:"IsVisible"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

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
 * 常量:"Checker"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Checker(): string {return "checker";}    //审核人

 /**
 * 常量:"IsChecked"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsChecked(): string {return "isChecked";}    //是否检查

 /**
 * 常量:"MajorID"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorID(): string {return "majorID";}    //专业ID

 /**
 * 常量:"MajorName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

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