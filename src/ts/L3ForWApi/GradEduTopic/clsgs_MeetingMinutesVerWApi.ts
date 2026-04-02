
 /**
 * 类名:clsgs_MeetingMinutesVerWApi
 * 表名:gs_MeetingMinutesVer(01120769)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:41
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
 * 会议纪要历史版(gs_MeetingMinutesVer)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsgs_MeetingMinutesVerEN } from "@/ts/L0Entity/GradEduTopic/clsgs_MeetingMinutesVerEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_MeetingMinutesVer_Controller = "gs_MeetingMinutesVerApi";
 export const gs_MeetingMinutesVer_ConstructorName = "gs_MeetingMinutesVer";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngMeetingVId:关键字
 * @returns 对象
 **/
export  async function gs_MeetingMinutesVer_GetObjByMeetingVIdAsync(lngMeetingVId: number): Promise<clsgs_MeetingMinutesVerEN|null>  
{
const strThisFuncName = "GetObjByMeetingVIdAsync";

if (lngMeetingVId == 0)
{
  const strMsg = Format("参数:[lngMeetingVId]不能为空!(In clsgs_MeetingMinutesVerWApi.GetObjByMeetingVIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByMeetingVId";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngMeetingVId,
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
const objgs_MeetingMinutesVer = gs_MeetingMinutesVer_GetObjFromJsonObj(returnObj);
return objgs_MeetingMinutesVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByMeetingVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByMeetingVIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByMeetingVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function gs_MeetingMinutesVer_SortFunDefa(a:clsgs_MeetingMinutesVerEN , b:clsgs_MeetingMinutesVerEN): number 
{
return a.meetingVId-b.meetingVId;
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
export  function gs_MeetingMinutesVer_SortFunDefa2Fld(a:clsgs_MeetingMinutesVerEN , b:clsgs_MeetingMinutesVerEN): number 
{
if (a.meetingId == b.meetingId) return a.topicId.localeCompare(b.topicId);
else return a.meetingId.localeCompare(b.meetingId);
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
export  function gs_MeetingMinutesVer_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_MeetingMinutesVerEN.con_MeetingVId:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
return a.meetingVId-b.meetingVId;
}
case clsgs_MeetingMinutesVerEN.con_MeetingId:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
return a.meetingId.localeCompare(b.meetingId);
}
case clsgs_MeetingMinutesVerEN.con_TopicId:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (a.topicId == null) return -1;
if (b.topicId == null) return 1;
return a.topicId.localeCompare(b.topicId);
}
case clsgs_MeetingMinutesVerEN.con_IsSubmit:
return (a: clsgs_MeetingMinutesVerEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsgs_MeetingMinutesVerEN.con_MeetingContent:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (a.meetingContent == null) return -1;
if (b.meetingContent == null) return 1;
return a.meetingContent.localeCompare(b.meetingContent);
}
case clsgs_MeetingMinutesVerEN.con_MeetingDate:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (a.meetingDate == null) return -1;
if (b.meetingDate == null) return 1;
return a.meetingDate.localeCompare(b.meetingDate);
}
case clsgs_MeetingMinutesVerEN.con_UpdDate:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_MeetingMinutesVerEN.con_UpdUser:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_MeetingMinutesVerEN.con_Year:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (a.year == null) return -1;
if (b.year == null) return 1;
return a.year.localeCompare(b.year);
}
case clsgs_MeetingMinutesVerEN.con_Month:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (a.month == null) return -1;
if (b.month == null) return 1;
return a.month.localeCompare(b.month);
}
case clsgs_MeetingMinutesVerEN.con_Memo:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsgs_MeetingMinutesVerEN.con_Participants:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (a.participants == null) return -1;
if (b.participants == null) return 1;
return a.participants.localeCompare(b.participants);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_MeetingMinutesVer]中不存在!(in ${ gs_MeetingMinutesVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_MeetingMinutesVerEN.con_MeetingVId:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
return b.meetingVId-a.meetingVId;
}
case clsgs_MeetingMinutesVerEN.con_MeetingId:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
return b.meetingId.localeCompare(a.meetingId);
}
case clsgs_MeetingMinutesVerEN.con_TopicId:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (b.topicId == null) return -1;
if (a.topicId == null) return 1;
return b.topicId.localeCompare(a.topicId);
}
case clsgs_MeetingMinutesVerEN.con_IsSubmit:
return (b: clsgs_MeetingMinutesVerEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsgs_MeetingMinutesVerEN.con_MeetingContent:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (b.meetingContent == null) return -1;
if (a.meetingContent == null) return 1;
return b.meetingContent.localeCompare(a.meetingContent);
}
case clsgs_MeetingMinutesVerEN.con_MeetingDate:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (b.meetingDate == null) return -1;
if (a.meetingDate == null) return 1;
return b.meetingDate.localeCompare(a.meetingDate);
}
case clsgs_MeetingMinutesVerEN.con_UpdDate:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_MeetingMinutesVerEN.con_UpdUser:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_MeetingMinutesVerEN.con_Year:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (b.year == null) return -1;
if (a.year == null) return 1;
return b.year.localeCompare(a.year);
}
case clsgs_MeetingMinutesVerEN.con_Month:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (b.month == null) return -1;
if (a.month == null) return 1;
return b.month.localeCompare(a.month);
}
case clsgs_MeetingMinutesVerEN.con_Memo:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsgs_MeetingMinutesVerEN.con_Participants:
return (a: clsgs_MeetingMinutesVerEN, b: clsgs_MeetingMinutesVerEN) => {
if (b.participants == null) return -1;
if (a.participants == null) return 1;
return b.participants.localeCompare(a.participants);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_MeetingMinutesVer]中不存在!(in ${ gs_MeetingMinutesVer_ConstructorName}.${ strThisFuncName})`;
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
export  async function gs_MeetingMinutesVer_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_MeetingMinutesVerEN.con_MeetingVId:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.meetingVId === value;
}
case clsgs_MeetingMinutesVerEN.con_MeetingId:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.meetingId === value;
}
case clsgs_MeetingMinutesVerEN.con_TopicId:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.topicId === value;
}
case clsgs_MeetingMinutesVerEN.con_IsSubmit:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.isSubmit === value;
}
case clsgs_MeetingMinutesVerEN.con_MeetingContent:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.meetingContent === value;
}
case clsgs_MeetingMinutesVerEN.con_MeetingDate:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.meetingDate === value;
}
case clsgs_MeetingMinutesVerEN.con_UpdDate:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.updDate === value;
}
case clsgs_MeetingMinutesVerEN.con_UpdUser:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.updUser === value;
}
case clsgs_MeetingMinutesVerEN.con_Year:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.year === value;
}
case clsgs_MeetingMinutesVerEN.con_Month:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.month === value;
}
case clsgs_MeetingMinutesVerEN.con_Memo:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.memo === value;
}
case clsgs_MeetingMinutesVerEN.con_Participants:
return (obj: clsgs_MeetingMinutesVerEN) => {
return obj.participants === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_MeetingMinutesVer]中不存在!(in ${ gs_MeetingMinutesVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[gs_MeetingMinutesVer__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_MeetingMinutesVer_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  async function gs_MeetingMinutesVer_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  async function gs_MeetingMinutesVer_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_MeetingMinutesVerEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const objgs_MeetingMinutesVer = gs_MeetingMinutesVer_GetObjFromJsonObj(returnObj);
return objgs_MeetingMinutesVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  async function gs_MeetingMinutesVer_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_MeetingMinutesVerEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_MeetingMinutesVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
 * @param arrMeetingVId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_MeetingMinutesVer_GetObjLstByMeetingVIdLstAsync(arrMeetingVId: Array<string>): Promise<Array<clsgs_MeetingMinutesVerEN>>  
{
const strThisFuncName = "GetObjLstByMeetingVIdLstAsync";
const strAction = "GetObjLstByMeetingVIdLst";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMeetingVId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_MeetingMinutesVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByMeetingVIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function gs_MeetingMinutesVer_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_MeetingMinutesVerEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_MeetingMinutesVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  async function gs_MeetingMinutesVer_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_MeetingMinutesVerEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_MeetingMinutesVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  async function gs_MeetingMinutesVer_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_MeetingMinutesVerEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_MeetingMinutesVerEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_MeetingMinutesVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
 * @param lngMeetingVId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_MeetingMinutesVer_DelRecordAsync(lngMeetingVId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngMeetingVId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
 * @param arrMeetingVId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_MeetingMinutesVer_Delgs_MeetingMinutesVersAsync(arrMeetingVId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_MeetingMinutesVersAsync";
const strAction = "Delgs_MeetingMinutesVers";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMeetingVId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  async function gs_MeetingMinutesVer_Delgs_MeetingMinutesVersByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_MeetingMinutesVersByCondAsync";
const strAction = "Delgs_MeetingMinutesVersByCond";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
 * @param objgs_MeetingMinutesVerEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_MeetingMinutesVer_AddNewRecordAsync(objgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_MeetingMinutesVerEN);
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_MeetingMinutesVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
 * @param objgs_MeetingMinutesVerEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_MeetingMinutesVer_AddNewRecordWithReturnKeyAsync(objgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_MeetingMinutesVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
 * @param objgs_MeetingMinutesVerEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_MeetingMinutesVer_UpdateRecordAsync(objgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_MeetingMinutesVerEN.sfUpdFldSetStr === undefined || objgs_MeetingMinutesVerEN.sfUpdFldSetStr === null || objgs_MeetingMinutesVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_MeetingMinutesVerEN.meetingVId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_MeetingMinutesVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
 * @param objgs_MeetingMinutesVerEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_MeetingMinutesVer_UpdateWithConditionAsync(objgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_MeetingMinutesVerEN.sfUpdFldSetStr === undefined || objgs_MeetingMinutesVerEN.sfUpdFldSetStr === null || objgs_MeetingMinutesVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_MeetingMinutesVerEN.meetingVId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);
objgs_MeetingMinutesVerEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_MeetingMinutesVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  async function gs_MeetingMinutesVer_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
 * @param lngMeetingVId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function gs_MeetingMinutesVer_IsExistAsync(lngMeetingVId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngMeetingVId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  async function gs_MeetingMinutesVer_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  async function gs_MeetingMinutesVer_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_MeetingMinutesVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_MeetingMinutesVer_ConstructorName, strThisFuncName);
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
export  function gs_MeetingMinutesVer_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_MeetingMinutesVer_CheckPropertyNew(pobjgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingId) === true )
{
 throw new Error("(errid:Watl000411)字段[会议Id]不能为空(In 会议纪要历史版)!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingId) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.meetingId) > 10)
{
 throw new Error("(errid:Watl000413)字段[会议Id(meetingId)]的长度不能超过10(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.meetingId)(clsgs_MeetingMinutesVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.topicId) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.topicId) > 8)
{
 throw new Error("(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.topicId)(clsgs_MeetingMinutesVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingDate) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.meetingDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[会议日期(meetingDate)]的长度不能超过20(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.meetingDate)(clsgs_MeetingMinutesVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.updDate) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.updDate)(clsgs_MeetingMinutesVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.updUser) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.updUser)(clsgs_MeetingMinutesVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.year) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.year) > 4)
{
 throw new Error("(errid:Watl000413)字段[年(year)]的长度不能超过4(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.year)(clsgs_MeetingMinutesVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.month) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.month) > 2)
{
 throw new Error("(errid:Watl000413)字段[月(month)]的长度不能超过2(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.month)(clsgs_MeetingMinutesVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.memo) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.memo)(clsgs_MeetingMinutesVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.participants) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.participants) > 500)
{
 throw new Error("(errid:Watl000413)字段[参会者(participants)]的长度不能超过500(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.participants)(clsgs_MeetingMinutesVerBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_MeetingMinutesVerEN.meetingVId && undefined !== pobjgs_MeetingMinutesVerEN.meetingVId && tzDataType.isNumber(pobjgs_MeetingMinutesVerEN.meetingVId) === false)
{
 throw new Error("(errid:Watl000414)字段[MeetingVId(meetingVId)]的值:[$(pobjgs_MeetingMinutesVerEN.meetingVId)], 非法,应该为数值型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingId) == false && undefined !== pobjgs_MeetingMinutesVerEN.meetingId && tzDataType.isString(pobjgs_MeetingMinutesVerEN.meetingId) === false)
{
 throw new Error("(errid:Watl000414)字段[会议Id(meetingId)]的值:[$(pobjgs_MeetingMinutesVerEN.meetingId)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.topicId) == false && undefined !== pobjgs_MeetingMinutesVerEN.topicId && tzDataType.isString(pobjgs_MeetingMinutesVerEN.topicId) === false)
{
 throw new Error("(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjgs_MeetingMinutesVerEN.topicId)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (null != pobjgs_MeetingMinutesVerEN.isSubmit && undefined !== pobjgs_MeetingMinutesVerEN.isSubmit && tzDataType.isBoolean(pobjgs_MeetingMinutesVerEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjgs_MeetingMinutesVerEN.isSubmit)], 非法,应该为布尔型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingContent) == false && undefined !== pobjgs_MeetingMinutesVerEN.meetingContent && tzDataType.isString(pobjgs_MeetingMinutesVerEN.meetingContent) === false)
{
 throw new Error("(errid:Watl000414)字段[会议内容(meetingContent)]的值:[$(pobjgs_MeetingMinutesVerEN.meetingContent)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingDate) == false && undefined !== pobjgs_MeetingMinutesVerEN.meetingDate && tzDataType.isString(pobjgs_MeetingMinutesVerEN.meetingDate) === false)
{
 throw new Error("(errid:Watl000414)字段[会议日期(meetingDate)]的值:[$(pobjgs_MeetingMinutesVerEN.meetingDate)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.updDate) == false && undefined !== pobjgs_MeetingMinutesVerEN.updDate && tzDataType.isString(pobjgs_MeetingMinutesVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_MeetingMinutesVerEN.updDate)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.updUser) == false && undefined !== pobjgs_MeetingMinutesVerEN.updUser && tzDataType.isString(pobjgs_MeetingMinutesVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_MeetingMinutesVerEN.updUser)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.year) == false && undefined !== pobjgs_MeetingMinutesVerEN.year && tzDataType.isString(pobjgs_MeetingMinutesVerEN.year) === false)
{
 throw new Error("(errid:Watl000414)字段[年(year)]的值:[$(pobjgs_MeetingMinutesVerEN.year)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.month) == false && undefined !== pobjgs_MeetingMinutesVerEN.month && tzDataType.isString(pobjgs_MeetingMinutesVerEN.month) === false)
{
 throw new Error("(errid:Watl000414)字段[月(month)]的值:[$(pobjgs_MeetingMinutesVerEN.month)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.memo) == false && undefined !== pobjgs_MeetingMinutesVerEN.memo && tzDataType.isString(pobjgs_MeetingMinutesVerEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_MeetingMinutesVerEN.memo)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.participants) == false && undefined !== pobjgs_MeetingMinutesVerEN.participants && tzDataType.isString(pobjgs_MeetingMinutesVerEN.participants) === false)
{
 throw new Error("(errid:Watl000414)字段[参会者(participants)]的值:[$(pobjgs_MeetingMinutesVerEN.participants)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_MeetingMinutesVer_CheckProperty4Update(pobjgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingId) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.meetingId) > 10)
{
 throw new Error("(errid:Watl000416)字段[会议Id(meetingId)]的长度不能超过10(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.meetingId)(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.topicId) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.topicId) > 8)
{
 throw new Error("(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.topicId)(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingDate) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.meetingDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[会议日期(meetingDate)]的长度不能超过20(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.meetingDate)(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.updDate) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.updDate)(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.updUser) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.updUser)(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.year) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.year) > 4)
{
 throw new Error("(errid:Watl000416)字段[年(year)]的长度不能超过4(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.year)(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.month) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.month) > 2)
{
 throw new Error("(errid:Watl000416)字段[月(month)]的长度不能超过2(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.month)(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.memo) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.memo)(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.participants) == false && GetStrLen(pobjgs_MeetingMinutesVerEN.participants) > 500)
{
 throw new Error("(errid:Watl000416)字段[参会者(participants)]的长度不能超过500(In 会议纪要历史版(gs_MeetingMinutesVer))!值:$(pobjgs_MeetingMinutesVerEN.participants)(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_MeetingMinutesVerEN.meetingVId && undefined !== pobjgs_MeetingMinutesVerEN.meetingVId && tzDataType.isNumber(pobjgs_MeetingMinutesVerEN.meetingVId) === false)
{
 throw new Error("(errid:Watl000417)字段[MeetingVId(meetingVId)]的值:[$(pobjgs_MeetingMinutesVerEN.meetingVId)], 非法,应该为数值型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingId) == false && undefined !== pobjgs_MeetingMinutesVerEN.meetingId && tzDataType.isString(pobjgs_MeetingMinutesVerEN.meetingId) === false)
{
 throw new Error("(errid:Watl000417)字段[会议Id(meetingId)]的值:[$(pobjgs_MeetingMinutesVerEN.meetingId)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.topicId) == false && undefined !== pobjgs_MeetingMinutesVerEN.topicId && tzDataType.isString(pobjgs_MeetingMinutesVerEN.topicId) === false)
{
 throw new Error("(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjgs_MeetingMinutesVerEN.topicId)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (null != pobjgs_MeetingMinutesVerEN.isSubmit && undefined !== pobjgs_MeetingMinutesVerEN.isSubmit && tzDataType.isBoolean(pobjgs_MeetingMinutesVerEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjgs_MeetingMinutesVerEN.isSubmit)], 非法,应该为布尔型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingContent) == false && undefined !== pobjgs_MeetingMinutesVerEN.meetingContent && tzDataType.isString(pobjgs_MeetingMinutesVerEN.meetingContent) === false)
{
 throw new Error("(errid:Watl000417)字段[会议内容(meetingContent)]的值:[$(pobjgs_MeetingMinutesVerEN.meetingContent)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.meetingDate) == false && undefined !== pobjgs_MeetingMinutesVerEN.meetingDate && tzDataType.isString(pobjgs_MeetingMinutesVerEN.meetingDate) === false)
{
 throw new Error("(errid:Watl000417)字段[会议日期(meetingDate)]的值:[$(pobjgs_MeetingMinutesVerEN.meetingDate)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.updDate) == false && undefined !== pobjgs_MeetingMinutesVerEN.updDate && tzDataType.isString(pobjgs_MeetingMinutesVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_MeetingMinutesVerEN.updDate)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.updUser) == false && undefined !== pobjgs_MeetingMinutesVerEN.updUser && tzDataType.isString(pobjgs_MeetingMinutesVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_MeetingMinutesVerEN.updUser)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.year) == false && undefined !== pobjgs_MeetingMinutesVerEN.year && tzDataType.isString(pobjgs_MeetingMinutesVerEN.year) === false)
{
 throw new Error("(errid:Watl000417)字段[年(year)]的值:[$(pobjgs_MeetingMinutesVerEN.year)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.month) == false && undefined !== pobjgs_MeetingMinutesVerEN.month && tzDataType.isString(pobjgs_MeetingMinutesVerEN.month) === false)
{
 throw new Error("(errid:Watl000417)字段[月(month)]的值:[$(pobjgs_MeetingMinutesVerEN.month)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.memo) == false && undefined !== pobjgs_MeetingMinutesVerEN.memo && tzDataType.isString(pobjgs_MeetingMinutesVerEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_MeetingMinutesVerEN.memo)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_MeetingMinutesVerEN.participants) == false && undefined !== pobjgs_MeetingMinutesVerEN.participants && tzDataType.isString(pobjgs_MeetingMinutesVerEN.participants) === false)
{
 throw new Error("(errid:Watl000417)字段[参会者(participants)]的值:[$(pobjgs_MeetingMinutesVerEN.participants)], 非法,应该为字符型(In 会议纪要历史版(gs_MeetingMinutesVer))!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjgs_MeetingMinutesVerEN.meetingVId 
 || pobjgs_MeetingMinutesVerEN.meetingVId != null && pobjgs_MeetingMinutesVerEN.meetingVId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[MeetingVId]不能为空(In 会议纪要历史版)!(clsgs_MeetingMinutesVerBL:CheckProperty4Update)");
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
export  function gs_MeetingMinutesVer_GetJSONStrByObj (pobjgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN): string
{
pobjgs_MeetingMinutesVerEN.sfUpdFldSetStr = pobjgs_MeetingMinutesVerEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_MeetingMinutesVerEN);
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
export  function gs_MeetingMinutesVer_GetObjLstByJSONStr (strJSON: string): Array<clsgs_MeetingMinutesVerEN>
{
let arrgs_MeetingMinutesVerObjLst = new Array<clsgs_MeetingMinutesVerEN>();
if (strJSON === "")
{
return arrgs_MeetingMinutesVerObjLst;
}
try
{
arrgs_MeetingMinutesVerObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_MeetingMinutesVerObjLst;
}
return arrgs_MeetingMinutesVerObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_MeetingMinutesVerObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_MeetingMinutesVer_GetObjLstByJSONObjLst (arrgs_MeetingMinutesVerObjLstS: Array<clsgs_MeetingMinutesVerEN>): Array<clsgs_MeetingMinutesVerEN>
{
const arrgs_MeetingMinutesVerObjLst = new Array<clsgs_MeetingMinutesVerEN>();
for (const objInFor of arrgs_MeetingMinutesVerObjLstS) {
const obj1 = gs_MeetingMinutesVer_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_MeetingMinutesVerObjLst.push(obj1);
}
return arrgs_MeetingMinutesVerObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_MeetingMinutesVer_GetObjByJSONStr (strJSON: string): clsgs_MeetingMinutesVerEN
{
let pobjgs_MeetingMinutesVerEN = new clsgs_MeetingMinutesVerEN();
if (strJSON === "")
{
return pobjgs_MeetingMinutesVerEN;
}
try
{
pobjgs_MeetingMinutesVerEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_MeetingMinutesVerEN;
}
return pobjgs_MeetingMinutesVerEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_MeetingMinutesVer_GetCombineCondition(objgs_MeetingMinutesVerCond: clsgs_MeetingMinutesVerEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_MeetingVId) == true)
{
const strComparisonOpMeetingVId:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_MeetingVId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_MeetingMinutesVerEN.con_MeetingVId, objgs_MeetingMinutesVerCond.meetingVId, strComparisonOpMeetingVId);
}
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_MeetingId) == true)
{
const strComparisonOpMeetingId:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_MeetingId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_MeetingMinutesVerEN.con_MeetingId, objgs_MeetingMinutesVerCond.meetingId, strComparisonOpMeetingId);
}
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_MeetingMinutesVerEN.con_TopicId, objgs_MeetingMinutesVerCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_IsSubmit) == true)
{
if (objgs_MeetingMinutesVerCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsgs_MeetingMinutesVerEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsgs_MeetingMinutesVerEN.con_IsSubmit);
}
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_MeetingDate) == true)
{
const strComparisonOpMeetingDate:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_MeetingDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_MeetingMinutesVerEN.con_MeetingDate, objgs_MeetingMinutesVerCond.meetingDate, strComparisonOpMeetingDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_MeetingMinutesVerEN.con_UpdDate, objgs_MeetingMinutesVerCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_MeetingMinutesVerEN.con_UpdUser, objgs_MeetingMinutesVerCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_Year) == true)
{
const strComparisonOpYear:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_Year];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_MeetingMinutesVerEN.con_Year, objgs_MeetingMinutesVerCond.year, strComparisonOpYear);
}
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_Month) == true)
{
const strComparisonOpMonth:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_Month];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_MeetingMinutesVerEN.con_Month, objgs_MeetingMinutesVerCond.month, strComparisonOpMonth);
}
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_MeetingMinutesVerEN.con_Memo, objgs_MeetingMinutesVerCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objgs_MeetingMinutesVerCond.dicFldComparisonOp, clsgs_MeetingMinutesVerEN.con_Participants) == true)
{
const strComparisonOpParticipants:string = objgs_MeetingMinutesVerCond.dicFldComparisonOp[clsgs_MeetingMinutesVerEN.con_Participants];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_MeetingMinutesVerEN.con_Participants, objgs_MeetingMinutesVerCond.participants, strComparisonOpParticipants);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_MeetingMinutesVer(会议纪要历史版),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngMeetingVId: MeetingVId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_MeetingMinutesVer_GetUniCondStr(objgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and MeetingVId = '{0}'", objgs_MeetingMinutesVerEN.meetingVId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_MeetingMinutesVer(会议纪要历史版),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngMeetingVId: MeetingVId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_MeetingMinutesVer_GetUniCondStr4Update(objgs_MeetingMinutesVerEN: clsgs_MeetingMinutesVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and MeetingVId <> '{0}'", objgs_MeetingMinutesVerEN.meetingVId);
 strWhereCond +=  Format(" and MeetingVId = '{0}'", objgs_MeetingMinutesVerEN.meetingVId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_MeetingMinutesVerENS:源对象
 * @param objgs_MeetingMinutesVerENT:目标对象
*/
export  function gs_MeetingMinutesVer_CopyObjTo(objgs_MeetingMinutesVerENS: clsgs_MeetingMinutesVerEN , objgs_MeetingMinutesVerENT: clsgs_MeetingMinutesVerEN ): void 
{
objgs_MeetingMinutesVerENT.meetingVId = objgs_MeetingMinutesVerENS.meetingVId; //MeetingVId
objgs_MeetingMinutesVerENT.meetingId = objgs_MeetingMinutesVerENS.meetingId; //会议Id
objgs_MeetingMinutesVerENT.topicId = objgs_MeetingMinutesVerENS.topicId; //主题Id
objgs_MeetingMinutesVerENT.isSubmit = objgs_MeetingMinutesVerENS.isSubmit; //是否提交
objgs_MeetingMinutesVerENT.meetingContent = objgs_MeetingMinutesVerENS.meetingContent; //会议内容
objgs_MeetingMinutesVerENT.meetingDate = objgs_MeetingMinutesVerENS.meetingDate; //会议日期
objgs_MeetingMinutesVerENT.updDate = objgs_MeetingMinutesVerENS.updDate; //修改日期
objgs_MeetingMinutesVerENT.updUser = objgs_MeetingMinutesVerENS.updUser; //修改人
objgs_MeetingMinutesVerENT.year = objgs_MeetingMinutesVerENS.year; //年
objgs_MeetingMinutesVerENT.month = objgs_MeetingMinutesVerENS.month; //月
objgs_MeetingMinutesVerENT.memo = objgs_MeetingMinutesVerENS.memo; //备注
objgs_MeetingMinutesVerENT.participants = objgs_MeetingMinutesVerENS.participants; //参会者
objgs_MeetingMinutesVerENT.sfUpdFldSetStr = objgs_MeetingMinutesVerENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_MeetingMinutesVerENS:源对象
 * @param objgs_MeetingMinutesVerENT:目标对象
*/
export  function gs_MeetingMinutesVer_GetObjFromJsonObj(objgs_MeetingMinutesVerENS: clsgs_MeetingMinutesVerEN): clsgs_MeetingMinutesVerEN 
{
 const objgs_MeetingMinutesVerENT: clsgs_MeetingMinutesVerEN = new clsgs_MeetingMinutesVerEN();
ObjectAssign(objgs_MeetingMinutesVerENT, objgs_MeetingMinutesVerENS);
 return objgs_MeetingMinutesVerENT;
}