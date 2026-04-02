
 /**
 * 类名:clsgs_PViewpointRelaWApi
 * 表名:gs_PViewpointRela(01120674)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:03
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
 * 论文观点关系表(gs_PViewpointRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsgs_PViewpointRelaEN } from "@/ts/L0Entity/GradEduPaper/clsgs_PViewpointRelaEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_PViewpointRela_Controller = "gs_PViewpointRelaApi";
 export const gs_PViewpointRela_ConstructorName = "gs_PViewpointRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function gs_PViewpointRela_GetObjBymIdAsync(lngmId: number): Promise<clsgs_PViewpointRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsgs_PViewpointRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const objgs_PViewpointRela = gs_PViewpointRela_GetObjFromJsonObj(returnObj);
return objgs_PViewpointRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  function gs_PViewpointRela_SortFunDefa(a:clsgs_PViewpointRelaEN , b:clsgs_PViewpointRelaEN): number 
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
export  function gs_PViewpointRela_SortFunDefa2Fld(a:clsgs_PViewpointRelaEN , b:clsgs_PViewpointRelaEN): number 
{
if (a.paperId == b.paperId) return a.sectionId.localeCompare(b.sectionId);
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
export  function gs_PViewpointRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_PViewpointRelaEN.con_mId:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
return a.mId-b.mId;
}
case clsgs_PViewpointRelaEN.con_PaperId:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
return a.paperId.localeCompare(b.paperId);
}
case clsgs_PViewpointRelaEN.con_SectionId:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (a.sectionId == null) return -1;
if (b.sectionId == null) return 1;
return a.sectionId.localeCompare(b.sectionId);
}
case clsgs_PViewpointRelaEN.con_ViewpointId:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
return a.viewpointId.localeCompare(b.viewpointId);
}
case clsgs_PViewpointRelaEN.con_ProposePeople:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (a.proposePeople == null) return -1;
if (b.proposePeople == null) return 1;
return a.proposePeople.localeCompare(b.proposePeople);
}
case clsgs_PViewpointRelaEN.con_UpdDate:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_PViewpointRelaEN.con_UpdUser:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_PViewpointRelaEN.con_Memo:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_PViewpointRela]中不存在!(in ${ gs_PViewpointRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_PViewpointRelaEN.con_mId:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
return b.mId-a.mId;
}
case clsgs_PViewpointRelaEN.con_PaperId:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
return b.paperId.localeCompare(a.paperId);
}
case clsgs_PViewpointRelaEN.con_SectionId:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (b.sectionId == null) return -1;
if (a.sectionId == null) return 1;
return b.sectionId.localeCompare(a.sectionId);
}
case clsgs_PViewpointRelaEN.con_ViewpointId:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
return b.viewpointId.localeCompare(a.viewpointId);
}
case clsgs_PViewpointRelaEN.con_ProposePeople:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (b.proposePeople == null) return -1;
if (a.proposePeople == null) return 1;
return b.proposePeople.localeCompare(a.proposePeople);
}
case clsgs_PViewpointRelaEN.con_UpdDate:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_PViewpointRelaEN.con_UpdUser:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_PViewpointRelaEN.con_Memo:
return (a: clsgs_PViewpointRelaEN, b: clsgs_PViewpointRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_PViewpointRela]中不存在!(in ${ gs_PViewpointRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function gs_PViewpointRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_PViewpointRelaEN.con_mId:
return (obj: clsgs_PViewpointRelaEN) => {
return obj.mId === value;
}
case clsgs_PViewpointRelaEN.con_PaperId:
return (obj: clsgs_PViewpointRelaEN) => {
return obj.paperId === value;
}
case clsgs_PViewpointRelaEN.con_SectionId:
return (obj: clsgs_PViewpointRelaEN) => {
return obj.sectionId === value;
}
case clsgs_PViewpointRelaEN.con_ViewpointId:
return (obj: clsgs_PViewpointRelaEN) => {
return obj.viewpointId === value;
}
case clsgs_PViewpointRelaEN.con_ProposePeople:
return (obj: clsgs_PViewpointRelaEN) => {
return obj.proposePeople === value;
}
case clsgs_PViewpointRelaEN.con_UpdDate:
return (obj: clsgs_PViewpointRelaEN) => {
return obj.updDate === value;
}
case clsgs_PViewpointRelaEN.con_UpdUser:
return (obj: clsgs_PViewpointRelaEN) => {
return obj.updUser === value;
}
case clsgs_PViewpointRelaEN.con_Memo:
return (obj: clsgs_PViewpointRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_PViewpointRela]中不存在!(in ${ gs_PViewpointRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[gs_PViewpointRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_PViewpointRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_PViewpointRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const objgs_PViewpointRela = gs_PViewpointRela_GetObjFromJsonObj(returnObj);
return objgs_PViewpointRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_PViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsgs_PViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_PViewpointRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_PViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_PViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_PViewpointRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_Delgs_PViewpointRelasAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_PViewpointRelasAsync";
const strAction = "Delgs_PViewpointRelas";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_Delgs_PViewpointRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_PViewpointRelasByCondAsync";
const strAction = "Delgs_PViewpointRelasByCond";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
 * @param objgs_PViewpointRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_PViewpointRela_AddNewRecordAsync(objgs_PViewpointRelaEN: clsgs_PViewpointRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_PViewpointRelaEN);
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_PViewpointRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
 * @param objgs_PViewpointRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_PViewpointRela_AddNewRecordWithReturnKeyAsync(objgs_PViewpointRelaEN: clsgs_PViewpointRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_PViewpointRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
 * @param objgs_PViewpointRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_PViewpointRela_UpdateRecordAsync(objgs_PViewpointRelaEN: clsgs_PViewpointRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_PViewpointRelaEN.sfUpdFldSetStr === undefined || objgs_PViewpointRelaEN.sfUpdFldSetStr === null || objgs_PViewpointRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_PViewpointRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_PViewpointRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
 * @param objgs_PViewpointRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_PViewpointRela_UpdateWithConditionAsync(objgs_PViewpointRelaEN: clsgs_PViewpointRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_PViewpointRelaEN.sfUpdFldSetStr === undefined || objgs_PViewpointRelaEN.sfUpdFldSetStr === null || objgs_PViewpointRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_PViewpointRelaEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);
objgs_PViewpointRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_PViewpointRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  async function gs_PViewpointRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_PViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PViewpointRela_ConstructorName, strThisFuncName);
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
export  function gs_PViewpointRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_PViewpointRela_CheckPropertyNew(pobjgs_PViewpointRelaEN: clsgs_PViewpointRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.paperId) === true 
 || pobjgs_PViewpointRelaEN.paperId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[论文Id]不能为空(In 论文观点关系表)!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.viewpointId) === true )
{
 throw new Error("(errid:Watl000411)字段[观点Id]不能为空(In 论文观点关系表)!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.paperId) == false && GetStrLen(pobjgs_PViewpointRelaEN.paperId) > 8)
{
 throw new Error("(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.paperId)(clsgs_PViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.sectionId) == false && GetStrLen(pobjgs_PViewpointRelaEN.sectionId) > 8)
{
 throw new Error("(errid:Watl000413)字段[节Id(sectionId)]的长度不能超过8(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.sectionId)(clsgs_PViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.viewpointId) == false && GetStrLen(pobjgs_PViewpointRelaEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000413)字段[观点Id(viewpointId)]的长度不能超过8(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.viewpointId)(clsgs_PViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.proposePeople) == false && GetStrLen(pobjgs_PViewpointRelaEN.proposePeople) > 50)
{
 throw new Error("(errid:Watl000413)字段[提出人(proposePeople)]的长度不能超过50(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.proposePeople)(clsgs_PViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.updDate) == false && GetStrLen(pobjgs_PViewpointRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.updDate)(clsgs_PViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.updUser) == false && GetStrLen(pobjgs_PViewpointRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.updUser)(clsgs_PViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.memo) == false && GetStrLen(pobjgs_PViewpointRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.memo)(clsgs_PViewpointRelaBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_PViewpointRelaEN.mId && undefined !== pobjgs_PViewpointRelaEN.mId && tzDataType.isNumber(pobjgs_PViewpointRelaEN.mId) === false)
{
 throw new Error("(errid:Watl000414)字段[mId(mId)]的值:[$(pobjgs_PViewpointRelaEN.mId)], 非法,应该为数值型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.paperId) == false && undefined !== pobjgs_PViewpointRelaEN.paperId && tzDataType.isString(pobjgs_PViewpointRelaEN.paperId) === false)
{
 throw new Error("(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjgs_PViewpointRelaEN.paperId)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.sectionId) == false && undefined !== pobjgs_PViewpointRelaEN.sectionId && tzDataType.isString(pobjgs_PViewpointRelaEN.sectionId) === false)
{
 throw new Error("(errid:Watl000414)字段[节Id(sectionId)]的值:[$(pobjgs_PViewpointRelaEN.sectionId)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.viewpointId) == false && undefined !== pobjgs_PViewpointRelaEN.viewpointId && tzDataType.isString(pobjgs_PViewpointRelaEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000414)字段[观点Id(viewpointId)]的值:[$(pobjgs_PViewpointRelaEN.viewpointId)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.proposePeople) == false && undefined !== pobjgs_PViewpointRelaEN.proposePeople && tzDataType.isString(pobjgs_PViewpointRelaEN.proposePeople) === false)
{
 throw new Error("(errid:Watl000414)字段[提出人(proposePeople)]的值:[$(pobjgs_PViewpointRelaEN.proposePeople)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.updDate) == false && undefined !== pobjgs_PViewpointRelaEN.updDate && tzDataType.isString(pobjgs_PViewpointRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_PViewpointRelaEN.updDate)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.updUser) == false && undefined !== pobjgs_PViewpointRelaEN.updUser && tzDataType.isString(pobjgs_PViewpointRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_PViewpointRelaEN.updUser)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.memo) == false && undefined !== pobjgs_PViewpointRelaEN.memo && tzDataType.isString(pobjgs_PViewpointRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_PViewpointRelaEN.memo)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_PViewpointRela_CheckProperty4Update(pobjgs_PViewpointRelaEN: clsgs_PViewpointRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.paperId) == false && GetStrLen(pobjgs_PViewpointRelaEN.paperId) > 8)
{
 throw new Error("(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.paperId)(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.sectionId) == false && GetStrLen(pobjgs_PViewpointRelaEN.sectionId) > 8)
{
 throw new Error("(errid:Watl000416)字段[节Id(sectionId)]的长度不能超过8(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.sectionId)(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.viewpointId) == false && GetStrLen(pobjgs_PViewpointRelaEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000416)字段[观点Id(viewpointId)]的长度不能超过8(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.viewpointId)(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.proposePeople) == false && GetStrLen(pobjgs_PViewpointRelaEN.proposePeople) > 50)
{
 throw new Error("(errid:Watl000416)字段[提出人(proposePeople)]的长度不能超过50(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.proposePeople)(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.updDate) == false && GetStrLen(pobjgs_PViewpointRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.updDate)(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.updUser) == false && GetStrLen(pobjgs_PViewpointRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.updUser)(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.memo) == false && GetStrLen(pobjgs_PViewpointRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文观点关系表(gs_PViewpointRela))!值:$(pobjgs_PViewpointRelaEN.memo)(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_PViewpointRelaEN.mId && undefined !== pobjgs_PViewpointRelaEN.mId && tzDataType.isNumber(pobjgs_PViewpointRelaEN.mId) === false)
{
 throw new Error("(errid:Watl000417)字段[mId(mId)]的值:[$(pobjgs_PViewpointRelaEN.mId)], 非法,应该为数值型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.paperId) == false && undefined !== pobjgs_PViewpointRelaEN.paperId && tzDataType.isString(pobjgs_PViewpointRelaEN.paperId) === false)
{
 throw new Error("(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjgs_PViewpointRelaEN.paperId)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.sectionId) == false && undefined !== pobjgs_PViewpointRelaEN.sectionId && tzDataType.isString(pobjgs_PViewpointRelaEN.sectionId) === false)
{
 throw new Error("(errid:Watl000417)字段[节Id(sectionId)]的值:[$(pobjgs_PViewpointRelaEN.sectionId)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.viewpointId) == false && undefined !== pobjgs_PViewpointRelaEN.viewpointId && tzDataType.isString(pobjgs_PViewpointRelaEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000417)字段[观点Id(viewpointId)]的值:[$(pobjgs_PViewpointRelaEN.viewpointId)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.proposePeople) == false && undefined !== pobjgs_PViewpointRelaEN.proposePeople && tzDataType.isString(pobjgs_PViewpointRelaEN.proposePeople) === false)
{
 throw new Error("(errid:Watl000417)字段[提出人(proposePeople)]的值:[$(pobjgs_PViewpointRelaEN.proposePeople)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.updDate) == false && undefined !== pobjgs_PViewpointRelaEN.updDate && tzDataType.isString(pobjgs_PViewpointRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_PViewpointRelaEN.updDate)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.updUser) == false && undefined !== pobjgs_PViewpointRelaEN.updUser && tzDataType.isString(pobjgs_PViewpointRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_PViewpointRelaEN.updUser)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PViewpointRelaEN.memo) == false && undefined !== pobjgs_PViewpointRelaEN.memo && tzDataType.isString(pobjgs_PViewpointRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_PViewpointRelaEN.memo)], 非法,应该为字符型(In 论文观点关系表(gs_PViewpointRela))!(clsgs_PViewpointRelaBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjgs_PViewpointRelaEN.mId 
 || pobjgs_PViewpointRelaEN.mId != null && pobjgs_PViewpointRelaEN.mId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[mId]不能为空(In 论文观点关系表)!(clsgs_PViewpointRelaBL:CheckProperty4Update)");
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
export  function gs_PViewpointRela_GetJSONStrByObj (pobjgs_PViewpointRelaEN: clsgs_PViewpointRelaEN): string
{
pobjgs_PViewpointRelaEN.sfUpdFldSetStr = pobjgs_PViewpointRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_PViewpointRelaEN);
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
export  function gs_PViewpointRela_GetObjLstByJSONStr (strJSON: string): Array<clsgs_PViewpointRelaEN>
{
let arrgs_PViewpointRelaObjLst = new Array<clsgs_PViewpointRelaEN>();
if (strJSON === "")
{
return arrgs_PViewpointRelaObjLst;
}
try
{
arrgs_PViewpointRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_PViewpointRelaObjLst;
}
return arrgs_PViewpointRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_PViewpointRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_PViewpointRela_GetObjLstByJSONObjLst (arrgs_PViewpointRelaObjLstS: Array<clsgs_PViewpointRelaEN>): Array<clsgs_PViewpointRelaEN>
{
const arrgs_PViewpointRelaObjLst = new Array<clsgs_PViewpointRelaEN>();
for (const objInFor of arrgs_PViewpointRelaObjLstS) {
const obj1 = gs_PViewpointRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_PViewpointRelaObjLst.push(obj1);
}
return arrgs_PViewpointRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_PViewpointRela_GetObjByJSONStr (strJSON: string): clsgs_PViewpointRelaEN
{
let pobjgs_PViewpointRelaEN = new clsgs_PViewpointRelaEN();
if (strJSON === "")
{
return pobjgs_PViewpointRelaEN;
}
try
{
pobjgs_PViewpointRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_PViewpointRelaEN;
}
return pobjgs_PViewpointRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_PViewpointRela_GetCombineCondition(objgs_PViewpointRelaCond: clsgs_PViewpointRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_PViewpointRelaCond.dicFldComparisonOp, clsgs_PViewpointRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objgs_PViewpointRelaCond.dicFldComparisonOp[clsgs_PViewpointRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_PViewpointRelaEN.con_mId, objgs_PViewpointRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objgs_PViewpointRelaCond.dicFldComparisonOp, clsgs_PViewpointRelaEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objgs_PViewpointRelaCond.dicFldComparisonOp[clsgs_PViewpointRelaEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PViewpointRelaEN.con_PaperId, objgs_PViewpointRelaCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objgs_PViewpointRelaCond.dicFldComparisonOp, clsgs_PViewpointRelaEN.con_SectionId) == true)
{
const strComparisonOpSectionId:string = objgs_PViewpointRelaCond.dicFldComparisonOp[clsgs_PViewpointRelaEN.con_SectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PViewpointRelaEN.con_SectionId, objgs_PViewpointRelaCond.sectionId, strComparisonOpSectionId);
}
if (Object.prototype.hasOwnProperty.call(objgs_PViewpointRelaCond.dicFldComparisonOp, clsgs_PViewpointRelaEN.con_ViewpointId) == true)
{
const strComparisonOpViewpointId:string = objgs_PViewpointRelaCond.dicFldComparisonOp[clsgs_PViewpointRelaEN.con_ViewpointId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PViewpointRelaEN.con_ViewpointId, objgs_PViewpointRelaCond.viewpointId, strComparisonOpViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objgs_PViewpointRelaCond.dicFldComparisonOp, clsgs_PViewpointRelaEN.con_ProposePeople) == true)
{
const strComparisonOpProposePeople:string = objgs_PViewpointRelaCond.dicFldComparisonOp[clsgs_PViewpointRelaEN.con_ProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PViewpointRelaEN.con_ProposePeople, objgs_PViewpointRelaCond.proposePeople, strComparisonOpProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objgs_PViewpointRelaCond.dicFldComparisonOp, clsgs_PViewpointRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_PViewpointRelaCond.dicFldComparisonOp[clsgs_PViewpointRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PViewpointRelaEN.con_UpdDate, objgs_PViewpointRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_PViewpointRelaCond.dicFldComparisonOp, clsgs_PViewpointRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_PViewpointRelaCond.dicFldComparisonOp[clsgs_PViewpointRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PViewpointRelaEN.con_UpdUser, objgs_PViewpointRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_PViewpointRelaCond.dicFldComparisonOp, clsgs_PViewpointRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_PViewpointRelaCond.dicFldComparisonOp[clsgs_PViewpointRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PViewpointRelaEN.con_Memo, objgs_PViewpointRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_PViewpointRela(论文观点关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_PViewpointRela_GetUniCondStr(objgs_PViewpointRelaEN: clsgs_PViewpointRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and mId = '{0}'", objgs_PViewpointRelaEN.mId);
 return strWhereCond;
}
 /**
 *获取唯一性条件串(Uniqueness)--gs_PViewpointRela(论文观点关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_PViewpointRela_GetUniCondStr_V2(objgs_PViewpointRelaEN: clsgs_PViewpointRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PaperId = '{0}'", objgs_PViewpointRelaEN.paperId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_PViewpointRela(论文观点关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_PViewpointRela_GetUniCondStr4Update(objgs_PViewpointRelaEN: clsgs_PViewpointRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objgs_PViewpointRelaEN.mId);
 strWhereCond +=  Format(" and mId = '{0}'", objgs_PViewpointRelaEN.mId);
 return strWhereCond;
}
 /**
 *获取唯一性条件串(Uniqueness)--gs_PViewpointRela(论文观点关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_PViewpointRela_GetUniCondStr4Update_V2(objgs_PViewpointRelaEN: clsgs_PViewpointRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objgs_PViewpointRelaEN.mId);
 strWhereCond +=  Format(" and PaperId = '{0}'", objgs_PViewpointRelaEN.paperId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_PViewpointRelaENS:源对象
 * @param objgs_PViewpointRelaENT:目标对象
*/
export  function gs_PViewpointRela_CopyObjTo(objgs_PViewpointRelaENS: clsgs_PViewpointRelaEN , objgs_PViewpointRelaENT: clsgs_PViewpointRelaEN ): void 
{
objgs_PViewpointRelaENT.mId = objgs_PViewpointRelaENS.mId; //mId
objgs_PViewpointRelaENT.paperId = objgs_PViewpointRelaENS.paperId; //论文Id
objgs_PViewpointRelaENT.sectionId = objgs_PViewpointRelaENS.sectionId; //节Id
objgs_PViewpointRelaENT.viewpointId = objgs_PViewpointRelaENS.viewpointId; //观点Id
objgs_PViewpointRelaENT.proposePeople = objgs_PViewpointRelaENS.proposePeople; //提出人
objgs_PViewpointRelaENT.updDate = objgs_PViewpointRelaENS.updDate; //修改日期
objgs_PViewpointRelaENT.updUser = objgs_PViewpointRelaENS.updUser; //修改人
objgs_PViewpointRelaENT.memo = objgs_PViewpointRelaENS.memo; //备注
objgs_PViewpointRelaENT.sfUpdFldSetStr = objgs_PViewpointRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_PViewpointRelaENS:源对象
 * @param objgs_PViewpointRelaENT:目标对象
*/
export  function gs_PViewpointRela_GetObjFromJsonObj(objgs_PViewpointRelaENS: clsgs_PViewpointRelaEN): clsgs_PViewpointRelaEN 
{
 const objgs_PViewpointRelaENT: clsgs_PViewpointRelaEN = new clsgs_PViewpointRelaEN();
ObjectAssign(objgs_PViewpointRelaENT, objgs_PViewpointRelaENS);
 return objgs_PViewpointRelaENT;
}