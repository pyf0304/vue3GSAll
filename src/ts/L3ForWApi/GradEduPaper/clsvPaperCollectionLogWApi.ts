
 /**
 * 类名:clsvPaperCollectionLogWApi
 * 表名:vPaperCollectionLog(01120569)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:47
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
 * v论文收藏(vPaperCollectionLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvPaperCollectionLogEN } from "@/ts/L0Entity/GradEduPaper/clsvPaperCollectionLogEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vPaperCollectionLog_Controller = "vPaperCollectionLogApi";
 export const vPaperCollectionLog_ConstructorName = "vPaperCollectionLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPaperCollectionLogId:关键字
 * @returns 对象
 **/
export  async function vPaperCollectionLog_GetObjByPaperCollectionLogIdAsync(lngPaperCollectionLogId: number): Promise<clsvPaperCollectionLogEN|null>  
{
const strThisFuncName = "GetObjByPaperCollectionLogIdAsync";

if (lngPaperCollectionLogId == 0)
{
  const strMsg = Format("参数:[lngPaperCollectionLogId]不能为空!(In clsvPaperCollectionLogWApi.GetObjByPaperCollectionLogIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByPaperCollectionLogId";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperCollectionLogId,
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
const objvPaperCollectionLog = vPaperCollectionLog_GetObjFromJsonObj(returnObj);
return objvPaperCollectionLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPaperCollectionLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByPaperCollectionLogIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByPaperCollectionLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vPaperCollectionLog_SortFunDefa(a:clsvPaperCollectionLogEN , b:clsvPaperCollectionLogEN): number 
{
return a.paperCollectionLogId-b.paperCollectionLogId;
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
export  function vPaperCollectionLog_SortFunDefa2Fld(a:clsvPaperCollectionLogEN , b:clsvPaperCollectionLogEN): number 
{
if (a.paperId == b.paperId) return a.updUser.localeCompare(b.updUser);
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
export  function vPaperCollectionLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvPaperCollectionLogEN.con_PaperCollectionLogId:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
return a.paperCollectionLogId-b.paperCollectionLogId;
}
case clsvPaperCollectionLogEN.con_PaperId:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsvPaperCollectionLogEN.con_UpdUser:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsvPaperCollectionLogEN.con_UpdDate:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvPaperCollectionLogEN.con_Meno:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (a.meno == null) return -1;
if (b.meno == null) return 1;
return a.meno.localeCompare(b.meno);
}
case clsvPaperCollectionLogEN.con_PaperTitle:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvPaperCollectionLogEN.con_Author:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (a.author == null) return -1;
if (b.author == null) return 1;
return a.author.localeCompare(b.author);
}
case clsvPaperCollectionLogEN.con_Keyword:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (a.keyword == null) return -1;
if (b.keyword == null) return 1;
return a.keyword.localeCompare(b.keyword);
}
case clsvPaperCollectionLogEN.con_BrowseNumber:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
return a.browseNumber-b.browseNumber;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperCollectionLog]中不存在!(in ${ vPaperCollectionLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvPaperCollectionLogEN.con_PaperCollectionLogId:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
return b.paperCollectionLogId-a.paperCollectionLogId;
}
case clsvPaperCollectionLogEN.con_PaperId:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsvPaperCollectionLogEN.con_UpdUser:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsvPaperCollectionLogEN.con_UpdDate:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvPaperCollectionLogEN.con_Meno:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (b.meno == null) return -1;
if (a.meno == null) return 1;
return b.meno.localeCompare(a.meno);
}
case clsvPaperCollectionLogEN.con_PaperTitle:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvPaperCollectionLogEN.con_Author:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (b.author == null) return -1;
if (a.author == null) return 1;
return b.author.localeCompare(a.author);
}
case clsvPaperCollectionLogEN.con_Keyword:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
if (b.keyword == null) return -1;
if (a.keyword == null) return 1;
return b.keyword.localeCompare(a.keyword);
}
case clsvPaperCollectionLogEN.con_BrowseNumber:
return (a: clsvPaperCollectionLogEN, b: clsvPaperCollectionLogEN) => {
return b.browseNumber-a.browseNumber;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperCollectionLog]中不存在!(in ${ vPaperCollectionLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function vPaperCollectionLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvPaperCollectionLogEN.con_PaperCollectionLogId:
return (obj: clsvPaperCollectionLogEN) => {
return obj.paperCollectionLogId === value;
}
case clsvPaperCollectionLogEN.con_PaperId:
return (obj: clsvPaperCollectionLogEN) => {
return obj.paperId === value;
}
case clsvPaperCollectionLogEN.con_UpdUser:
return (obj: clsvPaperCollectionLogEN) => {
return obj.updUser === value;
}
case clsvPaperCollectionLogEN.con_UpdDate:
return (obj: clsvPaperCollectionLogEN) => {
return obj.updDate === value;
}
case clsvPaperCollectionLogEN.con_Meno:
return (obj: clsvPaperCollectionLogEN) => {
return obj.meno === value;
}
case clsvPaperCollectionLogEN.con_PaperTitle:
return (obj: clsvPaperCollectionLogEN) => {
return obj.paperTitle === value;
}
case clsvPaperCollectionLogEN.con_Author:
return (obj: clsvPaperCollectionLogEN) => {
return obj.author === value;
}
case clsvPaperCollectionLogEN.con_Keyword:
return (obj: clsvPaperCollectionLogEN) => {
return obj.keyword === value;
}
case clsvPaperCollectionLogEN.con_BrowseNumber:
return (obj: clsvPaperCollectionLogEN) => {
return obj.browseNumber === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperCollectionLog]中不存在!(in ${ vPaperCollectionLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vPaperCollectionLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vPaperCollectionLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
export  async function vPaperCollectionLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
export  async function vPaperCollectionLog_GetFirstObjAsync(strWhereCond: string): Promise<clsvPaperCollectionLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

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
const objvPaperCollectionLog = vPaperCollectionLog_GetObjFromJsonObj(returnObj);
return objvPaperCollectionLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
export  async function vPaperCollectionLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvPaperCollectionLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
 * @param arrPaperCollectionLogId:关键字列表
 * @returns 对象列表
 **/
export  async function vPaperCollectionLog_GetObjLstByPaperCollectionLogIdLstAsync(arrPaperCollectionLogId: Array<string>): Promise<Array<clsvPaperCollectionLogEN>>  
{
const strThisFuncName = "GetObjLstByPaperCollectionLogIdLstAsync";
const strAction = "GetObjLstByPaperCollectionLogIdLst";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperCollectionLogId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPaperCollectionLogIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vPaperCollectionLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvPaperCollectionLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
export  async function vPaperCollectionLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvPaperCollectionLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
export  async function vPaperCollectionLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvPaperCollectionLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvPaperCollectionLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCollectionLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
export  async function vPaperCollectionLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
 * @param lngPaperCollectionLogId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vPaperCollectionLog_IsExistAsync(lngPaperCollectionLogId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperCollectionLogId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
export  async function vPaperCollectionLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vPaperCollectionLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCollectionLog_ConstructorName, strThisFuncName);
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vPaperCollectionLog_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vPaperCollectionLog_GetJSONStrByObj (pobjvPaperCollectionLogEN: clsvPaperCollectionLogEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvPaperCollectionLogEN);
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
export  function vPaperCollectionLog_GetObjLstByJSONStr (strJSON: string): Array<clsvPaperCollectionLogEN>
{
let arrvPaperCollectionLogObjLst = new Array<clsvPaperCollectionLogEN>();
if (strJSON === "")
{
return arrvPaperCollectionLogObjLst;
}
try
{
arrvPaperCollectionLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvPaperCollectionLogObjLst;
}
return arrvPaperCollectionLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPaperCollectionLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vPaperCollectionLog_GetObjLstByJSONObjLst (arrvPaperCollectionLogObjLstS: Array<clsvPaperCollectionLogEN>): Array<clsvPaperCollectionLogEN>
{
const arrvPaperCollectionLogObjLst = new Array<clsvPaperCollectionLogEN>();
for (const objInFor of arrvPaperCollectionLogObjLstS) {
const obj1 = vPaperCollectionLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvPaperCollectionLogObjLst.push(obj1);
}
return arrvPaperCollectionLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vPaperCollectionLog_GetObjByJSONStr (strJSON: string): clsvPaperCollectionLogEN
{
let pobjvPaperCollectionLogEN = new clsvPaperCollectionLogEN();
if (strJSON === "")
{
return pobjvPaperCollectionLogEN;
}
try
{
pobjvPaperCollectionLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvPaperCollectionLogEN;
}
return pobjvPaperCollectionLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vPaperCollectionLog_GetCombineCondition(objvPaperCollectionLogCond: clsvPaperCollectionLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvPaperCollectionLogCond.dicFldComparisonOp, clsvPaperCollectionLogEN.con_PaperCollectionLogId) == true)
{
const strComparisonOpPaperCollectionLogId:string = objvPaperCollectionLogCond.dicFldComparisonOp[clsvPaperCollectionLogEN.con_PaperCollectionLogId];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCollectionLogEN.con_PaperCollectionLogId, objvPaperCollectionLogCond.paperCollectionLogId, strComparisonOpPaperCollectionLogId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCollectionLogCond.dicFldComparisonOp, clsvPaperCollectionLogEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvPaperCollectionLogCond.dicFldComparisonOp[clsvPaperCollectionLogEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCollectionLogEN.con_PaperId, objvPaperCollectionLogCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCollectionLogCond.dicFldComparisonOp, clsvPaperCollectionLogEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvPaperCollectionLogCond.dicFldComparisonOp[clsvPaperCollectionLogEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCollectionLogEN.con_UpdUser, objvPaperCollectionLogCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCollectionLogCond.dicFldComparisonOp, clsvPaperCollectionLogEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvPaperCollectionLogCond.dicFldComparisonOp[clsvPaperCollectionLogEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCollectionLogEN.con_UpdDate, objvPaperCollectionLogCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCollectionLogCond.dicFldComparisonOp, clsvPaperCollectionLogEN.con_Meno) == true)
{
const strComparisonOpMeno:string = objvPaperCollectionLogCond.dicFldComparisonOp[clsvPaperCollectionLogEN.con_Meno];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCollectionLogEN.con_Meno, objvPaperCollectionLogCond.meno, strComparisonOpMeno);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCollectionLogCond.dicFldComparisonOp, clsvPaperCollectionLogEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvPaperCollectionLogCond.dicFldComparisonOp[clsvPaperCollectionLogEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCollectionLogEN.con_PaperTitle, objvPaperCollectionLogCond.paperTitle, strComparisonOpPaperTitle);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCollectionLogCond.dicFldComparisonOp, clsvPaperCollectionLogEN.con_Author) == true)
{
const strComparisonOpAuthor:string = objvPaperCollectionLogCond.dicFldComparisonOp[clsvPaperCollectionLogEN.con_Author];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCollectionLogEN.con_Author, objvPaperCollectionLogCond.author, strComparisonOpAuthor);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCollectionLogCond.dicFldComparisonOp, clsvPaperCollectionLogEN.con_Keyword) == true)
{
const strComparisonOpKeyword:string = objvPaperCollectionLogCond.dicFldComparisonOp[clsvPaperCollectionLogEN.con_Keyword];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCollectionLogEN.con_Keyword, objvPaperCollectionLogCond.keyword, strComparisonOpKeyword);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCollectionLogCond.dicFldComparisonOp, clsvPaperCollectionLogEN.con_BrowseNumber) == true)
{
const strComparisonOpBrowseNumber:string = objvPaperCollectionLogCond.dicFldComparisonOp[clsvPaperCollectionLogEN.con_BrowseNumber];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCollectionLogEN.con_BrowseNumber, objvPaperCollectionLogCond.browseNumber, strComparisonOpBrowseNumber);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvPaperCollectionLogENS:源对象
 * @param objvPaperCollectionLogENT:目标对象
*/
export  function vPaperCollectionLog_CopyObjTo(objvPaperCollectionLogENS: clsvPaperCollectionLogEN , objvPaperCollectionLogENT: clsvPaperCollectionLogEN ): void 
{
objvPaperCollectionLogENT.paperCollectionLogId = objvPaperCollectionLogENS.paperCollectionLogId; //论文收藏Id
objvPaperCollectionLogENT.paperId = objvPaperCollectionLogENS.paperId; //论文Id
objvPaperCollectionLogENT.updUser = objvPaperCollectionLogENS.updUser; //修改人
objvPaperCollectionLogENT.updDate = objvPaperCollectionLogENS.updDate; //修改日期
objvPaperCollectionLogENT.meno = objvPaperCollectionLogENS.meno; //备注
objvPaperCollectionLogENT.paperTitle = objvPaperCollectionLogENS.paperTitle; //论文标题
objvPaperCollectionLogENT.author = objvPaperCollectionLogENS.author; //作者
objvPaperCollectionLogENT.keyword = objvPaperCollectionLogENS.keyword; //关键字
objvPaperCollectionLogENT.browseNumber = objvPaperCollectionLogENS.browseNumber; //浏览量
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPaperCollectionLogENS:源对象
 * @param objvPaperCollectionLogENT:目标对象
*/
export  function vPaperCollectionLog_GetObjFromJsonObj(objvPaperCollectionLogENS: clsvPaperCollectionLogEN): clsvPaperCollectionLogEN 
{
 const objvPaperCollectionLogENT: clsvPaperCollectionLogEN = new clsvPaperCollectionLogEN();
ObjectAssign(objvPaperCollectionLogENT, objvPaperCollectionLogENS);
 return objvPaperCollectionLogENT;
}