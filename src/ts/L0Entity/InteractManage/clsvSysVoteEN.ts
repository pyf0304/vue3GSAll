
 /**
 * 类名:clsvSysVoteEN
 * 表名:vSysVote(01120633)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:32
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
 * v系统点赞视图(vSysVote)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvSysVoteEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vSysVote"; //当前表名,与该类相关的表名
public static _KeyFldName= "VoteId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["voteId", "tableKey", "pubParentId", "voteTypeId", "voteTypeName", "updUser", "voteTable", "updDate", "voteTableId", "memo", "idCurrEduCls", "likedUserId"];
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
case clsvSysVoteEN.con_VoteId:
return this.voteId;
case clsvSysVoteEN.con_TableKey:
return this.tableKey;
case clsvSysVoteEN.con_PubParentId:
return this.pubParentId;
case clsvSysVoteEN.con_VoteTypeId:
return this.voteTypeId;
case clsvSysVoteEN.con_VoteTypeName:
return this.voteTypeName;
case clsvSysVoteEN.con_UpdUser:
return this.updUser;
case clsvSysVoteEN.con_VoteTable:
return this.voteTable;
case clsvSysVoteEN.con_UpdDate:
return this.updDate;
case clsvSysVoteEN.con_VoteTableId:
return this.voteTableId;
case clsvSysVoteEN.con_Memo:
return this.memo;
case clsvSysVoteEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvSysVoteEN.con_LikedUserId:
return this.likedUserId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysVote]中不存在!`;
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
case clsvSysVoteEN.con_VoteId:
this.voteId = Number(strValue);
break;
case clsvSysVoteEN.con_TableKey:
this.tableKey = strValue;
break;
case clsvSysVoteEN.con_PubParentId:
this.pubParentId = strValue;
break;
case clsvSysVoteEN.con_VoteTypeId:
this.voteTypeId = strValue;
break;
case clsvSysVoteEN.con_VoteTypeName:
this.voteTypeName = strValue;
break;
case clsvSysVoteEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvSysVoteEN.con_VoteTable:
this.voteTable = strValue;
break;
case clsvSysVoteEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvSysVoteEN.con_VoteTableId:
this.voteTableId = strValue;
break;
case clsvSysVoteEN.con_Memo:
this.memo = strValue;
break;
case clsvSysVoteEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvSysVoteEN.con_LikedUserId:
this.likedUserId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysVote]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public voteId = 0;    //点赞Id
public tableKey = "";    //表主键
public pubParentId = "";    //公共父Id
public voteTypeId = "";    //点赞类型Id
public voteTypeName = "";    //点赞类型名称
public updUser = "";    //修改人
public voteTable = "";    //点赞表
public updDate = "";    //修改日期
public voteTableId = "";    //点赞表Id
public memo = "";    //备注
public idCurrEduCls = "";    //教学班流水号
public likedUserId = "";    //被点赞用户Id


 /**
 * 常量:"VoteId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteId(): string {return "voteId";}    //点赞Id

 /**
 * 常量:"TableKey"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TableKey(): string {return "tableKey";}    //表主键

 /**
 * 常量:"PubParentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PubParentId(): string {return "pubParentId";}    //公共父Id

 /**
 * 常量:"VoteTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteTypeId(): string {return "voteTypeId";}    //点赞类型Id

 /**
 * 常量:"VoteTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteTypeName(): string {return "voteTypeName";}    //点赞类型名称

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"VoteTable"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteTable(): string {return "voteTable";}    //点赞表

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"VoteTableId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VoteTableId(): string {return "voteTableId";}    //点赞表Id

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"LikedUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_LikedUserId(): string {return "likedUserId";}    //被点赞用户Id

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