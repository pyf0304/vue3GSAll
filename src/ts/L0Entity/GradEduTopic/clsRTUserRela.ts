
 /**
 * 类名:clsRTUserRela
 * 表名:RTUserRela(01120582)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/22 14:15:09
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 主题用户关系(RTUserRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsRTUserRela 
{
public static _CurrTabName= "RTUserRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["mId", "topicId", "userId", "topicUserRoleId", "colorId", "orderNum", "userBgColor", "idCurrEduCls", "appraiseCount", "okCount", "score", "stuScore", "teaScore", "isSubmit", "lastVisitedDate", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public topicId = "";    //主题Id
public userId = "";    //用户ID
public topicUserRoleId = "";    //主键Id
public colorId = "";    //颜色Id
public orderNum = 0;    //序号
public userBgColor = "";    //用户段落背景
public idCurrEduCls = "";    //教学班流水号
public appraiseCount = 0;    //评论数
public okCount = 0;    //点赞统计
public score = 0.0;    //评分
public stuScore = 0.0;    //学生平均分
public teaScore = 0.0;    //教师评分
public isSubmit = false;    //是否提交
public lastVisitedDate = "";    //修改日期
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注

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
case clsRTUserRela.con_mId:
return this.mId;
case clsRTUserRela.con_TopicId:
return this.topicId;
case clsRTUserRela.con_UserId:
return this.userId;
case clsRTUserRela.con_TopicUserRoleId:
return this.topicUserRoleId;
case clsRTUserRela.con_ColorId:
return this.colorId;
case clsRTUserRela.con_OrderNum:
return this.orderNum;
case clsRTUserRela.con_UserBgColor:
return this.userBgColor;
case clsRTUserRela.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsRTUserRela.con_AppraiseCount:
return this.appraiseCount;
case clsRTUserRela.con_OkCount:
return this.okCount;
case clsRTUserRela.con_Score:
return this.score;
case clsRTUserRela.con_StuScore:
return this.stuScore;
case clsRTUserRela.con_TeaScore:
return this.teaScore;
case clsRTUserRela.con_IsSubmit:
return this.isSubmit;
case clsRTUserRela.con_LastVisitedDate:
return this.lastVisitedDate;
case clsRTUserRela.con_UpdDate:
return this.updDate;
case clsRTUserRela.con_UpdUser:
return this.updUser;
case clsRTUserRela.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RTUserRela]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"TopicId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"TopicUserRoleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TopicUserRoleId(): string {return "topicUserRoleId";}    //主键Id

 /**
 * 常量:"ColorId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ColorId(): string {return "colorId";}    //颜色Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"UserBgColor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserBgColor(): string {return "userBgColor";}    //用户段落背景

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"AppraiseCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AppraiseCount(): string {return "appraiseCount";}    //评论数

 /**
 * 常量:"OkCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"Score"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"StuScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuScore(): string {return "stuScore";}    //学生平均分

 /**
 * 常量:"TeaScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeaScore(): string {return "teaScore";}    //教师评分

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"LastVisitedDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LastVisitedDate(): string {return "lastVisitedDate";}    //修改日期

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}