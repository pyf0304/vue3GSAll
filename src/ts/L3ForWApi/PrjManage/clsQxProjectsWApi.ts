
 /**
 * 类名:clsQxProjectsWApi
 * 表名:QxProjects(01120921)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:47
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:工程管理(PrjManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程(QxProjects)
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
import { clsQxProjectsEN } from "@/ts/L0Entity/PrjManage/clsQxProjectsEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxProjects_Controller = "QxProjectsApi";
 export const qxProjects_ConstructorName = "qxProjects";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQxPrjId:关键字
 * @returns 对象
 **/
export  async function QxProjects_GetObjByQxPrjIdAsync(strQxPrjId: string): Promise<clsQxProjectsEN|null>  
{
const strThisFuncName = "GetObjByQxPrjIdAsync";

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In clsQxProjectsWApi.GetObjByQxPrjIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(clsQxProjectsWApi.GetObjByQxPrjIdAsync)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByQxPrjId";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQxPrjId,
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
const objQxProjects = QxProjects_GetObjFromJsonObj(returnObj);
return objQxProjects;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param strQxPrjId:所给的关键字
 * @returns 对象
*/
export  async function QxProjects_GetObjByQxPrjIdCache(strQxPrjId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByQxPrjIdCache";

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In clsQxProjectsWApi.GetObjByQxPrjIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(clsQxProjectsWApi.GetObjByQxPrjIdCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxProjectsObjLstCache = await QxProjects_GetObjLstCache();
try
{
const arrQxProjectsSel = arrQxProjectsObjLstCache.filter(x => 
 x.qxPrjId == strQxPrjId );
let objQxProjects: clsQxProjectsEN;
if (arrQxProjectsSel.length > 0)
{
objQxProjects = arrQxProjectsSel[0];
return objQxProjects;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxProjectsConst = await QxProjects_GetObjByQxPrjIdAsync(strQxPrjId);
if (objQxProjectsConst != null)
{
QxProjects_ReFreshThisCache();
return objQxProjectsConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQxPrjId, qxProjects_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strQxPrjId:所给的关键字
 * @returns 对象
*/
export  async function QxProjects_GetObjByQxPrjIdlocalStorage(strQxPrjId: string) {
const strThisFuncName = "GetObjByQxPrjIdlocalStorage";

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In clsQxProjectsWApi.GetObjByQxPrjIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(clsQxProjectsWApi.GetObjByQxPrjIdlocalStorage)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxProjectsEN._CurrTabName, strQxPrjId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxProjectsCache: clsQxProjectsEN = JSON.parse(strTempObj);
return objQxProjectsCache;
}
try
{
const objQxProjects = await QxProjects_GetObjByQxPrjIdAsync(strQxPrjId);
if (objQxProjects != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxProjects));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxProjects;
}
return objQxProjects;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQxPrjId, qxProjects_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxProjects:所给的对象
 * @returns 对象
*/
export  async function QxProjects_UpdateObjInLstCache(objQxProjects: clsQxProjectsEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxProjectsObjLstCache = await QxProjects_GetObjLstCache();
const obj = arrQxProjectsObjLstCache.find(x => 
x.qxPrjId == objQxProjects.qxPrjId);
if (obj != null)
{
objQxProjects.qxPrjId = obj.qxPrjId;
ObjectAssign( obj, objQxProjects);
}
else
{
arrQxProjectsObjLstCache.push(objQxProjects);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxProjects_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strQxPrjId:所给的关键字
 * @returns 对象
*/
export  async function QxProjects_GetNameByQxPrjIdCache(strQxPrjId: string) {

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In clsQxProjectsWApi.GetNameByQxPrjIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(clsQxProjectsWApi.GetNameByQxPrjIdCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxProjectsObjLstCache = await QxProjects_GetObjLstCache();
if (arrQxProjectsObjLstCache == null) return "";
try
{
const arrQxProjectsSel = arrQxProjectsObjLstCache.filter(x => 
 x.qxPrjId == strQxPrjId );
let objQxProjects: clsQxProjectsEN;
if (arrQxProjectsSel.length > 0)
{
objQxProjects = arrQxProjectsSel[0];
return objQxProjects.prjName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strQxPrjId);
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
export  async function QxProjects_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxProjectsEN.con_QxPrjId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxProjectsEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxProjectsEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strQxPrjId = strInValue;
if (IsNullOrEmpty(strQxPrjId) == true)
{
return "";
}
const objQxProjects = await QxProjects_GetObjByQxPrjIdCache(strQxPrjId );
if (objQxProjects == null) return "";
if (objQxProjects.GetFldValue(strOutFldName) == null) return "";
return objQxProjects.GetFldValue(strOutFldName).toString();
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
export  function QxProjects_SortFunDefa(a:clsQxProjectsEN , b:clsQxProjectsEN): number 
{
return a.qxPrjId.localeCompare(b.qxPrjId);
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
export  function QxProjects_SortFunDefa2Fld(a:clsQxProjectsEN , b:clsQxProjectsEN): number 
{
if (a.prjName == b.prjName) return a.prjDomain.localeCompare(b.prjDomain);
else return a.prjName.localeCompare(b.prjName);
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
export  function QxProjects_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxProjectsEN.con_QxPrjId:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxProjectsEN.con_PrjName:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
return a.prjName.localeCompare(b.prjName);
}
case clsQxProjectsEN.con_PrjDomain:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
if (a.prjDomain == null) return -1;
if (b.prjDomain == null) return 1;
return a.prjDomain.localeCompare(b.prjDomain);
}
case clsQxProjectsEN.con_IsDefaultPrj:
return (a: clsQxProjectsEN) => {
if (a.isDefaultPrj == true) return 1;
else return -1
}
case clsQxProjectsEN.con_QxPrjDataBaseId:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
return a.qxPrjDataBaseId.localeCompare(b.qxPrjDataBaseId);
}
case clsQxProjectsEN.con_UpdDate:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxProjectsEN.con_UpdUser:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsQxProjectsEN.con_Memo:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxProjects]中不存在!(in ${ qxProjects_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxProjectsEN.con_QxPrjId:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxProjectsEN.con_PrjName:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
return b.prjName.localeCompare(a.prjName);
}
case clsQxProjectsEN.con_PrjDomain:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
if (b.prjDomain == null) return -1;
if (a.prjDomain == null) return 1;
return b.prjDomain.localeCompare(a.prjDomain);
}
case clsQxProjectsEN.con_IsDefaultPrj:
return (b: clsQxProjectsEN) => {
if (b.isDefaultPrj == true) return 1;
else return -1
}
case clsQxProjectsEN.con_QxPrjDataBaseId:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
return b.qxPrjDataBaseId.localeCompare(a.qxPrjDataBaseId);
}
case clsQxProjectsEN.con_UpdDate:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxProjectsEN.con_UpdUser:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsQxProjectsEN.con_Memo:
return (a: clsQxProjectsEN, b: clsQxProjectsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxProjects]中不存在!(in ${ qxProjects_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxProjects_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxProjectsEN.con_QxPrjId:
return (obj: clsQxProjectsEN) => {
return obj.qxPrjId === value;
}
case clsQxProjectsEN.con_PrjName:
return (obj: clsQxProjectsEN) => {
return obj.prjName === value;
}
case clsQxProjectsEN.con_PrjDomain:
return (obj: clsQxProjectsEN) => {
return obj.prjDomain === value;
}
case clsQxProjectsEN.con_IsDefaultPrj:
return (obj: clsQxProjectsEN) => {
return obj.isDefaultPrj === value;
}
case clsQxProjectsEN.con_QxPrjDataBaseId:
return (obj: clsQxProjectsEN) => {
return obj.qxPrjDataBaseId === value;
}
case clsQxProjectsEN.con_UpdDate:
return (obj: clsQxProjectsEN) => {
return obj.updDate === value;
}
case clsQxProjectsEN.con_UpdUser:
return (obj: clsQxProjectsEN) => {
return obj.updUser === value;
}
case clsQxProjectsEN.con_Memo:
return (obj: clsQxProjectsEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxProjects]中不存在!(in ${ qxProjects_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxProjects_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxProjectsEN.con_QxPrjId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxProjects = await QxProjects_GetObjLstCache();
if (arrQxProjects == null) return [];
let arrQxProjectsSel = arrQxProjects;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxProjectsSel = arrQxProjectsSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxProjectsSel.length == 0) return [];
return arrQxProjectsSel.map(x=>x.qxPrjId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxProjects_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetFirstObjAsync(strWhereCond: string): Promise<clsQxProjectsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const objQxProjects = QxProjects_GetObjFromJsonObj(returnObj);
return objQxProjects;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxProjectsEN._CurrTabName;
if (IsNullOrEmpty(clsQxProjectsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxProjectsEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxProjectsExObjLstCache: Array<clsQxProjectsEN> = CacheHelper.Get(strKey);
const arrQxProjectsObjLstT = QxProjects_GetObjLstByJSONObjLst(arrQxProjectsExObjLstCache);
return arrQxProjectsObjLstT;
}
try
{
const arrQxProjectsExObjLst = await QxProjects_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxProjectsExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxProjectsExObjLst.length);
console.log(strInfo);
return arrQxProjectsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxProjects_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxProjects_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxProjectsEN._CurrTabName;
if (IsNullOrEmpty(clsQxProjectsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxProjectsEN.CacheAddiCondition);
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
const arrQxProjectsExObjLstCache: Array<clsQxProjectsEN> = JSON.parse(strTempObjLst);
const arrQxProjectsObjLstT = QxProjects_GetObjLstByJSONObjLst(arrQxProjectsExObjLstCache);
return arrQxProjectsObjLstT;
}
try
{
const arrQxProjectsExObjLst = await QxProjects_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxProjectsExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxProjectsExObjLst.length);
console.log(strInfo);
return arrQxProjectsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxProjects_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxProjects_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxProjectsEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxProjectsObjLstCache: Array<clsQxProjectsEN> = JSON.parse(strTempObjLst);
return arrQxProjectsObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxProjects_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxProjectsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxProjects_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxProjects_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxProjectsEN._CurrTabName;
if (IsNullOrEmpty(clsQxProjectsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxProjectsEN.CacheAddiCondition);
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
const arrQxProjectsExObjLstCache: Array<clsQxProjectsEN> = JSON.parse(strTempObjLst);
const arrQxProjectsObjLstT = QxProjects_GetObjLstByJSONObjLst(arrQxProjectsExObjLstCache);
return arrQxProjectsObjLstT;
}
try
{
const arrQxProjectsExObjLst = await QxProjects_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxProjectsExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxProjectsExObjLst.length);
console.log(strInfo);
return arrQxProjectsExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxProjects_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxProjects_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxProjectsEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxProjectsObjLstCache: Array<clsQxProjectsEN> = JSON.parse(strTempObjLst);
return arrQxProjectsObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxProjects_GetObjLstCache(): Promise<Array<clsQxProjectsEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxProjectsObjLstCache;
switch (clsQxProjectsEN.CacheModeId)
{
case "04"://sessionStorage
arrQxProjectsObjLstCache = await QxProjects_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxProjectsObjLstCache = await QxProjects_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxProjectsObjLstCache = await QxProjects_GetObjLstClientCache();
break;
default:
arrQxProjectsObjLstCache = await QxProjects_GetObjLstClientCache();
break;
}
return arrQxProjectsObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxProjects_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxProjectsObjLstCache;
switch (clsQxProjectsEN.CacheModeId)
{
case "04"://sessionStorage
arrQxProjectsObjLstCache = await QxProjects_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxProjectsObjLstCache = await QxProjects_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxProjectsObjLstCache = null;
break;
default:
arrQxProjectsObjLstCache = null;
break;
}
return arrQxProjectsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrQxPrjIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxProjects_GetSubObjLstCache(objQxProjectsCond: clsQxProjectsEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxProjectsObjLstCache = await QxProjects_GetObjLstCache();
let arrQxProjectsSel = arrQxProjectsObjLstCache;
if (objQxProjectsCond.sfFldComparisonOp == null || objQxProjectsCond.sfFldComparisonOp == "") return arrQxProjectsSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxProjectsCond.sfFldComparisonOp);
//console.log("clsQxProjectsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxProjectsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxProjectsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxProjectsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxProjectsCond), qxProjects_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxProjectsEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQxPrjId:关键字列表
 * @returns 对象列表
 **/
export  async function QxProjects_GetObjLstByQxPrjIdLstAsync(arrQxPrjId: Array<string>): Promise<Array<clsQxProjectsEN>>  
{
const strThisFuncName = "GetObjLstByQxPrjIdLstAsync";
const strAction = "GetObjLstByQxPrjIdLst";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQxPrjId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxProjects_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxProjects_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param arrstrQxPrjIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxProjects_GetObjLstByQxPrjIdLstCache(arrQxPrjIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByQxPrjIdLstCache";
try
{
const arrQxProjectsObjLstCache = await QxProjects_GetObjLstCache();
const arrQxProjectsSel = arrQxProjectsObjLstCache.filter(x => arrQxPrjIdLst.indexOf(x.qxPrjId)>-1);
return arrQxProjectsSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrQxPrjIdLst.join(","), qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxProjectsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxProjects_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxProjects_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxProjectsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxProjects_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxProjects_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxProjectsEN>();
const arrQxProjectsObjLstCache = await QxProjects_GetObjLstCache();
if (arrQxProjectsObjLstCache.length == 0) return arrQxProjectsObjLstCache;
let arrQxProjectsSel = arrQxProjectsObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQxProjectsCond = new clsQxProjectsEN();
ObjectAssign(objQxProjectsCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQxProjectsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxProjectsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxProjectsSel = arrQxProjectsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxProjectsSel.length == 0) return arrQxProjectsSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxProjectsSel = arrQxProjectsSel.sort(QxProjects_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxProjectsSel = arrQxProjectsSel.sort(objPagerPara.sortFun);
}
arrQxProjectsSel = arrQxProjectsSel.slice(intStart, intEnd);     
return arrQxProjectsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxProjects_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxProjectsEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxProjects_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxProjectsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxProjectsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxProjects_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxProjects_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param strQxPrjId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxProjects_DelRecordAsync(strQxPrjId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(qxProjects_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strQxPrjId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param arrQxPrjId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxProjects_DelQxProjectssAsync(arrQxPrjId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxProjectssAsync";
const strAction = "DelQxProjectss";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQxPrjId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_DelQxProjectssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxProjectssByCondAsync";
const strAction = "DelQxProjectssByCond";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param objQxProjectsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxProjects_AddNewRecordAsync(objQxProjectsEN: clsQxProjectsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxProjectsEN.qxPrjId === null || objQxProjectsEN.qxPrjId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxProjectsEN);
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxProjectsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param objQxProjectsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxProjects_AddNewRecordWithMaxIdAsync(objQxProjectsEN: clsQxProjectsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxProjectsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param objQxProjectsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxProjects_AddNewRecordWithReturnKeyAsync(objQxProjectsEN: clsQxProjectsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxProjectsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param objQxProjectsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxProjects_UpdateRecordAsync(objQxProjectsEN: clsQxProjectsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxProjectsEN.sfUpdFldSetStr === undefined || objQxProjectsEN.sfUpdFldSetStr === null || objQxProjectsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxProjectsEN.qxPrjId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxProjectsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param objQxProjectsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxProjects_UpdateWithConditionAsync(objQxProjectsEN: clsQxProjectsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxProjectsEN.sfUpdFldSetStr === undefined || objQxProjectsEN.sfUpdFldSetStr === null || objQxProjectsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxProjectsEN.qxPrjId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);
objQxProjectsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxProjectsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param objstrQxPrjIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxProjects_IsExistRecordCache(objQxProjectsCond: clsQxProjectsEN) {
const strThisFuncName = "IsExistRecordCache";
const arrQxProjectsObjLstCache = await QxProjects_GetObjLstCache();
if (arrQxProjectsObjLstCache == null) return false;
let arrQxProjectsSel = arrQxProjectsObjLstCache;
if (objQxProjectsCond.sfFldComparisonOp == null || objQxProjectsCond.sfFldComparisonOp == "") return arrQxProjectsSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxProjectsCond.sfFldComparisonOp);
//console.log("clsQxProjectsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxProjectsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxProjectsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxProjectsSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxProjectsCond), qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param strQxPrjId:所给的关键字
 * @returns 对象
*/
export  async function QxProjects_IsExistCache(strQxPrjId:string) {
const strThisFuncName = "IsExistCache";
const arrQxProjectsObjLstCache = await QxProjects_GetObjLstCache();
if (arrQxProjectsObjLstCache == null) return false;
try
{
const arrQxProjectsSel = arrQxProjectsObjLstCache.filter(x => x.qxPrjId == strQxPrjId);
if (arrQxProjectsSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strQxPrjId, qxProjects_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strQxPrjId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxProjects_IsExistAsync(strQxPrjId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQxPrjId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
 * @param objQxProjectsCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxProjects_GetRecCountByCondCache(objQxProjectsCond: clsQxProjectsEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxProjectsObjLstCache = await QxProjects_GetObjLstCache();
if (arrQxProjectsObjLstCache == null) return 0;
let arrQxProjectsSel = arrQxProjectsObjLstCache;
if (objQxProjectsCond.sfFldComparisonOp == null || objQxProjectsCond.sfFldComparisonOp == "") return arrQxProjectsSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxProjectsCond.sfFldComparisonOp);
//console.log("clsQxProjectsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxProjectsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxProjectsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxProjectsSel = arrQxProjectsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxProjectsSel = arrQxProjectsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxProjectsSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxProjectsCond), qxProjects_ConstructorName, strThisFuncName);
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
export  async function QxProjects_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(qxProjects_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxProjects_ConstructorName, strThisFuncName);
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
export  function QxProjects_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxProjects_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxProjectsEN._CurrTabName;
switch (clsQxProjectsEN.CacheModeId)
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
export  function QxProjects_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxProjectsEN._CurrTabName;
switch (clsQxProjectsEN.CacheModeId)
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
export  async function QxProjects_BindDdl_QxPrjIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_QxPrjIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QxPrjIdInDivCache");
const arrObjLstSel = await QxProjects_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxProjectsEN.con_QxPrjId, clsQxProjectsEN.con_PrjName, "工程");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxProjects_CheckPropertyNew(pobjQxProjectsEN: clsQxProjectsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxProjectsEN.prjName) === true )
{
 throw new Error("(errid:Watl000411)字段[PrjName]不能为空(In 工程)!(clsQxProjectsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjDataBaseId) === true )
{
 throw new Error("(errid:Watl000411)字段[项目数据库Id]不能为空(In 工程)!(clsQxProjectsBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjId) == false && GetStrLen(pobjQxProjectsEN.qxPrjId) > 4)
{
 throw new Error("(errid:Watl000413)字段[QxPrjId(qxPrjId)]的长度不能超过4(In 工程(QxProjects))!值:$(pobjQxProjectsEN.qxPrjId)(clsQxProjectsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.prjName) == false && GetStrLen(pobjQxProjectsEN.prjName) > 30)
{
 throw new Error("(errid:Watl000413)字段[PrjName(prjName)]的长度不能超过30(In 工程(QxProjects))!值:$(pobjQxProjectsEN.prjName)(clsQxProjectsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.prjDomain) == false && GetStrLen(pobjQxProjectsEN.prjDomain) > 20)
{
 throw new Error("(errid:Watl000413)字段[PrjDomain(prjDomain)]的长度不能超过20(In 工程(QxProjects))!值:$(pobjQxProjectsEN.prjDomain)(clsQxProjectsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjDataBaseId) == false && GetStrLen(pobjQxProjectsEN.qxPrjDataBaseId) > 4)
{
 throw new Error("(errid:Watl000413)字段[项目数据库Id(qxPrjDataBaseId)]的长度不能超过4(In 工程(QxProjects))!值:$(pobjQxProjectsEN.qxPrjDataBaseId)(clsQxProjectsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.updDate) == false && GetStrLen(pobjQxProjectsEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程(QxProjects))!值:$(pobjQxProjectsEN.updDate)(clsQxProjectsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.updUser) == false && GetStrLen(pobjQxProjectsEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 工程(QxProjects))!值:$(pobjQxProjectsEN.updUser)(clsQxProjectsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.memo) == false && GetStrLen(pobjQxProjectsEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 工程(QxProjects))!值:$(pobjQxProjectsEN.memo)(clsQxProjectsBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjId) == false && undefined !== pobjQxProjectsEN.qxPrjId && tzDataType.isString(pobjQxProjectsEN.qxPrjId) === false)
{
 throw new Error("(errid:Watl000414)字段[QxPrjId(qxPrjId)]的值:[$(pobjQxProjectsEN.qxPrjId)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.prjName) == false && undefined !== pobjQxProjectsEN.prjName && tzDataType.isString(pobjQxProjectsEN.prjName) === false)
{
 throw new Error("(errid:Watl000414)字段[PrjName(prjName)]的值:[$(pobjQxProjectsEN.prjName)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.prjDomain) == false && undefined !== pobjQxProjectsEN.prjDomain && tzDataType.isString(pobjQxProjectsEN.prjDomain) === false)
{
 throw new Error("(errid:Watl000414)字段[PrjDomain(prjDomain)]的值:[$(pobjQxProjectsEN.prjDomain)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckPropertyNew0)");
}
if (null != pobjQxProjectsEN.isDefaultPrj && undefined !== pobjQxProjectsEN.isDefaultPrj && tzDataType.isBoolean(pobjQxProjectsEN.isDefaultPrj) === false)
{
 throw new Error("(errid:Watl000414)字段[IsDefaultPrj(isDefaultPrj)]的值:[$(pobjQxProjectsEN.isDefaultPrj)], 非法,应该为布尔型(In 工程(QxProjects))!(clsQxProjectsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjDataBaseId) == false && undefined !== pobjQxProjectsEN.qxPrjDataBaseId && tzDataType.isString(pobjQxProjectsEN.qxPrjDataBaseId) === false)
{
 throw new Error("(errid:Watl000414)字段[项目数据库Id(qxPrjDataBaseId)]的值:[$(pobjQxProjectsEN.qxPrjDataBaseId)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.updDate) == false && undefined !== pobjQxProjectsEN.updDate && tzDataType.isString(pobjQxProjectsEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjQxProjectsEN.updDate)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.updUser) == false && undefined !== pobjQxProjectsEN.updUser && tzDataType.isString(pobjQxProjectsEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjQxProjectsEN.updUser)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.memo) == false && undefined !== pobjQxProjectsEN.memo && tzDataType.isString(pobjQxProjectsEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjQxProjectsEN.memo)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjDataBaseId) == false && pobjQxProjectsEN.qxPrjDataBaseId != '[nuull]' && GetStrLen(pobjQxProjectsEN.qxPrjDataBaseId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目数据库Id]作为外键字段,长度应该为4(In 工程)!(clsQxProjectsBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxProjects_CheckProperty4Update(pobjQxProjectsEN: clsQxProjectsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjId) == false && GetStrLen(pobjQxProjectsEN.qxPrjId) > 4)
{
 throw new Error("(errid:Watl000416)字段[QxPrjId(qxPrjId)]的长度不能超过4(In 工程(QxProjects))!值:$(pobjQxProjectsEN.qxPrjId)(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.prjName) == false && GetStrLen(pobjQxProjectsEN.prjName) > 30)
{
 throw new Error("(errid:Watl000416)字段[PrjName(prjName)]的长度不能超过30(In 工程(QxProjects))!值:$(pobjQxProjectsEN.prjName)(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.prjDomain) == false && GetStrLen(pobjQxProjectsEN.prjDomain) > 20)
{
 throw new Error("(errid:Watl000416)字段[PrjDomain(prjDomain)]的长度不能超过20(In 工程(QxProjects))!值:$(pobjQxProjectsEN.prjDomain)(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjDataBaseId) == false && GetStrLen(pobjQxProjectsEN.qxPrjDataBaseId) > 4)
{
 throw new Error("(errid:Watl000416)字段[项目数据库Id(qxPrjDataBaseId)]的长度不能超过4(In 工程(QxProjects))!值:$(pobjQxProjectsEN.qxPrjDataBaseId)(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.updDate) == false && GetStrLen(pobjQxProjectsEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程(QxProjects))!值:$(pobjQxProjectsEN.updDate)(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.updUser) == false && GetStrLen(pobjQxProjectsEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 工程(QxProjects))!值:$(pobjQxProjectsEN.updUser)(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.memo) == false && GetStrLen(pobjQxProjectsEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 工程(QxProjects))!值:$(pobjQxProjectsEN.memo)(clsQxProjectsBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjId) == false && undefined !== pobjQxProjectsEN.qxPrjId && tzDataType.isString(pobjQxProjectsEN.qxPrjId) === false)
{
 throw new Error("(errid:Watl000417)字段[QxPrjId(qxPrjId)]的值:[$(pobjQxProjectsEN.qxPrjId)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.prjName) == false && undefined !== pobjQxProjectsEN.prjName && tzDataType.isString(pobjQxProjectsEN.prjName) === false)
{
 throw new Error("(errid:Watl000417)字段[PrjName(prjName)]的值:[$(pobjQxProjectsEN.prjName)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.prjDomain) == false && undefined !== pobjQxProjectsEN.prjDomain && tzDataType.isString(pobjQxProjectsEN.prjDomain) === false)
{
 throw new Error("(errid:Watl000417)字段[PrjDomain(prjDomain)]的值:[$(pobjQxProjectsEN.prjDomain)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckProperty4Update)");
}
if (null != pobjQxProjectsEN.isDefaultPrj && undefined !== pobjQxProjectsEN.isDefaultPrj && tzDataType.isBoolean(pobjQxProjectsEN.isDefaultPrj) === false)
{
 throw new Error("(errid:Watl000417)字段[IsDefaultPrj(isDefaultPrj)]的值:[$(pobjQxProjectsEN.isDefaultPrj)], 非法,应该为布尔型(In 工程(QxProjects))!(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjDataBaseId) == false && undefined !== pobjQxProjectsEN.qxPrjDataBaseId && tzDataType.isString(pobjQxProjectsEN.qxPrjDataBaseId) === false)
{
 throw new Error("(errid:Watl000417)字段[项目数据库Id(qxPrjDataBaseId)]的值:[$(pobjQxProjectsEN.qxPrjDataBaseId)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.updDate) == false && undefined !== pobjQxProjectsEN.updDate && tzDataType.isString(pobjQxProjectsEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjQxProjectsEN.updDate)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.updUser) == false && undefined !== pobjQxProjectsEN.updUser && tzDataType.isString(pobjQxProjectsEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjQxProjectsEN.updUser)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxProjectsEN.memo) == false && undefined !== pobjQxProjectsEN.memo && tzDataType.isString(pobjQxProjectsEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjQxProjectsEN.memo)], 非法,应该为字符型(In 工程(QxProjects))!(clsQxProjectsBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjId) === true )
{
 throw new Error("(errid:Watl000064)字段[QxPrjId]不能为空(In 工程)!(clsQxProjectsBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxProjectsEN.qxPrjDataBaseId) == false && pobjQxProjectsEN.qxPrjDataBaseId != '[nuull]' && GetStrLen(pobjQxProjectsEN.qxPrjDataBaseId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目数据库Id]作为外键字段,长度应该为4(In 工程)!(clsQxProjectsBL:CheckPropertyNew)");
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
export  function QxProjects_GetJSONStrByObj (pobjQxProjectsEN: clsQxProjectsEN): string
{
pobjQxProjectsEN.sfUpdFldSetStr = pobjQxProjectsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxProjectsEN);
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
export  function QxProjects_GetObjLstByJSONStr (strJSON: string): Array<clsQxProjectsEN>
{
let arrQxProjectsObjLst = new Array<clsQxProjectsEN>();
if (strJSON === "")
{
return arrQxProjectsObjLst;
}
try
{
arrQxProjectsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxProjectsObjLst;
}
return arrQxProjectsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxProjectsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxProjects_GetObjLstByJSONObjLst (arrQxProjectsObjLstS: Array<clsQxProjectsEN>): Array<clsQxProjectsEN>
{
const arrQxProjectsObjLst = new Array<clsQxProjectsEN>();
for (const objInFor of arrQxProjectsObjLstS) {
const obj1 = QxProjects_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxProjectsObjLst.push(obj1);
}
return arrQxProjectsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxProjects_GetObjByJSONStr (strJSON: string): clsQxProjectsEN
{
let pobjQxProjectsEN = new clsQxProjectsEN();
if (strJSON === "")
{
return pobjQxProjectsEN;
}
try
{
pobjQxProjectsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxProjectsEN;
}
return pobjQxProjectsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxProjects_GetCombineCondition(objQxProjectsCond: clsQxProjectsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxProjectsCond.dicFldComparisonOp, clsQxProjectsEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxProjectsCond.dicFldComparisonOp[clsQxProjectsEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxProjectsEN.con_QxPrjId, objQxProjectsCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxProjectsCond.dicFldComparisonOp, clsQxProjectsEN.con_PrjName) == true)
{
const strComparisonOpPrjName:string = objQxProjectsCond.dicFldComparisonOp[clsQxProjectsEN.con_PrjName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxProjectsEN.con_PrjName, objQxProjectsCond.prjName, strComparisonOpPrjName);
}
if (Object.prototype.hasOwnProperty.call(objQxProjectsCond.dicFldComparisonOp, clsQxProjectsEN.con_PrjDomain) == true)
{
const strComparisonOpPrjDomain:string = objQxProjectsCond.dicFldComparisonOp[clsQxProjectsEN.con_PrjDomain];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxProjectsEN.con_PrjDomain, objQxProjectsCond.prjDomain, strComparisonOpPrjDomain);
}
if (Object.prototype.hasOwnProperty.call(objQxProjectsCond.dicFldComparisonOp, clsQxProjectsEN.con_IsDefaultPrj) == true)
{
if (objQxProjectsCond.isDefaultPrj == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxProjectsEN.con_IsDefaultPrj);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxProjectsEN.con_IsDefaultPrj);
}
}
if (Object.prototype.hasOwnProperty.call(objQxProjectsCond.dicFldComparisonOp, clsQxProjectsEN.con_QxPrjDataBaseId) == true)
{
const strComparisonOpQxPrjDataBaseId:string = objQxProjectsCond.dicFldComparisonOp[clsQxProjectsEN.con_QxPrjDataBaseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxProjectsEN.con_QxPrjDataBaseId, objQxProjectsCond.qxPrjDataBaseId, strComparisonOpQxPrjDataBaseId);
}
if (Object.prototype.hasOwnProperty.call(objQxProjectsCond.dicFldComparisonOp, clsQxProjectsEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxProjectsCond.dicFldComparisonOp[clsQxProjectsEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxProjectsEN.con_UpdDate, objQxProjectsCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxProjectsCond.dicFldComparisonOp, clsQxProjectsEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxProjectsCond.dicFldComparisonOp[clsQxProjectsEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxProjectsEN.con_UpdUser, objQxProjectsCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxProjectsCond.dicFldComparisonOp, clsQxProjectsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxProjectsCond.dicFldComparisonOp[clsQxProjectsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxProjectsEN.con_Memo, objQxProjectsCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objQxProjectsENS:源对象
 * @param objQxProjectsENT:目标对象
*/
export  function QxProjects_CopyObjTo(objQxProjectsENS: clsQxProjectsEN , objQxProjectsENT: clsQxProjectsEN ): void 
{
objQxProjectsENT.qxPrjId = objQxProjectsENS.qxPrjId; //QxPrjId
objQxProjectsENT.prjName = objQxProjectsENS.prjName; //PrjName
objQxProjectsENT.prjDomain = objQxProjectsENS.prjDomain; //PrjDomain
objQxProjectsENT.isDefaultPrj = objQxProjectsENS.isDefaultPrj; //IsDefaultPrj
objQxProjectsENT.qxPrjDataBaseId = objQxProjectsENS.qxPrjDataBaseId; //项目数据库Id
objQxProjectsENT.updDate = objQxProjectsENS.updDate; //修改日期
objQxProjectsENT.updUser = objQxProjectsENS.updUser; //修改人
objQxProjectsENT.memo = objQxProjectsENS.memo; //备注
objQxProjectsENT.sfUpdFldSetStr = objQxProjectsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxProjectsENS:源对象
 * @param objQxProjectsENT:目标对象
*/
export  function QxProjects_GetObjFromJsonObj(objQxProjectsENS: clsQxProjectsEN): clsQxProjectsEN 
{
 const objQxProjectsENT: clsQxProjectsEN = new clsQxProjectsEN();
ObjectAssign(objQxProjectsENT, objQxProjectsENS);
 return objQxProjectsENT;
}