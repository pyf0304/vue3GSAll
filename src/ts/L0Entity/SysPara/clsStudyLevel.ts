
 /**
 * 类名:clsStudyLevel
 * 表名:StudyLevel(01120212)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/25 15:13:03
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 学段(StudyLevel)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsStudyLevel 
{
public static _CurrTabName= "StudyLevel"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStudyLevel"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["idStudyLevel", "studyLevelName", "studyLevelEnName", "isForReading", "sequenceNumber", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idStudyLevel = "";    //学段流水号
public studyLevelName = "";    //学段名称
public studyLevelEnName = "";    //学段英文名
public isForReading = false;    //专门用于阅读
public sequenceNumber = 0;    //序号
public memo = "";    //备注

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsStudyLevel.con_IdStudyLevel:
return this.idStudyLevel;
case clsStudyLevel.con_StudyLevelName:
return this.studyLevelName;
case clsStudyLevel.con_StudyLevelEnName:
return this.studyLevelEnName;
case clsStudyLevel.con_IsForReading:
return this.isForReading;
case clsStudyLevel.con_SequenceNumber:
return this.sequenceNumber;
case clsStudyLevel.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[StudyLevel]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //学段流水号

 /**
 * 常量:"StudyLevelName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StudyLevelName(): string {return "studyLevelName";}    //学段名称

 /**
 * 常量:"StudyLevelEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StudyLevelEnName(): string {return "studyLevelEnName";}    //学段英文名

 /**
 * 常量:"IsForReading"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsForReading(): string {return "isForReading";}    //专门用于阅读

 /**
 * 常量:"SequenceNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SequenceNumber(): string {return "sequenceNumber";}    //序号

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}