
 /**
 * 类名:clsObjectiveAttachmentEN
 * 表名:ObjectiveAttachment(01120614)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:19
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
 * 客观附件表(ObjectiveAttachment)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsObjectiveAttachmentEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ObjectiveAttachment"; //当前表名,与该类相关的表名
public static _KeyFldName= "ObjectiveAttachmentId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["topicObjectiveId", "objectiveAttachmentId", "objectiveAttachmentName", "filePath", "updDate", "updUserId", "memo", "idCurrEduCls"];
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
private mstrTopicObjectiveId = "";    //客观Id
private mlngObjectiveAttachmentId = 0;    //客观附件Id
private mstrObjectiveAttachmentName = "";    //附件名称
private mstrFilePath = "";    //文件路径
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注
private mstrIdCurrEduCls = "";    //教学班流水号

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
 * 客观附件Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetObjectiveAttachmentId (value: number)
{
if (value  != undefined)
{
 this.objectiveAttachmentId = value;
    this.hmProperty["objectiveAttachmentId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 附件名称(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetObjectiveAttachmentName (value: string)
{
if (value  != undefined)
{
 this.objectiveAttachmentName = value;
    this.hmProperty["objectiveAttachmentName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件路径(说明:;字段类型:varchar;字段长度:500;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFilePath (value: string)
{
if (value  != undefined)
{
 this.filePath = value;
    this.hmProperty["filePath"] = true;
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
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
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
case clsObjectiveAttachmentEN.con_TopicObjectiveId:
return this.topicObjectiveId;
case clsObjectiveAttachmentEN.con_ObjectiveAttachmentId:
return this.objectiveAttachmentId;
case clsObjectiveAttachmentEN.con_ObjectiveAttachmentName:
return this.objectiveAttachmentName;
case clsObjectiveAttachmentEN.con_FilePath:
return this.filePath;
case clsObjectiveAttachmentEN.con_UpdDate:
return this.updDate;
case clsObjectiveAttachmentEN.con_UpdUserId:
return this.updUserId;
case clsObjectiveAttachmentEN.con_Memo:
return this.memo;
case clsObjectiveAttachmentEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ObjectiveAttachment]中不存在!`;
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
case clsObjectiveAttachmentEN.con_TopicObjectiveId:
this.topicObjectiveId = strValue;
    this.hmProperty["topicObjectiveId"] = true;
break;
case clsObjectiveAttachmentEN.con_ObjectiveAttachmentId:
this.objectiveAttachmentId = Number(strValue);
    this.hmProperty["objectiveAttachmentId"] = true;
break;
case clsObjectiveAttachmentEN.con_ObjectiveAttachmentName:
this.objectiveAttachmentName = strValue;
    this.hmProperty["objectiveAttachmentName"] = true;
break;
case clsObjectiveAttachmentEN.con_FilePath:
this.filePath = strValue;
    this.hmProperty["filePath"] = true;
break;
case clsObjectiveAttachmentEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsObjectiveAttachmentEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsObjectiveAttachmentEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsObjectiveAttachmentEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ObjectiveAttachment]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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