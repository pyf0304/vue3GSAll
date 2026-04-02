
 /**
 * 类名:clsgs_TobeStudiedProblemVerWApi
 * 表名:gs_TobeStudiedProblemVer(01120775)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:41
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
 * 待研究问题历史版本表(gs_TobeStudiedProblemVer)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsgs_TobeStudiedProblemVerEN } from "@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemVerEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_TobeStudiedProblemVer_Controller = "gs_TobeStudiedProblemVerApi";
 export const gs_TobeStudiedProblemVer_ConstructorName = "gs_TobeStudiedProblemVer";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngProblemVId:关键字
 * @returns 对象
 **/
export  async function gs_TobeStudiedProblemVer_GetObjByProblemVIdAsync(lngProblemVId: number): Promise<clsgs_TobeStudiedProblemVerEN|null>  
{
const strThisFuncName = "GetObjByProblemVIdAsync";

if (lngProblemVId == 0)
{
  const strMsg = Format("参数:[lngProblemVId]不能为空!(In clsgs_TobeStudiedProblemVerWApi.GetObjByProblemVIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByProblemVId";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngProblemVId,
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
const objgs_TobeStudiedProblemVer = gs_TobeStudiedProblemVer_GetObjFromJsonObj(returnObj);
return objgs_TobeStudiedProblemVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByProblemVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByProblemVIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByProblemVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function gs_TobeStudiedProblemVer_SortFunDefa(a:clsgs_TobeStudiedProblemVerEN , b:clsgs_TobeStudiedProblemVerEN): number 
{
return a.problemVId-b.problemVId;
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
export  function gs_TobeStudiedProblemVer_SortFunDefa2Fld(a:clsgs_TobeStudiedProblemVerEN , b:clsgs_TobeStudiedProblemVerEN): number 
{
if (a.problemId == b.problemId) return a.topicId.localeCompare(b.topicId);
else return a.problemId.localeCompare(b.problemId);
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
export  function gs_TobeStudiedProblemVer_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_TobeStudiedProblemVerEN.con_ProblemVId:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
return a.problemVId-b.problemVId;
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemId:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
return a.problemId.localeCompare(b.problemId);
}
case clsgs_TobeStudiedProblemVerEN.con_TopicId:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.topicId == null) return -1;
if (b.topicId == null) return 1;
return a.topicId.localeCompare(b.topicId);
}
case clsgs_TobeStudiedProblemVerEN.con_IsSubmit:
return (a: clsgs_TobeStudiedProblemVerEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemContent:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.problemContent == null) return -1;
if (b.problemContent == null) return 1;
return a.problemContent.localeCompare(b.problemContent);
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemDate:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.problemDate == null) return -1;
if (b.problemDate == null) return 1;
return a.problemDate.localeCompare(b.problemDate);
}
case clsgs_TobeStudiedProblemVerEN.con_Participant:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.participant == null) return -1;
if (b.participant == null) return 1;
return a.participant.localeCompare(b.participant);
}
case clsgs_TobeStudiedProblemVerEN.con_UpdDate:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_TobeStudiedProblemVerEN.con_UpdUser:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_TobeStudiedProblemVerEN.con_Year:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.year == null) return -1;
if (b.year == null) return 1;
return a.year.localeCompare(b.year);
}
case clsgs_TobeStudiedProblemVerEN.con_Month:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.month == null) return -1;
if (b.month == null) return 1;
return a.month.localeCompare(b.month);
}
case clsgs_TobeStudiedProblemVerEN.con_Memo:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemTitle:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (a.problemTitle == null) return -1;
if (b.problemTitle == null) return 1;
return a.problemTitle.localeCompare(b.problemTitle);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_TobeStudiedProblemVer]中不存在!(in ${ gs_TobeStudiedProblemVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_TobeStudiedProblemVerEN.con_ProblemVId:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
return b.problemVId-a.problemVId;
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemId:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
return b.problemId.localeCompare(a.problemId);
}
case clsgs_TobeStudiedProblemVerEN.con_TopicId:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.topicId == null) return -1;
if (a.topicId == null) return 1;
return b.topicId.localeCompare(a.topicId);
}
case clsgs_TobeStudiedProblemVerEN.con_IsSubmit:
return (b: clsgs_TobeStudiedProblemVerEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemContent:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.problemContent == null) return -1;
if (a.problemContent == null) return 1;
return b.problemContent.localeCompare(a.problemContent);
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemDate:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.problemDate == null) return -1;
if (a.problemDate == null) return 1;
return b.problemDate.localeCompare(a.problemDate);
}
case clsgs_TobeStudiedProblemVerEN.con_Participant:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.participant == null) return -1;
if (a.participant == null) return 1;
return b.participant.localeCompare(a.participant);
}
case clsgs_TobeStudiedProblemVerEN.con_UpdDate:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_TobeStudiedProblemVerEN.con_UpdUser:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_TobeStudiedProblemVerEN.con_Year:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.year == null) return -1;
if (a.year == null) return 1;
return b.year.localeCompare(a.year);
}
case clsgs_TobeStudiedProblemVerEN.con_Month:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.month == null) return -1;
if (a.month == null) return 1;
return b.month.localeCompare(a.month);
}
case clsgs_TobeStudiedProblemVerEN.con_Memo:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemTitle:
return (a: clsgs_TobeStudiedProblemVerEN, b: clsgs_TobeStudiedProblemVerEN) => {
if (b.problemTitle == null) return -1;
if (a.problemTitle == null) return 1;
return b.problemTitle.localeCompare(a.problemTitle);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_TobeStudiedProblemVer]中不存在!(in ${ gs_TobeStudiedProblemVer_ConstructorName}.${ strThisFuncName})`;
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
export  async function gs_TobeStudiedProblemVer_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_TobeStudiedProblemVerEN.con_ProblemVId:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.problemVId === value;
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemId:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.problemId === value;
}
case clsgs_TobeStudiedProblemVerEN.con_TopicId:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.topicId === value;
}
case clsgs_TobeStudiedProblemVerEN.con_IsSubmit:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.isSubmit === value;
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemContent:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.problemContent === value;
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemDate:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.problemDate === value;
}
case clsgs_TobeStudiedProblemVerEN.con_Participant:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.participant === value;
}
case clsgs_TobeStudiedProblemVerEN.con_UpdDate:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.updDate === value;
}
case clsgs_TobeStudiedProblemVerEN.con_UpdUser:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.updUser === value;
}
case clsgs_TobeStudiedProblemVerEN.con_Year:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.year === value;
}
case clsgs_TobeStudiedProblemVerEN.con_Month:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.month === value;
}
case clsgs_TobeStudiedProblemVerEN.con_Memo:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.memo === value;
}
case clsgs_TobeStudiedProblemVerEN.con_ProblemTitle:
return (obj: clsgs_TobeStudiedProblemVerEN) => {
return obj.problemTitle === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_TobeStudiedProblemVer]中不存在!(in ${ gs_TobeStudiedProblemVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[gs_TobeStudiedProblemVer__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_TobeStudiedProblemVer_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  async function gs_TobeStudiedProblemVer_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  async function gs_TobeStudiedProblemVer_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_TobeStudiedProblemVerEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const objgs_TobeStudiedProblemVer = gs_TobeStudiedProblemVer_GetObjFromJsonObj(returnObj);
return objgs_TobeStudiedProblemVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  async function gs_TobeStudiedProblemVer_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_TobeStudiedProblemVerEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TobeStudiedProblemVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
 * @param arrProblemVId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_TobeStudiedProblemVer_GetObjLstByProblemVIdLstAsync(arrProblemVId: Array<string>): Promise<Array<clsgs_TobeStudiedProblemVerEN>>  
{
const strThisFuncName = "GetObjLstByProblemVIdLstAsync";
const strAction = "GetObjLstByProblemVIdLst";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrProblemVId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TobeStudiedProblemVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByProblemVIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function gs_TobeStudiedProblemVer_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_TobeStudiedProblemVerEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TobeStudiedProblemVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  async function gs_TobeStudiedProblemVer_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_TobeStudiedProblemVerEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TobeStudiedProblemVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  async function gs_TobeStudiedProblemVer_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_TobeStudiedProblemVerEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_TobeStudiedProblemVerEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TobeStudiedProblemVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
 * @param lngProblemVId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_TobeStudiedProblemVer_DelRecordAsync(lngProblemVId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngProblemVId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
 * @param arrProblemVId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_TobeStudiedProblemVer_Delgs_TobeStudiedProblemVersAsync(arrProblemVId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_TobeStudiedProblemVersAsync";
const strAction = "Delgs_TobeStudiedProblemVers";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrProblemVId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  async function gs_TobeStudiedProblemVer_Delgs_TobeStudiedProblemVersByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_TobeStudiedProblemVersByCondAsync";
const strAction = "Delgs_TobeStudiedProblemVersByCond";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
 * @param objgs_TobeStudiedProblemVerEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_TobeStudiedProblemVer_AddNewRecordAsync(objgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_TobeStudiedProblemVerEN);
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TobeStudiedProblemVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
 * @param objgs_TobeStudiedProblemVerEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_TobeStudiedProblemVer_AddNewRecordWithReturnKeyAsync(objgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TobeStudiedProblemVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
 * @param objgs_TobeStudiedProblemVerEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_TobeStudiedProblemVer_UpdateRecordAsync(objgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_TobeStudiedProblemVerEN.sfUpdFldSetStr === undefined || objgs_TobeStudiedProblemVerEN.sfUpdFldSetStr === null || objgs_TobeStudiedProblemVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_TobeStudiedProblemVerEN.problemVId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TobeStudiedProblemVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
 * @param objgs_TobeStudiedProblemVerEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_TobeStudiedProblemVer_UpdateWithConditionAsync(objgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_TobeStudiedProblemVerEN.sfUpdFldSetStr === undefined || objgs_TobeStudiedProblemVerEN.sfUpdFldSetStr === null || objgs_TobeStudiedProblemVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_TobeStudiedProblemVerEN.problemVId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);
objgs_TobeStudiedProblemVerEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TobeStudiedProblemVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  async function gs_TobeStudiedProblemVer_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
 * @param lngProblemVId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function gs_TobeStudiedProblemVer_IsExistAsync(lngProblemVId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngProblemVId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  async function gs_TobeStudiedProblemVer_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  async function gs_TobeStudiedProblemVer_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_TobeStudiedProblemVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TobeStudiedProblemVer_ConstructorName, strThisFuncName);
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
export  function gs_TobeStudiedProblemVer_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_TobeStudiedProblemVer_CheckPropertyNew(pobjgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemId) === true )
{
 throw new Error("(errid:Watl000411)字段[问题Id]不能为空(In 待研究问题历史版本表)!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemId) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.problemId) > 10)
{
 throw new Error("(errid:Watl000413)字段[问题Id(problemId)]的长度不能超过10(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.problemId)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.topicId) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.topicId) > 8)
{
 throw new Error("(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.topicId)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemContent) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.problemContent) > 5000)
{
 throw new Error("(errid:Watl000413)字段[问题内容(problemContent)]的长度不能超过5000(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.problemContent)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemDate) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.problemDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[问题日期(problemDate)]的长度不能超过20(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.problemDate)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.participant) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.participant) > 500)
{
 throw new Error("(errid:Watl000413)字段[参与者(participant)]的长度不能超过500(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.participant)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.updDate) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.updDate)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.updUser) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.updUser)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.year) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.year) > 4)
{
 throw new Error("(errid:Watl000413)字段[年(year)]的长度不能超过4(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.year)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.month) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.month) > 2)
{
 throw new Error("(errid:Watl000413)字段[月(month)]的长度不能超过2(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.month)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.memo) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.memo)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemTitle) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.problemTitle) > 1000)
{
 throw new Error("(errid:Watl000413)字段[问题标题(problemTitle)]的长度不能超过1000(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.problemTitle)(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_TobeStudiedProblemVerEN.problemVId && undefined !== pobjgs_TobeStudiedProblemVerEN.problemVId && tzDataType.isNumber(pobjgs_TobeStudiedProblemVerEN.problemVId) === false)
{
 throw new Error("(errid:Watl000414)字段[ProblemVId(problemVId)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemVId)], 非法,应该为数值型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemId) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.problemId && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.problemId) === false)
{
 throw new Error("(errid:Watl000414)字段[问题Id(problemId)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemId)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.topicId) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.topicId && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.topicId) === false)
{
 throw new Error("(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjgs_TobeStudiedProblemVerEN.topicId)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (null != pobjgs_TobeStudiedProblemVerEN.isSubmit && undefined !== pobjgs_TobeStudiedProblemVerEN.isSubmit && tzDataType.isBoolean(pobjgs_TobeStudiedProblemVerEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjgs_TobeStudiedProblemVerEN.isSubmit)], 非法,应该为布尔型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemContent) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.problemContent && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.problemContent) === false)
{
 throw new Error("(errid:Watl000414)字段[问题内容(problemContent)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemContent)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemDate) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.problemDate && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.problemDate) === false)
{
 throw new Error("(errid:Watl000414)字段[问题日期(problemDate)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemDate)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.participant) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.participant && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.participant) === false)
{
 throw new Error("(errid:Watl000414)字段[参与者(participant)]的值:[$(pobjgs_TobeStudiedProblemVerEN.participant)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.updDate) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.updDate && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_TobeStudiedProblemVerEN.updDate)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.updUser) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.updUser && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_TobeStudiedProblemVerEN.updUser)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.year) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.year && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.year) === false)
{
 throw new Error("(errid:Watl000414)字段[年(year)]的值:[$(pobjgs_TobeStudiedProblemVerEN.year)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.month) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.month && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.month) === false)
{
 throw new Error("(errid:Watl000414)字段[月(month)]的值:[$(pobjgs_TobeStudiedProblemVerEN.month)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.memo) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.memo && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_TobeStudiedProblemVerEN.memo)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemTitle) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.problemTitle && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.problemTitle) === false)
{
 throw new Error("(errid:Watl000414)字段[问题标题(problemTitle)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemTitle)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_TobeStudiedProblemVer_CheckProperty4Update(pobjgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemId) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.problemId) > 10)
{
 throw new Error("(errid:Watl000416)字段[问题Id(problemId)]的长度不能超过10(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.problemId)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.topicId) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.topicId) > 8)
{
 throw new Error("(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.topicId)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemContent) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.problemContent) > 5000)
{
 throw new Error("(errid:Watl000416)字段[问题内容(problemContent)]的长度不能超过5000(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.problemContent)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemDate) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.problemDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[问题日期(problemDate)]的长度不能超过20(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.problemDate)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.participant) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.participant) > 500)
{
 throw new Error("(errid:Watl000416)字段[参与者(participant)]的长度不能超过500(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.participant)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.updDate) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.updDate)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.updUser) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.updUser)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.year) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.year) > 4)
{
 throw new Error("(errid:Watl000416)字段[年(year)]的长度不能超过4(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.year)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.month) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.month) > 2)
{
 throw new Error("(errid:Watl000416)字段[月(month)]的长度不能超过2(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.month)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.memo) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.memo)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemTitle) == false && GetStrLen(pobjgs_TobeStudiedProblemVerEN.problemTitle) > 1000)
{
 throw new Error("(errid:Watl000416)字段[问题标题(problemTitle)]的长度不能超过1000(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!值:$(pobjgs_TobeStudiedProblemVerEN.problemTitle)(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_TobeStudiedProblemVerEN.problemVId && undefined !== pobjgs_TobeStudiedProblemVerEN.problemVId && tzDataType.isNumber(pobjgs_TobeStudiedProblemVerEN.problemVId) === false)
{
 throw new Error("(errid:Watl000417)字段[ProblemVId(problemVId)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemVId)], 非法,应该为数值型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemId) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.problemId && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.problemId) === false)
{
 throw new Error("(errid:Watl000417)字段[问题Id(problemId)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemId)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.topicId) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.topicId && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.topicId) === false)
{
 throw new Error("(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjgs_TobeStudiedProblemVerEN.topicId)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (null != pobjgs_TobeStudiedProblemVerEN.isSubmit && undefined !== pobjgs_TobeStudiedProblemVerEN.isSubmit && tzDataType.isBoolean(pobjgs_TobeStudiedProblemVerEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjgs_TobeStudiedProblemVerEN.isSubmit)], 非法,应该为布尔型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemContent) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.problemContent && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.problemContent) === false)
{
 throw new Error("(errid:Watl000417)字段[问题内容(problemContent)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemContent)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemDate) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.problemDate && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.problemDate) === false)
{
 throw new Error("(errid:Watl000417)字段[问题日期(problemDate)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemDate)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.participant) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.participant && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.participant) === false)
{
 throw new Error("(errid:Watl000417)字段[参与者(participant)]的值:[$(pobjgs_TobeStudiedProblemVerEN.participant)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.updDate) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.updDate && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_TobeStudiedProblemVerEN.updDate)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.updUser) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.updUser && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_TobeStudiedProblemVerEN.updUser)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.year) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.year && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.year) === false)
{
 throw new Error("(errid:Watl000417)字段[年(year)]的值:[$(pobjgs_TobeStudiedProblemVerEN.year)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.month) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.month && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.month) === false)
{
 throw new Error("(errid:Watl000417)字段[月(month)]的值:[$(pobjgs_TobeStudiedProblemVerEN.month)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.memo) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.memo && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_TobeStudiedProblemVerEN.memo)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_TobeStudiedProblemVerEN.problemTitle) == false && undefined !== pobjgs_TobeStudiedProblemVerEN.problemTitle && tzDataType.isString(pobjgs_TobeStudiedProblemVerEN.problemTitle) === false)
{
 throw new Error("(errid:Watl000417)字段[问题标题(problemTitle)]的值:[$(pobjgs_TobeStudiedProblemVerEN.problemTitle)], 非法,应该为字符型(In 待研究问题历史版本表(gs_TobeStudiedProblemVer))!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjgs_TobeStudiedProblemVerEN.problemVId 
 || pobjgs_TobeStudiedProblemVerEN.problemVId != null && pobjgs_TobeStudiedProblemVerEN.problemVId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[ProblemVId]不能为空(In 待研究问题历史版本表)!(clsgs_TobeStudiedProblemVerBL:CheckProperty4Update)");
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
export  function gs_TobeStudiedProblemVer_GetJSONStrByObj (pobjgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN): string
{
pobjgs_TobeStudiedProblemVerEN.sfUpdFldSetStr = pobjgs_TobeStudiedProblemVerEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_TobeStudiedProblemVerEN);
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
export  function gs_TobeStudiedProblemVer_GetObjLstByJSONStr (strJSON: string): Array<clsgs_TobeStudiedProblemVerEN>
{
let arrgs_TobeStudiedProblemVerObjLst = new Array<clsgs_TobeStudiedProblemVerEN>();
if (strJSON === "")
{
return arrgs_TobeStudiedProblemVerObjLst;
}
try
{
arrgs_TobeStudiedProblemVerObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_TobeStudiedProblemVerObjLst;
}
return arrgs_TobeStudiedProblemVerObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_TobeStudiedProblemVerObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_TobeStudiedProblemVer_GetObjLstByJSONObjLst (arrgs_TobeStudiedProblemVerObjLstS: Array<clsgs_TobeStudiedProblemVerEN>): Array<clsgs_TobeStudiedProblemVerEN>
{
const arrgs_TobeStudiedProblemVerObjLst = new Array<clsgs_TobeStudiedProblemVerEN>();
for (const objInFor of arrgs_TobeStudiedProblemVerObjLstS) {
const obj1 = gs_TobeStudiedProblemVer_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_TobeStudiedProblemVerObjLst.push(obj1);
}
return arrgs_TobeStudiedProblemVerObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_TobeStudiedProblemVer_GetObjByJSONStr (strJSON: string): clsgs_TobeStudiedProblemVerEN
{
let pobjgs_TobeStudiedProblemVerEN = new clsgs_TobeStudiedProblemVerEN();
if (strJSON === "")
{
return pobjgs_TobeStudiedProblemVerEN;
}
try
{
pobjgs_TobeStudiedProblemVerEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_TobeStudiedProblemVerEN;
}
return pobjgs_TobeStudiedProblemVerEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_TobeStudiedProblemVer_GetCombineCondition(objgs_TobeStudiedProblemVerCond: clsgs_TobeStudiedProblemVerEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_ProblemVId) == true)
{
const strComparisonOpProblemVId:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_ProblemVId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_TobeStudiedProblemVerEN.con_ProblemVId, objgs_TobeStudiedProblemVerCond.problemVId, strComparisonOpProblemVId);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_ProblemId) == true)
{
const strComparisonOpProblemId:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_ProblemId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_ProblemId, objgs_TobeStudiedProblemVerCond.problemId, strComparisonOpProblemId);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_TopicId, objgs_TobeStudiedProblemVerCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_IsSubmit) == true)
{
if (objgs_TobeStudiedProblemVerCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsgs_TobeStudiedProblemVerEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsgs_TobeStudiedProblemVerEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_ProblemContent) == true)
{
const strComparisonOpProblemContent:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_ProblemContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_ProblemContent, objgs_TobeStudiedProblemVerCond.problemContent, strComparisonOpProblemContent);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_ProblemDate) == true)
{
const strComparisonOpProblemDate:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_ProblemDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_ProblemDate, objgs_TobeStudiedProblemVerCond.problemDate, strComparisonOpProblemDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_Participant) == true)
{
const strComparisonOpParticipant:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_Participant];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_Participant, objgs_TobeStudiedProblemVerCond.participant, strComparisonOpParticipant);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_UpdDate, objgs_TobeStudiedProblemVerCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_UpdUser, objgs_TobeStudiedProblemVerCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_Year) == true)
{
const strComparisonOpYear:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_Year];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_Year, objgs_TobeStudiedProblemVerCond.year, strComparisonOpYear);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_Month) == true)
{
const strComparisonOpMonth:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_Month];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_Month, objgs_TobeStudiedProblemVerCond.month, strComparisonOpMonth);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_Memo, objgs_TobeStudiedProblemVerCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objgs_TobeStudiedProblemVerCond.dicFldComparisonOp, clsgs_TobeStudiedProblemVerEN.con_ProblemTitle) == true)
{
const strComparisonOpProblemTitle:string = objgs_TobeStudiedProblemVerCond.dicFldComparisonOp[clsgs_TobeStudiedProblemVerEN.con_ProblemTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TobeStudiedProblemVerEN.con_ProblemTitle, objgs_TobeStudiedProblemVerCond.problemTitle, strComparisonOpProblemTitle);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_TobeStudiedProblemVer(待研究问题历史版本表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngProblemVId: ProblemVId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_TobeStudiedProblemVer_GetUniCondStr(objgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ProblemVId = '{0}'", objgs_TobeStudiedProblemVerEN.problemVId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_TobeStudiedProblemVer(待研究问题历史版本表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngProblemVId: ProblemVId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_TobeStudiedProblemVer_GetUniCondStr4Update(objgs_TobeStudiedProblemVerEN: clsgs_TobeStudiedProblemVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ProblemVId <> '{0}'", objgs_TobeStudiedProblemVerEN.problemVId);
 strWhereCond +=  Format(" and ProblemVId = '{0}'", objgs_TobeStudiedProblemVerEN.problemVId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_TobeStudiedProblemVerENS:源对象
 * @param objgs_TobeStudiedProblemVerENT:目标对象
*/
export  function gs_TobeStudiedProblemVer_CopyObjTo(objgs_TobeStudiedProblemVerENS: clsgs_TobeStudiedProblemVerEN , objgs_TobeStudiedProblemVerENT: clsgs_TobeStudiedProblemVerEN ): void 
{
objgs_TobeStudiedProblemVerENT.problemVId = objgs_TobeStudiedProblemVerENS.problemVId; //ProblemVId
objgs_TobeStudiedProblemVerENT.problemId = objgs_TobeStudiedProblemVerENS.problemId; //问题Id
objgs_TobeStudiedProblemVerENT.topicId = objgs_TobeStudiedProblemVerENS.topicId; //主题Id
objgs_TobeStudiedProblemVerENT.isSubmit = objgs_TobeStudiedProblemVerENS.isSubmit; //是否提交
objgs_TobeStudiedProblemVerENT.problemContent = objgs_TobeStudiedProblemVerENS.problemContent; //问题内容
objgs_TobeStudiedProblemVerENT.problemDate = objgs_TobeStudiedProblemVerENS.problemDate; //问题日期
objgs_TobeStudiedProblemVerENT.participant = objgs_TobeStudiedProblemVerENS.participant; //参与者
objgs_TobeStudiedProblemVerENT.updDate = objgs_TobeStudiedProblemVerENS.updDate; //修改日期
objgs_TobeStudiedProblemVerENT.updUser = objgs_TobeStudiedProblemVerENS.updUser; //修改人
objgs_TobeStudiedProblemVerENT.year = objgs_TobeStudiedProblemVerENS.year; //年
objgs_TobeStudiedProblemVerENT.month = objgs_TobeStudiedProblemVerENS.month; //月
objgs_TobeStudiedProblemVerENT.memo = objgs_TobeStudiedProblemVerENS.memo; //备注
objgs_TobeStudiedProblemVerENT.problemTitle = objgs_TobeStudiedProblemVerENS.problemTitle; //问题标题
objgs_TobeStudiedProblemVerENT.sfUpdFldSetStr = objgs_TobeStudiedProblemVerENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_TobeStudiedProblemVerENS:源对象
 * @param objgs_TobeStudiedProblemVerENT:目标对象
*/
export  function gs_TobeStudiedProblemVer_GetObjFromJsonObj(objgs_TobeStudiedProblemVerENS: clsgs_TobeStudiedProblemVerEN): clsgs_TobeStudiedProblemVerEN 
{
 const objgs_TobeStudiedProblemVerENT: clsgs_TobeStudiedProblemVerEN = new clsgs_TobeStudiedProblemVerEN();
ObjectAssign(objgs_TobeStudiedProblemVerENT, objgs_TobeStudiedProblemVerENS);
 return objgs_TobeStudiedProblemVerENT;
}