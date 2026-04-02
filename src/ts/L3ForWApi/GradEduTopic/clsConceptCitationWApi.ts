
 /**
 * 类名:clsConceptCitationWApi
 * 表名:ConceptCitation(01120604)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:36
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
 * 概念引用(ConceptCitation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsConceptCitationEN } from "@/ts/L0Entity/GradEduTopic/clsConceptCitationEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const conceptCitation_Controller = "ConceptCitationApi";
 export const conceptCitation_ConstructorName = "conceptCitation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ConceptCitation_GetObjBymIdAsync(lngmId: number): Promise<clsConceptCitationEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsConceptCitationWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const objConceptCitation = ConceptCitation_GetObjFromJsonObj(returnObj);
return objConceptCitation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  function ConceptCitation_SortFunDefa(a:clsConceptCitationEN , b:clsConceptCitationEN): number 
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
export  function ConceptCitation_SortFunDefa2Fld(a:clsConceptCitationEN , b:clsConceptCitationEN): number 
{
if (a.conceptId == b.conceptId) return a.paperId.localeCompare(b.paperId);
else return a.conceptId.localeCompare(b.conceptId);
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
export  function ConceptCitation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsConceptCitationEN.con_mId:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
return a.mId-b.mId;
}
case clsConceptCitationEN.con_ConceptId:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
return a.conceptId.localeCompare(b.conceptId);
}
case clsConceptCitationEN.con_PaperId:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsConceptCitationEN.con_UpdDate:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsConceptCitationEN.con_UpdUserId:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsConceptCitationEN.con_Memo:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ConceptCitation]中不存在!(in ${ conceptCitation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsConceptCitationEN.con_mId:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
return b.mId-a.mId;
}
case clsConceptCitationEN.con_ConceptId:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
return b.conceptId.localeCompare(a.conceptId);
}
case clsConceptCitationEN.con_PaperId:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsConceptCitationEN.con_UpdDate:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsConceptCitationEN.con_UpdUserId:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsConceptCitationEN.con_Memo:
return (a: clsConceptCitationEN, b: clsConceptCitationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ConceptCitation]中不存在!(in ${ conceptCitation_ConstructorName}.${ strThisFuncName})`;
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
export  async function ConceptCitation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsConceptCitationEN.con_mId:
return (obj: clsConceptCitationEN) => {
return obj.mId === value;
}
case clsConceptCitationEN.con_ConceptId:
return (obj: clsConceptCitationEN) => {
return obj.conceptId === value;
}
case clsConceptCitationEN.con_PaperId:
return (obj: clsConceptCitationEN) => {
return obj.paperId === value;
}
case clsConceptCitationEN.con_UpdDate:
return (obj: clsConceptCitationEN) => {
return obj.updDate === value;
}
case clsConceptCitationEN.con_UpdUserId:
return (obj: clsConceptCitationEN) => {
return obj.updUserId === value;
}
case clsConceptCitationEN.con_Memo:
return (obj: clsConceptCitationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ConceptCitation]中不存在!(in ${ conceptCitation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[ConceptCitation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ConceptCitation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_GetFirstObjAsync(strWhereCond: string): Promise<clsConceptCitationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const objConceptCitation = ConceptCitation_GetObjFromJsonObj(returnObj);
return objConceptCitation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_GetObjLstAsync(strWhereCond: string): Promise<Array<clsConceptCitationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", conceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsConceptCitationEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", conceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsConceptCitationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", conceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsConceptCitationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", conceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsConceptCitationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsConceptCitationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", conceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_DelConceptCitationsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelConceptCitationsAsync";
const strAction = "DelConceptCitations";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_DelConceptCitationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelConceptCitationsByCondAsync";
const strAction = "DelConceptCitationsByCond";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
 * @param objConceptCitationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ConceptCitation_AddNewRecordAsync(objConceptCitationEN: clsConceptCitationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objConceptCitationEN);
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objConceptCitationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
 * @param objConceptCitationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ConceptCitation_AddNewRecordWithReturnKeyAsync(objConceptCitationEN: clsConceptCitationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objConceptCitationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
 * @param objConceptCitationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ConceptCitation_UpdateRecordAsync(objConceptCitationEN: clsConceptCitationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objConceptCitationEN.sfUpdFldSetStr === undefined || objConceptCitationEN.sfUpdFldSetStr === null || objConceptCitationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objConceptCitationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objConceptCitationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
 * @param objConceptCitationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ConceptCitation_UpdateWithConditionAsync(objConceptCitationEN: clsConceptCitationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objConceptCitationEN.sfUpdFldSetStr === undefined || objConceptCitationEN.sfUpdFldSetStr === null || objConceptCitationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objConceptCitationEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);
objConceptCitationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objConceptCitationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  async function ConceptCitation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(conceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, conceptCitation_ConstructorName, strThisFuncName);
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
export  function ConceptCitation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ConceptCitation_CheckPropertyNew(pobjConceptCitationEN: clsConceptCitationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjConceptCitationEN.conceptId) === true )
{
 throw new Error("(errid:Watl000411)字段[概念Id]不能为空(In 概念引用)!(clsConceptCitationBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjConceptCitationEN.conceptId) == false && GetStrLen(pobjConceptCitationEN.conceptId) > 8)
{
 throw new Error("(errid:Watl000413)字段[概念Id(conceptId)]的长度不能超过8(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.conceptId)(clsConceptCitationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.paperId) == false && GetStrLen(pobjConceptCitationEN.paperId) > 8)
{
 throw new Error("(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.paperId)(clsConceptCitationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.updDate) == false && GetStrLen(pobjConceptCitationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.updDate)(clsConceptCitationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.updUserId) == false && GetStrLen(pobjConceptCitationEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.updUserId)(clsConceptCitationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.memo) == false && GetStrLen(pobjConceptCitationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.memo)(clsConceptCitationBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjConceptCitationEN.mId && undefined !== pobjConceptCitationEN.mId && tzDataType.isNumber(pobjConceptCitationEN.mId) === false)
{
 throw new Error("(errid:Watl000414)字段[mId(mId)]的值:[$(pobjConceptCitationEN.mId)], 非法,应该为数值型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.conceptId) == false && undefined !== pobjConceptCitationEN.conceptId && tzDataType.isString(pobjConceptCitationEN.conceptId) === false)
{
 throw new Error("(errid:Watl000414)字段[概念Id(conceptId)]的值:[$(pobjConceptCitationEN.conceptId)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.paperId) == false && undefined !== pobjConceptCitationEN.paperId && tzDataType.isString(pobjConceptCitationEN.paperId) === false)
{
 throw new Error("(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjConceptCitationEN.paperId)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.updDate) == false && undefined !== pobjConceptCitationEN.updDate && tzDataType.isString(pobjConceptCitationEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjConceptCitationEN.updDate)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.updUserId) == false && undefined !== pobjConceptCitationEN.updUserId && tzDataType.isString(pobjConceptCitationEN.updUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjConceptCitationEN.updUserId)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.memo) == false && undefined !== pobjConceptCitationEN.memo && tzDataType.isString(pobjConceptCitationEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjConceptCitationEN.memo)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ConceptCitation_CheckProperty4Update(pobjConceptCitationEN: clsConceptCitationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjConceptCitationEN.conceptId) == false && GetStrLen(pobjConceptCitationEN.conceptId) > 8)
{
 throw new Error("(errid:Watl000416)字段[概念Id(conceptId)]的长度不能超过8(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.conceptId)(clsConceptCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.paperId) == false && GetStrLen(pobjConceptCitationEN.paperId) > 8)
{
 throw new Error("(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.paperId)(clsConceptCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.updDate) == false && GetStrLen(pobjConceptCitationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.updDate)(clsConceptCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.updUserId) == false && GetStrLen(pobjConceptCitationEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.updUserId)(clsConceptCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.memo) == false && GetStrLen(pobjConceptCitationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 概念引用(ConceptCitation))!值:$(pobjConceptCitationEN.memo)(clsConceptCitationBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjConceptCitationEN.mId && undefined !== pobjConceptCitationEN.mId && tzDataType.isNumber(pobjConceptCitationEN.mId) === false)
{
 throw new Error("(errid:Watl000417)字段[mId(mId)]的值:[$(pobjConceptCitationEN.mId)], 非法,应该为数值型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.conceptId) == false && undefined !== pobjConceptCitationEN.conceptId && tzDataType.isString(pobjConceptCitationEN.conceptId) === false)
{
 throw new Error("(errid:Watl000417)字段[概念Id(conceptId)]的值:[$(pobjConceptCitationEN.conceptId)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.paperId) == false && undefined !== pobjConceptCitationEN.paperId && tzDataType.isString(pobjConceptCitationEN.paperId) === false)
{
 throw new Error("(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjConceptCitationEN.paperId)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.updDate) == false && undefined !== pobjConceptCitationEN.updDate && tzDataType.isString(pobjConceptCitationEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjConceptCitationEN.updDate)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.updUserId) == false && undefined !== pobjConceptCitationEN.updUserId && tzDataType.isString(pobjConceptCitationEN.updUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjConceptCitationEN.updUserId)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjConceptCitationEN.memo) == false && undefined !== pobjConceptCitationEN.memo && tzDataType.isString(pobjConceptCitationEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjConceptCitationEN.memo)], 非法,应该为字符型(In 概念引用(ConceptCitation))!(clsConceptCitationBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjConceptCitationEN.mId 
 || pobjConceptCitationEN.mId != null && pobjConceptCitationEN.mId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[mId]不能为空(In 概念引用)!(clsConceptCitationBL:CheckProperty4Update)");
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
export  function ConceptCitation_GetJSONStrByObj (pobjConceptCitationEN: clsConceptCitationEN): string
{
pobjConceptCitationEN.sfUpdFldSetStr = pobjConceptCitationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjConceptCitationEN);
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
export  function ConceptCitation_GetObjLstByJSONStr (strJSON: string): Array<clsConceptCitationEN>
{
let arrConceptCitationObjLst = new Array<clsConceptCitationEN>();
if (strJSON === "")
{
return arrConceptCitationObjLst;
}
try
{
arrConceptCitationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrConceptCitationObjLst;
}
return arrConceptCitationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrConceptCitationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ConceptCitation_GetObjLstByJSONObjLst (arrConceptCitationObjLstS: Array<clsConceptCitationEN>): Array<clsConceptCitationEN>
{
const arrConceptCitationObjLst = new Array<clsConceptCitationEN>();
for (const objInFor of arrConceptCitationObjLstS) {
const obj1 = ConceptCitation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrConceptCitationObjLst.push(obj1);
}
return arrConceptCitationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ConceptCitation_GetObjByJSONStr (strJSON: string): clsConceptCitationEN
{
let pobjConceptCitationEN = new clsConceptCitationEN();
if (strJSON === "")
{
return pobjConceptCitationEN;
}
try
{
pobjConceptCitationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjConceptCitationEN;
}
return pobjConceptCitationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ConceptCitation_GetCombineCondition(objConceptCitationCond: clsConceptCitationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objConceptCitationCond.dicFldComparisonOp, clsConceptCitationEN.con_mId) == true)
{
const strComparisonOpmId:string = objConceptCitationCond.dicFldComparisonOp[clsConceptCitationEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsConceptCitationEN.con_mId, objConceptCitationCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objConceptCitationCond.dicFldComparisonOp, clsConceptCitationEN.con_ConceptId) == true)
{
const strComparisonOpConceptId:string = objConceptCitationCond.dicFldComparisonOp[clsConceptCitationEN.con_ConceptId];
strWhereCond += Format(" And {0} {2} '{1}'", clsConceptCitationEN.con_ConceptId, objConceptCitationCond.conceptId, strComparisonOpConceptId);
}
if (Object.prototype.hasOwnProperty.call(objConceptCitationCond.dicFldComparisonOp, clsConceptCitationEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objConceptCitationCond.dicFldComparisonOp[clsConceptCitationEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsConceptCitationEN.con_PaperId, objConceptCitationCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objConceptCitationCond.dicFldComparisonOp, clsConceptCitationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objConceptCitationCond.dicFldComparisonOp[clsConceptCitationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsConceptCitationEN.con_UpdDate, objConceptCitationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objConceptCitationCond.dicFldComparisonOp, clsConceptCitationEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objConceptCitationCond.dicFldComparisonOp[clsConceptCitationEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsConceptCitationEN.con_UpdUserId, objConceptCitationCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objConceptCitationCond.dicFldComparisonOp, clsConceptCitationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objConceptCitationCond.dicFldComparisonOp[clsConceptCitationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsConceptCitationEN.con_Memo, objConceptCitationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ConceptCitation(概念引用),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ConceptCitation_GetUniCondStr(objConceptCitationEN: clsConceptCitationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and mId = '{0}'", objConceptCitationEN.mId);
 strWhereCond +=  Format(" and ConceptId = '{0}'", objConceptCitationEN.conceptId);
 strWhereCond +=  Format(" and PaperId = '{0}'", objConceptCitationEN.paperId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ConceptCitation(概念引用),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ConceptCitation_GetUniCondStr4Update(objConceptCitationEN: clsConceptCitationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objConceptCitationEN.mId);
 strWhereCond +=  Format(" and mId = '{0}'", objConceptCitationEN.mId);
 strWhereCond +=  Format(" and ConceptId = '{0}'", objConceptCitationEN.conceptId);
 strWhereCond +=  Format(" and PaperId = '{0}'", objConceptCitationEN.paperId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objConceptCitationENS:源对象
 * @param objConceptCitationENT:目标对象
*/
export  function ConceptCitation_CopyObjTo(objConceptCitationENS: clsConceptCitationEN , objConceptCitationENT: clsConceptCitationEN ): void 
{
objConceptCitationENT.mId = objConceptCitationENS.mId; //mId
objConceptCitationENT.conceptId = objConceptCitationENS.conceptId; //概念Id
objConceptCitationENT.paperId = objConceptCitationENS.paperId; //论文Id
objConceptCitationENT.updDate = objConceptCitationENS.updDate; //修改日期
objConceptCitationENT.updUserId = objConceptCitationENS.updUserId; //修改用户Id
objConceptCitationENT.memo = objConceptCitationENS.memo; //备注
objConceptCitationENT.sfUpdFldSetStr = objConceptCitationENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objConceptCitationENS:源对象
 * @param objConceptCitationENT:目标对象
*/
export  function ConceptCitation_GetObjFromJsonObj(objConceptCitationENS: clsConceptCitationEN): clsConceptCitationEN 
{
 const objConceptCitationENT: clsConceptCitationEN = new clsConceptCitationEN();
ObjectAssign(objConceptCitationENT, objConceptCitationENS);
 return objConceptCitationENT;
}