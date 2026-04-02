
 /**
 * 类名:clsViewpointLikeLogWApi
 * 表名:ViewpointLikeLog(01120601)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:21
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 观点点赞表(ViewpointLikeLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsViewpointLikeLogEN } from "@/ts/L0Entity/GradEduTopic/clsViewpointLikeLogEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const viewpointLikeLog_Controller = "ViewpointLikeLogApi";
 export const viewpointLikeLog_ConstructorName = "viewpointLikeLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngViewpointLikeLogId:关键字
 * @returns 对象
 **/
export  async function ViewpointLikeLog_GetObjByViewpointLikeLogIdAsync(lngViewpointLikeLogId: number): Promise<clsViewpointLikeLogEN|null>  
{
const strThisFuncName = "GetObjByViewpointLikeLogIdAsync";

if (lngViewpointLikeLogId == 0)
{
  const strMsg = Format("参数:[lngViewpointLikeLogId]不能为空!(In clsViewpointLikeLogWApi.GetObjByViewpointLikeLogIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByViewpointLikeLogId";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngViewpointLikeLogId,
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
const objViewpointLikeLog = ViewpointLikeLog_GetObjFromJsonObj(returnObj);
return objViewpointLikeLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByViewpointLikeLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByViewpointLikeLogIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByViewpointLikeLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function ViewpointLikeLog_SortFunDefa(a:clsViewpointLikeLogEN , b:clsViewpointLikeLogEN): number 
{
return a.viewpointLikeLogId-b.viewpointLikeLogId;
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
export  function ViewpointLikeLog_SortFunDefa2Fld(a:clsViewpointLikeLogEN , b:clsViewpointLikeLogEN): number 
{
if (a.viewpointId == b.viewpointId) return a.updDate.localeCompare(b.updDate);
else return a.viewpointId.localeCompare(b.viewpointId);
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
export  function ViewpointLikeLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsViewpointLikeLogEN.con_ViewpointLikeLogId:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
return a.viewpointLikeLogId-b.viewpointLikeLogId;
}
case clsViewpointLikeLogEN.con_ViewpointId:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
if (a.viewpointId == null) return -1;
if (b.viewpointId == null) return 1;
return a.viewpointId.localeCompare(b.viewpointId);
}
case clsViewpointLikeLogEN.con_UpdDate:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsViewpointLikeLogEN.con_UpdUserId:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsViewpointLikeLogEN.con_Memo:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ViewpointLikeLog]中不存在!(in ${ viewpointLikeLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsViewpointLikeLogEN.con_ViewpointLikeLogId:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
return b.viewpointLikeLogId-a.viewpointLikeLogId;
}
case clsViewpointLikeLogEN.con_ViewpointId:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
if (b.viewpointId == null) return -1;
if (a.viewpointId == null) return 1;
return b.viewpointId.localeCompare(a.viewpointId);
}
case clsViewpointLikeLogEN.con_UpdDate:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsViewpointLikeLogEN.con_UpdUserId:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsViewpointLikeLogEN.con_Memo:
return (a: clsViewpointLikeLogEN, b: clsViewpointLikeLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ViewpointLikeLog]中不存在!(in ${ viewpointLikeLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function ViewpointLikeLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsViewpointLikeLogEN.con_ViewpointLikeLogId:
return (obj: clsViewpointLikeLogEN) => {
return obj.viewpointLikeLogId === value;
}
case clsViewpointLikeLogEN.con_ViewpointId:
return (obj: clsViewpointLikeLogEN) => {
return obj.viewpointId === value;
}
case clsViewpointLikeLogEN.con_UpdDate:
return (obj: clsViewpointLikeLogEN) => {
return obj.updDate === value;
}
case clsViewpointLikeLogEN.con_UpdUserId:
return (obj: clsViewpointLikeLogEN) => {
return obj.updUserId === value;
}
case clsViewpointLikeLogEN.con_Memo:
return (obj: clsViewpointLikeLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ViewpointLikeLog]中不存在!(in ${ viewpointLikeLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[ViewpointLikeLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ViewpointLikeLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  async function ViewpointLikeLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  async function ViewpointLikeLog_GetFirstObjAsync(strWhereCond: string): Promise<clsViewpointLikeLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const objViewpointLikeLog = ViewpointLikeLog_GetObjFromJsonObj(returnObj);
return objViewpointLikeLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  async function ViewpointLikeLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsViewpointLikeLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
 * @param arrViewpointLikeLogId:关键字列表
 * @returns 对象列表
 **/
export  async function ViewpointLikeLog_GetObjLstByViewpointLikeLogIdLstAsync(arrViewpointLikeLogId: Array<string>): Promise<Array<clsViewpointLikeLogEN>>  
{
const strThisFuncName = "GetObjLstByViewpointLikeLogIdLstAsync";
const strAction = "GetObjLstByViewpointLikeLogIdLst";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrViewpointLikeLogId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByViewpointLikeLogIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ViewpointLikeLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsViewpointLikeLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  async function ViewpointLikeLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsViewpointLikeLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  async function ViewpointLikeLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsViewpointLikeLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsViewpointLikeLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
 * @param lngViewpointLikeLogId:关键字
 * @returns 获取删除的结果
 **/
export  async function ViewpointLikeLog_DelRecordAsync(lngViewpointLikeLogId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngViewpointLikeLogId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
 * @param arrViewpointLikeLogId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ViewpointLikeLog_DelViewpointLikeLogsAsync(arrViewpointLikeLogId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelViewpointLikeLogsAsync";
const strAction = "DelViewpointLikeLogs";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrViewpointLikeLogId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  async function ViewpointLikeLog_DelViewpointLikeLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelViewpointLikeLogsByCondAsync";
const strAction = "DelViewpointLikeLogsByCond";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
 * @param objViewpointLikeLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ViewpointLikeLog_AddNewRecordAsync(objViewpointLikeLogEN: clsViewpointLikeLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objViewpointLikeLogEN);
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointLikeLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objViewpointLikeLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ViewpointLikeLog_AddNewRecordWithReturnKeyAsync(objViewpointLikeLogEN: clsViewpointLikeLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointLikeLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
 * @param objViewpointLikeLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ViewpointLikeLog_UpdateRecordAsync(objViewpointLikeLogEN: clsViewpointLikeLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objViewpointLikeLogEN.sfUpdFldSetStr === undefined || objViewpointLikeLogEN.sfUpdFldSetStr === null || objViewpointLikeLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objViewpointLikeLogEN.viewpointLikeLogId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointLikeLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
 * @param objViewpointLikeLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ViewpointLikeLog_UpdateWithConditionAsync(objViewpointLikeLogEN: clsViewpointLikeLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objViewpointLikeLogEN.sfUpdFldSetStr === undefined || objViewpointLikeLogEN.sfUpdFldSetStr === null || objViewpointLikeLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objViewpointLikeLogEN.viewpointLikeLogId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);
objViewpointLikeLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointLikeLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  async function ViewpointLikeLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
 * @param lngViewpointLikeLogId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ViewpointLikeLog_IsExistAsync(lngViewpointLikeLogId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngViewpointLikeLogId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  async function ViewpointLikeLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  async function ViewpointLikeLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(viewpointLikeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointLikeLog_ConstructorName, strThisFuncName);
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
export  function ViewpointLikeLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ViewpointLikeLog_CheckPropertyNew(pobjViewpointLikeLogEN: clsViewpointLikeLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjViewpointLikeLogEN.viewpointId) == false && GetStrLen(pobjViewpointLikeLogEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000413)字段[观点Id(viewpointId)]的长度不能超过8(In 观点点赞表(ViewpointLikeLog))!值:$(pobjViewpointLikeLogEN.viewpointId)(clsViewpointLikeLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.updDate) == false && GetStrLen(pobjViewpointLikeLogEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 观点点赞表(ViewpointLikeLog))!值:$(pobjViewpointLikeLogEN.updDate)(clsViewpointLikeLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.updUserId) == false && GetStrLen(pobjViewpointLikeLogEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 观点点赞表(ViewpointLikeLog))!值:$(pobjViewpointLikeLogEN.updUserId)(clsViewpointLikeLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.memo) == false && GetStrLen(pobjViewpointLikeLogEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 观点点赞表(ViewpointLikeLog))!值:$(pobjViewpointLikeLogEN.memo)(clsViewpointLikeLogBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjViewpointLikeLogEN.viewpointLikeLogId && undefined !== pobjViewpointLikeLogEN.viewpointLikeLogId && tzDataType.isNumber(pobjViewpointLikeLogEN.viewpointLikeLogId) === false)
{
 throw new Error("(errid:Watl000414)字段[观点点赞Id(viewpointLikeLogId)]的值:[$(pobjViewpointLikeLogEN.viewpointLikeLogId)], 非法,应该为数值型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.viewpointId) == false && undefined !== pobjViewpointLikeLogEN.viewpointId && tzDataType.isString(pobjViewpointLikeLogEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000414)字段[观点Id(viewpointId)]的值:[$(pobjViewpointLikeLogEN.viewpointId)], 非法,应该为字符型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.updDate) == false && undefined !== pobjViewpointLikeLogEN.updDate && tzDataType.isString(pobjViewpointLikeLogEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewpointLikeLogEN.updDate)], 非法,应该为字符型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.updUserId) == false && undefined !== pobjViewpointLikeLogEN.updUserId && tzDataType.isString(pobjViewpointLikeLogEN.updUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjViewpointLikeLogEN.updUserId)], 非法,应该为字符型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.memo) == false && undefined !== pobjViewpointLikeLogEN.memo && tzDataType.isString(pobjViewpointLikeLogEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjViewpointLikeLogEN.memo)], 非法,应该为字符型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ViewpointLikeLog_CheckProperty4Update(pobjViewpointLikeLogEN: clsViewpointLikeLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjViewpointLikeLogEN.viewpointId) == false && GetStrLen(pobjViewpointLikeLogEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000416)字段[观点Id(viewpointId)]的长度不能超过8(In 观点点赞表(ViewpointLikeLog))!值:$(pobjViewpointLikeLogEN.viewpointId)(clsViewpointLikeLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.updDate) == false && GetStrLen(pobjViewpointLikeLogEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 观点点赞表(ViewpointLikeLog))!值:$(pobjViewpointLikeLogEN.updDate)(clsViewpointLikeLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.updUserId) == false && GetStrLen(pobjViewpointLikeLogEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 观点点赞表(ViewpointLikeLog))!值:$(pobjViewpointLikeLogEN.updUserId)(clsViewpointLikeLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.memo) == false && GetStrLen(pobjViewpointLikeLogEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 观点点赞表(ViewpointLikeLog))!值:$(pobjViewpointLikeLogEN.memo)(clsViewpointLikeLogBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjViewpointLikeLogEN.viewpointLikeLogId && undefined !== pobjViewpointLikeLogEN.viewpointLikeLogId && tzDataType.isNumber(pobjViewpointLikeLogEN.viewpointLikeLogId) === false)
{
 throw new Error("(errid:Watl000417)字段[观点点赞Id(viewpointLikeLogId)]的值:[$(pobjViewpointLikeLogEN.viewpointLikeLogId)], 非法,应该为数值型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.viewpointId) == false && undefined !== pobjViewpointLikeLogEN.viewpointId && tzDataType.isString(pobjViewpointLikeLogEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000417)字段[观点Id(viewpointId)]的值:[$(pobjViewpointLikeLogEN.viewpointId)], 非法,应该为字符型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.updDate) == false && undefined !== pobjViewpointLikeLogEN.updDate && tzDataType.isString(pobjViewpointLikeLogEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewpointLikeLogEN.updDate)], 非法,应该为字符型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.updUserId) == false && undefined !== pobjViewpointLikeLogEN.updUserId && tzDataType.isString(pobjViewpointLikeLogEN.updUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjViewpointLikeLogEN.updUserId)], 非法,应该为字符型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointLikeLogEN.memo) == false && undefined !== pobjViewpointLikeLogEN.memo && tzDataType.isString(pobjViewpointLikeLogEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjViewpointLikeLogEN.memo)], 非法,应该为字符型(In 观点点赞表(ViewpointLikeLog))!(clsViewpointLikeLogBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjViewpointLikeLogEN.viewpointLikeLogId 
 || pobjViewpointLikeLogEN.viewpointLikeLogId != null && pobjViewpointLikeLogEN.viewpointLikeLogId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[观点点赞Id]不能为空(In 观点点赞表)!(clsViewpointLikeLogBL:CheckProperty4Update)");
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
export  function ViewpointLikeLog_GetJSONStrByObj (pobjViewpointLikeLogEN: clsViewpointLikeLogEN): string
{
pobjViewpointLikeLogEN.sfUpdFldSetStr = pobjViewpointLikeLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjViewpointLikeLogEN);
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
export  function ViewpointLikeLog_GetObjLstByJSONStr (strJSON: string): Array<clsViewpointLikeLogEN>
{
let arrViewpointLikeLogObjLst = new Array<clsViewpointLikeLogEN>();
if (strJSON === "")
{
return arrViewpointLikeLogObjLst;
}
try
{
arrViewpointLikeLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrViewpointLikeLogObjLst;
}
return arrViewpointLikeLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewpointLikeLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ViewpointLikeLog_GetObjLstByJSONObjLst (arrViewpointLikeLogObjLstS: Array<clsViewpointLikeLogEN>): Array<clsViewpointLikeLogEN>
{
const arrViewpointLikeLogObjLst = new Array<clsViewpointLikeLogEN>();
for (const objInFor of arrViewpointLikeLogObjLstS) {
const obj1 = ViewpointLikeLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrViewpointLikeLogObjLst.push(obj1);
}
return arrViewpointLikeLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ViewpointLikeLog_GetObjByJSONStr (strJSON: string): clsViewpointLikeLogEN
{
let pobjViewpointLikeLogEN = new clsViewpointLikeLogEN();
if (strJSON === "")
{
return pobjViewpointLikeLogEN;
}
try
{
pobjViewpointLikeLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjViewpointLikeLogEN;
}
return pobjViewpointLikeLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ViewpointLikeLog_GetCombineCondition(objViewpointLikeLogCond: clsViewpointLikeLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objViewpointLikeLogCond.dicFldComparisonOp, clsViewpointLikeLogEN.con_ViewpointLikeLogId) == true)
{
const strComparisonOpViewpointLikeLogId:string = objViewpointLikeLogCond.dicFldComparisonOp[clsViewpointLikeLogEN.con_ViewpointLikeLogId];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointLikeLogEN.con_ViewpointLikeLogId, objViewpointLikeLogCond.viewpointLikeLogId, strComparisonOpViewpointLikeLogId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointLikeLogCond.dicFldComparisonOp, clsViewpointLikeLogEN.con_ViewpointId) == true)
{
const strComparisonOpViewpointId:string = objViewpointLikeLogCond.dicFldComparisonOp[clsViewpointLikeLogEN.con_ViewpointId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointLikeLogEN.con_ViewpointId, objViewpointLikeLogCond.viewpointId, strComparisonOpViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointLikeLogCond.dicFldComparisonOp, clsViewpointLikeLogEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objViewpointLikeLogCond.dicFldComparisonOp[clsViewpointLikeLogEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointLikeLogEN.con_UpdDate, objViewpointLikeLogCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objViewpointLikeLogCond.dicFldComparisonOp, clsViewpointLikeLogEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objViewpointLikeLogCond.dicFldComparisonOp[clsViewpointLikeLogEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointLikeLogEN.con_UpdUserId, objViewpointLikeLogCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointLikeLogCond.dicFldComparisonOp, clsViewpointLikeLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objViewpointLikeLogCond.dicFldComparisonOp[clsViewpointLikeLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointLikeLogEN.con_Memo, objViewpointLikeLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ViewpointLikeLog(观点点赞表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngViewpointLikeLogId: 观点点赞Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ViewpointLikeLog_GetUniCondStr(objViewpointLikeLogEN: clsViewpointLikeLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ViewpointLikeLogId = '{0}'", objViewpointLikeLogEN.viewpointLikeLogId);
 strWhereCond +=  Format(" and ViewpointId = '{0}'", objViewpointLikeLogEN.viewpointId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ViewpointLikeLog(观点点赞表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngViewpointLikeLogId: 观点点赞Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ViewpointLikeLog_GetUniCondStr4Update(objViewpointLikeLogEN: clsViewpointLikeLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ViewpointLikeLogId <> '{0}'", objViewpointLikeLogEN.viewpointLikeLogId);
 strWhereCond +=  Format(" and ViewpointLikeLogId = '{0}'", objViewpointLikeLogEN.viewpointLikeLogId);
 strWhereCond +=  Format(" and ViewpointId = '{0}'", objViewpointLikeLogEN.viewpointId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objViewpointLikeLogENS:源对象
 * @param objViewpointLikeLogENT:目标对象
*/
export  function ViewpointLikeLog_CopyObjTo(objViewpointLikeLogENS: clsViewpointLikeLogEN , objViewpointLikeLogENT: clsViewpointLikeLogEN ): void 
{
objViewpointLikeLogENT.viewpointLikeLogId = objViewpointLikeLogENS.viewpointLikeLogId; //观点点赞Id
objViewpointLikeLogENT.viewpointId = objViewpointLikeLogENS.viewpointId; //观点Id
objViewpointLikeLogENT.updDate = objViewpointLikeLogENS.updDate; //修改日期
objViewpointLikeLogENT.updUserId = objViewpointLikeLogENS.updUserId; //修改用户Id
objViewpointLikeLogENT.memo = objViewpointLikeLogENS.memo; //备注
objViewpointLikeLogENT.sfUpdFldSetStr = objViewpointLikeLogENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewpointLikeLogENS:源对象
 * @param objViewpointLikeLogENT:目标对象
*/
export  function ViewpointLikeLog_GetObjFromJsonObj(objViewpointLikeLogENS: clsViewpointLikeLogEN): clsViewpointLikeLogEN 
{
 const objViewpointLikeLogENT: clsViewpointLikeLogEN = new clsViewpointLikeLogEN();
ObjectAssign(objViewpointLikeLogENT, objViewpointLikeLogENS);
 return objViewpointLikeLogENT;
}