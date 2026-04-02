
 /**
 * 类名:clsQxUserStateWApi
 * 表名:QxUserState(01120926)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/15 09:52:49
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户状态(QxUserState)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年12月15日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxUserStateEN } from "@/ts/L0Entity/UserManage/clsQxUserStateEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUserState_Controller = "QxUserStateApi";
 export const qxUserState_ConstructorName = "qxUserState";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserStateId:关键字
 * @returns 对象
 **/
export  async function QxUserState_GetObjByUserStateIdAsync(strUserStateId: string): Promise<clsQxUserStateEN|null>  
{
const strThisFuncName = "GetObjByUserStateIdAsync";

if (IsNullOrEmpty(strUserStateId) == true)
{
  const strMsg = Format("参数:[strUserStateId]不能为空!(In clsQxUserStateWApi.GetObjByUserStateIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserStateId]的长度:[{0}]不正确!(clsQxUserStateWApi.GetObjByUserStateIdAsync)", strUserStateId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByUserStateId";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserStateId,
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
const objQxUserState = QxUserState_GetObjFromJsonObj(returnObj);
return objQxUserState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param strUserStateId:所给的关键字
 * @returns 对象
*/
export  async function QxUserState_GetObjByUserStateIdCache(strUserStateId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByUserStateIdCache";

if (IsNullOrEmpty(strUserStateId) == true)
{
  const strMsg = Format("参数:[strUserStateId]不能为空!(In clsQxUserStateWApi.GetObjByUserStateIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserStateId]的长度:[{0}]不正确!(clsQxUserStateWApi.GetObjByUserStateIdCache)", strUserStateId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxUserStateObjLstCache = await QxUserState_GetObjLstCache();
try
{
const arrQxUserStateSel = arrQxUserStateObjLstCache.filter(x => 
 x.userStateId == strUserStateId );
let objQxUserState: clsQxUserStateEN;
if (arrQxUserStateSel.length > 0)
{
objQxUserState = arrQxUserStateSel[0];
return objQxUserState;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxUserStateConst = await QxUserState_GetObjByUserStateIdAsync(strUserStateId);
if (objQxUserStateConst != null)
{
QxUserState_ReFreshThisCache();
return objQxUserStateConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUserStateId, qxUserState_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strUserStateId:所给的关键字
 * @returns 对象
*/
export  async function QxUserState_GetObjByUserStateIdlocalStorage(strUserStateId: string) {
const strThisFuncName = "GetObjByUserStateIdlocalStorage";

if (IsNullOrEmpty(strUserStateId) == true)
{
  const strMsg = Format("参数:[strUserStateId]不能为空!(In clsQxUserStateWApi.GetObjByUserStateIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserStateId]的长度:[{0}]不正确!(clsQxUserStateWApi.GetObjByUserStateIdlocalStorage)", strUserStateId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxUserStateEN._CurrTabName, strUserStateId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxUserStateCache: clsQxUserStateEN = JSON.parse(strTempObj);
return objQxUserStateCache;
}
try
{
const objQxUserState = await QxUserState_GetObjByUserStateIdAsync(strUserStateId);
if (objQxUserState != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxUserState));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxUserState;
}
return objQxUserState;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUserStateId, qxUserState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxUserState:所给的对象
 * @returns 对象
*/
export  async function QxUserState_UpdateObjInLstCache(objQxUserState: clsQxUserStateEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxUserStateObjLstCache = await QxUserState_GetObjLstCache();
const obj = arrQxUserStateObjLstCache.find(x => 
x.userStateId == objQxUserState.userStateId);
if (obj != null)
{
objQxUserState.userStateId = obj.userStateId;
ObjectAssign( obj, objQxUserState);
}
else
{
arrQxUserStateObjLstCache.push(objQxUserState);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxUserState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strUserStateId:所给的关键字
 * @returns 对象
*/
export  async function QxUserState_GetNameByUserStateIdCache(strUserStateId: string) {

if (IsNullOrEmpty(strUserStateId) == true)
{
  const strMsg = Format("参数:[strUserStateId]不能为空!(In clsQxUserStateWApi.GetNameByUserStateIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserStateId]的长度:[{0}]不正确!(clsQxUserStateWApi.GetNameByUserStateIdCache)", strUserStateId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxUserStateObjLstCache = await QxUserState_GetObjLstCache();
if (arrQxUserStateObjLstCache == null) return "";
try
{
const arrQxUserStateSel = arrQxUserStateObjLstCache.filter(x => 
 x.userStateId == strUserStateId );
let objQxUserState: clsQxUserStateEN;
if (arrQxUserStateSel.length > 0)
{
objQxUserState = arrQxUserStateSel[0];
return objQxUserState.userStateName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strUserStateId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function QxUserState_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxUserStateEN.con_UserStateId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxUserStateEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxUserStateEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strUserStateId = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objQxUserState = await QxUserState_GetObjByUserStateIdCache(strUserStateId );
if (objQxUserState == null) return "";
if (objQxUserState.GetFldValue(strOutFldName) == null) return "";
return objQxUserState.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserState_SortFunDefa(a:clsQxUserStateEN , b:clsQxUserStateEN): number 
{
return a.userStateId.localeCompare(b.userStateId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserState_SortFunDefa2Fld(a:clsQxUserStateEN , b:clsQxUserStateEN): number 
{
if (a.userStateName == b.userStateName) return a.memo.localeCompare(b.memo);
else return a.userStateName.localeCompare(b.userStateName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserState_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUserStateEN.con_UserStateId:
return (a: clsQxUserStateEN, b: clsQxUserStateEN) => {
return a.userStateId.localeCompare(b.userStateId);
}
case clsQxUserStateEN.con_UserStateName:
return (a: clsQxUserStateEN, b: clsQxUserStateEN) => {
return a.userStateName.localeCompare(b.userStateName);
}
case clsQxUserStateEN.con_Memo:
return (a: clsQxUserStateEN, b: clsQxUserStateEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserState]中不存在!(in ${ qxUserState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUserStateEN.con_UserStateId:
return (a: clsQxUserStateEN, b: clsQxUserStateEN) => {
return b.userStateId.localeCompare(a.userStateId);
}
case clsQxUserStateEN.con_UserStateName:
return (a: clsQxUserStateEN, b: clsQxUserStateEN) => {
return b.userStateName.localeCompare(a.userStateName);
}
case clsQxUserStateEN.con_Memo:
return (a: clsQxUserStateEN, b: clsQxUserStateEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserState]中不存在!(in ${ qxUserState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxUserState_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUserStateEN.con_UserStateId:
return (obj: clsQxUserStateEN) => {
return obj.userStateId === value;
}
case clsQxUserStateEN.con_UserStateName:
return (obj: clsQxUserStateEN) => {
return obj.userStateName === value;
}
case clsQxUserStateEN.con_Memo:
return (obj: clsQxUserStateEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserState]中不存在!(in ${ qxUserState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function QxUserState_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxUserStateEN.con_UserStateId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxUserState = await QxUserState_GetObjLstCache();
if (arrQxUserState == null) return [];
let arrQxUserStateSel = arrQxUserState;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxUserStateSel = arrQxUserStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxUserStateSel.length == 0) return [];
return arrQxUserStateSel.map(x=>x.userStateId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserState_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUserStateEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const objQxUserState = QxUserState_GetObjFromJsonObj(returnObj);
return objQxUserState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxUserStateEN._CurrTabName;
if (IsNullOrEmpty(clsQxUserStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxUserStateEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxUserStateExObjLstCache: Array<clsQxUserStateEN> = CacheHelper.Get(strKey);
const arrQxUserStateObjLstT = QxUserState_GetObjLstByJSONObjLst(arrQxUserStateExObjLstCache);
return arrQxUserStateObjLstT;
}
try
{
const arrQxUserStateExObjLst = await QxUserState_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxUserStateExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxUserStateExObjLst.length);
console.log(strInfo);
return arrQxUserStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxUserState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserState_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxUserStateEN._CurrTabName;
if (IsNullOrEmpty(clsQxUserStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxUserStateEN.CacheAddiCondition);
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
const arrQxUserStateExObjLstCache: Array<clsQxUserStateEN> = JSON.parse(strTempObjLst);
const arrQxUserStateObjLstT = QxUserState_GetObjLstByJSONObjLst(arrQxUserStateExObjLstCache);
return arrQxUserStateObjLstT;
}
try
{
const arrQxUserStateExObjLst = await QxUserState_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxUserStateExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxUserStateExObjLst.length);
console.log(strInfo);
return arrQxUserStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxUserState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserState_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxUserStateEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxUserStateObjLstCache: Array<clsQxUserStateEN> = JSON.parse(strTempObjLst);
return arrQxUserStateObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxUserState_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUserStateEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxUserStateEN._CurrTabName;
if (IsNullOrEmpty(clsQxUserStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxUserStateEN.CacheAddiCondition);
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
const arrQxUserStateExObjLstCache: Array<clsQxUserStateEN> = JSON.parse(strTempObjLst);
const arrQxUserStateObjLstT = QxUserState_GetObjLstByJSONObjLst(arrQxUserStateExObjLstCache);
return arrQxUserStateObjLstT;
}
try
{
const arrQxUserStateExObjLst = await QxUserState_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxUserStateExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxUserStateExObjLst.length);
console.log(strInfo);
return arrQxUserStateExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxUserState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserState_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxUserStateEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxUserStateObjLstCache: Array<clsQxUserStateEN> = JSON.parse(strTempObjLst);
return arrQxUserStateObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserState_GetObjLstCache(): Promise<Array<clsQxUserStateEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxUserStateObjLstCache;
switch (clsQxUserStateEN.CacheModeId)
{
case "04"://sessionStorage
arrQxUserStateObjLstCache = await QxUserState_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxUserStateObjLstCache = await QxUserState_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxUserStateObjLstCache = await QxUserState_GetObjLstClientCache();
break;
default:
arrQxUserStateObjLstCache = await QxUserState_GetObjLstClientCache();
break;
}
return arrQxUserStateObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserState_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxUserStateObjLstCache;
switch (clsQxUserStateEN.CacheModeId)
{
case "04"://sessionStorage
arrQxUserStateObjLstCache = await QxUserState_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxUserStateObjLstCache = await QxUserState_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxUserStateObjLstCache = null;
break;
default:
arrQxUserStateObjLstCache = null;
break;
}
return arrQxUserStateObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserStateIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxUserState_GetSubObjLstCache(objQxUserStateCond: clsQxUserStateEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxUserStateObjLstCache = await QxUserState_GetObjLstCache();
let arrQxUserStateSel = arrQxUserStateObjLstCache;
if (objQxUserStateCond.sfFldComparisonOp == null || objQxUserStateCond.sfFldComparisonOp == "") return arrQxUserStateSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxUserStateCond.sfFldComparisonOp);
//console.log("clsQxUserStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxUserStateCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxUserStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxUserStateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxUserStateCond), qxUserState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxUserStateEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserStateId:关键字列表
 * @returns 对象列表
 **/
export  async function QxUserState_GetObjLstByUserStateIdLstAsync(arrUserStateId: Array<string>): Promise<Array<clsQxUserStateEN>>  
{
const strThisFuncName = "GetObjLstByUserStateIdLstAsync";
const strAction = "GetObjLstByUserStateIdLst";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserStateId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param arrstrUserStateIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxUserState_GetObjLstByUserStateIdLstCache(arrUserStateIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByUserStateIdLstCache";
try
{
const arrQxUserStateObjLstCache = await QxUserState_GetObjLstCache();
const arrQxUserStateSel = arrQxUserStateObjLstCache.filter(x => arrUserStateIdLst.indexOf(x.userStateId)>-1);
return arrQxUserStateSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrUserStateIdLst.join(","), qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUserStateEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUserStateEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserStateEN>();
const arrQxUserStateObjLstCache = await QxUserState_GetObjLstCache();
if (arrQxUserStateObjLstCache.length == 0) return arrQxUserStateObjLstCache;
let arrQxUserStateSel = arrQxUserStateObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQxUserStateCond = new clsQxUserStateEN();
ObjectAssign(objQxUserStateCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQxUserStateWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxUserStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxUserStateSel = arrQxUserStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxUserStateSel.length == 0) return arrQxUserStateSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxUserStateSel = arrQxUserStateSel.sort(QxUserState_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxUserStateSel = arrQxUserStateSel.sort(objPagerPara.sortFun);
}
arrQxUserStateSel = arrQxUserStateSel.slice(intStart, intEnd);     
return arrQxUserStateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxUserState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxUserStateEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxUserState_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUserStateEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserStateEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param strUserStateId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxUserState_DelRecordAsync(strUserStateId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(qxUserState_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strUserStateId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param arrUserStateId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxUserState_DelQxUserStatesAsync(arrUserStateId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUserStatesAsync";
const strAction = "DelQxUserStates";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserStateId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_DelQxUserStatesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUserStatesByCondAsync";
const strAction = "DelQxUserStatesByCond";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param objQxUserStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserState_AddNewRecordAsync(objQxUserStateEN: clsQxUserStateEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxUserStateEN.userStateId === null || objQxUserStateEN.userStateId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxUserStateEN);
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param objQxUserStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserState_AddNewRecordWithMaxIdAsync(objQxUserStateEN: clsQxUserStateEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param objQxUserStateEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUserState_AddNewRecordWithReturnKeyAsync(objQxUserStateEN: clsQxUserStateEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param objQxUserStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserState_UpdateRecordAsync(objQxUserStateEN: clsQxUserStateEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUserStateEN.sfUpdFldSetStr === undefined || objQxUserStateEN.sfUpdFldSetStr === null || objQxUserStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserStateEN.userStateId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param objQxUserStateEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserState_UpdateWithConditionAsync(objQxUserStateEN: clsQxUserStateEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUserStateEN.sfUpdFldSetStr === undefined || objQxUserStateEN.sfUpdFldSetStr === null || objQxUserStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserStateEN.userStateId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);
objQxUserStateEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param objstrUserStateIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxUserState_IsExistRecordCache(objQxUserStateCond: clsQxUserStateEN) {
const strThisFuncName = "IsExistRecordCache";
const arrQxUserStateObjLstCache = await QxUserState_GetObjLstCache();
if (arrQxUserStateObjLstCache == null) return false;
let arrQxUserStateSel = arrQxUserStateObjLstCache;
if (objQxUserStateCond.sfFldComparisonOp == null || objQxUserStateCond.sfFldComparisonOp == "") return arrQxUserStateSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxUserStateCond.sfFldComparisonOp);
//console.log("clsQxUserStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxUserStateCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxUserStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxUserStateSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxUserStateCond), qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param strUserStateId:所给的关键字
 * @returns 对象
*/
export  async function QxUserState_IsExistCache(strUserStateId:string) {
const strThisFuncName = "IsExistCache";
const arrQxUserStateObjLstCache = await QxUserState_GetObjLstCache();
if (arrQxUserStateObjLstCache == null) return false;
try
{
const arrQxUserStateSel = arrQxUserStateObjLstCache.filter(x => x.userStateId == strUserStateId);
if (arrQxUserStateSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strUserStateId, qxUserState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strUserStateId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxUserState_IsExistAsync(strUserStateId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserStateId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
 * @param objQxUserStateCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxUserState_GetRecCountByCondCache(objQxUserStateCond: clsQxUserStateEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxUserStateObjLstCache = await QxUserState_GetObjLstCache();
if (arrQxUserStateObjLstCache == null) return 0;
let arrQxUserStateSel = arrQxUserStateObjLstCache;
if (objQxUserStateCond.sfFldComparisonOp == null || objQxUserStateCond.sfFldComparisonOp == "") return arrQxUserStateSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxUserStateCond.sfFldComparisonOp);
//console.log("clsQxUserStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxUserStateCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxUserStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxUserStateSel = arrQxUserStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUserStateSel = arrQxUserStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxUserStateSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxUserStateCond), qxUserState_ConstructorName, strThisFuncName);
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
export  async function QxUserState_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(qxUserState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserState_ConstructorName, strThisFuncName);
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
export  function QxUserState_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUserState_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxUserStateEN._CurrTabName;
switch (clsQxUserStateEN.CacheModeId)
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
export  function QxUserState_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxUserStateEN._CurrTabName;
switch (clsQxUserStateEN.CacheModeId)
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
export  async function QxUserState_BindDdl_UserStateIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_UserStateIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_UserStateIdInDivCache");
const arrObjLstSel = await QxUserState_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxUserStateEN.con_UserStateId, clsQxUserStateEN.con_UserStateName, "用户状态");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserState_CheckPropertyNew(pobjQxUserStateEN: clsQxUserStateEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUserStateEN.userStateName) === true )
{
 throw new Error("(errid:Watl000411)字段[用户状态名]不能为空(In 用户状态)!(clsQxUserStateBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserStateEN.userStateId) == false && GetStrLen(pobjQxUserStateEN.userStateId) > 2)
{
 throw new Error("(errid:Watl000413)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户状态(QxUserState))!值:$(pobjQxUserStateEN.userStateId)(clsQxUserStateBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserStateEN.userStateName) == false && GetStrLen(pobjQxUserStateEN.userStateName) > 20)
{
 throw new Error("(errid:Watl000413)字段[用户状态名(userStateName)]的长度不能超过20(In 用户状态(QxUserState))!值:$(pobjQxUserStateEN.userStateName)(clsQxUserStateBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserStateEN.memo) == false && GetStrLen(pobjQxUserStateEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户状态(QxUserState))!值:$(pobjQxUserStateEN.memo)(clsQxUserStateBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUserStateEN.userStateId) == false && undefined !== pobjQxUserStateEN.userStateId && tzDataType.isString(pobjQxUserStateEN.userStateId) === false)
{
 throw new Error("(errid:Watl000414)字段[用户状态Id(userStateId)]的值:[$(pobjQxUserStateEN.userStateId)], 非法,应该为字符型(In 用户状态(QxUserState))!(clsQxUserStateBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxUserStateEN.userStateName) == false && undefined !== pobjQxUserStateEN.userStateName && tzDataType.isString(pobjQxUserStateEN.userStateName) === false)
{
 throw new Error("(errid:Watl000414)字段[用户状态名(userStateName)]的值:[$(pobjQxUserStateEN.userStateName)], 非法,应该为字符型(In 用户状态(QxUserState))!(clsQxUserStateBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxUserStateEN.memo) == false && undefined !== pobjQxUserStateEN.memo && tzDataType.isString(pobjQxUserStateEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjQxUserStateEN.memo)], 非法,应该为字符型(In 用户状态(QxUserState))!(clsQxUserStateBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserState_CheckProperty4Update(pobjQxUserStateEN: clsQxUserStateEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserStateEN.userStateId) == false && GetStrLen(pobjQxUserStateEN.userStateId) > 2)
{
 throw new Error("(errid:Watl000416)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户状态(QxUserState))!值:$(pobjQxUserStateEN.userStateId)(clsQxUserStateBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserStateEN.userStateName) == false && GetStrLen(pobjQxUserStateEN.userStateName) > 20)
{
 throw new Error("(errid:Watl000416)字段[用户状态名(userStateName)]的长度不能超过20(In 用户状态(QxUserState))!值:$(pobjQxUserStateEN.userStateName)(clsQxUserStateBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserStateEN.memo) == false && GetStrLen(pobjQxUserStateEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户状态(QxUserState))!值:$(pobjQxUserStateEN.memo)(clsQxUserStateBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUserStateEN.userStateId) == false && undefined !== pobjQxUserStateEN.userStateId && tzDataType.isString(pobjQxUserStateEN.userStateId) === false)
{
 throw new Error("(errid:Watl000417)字段[用户状态Id(userStateId)]的值:[$(pobjQxUserStateEN.userStateId)], 非法,应该为字符型(In 用户状态(QxUserState))!(clsQxUserStateBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserStateEN.userStateName) == false && undefined !== pobjQxUserStateEN.userStateName && tzDataType.isString(pobjQxUserStateEN.userStateName) === false)
{
 throw new Error("(errid:Watl000417)字段[用户状态名(userStateName)]的值:[$(pobjQxUserStateEN.userStateName)], 非法,应该为字符型(In 用户状态(QxUserState))!(clsQxUserStateBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserStateEN.memo) == false && undefined !== pobjQxUserStateEN.memo && tzDataType.isString(pobjQxUserStateEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjQxUserStateEN.memo)], 非法,应该为字符型(In 用户状态(QxUserState))!(clsQxUserStateBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxUserStateEN.userStateId) === true )
{
 throw new Error("(errid:Watl000064)字段[用户状态Id]不能为空(In 用户状态)!(clsQxUserStateBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserState_GetJSONStrByObj (pobjQxUserStateEN: clsQxUserStateEN): string
{
pobjQxUserStateEN.sfUpdFldSetStr = pobjQxUserStateEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUserStateEN);
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
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxUserState_GetObjLstByJSONStr (strJSON: string): Array<clsQxUserStateEN>
{
let arrQxUserStateObjLst = new Array<clsQxUserStateEN>();
if (strJSON === "")
{
return arrQxUserStateObjLst;
}
try
{
arrQxUserStateObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUserStateObjLst;
}
return arrQxUserStateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUserStateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUserState_GetObjLstByJSONObjLst (arrQxUserStateObjLstS: Array<clsQxUserStateEN>): Array<clsQxUserStateEN>
{
const arrQxUserStateObjLst = new Array<clsQxUserStateEN>();
for (const objInFor of arrQxUserStateObjLstS) {
const obj1 = QxUserState_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUserStateObjLst.push(obj1);
}
return arrQxUserStateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserState_GetObjByJSONStr (strJSON: string): clsQxUserStateEN
{
let pobjQxUserStateEN = new clsQxUserStateEN();
if (strJSON === "")
{
return pobjQxUserStateEN;
}
try
{
pobjQxUserStateEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUserStateEN;
}
return pobjQxUserStateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUserState_GetCombineCondition(objQxUserStateCond: clsQxUserStateEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUserStateCond.dicFldComparisonOp, clsQxUserStateEN.con_UserStateId) == true)
{
const strComparisonOpUserStateId:string = objQxUserStateCond.dicFldComparisonOp[clsQxUserStateEN.con_UserStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserStateEN.con_UserStateId, objQxUserStateCond.userStateId, strComparisonOpUserStateId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserStateCond.dicFldComparisonOp, clsQxUserStateEN.con_UserStateName) == true)
{
const strComparisonOpUserStateName:string = objQxUserStateCond.dicFldComparisonOp[clsQxUserStateEN.con_UserStateName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserStateEN.con_UserStateName, objQxUserStateCond.userStateName, strComparisonOpUserStateName);
}
if (Object.prototype.hasOwnProperty.call(objQxUserStateCond.dicFldComparisonOp, clsQxUserStateEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUserStateCond.dicFldComparisonOp[clsQxUserStateEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserStateEN.con_Memo, objQxUserStateCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objQxUserStateENS:源对象
 * @param objQxUserStateENT:目标对象
*/
export  function QxUserState_CopyObjTo(objQxUserStateENS: clsQxUserStateEN , objQxUserStateENT: clsQxUserStateEN ): void 
{
objQxUserStateENT.userStateId = objQxUserStateENS.userStateId; //用户状态Id
objQxUserStateENT.userStateName = objQxUserStateENS.userStateName; //用户状态名
objQxUserStateENT.memo = objQxUserStateENS.memo; //备注
objQxUserStateENT.sfUpdFldSetStr = objQxUserStateENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUserStateENS:源对象
 * @param objQxUserStateENT:目标对象
*/
export  function QxUserState_GetObjFromJsonObj(objQxUserStateENS: clsQxUserStateEN): clsQxUserStateEN 
{
 const objQxUserStateENT: clsQxUserStateEN = new clsQxUserStateEN();
ObjectAssign(objQxUserStateENT, objQxUserStateENS);
 return objQxUserStateENT;
}