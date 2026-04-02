
 /**
 * 类名:clsvSysScoreWeightEN
 * 表名:vSysScoreWeight(01120630)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:30
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
 * v系统分数权重表(vSysScoreWeight)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvSysScoreWeightEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vSysScoreWeight"; //当前表名,与该类相关的表名
public static _KeyFldName= "ScoreWeightId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["scoreWeightId", "scoreWeightValue", "isPublic", "updDate", "updUser", "memo", "scoreTypeId", "scoreTypeName", "onlyId", "idCurrEduCls", "currEduClsId", "eduClsName"];
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
case clsvSysScoreWeightEN.con_ScoreWeightId:
return this.scoreWeightId;
case clsvSysScoreWeightEN.con_ScoreWeightValue:
return this.scoreWeightValue;
case clsvSysScoreWeightEN.con_IsPublic:
return this.isPublic;
case clsvSysScoreWeightEN.con_UpdDate:
return this.updDate;
case clsvSysScoreWeightEN.con_UpdUser:
return this.updUser;
case clsvSysScoreWeightEN.con_Memo:
return this.memo;
case clsvSysScoreWeightEN.con_ScoreTypeId:
return this.scoreTypeId;
case clsvSysScoreWeightEN.con_ScoreTypeName:
return this.scoreTypeName;
case clsvSysScoreWeightEN.con_OnlyId:
return this.onlyId;
case clsvSysScoreWeightEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvSysScoreWeightEN.con_CurrEduClsId:
return this.currEduClsId;
case clsvSysScoreWeightEN.con_EduClsName:
return this.eduClsName;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysScoreWeight]中不存在!`;
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
case clsvSysScoreWeightEN.con_ScoreWeightId:
this.scoreWeightId = strValue;
break;
case clsvSysScoreWeightEN.con_ScoreWeightValue:
this.scoreWeightValue = strValue;
break;
case clsvSysScoreWeightEN.con_IsPublic:
this.isPublic = Boolean(strValue);
break;
case clsvSysScoreWeightEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvSysScoreWeightEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvSysScoreWeightEN.con_Memo:
this.memo = strValue;
break;
case clsvSysScoreWeightEN.con_ScoreTypeId:
this.scoreTypeId = strValue;
break;
case clsvSysScoreWeightEN.con_ScoreTypeName:
this.scoreTypeName = strValue;
break;
case clsvSysScoreWeightEN.con_OnlyId:
this.onlyId = strValue;
break;
case clsvSysScoreWeightEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvSysScoreWeightEN.con_CurrEduClsId:
this.currEduClsId = strValue;
break;
case clsvSysScoreWeightEN.con_EduClsName:
this.eduClsName = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vSysScoreWeight]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public scoreWeightId = "";    //分数权重Id
public scoreWeightValue = "";    //分数权重值
public isPublic = false;    //是否公开
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public scoreTypeId = "";    //分数类型Id
public scoreTypeName = "";    //分数类型名称
public onlyId = "";    //OnlyId
public idCurrEduCls = "";    //教学班流水号
public currEduClsId = "";    //教学班Id
public eduClsName = "";    //教学班名


 /**
 * 常量:"ScoreWeightId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ScoreWeightId(): string {return "scoreWeightId";}    //分数权重Id

 /**
 * 常量:"ScoreWeightValue"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ScoreWeightValue(): string {return "scoreWeightValue";}    //分数权重值

 /**
 * 常量:"IsPublic"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsPublic(): string {return "isPublic";}    //是否公开

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
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"ScoreTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ScoreTypeId(): string {return "scoreTypeId";}    //分数类型Id

 /**
 * 常量:"ScoreTypeName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ScoreTypeName(): string {return "scoreTypeName";}    //分数类型名称

 /**
 * 常量:"OnlyId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_OnlyId(): string {return "onlyId";}    //OnlyId

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CurrEduClsId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CurrEduClsId(): string {return "currEduClsId";}    //教学班Id

 /**
 * 常量:"EduClsName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

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