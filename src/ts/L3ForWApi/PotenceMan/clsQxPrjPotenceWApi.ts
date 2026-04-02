
 /**
 * 类名:clsQxPrjPotenceWApi
 * 表名:QxPrjPotence(00140005)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/20 23:58:36
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程权限(QxPrjPotence)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年01月20日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxPrjPotenceEN } from "@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxPrjPotence_Controller = "QxPrjPotenceApi";
 export const qxPrjPotence_ConstructorName = "qxPrjPotence";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPotenceId:关键字
 * @returns 对象
 **/
export  async function QxPrjPotence_GetObjByPotenceIdAsync(strPotenceId: string): Promise<clsQxPrjPotenceEN|null>  
{
const strThisFuncName = "GetObjByPotenceIdAsync";

if (IsNullOrEmpty(strPotenceId) == true)
{
  const strMsg = Format("参数:[strPotenceId]不能为空!(In clsQxPrjPotenceWApi.GetObjByPotenceIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceId.length != 8)
{
const strMsg = Format("缓存分类变量:[strPotenceId]的长度:[{0}]不正确!(clsQxPrjPotenceWApi.GetObjByPotenceIdAsync)", strPotenceId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByPotenceId";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPotenceId,
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
const objQxPrjPotence = QxPrjPotence_GetObjFromJsonObj(returnObj);
return objQxPrjPotence;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param strPotenceId:所给的关键字
 * @returns 对象
*/
export  async function QxPrjPotence_GetObjByPotenceIdCache(strPotenceId:string,strQxPrjId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByPotenceIdCache";

if (IsNullOrEmpty(strPotenceId) == true)
{
  const strMsg = Format("参数:[strPotenceId]不能为空!(In clsQxPrjPotenceWApi.GetObjByPotenceIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceId.length != 8)
{
const strMsg = Format("缓存分类变量:[strPotenceId]的长度:[{0}]不正确!(clsQxPrjPotenceWApi.GetObjByPotenceIdCache)", strPotenceId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstCache(strQxPrjId);
try
{
const arrQxPrjPotenceSel = arrQxPrjPotenceObjLstCache.filter(x => 
 x.potenceId == strPotenceId );
let objQxPrjPotence: clsQxPrjPotenceEN;
if (arrQxPrjPotenceSel.length > 0)
{
objQxPrjPotence = arrQxPrjPotenceSel[0];
return objQxPrjPotence;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxPrjPotenceConst = await QxPrjPotence_GetObjByPotenceIdAsync(strPotenceId);
if (objQxPrjPotenceConst != null)
{
QxPrjPotence_ReFreshThisCache(strQxPrjId);
return objQxPrjPotenceConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strPotenceId, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strPotenceId:所给的关键字
 * @returns 对象
*/
export  async function QxPrjPotence_GetObjByPotenceIdlocalStorage(strPotenceId: string) {
const strThisFuncName = "GetObjByPotenceIdlocalStorage";

if (IsNullOrEmpty(strPotenceId) == true)
{
  const strMsg = Format("参数:[strPotenceId]不能为空!(In clsQxPrjPotenceWApi.GetObjByPotenceIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceId.length != 8)
{
const strMsg = Format("缓存分类变量:[strPotenceId]的长度:[{0}]不正确!(clsQxPrjPotenceWApi.GetObjByPotenceIdlocalStorage)", strPotenceId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxPrjPotenceEN._CurrTabName, strPotenceId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxPrjPotenceCache: clsQxPrjPotenceEN = JSON.parse(strTempObj);
return objQxPrjPotenceCache;
}
try
{
const objQxPrjPotence = await QxPrjPotence_GetObjByPotenceIdAsync(strPotenceId);
if (objQxPrjPotence != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxPrjPotence));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxPrjPotence;
}
return objQxPrjPotence;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strPotenceId, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxPrjPotence:所给的对象
 * @returns 对象
*/
export  async function QxPrjPotence_UpdateObjInLstCache(objQxPrjPotence: clsQxPrjPotenceEN,strQxPrjId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstCache(strQxPrjId);
const obj = arrQxPrjPotenceObjLstCache.find(x => x.potenceTypeId == objQxPrjPotence.potenceTypeId && x.potenceName == objQxPrjPotence.potenceName);
if (obj != null)
{
objQxPrjPotence.potenceId = obj.potenceId;
ObjectAssign( obj, objQxPrjPotence);
}
else
{
arrQxPrjPotenceObjLstCache.push(objQxPrjPotence);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPotenceId:所给的关键字
 * @returns 对象
*/
export  async function QxPrjPotence_GetNameByPotenceIdCache(strPotenceId: string,strQxPrjId: string) {

if (IsNullOrEmpty(strPotenceId) == true)
{
  const strMsg = Format("参数:[strPotenceId]不能为空!(In clsQxPrjPotenceWApi.GetNameByPotenceIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceId.length != 8)
{
const strMsg = Format("缓存分类变量:[strPotenceId]的长度:[{0}]不正确!(clsQxPrjPotenceWApi.GetNameByPotenceIdCache)", strPotenceId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstCache(strQxPrjId);
if (arrQxPrjPotenceObjLstCache == null) return "";
try
{
const arrQxPrjPotenceSel = arrQxPrjPotenceObjLstCache.filter(x => 
 x.potenceId == strPotenceId );
let objQxPrjPotence: clsQxPrjPotenceEN;
if (arrQxPrjPotenceSel.length > 0)
{
objQxPrjPotence = arrQxPrjPotenceSel[0];
return objQxPrjPotence.potenceName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strPotenceId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strQxPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function QxPrjPotence_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strQxPrjIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strQxPrjIdClassfy) == true)
{
  const strMsg = Format("参数:[strQxPrjIdClassfy]不能为空!(In clsQxPrjPotenceWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjIdClassfy.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjIdClassfy]的长度:[{0}]不正确!(clsQxPrjPotenceWApi.func)", strQxPrjIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsQxPrjPotenceEN.con_PotenceId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxPrjPotenceEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxPrjPotenceEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strPotenceId = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objQxPrjPotence = await QxPrjPotence_GetObjByPotenceIdCache(strPotenceId , strQxPrjIdClassfy);
if (objQxPrjPotence == null) return "";
if (objQxPrjPotence.GetFldValue(strOutFldName) == null) return "";
return objQxPrjPotence.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPrjPotence_SortFunDefa(a:clsQxPrjPotenceEN , b:clsQxPrjPotenceEN): number 
{
return a.potenceId.localeCompare(b.potenceId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPrjPotence_SortFunDefa2Fld(a:clsQxPrjPotenceEN , b:clsQxPrjPotenceEN): number 
{
if (a.potenceName == b.potenceName) return a.qxPrjId.localeCompare(b.qxPrjId);
else return a.potenceName.localeCompare(b.potenceName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPrjPotence_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxPrjPotenceEN.con_PotenceId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return a.potenceId.localeCompare(b.potenceId);
}
case clsQxPrjPotenceEN.con_PotenceName:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return a.potenceName.localeCompare(b.potenceName);
}
case clsQxPrjPotenceEN.con_QxPrjId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxPrjPotenceEN.con_FuncModuleId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
if (a.funcModuleId == null) return -1;
if (b.funcModuleId == null) return 1;
return a.funcModuleId.localeCompare(b.funcModuleId);
}
case clsQxPrjPotenceEN.con_PotenceTypeId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return a.potenceTypeId.localeCompare(b.potenceTypeId);
}
case clsQxPrjPotenceEN.con_MenuId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
if (a.menuId == null) return -1;
if (b.menuId == null) return 1;
return a.menuId.localeCompare(b.menuId);
}
case clsQxPrjPotenceEN.con_MenuId4Win:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
if (a.menuId4Win == null) return -1;
if (b.menuId4Win == null) return 1;
return a.menuId4Win.localeCompare(b.menuId4Win);
}
case clsQxPrjPotenceEN.con_UpdDate:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxPrjPotenceEN.con_UpdUserId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return a.updUserId.localeCompare(b.updUserId);
}
case clsQxPrjPotenceEN.con_Memo:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjPotence]中不存在!(in ${ qxPrjPotence_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxPrjPotenceEN.con_PotenceId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return b.potenceId.localeCompare(a.potenceId);
}
case clsQxPrjPotenceEN.con_PotenceName:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return b.potenceName.localeCompare(a.potenceName);
}
case clsQxPrjPotenceEN.con_QxPrjId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxPrjPotenceEN.con_FuncModuleId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
if (b.funcModuleId == null) return -1;
if (a.funcModuleId == null) return 1;
return b.funcModuleId.localeCompare(a.funcModuleId);
}
case clsQxPrjPotenceEN.con_PotenceTypeId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return b.potenceTypeId.localeCompare(a.potenceTypeId);
}
case clsQxPrjPotenceEN.con_MenuId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
if (b.menuId == null) return -1;
if (a.menuId == null) return 1;
return b.menuId.localeCompare(a.menuId);
}
case clsQxPrjPotenceEN.con_MenuId4Win:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
if (b.menuId4Win == null) return -1;
if (a.menuId4Win == null) return 1;
return b.menuId4Win.localeCompare(a.menuId4Win);
}
case clsQxPrjPotenceEN.con_UpdDate:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxPrjPotenceEN.con_UpdUserId:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
return b.updUserId.localeCompare(a.updUserId);
}
case clsQxPrjPotenceEN.con_Memo:
return (a: clsQxPrjPotenceEN, b: clsQxPrjPotenceEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjPotence]中不存在!(in ${ qxPrjPotence_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxPrjPotence_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxPrjPotenceEN.con_PotenceId:
return (obj: clsQxPrjPotenceEN) => {
return obj.potenceId === value;
}
case clsQxPrjPotenceEN.con_PotenceName:
return (obj: clsQxPrjPotenceEN) => {
return obj.potenceName === value;
}
case clsQxPrjPotenceEN.con_QxPrjId:
return (obj: clsQxPrjPotenceEN) => {
return obj.qxPrjId === value;
}
case clsQxPrjPotenceEN.con_FuncModuleId:
return (obj: clsQxPrjPotenceEN) => {
return obj.funcModuleId === value;
}
case clsQxPrjPotenceEN.con_PotenceTypeId:
return (obj: clsQxPrjPotenceEN) => {
return obj.potenceTypeId === value;
}
case clsQxPrjPotenceEN.con_MenuId:
return (obj: clsQxPrjPotenceEN) => {
return obj.menuId === value;
}
case clsQxPrjPotenceEN.con_MenuId4Win:
return (obj: clsQxPrjPotenceEN) => {
return obj.menuId4Win === value;
}
case clsQxPrjPotenceEN.con_UpdDate:
return (obj: clsQxPrjPotenceEN) => {
return obj.updDate === value;
}
case clsQxPrjPotenceEN.con_UpdUserId:
return (obj: clsQxPrjPotenceEN) => {
return obj.updUserId === value;
}
case clsQxPrjPotenceEN.con_Memo:
return (obj: clsQxPrjPotenceEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjPotence]中不存在!(in ${ qxPrjPotence_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strQxPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function QxPrjPotence_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strQxPrjIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strQxPrjIdClassfy) == true)
{
  const strMsg = Format("参数:[strQxPrjIdClassfy]不能为空!(In clsQxPrjPotenceWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjIdClassfy.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjIdClassfy]的长度:[{0}]不正确!(clsQxPrjPotenceWApi.funcKey)", strQxPrjIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsQxPrjPotenceEN.con_PotenceId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxPrjPotence = await QxPrjPotence_GetObjLstCache(strQxPrjIdClassfy);
if (arrQxPrjPotence == null) return [];
let arrQxPrjPotenceSel = arrQxPrjPotence;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxPrjPotenceSel.length == 0) return [];
return arrQxPrjPotenceSel.map(x=>x.potenceId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjPotence_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetFirstObjAsync(strWhereCond: string): Promise<clsQxPrjPotenceEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const objQxPrjPotence = QxPrjPotence_GetObjFromJsonObj(returnObj);
return objQxPrjPotence;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetObjLstClientCache(strQxPrjId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsQxPrjPotenceEN.WhereFormat) == false)
{
strWhereCond = Format(clsQxPrjPotenceEN.WhereFormat, strQxPrjId);
}
else
{
strWhereCond = Format("QxPrjId='{0}'", strQxPrjId);
}
const strKey = Format("{0}_{1}", clsQxPrjPotenceEN._CurrTabName, strQxPrjId);
if (IsNullOrEmpty(clsQxPrjPotenceEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxPrjPotenceEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxPrjPotenceExObjLstCache: Array<clsQxPrjPotenceEN> = CacheHelper.Get(strKey);
const arrQxPrjPotenceObjLstT = QxPrjPotence_GetObjLstByJSONObjLst(arrQxPrjPotenceExObjLstCache);
return arrQxPrjPotenceObjLstT;
}
try
{
const arrQxPrjPotenceExObjLst = await QxPrjPotence_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxPrjPotenceExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxPrjPotenceExObjLst.length);
console.log(strInfo);
return arrQxPrjPotenceExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPrjPotence_GetObjLstlocalStorage(strQxPrjId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsQxPrjPotenceEN.WhereFormat) == false)
{
strWhereCond = Format(clsQxPrjPotenceEN.WhereFormat, strQxPrjId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsQxPrjPotenceEN.con_QxPrjId, strQxPrjId);
}
const strKey = Format("{0}_{1}", clsQxPrjPotenceEN._CurrTabName, strQxPrjId);
if (IsNullOrEmpty(clsQxPrjPotenceEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxPrjPotenceEN.CacheAddiCondition);
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
const arrQxPrjPotenceExObjLstCache: Array<clsQxPrjPotenceEN> = JSON.parse(strTempObjLst);
const arrQxPrjPotenceObjLstT = QxPrjPotence_GetObjLstByJSONObjLst(arrQxPrjPotenceExObjLstCache);
return arrQxPrjPotenceObjLstT;
}
try
{
const arrQxPrjPotenceExObjLst = await QxPrjPotence_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxPrjPotenceExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxPrjPotenceExObjLst.length);
console.log(strInfo);
return arrQxPrjPotenceExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPrjPotence_GetObjLstlocalStoragePureCache(strQxPrjId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsQxPrjPotenceEN._CurrTabName, strQxPrjId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxPrjPotenceObjLstCache: Array<clsQxPrjPotenceEN> = JSON.parse(strTempObjLst);
return arrQxPrjPotenceObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxPrjPotence_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxPrjPotenceEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetObjLstsessionStorage(strQxPrjId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsQxPrjPotenceEN.WhereFormat) == false)
{
strWhereCond = Format(clsQxPrjPotenceEN.WhereFormat, strQxPrjId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsQxPrjPotenceEN.con_QxPrjId, strQxPrjId);
}
const strKey = Format("{0}_{1}", clsQxPrjPotenceEN._CurrTabName, strQxPrjId);
if (IsNullOrEmpty(clsQxPrjPotenceEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxPrjPotenceEN.CacheAddiCondition);
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
const arrQxPrjPotenceExObjLstCache: Array<clsQxPrjPotenceEN> = JSON.parse(strTempObjLst);
const arrQxPrjPotenceObjLstT = QxPrjPotence_GetObjLstByJSONObjLst(arrQxPrjPotenceExObjLstCache);
return arrQxPrjPotenceObjLstT;
}
try
{
const arrQxPrjPotenceExObjLst = await QxPrjPotence_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxPrjPotenceExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxPrjPotenceExObjLst.length);
console.log(strInfo);
return arrQxPrjPotenceExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPrjPotence_GetObjLstsessionStoragePureCache(strQxPrjId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsQxPrjPotenceEN._CurrTabName, strQxPrjId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxPrjPotenceObjLstCache: Array<clsQxPrjPotenceEN> = JSON.parse(strTempObjLst);
return arrQxPrjPotenceObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPrjPotence_GetObjLstCache(strQxPrjId: string): Promise<Array<clsQxPrjPotenceEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空！(In clsQxPrjPotenceWApi.QxPrjPotence_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxPrjPotenceWApi.QxPrjPotence_GetObjLstCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}
let arrQxPrjPotenceObjLstCache;
switch (clsQxPrjPotenceEN.CacheModeId)
{
case "04"://sessionStorage
arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstsessionStorage(strQxPrjId);
break;
case "03"://localStorage
arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstlocalStorage(strQxPrjId);
break;
case "02"://ClientCache
arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstClientCache(strQxPrjId);
break;
default:
arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstClientCache(strQxPrjId);
break;
}
return arrQxPrjPotenceObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPrjPotence_GetObjLstPureCache(strQxPrjId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxPrjPotenceObjLstCache;
switch (clsQxPrjPotenceEN.CacheModeId)
{
case "04"://sessionStorage
arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstsessionStoragePureCache(strQxPrjId);
break;
case "03"://localStorage
arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstlocalStoragePureCache(strQxPrjId);
break;
case "02"://ClientCache
arrQxPrjPotenceObjLstCache = null;
break;
default:
arrQxPrjPotenceObjLstCache = null;
break;
}
return arrQxPrjPotenceObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPotenceIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxPrjPotence_GetSubObjLstCache(objQxPrjPotenceCond: clsQxPrjPotenceEN ,strQxPrjId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstCache(strQxPrjId);
let arrQxPrjPotenceSel = arrQxPrjPotenceObjLstCache;
if (objQxPrjPotenceCond.sfFldComparisonOp == null || objQxPrjPotenceCond.sfFldComparisonOp == "") return arrQxPrjPotenceSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxPrjPotenceCond.sfFldComparisonOp);
//console.log("clsQxPrjPotenceWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxPrjPotenceCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxPrjPotenceCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxPrjPotenceSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxPrjPotenceCond), qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxPrjPotenceEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPotenceId:关键字列表
 * @returns 对象列表
 **/
export  async function QxPrjPotence_GetObjLstByPotenceIdLstAsync(arrPotenceId: Array<string>): Promise<Array<clsQxPrjPotenceEN>>  
{
const strThisFuncName = "GetObjLstByPotenceIdLstAsync";
const strAction = "GetObjLstByPotenceIdLst";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPotenceId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param arrstrPotenceIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxPrjPotence_GetObjLstByPotenceIdLstCache(arrPotenceIdLst: Array<string> ,strQxPrjId: string) {
const strThisFuncName = "GetObjLstByPotenceIdLstCache";
try
{
const arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstCache(strQxPrjId);
const arrQxPrjPotenceSel = arrQxPrjPotenceObjLstCache.filter(x => arrPotenceIdLst.indexOf(x.potenceId)>-1);
return arrQxPrjPotenceSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrPotenceIdLst.join(","), qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxPrjPotenceEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxPrjPotenceEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strQxPrjId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxPrjPotenceEN>();
const arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstCache(strQxPrjId);
if (arrQxPrjPotenceObjLstCache.length == 0) return arrQxPrjPotenceObjLstCache;
let arrQxPrjPotenceSel = arrQxPrjPotenceObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQxPrjPotenceCond = new clsQxPrjPotenceEN();
ObjectAssign(objQxPrjPotenceCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQxPrjPotenceWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxPrjPotenceCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxPrjPotenceSel.length == 0) return arrQxPrjPotenceSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxPrjPotenceSel = arrQxPrjPotenceSel.sort(QxPrjPotence_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxPrjPotenceSel = arrQxPrjPotenceSel.sort(objPagerPara.sortFun);
}
arrQxPrjPotenceSel = arrQxPrjPotenceSel.slice(intStart, intEnd);     
return arrQxPrjPotenceSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxPrjPotenceEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxPrjPotence_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxPrjPotenceEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxPrjPotenceEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param strPotenceId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxPrjPotence_DelRecordAsync(strPotenceId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strPotenceId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param arrPotenceId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxPrjPotence_DelQxPrjPotencesAsync(arrPotenceId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxPrjPotencesAsync";
const strAction = "DelQxPrjPotences";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPotenceId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_DelQxPrjPotencesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxPrjPotencesByCondAsync";
const strAction = "DelQxPrjPotencesByCond";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param objQxPrjPotenceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPrjPotence_AddNewRecordAsync(objQxPrjPotenceEN: clsQxPrjPotenceEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxPrjPotenceEN.potenceId === null || objQxPrjPotenceEN.potenceId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxPrjPotenceEN);
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param objQxPrjPotenceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPrjPotence_AddNewRecordWithMaxIdAsync(objQxPrjPotenceEN: clsQxPrjPotenceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param objQxPrjPotenceEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxPrjPotence_AddNewRecordWithReturnKeyAsync(objQxPrjPotenceEN: clsQxPrjPotenceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param objQxPrjPotenceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPrjPotence_UpdateRecordAsync(objQxPrjPotenceEN: clsQxPrjPotenceEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxPrjPotenceEN.sfUpdFldSetStr === undefined || objQxPrjPotenceEN.sfUpdFldSetStr === null || objQxPrjPotenceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjPotenceEN.potenceId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param objQxPrjPotenceEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjPotence_UpdateWithConditionAsync(objQxPrjPotenceEN: clsQxPrjPotenceEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxPrjPotenceEN.sfUpdFldSetStr === undefined || objQxPrjPotenceEN.sfUpdFldSetStr === null || objQxPrjPotenceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjPotenceEN.potenceId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);
objQxPrjPotenceEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param objstrPotenceIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxPrjPotence_IsExistRecordCache(objQxPrjPotenceCond: clsQxPrjPotenceEN,strQxPrjId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstCache(strQxPrjId);
if (arrQxPrjPotenceObjLstCache == null) return false;
let arrQxPrjPotenceSel = arrQxPrjPotenceObjLstCache;
if (objQxPrjPotenceCond.sfFldComparisonOp == null || objQxPrjPotenceCond.sfFldComparisonOp == "") return arrQxPrjPotenceSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxPrjPotenceCond.sfFldComparisonOp);
//console.log("clsQxPrjPotenceWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxPrjPotenceCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxPrjPotenceCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxPrjPotenceSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxPrjPotenceCond), qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param strPotenceId:所给的关键字
 * @returns 对象
*/
export  async function QxPrjPotence_IsExistCache(strPotenceId:string,strQxPrjId:string) {
const strThisFuncName = "IsExistCache";
const arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstCache(strQxPrjId);
if (arrQxPrjPotenceObjLstCache == null) return false;
try
{
const arrQxPrjPotenceSel = arrQxPrjPotenceObjLstCache.filter(x => x.potenceId == strPotenceId);
if (arrQxPrjPotenceSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strPotenceId, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strPotenceId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxPrjPotence_IsExistAsync(strPotenceId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPotenceId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param objQxPrjPotenceCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxPrjPotence_GetRecCountByCondCache(objQxPrjPotenceCond: clsQxPrjPotenceEN ,strQxPrjId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxPrjPotenceObjLstCache = await QxPrjPotence_GetObjLstCache(strQxPrjId);
if (arrQxPrjPotenceObjLstCache == null) return 0;
let arrQxPrjPotenceSel = arrQxPrjPotenceObjLstCache;
if (objQxPrjPotenceCond.sfFldComparisonOp == null || objQxPrjPotenceCond.sfFldComparisonOp == "") return arrQxPrjPotenceSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxPrjPotenceCond.sfFldComparisonOp);
//console.log("clsQxPrjPotenceWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxPrjPotenceCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxPrjPotenceCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxPrjPotenceSel = arrQxPrjPotenceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxPrjPotenceSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxPrjPotenceCond), qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdByPrefixAsync";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function QxPrjPotence_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjPotence_ConstructorName, strThisFuncName);
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
export  function QxPrjPotence_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxPrjPotence_ReFreshCache(strQxPrjId: string):void
{

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In clsQxPrjPotenceWApi.clsQxPrjPotenceWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(clsQxPrjPotenceWApi.clsQxPrjPotenceWApi.ReFreshCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsQxPrjPotenceEN._CurrTabName, strQxPrjId);
switch (clsQxPrjPotenceEN.CacheModeId)
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
export  function QxPrjPotence_ReFreshThisCache(strQxPrjId: string):void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsQxPrjPotenceEN._CurrTabName, strQxPrjId);
switch (clsQxPrjPotenceEN.CacheModeId)
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
export  async function QxPrjPotence_Cache(objDiv: HTMLDivElement, strDdlName: string ,strQxPrjId: string)
{

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空！(In clsQxPrjPotenceWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxPrjPotenceWApi.)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrObjLstSel = await QxPrjPotence_GetObjLstCache(strQxPrjId);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxPrjPotenceEN.con_PotenceId, clsQxPrjPotenceEN.con_PotenceName, "工程权限");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPrjPotence_CheckPropertyNew(pobjQxPrjPotenceEN: clsQxPrjPotenceEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceName) === true )
{
 throw new Error("(errid:Watl000411)字段[权限名称]不能为空(In 工程权限)!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.qxPrjId) === true 
 || pobjQxPrjPotenceEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[项目Id]不能为空(In 工程权限)!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceTypeId) === true 
 || pobjQxPrjPotenceEN.potenceTypeId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[权限类型Id]不能为空(In 工程权限)!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.updUserId) === true )
{
 throw new Error("(errid:Watl000411)字段[修改用户Id]不能为空(In 工程权限)!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceId) == false && GetStrLen(pobjQxPrjPotenceEN.potenceId) > 8)
{
 throw new Error("(errid:Watl000413)字段[权限ID(potenceId)]的长度不能超过8(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.potenceId)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceName) == false && GetStrLen(pobjQxPrjPotenceEN.potenceName) > 200)
{
 throw new Error("(errid:Watl000413)字段[权限名称(potenceName)]的长度不能超过200(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.potenceName)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.qxPrjId) == false && GetStrLen(pobjQxPrjPotenceEN.qxPrjId) > 4)
{
 throw new Error("(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.qxPrjId)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.funcModuleId) == false && GetStrLen(pobjQxPrjPotenceEN.funcModuleId) > 4)
{
 throw new Error("(errid:Watl000413)字段[模块Id(funcModuleId)]的长度不能超过4(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.funcModuleId)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceTypeId) == false && GetStrLen(pobjQxPrjPotenceEN.potenceTypeId) > 6)
{
 throw new Error("(errid:Watl000413)字段[权限类型Id(potenceTypeId)]的长度不能超过6(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.potenceTypeId)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.menuId) == false && GetStrLen(pobjQxPrjPotenceEN.menuId) > 8)
{
 throw new Error("(errid:Watl000413)字段[菜单Id(menuId)]的长度不能超过8(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.menuId)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.menuId4Win) == false && GetStrLen(pobjQxPrjPotenceEN.menuId4Win) > 8)
{
 throw new Error("(errid:Watl000413)字段[菜单Id4Win(menuId4Win)]的长度不能超过8(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.menuId4Win)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.updDate) == false && GetStrLen(pobjQxPrjPotenceEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.updDate)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.updUserId) == false && GetStrLen(pobjQxPrjPotenceEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.updUserId)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.memo) == false && GetStrLen(pobjQxPrjPotenceEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.memo)(clsQxPrjPotenceBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceId) == false && undefined !== pobjQxPrjPotenceEN.potenceId && tzDataType.isString(pobjQxPrjPotenceEN.potenceId) === false)
{
 throw new Error("(errid:Watl000414)字段[权限ID(potenceId)]的值:[$(pobjQxPrjPotenceEN.potenceId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceName) == false && undefined !== pobjQxPrjPotenceEN.potenceName && tzDataType.isString(pobjQxPrjPotenceEN.potenceName) === false)
{
 throw new Error("(errid:Watl000414)字段[权限名称(potenceName)]的值:[$(pobjQxPrjPotenceEN.potenceName)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.qxPrjId) == false && undefined !== pobjQxPrjPotenceEN.qxPrjId && tzDataType.isString(pobjQxPrjPotenceEN.qxPrjId) === false)
{
 throw new Error("(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[$(pobjQxPrjPotenceEN.qxPrjId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.funcModuleId) == false && undefined !== pobjQxPrjPotenceEN.funcModuleId && tzDataType.isString(pobjQxPrjPotenceEN.funcModuleId) === false)
{
 throw new Error("(errid:Watl000414)字段[模块Id(funcModuleId)]的值:[$(pobjQxPrjPotenceEN.funcModuleId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceTypeId) == false && undefined !== pobjQxPrjPotenceEN.potenceTypeId && tzDataType.isString(pobjQxPrjPotenceEN.potenceTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[权限类型Id(potenceTypeId)]的值:[$(pobjQxPrjPotenceEN.potenceTypeId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.menuId) == false && undefined !== pobjQxPrjPotenceEN.menuId && tzDataType.isString(pobjQxPrjPotenceEN.menuId) === false)
{
 throw new Error("(errid:Watl000414)字段[菜单Id(menuId)]的值:[$(pobjQxPrjPotenceEN.menuId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.menuId4Win) == false && undefined !== pobjQxPrjPotenceEN.menuId4Win && tzDataType.isString(pobjQxPrjPotenceEN.menuId4Win) === false)
{
 throw new Error("(errid:Watl000414)字段[菜单Id4Win(menuId4Win)]的值:[$(pobjQxPrjPotenceEN.menuId4Win)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.updDate) == false && undefined !== pobjQxPrjPotenceEN.updDate && tzDataType.isString(pobjQxPrjPotenceEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjQxPrjPotenceEN.updDate)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.updUserId) == false && undefined !== pobjQxPrjPotenceEN.updUserId && tzDataType.isString(pobjQxPrjPotenceEN.updUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjQxPrjPotenceEN.updUserId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.memo) == false && undefined !== pobjQxPrjPotenceEN.memo && tzDataType.isString(pobjQxPrjPotenceEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjQxPrjPotenceEN.memo)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxPrjPotenceEN.qxPrjId) == false && pobjQxPrjPotenceEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxPrjPotenceEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 工程权限)!(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceTypeId) == false && pobjQxPrjPotenceEN.potenceTypeId != '[nuull]' && GetStrLen(pobjQxPrjPotenceEN.potenceTypeId) !=  6)
{
 throw ("(errid:Watl000415)字段[权限类型Id]作为外键字段,长度应该为6(In 工程权限)!(clsQxPrjPotenceBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPrjPotence_CheckProperty4Update(pobjQxPrjPotenceEN: clsQxPrjPotenceEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceId) == false && GetStrLen(pobjQxPrjPotenceEN.potenceId) > 8)
{
 throw new Error("(errid:Watl000416)字段[权限ID(potenceId)]的长度不能超过8(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.potenceId)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceName) == false && GetStrLen(pobjQxPrjPotenceEN.potenceName) > 200)
{
 throw new Error("(errid:Watl000416)字段[权限名称(potenceName)]的长度不能超过200(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.potenceName)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.qxPrjId) == false && GetStrLen(pobjQxPrjPotenceEN.qxPrjId) > 4)
{
 throw new Error("(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.qxPrjId)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.funcModuleId) == false && GetStrLen(pobjQxPrjPotenceEN.funcModuleId) > 4)
{
 throw new Error("(errid:Watl000416)字段[模块Id(funcModuleId)]的长度不能超过4(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.funcModuleId)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceTypeId) == false && GetStrLen(pobjQxPrjPotenceEN.potenceTypeId) > 6)
{
 throw new Error("(errid:Watl000416)字段[权限类型Id(potenceTypeId)]的长度不能超过6(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.potenceTypeId)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.menuId) == false && GetStrLen(pobjQxPrjPotenceEN.menuId) > 8)
{
 throw new Error("(errid:Watl000416)字段[菜单Id(menuId)]的长度不能超过8(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.menuId)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.menuId4Win) == false && GetStrLen(pobjQxPrjPotenceEN.menuId4Win) > 8)
{
 throw new Error("(errid:Watl000416)字段[菜单Id4Win(menuId4Win)]的长度不能超过8(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.menuId4Win)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.updDate) == false && GetStrLen(pobjQxPrjPotenceEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.updDate)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.updUserId) == false && GetStrLen(pobjQxPrjPotenceEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.updUserId)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.memo) == false && GetStrLen(pobjQxPrjPotenceEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 工程权限(QxPrjPotence))!值:$(pobjQxPrjPotenceEN.memo)(clsQxPrjPotenceBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceId) == false && undefined !== pobjQxPrjPotenceEN.potenceId && tzDataType.isString(pobjQxPrjPotenceEN.potenceId) === false)
{
 throw new Error("(errid:Watl000417)字段[权限ID(potenceId)]的值:[$(pobjQxPrjPotenceEN.potenceId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceName) == false && undefined !== pobjQxPrjPotenceEN.potenceName && tzDataType.isString(pobjQxPrjPotenceEN.potenceName) === false)
{
 throw new Error("(errid:Watl000417)字段[权限名称(potenceName)]的值:[$(pobjQxPrjPotenceEN.potenceName)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.qxPrjId) == false && undefined !== pobjQxPrjPotenceEN.qxPrjId && tzDataType.isString(pobjQxPrjPotenceEN.qxPrjId) === false)
{
 throw new Error("(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[$(pobjQxPrjPotenceEN.qxPrjId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.funcModuleId) == false && undefined !== pobjQxPrjPotenceEN.funcModuleId && tzDataType.isString(pobjQxPrjPotenceEN.funcModuleId) === false)
{
 throw new Error("(errid:Watl000417)字段[模块Id(funcModuleId)]的值:[$(pobjQxPrjPotenceEN.funcModuleId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceTypeId) == false && undefined !== pobjQxPrjPotenceEN.potenceTypeId && tzDataType.isString(pobjQxPrjPotenceEN.potenceTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[权限类型Id(potenceTypeId)]的值:[$(pobjQxPrjPotenceEN.potenceTypeId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.menuId) == false && undefined !== pobjQxPrjPotenceEN.menuId && tzDataType.isString(pobjQxPrjPotenceEN.menuId) === false)
{
 throw new Error("(errid:Watl000417)字段[菜单Id(menuId)]的值:[$(pobjQxPrjPotenceEN.menuId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.menuId4Win) == false && undefined !== pobjQxPrjPotenceEN.menuId4Win && tzDataType.isString(pobjQxPrjPotenceEN.menuId4Win) === false)
{
 throw new Error("(errid:Watl000417)字段[菜单Id4Win(menuId4Win)]的值:[$(pobjQxPrjPotenceEN.menuId4Win)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.updDate) == false && undefined !== pobjQxPrjPotenceEN.updDate && tzDataType.isString(pobjQxPrjPotenceEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjQxPrjPotenceEN.updDate)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.updUserId) == false && undefined !== pobjQxPrjPotenceEN.updUserId && tzDataType.isString(pobjQxPrjPotenceEN.updUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjQxPrjPotenceEN.updUserId)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.memo) == false && undefined !== pobjQxPrjPotenceEN.memo && tzDataType.isString(pobjQxPrjPotenceEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjQxPrjPotenceEN.memo)], 非法,应该为字符型(In 工程权限(QxPrjPotence))!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceId) === true 
 || pobjQxPrjPotenceEN.potenceId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000064)字段[权限ID]不能为空(In 工程权限)!(clsQxPrjPotenceBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxPrjPotenceEN.qxPrjId) == false && pobjQxPrjPotenceEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxPrjPotenceEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 工程权限)!(clsQxPrjPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxPrjPotenceEN.potenceTypeId) == false && pobjQxPrjPotenceEN.potenceTypeId != '[nuull]' && GetStrLen(pobjQxPrjPotenceEN.potenceTypeId) !=  6)
{
 throw ("(errid:Watl000418)字段[权限类型Id]作为外键字段,长度应该为6(In 工程权限)!(clsQxPrjPotenceBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxPrjPotence_GetJSONStrByObj (pobjQxPrjPotenceEN: clsQxPrjPotenceEN): string
{
pobjQxPrjPotenceEN.sfUpdFldSetStr = pobjQxPrjPotenceEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxPrjPotenceEN);
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
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxPrjPotence_GetObjLstByJSONStr (strJSON: string): Array<clsQxPrjPotenceEN>
{
let arrQxPrjPotenceObjLst = new Array<clsQxPrjPotenceEN>();
if (strJSON === "")
{
return arrQxPrjPotenceObjLst;
}
try
{
arrQxPrjPotenceObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxPrjPotenceObjLst;
}
return arrQxPrjPotenceObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxPrjPotenceObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxPrjPotence_GetObjLstByJSONObjLst (arrQxPrjPotenceObjLstS: Array<clsQxPrjPotenceEN>): Array<clsQxPrjPotenceEN>
{
const arrQxPrjPotenceObjLst = new Array<clsQxPrjPotenceEN>();
for (const objInFor of arrQxPrjPotenceObjLstS) {
const obj1 = QxPrjPotence_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxPrjPotenceObjLst.push(obj1);
}
return arrQxPrjPotenceObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxPrjPotence_GetObjByJSONStr (strJSON: string): clsQxPrjPotenceEN
{
let pobjQxPrjPotenceEN = new clsQxPrjPotenceEN();
if (strJSON === "")
{
return pobjQxPrjPotenceEN;
}
try
{
pobjQxPrjPotenceEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxPrjPotenceEN;
}
return pobjQxPrjPotenceEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxPrjPotence_GetCombineCondition(objQxPrjPotenceCond: clsQxPrjPotenceEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_PotenceId) == true)
{
const strComparisonOpPotenceId:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_PotenceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_PotenceId, objQxPrjPotenceCond.potenceId, strComparisonOpPotenceId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_PotenceName) == true)
{
const strComparisonOpPotenceName:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_PotenceName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_PotenceName, objQxPrjPotenceCond.potenceName, strComparisonOpPotenceName);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_QxPrjId, objQxPrjPotenceCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_FuncModuleId) == true)
{
const strComparisonOpFuncModuleId:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_FuncModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_FuncModuleId, objQxPrjPotenceCond.funcModuleId, strComparisonOpFuncModuleId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_PotenceTypeId) == true)
{
const strComparisonOpPotenceTypeId:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_PotenceTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_PotenceTypeId, objQxPrjPotenceCond.potenceTypeId, strComparisonOpPotenceTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_MenuId) == true)
{
const strComparisonOpMenuId:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_MenuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_MenuId, objQxPrjPotenceCond.menuId, strComparisonOpMenuId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_MenuId4Win) == true)
{
const strComparisonOpMenuId4Win:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_MenuId4Win];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_MenuId4Win, objQxPrjPotenceCond.menuId4Win, strComparisonOpMenuId4Win);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_UpdDate, objQxPrjPotenceCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_UpdUserId, objQxPrjPotenceCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjPotenceCond.dicFldComparisonOp, clsQxPrjPotenceEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxPrjPotenceCond.dicFldComparisonOp[clsQxPrjPotenceEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjPotenceEN.con_Memo, objQxPrjPotenceCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjPotence(工程权限),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPotenceTypeId: 权限类型Id(要求唯一的字段)
 * @param strPotenceName: 权限名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjPotence_GetUniCondStr(objQxPrjPotenceEN: clsQxPrjPotenceEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PotenceTypeId = '{0}'", objQxPrjPotenceEN.potenceTypeId);
 strWhereCond +=  Format(" and PotenceName = '{0}'", objQxPrjPotenceEN.potenceName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjPotence(工程权限),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPotenceTypeId: 权限类型Id(要求唯一的字段)
 * @param strPotenceName: 权限名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjPotence_GetUniCondStr4Update(objQxPrjPotenceEN: clsQxPrjPotenceEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and PotenceId <> '{0}'", objQxPrjPotenceEN.potenceId);
 strWhereCond +=  Format(" and PotenceTypeId = '{0}'", objQxPrjPotenceEN.potenceTypeId);
 strWhereCond +=  Format(" and PotenceName = '{0}'", objQxPrjPotenceEN.potenceName);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxPrjPotenceENS:源对象
 * @param objQxPrjPotenceENT:目标对象
*/
export  function QxPrjPotence_GetObjFromJsonObj(objQxPrjPotenceENS: clsQxPrjPotenceEN): clsQxPrjPotenceEN 
{
 const objQxPrjPotenceENT: clsQxPrjPotenceEN = new clsQxPrjPotenceEN();
ObjectAssign(objQxPrjPotenceENT, objQxPrjPotenceENS);
 return objQxPrjPotenceENT;
}