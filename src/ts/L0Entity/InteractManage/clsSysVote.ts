
 /**
 * 类名:clsSysVote
 * 表名:SysVote(01120639)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/22 17:22:56
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 系统点赞表(SysVote)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSysVote 
{
public static _CurrTabName= "SysVote"; //当前表名,与该类相关的表名
public static _KeyFldName= "VoteId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["voteId", "tableKey", "pubParentId", "voteTypeId", "likedUserId", "updUser", "updDate", "memo", "idCurrEduCls"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public voteId = 0;    //点赞Id
public tableKey = "";    //表主键
public pubParentId = "";    //公共父Id
public voteTypeId = "";    //点赞类型Id
public likedUserId = "";    //被点赞用户Id
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注
public idCurrEduCls = "";    //教学班流水号

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsSysVote.con_VoteId:
return this.voteId;
case clsSysVote.con_TableKey:
return this.tableKey;
case clsSysVote.con_PubParentId:
return this.pubParentId;
case clsSysVote.con_VoteTypeId:
return this.voteTypeId;
case clsSysVote.con_LikedUserId:
return this.likedUserId;
case clsSysVote.con_UpdUser:
return this.updUser;
case clsSysVote.con_UpdDate:
return this.updDate;
case clsSysVote.con_Memo:
return this.memo;
case clsSysVote.con_IdCurrEduCls:
return this.idCurrEduCls;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysVote]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"VoteId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_VoteId(): string {return "voteId";}    //点赞Id

 /**
 * 常量:"TableKey"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TableKey(): string {return "tableKey";}    //表主键

 /**
 * 常量:"PubParentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PubParentId(): string {return "pubParentId";}    //公共父Id

 /**
 * 常量:"VoteTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_VoteTypeId(): string {return "voteTypeId";}    //点赞类型Id

 /**
 * 常量:"LikedUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LikedUserId(): string {return "likedUserId";}    //被点赞用户Id

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号
}