
 /**
 * 类名:clsRsPoliticsWApi
 * 表名:RsPolitics(01120110)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/27 16:36:49
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
 * 政治面貌(RsPolitics)
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
import { clsRsPoliticsEN } from "@/ts/L0Entity/SysPara/clsRsPoliticsEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const rsPolitics_Controller = "RsPoliticsApi";
 export const rsPolitics_ConstructorName = "rsPolitics";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdPolitics:关键字
 * @returns 对象
 **/
export  async function RsPolitics_GetObjByIdPoliticsAsync(strIdPolitics: string): Promise<clsRsPoliticsEN|null>  
{
const strThisFuncName = "GetObjByIdPoliticsAsync";

if (IsNullOrEmpty(strIdPolitics) == true)
{
  const strMsg = Format("参数:[strIdPolitics]不能为空!(In clsRsPoliticsWApi.GetObjByIdPoliticsAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdPolitics.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdPolitics]的长度:[{0}]不正确!(clsRsPoliticsWApi.GetObjByIdPoliticsAsync)", strIdPolitics.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdPolitics";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdPolitics,
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
const objRsPolitics = RsPolitics_GetObjFromJsonObj(returnObj);
return objRsPolitics;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param strIdPolitics:所给的关键字
 * @returns 对象
*/
export  async function RsPolitics_GetObjByIdPoliticsCache(strIdPolitics: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdPoliticsCache";

if (IsNullOrEmpty(strIdPolitics) == true)
{
  const strMsg = Format("参数:[strIdPolitics]不能为空!(In clsRsPoliticsWApi.GetObjByIdPoliticsCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdPolitics.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdPolitics]的长度:[{0}]不正确!(clsRsPoliticsWApi.GetObjByIdPoliticsCache)", strIdPolitics.length);
console.error(strMsg);
throw (strMsg);
}
const arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstCache();
try
{
const arrRsPoliticsSel = arrRsPoliticsObjLstCache.filter(x => 
 x.idPolitics == strIdPolitics );
let objRsPolitics: clsRsPoliticsEN;
if (arrRsPoliticsSel.length > 0)
{
objRsPolitics = arrRsPoliticsSel[0];
return objRsPolitics;
}
else
{
if (bolTryAsyncOnce == true)
{
const objRsPoliticsConst = await RsPolitics_GetObjByIdPoliticsAsync(strIdPolitics);
if (objRsPoliticsConst != null)
{
RsPolitics_ReFreshThisCache();
return objRsPoliticsConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdPolitics, rsPolitics_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdPolitics:所给的关键字
 * @returns 对象
*/
export  async function RsPolitics_GetObjByIdPoliticslocalStorage(strIdPolitics: string) {
const strThisFuncName = "GetObjByIdPoliticslocalStorage";

if (IsNullOrEmpty(strIdPolitics) == true)
{
  const strMsg = Format("参数:[strIdPolitics]不能为空!(In clsRsPoliticsWApi.GetObjByIdPoliticslocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdPolitics.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdPolitics]的长度:[{0}]不正确!(clsRsPoliticsWApi.GetObjByIdPoliticslocalStorage)", strIdPolitics.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsRsPoliticsEN._CurrTabName, strIdPolitics);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objRsPoliticsCache: clsRsPoliticsEN = JSON.parse(strTempObj);
return objRsPoliticsCache;
}
try
{
const objRsPolitics = await RsPolitics_GetObjByIdPoliticsAsync(strIdPolitics);
if (objRsPolitics != null)
{
localStorage.setItem(strKey, JSON.stringify(objRsPolitics));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objRsPolitics;
}
return objRsPolitics;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdPolitics, rsPolitics_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objRsPolitics:所给的对象
 * @returns 对象
*/
export  async function RsPolitics_UpdateObjInLstCache(objRsPolitics: clsRsPoliticsEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstCache();
const obj = arrRsPoliticsObjLstCache.find(x => 
x.idPolitics == objRsPolitics.idPolitics);
if (obj != null)
{
objRsPolitics.idPolitics = obj.idPolitics;
ObjectAssign( obj, objRsPolitics);
}
else
{
arrRsPoliticsObjLstCache.push(objRsPolitics);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, rsPolitics_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdPolitics:所给的关键字
 * @returns 对象
*/
export  async function RsPolitics_GetNameByIdPoliticsCache(strIdPolitics: string) {

if (IsNullOrEmpty(strIdPolitics) == true)
{
  const strMsg = Format("参数:[strIdPolitics]不能为空!(In clsRsPoliticsWApi.GetNameByIdPoliticsCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdPolitics.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdPolitics]的长度:[{0}]不正确!(clsRsPoliticsWApi.GetNameByIdPoliticsCache)", strIdPolitics.length);
console.error(strMsg);
throw (strMsg);
}
const arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstCache();
if (arrRsPoliticsObjLstCache == null) return "";
try
{
const arrRsPoliticsSel = arrRsPoliticsObjLstCache.filter(x => 
 x.idPolitics == strIdPolitics );
let objRsPolitics: clsRsPoliticsEN;
if (arrRsPoliticsSel.length > 0)
{
objRsPolitics = arrRsPoliticsSel[0];
return objRsPolitics.politicsName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdPolitics);
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
export  async function RsPolitics_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsRsPoliticsEN.con_IdPolitics)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsRsPoliticsEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsRsPoliticsEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdPolitics = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objRsPolitics = await RsPolitics_GetObjByIdPoliticsCache(strIdPolitics );
if (objRsPolitics == null) return "";
if (objRsPolitics.GetFldValue(strOutFldName) == null) return "";
return objRsPolitics.GetFldValue(strOutFldName).toString();
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
export  function RsPolitics_SortFunDefa(a:clsRsPoliticsEN , b:clsRsPoliticsEN): number 
{
return a.idPolitics.localeCompare(b.idPolitics);
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
export  function RsPolitics_SortFunDefa2Fld(a:clsRsPoliticsEN , b:clsRsPoliticsEN): number 
{
if (a.politicsId == b.politicsId) return a.politicsName.localeCompare(b.politicsName);
else return a.politicsId.localeCompare(b.politicsId);
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
export  function RsPolitics_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRsPoliticsEN.con_IdPolitics:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
return a.idPolitics.localeCompare(b.idPolitics);
}
case clsRsPoliticsEN.con_PoliticsId:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
return a.politicsId.localeCompare(b.politicsId);
}
case clsRsPoliticsEN.con_PoliticsName:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
return a.politicsName.localeCompare(b.politicsName);
}
case clsRsPoliticsEN.con_PoliticsIdNgb:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
if (a.politicsIdNgb == null) return -1;
if (b.politicsIdNgb == null) return 1;
return a.politicsIdNgb.localeCompare(b.politicsIdNgb);
}
case clsRsPoliticsEN.con_PoliticsRecruitId:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
if (a.politicsRecruitId == null) return -1;
if (b.politicsRecruitId == null) return 1;
return a.politicsRecruitId.localeCompare(b.politicsRecruitId);
}
case clsRsPoliticsEN.con_ModifyDate:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsRsPoliticsEN.con_ModifyUserId:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsPolitics]中不存在!(in ${ rsPolitics_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRsPoliticsEN.con_IdPolitics:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
return b.idPolitics.localeCompare(a.idPolitics);
}
case clsRsPoliticsEN.con_PoliticsId:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
return b.politicsId.localeCompare(a.politicsId);
}
case clsRsPoliticsEN.con_PoliticsName:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
return b.politicsName.localeCompare(a.politicsName);
}
case clsRsPoliticsEN.con_PoliticsIdNgb:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
if (b.politicsIdNgb == null) return -1;
if (a.politicsIdNgb == null) return 1;
return b.politicsIdNgb.localeCompare(a.politicsIdNgb);
}
case clsRsPoliticsEN.con_PoliticsRecruitId:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
if (b.politicsRecruitId == null) return -1;
if (a.politicsRecruitId == null) return 1;
return b.politicsRecruitId.localeCompare(a.politicsRecruitId);
}
case clsRsPoliticsEN.con_ModifyDate:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsRsPoliticsEN.con_ModifyUserId:
return (a: clsRsPoliticsEN, b: clsRsPoliticsEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsPolitics]中不存在!(in ${ rsPolitics_ConstructorName}.${ strThisFuncName})`;
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
export  async function RsPolitics_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRsPoliticsEN.con_IdPolitics:
return (obj: clsRsPoliticsEN) => {
return obj.idPolitics === value;
}
case clsRsPoliticsEN.con_PoliticsId:
return (obj: clsRsPoliticsEN) => {
return obj.politicsId === value;
}
case clsRsPoliticsEN.con_PoliticsName:
return (obj: clsRsPoliticsEN) => {
return obj.politicsName === value;
}
case clsRsPoliticsEN.con_PoliticsIdNgb:
return (obj: clsRsPoliticsEN) => {
return obj.politicsIdNgb === value;
}
case clsRsPoliticsEN.con_PoliticsRecruitId:
return (obj: clsRsPoliticsEN) => {
return obj.politicsRecruitId === value;
}
case clsRsPoliticsEN.con_ModifyDate:
return (obj: clsRsPoliticsEN) => {
return obj.modifyDate === value;
}
case clsRsPoliticsEN.con_ModifyUserId:
return (obj: clsRsPoliticsEN) => {
return obj.modifyUserId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsPolitics]中不存在!(in ${ rsPolitics_ConstructorName}.${ strThisFuncName})`;
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
export  async function RsPolitics_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsRsPoliticsEN.con_IdPolitics)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrRsPolitics = await RsPolitics_GetObjLstCache();
if (arrRsPolitics == null) return [];
let arrRsPoliticsSel = arrRsPolitics;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrRsPoliticsSel.length == 0) return [];
return arrRsPoliticsSel.map(x=>x.idPolitics);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsPolitics_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_GetFirstObjAsync(strWhereCond: string): Promise<clsRsPoliticsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const objRsPolitics = RsPolitics_GetObjFromJsonObj(returnObj);
return objRsPolitics;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsPoliticsEN._CurrTabName;
if (IsNullOrEmpty(clsRsPoliticsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsPoliticsEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrRsPoliticsExObjLstCache: Array<clsRsPoliticsEN> = CacheHelper.Get(strKey);
const arrRsPoliticsObjLstT = RsPolitics_GetObjLstByJSONObjLst(arrRsPoliticsExObjLstCache);
return arrRsPoliticsObjLstT;
}
try
{
const arrRsPoliticsExObjLst = await RsPolitics_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrRsPoliticsExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsPoliticsExObjLst.length);
console.log(strInfo);
return arrRsPoliticsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsPolitics_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsPolitics_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsPoliticsEN._CurrTabName;
if (IsNullOrEmpty(clsRsPoliticsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsPoliticsEN.CacheAddiCondition);
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
const arrRsPoliticsExObjLstCache: Array<clsRsPoliticsEN> = JSON.parse(strTempObjLst);
const arrRsPoliticsObjLstT = RsPolitics_GetObjLstByJSONObjLst(arrRsPoliticsExObjLstCache);
return arrRsPoliticsObjLstT;
}
try
{
const arrRsPoliticsExObjLst = await RsPolitics_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrRsPoliticsExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsPoliticsExObjLst.length);
console.log(strInfo);
return arrRsPoliticsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsPolitics_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsPolitics_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRsPoliticsEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrRsPoliticsObjLstCache: Array<clsRsPoliticsEN> = JSON.parse(strTempObjLst);
return arrRsPoliticsObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function RsPolitics_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRsPoliticsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsPolitics_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsPolitics_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsPoliticsEN._CurrTabName;
if (IsNullOrEmpty(clsRsPoliticsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsPoliticsEN.CacheAddiCondition);
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
const arrRsPoliticsExObjLstCache: Array<clsRsPoliticsEN> = JSON.parse(strTempObjLst);
const arrRsPoliticsObjLstT = RsPolitics_GetObjLstByJSONObjLst(arrRsPoliticsExObjLstCache);
return arrRsPoliticsObjLstT;
}
try
{
const arrRsPoliticsExObjLst = await RsPolitics_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrRsPoliticsExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsPoliticsExObjLst.length);
console.log(strInfo);
return arrRsPoliticsExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsPolitics_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsPolitics_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRsPoliticsEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrRsPoliticsObjLstCache: Array<clsRsPoliticsEN> = JSON.parse(strTempObjLst);
return arrRsPoliticsObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsPolitics_GetObjLstCache(): Promise<Array<clsRsPoliticsEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrRsPoliticsObjLstCache;
switch (clsRsPoliticsEN.CacheModeId)
{
case "04"://sessionStorage
arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstClientCache();
break;
default:
arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstClientCache();
break;
}
return arrRsPoliticsObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsPolitics_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrRsPoliticsObjLstCache;
switch (clsRsPoliticsEN.CacheModeId)
{
case "04"://sessionStorage
arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrRsPoliticsObjLstCache = null;
break;
default:
arrRsPoliticsObjLstCache = null;
break;
}
return arrRsPoliticsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdPoliticsCond:条件对象
 * @returns 对象列表子集
*/
export  async function RsPolitics_GetSubObjLstCache(objRsPoliticsCond: clsRsPoliticsEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstCache();
let arrRsPoliticsSel = arrRsPoliticsObjLstCache;
if (objRsPoliticsCond.sfFldComparisonOp == null || objRsPoliticsCond.sfFldComparisonOp == "") return arrRsPoliticsSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsPoliticsCond.sfFldComparisonOp);
//console.log("clsRsPoliticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsPoliticsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsPoliticsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRsPoliticsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objRsPoliticsCond), rsPolitics_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRsPoliticsEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdPolitics:关键字列表
 * @returns 对象列表
 **/
export  async function RsPolitics_GetObjLstByIdPoliticsLstAsync(arrIdPolitics: Array<string>): Promise<Array<clsRsPoliticsEN>>  
{
const strThisFuncName = "GetObjLstByIdPoliticsLstAsync";
const strAction = "GetObjLstByIdPoliticsLst";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdPolitics, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsPolitics_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsPolitics_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param arrstrIdPoliticsLst:关键字列表
 * @returns 对象列表
*/
export  async function RsPolitics_GetObjLstByIdPoliticsLstCache(arrIdPoliticsLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdPoliticsLstCache";
try
{
const arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstCache();
const arrRsPoliticsSel = arrRsPoliticsObjLstCache.filter(x => arrIdPoliticsLst.indexOf(x.idPolitics)>-1);
return arrRsPoliticsSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdPoliticsLst.join(","), rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRsPoliticsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsPolitics_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsPolitics_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRsPoliticsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsPolitics_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsPolitics_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsRsPoliticsEN>();
const arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstCache();
if (arrRsPoliticsObjLstCache.length == 0) return arrRsPoliticsObjLstCache;
let arrRsPoliticsSel = arrRsPoliticsObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objRsPoliticsCond = new clsRsPoliticsEN();
ObjectAssign(objRsPoliticsCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsRsPoliticsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsPoliticsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRsPoliticsSel.length == 0) return arrRsPoliticsSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrRsPoliticsSel = arrRsPoliticsSel.sort(RsPolitics_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrRsPoliticsSel = arrRsPoliticsSel.sort(objPagerPara.sortFun);
}
arrRsPoliticsSel = arrRsPoliticsSel.slice(intStart, intEnd);     
return arrRsPoliticsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, rsPolitics_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRsPoliticsEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function RsPolitics_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRsPoliticsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRsPoliticsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsPolitics_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsPolitics_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param strIdPolitics:关键字
 * @returns 获取删除的结果
 **/
export  async function RsPolitics_DelRecordAsync(strIdPolitics: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdPolitics);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param arrIdPolitics:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function RsPolitics_DelRsPoliticssAsync(arrIdPolitics: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRsPoliticssAsync";
const strAction = "DelRsPoliticss";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdPolitics, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_DelRsPoliticssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRsPoliticssByCondAsync";
const strAction = "DelRsPoliticssByCond";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param objRsPoliticsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsPolitics_AddNewRecordAsync(objRsPoliticsEN: clsRsPoliticsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRsPoliticsEN.idPolitics === null || objRsPoliticsEN.idPolitics === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRsPoliticsEN);
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsPoliticsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param objRsPoliticsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsPolitics_AddNewRecordWithMaxIdAsync(objRsPoliticsEN: clsRsPoliticsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsPoliticsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param objRsPoliticsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RsPolitics_AddNewRecordWithReturnKeyAsync(objRsPoliticsEN: clsRsPoliticsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsPoliticsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param objRsPoliticsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RsPolitics_UpdateRecordAsync(objRsPoliticsEN: clsRsPoliticsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRsPoliticsEN.sfUpdFldSetStr === undefined || objRsPoliticsEN.sfUpdFldSetStr === null || objRsPoliticsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsPoliticsEN.idPolitics);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsPoliticsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param objRsPoliticsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsPolitics_UpdateWithConditionAsync(objRsPoliticsEN: clsRsPoliticsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRsPoliticsEN.sfUpdFldSetStr === undefined || objRsPoliticsEN.sfUpdFldSetStr === null || objRsPoliticsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsPoliticsEN.idPolitics);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);
objRsPoliticsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsPoliticsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param objstrIdPoliticsCond:条件对象
 * @returns 对象列表子集
*/
export  async function RsPolitics_IsExistRecordCache(objRsPoliticsCond: clsRsPoliticsEN) {
const strThisFuncName = "IsExistRecordCache";
const arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstCache();
if (arrRsPoliticsObjLstCache == null) return false;
let arrRsPoliticsSel = arrRsPoliticsObjLstCache;
if (objRsPoliticsCond.sfFldComparisonOp == null || objRsPoliticsCond.sfFldComparisonOp == "") return arrRsPoliticsSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsPoliticsCond.sfFldComparisonOp);
//console.log("clsRsPoliticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsPoliticsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsPoliticsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRsPoliticsSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objRsPoliticsCond), rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param strIdPolitics:所给的关键字
 * @returns 对象
*/
export  async function RsPolitics_IsExistCache(strIdPolitics:string) {
const strThisFuncName = "IsExistCache";
const arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstCache();
if (arrRsPoliticsObjLstCache == null) return false;
try
{
const arrRsPoliticsSel = arrRsPoliticsObjLstCache.filter(x => x.idPolitics == strIdPolitics);
if (arrRsPoliticsSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdPolitics, rsPolitics_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdPolitics:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RsPolitics_IsExistAsync(strIdPolitics: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdPolitics
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
 * @param objRsPoliticsCond:条件对象
 * @returns 对象列表记录数
*/
export  async function RsPolitics_GetRecCountByCondCache(objRsPoliticsCond: clsRsPoliticsEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrRsPoliticsObjLstCache = await RsPolitics_GetObjLstCache();
if (arrRsPoliticsObjLstCache == null) return 0;
let arrRsPoliticsSel = arrRsPoliticsObjLstCache;
if (objRsPoliticsCond.sfFldComparisonOp == null || objRsPoliticsCond.sfFldComparisonOp == "") return arrRsPoliticsSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsPoliticsCond.sfFldComparisonOp);
//console.log("clsRsPoliticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsPoliticsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsPoliticsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsPoliticsSel = arrRsPoliticsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRsPoliticsSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objRsPoliticsCond), rsPolitics_ConstructorName, strThisFuncName);
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
export  async function RsPolitics_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(rsPolitics_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsPolitics_ConstructorName, strThisFuncName);
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
export  function RsPolitics_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function RsPolitics_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsRsPoliticsEN._CurrTabName;
switch (clsRsPoliticsEN.CacheModeId)
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
export  function RsPolitics_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsRsPoliticsEN._CurrTabName;
switch (clsRsPoliticsEN.CacheModeId)
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
export  async function RsPolitics_BindDdl_IdPoliticsInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdPoliticsInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdPoliticsInDivCache");
const arrObjLstSel = await RsPolitics_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsRsPoliticsEN.con_IdPolitics, clsRsPoliticsEN.con_PoliticsName, "政治面貌");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsPolitics_CheckPropertyNew(pobjRsPoliticsEN: clsRsPoliticsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsId) === true )
{
 throw new Error("(errid:Watl000411)字段[政治面貌Id]不能为空(In 政治面貌)!(clsRsPoliticsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsName) === true )
{
 throw new Error("(errid:Watl000411)字段[政治面貌]不能为空(In 政治面貌)!(clsRsPoliticsBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsPoliticsEN.idPolitics) == false && GetStrLen(pobjRsPoliticsEN.idPolitics) > 4)
{
 throw new Error("(errid:Watl000413)字段[政治面貌流水号(idPolitics)]的长度不能超过4(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.idPolitics)(clsRsPoliticsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsId) == false && GetStrLen(pobjRsPoliticsEN.politicsId) > 4)
{
 throw new Error("(errid:Watl000413)字段[政治面貌Id(politicsId)]的长度不能超过4(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.politicsId)(clsRsPoliticsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsName) == false && GetStrLen(pobjRsPoliticsEN.politicsName) > 30)
{
 throw new Error("(errid:Watl000413)字段[政治面貌(politicsName)]的长度不能超过30(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.politicsName)(clsRsPoliticsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsIdNgb) == false && GetStrLen(pobjRsPoliticsEN.politicsIdNgb) > 10)
{
 throw new Error("(errid:Watl000413)字段[PoliticsId_NGB(politicsIdNgb)]的长度不能超过10(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.politicsIdNgb)(clsRsPoliticsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsRecruitId) == false && GetStrLen(pobjRsPoliticsEN.politicsRecruitId) > 2)
{
 throw new Error("(errid:Watl000413)字段[PoliticsRecruitId(politicsRecruitId)]的长度不能超过2(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.politicsRecruitId)(clsRsPoliticsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.modifyDate) == false && GetStrLen(pobjRsPoliticsEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.modifyDate)(clsRsPoliticsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.modifyUserId) == false && GetStrLen(pobjRsPoliticsEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.modifyUserId)(clsRsPoliticsBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsPoliticsEN.idPolitics) == false && undefined !== pobjRsPoliticsEN.idPolitics && tzDataType.isString(pobjRsPoliticsEN.idPolitics) === false)
{
 throw new Error("(errid:Watl000414)字段[政治面貌流水号(idPolitics)]的值:[$(pobjRsPoliticsEN.idPolitics)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsId) == false && undefined !== pobjRsPoliticsEN.politicsId && tzDataType.isString(pobjRsPoliticsEN.politicsId) === false)
{
 throw new Error("(errid:Watl000414)字段[政治面貌Id(politicsId)]的值:[$(pobjRsPoliticsEN.politicsId)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsName) == false && undefined !== pobjRsPoliticsEN.politicsName && tzDataType.isString(pobjRsPoliticsEN.politicsName) === false)
{
 throw new Error("(errid:Watl000414)字段[政治面貌(politicsName)]的值:[$(pobjRsPoliticsEN.politicsName)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsIdNgb) == false && undefined !== pobjRsPoliticsEN.politicsIdNgb && tzDataType.isString(pobjRsPoliticsEN.politicsIdNgb) === false)
{
 throw new Error("(errid:Watl000414)字段[PoliticsId_NGB(politicsIdNgb)]的值:[$(pobjRsPoliticsEN.politicsIdNgb)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsRecruitId) == false && undefined !== pobjRsPoliticsEN.politicsRecruitId && tzDataType.isString(pobjRsPoliticsEN.politicsRecruitId) === false)
{
 throw new Error("(errid:Watl000414)字段[PoliticsRecruitId(politicsRecruitId)]的值:[$(pobjRsPoliticsEN.politicsRecruitId)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.modifyDate) == false && undefined !== pobjRsPoliticsEN.modifyDate && tzDataType.isString(pobjRsPoliticsEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjRsPoliticsEN.modifyDate)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.modifyUserId) == false && undefined !== pobjRsPoliticsEN.modifyUserId && tzDataType.isString(pobjRsPoliticsEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjRsPoliticsEN.modifyUserId)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsPolitics_CheckProperty4Update(pobjRsPoliticsEN: clsRsPoliticsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsPoliticsEN.idPolitics) == false && GetStrLen(pobjRsPoliticsEN.idPolitics) > 4)
{
 throw new Error("(errid:Watl000416)字段[政治面貌流水号(idPolitics)]的长度不能超过4(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.idPolitics)(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsId) == false && GetStrLen(pobjRsPoliticsEN.politicsId) > 4)
{
 throw new Error("(errid:Watl000416)字段[政治面貌Id(politicsId)]的长度不能超过4(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.politicsId)(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsName) == false && GetStrLen(pobjRsPoliticsEN.politicsName) > 30)
{
 throw new Error("(errid:Watl000416)字段[政治面貌(politicsName)]的长度不能超过30(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.politicsName)(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsIdNgb) == false && GetStrLen(pobjRsPoliticsEN.politicsIdNgb) > 10)
{
 throw new Error("(errid:Watl000416)字段[PoliticsId_NGB(politicsIdNgb)]的长度不能超过10(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.politicsIdNgb)(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsRecruitId) == false && GetStrLen(pobjRsPoliticsEN.politicsRecruitId) > 2)
{
 throw new Error("(errid:Watl000416)字段[PoliticsRecruitId(politicsRecruitId)]的长度不能超过2(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.politicsRecruitId)(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.modifyDate) == false && GetStrLen(pobjRsPoliticsEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.modifyDate)(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.modifyUserId) == false && GetStrLen(pobjRsPoliticsEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 政治面貌(RsPolitics))!值:$(pobjRsPoliticsEN.modifyUserId)(clsRsPoliticsBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsPoliticsEN.idPolitics) == false && undefined !== pobjRsPoliticsEN.idPolitics && tzDataType.isString(pobjRsPoliticsEN.idPolitics) === false)
{
 throw new Error("(errid:Watl000417)字段[政治面貌流水号(idPolitics)]的值:[$(pobjRsPoliticsEN.idPolitics)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsId) == false && undefined !== pobjRsPoliticsEN.politicsId && tzDataType.isString(pobjRsPoliticsEN.politicsId) === false)
{
 throw new Error("(errid:Watl000417)字段[政治面貌Id(politicsId)]的值:[$(pobjRsPoliticsEN.politicsId)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsName) == false && undefined !== pobjRsPoliticsEN.politicsName && tzDataType.isString(pobjRsPoliticsEN.politicsName) === false)
{
 throw new Error("(errid:Watl000417)字段[政治面貌(politicsName)]的值:[$(pobjRsPoliticsEN.politicsName)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsIdNgb) == false && undefined !== pobjRsPoliticsEN.politicsIdNgb && tzDataType.isString(pobjRsPoliticsEN.politicsIdNgb) === false)
{
 throw new Error("(errid:Watl000417)字段[PoliticsId_NGB(politicsIdNgb)]的值:[$(pobjRsPoliticsEN.politicsIdNgb)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.politicsRecruitId) == false && undefined !== pobjRsPoliticsEN.politicsRecruitId && tzDataType.isString(pobjRsPoliticsEN.politicsRecruitId) === false)
{
 throw new Error("(errid:Watl000417)字段[PoliticsRecruitId(politicsRecruitId)]的值:[$(pobjRsPoliticsEN.politicsRecruitId)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.modifyDate) == false && undefined !== pobjRsPoliticsEN.modifyDate && tzDataType.isString(pobjRsPoliticsEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjRsPoliticsEN.modifyDate)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsPoliticsEN.modifyUserId) == false && undefined !== pobjRsPoliticsEN.modifyUserId && tzDataType.isString(pobjRsPoliticsEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjRsPoliticsEN.modifyUserId)], 非法,应该为字符型(In 政治面貌(RsPolitics))!(clsRsPoliticsBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRsPoliticsEN.idPolitics) === true )
{
 throw new Error("(errid:Watl000064)字段[政治面貌流水号]不能为空(In 政治面貌)!(clsRsPoliticsBL:CheckProperty4Update)");
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
export  function RsPolitics_GetJSONStrByObj (pobjRsPoliticsEN: clsRsPoliticsEN): string
{
pobjRsPoliticsEN.sfUpdFldSetStr = pobjRsPoliticsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRsPoliticsEN);
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
export  function RsPolitics_GetObjLstByJSONStr (strJSON: string): Array<clsRsPoliticsEN>
{
let arrRsPoliticsObjLst = new Array<clsRsPoliticsEN>();
if (strJSON === "")
{
return arrRsPoliticsObjLst;
}
try
{
arrRsPoliticsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRsPoliticsObjLst;
}
return arrRsPoliticsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRsPoliticsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RsPolitics_GetObjLstByJSONObjLst (arrRsPoliticsObjLstS: Array<clsRsPoliticsEN>): Array<clsRsPoliticsEN>
{
const arrRsPoliticsObjLst = new Array<clsRsPoliticsEN>();
for (const objInFor of arrRsPoliticsObjLstS) {
const obj1 = RsPolitics_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRsPoliticsObjLst.push(obj1);
}
return arrRsPoliticsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RsPolitics_GetObjByJSONStr (strJSON: string): clsRsPoliticsEN
{
let pobjRsPoliticsEN = new clsRsPoliticsEN();
if (strJSON === "")
{
return pobjRsPoliticsEN;
}
try
{
pobjRsPoliticsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRsPoliticsEN;
}
return pobjRsPoliticsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RsPolitics_GetCombineCondition(objRsPoliticsCond: clsRsPoliticsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRsPoliticsCond.dicFldComparisonOp, clsRsPoliticsEN.con_IdPolitics) == true)
{
const strComparisonOpIdPolitics:string = objRsPoliticsCond.dicFldComparisonOp[clsRsPoliticsEN.con_IdPolitics];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsPoliticsEN.con_IdPolitics, objRsPoliticsCond.idPolitics, strComparisonOpIdPolitics);
}
if (Object.prototype.hasOwnProperty.call(objRsPoliticsCond.dicFldComparisonOp, clsRsPoliticsEN.con_PoliticsId) == true)
{
const strComparisonOpPoliticsId:string = objRsPoliticsCond.dicFldComparisonOp[clsRsPoliticsEN.con_PoliticsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsPoliticsEN.con_PoliticsId, objRsPoliticsCond.politicsId, strComparisonOpPoliticsId);
}
if (Object.prototype.hasOwnProperty.call(objRsPoliticsCond.dicFldComparisonOp, clsRsPoliticsEN.con_PoliticsName) == true)
{
const strComparisonOpPoliticsName:string = objRsPoliticsCond.dicFldComparisonOp[clsRsPoliticsEN.con_PoliticsName];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsPoliticsEN.con_PoliticsName, objRsPoliticsCond.politicsName, strComparisonOpPoliticsName);
}
if (Object.prototype.hasOwnProperty.call(objRsPoliticsCond.dicFldComparisonOp, clsRsPoliticsEN.con_PoliticsIdNgb) == true)
{
const strComparisonOpPoliticsIdNgb:string = objRsPoliticsCond.dicFldComparisonOp[clsRsPoliticsEN.con_PoliticsIdNgb];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsPoliticsEN.con_PoliticsIdNgb, objRsPoliticsCond.politicsIdNgb, strComparisonOpPoliticsIdNgb);
}
if (Object.prototype.hasOwnProperty.call(objRsPoliticsCond.dicFldComparisonOp, clsRsPoliticsEN.con_PoliticsRecruitId) == true)
{
const strComparisonOpPoliticsRecruitId:string = objRsPoliticsCond.dicFldComparisonOp[clsRsPoliticsEN.con_PoliticsRecruitId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsPoliticsEN.con_PoliticsRecruitId, objRsPoliticsCond.politicsRecruitId, strComparisonOpPoliticsRecruitId);
}
if (Object.prototype.hasOwnProperty.call(objRsPoliticsCond.dicFldComparisonOp, clsRsPoliticsEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objRsPoliticsCond.dicFldComparisonOp[clsRsPoliticsEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsPoliticsEN.con_ModifyDate, objRsPoliticsCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objRsPoliticsCond.dicFldComparisonOp, clsRsPoliticsEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objRsPoliticsCond.dicFldComparisonOp[clsRsPoliticsEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsPoliticsEN.con_ModifyUserId, objRsPoliticsCond.modifyUserId, strComparisonOpModifyUserId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRsPoliticsENS:源对象
 * @param objRsPoliticsENT:目标对象
*/
export  function RsPolitics_CopyObjTo(objRsPoliticsENS: clsRsPoliticsEN , objRsPoliticsENT: clsRsPoliticsEN ): void 
{
objRsPoliticsENT.idPolitics = objRsPoliticsENS.idPolitics; //政治面貌流水号
objRsPoliticsENT.politicsId = objRsPoliticsENS.politicsId; //政治面貌Id
objRsPoliticsENT.politicsName = objRsPoliticsENS.politicsName; //政治面貌
objRsPoliticsENT.politicsIdNgb = objRsPoliticsENS.politicsIdNgb; //PoliticsId_NGB
objRsPoliticsENT.politicsRecruitId = objRsPoliticsENS.politicsRecruitId; //PoliticsRecruitId
objRsPoliticsENT.modifyDate = objRsPoliticsENS.modifyDate; //修改日期
objRsPoliticsENT.modifyUserId = objRsPoliticsENS.modifyUserId; //修改人
objRsPoliticsENT.sfUpdFldSetStr = objRsPoliticsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRsPoliticsENS:源对象
 * @param objRsPoliticsENT:目标对象
*/
export  function RsPolitics_GetObjFromJsonObj(objRsPoliticsENS: clsRsPoliticsEN): clsRsPoliticsEN 
{
 const objRsPoliticsENT: clsRsPoliticsEN = new clsRsPoliticsEN();
ObjectAssign(objRsPoliticsENT, objRsPoliticsENS);
 return objRsPoliticsENT;
}