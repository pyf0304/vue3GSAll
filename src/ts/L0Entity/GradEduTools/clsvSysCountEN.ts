
 /**
 * 类名:clsvSysCountEN
 * 表名:vSysCount(01120626)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:39
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 数据统计视图(vSysCount)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvSysCountEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vSysCount"; //当前表名,与该类相关的表名
public static _KeyFldName= "CountId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 19;
public static AttributeName = ["countId", "countTypeId", "commentTypeName", "commentTable", "okCount", "commentTableId", "collectionCount", "downloadCount", "attachmentCount", "commentCount", "score", "stuScore", "teaScore", "tableKey", "parentId", "updUser", "updDate", "memo", "paperRWCount"];
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
case clsvSysCountEN.con_CountId:
return this.countId;
case clsvSysCountEN.con_CountTypeId:
return this.countTypeId;
case clsvSysCountEN.con_CommentTypeName:
return this.commentTypeName;
case clsvSysCountEN.con_CommentTable:
return this.commentTable;
case clsvSysCountEN.con_OkCount:
return this.okCount;
case clsvSysCountEN.con_CommentTableId:
return this.commentTableId;
case clsvSysCountEN.con_CollectionCount:
return this.collectionCount;
case clsvSysCountEN.con_DownloadCount:
return this.downloadCount;
case clsvSysCountEN.con_AttachmentCount:
return this.attachmentCount;
case clsvSysCountEN.con_CommentCount:
return this.commentCount;
case clsvSysCountEN.con_Score:
return this.score;
case clsvSysCountEN.con_StuScore:
return this.stuScore;
case clsvSysCountEN.con_TeaScore:
return this.teaScore;
case clsvSysCountEN.con_TableKey:
return this.tableKey;
case clsvSysCountEN.con_ParentId:
return this.parentId;
case clsvSysCountEN.con_UpdUser:
return this.updUser;
case clsvSysCountEN.con_UpdDate:
return this.updDate;
case clsvSysCountEN.con_Memo:
return this.memo;
case clsvSysCountEN.con_PaperRWCount:
return this.paperRWCount;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysCount]中不存在!`;
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
case clsvSysCountEN.con_CountId:
this.countId = strValue;
break;
case clsvSysCountEN.con_CountTypeId:
this.countTypeId = strValue;
break;
case clsvSysCountEN.con_CommentTypeName:
this.commentTypeName = strValue;
break;
case clsvSysCountEN.con_CommentTable:
this.commentTable = strValue;
break;
case clsvSysCountEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvSysCountEN.con_CommentTableId:
this.commentTableId = strValue;
break;
case clsvSysCountEN.con_CollectionCount:
this.collectionCount = Number(strValue);
break;
case clsvSysCountEN.con_DownloadCount:
this.downloadCount = Number(strValue);
break;
case clsvSysCountEN.con_AttachmentCount:
this.attachmentCount = Number(strValue);
break;
case clsvSysCountEN.con_CommentCount:
this.commentCount = Number(strValue);
break;
case clsvSysCountEN.con_Score:
this.score = Number(strValue);
break;
case clsvSysCountEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvSysCountEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvSysCountEN.con_TableKey:
this.tableKey = strValue;
break;
case clsvSysCountEN.con_ParentId:
this.parentId = strValue;
break;
case clsvSysCountEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvSysCountEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvSysCountEN.con_Memo:
this.memo = strValue;
break;
case clsvSysCountEN.con_PaperRWCount:
this.paperRWCount = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysCount]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public countId = "";    //CountId
public countTypeId = "";    //CountTypeId
public commentTypeName = "";    //评论类型名
public commentTable = "";    //评论表
public okCount = 0;    //点赞统计
public commentTableId = "";    //评论表Id
public collectionCount = 0;    //收藏数量
public downloadCount = 0;    //下载数
public attachmentCount = 0;    //附件计数
public commentCount = 0;    //评论数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public tableKey = "";    //表主键
public parentId = "";    //父Id
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注
public paperRWCount = 0;    //PaperRWCount


 /**
 * 常量:"CountId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CountId(): string {return "countId";}    //CountId

 /**
 * 常量:"CountTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CountTypeId(): string {return "countTypeId";}    //CountTypeId

 /**
 * 常量:"CommentTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentTypeName(): string {return "commentTypeName";}    //评论类型名

 /**
 * 常量:"CommentTable"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentTable(): string {return "commentTable";}    //评论表

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"CommentTableId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentTableId(): string {return "commentTableId";}    //评论表Id

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
 * 常量:"AttachmentCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AttachmentCount(): string {return "attachmentCount";}    //附件计数

 /**
 * 常量:"CommentCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentCount(): string {return "commentCount";}    //评论数

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
 * 常量:"TableKey"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TableKey(): string {return "tableKey";}    //表主键

 /**
 * 常量:"ParentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父Id

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
 * 常量:"PaperRWCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperRWCount(): string {return "paperRWCount";}    //PaperRWCount

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