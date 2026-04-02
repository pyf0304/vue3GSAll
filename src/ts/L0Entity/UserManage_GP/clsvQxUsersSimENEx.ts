
 /**
 * 类名:clsvQxUsersSimENEx
 * 表名:vQxUsersSim(00140121)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/20 11:45:05
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * v用户Sim(vQxUsersSim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvQxUsersSimEN } from "@/ts/L0Entity/UserManage_GP/clsvQxUsersSimEN";

export class  clsvQxUsersSimENEx extends clsvQxUsersSimEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}
}