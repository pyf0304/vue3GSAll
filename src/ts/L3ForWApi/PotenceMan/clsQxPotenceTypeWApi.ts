
 /**
 * 类名:clsQxPotenceTypeWApi
 * 表名:QxPotenceType(00140003)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/20 11:45:16
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
 * 权限类型(QxPotenceType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月20日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxPotenceTypeEN } from "@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxPotenceType_Controller = "QxPotenceTypeApi";
 export const qxPotenceType_ConstructorName = "qxPotenceType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPotenceTypeId:关键字
 * @returns 对象
 **/
export  async function QxPotenceType_GetObjByPotenceTypeIdAsync(strPotenceTypeId: string): Promise<clsQxPotenceTypeEN|null>  
{
const strThisFuncName = "GetObjByPotenceTypeIdAsync";

if (IsNullOrEmpty(strPotenceTypeId) == true)
{
  const strMsg = Format("参数:[strPotenceTypeId]不能为空!(In clsQxPotenceTypeWApi.GetObjByPotenceTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceTypeId.length != 6)
{
const strMsg = Format("缓存分类变量:[strPotenceTypeId]的长度:[{0}]不正确!(clsQxPotenceTypeWApi.GetObjByPotenceTypeIdAsync)", strPotenceTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByPotenceTypeId";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPotenceTypeId,
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
const objQxPotenceType = QxPotenceType_GetObjFromJsonObj(returnObj);
return objQxPotenceType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param strPotenceTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxPotenceType_GetObjByPotenceTypeIdCache(strPotenceTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByPotenceTypeIdCache";

if (IsNullOrEmpty(strPotenceTypeId) == true)
{
  const strMsg = Format("参数:[strPotenceTypeId]不能为空!(In clsQxPotenceTypeWApi.GetObjByPotenceTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceTypeId.length != 6)
{
const strMsg = Format("缓存分类变量:[strPotenceTypeId]的长度:[{0}]不正确!(clsQxPotenceTypeWApi.GetObjByPotenceTypeIdCache)", strPotenceTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstCache();
try
{
const arrQxPotenceTypeSel = arrQxPotenceTypeObjLstCache.filter(x => 
 x.potenceTypeId == strPotenceTypeId );
let objQxPotenceType: clsQxPotenceTypeEN;
if (arrQxPotenceTypeSel.length > 0)
{
objQxPotenceType = arrQxPotenceTypeSel[0];
return objQxPotenceType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxPotenceTypeConst = await QxPotenceType_GetObjByPotenceTypeIdAsync(strPotenceTypeId);
if (objQxPotenceTypeConst != null)
{
QxPotenceType_ReFreshThisCache();
return objQxPotenceTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strPotenceTypeId, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strPotenceTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxPotenceType_GetObjByPotenceTypeIdlocalStorage(strPotenceTypeId: string) {
const strThisFuncName = "GetObjByPotenceTypeIdlocalStorage";

if (IsNullOrEmpty(strPotenceTypeId) == true)
{
  const strMsg = Format("参数:[strPotenceTypeId]不能为空!(In clsQxPotenceTypeWApi.GetObjByPotenceTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceTypeId.length != 6)
{
const strMsg = Format("缓存分类变量:[strPotenceTypeId]的长度:[{0}]不正确!(clsQxPotenceTypeWApi.GetObjByPotenceTypeIdlocalStorage)", strPotenceTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxPotenceTypeEN._CurrTabName, strPotenceTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxPotenceTypeCache: clsQxPotenceTypeEN = JSON.parse(strTempObj);
return objQxPotenceTypeCache;
}
try
{
const objQxPotenceType = await QxPotenceType_GetObjByPotenceTypeIdAsync(strPotenceTypeId);
if (objQxPotenceType != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxPotenceType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxPotenceType;
}
return objQxPotenceType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strPotenceTypeId, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxPotenceType:所给的对象
 * @returns 对象
*/
export  async function QxPotenceType_UpdateObjInLstCache(objQxPotenceType: clsQxPotenceTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstCache();
const obj = arrQxPotenceTypeObjLstCache.find(x => x.potenceTypeName == objQxPotenceType.potenceTypeName && x.qxPrjId == objQxPotenceType.qxPrjId);
if (obj != null)
{
objQxPotenceType.potenceTypeId = obj.potenceTypeId;
ObjectAssign( obj, objQxPotenceType);
}
else
{
arrQxPotenceTypeObjLstCache.push(objQxPotenceType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPotenceTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxPotenceType_GetNameByPotenceTypeIdCache(strPotenceTypeId: string) {

if (IsNullOrEmpty(strPotenceTypeId) == true)
{
  const strMsg = Format("参数:[strPotenceTypeId]不能为空!(In clsQxPotenceTypeWApi.GetNameByPotenceTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceTypeId.length != 6)
{
const strMsg = Format("缓存分类变量:[strPotenceTypeId]的长度:[{0}]不正确!(clsQxPotenceTypeWApi.GetNameByPotenceTypeIdCache)", strPotenceTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstCache();
if (arrQxPotenceTypeObjLstCache == null) return "";
try
{
const arrQxPotenceTypeSel = arrQxPotenceTypeObjLstCache.filter(x => 
 x.potenceTypeId == strPotenceTypeId );
let objQxPotenceType: clsQxPotenceTypeEN;
if (arrQxPotenceTypeSel.length > 0)
{
objQxPotenceType = arrQxPotenceTypeSel[0];
return objQxPotenceType.potenceTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strPotenceTypeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function QxPotenceType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxPotenceTypeEN.con_PotenceTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxPotenceTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxPotenceTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strPotenceTypeId = strInValue;
if (IsNullOrEmpty(strPotenceTypeId) == true)
{
return "";
}
const objQxPotenceType = await QxPotenceType_GetObjByPotenceTypeIdCache(strPotenceTypeId );
if (objQxPotenceType == null) return "";
if (objQxPotenceType.GetFldValue(strOutFldName) == null) return "";
return objQxPotenceType.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPotenceType_SortFunDefa(a:clsQxPotenceTypeEN , b:clsQxPotenceTypeEN): number 
{
return a.potenceTypeId.localeCompare(b.potenceTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPotenceType_SortFunDefa2Fld(a:clsQxPotenceTypeEN , b:clsQxPotenceTypeEN): number 
{
if (a.potenceTypeName == b.potenceTypeName) return a.qxPrjId.localeCompare(b.qxPrjId);
else return a.potenceTypeName.localeCompare(b.potenceTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPotenceType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxPotenceTypeEN.con_PotenceTypeId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return a.potenceTypeId.localeCompare(b.potenceTypeId);
}
case clsQxPotenceTypeEN.con_PotenceTypeName:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return a.potenceTypeName.localeCompare(b.potenceTypeName);
}
case clsQxPotenceTypeEN.con_QxPrjId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxPotenceTypeEN.con_FuncModuleId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
if (a.funcModuleId == null) return -1;
if (b.funcModuleId == null) return 1;
return a.funcModuleId.localeCompare(b.funcModuleId);
}
case clsQxPotenceTypeEN.con_MenuId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
if (a.menuId == null) return -1;
if (b.menuId == null) return 1;
return a.menuId.localeCompare(b.menuId);
}
case clsQxPotenceTypeEN.con_ViewId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
if (a.viewId == null) return -1;
if (b.viewId == null) return 1;
return a.viewId.localeCompare(b.viewId);
}
case clsQxPotenceTypeEN.con_IsVisible:
return (a: clsQxPotenceTypeEN) => {
if (a.isVisible == true) return 1;
else return -1
}
case clsQxPotenceTypeEN.con_UpdDate:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxPotenceTypeEN.con_UpdUserId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return a.updUserId.localeCompare(b.updUserId);
}
case clsQxPotenceTypeEN.con_Memo:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPotenceType]中不存在!(in ${ qxPotenceType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxPotenceTypeEN.con_PotenceTypeId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return b.potenceTypeId.localeCompare(a.potenceTypeId);
}
case clsQxPotenceTypeEN.con_PotenceTypeName:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return b.potenceTypeName.localeCompare(a.potenceTypeName);
}
case clsQxPotenceTypeEN.con_QxPrjId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxPotenceTypeEN.con_FuncModuleId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
if (b.funcModuleId == null) return -1;
if (a.funcModuleId == null) return 1;
return b.funcModuleId.localeCompare(a.funcModuleId);
}
case clsQxPotenceTypeEN.con_MenuId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
if (b.menuId == null) return -1;
if (a.menuId == null) return 1;
return b.menuId.localeCompare(a.menuId);
}
case clsQxPotenceTypeEN.con_ViewId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
if (b.viewId == null) return -1;
if (a.viewId == null) return 1;
return b.viewId.localeCompare(a.viewId);
}
case clsQxPotenceTypeEN.con_IsVisible:
return (b: clsQxPotenceTypeEN) => {
if (b.isVisible == true) return 1;
else return -1
}
case clsQxPotenceTypeEN.con_UpdDate:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxPotenceTypeEN.con_UpdUserId:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
return b.updUserId.localeCompare(a.updUserId);
}
case clsQxPotenceTypeEN.con_Memo:
return (a: clsQxPotenceTypeEN, b: clsQxPotenceTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPotenceType]中不存在!(in ${ qxPotenceType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxPotenceType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxPotenceTypeEN.con_PotenceTypeId:
return (obj: clsQxPotenceTypeEN) => {
return obj.potenceTypeId === value;
}
case clsQxPotenceTypeEN.con_PotenceTypeName:
return (obj: clsQxPotenceTypeEN) => {
return obj.potenceTypeName === value;
}
case clsQxPotenceTypeEN.con_QxPrjId:
return (obj: clsQxPotenceTypeEN) => {
return obj.qxPrjId === value;
}
case clsQxPotenceTypeEN.con_FuncModuleId:
return (obj: clsQxPotenceTypeEN) => {
return obj.funcModuleId === value;
}
case clsQxPotenceTypeEN.con_MenuId:
return (obj: clsQxPotenceTypeEN) => {
return obj.menuId === value;
}
case clsQxPotenceTypeEN.con_ViewId:
return (obj: clsQxPotenceTypeEN) => {
return obj.viewId === value;
}
case clsQxPotenceTypeEN.con_IsVisible:
return (obj: clsQxPotenceTypeEN) => {
return obj.isVisible === value;
}
case clsQxPotenceTypeEN.con_UpdDate:
return (obj: clsQxPotenceTypeEN) => {
return obj.updDate === value;
}
case clsQxPotenceTypeEN.con_UpdUserId:
return (obj: clsQxPotenceTypeEN) => {
return obj.updUserId === value;
}
case clsQxPotenceTypeEN.con_Memo:
return (obj: clsQxPotenceTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPotenceType]中不存在!(in ${ qxPotenceType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function QxPotenceType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxPotenceTypeEN.con_PotenceTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxPotenceType = await QxPotenceType_GetObjLstCache();
if (arrQxPotenceType == null) return [];
let arrQxPotenceTypeSel = arrQxPotenceType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxPotenceTypeSel.length == 0) return [];
return arrQxPotenceTypeSel.map(x=>x.potenceTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPotenceType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetFirstObjAsync(strWhereCond: string): Promise<clsQxPotenceTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const objQxPotenceType = QxPotenceType_GetObjFromJsonObj(returnObj);
return objQxPotenceType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxPotenceTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxPotenceTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxPotenceTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxPotenceTypeExObjLstCache: Array<clsQxPotenceTypeEN> = CacheHelper.Get(strKey);
const arrQxPotenceTypeObjLstT = QxPotenceType_GetObjLstByJSONObjLst(arrQxPotenceTypeExObjLstCache);
return arrQxPotenceTypeObjLstT;
}
try
{
const arrQxPotenceTypeExObjLst = await QxPotenceType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxPotenceTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxPotenceTypeExObjLst.length);
console.log(strInfo);
return arrQxPotenceTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPotenceType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxPotenceTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxPotenceTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxPotenceTypeEN.CacheAddiCondition);
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
const arrQxPotenceTypeExObjLstCache: Array<clsQxPotenceTypeEN> = JSON.parse(strTempObjLst);
const arrQxPotenceTypeObjLstT = QxPotenceType_GetObjLstByJSONObjLst(arrQxPotenceTypeExObjLstCache);
return arrQxPotenceTypeObjLstT;
}
try
{
const arrQxPotenceTypeExObjLst = await QxPotenceType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxPotenceTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxPotenceTypeExObjLst.length);
console.log(strInfo);
return arrQxPotenceTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPotenceType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxPotenceTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxPotenceTypeObjLstCache: Array<clsQxPotenceTypeEN> = JSON.parse(strTempObjLst);
return arrQxPotenceTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxPotenceType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxPotenceTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxPotenceTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxPotenceTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxPotenceTypeEN.CacheAddiCondition);
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
const arrQxPotenceTypeExObjLstCache: Array<clsQxPotenceTypeEN> = JSON.parse(strTempObjLst);
const arrQxPotenceTypeObjLstT = QxPotenceType_GetObjLstByJSONObjLst(arrQxPotenceTypeExObjLstCache);
return arrQxPotenceTypeObjLstT;
}
try
{
const arrQxPotenceTypeExObjLst = await QxPotenceType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxPotenceTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxPotenceTypeExObjLst.length);
console.log(strInfo);
return arrQxPotenceTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPotenceType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxPotenceTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxPotenceTypeObjLstCache: Array<clsQxPotenceTypeEN> = JSON.parse(strTempObjLst);
return arrQxPotenceTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPotenceType_GetObjLstCache(): Promise<Array<clsQxPotenceTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxPotenceTypeObjLstCache;
switch (clsQxPotenceTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstClientCache();
break;
default:
arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstClientCache();
break;
}
return arrQxPotenceTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxPotenceType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxPotenceTypeObjLstCache;
switch (clsQxPotenceTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxPotenceTypeObjLstCache = null;
break;
default:
arrQxPotenceTypeObjLstCache = null;
break;
}
return arrQxPotenceTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPotenceTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxPotenceType_GetSubObjLstCache(objQxPotenceTypeCond: clsQxPotenceTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstCache();
let arrQxPotenceTypeSel = arrQxPotenceTypeObjLstCache;
if (objQxPotenceTypeCond.sfFldComparisonOp == null || objQxPotenceTypeCond.sfFldComparisonOp == "") return arrQxPotenceTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxPotenceTypeCond.sfFldComparisonOp);
//console.log("clsQxPotenceTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxPotenceTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxPotenceTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxPotenceTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxPotenceTypeCond), qxPotenceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxPotenceTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPotenceTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function QxPotenceType_GetObjLstByPotenceTypeIdLstAsync(arrPotenceTypeId: Array<string>): Promise<Array<clsQxPotenceTypeEN>>  
{
const strThisFuncName = "GetObjLstByPotenceTypeIdLstAsync";
const strAction = "GetObjLstByPotenceTypeIdLst";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPotenceTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param arrstrPotenceTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxPotenceType_GetObjLstByPotenceTypeIdLstCache(arrPotenceTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByPotenceTypeIdLstCache";
try
{
const arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstCache();
const arrQxPotenceTypeSel = arrQxPotenceTypeObjLstCache.filter(x => arrPotenceTypeIdLst.indexOf(x.potenceTypeId)>-1);
return arrQxPotenceTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrPotenceTypeIdLst.join(","), qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxPotenceTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxPotenceTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxPotenceTypeEN>();
const arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstCache();
if (arrQxPotenceTypeObjLstCache.length == 0) return arrQxPotenceTypeObjLstCache;
let arrQxPotenceTypeSel = arrQxPotenceTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQxPotenceTypeCond = new clsQxPotenceTypeEN();
ObjectAssign(objQxPotenceTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQxPotenceTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxPotenceTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxPotenceTypeSel.length == 0) return arrQxPotenceTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxPotenceTypeSel = arrQxPotenceTypeSel.sort(QxPotenceType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxPotenceTypeSel = arrQxPotenceTypeSel.sort(objPagerPara.sortFun);
}
arrQxPotenceTypeSel = arrQxPotenceTypeSel.slice(intStart, intEnd);     
return arrQxPotenceTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxPotenceTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxPotenceType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxPotenceTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxPotenceTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param strPotenceTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxPotenceType_DelRecordAsync(strPotenceTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strPotenceTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param arrPotenceTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxPotenceType_DelQxPotenceTypesAsync(arrPotenceTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxPotenceTypesAsync";
const strAction = "DelQxPotenceTypes";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPotenceTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_DelQxPotenceTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxPotenceTypesByCondAsync";
const strAction = "DelQxPotenceTypesByCond";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param objQxPotenceTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPotenceType_AddNewRecordAsync(objQxPotenceTypeEN: clsQxPotenceTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxPotenceTypeEN.potenceTypeId === null || objQxPotenceTypeEN.potenceTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxPotenceTypeEN);
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPotenceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param objQxPotenceTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPotenceType_AddNewRecordWithMaxIdAsync(objQxPotenceTypeEN: clsQxPotenceTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPotenceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param objQxPotenceTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxPotenceType_AddNewRecordWithReturnKeyAsync(objQxPotenceTypeEN: clsQxPotenceTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPotenceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param objQxPotenceTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPotenceType_UpdateRecordAsync(objQxPotenceTypeEN: clsQxPotenceTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxPotenceTypeEN.sfUpdFldSetStr === undefined || objQxPotenceTypeEN.sfUpdFldSetStr === null || objQxPotenceTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPotenceTypeEN.potenceTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPotenceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param objQxPotenceTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPotenceType_UpdateWithConditionAsync(objQxPotenceTypeEN: clsQxPotenceTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxPotenceTypeEN.sfUpdFldSetStr === undefined || objQxPotenceTypeEN.sfUpdFldSetStr === null || objQxPotenceTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPotenceTypeEN.potenceTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);
objQxPotenceTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPotenceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param objstrPotenceTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxPotenceType_IsExistRecordCache(objQxPotenceTypeCond: clsQxPotenceTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstCache();
if (arrQxPotenceTypeObjLstCache == null) return false;
let arrQxPotenceTypeSel = arrQxPotenceTypeObjLstCache;
if (objQxPotenceTypeCond.sfFldComparisonOp == null || objQxPotenceTypeCond.sfFldComparisonOp == "") return arrQxPotenceTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxPotenceTypeCond.sfFldComparisonOp);
//console.log("clsQxPotenceTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxPotenceTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxPotenceTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxPotenceTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxPotenceTypeCond), qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param strPotenceTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxPotenceType_IsExistCache(strPotenceTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstCache();
if (arrQxPotenceTypeObjLstCache == null) return false;
try
{
const arrQxPotenceTypeSel = arrQxPotenceTypeObjLstCache.filter(x => x.potenceTypeId == strPotenceTypeId);
if (arrQxPotenceTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strPotenceTypeId, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strPotenceTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxPotenceType_IsExistAsync(strPotenceTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPotenceTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
 * @param objQxPotenceTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxPotenceType_GetRecCountByCondCache(objQxPotenceTypeCond: clsQxPotenceTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxPotenceTypeObjLstCache = await QxPotenceType_GetObjLstCache();
if (arrQxPotenceTypeObjLstCache == null) return 0;
let arrQxPotenceTypeSel = arrQxPotenceTypeObjLstCache;
if (objQxPotenceTypeCond.sfFldComparisonOp == null || objQxPotenceTypeCond.sfFldComparisonOp == "") return arrQxPotenceTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxPotenceTypeCond.sfFldComparisonOp);
//console.log("clsQxPotenceTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxPotenceTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxPotenceTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxPotenceTypeSel = arrQxPotenceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxPotenceTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxPotenceTypeCond), qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdByPrefixAsync";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  async function QxPotenceType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPotenceType_ConstructorName, strThisFuncName);
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
export  function QxPotenceType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxPotenceType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxPotenceTypeEN._CurrTabName;
switch (clsQxPotenceTypeEN.CacheModeId)
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
export  function QxPotenceType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxPotenceTypeEN._CurrTabName;
switch (clsQxPotenceTypeEN.CacheModeId)
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

*/
export  async function QxPotenceType_BindDdl_PotenceTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_PotenceTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_PotenceTypeIdInDivCache");
const arrObjLstSel = await QxPotenceType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxPotenceTypeEN.con_PotenceTypeId, clsQxPotenceTypeEN.con_PotenceTypeName, "权限类型");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPotenceType_CheckPropertyNew(pobjQxPotenceTypeEN: clsQxPotenceTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[权限类型名]不能为空(In 权限类型)!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.qxPrjId) === true 
 || pobjQxPotenceTypeEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 权限类型)!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.updUserId) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改用户Id]不能为空(In 权限类型)!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeId) == false && GetStrLen(pobjQxPotenceTypeEN.potenceTypeId) > 6)
{
 throw new Error(`(errid:Watl000413)字段[权限类型Id(potenceTypeId)]的长度不能超过6(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.potenceTypeId}(clsQxPotenceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeName) == false && GetStrLen(pobjQxPotenceTypeEN.potenceTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[权限类型名(potenceTypeName)]的长度不能超过50(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.potenceTypeName}(clsQxPotenceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.qxPrjId) == false && GetStrLen(pobjQxPotenceTypeEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.qxPrjId}(clsQxPotenceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.funcModuleId) == false && GetStrLen(pobjQxPotenceTypeEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[模块Id(funcModuleId)]的长度不能超过4(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.funcModuleId}(clsQxPotenceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.menuId) == false && GetStrLen(pobjQxPotenceTypeEN.menuId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[菜单Id(menuId)]的长度不能超过8(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.menuId}(clsQxPotenceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.viewId) == false && GetStrLen(pobjQxPotenceTypeEN.viewId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[界面编号(viewId)]的长度不能超过8(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.viewId}(clsQxPotenceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.updDate) == false && GetStrLen(pobjQxPotenceTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.updDate}(clsQxPotenceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.updUserId) == false && GetStrLen(pobjQxPotenceTypeEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.updUserId}(clsQxPotenceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.memo) == false && GetStrLen(pobjQxPotenceTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.memo}(clsQxPotenceTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeId) == false && undefined !== pobjQxPotenceTypeEN.potenceTypeId && tzDataType.isString(pobjQxPotenceTypeEN.potenceTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[权限类型Id(potenceTypeId)]的值:[${pobjQxPotenceTypeEN.potenceTypeId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeName) == false && undefined !== pobjQxPotenceTypeEN.potenceTypeName && tzDataType.isString(pobjQxPotenceTypeEN.potenceTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[权限类型名(potenceTypeName)]的值:[${pobjQxPotenceTypeEN.potenceTypeName}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.qxPrjId) == false && undefined !== pobjQxPotenceTypeEN.qxPrjId && tzDataType.isString(pobjQxPotenceTypeEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxPotenceTypeEN.qxPrjId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.funcModuleId) == false && undefined !== pobjQxPotenceTypeEN.funcModuleId && tzDataType.isString(pobjQxPotenceTypeEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块Id(funcModuleId)]的值:[${pobjQxPotenceTypeEN.funcModuleId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.menuId) == false && undefined !== pobjQxPotenceTypeEN.menuId && tzDataType.isString(pobjQxPotenceTypeEN.menuId) === false)
{
 throw new Error(`(errid:Watl000414)字段[菜单Id(menuId)]的值:[${pobjQxPotenceTypeEN.menuId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.viewId) == false && undefined !== pobjQxPotenceTypeEN.viewId && tzDataType.isString(pobjQxPotenceTypeEN.viewId) === false)
{
 throw new Error(`(errid:Watl000414)字段[界面编号(viewId)]的值:[${pobjQxPotenceTypeEN.viewId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (null != pobjQxPotenceTypeEN.isVisible && undefined !== pobjQxPotenceTypeEN.isVisible && tzDataType.isBoolean(pobjQxPotenceTypeEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjQxPotenceTypeEN.isVisible}], 非法,应该为布尔型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.updDate) == false && undefined !== pobjQxPotenceTypeEN.updDate && tzDataType.isString(pobjQxPotenceTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxPotenceTypeEN.updDate}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.updUserId) == false && undefined !== pobjQxPotenceTypeEN.updUserId && tzDataType.isString(pobjQxPotenceTypeEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxPotenceTypeEN.updUserId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.memo) == false && undefined !== pobjQxPotenceTypeEN.memo && tzDataType.isString(pobjQxPotenceTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxPotenceTypeEN.memo}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxPotenceTypeEN.qxPrjId) == false && pobjQxPotenceTypeEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxPotenceTypeEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 权限类型)!(clsQxPotenceTypeBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPotenceType_CheckProperty4Update(pobjQxPotenceTypeEN: clsQxPotenceTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeId) == false && GetStrLen(pobjQxPotenceTypeEN.potenceTypeId) > 6)
{
 throw new Error(`(errid:Watl000416)字段[权限类型Id(potenceTypeId)]的长度不能超过6(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.potenceTypeId}(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeName) == false && GetStrLen(pobjQxPotenceTypeEN.potenceTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[权限类型名(potenceTypeName)]的长度不能超过50(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.potenceTypeName}(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.qxPrjId) == false && GetStrLen(pobjQxPotenceTypeEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.qxPrjId}(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.funcModuleId) == false && GetStrLen(pobjQxPotenceTypeEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[模块Id(funcModuleId)]的长度不能超过4(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.funcModuleId}(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.menuId) == false && GetStrLen(pobjQxPotenceTypeEN.menuId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[菜单Id(menuId)]的长度不能超过8(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.menuId}(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.viewId) == false && GetStrLen(pobjQxPotenceTypeEN.viewId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[界面编号(viewId)]的长度不能超过8(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.viewId}(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.updDate) == false && GetStrLen(pobjQxPotenceTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.updDate}(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.updUserId) == false && GetStrLen(pobjQxPotenceTypeEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.updUserId}(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.memo) == false && GetStrLen(pobjQxPotenceTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 权限类型(QxPotenceType))!值:${pobjQxPotenceTypeEN.memo}(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeId) == false && undefined !== pobjQxPotenceTypeEN.potenceTypeId && tzDataType.isString(pobjQxPotenceTypeEN.potenceTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[权限类型Id(potenceTypeId)]的值:[${pobjQxPotenceTypeEN.potenceTypeId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeName) == false && undefined !== pobjQxPotenceTypeEN.potenceTypeName && tzDataType.isString(pobjQxPotenceTypeEN.potenceTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[权限类型名(potenceTypeName)]的值:[${pobjQxPotenceTypeEN.potenceTypeName}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.qxPrjId) == false && undefined !== pobjQxPotenceTypeEN.qxPrjId && tzDataType.isString(pobjQxPotenceTypeEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxPotenceTypeEN.qxPrjId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.funcModuleId) == false && undefined !== pobjQxPotenceTypeEN.funcModuleId && tzDataType.isString(pobjQxPotenceTypeEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块Id(funcModuleId)]的值:[${pobjQxPotenceTypeEN.funcModuleId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.menuId) == false && undefined !== pobjQxPotenceTypeEN.menuId && tzDataType.isString(pobjQxPotenceTypeEN.menuId) === false)
{
 throw new Error(`(errid:Watl000417)字段[菜单Id(menuId)]的值:[${pobjQxPotenceTypeEN.menuId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.viewId) == false && undefined !== pobjQxPotenceTypeEN.viewId && tzDataType.isString(pobjQxPotenceTypeEN.viewId) === false)
{
 throw new Error(`(errid:Watl000417)字段[界面编号(viewId)]的值:[${pobjQxPotenceTypeEN.viewId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (null != pobjQxPotenceTypeEN.isVisible && undefined !== pobjQxPotenceTypeEN.isVisible && tzDataType.isBoolean(pobjQxPotenceTypeEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjQxPotenceTypeEN.isVisible}], 非法,应该为布尔型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.updDate) == false && undefined !== pobjQxPotenceTypeEN.updDate && tzDataType.isString(pobjQxPotenceTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxPotenceTypeEN.updDate}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.updUserId) == false && undefined !== pobjQxPotenceTypeEN.updUserId && tzDataType.isString(pobjQxPotenceTypeEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxPotenceTypeEN.updUserId}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPotenceTypeEN.memo) == false && undefined !== pobjQxPotenceTypeEN.memo && tzDataType.isString(pobjQxPotenceTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxPotenceTypeEN.memo}], 非法,应该为字符型(In 权限类型(QxPotenceType))!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxPotenceTypeEN.potenceTypeId) === true 
 || pobjQxPotenceTypeEN.potenceTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[权限类型Id]不能为空(In 权限类型)!(clsQxPotenceTypeBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxPotenceTypeEN.qxPrjId) == false && pobjQxPotenceTypeEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxPotenceTypeEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 权限类型)!(clsQxPotenceTypeBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxPotenceType_GetJSONStrByObj (pobjQxPotenceTypeEN: clsQxPotenceTypeEN): string
{
pobjQxPotenceTypeEN.sfUpdFldSetStr = pobjQxPotenceTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxPotenceTypeEN);
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
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxPotenceType_GetObjLstByJSONStr (strJSON: string): Array<clsQxPotenceTypeEN>
{
let arrQxPotenceTypeObjLst = new Array<clsQxPotenceTypeEN>();
if (strJSON === "")
{
return arrQxPotenceTypeObjLst;
}
try
{
arrQxPotenceTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxPotenceTypeObjLst;
}
return arrQxPotenceTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxPotenceTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxPotenceType_GetObjLstByJSONObjLst (arrQxPotenceTypeObjLstS: Array<clsQxPotenceTypeEN>): Array<clsQxPotenceTypeEN>
{
const arrQxPotenceTypeObjLst = new Array<clsQxPotenceTypeEN>();
for (const objInFor of arrQxPotenceTypeObjLstS) {
const obj1 = QxPotenceType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxPotenceTypeObjLst.push(obj1);
}
return arrQxPotenceTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxPotenceType_GetObjByJSONStr (strJSON: string): clsQxPotenceTypeEN
{
let pobjQxPotenceTypeEN = new clsQxPotenceTypeEN();
if (strJSON === "")
{
return pobjQxPotenceTypeEN;
}
try
{
pobjQxPotenceTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxPotenceTypeEN;
}
return pobjQxPotenceTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxPotenceType_GetCombineCondition(objQxPotenceTypeCond: clsQxPotenceTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_PotenceTypeId) == true)
{
const strComparisonOpPotenceTypeId:string = objQxPotenceTypeCond.dicFldComparisonOp[clsQxPotenceTypeEN.con_PotenceTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPotenceTypeEN.con_PotenceTypeId, objQxPotenceTypeCond.potenceTypeId, strComparisonOpPotenceTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_PotenceTypeName) == true)
{
const strComparisonOpPotenceTypeName:string = objQxPotenceTypeCond.dicFldComparisonOp[clsQxPotenceTypeEN.con_PotenceTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPotenceTypeEN.con_PotenceTypeName, objQxPotenceTypeCond.potenceTypeName, strComparisonOpPotenceTypeName);
}
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxPotenceTypeCond.dicFldComparisonOp[clsQxPotenceTypeEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPotenceTypeEN.con_QxPrjId, objQxPotenceTypeCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_FuncModuleId) == true)
{
const strComparisonOpFuncModuleId:string = objQxPotenceTypeCond.dicFldComparisonOp[clsQxPotenceTypeEN.con_FuncModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPotenceTypeEN.con_FuncModuleId, objQxPotenceTypeCond.funcModuleId, strComparisonOpFuncModuleId);
}
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_MenuId) == true)
{
const strComparisonOpMenuId:string = objQxPotenceTypeCond.dicFldComparisonOp[clsQxPotenceTypeEN.con_MenuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPotenceTypeEN.con_MenuId, objQxPotenceTypeCond.menuId, strComparisonOpMenuId);
}
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_ViewId) == true)
{
const strComparisonOpViewId:string = objQxPotenceTypeCond.dicFldComparisonOp[clsQxPotenceTypeEN.con_ViewId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPotenceTypeEN.con_ViewId, objQxPotenceTypeCond.viewId, strComparisonOpViewId);
}
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_IsVisible) == true)
{
if (objQxPotenceTypeCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxPotenceTypeEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxPotenceTypeEN.con_IsVisible);
}
}
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxPotenceTypeCond.dicFldComparisonOp[clsQxPotenceTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPotenceTypeEN.con_UpdDate, objQxPotenceTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxPotenceTypeCond.dicFldComparisonOp[clsQxPotenceTypeEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPotenceTypeEN.con_UpdUserId, objQxPotenceTypeCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxPotenceTypeCond.dicFldComparisonOp, clsQxPotenceTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxPotenceTypeCond.dicFldComparisonOp[clsQxPotenceTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPotenceTypeEN.con_Memo, objQxPotenceTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPotenceType(权限类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPotenceTypeName: 权限类型名(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPotenceType_GetUniCondStr(objQxPotenceTypeEN: clsQxPotenceTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PotenceTypeName = '{0}'", objQxPotenceTypeEN.potenceTypeName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPotenceTypeEN.qxPrjId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPotenceType(权限类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPotenceTypeName: 权限类型名(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPotenceType_GetUniCondStr4Update(objQxPotenceTypeEN: clsQxPotenceTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and PotenceTypeId <> '{0}'", objQxPotenceTypeEN.potenceTypeId);
 strWhereCond +=  Format(" and PotenceTypeName = '{0}'", objQxPotenceTypeEN.potenceTypeName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPotenceTypeEN.qxPrjId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxPotenceTypeENS:源对象
 * @param objQxPotenceTypeENT:目标对象
*/
export  function QxPotenceType_GetObjFromJsonObj(objQxPotenceTypeENS: clsQxPotenceTypeEN): clsQxPotenceTypeEN 
{
 const objQxPotenceTypeENT: clsQxPotenceTypeEN = new clsQxPotenceTypeEN();
ObjectAssign(objQxPotenceTypeENT, objQxPotenceTypeENS);
 return objQxPotenceTypeENT;
}