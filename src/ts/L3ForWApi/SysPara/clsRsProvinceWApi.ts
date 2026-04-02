
 /**
 * 类名:clsRsProvinceWApi
 * 表名:RsProvince(01120107)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:24
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
 * 省份(RsProvince)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsRsProvinceEN } from "@/ts/L0Entity/SysPara/clsRsProvinceEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const rsProvince_Controller = "RsProvinceApi";
 export const rsProvince_ConstructorName = "rsProvince";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdProvince:关键字
 * @returns 对象
 **/
export  async function RsProvince_GetObjByIdProvinceAsync(strIdProvince: string): Promise<clsRsProvinceEN|null>  
{
const strThisFuncName = "GetObjByIdProvinceAsync";

if (IsNullOrEmpty(strIdProvince) == true)
{
  const strMsg = Format("参数:[strIdProvince]不能为空!(In clsRsProvinceWApi.GetObjByIdProvinceAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdProvince.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdProvince]的长度:[{0}]不正确!(clsRsProvinceWApi.GetObjByIdProvinceAsync)", strIdProvince.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdProvince";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdProvince,
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
const objRsProvince = RsProvince_GetObjFromJsonObj(returnObj);
return objRsProvince;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdProvinceCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByIdProvincelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByIdProvinceCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function RsProvince_SortFunDefa(a:clsRsProvinceEN , b:clsRsProvinceEN): number 
{
return a.idProvince.localeCompare(b.idProvince);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function RsProvince_SortFunDefa2Fld(a:clsRsProvinceEN , b:clsRsProvinceEN): number 
{
if (a.provinceID == b.provinceID) return a.provinceName.localeCompare(b.provinceName);
else return a.provinceID.localeCompare(b.provinceID);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function RsProvince_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRsProvinceEN.con_IdProvince:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
return a.idProvince.localeCompare(b.idProvince);
}
case clsRsProvinceEN.con_ProvinceID:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
return a.provinceID.localeCompare(b.provinceID);
}
case clsRsProvinceEN.con_ProvinceName:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
return a.provinceName.localeCompare(b.provinceName);
}
case clsRsProvinceEN.con_ProvinceRecuitID:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
if (a.provinceRecuitID == null) return -1;
if (b.provinceRecuitID == null) return 1;
return a.provinceRecuitID.localeCompare(b.provinceRecuitID);
}
case clsRsProvinceEN.con_ModifyDate:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsRsProvinceEN.con_ModifyUserId:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsProvince]中不存在!(in ${ rsProvince_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRsProvinceEN.con_IdProvince:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
return b.idProvince.localeCompare(a.idProvince);
}
case clsRsProvinceEN.con_ProvinceID:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
return b.provinceID.localeCompare(a.provinceID);
}
case clsRsProvinceEN.con_ProvinceName:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
return b.provinceName.localeCompare(a.provinceName);
}
case clsRsProvinceEN.con_ProvinceRecuitID:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
if (b.provinceRecuitID == null) return -1;
if (a.provinceRecuitID == null) return 1;
return b.provinceRecuitID.localeCompare(a.provinceRecuitID);
}
case clsRsProvinceEN.con_ModifyDate:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsRsProvinceEN.con_ModifyUserId:
return (a: clsRsProvinceEN, b: clsRsProvinceEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsProvince]中不存在!(in ${ rsProvince_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function RsProvince_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRsProvinceEN.con_IdProvince:
return (obj: clsRsProvinceEN) => {
return obj.idProvince === value;
}
case clsRsProvinceEN.con_ProvinceID:
return (obj: clsRsProvinceEN) => {
return obj.provinceID === value;
}
case clsRsProvinceEN.con_ProvinceName:
return (obj: clsRsProvinceEN) => {
return obj.provinceName === value;
}
case clsRsProvinceEN.con_ProvinceRecuitID:
return (obj: clsRsProvinceEN) => {
return obj.provinceRecuitID === value;
}
case clsRsProvinceEN.con_ModifyDate:
return (obj: clsRsProvinceEN) => {
return obj.modifyDate === value;
}
case clsRsProvinceEN.con_ModifyUserId:
return (obj: clsRsProvinceEN) => {
return obj.modifyUserId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsProvince]中不存在!(in ${ rsProvince_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[RsProvince__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsProvince_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
export  async function RsProvince_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
export  async function RsProvince_GetFirstObjAsync(strWhereCond: string): Promise<clsRsProvinceEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const objRsProvince = RsProvince_GetObjFromJsonObj(returnObj);
return objRsProvince;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function RsProvince_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRsProvinceEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProvince_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProvince_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdProvince:关键字列表
 * @returns 对象列表
 **/
export  async function RsProvince_GetObjLstByIdProvinceLstAsync(arrIdProvince: Array<string>): Promise<Array<clsRsProvinceEN>>  
{
const strThisFuncName = "GetObjLstByIdProvinceLstAsync";
const strAction = "GetObjLstByIdProvinceLst";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdProvince, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProvince_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProvince_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdProvinceLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function RsProvince_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRsProvinceEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProvince_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProvince_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
export  async function RsProvince_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRsProvinceEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProvince_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProvince_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function RsProvince_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRsProvinceEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRsProvinceEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsProvince_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsProvince_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
 * @param strIdProvince:关键字
 * @returns 获取删除的结果
 **/
export  async function RsProvince_DelRecordAsync(strIdProvince: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(rsProvince_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdProvince);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
 * @param arrIdProvince:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function RsProvince_DelRsProvincesAsync(arrIdProvince: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRsProvincesAsync";
const strAction = "DelRsProvinces";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdProvince, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
export  async function RsProvince_DelRsProvincesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRsProvincesByCondAsync";
const strAction = "DelRsProvincesByCond";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
 * @param objRsProvinceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsProvince_AddNewRecordAsync(objRsProvinceEN: clsRsProvinceEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRsProvinceEN.idProvince === null || objRsProvinceEN.idProvince === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRsProvinceEN);
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProvinceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
 * @param objRsProvinceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsProvince_AddNewRecordWithMaxIdAsync(objRsProvinceEN: clsRsProvinceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProvinceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
 * @param objRsProvinceEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RsProvince_AddNewRecordWithReturnKeyAsync(objRsProvinceEN: clsRsProvinceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProvinceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
 * @param objRsProvinceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RsProvince_UpdateRecordAsync(objRsProvinceEN: clsRsProvinceEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRsProvinceEN.sfUpdFldSetStr === undefined || objRsProvinceEN.sfUpdFldSetStr === null || objRsProvinceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsProvinceEN.idProvince);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProvinceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
 * @param objRsProvinceEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsProvince_UpdateWithConditionAsync(objRsProvinceEN: clsRsProvinceEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRsProvinceEN.sfUpdFldSetStr === undefined || objRsProvinceEN.sfUpdFldSetStr === null || objRsProvinceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsProvinceEN.idProvince);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);
objRsProvinceEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsProvinceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function RsProvince_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdProvince:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RsProvince_IsExistAsync(strIdProvince: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdProvince
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
export  async function RsProvince_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function RsProvince_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(rsProvince_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsProvince_ConstructorName, strThisFuncName);
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
export  function RsProvince_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function RsProvince_(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const strCondition = `1=1`;
const arrObjLstSel = await RsProvince_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsRsProvinceEN.con_IdProvince, clsRsProvinceEN.con_ProvinceName, "省份");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsProvince_CheckPropertyNew(pobjRsProvinceEN: clsRsProvinceEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRsProvinceEN.provinceID) === true )
{
 throw new Error("(errid:Watl000411)字段[ProvinceID]不能为空(In 省份)!(clsRsProvinceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceName) === true )
{
 throw new Error("(errid:Watl000411)字段[ProvinceName]不能为空(In 省份)!(clsRsProvinceBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsProvinceEN.idProvince) == false && GetStrLen(pobjRsProvinceEN.idProvince) > 4)
{
 throw new Error("(errid:Watl000413)字段[省份流水号(idProvince)]的长度不能超过4(In 省份(RsProvince))!值:$(pobjRsProvinceEN.idProvince)(clsRsProvinceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceID) == false && GetStrLen(pobjRsProvinceEN.provinceID) > 6)
{
 throw new Error("(errid:Watl000413)字段[ProvinceID(provinceID)]的长度不能超过6(In 省份(RsProvince))!值:$(pobjRsProvinceEN.provinceID)(clsRsProvinceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceName) == false && GetStrLen(pobjRsProvinceEN.provinceName) > 30)
{
 throw new Error("(errid:Watl000413)字段[ProvinceName(provinceName)]的长度不能超过30(In 省份(RsProvince))!值:$(pobjRsProvinceEN.provinceName)(clsRsProvinceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceRecuitID) == false && GetStrLen(pobjRsProvinceEN.provinceRecuitID) > 4)
{
 throw new Error("(errid:Watl000413)字段[ProvinceRecuitID(provinceRecuitID)]的长度不能超过4(In 省份(RsProvince))!值:$(pobjRsProvinceEN.provinceRecuitID)(clsRsProvinceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.modifyDate) == false && GetStrLen(pobjRsProvinceEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 省份(RsProvince))!值:$(pobjRsProvinceEN.modifyDate)(clsRsProvinceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.modifyUserId) == false && GetStrLen(pobjRsProvinceEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 省份(RsProvince))!值:$(pobjRsProvinceEN.modifyUserId)(clsRsProvinceBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsProvinceEN.idProvince) == false && undefined !== pobjRsProvinceEN.idProvince && tzDataType.isString(pobjRsProvinceEN.idProvince) === false)
{
 throw new Error("(errid:Watl000414)字段[省份流水号(idProvince)]的值:[$(pobjRsProvinceEN.idProvince)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceID) == false && undefined !== pobjRsProvinceEN.provinceID && tzDataType.isString(pobjRsProvinceEN.provinceID) === false)
{
 throw new Error("(errid:Watl000414)字段[ProvinceID(provinceID)]的值:[$(pobjRsProvinceEN.provinceID)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceName) == false && undefined !== pobjRsProvinceEN.provinceName && tzDataType.isString(pobjRsProvinceEN.provinceName) === false)
{
 throw new Error("(errid:Watl000414)字段[ProvinceName(provinceName)]的值:[$(pobjRsProvinceEN.provinceName)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceRecuitID) == false && undefined !== pobjRsProvinceEN.provinceRecuitID && tzDataType.isString(pobjRsProvinceEN.provinceRecuitID) === false)
{
 throw new Error("(errid:Watl000414)字段[ProvinceRecuitID(provinceRecuitID)]的值:[$(pobjRsProvinceEN.provinceRecuitID)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.modifyDate) == false && undefined !== pobjRsProvinceEN.modifyDate && tzDataType.isString(pobjRsProvinceEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjRsProvinceEN.modifyDate)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.modifyUserId) == false && undefined !== pobjRsProvinceEN.modifyUserId && tzDataType.isString(pobjRsProvinceEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjRsProvinceEN.modifyUserId)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsProvince_CheckProperty4Update(pobjRsProvinceEN: clsRsProvinceEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsProvinceEN.idProvince) == false && GetStrLen(pobjRsProvinceEN.idProvince) > 4)
{
 throw new Error("(errid:Watl000416)字段[省份流水号(idProvince)]的长度不能超过4(In 省份(RsProvince))!值:$(pobjRsProvinceEN.idProvince)(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceID) == false && GetStrLen(pobjRsProvinceEN.provinceID) > 6)
{
 throw new Error("(errid:Watl000416)字段[ProvinceID(provinceID)]的长度不能超过6(In 省份(RsProvince))!值:$(pobjRsProvinceEN.provinceID)(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceName) == false && GetStrLen(pobjRsProvinceEN.provinceName) > 30)
{
 throw new Error("(errid:Watl000416)字段[ProvinceName(provinceName)]的长度不能超过30(In 省份(RsProvince))!值:$(pobjRsProvinceEN.provinceName)(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceRecuitID) == false && GetStrLen(pobjRsProvinceEN.provinceRecuitID) > 4)
{
 throw new Error("(errid:Watl000416)字段[ProvinceRecuitID(provinceRecuitID)]的长度不能超过4(In 省份(RsProvince))!值:$(pobjRsProvinceEN.provinceRecuitID)(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.modifyDate) == false && GetStrLen(pobjRsProvinceEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 省份(RsProvince))!值:$(pobjRsProvinceEN.modifyDate)(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.modifyUserId) == false && GetStrLen(pobjRsProvinceEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 省份(RsProvince))!值:$(pobjRsProvinceEN.modifyUserId)(clsRsProvinceBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsProvinceEN.idProvince) == false && undefined !== pobjRsProvinceEN.idProvince && tzDataType.isString(pobjRsProvinceEN.idProvince) === false)
{
 throw new Error("(errid:Watl000417)字段[省份流水号(idProvince)]的值:[$(pobjRsProvinceEN.idProvince)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceID) == false && undefined !== pobjRsProvinceEN.provinceID && tzDataType.isString(pobjRsProvinceEN.provinceID) === false)
{
 throw new Error("(errid:Watl000417)字段[ProvinceID(provinceID)]的值:[$(pobjRsProvinceEN.provinceID)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceName) == false && undefined !== pobjRsProvinceEN.provinceName && tzDataType.isString(pobjRsProvinceEN.provinceName) === false)
{
 throw new Error("(errid:Watl000417)字段[ProvinceName(provinceName)]的值:[$(pobjRsProvinceEN.provinceName)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.provinceRecuitID) == false && undefined !== pobjRsProvinceEN.provinceRecuitID && tzDataType.isString(pobjRsProvinceEN.provinceRecuitID) === false)
{
 throw new Error("(errid:Watl000417)字段[ProvinceRecuitID(provinceRecuitID)]的值:[$(pobjRsProvinceEN.provinceRecuitID)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.modifyDate) == false && undefined !== pobjRsProvinceEN.modifyDate && tzDataType.isString(pobjRsProvinceEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjRsProvinceEN.modifyDate)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsProvinceEN.modifyUserId) == false && undefined !== pobjRsProvinceEN.modifyUserId && tzDataType.isString(pobjRsProvinceEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjRsProvinceEN.modifyUserId)], 非法,应该为字符型(In 省份(RsProvince))!(clsRsProvinceBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRsProvinceEN.idProvince) === true )
{
 throw new Error("(errid:Watl000064)字段[省份流水号]不能为空(In 省份)!(clsRsProvinceBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RsProvince_GetJSONStrByObj (pobjRsProvinceEN: clsRsProvinceEN): string
{
pobjRsProvinceEN.sfUpdFldSetStr = pobjRsProvinceEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRsProvinceEN);
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
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function RsProvince_GetObjLstByJSONStr (strJSON: string): Array<clsRsProvinceEN>
{
let arrRsProvinceObjLst = new Array<clsRsProvinceEN>();
if (strJSON === "")
{
return arrRsProvinceObjLst;
}
try
{
arrRsProvinceObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRsProvinceObjLst;
}
return arrRsProvinceObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRsProvinceObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RsProvince_GetObjLstByJSONObjLst (arrRsProvinceObjLstS: Array<clsRsProvinceEN>): Array<clsRsProvinceEN>
{
const arrRsProvinceObjLst = new Array<clsRsProvinceEN>();
for (const objInFor of arrRsProvinceObjLstS) {
const obj1 = RsProvince_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRsProvinceObjLst.push(obj1);
}
return arrRsProvinceObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RsProvince_GetObjByJSONStr (strJSON: string): clsRsProvinceEN
{
let pobjRsProvinceEN = new clsRsProvinceEN();
if (strJSON === "")
{
return pobjRsProvinceEN;
}
try
{
pobjRsProvinceEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRsProvinceEN;
}
return pobjRsProvinceEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RsProvince_GetCombineCondition(objRsProvinceCond: clsRsProvinceEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRsProvinceCond.dicFldComparisonOp, clsRsProvinceEN.con_IdProvince) == true)
{
const strComparisonOpIdProvince:string = objRsProvinceCond.dicFldComparisonOp[clsRsProvinceEN.con_IdProvince];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProvinceEN.con_IdProvince, objRsProvinceCond.idProvince, strComparisonOpIdProvince);
}
if (Object.prototype.hasOwnProperty.call(objRsProvinceCond.dicFldComparisonOp, clsRsProvinceEN.con_ProvinceID) == true)
{
const strComparisonOpProvinceID:string = objRsProvinceCond.dicFldComparisonOp[clsRsProvinceEN.con_ProvinceID];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProvinceEN.con_ProvinceID, objRsProvinceCond.provinceID, strComparisonOpProvinceID);
}
if (Object.prototype.hasOwnProperty.call(objRsProvinceCond.dicFldComparisonOp, clsRsProvinceEN.con_ProvinceName) == true)
{
const strComparisonOpProvinceName:string = objRsProvinceCond.dicFldComparisonOp[clsRsProvinceEN.con_ProvinceName];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProvinceEN.con_ProvinceName, objRsProvinceCond.provinceName, strComparisonOpProvinceName);
}
if (Object.prototype.hasOwnProperty.call(objRsProvinceCond.dicFldComparisonOp, clsRsProvinceEN.con_ProvinceRecuitID) == true)
{
const strComparisonOpProvinceRecuitID:string = objRsProvinceCond.dicFldComparisonOp[clsRsProvinceEN.con_ProvinceRecuitID];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProvinceEN.con_ProvinceRecuitID, objRsProvinceCond.provinceRecuitID, strComparisonOpProvinceRecuitID);
}
if (Object.prototype.hasOwnProperty.call(objRsProvinceCond.dicFldComparisonOp, clsRsProvinceEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objRsProvinceCond.dicFldComparisonOp[clsRsProvinceEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProvinceEN.con_ModifyDate, objRsProvinceCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objRsProvinceCond.dicFldComparisonOp, clsRsProvinceEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objRsProvinceCond.dicFldComparisonOp[clsRsProvinceEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsProvinceEN.con_ModifyUserId, objRsProvinceCond.modifyUserId, strComparisonOpModifyUserId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRsProvinceENS:源对象
 * @param objRsProvinceENT:目标对象
*/
export  function RsProvince_CopyObjTo(objRsProvinceENS: clsRsProvinceEN , objRsProvinceENT: clsRsProvinceEN ): void 
{
objRsProvinceENT.idProvince = objRsProvinceENS.idProvince; //省份流水号
objRsProvinceENT.provinceID = objRsProvinceENS.provinceID; //ProvinceID
objRsProvinceENT.provinceName = objRsProvinceENS.provinceName; //ProvinceName
objRsProvinceENT.provinceRecuitID = objRsProvinceENS.provinceRecuitID; //ProvinceRecuitID
objRsProvinceENT.modifyDate = objRsProvinceENS.modifyDate; //修改日期
objRsProvinceENT.modifyUserId = objRsProvinceENS.modifyUserId; //修改人
objRsProvinceENT.sfUpdFldSetStr = objRsProvinceENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRsProvinceENS:源对象
 * @param objRsProvinceENT:目标对象
*/
export  function RsProvince_GetObjFromJsonObj(objRsProvinceENS: clsRsProvinceEN): clsRsProvinceEN 
{
 const objRsProvinceENT: clsRsProvinceEN = new clsRsProvinceEN();
ObjectAssign(objRsProvinceENT, objRsProvinceENS);
 return objRsProvinceENT;
}