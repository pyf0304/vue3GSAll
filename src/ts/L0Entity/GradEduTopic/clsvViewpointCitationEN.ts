
 /**
 * 类名:clsvViewpointCitationEN
 * 表名:vViewpointCitation(01120594)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:39
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
 * v观点引用(vViewpointCitation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsvViewpointCitationEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vViewpointCitation"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["memo", "mId", "paperContent", "paperId", "paperTitle", "reason", "updUserId", "userName", "viewpointId", "viewpointName", "viewpointTypeId", "viewpointTypeName", "updDate", "proposePeople", "source", "topicId", "topicName"];
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
private mlngmId = 0;    //mId
private mstrPaperContent = "";    //主题内容
private mstrPaperId = "";    //论文Id
private mstrPaperTitle = "";    //论文标题
private mstrReason = "";    //理由
private mstrUpdUserId = "";    //修改用户Id
private mstrUserName = "";    //用户名
private mstrViewpointId = "";    //观点Id
private mstrViewpointName = "";    //观点名称
private mstrViewpointTypeId = "";    //观点类型Id
private mstrViewpointTypeName = "";    //观点类型名
private mstrUpdDate = "";    //修改日期
private mstrProposePeople = "";    //提出人
private mstrSource = "";    //来源
private mstrTopicId = "";    //主题Id
private mstrTopicName = "";    //栏目主题

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
 * mId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetmId (value: number)
{
if (value  != undefined)
{
 this.mId = value;
    this.hmProperty["mId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 主题内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperContent (value: string)
{
if (value  != undefined)
{
 this.paperContent = value;
    this.hmProperty["paperContent"] = true;
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
 * 论文标题(说明:;字段类型:varchar;字段长度:500;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPaperTitle (value: string)
{
if (value  != undefined)
{
 this.paperTitle = value;
    this.hmProperty["paperTitle"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 理由(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetReason (value: string)
{
if (value  != undefined)
{
 this.reason = value;
    this.hmProperty["reason"] = true;
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
 * 观点Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewpointId (value: string)
{
if (value  != undefined)
{
 this.viewpointId = value;
    this.hmProperty["viewpointId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 观点名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewpointName (value: string)
{
if (value  != undefined)
{
 this.viewpointName = value;
    this.hmProperty["viewpointName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 观点类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewpointTypeId (value: string)
{
if (value  != undefined)
{
 this.viewpointTypeId = value;
    this.hmProperty["viewpointTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 观点类型名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewpointTypeName (value: string)
{
if (value  != undefined)
{
 this.viewpointTypeName = value;
    this.hmProperty["viewpointTypeName"] = true;
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
 * 提出人(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProposePeople (value: string)
{
if (value  != undefined)
{
 this.proposePeople = value;
    this.hmProperty["proposePeople"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 来源(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSource (value: string)
{
if (value  != undefined)
{
 this.source = value;
    this.hmProperty["source"] = true;
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
 * 栏目主题(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTopicName (value: string)
{
if (value  != undefined)
{
 this.topicName = value;
    this.hmProperty["topicName"] = true;
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
case clsvViewpointCitationEN.con_Memo:
return this.memo;
case clsvViewpointCitationEN.con_mId:
return this.mId;
case clsvViewpointCitationEN.con_PaperContent:
return this.paperContent;
case clsvViewpointCitationEN.con_PaperId:
return this.paperId;
case clsvViewpointCitationEN.con_PaperTitle:
return this.paperTitle;
case clsvViewpointCitationEN.con_Reason:
return this.reason;
case clsvViewpointCitationEN.con_UpdUserId:
return this.updUserId;
case clsvViewpointCitationEN.con_UserName:
return this.userName;
case clsvViewpointCitationEN.con_ViewpointId:
return this.viewpointId;
case clsvViewpointCitationEN.con_ViewpointName:
return this.viewpointName;
case clsvViewpointCitationEN.con_ViewpointTypeId:
return this.viewpointTypeId;
case clsvViewpointCitationEN.con_ViewpointTypeName:
return this.viewpointTypeName;
case clsvViewpointCitationEN.con_UpdDate:
return this.updDate;
case clsvViewpointCitationEN.con_ProposePeople:
return this.proposePeople;
case clsvViewpointCitationEN.con_Source:
return this.source;
case clsvViewpointCitationEN.con_TopicId:
return this.topicId;
case clsvViewpointCitationEN.con_TopicName:
return this.topicName;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vViewpointCitation]中不存在!`;
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
case clsvViewpointCitationEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsvViewpointCitationEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsvViewpointCitationEN.con_PaperContent:
this.paperContent = strValue;
    this.hmProperty["paperContent"] = true;
break;
case clsvViewpointCitationEN.con_PaperId:
this.paperId = strValue;
    this.hmProperty["paperId"] = true;
break;
case clsvViewpointCitationEN.con_PaperTitle:
this.paperTitle = strValue;
    this.hmProperty["paperTitle"] = true;
break;
case clsvViewpointCitationEN.con_Reason:
this.reason = strValue;
    this.hmProperty["reason"] = true;
break;
case clsvViewpointCitationEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsvViewpointCitationEN.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clsvViewpointCitationEN.con_ViewpointId:
this.viewpointId = strValue;
    this.hmProperty["viewpointId"] = true;
break;
case clsvViewpointCitationEN.con_ViewpointName:
this.viewpointName = strValue;
    this.hmProperty["viewpointName"] = true;
break;
case clsvViewpointCitationEN.con_ViewpointTypeId:
this.viewpointTypeId = strValue;
    this.hmProperty["viewpointTypeId"] = true;
break;
case clsvViewpointCitationEN.con_ViewpointTypeName:
this.viewpointTypeName = strValue;
    this.hmProperty["viewpointTypeName"] = true;
break;
case clsvViewpointCitationEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsvViewpointCitationEN.con_ProposePeople:
this.proposePeople = strValue;
    this.hmProperty["proposePeople"] = true;
break;
case clsvViewpointCitationEN.con_Source:
this.source = strValue;
    this.hmProperty["source"] = true;
break;
case clsvViewpointCitationEN.con_TopicId:
this.topicId = strValue;
    this.hmProperty["topicId"] = true;
break;
case clsvViewpointCitationEN.con_TopicName:
this.topicName = strValue;
    this.hmProperty["topicName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vViewpointCitation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public memo = "";    //备注
public mId = 0;    //mId
public paperContent = "";    //主题内容
public paperId = "";    //论文Id
public paperTitle = "";    //论文标题
public reason = "";    //理由
public updUserId = "";    //修改用户Id
public userName = "";    //用户名
public viewpointId = "";    //观点Id
public viewpointName = "";    //观点名称
public viewpointTypeId = "";    //观点类型Id
public viewpointTypeName = "";    //观点类型名
public updDate = "";    //修改日期
public proposePeople = "";    //提出人
public source = "";    //来源
public topicId = "";    //主题Id
public topicName = "";    //栏目主题


 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"mId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"PaperContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PaperContent(): string {return "paperContent";}    //主题内容

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
 * 常量:"Reason"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Reason(): string {return "reason";}    //理由

 /**
 * 常量:"UpdUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"ViewpointId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointId(): string {return "viewpointId";}    //观点Id

 /**
 * 常量:"ViewpointName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointName(): string {return "viewpointName";}    //观点名称

 /**
 * 常量:"ViewpointTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointTypeId(): string {return "viewpointTypeId";}    //观点类型Id

 /**
 * 常量:"ViewpointTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointTypeName(): string {return "viewpointTypeName";}    //观点类型名

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"ProposePeople"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ProposePeople(): string {return "proposePeople";}    //提出人

 /**
 * 常量:"Source"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Source(): string {return "source";}    //来源

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