
 /**
 * 类名:clsvMessagePushUsersRelationWApi
 * 表名:vMessagePushUsersRelation(01120285)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:56
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
 * 消息推送用户关系视图(vMessagePushUsersRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvMessagePushUsersRelationEN } from "@/ts/L0Entity/NewsAnn/clsvMessagePushUsersRelationEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vMessagePushUsersRelation_Controller = "vMessagePushUsersRelationApi";
 export const vMessagePushUsersRelation_ConstructorName = "vMessagePushUsersRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngMessagePushUsersRelationId:关键字
 * @returns 对象
 **/
export  async function vMessagePushUsersRelation_GetObjByMessagePushUsersRelationIdAsync(lngMessagePushUsersRelationId: number): Promise<clsvMessagePushUsersRelationEN|null>  
{
const strThisFuncName = "GetObjByMessagePushUsersRelationIdAsync";

if (lngMessagePushUsersRelationId == 0)
{
  const strMsg = Format("参数:[lngMessagePushUsersRelationId]不能为空!(In clsvMessagePushUsersRelationWApi.GetObjByMessagePushUsersRelationIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByMessagePushUsersRelationId";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const objvMessagePushUsersRelation = vMessagePushUsersRelation_GetObjFromJsonObj(returnObj);
return objvMessagePushUsersRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  function vMessagePushUsersRelation_SortFunDefa(a:clsvMessagePushUsersRelationEN , b:clsvMessagePushUsersRelationEN): number 
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
export  function vMessagePushUsersRelation_SortFunDefa2Fld(a:clsvMessagePushUsersRelationEN , b:clsvMessagePushUsersRelationEN): number 
{
if (a.messagePushId == b.messagePushId) return a.messagePushNumber.localeCompare(b.messagePushNumber);
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
export  function vMessagePushUsersRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvMessagePushUsersRelationEN.con_MessagePushUsersRelationId:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
return a.messagePushUsersRelationId-b.messagePushUsersRelationId;
}
case clsvMessagePushUsersRelationEN.con_MessagePushId:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
return a.messagePushId.localeCompare(b.messagePushId);
}
case clsvMessagePushUsersRelationEN.con_MessagePushNumber:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (a.messagePushNumber == null) return -1;
if (b.messagePushNumber == null) return 1;
return a.messagePushNumber.localeCompare(b.messagePushNumber);
}
case clsvMessagePushUsersRelationEN.con_MessageTitle:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (a.messageTitle == null) return -1;
if (b.messageTitle == null) return 1;
return a.messageTitle.localeCompare(b.messageTitle);
}
case clsvMessagePushUsersRelationEN.con_MessageContent:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (a.messageContent == null) return -1;
if (b.messageContent == null) return 1;
return a.messageContent.localeCompare(b.messageContent);
}
case clsvMessagePushUsersRelationEN.con_MessageTypeId:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (a.messageTypeId == null) return -1;
if (b.messageTypeId == null) return 1;
return a.messageTypeId.localeCompare(b.messageTypeId);
}
case clsvMessagePushUsersRelationEN.con_IsAllpush:
return (a: clsvMessagePushUsersRelationEN) => {
if (a.isAllpush == true) return 1;
else return -1
}
case clsvMessagePushUsersRelationEN.con_ClientVersionTypeId:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (a.clientVersionTypeId == null) return -1;
if (b.clientVersionTypeId == null) return 1;
return a.clientVersionTypeId.localeCompare(b.clientVersionTypeId);
}
case clsvMessagePushUsersRelationEN.con_ReceivePeople:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
return a.receivePeople.localeCompare(b.receivePeople);
}
case clsvMessagePushUsersRelationEN.con_IsReceive:
return (a: clsvMessagePushUsersRelationEN) => {
if (a.isReceive == true) return 1;
else return -1
}
case clsvMessagePushUsersRelationEN.con_CreateTime:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (a.createTime == null) return -1;
if (b.createTime == null) return 1;
return a.createTime.localeCompare(b.createTime);
}
case clsvMessagePushUsersRelationEN.con_Memo:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vMessagePushUsersRelation]中不存在!(in ${ vMessagePushUsersRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvMessagePushUsersRelationEN.con_MessagePushUsersRelationId:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
return b.messagePushUsersRelationId-a.messagePushUsersRelationId;
}
case clsvMessagePushUsersRelationEN.con_MessagePushId:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
return b.messagePushId.localeCompare(a.messagePushId);
}
case clsvMessagePushUsersRelationEN.con_MessagePushNumber:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (b.messagePushNumber == null) return -1;
if (a.messagePushNumber == null) return 1;
return b.messagePushNumber.localeCompare(a.messagePushNumber);
}
case clsvMessagePushUsersRelationEN.con_MessageTitle:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (b.messageTitle == null) return -1;
if (a.messageTitle == null) return 1;
return b.messageTitle.localeCompare(a.messageTitle);
}
case clsvMessagePushUsersRelationEN.con_MessageContent:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (b.messageContent == null) return -1;
if (a.messageContent == null) return 1;
return b.messageContent.localeCompare(a.messageContent);
}
case clsvMessagePushUsersRelationEN.con_MessageTypeId:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (b.messageTypeId == null) return -1;
if (a.messageTypeId == null) return 1;
return b.messageTypeId.localeCompare(a.messageTypeId);
}
case clsvMessagePushUsersRelationEN.con_IsAllpush:
return (b: clsvMessagePushUsersRelationEN) => {
if (b.isAllpush == true) return 1;
else return -1
}
case clsvMessagePushUsersRelationEN.con_ClientVersionTypeId:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (b.clientVersionTypeId == null) return -1;
if (a.clientVersionTypeId == null) return 1;
return b.clientVersionTypeId.localeCompare(a.clientVersionTypeId);
}
case clsvMessagePushUsersRelationEN.con_ReceivePeople:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
return b.receivePeople.localeCompare(a.receivePeople);
}
case clsvMessagePushUsersRelationEN.con_IsReceive:
return (b: clsvMessagePushUsersRelationEN) => {
if (b.isReceive == true) return 1;
else return -1
}
case clsvMessagePushUsersRelationEN.con_CreateTime:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (b.createTime == null) return -1;
if (a.createTime == null) return 1;
return b.createTime.localeCompare(a.createTime);
}
case clsvMessagePushUsersRelationEN.con_Memo:
return (a: clsvMessagePushUsersRelationEN, b: clsvMessagePushUsersRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vMessagePushUsersRelation]中不存在!(in ${ vMessagePushUsersRelation_ConstructorName}.${ strThisFuncName})`;
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
export  async function vMessagePushUsersRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvMessagePushUsersRelationEN.con_MessagePushUsersRelationId:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.messagePushUsersRelationId === value;
}
case clsvMessagePushUsersRelationEN.con_MessagePushId:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.messagePushId === value;
}
case clsvMessagePushUsersRelationEN.con_MessagePushNumber:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.messagePushNumber === value;
}
case clsvMessagePushUsersRelationEN.con_MessageTitle:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.messageTitle === value;
}
case clsvMessagePushUsersRelationEN.con_MessageContent:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.messageContent === value;
}
case clsvMessagePushUsersRelationEN.con_MessageTypeId:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.messageTypeId === value;
}
case clsvMessagePushUsersRelationEN.con_IsAllpush:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.isAllpush === value;
}
case clsvMessagePushUsersRelationEN.con_ClientVersionTypeId:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.clientVersionTypeId === value;
}
case clsvMessagePushUsersRelationEN.con_ReceivePeople:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.receivePeople === value;
}
case clsvMessagePushUsersRelationEN.con_IsReceive:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.isReceive === value;
}
case clsvMessagePushUsersRelationEN.con_CreateTime:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.createTime === value;
}
case clsvMessagePushUsersRelationEN.con_Memo:
return (obj: clsvMessagePushUsersRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vMessagePushUsersRelation]中不存在!(in ${ vMessagePushUsersRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vMessagePushUsersRelation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vMessagePushUsersRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_GetFirstObjAsync(strWhereCond: string): Promise<clsvMessagePushUsersRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const objvMessagePushUsersRelation = vMessagePushUsersRelation_GetObjFromJsonObj(returnObj);
return objvMessagePushUsersRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_GetObjLstByMessagePushUsersRelationIdLstAsync(arrMessagePushUsersRelationId: Array<string>): Promise<Array<clsvMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetObjLstByMessagePushUsersRelationIdLstAsync";
const strAction = "GetObjLstByMessagePushUsersRelationIdLst";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvMessagePushUsersRelationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvMessagePushUsersRelationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMessagePushUsersRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_IsExistAsync(lngMessagePushUsersRelationId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  async function vMessagePushUsersRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vMessagePushUsersRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMessagePushUsersRelation_ConstructorName, strThisFuncName);
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
export  function vMessagePushUsersRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vMessagePushUsersRelation_GetJSONStrByObj (pobjvMessagePushUsersRelationEN: clsvMessagePushUsersRelationEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvMessagePushUsersRelationEN);
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
export  function vMessagePushUsersRelation_GetObjLstByJSONStr (strJSON: string): Array<clsvMessagePushUsersRelationEN>
{
let arrvMessagePushUsersRelationObjLst = new Array<clsvMessagePushUsersRelationEN>();
if (strJSON === "")
{
return arrvMessagePushUsersRelationObjLst;
}
try
{
arrvMessagePushUsersRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvMessagePushUsersRelationObjLst;
}
return arrvMessagePushUsersRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvMessagePushUsersRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vMessagePushUsersRelation_GetObjLstByJSONObjLst (arrvMessagePushUsersRelationObjLstS: Array<clsvMessagePushUsersRelationEN>): Array<clsvMessagePushUsersRelationEN>
{
const arrvMessagePushUsersRelationObjLst = new Array<clsvMessagePushUsersRelationEN>();
for (const objInFor of arrvMessagePushUsersRelationObjLstS) {
const obj1 = vMessagePushUsersRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvMessagePushUsersRelationObjLst.push(obj1);
}
return arrvMessagePushUsersRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vMessagePushUsersRelation_GetObjByJSONStr (strJSON: string): clsvMessagePushUsersRelationEN
{
let pobjvMessagePushUsersRelationEN = new clsvMessagePushUsersRelationEN();
if (strJSON === "")
{
return pobjvMessagePushUsersRelationEN;
}
try
{
pobjvMessagePushUsersRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvMessagePushUsersRelationEN;
}
return pobjvMessagePushUsersRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vMessagePushUsersRelation_GetCombineCondition(objvMessagePushUsersRelationCond: clsvMessagePushUsersRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_MessagePushUsersRelationId) == true)
{
const strComparisonOpMessagePushUsersRelationId:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_MessagePushUsersRelationId];
strWhereCond += Format(" And {0} {2} {1}", clsvMessagePushUsersRelationEN.con_MessagePushUsersRelationId, objvMessagePushUsersRelationCond.messagePushUsersRelationId, strComparisonOpMessagePushUsersRelationId);
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_MessagePushId) == true)
{
const strComparisonOpMessagePushId:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_MessagePushId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMessagePushUsersRelationEN.con_MessagePushId, objvMessagePushUsersRelationCond.messagePushId, strComparisonOpMessagePushId);
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_MessagePushNumber) == true)
{
const strComparisonOpMessagePushNumber:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_MessagePushNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMessagePushUsersRelationEN.con_MessagePushNumber, objvMessagePushUsersRelationCond.messagePushNumber, strComparisonOpMessagePushNumber);
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_MessageTitle) == true)
{
const strComparisonOpMessageTitle:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_MessageTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMessagePushUsersRelationEN.con_MessageTitle, objvMessagePushUsersRelationCond.messageTitle, strComparisonOpMessageTitle);
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_MessageContent) == true)
{
const strComparisonOpMessageContent:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_MessageContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMessagePushUsersRelationEN.con_MessageContent, objvMessagePushUsersRelationCond.messageContent, strComparisonOpMessageContent);
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_MessageTypeId) == true)
{
const strComparisonOpMessageTypeId:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_MessageTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMessagePushUsersRelationEN.con_MessageTypeId, objvMessagePushUsersRelationCond.messageTypeId, strComparisonOpMessageTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_IsAllpush) == true)
{
if (objvMessagePushUsersRelationCond.isAllpush == true)
{
strWhereCond += Format(" And {0} = '1'", clsvMessagePushUsersRelationEN.con_IsAllpush);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvMessagePushUsersRelationEN.con_IsAllpush);
}
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_ClientVersionTypeId) == true)
{
const strComparisonOpClientVersionTypeId:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_ClientVersionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMessagePushUsersRelationEN.con_ClientVersionTypeId, objvMessagePushUsersRelationCond.clientVersionTypeId, strComparisonOpClientVersionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_ReceivePeople) == true)
{
const strComparisonOpReceivePeople:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_ReceivePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMessagePushUsersRelationEN.con_ReceivePeople, objvMessagePushUsersRelationCond.receivePeople, strComparisonOpReceivePeople);
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_IsReceive) == true)
{
if (objvMessagePushUsersRelationCond.isReceive == true)
{
strWhereCond += Format(" And {0} = '1'", clsvMessagePushUsersRelationEN.con_IsReceive);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvMessagePushUsersRelationEN.con_IsReceive);
}
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_CreateTime) == true)
{
const strComparisonOpCreateTime:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_CreateTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMessagePushUsersRelationEN.con_CreateTime, objvMessagePushUsersRelationCond.createTime, strComparisonOpCreateTime);
}
if (Object.prototype.hasOwnProperty.call(objvMessagePushUsersRelationCond.dicFldComparisonOp, clsvMessagePushUsersRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvMessagePushUsersRelationCond.dicFldComparisonOp[clsvMessagePushUsersRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMessagePushUsersRelationEN.con_Memo, objvMessagePushUsersRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvMessagePushUsersRelationENS:源对象
 * @param objvMessagePushUsersRelationENT:目标对象
*/
export  function vMessagePushUsersRelation_CopyObjTo(objvMessagePushUsersRelationENS: clsvMessagePushUsersRelationEN , objvMessagePushUsersRelationENT: clsvMessagePushUsersRelationEN ): void 
{
objvMessagePushUsersRelationENT.messagePushUsersRelationId = objvMessagePushUsersRelationENS.messagePushUsersRelationId; //消息推送与用户关系Id
objvMessagePushUsersRelationENT.messagePushId = objvMessagePushUsersRelationENS.messagePushId; //消息Id
objvMessagePushUsersRelationENT.messagePushNumber = objvMessagePushUsersRelationENS.messagePushNumber; //消息编号
objvMessagePushUsersRelationENT.messageTitle = objvMessagePushUsersRelationENS.messageTitle; //消息标题
objvMessagePushUsersRelationENT.messageContent = objvMessagePushUsersRelationENS.messageContent; //消息内容
objvMessagePushUsersRelationENT.messageTypeId = objvMessagePushUsersRelationENS.messageTypeId; //消息类型Id
objvMessagePushUsersRelationENT.isAllpush = objvMessagePushUsersRelationENS.isAllpush; //是否全体推送
objvMessagePushUsersRelationENT.clientVersionTypeId = objvMessagePushUsersRelationENS.clientVersionTypeId; //客户端版本类型Id
objvMessagePushUsersRelationENT.receivePeople = objvMessagePushUsersRelationENS.receivePeople; //接收人员
objvMessagePushUsersRelationENT.isReceive = objvMessagePushUsersRelationENS.isReceive; //是否接收
objvMessagePushUsersRelationENT.createTime = objvMessagePushUsersRelationENS.createTime; //建立时间
objvMessagePushUsersRelationENT.memo = objvMessagePushUsersRelationENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvMessagePushUsersRelationENS:源对象
 * @param objvMessagePushUsersRelationENT:目标对象
*/
export  function vMessagePushUsersRelation_GetObjFromJsonObj(objvMessagePushUsersRelationENS: clsvMessagePushUsersRelationEN): clsvMessagePushUsersRelationEN 
{
 const objvMessagePushUsersRelationENT: clsvMessagePushUsersRelationEN = new clsvMessagePushUsersRelationEN();
ObjectAssign(objvMessagePushUsersRelationENT, objvMessagePushUsersRelationENS);
 return objvMessagePushUsersRelationENT;
}