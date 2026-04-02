
 /**
 * 类名:clsRTViewpointRelaWApi
 * 表名:RTViewpointRela(01120545)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:35
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
 * 主题观点关系表(RTViewpointRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsRTViewpointRelaEN } from "@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const rTViewpointRela_Controller = "RTViewpointRelaApi";
 export const rTViewpointRela_ConstructorName = "rTViewpointRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function RTViewpointRela_GetObjBymIdAsync(lngmId: number): Promise<clsRTViewpointRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsRTViewpointRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const objRTViewpointRela = RTViewpointRela_GetObjFromJsonObj(returnObj);
return objRTViewpointRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  function RTViewpointRela_SortFunDefa(a:clsRTViewpointRelaEN , b:clsRTViewpointRelaEN): number 
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
export  function RTViewpointRela_SortFunDefa2Fld(a:clsRTViewpointRelaEN , b:clsRTViewpointRelaEN): number 
{
if (a.topicId == b.topicId) return a.viewpointId.localeCompare(b.viewpointId);
else return a.topicId.localeCompare(b.topicId);
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
export  function RTViewpointRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRTViewpointRelaEN.con_mId:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
return a.mId-b.mId;
}
case clsRTViewpointRelaEN.con_TopicId:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (a.topicId == null) return -1;
if (b.topicId == null) return 1;
return a.topicId.localeCompare(b.topicId);
}
case clsRTViewpointRelaEN.con_ViewpointId:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (a.viewpointId == null) return -1;
if (b.viewpointId == null) return 1;
return a.viewpointId.localeCompare(b.viewpointId);
}
case clsRTViewpointRelaEN.con_ProposePeople:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (a.proposePeople == null) return -1;
if (b.proposePeople == null) return 1;
return a.proposePeople.localeCompare(b.proposePeople);
}
case clsRTViewpointRelaEN.con_UpdDate:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsRTViewpointRelaEN.con_UpdUser:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsRTViewpointRelaEN.con_Memo:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsRTViewpointRelaEN.con_ClassificationId:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (a.classificationId == null) return -1;
if (b.classificationId == null) return 1;
return a.classificationId.localeCompare(b.classificationId);
}
case clsRTViewpointRelaEN.con_IdCurrEduCls:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RTViewpointRela]中不存在!(in ${ rTViewpointRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRTViewpointRelaEN.con_mId:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
return b.mId-a.mId;
}
case clsRTViewpointRelaEN.con_TopicId:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (b.topicId == null) return -1;
if (a.topicId == null) return 1;
return b.topicId.localeCompare(a.topicId);
}
case clsRTViewpointRelaEN.con_ViewpointId:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (b.viewpointId == null) return -1;
if (a.viewpointId == null) return 1;
return b.viewpointId.localeCompare(a.viewpointId);
}
case clsRTViewpointRelaEN.con_ProposePeople:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (b.proposePeople == null) return -1;
if (a.proposePeople == null) return 1;
return b.proposePeople.localeCompare(a.proposePeople);
}
case clsRTViewpointRelaEN.con_UpdDate:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsRTViewpointRelaEN.con_UpdUser:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsRTViewpointRelaEN.con_Memo:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsRTViewpointRelaEN.con_ClassificationId:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (b.classificationId == null) return -1;
if (a.classificationId == null) return 1;
return b.classificationId.localeCompare(a.classificationId);
}
case clsRTViewpointRelaEN.con_IdCurrEduCls:
return (a: clsRTViewpointRelaEN, b: clsRTViewpointRelaEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RTViewpointRela]中不存在!(in ${ rTViewpointRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function RTViewpointRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRTViewpointRelaEN.con_mId:
return (obj: clsRTViewpointRelaEN) => {
return obj.mId === value;
}
case clsRTViewpointRelaEN.con_TopicId:
return (obj: clsRTViewpointRelaEN) => {
return obj.topicId === value;
}
case clsRTViewpointRelaEN.con_ViewpointId:
return (obj: clsRTViewpointRelaEN) => {
return obj.viewpointId === value;
}
case clsRTViewpointRelaEN.con_ProposePeople:
return (obj: clsRTViewpointRelaEN) => {
return obj.proposePeople === value;
}
case clsRTViewpointRelaEN.con_UpdDate:
return (obj: clsRTViewpointRelaEN) => {
return obj.updDate === value;
}
case clsRTViewpointRelaEN.con_UpdUser:
return (obj: clsRTViewpointRelaEN) => {
return obj.updUser === value;
}
case clsRTViewpointRelaEN.con_Memo:
return (obj: clsRTViewpointRelaEN) => {
return obj.memo === value;
}
case clsRTViewpointRelaEN.con_ClassificationId:
return (obj: clsRTViewpointRelaEN) => {
return obj.classificationId === value;
}
case clsRTViewpointRelaEN.con_IdCurrEduCls:
return (obj: clsRTViewpointRelaEN) => {
return obj.idCurrEduCls === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RTViewpointRela]中不存在!(in ${ rTViewpointRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[RTViewpointRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RTViewpointRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_GetFirstObjAsync(strWhereCond: string): Promise<clsRTViewpointRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const objRTViewpointRela = RTViewpointRela_GetObjFromJsonObj(returnObj);
return objRTViewpointRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRTViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsRTViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRTViewpointRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRTViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRTViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRTViewpointRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_DelRTViewpointRelasAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRTViewpointRelasAsync";
const strAction = "DelRTViewpointRelas";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_DelRTViewpointRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRTViewpointRelasByCondAsync";
const strAction = "DelRTViewpointRelasByCond";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RTViewpointRela_AddNewRecordAsync(objRTViewpointRelaEN: clsRTViewpointRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objRTViewpointRelaEN);
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRTViewpointRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RTViewpointRela_AddNewRecordWithReturnKeyAsync(objRTViewpointRelaEN: clsRTViewpointRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRTViewpointRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RTViewpointRela_UpdateRecordAsync(objRTViewpointRelaEN: clsRTViewpointRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRTViewpointRelaEN.sfUpdFldSetStr === undefined || objRTViewpointRelaEN.sfUpdFldSetStr === null || objRTViewpointRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRTViewpointRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRTViewpointRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RTViewpointRela_UpdateWithConditionAsync(objRTViewpointRelaEN: clsRTViewpointRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRTViewpointRelaEN.sfUpdFldSetStr === undefined || objRTViewpointRelaEN.sfUpdFldSetStr === null || objRTViewpointRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRTViewpointRelaEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);
objRTViewpointRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRTViewpointRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function RTViewpointRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(rTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpointRela_ConstructorName, strThisFuncName);
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
export  function RTViewpointRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function RTViewpointRela_CheckPropertyNew(pobjRTViewpointRelaEN: clsRTViewpointRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRTViewpointRelaEN.topicId) == false && GetStrLen(pobjRTViewpointRelaEN.topicId) > 8)
{
 throw new Error("(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.topicId)(clsRTViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.viewpointId) == false && GetStrLen(pobjRTViewpointRelaEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000413)字段[观点Id(viewpointId)]的长度不能超过8(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.viewpointId)(clsRTViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.proposePeople) == false && GetStrLen(pobjRTViewpointRelaEN.proposePeople) > 50)
{
 throw new Error("(errid:Watl000413)字段[提出人(proposePeople)]的长度不能超过50(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.proposePeople)(clsRTViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.updDate) == false && GetStrLen(pobjRTViewpointRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.updDate)(clsRTViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.updUser) == false && GetStrLen(pobjRTViewpointRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.updUser)(clsRTViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.memo) == false && GetStrLen(pobjRTViewpointRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.memo)(clsRTViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.classificationId) == false && GetStrLen(pobjRTViewpointRelaEN.classificationId) > 10)
{
 throw new Error("(errid:Watl000413)字段[分类Id(classificationId)]的长度不能超过10(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.classificationId)(clsRTViewpointRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.idCurrEduCls) == false && GetStrLen(pobjRTViewpointRelaEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.idCurrEduCls)(clsRTViewpointRelaBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjRTViewpointRelaEN.mId && undefined !== pobjRTViewpointRelaEN.mId && tzDataType.isNumber(pobjRTViewpointRelaEN.mId) === false)
{
 throw new Error("(errid:Watl000414)字段[mId(mId)]的值:[$(pobjRTViewpointRelaEN.mId)], 非法,应该为数值型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.topicId) == false && undefined !== pobjRTViewpointRelaEN.topicId && tzDataType.isString(pobjRTViewpointRelaEN.topicId) === false)
{
 throw new Error("(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjRTViewpointRelaEN.topicId)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.viewpointId) == false && undefined !== pobjRTViewpointRelaEN.viewpointId && tzDataType.isString(pobjRTViewpointRelaEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000414)字段[观点Id(viewpointId)]的值:[$(pobjRTViewpointRelaEN.viewpointId)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.proposePeople) == false && undefined !== pobjRTViewpointRelaEN.proposePeople && tzDataType.isString(pobjRTViewpointRelaEN.proposePeople) === false)
{
 throw new Error("(errid:Watl000414)字段[提出人(proposePeople)]的值:[$(pobjRTViewpointRelaEN.proposePeople)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.updDate) == false && undefined !== pobjRTViewpointRelaEN.updDate && tzDataType.isString(pobjRTViewpointRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjRTViewpointRelaEN.updDate)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.updUser) == false && undefined !== pobjRTViewpointRelaEN.updUser && tzDataType.isString(pobjRTViewpointRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjRTViewpointRelaEN.updUser)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.memo) == false && undefined !== pobjRTViewpointRelaEN.memo && tzDataType.isString(pobjRTViewpointRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjRTViewpointRelaEN.memo)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.classificationId) == false && undefined !== pobjRTViewpointRelaEN.classificationId && tzDataType.isString(pobjRTViewpointRelaEN.classificationId) === false)
{
 throw new Error("(errid:Watl000414)字段[分类Id(classificationId)]的值:[$(pobjRTViewpointRelaEN.classificationId)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.idCurrEduCls) == false && undefined !== pobjRTViewpointRelaEN.idCurrEduCls && tzDataType.isString(pobjRTViewpointRelaEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjRTViewpointRelaEN.idCurrEduCls)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RTViewpointRela_CheckProperty4Update(pobjRTViewpointRelaEN: clsRTViewpointRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRTViewpointRelaEN.topicId) == false && GetStrLen(pobjRTViewpointRelaEN.topicId) > 8)
{
 throw new Error("(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.topicId)(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.viewpointId) == false && GetStrLen(pobjRTViewpointRelaEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000416)字段[观点Id(viewpointId)]的长度不能超过8(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.viewpointId)(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.proposePeople) == false && GetStrLen(pobjRTViewpointRelaEN.proposePeople) > 50)
{
 throw new Error("(errid:Watl000416)字段[提出人(proposePeople)]的长度不能超过50(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.proposePeople)(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.updDate) == false && GetStrLen(pobjRTViewpointRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.updDate)(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.updUser) == false && GetStrLen(pobjRTViewpointRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.updUser)(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.memo) == false && GetStrLen(pobjRTViewpointRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.memo)(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.classificationId) == false && GetStrLen(pobjRTViewpointRelaEN.classificationId) > 10)
{
 throw new Error("(errid:Watl000416)字段[分类Id(classificationId)]的长度不能超过10(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.classificationId)(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.idCurrEduCls) == false && GetStrLen(pobjRTViewpointRelaEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 主题观点关系表(RTViewpointRela))!值:$(pobjRTViewpointRelaEN.idCurrEduCls)(clsRTViewpointRelaBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjRTViewpointRelaEN.mId && undefined !== pobjRTViewpointRelaEN.mId && tzDataType.isNumber(pobjRTViewpointRelaEN.mId) === false)
{
 throw new Error("(errid:Watl000417)字段[mId(mId)]的值:[$(pobjRTViewpointRelaEN.mId)], 非法,应该为数值型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.topicId) == false && undefined !== pobjRTViewpointRelaEN.topicId && tzDataType.isString(pobjRTViewpointRelaEN.topicId) === false)
{
 throw new Error("(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjRTViewpointRelaEN.topicId)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.viewpointId) == false && undefined !== pobjRTViewpointRelaEN.viewpointId && tzDataType.isString(pobjRTViewpointRelaEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000417)字段[观点Id(viewpointId)]的值:[$(pobjRTViewpointRelaEN.viewpointId)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.proposePeople) == false && undefined !== pobjRTViewpointRelaEN.proposePeople && tzDataType.isString(pobjRTViewpointRelaEN.proposePeople) === false)
{
 throw new Error("(errid:Watl000417)字段[提出人(proposePeople)]的值:[$(pobjRTViewpointRelaEN.proposePeople)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.updDate) == false && undefined !== pobjRTViewpointRelaEN.updDate && tzDataType.isString(pobjRTViewpointRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjRTViewpointRelaEN.updDate)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.updUser) == false && undefined !== pobjRTViewpointRelaEN.updUser && tzDataType.isString(pobjRTViewpointRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjRTViewpointRelaEN.updUser)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.memo) == false && undefined !== pobjRTViewpointRelaEN.memo && tzDataType.isString(pobjRTViewpointRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjRTViewpointRelaEN.memo)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.classificationId) == false && undefined !== pobjRTViewpointRelaEN.classificationId && tzDataType.isString(pobjRTViewpointRelaEN.classificationId) === false)
{
 throw new Error("(errid:Watl000417)字段[分类Id(classificationId)]的值:[$(pobjRTViewpointRelaEN.classificationId)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRTViewpointRelaEN.idCurrEduCls) == false && undefined !== pobjRTViewpointRelaEN.idCurrEduCls && tzDataType.isString(pobjRTViewpointRelaEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjRTViewpointRelaEN.idCurrEduCls)], 非法,应该为字符型(In 主题观点关系表(RTViewpointRela))!(clsRTViewpointRelaBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjRTViewpointRelaEN.mId 
 || pobjRTViewpointRelaEN.mId != null && pobjRTViewpointRelaEN.mId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[mId]不能为空(In 主题观点关系表)!(clsRTViewpointRelaBL:CheckProperty4Update)");
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
export  function RTViewpointRela_GetJSONStrByObj (pobjRTViewpointRelaEN: clsRTViewpointRelaEN): string
{
pobjRTViewpointRelaEN.sfUpdFldSetStr = pobjRTViewpointRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRTViewpointRelaEN);
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
export  function RTViewpointRela_GetObjLstByJSONStr (strJSON: string): Array<clsRTViewpointRelaEN>
{
let arrRTViewpointRelaObjLst = new Array<clsRTViewpointRelaEN>();
if (strJSON === "")
{
return arrRTViewpointRelaObjLst;
}
try
{
arrRTViewpointRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRTViewpointRelaObjLst;
}
return arrRTViewpointRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRTViewpointRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RTViewpointRela_GetObjLstByJSONObjLst (arrRTViewpointRelaObjLstS: Array<clsRTViewpointRelaEN>): Array<clsRTViewpointRelaEN>
{
const arrRTViewpointRelaObjLst = new Array<clsRTViewpointRelaEN>();
for (const objInFor of arrRTViewpointRelaObjLstS) {
const obj1 = RTViewpointRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRTViewpointRelaObjLst.push(obj1);
}
return arrRTViewpointRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RTViewpointRela_GetObjByJSONStr (strJSON: string): clsRTViewpointRelaEN
{
let pobjRTViewpointRelaEN = new clsRTViewpointRelaEN();
if (strJSON === "")
{
return pobjRTViewpointRelaEN;
}
try
{
pobjRTViewpointRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRTViewpointRelaEN;
}
return pobjRTViewpointRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RTViewpointRela_GetCombineCondition(objRTViewpointRelaCond: clsRTViewpointRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRTViewpointRelaCond.dicFldComparisonOp, clsRTViewpointRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objRTViewpointRelaCond.dicFldComparisonOp[clsRTViewpointRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsRTViewpointRelaEN.con_mId, objRTViewpointRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointRelaCond.dicFldComparisonOp, clsRTViewpointRelaEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objRTViewpointRelaCond.dicFldComparisonOp[clsRTViewpointRelaEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointRelaEN.con_TopicId, objRTViewpointRelaCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointRelaCond.dicFldComparisonOp, clsRTViewpointRelaEN.con_ViewpointId) == true)
{
const strComparisonOpViewpointId:string = objRTViewpointRelaCond.dicFldComparisonOp[clsRTViewpointRelaEN.con_ViewpointId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointRelaEN.con_ViewpointId, objRTViewpointRelaCond.viewpointId, strComparisonOpViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointRelaCond.dicFldComparisonOp, clsRTViewpointRelaEN.con_ProposePeople) == true)
{
const strComparisonOpProposePeople:string = objRTViewpointRelaCond.dicFldComparisonOp[clsRTViewpointRelaEN.con_ProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointRelaEN.con_ProposePeople, objRTViewpointRelaCond.proposePeople, strComparisonOpProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointRelaCond.dicFldComparisonOp, clsRTViewpointRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objRTViewpointRelaCond.dicFldComparisonOp[clsRTViewpointRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointRelaEN.con_UpdDate, objRTViewpointRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointRelaCond.dicFldComparisonOp, clsRTViewpointRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objRTViewpointRelaCond.dicFldComparisonOp[clsRTViewpointRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointRelaEN.con_UpdUser, objRTViewpointRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointRelaCond.dicFldComparisonOp, clsRTViewpointRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objRTViewpointRelaCond.dicFldComparisonOp[clsRTViewpointRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointRelaEN.con_Memo, objRTViewpointRelaCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointRelaCond.dicFldComparisonOp, clsRTViewpointRelaEN.con_ClassificationId) == true)
{
const strComparisonOpClassificationId:string = objRTViewpointRelaCond.dicFldComparisonOp[clsRTViewpointRelaEN.con_ClassificationId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointRelaEN.con_ClassificationId, objRTViewpointRelaCond.classificationId, strComparisonOpClassificationId);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointRelaCond.dicFldComparisonOp, clsRTViewpointRelaEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objRTViewpointRelaCond.dicFldComparisonOp[clsRTViewpointRelaEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointRelaEN.con_IdCurrEduCls, objRTViewpointRelaCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--RTViewpointRela(主题观点关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function RTViewpointRela_GetUniCondStr(objRTViewpointRelaEN: clsRTViewpointRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and TopicId = '{0}'", objRTViewpointRelaEN.topicId);
 strWhereCond +=  Format(" and ViewpointId = '{0}'", objRTViewpointRelaEN.viewpointId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--RTViewpointRela(主题观点关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function RTViewpointRela_GetUniCondStr4Update(objRTViewpointRelaEN: clsRTViewpointRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objRTViewpointRelaEN.mId);
 strWhereCond +=  Format(" and TopicId = '{0}'", objRTViewpointRelaEN.topicId);
 strWhereCond +=  Format(" and ViewpointId = '{0}'", objRTViewpointRelaEN.viewpointId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRTViewpointRelaENS:源对象
 * @param objRTViewpointRelaENT:目标对象
*/
export  function RTViewpointRela_CopyObjTo(objRTViewpointRelaENS: clsRTViewpointRelaEN , objRTViewpointRelaENT: clsRTViewpointRelaEN ): void 
{
objRTViewpointRelaENT.mId = objRTViewpointRelaENS.mId; //mId
objRTViewpointRelaENT.topicId = objRTViewpointRelaENS.topicId; //主题Id
objRTViewpointRelaENT.viewpointId = objRTViewpointRelaENS.viewpointId; //观点Id
objRTViewpointRelaENT.proposePeople = objRTViewpointRelaENS.proposePeople; //提出人
objRTViewpointRelaENT.updDate = objRTViewpointRelaENS.updDate; //修改日期
objRTViewpointRelaENT.updUser = objRTViewpointRelaENS.updUser; //修改人
objRTViewpointRelaENT.memo = objRTViewpointRelaENS.memo; //备注
objRTViewpointRelaENT.classificationId = objRTViewpointRelaENS.classificationId; //分类Id
objRTViewpointRelaENT.idCurrEduCls = objRTViewpointRelaENS.idCurrEduCls; //教学班流水号
objRTViewpointRelaENT.sfUpdFldSetStr = objRTViewpointRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRTViewpointRelaENS:源对象
 * @param objRTViewpointRelaENT:目标对象
*/
export  function RTViewpointRela_GetObjFromJsonObj(objRTViewpointRelaENS: clsRTViewpointRelaEN): clsRTViewpointRelaEN 
{
 const objRTViewpointRelaENT: clsRTViewpointRelaEN = new clsRTViewpointRelaEN();
ObjectAssign(objRTViewpointRelaENT, objRTViewpointRelaENS);
 return objRTViewpointRelaENT;
}