
 /**
 * 类名:clsRsProfGradeWApi
 * 表名:RsProfGrade(01120104)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/27 16:36:38
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
 * 专业职称(RsProfGrade)
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
import { clsRsProfGradeEN } from "@/ts/L0Entity/SysPara/clsRsProfGradeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const rsProfGrade_Controller = "RsProfGradeApi";
 export const rsProfGrade_ConstructorName = "rsProfGrade";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdProfGrade:关键字
 * @returns 对象
 **/
export  async function RsProfGrade_GetObjByIdProfGradeAsync(strIdProfGrade: string): Promise<clsRsProfGradeEN|null>  
{
const strThisFuncName = "GetObjByIdProfGradeAsync";

if (IsNullOrEmpty(strIdProfGrade) == true)
{
  const strMsg = Format("参数:[strIdProfGrade]不能为空!(In clsRsProfGradeWApi.GetObjByIdProfGradeAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdProfGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdProfGrade]的长度:[{0}]不正确!(clsRsProfGradeWApi.GetObjByIdProfGradeAsync)", strIdProfGrade.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdProfGrade";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdProfGrade,
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
const objRsProfGrade = RsProfGrade_GetObjFromJsonObj(returnObj);
return objRsProfGrade;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param strIdProfGrade:所给的关键字
 * @returns 对象
*/
export  async function RsProfGrade_GetObjByIdProfGradeCache(strIdProfGrade: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdProfGradeCache";

if (IsNullOrEmpty(strIdProfGrade) == true)
{
  const strMsg = Format("参数:[strIdProfGrade]不能为空!(In clsRsProfGradeWApi.GetObjByIdProfGradeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdProfGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdProfGrade]的长度:[{0}]不正确!(clsRsProfGradeWApi.GetObjByIdProfGradeCache)", strIdProfGrade.length);
console.error(strMsg);
throw (strMsg);
}
const arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstCache();
try
{
const arrRsProfGradeSel = arrRsProfGradeObjLstCache.filter(x => 
 x.idProfGrade == strIdProfGrade );
let objRsProfGrade: clsRsProfGradeEN;
if (arrRsProfGradeSel.length > 0)
{
objRsProfGrade = arrRsProfGradeSel[0];
return objRsProfGrade;
}
else
{
if (bolTryAsyncOnce == true)
{
const objRsProfGradeConst = await RsProfGrade_GetObjByIdProfGradeAsync(strIdProfGrade);
if (objRsProfGradeConst != null)
{
RsProfGrade_ReFreshThisCache();
return objRsProfGradeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdProfGrade, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdProfGrade:所给的关键字
 * @returns 对象
*/
export  async function RsProfGrade_GetObjByIdProfGradelocalStorage(strIdProfGrade: string) {
const strThisFuncName = "GetObjByIdProfGradelocalStorage";

if (IsNullOrEmpty(strIdProfGrade) == true)
{
  const strMsg = Format("参数:[strIdProfGrade]不能为空!(In clsRsProfGradeWApi.GetObjByIdProfGradelocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdProfGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdProfGrade]的长度:[{0}]不正确!(clsRsProfGradeWApi.GetObjByIdProfGradelocalStorage)", strIdProfGrade.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsRsProfGradeEN._CurrTabName, strIdProfGrade);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objRsProfGradeCache: clsRsProfGradeEN = JSON.parse(strTempObj);
return objRsProfGradeCache;
}
try
{
const objRsProfGrade = await RsProfGrade_GetObjByIdProfGradeAsync(strIdProfGrade);
if (objRsProfGrade != null)
{
localStorage.setItem(strKey, JSON.stringify(objRsProfGrade));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objRsProfGrade;
}
return objRsProfGrade;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdProfGrade, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objRsProfGrade:所给的对象
 * @returns 对象
*/
export  async function RsProfGrade_UpdateObjInLstCache(objRsProfGrade: clsRsProfGradeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstCache();
const obj = arrRsProfGradeObjLstCache.find(x => 
x.idProfGrade == objRsProfGrade.idProfGrade);
if (obj != null)
{
objRsProfGrade.idProfGrade = obj.idProfGrade;
ObjectAssign( obj, objRsProfGrade);
}
else
{
arrRsProfGradeObjLstCache.push(objRsProfGrade);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdProfGrade:所给的关键字
 * @returns 对象
*/
export  async function RsProfGrade_GetNameByIdProfGradeCache(strIdProfGrade: string) {

if (IsNullOrEmpty(strIdProfGrade) == true)
{
  const strMsg = Format("参数:[strIdProfGrade]不能为空!(In clsRsProfGradeWApi.GetNameByIdProfGradeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdProfGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdProfGrade]的长度:[{0}]不正确!(clsRsProfGradeWApi.GetNameByIdProfGradeCache)", strIdProfGrade.length);
console.error(strMsg);
throw (strMsg);
}
const arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstCache();
if (arrRsProfGradeObjLstCache == null) return "";
try
{
const arrRsProfGradeSel = arrRsProfGradeObjLstCache.filter(x => 
 x.idProfGrade == strIdProfGrade );
let objRsProfGrade: clsRsProfGradeEN;
if (arrRsProfGradeSel.length > 0)
{
objRsProfGrade = arrRsProfGradeSel[0];
return objRsProfGrade.profenssionalGradeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdProfGrade);
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
export  async function RsProfGrade_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsRsProfGradeEN.con_IdProfGrade)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsRsProfGradeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsRsProfGradeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdProfGrade = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objRsProfGrade = await RsProfGrade_GetObjByIdProfGradeCache(strIdProfGrade );
if (objRsProfGrade == null) return "";
if (objRsProfGrade.GetFldValue(strOutFldName) == null) return "";
return objRsProfGrade.GetFldValue(strOutFldName).toString();
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
export  function RsProfGrade_SortFunDefa(a:clsRsProfGradeEN , b:clsRsProfGradeEN): number 
{
return a.idProfGrade.localeCompare(b.idProfGrade);
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
export  function RsProfGrade_SortFunDefa2Fld(a:clsRsProfGradeEN , b:clsRsProfGradeEN): number 
{
if (a.profenssionalGradeId == b.profenssionalGradeId) return a.profenssionalGradeName.localeCompare(b.profenssionalGradeName);
else return a.profenssionalGradeId.localeCompare(b.profenssionalGradeId);
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
export  function RsProfGrade_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRsProfGradeEN.con_IdProfGrade:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
return a.idProfGrade.localeCompare(b.idProfGrade);
}
case clsRsProfGradeEN.con_ProfenssionalGradeId:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
return a.profenssionalGradeId.localeCompare(b.profenssionalGradeId);
}
case clsRsProfGradeEN.con_ProfenssionalGradeName:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
return a.profenssionalGradeName.localeCompare(b.profenssionalGradeName);
}
case clsRsProfGradeEN.con_ModifyDate:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsRsProfGradeEN.con_ModifyUserId:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsProfGrade]中不存在!(in ${ rsProfGrade_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRsProfGradeEN.con_IdProfGrade:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
return b.idProfGrade.localeCompare(a.idProfGrade);
}
case clsRsProfGradeEN.con_ProfenssionalGradeId:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
return b.profenssionalGradeId.localeCompare(a.profenssionalGradeId);
}
case clsRsProfGradeEN.con_ProfenssionalGradeName:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
return b.profenssionalGradeName.localeCompare(a.profenssionalGradeName);
}
case clsRsProfGradeEN.con_ModifyDate:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsRsProfGradeEN.con_ModifyUserId:
return (a: clsRsProfGradeEN, b: clsRsProfGradeEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsProfGrade]中不存在!(in ${ rsProfGrade_ConstructorName}.${ strThisFuncName})`;
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
export  async function RsProfGrade_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRsProfGradeEN.con_IdProfGrade:
return (obj: clsRsProfGradeEN) => {
return obj.idProfGrade === value;
}
case clsRsProfGradeEN.con_ProfenssionalGradeId:
return (obj: clsRsProfGradeEN) => {
return obj.profenssionalGradeId === value;
}
case clsRsProfGradeEN.con_ProfenssionalGradeName:
return (obj: clsRsProfGradeEN) => {
return obj.profenssionalGradeName === value;
}
case clsRsProfGradeEN.con_ModifyDate:
return (obj: clsRsProfGradeEN) => {
return obj.modifyDate === value;
}
case clsRsProfGradeEN.con_ModifyUserId:
return (obj: clsRsProfGradeEN) => {
return obj.modifyUserId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsProfGrade]中不存在!(in ${ rsProfGrade_ConstructorName}.${ strThisFuncName})`;
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
export  async function RsProfGrade_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsRsProfGradeEN.con_IdProfGrade)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrRsProfGrade = await RsProfGrade_GetObjLstCache();
if (arrRsProfGrade == null) return [];
let arrRsProfGradeSel = arrRsProfGrade;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrRsProfGradeSel.length == 0) return [];
return arrRsProfGradeSel.map(x=>x.idProfGrade);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsProfGrade_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_GetFirstObjAsync(strWhereCond: string): Promise<clsRsProfGradeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const objRsProfGrade = RsProfGrade_GetObjFromJsonObj(returnObj);
return objRsProfGrade;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsProfGradeEN._CurrTabName;
if (IsNullOrEmpty(clsRsProfGradeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsProfGradeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrRsProfGradeExObjLstCache: Array<clsRsProfGradeEN> = CacheHelper.Get(strKey);
const arrRsProfGradeObjLstT = RsProfGrade_GetObjLstByJSONObjLst(arrRsProfGradeExObjLstCache);
return arrRsProfGradeObjLstT;
}
try
{
const arrRsProfGradeExObjLst = await RsProfGrade_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrRsProfGradeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsProfGradeExObjLst.length);
console.log(strInfo);
return arrRsProfGradeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsProfGrade_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsProfGradeEN._CurrTabName;
if (IsNullOrEmpty(clsRsProfGradeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsProfGradeEN.CacheAddiCondition);
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
const arrRsProfGradeExObjLstCache: Array<clsRsProfGradeEN> = JSON.parse(strTempObjLst);
const arrRsProfGradeObjLstT = RsProfGrade_GetObjLstByJSONObjLst(arrRsProfGradeExObjLstCache);
return arrRsProfGradeObjLstT;
}
try
{
const arrRsProfGradeExObjLst = await RsProfGrade_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrRsProfGradeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsProfGradeExObjLst.length);
console.log(strInfo);
return arrRsProfGradeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsProfGrade_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRsProfGradeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrRsProfGradeObjLstCache: Array<clsRsProfGradeEN> = JSON.parse(strTempObjLst);
return arrRsProfGradeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function RsProfGrade_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRsProfGradeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProfGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProfGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsProfGradeEN._CurrTabName;
if (IsNullOrEmpty(clsRsProfGradeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsProfGradeEN.CacheAddiCondition);
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
const arrRsProfGradeExObjLstCache: Array<clsRsProfGradeEN> = JSON.parse(strTempObjLst);
const arrRsProfGradeObjLstT = RsProfGrade_GetObjLstByJSONObjLst(arrRsProfGradeExObjLstCache);
return arrRsProfGradeObjLstT;
}
try
{
const arrRsProfGradeExObjLst = await RsProfGrade_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrRsProfGradeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsProfGradeExObjLst.length);
console.log(strInfo);
return arrRsProfGradeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsProfGrade_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRsProfGradeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrRsProfGradeObjLstCache: Array<clsRsProfGradeEN> = JSON.parse(strTempObjLst);
return arrRsProfGradeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsProfGrade_GetObjLstCache(): Promise<Array<clsRsProfGradeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrRsProfGradeObjLstCache;
switch (clsRsProfGradeEN.CacheModeId)
{
case "04"://sessionStorage
arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstClientCache();
break;
default:
arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstClientCache();
break;
}
return arrRsProfGradeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsProfGrade_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrRsProfGradeObjLstCache;
switch (clsRsProfGradeEN.CacheModeId)
{
case "04"://sessionStorage
arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrRsProfGradeObjLstCache = null;
break;
default:
arrRsProfGradeObjLstCache = null;
break;
}
return arrRsProfGradeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdProfGradeCond:条件对象
 * @returns 对象列表子集
*/
export  async function RsProfGrade_GetSubObjLstCache(objRsProfGradeCond: clsRsProfGradeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstCache();
let arrRsProfGradeSel = arrRsProfGradeObjLstCache;
if (objRsProfGradeCond.sfFldComparisonOp == null || objRsProfGradeCond.sfFldComparisonOp == "") return arrRsProfGradeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsProfGradeCond.sfFldComparisonOp);
//console.log("clsRsProfGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsProfGradeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsProfGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRsProfGradeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objRsProfGradeCond), rsProfGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRsProfGradeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdProfGrade:关键字列表
 * @returns 对象列表
 **/
export  async function RsProfGrade_GetObjLstByIdProfGradeLstAsync(arrIdProfGrade: Array<string>): Promise<Array<clsRsProfGradeEN>>  
{
const strThisFuncName = "GetObjLstByIdProfGradeLstAsync";
const strAction = "GetObjLstByIdProfGradeLst";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdProfGrade, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProfGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProfGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param arrstrIdProfGradeLst:关键字列表
 * @returns 对象列表
*/
export  async function RsProfGrade_GetObjLstByIdProfGradeLstCache(arrIdProfGradeLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdProfGradeLstCache";
try
{
const arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstCache();
const arrRsProfGradeSel = arrRsProfGradeObjLstCache.filter(x => arrIdProfGradeLst.indexOf(x.idProfGrade)>-1);
return arrRsProfGradeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdProfGradeLst.join(","), rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRsProfGradeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProfGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProfGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRsProfGradeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProfGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProfGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsRsProfGradeEN>();
const arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstCache();
if (arrRsProfGradeObjLstCache.length == 0) return arrRsProfGradeObjLstCache;
let arrRsProfGradeSel = arrRsProfGradeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objRsProfGradeCond = new clsRsProfGradeEN();
ObjectAssign(objRsProfGradeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsRsProfGradeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsProfGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRsProfGradeSel.length == 0) return arrRsProfGradeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrRsProfGradeSel = arrRsProfGradeSel.sort(RsProfGrade_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrRsProfGradeSel = arrRsProfGradeSel.sort(objPagerPara.sortFun);
}
arrRsProfGradeSel = arrRsProfGradeSel.slice(intStart, intEnd);     
return arrRsProfGradeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRsProfGradeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function RsProfGrade_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRsProfGradeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRsProfGradeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProfGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProfGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param strIdProfGrade:关键字
 * @returns 获取删除的结果
 **/
export  async function RsProfGrade_DelRecordAsync(strIdProfGrade: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdProfGrade);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param arrIdProfGrade:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function RsProfGrade_DelRsProfGradesAsync(arrIdProfGrade: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRsProfGradesAsync";
const strAction = "DelRsProfGrades";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdProfGrade, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_DelRsProfGradesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRsProfGradesByCondAsync";
const strAction = "DelRsProfGradesByCond";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param objRsProfGradeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsProfGrade_AddNewRecordAsync(objRsProfGradeEN: clsRsProfGradeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRsProfGradeEN.idProfGrade === null || objRsProfGradeEN.idProfGrade === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRsProfGradeEN);
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProfGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param objRsProfGradeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsProfGrade_AddNewRecordWithMaxIdAsync(objRsProfGradeEN: clsRsProfGradeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProfGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param objRsProfGradeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RsProfGrade_AddNewRecordWithReturnKeyAsync(objRsProfGradeEN: clsRsProfGradeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProfGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param objRsProfGradeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RsProfGrade_UpdateRecordAsync(objRsProfGradeEN: clsRsProfGradeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRsProfGradeEN.sfUpdFldSetStr === undefined || objRsProfGradeEN.sfUpdFldSetStr === null || objRsProfGradeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsProfGradeEN.idProfGrade);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProfGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param objRsProfGradeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsProfGrade_UpdateWithConditionAsync(objRsProfGradeEN: clsRsProfGradeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRsProfGradeEN.sfUpdFldSetStr === undefined || objRsProfGradeEN.sfUpdFldSetStr === null || objRsProfGradeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsProfGradeEN.idProfGrade);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);
objRsProfGradeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProfGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param objstrIdProfGradeCond:条件对象
 * @returns 对象列表子集
*/
export  async function RsProfGrade_IsExistRecordCache(objRsProfGradeCond: clsRsProfGradeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstCache();
if (arrRsProfGradeObjLstCache == null) return false;
let arrRsProfGradeSel = arrRsProfGradeObjLstCache;
if (objRsProfGradeCond.sfFldComparisonOp == null || objRsProfGradeCond.sfFldComparisonOp == "") return arrRsProfGradeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsProfGradeCond.sfFldComparisonOp);
//console.log("clsRsProfGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsProfGradeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsProfGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRsProfGradeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objRsProfGradeCond), rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param strIdProfGrade:所给的关键字
 * @returns 对象
*/
export  async function RsProfGrade_IsExistCache(strIdProfGrade:string) {
const strThisFuncName = "IsExistCache";
const arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstCache();
if (arrRsProfGradeObjLstCache == null) return false;
try
{
const arrRsProfGradeSel = arrRsProfGradeObjLstCache.filter(x => x.idProfGrade == strIdProfGrade);
if (arrRsProfGradeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdProfGrade, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdProfGrade:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RsProfGrade_IsExistAsync(strIdProfGrade: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdProfGrade
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
 * @param objRsProfGradeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function RsProfGrade_GetRecCountByCondCache(objRsProfGradeCond: clsRsProfGradeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrRsProfGradeObjLstCache = await RsProfGrade_GetObjLstCache();
if (arrRsProfGradeObjLstCache == null) return 0;
let arrRsProfGradeSel = arrRsProfGradeObjLstCache;
if (objRsProfGradeCond.sfFldComparisonOp == null || objRsProfGradeCond.sfFldComparisonOp == "") return arrRsProfGradeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsProfGradeCond.sfFldComparisonOp);
//console.log("clsRsProfGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsProfGradeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsProfGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsProfGradeSel = arrRsProfGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRsProfGradeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objRsProfGradeCond), rsProfGrade_ConstructorName, strThisFuncName);
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
export  async function RsProfGrade_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(rsProfGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProfGrade_ConstructorName, strThisFuncName);
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
export  function RsProfGrade_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function RsProfGrade_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsRsProfGradeEN._CurrTabName;
switch (clsRsProfGradeEN.CacheModeId)
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
export  function RsProfGrade_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsRsProfGradeEN._CurrTabName;
switch (clsRsProfGradeEN.CacheModeId)
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
export  async function RsProfGrade_BindDdl_IdProfGradeInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdProfGradeInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdProfGradeInDivCache");
const arrObjLstSel = await RsProfGrade_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsRsProfGradeEN.con_IdProfGrade, clsRsProfGradeEN.con_ProfenssionalGradeName, "专业职称");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsProfGrade_CheckPropertyNew(pobjRsProfGradeEN: clsRsProfGradeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeId) === true )
{
 throw new Error("(errid:Watl000411)字段[专业职称ID]不能为空(In 专业职称)!(clsRsProfGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeName) === true )
{
 throw new Error("(errid:Watl000411)字段[专业职称]不能为空(In 专业职称)!(clsRsProfGradeBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsProfGradeEN.idProfGrade) == false && GetStrLen(pobjRsProfGradeEN.idProfGrade) > 4)
{
 throw new Error("(errid:Watl000413)字段[专业职称流水号(idProfGrade)]的长度不能超过4(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.idProfGrade)(clsRsProfGradeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeId) == false && GetStrLen(pobjRsProfGradeEN.profenssionalGradeId) > 4)
{
 throw new Error("(errid:Watl000413)字段[专业职称ID(profenssionalGradeId)]的长度不能超过4(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.profenssionalGradeId)(clsRsProfGradeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeName) == false && GetStrLen(pobjRsProfGradeEN.profenssionalGradeName) > 30)
{
 throw new Error("(errid:Watl000413)字段[专业职称(profenssionalGradeName)]的长度不能超过30(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.profenssionalGradeName)(clsRsProfGradeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.modifyDate) == false && GetStrLen(pobjRsProfGradeEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.modifyDate)(clsRsProfGradeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.modifyUserId) == false && GetStrLen(pobjRsProfGradeEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.modifyUserId)(clsRsProfGradeBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsProfGradeEN.idProfGrade) == false && undefined !== pobjRsProfGradeEN.idProfGrade && tzDataType.isString(pobjRsProfGradeEN.idProfGrade) === false)
{
 throw new Error("(errid:Watl000414)字段[专业职称流水号(idProfGrade)]的值:[$(pobjRsProfGradeEN.idProfGrade)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeId) == false && undefined !== pobjRsProfGradeEN.profenssionalGradeId && tzDataType.isString(pobjRsProfGradeEN.profenssionalGradeId) === false)
{
 throw new Error("(errid:Watl000414)字段[专业职称ID(profenssionalGradeId)]的值:[$(pobjRsProfGradeEN.profenssionalGradeId)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeName) == false && undefined !== pobjRsProfGradeEN.profenssionalGradeName && tzDataType.isString(pobjRsProfGradeEN.profenssionalGradeName) === false)
{
 throw new Error("(errid:Watl000414)字段[专业职称(profenssionalGradeName)]的值:[$(pobjRsProfGradeEN.profenssionalGradeName)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.modifyDate) == false && undefined !== pobjRsProfGradeEN.modifyDate && tzDataType.isString(pobjRsProfGradeEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjRsProfGradeEN.modifyDate)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.modifyUserId) == false && undefined !== pobjRsProfGradeEN.modifyUserId && tzDataType.isString(pobjRsProfGradeEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjRsProfGradeEN.modifyUserId)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsProfGrade_CheckProperty4Update(pobjRsProfGradeEN: clsRsProfGradeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsProfGradeEN.idProfGrade) == false && GetStrLen(pobjRsProfGradeEN.idProfGrade) > 4)
{
 throw new Error("(errid:Watl000416)字段[专业职称流水号(idProfGrade)]的长度不能超过4(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.idProfGrade)(clsRsProfGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeId) == false && GetStrLen(pobjRsProfGradeEN.profenssionalGradeId) > 4)
{
 throw new Error("(errid:Watl000416)字段[专业职称ID(profenssionalGradeId)]的长度不能超过4(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.profenssionalGradeId)(clsRsProfGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeName) == false && GetStrLen(pobjRsProfGradeEN.profenssionalGradeName) > 30)
{
 throw new Error("(errid:Watl000416)字段[专业职称(profenssionalGradeName)]的长度不能超过30(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.profenssionalGradeName)(clsRsProfGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.modifyDate) == false && GetStrLen(pobjRsProfGradeEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.modifyDate)(clsRsProfGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.modifyUserId) == false && GetStrLen(pobjRsProfGradeEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 专业职称(RsProfGrade))!值:$(pobjRsProfGradeEN.modifyUserId)(clsRsProfGradeBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsProfGradeEN.idProfGrade) == false && undefined !== pobjRsProfGradeEN.idProfGrade && tzDataType.isString(pobjRsProfGradeEN.idProfGrade) === false)
{
 throw new Error("(errid:Watl000417)字段[专业职称流水号(idProfGrade)]的值:[$(pobjRsProfGradeEN.idProfGrade)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeId) == false && undefined !== pobjRsProfGradeEN.profenssionalGradeId && tzDataType.isString(pobjRsProfGradeEN.profenssionalGradeId) === false)
{
 throw new Error("(errid:Watl000417)字段[专业职称ID(profenssionalGradeId)]的值:[$(pobjRsProfGradeEN.profenssionalGradeId)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.profenssionalGradeName) == false && undefined !== pobjRsProfGradeEN.profenssionalGradeName && tzDataType.isString(pobjRsProfGradeEN.profenssionalGradeName) === false)
{
 throw new Error("(errid:Watl000417)字段[专业职称(profenssionalGradeName)]的值:[$(pobjRsProfGradeEN.profenssionalGradeName)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.modifyDate) == false && undefined !== pobjRsProfGradeEN.modifyDate && tzDataType.isString(pobjRsProfGradeEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjRsProfGradeEN.modifyDate)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProfGradeEN.modifyUserId) == false && undefined !== pobjRsProfGradeEN.modifyUserId && tzDataType.isString(pobjRsProfGradeEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjRsProfGradeEN.modifyUserId)], 非法,应该为字符型(In 专业职称(RsProfGrade))!(clsRsProfGradeBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRsProfGradeEN.idProfGrade) === true )
{
 throw new Error("(errid:Watl000064)字段[专业职称流水号]不能为空(In 专业职称)!(clsRsProfGradeBL:CheckProperty4Update)");
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
export  function RsProfGrade_GetJSONStrByObj (pobjRsProfGradeEN: clsRsProfGradeEN): string
{
pobjRsProfGradeEN.sfUpdFldSetStr = pobjRsProfGradeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRsProfGradeEN);
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
export  function RsProfGrade_GetObjLstByJSONStr (strJSON: string): Array<clsRsProfGradeEN>
{
let arrRsProfGradeObjLst = new Array<clsRsProfGradeEN>();
if (strJSON === "")
{
return arrRsProfGradeObjLst;
}
try
{
arrRsProfGradeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRsProfGradeObjLst;
}
return arrRsProfGradeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRsProfGradeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RsProfGrade_GetObjLstByJSONObjLst (arrRsProfGradeObjLstS: Array<clsRsProfGradeEN>): Array<clsRsProfGradeEN>
{
const arrRsProfGradeObjLst = new Array<clsRsProfGradeEN>();
for (const objInFor of arrRsProfGradeObjLstS) {
const obj1 = RsProfGrade_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRsProfGradeObjLst.push(obj1);
}
return arrRsProfGradeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RsProfGrade_GetObjByJSONStr (strJSON: string): clsRsProfGradeEN
{
let pobjRsProfGradeEN = new clsRsProfGradeEN();
if (strJSON === "")
{
return pobjRsProfGradeEN;
}
try
{
pobjRsProfGradeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRsProfGradeEN;
}
return pobjRsProfGradeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RsProfGrade_GetCombineCondition(objRsProfGradeCond: clsRsProfGradeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRsProfGradeCond.dicFldComparisonOp, clsRsProfGradeEN.con_IdProfGrade) == true)
{
const strComparisonOpIdProfGrade:string = objRsProfGradeCond.dicFldComparisonOp[clsRsProfGradeEN.con_IdProfGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProfGradeEN.con_IdProfGrade, objRsProfGradeCond.idProfGrade, strComparisonOpIdProfGrade);
}
if (Object.prototype.hasOwnProperty.call(objRsProfGradeCond.dicFldComparisonOp, clsRsProfGradeEN.con_ProfenssionalGradeId) == true)
{
const strComparisonOpProfenssionalGradeId:string = objRsProfGradeCond.dicFldComparisonOp[clsRsProfGradeEN.con_ProfenssionalGradeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProfGradeEN.con_ProfenssionalGradeId, objRsProfGradeCond.profenssionalGradeId, strComparisonOpProfenssionalGradeId);
}
if (Object.prototype.hasOwnProperty.call(objRsProfGradeCond.dicFldComparisonOp, clsRsProfGradeEN.con_ProfenssionalGradeName) == true)
{
const strComparisonOpProfenssionalGradeName:string = objRsProfGradeCond.dicFldComparisonOp[clsRsProfGradeEN.con_ProfenssionalGradeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProfGradeEN.con_ProfenssionalGradeName, objRsProfGradeCond.profenssionalGradeName, strComparisonOpProfenssionalGradeName);
}
if (Object.prototype.hasOwnProperty.call(objRsProfGradeCond.dicFldComparisonOp, clsRsProfGradeEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objRsProfGradeCond.dicFldComparisonOp[clsRsProfGradeEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProfGradeEN.con_ModifyDate, objRsProfGradeCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objRsProfGradeCond.dicFldComparisonOp, clsRsProfGradeEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objRsProfGradeCond.dicFldComparisonOp[clsRsProfGradeEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProfGradeEN.con_ModifyUserId, objRsProfGradeCond.modifyUserId, strComparisonOpModifyUserId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRsProfGradeENS:源对象
 * @param objRsProfGradeENT:目标对象
*/
export  function RsProfGrade_CopyObjTo(objRsProfGradeENS: clsRsProfGradeEN , objRsProfGradeENT: clsRsProfGradeEN ): void 
{
objRsProfGradeENT.idProfGrade = objRsProfGradeENS.idProfGrade; //专业职称流水号
objRsProfGradeENT.profenssionalGradeId = objRsProfGradeENS.profenssionalGradeId; //专业职称ID
objRsProfGradeENT.profenssionalGradeName = objRsProfGradeENS.profenssionalGradeName; //专业职称
objRsProfGradeENT.modifyDate = objRsProfGradeENS.modifyDate; //修改日期
objRsProfGradeENT.modifyUserId = objRsProfGradeENS.modifyUserId; //修改人
objRsProfGradeENT.sfUpdFldSetStr = objRsProfGradeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRsProfGradeENS:源对象
 * @param objRsProfGradeENT:目标对象
*/
export  function RsProfGrade_GetObjFromJsonObj(objRsProfGradeENS: clsRsProfGradeEN): clsRsProfGradeEN 
{
 const objRsProfGradeENT: clsRsProfGradeEN = new clsRsProfGradeEN();
ObjectAssign(objRsProfGradeENT, objRsProfGradeENS);
 return objRsProfGradeENT;
}