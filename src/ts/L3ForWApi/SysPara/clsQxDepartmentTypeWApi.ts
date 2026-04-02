
 /**
 * 类名:clsQxDepartmentTypeWApi
 * 表名:QxDepartmentType(00140037)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/20 15:14:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 部门类型(QxDepartmentType)
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
import { clsQxDepartmentTypeEN } from "@/ts/L0Entity/SysPara/clsQxDepartmentTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxDepartmentType_Controller = "QxDepartmentTypeApi";
 export const qxDepartmentType_ConstructorName = "qxDepartmentType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDepartmentTypeId:关键字
 * @returns 对象
 **/
export  async function QxDepartmentType_GetObjByDepartmentTypeIdAsync(strDepartmentTypeId: string): Promise<clsQxDepartmentTypeEN|null>  
{
const strThisFuncName = "GetObjByDepartmentTypeIdAsync";

if (IsNullOrEmpty(strDepartmentTypeId) == true)
{
  const strMsg = Format("参数:[strDepartmentTypeId]不能为空!(In clsQxDepartmentTypeWApi.GetObjByDepartmentTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strDepartmentTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strDepartmentTypeId]的长度:[{0}]不正确!(clsQxDepartmentTypeWApi.GetObjByDepartmentTypeIdAsync)", strDepartmentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByDepartmentTypeId";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strDepartmentTypeId,
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
const objQxDepartmentType = QxDepartmentType_GetObjFromJsonObj(returnObj);
return objQxDepartmentType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param strDepartmentTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxDepartmentType_GetObjByDepartmentTypeIdCache(strDepartmentTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByDepartmentTypeIdCache";

if (IsNullOrEmpty(strDepartmentTypeId) == true)
{
  const strMsg = Format("参数:[strDepartmentTypeId]不能为空!(In clsQxDepartmentTypeWApi.GetObjByDepartmentTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strDepartmentTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strDepartmentTypeId]的长度:[{0}]不正确!(clsQxDepartmentTypeWApi.GetObjByDepartmentTypeIdCache)", strDepartmentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstCache();
try
{
const arrQxDepartmentTypeSel = arrQxDepartmentTypeObjLstCache.filter(x => 
 x.departmentTypeId == strDepartmentTypeId );
let objQxDepartmentType: clsQxDepartmentTypeEN;
if (arrQxDepartmentTypeSel.length > 0)
{
objQxDepartmentType = arrQxDepartmentTypeSel[0];
return objQxDepartmentType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxDepartmentTypeConst = await QxDepartmentType_GetObjByDepartmentTypeIdAsync(strDepartmentTypeId);
if (objQxDepartmentTypeConst != null)
{
QxDepartmentType_ReFreshThisCache();
return objQxDepartmentTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strDepartmentTypeId, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strDepartmentTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxDepartmentType_GetObjByDepartmentTypeIdlocalStorage(strDepartmentTypeId: string) {
const strThisFuncName = "GetObjByDepartmentTypeIdlocalStorage";

if (IsNullOrEmpty(strDepartmentTypeId) == true)
{
  const strMsg = Format("参数:[strDepartmentTypeId]不能为空!(In clsQxDepartmentTypeWApi.GetObjByDepartmentTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strDepartmentTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strDepartmentTypeId]的长度:[{0}]不正确!(clsQxDepartmentTypeWApi.GetObjByDepartmentTypeIdlocalStorage)", strDepartmentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxDepartmentTypeEN._CurrTabName, strDepartmentTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxDepartmentTypeCache: clsQxDepartmentTypeEN = JSON.parse(strTempObj);
return objQxDepartmentTypeCache;
}
try
{
const objQxDepartmentType = await QxDepartmentType_GetObjByDepartmentTypeIdAsync(strDepartmentTypeId);
if (objQxDepartmentType != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxDepartmentType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxDepartmentType;
}
return objQxDepartmentType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strDepartmentTypeId, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxDepartmentType:所给的对象
 * @returns 对象
*/
export  async function QxDepartmentType_UpdateObjInLstCache(objQxDepartmentType: clsQxDepartmentTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstCache();
const obj = arrQxDepartmentTypeObjLstCache.find(x => 
x.departmentTypeId == objQxDepartmentType.departmentTypeId);
if (obj != null)
{
objQxDepartmentType.departmentTypeId = obj.departmentTypeId;
ObjectAssign( obj, objQxDepartmentType);
}
else
{
arrQxDepartmentTypeObjLstCache.push(objQxDepartmentType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDepartmentTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxDepartmentType_GetNameByDepartmentTypeIdCache(strDepartmentTypeId: string) {

if (IsNullOrEmpty(strDepartmentTypeId) == true)
{
  const strMsg = Format("参数:[strDepartmentTypeId]不能为空!(In clsQxDepartmentTypeWApi.GetNameByDepartmentTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strDepartmentTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strDepartmentTypeId]的长度:[{0}]不正确!(clsQxDepartmentTypeWApi.GetNameByDepartmentTypeIdCache)", strDepartmentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstCache();
if (arrQxDepartmentTypeObjLstCache == null) return "";
try
{
const arrQxDepartmentTypeSel = arrQxDepartmentTypeObjLstCache.filter(x => 
 x.departmentTypeId == strDepartmentTypeId );
let objQxDepartmentType: clsQxDepartmentTypeEN;
if (arrQxDepartmentTypeSel.length > 0)
{
objQxDepartmentType = arrQxDepartmentTypeSel[0];
return objQxDepartmentType.departmentTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strDepartmentTypeId);
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
export  async function QxDepartmentType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxDepartmentTypeEN.con_DepartmentTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxDepartmentTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxDepartmentTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strDepartmentTypeId = strInValue;
if (IsNullOrEmpty(strDepartmentTypeId) == true)
{
return "";
}
const objQxDepartmentType = await QxDepartmentType_GetObjByDepartmentTypeIdCache(strDepartmentTypeId );
if (objQxDepartmentType == null) return "";
if (objQxDepartmentType.GetFldValue(strOutFldName) == null) return "";
return objQxDepartmentType.GetFldValue(strOutFldName).toString();
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
export  function QxDepartmentType_SortFunDefa(a:clsQxDepartmentTypeEN , b:clsQxDepartmentTypeEN): number 
{
return a.departmentTypeId.localeCompare(b.departmentTypeId);
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
export  function QxDepartmentType_SortFunDefa2Fld(a:clsQxDepartmentTypeEN , b:clsQxDepartmentTypeEN): number 
{
if (a.departmentTypeName == b.departmentTypeName) return a.memo.localeCompare(b.memo);
else return a.departmentTypeName.localeCompare(b.departmentTypeName);
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
export  function QxDepartmentType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxDepartmentTypeEN.con_DepartmentTypeId:
return (a: clsQxDepartmentTypeEN, b: clsQxDepartmentTypeEN) => {
return a.departmentTypeId.localeCompare(b.departmentTypeId);
}
case clsQxDepartmentTypeEN.con_DepartmentTypeName:
return (a: clsQxDepartmentTypeEN, b: clsQxDepartmentTypeEN) => {
return a.departmentTypeName.localeCompare(b.departmentTypeName);
}
case clsQxDepartmentTypeEN.con_Memo:
return (a: clsQxDepartmentTypeEN, b: clsQxDepartmentTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxDepartmentType]中不存在!(in ${ qxDepartmentType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxDepartmentTypeEN.con_DepartmentTypeId:
return (a: clsQxDepartmentTypeEN, b: clsQxDepartmentTypeEN) => {
return b.departmentTypeId.localeCompare(a.departmentTypeId);
}
case clsQxDepartmentTypeEN.con_DepartmentTypeName:
return (a: clsQxDepartmentTypeEN, b: clsQxDepartmentTypeEN) => {
return b.departmentTypeName.localeCompare(a.departmentTypeName);
}
case clsQxDepartmentTypeEN.con_Memo:
return (a: clsQxDepartmentTypeEN, b: clsQxDepartmentTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxDepartmentType]中不存在!(in ${ qxDepartmentType_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxDepartmentType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxDepartmentTypeEN.con_DepartmentTypeId:
return (obj: clsQxDepartmentTypeEN) => {
return obj.departmentTypeId === value;
}
case clsQxDepartmentTypeEN.con_DepartmentTypeName:
return (obj: clsQxDepartmentTypeEN) => {
return obj.departmentTypeName === value;
}
case clsQxDepartmentTypeEN.con_Memo:
return (obj: clsQxDepartmentTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxDepartmentType]中不存在!(in ${ qxDepartmentType_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxDepartmentType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxDepartmentTypeEN.con_DepartmentTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxDepartmentType = await QxDepartmentType_GetObjLstCache();
if (arrQxDepartmentType == null) return [];
let arrQxDepartmentTypeSel = arrQxDepartmentType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxDepartmentTypeSel.length == 0) return [];
return arrQxDepartmentTypeSel.map(x=>x.departmentTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxDepartmentType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetFirstObjAsync(strWhereCond: string): Promise<clsQxDepartmentTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const objQxDepartmentType = QxDepartmentType_GetObjFromJsonObj(returnObj);
return objQxDepartmentType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxDepartmentTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxDepartmentTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxDepartmentTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxDepartmentTypeExObjLstCache: Array<clsQxDepartmentTypeEN> = CacheHelper.Get(strKey);
const arrQxDepartmentTypeObjLstT = QxDepartmentType_GetObjLstByJSONObjLst(arrQxDepartmentTypeExObjLstCache);
return arrQxDepartmentTypeObjLstT;
}
try
{
const arrQxDepartmentTypeExObjLst = await QxDepartmentType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxDepartmentTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxDepartmentTypeExObjLst.length);
console.log(strInfo);
return arrQxDepartmentTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxDepartmentType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxDepartmentTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxDepartmentTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxDepartmentTypeEN.CacheAddiCondition);
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
const arrQxDepartmentTypeExObjLstCache: Array<clsQxDepartmentTypeEN> = JSON.parse(strTempObjLst);
const arrQxDepartmentTypeObjLstT = QxDepartmentType_GetObjLstByJSONObjLst(arrQxDepartmentTypeExObjLstCache);
return arrQxDepartmentTypeObjLstT;
}
try
{
const arrQxDepartmentTypeExObjLst = await QxDepartmentType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxDepartmentTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxDepartmentTypeExObjLst.length);
console.log(strInfo);
return arrQxDepartmentTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxDepartmentType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxDepartmentTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxDepartmentTypeObjLstCache: Array<clsQxDepartmentTypeEN> = JSON.parse(strTempObjLst);
return arrQxDepartmentTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxDepartmentType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxDepartmentTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxDepartmentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxDepartmentTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxDepartmentTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxDepartmentTypeEN.CacheAddiCondition);
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
const arrQxDepartmentTypeExObjLstCache: Array<clsQxDepartmentTypeEN> = JSON.parse(strTempObjLst);
const arrQxDepartmentTypeObjLstT = QxDepartmentType_GetObjLstByJSONObjLst(arrQxDepartmentTypeExObjLstCache);
return arrQxDepartmentTypeObjLstT;
}
try
{
const arrQxDepartmentTypeExObjLst = await QxDepartmentType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxDepartmentTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxDepartmentTypeExObjLst.length);
console.log(strInfo);
return arrQxDepartmentTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxDepartmentType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxDepartmentTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxDepartmentTypeObjLstCache: Array<clsQxDepartmentTypeEN> = JSON.parse(strTempObjLst);
return arrQxDepartmentTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxDepartmentType_GetObjLstCache(): Promise<Array<clsQxDepartmentTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxDepartmentTypeObjLstCache;
switch (clsQxDepartmentTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstClientCache();
break;
default:
arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstClientCache();
break;
}
return arrQxDepartmentTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxDepartmentType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxDepartmentTypeObjLstCache;
switch (clsQxDepartmentTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxDepartmentTypeObjLstCache = null;
break;
default:
arrQxDepartmentTypeObjLstCache = null;
break;
}
return arrQxDepartmentTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDepartmentTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxDepartmentType_GetSubObjLstCache(objQxDepartmentTypeCond: clsQxDepartmentTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstCache();
let arrQxDepartmentTypeSel = arrQxDepartmentTypeObjLstCache;
if (objQxDepartmentTypeCond.sfFldComparisonOp == null || objQxDepartmentTypeCond.sfFldComparisonOp == "") return arrQxDepartmentTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxDepartmentTypeCond.sfFldComparisonOp);
//console.log("clsQxDepartmentTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxDepartmentTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxDepartmentTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxDepartmentTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxDepartmentTypeCond), qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxDepartmentTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDepartmentTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function QxDepartmentType_GetObjLstByDepartmentTypeIdLstAsync(arrDepartmentTypeId: Array<string>): Promise<Array<clsQxDepartmentTypeEN>>  
{
const strThisFuncName = "GetObjLstByDepartmentTypeIdLstAsync";
const strAction = "GetObjLstByDepartmentTypeIdLst";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrDepartmentTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxDepartmentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param arrstrDepartmentTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxDepartmentType_GetObjLstByDepartmentTypeIdLstCache(arrDepartmentTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByDepartmentTypeIdLstCache";
try
{
const arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstCache();
const arrQxDepartmentTypeSel = arrQxDepartmentTypeObjLstCache.filter(x => arrDepartmentTypeIdLst.indexOf(x.departmentTypeId)>-1);
return arrQxDepartmentTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrDepartmentTypeIdLst.join(","), qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxDepartmentTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxDepartmentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxDepartmentTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxDepartmentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxDepartmentTypeEN>();
const arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstCache();
if (arrQxDepartmentTypeObjLstCache.length == 0) return arrQxDepartmentTypeObjLstCache;
let arrQxDepartmentTypeSel = arrQxDepartmentTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQxDepartmentTypeCond = new clsQxDepartmentTypeEN();
ObjectAssign(objQxDepartmentTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQxDepartmentTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxDepartmentTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxDepartmentTypeSel.length == 0) return arrQxDepartmentTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.sort(QxDepartmentType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.sort(objPagerPara.sortFun);
}
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.slice(intStart, intEnd);     
return arrQxDepartmentTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxDepartmentTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxDepartmentType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxDepartmentTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxDepartmentTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxDepartmentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param strDepartmentTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxDepartmentType_DelRecordAsync(strDepartmentTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strDepartmentTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param arrDepartmentTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxDepartmentType_DelQxDepartmentTypesAsync(arrDepartmentTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxDepartmentTypesAsync";
const strAction = "DelQxDepartmentTypes";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrDepartmentTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_DelQxDepartmentTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxDepartmentTypesByCondAsync";
const strAction = "DelQxDepartmentTypesByCond";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param objQxDepartmentTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxDepartmentType_AddNewRecordAsync(objQxDepartmentTypeEN: clsQxDepartmentTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxDepartmentTypeEN.departmentTypeId === null || objQxDepartmentTypeEN.departmentTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxDepartmentTypeEN);
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxDepartmentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param objQxDepartmentTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxDepartmentType_AddNewRecordWithMaxIdAsync(objQxDepartmentTypeEN: clsQxDepartmentTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxDepartmentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param objQxDepartmentTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxDepartmentType_AddNewRecordWithReturnKeyAsync(objQxDepartmentTypeEN: clsQxDepartmentTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxDepartmentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param objQxDepartmentTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxDepartmentType_UpdateRecordAsync(objQxDepartmentTypeEN: clsQxDepartmentTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxDepartmentTypeEN.sfUpdFldSetStr === undefined || objQxDepartmentTypeEN.sfUpdFldSetStr === null || objQxDepartmentTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxDepartmentTypeEN.departmentTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxDepartmentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param objQxDepartmentTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxDepartmentType_UpdateWithConditionAsync(objQxDepartmentTypeEN: clsQxDepartmentTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxDepartmentTypeEN.sfUpdFldSetStr === undefined || objQxDepartmentTypeEN.sfUpdFldSetStr === null || objQxDepartmentTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxDepartmentTypeEN.departmentTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);
objQxDepartmentTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxDepartmentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param objstrDepartmentTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxDepartmentType_IsExistRecordCache(objQxDepartmentTypeCond: clsQxDepartmentTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstCache();
if (arrQxDepartmentTypeObjLstCache == null) return false;
let arrQxDepartmentTypeSel = arrQxDepartmentTypeObjLstCache;
if (objQxDepartmentTypeCond.sfFldComparisonOp == null || objQxDepartmentTypeCond.sfFldComparisonOp == "") return arrQxDepartmentTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxDepartmentTypeCond.sfFldComparisonOp);
//console.log("clsQxDepartmentTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxDepartmentTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxDepartmentTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxDepartmentTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxDepartmentTypeCond), qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param strDepartmentTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxDepartmentType_IsExistCache(strDepartmentTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstCache();
if (arrQxDepartmentTypeObjLstCache == null) return false;
try
{
const arrQxDepartmentTypeSel = arrQxDepartmentTypeObjLstCache.filter(x => x.departmentTypeId == strDepartmentTypeId);
if (arrQxDepartmentTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strDepartmentTypeId, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strDepartmentTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxDepartmentType_IsExistAsync(strDepartmentTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strDepartmentTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
 * @param objQxDepartmentTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxDepartmentType_GetRecCountByCondCache(objQxDepartmentTypeCond: clsQxDepartmentTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxDepartmentTypeObjLstCache = await QxDepartmentType_GetObjLstCache();
if (arrQxDepartmentTypeObjLstCache == null) return 0;
let arrQxDepartmentTypeSel = arrQxDepartmentTypeObjLstCache;
if (objQxDepartmentTypeCond.sfFldComparisonOp == null || objQxDepartmentTypeCond.sfFldComparisonOp == "") return arrQxDepartmentTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxDepartmentTypeCond.sfFldComparisonOp);
//console.log("clsQxDepartmentTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxDepartmentTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxDepartmentTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxDepartmentTypeSel = arrQxDepartmentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxDepartmentTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxDepartmentTypeCond), qxDepartmentType_ConstructorName, strThisFuncName);
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
export  async function QxDepartmentType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxDepartmentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxDepartmentType_ConstructorName, strThisFuncName);
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
export  function QxDepartmentType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxDepartmentType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxDepartmentTypeEN._CurrTabName;
switch (clsQxDepartmentTypeEN.CacheModeId)
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
export  function QxDepartmentType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxDepartmentTypeEN._CurrTabName;
switch (clsQxDepartmentTypeEN.CacheModeId)
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
export  async function QxDepartmentType_BindDdl_DepartmentTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_DepartmentTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_DepartmentTypeIdInDivCache");
const arrObjLstSel = await QxDepartmentType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxDepartmentTypeEN.con_DepartmentTypeId, clsQxDepartmentTypeEN.con_DepartmentTypeName, "部门类型");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxDepartmentType_CheckPropertyNew(pobjQxDepartmentTypeEN: clsQxDepartmentTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[部门类型名]不能为空(In 部门类型)!(clsQxDepartmentTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeId) == false && GetStrLen(pobjQxDepartmentTypeEN.departmentTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[部门类型ID(departmentTypeId)]的长度不能超过2(In 部门类型(QxDepartmentType))!值:${pobjQxDepartmentTypeEN.departmentTypeId}(clsQxDepartmentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeName) == false && GetStrLen(pobjQxDepartmentTypeEN.departmentTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[部门类型名(departmentTypeName)]的长度不能超过50(In 部门类型(QxDepartmentType))!值:${pobjQxDepartmentTypeEN.departmentTypeName}(clsQxDepartmentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.memo) == false && GetStrLen(pobjQxDepartmentTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 部门类型(QxDepartmentType))!值:${pobjQxDepartmentTypeEN.memo}(clsQxDepartmentTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeId) == false && undefined !== pobjQxDepartmentTypeEN.departmentTypeId && tzDataType.isString(pobjQxDepartmentTypeEN.departmentTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[部门类型ID(departmentTypeId)]的值:[${pobjQxDepartmentTypeEN.departmentTypeId}], 非法,应该为字符型(In 部门类型(QxDepartmentType))!(clsQxDepartmentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeName) == false && undefined !== pobjQxDepartmentTypeEN.departmentTypeName && tzDataType.isString(pobjQxDepartmentTypeEN.departmentTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[部门类型名(departmentTypeName)]的值:[${pobjQxDepartmentTypeEN.departmentTypeName}], 非法,应该为字符型(In 部门类型(QxDepartmentType))!(clsQxDepartmentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.memo) == false && undefined !== pobjQxDepartmentTypeEN.memo && tzDataType.isString(pobjQxDepartmentTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxDepartmentTypeEN.memo}], 非法,应该为字符型(In 部门类型(QxDepartmentType))!(clsQxDepartmentTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxDepartmentType_CheckProperty4Update(pobjQxDepartmentTypeEN: clsQxDepartmentTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeId) == false && GetStrLen(pobjQxDepartmentTypeEN.departmentTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[部门类型ID(departmentTypeId)]的长度不能超过2(In 部门类型(QxDepartmentType))!值:${pobjQxDepartmentTypeEN.departmentTypeId}(clsQxDepartmentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeName) == false && GetStrLen(pobjQxDepartmentTypeEN.departmentTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[部门类型名(departmentTypeName)]的长度不能超过50(In 部门类型(QxDepartmentType))!值:${pobjQxDepartmentTypeEN.departmentTypeName}(clsQxDepartmentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.memo) == false && GetStrLen(pobjQxDepartmentTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 部门类型(QxDepartmentType))!值:${pobjQxDepartmentTypeEN.memo}(clsQxDepartmentTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeId) == false && undefined !== pobjQxDepartmentTypeEN.departmentTypeId && tzDataType.isString(pobjQxDepartmentTypeEN.departmentTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[部门类型ID(departmentTypeId)]的值:[${pobjQxDepartmentTypeEN.departmentTypeId}], 非法,应该为字符型(In 部门类型(QxDepartmentType))!(clsQxDepartmentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeName) == false && undefined !== pobjQxDepartmentTypeEN.departmentTypeName && tzDataType.isString(pobjQxDepartmentTypeEN.departmentTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[部门类型名(departmentTypeName)]的值:[${pobjQxDepartmentTypeEN.departmentTypeName}], 非法,应该为字符型(In 部门类型(QxDepartmentType))!(clsQxDepartmentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.memo) == false && undefined !== pobjQxDepartmentTypeEN.memo && tzDataType.isString(pobjQxDepartmentTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxDepartmentTypeEN.memo}], 非法,应该为字符型(In 部门类型(QxDepartmentType))!(clsQxDepartmentTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxDepartmentTypeEN.departmentTypeId) === true 
 || pobjQxDepartmentTypeEN.departmentTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[部门类型ID]不能为空(In 部门类型)!(clsQxDepartmentTypeBL:CheckProperty4Update)`);
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
export  function QxDepartmentType_GetJSONStrByObj (pobjQxDepartmentTypeEN: clsQxDepartmentTypeEN): string
{
pobjQxDepartmentTypeEN.sfUpdFldSetStr = pobjQxDepartmentTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxDepartmentTypeEN);
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
export  function QxDepartmentType_GetObjLstByJSONStr (strJSON: string): Array<clsQxDepartmentTypeEN>
{
let arrQxDepartmentTypeObjLst = new Array<clsQxDepartmentTypeEN>();
if (strJSON === "")
{
return arrQxDepartmentTypeObjLst;
}
try
{
arrQxDepartmentTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxDepartmentTypeObjLst;
}
return arrQxDepartmentTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxDepartmentTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxDepartmentType_GetObjLstByJSONObjLst (arrQxDepartmentTypeObjLstS: Array<clsQxDepartmentTypeEN>): Array<clsQxDepartmentTypeEN>
{
const arrQxDepartmentTypeObjLst = new Array<clsQxDepartmentTypeEN>();
for (const objInFor of arrQxDepartmentTypeObjLstS) {
const obj1 = QxDepartmentType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxDepartmentTypeObjLst.push(obj1);
}
return arrQxDepartmentTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxDepartmentType_GetObjByJSONStr (strJSON: string): clsQxDepartmentTypeEN
{
let pobjQxDepartmentTypeEN = new clsQxDepartmentTypeEN();
if (strJSON === "")
{
return pobjQxDepartmentTypeEN;
}
try
{
pobjQxDepartmentTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxDepartmentTypeEN;
}
return pobjQxDepartmentTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxDepartmentType_GetCombineCondition(objQxDepartmentTypeCond: clsQxDepartmentTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxDepartmentTypeCond.dicFldComparisonOp, clsQxDepartmentTypeEN.con_DepartmentTypeId) == true)
{
const strComparisonOpDepartmentTypeId:string = objQxDepartmentTypeCond.dicFldComparisonOp[clsQxDepartmentTypeEN.con_DepartmentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxDepartmentTypeEN.con_DepartmentTypeId, objQxDepartmentTypeCond.departmentTypeId, strComparisonOpDepartmentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxDepartmentTypeCond.dicFldComparisonOp, clsQxDepartmentTypeEN.con_DepartmentTypeName) == true)
{
const strComparisonOpDepartmentTypeName:string = objQxDepartmentTypeCond.dicFldComparisonOp[clsQxDepartmentTypeEN.con_DepartmentTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxDepartmentTypeEN.con_DepartmentTypeName, objQxDepartmentTypeCond.departmentTypeName, strComparisonOpDepartmentTypeName);
}
if (Object.prototype.hasOwnProperty.call(objQxDepartmentTypeCond.dicFldComparisonOp, clsQxDepartmentTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxDepartmentTypeCond.dicFldComparisonOp[clsQxDepartmentTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxDepartmentTypeEN.con_Memo, objQxDepartmentTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxDepartmentTypeENS:源对象
 * @param objQxDepartmentTypeENT:目标对象
*/
export  function QxDepartmentType_GetObjFromJsonObj(objQxDepartmentTypeENS: clsQxDepartmentTypeEN): clsQxDepartmentTypeEN 
{
 const objQxDepartmentTypeENT: clsQxDepartmentTypeEN = new clsQxDepartmentTypeEN();
ObjectAssign(objQxDepartmentTypeENT, objQxDepartmentTypeENS);
 return objQxDepartmentTypeENT;
}