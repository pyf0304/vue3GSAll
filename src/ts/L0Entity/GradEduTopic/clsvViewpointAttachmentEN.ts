
 /**
 * 类名:clsvViewpointAttachmentEN
 * 表名:vViewpointAttachment(01120593)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:31
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
 * v观点附件(vViewpointAttachment)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvViewpointAttachmentEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vViewpointAttachment"; //当前表名,与该类相关的表名
public static _KeyFldName= "ViewpointAttachmentId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["viewpointAttachmentId", "reason", "viewpointAttachmentName", "source", "viewpointId", "filePath", "updUser", "updDate", "viewpointContent", "viewpointName", "viewpointTypeId", "viewpointTypeName", "vPProposePeople", "idCurrEduCls"];
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
case clsvViewpointAttachmentEN.con_ViewpointAttachmentId:
return this.viewpointAttachmentId;
case clsvViewpointAttachmentEN.con_Reason:
return this.reason;
case clsvViewpointAttachmentEN.con_ViewpointAttachmentName:
return this.viewpointAttachmentName;
case clsvViewpointAttachmentEN.con_Source:
return this.source;
case clsvViewpointAttachmentEN.con_ViewpointId:
return this.viewpointId;
case clsvViewpointAttachmentEN.con_FilePath:
return this.filePath;
case clsvViewpointAttachmentEN.con_UpdUser:
return this.updUser;
case clsvViewpointAttachmentEN.con_UpdDate:
return this.updDate;
case clsvViewpointAttachmentEN.con_ViewpointContent:
return this.viewpointContent;
case clsvViewpointAttachmentEN.con_ViewpointName:
return this.viewpointName;
case clsvViewpointAttachmentEN.con_ViewpointTypeId:
return this.viewpointTypeId;
case clsvViewpointAttachmentEN.con_ViewpointTypeName:
return this.viewpointTypeName;
case clsvViewpointAttachmentEN.con_VPProposePeople:
return this.vPProposePeople;
case clsvViewpointAttachmentEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vViewpointAttachment]中不存在!`;
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
case clsvViewpointAttachmentEN.con_ViewpointAttachmentId:
this.viewpointAttachmentId = Number(strValue);
break;
case clsvViewpointAttachmentEN.con_Reason:
this.reason = strValue;
break;
case clsvViewpointAttachmentEN.con_ViewpointAttachmentName:
this.viewpointAttachmentName = strValue;
break;
case clsvViewpointAttachmentEN.con_Source:
this.source = strValue;
break;
case clsvViewpointAttachmentEN.con_ViewpointId:
this.viewpointId = strValue;
break;
case clsvViewpointAttachmentEN.con_FilePath:
this.filePath = strValue;
break;
case clsvViewpointAttachmentEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvViewpointAttachmentEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvViewpointAttachmentEN.con_ViewpointContent:
this.viewpointContent = strValue;
break;
case clsvViewpointAttachmentEN.con_ViewpointName:
this.viewpointName = strValue;
break;
case clsvViewpointAttachmentEN.con_ViewpointTypeId:
this.viewpointTypeId = strValue;
break;
case clsvViewpointAttachmentEN.con_ViewpointTypeName:
this.viewpointTypeName = strValue;
break;
case clsvViewpointAttachmentEN.con_VPProposePeople:
this.vPProposePeople = strValue;
break;
case clsvViewpointAttachmentEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vViewpointAttachment]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public viewpointAttachmentId = 0;    //主键Id
public reason = "";    //理由
public viewpointAttachmentName = "";    //附件名称
public source = "";    //来源
public viewpointId = "";    //观点Id
public filePath = "";    //文件路径
public updUser = "";    //修改人
public updDate = "";    //修改日期
public viewpointContent = "";    //观点内容
public viewpointName = "";    //观点名称
public viewpointTypeId = "";    //观点类型Id
public viewpointTypeName = "";    //观点类型名
public vPProposePeople = "";    //观点提出人
public idCurrEduCls = "";    //教学班流水号


 /**
 * 常量:"ViewpointAttachmentId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointAttachmentId(): string {return "viewpointAttachmentId";}    //主键Id

 /**
 * 常量:"Reason"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Reason(): string {return "reason";}    //理由

 /**
 * 常量:"ViewpointAttachmentName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointAttachmentName(): string {return "viewpointAttachmentName";}    //附件名称

 /**
 * 常量:"Source"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Source(): string {return "source";}    //来源

 /**
 * 常量:"ViewpointId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointId(): string {return "viewpointId";}    //观点Id

 /**
 * 常量:"FilePath"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_FilePath(): string {return "filePath";}    //文件路径

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
 * 常量:"ViewpointContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointContent(): string {return "viewpointContent";}    //观点内容

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
 * 常量:"VPProposePeople"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_VPProposePeople(): string {return "vPProposePeople";}    //观点提出人

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