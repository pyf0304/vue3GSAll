
 /**
 * 类名:clsQxRoleRightRelation
 * 表名:QxRoleRightRelation(01120957)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/29 16:29:09
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 角色赋权关系(QxRoleRightRelation)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxRoleRightRelationEN 
{
public static _CurrTabName= "QxRoleRightRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["mId", "myRoleId", "roleId", "qxPrjId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public myRoleId = "";    //主角色Id
public roleId = "";    //角色Id
public qxPrjId = "";    //QxPrjId
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
case clsQxRoleRightRelationEN.con_mId:
return this.mId;
case clsQxRoleRightRelationEN.con_MyRoleId:
return this.myRoleId;
case clsQxRoleRightRelationEN.con_RoleId:
return this.roleId;
case clsQxRoleRightRelationEN.con_QxPrjId:
return this.qxPrjId;
case clsQxRoleRightRelationEN.con_UpdDate:
return this.updDate;
case clsQxRoleRightRelationEN.con_UpdUser:
return this.updUser;
case clsQxRoleRightRelationEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxRoleRightRelation]中不存在!`;
console.error(strMsg);
return "";
}
}
}