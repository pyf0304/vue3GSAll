
 /**
 * 类名:clsMessagePushUsersRelationWApi
 * 表名:MessagePushUsersRelation(01120284)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:23
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
 * 消息推送与用户关系(MessagePushUsersRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsMessagePushUsersRelationEN } from "@/ts/L0Entity/NewsAnn/clsMessagePushUsersRelationEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const messagePushUsersRelation_Controller = "MessagePushUsersRelationApi";
 export const messagePushUsersRelation_ConstructorName = "messagePushUsersRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngMessagePushUsersRelationId:关键字
 * @returns 对象
 **/
export  async function MessagePushUsersRelation_GetObjByMessagePushUsersRelationIdAsync(lngMessagePushUsersRelationId: number): Promise<clsMessagePushUsersRelationEN|null>  
{
const strThisFuncName = "GetObjByMessagePushUsersRelationIdAsync";

if (lngMessagePushUsersRelationId == 0)
{
  const strMsg = Format("参数:[lngMessagePushUsersRelationId]不能为空!(In clsMessagePushUsersRelationWApi.GetObjByMessagePushUsersRelationIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByMessagePushUsersRelationId";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngMessagePushUsersRelationId,
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
const objMessagePushUsersRelation = MessagePushUsersRelation_GetObjFromJsonObj(returnObj);
return objMessagePushUsersRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByMessagePushUsersRelationIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByMessagePushUsersRelationIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByMessagePushUsersRelationIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function MessagePushUsersRelation_SortFunDefa(a:clsMessagePushUsersRelationEN , b:clsMessagePushUsersRelationEN): number 
{
return a.messagePushUsersRelationId-b.messagePushUsersRelationId;
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
export  function MessagePushUsersRelation_SortFunDefa2Fld(a:clsMessagePushUsersRelationEN , b:clsMessagePushUsersRelationEN): number 
{
if (a.messagePushId == b.messagePushId) return a.receivePeople.localeCompare(b.receivePeople);
else return a.messagePushId.localeCompare(b.messagePushId);
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
export  function MessagePushUsersRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsMessagePushUsersRelationEN.con_MessagePushUsersRelationId:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
return a.messagePushUsersRelationId-b.messagePushUsersRelationId;
}
case clsMessagePushUsersRelationEN.con_MessagePushId:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
return a.messagePushId.localeCompare(b.messagePushId);
}
case clsMessagePushUsersRelationEN.con_ReceivePeople:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
return a.receivePeople.localeCompare(b.receivePeople);
}
case clsMessagePushUsersRelationEN.con_IsReceive:
return (a: clsMessagePushUsersRelationEN) => {
if (a.isReceive == true) return 1;
else return -1
}
case clsMessagePushUsersRelationEN.con_CreateTime:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
if (a.createTime == null) return -1;
if (b.createTime == null) return 1;
return a.createTime.localeCompare(b.createTime);
}
case clsMessagePushUsersRelationEN.con_Memo:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[MessagePushUsersRelation]中不存在!(in ${ messagePushUsersRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsMessagePushUsersRelationEN.con_MessagePushUsersRelationId:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
return b.messagePushUsersRelationId-a.messagePushUsersRelationId;
}
case clsMessagePushUsersRelationEN.con_MessagePushId:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
return b.messagePushId.localeCompare(a.messagePushId);
}
case clsMessagePushUsersRelationEN.con_ReceivePeople:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
return b.receivePeople.localeCompare(a.receivePeople);
}
case clsMessagePushUsersRelationEN.con_IsReceive:
return (b: clsMessagePushUsersRelationEN) => {
if (b.isReceive == true) return 1;
else return -1
}
case clsMessagePushUsersRelationEN.con_CreateTime:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
if (b.createTime == null) return -1;
if (a.createTime == null) return 1;
return b.createTime.localeCompare(a.createTime);
}
case clsMessagePushUsersRelationEN.con_Memo:
return (a: clsMessagePushUsersRelationEN, b: clsMessagePushUsersRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[MessagePushUsersRelation]中不存在!(in ${ messagePushUsersRelation_ConstructorName}.${ strThisFuncName})`;
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
export  async function MessagePushUsersRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsMessagePushUsersRelationEN.con_MessagePushUsersRelationId:
return (obj: clsMessagePushUsersRelationEN) => {
return obj.messagePushUsersRelationId === value;
}
case clsMessagePushUsersRelationEN.con_MessagePushId:
return (obj: clsMessagePushUsersRelationEN) => {
return obj.messagePushId === value;
}
case clsMessagePushUsersRelationEN.con_ReceivePeople:
return (obj: clsMessagePushUsersRelationEN) => {
return obj.receivePeople === value;
}
case clsMessagePushUsersRelationEN.con_IsReceive:
return (obj: clsMessagePushUsersRelationEN) => {
return obj.isReceive === value;
}
case clsMessagePushUsersRelationEN.con_CreateTime:
return (obj: clsMessagePushUsersRelationEN) => {
return obj.createTime === value;
}
case clsMessagePushUsersRelationEN.con_Memo:
return (obj: clsMessagePushUsersRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[MessagePushUsersRelation]中不存在!(in ${ messagePushUsersRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[MessagePushUsersRelation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function MessagePushUsersRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function MessagePushUsersRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function MessagePushUsersRelation_GetFirstObjAsync(strWhereCond: string): Promise<clsMessagePushUsersRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const objMessagePushUsersRelation = MessagePushUsersRelation_GetObjFromJsonObj(returnObj);
return objMessagePushUsersRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function MessagePushUsersRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clsMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
 * @param arrMessagePushUsersRelationId:关键字列表
 * @returns 对象列表
 **/
export  async function MessagePushUsersRelation_GetObjLstByMessagePushUsersRelationIdLstAsync(arrMessagePushUsersRelationId: Array<string>): Promise<Array<clsMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetObjLstByMessagePushUsersRelationIdLstAsync";
const strAction = "GetObjLstByMessagePushUsersRelationIdLst";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMessagePushUsersRelationId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByMessagePushUsersRelationIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function MessagePushUsersRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function MessagePushUsersRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function MessagePushUsersRelation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsMessagePushUsersRelationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = MessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
 * @param lngMessagePushUsersRelationId:关键字
 * @returns 获取删除的结果
 **/
export  async function MessagePushUsersRelation_DelRecordAsync(lngMessagePushUsersRelationId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngMessagePushUsersRelationId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
 * @param arrMessagePushUsersRelationId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function MessagePushUsersRelation_DelMessagePushUsersRelationsAsync(arrMessagePushUsersRelationId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelMessagePushUsersRelationsAsync";
const strAction = "DelMessagePushUsersRelations";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMessagePushUsersRelationId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function MessagePushUsersRelation_DelMessagePushUsersRelationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelMessagePushUsersRelationsByCondAsync";
const strAction = "DelMessagePushUsersRelationsByCond";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
 * @param objMessagePushUsersRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function MessagePushUsersRelation_AddNewRecordAsync(objMessagePushUsersRelationEN: clsMessagePushUsersRelationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objMessagePushUsersRelationEN);
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objMessagePushUsersRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
 * @param objMessagePushUsersRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function MessagePushUsersRelation_AddNewRecordWithReturnKeyAsync(objMessagePushUsersRelationEN: clsMessagePushUsersRelationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objMessagePushUsersRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
 * @param objMessagePushUsersRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function MessagePushUsersRelation_UpdateRecordAsync(objMessagePushUsersRelationEN: clsMessagePushUsersRelationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objMessagePushUsersRelationEN.sfUpdFldSetStr === undefined || objMessagePushUsersRelationEN.sfUpdFldSetStr === null || objMessagePushUsersRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objMessagePushUsersRelationEN.messagePushUsersRelationId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objMessagePushUsersRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
 * @param objMessagePushUsersRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function MessagePushUsersRelation_UpdateWithConditionAsync(objMessagePushUsersRelationEN: clsMessagePushUsersRelationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objMessagePushUsersRelationEN.sfUpdFldSetStr === undefined || objMessagePushUsersRelationEN.sfUpdFldSetStr === null || objMessagePushUsersRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objMessagePushUsersRelationEN.messagePushUsersRelationId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);
objMessagePushUsersRelationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objMessagePushUsersRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function MessagePushUsersRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
 * @param lngMessagePushUsersRelationId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function MessagePushUsersRelation_IsExistAsync(lngMessagePushUsersRelationId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngMessagePushUsersRelationId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function MessagePushUsersRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function MessagePushUsersRelation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(messagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, messagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  function MessagePushUsersRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function MessagePushUsersRelation_CheckPropertyNew(pobjMessagePushUsersRelationEN: clsMessagePushUsersRelationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.messagePushId) === true )
{
 throw new Error("(errid:Watl000411)字段[消息Id]不能为空(In 消息推送与用户关系)!(clsMessagePushUsersRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.receivePeople) === true )
{
 throw new Error("(errid:Watl000411)字段[接收人员]不能为空(In 消息推送与用户关系)!(clsMessagePushUsersRelationBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.messagePushId) == false && GetStrLen(pobjMessagePushUsersRelationEN.messagePushId) > 8)
{
 throw new Error("(errid:Watl000413)字段[消息Id(messagePushId)]的长度不能超过8(In 消息推送与用户关系(MessagePushUsersRelation))!值:$(pobjMessagePushUsersRelationEN.messagePushId)(clsMessagePushUsersRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.receivePeople) == false && GetStrLen(pobjMessagePushUsersRelationEN.receivePeople) > 50)
{
 throw new Error("(errid:Watl000413)字段[接收人员(receivePeople)]的长度不能超过50(In 消息推送与用户关系(MessagePushUsersRelation))!值:$(pobjMessagePushUsersRelationEN.receivePeople)(clsMessagePushUsersRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.createTime) == false && GetStrLen(pobjMessagePushUsersRelationEN.createTime) > 16)
{
 throw new Error("(errid:Watl000413)字段[建立时间(createTime)]的长度不能超过16(In 消息推送与用户关系(MessagePushUsersRelation))!值:$(pobjMessagePushUsersRelationEN.createTime)(clsMessagePushUsersRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.memo) == false && GetStrLen(pobjMessagePushUsersRelationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 消息推送与用户关系(MessagePushUsersRelation))!值:$(pobjMessagePushUsersRelationEN.memo)(clsMessagePushUsersRelationBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjMessagePushUsersRelationEN.messagePushUsersRelationId && undefined !== pobjMessagePushUsersRelationEN.messagePushUsersRelationId && tzDataType.isNumber(pobjMessagePushUsersRelationEN.messagePushUsersRelationId) === false)
{
 throw new Error("(errid:Watl000414)字段[消息推送用户关系Id(messagePushUsersRelationId)]的值:[$(pobjMessagePushUsersRelationEN.messagePushUsersRelationId)], 非法,应该为数值型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.messagePushId) == false && undefined !== pobjMessagePushUsersRelationEN.messagePushId && tzDataType.isString(pobjMessagePushUsersRelationEN.messagePushId) === false)
{
 throw new Error("(errid:Watl000414)字段[消息Id(messagePushId)]的值:[$(pobjMessagePushUsersRelationEN.messagePushId)], 非法,应该为字符型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.receivePeople) == false && undefined !== pobjMessagePushUsersRelationEN.receivePeople && tzDataType.isString(pobjMessagePushUsersRelationEN.receivePeople) === false)
{
 throw new Error("(errid:Watl000414)字段[接收人员(receivePeople)]的值:[$(pobjMessagePushUsersRelationEN.receivePeople)], 非法,应该为字符型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckPropertyNew0)");
}
if (null != pobjMessagePushUsersRelationEN.isReceive && undefined !== pobjMessagePushUsersRelationEN.isReceive && tzDataType.isBoolean(pobjMessagePushUsersRelationEN.isReceive) === false)
{
 throw new Error("(errid:Watl000414)字段[是否接收(isReceive)]的值:[$(pobjMessagePushUsersRelationEN.isReceive)], 非法,应该为布尔型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.createTime) == false && undefined !== pobjMessagePushUsersRelationEN.createTime && tzDataType.isString(pobjMessagePushUsersRelationEN.createTime) === false)
{
 throw new Error("(errid:Watl000414)字段[建立时间(createTime)]的值:[$(pobjMessagePushUsersRelationEN.createTime)], 非法,应该为字符型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.memo) == false && undefined !== pobjMessagePushUsersRelationEN.memo && tzDataType.isString(pobjMessagePushUsersRelationEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjMessagePushUsersRelationEN.memo)], 非法,应该为字符型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function MessagePushUsersRelation_CheckProperty4Update(pobjMessagePushUsersRelationEN: clsMessagePushUsersRelationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.messagePushId) == false && GetStrLen(pobjMessagePushUsersRelationEN.messagePushId) > 8)
{
 throw new Error("(errid:Watl000416)字段[消息Id(messagePushId)]的长度不能超过8(In 消息推送与用户关系(MessagePushUsersRelation))!值:$(pobjMessagePushUsersRelationEN.messagePushId)(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.receivePeople) == false && GetStrLen(pobjMessagePushUsersRelationEN.receivePeople) > 50)
{
 throw new Error("(errid:Watl000416)字段[接收人员(receivePeople)]的长度不能超过50(In 消息推送与用户关系(MessagePushUsersRelation))!值:$(pobjMessagePushUsersRelationEN.receivePeople)(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.createTime) == false && GetStrLen(pobjMessagePushUsersRelationEN.createTime) > 16)
{
 throw new Error("(errid:Watl000416)字段[建立时间(createTime)]的长度不能超过16(In 消息推送与用户关系(MessagePushUsersRelation))!值:$(pobjMessagePushUsersRelationEN.createTime)(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.memo) == false && GetStrLen(pobjMessagePushUsersRelationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 消息推送与用户关系(MessagePushUsersRelation))!值:$(pobjMessagePushUsersRelationEN.memo)(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjMessagePushUsersRelationEN.messagePushUsersRelationId && undefined !== pobjMessagePushUsersRelationEN.messagePushUsersRelationId && tzDataType.isNumber(pobjMessagePushUsersRelationEN.messagePushUsersRelationId) === false)
{
 throw new Error("(errid:Watl000417)字段[消息推送用户关系Id(messagePushUsersRelationId)]的值:[$(pobjMessagePushUsersRelationEN.messagePushUsersRelationId)], 非法,应该为数值型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.messagePushId) == false && undefined !== pobjMessagePushUsersRelationEN.messagePushId && tzDataType.isString(pobjMessagePushUsersRelationEN.messagePushId) === false)
{
 throw new Error("(errid:Watl000417)字段[消息Id(messagePushId)]的值:[$(pobjMessagePushUsersRelationEN.messagePushId)], 非法,应该为字符型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.receivePeople) == false && undefined !== pobjMessagePushUsersRelationEN.receivePeople && tzDataType.isString(pobjMessagePushUsersRelationEN.receivePeople) === false)
{
 throw new Error("(errid:Watl000417)字段[接收人员(receivePeople)]的值:[$(pobjMessagePushUsersRelationEN.receivePeople)], 非法,应该为字符型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
if (null != pobjMessagePushUsersRelationEN.isReceive && undefined !== pobjMessagePushUsersRelationEN.isReceive && tzDataType.isBoolean(pobjMessagePushUsersRelationEN.isReceive) === false)
{
 throw new Error("(errid:Watl000417)字段[是否接收(isReceive)]的值:[$(pobjMessagePushUsersRelationEN.isReceive)], 非法,应该为布尔型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.createTime) == false && undefined !== pobjMessagePushUsersRelationEN.createTime && tzDataType.isString(pobjMessagePushUsersRelationEN.createTime) === false)
{
 throw new Error("(errid:Watl000417)字段[建立时间(createTime)]的值:[$(pobjMessagePushUsersRelationEN.createTime)], 非法,应该为字符型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjMessagePushUsersRelationEN.memo) == false && undefined !== pobjMessagePushUsersRelationEN.memo && tzDataType.isString(pobjMessagePushUsersRelationEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjMessagePushUsersRelationEN.memo)], 非法,应该为字符型(In 消息推送与用户关系(MessagePushUsersRelation))!(clsMessagePushUsersRelationBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjMessagePushUsersRelationEN.messagePushUsersRelationId 
 || pobjMessagePushUsersRelationEN.messagePushUsersRelationId != null && pobjMessagePushUsersRelationEN.messagePushUsersRelationId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[消息推送用户关系Id]不能为空(In 消息推送与用户关系)!(clsMessagePushUsersRelationBL:CheckProperty4Update)");
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
export  function MessagePushUsersRelation_GetJSONStrByObj (pobjMessagePushUsersRelationEN: clsMessagePushUsersRelationEN): string
{
pobjMessagePushUsersRelationEN.sfUpdFldSetStr = pobjMessagePushUsersRelationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjMessagePushUsersRelationEN);
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
export  function MessagePushUsersRelation_GetObjLstByJSONStr (strJSON: string): Array<clsMessagePushUsersRelationEN>
{
let arrMessagePushUsersRelationObjLst = new Array<clsMessagePushUsersRelationEN>();
if (strJSON === "")
{
return arrMessagePushUsersRelationObjLst;
}
try
{
arrMessagePushUsersRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrMessagePushUsersRelationObjLst;
}
return arrMessagePushUsersRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrMessagePushUsersRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function MessagePushUsersRelation_GetObjLstByJSONObjLst (arrMessagePushUsersRelationObjLstS: Array<clsMessagePushUsersRelationEN>): Array<clsMessagePushUsersRelationEN>
{
const arrMessagePushUsersRelationObjLst = new Array<clsMessagePushUsersRelationEN>();
for (const objInFor of arrMessagePushUsersRelationObjLstS) {
const obj1 = MessagePushUsersRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrMessagePushUsersRelationObjLst.push(obj1);
}
return arrMessagePushUsersRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function MessagePushUsersRelation_GetObjByJSONStr (strJSON: string): clsMessagePushUsersRelationEN
{
let pobjMessagePushUsersRelationEN = new clsMessagePushUsersRelationEN();
if (strJSON === "")
{
return pobjMessagePushUsersRelationEN;
}
try
{
pobjMessagePushUsersRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjMessagePushUsersRelationEN;
}
return pobjMessagePushUsersRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function MessagePushUsersRelation_GetCombineCondition(objMessagePushUsersRelationCond: clsMessagePushUsersRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objMessagePushUsersRelationCond.dicFldComparisonOp, clsMessagePushUsersRelationEN.con_MessagePushUsersRelationId) == true)
{
const strComparisonOpMessagePushUsersRelationId:string = objMessagePushUsersRelationCond.dicFldComparisonOp[clsMessagePushUsersRelationEN.con_MessagePushUsersRelationId];
strWhereCond += Format(" And {0} {2} {1}", clsMessagePushUsersRelationEN.con_MessagePushUsersRelationId, objMessagePushUsersRelationCond.messagePushUsersRelationId, strComparisonOpMessagePushUsersRelationId);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushUsersRelationCond.dicFldComparisonOp, clsMessagePushUsersRelationEN.con_MessagePushId) == true)
{
const strComparisonOpMessagePushId:string = objMessagePushUsersRelationCond.dicFldComparisonOp[clsMessagePushUsersRelationEN.con_MessagePushId];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushUsersRelationEN.con_MessagePushId, objMessagePushUsersRelationCond.messagePushId, strComparisonOpMessagePushId);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushUsersRelationCond.dicFldComparisonOp, clsMessagePushUsersRelationEN.con_ReceivePeople) == true)
{
const strComparisonOpReceivePeople:string = objMessagePushUsersRelationCond.dicFldComparisonOp[clsMessagePushUsersRelationEN.con_ReceivePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushUsersRelationEN.con_ReceivePeople, objMessagePushUsersRelationCond.receivePeople, strComparisonOpReceivePeople);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushUsersRelationCond.dicFldComparisonOp, clsMessagePushUsersRelationEN.con_IsReceive) == true)
{
if (objMessagePushUsersRelationCond.isReceive == true)
{
strWhereCond += Format(" And {0} = '1'", clsMessagePushUsersRelationEN.con_IsReceive);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsMessagePushUsersRelationEN.con_IsReceive);
}
}
if (Object.prototype.hasOwnProperty.call(objMessagePushUsersRelationCond.dicFldComparisonOp, clsMessagePushUsersRelationEN.con_CreateTime) == true)
{
const strComparisonOpCreateTime:string = objMessagePushUsersRelationCond.dicFldComparisonOp[clsMessagePushUsersRelationEN.con_CreateTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushUsersRelationEN.con_CreateTime, objMessagePushUsersRelationCond.createTime, strComparisonOpCreateTime);
}
if (Object.prototype.hasOwnProperty.call(objMessagePushUsersRelationCond.dicFldComparisonOp, clsMessagePushUsersRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objMessagePushUsersRelationCond.dicFldComparisonOp[clsMessagePushUsersRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsMessagePushUsersRelationEN.con_Memo, objMessagePushUsersRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--MessagePushUsersRelation(消息推送与用户关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strMessagePushId: 消息Id(要求唯一的字段)
 * @param strReceivePeople: 接收人员(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function MessagePushUsersRelation_GetUniCondStr(objMessagePushUsersRelationEN: clsMessagePushUsersRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and MessagePushId = '{0}'", objMessagePushUsersRelationEN.messagePushId);
 strWhereCond +=  Format(" and ReceivePeople = '{0}'", objMessagePushUsersRelationEN.receivePeople);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--MessagePushUsersRelation(消息推送与用户关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strMessagePushId: 消息Id(要求唯一的字段)
 * @param strReceivePeople: 接收人员(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function MessagePushUsersRelation_GetUniCondStr4Update(objMessagePushUsersRelationEN: clsMessagePushUsersRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and MessagePushUsersRelationId <> '{0}'", objMessagePushUsersRelationEN.messagePushUsersRelationId);
 strWhereCond +=  Format(" and MessagePushId = '{0}'", objMessagePushUsersRelationEN.messagePushId);
 strWhereCond +=  Format(" and ReceivePeople = '{0}'", objMessagePushUsersRelationEN.receivePeople);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objMessagePushUsersRelationENS:源对象
 * @param objMessagePushUsersRelationENT:目标对象
*/
export  function MessagePushUsersRelation_CopyObjTo(objMessagePushUsersRelationENS: clsMessagePushUsersRelationEN , objMessagePushUsersRelationENT: clsMessagePushUsersRelationEN ): void 
{
objMessagePushUsersRelationENT.messagePushUsersRelationId = objMessagePushUsersRelationENS.messagePushUsersRelationId; //消息推送用户关系Id
objMessagePushUsersRelationENT.messagePushId = objMessagePushUsersRelationENS.messagePushId; //消息Id
objMessagePushUsersRelationENT.receivePeople = objMessagePushUsersRelationENS.receivePeople; //接收人员
objMessagePushUsersRelationENT.isReceive = objMessagePushUsersRelationENS.isReceive; //是否接收
objMessagePushUsersRelationENT.createTime = objMessagePushUsersRelationENS.createTime; //建立时间
objMessagePushUsersRelationENT.memo = objMessagePushUsersRelationENS.memo; //备注
objMessagePushUsersRelationENT.sfUpdFldSetStr = objMessagePushUsersRelationENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objMessagePushUsersRelationENS:源对象
 * @param objMessagePushUsersRelationENT:目标对象
*/
export  function MessagePushUsersRelation_GetObjFromJsonObj(objMessagePushUsersRelationENS: clsMessagePushUsersRelationEN): clsMessagePushUsersRelationEN 
{
 const objMessagePushUsersRelationENT: clsMessagePushUsersRelationEN = new clsMessagePushUsersRelationEN();
ObjectAssign(objMessagePushUsersRelationENT, objMessagePushUsersRelationENS);
 return objMessagePushUsersRelationENT;
}