
 /**
 * 类名:clsvPaperCountEN
 * 表名:vPaperCount(01120595)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:40
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
 * vPaperCount(vPaperCount)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvPaperCountEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vPaperCount"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["paperId", "appraiseCount", "attachmentCount", "collectionCount", "downloadCount", "okCount", "pcount", "score", "stuScore", "teaScore", "browseNumber", "updDate", "paperTitle", "updUser", "paperQCount", "subVCount", "tagsCount", "teaQCount"];
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
case clsvPaperCountEN.con_PaperId:
return this.paperId;
case clsvPaperCountEN.con_AppraiseCount:
return this.appraiseCount;
case clsvPaperCountEN.con_AttachmentCount:
return this.attachmentCount;
case clsvPaperCountEN.con_CollectionCount:
return this.collectionCount;
case clsvPaperCountEN.con_DownloadCount:
return this.downloadCount;
case clsvPaperCountEN.con_OkCount:
return this.okCount;
case clsvPaperCountEN.con_Pcount:
return this.pcount;
case clsvPaperCountEN.con_Score:
return this.score;
case clsvPaperCountEN.con_StuScore:
return this.stuScore;
case clsvPaperCountEN.con_TeaScore:
return this.teaScore;
case clsvPaperCountEN.con_BrowseNumber:
return this.browseNumber;
case clsvPaperCountEN.con_UpdDate:
return this.updDate;
case clsvPaperCountEN.con_PaperTitle:
return this.paperTitle;
case clsvPaperCountEN.con_UpdUser:
return this.updUser;
case clsvPaperCountEN.con_PaperQCount:
return this.paperQCount;
case clsvPaperCountEN.con_SubVCount:
return this.subVCount;
case clsvPaperCountEN.con_TagsCount:
return this.tagsCount;
case clsvPaperCountEN.con_TeaQCount:
return this.teaQCount;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vPaperCount]中不存在!`;
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
case clsvPaperCountEN.con_PaperId:
this.paperId = strValue;
break;
case clsvPaperCountEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvPaperCountEN.con_AttachmentCount:
this.attachmentCount = Number(strValue);
break;
case clsvPaperCountEN.con_CollectionCount:
this.collectionCount = Number(strValue);
break;
case clsvPaperCountEN.con_DownloadCount:
this.downloadCount = Number(strValue);
break;
case clsvPaperCountEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvPaperCountEN.con_Pcount:
this.pcount = Number(strValue);
break;
case clsvPaperCountEN.con_Score:
this.score = Number(strValue);
break;
case clsvPaperCountEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvPaperCountEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvPaperCountEN.con_BrowseNumber:
this.browseNumber = Number(strValue);
break;
case clsvPaperCountEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvPaperCountEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvPaperCountEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvPaperCountEN.con_PaperQCount:
this.paperQCount = Number(strValue);
break;
case clsvPaperCountEN.con_SubVCount:
this.subVCount = Number(strValue);
break;
case clsvPaperCountEN.con_TagsCount:
this.tagsCount = Number(strValue);
break;
case clsvPaperCountEN.con_TeaQCount:
this.teaQCount = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vPaperCount]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public paperId = "";    //论文Id
public appraiseCount = 0;    //评论数
public attachmentCount = 0;    //附件计数
public collectionCount = 0;    //收藏数量
public downloadCount = 0;    //下载数
public okCount = 0;    //点赞统计
public pcount = 0;    //读写数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public browseNumber = 0;    //浏览量
public updDate = "";    //修改日期
public paperTitle = "";    //论文标题
public updUser = "";    //修改人
public paperQCount = 0;    //论文答疑数
public subVCount = 0;    //论文子观点数
public tagsCount = 0;    //论文标注数
public teaQCount = 0;    //教师提问数


 /**
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"AppraiseCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

 /**
 * 常量:"AttachmentCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AttachmentCount(): string {return "attachmentCount";}    //附件计数

 /**
 * 常量:"CollectionCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollectionCount(): string {return "collectionCount";}    //收藏数量

 /**
 * 常量:"DownloadCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DownloadCount(): string {return "downloadCount";}    //下载数

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"Pcount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Pcount(): string {return "pcount";}    //读写数

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
 * 常量:"BrowseNumber"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_BrowseNumber(): string {return "browseNumber";}    //浏览量

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"PaperTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"PaperQCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperQCount(): string {return "paperQCount";}    //论文答疑数

 /**
 * 常量:"SubVCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubVCount(): string {return "subVCount";}    //论文子观点数

 /**
 * 常量:"TagsCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TagsCount(): string {return "tagsCount";}    //论文标注数

 /**
 * 常量:"TeaQCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TeaQCount(): string {return "teaQCount";}    //教师提问数

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