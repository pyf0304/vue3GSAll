
 /**
 * 类名:clsTopicObjectiveVerEN
 * 表名:TopicObjectiveVer(01120648)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:28
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
 * 主题客观版本(TopicObjectiveVer)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsTopicObjectiveVerEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "TopicObjectiveVer"; //当前表名,与该类相关的表名
public static _KeyFldName= "TopicObjectiveVId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["topicObjectiveVId", "topicObjectiveId", "objectiveName", "objectiveContent", "objectiveType", "conclusion", "sourceId", "updDate", "updUser", "idCurrEduCls", "pdfContent", "pdfPageNum", "memo"];
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
private mlngTopicObjectiveVId = 0;    //主题客观版本Id
private mstrTopicObjectiveId = "";    //客观Id
private mstrObjectiveName = "";    //客观名称
private mstrObjectiveContent = "";    //客观内容
private mstrObjectiveType = "";    //客观类型
private mstrConclusion = "";    //结论
private mstrSourceId = "";    //来源Id
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrPdfContent = "";    //Pdf内容
private mintPdfPageNum = 0;    //Pdf页码
private mstrMemo = "";    //备注

/**
 * 主题客观版本Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTopicObjectiveVId (value: number)
{
if (value  != undefined)
{
 this.topicObjectiveVId = value;
    this.hmProperty["topicObjectiveVId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 客观Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTopicObjectiveId (value: string)
{
if (value  != undefined)
{
 this.topicObjectiveId = value;
    this.hmProperty["topicObjectiveId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 客观名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetObjectiveName (value: string)
{
if (value  != undefined)
{
 this.objectiveName = value;
    this.hmProperty["objectiveName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 客观内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetObjectiveContent (value: string)
{
if (value  != undefined)
{
 this.objectiveContent = value;
    this.hmProperty["objectiveContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 客观类型(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetObjectiveType (value: string)
{
if (value  != undefined)
{
 this.objectiveType = value;
    this.hmProperty["objectiveType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 结论(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetConclusion (value: string)
{
if (value  != undefined)
{
 this.conclusion = value;
    this.hmProperty["conclusion"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 来源Id(说明:;字段类型:char;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSourceId (value: string)
{
if (value  != undefined)
{
 this.sourceId = value;
    this.hmProperty["sourceId"] = true;
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
 * Pdf内容(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfContent (value: string)
{
if (value  != undefined)
{
 this.pdfContent = value;
    this.hmProperty["pdfContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Pdf页码(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfPageNum (value: number)
{
if (value  != undefined)
{
 this.pdfPageNum = value;
    this.hmProperty["pdfPageNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
case clsTopicObjectiveVerEN.con_TopicObjectiveVId:
return this.topicObjectiveVId;
case clsTopicObjectiveVerEN.con_TopicObjectiveId:
return this.topicObjectiveId;
case clsTopicObjectiveVerEN.con_ObjectiveName:
return this.objectiveName;
case clsTopicObjectiveVerEN.con_ObjectiveContent:
return this.objectiveContent;
case clsTopicObjectiveVerEN.con_ObjectiveType:
return this.objectiveType;
case clsTopicObjectiveVerEN.con_Conclusion:
return this.conclusion;
case clsTopicObjectiveVerEN.con_SourceId:
return this.sourceId;
case clsTopicObjectiveVerEN.con_UpdDate:
return this.updDate;
case clsTopicObjectiveVerEN.con_UpdUser:
return this.updUser;
case clsTopicObjectiveVerEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsTopicObjectiveVerEN.con_PdfContent:
return this.pdfContent;
case clsTopicObjectiveVerEN.con_PdfPageNum:
return this.pdfPageNum;
case clsTopicObjectiveVerEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[TopicObjectiveVer]中不存在!`;
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
case clsTopicObjectiveVerEN.con_TopicObjectiveVId:
this.topicObjectiveVId = Number(strValue);
    this.hmProperty["topicObjectiveVId"] = true;
break;
case clsTopicObjectiveVerEN.con_TopicObjectiveId:
this.topicObjectiveId = strValue;
    this.hmProperty["topicObjectiveId"] = true;
break;
case clsTopicObjectiveVerEN.con_ObjectiveName:
this.objectiveName = strValue;
    this.hmProperty["objectiveName"] = true;
break;
case clsTopicObjectiveVerEN.con_ObjectiveContent:
this.objectiveContent = strValue;
    this.hmProperty["objectiveContent"] = true;
break;
case clsTopicObjectiveVerEN.con_ObjectiveType:
this.objectiveType = strValue;
    this.hmProperty["objectiveType"] = true;
break;
case clsTopicObjectiveVerEN.con_Conclusion:
this.conclusion = strValue;
    this.hmProperty["conclusion"] = true;
break;
case clsTopicObjectiveVerEN.con_SourceId:
this.sourceId = strValue;
    this.hmProperty["sourceId"] = true;
break;
case clsTopicObjectiveVerEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsTopicObjectiveVerEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsTopicObjectiveVerEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsTopicObjectiveVerEN.con_PdfContent:
this.pdfContent = strValue;
    this.hmProperty["pdfContent"] = true;
break;
case clsTopicObjectiveVerEN.con_PdfPageNum:
this.pdfPageNum = Number(strValue);
    this.hmProperty["pdfPageNum"] = true;
break;
case clsTopicObjectiveVerEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[TopicObjectiveVer]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public topicObjectiveVId = 0;    //主题客观版本Id
public topicObjectiveId = "";    //客观Id
public objectiveName = "";    //客观名称
public objectiveContent = "";    //客观内容
public objectiveType = "";    //客观类型
public conclusion = "";    //结论
public sourceId = "";    //来源Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public idCurrEduCls = "";    //教学班流水号
public pdfContent = "";    //Pdf内容
public pdfPageNum = 0;    //Pdf页码
public memo = "";    //备注


 /**
 * 常量:"TopicObjectiveVId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicObjectiveVId(): string {return "topicObjectiveVId";}    //主题客观版本Id

 /**
 * 常量:"TopicObjectiveId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TopicObjectiveId(): string {return "topicObjectiveId";}    //客观Id

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
 * 常量:"Conclusion"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Conclusion(): string {return "conclusion";}    //结论

 /**
 * 常量:"SourceId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SourceId(): string {return "sourceId";}    //来源Id

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
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"PdfContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfContent(): string {return "pdfContent";}    //Pdf内容

 /**
 * 常量:"PdfPageNum"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PdfPageNum(): string {return "pdfPageNum";}    //Pdf页码

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