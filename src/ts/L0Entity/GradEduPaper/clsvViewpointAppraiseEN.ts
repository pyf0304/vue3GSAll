
 /**
 * 类名:clsvViewpointAppraiseEN
 * 表名:vViewpointAppraise(01120610)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:55
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * vViewpointAppraise(vViewpointAppraise)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvViewpointAppraiseEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vViewpointAppraise"; //当前表名,与该类相关的表名
public static _KeyFldName= "ViewpointAppraiseId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["userName", "viewpointAppraiseId", "viewpointId", "appraiseContent", "updDate", "memo", "viewpointName", "viewpointContent", "reason", "updUser"];
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
case clsvViewpointAppraiseEN.con_UserName:
return this.userName;
case clsvViewpointAppraiseEN.con_ViewpointAppraiseId:
return this.viewpointAppraiseId;
case clsvViewpointAppraiseEN.con_ViewpointId:
return this.viewpointId;
case clsvViewpointAppraiseEN.con_AppraiseContent:
return this.appraiseContent;
case clsvViewpointAppraiseEN.con_UpdDate:
return this.updDate;
case clsvViewpointAppraiseEN.con_Memo:
return this.memo;
case clsvViewpointAppraiseEN.con_ViewpointName:
return this.viewpointName;
case clsvViewpointAppraiseEN.con_ViewpointContent:
return this.viewpointContent;
case clsvViewpointAppraiseEN.con_Reason:
return this.reason;
case clsvViewpointAppraiseEN.con_UpdUser:
return this.updUser;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vViewpointAppraise]中不存在!`;
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
case clsvViewpointAppraiseEN.con_UserName:
this.userName = strValue;
break;
case clsvViewpointAppraiseEN.con_ViewpointAppraiseId:
this.viewpointAppraiseId = Number(strValue);
break;
case clsvViewpointAppraiseEN.con_ViewpointId:
this.viewpointId = strValue;
break;
case clsvViewpointAppraiseEN.con_AppraiseContent:
this.appraiseContent = strValue;
break;
case clsvViewpointAppraiseEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvViewpointAppraiseEN.con_Memo:
this.memo = strValue;
break;
case clsvViewpointAppraiseEN.con_ViewpointName:
this.viewpointName = strValue;
break;
case clsvViewpointAppraiseEN.con_ViewpointContent:
this.viewpointContent = strValue;
break;
case clsvViewpointAppraiseEN.con_Reason:
this.reason = strValue;
break;
case clsvViewpointAppraiseEN.con_UpdUser:
this.updUser = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vViewpointAppraise]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public userName = "";    //用户名
public viewpointAppraiseId = 0;    //观点评论Id
public viewpointId = "";    //观点Id
public appraiseContent = "";    //评议内容
public updDate = "";    //修改日期
public memo = "";    //备注
public viewpointName = "";    //观点名称
public viewpointContent = "";    //观点内容
public reason = "";    //理由
public updUser = "";    //修改人


 /**
 * 常量:"UserName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"ViewpointAppraiseId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointAppraiseId(): string {return "viewpointAppraiseId";}    //观点评论Id

 /**
 * 常量:"ViewpointId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointId(): string {return "viewpointId";}    //观点Id

 /**
 * 常量:"AppraiseContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AppraiseContent(): string {return "appraiseContent";}    //评议内容

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"ViewpointName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointName(): string {return "viewpointName";}    //观点名称

 /**
 * 常量:"ViewpointContent"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ViewpointContent(): string {return "viewpointContent";}    //观点内容

 /**
 * 常量:"Reason"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Reason(): string {return "reason";}    //理由

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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