
 /**
 * 类名:clsvConceptCitationWApi
 * 表名:vConceptCitation(01120611)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:44
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
 * vConceptCitation(vConceptCitation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvConceptCitationEN } from "@/ts/L0Entity/GradEduTopic/clsvConceptCitationEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vConceptCitation_Controller = "vConceptCitationApi";
 export const vConceptCitation_ConstructorName = "vConceptCitation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vConceptCitation_GetObjBymIdAsync(lngmId: number): Promise<clsvConceptCitationEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvConceptCitationWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const objvConceptCitation = vConceptCitation_GetObjFromJsonObj(returnObj);
return objvConceptCitation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  function vConceptCitation_SortFunDefa(a:clsvConceptCitationEN , b:clsvConceptCitationEN): number 
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
export  function vConceptCitation_SortFunDefa2Fld(a:clsvConceptCitationEN , b:clsvConceptCitationEN): number 
{
if (a.conceptContent == b.conceptContent) return a.conceptId.localeCompare(b.conceptId);
else return a.conceptContent.localeCompare(b.conceptContent);
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
export  function vConceptCitation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvConceptCitationEN.con_ConceptContent:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.conceptContent == null) return -1;
if (b.conceptContent == null) return 1;
return a.conceptContent.localeCompare(b.conceptContent);
}
case clsvConceptCitationEN.con_ConceptId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.conceptId == null) return -1;
if (b.conceptId == null) return 1;
return a.conceptId.localeCompare(b.conceptId);
}
case clsvConceptCitationEN.con_ConceptName:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.conceptName == null) return -1;
if (b.conceptName == null) return 1;
return a.conceptName.localeCompare(b.conceptName);
}
case clsvConceptCitationEN.con_UpdDate:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvConceptCitationEN.con_mId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
return a.mId-b.mId;
}
case clsvConceptCitationEN.con_PaperId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsvConceptCitationEN.con_PaperTitle:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvConceptCitationEN.con_PaperContent:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.paperContent == null) return -1;
if (b.paperContent == null) return 1;
return a.paperContent.localeCompare(b.paperContent);
}
case clsvConceptCitationEN.con_UserName:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.userName == null) return -1;
if (b.userName == null) return 1;
return a.userName.localeCompare(b.userName);
}
case clsvConceptCitationEN.con_UpdUserId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsvConceptCitationEN.con_TopicId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.topicId == null) return -1;
if (b.topicId == null) return 1;
return a.topicId.localeCompare(b.topicId);
}
case clsvConceptCitationEN.con_TopicName:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (a.topicName == null) return -1;
if (b.topicName == null) return 1;
return a.topicName.localeCompare(b.topicName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vConceptCitation]中不存在!(in ${ vConceptCitation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvConceptCitationEN.con_ConceptContent:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.conceptContent == null) return -1;
if (a.conceptContent == null) return 1;
return b.conceptContent.localeCompare(a.conceptContent);
}
case clsvConceptCitationEN.con_ConceptId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.conceptId == null) return -1;
if (a.conceptId == null) return 1;
return b.conceptId.localeCompare(a.conceptId);
}
case clsvConceptCitationEN.con_ConceptName:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.conceptName == null) return -1;
if (a.conceptName == null) return 1;
return b.conceptName.localeCompare(a.conceptName);
}
case clsvConceptCitationEN.con_UpdDate:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvConceptCitationEN.con_mId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
return b.mId-a.mId;
}
case clsvConceptCitationEN.con_PaperId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsvConceptCitationEN.con_PaperTitle:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvConceptCitationEN.con_PaperContent:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.paperContent == null) return -1;
if (a.paperContent == null) return 1;
return b.paperContent.localeCompare(a.paperContent);
}
case clsvConceptCitationEN.con_UserName:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.userName == null) return -1;
if (a.userName == null) return 1;
return b.userName.localeCompare(a.userName);
}
case clsvConceptCitationEN.con_UpdUserId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsvConceptCitationEN.con_TopicId:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.topicId == null) return -1;
if (a.topicId == null) return 1;
return b.topicId.localeCompare(a.topicId);
}
case clsvConceptCitationEN.con_TopicName:
return (a: clsvConceptCitationEN, b: clsvConceptCitationEN) => {
if (b.topicName == null) return -1;
if (a.topicName == null) return 1;
return b.topicName.localeCompare(a.topicName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vConceptCitation]中不存在!(in ${ vConceptCitation_ConstructorName}.${ strThisFuncName})`;
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
export  async function vConceptCitation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvConceptCitationEN.con_ConceptContent:
return (obj: clsvConceptCitationEN) => {
return obj.conceptContent === value;
}
case clsvConceptCitationEN.con_ConceptId:
return (obj: clsvConceptCitationEN) => {
return obj.conceptId === value;
}
case clsvConceptCitationEN.con_ConceptName:
return (obj: clsvConceptCitationEN) => {
return obj.conceptName === value;
}
case clsvConceptCitationEN.con_UpdDate:
return (obj: clsvConceptCitationEN) => {
return obj.updDate === value;
}
case clsvConceptCitationEN.con_mId:
return (obj: clsvConceptCitationEN) => {
return obj.mId === value;
}
case clsvConceptCitationEN.con_PaperId:
return (obj: clsvConceptCitationEN) => {
return obj.paperId === value;
}
case clsvConceptCitationEN.con_PaperTitle:
return (obj: clsvConceptCitationEN) => {
return obj.paperTitle === value;
}
case clsvConceptCitationEN.con_PaperContent:
return (obj: clsvConceptCitationEN) => {
return obj.paperContent === value;
}
case clsvConceptCitationEN.con_UserName:
return (obj: clsvConceptCitationEN) => {
return obj.userName === value;
}
case clsvConceptCitationEN.con_UpdUserId:
return (obj: clsvConceptCitationEN) => {
return obj.updUserId === value;
}
case clsvConceptCitationEN.con_TopicId:
return (obj: clsvConceptCitationEN) => {
return obj.topicId === value;
}
case clsvConceptCitationEN.con_TopicName:
return (obj: clsvConceptCitationEN) => {
return obj.topicName === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vConceptCitation]中不存在!(in ${ vConceptCitation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vConceptCitation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vConceptCitation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_GetFirstObjAsync(strWhereCond: string): Promise<clsvConceptCitationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const objvConceptCitation = vConceptCitation_GetObjFromJsonObj(returnObj);
return objvConceptCitation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvConceptCitationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vConceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvConceptCitationEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vConceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvConceptCitationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vConceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvConceptCitationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vConceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvConceptCitationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvConceptCitationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vConceptCitation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vConceptCitation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  async function vConceptCitation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vConceptCitation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vConceptCitation_ConstructorName, strThisFuncName);
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
export  function vConceptCitation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vConceptCitation_GetJSONStrByObj (pobjvConceptCitationEN: clsvConceptCitationEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvConceptCitationEN);
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
export  function vConceptCitation_GetObjLstByJSONStr (strJSON: string): Array<clsvConceptCitationEN>
{
let arrvConceptCitationObjLst = new Array<clsvConceptCitationEN>();
if (strJSON === "")
{
return arrvConceptCitationObjLst;
}
try
{
arrvConceptCitationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvConceptCitationObjLst;
}
return arrvConceptCitationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvConceptCitationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vConceptCitation_GetObjLstByJSONObjLst (arrvConceptCitationObjLstS: Array<clsvConceptCitationEN>): Array<clsvConceptCitationEN>
{
const arrvConceptCitationObjLst = new Array<clsvConceptCitationEN>();
for (const objInFor of arrvConceptCitationObjLstS) {
const obj1 = vConceptCitation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvConceptCitationObjLst.push(obj1);
}
return arrvConceptCitationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vConceptCitation_GetObjByJSONStr (strJSON: string): clsvConceptCitationEN
{
let pobjvConceptCitationEN = new clsvConceptCitationEN();
if (strJSON === "")
{
return pobjvConceptCitationEN;
}
try
{
pobjvConceptCitationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvConceptCitationEN;
}
return pobjvConceptCitationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vConceptCitation_GetCombineCondition(objvConceptCitationCond: clsvConceptCitationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_ConceptId) == true)
{
const strComparisonOpConceptId:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_ConceptId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvConceptCitationEN.con_ConceptId, objvConceptCitationCond.conceptId, strComparisonOpConceptId);
}
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_ConceptName) == true)
{
const strComparisonOpConceptName:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_ConceptName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvConceptCitationEN.con_ConceptName, objvConceptCitationCond.conceptName, strComparisonOpConceptName);
}
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvConceptCitationEN.con_UpdDate, objvConceptCitationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_mId) == true)
{
const strComparisonOpmId:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvConceptCitationEN.con_mId, objvConceptCitationCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvConceptCitationEN.con_PaperId, objvConceptCitationCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvConceptCitationEN.con_PaperTitle, objvConceptCitationCond.paperTitle, strComparisonOpPaperTitle);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvConceptCitationEN.con_UserName, objvConceptCitationCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvConceptCitationEN.con_UpdUserId, objvConceptCitationCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvConceptCitationEN.con_TopicId, objvConceptCitationCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objvConceptCitationCond.dicFldComparisonOp, clsvConceptCitationEN.con_TopicName) == true)
{
const strComparisonOpTopicName:string = objvConceptCitationCond.dicFldComparisonOp[clsvConceptCitationEN.con_TopicName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvConceptCitationEN.con_TopicName, objvConceptCitationCond.topicName, strComparisonOpTopicName);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--vConceptCitation(vConceptCitation),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function vConceptCitation_GetUniCondStr(objvConceptCitationEN: clsvConceptCitationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and mId = '{0}'", objvConceptCitationEN.mId);
 strWhereCond +=  Format(" and ConceptId = '{0}'", objvConceptCitationEN.conceptId);
 strWhereCond +=  Format(" and PaperId = '{0}'", objvConceptCitationEN.paperId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--vConceptCitation(vConceptCitation),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @param strConceptId: 概念Id(要求唯一的字段)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function vConceptCitation_GetUniCondStr4Update(objvConceptCitationEN: clsvConceptCitationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objvConceptCitationEN.mId);
 strWhereCond +=  Format(" and mId = '{0}'", objvConceptCitationEN.mId);
 strWhereCond +=  Format(" and ConceptId = '{0}'", objvConceptCitationEN.conceptId);
 strWhereCond +=  Format(" and PaperId = '{0}'", objvConceptCitationEN.paperId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvConceptCitationENS:源对象
 * @param objvConceptCitationENT:目标对象
*/
export  function vConceptCitation_CopyObjTo(objvConceptCitationENS: clsvConceptCitationEN , objvConceptCitationENT: clsvConceptCitationEN ): void 
{
objvConceptCitationENT.conceptContent = objvConceptCitationENS.conceptContent; //概念内容
objvConceptCitationENT.conceptId = objvConceptCitationENS.conceptId; //概念Id
objvConceptCitationENT.conceptName = objvConceptCitationENS.conceptName; //概念名称
objvConceptCitationENT.updDate = objvConceptCitationENS.updDate; //修改日期
objvConceptCitationENT.mId = objvConceptCitationENS.mId; //mId
objvConceptCitationENT.paperId = objvConceptCitationENS.paperId; //论文Id
objvConceptCitationENT.paperTitle = objvConceptCitationENS.paperTitle; //论文标题
objvConceptCitationENT.paperContent = objvConceptCitationENS.paperContent; //主题内容
objvConceptCitationENT.userName = objvConceptCitationENS.userName; //用户名
objvConceptCitationENT.updUserId = objvConceptCitationENS.updUserId; //修改用户Id
objvConceptCitationENT.topicId = objvConceptCitationENS.topicId; //主题Id
objvConceptCitationENT.topicName = objvConceptCitationENS.topicName; //栏目主题
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvConceptCitationENS:源对象
 * @param objvConceptCitationENT:目标对象
*/
export  function vConceptCitation_GetObjFromJsonObj(objvConceptCitationENS: clsvConceptCitationEN): clsvConceptCitationEN 
{
 const objvConceptCitationENT: clsvConceptCitationEN = new clsvConceptCitationEN();
ObjectAssign(objvConceptCitationENT, objvConceptCitationENS);
 return objvConceptCitationENT;
}