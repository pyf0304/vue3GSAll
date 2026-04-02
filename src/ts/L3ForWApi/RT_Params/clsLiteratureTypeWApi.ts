
 /**
 * 类名:clsLiteratureTypeWApi
 * 表名:LiteratureType(01120557)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/26 02:02:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培参数(RT_Params)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 文献类型(LiteratureType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月26日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsLiteratureTypeEN } from "@/ts/L0Entity/RT_Params/clsLiteratureTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const literatureType_Controller = "LiteratureTypeApi";
 export const literatureType_ConstructorName = "literatureType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strLiteratureTypeId:关键字
 * @returns 对象
 **/
export  async function LiteratureType_GetObjByLiteratureTypeIdAsync(strLiteratureTypeId: string): Promise<clsLiteratureTypeEN|null>  
{
const strThisFuncName = "GetObjByLiteratureTypeIdAsync";

if (IsNullOrEmpty(strLiteratureTypeId) == true)
{
  const strMsg = Format("参数:[strLiteratureTypeId]不能为空!(In clsLiteratureTypeWApi.GetObjByLiteratureTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strLiteratureTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strLiteratureTypeId]的长度:[{0}]不正确!(clsLiteratureTypeWApi.GetObjByLiteratureTypeIdAsync)", strLiteratureTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByLiteratureTypeId";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strLiteratureTypeId,
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
const objLiteratureType = LiteratureType_GetObjFromJsonObj(returnObj);
return objLiteratureType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param strLiteratureTypeId:所给的关键字
 * @returns 对象
*/
export  async function LiteratureType_GetObjByLiteratureTypeIdCache(strLiteratureTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByLiteratureTypeIdCache";

if (IsNullOrEmpty(strLiteratureTypeId) == true)
{
  const strMsg = Format("参数:[strLiteratureTypeId]不能为空!(In clsLiteratureTypeWApi.GetObjByLiteratureTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strLiteratureTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strLiteratureTypeId]的长度:[{0}]不正确!(clsLiteratureTypeWApi.GetObjByLiteratureTypeIdCache)", strLiteratureTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstCache();
try
{
const arrLiteratureTypeSel = arrLiteratureTypeObjLstCache.filter(x => 
 x.literatureTypeId == strLiteratureTypeId );
let objLiteratureType: clsLiteratureTypeEN;
if (arrLiteratureTypeSel.length > 0)
{
objLiteratureType = arrLiteratureTypeSel[0];
return objLiteratureType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objLiteratureTypeConst = await LiteratureType_GetObjByLiteratureTypeIdAsync(strLiteratureTypeId);
if (objLiteratureTypeConst != null)
{
LiteratureType_ReFreshThisCache();
return objLiteratureTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strLiteratureTypeId, literatureType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strLiteratureTypeId:所给的关键字
 * @returns 对象
*/
export  async function LiteratureType_GetObjByLiteratureTypeIdlocalStorage(strLiteratureTypeId: string) {
const strThisFuncName = "GetObjByLiteratureTypeIdlocalStorage";

if (IsNullOrEmpty(strLiteratureTypeId) == true)
{
  const strMsg = Format("参数:[strLiteratureTypeId]不能为空!(In clsLiteratureTypeWApi.GetObjByLiteratureTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strLiteratureTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strLiteratureTypeId]的长度:[{0}]不正确!(clsLiteratureTypeWApi.GetObjByLiteratureTypeIdlocalStorage)", strLiteratureTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsLiteratureTypeEN._CurrTabName, strLiteratureTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objLiteratureTypeCache: clsLiteratureTypeEN = JSON.parse(strTempObj);
return objLiteratureTypeCache;
}
try
{
const objLiteratureType = await LiteratureType_GetObjByLiteratureTypeIdAsync(strLiteratureTypeId);
if (objLiteratureType != null)
{
localStorage.setItem(strKey, JSON.stringify(objLiteratureType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objLiteratureType;
}
return objLiteratureType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strLiteratureTypeId, literatureType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objLiteratureType:所给的对象
 * @returns 对象
*/
export  async function LiteratureType_UpdateObjInLstCache(objLiteratureType: clsLiteratureTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstCache();
const obj = arrLiteratureTypeObjLstCache.find(x => 
x.literatureTypeId == objLiteratureType.literatureTypeId);
if (obj != null)
{
objLiteratureType.literatureTypeId = obj.literatureTypeId;
ObjectAssign( obj, objLiteratureType);
}
else
{
arrLiteratureTypeObjLstCache.push(objLiteratureType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, literatureType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strLiteratureTypeId:所给的关键字
 * @returns 对象
*/
export  async function LiteratureType_GetNameByLiteratureTypeIdCache(strLiteratureTypeId: string) {

if (IsNullOrEmpty(strLiteratureTypeId) == true)
{
  const strMsg = Format("参数:[strLiteratureTypeId]不能为空!(In clsLiteratureTypeWApi.GetNameByLiteratureTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strLiteratureTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strLiteratureTypeId]的长度:[{0}]不正确!(clsLiteratureTypeWApi.GetNameByLiteratureTypeIdCache)", strLiteratureTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstCache();
if (arrLiteratureTypeObjLstCache == null) return "";
try
{
const arrLiteratureTypeSel = arrLiteratureTypeObjLstCache.filter(x => 
 x.literatureTypeId == strLiteratureTypeId );
let objLiteratureType: clsLiteratureTypeEN;
if (arrLiteratureTypeSel.length > 0)
{
objLiteratureType = arrLiteratureTypeSel[0];
return objLiteratureType.literatureTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strLiteratureTypeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function LiteratureType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsLiteratureTypeEN.con_LiteratureTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsLiteratureTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsLiteratureTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strLiteratureTypeId = strInValue;
if (IsNullOrEmpty(strLiteratureTypeId) == true)
{
return "";
}
const objLiteratureType = await LiteratureType_GetObjByLiteratureTypeIdCache(strLiteratureTypeId );
if (objLiteratureType == null) return "";
if (objLiteratureType.GetFldValue(strOutFldName) == null) return "";
return objLiteratureType.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function LiteratureType_SortFunDefa(a:clsLiteratureTypeEN , b:clsLiteratureTypeEN): number 
{
return a.literatureTypeId.localeCompare(b.literatureTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function LiteratureType_SortFunDefa2Fld(a:clsLiteratureTypeEN , b:clsLiteratureTypeEN): number 
{
if (a.literatureTypeName == b.literatureTypeName) return a.literatureTypeENName.localeCompare(b.literatureTypeENName);
else return a.literatureTypeName.localeCompare(b.literatureTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function LiteratureType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsLiteratureTypeEN.con_LiteratureTypeId:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
return a.literatureTypeId.localeCompare(b.literatureTypeId);
}
case clsLiteratureTypeEN.con_LiteratureTypeName:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
return a.literatureTypeName.localeCompare(b.literatureTypeName);
}
case clsLiteratureTypeEN.con_LiteratureTypeENName:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
return a.literatureTypeENName.localeCompare(b.literatureTypeENName);
}
case clsLiteratureTypeEN.con_UpdUserId:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsLiteratureTypeEN.con_UpdDate:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[LiteratureType]中不存在!(in ${ literatureType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsLiteratureTypeEN.con_LiteratureTypeId:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
return b.literatureTypeId.localeCompare(a.literatureTypeId);
}
case clsLiteratureTypeEN.con_LiteratureTypeName:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
return b.literatureTypeName.localeCompare(a.literatureTypeName);
}
case clsLiteratureTypeEN.con_LiteratureTypeENName:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
return b.literatureTypeENName.localeCompare(a.literatureTypeENName);
}
case clsLiteratureTypeEN.con_UpdUserId:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsLiteratureTypeEN.con_UpdDate:
return (a: clsLiteratureTypeEN, b: clsLiteratureTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[LiteratureType]中不存在!(in ${ literatureType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function LiteratureType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsLiteratureTypeEN.con_LiteratureTypeId:
return (obj: clsLiteratureTypeEN) => {
return obj.literatureTypeId === value;
}
case clsLiteratureTypeEN.con_LiteratureTypeName:
return (obj: clsLiteratureTypeEN) => {
return obj.literatureTypeName === value;
}
case clsLiteratureTypeEN.con_LiteratureTypeENName:
return (obj: clsLiteratureTypeEN) => {
return obj.literatureTypeENName === value;
}
case clsLiteratureTypeEN.con_UpdUserId:
return (obj: clsLiteratureTypeEN) => {
return obj.updUserId === value;
}
case clsLiteratureTypeEN.con_UpdDate:
return (obj: clsLiteratureTypeEN) => {
return obj.updDate === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[LiteratureType]中不存在!(in ${ literatureType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function LiteratureType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsLiteratureTypeEN.con_LiteratureTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrLiteratureType = await LiteratureType_GetObjLstCache();
if (arrLiteratureType == null) return [];
let arrLiteratureTypeSel = arrLiteratureType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrLiteratureTypeSel.length == 0) return [];
return arrLiteratureTypeSel.map(x=>x.literatureTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function LiteratureType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetFirstObjAsync(strWhereCond: string): Promise<clsLiteratureTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const objLiteratureType = LiteratureType_GetObjFromJsonObj(returnObj);
return objLiteratureType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsLiteratureTypeEN._CurrTabName;
if (IsNullOrEmpty(clsLiteratureTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsLiteratureTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrLiteratureTypeExObjLstCache: Array<clsLiteratureTypeEN> = CacheHelper.Get(strKey);
const arrLiteratureTypeObjLstT = LiteratureType_GetObjLstByJSONObjLst(arrLiteratureTypeExObjLstCache);
return arrLiteratureTypeObjLstT;
}
try
{
const arrLiteratureTypeExObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrLiteratureTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrLiteratureTypeExObjLst.length);
console.log(strInfo);
return arrLiteratureTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, literatureType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LiteratureType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsLiteratureTypeEN._CurrTabName;
if (IsNullOrEmpty(clsLiteratureTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsLiteratureTypeEN.CacheAddiCondition);
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
const arrLiteratureTypeExObjLstCache: Array<clsLiteratureTypeEN> = JSON.parse(strTempObjLst);
const arrLiteratureTypeObjLstT = LiteratureType_GetObjLstByJSONObjLst(arrLiteratureTypeExObjLstCache);
return arrLiteratureTypeObjLstT;
}
try
{
const arrLiteratureTypeExObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrLiteratureTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrLiteratureTypeExObjLst.length);
console.log(strInfo);
return arrLiteratureTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, literatureType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LiteratureType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsLiteratureTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrLiteratureTypeObjLstCache: Array<clsLiteratureTypeEN> = JSON.parse(strTempObjLst);
return arrLiteratureTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function LiteratureType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsLiteratureTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", literatureType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LiteratureType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsLiteratureTypeEN._CurrTabName;
if (IsNullOrEmpty(clsLiteratureTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsLiteratureTypeEN.CacheAddiCondition);
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
const arrLiteratureTypeExObjLstCache: Array<clsLiteratureTypeEN> = JSON.parse(strTempObjLst);
const arrLiteratureTypeObjLstT = LiteratureType_GetObjLstByJSONObjLst(arrLiteratureTypeExObjLstCache);
return arrLiteratureTypeObjLstT;
}
try
{
const arrLiteratureTypeExObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrLiteratureTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrLiteratureTypeExObjLst.length);
console.log(strInfo);
return arrLiteratureTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, literatureType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LiteratureType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsLiteratureTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrLiteratureTypeObjLstCache: Array<clsLiteratureTypeEN> = JSON.parse(strTempObjLst);
return arrLiteratureTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LiteratureType_GetObjLstCache(): Promise<Array<clsLiteratureTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrLiteratureTypeObjLstCache;
switch (clsLiteratureTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstClientCache();
break;
default:
arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstClientCache();
break;
}
return arrLiteratureTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LiteratureType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrLiteratureTypeObjLstCache;
switch (clsLiteratureTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrLiteratureTypeObjLstCache = null;
break;
default:
arrLiteratureTypeObjLstCache = null;
break;
}
return arrLiteratureTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrLiteratureTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function LiteratureType_GetSubObjLstCache(objLiteratureTypeCond: clsLiteratureTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstCache();
let arrLiteratureTypeSel = arrLiteratureTypeObjLstCache;
if (objLiteratureTypeCond.sfFldComparisonOp == null || objLiteratureTypeCond.sfFldComparisonOp == "") return arrLiteratureTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objLiteratureTypeCond.sfFldComparisonOp);
//console.log("clsLiteratureTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objLiteratureTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objLiteratureTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrLiteratureTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objLiteratureTypeCond), literatureType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsLiteratureTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrLiteratureTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function LiteratureType_GetObjLstByLiteratureTypeIdLstAsync(arrLiteratureTypeId: Array<string>): Promise<Array<clsLiteratureTypeEN>>  
{
const strThisFuncName = "GetObjLstByLiteratureTypeIdLstAsync";
const strAction = "GetObjLstByLiteratureTypeIdLst";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLiteratureTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", literatureType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LiteratureType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param arrstrLiteratureTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function LiteratureType_GetObjLstByLiteratureTypeIdLstCache(arrLiteratureTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByLiteratureTypeIdLstCache";
try
{
const arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstCache();
const arrLiteratureTypeSel = arrLiteratureTypeObjLstCache.filter(x => arrLiteratureTypeIdLst.indexOf(x.literatureTypeId)>-1);
return arrLiteratureTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrLiteratureTypeIdLst.join(","), literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsLiteratureTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", literatureType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LiteratureType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsLiteratureTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", literatureType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LiteratureType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsLiteratureTypeEN>();
const arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstCache();
if (arrLiteratureTypeObjLstCache.length == 0) return arrLiteratureTypeObjLstCache;
let arrLiteratureTypeSel = arrLiteratureTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objLiteratureTypeCond = new clsLiteratureTypeEN();
ObjectAssign(objLiteratureTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsLiteratureTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objLiteratureTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrLiteratureTypeSel.length == 0) return arrLiteratureTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrLiteratureTypeSel = arrLiteratureTypeSel.sort(LiteratureType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrLiteratureTypeSel = arrLiteratureTypeSel.sort(objPagerPara.sortFun);
}
arrLiteratureTypeSel = arrLiteratureTypeSel.slice(intStart, intEnd);     
return arrLiteratureTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, literatureType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsLiteratureTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function LiteratureType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsLiteratureTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsLiteratureTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", literatureType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LiteratureType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param strLiteratureTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function LiteratureType_DelRecordAsync(strLiteratureTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(literatureType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strLiteratureTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param arrLiteratureTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function LiteratureType_DelLiteratureTypesAsync(arrLiteratureTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelLiteratureTypesAsync";
const strAction = "DelLiteratureTypes";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLiteratureTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_DelLiteratureTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelLiteratureTypesByCondAsync";
const strAction = "DelLiteratureTypesByCond";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param objLiteratureTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function LiteratureType_AddNewRecordAsync(objLiteratureTypeEN: clsLiteratureTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objLiteratureTypeEN.literatureTypeId === null || objLiteratureTypeEN.literatureTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objLiteratureTypeEN);
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLiteratureTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param objLiteratureTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function LiteratureType_AddNewRecordWithMaxIdAsync(objLiteratureTypeEN: clsLiteratureTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLiteratureTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param objLiteratureTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function LiteratureType_AddNewRecordWithReturnKeyAsync(objLiteratureTypeEN: clsLiteratureTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLiteratureTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param objLiteratureTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function LiteratureType_UpdateRecordAsync(objLiteratureTypeEN: clsLiteratureTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objLiteratureTypeEN.sfUpdFldSetStr === undefined || objLiteratureTypeEN.sfUpdFldSetStr === null || objLiteratureTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objLiteratureTypeEN.literatureTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLiteratureTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param objLiteratureTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function LiteratureType_UpdateWithConditionAsync(objLiteratureTypeEN: clsLiteratureTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objLiteratureTypeEN.sfUpdFldSetStr === undefined || objLiteratureTypeEN.sfUpdFldSetStr === null || objLiteratureTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objLiteratureTypeEN.literatureTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);
objLiteratureTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLiteratureTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param objstrLiteratureTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function LiteratureType_IsExistRecordCache(objLiteratureTypeCond: clsLiteratureTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstCache();
if (arrLiteratureTypeObjLstCache == null) return false;
let arrLiteratureTypeSel = arrLiteratureTypeObjLstCache;
if (objLiteratureTypeCond.sfFldComparisonOp == null || objLiteratureTypeCond.sfFldComparisonOp == "") return arrLiteratureTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objLiteratureTypeCond.sfFldComparisonOp);
//console.log("clsLiteratureTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objLiteratureTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objLiteratureTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrLiteratureTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objLiteratureTypeCond), literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param strLiteratureTypeId:所给的关键字
 * @returns 对象
*/
export  async function LiteratureType_IsExistCache(strLiteratureTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstCache();
if (arrLiteratureTypeObjLstCache == null) return false;
try
{
const arrLiteratureTypeSel = arrLiteratureTypeObjLstCache.filter(x => x.literatureTypeId == strLiteratureTypeId);
if (arrLiteratureTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strLiteratureTypeId, literatureType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strLiteratureTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function LiteratureType_IsExistAsync(strLiteratureTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strLiteratureTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
 * @param objLiteratureTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function LiteratureType_GetRecCountByCondCache(objLiteratureTypeCond: clsLiteratureTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrLiteratureTypeObjLstCache = await LiteratureType_GetObjLstCache();
if (arrLiteratureTypeObjLstCache == null) return 0;
let arrLiteratureTypeSel = arrLiteratureTypeObjLstCache;
if (objLiteratureTypeCond.sfFldComparisonOp == null || objLiteratureTypeCond.sfFldComparisonOp == "") return arrLiteratureTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objLiteratureTypeCond.sfFldComparisonOp);
//console.log("clsLiteratureTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objLiteratureTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objLiteratureTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrLiteratureTypeSel = arrLiteratureTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrLiteratureTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objLiteratureTypeCond), literatureType_ConstructorName, strThisFuncName);
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
export  async function LiteratureType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(literatureType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, literatureType_ConstructorName, strThisFuncName);
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
export  function LiteratureType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function LiteratureType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsLiteratureTypeEN._CurrTabName;
switch (clsLiteratureTypeEN.CacheModeId)
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
export  function LiteratureType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsLiteratureTypeEN._CurrTabName;
switch (clsLiteratureTypeEN.CacheModeId)
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
export  async function LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_LiteratureTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_LiteratureTypeIdInDivCache");
const arrObjLstSel = await LiteratureType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsLiteratureTypeEN.con_LiteratureTypeId, clsLiteratureTypeEN.con_LiteratureTypeName, "文献类型");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function LiteratureType_CheckPropertyNew(pobjLiteratureTypeEN: clsLiteratureTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[文献类型名]不能为空(In 文献类型)!(clsLiteratureTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeENName) === true )
{
 throw new Error(`(errid:Watl000411)字段[文献类型英文名]不能为空(In 文献类型)!(clsLiteratureTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeId) == false && GetStrLen(pobjLiteratureTypeEN.literatureTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[文献类型Id(literatureTypeId)]的长度不能超过2(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.literatureTypeId}(clsLiteratureTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeName) == false && GetStrLen(pobjLiteratureTypeEN.literatureTypeName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[文献类型名(literatureTypeName)]的长度不能超过100(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.literatureTypeName}(clsLiteratureTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeENName) == false && GetStrLen(pobjLiteratureTypeEN.literatureTypeENName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[文献类型英文名(literatureTypeENName)]的长度不能超过100(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.literatureTypeENName}(clsLiteratureTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.updUserId) == false && GetStrLen(pobjLiteratureTypeEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.updUserId}(clsLiteratureTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.updDate) == false && GetStrLen(pobjLiteratureTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.updDate}(clsLiteratureTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeId) == false && undefined !== pobjLiteratureTypeEN.literatureTypeId && tzDataType.isString(pobjLiteratureTypeEN.literatureTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[文献类型Id(literatureTypeId)]的值:[${pobjLiteratureTypeEN.literatureTypeId}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeName) == false && undefined !== pobjLiteratureTypeEN.literatureTypeName && tzDataType.isString(pobjLiteratureTypeEN.literatureTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[文献类型名(literatureTypeName)]的值:[${pobjLiteratureTypeEN.literatureTypeName}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeENName) == false && undefined !== pobjLiteratureTypeEN.literatureTypeENName && tzDataType.isString(pobjLiteratureTypeEN.literatureTypeENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[文献类型英文名(literatureTypeENName)]的值:[${pobjLiteratureTypeEN.literatureTypeENName}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.updUserId) == false && undefined !== pobjLiteratureTypeEN.updUserId && tzDataType.isString(pobjLiteratureTypeEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjLiteratureTypeEN.updUserId}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.updDate) == false && undefined !== pobjLiteratureTypeEN.updDate && tzDataType.isString(pobjLiteratureTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjLiteratureTypeEN.updDate}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function LiteratureType_CheckProperty4Update(pobjLiteratureTypeEN: clsLiteratureTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeId) == false && GetStrLen(pobjLiteratureTypeEN.literatureTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[文献类型Id(literatureTypeId)]的长度不能超过2(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.literatureTypeId}(clsLiteratureTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeName) == false && GetStrLen(pobjLiteratureTypeEN.literatureTypeName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[文献类型名(literatureTypeName)]的长度不能超过100(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.literatureTypeName}(clsLiteratureTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeENName) == false && GetStrLen(pobjLiteratureTypeEN.literatureTypeENName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[文献类型英文名(literatureTypeENName)]的长度不能超过100(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.literatureTypeENName}(clsLiteratureTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.updUserId) == false && GetStrLen(pobjLiteratureTypeEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.updUserId}(clsLiteratureTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.updDate) == false && GetStrLen(pobjLiteratureTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 文献类型(LiteratureType))!值:${pobjLiteratureTypeEN.updDate}(clsLiteratureTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeId) == false && undefined !== pobjLiteratureTypeEN.literatureTypeId && tzDataType.isString(pobjLiteratureTypeEN.literatureTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[文献类型Id(literatureTypeId)]的值:[${pobjLiteratureTypeEN.literatureTypeId}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeName) == false && undefined !== pobjLiteratureTypeEN.literatureTypeName && tzDataType.isString(pobjLiteratureTypeEN.literatureTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[文献类型名(literatureTypeName)]的值:[${pobjLiteratureTypeEN.literatureTypeName}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeENName) == false && undefined !== pobjLiteratureTypeEN.literatureTypeENName && tzDataType.isString(pobjLiteratureTypeEN.literatureTypeENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[文献类型英文名(literatureTypeENName)]的值:[${pobjLiteratureTypeEN.literatureTypeENName}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.updUserId) == false && undefined !== pobjLiteratureTypeEN.updUserId && tzDataType.isString(pobjLiteratureTypeEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjLiteratureTypeEN.updUserId}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLiteratureTypeEN.updDate) == false && undefined !== pobjLiteratureTypeEN.updDate && tzDataType.isString(pobjLiteratureTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjLiteratureTypeEN.updDate}], 非法,应该为字符型(In 文献类型(LiteratureType))!(clsLiteratureTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjLiteratureTypeEN.literatureTypeId) === true )
{
 throw new Error(`(errid:Watl000064)字段[文献类型Id]不能为空(In 文献类型)!(clsLiteratureTypeBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function LiteratureType_GetJSONStrByObj (pobjLiteratureTypeEN: clsLiteratureTypeEN): string
{
pobjLiteratureTypeEN.sfUpdFldSetStr = pobjLiteratureTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjLiteratureTypeEN);
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
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function LiteratureType_GetObjLstByJSONStr (strJSON: string): Array<clsLiteratureTypeEN>
{
let arrLiteratureTypeObjLst = new Array<clsLiteratureTypeEN>();
if (strJSON === "")
{
return arrLiteratureTypeObjLst;
}
try
{
arrLiteratureTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrLiteratureTypeObjLst;
}
return arrLiteratureTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrLiteratureTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function LiteratureType_GetObjLstByJSONObjLst (arrLiteratureTypeObjLstS: Array<clsLiteratureTypeEN>): Array<clsLiteratureTypeEN>
{
const arrLiteratureTypeObjLst = new Array<clsLiteratureTypeEN>();
for (const objInFor of arrLiteratureTypeObjLstS) {
const obj1 = LiteratureType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrLiteratureTypeObjLst.push(obj1);
}
return arrLiteratureTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function LiteratureType_GetObjByJSONStr (strJSON: string): clsLiteratureTypeEN
{
let pobjLiteratureTypeEN = new clsLiteratureTypeEN();
if (strJSON === "")
{
return pobjLiteratureTypeEN;
}
try
{
pobjLiteratureTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjLiteratureTypeEN;
}
return pobjLiteratureTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function LiteratureType_GetCombineCondition(objLiteratureTypeCond: clsLiteratureTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objLiteratureTypeCond.dicFldComparisonOp, clsLiteratureTypeEN.con_LiteratureTypeId) == true)
{
const strComparisonOpLiteratureTypeId:string = objLiteratureTypeCond.dicFldComparisonOp[clsLiteratureTypeEN.con_LiteratureTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsLiteratureTypeEN.con_LiteratureTypeId, objLiteratureTypeCond.literatureTypeId, strComparisonOpLiteratureTypeId);
}
if (Object.prototype.hasOwnProperty.call(objLiteratureTypeCond.dicFldComparisonOp, clsLiteratureTypeEN.con_LiteratureTypeName) == true)
{
const strComparisonOpLiteratureTypeName:string = objLiteratureTypeCond.dicFldComparisonOp[clsLiteratureTypeEN.con_LiteratureTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsLiteratureTypeEN.con_LiteratureTypeName, objLiteratureTypeCond.literatureTypeName, strComparisonOpLiteratureTypeName);
}
if (Object.prototype.hasOwnProperty.call(objLiteratureTypeCond.dicFldComparisonOp, clsLiteratureTypeEN.con_LiteratureTypeENName) == true)
{
const strComparisonOpLiteratureTypeENName:string = objLiteratureTypeCond.dicFldComparisonOp[clsLiteratureTypeEN.con_LiteratureTypeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsLiteratureTypeEN.con_LiteratureTypeENName, objLiteratureTypeCond.literatureTypeENName, strComparisonOpLiteratureTypeENName);
}
if (Object.prototype.hasOwnProperty.call(objLiteratureTypeCond.dicFldComparisonOp, clsLiteratureTypeEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objLiteratureTypeCond.dicFldComparisonOp[clsLiteratureTypeEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsLiteratureTypeEN.con_UpdUserId, objLiteratureTypeCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objLiteratureTypeCond.dicFldComparisonOp, clsLiteratureTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objLiteratureTypeCond.dicFldComparisonOp[clsLiteratureTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsLiteratureTypeEN.con_UpdDate, objLiteratureTypeCond.updDate, strComparisonOpUpdDate);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objLiteratureTypeENS:源对象
 * @param objLiteratureTypeENT:目标对象
*/
export  function LiteratureType_CopyObjTo(objLiteratureTypeENS: clsLiteratureTypeEN , objLiteratureTypeENT: clsLiteratureTypeEN ): void 
{
objLiteratureTypeENT.literatureTypeId = objLiteratureTypeENS.literatureTypeId; //文献类型Id
objLiteratureTypeENT.literatureTypeName = objLiteratureTypeENS.literatureTypeName; //文献类型名
objLiteratureTypeENT.literatureTypeENName = objLiteratureTypeENS.literatureTypeENName; //文献类型英文名
objLiteratureTypeENT.updUserId = objLiteratureTypeENS.updUserId; //修改用户Id
objLiteratureTypeENT.updDate = objLiteratureTypeENS.updDate; //修改日期
objLiteratureTypeENT.sfUpdFldSetStr = objLiteratureTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objLiteratureTypeENS:源对象
 * @param objLiteratureTypeENT:目标对象
*/
export  function LiteratureType_GetObjFromJsonObj(objLiteratureTypeENS: clsLiteratureTypeEN): clsLiteratureTypeEN 
{
 const objLiteratureTypeENT: clsLiteratureTypeEN = new clsLiteratureTypeEN();
ObjectAssign(objLiteratureTypeENT, objLiteratureTypeENS);
 return objLiteratureTypeENT;
}