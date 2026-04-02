
 /**
 * 类名:clsRsStaffTypeWApi
 * 表名:RsStaffType(01120101)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/27 16:36:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 职工类型(RsStaffType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年12月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsRsStaffTypeEN } from "@/ts/L0Entity/SysPara/clsRsStaffTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const rsStaffType_Controller = "RsStaffTypeApi";
 export const rsStaffType_ConstructorName = "rsStaffType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdStaffType:关键字
 * @returns 对象
 **/
export  async function RsStaffType_GetObjByIdStaffTypeAsync(strIdStaffType: string): Promise<clsRsStaffTypeEN|null>  
{
const strThisFuncName = "GetObjByIdStaffTypeAsync";

if (IsNullOrEmpty(strIdStaffType) == true)
{
  const strMsg = Format("参数:[strIdStaffType]不能为空!(In clsRsStaffTypeWApi.GetObjByIdStaffTypeAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStaffType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdStaffType]的长度:[{0}]不正确!(clsRsStaffTypeWApi.GetObjByIdStaffTypeAsync)", strIdStaffType.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdStaffType";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdStaffType,
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
const objRsStaffType = RsStaffType_GetObjFromJsonObj(returnObj);
return objRsStaffType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param strIdStaffType:所给的关键字
 * @returns 对象
*/
export  async function RsStaffType_GetObjByIdStaffTypeCache(strIdStaffType: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdStaffTypeCache";

if (IsNullOrEmpty(strIdStaffType) == true)
{
  const strMsg = Format("参数:[strIdStaffType]不能为空!(In clsRsStaffTypeWApi.GetObjByIdStaffTypeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStaffType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdStaffType]的长度:[{0}]不正确!(clsRsStaffTypeWApi.GetObjByIdStaffTypeCache)", strIdStaffType.length);
console.error(strMsg);
throw (strMsg);
}
const arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstCache();
try
{
const arrRsStaffTypeSel = arrRsStaffTypeObjLstCache.filter(x => 
 x.idStaffType == strIdStaffType );
let objRsStaffType: clsRsStaffTypeEN;
if (arrRsStaffTypeSel.length > 0)
{
objRsStaffType = arrRsStaffTypeSel[0];
return objRsStaffType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objRsStaffTypeConst = await RsStaffType_GetObjByIdStaffTypeAsync(strIdStaffType);
if (objRsStaffTypeConst != null)
{
RsStaffType_ReFreshThisCache();
return objRsStaffTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdStaffType, rsStaffType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdStaffType:所给的关键字
 * @returns 对象
*/
export  async function RsStaffType_GetObjByIdStaffTypelocalStorage(strIdStaffType: string) {
const strThisFuncName = "GetObjByIdStaffTypelocalStorage";

if (IsNullOrEmpty(strIdStaffType) == true)
{
  const strMsg = Format("参数:[strIdStaffType]不能为空!(In clsRsStaffTypeWApi.GetObjByIdStaffTypelocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStaffType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdStaffType]的长度:[{0}]不正确!(clsRsStaffTypeWApi.GetObjByIdStaffTypelocalStorage)", strIdStaffType.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsRsStaffTypeEN._CurrTabName, strIdStaffType);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objRsStaffTypeCache: clsRsStaffTypeEN = JSON.parse(strTempObj);
return objRsStaffTypeCache;
}
try
{
const objRsStaffType = await RsStaffType_GetObjByIdStaffTypeAsync(strIdStaffType);
if (objRsStaffType != null)
{
localStorage.setItem(strKey, JSON.stringify(objRsStaffType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objRsStaffType;
}
return objRsStaffType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdStaffType, rsStaffType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objRsStaffType:所给的对象
 * @returns 对象
*/
export  async function RsStaffType_UpdateObjInLstCache(objRsStaffType: clsRsStaffTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstCache();
const obj = arrRsStaffTypeObjLstCache.find(x => 
x.idStaffType == objRsStaffType.idStaffType);
if (obj != null)
{
objRsStaffType.idStaffType = obj.idStaffType;
ObjectAssign( obj, objRsStaffType);
}
else
{
arrRsStaffTypeObjLstCache.push(objRsStaffType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, rsStaffType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdStaffType:所给的关键字
 * @returns 对象
*/
export  async function RsStaffType_GetNameByIdStaffTypeCache(strIdStaffType: string) {

if (IsNullOrEmpty(strIdStaffType) == true)
{
  const strMsg = Format("参数:[strIdStaffType]不能为空!(In clsRsStaffTypeWApi.GetNameByIdStaffTypeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStaffType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdStaffType]的长度:[{0}]不正确!(clsRsStaffTypeWApi.GetNameByIdStaffTypeCache)", strIdStaffType.length);
console.error(strMsg);
throw (strMsg);
}
const arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstCache();
if (arrRsStaffTypeObjLstCache == null) return "";
try
{
const arrRsStaffTypeSel = arrRsStaffTypeObjLstCache.filter(x => 
 x.idStaffType == strIdStaffType );
let objRsStaffType: clsRsStaffTypeEN;
if (arrRsStaffTypeSel.length > 0)
{
objRsStaffType = arrRsStaffTypeSel[0];
return objRsStaffType.staffTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdStaffType);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function RsStaffType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsRsStaffTypeEN.con_IdStaffType)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsRsStaffTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsRsStaffTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdStaffType = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objRsStaffType = await RsStaffType_GetObjByIdStaffTypeCache(strIdStaffType );
if (objRsStaffType == null) return "";
if (objRsStaffType.GetFldValue(strOutFldName) == null) return "";
return objRsStaffType.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function RsStaffType_SortFunDefa(a:clsRsStaffTypeEN , b:clsRsStaffTypeEN): number 
{
return a.idStaffType.localeCompare(b.idStaffType);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function RsStaffType_SortFunDefa2Fld(a:clsRsStaffTypeEN , b:clsRsStaffTypeEN): number 
{
if (a.staffTypeId == b.staffTypeId) return a.staffTypeName.localeCompare(b.staffTypeName);
else return a.staffTypeId.localeCompare(b.staffTypeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function RsStaffType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRsStaffTypeEN.con_IdStaffType:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
return a.idStaffType.localeCompare(b.idStaffType);
}
case clsRsStaffTypeEN.con_StaffTypeId:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
return a.staffTypeId.localeCompare(b.staffTypeId);
}
case clsRsStaffTypeEN.con_StaffTypeName:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
return a.staffTypeName.localeCompare(b.staffTypeName);
}
case clsRsStaffTypeEN.con_ModifyDate:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsRsStaffTypeEN.con_ModifyUserId:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsStaffType]中不存在!(in ${ rsStaffType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRsStaffTypeEN.con_IdStaffType:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
return b.idStaffType.localeCompare(a.idStaffType);
}
case clsRsStaffTypeEN.con_StaffTypeId:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
return b.staffTypeId.localeCompare(a.staffTypeId);
}
case clsRsStaffTypeEN.con_StaffTypeName:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
return b.staffTypeName.localeCompare(a.staffTypeName);
}
case clsRsStaffTypeEN.con_ModifyDate:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsRsStaffTypeEN.con_ModifyUserId:
return (a: clsRsStaffTypeEN, b: clsRsStaffTypeEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsStaffType]中不存在!(in ${ rsStaffType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function RsStaffType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRsStaffTypeEN.con_IdStaffType:
return (obj: clsRsStaffTypeEN) => {
return obj.idStaffType === value;
}
case clsRsStaffTypeEN.con_StaffTypeId:
return (obj: clsRsStaffTypeEN) => {
return obj.staffTypeId === value;
}
case clsRsStaffTypeEN.con_StaffTypeName:
return (obj: clsRsStaffTypeEN) => {
return obj.staffTypeName === value;
}
case clsRsStaffTypeEN.con_ModifyDate:
return (obj: clsRsStaffTypeEN) => {
return obj.modifyDate === value;
}
case clsRsStaffTypeEN.con_ModifyUserId:
return (obj: clsRsStaffTypeEN) => {
return obj.modifyUserId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsStaffType]中不存在!(in ${ rsStaffType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function RsStaffType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsRsStaffTypeEN.con_IdStaffType)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrRsStaffType = await RsStaffType_GetObjLstCache();
if (arrRsStaffType == null) return [];
let arrRsStaffTypeSel = arrRsStaffType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrRsStaffTypeSel.length == 0) return [];
return arrRsStaffTypeSel.map(x=>x.idStaffType);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsStaffType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_GetFirstObjAsync(strWhereCond: string): Promise<clsRsStaffTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const objRsStaffType = RsStaffType_GetObjFromJsonObj(returnObj);
return objRsStaffType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsStaffTypeEN._CurrTabName;
if (IsNullOrEmpty(clsRsStaffTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsStaffTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrRsStaffTypeExObjLstCache: Array<clsRsStaffTypeEN> = CacheHelper.Get(strKey);
const arrRsStaffTypeObjLstT = RsStaffType_GetObjLstByJSONObjLst(arrRsStaffTypeExObjLstCache);
return arrRsStaffTypeObjLstT;
}
try
{
const arrRsStaffTypeExObjLst = await RsStaffType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrRsStaffTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsStaffTypeExObjLst.length);
console.log(strInfo);
return arrRsStaffTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsStaffType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsStaffType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsStaffTypeEN._CurrTabName;
if (IsNullOrEmpty(clsRsStaffTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsStaffTypeEN.CacheAddiCondition);
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
const arrRsStaffTypeExObjLstCache: Array<clsRsStaffTypeEN> = JSON.parse(strTempObjLst);
const arrRsStaffTypeObjLstT = RsStaffType_GetObjLstByJSONObjLst(arrRsStaffTypeExObjLstCache);
return arrRsStaffTypeObjLstT;
}
try
{
const arrRsStaffTypeExObjLst = await RsStaffType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrRsStaffTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsStaffTypeExObjLst.length);
console.log(strInfo);
return arrRsStaffTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsStaffType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsStaffType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRsStaffTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrRsStaffTypeObjLstCache: Array<clsRsStaffTypeEN> = JSON.parse(strTempObjLst);
return arrRsStaffTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function RsStaffType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRsStaffTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsStaffType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsStaffType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsStaffTypeEN._CurrTabName;
if (IsNullOrEmpty(clsRsStaffTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsStaffTypeEN.CacheAddiCondition);
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
const arrRsStaffTypeExObjLstCache: Array<clsRsStaffTypeEN> = JSON.parse(strTempObjLst);
const arrRsStaffTypeObjLstT = RsStaffType_GetObjLstByJSONObjLst(arrRsStaffTypeExObjLstCache);
return arrRsStaffTypeObjLstT;
}
try
{
const arrRsStaffTypeExObjLst = await RsStaffType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrRsStaffTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsStaffTypeExObjLst.length);
console.log(strInfo);
return arrRsStaffTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsStaffType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsStaffType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRsStaffTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrRsStaffTypeObjLstCache: Array<clsRsStaffTypeEN> = JSON.parse(strTempObjLst);
return arrRsStaffTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsStaffType_GetObjLstCache(): Promise<Array<clsRsStaffTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrRsStaffTypeObjLstCache;
switch (clsRsStaffTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstClientCache();
break;
default:
arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstClientCache();
break;
}
return arrRsStaffTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsStaffType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrRsStaffTypeObjLstCache;
switch (clsRsStaffTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrRsStaffTypeObjLstCache = null;
break;
default:
arrRsStaffTypeObjLstCache = null;
break;
}
return arrRsStaffTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdStaffTypeCond:条件对象
 * @returns 对象列表子集
*/
export  async function RsStaffType_GetSubObjLstCache(objRsStaffTypeCond: clsRsStaffTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstCache();
let arrRsStaffTypeSel = arrRsStaffTypeObjLstCache;
if (objRsStaffTypeCond.sfFldComparisonOp == null || objRsStaffTypeCond.sfFldComparisonOp == "") return arrRsStaffTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsStaffTypeCond.sfFldComparisonOp);
//console.log("clsRsStaffTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsStaffTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsStaffTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRsStaffTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objRsStaffTypeCond), rsStaffType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRsStaffTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdStaffType:关键字列表
 * @returns 对象列表
 **/
export  async function RsStaffType_GetObjLstByIdStaffTypeLstAsync(arrIdStaffType: Array<string>): Promise<Array<clsRsStaffTypeEN>>  
{
const strThisFuncName = "GetObjLstByIdStaffTypeLstAsync";
const strAction = "GetObjLstByIdStaffTypeLst";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdStaffType, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsStaffType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsStaffType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param arrstrIdStaffTypeLst:关键字列表
 * @returns 对象列表
*/
export  async function RsStaffType_GetObjLstByIdStaffTypeLstCache(arrIdStaffTypeLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdStaffTypeLstCache";
try
{
const arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstCache();
const arrRsStaffTypeSel = arrRsStaffTypeObjLstCache.filter(x => arrIdStaffTypeLst.indexOf(x.idStaffType)>-1);
return arrRsStaffTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdStaffTypeLst.join(","), rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRsStaffTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsStaffType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsStaffType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRsStaffTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsStaffType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsStaffType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsRsStaffTypeEN>();
const arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstCache();
if (arrRsStaffTypeObjLstCache.length == 0) return arrRsStaffTypeObjLstCache;
let arrRsStaffTypeSel = arrRsStaffTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objRsStaffTypeCond = new clsRsStaffTypeEN();
ObjectAssign(objRsStaffTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsRsStaffTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsStaffTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRsStaffTypeSel.length == 0) return arrRsStaffTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrRsStaffTypeSel = arrRsStaffTypeSel.sort(RsStaffType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrRsStaffTypeSel = arrRsStaffTypeSel.sort(objPagerPara.sortFun);
}
arrRsStaffTypeSel = arrRsStaffTypeSel.slice(intStart, intEnd);     
return arrRsStaffTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, rsStaffType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRsStaffTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function RsStaffType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRsStaffTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRsStaffTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsStaffType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsStaffType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param strIdStaffType:关键字
 * @returns 获取删除的结果
 **/
export  async function RsStaffType_DelRecordAsync(strIdStaffType: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdStaffType);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param arrIdStaffType:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function RsStaffType_DelRsStaffTypesAsync(arrIdStaffType: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRsStaffTypesAsync";
const strAction = "DelRsStaffTypes";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdStaffType, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_DelRsStaffTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRsStaffTypesByCondAsync";
const strAction = "DelRsStaffTypesByCond";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param objRsStaffTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsStaffType_AddNewRecordAsync(objRsStaffTypeEN: clsRsStaffTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRsStaffTypeEN.idStaffType === null || objRsStaffTypeEN.idStaffType === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRsStaffTypeEN);
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsStaffTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param objRsStaffTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsStaffType_AddNewRecordWithMaxIdAsync(objRsStaffTypeEN: clsRsStaffTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsStaffTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param objRsStaffTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RsStaffType_AddNewRecordWithReturnKeyAsync(objRsStaffTypeEN: clsRsStaffTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsStaffTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param objRsStaffTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RsStaffType_UpdateRecordAsync(objRsStaffTypeEN: clsRsStaffTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRsStaffTypeEN.sfUpdFldSetStr === undefined || objRsStaffTypeEN.sfUpdFldSetStr === null || objRsStaffTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsStaffTypeEN.idStaffType);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsStaffTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param objRsStaffTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsStaffType_UpdateWithConditionAsync(objRsStaffTypeEN: clsRsStaffTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRsStaffTypeEN.sfUpdFldSetStr === undefined || objRsStaffTypeEN.sfUpdFldSetStr === null || objRsStaffTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsStaffTypeEN.idStaffType);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);
objRsStaffTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsStaffTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param objstrIdStaffTypeCond:条件对象
 * @returns 对象列表子集
*/
export  async function RsStaffType_IsExistRecordCache(objRsStaffTypeCond: clsRsStaffTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstCache();
if (arrRsStaffTypeObjLstCache == null) return false;
let arrRsStaffTypeSel = arrRsStaffTypeObjLstCache;
if (objRsStaffTypeCond.sfFldComparisonOp == null || objRsStaffTypeCond.sfFldComparisonOp == "") return arrRsStaffTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsStaffTypeCond.sfFldComparisonOp);
//console.log("clsRsStaffTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsStaffTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsStaffTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRsStaffTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objRsStaffTypeCond), rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param strIdStaffType:所给的关键字
 * @returns 对象
*/
export  async function RsStaffType_IsExistCache(strIdStaffType:string) {
const strThisFuncName = "IsExistCache";
const arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstCache();
if (arrRsStaffTypeObjLstCache == null) return false;
try
{
const arrRsStaffTypeSel = arrRsStaffTypeObjLstCache.filter(x => x.idStaffType == strIdStaffType);
if (arrRsStaffTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdStaffType, rsStaffType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdStaffType:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RsStaffType_IsExistAsync(strIdStaffType: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdStaffType
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
 * @param objRsStaffTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function RsStaffType_GetRecCountByCondCache(objRsStaffTypeCond: clsRsStaffTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrRsStaffTypeObjLstCache = await RsStaffType_GetObjLstCache();
if (arrRsStaffTypeObjLstCache == null) return 0;
let arrRsStaffTypeSel = arrRsStaffTypeObjLstCache;
if (objRsStaffTypeCond.sfFldComparisonOp == null || objRsStaffTypeCond.sfFldComparisonOp == "") return arrRsStaffTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsStaffTypeCond.sfFldComparisonOp);
//console.log("clsRsStaffTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsStaffTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsStaffTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsStaffTypeSel = arrRsStaffTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRsStaffTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objRsStaffTypeCond), rsStaffType_ConstructorName, strThisFuncName);
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
export  async function RsStaffType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(rsStaffType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsStaffType_ConstructorName, strThisFuncName);
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
export  function RsStaffType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function RsStaffType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsRsStaffTypeEN._CurrTabName;
switch (clsRsStaffTypeEN.CacheModeId)
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
export  function RsStaffType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsRsStaffTypeEN._CurrTabName;
switch (clsRsStaffTypeEN.CacheModeId)
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
export  async function RsStaffType_BindDdl_IdStaffTypeInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdStaffTypeInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdStaffTypeInDivCache");
const arrObjLstSel = await RsStaffType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsRsStaffTypeEN.con_IdStaffType, clsRsStaffTypeEN.con_StaffTypeName, "职工类型");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsStaffType_CheckPropertyNew(pobjRsStaffTypeEN: clsRsStaffTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeId) === true )
{
 throw new Error("(errid:Watl000411)字段[职工类型Id]不能为空(In 职工类型)!(clsRsStaffTypeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeName) === true )
{
 throw new Error("(errid:Watl000411)字段[职工类型名称]不能为空(In 职工类型)!(clsRsStaffTypeBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsStaffTypeEN.idStaffType) == false && GetStrLen(pobjRsStaffTypeEN.idStaffType) > 4)
{
 throw new Error("(errid:Watl000413)字段[职工类型流水号(idStaffType)]的长度不能超过4(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.idStaffType)(clsRsStaffTypeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeId) == false && GetStrLen(pobjRsStaffTypeEN.staffTypeId) > 4)
{
 throw new Error("(errid:Watl000413)字段[职工类型Id(staffTypeId)]的长度不能超过4(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.staffTypeId)(clsRsStaffTypeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeName) == false && GetStrLen(pobjRsStaffTypeEN.staffTypeName) > 30)
{
 throw new Error("(errid:Watl000413)字段[职工类型名称(staffTypeName)]的长度不能超过30(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.staffTypeName)(clsRsStaffTypeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.modifyDate) == false && GetStrLen(pobjRsStaffTypeEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.modifyDate)(clsRsStaffTypeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.modifyUserId) == false && GetStrLen(pobjRsStaffTypeEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.modifyUserId)(clsRsStaffTypeBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsStaffTypeEN.idStaffType) == false && undefined !== pobjRsStaffTypeEN.idStaffType && tzDataType.isString(pobjRsStaffTypeEN.idStaffType) === false)
{
 throw new Error("(errid:Watl000414)字段[职工类型流水号(idStaffType)]的值:[$(pobjRsStaffTypeEN.idStaffType)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeId) == false && undefined !== pobjRsStaffTypeEN.staffTypeId && tzDataType.isString(pobjRsStaffTypeEN.staffTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[职工类型Id(staffTypeId)]的值:[$(pobjRsStaffTypeEN.staffTypeId)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeName) == false && undefined !== pobjRsStaffTypeEN.staffTypeName && tzDataType.isString(pobjRsStaffTypeEN.staffTypeName) === false)
{
 throw new Error("(errid:Watl000414)字段[职工类型名称(staffTypeName)]的值:[$(pobjRsStaffTypeEN.staffTypeName)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.modifyDate) == false && undefined !== pobjRsStaffTypeEN.modifyDate && tzDataType.isString(pobjRsStaffTypeEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjRsStaffTypeEN.modifyDate)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.modifyUserId) == false && undefined !== pobjRsStaffTypeEN.modifyUserId && tzDataType.isString(pobjRsStaffTypeEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjRsStaffTypeEN.modifyUserId)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsStaffType_CheckProperty4Update(pobjRsStaffTypeEN: clsRsStaffTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsStaffTypeEN.idStaffType) == false && GetStrLen(pobjRsStaffTypeEN.idStaffType) > 4)
{
 throw new Error("(errid:Watl000416)字段[职工类型流水号(idStaffType)]的长度不能超过4(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.idStaffType)(clsRsStaffTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeId) == false && GetStrLen(pobjRsStaffTypeEN.staffTypeId) > 4)
{
 throw new Error("(errid:Watl000416)字段[职工类型Id(staffTypeId)]的长度不能超过4(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.staffTypeId)(clsRsStaffTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeName) == false && GetStrLen(pobjRsStaffTypeEN.staffTypeName) > 30)
{
 throw new Error("(errid:Watl000416)字段[职工类型名称(staffTypeName)]的长度不能超过30(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.staffTypeName)(clsRsStaffTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.modifyDate) == false && GetStrLen(pobjRsStaffTypeEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.modifyDate)(clsRsStaffTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.modifyUserId) == false && GetStrLen(pobjRsStaffTypeEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 职工类型(RsStaffType))!值:$(pobjRsStaffTypeEN.modifyUserId)(clsRsStaffTypeBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsStaffTypeEN.idStaffType) == false && undefined !== pobjRsStaffTypeEN.idStaffType && tzDataType.isString(pobjRsStaffTypeEN.idStaffType) === false)
{
 throw new Error("(errid:Watl000417)字段[职工类型流水号(idStaffType)]的值:[$(pobjRsStaffTypeEN.idStaffType)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeId) == false && undefined !== pobjRsStaffTypeEN.staffTypeId && tzDataType.isString(pobjRsStaffTypeEN.staffTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[职工类型Id(staffTypeId)]的值:[$(pobjRsStaffTypeEN.staffTypeId)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.staffTypeName) == false && undefined !== pobjRsStaffTypeEN.staffTypeName && tzDataType.isString(pobjRsStaffTypeEN.staffTypeName) === false)
{
 throw new Error("(errid:Watl000417)字段[职工类型名称(staffTypeName)]的值:[$(pobjRsStaffTypeEN.staffTypeName)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.modifyDate) == false && undefined !== pobjRsStaffTypeEN.modifyDate && tzDataType.isString(pobjRsStaffTypeEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjRsStaffTypeEN.modifyDate)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsStaffTypeEN.modifyUserId) == false && undefined !== pobjRsStaffTypeEN.modifyUserId && tzDataType.isString(pobjRsStaffTypeEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjRsStaffTypeEN.modifyUserId)], 非法,应该为字符型(In 职工类型(RsStaffType))!(clsRsStaffTypeBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRsStaffTypeEN.idStaffType) === true )
{
 throw new Error("(errid:Watl000064)字段[职工类型流水号]不能为空(In 职工类型)!(clsRsStaffTypeBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RsStaffType_GetJSONStrByObj (pobjRsStaffTypeEN: clsRsStaffTypeEN): string
{
pobjRsStaffTypeEN.sfUpdFldSetStr = pobjRsStaffTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRsStaffTypeEN);
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
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function RsStaffType_GetObjLstByJSONStr (strJSON: string): Array<clsRsStaffTypeEN>
{
let arrRsStaffTypeObjLst = new Array<clsRsStaffTypeEN>();
if (strJSON === "")
{
return arrRsStaffTypeObjLst;
}
try
{
arrRsStaffTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRsStaffTypeObjLst;
}
return arrRsStaffTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRsStaffTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RsStaffType_GetObjLstByJSONObjLst (arrRsStaffTypeObjLstS: Array<clsRsStaffTypeEN>): Array<clsRsStaffTypeEN>
{
const arrRsStaffTypeObjLst = new Array<clsRsStaffTypeEN>();
for (const objInFor of arrRsStaffTypeObjLstS) {
const obj1 = RsStaffType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRsStaffTypeObjLst.push(obj1);
}
return arrRsStaffTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RsStaffType_GetObjByJSONStr (strJSON: string): clsRsStaffTypeEN
{
let pobjRsStaffTypeEN = new clsRsStaffTypeEN();
if (strJSON === "")
{
return pobjRsStaffTypeEN;
}
try
{
pobjRsStaffTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRsStaffTypeEN;
}
return pobjRsStaffTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RsStaffType_GetCombineCondition(objRsStaffTypeCond: clsRsStaffTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRsStaffTypeCond.dicFldComparisonOp, clsRsStaffTypeEN.con_IdStaffType) == true)
{
const strComparisonOpIdStaffType:string = objRsStaffTypeCond.dicFldComparisonOp[clsRsStaffTypeEN.con_IdStaffType];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsStaffTypeEN.con_IdStaffType, objRsStaffTypeCond.idStaffType, strComparisonOpIdStaffType);
}
if (Object.prototype.hasOwnProperty.call(objRsStaffTypeCond.dicFldComparisonOp, clsRsStaffTypeEN.con_StaffTypeId) == true)
{
const strComparisonOpStaffTypeId:string = objRsStaffTypeCond.dicFldComparisonOp[clsRsStaffTypeEN.con_StaffTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsStaffTypeEN.con_StaffTypeId, objRsStaffTypeCond.staffTypeId, strComparisonOpStaffTypeId);
}
if (Object.prototype.hasOwnProperty.call(objRsStaffTypeCond.dicFldComparisonOp, clsRsStaffTypeEN.con_StaffTypeName) == true)
{
const strComparisonOpStaffTypeName:string = objRsStaffTypeCond.dicFldComparisonOp[clsRsStaffTypeEN.con_StaffTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsStaffTypeEN.con_StaffTypeName, objRsStaffTypeCond.staffTypeName, strComparisonOpStaffTypeName);
}
if (Object.prototype.hasOwnProperty.call(objRsStaffTypeCond.dicFldComparisonOp, clsRsStaffTypeEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objRsStaffTypeCond.dicFldComparisonOp[clsRsStaffTypeEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsStaffTypeEN.con_ModifyDate, objRsStaffTypeCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objRsStaffTypeCond.dicFldComparisonOp, clsRsStaffTypeEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objRsStaffTypeCond.dicFldComparisonOp[clsRsStaffTypeEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsStaffTypeEN.con_ModifyUserId, objRsStaffTypeCond.modifyUserId, strComparisonOpModifyUserId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRsStaffTypeENS:源对象
 * @param objRsStaffTypeENT:目标对象
*/
export  function RsStaffType_CopyObjTo(objRsStaffTypeENS: clsRsStaffTypeEN , objRsStaffTypeENT: clsRsStaffTypeEN ): void 
{
objRsStaffTypeENT.idStaffType = objRsStaffTypeENS.idStaffType; //职工类型流水号
objRsStaffTypeENT.staffTypeId = objRsStaffTypeENS.staffTypeId; //职工类型Id
objRsStaffTypeENT.staffTypeName = objRsStaffTypeENS.staffTypeName; //职工类型名称
objRsStaffTypeENT.modifyDate = objRsStaffTypeENS.modifyDate; //修改日期
objRsStaffTypeENT.modifyUserId = objRsStaffTypeENS.modifyUserId; //修改人
objRsStaffTypeENT.sfUpdFldSetStr = objRsStaffTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRsStaffTypeENS:源对象
 * @param objRsStaffTypeENT:目标对象
*/
export  function RsStaffType_GetObjFromJsonObj(objRsStaffTypeENS: clsRsStaffTypeEN): clsRsStaffTypeEN 
{
 const objRsStaffTypeENT: clsRsStaffTypeEN = new clsRsStaffTypeEN();
ObjectAssign(objRsStaffTypeENT, objRsStaffTypeENS);
 return objRsStaffTypeENT;
}