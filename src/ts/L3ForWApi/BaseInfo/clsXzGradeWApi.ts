
 /**
 * 类名:clsXzGradeWApi
 * 表名:XzGrade(01120349)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/26 01:34:37
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 年级(XzGrade)
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
import { clsXzGradeEN } from "@/ts/L0Entity/BaseInfo/clsXzGradeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const xzGrade_Controller = "XzGradeApi";
 export const xzGrade_ConstructorName = "xzGrade";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdGrade:关键字
 * @returns 对象
 **/
export  async function XzGrade_GetObjByIdGradeAsync(strIdGrade: string): Promise<clsXzGradeEN|null>  
{
const strThisFuncName = "GetObjByIdGradeAsync";

if (IsNullOrEmpty(strIdGrade) == true)
{
  const strMsg = Format("参数:[strIdGrade]不能为空!(In clsXzGradeWApi.GetObjByIdGradeAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdGrade]的长度:[{0}]不正确!(clsXzGradeWApi.GetObjByIdGradeAsync)", strIdGrade.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdGrade";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdGrade,
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
const objXzGrade = XzGrade_GetObjFromJsonObj(returnObj);
return objXzGrade;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param strIdGrade:所给的关键字
 * @returns 对象
*/
export  async function XzGrade_GetObjByIdGradeCache(strIdGrade: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdGradeCache";

if (IsNullOrEmpty(strIdGrade) == true)
{
  const strMsg = Format("参数:[strIdGrade]不能为空!(In clsXzGradeWApi.GetObjByIdGradeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdGrade]的长度:[{0}]不正确!(clsXzGradeWApi.GetObjByIdGradeCache)", strIdGrade.length);
console.error(strMsg);
throw (strMsg);
}
const arrXzGradeObjLstCache = await XzGrade_GetObjLstCache();
try
{
const arrXzGradeSel = arrXzGradeObjLstCache.filter(x => 
 x.idGrade == strIdGrade );
let objXzGrade: clsXzGradeEN;
if (arrXzGradeSel.length > 0)
{
objXzGrade = arrXzGradeSel[0];
return objXzGrade;
}
else
{
if (bolTryAsyncOnce == true)
{
const objXzGradeConst = await XzGrade_GetObjByIdGradeAsync(strIdGrade);
if (objXzGradeConst != null)
{
XzGrade_ReFreshThisCache();
return objXzGradeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdGrade, xzGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdGrade:所给的关键字
 * @returns 对象
*/
export  async function XzGrade_GetObjByIdGradelocalStorage(strIdGrade: string) {
const strThisFuncName = "GetObjByIdGradelocalStorage";

if (IsNullOrEmpty(strIdGrade) == true)
{
  const strMsg = Format("参数:[strIdGrade]不能为空!(In clsXzGradeWApi.GetObjByIdGradelocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdGrade]的长度:[{0}]不正确!(clsXzGradeWApi.GetObjByIdGradelocalStorage)", strIdGrade.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsXzGradeEN._CurrTabName, strIdGrade);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objXzGradeCache: clsXzGradeEN = JSON.parse(strTempObj);
return objXzGradeCache;
}
try
{
const objXzGrade = await XzGrade_GetObjByIdGradeAsync(strIdGrade);
if (objXzGrade != null)
{
localStorage.setItem(strKey, JSON.stringify(objXzGrade));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objXzGrade;
}
return objXzGrade;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdGrade, xzGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objXzGrade:所给的对象
 * @returns 对象
*/
export  async function XzGrade_UpdateObjInLstCache(objXzGrade: clsXzGradeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrXzGradeObjLstCache = await XzGrade_GetObjLstCache();
const obj = arrXzGradeObjLstCache.find(x => 
x.idGrade == objXzGrade.idGrade);
if (obj != null)
{
objXzGrade.idGrade = obj.idGrade;
ObjectAssign( obj, objXzGrade);
}
else
{
arrXzGradeObjLstCache.push(objXzGrade);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, xzGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdGrade:所给的关键字
 * @returns 对象
*/
export  async function XzGrade_GetNameByIdGradeCache(strIdGrade: string) {

if (IsNullOrEmpty(strIdGrade) == true)
{
  const strMsg = Format("参数:[strIdGrade]不能为空!(In clsXzGradeWApi.GetNameByIdGradeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdGrade]的长度:[{0}]不正确!(clsXzGradeWApi.GetNameByIdGradeCache)", strIdGrade.length);
console.error(strMsg);
throw (strMsg);
}
const arrXzGradeObjLstCache = await XzGrade_GetObjLstCache();
if (arrXzGradeObjLstCache == null) return "";
try
{
const arrXzGradeSel = arrXzGradeObjLstCache.filter(x => 
 x.idGrade == strIdGrade );
let objXzGrade: clsXzGradeEN;
if (arrXzGradeSel.length > 0)
{
objXzGrade = arrXzGradeSel[0];
return objXzGrade.gradeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdGrade);
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
export  async function XzGrade_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsXzGradeEN.con_IdGrade)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsXzGradeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsXzGradeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdGrade = strInValue;
if (IsNullOrEmpty(strIdGrade) == true)
{
return "";
}
const objXzGrade = await XzGrade_GetObjByIdGradeCache(strIdGrade );
if (objXzGrade == null) return "";
if (objXzGrade.GetFldValue(strOutFldName) == null) return "";
return objXzGrade.GetFldValue(strOutFldName).toString();
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
export  function XzGrade_SortFunDefa(a:clsXzGradeEN , b:clsXzGradeEN): number 
{
return a.idGrade.localeCompare(b.idGrade);
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
export  function XzGrade_SortFunDefa2Fld(a:clsXzGradeEN , b:clsXzGradeEN): number 
{
if (a.gradeName == b.gradeName) return a.idStudyLevel.localeCompare(b.idStudyLevel);
else return a.gradeName.localeCompare(b.gradeName);
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
export  function XzGrade_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsXzGradeEN.con_IdGrade:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
return a.idGrade.localeCompare(b.idGrade);
}
case clsXzGradeEN.con_GradeName:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
return a.gradeName.localeCompare(b.gradeName);
}
case clsXzGradeEN.con_IdStudyLevel:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
return a.idStudyLevel.localeCompare(b.idStudyLevel);
}
case clsXzGradeEN.con_GradeLeaderId:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
if (a.gradeLeaderId == null) return -1;
if (b.gradeLeaderId == null) return 1;
return a.gradeLeaderId.localeCompare(b.gradeLeaderId);
}
case clsXzGradeEN.con_GradeIndex:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
return a.gradeIndex-b.gradeIndex;
}
case clsXzGradeEN.con_ModifyUserId:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsXzGradeEN.con_ModifyDate:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsXzGradeEN.con_Memo:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[XzGrade]中不存在!(in ${ xzGrade_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsXzGradeEN.con_IdGrade:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
return b.idGrade.localeCompare(a.idGrade);
}
case clsXzGradeEN.con_GradeName:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
return b.gradeName.localeCompare(a.gradeName);
}
case clsXzGradeEN.con_IdStudyLevel:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
return b.idStudyLevel.localeCompare(a.idStudyLevel);
}
case clsXzGradeEN.con_GradeLeaderId:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
if (b.gradeLeaderId == null) return -1;
if (a.gradeLeaderId == null) return 1;
return b.gradeLeaderId.localeCompare(a.gradeLeaderId);
}
case clsXzGradeEN.con_GradeIndex:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
return b.gradeIndex-a.gradeIndex;
}
case clsXzGradeEN.con_ModifyUserId:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsXzGradeEN.con_ModifyDate:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsXzGradeEN.con_Memo:
return (a: clsXzGradeEN, b: clsXzGradeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[XzGrade]中不存在!(in ${ xzGrade_ConstructorName}.${ strThisFuncName})`;
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
export  async function XzGrade_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsXzGradeEN.con_IdGrade:
return (obj: clsXzGradeEN) => {
return obj.idGrade === value;
}
case clsXzGradeEN.con_GradeName:
return (obj: clsXzGradeEN) => {
return obj.gradeName === value;
}
case clsXzGradeEN.con_IdStudyLevel:
return (obj: clsXzGradeEN) => {
return obj.idStudyLevel === value;
}
case clsXzGradeEN.con_GradeLeaderId:
return (obj: clsXzGradeEN) => {
return obj.gradeLeaderId === value;
}
case clsXzGradeEN.con_GradeIndex:
return (obj: clsXzGradeEN) => {
return obj.gradeIndex === value;
}
case clsXzGradeEN.con_ModifyUserId:
return (obj: clsXzGradeEN) => {
return obj.modifyUserId === value;
}
case clsXzGradeEN.con_ModifyDate:
return (obj: clsXzGradeEN) => {
return obj.modifyDate === value;
}
case clsXzGradeEN.con_Memo:
return (obj: clsXzGradeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[XzGrade]中不存在!(in ${ xzGrade_ConstructorName}.${ strThisFuncName})`;
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
export  async function XzGrade_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsXzGradeEN.con_IdGrade)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrXzGrade = await XzGrade_GetObjLstCache();
if (arrXzGrade == null) return [];
let arrXzGradeSel = arrXzGrade;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrXzGradeSel = arrXzGradeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrXzGradeSel.length == 0) return [];
return arrXzGradeSel.map(x=>x.idGrade);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function XzGrade_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetFirstObjAsync(strWhereCond: string): Promise<clsXzGradeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const objXzGrade = XzGrade_GetObjFromJsonObj(returnObj);
return objXzGrade;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsXzGradeEN._CurrTabName;
if (IsNullOrEmpty(clsXzGradeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsXzGradeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrXzGradeExObjLstCache: Array<clsXzGradeEN> = CacheHelper.Get(strKey);
const arrXzGradeObjLstT = XzGrade_GetObjLstByJSONObjLst(arrXzGradeExObjLstCache);
return arrXzGradeObjLstT;
}
try
{
const arrXzGradeExObjLst = await XzGrade_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrXzGradeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrXzGradeExObjLst.length);
console.log(strInfo);
return arrXzGradeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, xzGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzGrade_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsXzGradeEN._CurrTabName;
if (IsNullOrEmpty(clsXzGradeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsXzGradeEN.CacheAddiCondition);
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
const arrXzGradeExObjLstCache: Array<clsXzGradeEN> = JSON.parse(strTempObjLst);
const arrXzGradeObjLstT = XzGrade_GetObjLstByJSONObjLst(arrXzGradeExObjLstCache);
return arrXzGradeObjLstT;
}
try
{
const arrXzGradeExObjLst = await XzGrade_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrXzGradeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrXzGradeExObjLst.length);
console.log(strInfo);
return arrXzGradeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, xzGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzGrade_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsXzGradeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrXzGradeObjLstCache: Array<clsXzGradeEN> = JSON.parse(strTempObjLst);
return arrXzGradeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function XzGrade_GetObjLstAsync(strWhereCond: string): Promise<Array<clsXzGradeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", xzGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = XzGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsXzGradeEN._CurrTabName;
if (IsNullOrEmpty(clsXzGradeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsXzGradeEN.CacheAddiCondition);
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
const arrXzGradeExObjLstCache: Array<clsXzGradeEN> = JSON.parse(strTempObjLst);
const arrXzGradeObjLstT = XzGrade_GetObjLstByJSONObjLst(arrXzGradeExObjLstCache);
return arrXzGradeObjLstT;
}
try
{
const arrXzGradeExObjLst = await XzGrade_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrXzGradeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrXzGradeExObjLst.length);
console.log(strInfo);
return arrXzGradeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, xzGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzGrade_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsXzGradeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrXzGradeObjLstCache: Array<clsXzGradeEN> = JSON.parse(strTempObjLst);
return arrXzGradeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzGrade_GetObjLstCache(): Promise<Array<clsXzGradeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrXzGradeObjLstCache;
switch (clsXzGradeEN.CacheModeId)
{
case "04"://sessionStorage
arrXzGradeObjLstCache = await XzGrade_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrXzGradeObjLstCache = await XzGrade_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrXzGradeObjLstCache = await XzGrade_GetObjLstClientCache();
break;
default:
arrXzGradeObjLstCache = await XzGrade_GetObjLstClientCache();
break;
}
return arrXzGradeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzGrade_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrXzGradeObjLstCache;
switch (clsXzGradeEN.CacheModeId)
{
case "04"://sessionStorage
arrXzGradeObjLstCache = await XzGrade_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrXzGradeObjLstCache = await XzGrade_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrXzGradeObjLstCache = null;
break;
default:
arrXzGradeObjLstCache = null;
break;
}
return arrXzGradeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdGradeCond:条件对象
 * @returns 对象列表子集
*/
export  async function XzGrade_GetSubObjLstCache(objXzGradeCond: clsXzGradeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrXzGradeObjLstCache = await XzGrade_GetObjLstCache();
let arrXzGradeSel = arrXzGradeObjLstCache;
if (objXzGradeCond.sfFldComparisonOp == null || objXzGradeCond.sfFldComparisonOp == "") return arrXzGradeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objXzGradeCond.sfFldComparisonOp);
//console.log("clsXzGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objXzGradeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objXzGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrXzGradeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objXzGradeCond), xzGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsXzGradeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdGrade:关键字列表
 * @returns 对象列表
 **/
export  async function XzGrade_GetObjLstByIdGradeLstAsync(arrIdGrade: Array<string>): Promise<Array<clsXzGradeEN>>  
{
const strThisFuncName = "GetObjLstByIdGradeLstAsync";
const strAction = "GetObjLstByIdGradeLst";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdGrade, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", xzGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = XzGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param arrstrIdGradeLst:关键字列表
 * @returns 对象列表
*/
export  async function XzGrade_GetObjLstByIdGradeLstCache(arrIdGradeLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdGradeLstCache";
try
{
const arrXzGradeObjLstCache = await XzGrade_GetObjLstCache();
const arrXzGradeSel = arrXzGradeObjLstCache.filter(x => arrIdGradeLst.indexOf(x.idGrade)>-1);
return arrXzGradeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdGradeLst.join(","), xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsXzGradeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", xzGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = XzGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsXzGradeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", xzGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = XzGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsXzGradeEN>();
const arrXzGradeObjLstCache = await XzGrade_GetObjLstCache();
if (arrXzGradeObjLstCache.length == 0) return arrXzGradeObjLstCache;
let arrXzGradeSel = arrXzGradeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objXzGradeCond = new clsXzGradeEN();
ObjectAssign(objXzGradeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsXzGradeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objXzGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrXzGradeSel = arrXzGradeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrXzGradeSel.length == 0) return arrXzGradeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrXzGradeSel = arrXzGradeSel.sort(XzGrade_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrXzGradeSel = arrXzGradeSel.sort(objPagerPara.sortFun);
}
arrXzGradeSel = arrXzGradeSel.slice(intStart, intEnd);     
return arrXzGradeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, xzGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsXzGradeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function XzGrade_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsXzGradeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsXzGradeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", xzGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = XzGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param strIdGrade:关键字
 * @returns 获取删除的结果
 **/
export  async function XzGrade_DelRecordAsync(strIdGrade: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(xzGrade_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdGrade);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param arrIdGrade:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function XzGrade_DelXzGradesAsync(arrIdGrade: Array<string>): Promise<number> 
{
const strThisFuncName = "DelXzGradesAsync";
const strAction = "DelXzGrades";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdGrade, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_DelXzGradesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelXzGradesByCondAsync";
const strAction = "DelXzGradesByCond";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param objXzGradeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function XzGrade_AddNewRecordAsync(objXzGradeEN: clsXzGradeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objXzGradeEN.idGrade === null || objXzGradeEN.idGrade === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objXzGradeEN);
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param objXzGradeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function XzGrade_AddNewRecordWithMaxIdAsync(objXzGradeEN: clsXzGradeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param objXzGradeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function XzGrade_AddNewRecordWithReturnKeyAsync(objXzGradeEN: clsXzGradeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param objXzGradeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function XzGrade_UpdateRecordAsync(objXzGradeEN: clsXzGradeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objXzGradeEN.sfUpdFldSetStr === undefined || objXzGradeEN.sfUpdFldSetStr === null || objXzGradeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objXzGradeEN.idGrade);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param objXzGradeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function XzGrade_UpdateWithConditionAsync(objXzGradeEN: clsXzGradeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objXzGradeEN.sfUpdFldSetStr === undefined || objXzGradeEN.sfUpdFldSetStr === null || objXzGradeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objXzGradeEN.idGrade);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);
objXzGradeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param objstrIdGradeCond:条件对象
 * @returns 对象列表子集
*/
export  async function XzGrade_IsExistRecordCache(objXzGradeCond: clsXzGradeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrXzGradeObjLstCache = await XzGrade_GetObjLstCache();
if (arrXzGradeObjLstCache == null) return false;
let arrXzGradeSel = arrXzGradeObjLstCache;
if (objXzGradeCond.sfFldComparisonOp == null || objXzGradeCond.sfFldComparisonOp == "") return arrXzGradeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objXzGradeCond.sfFldComparisonOp);
//console.log("clsXzGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objXzGradeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objXzGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrXzGradeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objXzGradeCond), xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param strIdGrade:所给的关键字
 * @returns 对象
*/
export  async function XzGrade_IsExistCache(strIdGrade:string) {
const strThisFuncName = "IsExistCache";
const arrXzGradeObjLstCache = await XzGrade_GetObjLstCache();
if (arrXzGradeObjLstCache == null) return false;
try
{
const arrXzGradeSel = arrXzGradeObjLstCache.filter(x => x.idGrade == strIdGrade);
if (arrXzGradeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdGrade, xzGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdGrade:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function XzGrade_IsExistAsync(strIdGrade: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdGrade
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
 * @param objXzGradeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function XzGrade_GetRecCountByCondCache(objXzGradeCond: clsXzGradeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrXzGradeObjLstCache = await XzGrade_GetObjLstCache();
if (arrXzGradeObjLstCache == null) return 0;
let arrXzGradeSel = arrXzGradeObjLstCache;
if (objXzGradeCond.sfFldComparisonOp == null || objXzGradeCond.sfFldComparisonOp == "") return arrXzGradeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objXzGradeCond.sfFldComparisonOp);
//console.log("clsXzGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objXzGradeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objXzGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrXzGradeSel = arrXzGradeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrXzGradeSel = arrXzGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrXzGradeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objXzGradeCond), xzGrade_ConstructorName, strThisFuncName);
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
export  async function XzGrade_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(xzGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzGrade_ConstructorName, strThisFuncName);
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
export  function XzGrade_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function XzGrade_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsXzGradeEN._CurrTabName;
switch (clsXzGradeEN.CacheModeId)
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
export  function XzGrade_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsXzGradeEN._CurrTabName;
switch (clsXzGradeEN.CacheModeId)
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
export  async function XzGrade_BindDdl_IdGradeInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdGradeInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdGradeInDivCache");
let arrObjLstSel = await XzGrade_GetObjLstCache();
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.sort((x, y) => x.gradeIndex - y.gradeIndex);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsXzGradeEN.con_IdGrade, clsXzGradeEN.con_GradeName, "年级");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function XzGrade_CheckPropertyNew(pobjXzGradeEN: clsXzGradeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjXzGradeEN.gradeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[年级名称]不能为空(In 年级)!(clsXzGradeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.idStudyLevel) === true )
{
 throw new Error(`(errid:Watl000411)字段[学段流水号]不能为空(In 年级)!(clsXzGradeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjXzGradeEN.idGrade) == false && GetStrLen(pobjXzGradeEN.idGrade) > 4)
{
 throw new Error(`(errid:Watl000413)字段[年级流水号(idGrade)]的长度不能超过4(In 年级(XzGrade))!值:${pobjXzGradeEN.idGrade}(clsXzGradeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.gradeName) == false && GetStrLen(pobjXzGradeEN.gradeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[年级名称(gradeName)]的长度不能超过50(In 年级(XzGrade))!值:${pobjXzGradeEN.gradeName}(clsXzGradeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.idStudyLevel) == false && GetStrLen(pobjXzGradeEN.idStudyLevel) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学段流水号(idStudyLevel)]的长度不能超过4(In 年级(XzGrade))!值:${pobjXzGradeEN.idStudyLevel}(clsXzGradeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.gradeLeaderId) == false && GetStrLen(pobjXzGradeEN.gradeLeaderId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[年级组长Id(gradeLeaderId)]的长度不能超过8(In 年级(XzGrade))!值:${pobjXzGradeEN.gradeLeaderId}(clsXzGradeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.modifyUserId) == false && GetStrLen(pobjXzGradeEN.modifyUserId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 年级(XzGrade))!值:${pobjXzGradeEN.modifyUserId}(clsXzGradeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.modifyDate) == false && GetStrLen(pobjXzGradeEN.modifyDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 年级(XzGrade))!值:${pobjXzGradeEN.modifyDate}(clsXzGradeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.memo) == false && GetStrLen(pobjXzGradeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 年级(XzGrade))!值:${pobjXzGradeEN.memo}(clsXzGradeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjXzGradeEN.idGrade) == false && undefined !== pobjXzGradeEN.idGrade && tzDataType.isString(pobjXzGradeEN.idGrade) === false)
{
 throw new Error(`(errid:Watl000414)字段[年级流水号(idGrade)]的值:[${pobjXzGradeEN.idGrade}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.gradeName) == false && undefined !== pobjXzGradeEN.gradeName && tzDataType.isString(pobjXzGradeEN.gradeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[年级名称(gradeName)]的值:[${pobjXzGradeEN.gradeName}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.idStudyLevel) == false && undefined !== pobjXzGradeEN.idStudyLevel && tzDataType.isString(pobjXzGradeEN.idStudyLevel) === false)
{
 throw new Error(`(errid:Watl000414)字段[学段流水号(idStudyLevel)]的值:[${pobjXzGradeEN.idStudyLevel}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.gradeLeaderId) == false && undefined !== pobjXzGradeEN.gradeLeaderId && tzDataType.isString(pobjXzGradeEN.gradeLeaderId) === false)
{
 throw new Error(`(errid:Watl000414)字段[年级组长Id(gradeLeaderId)]的值:[${pobjXzGradeEN.gradeLeaderId}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckPropertyNew0)`);
}
if (null != pobjXzGradeEN.gradeIndex && undefined !== pobjXzGradeEN.gradeIndex && tzDataType.isNumber(pobjXzGradeEN.gradeIndex) === false)
{
 throw new Error(`(errid:Watl000414)字段[年级序号(gradeIndex)]的值:[${pobjXzGradeEN.gradeIndex}], 非法,应该为数值型(In 年级(XzGrade))!(clsXzGradeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.modifyUserId) == false && undefined !== pobjXzGradeEN.modifyUserId && tzDataType.isString(pobjXzGradeEN.modifyUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(modifyUserId)]的值:[${pobjXzGradeEN.modifyUserId}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.modifyDate) == false && undefined !== pobjXzGradeEN.modifyDate && tzDataType.isString(pobjXzGradeEN.modifyDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(modifyDate)]的值:[${pobjXzGradeEN.modifyDate}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.memo) == false && undefined !== pobjXzGradeEN.memo && tzDataType.isString(pobjXzGradeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjXzGradeEN.memo}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function XzGrade_CheckProperty4Update(pobjXzGradeEN: clsXzGradeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjXzGradeEN.idGrade) == false && GetStrLen(pobjXzGradeEN.idGrade) > 4)
{
 throw new Error(`(errid:Watl000416)字段[年级流水号(idGrade)]的长度不能超过4(In 年级(XzGrade))!值:${pobjXzGradeEN.idGrade}(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.gradeName) == false && GetStrLen(pobjXzGradeEN.gradeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[年级名称(gradeName)]的长度不能超过50(In 年级(XzGrade))!值:${pobjXzGradeEN.gradeName}(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.idStudyLevel) == false && GetStrLen(pobjXzGradeEN.idStudyLevel) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学段流水号(idStudyLevel)]的长度不能超过4(In 年级(XzGrade))!值:${pobjXzGradeEN.idStudyLevel}(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.gradeLeaderId) == false && GetStrLen(pobjXzGradeEN.gradeLeaderId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[年级组长Id(gradeLeaderId)]的长度不能超过8(In 年级(XzGrade))!值:${pobjXzGradeEN.gradeLeaderId}(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.modifyUserId) == false && GetStrLen(pobjXzGradeEN.modifyUserId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 年级(XzGrade))!值:${pobjXzGradeEN.modifyUserId}(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.modifyDate) == false && GetStrLen(pobjXzGradeEN.modifyDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 年级(XzGrade))!值:${pobjXzGradeEN.modifyDate}(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.memo) == false && GetStrLen(pobjXzGradeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 年级(XzGrade))!值:${pobjXzGradeEN.memo}(clsXzGradeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjXzGradeEN.idGrade) == false && undefined !== pobjXzGradeEN.idGrade && tzDataType.isString(pobjXzGradeEN.idGrade) === false)
{
 throw new Error(`(errid:Watl000417)字段[年级流水号(idGrade)]的值:[${pobjXzGradeEN.idGrade}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.gradeName) == false && undefined !== pobjXzGradeEN.gradeName && tzDataType.isString(pobjXzGradeEN.gradeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[年级名称(gradeName)]的值:[${pobjXzGradeEN.gradeName}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.idStudyLevel) == false && undefined !== pobjXzGradeEN.idStudyLevel && tzDataType.isString(pobjXzGradeEN.idStudyLevel) === false)
{
 throw new Error(`(errid:Watl000417)字段[学段流水号(idStudyLevel)]的值:[${pobjXzGradeEN.idStudyLevel}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.gradeLeaderId) == false && undefined !== pobjXzGradeEN.gradeLeaderId && tzDataType.isString(pobjXzGradeEN.gradeLeaderId) === false)
{
 throw new Error(`(errid:Watl000417)字段[年级组长Id(gradeLeaderId)]的值:[${pobjXzGradeEN.gradeLeaderId}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckProperty4Update)`);
}
if (null != pobjXzGradeEN.gradeIndex && undefined !== pobjXzGradeEN.gradeIndex && tzDataType.isNumber(pobjXzGradeEN.gradeIndex) === false)
{
 throw new Error(`(errid:Watl000417)字段[年级序号(gradeIndex)]的值:[${pobjXzGradeEN.gradeIndex}], 非法,应该为数值型(In 年级(XzGrade))!(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.modifyUserId) == false && undefined !== pobjXzGradeEN.modifyUserId && tzDataType.isString(pobjXzGradeEN.modifyUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(modifyUserId)]的值:[${pobjXzGradeEN.modifyUserId}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.modifyDate) == false && undefined !== pobjXzGradeEN.modifyDate && tzDataType.isString(pobjXzGradeEN.modifyDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(modifyDate)]的值:[${pobjXzGradeEN.modifyDate}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzGradeEN.memo) == false && undefined !== pobjXzGradeEN.memo && tzDataType.isString(pobjXzGradeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjXzGradeEN.memo}], 非法,应该为字符型(In 年级(XzGrade))!(clsXzGradeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjXzGradeEN.idGrade) === true 
 || pobjXzGradeEN.idGrade.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[年级流水号]不能为空(In 年级)!(clsXzGradeBL:CheckProperty4Update)`);
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
export  function XzGrade_GetJSONStrByObj (pobjXzGradeEN: clsXzGradeEN): string
{
pobjXzGradeEN.sfUpdFldSetStr = pobjXzGradeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjXzGradeEN);
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
export  function XzGrade_GetObjLstByJSONStr (strJSON: string): Array<clsXzGradeEN>
{
let arrXzGradeObjLst = new Array<clsXzGradeEN>();
if (strJSON === "")
{
return arrXzGradeObjLst;
}
try
{
arrXzGradeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrXzGradeObjLst;
}
return arrXzGradeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzGradeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function XzGrade_GetObjLstByJSONObjLst (arrXzGradeObjLstS: Array<clsXzGradeEN>): Array<clsXzGradeEN>
{
const arrXzGradeObjLst = new Array<clsXzGradeEN>();
for (const objInFor of arrXzGradeObjLstS) {
const obj1 = XzGrade_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrXzGradeObjLst.push(obj1);
}
return arrXzGradeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function XzGrade_GetObjByJSONStr (strJSON: string): clsXzGradeEN
{
let pobjXzGradeEN = new clsXzGradeEN();
if (strJSON === "")
{
return pobjXzGradeEN;
}
try
{
pobjXzGradeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjXzGradeEN;
}
return pobjXzGradeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function XzGrade_GetCombineCondition(objXzGradeCond: clsXzGradeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objXzGradeCond.dicFldComparisonOp, clsXzGradeEN.con_IdGrade) == true)
{
const strComparisonOpIdGrade:string = objXzGradeCond.dicFldComparisonOp[clsXzGradeEN.con_IdGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzGradeEN.con_IdGrade, objXzGradeCond.idGrade, strComparisonOpIdGrade);
}
if (Object.prototype.hasOwnProperty.call(objXzGradeCond.dicFldComparisonOp, clsXzGradeEN.con_GradeName) == true)
{
const strComparisonOpGradeName:string = objXzGradeCond.dicFldComparisonOp[clsXzGradeEN.con_GradeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzGradeEN.con_GradeName, objXzGradeCond.gradeName, strComparisonOpGradeName);
}
if (Object.prototype.hasOwnProperty.call(objXzGradeCond.dicFldComparisonOp, clsXzGradeEN.con_IdStudyLevel) == true)
{
const strComparisonOpIdStudyLevel:string = objXzGradeCond.dicFldComparisonOp[clsXzGradeEN.con_IdStudyLevel];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzGradeEN.con_IdStudyLevel, objXzGradeCond.idStudyLevel, strComparisonOpIdStudyLevel);
}
if (Object.prototype.hasOwnProperty.call(objXzGradeCond.dicFldComparisonOp, clsXzGradeEN.con_GradeLeaderId) == true)
{
const strComparisonOpGradeLeaderId:string = objXzGradeCond.dicFldComparisonOp[clsXzGradeEN.con_GradeLeaderId];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzGradeEN.con_GradeLeaderId, objXzGradeCond.gradeLeaderId, strComparisonOpGradeLeaderId);
}
if (Object.prototype.hasOwnProperty.call(objXzGradeCond.dicFldComparisonOp, clsXzGradeEN.con_GradeIndex) == true)
{
const strComparisonOpGradeIndex:string = objXzGradeCond.dicFldComparisonOp[clsXzGradeEN.con_GradeIndex];
strWhereCond += Format(" And {0} {2} {1}", clsXzGradeEN.con_GradeIndex, objXzGradeCond.gradeIndex, strComparisonOpGradeIndex);
}
if (Object.prototype.hasOwnProperty.call(objXzGradeCond.dicFldComparisonOp, clsXzGradeEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objXzGradeCond.dicFldComparisonOp[clsXzGradeEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzGradeEN.con_ModifyUserId, objXzGradeCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objXzGradeCond.dicFldComparisonOp, clsXzGradeEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objXzGradeCond.dicFldComparisonOp[clsXzGradeEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzGradeEN.con_ModifyDate, objXzGradeCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objXzGradeCond.dicFldComparisonOp, clsXzGradeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objXzGradeCond.dicFldComparisonOp[clsXzGradeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzGradeEN.con_Memo, objXzGradeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzGradeENS:源对象
 * @param objXzGradeENT:目标对象
*/
export  function XzGrade_CopyObjTo(objXzGradeENS: clsXzGradeEN , objXzGradeENT: clsXzGradeEN ): void 
{
objXzGradeENT.idGrade = objXzGradeENS.idGrade; //年级流水号
objXzGradeENT.gradeName = objXzGradeENS.gradeName; //年级名称
objXzGradeENT.idStudyLevel = objXzGradeENS.idStudyLevel; //学段流水号
objXzGradeENT.gradeLeaderId = objXzGradeENS.gradeLeaderId; //年级组长Id
objXzGradeENT.gradeIndex = objXzGradeENS.gradeIndex; //年级序号
objXzGradeENT.modifyUserId = objXzGradeENS.modifyUserId; //修改人
objXzGradeENT.modifyDate = objXzGradeENS.modifyDate; //修改日期
objXzGradeENT.memo = objXzGradeENS.memo; //备注
objXzGradeENT.sfUpdFldSetStr = objXzGradeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzGradeENS:源对象
 * @param objXzGradeENT:目标对象
*/
export  function XzGrade_GetObjFromJsonObj(objXzGradeENS: clsXzGradeEN): clsXzGradeEN 
{
 const objXzGradeENT: clsXzGradeEN = new clsXzGradeEN();
ObjectAssign(objXzGradeENT, objXzGradeENS);
 return objXzGradeENT;
}