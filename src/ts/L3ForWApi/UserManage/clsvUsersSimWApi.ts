
 /**
 * 类名:clsvUsersSimWApi
 * 表名:vUsersSim(01120699)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/27 16:36:45
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
 * vUsersSim(vUsersSim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年12月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj_V,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvUsersSimEN } from "@/ts/L0Entity/UserManage/clsvUsersSimEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vUsersSim_Controller = "vUsersSimApi";
 export const vUsersSim_ConstructorName = "vUsersSim";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export  async function vUsersSim_GetObjByUserIdAsync(strUserId: string): Promise<clsvUsersSimEN|null>  
{
const strThisFuncName = "GetObjByUserIdAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsvUsersSimWApi.GetObjByUserIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByUserId";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId,
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
const objvUsersSim = vUsersSim_GetObjFromJsonObj(returnObj);
return objvUsersSim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
 * @param strUserId:所给的关键字
 * @returns 对象
*/
export  async function vUsersSim_GetObjByUserIdCache(strUserId:string,strCmPrjId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByUserIdCache";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsvUsersSimWApi.GetObjByUserIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvUsersSimObjLstCache = await vUsersSim_GetObjLstCache(strCmPrjId);
try
{
const arrvUsersSimSel = arrvUsersSimObjLstCache.filter(x => 
 x.userId == strUserId );
let objvUsersSim: clsvUsersSimEN;
if (arrvUsersSimSel.length > 0)
{
objvUsersSim = arrvUsersSimSel[0];
return objvUsersSim;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvUsersSimConst = await vUsersSim_GetObjByUserIdAsync(strUserId);
if (objvUsersSimConst != null)
{
vUsersSim_ReFreshThisCache(strCmPrjId);
return objvUsersSimConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUserId, vUsersSim_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strUserId:所给的关键字
 * @returns 对象
*/
export  async function vUsersSim_GetObjByUserIdlocalStorage(strUserId: string) {
const strThisFuncName = "GetObjByUserIdlocalStorage";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsvUsersSimWApi.GetObjByUserIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvUsersSimEN._CurrTabName, strUserId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvUsersSimCache: clsvUsersSimEN = JSON.parse(strTempObj);
return objvUsersSimCache;
}
try
{
const objvUsersSim = await vUsersSim_GetObjByUserIdAsync(strUserId);
if (objvUsersSim != null)
{
localStorage.setItem(strKey, JSON.stringify(objvUsersSim));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvUsersSim;
}
return objvUsersSim;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUserId, vUsersSim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strUserId:所给的关键字
 * @returns 对象
*/
export  async function vUsersSim_GetNameByUserIdCache(strUserId: string,strCmPrjId: string) {

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsvUsersSimWApi.GetNameByUserIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvUsersSimObjLstCache = await vUsersSim_GetObjLstCache(strCmPrjId);
if (arrvUsersSimObjLstCache == null) return "";
try
{
const arrvUsersSimSel = arrvUsersSimObjLstCache.filter(x => 
 x.userId == strUserId );
let objvUsersSim: clsvUsersSimEN;
if (arrvUsersSimSel.length > 0)
{
objvUsersSim = arrvUsersSimSel[0];
return objvUsersSim.userName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strUserId);
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
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vUsersSim_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCmPrjIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCmPrjIdClassfy) == true)
{
  const strMsg = Format("参数:[strCmPrjIdClassfy]不能为空!(In clsvUsersSimWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCmPrjIdClassfy.length != 6)
{
const strMsg = Format("缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsvUsersSimWApi.func)", strCmPrjIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvUsersSimEN.con_UserId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvUsersSimEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvUsersSimEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strUserId = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objvUsersSim = await vUsersSim_GetObjByUserIdCache(strUserId , strCmPrjIdClassfy);
if (objvUsersSim == null) return "";
if (objvUsersSim.GetFldValue(strOutFldName) == null) return "";
return objvUsersSim.GetFldValue(strOutFldName).toString();
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
export  function vUsersSim_SortFunDefa(a:clsvUsersSimEN , b:clsvUsersSimEN): number 
{
return a.userId.localeCompare(b.userId);
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
export  function vUsersSim_SortFunDefa2Fld(a:clsvUsersSimEN , b:clsvUsersSimEN): number 
{
if (a.userName == b.userName) return a.idXzCollege.localeCompare(b.idXzCollege);
else return a.userName.localeCompare(b.userName);
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
export  function vUsersSim_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvUsersSimEN.con_UserId:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
return a.userId.localeCompare(b.userId);
}
case clsvUsersSimEN.con_UserName:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
return a.userName.localeCompare(b.userName);
}
case clsvUsersSimEN.con_IdXzCollege:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvUsersSimEN.con_CollegeName:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (a.collegeName == null) return -1;
if (b.collegeName == null) return 1;
return a.collegeName.localeCompare(b.collegeName);
}
case clsvUsersSimEN.con_IdXzMajor:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (a.idXzMajor == null) return -1;
if (b.idXzMajor == null) return 1;
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvUsersSimEN.con_MajorName:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (a.majorName == null) return -1;
if (b.majorName == null) return 1;
return a.majorName.localeCompare(b.majorName);
}
case clsvUsersSimEN.con_HeadPic:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (a.headPic == null) return -1;
if (b.headPic == null) return 1;
return a.headPic.localeCompare(b.headPic);
}
case clsvUsersSimEN.con_IsGSuser:
return (a: clsvUsersSimEN) => {
if (a.isGSuser == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vUsersSim]中不存在!(in ${ vUsersSim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvUsersSimEN.con_UserId:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
return b.userId.localeCompare(a.userId);
}
case clsvUsersSimEN.con_UserName:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
return b.userName.localeCompare(a.userName);
}
case clsvUsersSimEN.con_IdXzCollege:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvUsersSimEN.con_CollegeName:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (b.collegeName == null) return -1;
if (a.collegeName == null) return 1;
return b.collegeName.localeCompare(a.collegeName);
}
case clsvUsersSimEN.con_IdXzMajor:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (b.idXzMajor == null) return -1;
if (a.idXzMajor == null) return 1;
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvUsersSimEN.con_MajorName:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (b.majorName == null) return -1;
if (a.majorName == null) return 1;
return b.majorName.localeCompare(a.majorName);
}
case clsvUsersSimEN.con_HeadPic:
return (a: clsvUsersSimEN, b: clsvUsersSimEN) => {
if (b.headPic == null) return -1;
if (a.headPic == null) return 1;
return b.headPic.localeCompare(a.headPic);
}
case clsvUsersSimEN.con_IsGSuser:
return (b: clsvUsersSimEN) => {
if (b.isGSuser == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vUsersSim]中不存在!(in ${ vUsersSim_ConstructorName}.${ strThisFuncName})`;
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
export  async function vUsersSim_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvUsersSimEN.con_UserId:
return (obj: clsvUsersSimEN) => {
return obj.userId === value;
}
case clsvUsersSimEN.con_UserName:
return (obj: clsvUsersSimEN) => {
return obj.userName === value;
}
case clsvUsersSimEN.con_IdXzCollege:
return (obj: clsvUsersSimEN) => {
return obj.idXzCollege === value;
}
case clsvUsersSimEN.con_CollegeName:
return (obj: clsvUsersSimEN) => {
return obj.collegeName === value;
}
case clsvUsersSimEN.con_IdXzMajor:
return (obj: clsvUsersSimEN) => {
return obj.idXzMajor === value;
}
case clsvUsersSimEN.con_MajorName:
return (obj: clsvUsersSimEN) => {
return obj.majorName === value;
}
case clsvUsersSimEN.con_HeadPic:
return (obj: clsvUsersSimEN) => {
return obj.headPic === value;
}
case clsvUsersSimEN.con_IsGSuser:
return (obj: clsvUsersSimEN) => {
return obj.isGSuser === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vUsersSim]中不存在!(in ${ vUsersSim_ConstructorName}.${ strThisFuncName})`;
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
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vUsersSim_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCmPrjIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCmPrjIdClassfy) == true)
{
  const strMsg = Format("参数:[strCmPrjIdClassfy]不能为空!(In clsvUsersSimWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCmPrjIdClassfy.length != 6)
{
const strMsg = Format("缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsvUsersSimWApi.funcKey)", strCmPrjIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvUsersSimEN.con_UserId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvUsersSim = await vUsersSim_GetObjLstCache(strCmPrjIdClassfy);
if (arrvUsersSim == null) return [];
let arrvUsersSimSel = arrvUsersSim;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvUsersSimSel = arrvUsersSimSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvUsersSimSel.length == 0) return [];
return arrvUsersSimSel.map(x=>x.userId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vUsersSim_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
export  async function vUsersSim_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
export  async function vUsersSim_GetFirstObjAsync(strWhereCond: string): Promise<clsvUsersSimEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

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
const objvUsersSim = vUsersSim_GetObjFromJsonObj(returnObj);
return objvUsersSim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
export  async function vUsersSim_GetObjLstClientCache(strCmPrjId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvUsersSimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvUsersSimEN.WhereFormat, strCmPrjId);
}
else
{
strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
}
const strKey = Format("{0}_{1}", clsvUsersSimEN._CurrTabName, strCmPrjId);
if (IsNullOrEmpty(clsvUsersSimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvUsersSimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvUsersSimExObjLstCache: Array<clsvUsersSimEN> = CacheHelper.Get(strKey);
const arrvUsersSimObjLstT = vUsersSim_GetObjLstByJSONObjLst(arrvUsersSimExObjLstCache);
return arrvUsersSimObjLstT;
}
try
{
const arrvUsersSimExObjLst = await vUsersSim_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvUsersSimExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvUsersSimExObjLst.length);
console.log(strInfo);
return arrvUsersSimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vUsersSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vUsersSim_GetObjLstlocalStorage(strCmPrjId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvUsersSimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvUsersSimEN.WhereFormat, strCmPrjId);
}
else
{
const strMsg ="分类字段为扩展字段,此时WhereFormat不能为空!";
console.error(strMsg);
throw new Error(strMsg);
}
const strKey = Format("{0}_{1}", clsvUsersSimEN._CurrTabName, strCmPrjId);
if (IsNullOrEmpty(clsvUsersSimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvUsersSimEN.CacheAddiCondition);
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
const arrvUsersSimExObjLstCache: Array<clsvUsersSimEN> = JSON.parse(strTempObjLst);
const arrvUsersSimObjLstT = vUsersSim_GetObjLstByJSONObjLst(arrvUsersSimExObjLstCache);
return arrvUsersSimObjLstT;
}
try
{
const arrvUsersSimExObjLst = await vUsersSim_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvUsersSimExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvUsersSimExObjLst.length);
console.log(strInfo);
return arrvUsersSimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vUsersSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vUsersSim_GetObjLstlocalStoragePureCache(strCmPrjId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvUsersSimEN._CurrTabName, strCmPrjId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvUsersSimObjLstCache: Array<clsvUsersSimEN> = JSON.parse(strTempObjLst);
return arrvUsersSimObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vUsersSim_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvUsersSimEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsersSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsersSim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
export  async function vUsersSim_GetObjLstsessionStorage(strCmPrjId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvUsersSimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvUsersSimEN.WhereFormat, strCmPrjId);
}
else
{
const strMsg ="分类字段为扩展字段,此时WhereFormat不能为空!";
console.error(strMsg);
throw new Error(strMsg);
}
const strKey = Format("{0}_{1}", clsvUsersSimEN._CurrTabName, strCmPrjId);
if (IsNullOrEmpty(clsvUsersSimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvUsersSimEN.CacheAddiCondition);
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
const arrvUsersSimExObjLstCache: Array<clsvUsersSimEN> = JSON.parse(strTempObjLst);
const arrvUsersSimObjLstT = vUsersSim_GetObjLstByJSONObjLst(arrvUsersSimExObjLstCache);
return arrvUsersSimObjLstT;
}
try
{
const arrvUsersSimExObjLst = await vUsersSim_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvUsersSimExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvUsersSimExObjLst.length);
console.log(strInfo);
return arrvUsersSimExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vUsersSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vUsersSim_GetObjLstsessionStoragePureCache(strCmPrjId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvUsersSimEN._CurrTabName, strCmPrjId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvUsersSimObjLstCache: Array<clsvUsersSimEN> = JSON.parse(strTempObjLst);
return arrvUsersSimObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vUsersSim_GetObjLstCache(strCmPrjId: string): Promise<Array<clsvUsersSimEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCmPrjId) == true)
{
  const strMsg = Format("参数:[strCmPrjId]不能为空！(In clsvUsersSimWApi.vUsersSim_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCmPrjId.length != 6)
{
const strMsg = Format("缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsvUsersSimWApi.vUsersSim_GetObjLstCache)", strCmPrjId.length);
console.error(strMsg);
throw (strMsg);
}
let arrvUsersSimObjLstCache;
switch (clsvUsersSimEN.CacheModeId)
{
case "04"://sessionStorage
arrvUsersSimObjLstCache = await vUsersSim_GetObjLstsessionStorage(strCmPrjId);
break;
case "03"://localStorage
arrvUsersSimObjLstCache = await vUsersSim_GetObjLstlocalStorage(strCmPrjId);
break;
case "02"://ClientCache
arrvUsersSimObjLstCache = await vUsersSim_GetObjLstClientCache(strCmPrjId);
break;
default:
arrvUsersSimObjLstCache = await vUsersSim_GetObjLstClientCache(strCmPrjId);
break;
}
return arrvUsersSimObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vUsersSim_GetObjLstPureCache(strCmPrjId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvUsersSimObjLstCache;
switch (clsvUsersSimEN.CacheModeId)
{
case "04"://sessionStorage
arrvUsersSimObjLstCache = await vUsersSim_GetObjLstsessionStoragePureCache(strCmPrjId);
break;
case "03"://localStorage
arrvUsersSimObjLstCache = await vUsersSim_GetObjLstlocalStoragePureCache(strCmPrjId);
break;
case "02"://ClientCache
arrvUsersSimObjLstCache = null;
break;
default:
arrvUsersSimObjLstCache = null;
break;
}
return arrvUsersSimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vUsersSim_GetSubObjLstCache(objvUsersSimCond: clsvUsersSimEN ,strCmPrjId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvUsersSimObjLstCache = await vUsersSim_GetObjLstCache(strCmPrjId);
let arrvUsersSimSel = arrvUsersSimObjLstCache;
if (objvUsersSimCond.sfFldComparisonOp == null || objvUsersSimCond.sfFldComparisonOp == "") return arrvUsersSimSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvUsersSimCond.sfFldComparisonOp);
//console.log("clsvUsersSimWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvUsersSimCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvUsersSimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvUsersSimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvUsersSimCond), vUsersSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvUsersSimEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserId:关键字列表
 * @returns 对象列表
 **/
export  async function vUsersSim_GetObjLstByUserIdLstAsync(arrUserId: Array<string>): Promise<Array<clsvUsersSimEN>>  
{
const strThisFuncName = "GetObjLstByUserIdLstAsync";
const strAction = "GetObjLstByUserIdLst";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsersSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsersSim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
 * @param arrstrUserIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vUsersSim_GetObjLstByUserIdLstCache(arrUserIdLst: Array<string> ,strCmPrjId: string) {
const strThisFuncName = "GetObjLstByUserIdLstCache";
try
{
const arrvUsersSimObjLstCache = await vUsersSim_GetObjLstCache(strCmPrjId);
const arrvUsersSimSel = arrvUsersSimObjLstCache.filter(x => arrUserIdLst.indexOf(x.userId)>-1);
return arrvUsersSimSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrUserIdLst.join(","), vUsersSim_ConstructorName, strThisFuncName);
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
export  async function vUsersSim_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvUsersSimEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsersSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsersSim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
export  async function vUsersSim_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvUsersSimEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsersSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsersSim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
export  async function vUsersSim_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCmPrjId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvUsersSimEN>();
const arrvUsersSimObjLstCache = await vUsersSim_GetObjLstCache(strCmPrjId);
if (arrvUsersSimObjLstCache.length == 0) return arrvUsersSimObjLstCache;
let arrvUsersSimSel = arrvUsersSimObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvUsersSimCond = new clsvUsersSimEN();
ObjectAssign(objvUsersSimCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvUsersSimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvUsersSimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvUsersSimSel = arrvUsersSimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvUsersSimSel.length == 0) return arrvUsersSimSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvUsersSimSel = arrvUsersSimSel.sort(vUsersSim_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvUsersSimSel = arrvUsersSimSel.sort(objPagerPara.sortFun);
}
arrvUsersSimSel = arrvUsersSimSel.slice(intStart, intEnd);     
return arrvUsersSimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vUsersSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvUsersSimEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vUsersSim_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvUsersSimEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvUsersSimEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsersSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsersSim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
 * @param objstrUserIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vUsersSim_IsExistRecordCache(objvUsersSimCond: clsvUsersSimEN,strCmPrjId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvUsersSimObjLstCache = await vUsersSim_GetObjLstCache(strCmPrjId);
if (arrvUsersSimObjLstCache == null) return false;
let arrvUsersSimSel = arrvUsersSimObjLstCache;
if (objvUsersSimCond.sfFldComparisonOp == null || objvUsersSimCond.sfFldComparisonOp == "") return arrvUsersSimSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvUsersSimCond.sfFldComparisonOp);
//console.log("clsvUsersSimWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvUsersSimCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvUsersSimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvUsersSimSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvUsersSimCond), vUsersSim_ConstructorName, strThisFuncName);
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
export  async function vUsersSim_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
 * @param strUserId:所给的关键字
 * @returns 对象
*/
export  async function vUsersSim_IsExistCache(strUserId:string,strCmPrjId:string) {
const strThisFuncName = "IsExistCache";
const arrvUsersSimObjLstCache = await vUsersSim_GetObjLstCache(strCmPrjId);
if (arrvUsersSimObjLstCache == null) return false;
try
{
const arrvUsersSimSel = arrvUsersSimObjLstCache.filter(x => x.userId == strUserId);
if (arrvUsersSimSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strUserId, vUsersSim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strUserId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vUsersSim_IsExistAsync(strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
export  async function vUsersSim_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vUsersSim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsersSim_ConstructorName, strThisFuncName);
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
 * @param objvUsersSimCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vUsersSim_GetRecCountByCondCache(objvUsersSimCond: clsvUsersSimEN ,strCmPrjId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvUsersSimObjLstCache = await vUsersSim_GetObjLstCache(strCmPrjId);
if (arrvUsersSimObjLstCache == null) return 0;
let arrvUsersSimSel = arrvUsersSimObjLstCache;
if (objvUsersSimCond.sfFldComparisonOp == null || objvUsersSimCond.sfFldComparisonOp == "") return arrvUsersSimSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvUsersSimCond.sfFldComparisonOp);
//console.log("clsvUsersSimWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvUsersSimCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvUsersSimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvUsersSimSel = arrvUsersSimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvUsersSimSel = arrvUsersSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvUsersSimSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvUsersSimCond), vUsersSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vUsersSim_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function vUsersSim_ReFreshThisCache(strCmPrjId: string):void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvUsersSimEN._CurrTabName, strCmPrjId);
switch (clsvUsersSimEN.CacheModeId)
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

 * @param strCmPrjId:
*/
export  async function vUsersSim_BindDdl_UserIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strCmPrjId: string)
{

if (IsNullOrEmpty(strCmPrjId) == true)
{
  const strMsg = Format("参数:[strCmPrjId]不能为空！(In clsvUsersSimWApi.BindDdl_UserIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCmPrjId.length != 6)
{
const strMsg = Format("缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsvUsersSimWApi.BindDdl_UserIdInDiv)", strCmPrjId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_UserIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_UserIdInDivCache");
const arrObjLstSel = await vUsersSim_GetObjLstCache(strCmPrjId);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvUsersSimEN.con_UserId, clsvUsersSimEN.con_UserName, "vUsersSim");
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vUsersSim_GetJSONStrByObj (pobjvUsersSimEN: clsvUsersSimEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvUsersSimEN);
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
export  function vUsersSim_GetObjLstByJSONStr (strJSON: string): Array<clsvUsersSimEN>
{
let arrvUsersSimObjLst = new Array<clsvUsersSimEN>();
if (strJSON === "")
{
return arrvUsersSimObjLst;
}
try
{
arrvUsersSimObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvUsersSimObjLst;
}
return arrvUsersSimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvUsersSimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vUsersSim_GetObjLstByJSONObjLst (arrvUsersSimObjLstS: Array<clsvUsersSimEN>): Array<clsvUsersSimEN>
{
const arrvUsersSimObjLst = new Array<clsvUsersSimEN>();
for (const objInFor of arrvUsersSimObjLstS) {
const obj1 = vUsersSim_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvUsersSimObjLst.push(obj1);
}
return arrvUsersSimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vUsersSim_GetObjByJSONStr (strJSON: string): clsvUsersSimEN
{
let pobjvUsersSimEN = new clsvUsersSimEN();
if (strJSON === "")
{
return pobjvUsersSimEN;
}
try
{
pobjvUsersSimEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvUsersSimEN;
}
return pobjvUsersSimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vUsersSim_GetCombineCondition(objvUsersSimCond: clsvUsersSimEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvUsersSimCond.dicFldComparisonOp, clsvUsersSimEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvUsersSimCond.dicFldComparisonOp[clsvUsersSimEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersSimEN.con_UserId, objvUsersSimCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objvUsersSimCond.dicFldComparisonOp, clsvUsersSimEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objvUsersSimCond.dicFldComparisonOp[clsvUsersSimEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersSimEN.con_UserName, objvUsersSimCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objvUsersSimCond.dicFldComparisonOp, clsvUsersSimEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvUsersSimCond.dicFldComparisonOp[clsvUsersSimEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersSimEN.con_IdXzCollege, objvUsersSimCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvUsersSimCond.dicFldComparisonOp, clsvUsersSimEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvUsersSimCond.dicFldComparisonOp[clsvUsersSimEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersSimEN.con_CollegeName, objvUsersSimCond.collegeName, strComparisonOpCollegeName);
}
if (Object.prototype.hasOwnProperty.call(objvUsersSimCond.dicFldComparisonOp, clsvUsersSimEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvUsersSimCond.dicFldComparisonOp[clsvUsersSimEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersSimEN.con_IdXzMajor, objvUsersSimCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvUsersSimCond.dicFldComparisonOp, clsvUsersSimEN.con_MajorName) == true)
{
const strComparisonOpMajorName:string = objvUsersSimCond.dicFldComparisonOp[clsvUsersSimEN.con_MajorName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersSimEN.con_MajorName, objvUsersSimCond.majorName, strComparisonOpMajorName);
}
if (Object.prototype.hasOwnProperty.call(objvUsersSimCond.dicFldComparisonOp, clsvUsersSimEN.con_HeadPic) == true)
{
const strComparisonOpHeadPic:string = objvUsersSimCond.dicFldComparisonOp[clsvUsersSimEN.con_HeadPic];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersSimEN.con_HeadPic, objvUsersSimCond.headPic, strComparisonOpHeadPic);
}
if (Object.prototype.hasOwnProperty.call(objvUsersSimCond.dicFldComparisonOp, clsvUsersSimEN.con_IsGSuser) == true)
{
if (objvUsersSimCond.isGSuser == true)
{
strWhereCond += Format(" And {0} = '1'", clsvUsersSimEN.con_IsGSuser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvUsersSimEN.con_IsGSuser);
}
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvUsersSimENS:源对象
 * @param objvUsersSimENT:目标对象
*/
export  function vUsersSim_CopyObjTo(objvUsersSimENS: clsvUsersSimEN , objvUsersSimENT: clsvUsersSimEN ): void 
{
objvUsersSimENT.userId = objvUsersSimENS.userId; //用户ID
objvUsersSimENT.userName = objvUsersSimENS.userName; //用户名
objvUsersSimENT.idXzCollege = objvUsersSimENS.idXzCollege; //学院流水号
objvUsersSimENT.collegeName = objvUsersSimENS.collegeName; //学院名称
objvUsersSimENT.idXzMajor = objvUsersSimENS.idXzMajor; //专业流水号
objvUsersSimENT.majorName = objvUsersSimENS.majorName; //专业名称
objvUsersSimENT.headPic = objvUsersSimENS.headPic; //头像
objvUsersSimENT.isGSuser = objvUsersSimENS.isGSuser; //是否GS用户
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvUsersSimENS:源对象
 * @param objvUsersSimENT:目标对象
*/
export  function vUsersSim_GetObjFromJsonObj(objvUsersSimENS: clsvUsersSimEN): clsvUsersSimEN 
{
 const objvUsersSimENT: clsvUsersSimEN = new clsvUsersSimEN();
ObjectAssign(objvUsersSimENT, objvUsersSimENS);
 return objvUsersSimENT;
}