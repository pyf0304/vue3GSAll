
 /**
 * 类名:clsvSysCommentEN
 * 表名:vSysComment(01120624)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:16
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
 * v系统评论表(vSysComment)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvSysCommentEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vSysComment"; //当前表名,与该类相关的表名
public static _KeyFldName= "CommentId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["commentId", "comment", "score", "commentTypeId", "scoreType", "parentId", "tableKey", "updUser", "updDate", "memo", "commentTypeName", "commentTable", "commentTableId", "okCount", "pubParentId", "idCurrEduCls", "userId"];
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
case clsvSysCommentEN.con_CommentId:
return this.commentId;
case clsvSysCommentEN.con_Comment:
return this.comment;
case clsvSysCommentEN.con_Score:
return this.score;
case clsvSysCommentEN.con_CommentTypeId:
return this.commentTypeId;
case clsvSysCommentEN.con_ScoreType:
return this.scoreType;
case clsvSysCommentEN.con_ParentId:
return this.parentId;
case clsvSysCommentEN.con_TableKey:
return this.tableKey;
case clsvSysCommentEN.con_UpdUser:
return this.updUser;
case clsvSysCommentEN.con_UpdDate:
return this.updDate;
case clsvSysCommentEN.con_Memo:
return this.memo;
case clsvSysCommentEN.con_CommentTypeName:
return this.commentTypeName;
case clsvSysCommentEN.con_CommentTable:
return this.commentTable;
case clsvSysCommentEN.con_CommentTableId:
return this.commentTableId;
case clsvSysCommentEN.con_OkCount:
return this.okCount;
case clsvSysCommentEN.con_PubParentId:
return this.pubParentId;
case clsvSysCommentEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvSysCommentEN.con_UserId:
return this.userId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysComment]中不存在!`;
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
case clsvSysCommentEN.con_CommentId:
this.commentId = strValue;
break;
case clsvSysCommentEN.con_Comment:
this.comment = strValue;
break;
case clsvSysCommentEN.con_Score:
this.score = Number(strValue);
break;
case clsvSysCommentEN.con_CommentTypeId:
this.commentTypeId = strValue;
break;
case clsvSysCommentEN.con_ScoreType:
this.scoreType = strValue;
break;
case clsvSysCommentEN.con_ParentId:
this.parentId = strValue;
break;
case clsvSysCommentEN.con_TableKey:
this.tableKey = strValue;
break;
case clsvSysCommentEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvSysCommentEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvSysCommentEN.con_Memo:
this.memo = strValue;
break;
case clsvSysCommentEN.con_CommentTypeName:
this.commentTypeName = strValue;
break;
case clsvSysCommentEN.con_CommentTable:
this.commentTable = strValue;
break;
case clsvSysCommentEN.con_CommentTableId:
this.commentTableId = strValue;
break;
case clsvSysCommentEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvSysCommentEN.con_PubParentId:
this.pubParentId = strValue;
break;
case clsvSysCommentEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvSysCommentEN.con_UserId:
this.userId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysComment]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public commentId = "";    //评论Id
public comment = "";    //评论
public score = 0.0;    //评分
public commentTypeId = "";    //评论类型Id
public scoreType = "";    //评分类型
public parentId = "";    //父Id
public tableKey = "";    //表主键
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注
public commentTypeName = "";    //评论类型名
public commentTable = "";    //评论表
public commentTableId = "";    //评论表Id
public okCount = 0;    //点赞统计
public pubParentId = "";    //公共父Id
public idCurrEduCls = "";    //教学班流水号
public userId = "";    //用户ID


 /**
 * 常量:"CommentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentId(): string {return "commentId";}    //评论Id

 /**
 * 常量:"Comment"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Comment(): string {return "comment";}    //评论

 /**
 * 常量:"Score"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"CommentTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentTypeId(): string {return "commentTypeId";}    //评论类型Id

 /**
 * 常量:"ScoreType"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ScoreType(): string {return "scoreType";}    //评分类型

 /**
 * 常量:"ParentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父Id

 /**
 * 常量:"TableKey"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TableKey(): string {return "tableKey";}    //表主键

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
 * 常量:"CommentTableId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CommentTableId(): string {return "commentTableId";}    //评论表Id

 /**
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"PubParentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PubParentId(): string {return "pubParentId";}    //公共父Id

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"UserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

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