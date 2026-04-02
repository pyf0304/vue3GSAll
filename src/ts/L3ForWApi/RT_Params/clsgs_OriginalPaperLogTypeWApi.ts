
 /**
 * 类名:clsgs_OriginalPaperLogTypeWApi
 * 表名:gs_OriginalPaperLogType(01120679)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:22
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
 * 论文日志类型(gs_OriginalPaperLogType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsgs_OriginalPaperLogTypeEN } from "@/ts/L0Entity/RT_Params/clsgs_OriginalPaperLogTypeEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_OriginalPaperLogType_Controller = "gs_OriginalPaperLogTypeApi";
 export const gs_OriginalPaperLogType_ConstructorName = "gs_OriginalPaperLogType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strLogTypeId:关键字
 * @returns 对象
 **/
export  async function gs_OriginalPaperLogType_GetObjByLogTypeIdAsync(strLogTypeId: string): Promise<clsgs_OriginalPaperLogTypeEN|null>  
{
const strThisFuncName = "GetObjByLogTypeIdAsync";

if (IsNullOrEmpty(strLogTypeId) == true)
{
  const strMsg = Format("参数:[strLogTypeId]不能为空!(In clsgs_OriginalPaperLogTypeWApi.GetObjByLogTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strLogTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strLogTypeId]的长度:[{0}]不正确!(clsgs_OriginalPaperLogTypeWApi.GetObjByLogTypeIdAsync)", strLogTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByLogTypeId";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strLogTypeId,
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
const objgs_OriginalPaperLogType = gs_OriginalPaperLogType_GetObjFromJsonObj(returnObj);
return objgs_OriginalPaperLogType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByLogTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByLogTypeIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByLogTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function gs_OriginalPaperLogType_SortFunDefa(a:clsgs_OriginalPaperLogTypeEN , b:clsgs_OriginalPaperLogTypeEN): number 
{
return a.logTypeId.localeCompare(b.logTypeId);
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
export  function gs_OriginalPaperLogType_SortFunDefa2Fld(a:clsgs_OriginalPaperLogTypeEN , b:clsgs_OriginalPaperLogTypeEN): number 
{
if (a.logTypeName == b.logTypeName) return a.updUser.localeCompare(b.updUser);
else return a.logTypeName.localeCompare(b.logTypeName);
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
export  function gs_OriginalPaperLogType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_OriginalPaperLogTypeEN.con_LogTypeId:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
return a.logTypeId.localeCompare(b.logTypeId);
}
case clsgs_OriginalPaperLogTypeEN.con_LogTypeName:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
if (a.logTypeName == null) return -1;
if (b.logTypeName == null) return 1;
return a.logTypeName.localeCompare(b.logTypeName);
}
case clsgs_OriginalPaperLogTypeEN.con_UpdUser:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_OriginalPaperLogTypeEN.con_UpdDate:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_OriginalPaperLogTypeEN.con_Memo:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_OriginalPaperLogType]中不存在!(in ${ gs_OriginalPaperLogType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_OriginalPaperLogTypeEN.con_LogTypeId:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
return b.logTypeId.localeCompare(a.logTypeId);
}
case clsgs_OriginalPaperLogTypeEN.con_LogTypeName:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
if (b.logTypeName == null) return -1;
if (a.logTypeName == null) return 1;
return b.logTypeName.localeCompare(a.logTypeName);
}
case clsgs_OriginalPaperLogTypeEN.con_UpdUser:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_OriginalPaperLogTypeEN.con_UpdDate:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_OriginalPaperLogTypeEN.con_Memo:
return (a: clsgs_OriginalPaperLogTypeEN, b: clsgs_OriginalPaperLogTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_OriginalPaperLogType]中不存在!(in ${ gs_OriginalPaperLogType_ConstructorName}.${ strThisFuncName})`;
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
export  async function gs_OriginalPaperLogType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_OriginalPaperLogTypeEN.con_LogTypeId:
return (obj: clsgs_OriginalPaperLogTypeEN) => {
return obj.logTypeId === value;
}
case clsgs_OriginalPaperLogTypeEN.con_LogTypeName:
return (obj: clsgs_OriginalPaperLogTypeEN) => {
return obj.logTypeName === value;
}
case clsgs_OriginalPaperLogTypeEN.con_UpdUser:
return (obj: clsgs_OriginalPaperLogTypeEN) => {
return obj.updUser === value;
}
case clsgs_OriginalPaperLogTypeEN.con_UpdDate:
return (obj: clsgs_OriginalPaperLogTypeEN) => {
return obj.updDate === value;
}
case clsgs_OriginalPaperLogTypeEN.con_Memo:
return (obj: clsgs_OriginalPaperLogTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_OriginalPaperLogType]中不存在!(in ${ gs_OriginalPaperLogType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[gs_OriginalPaperLogType__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_OriginalPaperLogType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLogType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLogType_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_OriginalPaperLogTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const objgs_OriginalPaperLogType = gs_OriginalPaperLogType_GetObjFromJsonObj(returnObj);
return objgs_OriginalPaperLogType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLogType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_OriginalPaperLogTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLogType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
 * @param arrLogTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_OriginalPaperLogType_GetObjLstByLogTypeIdLstAsync(arrLogTypeId: Array<string>): Promise<Array<clsgs_OriginalPaperLogTypeEN>>  
{
const strThisFuncName = "GetObjLstByLogTypeIdLstAsync";
const strAction = "GetObjLstByLogTypeIdLst";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLogTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLogType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByLogTypeIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function gs_OriginalPaperLogType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_OriginalPaperLogTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLogType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLogType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_OriginalPaperLogTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLogType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLogType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_OriginalPaperLogTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_OriginalPaperLogTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLogType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
 * @param strLogTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_OriginalPaperLogType_DelRecordAsync(strLogTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strLogTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
 * @param arrLogTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_OriginalPaperLogType_Delgs_OriginalPaperLogTypesAsync(arrLogTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_OriginalPaperLogTypesAsync";
const strAction = "Delgs_OriginalPaperLogTypes";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLogTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLogType_Delgs_OriginalPaperLogTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_OriginalPaperLogTypesByCondAsync";
const strAction = "Delgs_OriginalPaperLogTypesByCond";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
 * @param objgs_OriginalPaperLogTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_OriginalPaperLogType_AddNewRecordAsync(objgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_OriginalPaperLogTypeEN);
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_OriginalPaperLogTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
 * @param objgs_OriginalPaperLogTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_OriginalPaperLogType_AddNewRecordWithMaxIdAsync(objgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_OriginalPaperLogTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
 * @param objgs_OriginalPaperLogTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_OriginalPaperLogType_AddNewRecordWithReturnKeyAsync(objgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_OriginalPaperLogTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
 * @param objgs_OriginalPaperLogTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_OriginalPaperLogType_UpdateRecordAsync(objgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_OriginalPaperLogTypeEN.sfUpdFldSetStr === undefined || objgs_OriginalPaperLogTypeEN.sfUpdFldSetStr === null || objgs_OriginalPaperLogTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_OriginalPaperLogTypeEN.logTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_OriginalPaperLogTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
 * @param objgs_OriginalPaperLogTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_OriginalPaperLogType_UpdateWithConditionAsync(objgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_OriginalPaperLogTypeEN.sfUpdFldSetStr === undefined || objgs_OriginalPaperLogTypeEN.sfUpdFldSetStr === null || objgs_OriginalPaperLogTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_OriginalPaperLogTypeEN.logTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);
objgs_OriginalPaperLogTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_OriginalPaperLogTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLogType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
 * @param strLogTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function gs_OriginalPaperLogType_IsExistAsync(strLogTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strLogTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLogType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function gs_OriginalPaperLogType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function gs_OriginalPaperLogType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_OriginalPaperLogType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLogType_ConstructorName, strThisFuncName);
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
export  function gs_OriginalPaperLogType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_OriginalPaperLogType_CheckPropertyNew(pobjgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.logTypeId) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.logTypeId) > 2)
{
 throw new Error("(errid:Watl000413)字段[日志类型Id(logTypeId)]的长度不能超过2(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.logTypeId)(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.logTypeName) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.logTypeName) > 200)
{
 throw new Error("(errid:Watl000413)字段[日志类型名(logTypeName)]的长度不能超过200(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.logTypeName)(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.updUser) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.updUser)(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.updDate) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.updDate)(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.memo) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.memo)(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.logTypeId) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.logTypeId && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.logTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[日志类型Id(logTypeId)]的值:[$(pobjgs_OriginalPaperLogTypeEN.logTypeId)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.logTypeName) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.logTypeName && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.logTypeName) === false)
{
 throw new Error("(errid:Watl000414)字段[日志类型名(logTypeName)]的值:[$(pobjgs_OriginalPaperLogTypeEN.logTypeName)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.updUser) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.updUser && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_OriginalPaperLogTypeEN.updUser)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.updDate) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.updDate && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_OriginalPaperLogTypeEN.updDate)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.memo) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.memo && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_OriginalPaperLogTypeEN.memo)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_OriginalPaperLogType_CheckProperty4Update(pobjgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.logTypeId) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.logTypeId) > 2)
{
 throw new Error("(errid:Watl000416)字段[日志类型Id(logTypeId)]的长度不能超过2(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.logTypeId)(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.logTypeName) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.logTypeName) > 200)
{
 throw new Error("(errid:Watl000416)字段[日志类型名(logTypeName)]的长度不能超过200(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.logTypeName)(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.updUser) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.updUser)(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.updDate) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.updDate)(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.memo) == false && GetStrLen(pobjgs_OriginalPaperLogTypeEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文日志类型(gs_OriginalPaperLogType))!值:$(pobjgs_OriginalPaperLogTypeEN.memo)(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.logTypeId) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.logTypeId && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.logTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[日志类型Id(logTypeId)]的值:[$(pobjgs_OriginalPaperLogTypeEN.logTypeId)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.logTypeName) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.logTypeName && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.logTypeName) === false)
{
 throw new Error("(errid:Watl000417)字段[日志类型名(logTypeName)]的值:[$(pobjgs_OriginalPaperLogTypeEN.logTypeName)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.updUser) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.updUser && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_OriginalPaperLogTypeEN.updUser)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.updDate) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.updDate && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_OriginalPaperLogTypeEN.updDate)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogTypeEN.memo) == false && undefined !== pobjgs_OriginalPaperLogTypeEN.memo && tzDataType.isString(pobjgs_OriginalPaperLogTypeEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_OriginalPaperLogTypeEN.memo)], 非法,应该为字符型(In 论文日志类型(gs_OriginalPaperLogType))!(clsgs_OriginalPaperLogTypeBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
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
export  function gs_OriginalPaperLogType_GetJSONStrByObj (pobjgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN): string
{
pobjgs_OriginalPaperLogTypeEN.sfUpdFldSetStr = pobjgs_OriginalPaperLogTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_OriginalPaperLogTypeEN);
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
export  function gs_OriginalPaperLogType_GetObjLstByJSONStr (strJSON: string): Array<clsgs_OriginalPaperLogTypeEN>
{
let arrgs_OriginalPaperLogTypeObjLst = new Array<clsgs_OriginalPaperLogTypeEN>();
if (strJSON === "")
{
return arrgs_OriginalPaperLogTypeObjLst;
}
try
{
arrgs_OriginalPaperLogTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_OriginalPaperLogTypeObjLst;
}
return arrgs_OriginalPaperLogTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_OriginalPaperLogTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_OriginalPaperLogType_GetObjLstByJSONObjLst (arrgs_OriginalPaperLogTypeObjLstS: Array<clsgs_OriginalPaperLogTypeEN>): Array<clsgs_OriginalPaperLogTypeEN>
{
const arrgs_OriginalPaperLogTypeObjLst = new Array<clsgs_OriginalPaperLogTypeEN>();
for (const objInFor of arrgs_OriginalPaperLogTypeObjLstS) {
const obj1 = gs_OriginalPaperLogType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_OriginalPaperLogTypeObjLst.push(obj1);
}
return arrgs_OriginalPaperLogTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_OriginalPaperLogType_GetObjByJSONStr (strJSON: string): clsgs_OriginalPaperLogTypeEN
{
let pobjgs_OriginalPaperLogTypeEN = new clsgs_OriginalPaperLogTypeEN();
if (strJSON === "")
{
return pobjgs_OriginalPaperLogTypeEN;
}
try
{
pobjgs_OriginalPaperLogTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_OriginalPaperLogTypeEN;
}
return pobjgs_OriginalPaperLogTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_OriginalPaperLogType_GetCombineCondition(objgs_OriginalPaperLogTypeCond: clsgs_OriginalPaperLogTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogTypeCond.dicFldComparisonOp, clsgs_OriginalPaperLogTypeEN.con_LogTypeId) == true)
{
const strComparisonOpLogTypeId:string = objgs_OriginalPaperLogTypeCond.dicFldComparisonOp[clsgs_OriginalPaperLogTypeEN.con_LogTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogTypeEN.con_LogTypeId, objgs_OriginalPaperLogTypeCond.logTypeId, strComparisonOpLogTypeId);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogTypeCond.dicFldComparisonOp, clsgs_OriginalPaperLogTypeEN.con_LogTypeName) == true)
{
const strComparisonOpLogTypeName:string = objgs_OriginalPaperLogTypeCond.dicFldComparisonOp[clsgs_OriginalPaperLogTypeEN.con_LogTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogTypeEN.con_LogTypeName, objgs_OriginalPaperLogTypeCond.logTypeName, strComparisonOpLogTypeName);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogTypeCond.dicFldComparisonOp, clsgs_OriginalPaperLogTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_OriginalPaperLogTypeCond.dicFldComparisonOp[clsgs_OriginalPaperLogTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogTypeEN.con_UpdUser, objgs_OriginalPaperLogTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogTypeCond.dicFldComparisonOp, clsgs_OriginalPaperLogTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_OriginalPaperLogTypeCond.dicFldComparisonOp[clsgs_OriginalPaperLogTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogTypeEN.con_UpdDate, objgs_OriginalPaperLogTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogTypeCond.dicFldComparisonOp, clsgs_OriginalPaperLogTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_OriginalPaperLogTypeCond.dicFldComparisonOp[clsgs_OriginalPaperLogTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogTypeEN.con_Memo, objgs_OriginalPaperLogTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_OriginalPaperLogType(论文日志类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strLogTypeId: 日志类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_OriginalPaperLogType_GetUniCondStr(objgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and LogTypeId = '{0}'", objgs_OriginalPaperLogTypeEN.logTypeId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_OriginalPaperLogType(论文日志类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strLogTypeId: 日志类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_OriginalPaperLogType_GetUniCondStr4Update(objgs_OriginalPaperLogTypeEN: clsgs_OriginalPaperLogTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and LogTypeId <> '{0}'", objgs_OriginalPaperLogTypeEN.logTypeId);
 strWhereCond +=  Format(" and LogTypeId = '{0}'", objgs_OriginalPaperLogTypeEN.logTypeId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_OriginalPaperLogTypeENS:源对象
 * @param objgs_OriginalPaperLogTypeENT:目标对象
*/
export  function gs_OriginalPaperLogType_CopyObjTo(objgs_OriginalPaperLogTypeENS: clsgs_OriginalPaperLogTypeEN , objgs_OriginalPaperLogTypeENT: clsgs_OriginalPaperLogTypeEN ): void 
{
objgs_OriginalPaperLogTypeENT.logTypeId = objgs_OriginalPaperLogTypeENS.logTypeId; //日志类型Id
objgs_OriginalPaperLogTypeENT.logTypeName = objgs_OriginalPaperLogTypeENS.logTypeName; //日志类型名
objgs_OriginalPaperLogTypeENT.updUser = objgs_OriginalPaperLogTypeENS.updUser; //修改人
objgs_OriginalPaperLogTypeENT.updDate = objgs_OriginalPaperLogTypeENS.updDate; //修改日期
objgs_OriginalPaperLogTypeENT.memo = objgs_OriginalPaperLogTypeENS.memo; //备注
objgs_OriginalPaperLogTypeENT.sfUpdFldSetStr = objgs_OriginalPaperLogTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_OriginalPaperLogTypeENS:源对象
 * @param objgs_OriginalPaperLogTypeENT:目标对象
*/
export  function gs_OriginalPaperLogType_GetObjFromJsonObj(objgs_OriginalPaperLogTypeENS: clsgs_OriginalPaperLogTypeEN): clsgs_OriginalPaperLogTypeEN 
{
 const objgs_OriginalPaperLogTypeENT: clsgs_OriginalPaperLogTypeEN = new clsgs_OriginalPaperLogTypeEN();
ObjectAssign(objgs_OriginalPaperLogTypeENT, objgs_OriginalPaperLogTypeENS);
 return objgs_OriginalPaperLogTypeENT;
}