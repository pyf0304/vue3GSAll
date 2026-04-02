
 /**
 * 类名:clsQxRolesWApi
 * 表名:QxRoles(00140014)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:37:27
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色(QxRoles)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月23日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxRolesEN } from "@/ts/L0Entity/UserManage_GP/clsQxRolesEN";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxRoles_Controller = "QxRolesApi";
 export const qxRoles_ConstructorName = "qxRoles";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRoleId:关键字
 * @returns 对象
 **/
export  async function QxRoles_GetObjByRoleIdAsync(strRoleId: string): Promise<clsQxRolesEN|null>  
{
const strThisFuncName = "GetObjByRoleIdAsync";

if (IsNullOrEmpty(strRoleId) == true)
{
  const strMsg = Format("参数:[strRoleId]不能为空!(In clsQxRolesWApi.GetObjByRoleIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsQxRolesWApi.GetObjByRoleIdAsync)", strRoleId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByRoleId";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleId,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objQxRoles = QxRoles_GetObjFromJsonObj(returnObj);
return objQxRoles;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strRoleId:所给的关键字
 * @returns 对象
*/
export  async function QxRoles_GetObjByRoleIdCache(strRoleId:string,strQxPrjId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByRoleIdCache";

if (IsNullOrEmpty(strRoleId) == true)
{
  const strMsg = Format("参数:[strRoleId]不能为空!(In clsQxRolesWApi.GetObjByRoleIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsQxRolesWApi.GetObjByRoleIdCache)", strRoleId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxRolesObjLstCache = await QxRoles_GetObjLstCache(strQxPrjId);
try
{
const arrQxRolesSel = arrQxRolesObjLstCache.filter(x => 
 x.roleId == strRoleId );
let objQxRoles: clsQxRolesEN;
if (arrQxRolesSel.length > 0)
{
objQxRoles = arrQxRolesSel[0];
return objQxRoles;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxRolesConst = await QxRoles_GetObjByRoleIdAsync(strRoleId);
if (objQxRolesConst != null)
{
QxRoles_ReFreshThisCache(strQxPrjId);
return objQxRolesConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strRoleId, qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strRoleId:所给的关键字
 * @returns 对象
*/
export  async function QxRoles_GetObjByRoleIdlocalStorage(strRoleId: string) {
const strThisFuncName = "GetObjByRoleIdlocalStorage";

if (IsNullOrEmpty(strRoleId) == true)
{
  const strMsg = Format("参数:[strRoleId]不能为空!(In clsQxRolesWApi.GetObjByRoleIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsQxRolesWApi.GetObjByRoleIdlocalStorage)", strRoleId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxRolesEN._CurrTabName, strRoleId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxRolesCache: clsQxRolesEN = JSON.parse(strTempObj);
return objQxRolesCache;
}
try
{
const objQxRoles = await QxRoles_GetObjByRoleIdAsync(strRoleId);
if (objQxRoles != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxRoles));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxRoles;
}
return objQxRoles;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strRoleId, qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxRoles:所给的对象
 * @returns 对象
*/
export  async function QxRoles_UpdateObjInLstCache(objQxRoles: clsQxRolesEN,strQxPrjId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxRolesObjLstCache = await QxRoles_GetObjLstCache(strQxPrjId);
const obj = arrQxRolesObjLstCache.find(x => x.roleName == objQxRoles.roleName && x.qxPrjId == objQxRoles.qxPrjId);
if (obj != null)
{
objQxRoles.roleId = obj.roleId;
ObjectAssign( obj, objQxRoles);
}
else
{
arrQxRolesObjLstCache.push(objQxRoles);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRoleId:所给的关键字
 * @returns 对象
*/
export  async function QxRoles_GetNameByRoleIdCache(strRoleId: string,strQxPrjId: string) {

if (IsNullOrEmpty(strRoleId) == true)
{
  const strMsg = Format("参数:[strRoleId]不能为空!(In clsQxRolesWApi.GetNameByRoleIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsQxRolesWApi.GetNameByRoleIdCache)", strRoleId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxRolesObjLstCache = await QxRoles_GetObjLstCache(strQxPrjId);
if (arrQxRolesObjLstCache == null) return "";
try
{
const arrQxRolesSel = arrQxRolesObjLstCache.filter(x => 
 x.roleId == strRoleId );
let objQxRoles: clsQxRolesEN;
if (arrQxRolesSel.length > 0)
{
objQxRoles = arrQxRolesSel[0];
return objQxRoles.roleName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strRoleId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strQxPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function QxRoles_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strQxPrjIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strQxPrjIdClassfy) == true)
{
  const strMsg = Format("参数:[strQxPrjIdClassfy]不能为空!(In clsQxRolesWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjIdClassfy.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjIdClassfy]的长度:[{0}]不正确!(clsQxRolesWApi.func)", strQxPrjIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsQxRolesEN.con_RoleId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxRolesEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxRolesEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strRoleId = strInValue;
if (IsNullOrEmpty(strRoleId) == true)
{
return "";
}
const objQxRoles = await QxRoles_GetObjByRoleIdCache(strRoleId , strQxPrjIdClassfy);
if (objQxRoles == null) return "";
if (objQxRoles.GetFldValue(strOutFldName) == null) return "";
return objQxRoles.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRoles_SortFunDefa(a:clsQxRolesEN , b:clsQxRolesEN): number 
{
return a.roleId.localeCompare(b.roleId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRoles_SortFunDefa2Fld(a:clsQxRolesEN , b:clsQxRolesEN): number 
{
if (a.roleName == b.roleName) return a.roleENName.localeCompare(b.roleENName);
else return a.roleName.localeCompare(b.roleName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRoles_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxRolesEN.con_RoleId:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
return a.roleId.localeCompare(b.roleId);
}
case clsQxRolesEN.con_RoleName:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
return a.roleName.localeCompare(b.roleName);
}
case clsQxRolesEN.con_RoleENName:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (a.roleENName == null) return -1;
if (b.roleENName == null) return 1;
return a.roleENName.localeCompare(b.roleENName);
}
case clsQxRolesEN.con_RoleIndex:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
return a.roleIndex-b.roleIndex;
}
case clsQxRolesEN.con_UserType:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (a.userType == null) return -1;
if (b.userType == null) return 1;
return a.userType.localeCompare(b.userType);
}
case clsQxRolesEN.con_QxPrjId:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxRolesEN.con_IsInUse:
return (a: clsQxRolesEN) => {
if (a.isInUse == true) return 1;
else return -1
}
case clsQxRolesEN.con_UpdDate:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxRolesEN.con_UpdUserId:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsQxRolesEN.con_Memo:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRoles]中不存在!(in ${ qxRoles_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxRolesEN.con_RoleId:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
return b.roleId.localeCompare(a.roleId);
}
case clsQxRolesEN.con_RoleName:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
return b.roleName.localeCompare(a.roleName);
}
case clsQxRolesEN.con_RoleENName:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (b.roleENName == null) return -1;
if (a.roleENName == null) return 1;
return b.roleENName.localeCompare(a.roleENName);
}
case clsQxRolesEN.con_RoleIndex:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
return b.roleIndex-a.roleIndex;
}
case clsQxRolesEN.con_UserType:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (b.userType == null) return -1;
if (a.userType == null) return 1;
return b.userType.localeCompare(a.userType);
}
case clsQxRolesEN.con_QxPrjId:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxRolesEN.con_IsInUse:
return (b: clsQxRolesEN) => {
if (b.isInUse == true) return 1;
else return -1
}
case clsQxRolesEN.con_UpdDate:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxRolesEN.con_UpdUserId:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsQxRolesEN.con_Memo:
return (a: clsQxRolesEN, b: clsQxRolesEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRoles]中不存在!(in ${ qxRoles_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxRoles_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxRolesEN.con_RoleId:
return (obj: clsQxRolesEN) => {
return obj.roleId === value;
}
case clsQxRolesEN.con_RoleName:
return (obj: clsQxRolesEN) => {
return obj.roleName === value;
}
case clsQxRolesEN.con_RoleENName:
return (obj: clsQxRolesEN) => {
return obj.roleENName === value;
}
case clsQxRolesEN.con_RoleIndex:
return (obj: clsQxRolesEN) => {
return obj.roleIndex === value;
}
case clsQxRolesEN.con_UserType:
return (obj: clsQxRolesEN) => {
return obj.userType === value;
}
case clsQxRolesEN.con_QxPrjId:
return (obj: clsQxRolesEN) => {
return obj.qxPrjId === value;
}
case clsQxRolesEN.con_IsInUse:
return (obj: clsQxRolesEN) => {
return obj.isInUse === value;
}
case clsQxRolesEN.con_UpdDate:
return (obj: clsQxRolesEN) => {
return obj.updDate === value;
}
case clsQxRolesEN.con_UpdUserId:
return (obj: clsQxRolesEN) => {
return obj.updUserId === value;
}
case clsQxRolesEN.con_Memo:
return (obj: clsQxRolesEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRoles]中不存在!(in ${ qxRoles_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strQxPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function QxRoles_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strQxPrjIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strQxPrjIdClassfy) == true)
{
  const strMsg = Format("参数:[strQxPrjIdClassfy]不能为空!(In clsQxRolesWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjIdClassfy.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjIdClassfy]的长度:[{0}]不正确!(clsQxRolesWApi.funcKey)", strQxPrjIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsQxRolesEN.con_RoleId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxRoles = await QxRoles_GetObjLstCache(strQxPrjIdClassfy);
if (arrQxRoles == null) return [];
let arrQxRolesSel = arrQxRoles;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxRolesSel = arrQxRolesSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxRolesSel.length == 0) return [];
return arrQxRolesSel.map(x=>x.roleId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRoles_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRoles_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFldName,
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const arrId = data.returnStrLst.split(',');
return arrId;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
*/
export  async function QxRoles_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export  async function QxRoles_GetFirstObjAsync(strWhereCond: string): Promise<clsQxRolesEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objQxRoles = QxRoles_GetObjFromJsonObj(returnObj);
return objQxRoles;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoles_GetObjLstClientCache(strQxPrjId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsQxRolesEN.WhereFormat) == false)
{
strWhereCond = Format(clsQxRolesEN.WhereFormat, strQxPrjId);
}
else
{
strWhereCond = Format("QxPrjId='{0}'", strQxPrjId);
}
const strKey = Format("{0}_{1}", clsQxRolesEN._CurrTabName, strQxPrjId);
if (IsNullOrEmpty(clsQxRolesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxRolesEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxRolesExObjLstCache: Array<clsQxRolesEN> = CacheHelper.Get(strKey);
const arrQxRolesObjLstT = QxRoles_GetObjLstByJSONObjLst(arrQxRolesExObjLstCache);
return arrQxRolesObjLstT;
}
try
{
const arrQxRolesExObjLst = await QxRoles_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxRolesExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxRolesExObjLst.length);
console.log(strInfo);
return arrQxRolesExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoles_GetObjLstlocalStorage(strQxPrjId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsQxRolesEN.WhereFormat) == false)
{
strWhereCond = Format(clsQxRolesEN.WhereFormat, strQxPrjId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsQxRolesEN.con_QxPrjId, strQxPrjId);
}
const strKey = Format("{0}_{1}", clsQxRolesEN._CurrTabName, strQxPrjId);
if (IsNullOrEmpty(clsQxRolesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxRolesEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxRolesExObjLstCache: Array<clsQxRolesEN> = JSON.parse(strTempObjLst);
const arrQxRolesObjLstT = QxRoles_GetObjLstByJSONObjLst(arrQxRolesExObjLstCache);
return arrQxRolesObjLstT;
}
try
{
const arrQxRolesExObjLst = await QxRoles_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxRolesExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxRolesExObjLst.length);
console.log(strInfo);
return arrQxRolesExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoles_GetObjLstlocalStoragePureCache(strQxPrjId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsQxRolesEN._CurrTabName, strQxPrjId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxRolesObjLstCache: Array<clsQxRolesEN> = JSON.parse(strTempObjLst);
return arrQxRolesObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxRoles_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxRolesEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoles_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoles_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoles_GetObjLstsessionStorage(strQxPrjId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsQxRolesEN.WhereFormat) == false)
{
strWhereCond = Format(clsQxRolesEN.WhereFormat, strQxPrjId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsQxRolesEN.con_QxPrjId, strQxPrjId);
}
const strKey = Format("{0}_{1}", clsQxRolesEN._CurrTabName, strQxPrjId);
if (IsNullOrEmpty(clsQxRolesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxRolesEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxRolesExObjLstCache: Array<clsQxRolesEN> = JSON.parse(strTempObjLst);
const arrQxRolesObjLstT = QxRoles_GetObjLstByJSONObjLst(arrQxRolesExObjLstCache);
return arrQxRolesObjLstT;
}
try
{
const arrQxRolesExObjLst = await QxRoles_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxRolesExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxRolesExObjLst.length);
console.log(strInfo);
return arrQxRolesExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoles_GetObjLstsessionStoragePureCache(strQxPrjId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsQxRolesEN._CurrTabName, strQxPrjId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxRolesObjLstCache: Array<clsQxRolesEN> = JSON.parse(strTempObjLst);
return arrQxRolesObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoles_GetObjLstCache(strQxPrjId: string): Promise<Array<clsQxRolesEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空！(In clsQxRolesWApi.QxRoles_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxRolesWApi.QxRoles_GetObjLstCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}
let arrQxRolesObjLstCache;
switch (clsQxRolesEN.CacheModeId)
{
case "04"://sessionStorage
arrQxRolesObjLstCache = await QxRoles_GetObjLstsessionStorage(strQxPrjId);
break;
case "03"://localStorage
arrQxRolesObjLstCache = await QxRoles_GetObjLstlocalStorage(strQxPrjId);
break;
case "02"://ClientCache
arrQxRolesObjLstCache = await QxRoles_GetObjLstClientCache(strQxPrjId);
break;
default:
arrQxRolesObjLstCache = await QxRoles_GetObjLstClientCache(strQxPrjId);
break;
}
return arrQxRolesObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoles_GetObjLstPureCache(strQxPrjId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxRolesObjLstCache;
switch (clsQxRolesEN.CacheModeId)
{
case "04"://sessionStorage
arrQxRolesObjLstCache = await QxRoles_GetObjLstsessionStoragePureCache(strQxPrjId);
break;
case "03"://localStorage
arrQxRolesObjLstCache = await QxRoles_GetObjLstlocalStoragePureCache(strQxPrjId);
break;
case "02"://ClientCache
arrQxRolesObjLstCache = null;
break;
default:
arrQxRolesObjLstCache = null;
break;
}
return arrQxRolesObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRoleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxRoles_GetSubObjLstCache(objQxRolesCond: clsQxRolesEN ,strQxPrjId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxRolesObjLstCache = await QxRoles_GetObjLstCache(strQxPrjId);
let arrQxRolesSel = arrQxRolesObjLstCache;
if (objQxRolesCond.sfFldComparisonOp == null || objQxRolesCond.sfFldComparisonOp == "") return arrQxRolesSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxRolesCond.sfFldComparisonOp);
//console.log("clsQxRolesWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxRolesCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxRolesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxRolesSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxRolesCond), qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxRolesEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRoleId:关键字列表
 * @returns 对象列表
 **/
export  async function QxRoles_GetObjLstByRoleIdLstAsync(arrRoleId: Array<string>): Promise<Array<clsQxRolesEN>>  
{
const strThisFuncName = "GetObjLstByRoleIdLstAsync";
const strAction = "GetObjLstByRoleIdLst";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRoleId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoles_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoles_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrRoleIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxRoles_GetObjLstByRoleIdLstCache(arrRoleIdLst: Array<string> ,strQxPrjId: string) {
const strThisFuncName = "GetObjLstByRoleIdLstCache";
try
{
const arrQxRolesObjLstCache = await QxRoles_GetObjLstCache(strQxPrjId);
const arrQxRolesSel = arrQxRolesObjLstCache.filter(x => arrRoleIdLst.indexOf(x.roleId)>-1);
return arrQxRolesSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrRoleIdLst.join(","), qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
}

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxRoles_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxRolesEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTopPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoles_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoles_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxRoles_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxRolesEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRangePara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoles_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoles_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function QxRoles_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strQxPrjId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxRolesEN>();
const arrQxRolesObjLstCache = await QxRoles_GetObjLstCache(strQxPrjId);
if (arrQxRolesObjLstCache.length == 0) return arrQxRolesObjLstCache;
let arrQxRolesSel = arrQxRolesObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQxRolesCond = new clsQxRolesEN();
ObjectAssign(objQxRolesCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQxRolesWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxRolesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxRolesSel = arrQxRolesSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxRolesSel.length == 0) return arrQxRolesSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxRolesSel = arrQxRolesSel.sort(QxRoles_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxRolesSel = arrQxRolesSel.sort(objPagerPara.sortFun);
}
arrQxRolesSel = arrQxRolesSel.slice(intStart, intEnd);     
return arrQxRolesSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxRolesEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxRoles_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxRolesEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxRolesEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPagerPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoles_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoles_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strRoleId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxRoles_DelRecordAsync(strRoleId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strRoleId);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const configDel = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.delete(strUrl, configDel);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrRoleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxRoles_DelQxRolessAsync(arrRoleId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxRolessAsync";
const strAction = "DelQxRoless";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRoleId, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw data.errorMsg;
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function QxRoles_DelQxRolessByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxRolessByCondAsync";
const strAction = "DelQxRolessByCond";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objQxRolesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxRoles_AddNewRecordAsync(objQxRolesEN: clsQxRolesEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxRolesEN.roleId === null || objQxRolesEN.roleId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxRolesEN);
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolesEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objQxRolesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxRoles_AddNewRecordWithMaxIdAsync(objQxRolesEN: clsQxRolesEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolesEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxRolesEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxRoles_AddNewRecordWithReturnKeyAsync(objQxRolesEN: clsQxRolesEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolesEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objQxRolesEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxRoles_UpdateRecordAsync(objQxRolesEN: clsQxRolesEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxRolesEN.sfUpdFldSetStr === undefined || objQxRolesEN.sfUpdFldSetStr === null || objQxRolesEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRolesEN.roleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolesEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objQxRolesEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRoles_UpdateWithConditionAsync(objQxRolesEN: clsQxRolesEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxRolesEN.sfUpdFldSetStr === undefined || objQxRolesEN.sfUpdFldSetStr === null || objQxRolesEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRolesEN.roleId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);
objQxRolesEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolesEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrRoleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxRoles_IsExistRecordCache(objQxRolesCond: clsQxRolesEN,strQxPrjId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrQxRolesObjLstCache = await QxRoles_GetObjLstCache(strQxPrjId);
if (arrQxRolesObjLstCache == null) return false;
let arrQxRolesSel = arrQxRolesObjLstCache;
if (objQxRolesCond.sfFldComparisonOp == null || objQxRolesCond.sfFldComparisonOp == "") return arrQxRolesSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxRolesCond.sfFldComparisonOp);
//console.log("clsQxRolesWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxRolesCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxRolesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxRolesSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxRolesCond), qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return false;
}

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function QxRoles_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strRoleId:所给的关键字
 * @returns 对象
*/
export  async function QxRoles_IsExistCache(strRoleId:string,strQxPrjId:string) {
const strThisFuncName = "IsExistCache";
const arrQxRolesObjLstCache = await QxRoles_GetObjLstCache(strQxPrjId);
if (arrQxRolesObjLstCache == null) return false;
try
{
const arrQxRolesSel = arrQxRolesObjLstCache.filter(x => x.roleId == strRoleId);
if (arrQxRolesSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e)
{
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strRoleId, qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strRoleId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxRoles_IsExistAsync(strRoleId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleId
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export  async function QxRoles_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objQxRolesCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxRoles_GetRecCountByCondCache(objQxRolesCond: clsQxRolesEN ,strQxPrjId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxRolesObjLstCache = await QxRoles_GetObjLstCache(strQxPrjId);
if (arrQxRolesObjLstCache == null) return 0;
let arrQxRolesSel = arrQxRolesObjLstCache;
if (objQxRolesCond.sfFldComparisonOp == null || objQxRolesCond.sfFldComparisonOp == "") return arrQxRolesSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxRolesCond.sfFldComparisonOp);
//console.log("clsQxRolesWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxRolesCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxRolesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxRolesSel = arrQxRolesSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRolesSel = arrQxRolesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxRolesSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxRolesCond), qxRoles_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/

 /**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export  async function QxRoles_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdByPrefixAsync";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrefix,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function QxRoles_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxRoles_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrefix,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoles_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function QxRoles_GetWebApiUrl(strController: string, strAction: string): string {
let strServiceUrl:string;
let strCurrIPAddressAndPort = "";
if (clsSysPara4WebApi.bolIsLocalHost == false)
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
}
else
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
}
if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true)
{
strServiceUrl = Format("{0}/{1}/{2}", strCurrIPAddressAndPort, strController, strAction);
}
else
{
strServiceUrl = Format("{0}/{1}/{2}/{3}", strCurrIPAddressAndPort, clsSysPara4WebApi.CurrPrx, strController, strAction);
}
return strServiceUrl;
}

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export  function QxRoles_ReFreshCache(strQxPrjId: string):void
{

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In clsQxRolesWApi.clsQxRolesWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(clsQxRolesWApi.clsQxRolesWApi.ReFreshCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsQxRolesEN._CurrTabName, strQxPrjId);
switch (clsQxRolesEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function QxRoles_ReFreshThisCache(strQxPrjId: string):void
{

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In clsQxRolesWApi.QxRoles_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(clsQxRolesWApi.QxRoles_ReFreshThisCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsQxRolesEN._CurrTabName, strQxPrjId);
switch (clsQxRolesEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
const strMsg = Format("刷新缓存成功!");
console.trace(strMsg);
}
else
{
const strMsg = Format("刷新缓存已经关闭。");
console.trace(strMsg);
}
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strQxPrjId:
*/
export  async function QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strQxPrjId: string)
{

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空！(In clsQxRolesWApi.BindDdl_RoleIdByQxPrjIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxRolesWApi.BindDdl_RoleIdByQxPrjIdInDiv)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_RoleIdByQxPrjIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_RoleIdByQxPrjIdInDivCache");
let arrObjLstSel = await QxRoles_GetObjLstCache(strQxPrjId);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.qxPrjId == strQxPrjId);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxRolesEN.con_RoleId, clsQxRolesEN.con_RoleName, "角色");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxRoles_CheckPropertyNew(pobjQxRolesEN: clsQxRolesEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxRolesEN.roleName) === true )
{
 throw new Error(`(errid:Watl000411)字段[角色名称]不能为空(In 角色)!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.qxPrjId) === true 
 || pobjQxRolesEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 角色)!(clsQxRolesBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRolesEN.roleId) == false && GetStrLen(pobjQxRolesEN.roleId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[角色Id(roleId)]的长度不能超过8(In 角色(QxRoles))!值:${pobjQxRolesEN.roleId}(clsQxRolesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.roleName) == false && GetStrLen(pobjQxRolesEN.roleName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[角色名称(roleName)]的长度不能超过50(In 角色(QxRoles))!值:${pobjQxRolesEN.roleName}(clsQxRolesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.roleENName) == false && GetStrLen(pobjQxRolesEN.roleENName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[角色英文名(roleENName)]的长度不能超过50(In 角色(QxRoles))!值:${pobjQxRolesEN.roleENName}(clsQxRolesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.userType) == false && GetStrLen(pobjQxRolesEN.userType) > 50)
{
 throw new Error(`(errid:Watl000413)字段[用户类型(userType)]的长度不能超过50(In 角色(QxRoles))!值:${pobjQxRolesEN.userType}(clsQxRolesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.qxPrjId) == false && GetStrLen(pobjQxRolesEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色(QxRoles))!值:${pobjQxRolesEN.qxPrjId}(clsQxRolesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.updDate) == false && GetStrLen(pobjQxRolesEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 角色(QxRoles))!值:${pobjQxRolesEN.updDate}(clsQxRolesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.updUserId) == false && GetStrLen(pobjQxRolesEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 角色(QxRoles))!值:${pobjQxRolesEN.updUserId}(clsQxRolesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.memo) == false && GetStrLen(pobjQxRolesEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 角色(QxRoles))!值:${pobjQxRolesEN.memo}(clsQxRolesBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxRolesEN.roleId) == false && undefined !== pobjQxRolesEN.roleId && tzDataType.isString(pobjQxRolesEN.roleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色Id(roleId)]的值:[${pobjQxRolesEN.roleId}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.roleName) == false && undefined !== pobjQxRolesEN.roleName && tzDataType.isString(pobjQxRolesEN.roleName) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色名称(roleName)]的值:[${pobjQxRolesEN.roleName}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.roleENName) == false && undefined !== pobjQxRolesEN.roleENName && tzDataType.isString(pobjQxRolesEN.roleENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色英文名(roleENName)]的值:[${pobjQxRolesEN.roleENName}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (null != pobjQxRolesEN.roleIndex && undefined !== pobjQxRolesEN.roleIndex && tzDataType.isNumber(pobjQxRolesEN.roleIndex) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色序号(roleIndex)]的值:[${pobjQxRolesEN.roleIndex}], 非法,应该为数值型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.userType) == false && undefined !== pobjQxRolesEN.userType && tzDataType.isString(pobjQxRolesEN.userType) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户类型(userType)]的值:[${pobjQxRolesEN.userType}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.qxPrjId) == false && undefined !== pobjQxRolesEN.qxPrjId && tzDataType.isString(pobjQxRolesEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxRolesEN.qxPrjId}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (null != pobjQxRolesEN.isInUse && undefined !== pobjQxRolesEN.isInUse && tzDataType.isBoolean(pobjQxRolesEN.isInUse) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否在使用(isInUse)]的值:[${pobjQxRolesEN.isInUse}], 非法,应该为布尔型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.updDate) == false && undefined !== pobjQxRolesEN.updDate && tzDataType.isString(pobjQxRolesEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxRolesEN.updDate}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.updUserId) == false && undefined !== pobjQxRolesEN.updUserId && tzDataType.isString(pobjQxRolesEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxRolesEN.updUserId}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.memo) == false && undefined !== pobjQxRolesEN.memo && tzDataType.isString(pobjQxRolesEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxRolesEN.memo}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxRolesEN.qxPrjId) == false && pobjQxRolesEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxRolesEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 角色)!(clsQxRolesBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxRoles_CheckProperty4Update(pobjQxRolesEN: clsQxRolesEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRolesEN.roleId) == false && GetStrLen(pobjQxRolesEN.roleId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[角色Id(roleId)]的长度不能超过8(In 角色(QxRoles))!值:${pobjQxRolesEN.roleId}(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.roleName) == false && GetStrLen(pobjQxRolesEN.roleName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[角色名称(roleName)]的长度不能超过50(In 角色(QxRoles))!值:${pobjQxRolesEN.roleName}(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.roleENName) == false && GetStrLen(pobjQxRolesEN.roleENName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[角色英文名(roleENName)]的长度不能超过50(In 角色(QxRoles))!值:${pobjQxRolesEN.roleENName}(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.userType) == false && GetStrLen(pobjQxRolesEN.userType) > 50)
{
 throw new Error(`(errid:Watl000416)字段[用户类型(userType)]的长度不能超过50(In 角色(QxRoles))!值:${pobjQxRolesEN.userType}(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.qxPrjId) == false && GetStrLen(pobjQxRolesEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色(QxRoles))!值:${pobjQxRolesEN.qxPrjId}(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.updDate) == false && GetStrLen(pobjQxRolesEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 角色(QxRoles))!值:${pobjQxRolesEN.updDate}(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.updUserId) == false && GetStrLen(pobjQxRolesEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 角色(QxRoles))!值:${pobjQxRolesEN.updUserId}(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.memo) == false && GetStrLen(pobjQxRolesEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 角色(QxRoles))!值:${pobjQxRolesEN.memo}(clsQxRolesBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxRolesEN.roleId) == false && undefined !== pobjQxRolesEN.roleId && tzDataType.isString(pobjQxRolesEN.roleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色Id(roleId)]的值:[${pobjQxRolesEN.roleId}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.roleName) == false && undefined !== pobjQxRolesEN.roleName && tzDataType.isString(pobjQxRolesEN.roleName) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色名称(roleName)]的值:[${pobjQxRolesEN.roleName}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.roleENName) == false && undefined !== pobjQxRolesEN.roleENName && tzDataType.isString(pobjQxRolesEN.roleENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色英文名(roleENName)]的值:[${pobjQxRolesEN.roleENName}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
if (null != pobjQxRolesEN.roleIndex && undefined !== pobjQxRolesEN.roleIndex && tzDataType.isNumber(pobjQxRolesEN.roleIndex) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色序号(roleIndex)]的值:[${pobjQxRolesEN.roleIndex}], 非法,应该为数值型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.userType) == false && undefined !== pobjQxRolesEN.userType && tzDataType.isString(pobjQxRolesEN.userType) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户类型(userType)]的值:[${pobjQxRolesEN.userType}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.qxPrjId) == false && undefined !== pobjQxRolesEN.qxPrjId && tzDataType.isString(pobjQxRolesEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxRolesEN.qxPrjId}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
if (null != pobjQxRolesEN.isInUse && undefined !== pobjQxRolesEN.isInUse && tzDataType.isBoolean(pobjQxRolesEN.isInUse) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否在使用(isInUse)]的值:[${pobjQxRolesEN.isInUse}], 非法,应该为布尔型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.updDate) == false && undefined !== pobjQxRolesEN.updDate && tzDataType.isString(pobjQxRolesEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxRolesEN.updDate}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.updUserId) == false && undefined !== pobjQxRolesEN.updUserId && tzDataType.isString(pobjQxRolesEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxRolesEN.updUserId}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRolesEN.memo) == false && undefined !== pobjQxRolesEN.memo && tzDataType.isString(pobjQxRolesEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxRolesEN.memo}], 非法,应该为字符型(In 角色(QxRoles))!(clsQxRolesBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxRolesEN.roleId) === true 
 || pobjQxRolesEN.roleId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[角色Id]不能为空(In 角色)!(clsQxRolesBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxRolesEN.qxPrjId) == false && pobjQxRolesEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxRolesEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 角色)!(clsQxRolesBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxRoles_GetJSONStrByObj (pobjQxRolesEN: clsQxRolesEN): string
{
pobjQxRolesEN.sfUpdFldSetStr = pobjQxRolesEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxRolesEN);
}
catch(objException)
{
const strEx = GetExceptionStr(objException);
myShowErrorMsg(strEx);
}
if (strJson == undefined) return "";
else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxRoles_GetObjLstByJSONStr (strJSON: string): Array<clsQxRolesEN>
{
let arrQxRolesObjLst = new Array<clsQxRolesEN>();
if (strJSON === "")
{
return arrQxRolesObjLst;
}
try
{
arrQxRolesObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxRolesObjLst;
}
return arrQxRolesObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxRolesObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxRoles_GetObjLstByJSONObjLst (arrQxRolesObjLstS: Array<clsQxRolesEN>): Array<clsQxRolesEN>
{
const arrQxRolesObjLst = new Array<clsQxRolesEN>();
for (const objInFor of arrQxRolesObjLstS) {
const obj1 = QxRoles_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxRolesObjLst.push(obj1);
}
return arrQxRolesObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxRoles_GetObjByJSONStr (strJSON: string): clsQxRolesEN
{
let pobjQxRolesEN = new clsQxRolesEN();
if (strJSON === "")
{
return pobjQxRolesEN;
}
try
{
pobjQxRolesEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxRolesEN;
}
return pobjQxRolesEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxRoles_GetCombineCondition(objQxRolesCond: clsQxRolesEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_RoleId) == true)
{
const strComparisonOpRoleId:string = objQxRolesCond.dicFldComparisonOp[clsQxRolesEN.con_RoleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolesEN.con_RoleId, objQxRolesCond.roleId, strComparisonOpRoleId);
}
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_RoleName) == true)
{
const strComparisonOpRoleName:string = objQxRolesCond.dicFldComparisonOp[clsQxRolesEN.con_RoleName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolesEN.con_RoleName, objQxRolesCond.roleName, strComparisonOpRoleName);
}
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_RoleENName) == true)
{
const strComparisonOpRoleENName:string = objQxRolesCond.dicFldComparisonOp[clsQxRolesEN.con_RoleENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolesEN.con_RoleENName, objQxRolesCond.roleENName, strComparisonOpRoleENName);
}
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_RoleIndex) == true)
{
const strComparisonOpRoleIndex:string = objQxRolesCond.dicFldComparisonOp[clsQxRolesEN.con_RoleIndex];
strWhereCond += Format(" And {0} {2} {1}", clsQxRolesEN.con_RoleIndex, objQxRolesCond.roleIndex, strComparisonOpRoleIndex);
}
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_UserType) == true)
{
const strComparisonOpUserType:string = objQxRolesCond.dicFldComparisonOp[clsQxRolesEN.con_UserType];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolesEN.con_UserType, objQxRolesCond.userType, strComparisonOpUserType);
}
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxRolesCond.dicFldComparisonOp[clsQxRolesEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolesEN.con_QxPrjId, objQxRolesCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_IsInUse) == true)
{
if (objQxRolesCond.isInUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxRolesEN.con_IsInUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxRolesEN.con_IsInUse);
}
}
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxRolesCond.dicFldComparisonOp[clsQxRolesEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolesEN.con_UpdDate, objQxRolesCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxRolesCond.dicFldComparisonOp[clsQxRolesEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolesEN.con_UpdUserId, objQxRolesCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxRolesCond.dicFldComparisonOp, clsQxRolesEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxRolesCond.dicFldComparisonOp[clsQxRolesEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolesEN.con_Memo, objQxRolesCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxRoles(角色),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRoleName: 角色名称(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxRoles_GetUniCondStr(objQxRolesEN: clsQxRolesEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and RoleName = '{0}'", objQxRolesEN.roleName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxRolesEN.qxPrjId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxRoles(角色),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRoleName: 角色名称(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxRoles_GetUniCondStr4Update(objQxRolesEN: clsQxRolesEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and RoleId <> '{0}'", objQxRolesEN.roleId);
 strWhereCond +=  Format(" and RoleName = '{0}'", objQxRolesEN.roleName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxRolesEN.qxPrjId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxRolesENS:源对象
 * @param objQxRolesENT:目标对象
*/
export  function QxRoles_GetObjFromJsonObj(objQxRolesENS: clsQxRolesEN): clsQxRolesEN 
{
 const objQxRolesENT: clsQxRolesEN = new clsQxRolesEN();
ObjectAssign(objQxRolesENT, objQxRolesENS);
 return objQxRolesENT;
}