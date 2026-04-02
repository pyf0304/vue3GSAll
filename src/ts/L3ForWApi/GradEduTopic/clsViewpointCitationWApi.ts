
 /**
 * 类名:clsViewpointCitationWApi
 * 表名:ViewpointCitation(01120592)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:38
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
 * 观点引用关系(ViewpointCitation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsViewpointCitationEN } from "@/ts/L0Entity/GradEduTopic/clsViewpointCitationEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const viewpointCitation_Controller = "ViewpointCitationApi";
 export const viewpointCitation_ConstructorName = "viewpointCitation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ViewpointCitation_GetObjBymIdAsync(lngmId: number): Promise<clsViewpointCitationEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsViewpointCitationWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId,
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
const objViewpointCitation = ViewpointCitation_GetObjFromJsonObj(returnObj);
return objViewpointCitation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function ViewpointCitation_SortFunDefa(a:clsViewpointCitationEN , b:clsViewpointCitationEN): number 
{
return a.mId-b.mId;
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
export  function ViewpointCitation_SortFunDefa2Fld(a:clsViewpointCitationEN , b:clsViewpointCitationEN): number 
{
if (a.viewpointId == b.viewpointId) return a.paperId.localeCompare(b.paperId);
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
export  function ViewpointCitation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsViewpointCitationEN.con_mId:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
return a.mId-b.mId;
}
case clsViewpointCitationEN.con_ViewpointId:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (a.viewpointId == null) return -1;
if (b.viewpointId == null) return 1;
return a.viewpointId.localeCompare(b.viewpointId);
}
case clsViewpointCitationEN.con_PaperId:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsViewpointCitationEN.con_UpdUserId:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsViewpointCitationEN.con_Memo:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsViewpointCitationEN.con_UpdDate:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ViewpointCitation]中不存在!(in ${ viewpointCitation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsViewpointCitationEN.con_mId:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
return b.mId-a.mId;
}
case clsViewpointCitationEN.con_ViewpointId:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (b.viewpointId == null) return -1;
if (a.viewpointId == null) return 1;
return b.viewpointId.localeCompare(a.viewpointId);
}
case clsViewpointCitationEN.con_PaperId:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsViewpointCitationEN.con_UpdUserId:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsViewpointCitationEN.con_Memo:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsViewpointCitationEN.con_UpdDate:
return (a: clsViewpointCitationEN, b: clsViewpointCitationEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ViewpointCitation]中不存在!(in ${ viewpointCitation_ConstructorName}.${ strThisFuncName})`;
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
export  async function ViewpointCitation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsViewpointCitationEN.con_mId:
return (obj: clsViewpointCitationEN) => {
return obj.mId === value;
}
case clsViewpointCitationEN.con_ViewpointId:
return (obj: clsViewpointCitationEN) => {
return obj.viewpointId === value;
}
case clsViewpointCitationEN.con_PaperId:
return (obj: clsViewpointCitationEN) => {
return obj.paperId === value;
}
case clsViewpointCitationEN.con_UpdUserId:
return (obj: clsViewpointCitationEN) => {
return obj.updUserId === value;
}
case clsViewpointCitationEN.con_Memo:
return (obj: clsViewpointCitationEN) => {
return obj.memo === value;
}
case clsViewpointCitationEN.con_UpdDate:
return (obj: clsViewpointCitationEN) => {
return obj.updDate === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ViewpointCitation]中不存在!(in ${ viewpointCitation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[ViewpointCitation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ViewpointCitation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  async function ViewpointCitation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  async function ViewpointCitation_GetFirstObjAsync(strWhereCond: string): Promise<clsViewpointCitationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const objViewpointCitation = ViewpointCitation_GetObjFromJsonObj(returnObj);
return objViewpointCitation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  async function ViewpointCitation_GetObjLstAsync(strWhereCond: string): Promise<Array<clsViewpointCitationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function ViewpointCitation_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsViewpointCitationEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ViewpointCitation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsViewpointCitationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  async function ViewpointCitation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsViewpointCitationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  async function ViewpointCitation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsViewpointCitationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsViewpointCitationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpointCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ViewpointCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export  async function ViewpointCitation_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngmId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ViewpointCitation_DelViewpointCitationsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelViewpointCitationsAsync";
const strAction = "DelViewpointCitations";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  async function ViewpointCitation_DelViewpointCitationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelViewpointCitationsByCondAsync";
const strAction = "DelViewpointCitationsByCond";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
 * @param objViewpointCitationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ViewpointCitation_AddNewRecordAsync(objViewpointCitationEN: clsViewpointCitationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objViewpointCitationEN);
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointCitationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
 * @param objViewpointCitationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ViewpointCitation_AddNewRecordWithReturnKeyAsync(objViewpointCitationEN: clsViewpointCitationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointCitationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
 * @param objViewpointCitationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ViewpointCitation_UpdateRecordAsync(objViewpointCitationEN: clsViewpointCitationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objViewpointCitationEN.sfUpdFldSetStr === undefined || objViewpointCitationEN.sfUpdFldSetStr === null || objViewpointCitationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objViewpointCitationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointCitationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
 * @param objViewpointCitationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ViewpointCitation_UpdateWithConditionAsync(objViewpointCitationEN: clsViewpointCitationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objViewpointCitationEN.sfUpdFldSetStr === undefined || objViewpointCitationEN.sfUpdFldSetStr === null || objViewpointCitationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objViewpointCitationEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);
objViewpointCitationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointCitationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  async function ViewpointCitation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ViewpointCitation_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  async function ViewpointCitation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  async function ViewpointCitation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(viewpointCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpointCitation_ConstructorName, strThisFuncName);
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
export  function ViewpointCitation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ViewpointCitation_CheckPropertyNew(pobjViewpointCitationEN: clsViewpointCitationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjViewpointCitationEN.viewpointId) == false && GetStrLen(pobjViewpointCitationEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000413)字段[观点Id(viewpointId)]的长度不能超过8(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.viewpointId)(clsViewpointCitationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.paperId) == false && GetStrLen(pobjViewpointCitationEN.paperId) > 8)
{
 throw new Error("(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.paperId)(clsViewpointCitationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.updUserId) == false && GetStrLen(pobjViewpointCitationEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.updUserId)(clsViewpointCitationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.memo) == false && GetStrLen(pobjViewpointCitationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.memo)(clsViewpointCitationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.updDate) == false && GetStrLen(pobjViewpointCitationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.updDate)(clsViewpointCitationBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjViewpointCitationEN.mId && undefined !== pobjViewpointCitationEN.mId && tzDataType.isNumber(pobjViewpointCitationEN.mId) === false)
{
 throw new Error("(errid:Watl000414)字段[mId(mId)]的值:[$(pobjViewpointCitationEN.mId)], 非法,应该为数值型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.viewpointId) == false && undefined !== pobjViewpointCitationEN.viewpointId && tzDataType.isString(pobjViewpointCitationEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000414)字段[观点Id(viewpointId)]的值:[$(pobjViewpointCitationEN.viewpointId)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.paperId) == false && undefined !== pobjViewpointCitationEN.paperId && tzDataType.isString(pobjViewpointCitationEN.paperId) === false)
{
 throw new Error("(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjViewpointCitationEN.paperId)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.updUserId) == false && undefined !== pobjViewpointCitationEN.updUserId && tzDataType.isString(pobjViewpointCitationEN.updUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjViewpointCitationEN.updUserId)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.memo) == false && undefined !== pobjViewpointCitationEN.memo && tzDataType.isString(pobjViewpointCitationEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjViewpointCitationEN.memo)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.updDate) == false && undefined !== pobjViewpointCitationEN.updDate && tzDataType.isString(pobjViewpointCitationEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewpointCitationEN.updDate)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ViewpointCitation_CheckProperty4Update(pobjViewpointCitationEN: clsViewpointCitationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjViewpointCitationEN.viewpointId) == false && GetStrLen(pobjViewpointCitationEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000416)字段[观点Id(viewpointId)]的长度不能超过8(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.viewpointId)(clsViewpointCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.paperId) == false && GetStrLen(pobjViewpointCitationEN.paperId) > 8)
{
 throw new Error("(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.paperId)(clsViewpointCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.updUserId) == false && GetStrLen(pobjViewpointCitationEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.updUserId)(clsViewpointCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.memo) == false && GetStrLen(pobjViewpointCitationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.memo)(clsViewpointCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.updDate) == false && GetStrLen(pobjViewpointCitationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 观点引用关系(ViewpointCitation))!值:$(pobjViewpointCitationEN.updDate)(clsViewpointCitationBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjViewpointCitationEN.mId && undefined !== pobjViewpointCitationEN.mId && tzDataType.isNumber(pobjViewpointCitationEN.mId) === false)
{
 throw new Error("(errid:Watl000417)字段[mId(mId)]的值:[$(pobjViewpointCitationEN.mId)], 非法,应该为数值型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.viewpointId) == false && undefined !== pobjViewpointCitationEN.viewpointId && tzDataType.isString(pobjViewpointCitationEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000417)字段[观点Id(viewpointId)]的值:[$(pobjViewpointCitationEN.viewpointId)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.paperId) == false && undefined !== pobjViewpointCitationEN.paperId && tzDataType.isString(pobjViewpointCitationEN.paperId) === false)
{
 throw new Error("(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjViewpointCitationEN.paperId)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.updUserId) == false && undefined !== pobjViewpointCitationEN.updUserId && tzDataType.isString(pobjViewpointCitationEN.updUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjViewpointCitationEN.updUserId)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.memo) == false && undefined !== pobjViewpointCitationEN.memo && tzDataType.isString(pobjViewpointCitationEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjViewpointCitationEN.memo)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointCitationEN.updDate) == false && undefined !== pobjViewpointCitationEN.updDate && tzDataType.isString(pobjViewpointCitationEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewpointCitationEN.updDate)], 非法,应该为字符型(In 观点引用关系(ViewpointCitation))!(clsViewpointCitationBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjViewpointCitationEN.mId 
 || pobjViewpointCitationEN.mId != null && pobjViewpointCitationEN.mId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[mId]不能为空(In 观点引用关系)!(clsViewpointCitationBL:CheckProperty4Update)");
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
export  function ViewpointCitation_GetJSONStrByObj (pobjViewpointCitationEN: clsViewpointCitationEN): string
{
pobjViewpointCitationEN.sfUpdFldSetStr = pobjViewpointCitationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjViewpointCitationEN);
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
export  function ViewpointCitation_GetObjLstByJSONStr (strJSON: string): Array<clsViewpointCitationEN>
{
let arrViewpointCitationObjLst = new Array<clsViewpointCitationEN>();
if (strJSON === "")
{
return arrViewpointCitationObjLst;
}
try
{
arrViewpointCitationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrViewpointCitationObjLst;
}
return arrViewpointCitationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewpointCitationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ViewpointCitation_GetObjLstByJSONObjLst (arrViewpointCitationObjLstS: Array<clsViewpointCitationEN>): Array<clsViewpointCitationEN>
{
const arrViewpointCitationObjLst = new Array<clsViewpointCitationEN>();
for (const objInFor of arrViewpointCitationObjLstS) {
const obj1 = ViewpointCitation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrViewpointCitationObjLst.push(obj1);
}
return arrViewpointCitationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ViewpointCitation_GetObjByJSONStr (strJSON: string): clsViewpointCitationEN
{
let pobjViewpointCitationEN = new clsViewpointCitationEN();
if (strJSON === "")
{
return pobjViewpointCitationEN;
}
try
{
pobjViewpointCitationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjViewpointCitationEN;
}
return pobjViewpointCitationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ViewpointCitation_GetCombineCondition(objViewpointCitationCond: clsViewpointCitationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objViewpointCitationCond.dicFldComparisonOp, clsViewpointCitationEN.con_mId) == true)
{
const strComparisonOpmId:string = objViewpointCitationCond.dicFldComparisonOp[clsViewpointCitationEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointCitationEN.con_mId, objViewpointCitationCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCitationCond.dicFldComparisonOp, clsViewpointCitationEN.con_ViewpointId) == true)
{
const strComparisonOpViewpointId:string = objViewpointCitationCond.dicFldComparisonOp[clsViewpointCitationEN.con_ViewpointId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointCitationEN.con_ViewpointId, objViewpointCitationCond.viewpointId, strComparisonOpViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCitationCond.dicFldComparisonOp, clsViewpointCitationEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objViewpointCitationCond.dicFldComparisonOp[clsViewpointCitationEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointCitationEN.con_PaperId, objViewpointCitationCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCitationCond.dicFldComparisonOp, clsViewpointCitationEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objViewpointCitationCond.dicFldComparisonOp[clsViewpointCitationEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointCitationEN.con_UpdUserId, objViewpointCitationCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCitationCond.dicFldComparisonOp, clsViewpointCitationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objViewpointCitationCond.dicFldComparisonOp[clsViewpointCitationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointCitationEN.con_Memo, objViewpointCitationCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCitationCond.dicFldComparisonOp, clsViewpointCitationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objViewpointCitationCond.dicFldComparisonOp[clsViewpointCitationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointCitationEN.con_UpdDate, objViewpointCitationCond.updDate, strComparisonOpUpdDate);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ViewpointCitation(观点引用关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ViewpointCitation_GetUniCondStr(objViewpointCitationEN: clsViewpointCitationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and mId = '{0}'", objViewpointCitationEN.mId);
 strWhereCond +=  Format(" and ViewpointId = '{0}'", objViewpointCitationEN.viewpointId);
 strWhereCond +=  Format(" and PaperId = '{0}'", objViewpointCitationEN.paperId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ViewpointCitation(观点引用关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ViewpointCitation_GetUniCondStr4Update(objViewpointCitationEN: clsViewpointCitationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objViewpointCitationEN.mId);
 strWhereCond +=  Format(" and mId = '{0}'", objViewpointCitationEN.mId);
 strWhereCond +=  Format(" and ViewpointId = '{0}'", objViewpointCitationEN.viewpointId);
 strWhereCond +=  Format(" and PaperId = '{0}'", objViewpointCitationEN.paperId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objViewpointCitationENS:源对象
 * @param objViewpointCitationENT:目标对象
*/
export  function ViewpointCitation_CopyObjTo(objViewpointCitationENS: clsViewpointCitationEN , objViewpointCitationENT: clsViewpointCitationEN ): void 
{
objViewpointCitationENT.mId = objViewpointCitationENS.mId; //mId
objViewpointCitationENT.viewpointId = objViewpointCitationENS.viewpointId; //观点Id
objViewpointCitationENT.paperId = objViewpointCitationENS.paperId; //论文Id
objViewpointCitationENT.updUserId = objViewpointCitationENS.updUserId; //修改用户Id
objViewpointCitationENT.memo = objViewpointCitationENS.memo; //备注
objViewpointCitationENT.updDate = objViewpointCitationENS.updDate; //修改日期
objViewpointCitationENT.sfUpdFldSetStr = objViewpointCitationENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewpointCitationENS:源对象
 * @param objViewpointCitationENT:目标对象
*/
export  function ViewpointCitation_GetObjFromJsonObj(objViewpointCitationENS: clsViewpointCitationEN): clsViewpointCitationEN 
{
 const objViewpointCitationENT: clsViewpointCitationEN = new clsViewpointCitationEN();
ObjectAssign(objViewpointCitationENT, objViewpointCitationENS);
 return objViewpointCitationENT;
}