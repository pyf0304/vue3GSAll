
 /**
 * 类名:clsCurrEduClsTeacher
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/20 01:37:11
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 当前教学班教师(CurrEduClsTeacher)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsCurrEduClsTeacher 
{
public static _CurrTabName= "CurrEduClsTeacher"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsTeacher"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["idEduClsTeacher", "idCurrEduCls", "idTeacher", "idPk2EduClsTeacherType", "schoolTerm", "schoolYear", "openBeginDate", "openEndDate", "orderNum", "updDate", "lastVisitedDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idEduClsTeacher = 0;    //教学班老师流水号
public idCurrEduCls = "";    //教学班流水号
public idTeacher = "";    //教师流水号
public idPk2EduClsTeacherType = "";    //教学班老师角色(主讲,辅导)流水号
public schoolTerm = "";    //学期
public schoolYear = "";    //学年
public openBeginDate = "";    //开放开始日期
public openEndDate = "";    //开放结束日期
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public lastVisitedDate = "";    //修改日期
public updUser = "";    //修改人
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
case clsCurrEduClsTeacher.con_IdEduClsTeacher:
return this.idEduClsTeacher;
case clsCurrEduClsTeacher.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsCurrEduClsTeacher.con_IdTeacher:
return this.idTeacher;
case clsCurrEduClsTeacher.con_IdPk2EduClsTeacherType:
return this.idPk2EduClsTeacherType;
case clsCurrEduClsTeacher.con_SchoolTerm:
return this.schoolTerm;
case clsCurrEduClsTeacher.con_SchoolYear:
return this.schoolYear;
case clsCurrEduClsTeacher.con_OpenBeginDate:
return this.openBeginDate;
case clsCurrEduClsTeacher.con_OpenEndDate:
return this.openEndDate;
case clsCurrEduClsTeacher.con_OrderNum:
return this.orderNum;
case clsCurrEduClsTeacher.con_UpdDate:
return this.updDate;
case clsCurrEduClsTeacher.con_LastVisitedDate:
return this.lastVisitedDate;
case clsCurrEduClsTeacher.con_UpdUser:
return this.updUser;
case clsCurrEduClsTeacher.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CurrEduClsTeacher]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdEduClsTeacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduClsTeacher(): string {return "idEduClsTeacher";}    //教学班老师流水号

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"IdTeacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeacher(): string {return "idTeacher";}    //教师流水号

 /**
 * 常量:"IdPk2EduClsTeacherType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPk2EduClsTeacherType(): string {return "idPk2EduClsTeacherType";}    //教学班老师角色(主讲,辅导)流水号

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"OpenBeginDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OpenBeginDate(): string {return "openBeginDate";}    //开放开始日期

 /**
 * 常量:"OpenEndDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OpenEndDate(): string {return "openEndDate";}    //开放结束日期

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"LastVisitedDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LastVisitedDate(): string {return "lastVisitedDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}