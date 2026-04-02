
 /**
 * 类名:clsvRTUserRelaEN
 * 表名:vRTUserRela(01120584)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 09:06:32
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
 * 主题用户关系视图(vRTUserRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvRTUserRelaEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vRTUserRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 28;
public static AttributeName = ["mId", "topicId", "userId", "updUserName", "topicName", "topicContent", "topicProposePeople", "userName", "idXzCollege", "collegeName", "idXzMajor", "majorName", "topicUserRoleId", "topicUserRoleName", "orderNum", "colorId", "colorCode", "userBgColor", "idCurrEduCls", "teaScore", "stuScore", "score", "appraiseCount", "okCount", "isSubmit", "updDate", "updUser", "memo"];
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
case clsvRTUserRelaEN.con_mId:
return this.mId;
case clsvRTUserRelaEN.con_TopicId:
return this.topicId;
case clsvRTUserRelaEN.con_UserId:
return this.userId;
case clsvRTUserRelaEN.con_UpdUserName:
return this.updUserName;
case clsvRTUserRelaEN.con_TopicName:
return this.topicName;
case clsvRTUserRelaEN.con_TopicContent:
return this.topicContent;
case clsvRTUserRelaEN.con_TopicProposePeople:
return this.topicProposePeople;
case clsvRTUserRelaEN.con_UserName:
return this.userName;
case clsvRTUserRelaEN.con_IdXzCollege:
return this.idXzCollege;
case clsvRTUserRelaEN.con_CollegeName:
return this.collegeName;
case clsvRTUserRelaEN.con_IdXzMajor:
return this.idXzMajor;
case clsvRTUserRelaEN.con_MajorName:
return this.majorName;
case clsvRTUserRelaEN.con_TopicUserRoleId:
return this.topicUserRoleId;
case clsvRTUserRelaEN.con_TopicUserRoleName:
return this.topicUserRoleName;
case clsvRTUserRelaEN.con_OrderNum:
return this.orderNum;
case clsvRTUserRelaEN.con_ColorId:
return this.colorId;
case clsvRTUserRelaEN.con_ColorCode:
return this.colorCode;
case clsvRTUserRelaEN.con_UserBgColor:
return this.userBgColor;
case clsvRTUserRelaEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvRTUserRelaEN.con_TeaScore:
return this.teaScore;
case clsvRTUserRelaEN.con_StuScore:
return this.stuScore;
case clsvRTUserRelaEN.con_Score:
return this.score;
case clsvRTUserRelaEN.con_AppraiseCount:
return this.appraiseCount;
case clsvRTUserRelaEN.con_OkCount:
return this.okCount;
case clsvRTUserRelaEN.con_IsSubmit:
return this.isSubmit;
case clsvRTUserRelaEN.con_UpdDate:
return this.updDate;
case clsvRTUserRelaEN.con_UpdUser:
return this.updUser;
case clsvRTUserRelaEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTUserRela]中不存在!`;
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
case clsvRTUserRelaEN.con_mId:
this.mId = Number(strValue);
break;
case clsvRTUserRelaEN.con_TopicId:
this.topicId = strValue;
break;
case clsvRTUserRelaEN.con_UserId:
this.userId = strValue;
break;
case clsvRTUserRelaEN.con_UpdUserName:
this.updUserName = strValue;
break;
case clsvRTUserRelaEN.con_TopicName:
this.topicName = strValue;
break;
case clsvRTUserRelaEN.con_TopicContent:
this.topicContent = strValue;
break;
case clsvRTUserRelaEN.con_TopicProposePeople:
this.topicProposePeople = strValue;
break;
case clsvRTUserRelaEN.con_UserName:
this.userName = strValue;
break;
case clsvRTUserRelaEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvRTUserRelaEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvRTUserRelaEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvRTUserRelaEN.con_MajorName:
this.majorName = strValue;
break;
case clsvRTUserRelaEN.con_TopicUserRoleId:
this.topicUserRoleId = strValue;
break;
case clsvRTUserRelaEN.con_TopicUserRoleName:
this.topicUserRoleName = strValue;
break;
case clsvRTUserRelaEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvRTUserRelaEN.con_ColorId:
this.colorId = strValue;
break;
case clsvRTUserRelaEN.con_ColorCode:
this.colorCode = strValue;
break;
case clsvRTUserRelaEN.con_UserBgColor:
this.userBgColor = strValue;
break;
case clsvRTUserRelaEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvRTUserRelaEN.con_TeaScore:
this.teaScore = Number(strValue);
break;
case clsvRTUserRelaEN.con_StuScore:
this.stuScore = Number(strValue);
break;
case clsvRTUserRelaEN.con_Score:
this.score = Number(strValue);
break;
case clsvRTUserRelaEN.con_AppraiseCount:
this.appraiseCount = Number(strValue);
break;
case clsvRTUserRelaEN.con_OkCount:
this.okCount = Number(strValue);
break;
case clsvRTUserRelaEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvRTUserRelaEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvRTUserRelaEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvRTUserRelaEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vRTUserRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public topicId = "";    //主题Id
public userId = "";    //用户ID
public updUserName = "";    //UpdUserName
public topicName = "";    //栏目主题
public topicContent = "";    //主题内容
public topicProposePeople = "";    //主题提出人
public userName = "";    //用户名
public idXzCollege = "";    //学院流水号
public collegeName = "";    //学院名称
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
public topicUserRoleId = "";    //主键Id
public topicUserRoleName = "";    //主题用户角色
public orderNum = 0;    //序号
public colorId = "";    //颜色Id
public colorCode = "";    //颜色码
public userBgColor = "";    //用户段落背景
public idCurrEduCls = "";    //教学班流水号
public teaScore = 0.0;    //教师评分
public stuScore = 0.0;    //学生平均分
public score = 0.0;    //评分
public appraiseCount = 0;    //评论数
public okCount = 0;    //点赞统计
public isSubmit = false;    //是否提交
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"TopicId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"UserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UpdUserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUserName(): string {return "updUserName";}    //UpdUserName

 /**
 * 常量:"TopicName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

 /**
 * 常量:"TopicContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicContent(): string {return "topicContent";}    //主题内容

 /**
 * 常量:"TopicProposePeople"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicProposePeople(): string {return "topicProposePeople";}    //主题提出人

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"IdXzCollege"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"CollegeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"IdXzMajor"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"TopicUserRoleId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicUserRoleId(): string {return "topicUserRoleId";}    //主键Id

 /**
 * 常量:"TopicUserRoleName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicUserRoleName(): string {return "topicUserRoleName";}    //主题用户角色

 /**
 * 常量:"OrderNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"ColorId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ColorId(): string {return "colorId";}    //颜色Id

 /**
 * 常量:"ColorCode"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ColorCode(): string {return "colorCode";}    //颜色码

 /**
 * 常量:"UserBgColor"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserBgColor(): string {return "userBgColor";}    //用户段落背景

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"TeaScore"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TeaScore(): string {return "teaScore";}    //教师评分

 /**
 * 常量:"StuScore"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StuScore(): string {return "stuScore";}    //学生平均分

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
 * 常量:"OkCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

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