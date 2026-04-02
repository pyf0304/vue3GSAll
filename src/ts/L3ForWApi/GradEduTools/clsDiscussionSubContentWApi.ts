
 /**
 * 类名:clsDiscussionSubContentWApi
 * 表名:DiscussionSubContent(01120587)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:51
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 讨论子内容(DiscussionSubContent)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsDiscussionSubContentEN } from "@/ts/L0Entity/GradEduTools/clsDiscussionSubContentEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const discussionSubContent_Controller = "DiscussionSubContentApi";
 export const discussionSubContent_ConstructorName = "discussionSubContent";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSubContentId:关键字
 * @returns 对象
 **/
export  async function DiscussionSubContent_GetObjBySubContentIdAsync(strSubContentId: string): Promise<clsDiscussionSubContentEN|null>  
{
const strThisFuncName = "GetObjBySubContentIdAsync";

if (IsNullOrEmpty(strSubContentId) == true)
{
  const strMsg = Format("参数:[strSubContentId]不能为空!(In clsDiscussionSubContentWApi.GetObjBySubContentIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strSubContentId.length != 10)
{
const strMsg = Format("缓存分类变量:[strSubContentId]的长度:[{0}]不正确!(clsDiscussionSubContentWApi.GetObjBySubContentIdAsync)", strSubContentId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjBySubContentId";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSubContentId,
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
const objDiscussionSubContent = DiscussionSubContent_GetObjFromJsonObj(returnObj);
return objDiscussionSubContent;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBySubContentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBySubContentIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameBySubContentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function DiscussionSubContent_SortFunDefa(a:clsDiscussionSubContentEN , b:clsDiscussionSubContentEN): number 
{
return a.subContentId.localeCompare(b.subContentId);
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
export  function DiscussionSubContent_SortFunDefa2Fld(a:clsDiscussionSubContentEN , b:clsDiscussionSubContentEN): number 
{
if (a.subContent == b.subContent) return a.topicsId.localeCompare(b.topicsId);
else return a.subContent.localeCompare(b.subContent);
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
export  function DiscussionSubContent_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsDiscussionSubContentEN.con_SubContentId:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
return a.subContentId.localeCompare(b.subContentId);
}
case clsDiscussionSubContentEN.con_SubContent:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (a.subContent == null) return -1;
if (b.subContent == null) return 1;
return a.subContent.localeCompare(b.subContent);
}
case clsDiscussionSubContentEN.con_TopicsId:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (a.topicsId == null) return -1;
if (b.topicsId == null) return 1;
return a.topicsId.localeCompare(b.topicsId);
}
case clsDiscussionSubContentEN.con_IsTop:
return (a: clsDiscussionSubContentEN) => {
if (a.isTop == true) return 1;
else return -1
}
case clsDiscussionSubContentEN.con_UpdDate:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsDiscussionSubContentEN.con_UpdUser:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsDiscussionSubContentEN.con_Memo:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsDiscussionSubContentEN.con_ParentId:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (a.parentId == null) return -1;
if (b.parentId == null) return 1;
return a.parentId.localeCompare(b.parentId);
}
case clsDiscussionSubContentEN.con_UserId:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[DiscussionSubContent]中不存在!(in ${ discussionSubContent_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsDiscussionSubContentEN.con_SubContentId:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
return b.subContentId.localeCompare(a.subContentId);
}
case clsDiscussionSubContentEN.con_SubContent:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (b.subContent == null) return -1;
if (a.subContent == null) return 1;
return b.subContent.localeCompare(a.subContent);
}
case clsDiscussionSubContentEN.con_TopicsId:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (b.topicsId == null) return -1;
if (a.topicsId == null) return 1;
return b.topicsId.localeCompare(a.topicsId);
}
case clsDiscussionSubContentEN.con_IsTop:
return (b: clsDiscussionSubContentEN) => {
if (b.isTop == true) return 1;
else return -1
}
case clsDiscussionSubContentEN.con_UpdDate:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsDiscussionSubContentEN.con_UpdUser:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsDiscussionSubContentEN.con_Memo:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsDiscussionSubContentEN.con_ParentId:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (b.parentId == null) return -1;
if (a.parentId == null) return 1;
return b.parentId.localeCompare(a.parentId);
}
case clsDiscussionSubContentEN.con_UserId:
return (a: clsDiscussionSubContentEN, b: clsDiscussionSubContentEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[DiscussionSubContent]中不存在!(in ${ discussionSubContent_ConstructorName}.${ strThisFuncName})`;
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
export  async function DiscussionSubContent_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsDiscussionSubContentEN.con_SubContentId:
return (obj: clsDiscussionSubContentEN) => {
return obj.subContentId === value;
}
case clsDiscussionSubContentEN.con_SubContent:
return (obj: clsDiscussionSubContentEN) => {
return obj.subContent === value;
}
case clsDiscussionSubContentEN.con_TopicsId:
return (obj: clsDiscussionSubContentEN) => {
return obj.topicsId === value;
}
case clsDiscussionSubContentEN.con_IsTop:
return (obj: clsDiscussionSubContentEN) => {
return obj.isTop === value;
}
case clsDiscussionSubContentEN.con_UpdDate:
return (obj: clsDiscussionSubContentEN) => {
return obj.updDate === value;
}
case clsDiscussionSubContentEN.con_UpdUser:
return (obj: clsDiscussionSubContentEN) => {
return obj.updUser === value;
}
case clsDiscussionSubContentEN.con_Memo:
return (obj: clsDiscussionSubContentEN) => {
return obj.memo === value;
}
case clsDiscussionSubContentEN.con_ParentId:
return (obj: clsDiscussionSubContentEN) => {
return obj.parentId === value;
}
case clsDiscussionSubContentEN.con_UserId:
return (obj: clsDiscussionSubContentEN) => {
return obj.userId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[DiscussionSubContent]中不存在!(in ${ discussionSubContent_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[DiscussionSubContent__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function DiscussionSubContent_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_GetFirstObjAsync(strWhereCond: string): Promise<clsDiscussionSubContentEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const objDiscussionSubContent = DiscussionSubContent_GetObjFromJsonObj(returnObj);
return objDiscussionSubContent;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_GetObjLstAsync(strWhereCond: string): Promise<Array<clsDiscussionSubContentEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discussionSubContent_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = DiscussionSubContent_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
 * @param arrSubContentId:关键字列表
 * @returns 对象列表
 **/
export  async function DiscussionSubContent_GetObjLstBySubContentIdLstAsync(arrSubContentId: Array<string>): Promise<Array<clsDiscussionSubContentEN>>  
{
const strThisFuncName = "GetObjLstBySubContentIdLstAsync";
const strAction = "GetObjLstBySubContentIdLst";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSubContentId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discussionSubContent_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = DiscussionSubContent_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBySubContentIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function DiscussionSubContent_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsDiscussionSubContentEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discussionSubContent_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = DiscussionSubContent_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsDiscussionSubContentEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discussionSubContent_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = DiscussionSubContent_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsDiscussionSubContentEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsDiscussionSubContentEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discussionSubContent_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = DiscussionSubContent_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
 * @param strSubContentId:关键字
 * @returns 获取删除的结果
 **/
export  async function DiscussionSubContent_DelRecordAsync(strSubContentId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strSubContentId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
 * @param arrSubContentId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function DiscussionSubContent_DelDiscussionSubContentsAsync(arrSubContentId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelDiscussionSubContentsAsync";
const strAction = "DelDiscussionSubContents";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSubContentId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_DelDiscussionSubContentsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelDiscussionSubContentsByCondAsync";
const strAction = "DelDiscussionSubContentsByCond";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
 * @param objDiscussionSubContentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function DiscussionSubContent_AddNewRecordAsync(objDiscussionSubContentEN: clsDiscussionSubContentEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objDiscussionSubContentEN);
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDiscussionSubContentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
 * @param objDiscussionSubContentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function DiscussionSubContent_AddNewRecordWithMaxIdAsync(objDiscussionSubContentEN: clsDiscussionSubContentEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDiscussionSubContentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
 * @param objDiscussionSubContentEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function DiscussionSubContent_AddNewRecordWithReturnKeyAsync(objDiscussionSubContentEN: clsDiscussionSubContentEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDiscussionSubContentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
 * @param objDiscussionSubContentEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function DiscussionSubContent_UpdateRecordAsync(objDiscussionSubContentEN: clsDiscussionSubContentEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objDiscussionSubContentEN.sfUpdFldSetStr === undefined || objDiscussionSubContentEN.sfUpdFldSetStr === null || objDiscussionSubContentEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objDiscussionSubContentEN.subContentId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDiscussionSubContentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
 * @param objDiscussionSubContentEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function DiscussionSubContent_UpdateWithConditionAsync(objDiscussionSubContentEN: clsDiscussionSubContentEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objDiscussionSubContentEN.sfUpdFldSetStr === undefined || objDiscussionSubContentEN.sfUpdFldSetStr === null || objDiscussionSubContentEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objDiscussionSubContentEN.subContentId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);
objDiscussionSubContentEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDiscussionSubContentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
 * @param strSubContentId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function DiscussionSubContent_IsExistAsync(strSubContentId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSubContentId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  async function DiscussionSubContent_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(discussionSubContent_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discussionSubContent_ConstructorName, strThisFuncName);
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
export  function DiscussionSubContent_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function DiscussionSubContent_CheckPropertyNew(pobjDiscussionSubContentEN: clsDiscussionSubContentEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjDiscussionSubContentEN.subContentId) == false && GetStrLen(pobjDiscussionSubContentEN.subContentId) > 10)
{
 throw new Error("(errid:Watl000413)字段[子内容Id(subContentId)]的长度不能超过10(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.subContentId)(clsDiscussionSubContentBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.topicsId) == false && GetStrLen(pobjDiscussionSubContentEN.topicsId) > 8)
{
 throw new Error("(errid:Watl000413)字段[主题Id(topicsId)]的长度不能超过8(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.topicsId)(clsDiscussionSubContentBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.updDate) == false && GetStrLen(pobjDiscussionSubContentEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.updDate)(clsDiscussionSubContentBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.updUser) == false && GetStrLen(pobjDiscussionSubContentEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.updUser)(clsDiscussionSubContentBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.memo) == false && GetStrLen(pobjDiscussionSubContentEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.memo)(clsDiscussionSubContentBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.parentId) == false && GetStrLen(pobjDiscussionSubContentEN.parentId) > 10)
{
 throw new Error("(errid:Watl000413)字段[父节点Id(parentId)]的长度不能超过10(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.parentId)(clsDiscussionSubContentBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.userId) == false && GetStrLen(pobjDiscussionSubContentEN.userId) > 18)
{
 throw new Error("(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.userId)(clsDiscussionSubContentBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjDiscussionSubContentEN.subContentId) == false && undefined !== pobjDiscussionSubContentEN.subContentId && tzDataType.isString(pobjDiscussionSubContentEN.subContentId) === false)
{
 throw new Error("(errid:Watl000414)字段[子内容Id(subContentId)]的值:[$(pobjDiscussionSubContentEN.subContentId)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.subContent) == false && undefined !== pobjDiscussionSubContentEN.subContent && tzDataType.isString(pobjDiscussionSubContentEN.subContent) === false)
{
 throw new Error("(errid:Watl000414)字段[子内容(subContent)]的值:[$(pobjDiscussionSubContentEN.subContent)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.topicsId) == false && undefined !== pobjDiscussionSubContentEN.topicsId && tzDataType.isString(pobjDiscussionSubContentEN.topicsId) === false)
{
 throw new Error("(errid:Watl000414)字段[主题Id(topicsId)]的值:[$(pobjDiscussionSubContentEN.topicsId)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckPropertyNew0)");
}
if (null != pobjDiscussionSubContentEN.isTop && undefined !== pobjDiscussionSubContentEN.isTop && tzDataType.isBoolean(pobjDiscussionSubContentEN.isTop) === false)
{
 throw new Error("(errid:Watl000414)字段[是否置顶(isTop)]的值:[$(pobjDiscussionSubContentEN.isTop)], 非法,应该为布尔型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.updDate) == false && undefined !== pobjDiscussionSubContentEN.updDate && tzDataType.isString(pobjDiscussionSubContentEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjDiscussionSubContentEN.updDate)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.updUser) == false && undefined !== pobjDiscussionSubContentEN.updUser && tzDataType.isString(pobjDiscussionSubContentEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjDiscussionSubContentEN.updUser)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.memo) == false && undefined !== pobjDiscussionSubContentEN.memo && tzDataType.isString(pobjDiscussionSubContentEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjDiscussionSubContentEN.memo)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.parentId) == false && undefined !== pobjDiscussionSubContentEN.parentId && tzDataType.isString(pobjDiscussionSubContentEN.parentId) === false)
{
 throw new Error("(errid:Watl000414)字段[父节点Id(parentId)]的值:[$(pobjDiscussionSubContentEN.parentId)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.userId) == false && undefined !== pobjDiscussionSubContentEN.userId && tzDataType.isString(pobjDiscussionSubContentEN.userId) === false)
{
 throw new Error("(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjDiscussionSubContentEN.userId)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjDiscussionSubContentEN.topicsId) == false && pobjDiscussionSubContentEN.topicsId != '[nuull]' && GetStrLen(pobjDiscussionSubContentEN.topicsId) !=  8)
{
 throw ("(errid:Watl000415)字段[主题Id]作为外键字段,长度应该为8(In 讨论子内容)!(clsDiscussionSubContentBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function DiscussionSubContent_CheckProperty4Update(pobjDiscussionSubContentEN: clsDiscussionSubContentEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjDiscussionSubContentEN.subContentId) == false && GetStrLen(pobjDiscussionSubContentEN.subContentId) > 10)
{
 throw new Error("(errid:Watl000416)字段[子内容Id(subContentId)]的长度不能超过10(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.subContentId)(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.topicsId) == false && GetStrLen(pobjDiscussionSubContentEN.topicsId) > 8)
{
 throw new Error("(errid:Watl000416)字段[主题Id(topicsId)]的长度不能超过8(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.topicsId)(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.updDate) == false && GetStrLen(pobjDiscussionSubContentEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.updDate)(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.updUser) == false && GetStrLen(pobjDiscussionSubContentEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.updUser)(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.memo) == false && GetStrLen(pobjDiscussionSubContentEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.memo)(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.parentId) == false && GetStrLen(pobjDiscussionSubContentEN.parentId) > 10)
{
 throw new Error("(errid:Watl000416)字段[父节点Id(parentId)]的长度不能超过10(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.parentId)(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.userId) == false && GetStrLen(pobjDiscussionSubContentEN.userId) > 18)
{
 throw new Error("(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 讨论子内容(DiscussionSubContent))!值:$(pobjDiscussionSubContentEN.userId)(clsDiscussionSubContentBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjDiscussionSubContentEN.subContentId) == false && undefined !== pobjDiscussionSubContentEN.subContentId && tzDataType.isString(pobjDiscussionSubContentEN.subContentId) === false)
{
 throw new Error("(errid:Watl000417)字段[子内容Id(subContentId)]的值:[$(pobjDiscussionSubContentEN.subContentId)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.subContent) == false && undefined !== pobjDiscussionSubContentEN.subContent && tzDataType.isString(pobjDiscussionSubContentEN.subContent) === false)
{
 throw new Error("(errid:Watl000417)字段[子内容(subContent)]的值:[$(pobjDiscussionSubContentEN.subContent)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.topicsId) == false && undefined !== pobjDiscussionSubContentEN.topicsId && tzDataType.isString(pobjDiscussionSubContentEN.topicsId) === false)
{
 throw new Error("(errid:Watl000417)字段[主题Id(topicsId)]的值:[$(pobjDiscussionSubContentEN.topicsId)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (null != pobjDiscussionSubContentEN.isTop && undefined !== pobjDiscussionSubContentEN.isTop && tzDataType.isBoolean(pobjDiscussionSubContentEN.isTop) === false)
{
 throw new Error("(errid:Watl000417)字段[是否置顶(isTop)]的值:[$(pobjDiscussionSubContentEN.isTop)], 非法,应该为布尔型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.updDate) == false && undefined !== pobjDiscussionSubContentEN.updDate && tzDataType.isString(pobjDiscussionSubContentEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjDiscussionSubContentEN.updDate)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.updUser) == false && undefined !== pobjDiscussionSubContentEN.updUser && tzDataType.isString(pobjDiscussionSubContentEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjDiscussionSubContentEN.updUser)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.memo) == false && undefined !== pobjDiscussionSubContentEN.memo && tzDataType.isString(pobjDiscussionSubContentEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjDiscussionSubContentEN.memo)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.parentId) == false && undefined !== pobjDiscussionSubContentEN.parentId && tzDataType.isString(pobjDiscussionSubContentEN.parentId) === false)
{
 throw new Error("(errid:Watl000417)字段[父节点Id(parentId)]的值:[$(pobjDiscussionSubContentEN.parentId)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjDiscussionSubContentEN.userId) == false && undefined !== pobjDiscussionSubContentEN.userId && tzDataType.isString(pobjDiscussionSubContentEN.userId) === false)
{
 throw new Error("(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjDiscussionSubContentEN.userId)], 非法,应该为字符型(In 讨论子内容(DiscussionSubContent))!(clsDiscussionSubContentBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjDiscussionSubContentEN.topicsId) == false && pobjDiscussionSubContentEN.topicsId != '[nuull]' && GetStrLen(pobjDiscussionSubContentEN.topicsId) !=  8)
{
 throw ("(errid:Watl000418)字段[主题Id]作为外键字段,长度应该为8(In 讨论子内容)!(clsDiscussionSubContentBL:CheckPropertyNew)");
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
export  function DiscussionSubContent_GetJSONStrByObj (pobjDiscussionSubContentEN: clsDiscussionSubContentEN): string
{
pobjDiscussionSubContentEN.sfUpdFldSetStr = pobjDiscussionSubContentEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjDiscussionSubContentEN);
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
export  function DiscussionSubContent_GetObjLstByJSONStr (strJSON: string): Array<clsDiscussionSubContentEN>
{
let arrDiscussionSubContentObjLst = new Array<clsDiscussionSubContentEN>();
if (strJSON === "")
{
return arrDiscussionSubContentObjLst;
}
try
{
arrDiscussionSubContentObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrDiscussionSubContentObjLst;
}
return arrDiscussionSubContentObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDiscussionSubContentObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function DiscussionSubContent_GetObjLstByJSONObjLst (arrDiscussionSubContentObjLstS: Array<clsDiscussionSubContentEN>): Array<clsDiscussionSubContentEN>
{
const arrDiscussionSubContentObjLst = new Array<clsDiscussionSubContentEN>();
for (const objInFor of arrDiscussionSubContentObjLstS) {
const obj1 = DiscussionSubContent_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrDiscussionSubContentObjLst.push(obj1);
}
return arrDiscussionSubContentObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function DiscussionSubContent_GetObjByJSONStr (strJSON: string): clsDiscussionSubContentEN
{
let pobjDiscussionSubContentEN = new clsDiscussionSubContentEN();
if (strJSON === "")
{
return pobjDiscussionSubContentEN;
}
try
{
pobjDiscussionSubContentEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjDiscussionSubContentEN;
}
return pobjDiscussionSubContentEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function DiscussionSubContent_GetCombineCondition(objDiscussionSubContentCond: clsDiscussionSubContentEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objDiscussionSubContentCond.dicFldComparisonOp, clsDiscussionSubContentEN.con_SubContentId) == true)
{
const strComparisonOpSubContentId:string = objDiscussionSubContentCond.dicFldComparisonOp[clsDiscussionSubContentEN.con_SubContentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsDiscussionSubContentEN.con_SubContentId, objDiscussionSubContentCond.subContentId, strComparisonOpSubContentId);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objDiscussionSubContentCond.dicFldComparisonOp, clsDiscussionSubContentEN.con_TopicsId) == true)
{
const strComparisonOpTopicsId:string = objDiscussionSubContentCond.dicFldComparisonOp[clsDiscussionSubContentEN.con_TopicsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsDiscussionSubContentEN.con_TopicsId, objDiscussionSubContentCond.topicsId, strComparisonOpTopicsId);
}
if (Object.prototype.hasOwnProperty.call(objDiscussionSubContentCond.dicFldComparisonOp, clsDiscussionSubContentEN.con_IsTop) == true)
{
if (objDiscussionSubContentCond.isTop == true)
{
strWhereCond += Format(" And {0} = '1'", clsDiscussionSubContentEN.con_IsTop);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsDiscussionSubContentEN.con_IsTop);
}
}
if (Object.prototype.hasOwnProperty.call(objDiscussionSubContentCond.dicFldComparisonOp, clsDiscussionSubContentEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objDiscussionSubContentCond.dicFldComparisonOp[clsDiscussionSubContentEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsDiscussionSubContentEN.con_UpdDate, objDiscussionSubContentCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objDiscussionSubContentCond.dicFldComparisonOp, clsDiscussionSubContentEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objDiscussionSubContentCond.dicFldComparisonOp[clsDiscussionSubContentEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsDiscussionSubContentEN.con_UpdUser, objDiscussionSubContentCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objDiscussionSubContentCond.dicFldComparisonOp, clsDiscussionSubContentEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objDiscussionSubContentCond.dicFldComparisonOp[clsDiscussionSubContentEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsDiscussionSubContentEN.con_Memo, objDiscussionSubContentCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objDiscussionSubContentCond.dicFldComparisonOp, clsDiscussionSubContentEN.con_ParentId) == true)
{
const strComparisonOpParentId:string = objDiscussionSubContentCond.dicFldComparisonOp[clsDiscussionSubContentEN.con_ParentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsDiscussionSubContentEN.con_ParentId, objDiscussionSubContentCond.parentId, strComparisonOpParentId);
}
if (Object.prototype.hasOwnProperty.call(objDiscussionSubContentCond.dicFldComparisonOp, clsDiscussionSubContentEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objDiscussionSubContentCond.dicFldComparisonOp[clsDiscussionSubContentEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsDiscussionSubContentEN.con_UserId, objDiscussionSubContentCond.userId, strComparisonOpUserId);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--DiscussionSubContent(讨论子内容),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strSubContent: 子内容(要求唯一的字段)
 * @param strTopicsId: 主题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function DiscussionSubContent_GetUniCondStr(objDiscussionSubContentEN: clsDiscussionSubContentEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and SubContent = '{0}'", objDiscussionSubContentEN.subContent);
 strWhereCond +=  Format(" and TopicsId = '{0}'", objDiscussionSubContentEN.topicsId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--DiscussionSubContent(讨论子内容),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strSubContent: 子内容(要求唯一的字段)
 * @param strTopicsId: 主题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function DiscussionSubContent_GetUniCondStr4Update(objDiscussionSubContentEN: clsDiscussionSubContentEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and SubContentId <> '{0}'", objDiscussionSubContentEN.subContentId);
 strWhereCond +=  Format(" and SubContent = '{0}'", objDiscussionSubContentEN.subContent);
 strWhereCond +=  Format(" and TopicsId = '{0}'", objDiscussionSubContentEN.topicsId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objDiscussionSubContentENS:源对象
 * @param objDiscussionSubContentENT:目标对象
*/
export  function DiscussionSubContent_CopyObjTo(objDiscussionSubContentENS: clsDiscussionSubContentEN , objDiscussionSubContentENT: clsDiscussionSubContentEN ): void 
{
objDiscussionSubContentENT.subContentId = objDiscussionSubContentENS.subContentId; //子内容Id
objDiscussionSubContentENT.subContent = objDiscussionSubContentENS.subContent; //子内容
objDiscussionSubContentENT.topicsId = objDiscussionSubContentENS.topicsId; //主题Id
objDiscussionSubContentENT.isTop = objDiscussionSubContentENS.isTop; //是否置顶
objDiscussionSubContentENT.updDate = objDiscussionSubContentENS.updDate; //修改日期
objDiscussionSubContentENT.updUser = objDiscussionSubContentENS.updUser; //修改人
objDiscussionSubContentENT.memo = objDiscussionSubContentENS.memo; //备注
objDiscussionSubContentENT.parentId = objDiscussionSubContentENS.parentId; //父节点Id
objDiscussionSubContentENT.userId = objDiscussionSubContentENS.userId; //用户ID
objDiscussionSubContentENT.sfUpdFldSetStr = objDiscussionSubContentENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDiscussionSubContentENS:源对象
 * @param objDiscussionSubContentENT:目标对象
*/
export  function DiscussionSubContent_GetObjFromJsonObj(objDiscussionSubContentENS: clsDiscussionSubContentEN): clsDiscussionSubContentEN 
{
 const objDiscussionSubContentENT: clsDiscussionSubContentEN = new clsDiscussionSubContentEN();
ObjectAssign(objDiscussionSubContentENT, objDiscussionSubContentENS);
 return objDiscussionSubContentENT;
}