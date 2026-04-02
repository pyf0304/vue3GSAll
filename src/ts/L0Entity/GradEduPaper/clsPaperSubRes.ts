
 /**
 * 类名:clsPaperSubRes
 * 表名:PaperSubRes(01120963)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/24 10:52:14
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 论文子资源(PaperSubRes)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsPaperSubRes 
{
public static _CurrTabName= "PaperSubRes"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperSubResId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["paperSubResId", "paperSubResName", "paperSubResTypeId", "filePath", "idCurrEduCls", "updUserId", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public paperSubResId = 0;    //论文子资源Id
public paperSubResName = "";    //子资源名称
public paperSubResTypeId = "";    //论文子资源类型Id
public filePath = "";    //文件路径
public idCurrEduCls = "";    //教学班流水号
public updUserId = "";    //修改用户Id
public updDate = "";    //修改日期
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
case clsPaperSubRes.con_PaperSubResId:
return this.paperSubResId;
case clsPaperSubRes.con_PaperSubResName:
return this.paperSubResName;
case clsPaperSubRes.con_PaperSubResTypeId:
return this.paperSubResTypeId;
case clsPaperSubRes.con_FilePath:
return this.filePath;
case clsPaperSubRes.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsPaperSubRes.con_UpdUserId:
return this.updUserId;
case clsPaperSubRes.con_UpdDate:
return this.updDate;
case clsPaperSubRes.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[PaperSubRes]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"PaperSubResId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperSubResId(): string {return "paperSubResId";}    //论文子资源Id

 /**
 * 常量:"PaperSubResName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperSubResName(): string {return "paperSubResName";}    //子资源名称

 /**
 * 常量:"PaperSubResTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperSubResTypeId(): string {return "paperSubResTypeId";}    //论文子资源类型Id

 /**
 * 常量:"FilePath"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FilePath(): string {return "filePath";}    //文件路径

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}