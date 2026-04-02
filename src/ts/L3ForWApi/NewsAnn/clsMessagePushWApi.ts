
 /**
 * 类名:clsMessagePushWApi
 * 表名:MessagePush(01120280)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:23
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
 * 消息推送(MessagePush)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsMessagePushEN } from "@/ts/L0Entity/NewsAnn/clsMessagePushEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const messagePush_Controller = "MessagePushApi";
 export const messagePush_ConstructorName = "messagePush";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strMessagePushId:关键字
 * @returns 对象
 **/
export  async function MessagePush_GetObjByMessagePushIdAsync(strMessagePushId: string): Promise<clsMessagePushEN|null>  
{
const strThisFuncName = "GetObjByMessagePushIdAsync";

if (IsNullOrEmpty(strMessagePushId) == true)
{
  const strMsg = Format("参数:[strMessagePushId]不能为空!(In clsMessagePushWApi.GetObjByMessagePushIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strMessagePushId.length != 8)
{
const strMsg = Format("缓存分类变量:[strMessagePushId]的长度:[{0}]不正确!(clsMessagePushWApi.GetObjByMessagePushIdAsync)", strMessagePushId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByMessagePushId";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strMessagePushId,
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
const objMessagePush = MessagePush_GetObjFromJsonObj(returnObj);
return objMessagePush;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByMessagePushIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByMessagePushIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByMessagePushIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function MessagePush_SortFunDefa(a:clsMessagePushEN , b:clsMessagePushEN): number 
{
return a.messagePushId.localeCompare(b.messagePushId);
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
export  function MessagePush_SortFunDefa2Fld(a:clsMessagePushEN , b:clsMessagePushEN): number 
{
if (a.messagePushNumber == b.messagePushNumber) return a.messageTitle.localeCompare(b.messageTitle);
else return a.messagePushNumber.localeCompare(b.messagePushNumber);
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
export  function MessagePush_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsMessagePushEN.con_MessagePushId:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
return a.messagePushId.localeCompare(b.messagePushId);
}
case clsMessagePushEN.con_MessagePushNumber:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (a.messagePushNumber == null) return -1;
if (b.messagePushNumber == null) return 1;
return a.messagePushNumber.localeCompare(b.messagePushNumber);
}
case clsMessagePushEN.con_MessageTitle:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (a.messageTitle == null) return -1;
if (b.messageTitle == null) return 1;
return a.messageTitle.localeCompare(b.messageTitle);
}
case clsMessagePushEN.con_MessageContent:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (a.messageContent == null) return -1;
if (b.messageContent == null) return 1;
return a.messageContent.localeCompare(b.messageContent);
}
case clsMessagePushEN.con_ReceivePeople:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (a.receivePeople == null) return -1;
if (b.receivePeople == null) return 1;
return a.receivePeople.localeCompare(b.receivePeople);
}
case clsMessagePushEN.con_MessageTypeId:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
return a.messageTypeId.localeCompare(b.messageTypeId);
}
case clsMessagePushEN.con_IsAllpush:
return (a: clsMessagePushEN) => {
if (a.isAllpush == true) return 1;
else return -1
}
case clsMessagePushEN.con_IsReceive:
return (a: clsMessagePushEN) => {
if (a.isReceive == true) return 1;
else return -1
}
case clsMessagePushEN.con_ClientVersionTypeId:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (a.clientVersionTypeId == null) return -1;
if (b.clientVersionTypeId == null) return 1;
return a.clientVersionTypeId.localeCompare(b.clientVersionTypeId);
}
case clsMessagePushEN.con_UpdDate:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsMessagePushEN.con_Memo:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[MessagePush]中不存在!(in ${ messagePush_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsMessagePushEN.con_MessagePushId:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
return b.messagePushId.localeCompare(a.messagePushId);
}
case clsMessagePushEN.con_MessagePushNumber:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (b.messagePushNumber == null) return -1;
if (a.messagePushNumber == null) return 1;
return b.messagePushNumber.localeCompare(a.messagePushNumber);
}
case clsMessagePushEN.con_MessageTitle:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (b.messageTitle == null) return -1;
if (a.messageTitle == null) return 1;
return b.messageTitle.localeCompare(a.messageTitle);
}
case clsMessagePushEN.con_MessageContent:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (b.messageContent == null) return -1;
if (a.messageContent == null) return 1;
return b.messageContent.localeCompare(a.messageContent);
}
case clsMessagePushEN.con_ReceivePeople:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (b.receivePeople == null) return -1;
if (a.receivePeople == null) return 1;
return b.receivePeople.localeCompare(a.receivePeople);
}
case clsMessagePushEN.con_MessageTypeId:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
return b.messageTypeId.localeCompare(a.messageTypeId);
}
case clsMessagePushEN.con_IsAllpush:
return (b: clsMessagePushEN) => {
if (b.isAllpush == true) return 1;
else return -1
}
case clsMessagePushEN.con_IsReceive:
return (b: clsMessagePushEN) => {
if (b.isReceive == true) return 1;
else return -1
}
case clsMessagePushEN.con_ClientVersionTypeId:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (b.clientVersionTypeId == null) return -1;
if (a.clientVersionTypeId == null) return 1;
return b.clientVersionTypeId.localeCompare(a.clientVersionTypeId);
}
case clsMessagePushEN.con_UpdDate:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsMessagePushEN.con_Memo:
return (a: clsMessagePushEN, b: clsMessagePushEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[MessagePush]中不存在!(in ${ messagePush_ConstructorName}.${ strThisFuncName})`;
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
export  async function MessagePush_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsMessagePushEN.con_MessagePushId:
return (obj: clsMessagePushEN) => {
return obj.messagePushId === value;
}
case clsMessagePushEN.con_MessagePushNumber:
return (obj: clsMessagePushEN) => {
return obj.messagePushNumber === value;
}
case clsMessagePushEN.con_MessageTitle:
return (obj: clsMessagePushEN) => {
return obj.messageTitle === value;
}
case clsMessagePushEN.con_MessageContent:
return (obj: clsMessagePushEN) => {
return obj.messageContent === value;
}
case clsMessagePushEN.con_ReceivePeople:
return (obj: clsMessagePushEN) => {
return obj.receivePeople === value;
}
case clsMessagePushEN.con_MessageTypeId:
return (obj: clsMessagePushEN) => {
return obj.messageTypeId === value;
}
case clsMessagePushEN.con_IsAllpush:
return (obj: clsMessagePushEN) => {
return obj.isAllpush === value;
}
case clsMessagePushEN.con_IsReceive:
return (obj: clsMessagePushEN) => {
return obj.isReceive === value;
}
case clsMessagePushEN.con_ClientVersionTypeId:
return (obj: clsMessagePushEN) => {
return obj.clientVersionTypeId === value;
}
case clsMessagePushEN.con_UpdDate:
return (obj: clsMessagePushEN) => {
return obj.updDate === value;
}
case clsMessagePushEN.con_Memo:
return (obj: clsMessagePushEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[MessagePush]中不存在!(in ${ messagePush_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[MessagePush__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function MessagePush_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_GetFirstObjAsync(strWhereCond: string): Promise<clsMessagePushEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const objMessagePush = MessagePush_GetObjFromJsonObj(returnObj);
return objMessagePush;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_GetObjLstAsync(strWhereCond: string): Promise<Array<clsMessagePushEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePush_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
 * @param arrMessagePushId:关键字列表
 * @returns 对象列表
 **/
export  async function MessagePush_GetObjLstByMessagePushIdLstAsync(arrMessagePushId: Array<string>): Promise<Array<clsMessagePushEN>>  
{
const strThisFuncName = "GetObjLstByMessagePushIdLstAsync";
const strAction = "GetObjLstByMessagePushIdLst";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMessagePushId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePush_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByMessagePushIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function MessagePush_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsMessagePushEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePush_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsMessagePushEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePush_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsMessagePushEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsMessagePushEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePush_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePush_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
 * @param strMessagePushId:关键字
 * @returns 获取删除的结果
 **/
export  async function MessagePush_DelRecordAsync(strMessagePushId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(messagePush_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strMessagePushId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
 * @param arrMessagePushId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function MessagePush_DelMessagePushsAsync(arrMessagePushId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelMessagePushsAsync";
const strAction = "DelMessagePushs";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMessagePushId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_DelMessagePushsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelMessagePushsByCondAsync";
const strAction = "DelMessagePushsByCond";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
 * @param objMessagePushEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function MessagePush_AddNewRecordAsync(objMessagePushEN: clsMessagePushEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objMessagePushEN);
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objMessagePushEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
 * @param objMessagePushEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function MessagePush_AddNewRecordWithMaxIdAsync(objMessagePushEN: clsMessagePushEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objMessagePushEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
 * @param objMessagePushEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function MessagePush_AddNewRecordWithReturnKeyAsync(objMessagePushEN: clsMessagePushEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objMessagePushEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
 * @param objMessagePushEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function MessagePush_UpdateRecordAsync(objMessagePushEN: clsMessagePushEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objMessagePushEN.sfUpdFldSetStr === undefined || objMessagePushEN.sfUpdFldSetStr === null || objMessagePushEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objMessagePushEN.messagePushId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objMessagePushEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
 * @param objMessagePushEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function MessagePush_UpdateWithConditionAsync(objMessagePushEN: clsMessagePushEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objMessagePushEN.sfUpdFldSetStr === undefined || objMessagePushEN.sfUpdFldSetStr === null || objMessagePushEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objMessagePushEN.messagePushId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);
objMessagePushEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objMessagePushEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
 * @param strMessagePushId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function MessagePush_IsExistAsync(strMessagePushId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strMessagePushId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  async function MessagePush_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(messagePush_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePush_ConstructorName, strThisFuncName);
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
export  function MessagePush_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function MessagePush_CheckPropertyNew(pobjMessagePushEN: clsMessagePushEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjMessagePushEN.messageTypeId) === true )
{
 throw new Error("(errid:Watl000411)字段[消息类型Id]不能为空(In 消息推送)!(clsMessagePushBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjMessagePushEN.messagePushId) == false && GetStrLen(pobjMessagePushEN.messagePushId) > 8)
{
 throw new Error("(errid:Watl000413)字段[消息Id(messagePushId)]的长度不能超过8(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messagePushId)(clsMessagePushBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messagePushNumber) == false && GetStrLen(pobjMessagePushEN.messagePushNumber) > 200)
{
 throw new Error("(errid:Watl000413)字段[消息编号(messagePushNumber)]的长度不能超过200(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messagePushNumber)(clsMessagePushBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageTitle) == false && GetStrLen(pobjMessagePushEN.messageTitle) > 500)
{
 throw new Error("(errid:Watl000413)字段[消息标题(messageTitle)]的长度不能超过500(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messageTitle)(clsMessagePushBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageContent) == false && GetStrLen(pobjMessagePushEN.messageContent) > 2000)
{
 throw new Error("(errid:Watl000413)字段[消息内容(messageContent)]的长度不能超过2000(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messageContent)(clsMessagePushBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushEN.receivePeople) == false && GetStrLen(pobjMessagePushEN.receivePeople) > 50)
{
 throw new Error("(errid:Watl000413)字段[接收人员(receivePeople)]的长度不能超过50(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.receivePeople)(clsMessagePushBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageTypeId) == false && GetStrLen(pobjMessagePushEN.messageTypeId) > 8)
{
 throw new Error("(errid:Watl000413)字段[消息类型Id(messageTypeId)]的长度不能超过8(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messageTypeId)(clsMessagePushBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushEN.clientVersionTypeId) == false && GetStrLen(pobjMessagePushEN.clientVersionTypeId) > 8)
{
 throw new Error("(errid:Watl000413)字段[客户端版本类型Id(clientVersionTypeId)]的长度不能超过8(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.clientVersionTypeId)(clsMessagePushBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushEN.updDate) == false && GetStrLen(pobjMessagePushEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.updDate)(clsMessagePushBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushEN.memo) == false && GetStrLen(pobjMessagePushEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.memo)(clsMessagePushBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjMessagePushEN.messagePushId) == false && undefined !== pobjMessagePushEN.messagePushId && tzDataType.isString(pobjMessagePushEN.messagePushId) === false)
{
 throw new Error("(errid:Watl000414)字段[消息Id(messagePushId)]的值:[$(pobjMessagePushEN.messagePushId)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messagePushNumber) == false && undefined !== pobjMessagePushEN.messagePushNumber && tzDataType.isString(pobjMessagePushEN.messagePushNumber) === false)
{
 throw new Error("(errid:Watl000414)字段[消息编号(messagePushNumber)]的值:[$(pobjMessagePushEN.messagePushNumber)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageTitle) == false && undefined !== pobjMessagePushEN.messageTitle && tzDataType.isString(pobjMessagePushEN.messageTitle) === false)
{
 throw new Error("(errid:Watl000414)字段[消息标题(messageTitle)]的值:[$(pobjMessagePushEN.messageTitle)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageContent) == false && undefined !== pobjMessagePushEN.messageContent && tzDataType.isString(pobjMessagePushEN.messageContent) === false)
{
 throw new Error("(errid:Watl000414)字段[消息内容(messageContent)]的值:[$(pobjMessagePushEN.messageContent)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushEN.receivePeople) == false && undefined !== pobjMessagePushEN.receivePeople && tzDataType.isString(pobjMessagePushEN.receivePeople) === false)
{
 throw new Error("(errid:Watl000414)字段[接收人员(receivePeople)]的值:[$(pobjMessagePushEN.receivePeople)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageTypeId) == false && undefined !== pobjMessagePushEN.messageTypeId && tzDataType.isString(pobjMessagePushEN.messageTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[消息类型Id(messageTypeId)]的值:[$(pobjMessagePushEN.messageTypeId)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (null != pobjMessagePushEN.isAllpush && undefined !== pobjMessagePushEN.isAllpush && tzDataType.isBoolean(pobjMessagePushEN.isAllpush) === false)
{
 throw new Error("(errid:Watl000414)字段[是否全体推送(isAllpush)]的值:[$(pobjMessagePushEN.isAllpush)], 非法,应该为布尔型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (null != pobjMessagePushEN.isReceive && undefined !== pobjMessagePushEN.isReceive && tzDataType.isBoolean(pobjMessagePushEN.isReceive) === false)
{
 throw new Error("(errid:Watl000414)字段[是否接收(isReceive)]的值:[$(pobjMessagePushEN.isReceive)], 非法,应该为布尔型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushEN.clientVersionTypeId) == false && undefined !== pobjMessagePushEN.clientVersionTypeId && tzDataType.isString(pobjMessagePushEN.clientVersionTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[客户端版本类型Id(clientVersionTypeId)]的值:[$(pobjMessagePushEN.clientVersionTypeId)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushEN.updDate) == false && undefined !== pobjMessagePushEN.updDate && tzDataType.isString(pobjMessagePushEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjMessagePushEN.updDate)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushEN.memo) == false && undefined !== pobjMessagePushEN.memo && tzDataType.isString(pobjMessagePushEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjMessagePushEN.memo)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjMessagePushEN.messageTypeId) == false && pobjMessagePushEN.messageTypeId != '[nuull]' && GetStrLen(pobjMessagePushEN.messageTypeId) !=  8)
{
 throw ("(errid:Watl000415)字段[消息类型Id]作为外键字段,长度应该为8(In 消息推送)!(clsMessagePushBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function MessagePush_CheckProperty4Update(pobjMessagePushEN: clsMessagePushEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjMessagePushEN.messagePushId) == false && GetStrLen(pobjMessagePushEN.messagePushId) > 8)
{
 throw new Error("(errid:Watl000416)字段[消息Id(messagePushId)]的长度不能超过8(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messagePushId)(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messagePushNumber) == false && GetStrLen(pobjMessagePushEN.messagePushNumber) > 200)
{
 throw new Error("(errid:Watl000416)字段[消息编号(messagePushNumber)]的长度不能超过200(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messagePushNumber)(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageTitle) == false && GetStrLen(pobjMessagePushEN.messageTitle) > 500)
{
 throw new Error("(errid:Watl000416)字段[消息标题(messageTitle)]的长度不能超过500(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messageTitle)(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageContent) == false && GetStrLen(pobjMessagePushEN.messageContent) > 2000)
{
 throw new Error("(errid:Watl000416)字段[消息内容(messageContent)]的长度不能超过2000(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messageContent)(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.receivePeople) == false && GetStrLen(pobjMessagePushEN.receivePeople) > 50)
{
 throw new Error("(errid:Watl000416)字段[接收人员(receivePeople)]的长度不能超过50(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.receivePeople)(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageTypeId) == false && GetStrLen(pobjMessagePushEN.messageTypeId) > 8)
{
 throw new Error("(errid:Watl000416)字段[消息类型Id(messageTypeId)]的长度不能超过8(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.messageTypeId)(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.clientVersionTypeId) == false && GetStrLen(pobjMessagePushEN.clientVersionTypeId) > 8)
{
 throw new Error("(errid:Watl000416)字段[客户端版本类型Id(clientVersionTypeId)]的长度不能超过8(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.clientVersionTypeId)(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.updDate) == false && GetStrLen(pobjMessagePushEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.updDate)(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.memo) == false && GetStrLen(pobjMessagePushEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 消息推送(MessagePush))!值:$(pobjMessagePushEN.memo)(clsMessagePushBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjMessagePushEN.messagePushId) == false && undefined !== pobjMessagePushEN.messagePushId && tzDataType.isString(pobjMessagePushEN.messagePushId) === false)
{
 throw new Error("(errid:Watl000417)字段[消息Id(messagePushId)]的值:[$(pobjMessagePushEN.messagePushId)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messagePushNumber) == false && undefined !== pobjMessagePushEN.messagePushNumber && tzDataType.isString(pobjMessagePushEN.messagePushNumber) === false)
{
 throw new Error("(errid:Watl000417)字段[消息编号(messagePushNumber)]的值:[$(pobjMessagePushEN.messagePushNumber)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageTitle) == false && undefined !== pobjMessagePushEN.messageTitle && tzDataType.isString(pobjMessagePushEN.messageTitle) === false)
{
 throw new Error("(errid:Watl000417)字段[消息标题(messageTitle)]的值:[$(pobjMessagePushEN.messageTitle)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageContent) == false && undefined !== pobjMessagePushEN.messageContent && tzDataType.isString(pobjMessagePushEN.messageContent) === false)
{
 throw new Error("(errid:Watl000417)字段[消息内容(messageContent)]的值:[$(pobjMessagePushEN.messageContent)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.receivePeople) == false && undefined !== pobjMessagePushEN.receivePeople && tzDataType.isString(pobjMessagePushEN.receivePeople) === false)
{
 throw new Error("(errid:Watl000417)字段[接收人员(receivePeople)]的值:[$(pobjMessagePushEN.receivePeople)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.messageTypeId) == false && undefined !== pobjMessagePushEN.messageTypeId && tzDataType.isString(pobjMessagePushEN.messageTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[消息类型Id(messageTypeId)]的值:[$(pobjMessagePushEN.messageTypeId)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (null != pobjMessagePushEN.isAllpush && undefined !== pobjMessagePushEN.isAllpush && tzDataType.isBoolean(pobjMessagePushEN.isAllpush) === false)
{
 throw new Error("(errid:Watl000417)字段[是否全体推送(isAllpush)]的值:[$(pobjMessagePushEN.isAllpush)], 非法,应该为布尔型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (null != pobjMessagePushEN.isReceive && undefined !== pobjMessagePushEN.isReceive && tzDataType.isBoolean(pobjMessagePushEN.isReceive) === false)
{
 throw new Error("(errid:Watl000417)字段[是否接收(isReceive)]的值:[$(pobjMessagePushEN.isReceive)], 非法,应该为布尔型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.clientVersionTypeId) == false && undefined !== pobjMessagePushEN.clientVersionTypeId && tzDataType.isString(pobjMessagePushEN.clientVersionTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[客户端版本类型Id(clientVersionTypeId)]的值:[$(pobjMessagePushEN.clientVersionTypeId)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.updDate) == false && undefined !== pobjMessagePushEN.updDate && tzDataType.isString(pobjMessagePushEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjMessagePushEN.updDate)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushEN.memo) == false && undefined !== pobjMessagePushEN.memo && tzDataType.isString(pobjMessagePushEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjMessagePushEN.memo)], 非法,应该为字符型(In 消息推送(MessagePush))!(clsMessagePushBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjMessagePushEN.messageTypeId) == false && pobjMessagePushEN.messageTypeId != '[nuull]' && GetStrLen(pobjMessagePushEN.messageTypeId) !=  8)
{
 throw ("(errid:Watl000418)字段[消息类型Id]作为外键字段,长度应该为8(In 消息推送)!(clsMessagePushBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function MessagePush_GetJSONStrByObj (pobjMessagePushEN: clsMessagePushEN): string
{
pobjMessagePushEN.sfUpdFldSetStr = pobjMessagePushEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjMessagePushEN);
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
export  function MessagePush_GetObjLstByJSONStr (strJSON: string): Array<clsMessagePushEN>
{
let arrMessagePushObjLst = new Array<clsMessagePushEN>();
if (strJSON === "")
{
return arrMessagePushObjLst;
}
try
{
arrMessagePushObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrMessagePushObjLst;
}
return arrMessagePushObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrMessagePushObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function MessagePush_GetObjLstByJSONObjLst (arrMessagePushObjLstS: Array<clsMessagePushEN>): Array<clsMessagePushEN>
{
const arrMessagePushObjLst = new Array<clsMessagePushEN>();
for (const objInFor of arrMessagePushObjLstS) {
const obj1 = MessagePush_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrMessagePushObjLst.push(obj1);
}
return arrMessagePushObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function MessagePush_GetObjByJSONStr (strJSON: string): clsMessagePushEN
{
let pobjMessagePushEN = new clsMessagePushEN();
if (strJSON === "")
{
return pobjMessagePushEN;
}
try
{
pobjMessagePushEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjMessagePushEN;
}
return pobjMessagePushEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function MessagePush_GetCombineCondition(objMessagePushCond: clsMessagePushEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_MessagePushId) == true)
{
const strComparisonOpMessagePushId:string = objMessagePushCond.dicFldComparisonOp[clsMessagePushEN.con_MessagePushId];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushEN.con_MessagePushId, objMessagePushCond.messagePushId, strComparisonOpMessagePushId);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_MessagePushNumber) == true)
{
const strComparisonOpMessagePushNumber:string = objMessagePushCond.dicFldComparisonOp[clsMessagePushEN.con_MessagePushNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushEN.con_MessagePushNumber, objMessagePushCond.messagePushNumber, strComparisonOpMessagePushNumber);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_MessageTitle) == true)
{
const strComparisonOpMessageTitle:string = objMessagePushCond.dicFldComparisonOp[clsMessagePushEN.con_MessageTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushEN.con_MessageTitle, objMessagePushCond.messageTitle, strComparisonOpMessageTitle);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_MessageContent) == true)
{
const strComparisonOpMessageContent:string = objMessagePushCond.dicFldComparisonOp[clsMessagePushEN.con_MessageContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushEN.con_MessageContent, objMessagePushCond.messageContent, strComparisonOpMessageContent);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_ReceivePeople) == true)
{
const strComparisonOpReceivePeople:string = objMessagePushCond.dicFldComparisonOp[clsMessagePushEN.con_ReceivePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushEN.con_ReceivePeople, objMessagePushCond.receivePeople, strComparisonOpReceivePeople);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_MessageTypeId) == true)
{
const strComparisonOpMessageTypeId:string = objMessagePushCond.dicFldComparisonOp[clsMessagePushEN.con_MessageTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushEN.con_MessageTypeId, objMessagePushCond.messageTypeId, strComparisonOpMessageTypeId);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_IsAllpush) == true)
{
if (objMessagePushCond.isAllpush == true)
{
strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsAllpush);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsAllpush);
}
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_IsReceive) == true)
{
if (objMessagePushCond.isReceive == true)
{
strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsReceive);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsReceive);
}
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_ClientVersionTypeId) == true)
{
const strComparisonOpClientVersionTypeId:string = objMessagePushCond.dicFldComparisonOp[clsMessagePushEN.con_ClientVersionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushEN.con_ClientVersionTypeId, objMessagePushCond.clientVersionTypeId, strComparisonOpClientVersionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objMessagePushCond.dicFldComparisonOp[clsMessagePushEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushEN.con_UpdDate, objMessagePushCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushCond.dicFldComparisonOp, clsMessagePushEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objMessagePushCond.dicFldComparisonOp[clsMessagePushEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushEN.con_Memo, objMessagePushCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--MessagePush(消息推送),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strMessagePushNumber: 消息编号(要求唯一的字段)
 * @param strUpdDate: 修改日期(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function MessagePush_GetUniCondStr(objMessagePushEN: clsMessagePushEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and MessagePushNumber = '{0}'", objMessagePushEN.messagePushNumber);
 strWhereCond +=  Format(" and UpdDate = '{0}'", objMessagePushEN.updDate);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--MessagePush(消息推送),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strMessagePushNumber: 消息编号(要求唯一的字段)
 * @param strUpdDate: 修改日期(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function MessagePush_GetUniCondStr4Update(objMessagePushEN: clsMessagePushEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and MessagePushId <> '{0}'", objMessagePushEN.messagePushId);
 strWhereCond +=  Format(" and MessagePushNumber = '{0}'", objMessagePushEN.messagePushNumber);
 strWhereCond +=  Format(" and UpdDate = '{0}'", objMessagePushEN.updDate);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objMessagePushENS:源对象
 * @param objMessagePushENT:目标对象
*/
export  function MessagePush_CopyObjTo(objMessagePushENS: clsMessagePushEN , objMessagePushENT: clsMessagePushEN ): void 
{
objMessagePushENT.messagePushId = objMessagePushENS.messagePushId; //消息Id
objMessagePushENT.messagePushNumber = objMessagePushENS.messagePushNumber; //消息编号
objMessagePushENT.messageTitle = objMessagePushENS.messageTitle; //消息标题
objMessagePushENT.messageContent = objMessagePushENS.messageContent; //消息内容
objMessagePushENT.receivePeople = objMessagePushENS.receivePeople; //接收人员
objMessagePushENT.messageTypeId = objMessagePushENS.messageTypeId; //消息类型Id
objMessagePushENT.isAllpush = objMessagePushENS.isAllpush; //是否全体推送
objMessagePushENT.isReceive = objMessagePushENS.isReceive; //是否接收
objMessagePushENT.clientVersionTypeId = objMessagePushENS.clientVersionTypeId; //客户端版本类型Id
objMessagePushENT.updDate = objMessagePushENS.updDate; //修改日期
objMessagePushENT.memo = objMessagePushENS.memo; //备注
objMessagePushENT.sfUpdFldSetStr = objMessagePushENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objMessagePushENS:源对象
 * @param objMessagePushENT:目标对象
*/
export  function MessagePush_GetObjFromJsonObj(objMessagePushENS: clsMessagePushEN): clsMessagePushEN 
{
 const objMessagePushENT: clsMessagePushEN = new clsMessagePushEN();
ObjectAssign(objMessagePushENT, objMessagePushENS);
 return objMessagePushENT;
}