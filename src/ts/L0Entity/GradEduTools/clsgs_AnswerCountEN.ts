
 /**
 * 类名:clsgs_AnswerCountEN
 * 表名:gs_AnswerCount(01120767)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:08
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
 * 问题讨论回答统计(gs_AnswerCount)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_AnswerCountEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_AnswerCount"; //当前表名,与该类相关的表名
public static _KeyFldName= "AnswerCountId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["memo", "answerCountId", "dataUser", "dataAddDate", "month", "week", "weekTimeRange", "isRecommend", "answerId", "answerTypeId", "questionsId", "topicId", "paperId", "idCurrEduCls", "answerContent", "score", "scoreType", "updUser", "updDate", "userName"];
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
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrMemo = "";    //备注
private mstrAnswerCountId = "";    //AnswerCountId
private mstrDataUser = "";    //数据用户
private mstrDataAddDate = "";    //数据添加日期
private mintMonth = 0;    //月
private mintWeek = 0;    //周
private mstrWeekTimeRange = "";    //WeekTimeRange
private mbolIsRecommend = false;    //是否推荐
private mstrAnswerId = "";    //回答Id
private mstrAnswerTypeId = "";    //答案类型ID
private mstrQuestionsId = "";    //提问Id
private mstrTopicId = "";    //主题Id
private mstrPaperId = "";    //论文Id
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrAnswerContent = "";    //答案内容
private mfltScore = 0.0;    //评分
private mstrScoreType = "";    //评分类型
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrUserName = "";    //用户名

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * AnswerCountId(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerCountId (value: string)
{
if (value  != undefined)
{
 this.answerCountId = value;
    this.hmProperty["answerCountId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据用户(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataUser (value: string)
{
if (value  != undefined)
{
 this.dataUser = value;
    this.hmProperty["dataUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据添加日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataAddDate (value: string)
{
if (value  != undefined)
{
 this.dataAddDate = value;
    this.hmProperty["dataAddDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 月(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMonth (value: number)
{
if (value  != undefined)
{
 this.month = value;
    this.hmProperty["month"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 周(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeek (value: number)
{
if (value  != undefined)
{
 this.week = value;
    this.hmProperty["week"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * WeekTimeRange(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeekTimeRange (value: string)
{
if (value  != undefined)
{
 this.weekTimeRange = value;
    this.hmProperty["weekTimeRange"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否推荐(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRecommend (value: boolean)
{
if (value  != undefined)
{
 this.isRecommend = value;
    this.hmProperty["isRecommend"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答Id(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerId (value: string)
{
if (value  != undefined)
{
 this.answerId = value;
    this.hmProperty["answerId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 答案类型ID(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerTypeId (value: string)
{
if (value  != undefined)
{
 this.answerTypeId = value;
    this.hmProperty["answerTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 提问Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionsId (value: string)
{
if (value  != undefined)
{
 this.questionsId = value;
    this.hmProperty["questionsId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 主题Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTopicId (value: string)
{
if (value  != undefined)
{
 this.topicId = value;
    this.hmProperty["topicId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 论文Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperId (value: string)
{
if (value  != undefined)
{
 this.paperId = value;
    this.hmProperty["paperId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 答案内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerContent (value: string)
{
if (value  != undefined)
{
 this.answerContent = value;
    this.hmProperty["answerContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评分(说明:;字段类型:float;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScore (value: number)
{
if (value  != undefined)
{
 this.score = value;
    this.hmProperty["score"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评分类型(说明:;字段类型:char;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScoreType (value: string)
{
if (value  != undefined)
{
 this.scoreType = value;
    this.hmProperty["scoreType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserName (value: string)
{
if (value  != undefined)
{
 this.userName = value;
    this.hmProperty["userName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
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
case clsgs_AnswerCountEN.con_Memo:
return this.memo;
case clsgs_AnswerCountEN.con_AnswerCountId:
return this.answerCountId;
case clsgs_AnswerCountEN.con_DataUser:
return this.dataUser;
case clsgs_AnswerCountEN.con_DataAddDate:
return this.dataAddDate;
case clsgs_AnswerCountEN.con_Month:
return this.month;
case clsgs_AnswerCountEN.con_Week:
return this.week;
case clsgs_AnswerCountEN.con_WeekTimeRange:
return this.weekTimeRange;
case clsgs_AnswerCountEN.con_IsRecommend:
return this.isRecommend;
case clsgs_AnswerCountEN.con_AnswerId:
return this.answerId;
case clsgs_AnswerCountEN.con_AnswerTypeId:
return this.answerTypeId;
case clsgs_AnswerCountEN.con_QuestionsId:
return this.questionsId;
case clsgs_AnswerCountEN.con_TopicId:
return this.topicId;
case clsgs_AnswerCountEN.con_PaperId:
return this.paperId;
case clsgs_AnswerCountEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsgs_AnswerCountEN.con_AnswerContent:
return this.answerContent;
case clsgs_AnswerCountEN.con_Score:
return this.score;
case clsgs_AnswerCountEN.con_ScoreType:
return this.scoreType;
case clsgs_AnswerCountEN.con_UpdUser:
return this.updUser;
case clsgs_AnswerCountEN.con_UpdDate:
return this.updDate;
case clsgs_AnswerCountEN.con_UserName:
return this.userName;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_AnswerCount]中不存在!`;
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
case clsgs_AnswerCountEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsgs_AnswerCountEN.con_AnswerCountId:
this.answerCountId = strValue;
    this.hmProperty["answerCountId"] = true;
break;
case clsgs_AnswerCountEN.con_DataUser:
this.dataUser = strValue;
    this.hmProperty["dataUser"] = true;
break;
case clsgs_AnswerCountEN.con_DataAddDate:
this.dataAddDate = strValue;
    this.hmProperty["dataAddDate"] = true;
break;
case clsgs_AnswerCountEN.con_Month:
this.month = Number(strValue);
    this.hmProperty["month"] = true;
break;
case clsgs_AnswerCountEN.con_Week:
this.week = Number(strValue);
    this.hmProperty["week"] = true;
break;
case clsgs_AnswerCountEN.con_WeekTimeRange:
this.weekTimeRange = strValue;
    this.hmProperty["weekTimeRange"] = true;
break;
case clsgs_AnswerCountEN.con_IsRecommend:
this.isRecommend = Boolean(strValue);
    this.hmProperty["isRecommend"] = true;
break;
case clsgs_AnswerCountEN.con_AnswerId:
this.answerId = strValue;
    this.hmProperty["answerId"] = true;
break;
case clsgs_AnswerCountEN.con_AnswerTypeId:
this.answerTypeId = strValue;
    this.hmProperty["answerTypeId"] = true;
break;
case clsgs_AnswerCountEN.con_QuestionsId:
this.questionsId = strValue;
    this.hmProperty["questionsId"] = true;
break;
case clsgs_AnswerCountEN.con_TopicId:
this.topicId = strValue;
    this.hmProperty["topicId"] = true;
break;
case clsgs_AnswerCountEN.con_PaperId:
this.paperId = strValue;
    this.hmProperty["paperId"] = true;
break;
case clsgs_AnswerCountEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsgs_AnswerCountEN.con_AnswerContent:
this.answerContent = strValue;
    this.hmProperty["answerContent"] = true;
break;
case clsgs_AnswerCountEN.con_Score:
this.score = Number(strValue);
    this.hmProperty["score"] = true;
break;
case clsgs_AnswerCountEN.con_ScoreType:
this.scoreType = strValue;
    this.hmProperty["scoreType"] = true;
break;
case clsgs_AnswerCountEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsgs_AnswerCountEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsgs_AnswerCountEN.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_AnswerCount]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public memo = "";    //备注
public answerCountId = "";    //AnswerCountId
public dataUser = "";    //数据用户
public dataAddDate = "";    //数据添加日期
public month = 0;    //月
public week = 0;    //周
public weekTimeRange = "";    //WeekTimeRange
public isRecommend = false;    //是否推荐
public answerId = "";    //回答Id
public answerTypeId = "";    //答案类型ID
public questionsId = "";    //提问Id
public topicId = "";    //主题Id
public paperId = "";    //论文Id
public idCurrEduCls = "";    //教学班流水号
public answerContent = "";    //答案内容
public score = 0.0;    //评分
public scoreType = "";    //评分类型
public updUser = "";    //修改人
public updDate = "";    //修改日期
public userName = "";    //用户名


 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"AnswerCountId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AnswerCountId(): string {return "answerCountId";}    //AnswerCountId

 /**
 * 常量:"DataUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DataUser(): string {return "dataUser";}    //数据用户

 /**
 * 常量:"DataAddDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_DataAddDate(): string {return "dataAddDate";}    //数据添加日期

 /**
 * 常量:"Month"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Month(): string {return "month";}    //月

 /**
 * 常量:"Week"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Week(): string {return "week";}    //周

 /**
 * 常量:"WeekTimeRange"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_WeekTimeRange(): string {return "weekTimeRange";}    //WeekTimeRange

 /**
 * 常量:"IsRecommend"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

 /**
 * 常量:"AnswerId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AnswerId(): string {return "answerId";}    //回答Id

 /**
 * 常量:"AnswerTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AnswerTypeId(): string {return "answerTypeId";}    //答案类型ID

 /**
 * 常量:"QuestionsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_QuestionsId(): string {return "questionsId";}    //提问Id

 /**
 * 常量:"TopicId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"PaperId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"AnswerContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AnswerContent(): string {return "answerContent";}    //答案内容

 /**
 * 常量:"Score"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"ScoreType"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ScoreType(): string {return "scoreType";}    //评分类型

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