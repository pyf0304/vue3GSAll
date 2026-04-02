
 /**
 * 类名:clsvXzGradeBaseEN
 * 表名:vXzGradeBase(01120130)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:58
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * v年级(vXzGradeBase)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvXzGradeBaseEN extends clsGeneralTabV
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vXzGradeBase"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdGradeBase"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 23;
public static AttributeName = ["idGradeBase", "gradeBaseId", "gradeBaseName", "gradeBaseNameA", "schoolYear", "schoolTerm", "enterSchoolDate", "currentTermSeq", "execPlanTermIndex", "setEPTermIndexDate", "isOffed", "gradeIndex", "beginYearMonth", "endYearMonth", "allowUpBaseInfo", "prefix", "pointCalcVersionId", "modifyUserId", "modifyDate", "idStudyLevel", "studyLevelName", "isVisible", "memo"];
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
case clsvXzGradeBaseEN.con_IdGradeBase:
return this.idGradeBase;
case clsvXzGradeBaseEN.con_GradeBaseId:
return this.gradeBaseId;
case clsvXzGradeBaseEN.con_GradeBaseName:
return this.gradeBaseName;
case clsvXzGradeBaseEN.con_GradeBaseNameA:
return this.gradeBaseNameA;
case clsvXzGradeBaseEN.con_SchoolYear:
return this.schoolYear;
case clsvXzGradeBaseEN.con_SchoolTerm:
return this.schoolTerm;
case clsvXzGradeBaseEN.con_EnterSchoolDate:
return this.enterSchoolDate;
case clsvXzGradeBaseEN.con_CurrentTermSeq:
return this.currentTermSeq;
case clsvXzGradeBaseEN.con_ExecPlanTermIndex:
return this.execPlanTermIndex;
case clsvXzGradeBaseEN.con_SetEPTermIndexDate:
return this.setEPTermIndexDate;
case clsvXzGradeBaseEN.con_IsOffed:
return this.isOffed;
case clsvXzGradeBaseEN.con_GradeIndex:
return this.gradeIndex;
case clsvXzGradeBaseEN.con_BeginYearMonth:
return this.beginYearMonth;
case clsvXzGradeBaseEN.con_EndYearMonth:
return this.endYearMonth;
case clsvXzGradeBaseEN.con_AllowUpBaseInfo:
return this.allowUpBaseInfo;
case clsvXzGradeBaseEN.con_Prefix:
return this.prefix;
case clsvXzGradeBaseEN.con_PointCalcVersionId:
return this.pointCalcVersionId;
case clsvXzGradeBaseEN.con_ModifyUserId:
return this.modifyUserId;
case clsvXzGradeBaseEN.con_ModifyDate:
return this.modifyDate;
case clsvXzGradeBaseEN.con_IdStudyLevel:
return this.idStudyLevel;
case clsvXzGradeBaseEN.con_StudyLevelName:
return this.studyLevelName;
case clsvXzGradeBaseEN.con_IsVisible:
return this.isVisible;
case clsvXzGradeBaseEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vXzGradeBase]中不存在!`;
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
case clsvXzGradeBaseEN.con_IdGradeBase:
this.idGradeBase = strValue;
break;
case clsvXzGradeBaseEN.con_GradeBaseId:
this.gradeBaseId = strValue;
break;
case clsvXzGradeBaseEN.con_GradeBaseName:
this.gradeBaseName = strValue;
break;
case clsvXzGradeBaseEN.con_GradeBaseNameA:
this.gradeBaseNameA = strValue;
break;
case clsvXzGradeBaseEN.con_SchoolYear:
this.schoolYear = strValue;
break;
case clsvXzGradeBaseEN.con_SchoolTerm:
this.schoolTerm = strValue;
break;
case clsvXzGradeBaseEN.con_EnterSchoolDate:
this.enterSchoolDate = strValue;
break;
case clsvXzGradeBaseEN.con_CurrentTermSeq:
this.currentTermSeq = Number(strValue);
break;
case clsvXzGradeBaseEN.con_ExecPlanTermIndex:
this.execPlanTermIndex = Number(strValue);
break;
case clsvXzGradeBaseEN.con_SetEPTermIndexDate:
this.setEPTermIndexDate = strValue;
break;
case clsvXzGradeBaseEN.con_IsOffed:
this.isOffed = Boolean(strValue);
break;
case clsvXzGradeBaseEN.con_GradeIndex:
this.gradeIndex = Number(strValue);
break;
case clsvXzGradeBaseEN.con_BeginYearMonth:
this.beginYearMonth = strValue;
break;
case clsvXzGradeBaseEN.con_EndYearMonth:
this.endYearMonth = strValue;
break;
case clsvXzGradeBaseEN.con_AllowUpBaseInfo:
this.allowUpBaseInfo = Boolean(strValue);
break;
case clsvXzGradeBaseEN.con_Prefix:
this.prefix = strValue;
break;
case clsvXzGradeBaseEN.con_PointCalcVersionId:
this.pointCalcVersionId = strValue;
break;
case clsvXzGradeBaseEN.con_ModifyUserId:
this.modifyUserId = strValue;
break;
case clsvXzGradeBaseEN.con_ModifyDate:
this.modifyDate = strValue;
break;
case clsvXzGradeBaseEN.con_IdStudyLevel:
this.idStudyLevel = strValue;
break;
case clsvXzGradeBaseEN.con_StudyLevelName:
this.studyLevelName = strValue;
break;
case clsvXzGradeBaseEN.con_IsVisible:
this.isVisible = Boolean(strValue);
break;
case clsvXzGradeBaseEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vXzGradeBase]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idGradeBase = "";    //年级流水号
public gradeBaseId = "";    //年级代号
public gradeBaseName = "";    //年级名称
public gradeBaseNameA = "";    //年级名称缩写
public schoolYear = "";    //学年
public schoolTerm = "";    //学期
public enterSchoolDate = "";    //进校日期
public currentTermSeq = 0;    //当前学期
public execPlanTermIndex = 0;    //生成执行计划学期
public setEPTermIndexDate = "";    //设定执行计划学期日期
public isOffed = false;    //是否毕业
public gradeIndex = 0;    //年级序号
public beginYearMonth = "";    //开始年月
public endYearMonth = "";    //结束年月
public allowUpBaseInfo = false;    //允许修改基本信息
public prefix = "";    //前缀
public pointCalcVersionId = "";    //绩点计算版本Id
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期
public idStudyLevel = "";    //id_StudyLevel
public studyLevelName = "";    //学段名称
public isVisible = false;    //是否显示
public memo = "";    //备注


 /**
 * 常量:"IdGradeBase"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //年级流水号

 /**
 * 常量:"GradeBaseId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_GradeBaseId(): string {return "gradeBaseId";}    //年级代号

 /**
 * 常量:"GradeBaseName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"GradeBaseNameA"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_GradeBaseNameA(): string {return "gradeBaseNameA";}    //年级名称缩写

 /**
 * 常量:"SchoolYear"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolTerm"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"EnterSchoolDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_EnterSchoolDate(): string {return "enterSchoolDate";}    //进校日期

 /**
 * 常量:"CurrentTermSeq"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CurrentTermSeq(): string {return "currentTermSeq";}    //当前学期

 /**
 * 常量:"ExecPlanTermIndex"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ExecPlanTermIndex(): string {return "execPlanTermIndex";}    //生成执行计划学期

 /**
 * 常量:"SetEPTermIndexDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SetEPTermIndexDate(): string {return "setEPTermIndexDate";}    //设定执行计划学期日期

 /**
 * 常量:"IsOffed"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsOffed(): string {return "isOffed";}    //是否毕业

 /**
 * 常量:"GradeIndex"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_GradeIndex(): string {return "gradeIndex";}    //年级序号

 /**
 * 常量:"BeginYearMonth"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_BeginYearMonth(): string {return "beginYearMonth";}    //开始年月

 /**
 * 常量:"EndYearMonth"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_EndYearMonth(): string {return "endYearMonth";}    //结束年月

 /**
 * 常量:"AllowUpBaseInfo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_AllowUpBaseInfo(): string {return "allowUpBaseInfo";}    //允许修改基本信息

 /**
 * 常量:"Prefix"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Prefix(): string {return "prefix";}    //前缀

 /**
 * 常量:"PointCalcVersionId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_PointCalcVersionId(): string {return "pointCalcVersionId";}    //绩点计算版本Id

 /**
 * 常量:"ModifyUserId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"ModifyDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"IdStudyLevel"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //id_StudyLevel

 /**
 * 常量:"StudyLevelName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StudyLevelName(): string {return "studyLevelName";}    //学段名称

 /**
 * 常量:"IsVisible"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

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