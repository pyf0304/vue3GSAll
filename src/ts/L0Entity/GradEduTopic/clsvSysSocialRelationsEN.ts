
 /**
 * 类名:clsvSysSocialRelationsEN
 * 表名:vSysSocialRelations(01120654)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:04
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
 * 社会关系表视图(vSysSocialRelations)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvSysSocialRelationsEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vSysSocialRelations"; //当前表名,与该类相关的表名
public static _KeyFldName= "SocialId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["socialId", "fullName", "nationality", "workUnit", "major", "achievement", "detailedDescription", "levelId", "levelName", "updUser", "updDate", "isSubmit", "okCount", "citationCount", "versionCount", "idCurrEduCls", "memo", "appraiseCount", "score", "stuScore", "teaScore", "citationId", "createDate", "shareId", "pdfContent", "pdfPageNum"];
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
case clsvSysSocialRelationsEN.con_SocialId:
return this.socialId;
case clsvSysSocialRelationsEN.con_FullName:
return this.fullName;
case clsvSysSocialRelationsEN.con_Nationality:
return this.nationality;
case clsvSysSocialRelationsEN.con_WorkUnit:
return this.workUnit;
case clsvSysSocialRelationsEN.con_Major:
return this.major;
case clsvSysSocialRelationsEN.con_Achievement:
return this.achievement;
case clsvSysSocialRelationsEN.con_DetailedDescription:
return this.detailedDescription;
case clsvSysSocialRelationsEN.con_LevelId:
return this.levelId;
case clsvSysSocialRelationsEN.con_LevelName:
return this.levelName;
case clsvSysSocialRelationsEN.con_UpdUser:
return this.updUser;
case clsvSysSocialRelationsEN.con_UpdDate:
return this.updDate;
case clsvSysSocialRelationsEN.con_IsSubmit:
return this.isSubmit;
case clsvSysSocialRelationsEN.con_OkCount:
return this.okCount;
case clsvSysSocialRelationsEN.con_CitationCount:
return this.citationCount;
case clsvSysSocialRelationsEN.con_VersionCount:
return this.versionCount;
case clsvSysSocialRelationsEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvSysSocialRelationsEN.con_Memo:
return this.memo;
case clsvSysSocialRelationsEN.con_AppraiseCount:
return this.appraiseCount;
case clsvSysSocialRelationsEN.con_Score:
return this.score;
case clsvSysSocialRelationsEN.con_StuScore:
return this.stuScore;
case clsvSysSocialRelationsEN.con_TeaScore:
return this.teaScore;
case clsvSysSocialRelationsEN.con_CitationId:
return this.citationId;
case clsvSysSocialRelationsEN.con_CreateDate:
return this.createDate;
case clsvSysSocialRelationsEN.con_ShareId:
return this.shareId;
case clsvSysSocialRelationsEN.con_PdfContent:
return this.pdfContent;
case clsvSysSocialRelationsEN.con_PdfPageNum:
return this.pdfPageNum;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysSocialRelations]中不存在!`;
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
case clsvSysSocialRelationsEN.con_SocialId:
this.socialId = strValue;
break;
case clsvSysSocialRelationsEN.con_FullName:
this.fullName = strValue;
break;
case clsvSysSocialRelationsEN.con_Nationality:
this.nationality = strValue;
break;
case clsvSysSocialRelationsEN.con_WorkUnit:
this.workUnit = strValue;
break;
case clsvSysSocialRelationsEN.con_Major:
this.major = strValue;
break;
case clsvSysSocialRelationsEN.con_Achievement:
this.achievement = strValue;
break;
case clsvSysSocialRelationsEN.con_DetailedDescription:
this.detailedDescription = strValue;
break;
case clsvSysSocialRelationsEN.con_LevelId:
this.levelId = strValue;
break;
case clsvSysSocialRelationsEN.con_LevelName:
this.levelName = strValue;
break;
case clsvSysSocialRelationsEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvSysSocialRelationsEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvSysSocialRelationsEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvSysSocialRelationsEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvSysSocialRelationsEN.con_CitationCount:
this.citationCount = Number(strValue);
break;
case clsvSysSocialRelationsEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvSysSocialRelationsEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvSysSocialRelationsEN.con_Memo:
this.memo = strValue;
break;
case clsvSysSocialRelationsEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvSysSocialRelationsEN.con_Score:
this.score = Number(strValue);
break;
case clsvSysSocialRelationsEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvSysSocialRelationsEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvSysSocialRelationsEN.con_CitationId:
this.citationId = strValue;
break;
case clsvSysSocialRelationsEN.con_CreateDate:
this.createDate = strValue;
break;
case clsvSysSocialRelationsEN.con_ShareId:
this.shareId = strValue;
break;
case clsvSysSocialRelationsEN.con_PdfContent:
this.pdfContent = strValue;
break;
case clsvSysSocialRelationsEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysSocialRelations]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public socialId = "";    //社会Id
public fullName = "";    //姓名
public nationality = "";    //国籍
public workUnit = "";    //工作单位
public major = "";    //专业
public achievement = "";    //成就
public detailedDescription = "";    //详细说明
public levelId = "";    //级别Id
public levelName = "";    //级别名称
public updUser = "";    //修改人
public updDate = "";    //修改日期
public isSubmit = false;    //是否提交
public okCount = 0;    //点赞统计
public citationCount = 0;    //引用统计
public versionCount = 0;    //版本统计
public idCurrEduCls = "";    //教学班流水号
public memo = "";    //备注
public appraiseCount = 0;    //评论数
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public citationId = "";    //引用Id
public createDate = "";    //建立日期
public shareId = "";    //分享Id
public pdfContent = "";    //Pdf内容
public pdfPageNum = 0;    //Pdf页码


 /**
 * 常量:"SocialId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SocialId(): string {return "socialId";}    //社会Id

 /**
 * 常量:"FullName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_FullName(): string {return "fullName";}    //姓名

 /**
 * 常量:"Nationality"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Nationality(): string {return "nationality";}    //国籍

 /**
 * 常量:"WorkUnit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_WorkUnit(): string {return "workUnit";}    //工作单位

 /**
 * 常量:"Major"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Major(): string {return "major";}    //专业

 /**
 * 常量:"Achievement"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Achievement(): string {return "achievement";}    //成就

 /**
 * 常量:"DetailedDescription"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DetailedDescription(): string {return "detailedDescription";}    //详细说明

 /**
 * 常量:"LevelId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LevelId(): string {return "levelId";}    //级别Id

 /**
 * 常量:"LevelName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LevelName(): string {return "levelName";}    //级别名称

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
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"CitationCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CitationCount(): string {return "citationCount";}    //引用统计

 /**
 * 常量:"VersionCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VersionCount(): string {return "versionCount";}    //版本统计

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"AppraiseCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

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
 * 常量:"CitationId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CitationId(): string {return "citationId";}    //引用Id

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