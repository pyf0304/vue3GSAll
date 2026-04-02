
 /**
 * 类名:clsgs_OriginalPaperLogWApi
 * 表名:gs_OriginalPaperLog(01120680)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:04
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文日志表(gs_OriginalPaperLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsgs_OriginalPaperLogEN } from "@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_OriginalPaperLog_Controller = "gs_OriginalPaperLogApi";
 export const gs_OriginalPaperLog_ConstructorName = "gs_OriginalPaperLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPaperLogId:关键字
 * @returns 对象
 **/
export  async function gs_OriginalPaperLog_GetObjByPaperLogIdAsync(lngPaperLogId: number): Promise<clsgs_OriginalPaperLogEN|null>  
{
const strThisFuncName = "GetObjByPaperLogIdAsync";

if (lngPaperLogId == 0)
{
  const strMsg = Format("参数:[lngPaperLogId]不能为空!(In clsgs_OriginalPaperLogWApi.GetObjByPaperLogIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByPaperLogId";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperLogId,
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
const objgs_OriginalPaperLog = gs_OriginalPaperLog_GetObjFromJsonObj(returnObj);
return objgs_OriginalPaperLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPaperLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByPaperLogIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByPaperLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function gs_OriginalPaperLog_SortFunDefa(a:clsgs_OriginalPaperLogEN , b:clsgs_OriginalPaperLogEN): number 
{
return a.paperLogId-b.paperLogId;
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
export  function gs_OriginalPaperLog_SortFunDefa2Fld(a:clsgs_OriginalPaperLogEN , b:clsgs_OriginalPaperLogEN): number 
{
if (a.paperId == b.paperId) return a.logTypeId.localeCompare(b.logTypeId);
else return a.paperId.localeCompare(b.paperId);
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
export  function gs_OriginalPaperLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_OriginalPaperLogEN.con_PaperLogId:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
return a.paperLogId-b.paperLogId;
}
case clsgs_OriginalPaperLogEN.con_PaperId:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsgs_OriginalPaperLogEN.con_LogTypeId:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
return a.logTypeId.localeCompare(b.logTypeId);
}
case clsgs_OriginalPaperLogEN.con_LogDescription:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (a.logDescription == null) return -1;
if (b.logDescription == null) return 1;
return a.logDescription.localeCompare(b.logDescription);
}
case clsgs_OriginalPaperLogEN.con_UpdUser:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_OriginalPaperLogEN.con_UpdDate:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_OriginalPaperLogEN.con_Memo:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_OriginalPaperLog]中不存在!(in ${ gs_OriginalPaperLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_OriginalPaperLogEN.con_PaperLogId:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
return b.paperLogId-a.paperLogId;
}
case clsgs_OriginalPaperLogEN.con_PaperId:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsgs_OriginalPaperLogEN.con_LogTypeId:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
return b.logTypeId.localeCompare(a.logTypeId);
}
case clsgs_OriginalPaperLogEN.con_LogDescription:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (b.logDescription == null) return -1;
if (a.logDescription == null) return 1;
return b.logDescription.localeCompare(a.logDescription);
}
case clsgs_OriginalPaperLogEN.con_UpdUser:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_OriginalPaperLogEN.con_UpdDate:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_OriginalPaperLogEN.con_Memo:
return (a: clsgs_OriginalPaperLogEN, b: clsgs_OriginalPaperLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_OriginalPaperLog]中不存在!(in ${ gs_OriginalPaperLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function gs_OriginalPaperLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_OriginalPaperLogEN.con_PaperLogId:
return (obj: clsgs_OriginalPaperLogEN) => {
return obj.paperLogId === value;
}
case clsgs_OriginalPaperLogEN.con_PaperId:
return (obj: clsgs_OriginalPaperLogEN) => {
return obj.paperId === value;
}
case clsgs_OriginalPaperLogEN.con_LogTypeId:
return (obj: clsgs_OriginalPaperLogEN) => {
return obj.logTypeId === value;
}
case clsgs_OriginalPaperLogEN.con_LogDescription:
return (obj: clsgs_OriginalPaperLogEN) => {
return obj.logDescription === value;
}
case clsgs_OriginalPaperLogEN.con_UpdUser:
return (obj: clsgs_OriginalPaperLogEN) => {
return obj.updUser === value;
}
case clsgs_OriginalPaperLogEN.con_UpdDate:
return (obj: clsgs_OriginalPaperLogEN) => {
return obj.updDate === value;
}
case clsgs_OriginalPaperLogEN.con_Memo:
return (obj: clsgs_OriginalPaperLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_OriginalPaperLog]中不存在!(in ${ gs_OriginalPaperLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[gs_OriginalPaperLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_OriginalPaperLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLog_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_OriginalPaperLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const objgs_OriginalPaperLog = gs_OriginalPaperLog_GetObjFromJsonObj(returnObj);
return objgs_OriginalPaperLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_OriginalPaperLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
 * @param arrPaperLogId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_OriginalPaperLog_GetObjLstByPaperLogIdLstAsync(arrPaperLogId: Array<string>): Promise<Array<clsgs_OriginalPaperLogEN>>  
{
const strThisFuncName = "GetObjLstByPaperLogIdLstAsync";
const strAction = "GetObjLstByPaperLogIdLst";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperLogId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPaperLogIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function gs_OriginalPaperLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_OriginalPaperLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_OriginalPaperLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_OriginalPaperLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_OriginalPaperLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_OriginalPaperLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
 * @param lngPaperLogId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_OriginalPaperLog_DelRecordAsync(lngPaperLogId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngPaperLogId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
 * @param arrPaperLogId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_OriginalPaperLog_Delgs_OriginalPaperLogsAsync(arrPaperLogId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_OriginalPaperLogsAsync";
const strAction = "Delgs_OriginalPaperLogs";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperLogId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLog_Delgs_OriginalPaperLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_OriginalPaperLogsByCondAsync";
const strAction = "Delgs_OriginalPaperLogsByCond";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
 * @param objgs_OriginalPaperLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_OriginalPaperLog_AddNewRecordAsync(objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_OriginalPaperLogEN);
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_OriginalPaperLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
 * @param objgs_OriginalPaperLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_OriginalPaperLog_AddNewRecordWithReturnKeyAsync(objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_OriginalPaperLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
 * @param objgs_OriginalPaperLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_OriginalPaperLog_UpdateRecordAsync(objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_OriginalPaperLogEN.sfUpdFldSetStr === undefined || objgs_OriginalPaperLogEN.sfUpdFldSetStr === null || objgs_OriginalPaperLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_OriginalPaperLogEN.paperLogId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_OriginalPaperLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
 * @param objgs_OriginalPaperLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_OriginalPaperLog_UpdateWithConditionAsync(objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_OriginalPaperLogEN.sfUpdFldSetStr === undefined || objgs_OriginalPaperLogEN.sfUpdFldSetStr === null || objgs_OriginalPaperLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_OriginalPaperLogEN.paperLogId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);
objgs_OriginalPaperLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_OriginalPaperLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
 * @param lngPaperLogId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function gs_OriginalPaperLog_IsExistAsync(lngPaperLogId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperLogId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  async function gs_OriginalPaperLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_OriginalPaperLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_OriginalPaperLog_ConstructorName, strThisFuncName);
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
export  function gs_OriginalPaperLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_OriginalPaperLog_CheckPropertyNew(pobjgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.logTypeId) === true )
{
 throw new Error("(errid:Watl000411)字段[日志类型Id]不能为空(In 论文日志表)!(clsgs_OriginalPaperLogBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.paperId) == false && GetStrLen(pobjgs_OriginalPaperLogEN.paperId) > 8)
{
 throw new Error("(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.paperId)(clsgs_OriginalPaperLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.logTypeId) == false && GetStrLen(pobjgs_OriginalPaperLogEN.logTypeId) > 2)
{
 throw new Error("(errid:Watl000413)字段[日志类型Id(logTypeId)]的长度不能超过2(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.logTypeId)(clsgs_OriginalPaperLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.logDescription) == false && GetStrLen(pobjgs_OriginalPaperLogEN.logDescription) > 500)
{
 throw new Error("(errid:Watl000413)字段[日志描述(logDescription)]的长度不能超过500(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.logDescription)(clsgs_OriginalPaperLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.updUser) == false && GetStrLen(pobjgs_OriginalPaperLogEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.updUser)(clsgs_OriginalPaperLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.updDate) == false && GetStrLen(pobjgs_OriginalPaperLogEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.updDate)(clsgs_OriginalPaperLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.memo) == false && GetStrLen(pobjgs_OriginalPaperLogEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.memo)(clsgs_OriginalPaperLogBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_OriginalPaperLogEN.paperLogId && undefined !== pobjgs_OriginalPaperLogEN.paperLogId && tzDataType.isNumber(pobjgs_OriginalPaperLogEN.paperLogId) === false)
{
 throw new Error("(errid:Watl000414)字段[论文日志Id(paperLogId)]的值:[$(pobjgs_OriginalPaperLogEN.paperLogId)], 非法,应该为数值型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.paperId) == false && undefined !== pobjgs_OriginalPaperLogEN.paperId && tzDataType.isString(pobjgs_OriginalPaperLogEN.paperId) === false)
{
 throw new Error("(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjgs_OriginalPaperLogEN.paperId)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.logTypeId) == false && undefined !== pobjgs_OriginalPaperLogEN.logTypeId && tzDataType.isString(pobjgs_OriginalPaperLogEN.logTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[日志类型Id(logTypeId)]的值:[$(pobjgs_OriginalPaperLogEN.logTypeId)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.logDescription) == false && undefined !== pobjgs_OriginalPaperLogEN.logDescription && tzDataType.isString(pobjgs_OriginalPaperLogEN.logDescription) === false)
{
 throw new Error("(errid:Watl000414)字段[日志描述(logDescription)]的值:[$(pobjgs_OriginalPaperLogEN.logDescription)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.updUser) == false && undefined !== pobjgs_OriginalPaperLogEN.updUser && tzDataType.isString(pobjgs_OriginalPaperLogEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_OriginalPaperLogEN.updUser)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.updDate) == false && undefined !== pobjgs_OriginalPaperLogEN.updDate && tzDataType.isString(pobjgs_OriginalPaperLogEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_OriginalPaperLogEN.updDate)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.memo) == false && undefined !== pobjgs_OriginalPaperLogEN.memo && tzDataType.isString(pobjgs_OriginalPaperLogEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_OriginalPaperLogEN.memo)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_OriginalPaperLog_CheckProperty4Update(pobjgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.paperId) == false && GetStrLen(pobjgs_OriginalPaperLogEN.paperId) > 8)
{
 throw new Error("(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.paperId)(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.logTypeId) == false && GetStrLen(pobjgs_OriginalPaperLogEN.logTypeId) > 2)
{
 throw new Error("(errid:Watl000416)字段[日志类型Id(logTypeId)]的长度不能超过2(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.logTypeId)(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.logDescription) == false && GetStrLen(pobjgs_OriginalPaperLogEN.logDescription) > 500)
{
 throw new Error("(errid:Watl000416)字段[日志描述(logDescription)]的长度不能超过500(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.logDescription)(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.updUser) == false && GetStrLen(pobjgs_OriginalPaperLogEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.updUser)(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.updDate) == false && GetStrLen(pobjgs_OriginalPaperLogEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.updDate)(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.memo) == false && GetStrLen(pobjgs_OriginalPaperLogEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文日志表(gs_OriginalPaperLog))!值:$(pobjgs_OriginalPaperLogEN.memo)(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_OriginalPaperLogEN.paperLogId && undefined !== pobjgs_OriginalPaperLogEN.paperLogId && tzDataType.isNumber(pobjgs_OriginalPaperLogEN.paperLogId) === false)
{
 throw new Error("(errid:Watl000417)字段[论文日志Id(paperLogId)]的值:[$(pobjgs_OriginalPaperLogEN.paperLogId)], 非法,应该为数值型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.paperId) == false && undefined !== pobjgs_OriginalPaperLogEN.paperId && tzDataType.isString(pobjgs_OriginalPaperLogEN.paperId) === false)
{
 throw new Error("(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjgs_OriginalPaperLogEN.paperId)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.logTypeId) == false && undefined !== pobjgs_OriginalPaperLogEN.logTypeId && tzDataType.isString(pobjgs_OriginalPaperLogEN.logTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[日志类型Id(logTypeId)]的值:[$(pobjgs_OriginalPaperLogEN.logTypeId)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.logDescription) == false && undefined !== pobjgs_OriginalPaperLogEN.logDescription && tzDataType.isString(pobjgs_OriginalPaperLogEN.logDescription) === false)
{
 throw new Error("(errid:Watl000417)字段[日志描述(logDescription)]的值:[$(pobjgs_OriginalPaperLogEN.logDescription)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.updUser) == false && undefined !== pobjgs_OriginalPaperLogEN.updUser && tzDataType.isString(pobjgs_OriginalPaperLogEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_OriginalPaperLogEN.updUser)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.updDate) == false && undefined !== pobjgs_OriginalPaperLogEN.updDate && tzDataType.isString(pobjgs_OriginalPaperLogEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_OriginalPaperLogEN.updDate)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_OriginalPaperLogEN.memo) == false && undefined !== pobjgs_OriginalPaperLogEN.memo && tzDataType.isString(pobjgs_OriginalPaperLogEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_OriginalPaperLogEN.memo)], 非法,应该为字符型(In 论文日志表(gs_OriginalPaperLog))!(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjgs_OriginalPaperLogEN.paperLogId 
 || pobjgs_OriginalPaperLogEN.paperLogId != null && pobjgs_OriginalPaperLogEN.paperLogId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[论文日志Id]不能为空(In 论文日志表)!(clsgs_OriginalPaperLogBL:CheckProperty4Update)");
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
export  function gs_OriginalPaperLog_GetJSONStrByObj (pobjgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN): string
{
pobjgs_OriginalPaperLogEN.sfUpdFldSetStr = pobjgs_OriginalPaperLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_OriginalPaperLogEN);
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
export  function gs_OriginalPaperLog_GetObjLstByJSONStr (strJSON: string): Array<clsgs_OriginalPaperLogEN>
{
let arrgs_OriginalPaperLogObjLst = new Array<clsgs_OriginalPaperLogEN>();
if (strJSON === "")
{
return arrgs_OriginalPaperLogObjLst;
}
try
{
arrgs_OriginalPaperLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_OriginalPaperLogObjLst;
}
return arrgs_OriginalPaperLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_OriginalPaperLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_OriginalPaperLog_GetObjLstByJSONObjLst (arrgs_OriginalPaperLogObjLstS: Array<clsgs_OriginalPaperLogEN>): Array<clsgs_OriginalPaperLogEN>
{
const arrgs_OriginalPaperLogObjLst = new Array<clsgs_OriginalPaperLogEN>();
for (const objInFor of arrgs_OriginalPaperLogObjLstS) {
const obj1 = gs_OriginalPaperLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_OriginalPaperLogObjLst.push(obj1);
}
return arrgs_OriginalPaperLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_OriginalPaperLog_GetObjByJSONStr (strJSON: string): clsgs_OriginalPaperLogEN
{
let pobjgs_OriginalPaperLogEN = new clsgs_OriginalPaperLogEN();
if (strJSON === "")
{
return pobjgs_OriginalPaperLogEN;
}
try
{
pobjgs_OriginalPaperLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_OriginalPaperLogEN;
}
return pobjgs_OriginalPaperLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_OriginalPaperLog_GetCombineCondition(objgs_OriginalPaperLogCond: clsgs_OriginalPaperLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogCond.dicFldComparisonOp, clsgs_OriginalPaperLogEN.con_PaperLogId) == true)
{
const strComparisonOpPaperLogId:string = objgs_OriginalPaperLogCond.dicFldComparisonOp[clsgs_OriginalPaperLogEN.con_PaperLogId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_OriginalPaperLogEN.con_PaperLogId, objgs_OriginalPaperLogCond.paperLogId, strComparisonOpPaperLogId);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogCond.dicFldComparisonOp, clsgs_OriginalPaperLogEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objgs_OriginalPaperLogCond.dicFldComparisonOp[clsgs_OriginalPaperLogEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogEN.con_PaperId, objgs_OriginalPaperLogCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogCond.dicFldComparisonOp, clsgs_OriginalPaperLogEN.con_LogTypeId) == true)
{
const strComparisonOpLogTypeId:string = objgs_OriginalPaperLogCond.dicFldComparisonOp[clsgs_OriginalPaperLogEN.con_LogTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogEN.con_LogTypeId, objgs_OriginalPaperLogCond.logTypeId, strComparisonOpLogTypeId);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogCond.dicFldComparisonOp, clsgs_OriginalPaperLogEN.con_LogDescription) == true)
{
const strComparisonOpLogDescription:string = objgs_OriginalPaperLogCond.dicFldComparisonOp[clsgs_OriginalPaperLogEN.con_LogDescription];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogEN.con_LogDescription, objgs_OriginalPaperLogCond.logDescription, strComparisonOpLogDescription);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogCond.dicFldComparisonOp, clsgs_OriginalPaperLogEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_OriginalPaperLogCond.dicFldComparisonOp[clsgs_OriginalPaperLogEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogEN.con_UpdUser, objgs_OriginalPaperLogCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogCond.dicFldComparisonOp, clsgs_OriginalPaperLogEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_OriginalPaperLogCond.dicFldComparisonOp[clsgs_OriginalPaperLogEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogEN.con_UpdDate, objgs_OriginalPaperLogCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_OriginalPaperLogCond.dicFldComparisonOp, clsgs_OriginalPaperLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_OriginalPaperLogCond.dicFldComparisonOp[clsgs_OriginalPaperLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_OriginalPaperLogEN.con_Memo, objgs_OriginalPaperLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_OriginalPaperLog(论文日志表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngPaperLogId: 论文日志Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_OriginalPaperLog_GetUniCondStr(objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PaperLogId = '{0}'", objgs_OriginalPaperLogEN.paperLogId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_OriginalPaperLog(论文日志表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngPaperLogId: 论文日志Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_OriginalPaperLog_GetUniCondStr4Update(objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and PaperLogId <> '{0}'", objgs_OriginalPaperLogEN.paperLogId);
 strWhereCond +=  Format(" and PaperLogId = '{0}'", objgs_OriginalPaperLogEN.paperLogId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_OriginalPaperLogENS:源对象
 * @param objgs_OriginalPaperLogENT:目标对象
*/
export  function gs_OriginalPaperLog_CopyObjTo(objgs_OriginalPaperLogENS: clsgs_OriginalPaperLogEN , objgs_OriginalPaperLogENT: clsgs_OriginalPaperLogEN ): void 
{
objgs_OriginalPaperLogENT.paperLogId = objgs_OriginalPaperLogENS.paperLogId; //论文日志Id
objgs_OriginalPaperLogENT.paperId = objgs_OriginalPaperLogENS.paperId; //论文Id
objgs_OriginalPaperLogENT.logTypeId = objgs_OriginalPaperLogENS.logTypeId; //日志类型Id
objgs_OriginalPaperLogENT.logDescription = objgs_OriginalPaperLogENS.logDescription; //日志描述
objgs_OriginalPaperLogENT.updUser = objgs_OriginalPaperLogENS.updUser; //修改人
objgs_OriginalPaperLogENT.updDate = objgs_OriginalPaperLogENS.updDate; //修改日期
objgs_OriginalPaperLogENT.memo = objgs_OriginalPaperLogENS.memo; //备注
objgs_OriginalPaperLogENT.sfUpdFldSetStr = objgs_OriginalPaperLogENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_OriginalPaperLogENS:源对象
 * @param objgs_OriginalPaperLogENT:目标对象
*/
export  function gs_OriginalPaperLog_GetObjFromJsonObj(objgs_OriginalPaperLogENS: clsgs_OriginalPaperLogEN): clsgs_OriginalPaperLogEN 
{
 const objgs_OriginalPaperLogENT: clsgs_OriginalPaperLogEN = new clsgs_OriginalPaperLogEN();
ObjectAssign(objgs_OriginalPaperLogENT, objgs_OriginalPaperLogENS);
 return objgs_OriginalPaperLogENT;
}