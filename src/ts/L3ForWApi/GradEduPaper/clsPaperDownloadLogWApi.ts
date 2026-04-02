
 /**
 * 类名:clsPaperDownloadLogWApi
 * 表名:PaperDownloadLog(01120571)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:35
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
 * 论文下载记录(PaperDownloadLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsPaperDownloadLogEN } from "@/ts/L0Entity/GradEduPaper/clsPaperDownloadLogEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const paperDownloadLog_Controller = "PaperDownloadLogApi";
 export const paperDownloadLog_ConstructorName = "paperDownloadLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPaperDownloadId:关键字
 * @returns 对象
 **/
export  async function PaperDownloadLog_GetObjByPaperDownloadIdAsync(lngPaperDownloadId: number): Promise<clsPaperDownloadLogEN|null>  
{
const strThisFuncName = "GetObjByPaperDownloadIdAsync";

if (lngPaperDownloadId == 0)
{
  const strMsg = Format("参数:[lngPaperDownloadId]不能为空!(In clsPaperDownloadLogWApi.GetObjByPaperDownloadIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByPaperDownloadId";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperDownloadId,
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
const objPaperDownloadLog = PaperDownloadLog_GetObjFromJsonObj(returnObj);
return objPaperDownloadLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPaperDownloadIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByPaperDownloadIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByPaperDownloadIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function PaperDownloadLog_SortFunDefa(a:clsPaperDownloadLogEN , b:clsPaperDownloadLogEN): number 
{
return a.paperDownloadId-b.paperDownloadId;
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
export  function PaperDownloadLog_SortFunDefa2Fld(a:clsPaperDownloadLogEN , b:clsPaperDownloadLogEN): number 
{
if (a.downloadFile == b.downloadFile) return a.downloadLink.localeCompare(b.downloadLink);
else return a.downloadFile.localeCompare(b.downloadFile);
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
export  function PaperDownloadLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsPaperDownloadLogEN.con_PaperDownloadId:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
return a.paperDownloadId-b.paperDownloadId;
}
case clsPaperDownloadLogEN.con_DownloadFile:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (a.downloadFile == null) return -1;
if (b.downloadFile == null) return 1;
return a.downloadFile.localeCompare(b.downloadFile);
}
case clsPaperDownloadLogEN.con_DownloadLink:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (a.downloadLink == null) return -1;
if (b.downloadLink == null) return 1;
return a.downloadLink.localeCompare(b.downloadLink);
}
case clsPaperDownloadLogEN.con_PaperId:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsPaperDownloadLogEN.con_UpdUser:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsPaperDownloadLogEN.con_UpdDate:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsPaperDownloadLogEN.con_Memo:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[PaperDownloadLog]中不存在!(in ${ paperDownloadLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsPaperDownloadLogEN.con_PaperDownloadId:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
return b.paperDownloadId-a.paperDownloadId;
}
case clsPaperDownloadLogEN.con_DownloadFile:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (b.downloadFile == null) return -1;
if (a.downloadFile == null) return 1;
return b.downloadFile.localeCompare(a.downloadFile);
}
case clsPaperDownloadLogEN.con_DownloadLink:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (b.downloadLink == null) return -1;
if (a.downloadLink == null) return 1;
return b.downloadLink.localeCompare(a.downloadLink);
}
case clsPaperDownloadLogEN.con_PaperId:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsPaperDownloadLogEN.con_UpdUser:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsPaperDownloadLogEN.con_UpdDate:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsPaperDownloadLogEN.con_Memo:
return (a: clsPaperDownloadLogEN, b: clsPaperDownloadLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[PaperDownloadLog]中不存在!(in ${ paperDownloadLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function PaperDownloadLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsPaperDownloadLogEN.con_PaperDownloadId:
return (obj: clsPaperDownloadLogEN) => {
return obj.paperDownloadId === value;
}
case clsPaperDownloadLogEN.con_DownloadFile:
return (obj: clsPaperDownloadLogEN) => {
return obj.downloadFile === value;
}
case clsPaperDownloadLogEN.con_DownloadLink:
return (obj: clsPaperDownloadLogEN) => {
return obj.downloadLink === value;
}
case clsPaperDownloadLogEN.con_PaperId:
return (obj: clsPaperDownloadLogEN) => {
return obj.paperId === value;
}
case clsPaperDownloadLogEN.con_UpdUser:
return (obj: clsPaperDownloadLogEN) => {
return obj.updUser === value;
}
case clsPaperDownloadLogEN.con_UpdDate:
return (obj: clsPaperDownloadLogEN) => {
return obj.updDate === value;
}
case clsPaperDownloadLogEN.con_Memo:
return (obj: clsPaperDownloadLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[PaperDownloadLog]中不存在!(in ${ paperDownloadLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[PaperDownloadLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function PaperDownloadLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  async function PaperDownloadLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  async function PaperDownloadLog_GetFirstObjAsync(strWhereCond: string): Promise<clsPaperDownloadLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const objPaperDownloadLog = PaperDownloadLog_GetObjFromJsonObj(returnObj);
return objPaperDownloadLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  async function PaperDownloadLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsPaperDownloadLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperDownloadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
 * @param arrPaperDownloadId:关键字列表
 * @returns 对象列表
 **/
export  async function PaperDownloadLog_GetObjLstByPaperDownloadIdLstAsync(arrPaperDownloadId: Array<string>): Promise<Array<clsPaperDownloadLogEN>>  
{
const strThisFuncName = "GetObjLstByPaperDownloadIdLstAsync";
const strAction = "GetObjLstByPaperDownloadIdLst";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperDownloadId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperDownloadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPaperDownloadIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function PaperDownloadLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsPaperDownloadLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperDownloadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  async function PaperDownloadLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsPaperDownloadLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperDownloadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  async function PaperDownloadLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsPaperDownloadLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsPaperDownloadLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperDownloadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
 * @param lngPaperDownloadId:关键字
 * @returns 获取删除的结果
 **/
export  async function PaperDownloadLog_DelRecordAsync(lngPaperDownloadId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngPaperDownloadId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
 * @param arrPaperDownloadId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function PaperDownloadLog_DelPaperDownloadLogsAsync(arrPaperDownloadId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelPaperDownloadLogsAsync";
const strAction = "DelPaperDownloadLogs";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperDownloadId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  async function PaperDownloadLog_DelPaperDownloadLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelPaperDownloadLogsByCondAsync";
const strAction = "DelPaperDownloadLogsByCond";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
 * @param objPaperDownloadLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function PaperDownloadLog_AddNewRecordAsync(objPaperDownloadLogEN: clsPaperDownloadLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objPaperDownloadLogEN);
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperDownloadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
 * @param objPaperDownloadLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function PaperDownloadLog_AddNewRecordWithReturnKeyAsync(objPaperDownloadLogEN: clsPaperDownloadLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperDownloadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
 * @param objPaperDownloadLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function PaperDownloadLog_UpdateRecordAsync(objPaperDownloadLogEN: clsPaperDownloadLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objPaperDownloadLogEN.sfUpdFldSetStr === undefined || objPaperDownloadLogEN.sfUpdFldSetStr === null || objPaperDownloadLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objPaperDownloadLogEN.paperDownloadId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperDownloadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
 * @param objPaperDownloadLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function PaperDownloadLog_UpdateWithConditionAsync(objPaperDownloadLogEN: clsPaperDownloadLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objPaperDownloadLogEN.sfUpdFldSetStr === undefined || objPaperDownloadLogEN.sfUpdFldSetStr === null || objPaperDownloadLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objPaperDownloadLogEN.paperDownloadId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);
objPaperDownloadLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperDownloadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  async function PaperDownloadLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
 * @param lngPaperDownloadId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function PaperDownloadLog_IsExistAsync(lngPaperDownloadId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperDownloadId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  async function PaperDownloadLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  async function PaperDownloadLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(paperDownloadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperDownloadLog_ConstructorName, strThisFuncName);
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
export  function PaperDownloadLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function PaperDownloadLog_CheckPropertyNew(pobjPaperDownloadLogEN: clsPaperDownloadLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjPaperDownloadLogEN.downloadFile) == false && GetStrLen(pobjPaperDownloadLogEN.downloadFile) > 500)
{
 throw new Error("(errid:Watl000413)字段[DownloadFile(downloadFile)]的长度不能超过500(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.downloadFile)(clsPaperDownloadLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.downloadLink) == false && GetStrLen(pobjPaperDownloadLogEN.downloadLink) > 500)
{
 throw new Error("(errid:Watl000413)字段[DownloadLink(downloadLink)]的长度不能超过500(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.downloadLink)(clsPaperDownloadLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.paperId) == false && GetStrLen(pobjPaperDownloadLogEN.paperId) > 8)
{
 throw new Error("(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.paperId)(clsPaperDownloadLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.updUser) == false && GetStrLen(pobjPaperDownloadLogEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.updUser)(clsPaperDownloadLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.updDate) == false && GetStrLen(pobjPaperDownloadLogEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.updDate)(clsPaperDownloadLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.memo) == false && GetStrLen(pobjPaperDownloadLogEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.memo)(clsPaperDownloadLogBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjPaperDownloadLogEN.paperDownloadId && undefined !== pobjPaperDownloadLogEN.paperDownloadId && tzDataType.isNumber(pobjPaperDownloadLogEN.paperDownloadId) === false)
{
 throw new Error("(errid:Watl000414)字段[PaperDownloadId(paperDownloadId)]的值:[$(pobjPaperDownloadLogEN.paperDownloadId)], 非法,应该为数值型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.downloadFile) == false && undefined !== pobjPaperDownloadLogEN.downloadFile && tzDataType.isString(pobjPaperDownloadLogEN.downloadFile) === false)
{
 throw new Error("(errid:Watl000414)字段[DownloadFile(downloadFile)]的值:[$(pobjPaperDownloadLogEN.downloadFile)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.downloadLink) == false && undefined !== pobjPaperDownloadLogEN.downloadLink && tzDataType.isString(pobjPaperDownloadLogEN.downloadLink) === false)
{
 throw new Error("(errid:Watl000414)字段[DownloadLink(downloadLink)]的值:[$(pobjPaperDownloadLogEN.downloadLink)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.paperId) == false && undefined !== pobjPaperDownloadLogEN.paperId && tzDataType.isString(pobjPaperDownloadLogEN.paperId) === false)
{
 throw new Error("(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjPaperDownloadLogEN.paperId)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.updUser) == false && undefined !== pobjPaperDownloadLogEN.updUser && tzDataType.isString(pobjPaperDownloadLogEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjPaperDownloadLogEN.updUser)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.updDate) == false && undefined !== pobjPaperDownloadLogEN.updDate && tzDataType.isString(pobjPaperDownloadLogEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjPaperDownloadLogEN.updDate)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.memo) == false && undefined !== pobjPaperDownloadLogEN.memo && tzDataType.isString(pobjPaperDownloadLogEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjPaperDownloadLogEN.memo)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function PaperDownloadLog_CheckProperty4Update(pobjPaperDownloadLogEN: clsPaperDownloadLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjPaperDownloadLogEN.downloadFile) == false && GetStrLen(pobjPaperDownloadLogEN.downloadFile) > 500)
{
 throw new Error("(errid:Watl000416)字段[DownloadFile(downloadFile)]的长度不能超过500(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.downloadFile)(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.downloadLink) == false && GetStrLen(pobjPaperDownloadLogEN.downloadLink) > 500)
{
 throw new Error("(errid:Watl000416)字段[DownloadLink(downloadLink)]的长度不能超过500(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.downloadLink)(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.paperId) == false && GetStrLen(pobjPaperDownloadLogEN.paperId) > 8)
{
 throw new Error("(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.paperId)(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.updUser) == false && GetStrLen(pobjPaperDownloadLogEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.updUser)(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.updDate) == false && GetStrLen(pobjPaperDownloadLogEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.updDate)(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.memo) == false && GetStrLen(pobjPaperDownloadLogEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文下载记录(PaperDownloadLog))!值:$(pobjPaperDownloadLogEN.memo)(clsPaperDownloadLogBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjPaperDownloadLogEN.paperDownloadId && undefined !== pobjPaperDownloadLogEN.paperDownloadId && tzDataType.isNumber(pobjPaperDownloadLogEN.paperDownloadId) === false)
{
 throw new Error("(errid:Watl000417)字段[PaperDownloadId(paperDownloadId)]的值:[$(pobjPaperDownloadLogEN.paperDownloadId)], 非法,应该为数值型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.downloadFile) == false && undefined !== pobjPaperDownloadLogEN.downloadFile && tzDataType.isString(pobjPaperDownloadLogEN.downloadFile) === false)
{
 throw new Error("(errid:Watl000417)字段[DownloadFile(downloadFile)]的值:[$(pobjPaperDownloadLogEN.downloadFile)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.downloadLink) == false && undefined !== pobjPaperDownloadLogEN.downloadLink && tzDataType.isString(pobjPaperDownloadLogEN.downloadLink) === false)
{
 throw new Error("(errid:Watl000417)字段[DownloadLink(downloadLink)]的值:[$(pobjPaperDownloadLogEN.downloadLink)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.paperId) == false && undefined !== pobjPaperDownloadLogEN.paperId && tzDataType.isString(pobjPaperDownloadLogEN.paperId) === false)
{
 throw new Error("(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjPaperDownloadLogEN.paperId)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.updUser) == false && undefined !== pobjPaperDownloadLogEN.updUser && tzDataType.isString(pobjPaperDownloadLogEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjPaperDownloadLogEN.updUser)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.updDate) == false && undefined !== pobjPaperDownloadLogEN.updDate && tzDataType.isString(pobjPaperDownloadLogEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjPaperDownloadLogEN.updDate)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjPaperDownloadLogEN.memo) == false && undefined !== pobjPaperDownloadLogEN.memo && tzDataType.isString(pobjPaperDownloadLogEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjPaperDownloadLogEN.memo)], 非法,应该为字符型(In 论文下载记录(PaperDownloadLog))!(clsPaperDownloadLogBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjPaperDownloadLogEN.paperDownloadId 
 || pobjPaperDownloadLogEN.paperDownloadId != null && pobjPaperDownloadLogEN.paperDownloadId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[PaperDownloadId]不能为空(In 论文下载记录)!(clsPaperDownloadLogBL:CheckProperty4Update)");
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
export  function PaperDownloadLog_GetJSONStrByObj (pobjPaperDownloadLogEN: clsPaperDownloadLogEN): string
{
pobjPaperDownloadLogEN.sfUpdFldSetStr = pobjPaperDownloadLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjPaperDownloadLogEN);
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
export  function PaperDownloadLog_GetObjLstByJSONStr (strJSON: string): Array<clsPaperDownloadLogEN>
{
let arrPaperDownloadLogObjLst = new Array<clsPaperDownloadLogEN>();
if (strJSON === "")
{
return arrPaperDownloadLogObjLst;
}
try
{
arrPaperDownloadLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrPaperDownloadLogObjLst;
}
return arrPaperDownloadLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPaperDownloadLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function PaperDownloadLog_GetObjLstByJSONObjLst (arrPaperDownloadLogObjLstS: Array<clsPaperDownloadLogEN>): Array<clsPaperDownloadLogEN>
{
const arrPaperDownloadLogObjLst = new Array<clsPaperDownloadLogEN>();
for (const objInFor of arrPaperDownloadLogObjLstS) {
const obj1 = PaperDownloadLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrPaperDownloadLogObjLst.push(obj1);
}
return arrPaperDownloadLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function PaperDownloadLog_GetObjByJSONStr (strJSON: string): clsPaperDownloadLogEN
{
let pobjPaperDownloadLogEN = new clsPaperDownloadLogEN();
if (strJSON === "")
{
return pobjPaperDownloadLogEN;
}
try
{
pobjPaperDownloadLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjPaperDownloadLogEN;
}
return pobjPaperDownloadLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function PaperDownloadLog_GetCombineCondition(objPaperDownloadLogCond: clsPaperDownloadLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objPaperDownloadLogCond.dicFldComparisonOp, clsPaperDownloadLogEN.con_PaperDownloadId) == true)
{
const strComparisonOpPaperDownloadId:string = objPaperDownloadLogCond.dicFldComparisonOp[clsPaperDownloadLogEN.con_PaperDownloadId];
strWhereCond += Format(" And {0} {2} {1}", clsPaperDownloadLogEN.con_PaperDownloadId, objPaperDownloadLogCond.paperDownloadId, strComparisonOpPaperDownloadId);
}
if (Object.prototype.hasOwnProperty.call(objPaperDownloadLogCond.dicFldComparisonOp, clsPaperDownloadLogEN.con_DownloadFile) == true)
{
const strComparisonOpDownloadFile:string = objPaperDownloadLogCond.dicFldComparisonOp[clsPaperDownloadLogEN.con_DownloadFile];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperDownloadLogEN.con_DownloadFile, objPaperDownloadLogCond.downloadFile, strComparisonOpDownloadFile);
}
if (Object.prototype.hasOwnProperty.call(objPaperDownloadLogCond.dicFldComparisonOp, clsPaperDownloadLogEN.con_DownloadLink) == true)
{
const strComparisonOpDownloadLink:string = objPaperDownloadLogCond.dicFldComparisonOp[clsPaperDownloadLogEN.con_DownloadLink];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperDownloadLogEN.con_DownloadLink, objPaperDownloadLogCond.downloadLink, strComparisonOpDownloadLink);
}
if (Object.prototype.hasOwnProperty.call(objPaperDownloadLogCond.dicFldComparisonOp, clsPaperDownloadLogEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objPaperDownloadLogCond.dicFldComparisonOp[clsPaperDownloadLogEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperDownloadLogEN.con_PaperId, objPaperDownloadLogCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objPaperDownloadLogCond.dicFldComparisonOp, clsPaperDownloadLogEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objPaperDownloadLogCond.dicFldComparisonOp[clsPaperDownloadLogEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperDownloadLogEN.con_UpdUser, objPaperDownloadLogCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objPaperDownloadLogCond.dicFldComparisonOp, clsPaperDownloadLogEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objPaperDownloadLogCond.dicFldComparisonOp[clsPaperDownloadLogEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperDownloadLogEN.con_UpdDate, objPaperDownloadLogCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objPaperDownloadLogCond.dicFldComparisonOp, clsPaperDownloadLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objPaperDownloadLogCond.dicFldComparisonOp[clsPaperDownloadLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperDownloadLogEN.con_Memo, objPaperDownloadLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--PaperDownloadLog(论文下载记录),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngPaperDownloadId: PaperDownloadId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function PaperDownloadLog_GetUniCondStr(objPaperDownloadLogEN: clsPaperDownloadLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PaperDownloadId = '{0}'", objPaperDownloadLogEN.paperDownloadId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--PaperDownloadLog(论文下载记录),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngPaperDownloadId: PaperDownloadId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function PaperDownloadLog_GetUniCondStr4Update(objPaperDownloadLogEN: clsPaperDownloadLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and PaperDownloadId <> '{0}'", objPaperDownloadLogEN.paperDownloadId);
 strWhereCond +=  Format(" and PaperDownloadId = '{0}'", objPaperDownloadLogEN.paperDownloadId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPaperDownloadLogENS:源对象
 * @param objPaperDownloadLogENT:目标对象
*/
export  function PaperDownloadLog_CopyObjTo(objPaperDownloadLogENS: clsPaperDownloadLogEN , objPaperDownloadLogENT: clsPaperDownloadLogEN ): void 
{
objPaperDownloadLogENT.paperDownloadId = objPaperDownloadLogENS.paperDownloadId; //PaperDownloadId
objPaperDownloadLogENT.downloadFile = objPaperDownloadLogENS.downloadFile; //DownloadFile
objPaperDownloadLogENT.downloadLink = objPaperDownloadLogENS.downloadLink; //DownloadLink
objPaperDownloadLogENT.paperId = objPaperDownloadLogENS.paperId; //论文Id
objPaperDownloadLogENT.updUser = objPaperDownloadLogENS.updUser; //修改人
objPaperDownloadLogENT.updDate = objPaperDownloadLogENS.updDate; //修改日期
objPaperDownloadLogENT.memo = objPaperDownloadLogENS.memo; //备注
objPaperDownloadLogENT.sfUpdFldSetStr = objPaperDownloadLogENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPaperDownloadLogENS:源对象
 * @param objPaperDownloadLogENT:目标对象
*/
export  function PaperDownloadLog_GetObjFromJsonObj(objPaperDownloadLogENS: clsPaperDownloadLogEN): clsPaperDownloadLogEN 
{
 const objPaperDownloadLogENT: clsPaperDownloadLogEN = new clsPaperDownloadLogEN();
ObjectAssign(objPaperDownloadLogENT, objPaperDownloadLogENS);
 return objPaperDownloadLogENT;
}