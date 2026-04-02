
 /**
 * 类名:clsConceptAttachmentEN
 * 表名:ConceptAttachment(01120603)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:22
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
 * 概念附件(ConceptAttachment)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsConceptAttachmentEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ConceptAttachment"; //当前表名,与该类相关的表名
public static _KeyFldName= "ConceptAttachmentId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["conceptAttachmentId", "conceptAttachmentName", "conceptId", "filePath", "updDate", "updUserId", "memo", "idCurrEduCls"];
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
private mlngConceptAttachmentId = 0;    //概念附件Id
private mstrConceptAttachmentName = "";    //附件名称
private mstrConceptId = "";    //概念Id
private mstrFilePath = "";    //文件路径
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注
private mstrIdCurrEduCls = "";    //教学班流水号

/**
 * 概念附件Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetConceptAttachmentId (value: number)
{
if (value  != undefined)
{
 this.conceptAttachmentId = value;
    this.hmProperty["conceptAttachmentId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 附件名称(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetConceptAttachmentName (value: string)
{
if (value  != undefined)
{
 this.conceptAttachmentName = value;
    this.hmProperty["conceptAttachmentName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 概念Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetConceptId (value: string)
{
if (value  != undefined)
{
 this.conceptId = value;
    this.hmProperty["conceptId"] = true;
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
case clsConceptAttachmentEN.con_ConceptAttachmentId:
return this.conceptAttachmentId;
case clsConceptAttachmentEN.con_ConceptAttachmentName:
return this.conceptAttachmentName;
case clsConceptAttachmentEN.con_ConceptId:
return this.conceptId;
case clsConceptAttachmentEN.con_FilePath:
return this.filePath;
case clsConceptAttachmentEN.con_UpdDate:
return this.updDate;
case clsConceptAttachmentEN.con_UpdUserId:
return this.updUserId;
case clsConceptAttachmentEN.con_Memo:
return this.memo;
case clsConceptAttachmentEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ConceptAttachment]中不存在!`;
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
case clsConceptAttachmentEN.con_ConceptAttachmentId:
this.conceptAttachmentId = Number(strValue);
    this.hmProperty["conceptAttachmentId"] = true;
break;
case clsConceptAttachmentEN.con_ConceptAttachmentName:
this.conceptAttachmentName = strValue;
    this.hmProperty["conceptAttachmentName"] = true;
break;
case clsConceptAttachmentEN.con_ConceptId:
this.conceptId = strValue;
    this.hmProperty["conceptId"] = true;
break;
case clsConceptAttachmentEN.con_FilePath:
this.filePath = strValue;
    this.hmProperty["filePath"] = true;
break;
case clsConceptAttachmentEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsConceptAttachmentEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsConceptAttachmentEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsConceptAttachmentEN.con_IdCurrEduCls:
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
strMsg = `字段名:[${strFldName}]在表对象:[ConceptAttachment]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public conceptAttachmentId = 0;    //概念附件Id
public conceptAttachmentName = "";    //附件名称
public conceptId = "";    //概念Id
public filePath = "";    //文件路径
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注
public idCurrEduCls = "";    //教学班流水号


 /**
 * 常量:"ConceptAttachmentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ConceptAttachmentId(): string {return "conceptAttachmentId";}    //概念附件Id

 /**
 * 常量:"ConceptAttachmentName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ConceptAttachmentName(): string {return "conceptAttachmentName";}    //附件名称

 /**
 * 常量:"ConceptId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ConceptId(): string {return "conceptId";}    //概念Id

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