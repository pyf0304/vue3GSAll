
 /**
 * 类名:clsQxUserIdentityWApi
 * 表名:QxUserIdentity(01120922)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/19 11:14:30
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
 * 用户权限身份(QxUserIdentity)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年12月19日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxUserIdentityEN } from "@/ts/L0Entity/UserManage/clsQxUserIdentityEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUserIdentity_Controller = "QxUserIdentityApi";
 export const qxUserIdentity_ConstructorName = "qxUserIdentity";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdentityId:关键字
 * @returns 对象
 **/
export  async function QxUserIdentity_GetObjByIdentityIdAsync(strIdentityId: string): Promise<clsQxUserIdentityEN|null>  
{
const strThisFuncName = "GetObjByIdentityIdAsync";

if (IsNullOrEmpty(strIdentityId) == true)
{
  const strMsg = Format("参数:[strIdentityId]不能为空!(In clsQxUserIdentityWApi.GetObjByIdentityIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdentityId.length != 2)
{
const strMsg = Format("缓存分类变量:[strIdentityId]的长度:[{0}]不正确!(clsQxUserIdentityWApi.GetObjByIdentityIdAsync)", strIdentityId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdentityId";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdentityId,
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
const objQxUserIdentity = QxUserIdentity_GetObjFromJsonObj(returnObj);
return objQxUserIdentity;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param strIdentityId:所给的关键字
 * @returns 对象
*/
export  async function QxUserIdentity_GetObjByIdentityIdCache(strIdentityId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdentityIdCache";

if (IsNullOrEmpty(strIdentityId) == true)
{
  const strMsg = Format("参数:[strIdentityId]不能为空!(In clsQxUserIdentityWApi.GetObjByIdentityIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdentityId.length != 2)
{
const strMsg = Format("缓存分类变量:[strIdentityId]的长度:[{0}]不正确!(clsQxUserIdentityWApi.GetObjByIdentityIdCache)", strIdentityId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstCache();
try
{
const arrQxUserIdentitySel = arrQxUserIdentityObjLstCache.filter(x => 
 x.identityId == strIdentityId );
let objQxUserIdentity: clsQxUserIdentityEN;
if (arrQxUserIdentitySel.length > 0)
{
objQxUserIdentity = arrQxUserIdentitySel[0];
return objQxUserIdentity;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxUserIdentityConst = await QxUserIdentity_GetObjByIdentityIdAsync(strIdentityId);
if (objQxUserIdentityConst != null)
{
QxUserIdentity_ReFreshThisCache();
return objQxUserIdentityConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdentityId, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdentityId:所给的关键字
 * @returns 对象
*/
export  async function QxUserIdentity_GetObjByIdentityIdlocalStorage(strIdentityId: string) {
const strThisFuncName = "GetObjByIdentityIdlocalStorage";

if (IsNullOrEmpty(strIdentityId) == true)
{
  const strMsg = Format("参数:[strIdentityId]不能为空!(In clsQxUserIdentityWApi.GetObjByIdentityIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdentityId.length != 2)
{
const strMsg = Format("缓存分类变量:[strIdentityId]的长度:[{0}]不正确!(clsQxUserIdentityWApi.GetObjByIdentityIdlocalStorage)", strIdentityId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxUserIdentityEN._CurrTabName, strIdentityId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxUserIdentityCache: clsQxUserIdentityEN = JSON.parse(strTempObj);
return objQxUserIdentityCache;
}
try
{
const objQxUserIdentity = await QxUserIdentity_GetObjByIdentityIdAsync(strIdentityId);
if (objQxUserIdentity != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxUserIdentity));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxUserIdentity;
}
return objQxUserIdentity;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdentityId, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxUserIdentity:所给的对象
 * @returns 对象
*/
export  async function QxUserIdentity_UpdateObjInLstCache(objQxUserIdentity: clsQxUserIdentityEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstCache();
const obj = arrQxUserIdentityObjLstCache.find(x => 
x.identityId == objQxUserIdentity.identityId);
if (obj != null)
{
objQxUserIdentity.identityId = obj.identityId;
ObjectAssign( obj, objQxUserIdentity);
}
else
{
arrQxUserIdentityObjLstCache.push(objQxUserIdentity);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdentityId:所给的关键字
 * @returns 对象
*/
export  async function QxUserIdentity_GetNameByIdentityIdCache(strIdentityId: string) {

if (IsNullOrEmpty(strIdentityId) == true)
{
  const strMsg = Format("参数:[strIdentityId]不能为空!(In clsQxUserIdentityWApi.GetNameByIdentityIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdentityId.length != 2)
{
const strMsg = Format("缓存分类变量:[strIdentityId]的长度:[{0}]不正确!(clsQxUserIdentityWApi.GetNameByIdentityIdCache)", strIdentityId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstCache();
if (arrQxUserIdentityObjLstCache == null) return "";
try
{
const arrQxUserIdentitySel = arrQxUserIdentityObjLstCache.filter(x => 
 x.identityId == strIdentityId );
let objQxUserIdentity: clsQxUserIdentityEN;
if (arrQxUserIdentitySel.length > 0)
{
objQxUserIdentity = arrQxUserIdentitySel[0];
return objQxUserIdentity.identityDesc;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdentityId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function QxUserIdentity_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxUserIdentityEN.con_IdentityId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxUserIdentityEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxUserIdentityEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdentityId = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objQxUserIdentity = await QxUserIdentity_GetObjByIdentityIdCache(strIdentityId );
if (objQxUserIdentity == null) return "";
if (objQxUserIdentity.GetFldValue(strOutFldName) == null) return "";
return objQxUserIdentity.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserIdentity_SortFunDefa(a:clsQxUserIdentityEN , b:clsQxUserIdentityEN): number 
{
return a.identityId.localeCompare(b.identityId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserIdentity_SortFunDefa2Fld(a:clsQxUserIdentityEN , b:clsQxUserIdentityEN): number 
{
if (a.identityDesc == b.identityDesc) return a.identityEnName.localeCompare(b.identityEnName);
else return a.identityDesc.localeCompare(b.identityDesc);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserIdentity_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUserIdentityEN.con_IdentityId:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
return a.identityId.localeCompare(b.identityId);
}
case clsQxUserIdentityEN.con_IdentityDesc:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
return a.identityDesc.localeCompare(b.identityDesc);
}
case clsQxUserIdentityEN.con_IdentityEnName:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
if (a.identityEnName == null) return -1;
if (b.identityEnName == null) return 1;
return a.identityEnName.localeCompare(b.identityEnName);
}
case clsQxUserIdentityEN.con_UserType:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
if (a.userType == null) return -1;
if (b.userType == null) return 1;
return a.userType.localeCompare(b.userType);
}
case clsQxUserIdentityEN.con_Memo:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserIdentity]中不存在!(in ${ qxUserIdentity_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUserIdentityEN.con_IdentityId:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
return b.identityId.localeCompare(a.identityId);
}
case clsQxUserIdentityEN.con_IdentityDesc:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
return b.identityDesc.localeCompare(a.identityDesc);
}
case clsQxUserIdentityEN.con_IdentityEnName:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
if (b.identityEnName == null) return -1;
if (a.identityEnName == null) return 1;
return b.identityEnName.localeCompare(a.identityEnName);
}
case clsQxUserIdentityEN.con_UserType:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
if (b.userType == null) return -1;
if (a.userType == null) return 1;
return b.userType.localeCompare(a.userType);
}
case clsQxUserIdentityEN.con_Memo:
return (a: clsQxUserIdentityEN, b: clsQxUserIdentityEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserIdentity]中不存在!(in ${ qxUserIdentity_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxUserIdentity_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUserIdentityEN.con_IdentityId:
return (obj: clsQxUserIdentityEN) => {
return obj.identityId === value;
}
case clsQxUserIdentityEN.con_IdentityDesc:
return (obj: clsQxUserIdentityEN) => {
return obj.identityDesc === value;
}
case clsQxUserIdentityEN.con_IdentityEnName:
return (obj: clsQxUserIdentityEN) => {
return obj.identityEnName === value;
}
case clsQxUserIdentityEN.con_UserType:
return (obj: clsQxUserIdentityEN) => {
return obj.userType === value;
}
case clsQxUserIdentityEN.con_Memo:
return (obj: clsQxUserIdentityEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserIdentity]中不存在!(in ${ qxUserIdentity_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function QxUserIdentity_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxUserIdentityEN.con_IdentityId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxUserIdentity = await QxUserIdentity_GetObjLstCache();
if (arrQxUserIdentity == null) return [];
let arrQxUserIdentitySel = arrQxUserIdentity;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxUserIdentitySel.length == 0) return [];
return arrQxUserIdentitySel.map(x=>x.identityId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserIdentity_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUserIdentityEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const objQxUserIdentity = QxUserIdentity_GetObjFromJsonObj(returnObj);
return objQxUserIdentity;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxUserIdentityEN._CurrTabName;
if (IsNullOrEmpty(clsQxUserIdentityEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxUserIdentityEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxUserIdentityExObjLstCache: Array<clsQxUserIdentityEN> = CacheHelper.Get(strKey);
const arrQxUserIdentityObjLstT = QxUserIdentity_GetObjLstByJSONObjLst(arrQxUserIdentityExObjLstCache);
return arrQxUserIdentityObjLstT;
}
try
{
const arrQxUserIdentityExObjLst = await QxUserIdentity_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxUserIdentityExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxUserIdentityExObjLst.length);
console.log(strInfo);
return arrQxUserIdentityExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserIdentity_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxUserIdentityEN._CurrTabName;
if (IsNullOrEmpty(clsQxUserIdentityEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxUserIdentityEN.CacheAddiCondition);
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
const arrQxUserIdentityExObjLstCache: Array<clsQxUserIdentityEN> = JSON.parse(strTempObjLst);
const arrQxUserIdentityObjLstT = QxUserIdentity_GetObjLstByJSONObjLst(arrQxUserIdentityExObjLstCache);
return arrQxUserIdentityObjLstT;
}
try
{
const arrQxUserIdentityExObjLst = await QxUserIdentity_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxUserIdentityExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxUserIdentityExObjLst.length);
console.log(strInfo);
return arrQxUserIdentityExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserIdentity_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxUserIdentityEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxUserIdentityObjLstCache: Array<clsQxUserIdentityEN> = JSON.parse(strTempObjLst);
return arrQxUserIdentityObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxUserIdentity_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUserIdentityEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserIdentity_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxUserIdentityEN._CurrTabName;
if (IsNullOrEmpty(clsQxUserIdentityEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxUserIdentityEN.CacheAddiCondition);
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
const arrQxUserIdentityExObjLstCache: Array<clsQxUserIdentityEN> = JSON.parse(strTempObjLst);
const arrQxUserIdentityObjLstT = QxUserIdentity_GetObjLstByJSONObjLst(arrQxUserIdentityExObjLstCache);
return arrQxUserIdentityObjLstT;
}
try
{
const arrQxUserIdentityExObjLst = await QxUserIdentity_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxUserIdentityExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxUserIdentityExObjLst.length);
console.log(strInfo);
return arrQxUserIdentityExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserIdentity_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxUserIdentityEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxUserIdentityObjLstCache: Array<clsQxUserIdentityEN> = JSON.parse(strTempObjLst);
return arrQxUserIdentityObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserIdentity_GetObjLstCache(): Promise<Array<clsQxUserIdentityEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxUserIdentityObjLstCache;
switch (clsQxUserIdentityEN.CacheModeId)
{
case "04"://sessionStorage
arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstClientCache();
break;
default:
arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstClientCache();
break;
}
return arrQxUserIdentityObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUserIdentity_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxUserIdentityObjLstCache;
switch (clsQxUserIdentityEN.CacheModeId)
{
case "04"://sessionStorage
arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxUserIdentityObjLstCache = null;
break;
default:
arrQxUserIdentityObjLstCache = null;
break;
}
return arrQxUserIdentityObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdentityIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxUserIdentity_GetSubObjLstCache(objQxUserIdentityCond: clsQxUserIdentityEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstCache();
let arrQxUserIdentitySel = arrQxUserIdentityObjLstCache;
if (objQxUserIdentityCond.sfFldComparisonOp == null || objQxUserIdentityCond.sfFldComparisonOp == "") return arrQxUserIdentitySel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxUserIdentityCond.sfFldComparisonOp);
//console.log("clsQxUserIdentityWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxUserIdentityCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxUserIdentityCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxUserIdentitySel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxUserIdentityCond), qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxUserIdentityEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdentityId:关键字列表
 * @returns 对象列表
 **/
export  async function QxUserIdentity_GetObjLstByIdentityIdLstAsync(arrIdentityId: Array<string>): Promise<Array<clsQxUserIdentityEN>>  
{
const strThisFuncName = "GetObjLstByIdentityIdLstAsync";
const strAction = "GetObjLstByIdentityIdLst";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdentityId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserIdentity_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param arrstrIdentityIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxUserIdentity_GetObjLstByIdentityIdLstCache(arrIdentityIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdentityIdLstCache";
try
{
const arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstCache();
const arrQxUserIdentitySel = arrQxUserIdentityObjLstCache.filter(x => arrIdentityIdLst.indexOf(x.identityId)>-1);
return arrQxUserIdentitySel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdentityIdLst.join(","), qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUserIdentityEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserIdentity_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUserIdentityEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserIdentity_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserIdentityEN>();
const arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstCache();
if (arrQxUserIdentityObjLstCache.length == 0) return arrQxUserIdentityObjLstCache;
let arrQxUserIdentitySel = arrQxUserIdentityObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQxUserIdentityCond = new clsQxUserIdentityEN();
ObjectAssign(objQxUserIdentityCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQxUserIdentityWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxUserIdentityCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxUserIdentitySel.length == 0) return arrQxUserIdentitySel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxUserIdentitySel = arrQxUserIdentitySel.sort(QxUserIdentity_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxUserIdentitySel = arrQxUserIdentitySel.sort(objPagerPara.sortFun);
}
arrQxUserIdentitySel = arrQxUserIdentitySel.slice(intStart, intEnd);     
return arrQxUserIdentitySel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxUserIdentityEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxUserIdentity_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUserIdentityEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserIdentityEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserIdentity_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param strIdentityId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxUserIdentity_DelRecordAsync(strIdentityId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdentityId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param arrIdentityId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxUserIdentity_DelQxUserIdentitysAsync(arrIdentityId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUserIdentitysAsync";
const strAction = "DelQxUserIdentitys";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdentityId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_DelQxUserIdentitysByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUserIdentitysByCondAsync";
const strAction = "DelQxUserIdentitysByCond";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param objQxUserIdentityEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserIdentity_AddNewRecordAsync(objQxUserIdentityEN: clsQxUserIdentityEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxUserIdentityEN.identityId === null || objQxUserIdentityEN.identityId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxUserIdentityEN);
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserIdentityEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param objQxUserIdentityEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserIdentity_AddNewRecordWithMaxIdAsync(objQxUserIdentityEN: clsQxUserIdentityEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserIdentityEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param objQxUserIdentityEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUserIdentity_AddNewRecordWithReturnKeyAsync(objQxUserIdentityEN: clsQxUserIdentityEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserIdentityEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param objQxUserIdentityEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserIdentity_UpdateRecordAsync(objQxUserIdentityEN: clsQxUserIdentityEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUserIdentityEN.sfUpdFldSetStr === undefined || objQxUserIdentityEN.sfUpdFldSetStr === null || objQxUserIdentityEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserIdentityEN.identityId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserIdentityEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param objQxUserIdentityEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserIdentity_UpdateWithConditionAsync(objQxUserIdentityEN: clsQxUserIdentityEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUserIdentityEN.sfUpdFldSetStr === undefined || objQxUserIdentityEN.sfUpdFldSetStr === null || objQxUserIdentityEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserIdentityEN.identityId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);
objQxUserIdentityEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserIdentityEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param objstrIdentityIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxUserIdentity_IsExistRecordCache(objQxUserIdentityCond: clsQxUserIdentityEN) {
const strThisFuncName = "IsExistRecordCache";
const arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstCache();
if (arrQxUserIdentityObjLstCache == null) return false;
let arrQxUserIdentitySel = arrQxUserIdentityObjLstCache;
if (objQxUserIdentityCond.sfFldComparisonOp == null || objQxUserIdentityCond.sfFldComparisonOp == "") return arrQxUserIdentitySel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxUserIdentityCond.sfFldComparisonOp);
//console.log("clsQxUserIdentityWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxUserIdentityCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxUserIdentityCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxUserIdentitySel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxUserIdentityCond), qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param strIdentityId:所给的关键字
 * @returns 对象
*/
export  async function QxUserIdentity_IsExistCache(strIdentityId:string) {
const strThisFuncName = "IsExistCache";
const arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstCache();
if (arrQxUserIdentityObjLstCache == null) return false;
try
{
const arrQxUserIdentitySel = arrQxUserIdentityObjLstCache.filter(x => x.identityId == strIdentityId);
if (arrQxUserIdentitySel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdentityId, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdentityId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxUserIdentity_IsExistAsync(strIdentityId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdentityId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
 * @param objQxUserIdentityCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxUserIdentity_GetRecCountByCondCache(objQxUserIdentityCond: clsQxUserIdentityEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxUserIdentityObjLstCache = await QxUserIdentity_GetObjLstCache();
if (arrQxUserIdentityObjLstCache == null) return 0;
let arrQxUserIdentitySel = arrQxUserIdentityObjLstCache;
if (objQxUserIdentityCond.sfFldComparisonOp == null || objQxUserIdentityCond.sfFldComparisonOp == "") return arrQxUserIdentitySel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQxUserIdentityCond.sfFldComparisonOp);
//console.log("clsQxUserIdentityWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQxUserIdentityCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxUserIdentityCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUserIdentitySel = arrQxUserIdentitySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxUserIdentitySel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxUserIdentityCond), qxUserIdentity_ConstructorName, strThisFuncName);
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
export  async function QxUserIdentity_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(qxUserIdentity_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserIdentity_ConstructorName, strThisFuncName);
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
export  function QxUserIdentity_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUserIdentity_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxUserIdentityEN._CurrTabName;
switch (clsQxUserIdentityEN.CacheModeId)
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
export  function QxUserIdentity_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxUserIdentityEN._CurrTabName;
switch (clsQxUserIdentityEN.CacheModeId)
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
export  async function QxUserIdentity_BindDdl_IdentityIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdentityIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdentityIdInDivCache");
const arrObjLstSel = await QxUserIdentity_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxUserIdentityEN.con_IdentityId, clsQxUserIdentityEN.con_IdentityDesc, "用户权限身份");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserIdentity_CheckPropertyNew(pobjQxUserIdentityEN: clsQxUserIdentityEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityDesc) === true )
{
 throw new Error("(errid:Watl000411)字段[身份描述]不能为空(In 用户权限身份)!(clsQxUserIdentityBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityId) == false && GetStrLen(pobjQxUserIdentityEN.identityId) > 2)
{
 throw new Error("(errid:Watl000413)字段[身份Id(identityId)]的长度不能超过2(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.identityId)(clsQxUserIdentityBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityDesc) == false && GetStrLen(pobjQxUserIdentityEN.identityDesc) > 20)
{
 throw new Error("(errid:Watl000413)字段[身份描述(identityDesc)]的长度不能超过20(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.identityDesc)(clsQxUserIdentityBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityEnName) == false && GetStrLen(pobjQxUserIdentityEN.identityEnName) > 50)
{
 throw new Error("(errid:Watl000413)字段[身份英文名(identityEnName)]的长度不能超过50(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.identityEnName)(clsQxUserIdentityBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.userType) == false && GetStrLen(pobjQxUserIdentityEN.userType) > 50)
{
 throw new Error("(errid:Watl000413)字段[用户类型(userType)]的长度不能超过50(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.userType)(clsQxUserIdentityBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.memo) == false && GetStrLen(pobjQxUserIdentityEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.memo)(clsQxUserIdentityBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityId) == false && undefined !== pobjQxUserIdentityEN.identityId && tzDataType.isString(pobjQxUserIdentityEN.identityId) === false)
{
 throw new Error("(errid:Watl000414)字段[身份Id(identityId)]的值:[$(pobjQxUserIdentityEN.identityId)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityDesc) == false && undefined !== pobjQxUserIdentityEN.identityDesc && tzDataType.isString(pobjQxUserIdentityEN.identityDesc) === false)
{
 throw new Error("(errid:Watl000414)字段[身份描述(identityDesc)]的值:[$(pobjQxUserIdentityEN.identityDesc)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityEnName) == false && undefined !== pobjQxUserIdentityEN.identityEnName && tzDataType.isString(pobjQxUserIdentityEN.identityEnName) === false)
{
 throw new Error("(errid:Watl000414)字段[身份英文名(identityEnName)]的值:[$(pobjQxUserIdentityEN.identityEnName)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.userType) == false && undefined !== pobjQxUserIdentityEN.userType && tzDataType.isString(pobjQxUserIdentityEN.userType) === false)
{
 throw new Error("(errid:Watl000414)字段[用户类型(userType)]的值:[$(pobjQxUserIdentityEN.userType)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.memo) == false && undefined !== pobjQxUserIdentityEN.memo && tzDataType.isString(pobjQxUserIdentityEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjQxUserIdentityEN.memo)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserIdentity_CheckProperty4Update(pobjQxUserIdentityEN: clsQxUserIdentityEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityId) == false && GetStrLen(pobjQxUserIdentityEN.identityId) > 2)
{
 throw new Error("(errid:Watl000416)字段[身份Id(identityId)]的长度不能超过2(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.identityId)(clsQxUserIdentityBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityDesc) == false && GetStrLen(pobjQxUserIdentityEN.identityDesc) > 20)
{
 throw new Error("(errid:Watl000416)字段[身份描述(identityDesc)]的长度不能超过20(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.identityDesc)(clsQxUserIdentityBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityEnName) == false && GetStrLen(pobjQxUserIdentityEN.identityEnName) > 50)
{
 throw new Error("(errid:Watl000416)字段[身份英文名(identityEnName)]的长度不能超过50(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.identityEnName)(clsQxUserIdentityBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.userType) == false && GetStrLen(pobjQxUserIdentityEN.userType) > 50)
{
 throw new Error("(errid:Watl000416)字段[用户类型(userType)]的长度不能超过50(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.userType)(clsQxUserIdentityBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.memo) == false && GetStrLen(pobjQxUserIdentityEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户权限身份(QxUserIdentity))!值:$(pobjQxUserIdentityEN.memo)(clsQxUserIdentityBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityId) == false && undefined !== pobjQxUserIdentityEN.identityId && tzDataType.isString(pobjQxUserIdentityEN.identityId) === false)
{
 throw new Error("(errid:Watl000417)字段[身份Id(identityId)]的值:[$(pobjQxUserIdentityEN.identityId)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityDesc) == false && undefined !== pobjQxUserIdentityEN.identityDesc && tzDataType.isString(pobjQxUserIdentityEN.identityDesc) === false)
{
 throw new Error("(errid:Watl000417)字段[身份描述(identityDesc)]的值:[$(pobjQxUserIdentityEN.identityDesc)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityEnName) == false && undefined !== pobjQxUserIdentityEN.identityEnName && tzDataType.isString(pobjQxUserIdentityEN.identityEnName) === false)
{
 throw new Error("(errid:Watl000417)字段[身份英文名(identityEnName)]的值:[$(pobjQxUserIdentityEN.identityEnName)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.userType) == false && undefined !== pobjQxUserIdentityEN.userType && tzDataType.isString(pobjQxUserIdentityEN.userType) === false)
{
 throw new Error("(errid:Watl000417)字段[用户类型(userType)]的值:[$(pobjQxUserIdentityEN.userType)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxUserIdentityEN.memo) == false && undefined !== pobjQxUserIdentityEN.memo && tzDataType.isString(pobjQxUserIdentityEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjQxUserIdentityEN.memo)], 非法,应该为字符型(In 用户权限身份(QxUserIdentity))!(clsQxUserIdentityBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxUserIdentityEN.identityId) === true 
 || pobjQxUserIdentityEN.identityId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000064)字段[身份Id]不能为空(In 用户权限身份)!(clsQxUserIdentityBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserIdentity_GetJSONStrByObj (pobjQxUserIdentityEN: clsQxUserIdentityEN): string
{
pobjQxUserIdentityEN.sfUpdFldSetStr = pobjQxUserIdentityEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUserIdentityEN);
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
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxUserIdentity_GetObjLstByJSONStr (strJSON: string): Array<clsQxUserIdentityEN>
{
let arrQxUserIdentityObjLst = new Array<clsQxUserIdentityEN>();
if (strJSON === "")
{
return arrQxUserIdentityObjLst;
}
try
{
arrQxUserIdentityObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUserIdentityObjLst;
}
return arrQxUserIdentityObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUserIdentityObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUserIdentity_GetObjLstByJSONObjLst (arrQxUserIdentityObjLstS: Array<clsQxUserIdentityEN>): Array<clsQxUserIdentityEN>
{
const arrQxUserIdentityObjLst = new Array<clsQxUserIdentityEN>();
for (const objInFor of arrQxUserIdentityObjLstS) {
const obj1 = QxUserIdentity_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUserIdentityObjLst.push(obj1);
}
return arrQxUserIdentityObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserIdentity_GetObjByJSONStr (strJSON: string): clsQxUserIdentityEN
{
let pobjQxUserIdentityEN = new clsQxUserIdentityEN();
if (strJSON === "")
{
return pobjQxUserIdentityEN;
}
try
{
pobjQxUserIdentityEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUserIdentityEN;
}
return pobjQxUserIdentityEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUserIdentity_GetCombineCondition(objQxUserIdentityCond: clsQxUserIdentityEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUserIdentityCond.dicFldComparisonOp, clsQxUserIdentityEN.con_IdentityId) == true)
{
const strComparisonOpIdentityId:string = objQxUserIdentityCond.dicFldComparisonOp[clsQxUserIdentityEN.con_IdentityId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserIdentityEN.con_IdentityId, objQxUserIdentityCond.identityId, strComparisonOpIdentityId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserIdentityCond.dicFldComparisonOp, clsQxUserIdentityEN.con_IdentityDesc) == true)
{
const strComparisonOpIdentityDesc:string = objQxUserIdentityCond.dicFldComparisonOp[clsQxUserIdentityEN.con_IdentityDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserIdentityEN.con_IdentityDesc, objQxUserIdentityCond.identityDesc, strComparisonOpIdentityDesc);
}
if (Object.prototype.hasOwnProperty.call(objQxUserIdentityCond.dicFldComparisonOp, clsQxUserIdentityEN.con_IdentityEnName) == true)
{
const strComparisonOpIdentityEnName:string = objQxUserIdentityCond.dicFldComparisonOp[clsQxUserIdentityEN.con_IdentityEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserIdentityEN.con_IdentityEnName, objQxUserIdentityCond.identityEnName, strComparisonOpIdentityEnName);
}
if (Object.prototype.hasOwnProperty.call(objQxUserIdentityCond.dicFldComparisonOp, clsQxUserIdentityEN.con_UserType) == true)
{
const strComparisonOpUserType:string = objQxUserIdentityCond.dicFldComparisonOp[clsQxUserIdentityEN.con_UserType];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserIdentityEN.con_UserType, objQxUserIdentityCond.userType, strComparisonOpUserType);
}
if (Object.prototype.hasOwnProperty.call(objQxUserIdentityCond.dicFldComparisonOp, clsQxUserIdentityEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUserIdentityCond.dicFldComparisonOp[clsQxUserIdentityEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserIdentityEN.con_Memo, objQxUserIdentityCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objQxUserIdentityENS:源对象
 * @param objQxUserIdentityENT:目标对象
*/
export  function QxUserIdentity_CopyObjTo(objQxUserIdentityENS: clsQxUserIdentityEN , objQxUserIdentityENT: clsQxUserIdentityEN ): void 
{
objQxUserIdentityENT.identityId = objQxUserIdentityENS.identityId; //身份Id
objQxUserIdentityENT.identityDesc = objQxUserIdentityENS.identityDesc; //身份描述
objQxUserIdentityENT.identityEnName = objQxUserIdentityENS.identityEnName; //身份英文名
objQxUserIdentityENT.userType = objQxUserIdentityENS.userType; //用户类型
objQxUserIdentityENT.memo = objQxUserIdentityENS.memo; //备注
objQxUserIdentityENT.sfUpdFldSetStr = objQxUserIdentityENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUserIdentityENS:源对象
 * @param objQxUserIdentityENT:目标对象
*/
export  function QxUserIdentity_GetObjFromJsonObj(objQxUserIdentityENS: clsQxUserIdentityEN): clsQxUserIdentityEN 
{
 const objQxUserIdentityENT: clsQxUserIdentityEN = new clsQxUserIdentityEN();
ObjectAssign(objQxUserIdentityENT, objQxUserIdentityENS);
 return objQxUserIdentityENT;
}