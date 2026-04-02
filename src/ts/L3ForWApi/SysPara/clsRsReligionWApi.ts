
 /**
 * 类名:clsRsReligionWApi
 * 表名:RsReligion(01120108)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:25
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
 * 宗教(RsReligion)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsRsReligionEN } from "@/ts/L0Entity/SysPara/clsRsReligionEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const rsReligion_Controller = "RsReligionApi";
 export const rsReligion_ConstructorName = "rsReligion";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdReligion:关键字
 * @returns 对象
 **/
export  async function RsReligion_GetObjByIdReligionAsync(strIdReligion: string): Promise<clsRsReligionEN|null>  
{
const strThisFuncName = "GetObjByIdReligionAsync";

if (IsNullOrEmpty(strIdReligion) == true)
{
  const strMsg = Format("参数:[strIdReligion]不能为空!(In clsRsReligionWApi.GetObjByIdReligionAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdReligion.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdReligion]的长度:[{0}]不正确!(clsRsReligionWApi.GetObjByIdReligionAsync)", strIdReligion.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdReligion";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdReligion,
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
const objRsReligion = RsReligion_GetObjFromJsonObj(returnObj);
return objRsReligion;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdReligionCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByIdReligionlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByIdReligionCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function RsReligion_SortFunDefa(a:clsRsReligionEN , b:clsRsReligionEN): number 
{
return a.idReligion.localeCompare(b.idReligion);
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
export  function RsReligion_SortFunDefa2Fld(a:clsRsReligionEN , b:clsRsReligionEN): number 
{
if (a.modifyUserId == b.modifyUserId) return a.modifyDate.localeCompare(b.modifyDate);
else return a.modifyUserId.localeCompare(b.modifyUserId);
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
export  function RsReligion_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRsReligionEN.con_ModifyUserId:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsRsReligionEN.con_ModifyDate:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsRsReligionEN.con_IdReligion:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
return a.idReligion.localeCompare(b.idReligion);
}
case clsRsReligionEN.con_ReligionName:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
return a.religionName.localeCompare(b.religionName);
}
case clsRsReligionEN.con_ReligionID:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
return a.religionID.localeCompare(b.religionID);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsReligion]中不存在!(in ${ rsReligion_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRsReligionEN.con_ModifyUserId:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsRsReligionEN.con_ModifyDate:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsRsReligionEN.con_IdReligion:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
return b.idReligion.localeCompare(a.idReligion);
}
case clsRsReligionEN.con_ReligionName:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
return b.religionName.localeCompare(a.religionName);
}
case clsRsReligionEN.con_ReligionID:
return (a: clsRsReligionEN, b: clsRsReligionEN) => {
return b.religionID.localeCompare(a.religionID);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsReligion]中不存在!(in ${ rsReligion_ConstructorName}.${ strThisFuncName})`;
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
export  async function RsReligion_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRsReligionEN.con_ModifyUserId:
return (obj: clsRsReligionEN) => {
return obj.modifyUserId === value;
}
case clsRsReligionEN.con_ModifyDate:
return (obj: clsRsReligionEN) => {
return obj.modifyDate === value;
}
case clsRsReligionEN.con_IdReligion:
return (obj: clsRsReligionEN) => {
return obj.idReligion === value;
}
case clsRsReligionEN.con_ReligionName:
return (obj: clsRsReligionEN) => {
return obj.religionName === value;
}
case clsRsReligionEN.con_ReligionID:
return (obj: clsRsReligionEN) => {
return obj.religionID === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsReligion]中不存在!(in ${ rsReligion_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[RsReligion__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsReligion_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  async function RsReligion_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  async function RsReligion_GetFirstObjAsync(strWhereCond: string): Promise<clsRsReligionEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const objRsReligion = RsReligion_GetObjFromJsonObj(returnObj);
return objRsReligion;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  async function RsReligion_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRsReligionEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsReligion_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsReligion_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
 * @param arrIdReligion:关键字列表
 * @returns 对象列表
 **/
export  async function RsReligion_GetObjLstByIdReligionLstAsync(arrIdReligion: Array<string>): Promise<Array<clsRsReligionEN>>  
{
const strThisFuncName = "GetObjLstByIdReligionLstAsync";
const strAction = "GetObjLstByIdReligionLst";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdReligion, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsReligion_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsReligion_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdReligionLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function RsReligion_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRsReligionEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsReligion_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsReligion_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  async function RsReligion_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRsReligionEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsReligion_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsReligion_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  async function RsReligion_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRsReligionEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRsReligionEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsReligion_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsReligion_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
 * @param strIdReligion:关键字
 * @returns 获取删除的结果
 **/
export  async function RsReligion_DelRecordAsync(strIdReligion: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(rsReligion_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdReligion);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
 * @param arrIdReligion:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function RsReligion_DelRsReligionsAsync(arrIdReligion: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRsReligionsAsync";
const strAction = "DelRsReligions";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdReligion, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  async function RsReligion_DelRsReligionsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRsReligionsByCondAsync";
const strAction = "DelRsReligionsByCond";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
 * @param objRsReligionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsReligion_AddNewRecordAsync(objRsReligionEN: clsRsReligionEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRsReligionEN.idReligion === null || objRsReligionEN.idReligion === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRsReligionEN);
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsReligionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
 * @param objRsReligionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsReligion_AddNewRecordWithMaxIdAsync(objRsReligionEN: clsRsReligionEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsReligionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
 * @param objRsReligionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RsReligion_AddNewRecordWithReturnKeyAsync(objRsReligionEN: clsRsReligionEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsReligionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
 * @param objRsReligionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RsReligion_UpdateRecordAsync(objRsReligionEN: clsRsReligionEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRsReligionEN.sfUpdFldSetStr === undefined || objRsReligionEN.sfUpdFldSetStr === null || objRsReligionEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsReligionEN.idReligion);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsReligionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
 * @param objRsReligionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsReligion_UpdateWithConditionAsync(objRsReligionEN: clsRsReligionEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRsReligionEN.sfUpdFldSetStr === undefined || objRsReligionEN.sfUpdFldSetStr === null || objRsReligionEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsReligionEN.idReligion);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);
objRsReligionEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsReligionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  async function RsReligion_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
 * @param strIdReligion:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RsReligion_IsExistAsync(strIdReligion: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdReligion
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  async function RsReligion_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  async function RsReligion_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(rsReligion_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsReligion_ConstructorName, strThisFuncName);
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
export  function RsReligion_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsReligion_CheckPropertyNew(pobjRsReligionEN: clsRsReligionEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRsReligionEN.religionName) === true )
{
 throw new Error("(errid:Watl000411)字段[ReligionName]不能为空(In 宗教)!(clsRsReligionBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsReligionEN.religionID) === true )
{
 throw new Error("(errid:Watl000411)字段[ReligionID]不能为空(In 宗教)!(clsRsReligionBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsReligionEN.modifyUserId) == false && GetStrLen(pobjRsReligionEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 宗教(RsReligion))!值:$(pobjRsReligionEN.modifyUserId)(clsRsReligionBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsReligionEN.modifyDate) == false && GetStrLen(pobjRsReligionEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 宗教(RsReligion))!值:$(pobjRsReligionEN.modifyDate)(clsRsReligionBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsReligionEN.idReligion) == false && GetStrLen(pobjRsReligionEN.idReligion) > 4)
{
 throw new Error("(errid:Watl000413)字段[id_Religion(idReligion)]的长度不能超过4(In 宗教(RsReligion))!值:$(pobjRsReligionEN.idReligion)(clsRsReligionBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsReligionEN.religionName) == false && GetStrLen(pobjRsReligionEN.religionName) > 30)
{
 throw new Error("(errid:Watl000413)字段[ReligionName(religionName)]的长度不能超过30(In 宗教(RsReligion))!值:$(pobjRsReligionEN.religionName)(clsRsReligionBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsReligionEN.religionID) == false && GetStrLen(pobjRsReligionEN.religionID) > 4)
{
 throw new Error("(errid:Watl000413)字段[ReligionID(religionID)]的长度不能超过4(In 宗教(RsReligion))!值:$(pobjRsReligionEN.religionID)(clsRsReligionBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsReligionEN.modifyUserId) == false && undefined !== pobjRsReligionEN.modifyUserId && tzDataType.isString(pobjRsReligionEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjRsReligionEN.modifyUserId)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsReligionEN.modifyDate) == false && undefined !== pobjRsReligionEN.modifyDate && tzDataType.isString(pobjRsReligionEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjRsReligionEN.modifyDate)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsReligionEN.idReligion) == false && undefined !== pobjRsReligionEN.idReligion && tzDataType.isString(pobjRsReligionEN.idReligion) === false)
{
 throw new Error("(errid:Watl000414)字段[id_Religion(idReligion)]的值:[$(pobjRsReligionEN.idReligion)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsReligionEN.religionName) == false && undefined !== pobjRsReligionEN.religionName && tzDataType.isString(pobjRsReligionEN.religionName) === false)
{
 throw new Error("(errid:Watl000414)字段[ReligionName(religionName)]的值:[$(pobjRsReligionEN.religionName)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsReligionEN.religionID) == false && undefined !== pobjRsReligionEN.religionID && tzDataType.isString(pobjRsReligionEN.religionID) === false)
{
 throw new Error("(errid:Watl000414)字段[ReligionID(religionID)]的值:[$(pobjRsReligionEN.religionID)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsReligion_CheckProperty4Update(pobjRsReligionEN: clsRsReligionEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsReligionEN.modifyUserId) == false && GetStrLen(pobjRsReligionEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 宗教(RsReligion))!值:$(pobjRsReligionEN.modifyUserId)(clsRsReligionBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsReligionEN.modifyDate) == false && GetStrLen(pobjRsReligionEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 宗教(RsReligion))!值:$(pobjRsReligionEN.modifyDate)(clsRsReligionBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsReligionEN.idReligion) == false && GetStrLen(pobjRsReligionEN.idReligion) > 4)
{
 throw new Error("(errid:Watl000416)字段[id_Religion(idReligion)]的长度不能超过4(In 宗教(RsReligion))!值:$(pobjRsReligionEN.idReligion)(clsRsReligionBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsReligionEN.religionName) == false && GetStrLen(pobjRsReligionEN.religionName) > 30)
{
 throw new Error("(errid:Watl000416)字段[ReligionName(religionName)]的长度不能超过30(In 宗教(RsReligion))!值:$(pobjRsReligionEN.religionName)(clsRsReligionBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsReligionEN.religionID) == false && GetStrLen(pobjRsReligionEN.religionID) > 4)
{
 throw new Error("(errid:Watl000416)字段[ReligionID(religionID)]的长度不能超过4(In 宗教(RsReligion))!值:$(pobjRsReligionEN.religionID)(clsRsReligionBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsReligionEN.modifyUserId) == false && undefined !== pobjRsReligionEN.modifyUserId && tzDataType.isString(pobjRsReligionEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjRsReligionEN.modifyUserId)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsReligionEN.modifyDate) == false && undefined !== pobjRsReligionEN.modifyDate && tzDataType.isString(pobjRsReligionEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjRsReligionEN.modifyDate)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsReligionEN.idReligion) == false && undefined !== pobjRsReligionEN.idReligion && tzDataType.isString(pobjRsReligionEN.idReligion) === false)
{
 throw new Error("(errid:Watl000417)字段[id_Religion(idReligion)]的值:[$(pobjRsReligionEN.idReligion)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsReligionEN.religionName) == false && undefined !== pobjRsReligionEN.religionName && tzDataType.isString(pobjRsReligionEN.religionName) === false)
{
 throw new Error("(errid:Watl000417)字段[ReligionName(religionName)]的值:[$(pobjRsReligionEN.religionName)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsReligionEN.religionID) == false && undefined !== pobjRsReligionEN.religionID && tzDataType.isString(pobjRsReligionEN.religionID) === false)
{
 throw new Error("(errid:Watl000417)字段[ReligionID(religionID)]的值:[$(pobjRsReligionEN.religionID)], 非法,应该为字符型(In 宗教(RsReligion))!(clsRsReligionBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRsReligionEN.idReligion) === true )
{
 throw new Error("(errid:Watl000064)字段[id_Religion]不能为空(In 宗教)!(clsRsReligionBL:CheckProperty4Update)");
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
export  function RsReligion_GetJSONStrByObj (pobjRsReligionEN: clsRsReligionEN): string
{
pobjRsReligionEN.sfUpdFldSetStr = pobjRsReligionEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRsReligionEN);
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
export  function RsReligion_GetObjLstByJSONStr (strJSON: string): Array<clsRsReligionEN>
{
let arrRsReligionObjLst = new Array<clsRsReligionEN>();
if (strJSON === "")
{
return arrRsReligionObjLst;
}
try
{
arrRsReligionObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRsReligionObjLst;
}
return arrRsReligionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRsReligionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RsReligion_GetObjLstByJSONObjLst (arrRsReligionObjLstS: Array<clsRsReligionEN>): Array<clsRsReligionEN>
{
const arrRsReligionObjLst = new Array<clsRsReligionEN>();
for (const objInFor of arrRsReligionObjLstS) {
const obj1 = RsReligion_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRsReligionObjLst.push(obj1);
}
return arrRsReligionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RsReligion_GetObjByJSONStr (strJSON: string): clsRsReligionEN
{
let pobjRsReligionEN = new clsRsReligionEN();
if (strJSON === "")
{
return pobjRsReligionEN;
}
try
{
pobjRsReligionEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRsReligionEN;
}
return pobjRsReligionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RsReligion_GetCombineCondition(objRsReligionCond: clsRsReligionEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRsReligionCond.dicFldComparisonOp, clsRsReligionEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objRsReligionCond.dicFldComparisonOp[clsRsReligionEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsReligionEN.con_ModifyUserId, objRsReligionCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objRsReligionCond.dicFldComparisonOp, clsRsReligionEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objRsReligionCond.dicFldComparisonOp[clsRsReligionEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsReligionEN.con_ModifyDate, objRsReligionCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objRsReligionCond.dicFldComparisonOp, clsRsReligionEN.con_IdReligion) == true)
{
const strComparisonOpIdReligion:string = objRsReligionCond.dicFldComparisonOp[clsRsReligionEN.con_IdReligion];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsReligionEN.con_IdReligion, objRsReligionCond.idReligion, strComparisonOpIdReligion);
}
if (Object.prototype.hasOwnProperty.call(objRsReligionCond.dicFldComparisonOp, clsRsReligionEN.con_ReligionName) == true)
{
const strComparisonOpReligionName:string = objRsReligionCond.dicFldComparisonOp[clsRsReligionEN.con_ReligionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsReligionEN.con_ReligionName, objRsReligionCond.religionName, strComparisonOpReligionName);
}
if (Object.prototype.hasOwnProperty.call(objRsReligionCond.dicFldComparisonOp, clsRsReligionEN.con_ReligionID) == true)
{
const strComparisonOpReligionID:string = objRsReligionCond.dicFldComparisonOp[clsRsReligionEN.con_ReligionID];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsReligionEN.con_ReligionID, objRsReligionCond.religionID, strComparisonOpReligionID);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRsReligionENS:源对象
 * @param objRsReligionENT:目标对象
*/
export  function RsReligion_CopyObjTo(objRsReligionENS: clsRsReligionEN , objRsReligionENT: clsRsReligionEN ): void 
{
objRsReligionENT.modifyUserId = objRsReligionENS.modifyUserId; //修改人
objRsReligionENT.modifyDate = objRsReligionENS.modifyDate; //修改日期
objRsReligionENT.idReligion = objRsReligionENS.idReligion; //id_Religion
objRsReligionENT.religionName = objRsReligionENS.religionName; //ReligionName
objRsReligionENT.religionID = objRsReligionENS.religionID; //ReligionID
objRsReligionENT.sfUpdFldSetStr = objRsReligionENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRsReligionENS:源对象
 * @param objRsReligionENT:目标对象
*/
export  function RsReligion_GetObjFromJsonObj(objRsReligionENS: clsRsReligionEN): clsRsReligionEN 
{
 const objRsReligionENT: clsRsReligionEN = new clsRsReligionEN();
ObjectAssign(objRsReligionENT, objRsReligionENS);
 return objRsReligionENT;
}