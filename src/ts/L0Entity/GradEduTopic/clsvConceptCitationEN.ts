
 /**
 * 类名:clsvConceptCitationEN
 * 表名:vConceptCitation(01120611)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:43
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
 * vConceptCitation(vConceptCitation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvConceptCitationEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vConceptCitation"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["conceptContent", "conceptId", "conceptName", "updDate", "mId", "paperId", "paperTitle", "paperContent", "userName", "updUserId", "topicId", "topicName"];
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
case clsvConceptCitationEN.con_ConceptContent:
return this.conceptContent;
case clsvConceptCitationEN.con_ConceptId:
return this.conceptId;
case clsvConceptCitationEN.con_ConceptName:
return this.conceptName;
case clsvConceptCitationEN.con_UpdDate:
return this.updDate;
case clsvConceptCitationEN.con_mId:
return this.mId;
case clsvConceptCitationEN.con_PaperId:
return this.paperId;
case clsvConceptCitationEN.con_PaperTitle:
return this.paperTitle;
case clsvConceptCitationEN.con_PaperContent:
return this.paperContent;
case clsvConceptCitationEN.con_UserName:
return this.userName;
case clsvConceptCitationEN.con_UpdUserId:
return this.updUserId;
case clsvConceptCitationEN.con_TopicId:
return this.topicId;
case clsvConceptCitationEN.con_TopicName:
return this.topicName;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vConceptCitation]中不存在!`;
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
case clsvConceptCitationEN.con_ConceptContent:
this.conceptContent = strValue;
break;
case clsvConceptCitationEN.con_ConceptId:
this.conceptId = strValue;
break;
case clsvConceptCitationEN.con_ConceptName:
this.conceptName = strValue;
break;
case clsvConceptCitationEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvConceptCitationEN.con_mId:
this.mId = Number(strValue);
break;
case clsvConceptCitationEN.con_PaperId:
this.paperId = strValue;
break;
case clsvConceptCitationEN.con_PaperTitle:
this.paperTitle = strValue;
break;
case clsvConceptCitationEN.con_PaperContent:
this.paperContent = strValue;
break;
case clsvConceptCitationEN.con_UserName:
this.userName = strValue;
break;
case clsvConceptCitationEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvConceptCitationEN.con_TopicId:
this.topicId = strValue;
break;
case clsvConceptCitationEN.con_TopicName:
this.topicName = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vConceptCitation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public conceptContent = "";    //概念内容
public conceptId = "";    //概念Id
public conceptName = "";    //概念名称
public updDate = "";    //修改日期
public mId = 0;    //mId
public paperId = "";    //论文Id
public paperTitle = "";    //论文标题
public paperContent = "";    //主题内容
public userName = "";    //用户名
public updUserId = "";    //修改用户Id
public topicId = "";    //主题Id
public topicName = "";    //栏目主题


 /**
 * 常量:"ConceptContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ConceptContent(): string {return "conceptContent";}    //概念内容

 /**
 * 常量:"ConceptId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ConceptId(): string {return "conceptId";}    //概念Id

 /**
 * 常量:"ConceptName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ConceptName(): string {return "conceptName";}    //概念名称

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

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
 * 常量:"PaperContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperContent(): string {return "paperContent";}    //主题内容

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"UpdUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

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