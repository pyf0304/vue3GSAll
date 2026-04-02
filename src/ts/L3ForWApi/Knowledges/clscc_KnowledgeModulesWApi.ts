
 /**
 * 类名:clscc_KnowledgeModulesWApi
 * 表名:cc_KnowledgeModules(01120959)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:40
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点模块(cc_KnowledgeModules)
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
import { clscc_KnowledgeModulesEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const cc_KnowledgeModules_Controller = "cc_KnowledgeModulesApi";
 export const cc_KnowledgeModules_ConstructorName = "cc_KnowledgeModules";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKnowledgeModuleId:关键字
 * @returns 对象
 **/
export  async function cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync(strKnowledgeModuleId: string): Promise<clscc_KnowledgeModulesEN|null>  
{
const strThisFuncName = "GetObjByKnowledgeModuleIdAsync";

if (IsNullOrEmpty(strKnowledgeModuleId) == true)
{
  const strMsg = Format("参数:[strKnowledgeModuleId]不能为空!(In clscc_KnowledgeModulesWApi.GetObjByKnowledgeModuleIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strKnowledgeModuleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strKnowledgeModuleId]的长度:[{0}]不正确!(clscc_KnowledgeModulesWApi.GetObjByKnowledgeModuleIdAsync)", strKnowledgeModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByKnowledgeModuleId";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strKnowledgeModuleId,
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
const objcc_KnowledgeModules = cc_KnowledgeModules_GetObjFromJsonObj(returnObj);
return objcc_KnowledgeModules;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param strKnowledgeModuleId:所给的关键字
 * @returns 对象
*/
export  async function cc_KnowledgeModules_GetObjByKnowledgeModuleIdCache(strKnowledgeModuleId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByKnowledgeModuleIdCache";

if (IsNullOrEmpty(strKnowledgeModuleId) == true)
{
  const strMsg = Format("参数:[strKnowledgeModuleId]不能为空!(In clscc_KnowledgeModulesWApi.GetObjByKnowledgeModuleIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strKnowledgeModuleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strKnowledgeModuleId]的长度:[{0}]不正确!(clscc_KnowledgeModulesWApi.GetObjByKnowledgeModuleIdCache)", strKnowledgeModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstCache();
try
{
const arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesObjLstCache.filter(x => 
 x.knowledgeModuleId == strKnowledgeModuleId );
let objcc_KnowledgeModules: clscc_KnowledgeModulesEN;
if (arrcc_KnowledgeModulesSel.length > 0)
{
objcc_KnowledgeModules = arrcc_KnowledgeModulesSel[0];
return objcc_KnowledgeModules;
}
else
{
if (bolTryAsyncOnce == true)
{
const objcc_KnowledgeModulesConst = await cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync(strKnowledgeModuleId);
if (objcc_KnowledgeModulesConst != null)
{
cc_KnowledgeModules_ReFreshThisCache();
return objcc_KnowledgeModulesConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strKnowledgeModuleId, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strKnowledgeModuleId:所给的关键字
 * @returns 对象
*/
export  async function cc_KnowledgeModules_GetObjByKnowledgeModuleIdlocalStorage(strKnowledgeModuleId: string) {
const strThisFuncName = "GetObjByKnowledgeModuleIdlocalStorage";

if (IsNullOrEmpty(strKnowledgeModuleId) == true)
{
  const strMsg = Format("参数:[strKnowledgeModuleId]不能为空!(In clscc_KnowledgeModulesWApi.GetObjByKnowledgeModuleIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strKnowledgeModuleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strKnowledgeModuleId]的长度:[{0}]不正确!(clscc_KnowledgeModulesWApi.GetObjByKnowledgeModuleIdlocalStorage)", strKnowledgeModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clscc_KnowledgeModulesEN._CurrTabName, strKnowledgeModuleId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objcc_KnowledgeModulesCache: clscc_KnowledgeModulesEN = JSON.parse(strTempObj);
return objcc_KnowledgeModulesCache;
}
try
{
const objcc_KnowledgeModules = await cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync(strKnowledgeModuleId);
if (objcc_KnowledgeModules != null)
{
localStorage.setItem(strKey, JSON.stringify(objcc_KnowledgeModules));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objcc_KnowledgeModules;
}
return objcc_KnowledgeModules;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strKnowledgeModuleId, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objcc_KnowledgeModules:所给的对象
 * @returns 对象
*/
export  async function cc_KnowledgeModules_UpdateObjInLstCache(objcc_KnowledgeModules: clscc_KnowledgeModulesEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstCache();
const obj = arrcc_KnowledgeModulesObjLstCache.find(x => x.courseId == objcc_KnowledgeModules.courseId && x.knowledgeModuleName == objcc_KnowledgeModules.knowledgeModuleName);
if (obj != null)
{
objcc_KnowledgeModules.knowledgeModuleId = obj.knowledgeModuleId;
ObjectAssign( obj, objcc_KnowledgeModules);
}
else
{
arrcc_KnowledgeModulesObjLstCache.push(objcc_KnowledgeModules);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strKnowledgeModuleId:所给的关键字
 * @returns 对象
*/
export  async function cc_KnowledgeModules_GetNameByKnowledgeModuleIdCache(strKnowledgeModuleId: string) {

if (IsNullOrEmpty(strKnowledgeModuleId) == true)
{
  const strMsg = Format("参数:[strKnowledgeModuleId]不能为空!(In clscc_KnowledgeModulesWApi.GetNameByKnowledgeModuleIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strKnowledgeModuleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strKnowledgeModuleId]的长度:[{0}]不正确!(clscc_KnowledgeModulesWApi.GetNameByKnowledgeModuleIdCache)", strKnowledgeModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstCache();
if (arrcc_KnowledgeModulesObjLstCache == null) return "";
try
{
const arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesObjLstCache.filter(x => 
 x.knowledgeModuleId == strKnowledgeModuleId );
let objcc_KnowledgeModules: clscc_KnowledgeModulesEN;
if (arrcc_KnowledgeModulesSel.length > 0)
{
objcc_KnowledgeModules = arrcc_KnowledgeModulesSel[0];
return objcc_KnowledgeModules.knowledgeModuleName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strKnowledgeModuleId);
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
export  async function cc_KnowledgeModules_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clscc_KnowledgeModulesEN.con_KnowledgeModuleId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clscc_KnowledgeModulesEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clscc_KnowledgeModulesEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strKnowledgeModuleId = strInValue;
if (IsNullOrEmpty(strKnowledgeModuleId) == true)
{
return "";
}
const objcc_KnowledgeModules = await cc_KnowledgeModules_GetObjByKnowledgeModuleIdCache(strKnowledgeModuleId );
if (objcc_KnowledgeModules == null) return "";
if (objcc_KnowledgeModules.GetFldValue(strOutFldName) == null) return "";
return objcc_KnowledgeModules.GetFldValue(strOutFldName).toString();
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
export  function cc_KnowledgeModules_SortFunDefa(a:clscc_KnowledgeModulesEN , b:clscc_KnowledgeModulesEN): number 
{
return a.knowledgeModuleId.localeCompare(b.knowledgeModuleId);
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
export  function cc_KnowledgeModules_SortFunDefa2Fld(a:clscc_KnowledgeModulesEN , b:clscc_KnowledgeModulesEN): number 
{
if (a.knowledgeModuleName == b.knowledgeModuleName) return a.knowledgeModuleContent.localeCompare(b.knowledgeModuleContent);
else return a.knowledgeModuleName.localeCompare(b.knowledgeModuleName);
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
export  function cc_KnowledgeModules_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_KnowledgeModulesEN.con_KnowledgeModuleId:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
return a.knowledgeModuleId.localeCompare(b.knowledgeModuleId);
}
case clscc_KnowledgeModulesEN.con_KnowledgeModuleName:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
return a.knowledgeModuleName.localeCompare(b.knowledgeModuleName);
}
case clscc_KnowledgeModulesEN.con_KnowledgeModuleContent:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
if (a.knowledgeModuleContent == null) return -1;
if (b.knowledgeModuleContent == null) return 1;
return a.knowledgeModuleContent.localeCompare(b.knowledgeModuleContent);
}
case clscc_KnowledgeModulesEN.con_CourseId:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clscc_KnowledgeModulesEN.con_OrderNum:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
return a.orderNum-b.orderNum;
}
case clscc_KnowledgeModulesEN.con_UpdDate:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clscc_KnowledgeModulesEN.con_UpdUser:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clscc_KnowledgeModulesEN.con_Memo:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_KnowledgeModules]中不存在!(in ${ cc_KnowledgeModules_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_KnowledgeModulesEN.con_KnowledgeModuleId:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
return b.knowledgeModuleId.localeCompare(a.knowledgeModuleId);
}
case clscc_KnowledgeModulesEN.con_KnowledgeModuleName:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
return b.knowledgeModuleName.localeCompare(a.knowledgeModuleName);
}
case clscc_KnowledgeModulesEN.con_KnowledgeModuleContent:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
if (b.knowledgeModuleContent == null) return -1;
if (a.knowledgeModuleContent == null) return 1;
return b.knowledgeModuleContent.localeCompare(a.knowledgeModuleContent);
}
case clscc_KnowledgeModulesEN.con_CourseId:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clscc_KnowledgeModulesEN.con_OrderNum:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
return b.orderNum-a.orderNum;
}
case clscc_KnowledgeModulesEN.con_UpdDate:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clscc_KnowledgeModulesEN.con_UpdUser:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clscc_KnowledgeModulesEN.con_Memo:
return (a: clscc_KnowledgeModulesEN, b: clscc_KnowledgeModulesEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_KnowledgeModules]中不存在!(in ${ cc_KnowledgeModules_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_KnowledgeModules_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_KnowledgeModulesEN.con_KnowledgeModuleId:
return (obj: clscc_KnowledgeModulesEN) => {
return obj.knowledgeModuleId === value;
}
case clscc_KnowledgeModulesEN.con_KnowledgeModuleName:
return (obj: clscc_KnowledgeModulesEN) => {
return obj.knowledgeModuleName === value;
}
case clscc_KnowledgeModulesEN.con_KnowledgeModuleContent:
return (obj: clscc_KnowledgeModulesEN) => {
return obj.knowledgeModuleContent === value;
}
case clscc_KnowledgeModulesEN.con_CourseId:
return (obj: clscc_KnowledgeModulesEN) => {
return obj.courseId === value;
}
case clscc_KnowledgeModulesEN.con_OrderNum:
return (obj: clscc_KnowledgeModulesEN) => {
return obj.orderNum === value;
}
case clscc_KnowledgeModulesEN.con_UpdDate:
return (obj: clscc_KnowledgeModulesEN) => {
return obj.updDate === value;
}
case clscc_KnowledgeModulesEN.con_UpdUser:
return (obj: clscc_KnowledgeModulesEN) => {
return obj.updUser === value;
}
case clscc_KnowledgeModulesEN.con_Memo:
return (obj: clscc_KnowledgeModulesEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_KnowledgeModules]中不存在!(in ${ cc_KnowledgeModules_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_KnowledgeModules_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clscc_KnowledgeModulesEN.con_KnowledgeModuleId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrcc_KnowledgeModules = await cc_KnowledgeModules_GetObjLstCache();
if (arrcc_KnowledgeModules == null) return [];
let arrcc_KnowledgeModulesSel = arrcc_KnowledgeModules;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrcc_KnowledgeModulesSel.length == 0) return [];
return arrcc_KnowledgeModulesSel.map(x=>x.knowledgeModuleId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_KnowledgeModules_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetFirstObjAsync(strWhereCond: string): Promise<clscc_KnowledgeModulesEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const objcc_KnowledgeModules = cc_KnowledgeModules_GetObjFromJsonObj(returnObj);
return objcc_KnowledgeModules;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clscc_KnowledgeModulesEN._CurrTabName;
if (IsNullOrEmpty(clscc_KnowledgeModulesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_KnowledgeModulesEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrcc_KnowledgeModulesExObjLstCache: Array<clscc_KnowledgeModulesEN> = CacheHelper.Get(strKey);
const arrcc_KnowledgeModulesObjLstT = cc_KnowledgeModules_GetObjLstByJSONObjLst(arrcc_KnowledgeModulesExObjLstCache);
return arrcc_KnowledgeModulesObjLstT;
}
try
{
const arrcc_KnowledgeModulesExObjLst = await cc_KnowledgeModules_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrcc_KnowledgeModulesExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_KnowledgeModulesExObjLst.length);
console.log(strInfo);
return arrcc_KnowledgeModulesExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgeModules_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clscc_KnowledgeModulesEN._CurrTabName;
if (IsNullOrEmpty(clscc_KnowledgeModulesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_KnowledgeModulesEN.CacheAddiCondition);
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
const arrcc_KnowledgeModulesExObjLstCache: Array<clscc_KnowledgeModulesEN> = JSON.parse(strTempObjLst);
const arrcc_KnowledgeModulesObjLstT = cc_KnowledgeModules_GetObjLstByJSONObjLst(arrcc_KnowledgeModulesExObjLstCache);
return arrcc_KnowledgeModulesObjLstT;
}
try
{
const arrcc_KnowledgeModulesExObjLst = await cc_KnowledgeModules_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrcc_KnowledgeModulesExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_KnowledgeModulesExObjLst.length);
console.log(strInfo);
return arrcc_KnowledgeModulesExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgeModules_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clscc_KnowledgeModulesEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrcc_KnowledgeModulesObjLstCache: Array<clscc_KnowledgeModulesEN> = JSON.parse(strTempObjLst);
return arrcc_KnowledgeModulesObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function cc_KnowledgeModules_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_KnowledgeModulesEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgeModules_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clscc_KnowledgeModulesEN._CurrTabName;
if (IsNullOrEmpty(clscc_KnowledgeModulesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_KnowledgeModulesEN.CacheAddiCondition);
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
const arrcc_KnowledgeModulesExObjLstCache: Array<clscc_KnowledgeModulesEN> = JSON.parse(strTempObjLst);
const arrcc_KnowledgeModulesObjLstT = cc_KnowledgeModules_GetObjLstByJSONObjLst(arrcc_KnowledgeModulesExObjLstCache);
return arrcc_KnowledgeModulesObjLstT;
}
try
{
const arrcc_KnowledgeModulesExObjLst = await cc_KnowledgeModules_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrcc_KnowledgeModulesExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_KnowledgeModulesExObjLst.length);
console.log(strInfo);
return arrcc_KnowledgeModulesExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgeModules_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clscc_KnowledgeModulesEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrcc_KnowledgeModulesObjLstCache: Array<clscc_KnowledgeModulesEN> = JSON.parse(strTempObjLst);
return arrcc_KnowledgeModulesObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgeModules_GetObjLstCache(): Promise<Array<clscc_KnowledgeModulesEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrcc_KnowledgeModulesObjLstCache;
switch (clscc_KnowledgeModulesEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstClientCache();
break;
default:
arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstClientCache();
break;
}
return arrcc_KnowledgeModulesObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgeModules_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrcc_KnowledgeModulesObjLstCache;
switch (clscc_KnowledgeModulesEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrcc_KnowledgeModulesObjLstCache = null;
break;
default:
arrcc_KnowledgeModulesObjLstCache = null;
break;
}
return arrcc_KnowledgeModulesObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrKnowledgeModuleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_KnowledgeModules_GetSubObjLstCache(objcc_KnowledgeModulesCond: clscc_KnowledgeModulesEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstCache();
let arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesObjLstCache;
if (objcc_KnowledgeModulesCond.sfFldComparisonOp == null || objcc_KnowledgeModulesCond.sfFldComparisonOp == "") return arrcc_KnowledgeModulesSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_KnowledgeModulesCond.sfFldComparisonOp);
//console.log("clscc_KnowledgeModulesWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_KnowledgeModulesCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_KnowledgeModulesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_KnowledgeModulesSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objcc_KnowledgeModulesCond), cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_KnowledgeModulesEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrKnowledgeModuleId:关键字列表
 * @returns 对象列表
 **/
export  async function cc_KnowledgeModules_GetObjLstByKnowledgeModuleIdLstAsync(arrKnowledgeModuleId: Array<string>): Promise<Array<clscc_KnowledgeModulesEN>>  
{
const strThisFuncName = "GetObjLstByKnowledgeModuleIdLstAsync";
const strAction = "GetObjLstByKnowledgeModuleIdLst";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrKnowledgeModuleId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgeModules_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param arrstrKnowledgeModuleIdLst:关键字列表
 * @returns 对象列表
*/
export  async function cc_KnowledgeModules_GetObjLstByKnowledgeModuleIdLstCache(arrKnowledgeModuleIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByKnowledgeModuleIdLstCache";
try
{
const arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstCache();
const arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesObjLstCache.filter(x => arrKnowledgeModuleIdLst.indexOf(x.knowledgeModuleId)>-1);
return arrcc_KnowledgeModulesSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrKnowledgeModuleIdLst.join(","), cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_KnowledgeModulesEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgeModules_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_KnowledgeModulesEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgeModules_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clscc_KnowledgeModulesEN>();
const arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstCache();
if (arrcc_KnowledgeModulesObjLstCache.length == 0) return arrcc_KnowledgeModulesObjLstCache;
let arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objcc_KnowledgeModulesCond = new clscc_KnowledgeModulesEN();
ObjectAssign(objcc_KnowledgeModulesCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clscc_KnowledgeModulesWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_KnowledgeModulesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_KnowledgeModulesSel.length == 0) return arrcc_KnowledgeModulesSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.sort(cc_KnowledgeModules_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.sort(objPagerPara.sortFun);
}
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.slice(intStart, intEnd);     
return arrcc_KnowledgeModulesSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_KnowledgeModulesEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function cc_KnowledgeModules_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_KnowledgeModulesEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_KnowledgeModulesEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgeModules_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param strKnowledgeModuleId:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_KnowledgeModules_DelRecordAsync(strKnowledgeModuleId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strKnowledgeModuleId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param arrKnowledgeModuleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_KnowledgeModules_Delcc_KnowledgeModulessAsync(arrKnowledgeModuleId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_KnowledgeModulessAsync";
const strAction = "Delcc_KnowledgeModuless";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrKnowledgeModuleId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_Delcc_KnowledgeModulessByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_KnowledgeModulessByCondAsync";
const strAction = "Delcc_KnowledgeModulessByCond";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeModulesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_KnowledgeModules_AddNewRecordAsync(objcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_KnowledgeModulesEN);
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeModulesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeModulesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_KnowledgeModules_AddNewRecordWithMaxIdAsync(objcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeModulesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeModulesEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_KnowledgeModules_AddNewRecordWithReturnKeyAsync(objcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeModulesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeModulesEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_KnowledgeModules_UpdateRecordAsync(objcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_KnowledgeModulesEN.sfUpdFldSetStr === undefined || objcc_KnowledgeModulesEN.sfUpdFldSetStr === null || objcc_KnowledgeModulesEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_KnowledgeModulesEN.knowledgeModuleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeModulesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeModulesEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_KnowledgeModules_UpdateWithConditionAsync(objcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_KnowledgeModulesEN.sfUpdFldSetStr === undefined || objcc_KnowledgeModulesEN.sfUpdFldSetStr === null || objcc_KnowledgeModulesEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_KnowledgeModulesEN.knowledgeModuleId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);
objcc_KnowledgeModulesEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeModulesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param objstrKnowledgeModuleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_KnowledgeModules_IsExistRecordCache(objcc_KnowledgeModulesCond: clscc_KnowledgeModulesEN) {
const strThisFuncName = "IsExistRecordCache";
const arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstCache();
if (arrcc_KnowledgeModulesObjLstCache == null) return false;
let arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesObjLstCache;
if (objcc_KnowledgeModulesCond.sfFldComparisonOp == null || objcc_KnowledgeModulesCond.sfFldComparisonOp == "") return arrcc_KnowledgeModulesSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_KnowledgeModulesCond.sfFldComparisonOp);
//console.log("clscc_KnowledgeModulesWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_KnowledgeModulesCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_KnowledgeModulesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_KnowledgeModulesSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objcc_KnowledgeModulesCond), cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param strKnowledgeModuleId:所给的关键字
 * @returns 对象
*/
export  async function cc_KnowledgeModules_IsExistCache(strKnowledgeModuleId:string) {
const strThisFuncName = "IsExistCache";
const arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstCache();
if (arrcc_KnowledgeModulesObjLstCache == null) return false;
try
{
const arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesObjLstCache.filter(x => x.knowledgeModuleId == strKnowledgeModuleId);
if (arrcc_KnowledgeModulesSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strKnowledgeModuleId, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strKnowledgeModuleId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_KnowledgeModules_IsExistAsync(strKnowledgeModuleId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strKnowledgeModuleId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeModulesCond:条件对象
 * @returns 对象列表记录数
*/
export  async function cc_KnowledgeModules_GetRecCountByCondCache(objcc_KnowledgeModulesCond: clscc_KnowledgeModulesEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrcc_KnowledgeModulesObjLstCache = await cc_KnowledgeModules_GetObjLstCache();
if (arrcc_KnowledgeModulesObjLstCache == null) return 0;
let arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesObjLstCache;
if (objcc_KnowledgeModulesCond.sfFldComparisonOp == null || objcc_KnowledgeModulesCond.sfFldComparisonOp == "") return arrcc_KnowledgeModulesSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_KnowledgeModulesCond.sfFldComparisonOp);
//console.log("clscc_KnowledgeModulesWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_KnowledgeModulesCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_KnowledgeModulesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_KnowledgeModulesSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objcc_KnowledgeModulesCond), cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeModules_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_KnowledgeModules_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeModules_ConstructorName, strThisFuncName);
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
export  function cc_KnowledgeModules_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_KnowledgeModules_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clscc_KnowledgeModulesEN._CurrTabName;
switch (clscc_KnowledgeModulesEN.CacheModeId)
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
export  function cc_KnowledgeModules_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clscc_KnowledgeModulesEN._CurrTabName;
switch (clscc_KnowledgeModulesEN.CacheModeId)
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

 * @param strCourseId:
*/
export  async function cc_KnowledgeModules_BindDdl_KnowledgeModuleIdByCourseIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clscc_KnowledgeModulesWApi.BindDdl_KnowledgeModuleIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_KnowledgeModulesWApi.BindDdl_KnowledgeModuleIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_KnowledgeModuleIdByCourseIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_KnowledgeModuleIdByCourseIdInDivCache");
let arrObjLstSel = await cc_KnowledgeModules_GetObjLstCache();
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clscc_KnowledgeModulesEN.con_KnowledgeModuleId, clscc_KnowledgeModulesEN.con_KnowledgeModuleName, "知识点模块");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_KnowledgeModules_CheckPropertyNew(pobjcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleName) === true )
{
 throw new Error("(errid:Watl000411)字段[知识点模块名称]不能为空(In 知识点模块)!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.courseId) === true 
 || pobjcc_KnowledgeModulesEN.courseId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[课程Id]不能为空(In 知识点模块)!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleId) == false && GetStrLen(pobjcc_KnowledgeModulesEN.knowledgeModuleId) > 8)
{
 throw new Error("(errid:Watl000413)字段[知识点模块Id(knowledgeModuleId)]的长度不能超过8(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.knowledgeModuleId)(clscc_KnowledgeModulesBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleName) == false && GetStrLen(pobjcc_KnowledgeModulesEN.knowledgeModuleName) > 100)
{
 throw new Error("(errid:Watl000413)字段[知识点模块名称(knowledgeModuleName)]的长度不能超过100(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.knowledgeModuleName)(clscc_KnowledgeModulesBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.courseId) == false && GetStrLen(pobjcc_KnowledgeModulesEN.courseId) > 8)
{
 throw new Error("(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.courseId)(clscc_KnowledgeModulesBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.updDate) == false && GetStrLen(pobjcc_KnowledgeModulesEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.updDate)(clscc_KnowledgeModulesBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.updUser) == false && GetStrLen(pobjcc_KnowledgeModulesEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.updUser)(clscc_KnowledgeModulesBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.memo) == false && GetStrLen(pobjcc_KnowledgeModulesEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.memo)(clscc_KnowledgeModulesBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleId) == false && undefined !== pobjcc_KnowledgeModulesEN.knowledgeModuleId && tzDataType.isString(pobjcc_KnowledgeModulesEN.knowledgeModuleId) === false)
{
 throw new Error("(errid:Watl000414)字段[知识点模块Id(knowledgeModuleId)]的值:[$(pobjcc_KnowledgeModulesEN.knowledgeModuleId)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleName) == false && undefined !== pobjcc_KnowledgeModulesEN.knowledgeModuleName && tzDataType.isString(pobjcc_KnowledgeModulesEN.knowledgeModuleName) === false)
{
 throw new Error("(errid:Watl000414)字段[知识点模块名称(knowledgeModuleName)]的值:[$(pobjcc_KnowledgeModulesEN.knowledgeModuleName)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleContent) == false && undefined !== pobjcc_KnowledgeModulesEN.knowledgeModuleContent && tzDataType.isString(pobjcc_KnowledgeModulesEN.knowledgeModuleContent) === false)
{
 throw new Error("(errid:Watl000414)字段[知识点模块内容(knowledgeModuleContent)]的值:[$(pobjcc_KnowledgeModulesEN.knowledgeModuleContent)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.courseId) == false && undefined !== pobjcc_KnowledgeModulesEN.courseId && tzDataType.isString(pobjcc_KnowledgeModulesEN.courseId) === false)
{
 throw new Error("(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjcc_KnowledgeModulesEN.courseId)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
if (null != pobjcc_KnowledgeModulesEN.orderNum && undefined !== pobjcc_KnowledgeModulesEN.orderNum && tzDataType.isNumber(pobjcc_KnowledgeModulesEN.orderNum) === false)
{
 throw new Error("(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjcc_KnowledgeModulesEN.orderNum)], 非法,应该为数值型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.updDate) == false && undefined !== pobjcc_KnowledgeModulesEN.updDate && tzDataType.isString(pobjcc_KnowledgeModulesEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjcc_KnowledgeModulesEN.updDate)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.updUser) == false && undefined !== pobjcc_KnowledgeModulesEN.updUser && tzDataType.isString(pobjcc_KnowledgeModulesEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjcc_KnowledgeModulesEN.updUser)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.memo) == false && undefined !== pobjcc_KnowledgeModulesEN.memo && tzDataType.isString(pobjcc_KnowledgeModulesEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjcc_KnowledgeModulesEN.memo)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.courseId) == false && pobjcc_KnowledgeModulesEN.courseId != '[nuull]' && GetStrLen(pobjcc_KnowledgeModulesEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 知识点模块)!(clscc_KnowledgeModulesBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_KnowledgeModules_CheckProperty4Update(pobjcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleId) == false && GetStrLen(pobjcc_KnowledgeModulesEN.knowledgeModuleId) > 8)
{
 throw new Error("(errid:Watl000416)字段[知识点模块Id(knowledgeModuleId)]的长度不能超过8(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.knowledgeModuleId)(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleName) == false && GetStrLen(pobjcc_KnowledgeModulesEN.knowledgeModuleName) > 100)
{
 throw new Error("(errid:Watl000416)字段[知识点模块名称(knowledgeModuleName)]的长度不能超过100(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.knowledgeModuleName)(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.courseId) == false && GetStrLen(pobjcc_KnowledgeModulesEN.courseId) > 8)
{
 throw new Error("(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.courseId)(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.updDate) == false && GetStrLen(pobjcc_KnowledgeModulesEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.updDate)(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.updUser) == false && GetStrLen(pobjcc_KnowledgeModulesEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.updUser)(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.memo) == false && GetStrLen(pobjcc_KnowledgeModulesEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点模块(cc_KnowledgeModules))!值:$(pobjcc_KnowledgeModulesEN.memo)(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleId) == false && undefined !== pobjcc_KnowledgeModulesEN.knowledgeModuleId && tzDataType.isString(pobjcc_KnowledgeModulesEN.knowledgeModuleId) === false)
{
 throw new Error("(errid:Watl000417)字段[知识点模块Id(knowledgeModuleId)]的值:[$(pobjcc_KnowledgeModulesEN.knowledgeModuleId)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleName) == false && undefined !== pobjcc_KnowledgeModulesEN.knowledgeModuleName && tzDataType.isString(pobjcc_KnowledgeModulesEN.knowledgeModuleName) === false)
{
 throw new Error("(errid:Watl000417)字段[知识点模块名称(knowledgeModuleName)]的值:[$(pobjcc_KnowledgeModulesEN.knowledgeModuleName)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.knowledgeModuleContent) == false && undefined !== pobjcc_KnowledgeModulesEN.knowledgeModuleContent && tzDataType.isString(pobjcc_KnowledgeModulesEN.knowledgeModuleContent) === false)
{
 throw new Error("(errid:Watl000417)字段[知识点模块内容(knowledgeModuleContent)]的值:[$(pobjcc_KnowledgeModulesEN.knowledgeModuleContent)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.courseId) == false && undefined !== pobjcc_KnowledgeModulesEN.courseId && tzDataType.isString(pobjcc_KnowledgeModulesEN.courseId) === false)
{
 throw new Error("(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjcc_KnowledgeModulesEN.courseId)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (null != pobjcc_KnowledgeModulesEN.orderNum && undefined !== pobjcc_KnowledgeModulesEN.orderNum && tzDataType.isNumber(pobjcc_KnowledgeModulesEN.orderNum) === false)
{
 throw new Error("(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjcc_KnowledgeModulesEN.orderNum)], 非法,应该为数值型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.updDate) == false && undefined !== pobjcc_KnowledgeModulesEN.updDate && tzDataType.isString(pobjcc_KnowledgeModulesEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjcc_KnowledgeModulesEN.updDate)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.updUser) == false && undefined !== pobjcc_KnowledgeModulesEN.updUser && tzDataType.isString(pobjcc_KnowledgeModulesEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjcc_KnowledgeModulesEN.updUser)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.memo) == false && undefined !== pobjcc_KnowledgeModulesEN.memo && tzDataType.isString(pobjcc_KnowledgeModulesEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjcc_KnowledgeModulesEN.memo)], 非法,应该为字符型(In 知识点模块(cc_KnowledgeModules))!(clscc_KnowledgeModulesBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgeModulesEN.courseId) == false && pobjcc_KnowledgeModulesEN.courseId != '[nuull]' && GetStrLen(pobjcc_KnowledgeModulesEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 知识点模块)!(clscc_KnowledgeModulesBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_KnowledgeModules_GetJSONStrByObj (pobjcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN): string
{
pobjcc_KnowledgeModulesEN.sfUpdFldSetStr = pobjcc_KnowledgeModulesEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_KnowledgeModulesEN);
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
export  function cc_KnowledgeModules_GetObjLstByJSONStr (strJSON: string): Array<clscc_KnowledgeModulesEN>
{
let arrcc_KnowledgeModulesObjLst = new Array<clscc_KnowledgeModulesEN>();
if (strJSON === "")
{
return arrcc_KnowledgeModulesObjLst;
}
try
{
arrcc_KnowledgeModulesObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_KnowledgeModulesObjLst;
}
return arrcc_KnowledgeModulesObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_KnowledgeModulesObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_KnowledgeModules_GetObjLstByJSONObjLst (arrcc_KnowledgeModulesObjLstS: Array<clscc_KnowledgeModulesEN>): Array<clscc_KnowledgeModulesEN>
{
const arrcc_KnowledgeModulesObjLst = new Array<clscc_KnowledgeModulesEN>();
for (const objInFor of arrcc_KnowledgeModulesObjLstS) {
const obj1 = cc_KnowledgeModules_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_KnowledgeModulesObjLst.push(obj1);
}
return arrcc_KnowledgeModulesObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_KnowledgeModules_GetObjByJSONStr (strJSON: string): clscc_KnowledgeModulesEN
{
let pobjcc_KnowledgeModulesEN = new clscc_KnowledgeModulesEN();
if (strJSON === "")
{
return pobjcc_KnowledgeModulesEN;
}
try
{
pobjcc_KnowledgeModulesEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_KnowledgeModulesEN;
}
return pobjcc_KnowledgeModulesEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_KnowledgeModules_GetCombineCondition(objcc_KnowledgeModulesCond: clscc_KnowledgeModulesEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeModulesCond.dicFldComparisonOp, clscc_KnowledgeModulesEN.con_KnowledgeModuleId) == true)
{
const strComparisonOpKnowledgeModuleId:string = objcc_KnowledgeModulesCond.dicFldComparisonOp[clscc_KnowledgeModulesEN.con_KnowledgeModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeModulesEN.con_KnowledgeModuleId, objcc_KnowledgeModulesCond.knowledgeModuleId, strComparisonOpKnowledgeModuleId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeModulesCond.dicFldComparisonOp, clscc_KnowledgeModulesEN.con_KnowledgeModuleName) == true)
{
const strComparisonOpKnowledgeModuleName:string = objcc_KnowledgeModulesCond.dicFldComparisonOp[clscc_KnowledgeModulesEN.con_KnowledgeModuleName];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeModulesEN.con_KnowledgeModuleName, objcc_KnowledgeModulesCond.knowledgeModuleName, strComparisonOpKnowledgeModuleName);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeModulesCond.dicFldComparisonOp, clscc_KnowledgeModulesEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objcc_KnowledgeModulesCond.dicFldComparisonOp[clscc_KnowledgeModulesEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeModulesEN.con_CourseId, objcc_KnowledgeModulesCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeModulesCond.dicFldComparisonOp, clscc_KnowledgeModulesEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objcc_KnowledgeModulesCond.dicFldComparisonOp[clscc_KnowledgeModulesEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clscc_KnowledgeModulesEN.con_OrderNum, objcc_KnowledgeModulesCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeModulesCond.dicFldComparisonOp, clscc_KnowledgeModulesEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_KnowledgeModulesCond.dicFldComparisonOp[clscc_KnowledgeModulesEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeModulesEN.con_UpdDate, objcc_KnowledgeModulesCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeModulesCond.dicFldComparisonOp, clscc_KnowledgeModulesEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objcc_KnowledgeModulesCond.dicFldComparisonOp[clscc_KnowledgeModulesEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeModulesEN.con_UpdUser, objcc_KnowledgeModulesCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeModulesCond.dicFldComparisonOp, clscc_KnowledgeModulesEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_KnowledgeModulesCond.dicFldComparisonOp[clscc_KnowledgeModulesEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeModulesEN.con_Memo, objcc_KnowledgeModulesCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_KnowledgeModules(知识点模块),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strKnowledgeModuleName: 知识点模块名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_KnowledgeModules_GetUniCondStr(objcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_KnowledgeModulesEN.courseId);
 strWhereCond +=  Format(" and KnowledgeModuleName = '{0}'", objcc_KnowledgeModulesEN.knowledgeModuleName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_KnowledgeModules(知识点模块),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strKnowledgeModuleName: 知识点模块名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_KnowledgeModules_GetUniCondStr4Update(objcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and KnowledgeModuleId <> '{0}'", objcc_KnowledgeModulesEN.knowledgeModuleId);
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_KnowledgeModulesEN.courseId);
 strWhereCond +=  Format(" and KnowledgeModuleName = '{0}'", objcc_KnowledgeModulesEN.knowledgeModuleName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_KnowledgeModulesENS:源对象
 * @param objcc_KnowledgeModulesENT:目标对象
*/
export  function cc_KnowledgeModules_CopyObjTo(objcc_KnowledgeModulesENS: clscc_KnowledgeModulesEN , objcc_KnowledgeModulesENT: clscc_KnowledgeModulesEN ): void 
{
objcc_KnowledgeModulesENT.knowledgeModuleId = objcc_KnowledgeModulesENS.knowledgeModuleId; //知识点模块Id
objcc_KnowledgeModulesENT.knowledgeModuleName = objcc_KnowledgeModulesENS.knowledgeModuleName; //知识点模块名称
objcc_KnowledgeModulesENT.knowledgeModuleContent = objcc_KnowledgeModulesENS.knowledgeModuleContent; //知识点模块内容
objcc_KnowledgeModulesENT.courseId = objcc_KnowledgeModulesENS.courseId; //课程Id
objcc_KnowledgeModulesENT.orderNum = objcc_KnowledgeModulesENS.orderNum; //序号
objcc_KnowledgeModulesENT.updDate = objcc_KnowledgeModulesENS.updDate; //修改日期
objcc_KnowledgeModulesENT.updUser = objcc_KnowledgeModulesENS.updUser; //修改人
objcc_KnowledgeModulesENT.memo = objcc_KnowledgeModulesENS.memo; //备注
objcc_KnowledgeModulesENT.sfUpdFldSetStr = objcc_KnowledgeModulesENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_KnowledgeModulesENS:源对象
 * @param objcc_KnowledgeModulesENT:目标对象
*/
export  function cc_KnowledgeModules_GetObjFromJsonObj(objcc_KnowledgeModulesENS: clscc_KnowledgeModulesEN): clscc_KnowledgeModulesEN 
{
 const objcc_KnowledgeModulesENT: clscc_KnowledgeModulesEN = new clscc_KnowledgeModulesEN();
ObjectAssign(objcc_KnowledgeModulesENT, objcc_KnowledgeModulesENS);
 return objcc_KnowledgeModulesENT;
}