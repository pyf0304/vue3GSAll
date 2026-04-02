
 /**
 * 类名:clsvObjectiveAttachmentEN
 * 表名:vObjectiveAttachment(01120618)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:42
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
 * vObjectiveAttachment(vObjectiveAttachment)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvObjectiveAttachmentEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vObjectiveAttachment"; //当前表名,与该类相关的表名
public static _KeyFldName= "ObjectiveAttachmentId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["topicObjectiveId", "objectiveAttachmentId", "objectiveAttachmentName", "filePath", "updDate", "updUserId", "memo", "objectiveName", "objectiveContent", "objectiveType", "objectiveTypeName", "conclusion", "idCurrEduCls"];
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
case clsvObjectiveAttachmentEN.con_TopicObjectiveId:
return this.topicObjectiveId;
case clsvObjectiveAttachmentEN.con_ObjectiveAttachmentId:
return this.objectiveAttachmentId;
case clsvObjectiveAttachmentEN.con_ObjectiveAttachmentName:
return this.objectiveAttachmentName;
case clsvObjectiveAttachmentEN.con_FilePath:
return this.filePath;
case clsvObjectiveAttachmentEN.con_UpdDate:
return this.updDate;
case clsvObjectiveAttachmentEN.con_UpdUserId:
return this.updUserId;
case clsvObjectiveAttachmentEN.con_Memo:
return this.memo;
case clsvObjectiveAttachmentEN.con_ObjectiveName:
return this.objectiveName;
case clsvObjectiveAttachmentEN.con_ObjectiveContent:
return this.objectiveContent;
case clsvObjectiveAttachmentEN.con_ObjectiveType:
return this.objectiveType;
case clsvObjectiveAttachmentEN.con_ObjectiveTypeName:
return this.objectiveTypeName;
case clsvObjectiveAttachmentEN.con_Conclusion:
return this.conclusion;
case clsvObjectiveAttachmentEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vObjectiveAttachment]中不存在!`;
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
case clsvObjectiveAttachmentEN.con_TopicObjectiveId:
this.topicObjectiveId = strValue;
break;
case clsvObjectiveAttachmentEN.con_ObjectiveAttachmentId:
this.objectiveAttachmentId = Number(strValue);
break;
case clsvObjectiveAttachmentEN.con_ObjectiveAttachmentName:
this.objectiveAttachmentName = strValue;
break;
case clsvObjectiveAttachmentEN.con_FilePath:
this.filePath = strValue;
break;
case clsvObjectiveAttachmentEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvObjectiveAttachmentEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvObjectiveAttachmentEN.con_Memo:
this.memo = strValue;
break;
case clsvObjectiveAttachmentEN.con_ObjectiveName:
this.objectiveName = strValue;
break;
case clsvObjectiveAttachmentEN.con_ObjectiveContent:
this.objectiveContent = strValue;
break;
case clsvObjectiveAttachmentEN.con_ObjectiveType:
this.objectiveType = strValue;
break;
case clsvObjectiveAttachmentEN.con_ObjectiveTypeName:
this.objectiveTypeName = strValue;
break;
case clsvObjectiveAttachmentEN.con_Conclusion:
this.conclusion = strValue;
break;
case clsvObjectiveAttachmentEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vObjectiveAttachment]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public topicObjectiveId = "";    //客观Id
public objectiveAttachmentId = 0;    //客观附件Id
public objectiveAttachmentName = "";    //附件名称
public filePath = "";    //文件路径
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注
public objectiveName = "";    //客观名称
public objectiveContent = "";    //客观内容
public objectiveType = "";    //客观类型
public objectiveTypeName = "";    //ObjectiveTypeName
public conclusion = "";    //结论
public idCurrEduCls = "";    //教学班流水号


 /**
 * 常量:"TopicObjectiveId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicObjectiveId(): string {return "topicObjectiveId";}    //客观Id

 /**
 * 常量:"ObjectiveAttachmentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveAttachmentId(): string {return "objectiveAttachmentId";}    //客观附件Id

 /**
 * 常量:"ObjectiveAttachmentName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveAttachmentName(): string {return "objectiveAttachmentName";}    //附件名称

 /**
 * 常量:"FilePath"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_FilePath(): string {return "filePath";}    //文件路径

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"ObjectiveName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveName(): string {return "objectiveName";}    //客观名称

 /**
 * 常量:"ObjectiveContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveContent(): string {return "objectiveContent";}    //客观内容

 /**
 * 常量:"ObjectiveType"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveType(): string {return "objectiveType";}    //客观类型

 /**
 * 常量:"ObjectiveTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ObjectiveTypeName(): string {return "objectiveTypeName";}    //ObjectiveTypeName

 /**
 * 常量:"Conclusion"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Conclusion(): string {return "conclusion";}    //结论

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

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