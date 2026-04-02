
 /**
 * 类名:clsQxFuncModuleWApi
 * 表名:QxFuncModule(00140086)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/20 11:45:15
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:工程管理(PrjManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 功能模块(QxFuncModule)
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
import { clsQxFuncModuleEN } from "@/ts/L0Entity/PrjManage_GP/clsQxFuncModuleEN";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxFuncModule_Controller = "QxFuncModuleApi";
 export const qxFuncModule_ConstructorName = "qxFuncModule";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncModuleId:关键字
 * @returns 对象
 **/
export  async function QxFuncModule_GetObjByFuncModuleIdAsync(strFuncModuleId: string): Promise<clsQxFuncModuleEN|null>  
{
const strThisFuncName = "GetObjByFuncModuleIdAsync";

if (IsNullOrEmpty(strFuncModuleId) == true)
{
  const strMsg = Format("参数:[strFuncModuleId]不能为空!(In clsQxFuncModuleWApi.GetObjByFuncModuleIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strFuncModuleId.length != 4)
{
const strMsg = Format("缓存分类变量:[strFuncModuleId]的长度:[{0}]不正确!(clsQxFuncModuleWApi.GetObjByFuncModuleIdAsync)", strFuncModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByFuncModuleId";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFuncModuleId,
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
const objQxFuncModule = QxFuncModule_GetObjFromJsonObj(returnObj);
return objQxFuncModule;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param strFuncModuleId:所给的关键字
 * @returns 对象
*/
export  async function QxFuncModule_GetObjByFuncModuleIdCache(strFuncModuleId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByFuncModuleIdCache";

if (IsNullOrEmpty(strFuncModuleId) == true)
{
  const strMsg = Format("参数:[strFuncModuleId]不能为空!(In clsQxFuncModuleWApi.GetObjByFuncModuleIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strFuncModuleId.length != 4)
{
const strMsg = Format("缓存分类变量:[strFuncModuleId]的长度:[{0}]不正确!(clsQxFuncModuleWApi.GetObjByFuncModuleIdCache)", strFuncModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstCache();
try
{
const arrQxFuncModuleSel = arrQxFuncModuleObjLstCache.filter(x => 
 x.funcModuleId == strFuncModuleId );
let objQxFuncModule: clsQxFuncModuleEN;
if (arrQxFuncModuleSel.length > 0)
{
objQxFuncModule = arrQxFuncModuleSel[0];
return objQxFuncModule;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxFuncModuleConst = await QxFuncModule_GetObjByFuncModuleIdAsync(strFuncModuleId);
if (objQxFuncModuleConst != null)
{
QxFuncModule_ReFreshThisCache();
return objQxFuncModuleConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strFuncModuleId, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFuncModuleId:所给的关键字
 * @returns 对象
*/
export  async function QxFuncModule_GetObjByFuncModuleIdlocalStorage(strFuncModuleId: string) {
const strThisFuncName = "GetObjByFuncModuleIdlocalStorage";

if (IsNullOrEmpty(strFuncModuleId) == true)
{
  const strMsg = Format("参数:[strFuncModuleId]不能为空!(In clsQxFuncModuleWApi.GetObjByFuncModuleIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strFuncModuleId.length != 4)
{
const strMsg = Format("缓存分类变量:[strFuncModuleId]的长度:[{0}]不正确!(clsQxFuncModuleWApi.GetObjByFuncModuleIdlocalStorage)", strFuncModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxFuncModuleEN._CurrTabName, strFuncModuleId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxFuncModuleCache: clsQxFuncModuleEN = JSON.parse(strTempObj);
return objQxFuncModuleCache;
}
try
{
const objQxFuncModule = await QxFuncModule_GetObjByFuncModuleIdAsync(strFuncModuleId);
if (objQxFuncModule != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxFuncModule));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxFuncModule;
}
return objQxFuncModule;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strFuncModuleId, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxFuncModule:所给的对象
 * @returns 对象
*/
export  async function QxFuncModule_UpdateObjInLstCache(objQxFuncModule: clsQxFuncModuleEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstCache();
const obj = arrQxFuncModuleObjLstCache.find(x => 
x.funcModuleId == objQxFuncModule.funcModuleId);
if (obj != null)
{
objQxFuncModule.funcModuleId = obj.funcModuleId;
ObjectAssign( obj, objQxFuncModule);
}
else
{
arrQxFuncModuleObjLstCache.push(objQxFuncModule);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFuncModuleId:所给的关键字
 * @returns 对象
*/
export  async function QxFuncModule_GetNameByFuncModuleIdCache(strFuncModuleId: string) {

if (IsNullOrEmpty(strFuncModuleId) == true)
{
  const strMsg = Format("参数:[strFuncModuleId]不能为空!(In clsQxFuncModuleWApi.GetNameByFuncModuleIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strFuncModuleId.length != 4)
{
const strMsg = Format("缓存分类变量:[strFuncModuleId]的长度:[{0}]不正确!(clsQxFuncModuleWApi.GetNameByFuncModuleIdCache)", strFuncModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstCache();
if (arrQxFuncModuleObjLstCache == null) return "";
try
{
const arrQxFuncModuleSel = arrQxFuncModuleObjLstCache.filter(x => 
 x.funcModuleId == strFuncModuleId );
let objQxFuncModule: clsQxFuncModuleEN;
if (arrQxFuncModuleSel.length > 0)
{
objQxFuncModule = arrQxFuncModuleSel[0];
return objQxFuncModule.funcModuleName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strFuncModuleId);
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
export  async function QxFuncModule_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxFuncModuleEN.con_FuncModuleId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxFuncModuleEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxFuncModuleEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strFuncModuleId = strInValue;
if (IsNullOrEmpty(strFuncModuleId) == true)
{
return "";
}
const objQxFuncModule = await QxFuncModule_GetObjByFuncModuleIdCache(strFuncModuleId );
if (objQxFuncModule == null) return "";
if (objQxFuncModule.GetFldValue(strOutFldName) == null) return "";
return objQxFuncModule.GetFldValue(strOutFldName).toString();
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
export  function QxFuncModule_SortFunDefa(a:clsQxFuncModuleEN , b:clsQxFuncModuleEN): number 
{
return a.funcModuleId.localeCompare(b.funcModuleId);
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
export  function QxFuncModule_SortFunDefa2Fld(a:clsQxFuncModuleEN , b:clsQxFuncModuleEN): number 
{
if (a.funcModuleName == b.funcModuleName) return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
else return a.funcModuleName.localeCompare(b.funcModuleName);
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
export  function QxFuncModule_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxFuncModuleEN.con_FuncModuleId:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
return a.funcModuleId.localeCompare(b.funcModuleId);
}
case clsQxFuncModuleEN.con_FuncModuleName:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
return a.funcModuleName.localeCompare(b.funcModuleName);
}
case clsQxFuncModuleEN.con_FuncModuleNameSim:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (a.funcModuleNameSim == null) return -1;
if (b.funcModuleNameSim == null) return 1;
return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
}
case clsQxFuncModuleEN.con_FuncModuleEnName:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (a.funcModuleEnName == null) return -1;
if (b.funcModuleEnName == null) return 1;
return a.funcModuleEnName.localeCompare(b.funcModuleEnName);
}
case clsQxFuncModuleEN.con_OrderNum:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
return a.orderNum-b.orderNum;
}
case clsQxFuncModuleEN.con_InUse:
return (a: clsQxFuncModuleEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clsQxFuncModuleEN.con_QxPrjId:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxFuncModuleEN.con_UpdDate:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxFuncModuleEN.con_UpdUser:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsQxFuncModuleEN.con_Memo:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxFuncModule]中不存在!(in ${ qxFuncModule_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxFuncModuleEN.con_FuncModuleId:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
return b.funcModuleId.localeCompare(a.funcModuleId);
}
case clsQxFuncModuleEN.con_FuncModuleName:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
return b.funcModuleName.localeCompare(a.funcModuleName);
}
case clsQxFuncModuleEN.con_FuncModuleNameSim:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (b.funcModuleNameSim == null) return -1;
if (a.funcModuleNameSim == null) return 1;
return b.funcModuleNameSim.localeCompare(a.funcModuleNameSim);
}
case clsQxFuncModuleEN.con_FuncModuleEnName:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (b.funcModuleEnName == null) return -1;
if (a.funcModuleEnName == null) return 1;
return b.funcModuleEnName.localeCompare(a.funcModuleEnName);
}
case clsQxFuncModuleEN.con_OrderNum:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
return b.orderNum-a.orderNum;
}
case clsQxFuncModuleEN.con_InUse:
return (b: clsQxFuncModuleEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clsQxFuncModuleEN.con_QxPrjId:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxFuncModuleEN.con_UpdDate:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxFuncModuleEN.con_UpdUser:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsQxFuncModuleEN.con_Memo:
return (a: clsQxFuncModuleEN, b: clsQxFuncModuleEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxFuncModule]中不存在!(in ${ qxFuncModule_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxFuncModule_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxFuncModuleEN.con_FuncModuleId:
return (obj: clsQxFuncModuleEN) => {
return obj.funcModuleId === value;
}
case clsQxFuncModuleEN.con_FuncModuleName:
return (obj: clsQxFuncModuleEN) => {
return obj.funcModuleName === value;
}
case clsQxFuncModuleEN.con_FuncModuleNameSim:
return (obj: clsQxFuncModuleEN) => {
return obj.funcModuleNameSim === value;
}
case clsQxFuncModuleEN.con_FuncModuleEnName:
return (obj: clsQxFuncModuleEN) => {
return obj.funcModuleEnName === value;
}
case clsQxFuncModuleEN.con_OrderNum:
return (obj: clsQxFuncModuleEN) => {
return obj.orderNum === value;
}
case clsQxFuncModuleEN.con_InUse:
return (obj: clsQxFuncModuleEN) => {
return obj.inUse === value;
}
case clsQxFuncModuleEN.con_QxPrjId:
return (obj: clsQxFuncModuleEN) => {
return obj.qxPrjId === value;
}
case clsQxFuncModuleEN.con_UpdDate:
return (obj: clsQxFuncModuleEN) => {
return obj.updDate === value;
}
case clsQxFuncModuleEN.con_UpdUser:
return (obj: clsQxFuncModuleEN) => {
return obj.updUser === value;
}
case clsQxFuncModuleEN.con_Memo:
return (obj: clsQxFuncModuleEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxFuncModule]中不存在!(in ${ qxFuncModule_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxFuncModule_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxFuncModuleEN.con_FuncModuleId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxFuncModule = await QxFuncModule_GetObjLstCache();
if (arrQxFuncModule == null) return [];
let arrQxFuncModuleSel = arrQxFuncModule;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxFuncModuleSel.length == 0) return [];
return arrQxFuncModuleSel.map(x=>x.funcModuleId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxFuncModule_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_GetFirstObjAsync(strWhereCond: string): Promise<clsQxFuncModuleEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const objQxFuncModule = QxFuncModule_GetObjFromJsonObj(returnObj);
return objQxFuncModule;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxFuncModuleEN._CurrTabName;
if (IsNullOrEmpty(clsQxFuncModuleEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxFuncModuleEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxFuncModuleExObjLstCache: Array<clsQxFuncModuleEN> = CacheHelper.Get(strKey);
const arrQxFuncModuleObjLstT = QxFuncModule_GetObjLstByJSONObjLst(arrQxFuncModuleExObjLstCache);
return arrQxFuncModuleObjLstT;
}
try
{
const arrQxFuncModuleExObjLst = await QxFuncModule_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxFuncModuleExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxFuncModuleExObjLst.length);
console.log(strInfo);
return arrQxFuncModuleExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxFuncModule_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxFuncModuleEN._CurrTabName;
if (IsNullOrEmpty(clsQxFuncModuleEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxFuncModuleEN.CacheAddiCondition);
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
const arrQxFuncModuleExObjLstCache: Array<clsQxFuncModuleEN> = JSON.parse(strTempObjLst);
const arrQxFuncModuleObjLstT = QxFuncModule_GetObjLstByJSONObjLst(arrQxFuncModuleExObjLstCache);
return arrQxFuncModuleObjLstT;
}
try
{
const arrQxFuncModuleExObjLst = await QxFuncModule_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxFuncModuleExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxFuncModuleExObjLst.length);
console.log(strInfo);
return arrQxFuncModuleExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxFuncModule_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxFuncModuleEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxFuncModuleObjLstCache: Array<clsQxFuncModuleEN> = JSON.parse(strTempObjLst);
return arrQxFuncModuleObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxFuncModule_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxFuncModuleEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxFuncModuleEN._CurrTabName;
if (IsNullOrEmpty(clsQxFuncModuleEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxFuncModuleEN.CacheAddiCondition);
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
const arrQxFuncModuleExObjLstCache: Array<clsQxFuncModuleEN> = JSON.parse(strTempObjLst);
const arrQxFuncModuleObjLstT = QxFuncModule_GetObjLstByJSONObjLst(arrQxFuncModuleExObjLstCache);
return arrQxFuncModuleObjLstT;
}
try
{
const arrQxFuncModuleExObjLst = await QxFuncModule_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxFuncModuleExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxFuncModuleExObjLst.length);
console.log(strInfo);
return arrQxFuncModuleExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxFuncModule_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxFuncModuleEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxFuncModuleObjLstCache: Array<clsQxFuncModuleEN> = JSON.parse(strTempObjLst);
return arrQxFuncModuleObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxFuncModule_GetObjLstCache(): Promise<Array<clsQxFuncModuleEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxFuncModuleObjLstCache;
switch (clsQxFuncModuleEN.CacheModeId)
{
case "04"://sessionStorage
arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstClientCache();
break;
default:
arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstClientCache();
break;
}
return arrQxFuncModuleObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxFuncModule_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxFuncModuleObjLstCache;
switch (clsQxFuncModuleEN.CacheModeId)
{
case "04"://sessionStorage
arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxFuncModuleObjLstCache = null;
break;
default:
arrQxFuncModuleObjLstCache = null;
break;
}
return arrQxFuncModuleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncModuleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxFuncModule_GetSubObjLstCache(objQxFuncModuleCond: clsQxFuncModuleEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstCache();
let arrQxFuncModuleSel = arrQxFuncModuleObjLstCache;
if (objQxFuncModuleCond.sfFldComparisonOp == null || objQxFuncModuleCond.sfFldComparisonOp == "") return arrQxFuncModuleSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxFuncModuleCond.sfFldComparisonOp);
//console.log("clsQxFuncModuleWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxFuncModuleCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxFuncModuleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxFuncModuleSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxFuncModuleCond), qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxFuncModuleEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncModuleId:关键字列表
 * @returns 对象列表
 **/
export  async function QxFuncModule_GetObjLstByFuncModuleIdLstAsync(arrFuncModuleId: Array<string>): Promise<Array<clsQxFuncModuleEN>>  
{
const strThisFuncName = "GetObjLstByFuncModuleIdLstAsync";
const strAction = "GetObjLstByFuncModuleIdLst";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrFuncModuleId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param arrstrFuncModuleIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxFuncModule_GetObjLstByFuncModuleIdLstCache(arrFuncModuleIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByFuncModuleIdLstCache";
try
{
const arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstCache();
const arrQxFuncModuleSel = arrQxFuncModuleObjLstCache.filter(x => arrFuncModuleIdLst.indexOf(x.funcModuleId)>-1);
return arrQxFuncModuleSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrFuncModuleIdLst.join(","), qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxFuncModuleEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxFuncModuleEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxFuncModuleEN>();
const arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstCache();
if (arrQxFuncModuleObjLstCache.length == 0) return arrQxFuncModuleObjLstCache;
let arrQxFuncModuleSel = arrQxFuncModuleObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQxFuncModuleCond = new clsQxFuncModuleEN();
ObjectAssign(objQxFuncModuleCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQxFuncModuleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxFuncModuleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxFuncModuleSel.length == 0) return arrQxFuncModuleSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxFuncModuleSel = arrQxFuncModuleSel.sort(QxFuncModule_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxFuncModuleSel = arrQxFuncModuleSel.sort(objPagerPara.sortFun);
}
arrQxFuncModuleSel = arrQxFuncModuleSel.slice(intStart, intEnd);     
return arrQxFuncModuleSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxFuncModuleEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxFuncModule_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxFuncModuleEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxFuncModuleEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param strFuncModuleId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxFuncModule_DelRecordAsync(strFuncModuleId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strFuncModuleId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param arrFuncModuleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxFuncModule_DelQxFuncModulesAsync(arrFuncModuleId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxFuncModulesAsync";
const strAction = "DelQxFuncModules";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrFuncModuleId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_DelQxFuncModulesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxFuncModulesByCondAsync";
const strAction = "DelQxFuncModulesByCond";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModuleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_AddNewRecordAsync(objQxFuncModuleEN: clsQxFuncModuleEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxFuncModuleEN.funcModuleId === null || objQxFuncModuleEN.funcModuleId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxFuncModuleEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModuleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_AddNewRecordWithMaxIdAsync(objQxFuncModuleEN: clsQxFuncModuleEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objQxFuncModuleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objQxFuncModuleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxFuncModuleEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objQxFuncModuleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxFuncModuleEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objQxFuncModuleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxFuncModuleEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objQxFuncModuleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objQxFuncModuleEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModuleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxFuncModule_AddNewRecordWithReturnKeyAsync(objQxFuncModuleEN: clsQxFuncModuleEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModuleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxFuncModule_UpdateRecordAsync(objQxFuncModuleEN: clsQxFuncModuleEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxFuncModuleEN.sfUpdFldSetStr === undefined || objQxFuncModuleEN.sfUpdFldSetStr === null || objQxFuncModuleEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxFuncModuleEN.funcModuleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModuleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxFuncModule_UpdateWithConditionAsync(objQxFuncModuleEN: clsQxFuncModuleEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxFuncModuleEN.sfUpdFldSetStr === undefined || objQxFuncModuleEN.sfUpdFldSetStr === null || objQxFuncModuleEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxFuncModuleEN.funcModuleId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);
objQxFuncModuleEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param objstrFuncModuleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxFuncModule_IsExistRecordCache(objQxFuncModuleCond: clsQxFuncModuleEN) {
const strThisFuncName = "IsExistRecordCache";
const arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstCache();
if (arrQxFuncModuleObjLstCache == null) return false;
let arrQxFuncModuleSel = arrQxFuncModuleObjLstCache;
if (objQxFuncModuleCond.sfFldComparisonOp == null || objQxFuncModuleCond.sfFldComparisonOp == "") return arrQxFuncModuleSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxFuncModuleCond.sfFldComparisonOp);
//console.log("clsQxFuncModuleWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxFuncModuleCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxFuncModuleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxFuncModuleSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxFuncModuleCond), qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param strFuncModuleId:所给的关键字
 * @returns 对象
*/
export  async function QxFuncModule_IsExistCache(strFuncModuleId:string) {
const strThisFuncName = "IsExistCache";
const arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstCache();
if (arrQxFuncModuleObjLstCache == null) return false;
try
{
const arrQxFuncModuleSel = arrQxFuncModuleObjLstCache.filter(x => x.funcModuleId == strFuncModuleId);
if (arrQxFuncModuleSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strFuncModuleId, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strFuncModuleId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxFuncModule_IsExistAsync(strFuncModuleId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFuncModuleId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModuleCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxFuncModule_GetRecCountByCondCache(objQxFuncModuleCond: clsQxFuncModuleEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxFuncModuleObjLstCache = await QxFuncModule_GetObjLstCache();
if (arrQxFuncModuleObjLstCache == null) return 0;
let arrQxFuncModuleSel = arrQxFuncModuleObjLstCache;
if (objQxFuncModuleCond.sfFldComparisonOp == null || objQxFuncModuleCond.sfFldComparisonOp == "") return arrQxFuncModuleSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxFuncModuleCond.sfFldComparisonOp);
//console.log("clsQxFuncModuleWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxFuncModuleCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxFuncModuleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxFuncModuleSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxFuncModuleCond), qxFuncModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function QxFuncModule_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_ConstructorName, strThisFuncName);
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
export  function QxFuncModule_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxFuncModule_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxFuncModuleEN._CurrTabName;
switch (clsQxFuncModuleEN.CacheModeId)
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
export  function QxFuncModule_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxFuncModuleEN._CurrTabName;
switch (clsQxFuncModuleEN.CacheModeId)
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
export  async function QxFuncModule_BindDdl_FuncModuleIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_FuncModuleIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_FuncModuleIdInDivCache");
const arrObjLstSel = await QxFuncModule_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxFuncModuleEN.con_FuncModuleId, clsQxFuncModuleEN.con_FuncModuleName, "功能模块");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxFuncModule_CheckPropertyNew(pobjQxFuncModuleEN: clsQxFuncModuleEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleName) === true )
{
 throw new Error(`(errid:Watl000411)字段[模块名]不能为空(In 功能模块)!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (null === pobjQxFuncModuleEN.orderNum 
 || pobjQxFuncModuleEN.orderNum != null && pobjQxFuncModuleEN.orderNum.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[排序号]不能为空(In 功能模块)!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.qxPrjId) === true 
 || pobjQxFuncModuleEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 功能模块)!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleId) == false && GetStrLen(pobjQxFuncModuleEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[模块Id(funcModuleId)]的长度不能超过4(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.funcModuleId}(clsQxFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleName) == false && GetStrLen(pobjQxFuncModuleEN.funcModuleName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[模块名(funcModuleName)]的长度不能超过30(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.funcModuleName}(clsQxFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleNameSim) == false && GetStrLen(pobjQxFuncModuleEN.funcModuleNameSim) > 30)
{
 throw new Error(`(errid:Watl000413)字段[模块名_Sim(funcModuleNameSim)]的长度不能超过30(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.funcModuleNameSim}(clsQxFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleEnName) == false && GetStrLen(pobjQxFuncModuleEN.funcModuleEnName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[模块英文名(funcModuleEnName)]的长度不能超过30(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.funcModuleEnName}(clsQxFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.qxPrjId) == false && GetStrLen(pobjQxFuncModuleEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.qxPrjId}(clsQxFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.updDate) == false && GetStrLen(pobjQxFuncModuleEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.updDate}(clsQxFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.updUser) == false && GetStrLen(pobjQxFuncModuleEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.updUser}(clsQxFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.memo) == false && GetStrLen(pobjQxFuncModuleEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.memo}(clsQxFuncModuleBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleId) == false && undefined !== pobjQxFuncModuleEN.funcModuleId && tzDataType.isString(pobjQxFuncModuleEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块Id(funcModuleId)]的值:[${pobjQxFuncModuleEN.funcModuleId}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleName) == false && undefined !== pobjQxFuncModuleEN.funcModuleName && tzDataType.isString(pobjQxFuncModuleEN.funcModuleName) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块名(funcModuleName)]的值:[${pobjQxFuncModuleEN.funcModuleName}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleNameSim) == false && undefined !== pobjQxFuncModuleEN.funcModuleNameSim && tzDataType.isString(pobjQxFuncModuleEN.funcModuleNameSim) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块名_Sim(funcModuleNameSim)]的值:[${pobjQxFuncModuleEN.funcModuleNameSim}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleEnName) == false && undefined !== pobjQxFuncModuleEN.funcModuleEnName && tzDataType.isString(pobjQxFuncModuleEN.funcModuleEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块英文名(funcModuleEnName)]的值:[${pobjQxFuncModuleEN.funcModuleEnName}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (null != pobjQxFuncModuleEN.orderNum && undefined !== pobjQxFuncModuleEN.orderNum && tzDataType.isNumber(pobjQxFuncModuleEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[排序号(orderNum)]的值:[${pobjQxFuncModuleEN.orderNum}], 非法,应该为数值型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (null != pobjQxFuncModuleEN.inUse && undefined !== pobjQxFuncModuleEN.inUse && tzDataType.isBoolean(pobjQxFuncModuleEN.inUse) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjQxFuncModuleEN.inUse}], 非法,应该为布尔型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.qxPrjId) == false && undefined !== pobjQxFuncModuleEN.qxPrjId && tzDataType.isString(pobjQxFuncModuleEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxFuncModuleEN.qxPrjId}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.updDate) == false && undefined !== pobjQxFuncModuleEN.updDate && tzDataType.isString(pobjQxFuncModuleEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxFuncModuleEN.updDate}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.updUser) == false && undefined !== pobjQxFuncModuleEN.updUser && tzDataType.isString(pobjQxFuncModuleEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxFuncModuleEN.updUser}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.memo) == false && undefined !== pobjQxFuncModuleEN.memo && tzDataType.isString(pobjQxFuncModuleEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxFuncModuleEN.memo}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxFuncModule_CheckProperty4Update(pobjQxFuncModuleEN: clsQxFuncModuleEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleId) == false && GetStrLen(pobjQxFuncModuleEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[模块Id(funcModuleId)]的长度不能超过4(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.funcModuleId}(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleName) == false && GetStrLen(pobjQxFuncModuleEN.funcModuleName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[模块名(funcModuleName)]的长度不能超过30(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.funcModuleName}(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleNameSim) == false && GetStrLen(pobjQxFuncModuleEN.funcModuleNameSim) > 30)
{
 throw new Error(`(errid:Watl000416)字段[模块名_Sim(funcModuleNameSim)]的长度不能超过30(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.funcModuleNameSim}(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleEnName) == false && GetStrLen(pobjQxFuncModuleEN.funcModuleEnName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[模块英文名(funcModuleEnName)]的长度不能超过30(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.funcModuleEnName}(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.qxPrjId) == false && GetStrLen(pobjQxFuncModuleEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.qxPrjId}(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.updDate) == false && GetStrLen(pobjQxFuncModuleEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.updDate}(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.updUser) == false && GetStrLen(pobjQxFuncModuleEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.updUser}(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.memo) == false && GetStrLen(pobjQxFuncModuleEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 功能模块(QxFuncModule))!值:${pobjQxFuncModuleEN.memo}(clsQxFuncModuleBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleId) == false && undefined !== pobjQxFuncModuleEN.funcModuleId && tzDataType.isString(pobjQxFuncModuleEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块Id(funcModuleId)]的值:[${pobjQxFuncModuleEN.funcModuleId}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleName) == false && undefined !== pobjQxFuncModuleEN.funcModuleName && tzDataType.isString(pobjQxFuncModuleEN.funcModuleName) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块名(funcModuleName)]的值:[${pobjQxFuncModuleEN.funcModuleName}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleNameSim) == false && undefined !== pobjQxFuncModuleEN.funcModuleNameSim && tzDataType.isString(pobjQxFuncModuleEN.funcModuleNameSim) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块名_Sim(funcModuleNameSim)]的值:[${pobjQxFuncModuleEN.funcModuleNameSim}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleEnName) == false && undefined !== pobjQxFuncModuleEN.funcModuleEnName && tzDataType.isString(pobjQxFuncModuleEN.funcModuleEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块英文名(funcModuleEnName)]的值:[${pobjQxFuncModuleEN.funcModuleEnName}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (null != pobjQxFuncModuleEN.orderNum && undefined !== pobjQxFuncModuleEN.orderNum && tzDataType.isNumber(pobjQxFuncModuleEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[排序号(orderNum)]的值:[${pobjQxFuncModuleEN.orderNum}], 非法,应该为数值型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (null != pobjQxFuncModuleEN.inUse && undefined !== pobjQxFuncModuleEN.inUse && tzDataType.isBoolean(pobjQxFuncModuleEN.inUse) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjQxFuncModuleEN.inUse}], 非法,应该为布尔型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.qxPrjId) == false && undefined !== pobjQxFuncModuleEN.qxPrjId && tzDataType.isString(pobjQxFuncModuleEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxFuncModuleEN.qxPrjId}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.updDate) == false && undefined !== pobjQxFuncModuleEN.updDate && tzDataType.isString(pobjQxFuncModuleEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxFuncModuleEN.updDate}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.updUser) == false && undefined !== pobjQxFuncModuleEN.updUser && tzDataType.isString(pobjQxFuncModuleEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxFuncModuleEN.updUser}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModuleEN.memo) == false && undefined !== pobjQxFuncModuleEN.memo && tzDataType.isString(pobjQxFuncModuleEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxFuncModuleEN.memo}], 非法,应该为字符型(In 功能模块(QxFuncModule))!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxFuncModuleEN.funcModuleId) === true 
 || pobjQxFuncModuleEN.funcModuleId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[模块Id]不能为空(In 功能模块)!(clsQxFuncModuleBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxFuncModule_GetJSONStrByObj (pobjQxFuncModuleEN: clsQxFuncModuleEN): string
{
pobjQxFuncModuleEN.sfUpdFldSetStr = pobjQxFuncModuleEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxFuncModuleEN);
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
export  function QxFuncModule_GetObjLstByJSONStr (strJSON: string): Array<clsQxFuncModuleEN>
{
let arrQxFuncModuleObjLst = new Array<clsQxFuncModuleEN>();
if (strJSON === "")
{
return arrQxFuncModuleObjLst;
}
try
{
arrQxFuncModuleObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxFuncModuleObjLst;
}
return arrQxFuncModuleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxFuncModuleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxFuncModule_GetObjLstByJSONObjLst (arrQxFuncModuleObjLstS: Array<clsQxFuncModuleEN>): Array<clsQxFuncModuleEN>
{
const arrQxFuncModuleObjLst = new Array<clsQxFuncModuleEN>();
for (const objInFor of arrQxFuncModuleObjLstS) {
const obj1 = QxFuncModule_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxFuncModuleObjLst.push(obj1);
}
return arrQxFuncModuleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxFuncModule_GetObjByJSONStr (strJSON: string): clsQxFuncModuleEN
{
let pobjQxFuncModuleEN = new clsQxFuncModuleEN();
if (strJSON === "")
{
return pobjQxFuncModuleEN;
}
try
{
pobjQxFuncModuleEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxFuncModuleEN;
}
return pobjQxFuncModuleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxFuncModule_GetCombineCondition(objQxFuncModuleCond: clsQxFuncModuleEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_FuncModuleId) == true)
{
const strComparisonOpFuncModuleId:string = objQxFuncModuleCond.dicFldComparisonOp[clsQxFuncModuleEN.con_FuncModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModuleEN.con_FuncModuleId, objQxFuncModuleCond.funcModuleId, strComparisonOpFuncModuleId);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_FuncModuleName) == true)
{
const strComparisonOpFuncModuleName:string = objQxFuncModuleCond.dicFldComparisonOp[clsQxFuncModuleEN.con_FuncModuleName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModuleEN.con_FuncModuleName, objQxFuncModuleCond.funcModuleName, strComparisonOpFuncModuleName);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_FuncModuleNameSim) == true)
{
const strComparisonOpFuncModuleNameSim:string = objQxFuncModuleCond.dicFldComparisonOp[clsQxFuncModuleEN.con_FuncModuleNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModuleEN.con_FuncModuleNameSim, objQxFuncModuleCond.funcModuleNameSim, strComparisonOpFuncModuleNameSim);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_FuncModuleEnName) == true)
{
const strComparisonOpFuncModuleEnName:string = objQxFuncModuleCond.dicFldComparisonOp[clsQxFuncModuleEN.con_FuncModuleEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModuleEN.con_FuncModuleEnName, objQxFuncModuleCond.funcModuleEnName, strComparisonOpFuncModuleEnName);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objQxFuncModuleCond.dicFldComparisonOp[clsQxFuncModuleEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsQxFuncModuleEN.con_OrderNum, objQxFuncModuleCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_InUse) == true)
{
if (objQxFuncModuleCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxFuncModuleEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxFuncModuleEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxFuncModuleCond.dicFldComparisonOp[clsQxFuncModuleEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModuleEN.con_QxPrjId, objQxFuncModuleCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxFuncModuleCond.dicFldComparisonOp[clsQxFuncModuleEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModuleEN.con_UpdDate, objQxFuncModuleCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxFuncModuleCond.dicFldComparisonOp[clsQxFuncModuleEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModuleEN.con_UpdUser, objQxFuncModuleCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModuleCond.dicFldComparisonOp, clsQxFuncModuleEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxFuncModuleCond.dicFldComparisonOp[clsQxFuncModuleEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModuleEN.con_Memo, objQxFuncModuleCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxFuncModuleENS:源对象
 * @param objQxFuncModuleENT:目标对象
*/
export  function QxFuncModule_GetObjFromJsonObj(objQxFuncModuleENS: clsQxFuncModuleEN): clsQxFuncModuleEN 
{
 const objQxFuncModuleENT: clsQxFuncModuleEN = new clsQxFuncModuleEN();
ObjectAssign(objQxFuncModuleENT, objQxFuncModuleENS);
 return objQxFuncModuleENT;
}