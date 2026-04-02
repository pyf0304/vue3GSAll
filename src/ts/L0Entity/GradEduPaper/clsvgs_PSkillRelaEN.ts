
 /**
 * 类名:clsvgs_PSkillRelaEN
 * 表名:vgs_PSkillRela(01120666)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:57
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
 * 论文技能关系视图(vgs_PSkillRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_PSkillRelaEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_PSkillRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 28;
public static AttributeName = ["mId", "paperId", "paperTitle", "paperTypeId", "sectionId", "sectionName", "skillId", "updDate", "updUser", "memo", "skillName", "operationTypeId", "operationTypeName", "levelName", "levelId", "process", "isSubmit", "okCount", "score", "appraiseCount", "stuScore", "teaScore", "citationCount", "versionCount", "skillUserId", "skillDate", "createDate", "shareId"];
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
case clsvgs_PSkillRelaEN.con_mId:
return this.mId;
case clsvgs_PSkillRelaEN.con_PaperId:
return this.paperId;
case clsvgs_PSkillRelaEN.con_PaperTitle:
return this.paperTitle;
case clsvgs_PSkillRelaEN.con_PaperTypeId:
return this.paperTypeId;
case clsvgs_PSkillRelaEN.con_SectionId:
return this.sectionId;
case clsvgs_PSkillRelaEN.con_SectionName:
return this.sectionName;
case clsvgs_PSkillRelaEN.con_SkillId:
return this.skillId;
case clsvgs_PSkillRelaEN.con_UpdDate:
return this.updDate;
case clsvgs_PSkillRelaEN.con_UpdUser:
return this.updUser;
case clsvgs_PSkillRelaEN.con_Memo:
return this.memo;
case clsvgs_PSkillRelaEN.con_SkillName:
return this.skillName;
case clsvgs_PSkillRelaEN.con_OperationTypeId:
return this.operationTypeId;
case clsvgs_PSkillRelaEN.con_OperationTypeName:
return this.operationTypeName;
case clsvgs_PSkillRelaEN.con_LevelName:
return this.levelName;
case clsvgs_PSkillRelaEN.con_LevelId:
return this.levelId;
case clsvgs_PSkillRelaEN.con_Process:
return this.process;
case clsvgs_PSkillRelaEN.con_IsSubmit:
return this.isSubmit;
case clsvgs_PSkillRelaEN.con_OkCount:
return this.okCount;
case clsvgs_PSkillRelaEN.con_Score:
return this.score;
case clsvgs_PSkillRelaEN.con_AppraiseCount:
return this.appraiseCount;
case clsvgs_PSkillRelaEN.con_StuScore:
return this.stuScore;
case clsvgs_PSkillRelaEN.con_TeaScore:
return this.teaScore;
case clsvgs_PSkillRelaEN.con_CitationCount:
return this.citationCount;
case clsvgs_PSkillRelaEN.con_VersionCount:
return this.versionCount;
case clsvgs_PSkillRelaEN.con_SkillUserId:
return this.skillUserId;
case clsvgs_PSkillRelaEN.con_SkillDate:
return this.skillDate;
case clsvgs_PSkillRelaEN.con_CreateDate:
return this.createDate;
case clsvgs_PSkillRelaEN.con_ShareId:
return this.shareId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_PSkillRela]中不存在!`;
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
case clsvgs_PSkillRelaEN.con_mId:
this.mId = Number(strValue);
break;
case clsvgs_PSkillRelaEN.con_PaperId:
this.paperId = strValue;
break;
case clsvgs_PSkillRelaEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvgs_PSkillRelaEN.con_PaperTypeId:
this.paperTypeId = strValue;
break;
case clsvgs_PSkillRelaEN.con_SectionId:
this.sectionId = strValue;
break;
case clsvgs_PSkillRelaEN.con_SectionName:
this.sectionName = strValue;
break;
case clsvgs_PSkillRelaEN.con_SkillId:
this.skillId = strValue;
break;
case clsvgs_PSkillRelaEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvgs_PSkillRelaEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvgs_PSkillRelaEN.con_Memo:
this.memo = strValue;
break;
case clsvgs_PSkillRelaEN.con_SkillName:
this.skillName = strValue;
break;
case clsvgs_PSkillRelaEN.con_OperationTypeId:
this.operationTypeId = strValue;
break;
case clsvgs_PSkillRelaEN.con_OperationTypeName:
this.operationTypeName = strValue;
break;
case clsvgs_PSkillRelaEN.con_LevelName:
this.levelName = strValue;
break;
case clsvgs_PSkillRelaEN.con_LevelId:
this.levelId = strValue;
break;
case clsvgs_PSkillRelaEN.con_Process:
this.process = strValue;
break;
case clsvgs_PSkillRelaEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvgs_PSkillRelaEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvgs_PSkillRelaEN.con_Score:
this.score = Number(strValue);
break;
case clsvgs_PSkillRelaEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvgs_PSkillRelaEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvgs_PSkillRelaEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvgs_PSkillRelaEN.con_CitationCount:
this.citationCount = Number(strValue);
break;
case clsvgs_PSkillRelaEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvgs_PSkillRelaEN.con_SkillUserId:
this.skillUserId = strValue;
break;
case clsvgs_PSkillRelaEN.con_SkillDate:
this.skillDate = strValue;
break;
case clsvgs_PSkillRelaEN.con_CreateDate:
this.createDate = strValue;
break;
case clsvgs_PSkillRelaEN.con_ShareId:
this.shareId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_PSkillRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public paperId = "";    //论文Id
public paperTitle = "";    //论文标题
public paperTypeId = "";    //论文类型Id
public sectionId = "";    //节Id
public sectionName = "";    //节名
public skillId = "";    //技能Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public skillName = "";    //技能名称
public operationTypeId = "";    //操作类型ID
public operationTypeName = "";    //操作类型名
public levelName = "";    //级别名称
public levelId = "";    //级别Id
public process = "";    //实施过程
public isSubmit = false;    //是否提交
public okCount = 0;    //点赞统计
public score = 0.0;    //评分
public appraiseCount = 0;    //评论数
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public citationCount = 0;    //引用统计
public versionCount = 0;    //版本统计
public skillUserId = "";    //SkillUserId
public skillDate = "";    //SkillDate
public createDate = "";    //建立日期
public shareId = "";    //分享Id


 /**
 * 常量:"mId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

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
 * 常量:"PaperTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperTypeId(): string {return "paperTypeId";}    //论文类型Id

 /**
 * 常量:"SectionId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SectionId(): string {return "sectionId";}    //节Id

 /**
 * 常量:"SectionName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SectionName(): string {return "sectionName";}    //节名

 /**
 * 常量:"SkillId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SkillId(): string {return "skillId";}    //技能Id

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
 * 常量:"SkillName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SkillName(): string {return "skillName";}    //技能名称

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
 * 常量:"LevelName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LevelName(): string {return "levelName";}    //级别名称

 /**
 * 常量:"LevelId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LevelId(): string {return "levelId";}    //级别Id

 /**
 * 常量:"Process"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Process(): string {return "process";}    //实施过程

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
 * 常量:"Score"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"AppraiseCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

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
 * 常量:"SkillUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SkillUserId(): string {return "skillUserId";}    //SkillUserId

 /**
 * 常量:"SkillDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SkillDate(): string {return "skillDate";}    //SkillDate

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