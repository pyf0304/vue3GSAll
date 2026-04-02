
 /**
 * 类名:clsvgs_TobeStudiedProblemEN
 * 表名:vgs_TobeStudiedProblem(01120774)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:30
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
 * 待研究问题视图(vgs_TobeStudiedProblem)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_TobeStudiedProblemEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_TobeStudiedProblem"; //当前表名,与该类相关的表名
public static _KeyFldName= "ProblemId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["problemId", "problemTitle", "problemContent", "topicId", "topicName", "idCurrEduCls", "isSubmit", "problemDate", "updDate", "updUser", "year", "month", "versionCount", "participant", "memo"];
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
case clsvgs_TobeStudiedProblemEN.con_ProblemId:
return this.problemId;
case clsvgs_TobeStudiedProblemEN.con_ProblemTitle:
return this.problemTitle;
case clsvgs_TobeStudiedProblemEN.con_ProblemContent:
return this.problemContent;
case clsvgs_TobeStudiedProblemEN.con_TopicId:
return this.topicId;
case clsvgs_TobeStudiedProblemEN.con_TopicName:
return this.topicName;
case clsvgs_TobeStudiedProblemEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_TobeStudiedProblemEN.con_IsSubmit:
return this.isSubmit;
case clsvgs_TobeStudiedProblemEN.con_ProblemDate:
return this.problemDate;
case clsvgs_TobeStudiedProblemEN.con_UpdDate:
return this.updDate;
case clsvgs_TobeStudiedProblemEN.con_UpdUser:
return this.updUser;
case clsvgs_TobeStudiedProblemEN.con_Year:
return this.year;
case clsvgs_TobeStudiedProblemEN.con_Month:
return this.month;
case clsvgs_TobeStudiedProblemEN.con_VersionCount:
return this.versionCount;
case clsvgs_TobeStudiedProblemEN.con_Participant:
return this.participant;
case clsvgs_TobeStudiedProblemEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_TobeStudiedProblem]中不存在!`;
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
case clsvgs_TobeStudiedProblemEN.con_ProblemId:
this.problemId = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_ProblemTitle:
this.problemTitle = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_ProblemContent:
this.problemContent = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_TopicId:
this.topicId = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_TopicName:
this.topicName = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
break;
case clsvgs_TobeStudiedProblemEN.con_ProblemDate:
this.problemDate = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_Year:
this.year = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_Month:
this.month = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_VersionCount:
this.versionCount = Number(strValue);
break;
case clsvgs_TobeStudiedProblemEN.con_Participant:
this.participant = strValue;
break;
case clsvgs_TobeStudiedProblemEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_TobeStudiedProblem]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public problemId = "";    //问题Id
public problemTitle = "";    //问题标题
public problemContent = "";    //问题内容
public topicId = "";    //主题Id
public topicName = "";    //栏目主题
public idCurrEduCls = "";    //教学班流水号
public isSubmit = false;    //是否提交
public problemDate = "";    //问题日期
public updDate = "";    //修改日期
public updUser = "";    //修改人
public year = "";    //年
public month = "";    //月
public versionCount = 0;    //版本统计
public participant = "";    //参与者
public memo = "";    //备注


 /**
 * 常量:"ProblemId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProblemId(): string {return "problemId";}    //问题Id

 /**
 * 常量:"ProblemTitle"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProblemTitle(): string {return "problemTitle";}    //问题标题

 /**
 * 常量:"ProblemContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProblemContent(): string {return "problemContent";}    //问题内容

 /**
 * 常量:"TopicId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"TopicName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicName(): string {return "topicName";}    //栏目主题

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"ProblemDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProblemDate(): string {return "problemDate";}    //问题日期

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
 * 常量:"Year"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Year(): string {return "year";}    //年

 /**
 * 常量:"Month"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Month(): string {return "month";}    //月

 /**
 * 常量:"VersionCount"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VersionCount(): string {return "versionCount";}    //版本统计

 /**
 * 常量:"Participant"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Participant(): string {return "participant";}    //参与者

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