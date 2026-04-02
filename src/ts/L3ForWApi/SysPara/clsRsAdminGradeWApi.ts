
 /**
 * 类名:clsRsAdminGradeWApi
 * 表名:RsAdminGrade(01120111)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/27 16:36:52
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
 * 职务(RsAdminGrade)
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
import { clsRsAdminGradeEN } from "@/ts/L0Entity/SysPara/clsRsAdminGradeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const rsAdminGrade_Controller = "RsAdminGradeApi";
 export const rsAdminGrade_ConstructorName = "rsAdminGrade";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdAdminGrade:关键字
 * @returns 对象
 **/
export  async function RsAdminGrade_GetObjByIdAdminGradeAsync(strIdAdminGrade: string): Promise<clsRsAdminGradeEN|null>  
{
const strThisFuncName = "GetObjByIdAdminGradeAsync";

if (IsNullOrEmpty(strIdAdminGrade) == true)
{
  const strMsg = Format("参数:[strIdAdminGrade]不能为空!(In clsRsAdminGradeWApi.GetObjByIdAdminGradeAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdAdminGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdAdminGrade]的长度:[{0}]不正确!(clsRsAdminGradeWApi.GetObjByIdAdminGradeAsync)", strIdAdminGrade.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdAdminGrade";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdAdminGrade,
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
const objRsAdminGrade = RsAdminGrade_GetObjFromJsonObj(returnObj);
return objRsAdminGrade;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param strIdAdminGrade:所给的关键字
 * @returns 对象
*/
export  async function RsAdminGrade_GetObjByIdAdminGradeCache(strIdAdminGrade: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdAdminGradeCache";

if (IsNullOrEmpty(strIdAdminGrade) == true)
{
  const strMsg = Format("参数:[strIdAdminGrade]不能为空!(In clsRsAdminGradeWApi.GetObjByIdAdminGradeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdAdminGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdAdminGrade]的长度:[{0}]不正确!(clsRsAdminGradeWApi.GetObjByIdAdminGradeCache)", strIdAdminGrade.length);
console.error(strMsg);
throw (strMsg);
}
const arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstCache();
try
{
const arrRsAdminGradeSel = arrRsAdminGradeObjLstCache.filter(x => 
 x.idAdminGrade == strIdAdminGrade );
let objRsAdminGrade: clsRsAdminGradeEN;
if (arrRsAdminGradeSel.length > 0)
{
objRsAdminGrade = arrRsAdminGradeSel[0];
return objRsAdminGrade;
}
else
{
if (bolTryAsyncOnce == true)
{
const objRsAdminGradeConst = await RsAdminGrade_GetObjByIdAdminGradeAsync(strIdAdminGrade);
if (objRsAdminGradeConst != null)
{
RsAdminGrade_ReFreshThisCache();
return objRsAdminGradeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdAdminGrade, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdAdminGrade:所给的关键字
 * @returns 对象
*/
export  async function RsAdminGrade_GetObjByIdAdminGradelocalStorage(strIdAdminGrade: string) {
const strThisFuncName = "GetObjByIdAdminGradelocalStorage";

if (IsNullOrEmpty(strIdAdminGrade) == true)
{
  const strMsg = Format("参数:[strIdAdminGrade]不能为空!(In clsRsAdminGradeWApi.GetObjByIdAdminGradelocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdAdminGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdAdminGrade]的长度:[{0}]不正确!(clsRsAdminGradeWApi.GetObjByIdAdminGradelocalStorage)", strIdAdminGrade.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsRsAdminGradeEN._CurrTabName, strIdAdminGrade);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objRsAdminGradeCache: clsRsAdminGradeEN = JSON.parse(strTempObj);
return objRsAdminGradeCache;
}
try
{
const objRsAdminGrade = await RsAdminGrade_GetObjByIdAdminGradeAsync(strIdAdminGrade);
if (objRsAdminGrade != null)
{
localStorage.setItem(strKey, JSON.stringify(objRsAdminGrade));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objRsAdminGrade;
}
return objRsAdminGrade;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdAdminGrade, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objRsAdminGrade:所给的对象
 * @returns 对象
*/
export  async function RsAdminGrade_UpdateObjInLstCache(objRsAdminGrade: clsRsAdminGradeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstCache();
const obj = arrRsAdminGradeObjLstCache.find(x => 
x.idAdminGrade == objRsAdminGrade.idAdminGrade);
if (obj != null)
{
objRsAdminGrade.idAdminGrade = obj.idAdminGrade;
ObjectAssign( obj, objRsAdminGrade);
}
else
{
arrRsAdminGradeObjLstCache.push(objRsAdminGrade);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdAdminGrade:所给的关键字
 * @returns 对象
*/
export  async function RsAdminGrade_GetNameByIdAdminGradeCache(strIdAdminGrade: string) {

if (IsNullOrEmpty(strIdAdminGrade) == true)
{
  const strMsg = Format("参数:[strIdAdminGrade]不能为空!(In clsRsAdminGradeWApi.GetNameByIdAdminGradeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdAdminGrade.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdAdminGrade]的长度:[{0}]不正确!(clsRsAdminGradeWApi.GetNameByIdAdminGradeCache)", strIdAdminGrade.length);
console.error(strMsg);
throw (strMsg);
}
const arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstCache();
if (arrRsAdminGradeObjLstCache == null) return "";
try
{
const arrRsAdminGradeSel = arrRsAdminGradeObjLstCache.filter(x => 
 x.idAdminGrade == strIdAdminGrade );
let objRsAdminGrade: clsRsAdminGradeEN;
if (arrRsAdminGradeSel.length > 0)
{
objRsAdminGrade = arrRsAdminGradeSel[0];
return objRsAdminGrade.adminGradeDesc;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdAdminGrade);
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
export  async function RsAdminGrade_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsRsAdminGradeEN.con_IdAdminGrade)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsRsAdminGradeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsRsAdminGradeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdAdminGrade = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objRsAdminGrade = await RsAdminGrade_GetObjByIdAdminGradeCache(strIdAdminGrade );
if (objRsAdminGrade == null) return "";
if (objRsAdminGrade.GetFldValue(strOutFldName) == null) return "";
return objRsAdminGrade.GetFldValue(strOutFldName).toString();
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
export  function RsAdminGrade_SortFunDefa(a:clsRsAdminGradeEN , b:clsRsAdminGradeEN): number 
{
return a.idAdminGrade.localeCompare(b.idAdminGrade);
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
export  function RsAdminGrade_SortFunDefa2Fld(a:clsRsAdminGradeEN , b:clsRsAdminGradeEN): number 
{
if (a.adminGradeId == b.adminGradeId) return a.adminGradeDesc.localeCompare(b.adminGradeDesc);
else return a.adminGradeId.localeCompare(b.adminGradeId);
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
export  function RsAdminGrade_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRsAdminGradeEN.con_IdAdminGrade:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
return a.idAdminGrade.localeCompare(b.idAdminGrade);
}
case clsRsAdminGradeEN.con_AdminGradeId:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
return a.adminGradeId.localeCompare(b.adminGradeId);
}
case clsRsAdminGradeEN.con_AdminGradeDesc:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
return a.adminGradeDesc.localeCompare(b.adminGradeDesc);
}
case clsRsAdminGradeEN.con_ModifyDate:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsRsAdminGradeEN.con_ModifyUserId:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsAdminGrade]中不存在!(in ${ rsAdminGrade_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRsAdminGradeEN.con_IdAdminGrade:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
return b.idAdminGrade.localeCompare(a.idAdminGrade);
}
case clsRsAdminGradeEN.con_AdminGradeId:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
return b.adminGradeId.localeCompare(a.adminGradeId);
}
case clsRsAdminGradeEN.con_AdminGradeDesc:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
return b.adminGradeDesc.localeCompare(a.adminGradeDesc);
}
case clsRsAdminGradeEN.con_ModifyDate:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsRsAdminGradeEN.con_ModifyUserId:
return (a: clsRsAdminGradeEN, b: clsRsAdminGradeEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsAdminGrade]中不存在!(in ${ rsAdminGrade_ConstructorName}.${ strThisFuncName})`;
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
export  async function RsAdminGrade_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRsAdminGradeEN.con_IdAdminGrade:
return (obj: clsRsAdminGradeEN) => {
return obj.idAdminGrade === value;
}
case clsRsAdminGradeEN.con_AdminGradeId:
return (obj: clsRsAdminGradeEN) => {
return obj.adminGradeId === value;
}
case clsRsAdminGradeEN.con_AdminGradeDesc:
return (obj: clsRsAdminGradeEN) => {
return obj.adminGradeDesc === value;
}
case clsRsAdminGradeEN.con_ModifyDate:
return (obj: clsRsAdminGradeEN) => {
return obj.modifyDate === value;
}
case clsRsAdminGradeEN.con_ModifyUserId:
return (obj: clsRsAdminGradeEN) => {
return obj.modifyUserId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsAdminGrade]中不存在!(in ${ rsAdminGrade_ConstructorName}.${ strThisFuncName})`;
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
export  async function RsAdminGrade_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsRsAdminGradeEN.con_IdAdminGrade)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrRsAdminGrade = await RsAdminGrade_GetObjLstCache();
if (arrRsAdminGrade == null) return [];
let arrRsAdminGradeSel = arrRsAdminGrade;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrRsAdminGradeSel.length == 0) return [];
return arrRsAdminGradeSel.map(x=>x.idAdminGrade);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsAdminGrade_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_GetFirstObjAsync(strWhereCond: string): Promise<clsRsAdminGradeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const objRsAdminGrade = RsAdminGrade_GetObjFromJsonObj(returnObj);
return objRsAdminGrade;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsAdminGradeEN._CurrTabName;
if (IsNullOrEmpty(clsRsAdminGradeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsAdminGradeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrRsAdminGradeExObjLstCache: Array<clsRsAdminGradeEN> = CacheHelper.Get(strKey);
const arrRsAdminGradeObjLstT = RsAdminGrade_GetObjLstByJSONObjLst(arrRsAdminGradeExObjLstCache);
return arrRsAdminGradeObjLstT;
}
try
{
const arrRsAdminGradeExObjLst = await RsAdminGrade_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrRsAdminGradeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsAdminGradeExObjLst.length);
console.log(strInfo);
return arrRsAdminGradeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsAdminGrade_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsAdminGradeEN._CurrTabName;
if (IsNullOrEmpty(clsRsAdminGradeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsAdminGradeEN.CacheAddiCondition);
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
const arrRsAdminGradeExObjLstCache: Array<clsRsAdminGradeEN> = JSON.parse(strTempObjLst);
const arrRsAdminGradeObjLstT = RsAdminGrade_GetObjLstByJSONObjLst(arrRsAdminGradeExObjLstCache);
return arrRsAdminGradeObjLstT;
}
try
{
const arrRsAdminGradeExObjLst = await RsAdminGrade_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrRsAdminGradeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsAdminGradeExObjLst.length);
console.log(strInfo);
return arrRsAdminGradeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsAdminGrade_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRsAdminGradeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrRsAdminGradeObjLstCache: Array<clsRsAdminGradeEN> = JSON.parse(strTempObjLst);
return arrRsAdminGradeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function RsAdminGrade_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRsAdminGradeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsAdminGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRsAdminGradeEN._CurrTabName;
if (IsNullOrEmpty(clsRsAdminGradeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRsAdminGradeEN.CacheAddiCondition);
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
const arrRsAdminGradeExObjLstCache: Array<clsRsAdminGradeEN> = JSON.parse(strTempObjLst);
const arrRsAdminGradeObjLstT = RsAdminGrade_GetObjLstByJSONObjLst(arrRsAdminGradeExObjLstCache);
return arrRsAdminGradeObjLstT;
}
try
{
const arrRsAdminGradeExObjLst = await RsAdminGrade_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrRsAdminGradeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRsAdminGradeExObjLst.length);
console.log(strInfo);
return arrRsAdminGradeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsAdminGrade_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRsAdminGradeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrRsAdminGradeObjLstCache: Array<clsRsAdminGradeEN> = JSON.parse(strTempObjLst);
return arrRsAdminGradeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsAdminGrade_GetObjLstCache(): Promise<Array<clsRsAdminGradeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrRsAdminGradeObjLstCache;
switch (clsRsAdminGradeEN.CacheModeId)
{
case "04"://sessionStorage
arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstClientCache();
break;
default:
arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstClientCache();
break;
}
return arrRsAdminGradeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RsAdminGrade_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrRsAdminGradeObjLstCache;
switch (clsRsAdminGradeEN.CacheModeId)
{
case "04"://sessionStorage
arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrRsAdminGradeObjLstCache = null;
break;
default:
arrRsAdminGradeObjLstCache = null;
break;
}
return arrRsAdminGradeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdAdminGradeCond:条件对象
 * @returns 对象列表子集
*/
export  async function RsAdminGrade_GetSubObjLstCache(objRsAdminGradeCond: clsRsAdminGradeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstCache();
let arrRsAdminGradeSel = arrRsAdminGradeObjLstCache;
if (objRsAdminGradeCond.sfFldComparisonOp == null || objRsAdminGradeCond.sfFldComparisonOp == "") return arrRsAdminGradeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsAdminGradeCond.sfFldComparisonOp);
//console.log("clsRsAdminGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsAdminGradeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsAdminGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRsAdminGradeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objRsAdminGradeCond), rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRsAdminGradeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdAdminGrade:关键字列表
 * @returns 对象列表
 **/
export  async function RsAdminGrade_GetObjLstByIdAdminGradeLstAsync(arrIdAdminGrade: Array<string>): Promise<Array<clsRsAdminGradeEN>>  
{
const strThisFuncName = "GetObjLstByIdAdminGradeLstAsync";
const strAction = "GetObjLstByIdAdminGradeLst";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdAdminGrade, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsAdminGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param arrstrIdAdminGradeLst:关键字列表
 * @returns 对象列表
*/
export  async function RsAdminGrade_GetObjLstByIdAdminGradeLstCache(arrIdAdminGradeLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdAdminGradeLstCache";
try
{
const arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstCache();
const arrRsAdminGradeSel = arrRsAdminGradeObjLstCache.filter(x => arrIdAdminGradeLst.indexOf(x.idAdminGrade)>-1);
return arrRsAdminGradeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdAdminGradeLst.join(","), rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRsAdminGradeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsAdminGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRsAdminGradeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsAdminGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsRsAdminGradeEN>();
const arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstCache();
if (arrRsAdminGradeObjLstCache.length == 0) return arrRsAdminGradeObjLstCache;
let arrRsAdminGradeSel = arrRsAdminGradeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objRsAdminGradeCond = new clsRsAdminGradeEN();
ObjectAssign(objRsAdminGradeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsRsAdminGradeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsAdminGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRsAdminGradeSel.length == 0) return arrRsAdminGradeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrRsAdminGradeSel = arrRsAdminGradeSel.sort(RsAdminGrade_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrRsAdminGradeSel = arrRsAdminGradeSel.sort(objPagerPara.sortFun);
}
arrRsAdminGradeSel = arrRsAdminGradeSel.slice(intStart, intEnd);     
return arrRsAdminGradeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRsAdminGradeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function RsAdminGrade_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRsAdminGradeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRsAdminGradeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsAdminGrade_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param strIdAdminGrade:关键字
 * @returns 获取删除的结果
 **/
export  async function RsAdminGrade_DelRecordAsync(strIdAdminGrade: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdAdminGrade);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param arrIdAdminGrade:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function RsAdminGrade_DelRsAdminGradesAsync(arrIdAdminGrade: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRsAdminGradesAsync";
const strAction = "DelRsAdminGrades";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdAdminGrade, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_DelRsAdminGradesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRsAdminGradesByCondAsync";
const strAction = "DelRsAdminGradesByCond";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param objRsAdminGradeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsAdminGrade_AddNewRecordAsync(objRsAdminGradeEN: clsRsAdminGradeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRsAdminGradeEN.idAdminGrade === null || objRsAdminGradeEN.idAdminGrade === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRsAdminGradeEN);
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsAdminGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param objRsAdminGradeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsAdminGrade_AddNewRecordWithMaxIdAsync(objRsAdminGradeEN: clsRsAdminGradeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsAdminGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param objRsAdminGradeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RsAdminGrade_AddNewRecordWithReturnKeyAsync(objRsAdminGradeEN: clsRsAdminGradeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsAdminGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param objRsAdminGradeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RsAdminGrade_UpdateRecordAsync(objRsAdminGradeEN: clsRsAdminGradeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRsAdminGradeEN.sfUpdFldSetStr === undefined || objRsAdminGradeEN.sfUpdFldSetStr === null || objRsAdminGradeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsAdminGradeEN.idAdminGrade);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsAdminGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param objRsAdminGradeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsAdminGrade_UpdateWithConditionAsync(objRsAdminGradeEN: clsRsAdminGradeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRsAdminGradeEN.sfUpdFldSetStr === undefined || objRsAdminGradeEN.sfUpdFldSetStr === null || objRsAdminGradeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsAdminGradeEN.idAdminGrade);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);
objRsAdminGradeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsAdminGradeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param objstrIdAdminGradeCond:条件对象
 * @returns 对象列表子集
*/
export  async function RsAdminGrade_IsExistRecordCache(objRsAdminGradeCond: clsRsAdminGradeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstCache();
if (arrRsAdminGradeObjLstCache == null) return false;
let arrRsAdminGradeSel = arrRsAdminGradeObjLstCache;
if (objRsAdminGradeCond.sfFldComparisonOp == null || objRsAdminGradeCond.sfFldComparisonOp == "") return arrRsAdminGradeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsAdminGradeCond.sfFldComparisonOp);
//console.log("clsRsAdminGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsAdminGradeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsAdminGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRsAdminGradeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objRsAdminGradeCond), rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param strIdAdminGrade:所给的关键字
 * @returns 对象
*/
export  async function RsAdminGrade_IsExistCache(strIdAdminGrade:string) {
const strThisFuncName = "IsExistCache";
const arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstCache();
if (arrRsAdminGradeObjLstCache == null) return false;
try
{
const arrRsAdminGradeSel = arrRsAdminGradeObjLstCache.filter(x => x.idAdminGrade == strIdAdminGrade);
if (arrRsAdminGradeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdAdminGrade, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdAdminGrade:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RsAdminGrade_IsExistAsync(strIdAdminGrade: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdAdminGrade
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
 * @param objRsAdminGradeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function RsAdminGrade_GetRecCountByCondCache(objRsAdminGradeCond: clsRsAdminGradeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrRsAdminGradeObjLstCache = await RsAdminGrade_GetObjLstCache();
if (arrRsAdminGradeObjLstCache == null) return 0;
let arrRsAdminGradeSel = arrRsAdminGradeObjLstCache;
if (objRsAdminGradeCond.sfFldComparisonOp == null || objRsAdminGradeCond.sfFldComparisonOp == "") return arrRsAdminGradeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRsAdminGradeCond.sfFldComparisonOp);
//console.log("clsRsAdminGradeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRsAdminGradeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRsAdminGradeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRsAdminGradeSel = arrRsAdminGradeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRsAdminGradeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objRsAdminGradeCond), rsAdminGrade_ConstructorName, strThisFuncName);
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
export  async function RsAdminGrade_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(rsAdminGrade_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsAdminGrade_ConstructorName, strThisFuncName);
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
export  function RsAdminGrade_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function RsAdminGrade_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsRsAdminGradeEN._CurrTabName;
switch (clsRsAdminGradeEN.CacheModeId)
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
export  function RsAdminGrade_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsRsAdminGradeEN._CurrTabName;
switch (clsRsAdminGradeEN.CacheModeId)
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
export  async function RsAdminGrade_BindDdl_IdAdminGradeInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdAdminGradeInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdAdminGradeInDivCache");
const arrObjLstSel = await RsAdminGrade_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsRsAdminGradeEN.con_IdAdminGrade, clsRsAdminGradeEN.con_AdminGradeDesc, "职务");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsAdminGrade_CheckPropertyNew(pobjRsAdminGradeEN: clsRsAdminGradeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeId) === true )
{
 throw new Error("(errid:Watl000411)字段[行政职务代号]不能为空(In 职务)!(clsRsAdminGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeDesc) === true )
{
 throw new Error("(errid:Watl000411)字段[行政职务描述]不能为空(In 职务)!(clsRsAdminGradeBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsAdminGradeEN.idAdminGrade) == false && GetStrLen(pobjRsAdminGradeEN.idAdminGrade) > 4)
{
 throw new Error("(errid:Watl000413)字段[行政职务流水号(idAdminGrade)]的长度不能超过4(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.idAdminGrade)(clsRsAdminGradeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeId) == false && GetStrLen(pobjRsAdminGradeEN.adminGradeId) > 4)
{
 throw new Error("(errid:Watl000413)字段[行政职务代号(adminGradeId)]的长度不能超过4(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.adminGradeId)(clsRsAdminGradeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeDesc) == false && GetStrLen(pobjRsAdminGradeEN.adminGradeDesc) > 30)
{
 throw new Error("(errid:Watl000413)字段[行政职务描述(adminGradeDesc)]的长度不能超过30(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.adminGradeDesc)(clsRsAdminGradeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.modifyDate) == false && GetStrLen(pobjRsAdminGradeEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.modifyDate)(clsRsAdminGradeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.modifyUserId) == false && GetStrLen(pobjRsAdminGradeEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.modifyUserId)(clsRsAdminGradeBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsAdminGradeEN.idAdminGrade) == false && undefined !== pobjRsAdminGradeEN.idAdminGrade && tzDataType.isString(pobjRsAdminGradeEN.idAdminGrade) === false)
{
 throw new Error("(errid:Watl000414)字段[行政职务流水号(idAdminGrade)]的值:[$(pobjRsAdminGradeEN.idAdminGrade)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeId) == false && undefined !== pobjRsAdminGradeEN.adminGradeId && tzDataType.isString(pobjRsAdminGradeEN.adminGradeId) === false)
{
 throw new Error("(errid:Watl000414)字段[行政职务代号(adminGradeId)]的值:[$(pobjRsAdminGradeEN.adminGradeId)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeDesc) == false && undefined !== pobjRsAdminGradeEN.adminGradeDesc && tzDataType.isString(pobjRsAdminGradeEN.adminGradeDesc) === false)
{
 throw new Error("(errid:Watl000414)字段[行政职务描述(adminGradeDesc)]的值:[$(pobjRsAdminGradeEN.adminGradeDesc)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.modifyDate) == false && undefined !== pobjRsAdminGradeEN.modifyDate && tzDataType.isString(pobjRsAdminGradeEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjRsAdminGradeEN.modifyDate)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.modifyUserId) == false && undefined !== pobjRsAdminGradeEN.modifyUserId && tzDataType.isString(pobjRsAdminGradeEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjRsAdminGradeEN.modifyUserId)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsAdminGrade_CheckProperty4Update(pobjRsAdminGradeEN: clsRsAdminGradeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsAdminGradeEN.idAdminGrade) == false && GetStrLen(pobjRsAdminGradeEN.idAdminGrade) > 4)
{
 throw new Error("(errid:Watl000416)字段[行政职务流水号(idAdminGrade)]的长度不能超过4(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.idAdminGrade)(clsRsAdminGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeId) == false && GetStrLen(pobjRsAdminGradeEN.adminGradeId) > 4)
{
 throw new Error("(errid:Watl000416)字段[行政职务代号(adminGradeId)]的长度不能超过4(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.adminGradeId)(clsRsAdminGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeDesc) == false && GetStrLen(pobjRsAdminGradeEN.adminGradeDesc) > 30)
{
 throw new Error("(errid:Watl000416)字段[行政职务描述(adminGradeDesc)]的长度不能超过30(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.adminGradeDesc)(clsRsAdminGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.modifyDate) == false && GetStrLen(pobjRsAdminGradeEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.modifyDate)(clsRsAdminGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.modifyUserId) == false && GetStrLen(pobjRsAdminGradeEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 职务(RsAdminGrade))!值:$(pobjRsAdminGradeEN.modifyUserId)(clsRsAdminGradeBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsAdminGradeEN.idAdminGrade) == false && undefined !== pobjRsAdminGradeEN.idAdminGrade && tzDataType.isString(pobjRsAdminGradeEN.idAdminGrade) === false)
{
 throw new Error("(errid:Watl000417)字段[行政职务流水号(idAdminGrade)]的值:[$(pobjRsAdminGradeEN.idAdminGrade)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeId) == false && undefined !== pobjRsAdminGradeEN.adminGradeId && tzDataType.isString(pobjRsAdminGradeEN.adminGradeId) === false)
{
 throw new Error("(errid:Watl000417)字段[行政职务代号(adminGradeId)]的值:[$(pobjRsAdminGradeEN.adminGradeId)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.adminGradeDesc) == false && undefined !== pobjRsAdminGradeEN.adminGradeDesc && tzDataType.isString(pobjRsAdminGradeEN.adminGradeDesc) === false)
{
 throw new Error("(errid:Watl000417)字段[行政职务描述(adminGradeDesc)]的值:[$(pobjRsAdminGradeEN.adminGradeDesc)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.modifyDate) == false && undefined !== pobjRsAdminGradeEN.modifyDate && tzDataType.isString(pobjRsAdminGradeEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjRsAdminGradeEN.modifyDate)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsAdminGradeEN.modifyUserId) == false && undefined !== pobjRsAdminGradeEN.modifyUserId && tzDataType.isString(pobjRsAdminGradeEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjRsAdminGradeEN.modifyUserId)], 非法,应该为字符型(In 职务(RsAdminGrade))!(clsRsAdminGradeBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRsAdminGradeEN.idAdminGrade) === true )
{
 throw new Error("(errid:Watl000064)字段[行政职务流水号]不能为空(In 职务)!(clsRsAdminGradeBL:CheckProperty4Update)");
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
export  function RsAdminGrade_GetJSONStrByObj (pobjRsAdminGradeEN: clsRsAdminGradeEN): string
{
pobjRsAdminGradeEN.sfUpdFldSetStr = pobjRsAdminGradeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRsAdminGradeEN);
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
export  function RsAdminGrade_GetObjLstByJSONStr (strJSON: string): Array<clsRsAdminGradeEN>
{
let arrRsAdminGradeObjLst = new Array<clsRsAdminGradeEN>();
if (strJSON === "")
{
return arrRsAdminGradeObjLst;
}
try
{
arrRsAdminGradeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRsAdminGradeObjLst;
}
return arrRsAdminGradeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRsAdminGradeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RsAdminGrade_GetObjLstByJSONObjLst (arrRsAdminGradeObjLstS: Array<clsRsAdminGradeEN>): Array<clsRsAdminGradeEN>
{
const arrRsAdminGradeObjLst = new Array<clsRsAdminGradeEN>();
for (const objInFor of arrRsAdminGradeObjLstS) {
const obj1 = RsAdminGrade_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRsAdminGradeObjLst.push(obj1);
}
return arrRsAdminGradeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RsAdminGrade_GetObjByJSONStr (strJSON: string): clsRsAdminGradeEN
{
let pobjRsAdminGradeEN = new clsRsAdminGradeEN();
if (strJSON === "")
{
return pobjRsAdminGradeEN;
}
try
{
pobjRsAdminGradeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRsAdminGradeEN;
}
return pobjRsAdminGradeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RsAdminGrade_GetCombineCondition(objRsAdminGradeCond: clsRsAdminGradeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRsAdminGradeCond.dicFldComparisonOp, clsRsAdminGradeEN.con_IdAdminGrade) == true)
{
const strComparisonOpIdAdminGrade:string = objRsAdminGradeCond.dicFldComparisonOp[clsRsAdminGradeEN.con_IdAdminGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsAdminGradeEN.con_IdAdminGrade, objRsAdminGradeCond.idAdminGrade, strComparisonOpIdAdminGrade);
}
if (Object.prototype.hasOwnProperty.call(objRsAdminGradeCond.dicFldComparisonOp, clsRsAdminGradeEN.con_AdminGradeId) == true)
{
const strComparisonOpAdminGradeId:string = objRsAdminGradeCond.dicFldComparisonOp[clsRsAdminGradeEN.con_AdminGradeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsAdminGradeEN.con_AdminGradeId, objRsAdminGradeCond.adminGradeId, strComparisonOpAdminGradeId);
}
if (Object.prototype.hasOwnProperty.call(objRsAdminGradeCond.dicFldComparisonOp, clsRsAdminGradeEN.con_AdminGradeDesc) == true)
{
const strComparisonOpAdminGradeDesc:string = objRsAdminGradeCond.dicFldComparisonOp[clsRsAdminGradeEN.con_AdminGradeDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsAdminGradeEN.con_AdminGradeDesc, objRsAdminGradeCond.adminGradeDesc, strComparisonOpAdminGradeDesc);
}
if (Object.prototype.hasOwnProperty.call(objRsAdminGradeCond.dicFldComparisonOp, clsRsAdminGradeEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objRsAdminGradeCond.dicFldComparisonOp[clsRsAdminGradeEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsAdminGradeEN.con_ModifyDate, objRsAdminGradeCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objRsAdminGradeCond.dicFldComparisonOp, clsRsAdminGradeEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objRsAdminGradeCond.dicFldComparisonOp[clsRsAdminGradeEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsAdminGradeEN.con_ModifyUserId, objRsAdminGradeCond.modifyUserId, strComparisonOpModifyUserId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRsAdminGradeENS:源对象
 * @param objRsAdminGradeENT:目标对象
*/
export  function RsAdminGrade_CopyObjTo(objRsAdminGradeENS: clsRsAdminGradeEN , objRsAdminGradeENT: clsRsAdminGradeEN ): void 
{
objRsAdminGradeENT.idAdminGrade = objRsAdminGradeENS.idAdminGrade; //行政职务流水号
objRsAdminGradeENT.adminGradeId = objRsAdminGradeENS.adminGradeId; //行政职务代号
objRsAdminGradeENT.adminGradeDesc = objRsAdminGradeENS.adminGradeDesc; //行政职务描述
objRsAdminGradeENT.modifyDate = objRsAdminGradeENS.modifyDate; //修改日期
objRsAdminGradeENT.modifyUserId = objRsAdminGradeENS.modifyUserId; //修改人
objRsAdminGradeENT.sfUpdFldSetStr = objRsAdminGradeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRsAdminGradeENS:源对象
 * @param objRsAdminGradeENT:目标对象
*/
export  function RsAdminGrade_GetObjFromJsonObj(objRsAdminGradeENS: clsRsAdminGradeEN): clsRsAdminGradeEN 
{
 const objRsAdminGradeENT: clsRsAdminGradeEN = new clsRsAdminGradeEN();
ObjectAssign(objRsAdminGradeENT, objRsAdminGradeENS);
 return objRsAdminGradeENT;
}