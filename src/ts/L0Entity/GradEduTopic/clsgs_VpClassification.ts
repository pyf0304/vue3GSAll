
 /**
 * 类名:clsgs_VpClassification
 * 表名:gs_VpClassification(01120958)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 01:03:52
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 各观点分类表(gs_VpClassification)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_VpClassification 
{
public static _CurrTabName= "gs_VpClassification"; //当前表名,与该类相关的表名
public static _KeyFldName= "ClassificationId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["classificationId", "classificationName", "orderNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public classificationId = 0;    //分类Id
public classificationName = "";    //分类名称
public orderNum = 0;    //序号
public updDate = "";    //修改日期
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
case clsgs_VpClassification.con_ClassificationId:
return this.classificationId;
case clsgs_VpClassification.con_ClassificationName:
return this.classificationName;
case clsgs_VpClassification.con_OrderNum:
return this.orderNum;
case clsgs_VpClassification.con_UpdDate:
return this.updDate;
case clsgs_VpClassification.con_UpdUser:
return this.updUser;
case clsgs_VpClassification.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_VpClassification]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"ClassificationId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClassificationId(): string {return "classificationId";}    //分类Id

 /**
 * 常量:"ClassificationName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClassificationName(): string {return "classificationName";}    //分类名称

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