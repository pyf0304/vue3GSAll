
 /**
 * 类名:clsCacheModeWApi
 * 表名:CacheMode(01120688)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:57
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 缓存方式(CacheMode)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsCacheModeEN } from "@/ts/L0Entity/SystemSet/clsCacheModeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const cacheMode_Controller = "CacheModeApi";
 export const cacheMode_ConstructorName = "cacheMode";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCacheModeId:关键字
 * @returns 对象
 **/
export  async function CacheMode_GetObjByCacheModeIdAsync(strCacheModeId: string): Promise<clsCacheModeEN|null>  
{
const strThisFuncName = "GetObjByCacheModeIdAsync";

if (IsNullOrEmpty(strCacheModeId) == true)
{
  const strMsg = Format("参数:[strCacheModeId]不能为空!(In clsCacheModeWApi.GetObjByCacheModeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCacheModeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strCacheModeId]的长度:[{0}]不正确!(clsCacheModeWApi.GetObjByCacheModeIdAsync)", strCacheModeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCacheModeId";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCacheModeId,
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
const objCacheMode = CacheMode_GetObjFromJsonObj(returnObj);
return objCacheMode;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param strCacheModeId:所给的关键字
 * @returns 对象
*/
export  async function CacheMode_GetObjByCacheModeIdCache(strCacheModeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByCacheModeIdCache";

if (IsNullOrEmpty(strCacheModeId) == true)
{
  const strMsg = Format("参数:[strCacheModeId]不能为空!(In clsCacheModeWApi.GetObjByCacheModeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCacheModeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strCacheModeId]的长度:[{0}]不正确!(clsCacheModeWApi.GetObjByCacheModeIdCache)", strCacheModeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrCacheModeObjLstCache = await CacheMode_GetObjLstCache();
try
{
const arrCacheModeSel = arrCacheModeObjLstCache.filter(x => 
 x.cacheModeId == strCacheModeId );
let objCacheMode: clsCacheModeEN;
if (arrCacheModeSel.length > 0)
{
objCacheMode = arrCacheModeSel[0];
return objCacheMode;
}
else
{
if (bolTryAsyncOnce == true)
{
const objCacheModeConst = await CacheMode_GetObjByCacheModeIdAsync(strCacheModeId);
if (objCacheModeConst != null)
{
CacheMode_ReFreshThisCache();
return objCacheModeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCacheModeId, cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCacheModeId:所给的关键字
 * @returns 对象
*/
export  async function CacheMode_GetObjByCacheModeIdlocalStorage(strCacheModeId: string) {
const strThisFuncName = "GetObjByCacheModeIdlocalStorage";

if (IsNullOrEmpty(strCacheModeId) == true)
{
  const strMsg = Format("参数:[strCacheModeId]不能为空!(In clsCacheModeWApi.GetObjByCacheModeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strCacheModeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strCacheModeId]的长度:[{0}]不正确!(clsCacheModeWApi.GetObjByCacheModeIdlocalStorage)", strCacheModeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsCacheModeEN._CurrTabName, strCacheModeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objCacheModeCache: clsCacheModeEN = JSON.parse(strTempObj);
return objCacheModeCache;
}
try
{
const objCacheMode = await CacheMode_GetObjByCacheModeIdAsync(strCacheModeId);
if (objCacheMode != null)
{
localStorage.setItem(strKey, JSON.stringify(objCacheMode));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objCacheMode;
}
return objCacheMode;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCacheModeId, cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCacheMode:所给的对象
 * @returns 对象
*/
export  async function CacheMode_UpdateObjInLstCache(objCacheMode: clsCacheModeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrCacheModeObjLstCache = await CacheMode_GetObjLstCache();
const obj = arrCacheModeObjLstCache.find(x => x.cacheModeId == objCacheMode.cacheModeId);
if (obj != null)
{
objCacheMode.cacheModeId = obj.cacheModeId;
ObjectAssign( obj, objCacheMode);
}
else
{
arrCacheModeObjLstCache.push(objCacheMode);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCacheModeId:所给的关键字
 * @returns 对象
*/
export  async function CacheMode_GetNameByCacheModeIdCache(strCacheModeId: string) {

if (IsNullOrEmpty(strCacheModeId) == true)
{
  const strMsg = Format("参数:[strCacheModeId]不能为空!(In clsCacheModeWApi.GetNameByCacheModeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCacheModeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strCacheModeId]的长度:[{0}]不正确!(clsCacheModeWApi.GetNameByCacheModeIdCache)", strCacheModeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrCacheModeObjLstCache = await CacheMode_GetObjLstCache();
if (arrCacheModeObjLstCache == null) return "";
try
{
const arrCacheModeSel = arrCacheModeObjLstCache.filter(x => 
 x.cacheModeId == strCacheModeId );
let objCacheMode: clsCacheModeEN;
if (arrCacheModeSel.length > 0)
{
objCacheMode = arrCacheModeSel[0];
return objCacheMode.cacheModeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strCacheModeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function CacheMode_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsCacheModeEN.con_CacheModeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsCacheModeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsCacheModeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strCacheModeId = strInValue;
if (IsNullOrEmpty(strCacheModeId) == true)
{
return "";
}
const objCacheMode = await CacheMode_GetObjByCacheModeIdCache(strCacheModeId );
if (objCacheMode == null) return "";
if (objCacheMode.GetFldValue(strOutFldName) == null) return "";
return objCacheMode.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function CacheMode_SortFunDefa(a:clsCacheModeEN , b:clsCacheModeEN): number 
{
return a.cacheModeId.localeCompare(b.cacheModeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function CacheMode_SortFunDefa2Fld(a:clsCacheModeEN , b:clsCacheModeEN): number 
{
if (a.cacheModeName == b.cacheModeName) return a.cacheModeENName.localeCompare(b.cacheModeENName);
else return a.cacheModeName.localeCompare(b.cacheModeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function CacheMode_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsCacheModeEN.con_CacheModeId:
return (a: clsCacheModeEN, b: clsCacheModeEN) => {
return a.cacheModeId.localeCompare(b.cacheModeId);
}
case clsCacheModeEN.con_CacheModeName:
return (a: clsCacheModeEN, b: clsCacheModeEN) => {
return a.cacheModeName.localeCompare(b.cacheModeName);
}
case clsCacheModeEN.con_CacheModeENName:
return (a: clsCacheModeEN, b: clsCacheModeEN) => {
if (a.cacheModeENName == null) return -1;
if (b.cacheModeENName == null) return 1;
return a.cacheModeENName.localeCompare(b.cacheModeENName);
}
case clsCacheModeEN.con_InUse:
return (a: clsCacheModeEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clsCacheModeEN.con_Memo:
return (a: clsCacheModeEN, b: clsCacheModeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CacheMode]中不存在!(in ${ cacheMode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsCacheModeEN.con_CacheModeId:
return (a: clsCacheModeEN, b: clsCacheModeEN) => {
return b.cacheModeId.localeCompare(a.cacheModeId);
}
case clsCacheModeEN.con_CacheModeName:
return (a: clsCacheModeEN, b: clsCacheModeEN) => {
return b.cacheModeName.localeCompare(a.cacheModeName);
}
case clsCacheModeEN.con_CacheModeENName:
return (a: clsCacheModeEN, b: clsCacheModeEN) => {
if (b.cacheModeENName == null) return -1;
if (a.cacheModeENName == null) return 1;
return b.cacheModeENName.localeCompare(a.cacheModeENName);
}
case clsCacheModeEN.con_InUse:
return (b: clsCacheModeEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clsCacheModeEN.con_Memo:
return (a: clsCacheModeEN, b: clsCacheModeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CacheMode]中不存在!(in ${ cacheMode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function CacheMode_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsCacheModeEN.con_CacheModeId:
return (obj: clsCacheModeEN) => {
return obj.cacheModeId === value;
}
case clsCacheModeEN.con_CacheModeName:
return (obj: clsCacheModeEN) => {
return obj.cacheModeName === value;
}
case clsCacheModeEN.con_CacheModeENName:
return (obj: clsCacheModeEN) => {
return obj.cacheModeENName === value;
}
case clsCacheModeEN.con_InUse:
return (obj: clsCacheModeEN) => {
return obj.inUse === value;
}
case clsCacheModeEN.con_Memo:
return (obj: clsCacheModeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CacheMode]中不存在!(in ${ cacheMode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function CacheMode_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsCacheModeEN.con_CacheModeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrCacheMode = await CacheMode_GetObjLstCache();
if (arrCacheMode == null) return [];
let arrCacheModeSel = arrCacheMode;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrCacheModeSel = arrCacheModeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrCacheModeSel.length == 0) return [];
return arrCacheModeSel.map(x=>x.cacheModeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CacheMode_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_GetFirstObjAsync(strWhereCond: string): Promise<clsCacheModeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const objCacheMode = CacheMode_GetObjFromJsonObj(returnObj);
return objCacheMode;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsCacheModeEN._CurrTabName;
if (IsNullOrEmpty(clsCacheModeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCacheModeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrCacheModeExObjLstCache: Array<clsCacheModeEN> = CacheHelper.Get(strKey);
const arrCacheModeObjLstT = CacheMode_GetObjLstByJSONObjLst(arrCacheModeExObjLstCache);
return arrCacheModeObjLstT;
}
try
{
const arrCacheModeExObjLst = await CacheMode_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrCacheModeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCacheModeExObjLst.length);
console.log(strInfo);
return arrCacheModeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CacheMode_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsCacheModeEN._CurrTabName;
if (IsNullOrEmpty(clsCacheModeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCacheModeEN.CacheAddiCondition);
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
const arrCacheModeExObjLstCache: Array<clsCacheModeEN> = JSON.parse(strTempObjLst);
const arrCacheModeObjLstT = CacheMode_GetObjLstByJSONObjLst(arrCacheModeExObjLstCache);
return arrCacheModeObjLstT;
}
try
{
const arrCacheModeExObjLst = await CacheMode_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrCacheModeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCacheModeExObjLst.length);
console.log(strInfo);
return arrCacheModeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CacheMode_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsCacheModeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrCacheModeObjLstCache: Array<clsCacheModeEN> = JSON.parse(strTempObjLst);
return arrCacheModeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function CacheMode_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCacheModeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cacheMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CacheMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsCacheModeEN._CurrTabName;
if (IsNullOrEmpty(clsCacheModeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCacheModeEN.CacheAddiCondition);
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
const arrCacheModeExObjLstCache: Array<clsCacheModeEN> = JSON.parse(strTempObjLst);
const arrCacheModeObjLstT = CacheMode_GetObjLstByJSONObjLst(arrCacheModeExObjLstCache);
return arrCacheModeObjLstT;
}
try
{
const arrCacheModeExObjLst = await CacheMode_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrCacheModeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCacheModeExObjLst.length);
console.log(strInfo);
return arrCacheModeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CacheMode_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsCacheModeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrCacheModeObjLstCache: Array<clsCacheModeEN> = JSON.parse(strTempObjLst);
return arrCacheModeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CacheMode_GetObjLstCache(): Promise<Array<clsCacheModeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrCacheModeObjLstCache;
switch (clsCacheModeEN.CacheModeId)
{
case "04"://sessionStorage
arrCacheModeObjLstCache = await CacheMode_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrCacheModeObjLstCache = await CacheMode_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrCacheModeObjLstCache = await CacheMode_GetObjLstClientCache();
break;
default:
arrCacheModeObjLstCache = await CacheMode_GetObjLstClientCache();
break;
}
return arrCacheModeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CacheMode_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrCacheModeObjLstCache;
switch (clsCacheModeEN.CacheModeId)
{
case "04"://sessionStorage
arrCacheModeObjLstCache = await CacheMode_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrCacheModeObjLstCache = await CacheMode_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrCacheModeObjLstCache = null;
break;
default:
arrCacheModeObjLstCache = null;
break;
}
return arrCacheModeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCacheModeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function CacheMode_GetSubObjLstCache(objCacheModeCond: clsCacheModeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrCacheModeObjLstCache = await CacheMode_GetObjLstCache();
let arrCacheModeSel = arrCacheModeObjLstCache;
if (objCacheModeCond.sfFldComparisonOp == null || objCacheModeCond.sfFldComparisonOp == "") return arrCacheModeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCacheModeCond.sfFldComparisonOp);
//console.log("clsCacheModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCacheModeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCacheModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrCacheModeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objCacheModeCond), cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCacheModeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCacheModeId:关键字列表
 * @returns 对象列表
 **/
export  async function CacheMode_GetObjLstByCacheModeIdLstAsync(arrCacheModeId: Array<string>): Promise<Array<clsCacheModeEN>>  
{
const strThisFuncName = "GetObjLstByCacheModeIdLstAsync";
const strAction = "GetObjLstByCacheModeIdLst";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCacheModeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cacheMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CacheMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param arrstrCacheModeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function CacheMode_GetObjLstByCacheModeIdLstCache(arrCacheModeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByCacheModeIdLstCache";
try
{
const arrCacheModeObjLstCache = await CacheMode_GetObjLstCache();
const arrCacheModeSel = arrCacheModeObjLstCache.filter(x => arrCacheModeIdLst.indexOf(x.cacheModeId)>-1);
return arrCacheModeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrCacheModeIdLst.join(","), cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsCacheModeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cacheMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CacheMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsCacheModeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cacheMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CacheMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsCacheModeEN>();
const arrCacheModeObjLstCache = await CacheMode_GetObjLstCache();
if (arrCacheModeObjLstCache.length == 0) return arrCacheModeObjLstCache;
let arrCacheModeSel = arrCacheModeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objCacheModeCond = new clsCacheModeEN();
ObjectAssign(objCacheModeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsCacheModeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCacheModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrCacheModeSel = arrCacheModeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrCacheModeSel.length == 0) return arrCacheModeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrCacheModeSel = arrCacheModeSel.sort(CacheMode_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrCacheModeSel = arrCacheModeSel.sort(objPagerPara.sortFun);
}
arrCacheModeSel = arrCacheModeSel.slice(intStart, intEnd);     
return arrCacheModeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCacheModeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function CacheMode_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsCacheModeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsCacheModeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cacheMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CacheMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param strCacheModeId:关键字
 * @returns 获取删除的结果
 **/
export  async function CacheMode_DelRecordAsync(strCacheModeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cacheMode_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strCacheModeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param arrCacheModeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function CacheMode_DelCacheModesAsync(arrCacheModeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelCacheModesAsync";
const strAction = "DelCacheModes";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCacheModeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_DelCacheModesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelCacheModesByCondAsync";
const strAction = "DelCacheModesByCond";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param objCacheModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CacheMode_AddNewRecordAsync(objCacheModeEN: clsCacheModeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objCacheModeEN);
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCacheModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param objCacheModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CacheMode_AddNewRecordWithMaxIdAsync(objCacheModeEN: clsCacheModeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCacheModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param objCacheModeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function CacheMode_AddNewRecordWithReturnKeyAsync(objCacheModeEN: clsCacheModeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCacheModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param objCacheModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function CacheMode_UpdateRecordAsync(objCacheModeEN: clsCacheModeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objCacheModeEN.sfUpdFldSetStr === undefined || objCacheModeEN.sfUpdFldSetStr === null || objCacheModeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCacheModeEN.cacheModeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCacheModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param objCacheModeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CacheMode_UpdateWithConditionAsync(objCacheModeEN: clsCacheModeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objCacheModeEN.sfUpdFldSetStr === undefined || objCacheModeEN.sfUpdFldSetStr === null || objCacheModeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCacheModeEN.cacheModeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);
objCacheModeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCacheModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param objstrCacheModeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function CacheMode_IsExistRecordCache(objCacheModeCond: clsCacheModeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrCacheModeObjLstCache = await CacheMode_GetObjLstCache();
if (arrCacheModeObjLstCache == null) return false;
let arrCacheModeSel = arrCacheModeObjLstCache;
if (objCacheModeCond.sfFldComparisonOp == null || objCacheModeCond.sfFldComparisonOp == "") return arrCacheModeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCacheModeCond.sfFldComparisonOp);
//console.log("clsCacheModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCacheModeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCacheModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrCacheModeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objCacheModeCond), cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param strCacheModeId:所给的关键字
 * @returns 对象
*/
export  async function CacheMode_IsExistCache(strCacheModeId:string) {
const strThisFuncName = "IsExistCache";
const arrCacheModeObjLstCache = await CacheMode_GetObjLstCache();
if (arrCacheModeObjLstCache == null) return false;
try
{
const arrCacheModeSel = arrCacheModeObjLstCache.filter(x => x.cacheModeId == strCacheModeId);
if (arrCacheModeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strCacheModeId, cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strCacheModeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function CacheMode_IsExistAsync(strCacheModeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCacheModeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  async function CacheMode_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
 * @param objCacheModeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function CacheMode_GetRecCountByCondCache(objCacheModeCond: clsCacheModeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrCacheModeObjLstCache = await CacheMode_GetObjLstCache();
if (arrCacheModeObjLstCache == null) return 0;
let arrCacheModeSel = arrCacheModeObjLstCache;
if (objCacheModeCond.sfFldComparisonOp == null || objCacheModeCond.sfFldComparisonOp == "") return arrCacheModeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCacheModeCond.sfFldComparisonOp);
//console.log("clsCacheModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCacheModeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCacheModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrCacheModeSel = arrCacheModeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCacheModeSel = arrCacheModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrCacheModeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objCacheModeCond), cacheMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function CacheMode_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function CacheMode_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cacheMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cacheMode_ConstructorName, strThisFuncName);
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
export  function CacheMode_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function CacheMode_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsCacheModeEN._CurrTabName;
switch (clsCacheModeEN.CacheModeId)
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
export  function CacheMode_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsCacheModeEN._CurrTabName;
switch (clsCacheModeEN.CacheModeId)
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

 * @param bolInUse:
*/
export  async function CacheMode_BindDdl_CacheModeIdByInUseInDivCache(objDiv: HTMLDivElement, strDdlName: string ,bolInUse: boolean)
{


const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_CacheModeIdByInUseInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_CacheModeIdByInUseInDivCache");
let arrObjLstSel = await CacheMode_GetObjLstCache();
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.inUse == bolInUse);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsCacheModeEN.con_CacheModeId, clsCacheModeEN.con_CacheModeName, "缓存方式");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CacheMode_CheckPropertyNew(pobjCacheModeEN: clsCacheModeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeName) === true )
{
 throw new Error("(errid:Watl000411)字段[缓存方式名]不能为空(In 缓存方式)!(clsCacheModeBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeId) == false && GetStrLen(pobjCacheModeEN.cacheModeId) > 2)
{
 throw new Error("(errid:Watl000413)字段[缓存方式Id(cacheModeId)]的长度不能超过2(In 缓存方式(CacheMode))!值:$(pobjCacheModeEN.cacheModeId)(clsCacheModeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeName) == false && GetStrLen(pobjCacheModeEN.cacheModeName) > 50)
{
 throw new Error("(errid:Watl000413)字段[缓存方式名(cacheModeName)]的长度不能超过50(In 缓存方式(CacheMode))!值:$(pobjCacheModeEN.cacheModeName)(clsCacheModeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeENName) == false && GetStrLen(pobjCacheModeEN.cacheModeENName) > 50)
{
 throw new Error("(errid:Watl000413)字段[缓存方式英文名(cacheModeENName)]的长度不能超过50(In 缓存方式(CacheMode))!值:$(pobjCacheModeEN.cacheModeENName)(clsCacheModeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCacheModeEN.memo) == false && GetStrLen(pobjCacheModeEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 缓存方式(CacheMode))!值:$(pobjCacheModeEN.memo)(clsCacheModeBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeId) == false && undefined !== pobjCacheModeEN.cacheModeId && tzDataType.isString(pobjCacheModeEN.cacheModeId) === false)
{
 throw new Error("(errid:Watl000414)字段[缓存方式Id(cacheModeId)]的值:[$(pobjCacheModeEN.cacheModeId)], 非法,应该为字符型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeName) == false && undefined !== pobjCacheModeEN.cacheModeName && tzDataType.isString(pobjCacheModeEN.cacheModeName) === false)
{
 throw new Error("(errid:Watl000414)字段[缓存方式名(cacheModeName)]的值:[$(pobjCacheModeEN.cacheModeName)], 非法,应该为字符型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeENName) == false && undefined !== pobjCacheModeEN.cacheModeENName && tzDataType.isString(pobjCacheModeEN.cacheModeENName) === false)
{
 throw new Error("(errid:Watl000414)字段[缓存方式英文名(cacheModeENName)]的值:[$(pobjCacheModeEN.cacheModeENName)], 非法,应该为字符型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckPropertyNew0)");
}
if (null != pobjCacheModeEN.inUse && undefined !== pobjCacheModeEN.inUse && tzDataType.isBoolean(pobjCacheModeEN.inUse) === false)
{
 throw new Error("(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjCacheModeEN.inUse)], 非法,应该为布尔型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCacheModeEN.memo) == false && undefined !== pobjCacheModeEN.memo && tzDataType.isString(pobjCacheModeEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjCacheModeEN.memo)], 非法,应该为字符型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CacheMode_CheckProperty4Update(pobjCacheModeEN: clsCacheModeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeId) == false && GetStrLen(pobjCacheModeEN.cacheModeId) > 2)
{
 throw new Error("(errid:Watl000416)字段[缓存方式Id(cacheModeId)]的长度不能超过2(In 缓存方式(CacheMode))!值:$(pobjCacheModeEN.cacheModeId)(clsCacheModeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeName) == false && GetStrLen(pobjCacheModeEN.cacheModeName) > 50)
{
 throw new Error("(errid:Watl000416)字段[缓存方式名(cacheModeName)]的长度不能超过50(In 缓存方式(CacheMode))!值:$(pobjCacheModeEN.cacheModeName)(clsCacheModeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeENName) == false && GetStrLen(pobjCacheModeEN.cacheModeENName) > 50)
{
 throw new Error("(errid:Watl000416)字段[缓存方式英文名(cacheModeENName)]的长度不能超过50(In 缓存方式(CacheMode))!值:$(pobjCacheModeEN.cacheModeENName)(clsCacheModeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCacheModeEN.memo) == false && GetStrLen(pobjCacheModeEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 缓存方式(CacheMode))!值:$(pobjCacheModeEN.memo)(clsCacheModeBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeId) == false && undefined !== pobjCacheModeEN.cacheModeId && tzDataType.isString(pobjCacheModeEN.cacheModeId) === false)
{
 throw new Error("(errid:Watl000417)字段[缓存方式Id(cacheModeId)]的值:[$(pobjCacheModeEN.cacheModeId)], 非法,应该为字符型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeName) == false && undefined !== pobjCacheModeEN.cacheModeName && tzDataType.isString(pobjCacheModeEN.cacheModeName) === false)
{
 throw new Error("(errid:Watl000417)字段[缓存方式名(cacheModeName)]的值:[$(pobjCacheModeEN.cacheModeName)], 非法,应该为字符型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCacheModeEN.cacheModeENName) == false && undefined !== pobjCacheModeEN.cacheModeENName && tzDataType.isString(pobjCacheModeEN.cacheModeENName) === false)
{
 throw new Error("(errid:Watl000417)字段[缓存方式英文名(cacheModeENName)]的值:[$(pobjCacheModeEN.cacheModeENName)], 非法,应该为字符型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckProperty4Update)");
}
if (null != pobjCacheModeEN.inUse && undefined !== pobjCacheModeEN.inUse && tzDataType.isBoolean(pobjCacheModeEN.inUse) === false)
{
 throw new Error("(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjCacheModeEN.inUse)], 非法,应该为布尔型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCacheModeEN.memo) == false && undefined !== pobjCacheModeEN.memo && tzDataType.isString(pobjCacheModeEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjCacheModeEN.memo)], 非法,应该为字符型(In 缓存方式(CacheMode))!(clsCacheModeBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function CacheMode_GetJSONStrByObj (pobjCacheModeEN: clsCacheModeEN): string
{
pobjCacheModeEN.sfUpdFldSetStr = pobjCacheModeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjCacheModeEN);
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
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function CacheMode_GetObjLstByJSONStr (strJSON: string): Array<clsCacheModeEN>
{
let arrCacheModeObjLst = new Array<clsCacheModeEN>();
if (strJSON === "")
{
return arrCacheModeObjLst;
}
try
{
arrCacheModeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrCacheModeObjLst;
}
return arrCacheModeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCacheModeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function CacheMode_GetObjLstByJSONObjLst (arrCacheModeObjLstS: Array<clsCacheModeEN>): Array<clsCacheModeEN>
{
const arrCacheModeObjLst = new Array<clsCacheModeEN>();
for (const objInFor of arrCacheModeObjLstS) {
const obj1 = CacheMode_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrCacheModeObjLst.push(obj1);
}
return arrCacheModeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function CacheMode_GetObjByJSONStr (strJSON: string): clsCacheModeEN
{
let pobjCacheModeEN = new clsCacheModeEN();
if (strJSON === "")
{
return pobjCacheModeEN;
}
try
{
pobjCacheModeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjCacheModeEN;
}
return pobjCacheModeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function CacheMode_GetCombineCondition(objCacheModeCond: clsCacheModeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objCacheModeCond.dicFldComparisonOp, clsCacheModeEN.con_CacheModeId) == true)
{
const strComparisonOpCacheModeId:string = objCacheModeCond.dicFldComparisonOp[clsCacheModeEN.con_CacheModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCacheModeEN.con_CacheModeId, objCacheModeCond.cacheModeId, strComparisonOpCacheModeId);
}
if (Object.prototype.hasOwnProperty.call(objCacheModeCond.dicFldComparisonOp, clsCacheModeEN.con_CacheModeName) == true)
{
const strComparisonOpCacheModeName:string = objCacheModeCond.dicFldComparisonOp[clsCacheModeEN.con_CacheModeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsCacheModeEN.con_CacheModeName, objCacheModeCond.cacheModeName, strComparisonOpCacheModeName);
}
if (Object.prototype.hasOwnProperty.call(objCacheModeCond.dicFldComparisonOp, clsCacheModeEN.con_CacheModeENName) == true)
{
const strComparisonOpCacheModeENName:string = objCacheModeCond.dicFldComparisonOp[clsCacheModeEN.con_CacheModeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsCacheModeEN.con_CacheModeENName, objCacheModeCond.cacheModeENName, strComparisonOpCacheModeENName);
}
if (Object.prototype.hasOwnProperty.call(objCacheModeCond.dicFldComparisonOp, clsCacheModeEN.con_InUse) == true)
{
if (objCacheModeCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsCacheModeEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsCacheModeEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objCacheModeCond.dicFldComparisonOp, clsCacheModeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objCacheModeCond.dicFldComparisonOp[clsCacheModeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsCacheModeEN.con_Memo, objCacheModeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--CacheMode(缓存方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCacheModeId: 缓存方式Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function CacheMode_GetUniCondStr(objCacheModeEN: clsCacheModeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CacheModeId = '{0}'", objCacheModeEN.cacheModeId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--CacheMode(缓存方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCacheModeId: 缓存方式Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function CacheMode_GetUniCondStr4Update(objCacheModeEN: clsCacheModeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and CacheModeId <> '{0}'", objCacheModeEN.cacheModeId);
 strWhereCond +=  Format(" and CacheModeId = '{0}'", objCacheModeEN.cacheModeId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objCacheModeENS:源对象
 * @param objCacheModeENT:目标对象
*/
export  function CacheMode_CopyObjTo(objCacheModeENS: clsCacheModeEN , objCacheModeENT: clsCacheModeEN ): void 
{
objCacheModeENT.cacheModeId = objCacheModeENS.cacheModeId; //缓存方式Id
objCacheModeENT.cacheModeName = objCacheModeENS.cacheModeName; //缓存方式名
objCacheModeENT.cacheModeENName = objCacheModeENS.cacheModeENName; //缓存方式英文名
objCacheModeENT.inUse = objCacheModeENS.inUse; //是否在用
objCacheModeENT.memo = objCacheModeENS.memo; //备注
objCacheModeENT.sfUpdFldSetStr = objCacheModeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCacheModeENS:源对象
 * @param objCacheModeENT:目标对象
*/
export  function CacheMode_GetObjFromJsonObj(objCacheModeENS: clsCacheModeEN): clsCacheModeEN 
{
 const objCacheModeENT: clsCacheModeEN = new clsCacheModeEN();
ObjectAssign(objCacheModeENT, objCacheModeENS);
 return objCacheModeENT;
}