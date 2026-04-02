
 /**
 * 类名:clsFeedBackWApi
 * 表名:FeedBack(01120279)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:14
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 反馈意见(FeedBack)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsFeedBackEN } from "@/ts/L0Entity/NewsAnn/clsFeedBackEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const feedBack_Controller = "FeedBackApi";
 export const feedBack_ConstructorName = "feedBack";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngFeedBackId:关键字
 * @returns 对象
 **/
export  async function FeedBack_GetObjByFeedBackIdAsync(lngFeedBackId: number): Promise<clsFeedBackEN|null>  
{
const strThisFuncName = "GetObjByFeedBackIdAsync";

if (lngFeedBackId == 0)
{
  const strMsg = Format("参数:[lngFeedBackId]不能为空!(In clsFeedBackWApi.GetObjByFeedBackIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByFeedBackId";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngFeedBackId,
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
const objFeedBack = FeedBack_GetObjFromJsonObj(returnObj);
return objFeedBack;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByFeedBackIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByFeedBackIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByFeedBackIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function FeedBack_SortFunDefa(a:clsFeedBackEN , b:clsFeedBackEN): number 
{
return a.feedBackId-b.feedBackId;
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
export  function FeedBack_SortFunDefa2Fld(a:clsFeedBackEN , b:clsFeedBackEN): number 
{
if (a.nickName == b.nickName) return a.feedBackNumber.localeCompare(b.feedBackNumber);
else return a.nickName.localeCompare(b.nickName);
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
export  function FeedBack_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsFeedBackEN.con_FeedBackId:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
return a.feedBackId-b.feedBackId;
}
case clsFeedBackEN.con_NickName:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
return a.nickName.localeCompare(b.nickName);
}
case clsFeedBackEN.con_FeedBackNumber:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (a.feedBackNumber == null) return -1;
if (b.feedBackNumber == null) return 1;
return a.feedBackNumber.localeCompare(b.feedBackNumber);
}
case clsFeedBackEN.con_FeedBackContent:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (a.feedBackContent == null) return -1;
if (b.feedBackContent == null) return 1;
return a.feedBackContent.localeCompare(b.feedBackContent);
}
case clsFeedBackEN.con_Email:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (a.email == null) return -1;
if (b.email == null) return 1;
return a.email.localeCompare(b.email);
}
case clsFeedBackEN.con_Telephone:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (a.telephone == null) return -1;
if (b.telephone == null) return 1;
return a.telephone.localeCompare(b.telephone);
}
case clsFeedBackEN.con_UpdDate:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsFeedBackEN.con_Memo:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsFeedBackEN.con_UpdUser:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
return a.updUser.localeCompare(b.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FeedBack]中不存在!(in ${ feedBack_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsFeedBackEN.con_FeedBackId:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
return b.feedBackId-a.feedBackId;
}
case clsFeedBackEN.con_NickName:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
return b.nickName.localeCompare(a.nickName);
}
case clsFeedBackEN.con_FeedBackNumber:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (b.feedBackNumber == null) return -1;
if (a.feedBackNumber == null) return 1;
return b.feedBackNumber.localeCompare(a.feedBackNumber);
}
case clsFeedBackEN.con_FeedBackContent:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (b.feedBackContent == null) return -1;
if (a.feedBackContent == null) return 1;
return b.feedBackContent.localeCompare(a.feedBackContent);
}
case clsFeedBackEN.con_Email:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (b.email == null) return -1;
if (a.email == null) return 1;
return b.email.localeCompare(a.email);
}
case clsFeedBackEN.con_Telephone:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (b.telephone == null) return -1;
if (a.telephone == null) return 1;
return b.telephone.localeCompare(a.telephone);
}
case clsFeedBackEN.con_UpdDate:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsFeedBackEN.con_Memo:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsFeedBackEN.con_UpdUser:
return (a: clsFeedBackEN, b: clsFeedBackEN) => {
return b.updUser.localeCompare(a.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FeedBack]中不存在!(in ${ feedBack_ConstructorName}.${ strThisFuncName})`;
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
export  async function FeedBack_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsFeedBackEN.con_FeedBackId:
return (obj: clsFeedBackEN) => {
return obj.feedBackId === value;
}
case clsFeedBackEN.con_NickName:
return (obj: clsFeedBackEN) => {
return obj.nickName === value;
}
case clsFeedBackEN.con_FeedBackNumber:
return (obj: clsFeedBackEN) => {
return obj.feedBackNumber === value;
}
case clsFeedBackEN.con_FeedBackContent:
return (obj: clsFeedBackEN) => {
return obj.feedBackContent === value;
}
case clsFeedBackEN.con_Email:
return (obj: clsFeedBackEN) => {
return obj.email === value;
}
case clsFeedBackEN.con_Telephone:
return (obj: clsFeedBackEN) => {
return obj.telephone === value;
}
case clsFeedBackEN.con_UpdDate:
return (obj: clsFeedBackEN) => {
return obj.updDate === value;
}
case clsFeedBackEN.con_Memo:
return (obj: clsFeedBackEN) => {
return obj.memo === value;
}
case clsFeedBackEN.con_UpdUser:
return (obj: clsFeedBackEN) => {
return obj.updUser === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FeedBack]中不存在!(in ${ feedBack_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[FeedBack__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function FeedBack_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  async function FeedBack_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  async function FeedBack_GetFirstObjAsync(strWhereCond: string): Promise<clsFeedBackEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const objFeedBack = FeedBack_GetObjFromJsonObj(returnObj);
return objFeedBack;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  async function FeedBack_GetObjLstAsync(strWhereCond: string): Promise<Array<clsFeedBackEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", feedBack_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FeedBack_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
 * @param arrFeedBackId:关键字列表
 * @returns 对象列表
 **/
export  async function FeedBack_GetObjLstByFeedBackIdLstAsync(arrFeedBackId: Array<string>): Promise<Array<clsFeedBackEN>>  
{
const strThisFuncName = "GetObjLstByFeedBackIdLstAsync";
const strAction = "GetObjLstByFeedBackIdLst";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrFeedBackId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", feedBack_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FeedBack_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByFeedBackIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function FeedBack_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsFeedBackEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", feedBack_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FeedBack_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  async function FeedBack_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsFeedBackEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", feedBack_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FeedBack_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  async function FeedBack_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsFeedBackEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsFeedBackEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", feedBack_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FeedBack_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
 * @param lngFeedBackId:关键字
 * @returns 获取删除的结果
 **/
export  async function FeedBack_DelRecordAsync(lngFeedBackId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(feedBack_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngFeedBackId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
 * @param arrFeedBackId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function FeedBack_DelFeedBacksAsync(arrFeedBackId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelFeedBacksAsync";
const strAction = "DelFeedBacks";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrFeedBackId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  async function FeedBack_DelFeedBacksByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelFeedBacksByCondAsync";
const strAction = "DelFeedBacksByCond";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
 * @param objFeedBackEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function FeedBack_AddNewRecordAsync(objFeedBackEN: clsFeedBackEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objFeedBackEN);
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFeedBackEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
 * @param objFeedBackEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function FeedBack_AddNewRecordWithReturnKeyAsync(objFeedBackEN: clsFeedBackEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFeedBackEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
 * @param objFeedBackEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function FeedBack_UpdateRecordAsync(objFeedBackEN: clsFeedBackEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objFeedBackEN.sfUpdFldSetStr === undefined || objFeedBackEN.sfUpdFldSetStr === null || objFeedBackEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFeedBackEN.feedBackId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFeedBackEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
 * @param objFeedBackEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function FeedBack_UpdateWithConditionAsync(objFeedBackEN: clsFeedBackEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objFeedBackEN.sfUpdFldSetStr === undefined || objFeedBackEN.sfUpdFldSetStr === null || objFeedBackEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFeedBackEN.feedBackId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);
objFeedBackEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFeedBackEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  async function FeedBack_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
 * @param lngFeedBackId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function FeedBack_IsExistAsync(lngFeedBackId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngFeedBackId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  async function FeedBack_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  async function FeedBack_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(feedBack_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, feedBack_ConstructorName, strThisFuncName);
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
export  function FeedBack_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function FeedBack_CheckPropertyNew(pobjFeedBackEN: clsFeedBackEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjFeedBackEN.nickName) === true )
{
 throw new Error("(errid:Watl000411)字段[昵称]不能为空(In 反馈意见)!(clsFeedBackBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjFeedBackEN.updUser) === true )
{
 throw new Error("(errid:Watl000411)字段[修改人]不能为空(In 反馈意见)!(clsFeedBackBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjFeedBackEN.nickName) == false && GetStrLen(pobjFeedBackEN.nickName) > 50)
{
 throw new Error("(errid:Watl000413)字段[昵称(nickName)]的长度不能超过50(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.nickName)(clsFeedBackBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjFeedBackEN.feedBackNumber) == false && GetStrLen(pobjFeedBackEN.feedBackNumber) > 50)
{
 throw new Error("(errid:Watl000413)字段[FeedBackNumber(feedBackNumber)]的长度不能超过50(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.feedBackNumber)(clsFeedBackBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjFeedBackEN.feedBackContent) == false && GetStrLen(pobjFeedBackEN.feedBackContent) > 1000)
{
 throw new Error("(errid:Watl000413)字段[FeedBackContent(feedBackContent)]的长度不能超过1000(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.feedBackContent)(clsFeedBackBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjFeedBackEN.email) == false && GetStrLen(pobjFeedBackEN.email) > 100)
{
 throw new Error("(errid:Watl000413)字段[电子邮箱(email)]的长度不能超过100(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.email)(clsFeedBackBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjFeedBackEN.telephone) == false && GetStrLen(pobjFeedBackEN.telephone) > 200)
{
 throw new Error("(errid:Watl000413)字段[Telephone(telephone)]的长度不能超过200(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.telephone)(clsFeedBackBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjFeedBackEN.updDate) == false && GetStrLen(pobjFeedBackEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.updDate)(clsFeedBackBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjFeedBackEN.memo) == false && GetStrLen(pobjFeedBackEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.memo)(clsFeedBackBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjFeedBackEN.updUser) == false && GetStrLen(pobjFeedBackEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.updUser)(clsFeedBackBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjFeedBackEN.feedBackId && undefined !== pobjFeedBackEN.feedBackId && tzDataType.isNumber(pobjFeedBackEN.feedBackId) === false)
{
 throw new Error("(errid:Watl000414)字段[FeedBackId(feedBackId)]的值:[$(pobjFeedBackEN.feedBackId)], 非法,应该为数值型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjFeedBackEN.nickName) == false && undefined !== pobjFeedBackEN.nickName && tzDataType.isString(pobjFeedBackEN.nickName) === false)
{
 throw new Error("(errid:Watl000414)字段[昵称(nickName)]的值:[$(pobjFeedBackEN.nickName)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjFeedBackEN.feedBackNumber) == false && undefined !== pobjFeedBackEN.feedBackNumber && tzDataType.isString(pobjFeedBackEN.feedBackNumber) === false)
{
 throw new Error("(errid:Watl000414)字段[FeedBackNumber(feedBackNumber)]的值:[$(pobjFeedBackEN.feedBackNumber)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjFeedBackEN.feedBackContent) == false && undefined !== pobjFeedBackEN.feedBackContent && tzDataType.isString(pobjFeedBackEN.feedBackContent) === false)
{
 throw new Error("(errid:Watl000414)字段[FeedBackContent(feedBackContent)]的值:[$(pobjFeedBackEN.feedBackContent)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjFeedBackEN.email) == false && undefined !== pobjFeedBackEN.email && tzDataType.isString(pobjFeedBackEN.email) === false)
{
 throw new Error("(errid:Watl000414)字段[电子邮箱(email)]的值:[$(pobjFeedBackEN.email)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjFeedBackEN.telephone) == false && undefined !== pobjFeedBackEN.telephone && tzDataType.isString(pobjFeedBackEN.telephone) === false)
{
 throw new Error("(errid:Watl000414)字段[Telephone(telephone)]的值:[$(pobjFeedBackEN.telephone)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjFeedBackEN.updDate) == false && undefined !== pobjFeedBackEN.updDate && tzDataType.isString(pobjFeedBackEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjFeedBackEN.updDate)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjFeedBackEN.memo) == false && undefined !== pobjFeedBackEN.memo && tzDataType.isString(pobjFeedBackEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjFeedBackEN.memo)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjFeedBackEN.updUser) == false && undefined !== pobjFeedBackEN.updUser && tzDataType.isString(pobjFeedBackEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjFeedBackEN.updUser)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function FeedBack_CheckProperty4Update(pobjFeedBackEN: clsFeedBackEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjFeedBackEN.nickName) == false && GetStrLen(pobjFeedBackEN.nickName) > 50)
{
 throw new Error("(errid:Watl000416)字段[昵称(nickName)]的长度不能超过50(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.nickName)(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.feedBackNumber) == false && GetStrLen(pobjFeedBackEN.feedBackNumber) > 50)
{
 throw new Error("(errid:Watl000416)字段[FeedBackNumber(feedBackNumber)]的长度不能超过50(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.feedBackNumber)(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.feedBackContent) == false && GetStrLen(pobjFeedBackEN.feedBackContent) > 1000)
{
 throw new Error("(errid:Watl000416)字段[FeedBackContent(feedBackContent)]的长度不能超过1000(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.feedBackContent)(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.email) == false && GetStrLen(pobjFeedBackEN.email) > 100)
{
 throw new Error("(errid:Watl000416)字段[电子邮箱(email)]的长度不能超过100(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.email)(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.telephone) == false && GetStrLen(pobjFeedBackEN.telephone) > 200)
{
 throw new Error("(errid:Watl000416)字段[Telephone(telephone)]的长度不能超过200(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.telephone)(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.updDate) == false && GetStrLen(pobjFeedBackEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.updDate)(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.memo) == false && GetStrLen(pobjFeedBackEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.memo)(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.updUser) == false && GetStrLen(pobjFeedBackEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 反馈意见(FeedBack))!值:$(pobjFeedBackEN.updUser)(clsFeedBackBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjFeedBackEN.feedBackId && undefined !== pobjFeedBackEN.feedBackId && tzDataType.isNumber(pobjFeedBackEN.feedBackId) === false)
{
 throw new Error("(errid:Watl000417)字段[FeedBackId(feedBackId)]的值:[$(pobjFeedBackEN.feedBackId)], 非法,应该为数值型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.nickName) == false && undefined !== pobjFeedBackEN.nickName && tzDataType.isString(pobjFeedBackEN.nickName) === false)
{
 throw new Error("(errid:Watl000417)字段[昵称(nickName)]的值:[$(pobjFeedBackEN.nickName)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.feedBackNumber) == false && undefined !== pobjFeedBackEN.feedBackNumber && tzDataType.isString(pobjFeedBackEN.feedBackNumber) === false)
{
 throw new Error("(errid:Watl000417)字段[FeedBackNumber(feedBackNumber)]的值:[$(pobjFeedBackEN.feedBackNumber)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.feedBackContent) == false && undefined !== pobjFeedBackEN.feedBackContent && tzDataType.isString(pobjFeedBackEN.feedBackContent) === false)
{
 throw new Error("(errid:Watl000417)字段[FeedBackContent(feedBackContent)]的值:[$(pobjFeedBackEN.feedBackContent)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.email) == false && undefined !== pobjFeedBackEN.email && tzDataType.isString(pobjFeedBackEN.email) === false)
{
 throw new Error("(errid:Watl000417)字段[电子邮箱(email)]的值:[$(pobjFeedBackEN.email)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.telephone) == false && undefined !== pobjFeedBackEN.telephone && tzDataType.isString(pobjFeedBackEN.telephone) === false)
{
 throw new Error("(errid:Watl000417)字段[Telephone(telephone)]的值:[$(pobjFeedBackEN.telephone)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.updDate) == false && undefined !== pobjFeedBackEN.updDate && tzDataType.isString(pobjFeedBackEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjFeedBackEN.updDate)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.memo) == false && undefined !== pobjFeedBackEN.memo && tzDataType.isString(pobjFeedBackEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjFeedBackEN.memo)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjFeedBackEN.updUser) == false && undefined !== pobjFeedBackEN.updUser && tzDataType.isString(pobjFeedBackEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjFeedBackEN.updUser)], 非法,应该为字符型(In 反馈意见(FeedBack))!(clsFeedBackBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjFeedBackEN.feedBackId 
 || pobjFeedBackEN.feedBackId != null && pobjFeedBackEN.feedBackId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[FeedBackId]不能为空(In 反馈意见)!(clsFeedBackBL:CheckProperty4Update)");
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
export  function FeedBack_GetJSONStrByObj (pobjFeedBackEN: clsFeedBackEN): string
{
pobjFeedBackEN.sfUpdFldSetStr = pobjFeedBackEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjFeedBackEN);
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
export  function FeedBack_GetObjLstByJSONStr (strJSON: string): Array<clsFeedBackEN>
{
let arrFeedBackObjLst = new Array<clsFeedBackEN>();
if (strJSON === "")
{
return arrFeedBackObjLst;
}
try
{
arrFeedBackObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrFeedBackObjLst;
}
return arrFeedBackObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFeedBackObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function FeedBack_GetObjLstByJSONObjLst (arrFeedBackObjLstS: Array<clsFeedBackEN>): Array<clsFeedBackEN>
{
const arrFeedBackObjLst = new Array<clsFeedBackEN>();
for (const objInFor of arrFeedBackObjLstS) {
const obj1 = FeedBack_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrFeedBackObjLst.push(obj1);
}
return arrFeedBackObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function FeedBack_GetObjByJSONStr (strJSON: string): clsFeedBackEN
{
let pobjFeedBackEN = new clsFeedBackEN();
if (strJSON === "")
{
return pobjFeedBackEN;
}
try
{
pobjFeedBackEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjFeedBackEN;
}
return pobjFeedBackEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function FeedBack_GetCombineCondition(objFeedBackCond: clsFeedBackEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objFeedBackCond.dicFldComparisonOp, clsFeedBackEN.con_FeedBackId) == true)
{
const strComparisonOpFeedBackId:string = objFeedBackCond.dicFldComparisonOp[clsFeedBackEN.con_FeedBackId];
strWhereCond += Format(" And {0} {2} {1}", clsFeedBackEN.con_FeedBackId, objFeedBackCond.feedBackId, strComparisonOpFeedBackId);
}
if (Object.prototype.hasOwnProperty.call(objFeedBackCond.dicFldComparisonOp, clsFeedBackEN.con_NickName) == true)
{
const strComparisonOpNickName:string = objFeedBackCond.dicFldComparisonOp[clsFeedBackEN.con_NickName];
strWhereCond += Format(" And {0} {2} '{1}'", clsFeedBackEN.con_NickName, objFeedBackCond.nickName, strComparisonOpNickName);
}
if (Object.prototype.hasOwnProperty.call(objFeedBackCond.dicFldComparisonOp, clsFeedBackEN.con_FeedBackNumber) == true)
{
const strComparisonOpFeedBackNumber:string = objFeedBackCond.dicFldComparisonOp[clsFeedBackEN.con_FeedBackNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsFeedBackEN.con_FeedBackNumber, objFeedBackCond.feedBackNumber, strComparisonOpFeedBackNumber);
}
if (Object.prototype.hasOwnProperty.call(objFeedBackCond.dicFldComparisonOp, clsFeedBackEN.con_FeedBackContent) == true)
{
const strComparisonOpFeedBackContent:string = objFeedBackCond.dicFldComparisonOp[clsFeedBackEN.con_FeedBackContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsFeedBackEN.con_FeedBackContent, objFeedBackCond.feedBackContent, strComparisonOpFeedBackContent);
}
if (Object.prototype.hasOwnProperty.call(objFeedBackCond.dicFldComparisonOp, clsFeedBackEN.con_Email) == true)
{
const strComparisonOpEmail:string = objFeedBackCond.dicFldComparisonOp[clsFeedBackEN.con_Email];
strWhereCond += Format(" And {0} {2} '{1}'", clsFeedBackEN.con_Email, objFeedBackCond.email, strComparisonOpEmail);
}
if (Object.prototype.hasOwnProperty.call(objFeedBackCond.dicFldComparisonOp, clsFeedBackEN.con_Telephone) == true)
{
const strComparisonOpTelephone:string = objFeedBackCond.dicFldComparisonOp[clsFeedBackEN.con_Telephone];
strWhereCond += Format(" And {0} {2} '{1}'", clsFeedBackEN.con_Telephone, objFeedBackCond.telephone, strComparisonOpTelephone);
}
if (Object.prototype.hasOwnProperty.call(objFeedBackCond.dicFldComparisonOp, clsFeedBackEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objFeedBackCond.dicFldComparisonOp[clsFeedBackEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsFeedBackEN.con_UpdDate, objFeedBackCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objFeedBackCond.dicFldComparisonOp, clsFeedBackEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objFeedBackCond.dicFldComparisonOp[clsFeedBackEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsFeedBackEN.con_Memo, objFeedBackCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objFeedBackCond.dicFldComparisonOp, clsFeedBackEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objFeedBackCond.dicFldComparisonOp[clsFeedBackEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsFeedBackEN.con_UpdUser, objFeedBackCond.updUser, strComparisonOpUpdUser);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--FeedBack(反馈意见),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strNickName: 昵称(要求唯一的字段)
 * @param strFeedBackNumber: FeedBackNumber(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function FeedBack_GetUniCondStr(objFeedBackEN: clsFeedBackEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and NickName = '{0}'", objFeedBackEN.nickName);
 strWhereCond +=  Format(" and FeedBackNumber = '{0}'", objFeedBackEN.feedBackNumber);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--FeedBack(反馈意见),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strNickName: 昵称(要求唯一的字段)
 * @param strFeedBackNumber: FeedBackNumber(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function FeedBack_GetUniCondStr4Update(objFeedBackEN: clsFeedBackEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and FeedBackId <> '{0}'", objFeedBackEN.feedBackId);
 strWhereCond +=  Format(" and NickName = '{0}'", objFeedBackEN.nickName);
 strWhereCond +=  Format(" and FeedBackNumber = '{0}'", objFeedBackEN.feedBackNumber);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objFeedBackENS:源对象
 * @param objFeedBackENT:目标对象
*/
export  function FeedBack_CopyObjTo(objFeedBackENS: clsFeedBackEN , objFeedBackENT: clsFeedBackEN ): void 
{
objFeedBackENT.feedBackId = objFeedBackENS.feedBackId; //FeedBackId
objFeedBackENT.nickName = objFeedBackENS.nickName; //昵称
objFeedBackENT.feedBackNumber = objFeedBackENS.feedBackNumber; //FeedBackNumber
objFeedBackENT.feedBackContent = objFeedBackENS.feedBackContent; //FeedBackContent
objFeedBackENT.email = objFeedBackENS.email; //电子邮箱
objFeedBackENT.telephone = objFeedBackENS.telephone; //Telephone
objFeedBackENT.updDate = objFeedBackENS.updDate; //修改日期
objFeedBackENT.memo = objFeedBackENS.memo; //备注
objFeedBackENT.updUser = objFeedBackENS.updUser; //修改人
objFeedBackENT.sfUpdFldSetStr = objFeedBackENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFeedBackENS:源对象
 * @param objFeedBackENT:目标对象
*/
export  function FeedBack_GetObjFromJsonObj(objFeedBackENS: clsFeedBackEN): clsFeedBackEN 
{
 const objFeedBackENT: clsFeedBackEN = new clsFeedBackEN();
ObjectAssign(objFeedBackENT, objFeedBackENS);
 return objFeedBackENT;
}