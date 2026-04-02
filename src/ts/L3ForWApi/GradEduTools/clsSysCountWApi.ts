
 /**
 * 类名:clsSysCountWApi
 * 表名:SysCount(01120625)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:35
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
 * 统计数据(SysCount)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsSysCountEN } from "@/ts/L0Entity/GradEduTools/clsSysCountEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const sysCount_Controller = "SysCountApi";
 export const sysCount_ConstructorName = "sysCount";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCountId:关键字
 * @returns 对象
 **/
export  async function SysCount_GetObjByCountIdAsync(strCountId: string): Promise<clsSysCountEN|null>  
{
const strThisFuncName = "GetObjByCountIdAsync";

if (IsNullOrEmpty(strCountId) == true)
{
  const strMsg = Format("参数:[strCountId]不能为空!(In clsSysCountWApi.GetObjByCountIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCountId.length != 10)
{
const strMsg = Format("缓存分类变量:[strCountId]的长度:[{0}]不正确!(clsSysCountWApi.GetObjByCountIdAsync)", strCountId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCountId";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCountId,
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
const objSysCount = SysCount_GetObjFromJsonObj(returnObj);
return objSysCount;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByCountIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByCountIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByCountIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function SysCount_SortFunDefa(a:clsSysCountEN , b:clsSysCountEN): number 
{
return a.countId.localeCompare(b.countId);
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
export  function SysCount_SortFunDefa2Fld(a:clsSysCountEN , b:clsSysCountEN): number 
{
if (a.countTypeId == b.countTypeId) return a.paperRWCount - b.paperRWCount;
else return a.countTypeId.localeCompare(b.countTypeId);
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
export  function SysCount_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsSysCountEN.con_CountId:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.countId.localeCompare(b.countId);
}
case clsSysCountEN.con_CountTypeId:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (a.countTypeId == null) return -1;
if (b.countTypeId == null) return 1;
return a.countTypeId.localeCompare(b.countTypeId);
}
case clsSysCountEN.con_PaperRWCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.paperRWCount-b.paperRWCount;
}
case clsSysCountEN.con_OkCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.okCount-b.okCount;
}
case clsSysCountEN.con_CollectionCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.collectionCount-b.collectionCount;
}
case clsSysCountEN.con_DownloadCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.downloadCount-b.downloadCount;
}
case clsSysCountEN.con_AttachmentCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.attachmentCount-b.attachmentCount;
}
case clsSysCountEN.con_CommentCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.commentCount-b.commentCount;
}
case clsSysCountEN.con_Score:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.score-b.score;
}
case clsSysCountEN.con_StuScore:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.stuScore-b.stuScore;
}
case clsSysCountEN.con_TeaScore:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return a.teaScore-b.teaScore;
}
case clsSysCountEN.con_TableKey:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (a.tableKey == null) return -1;
if (b.tableKey == null) return 1;
return a.tableKey.localeCompare(b.tableKey);
}
case clsSysCountEN.con_ParentId:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (a.parentId == null) return -1;
if (b.parentId == null) return 1;
return a.parentId.localeCompare(b.parentId);
}
case clsSysCountEN.con_UpdUser:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsSysCountEN.con_UpdDate:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsSysCountEN.con_Memo:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysCount]中不存在!(in ${ sysCount_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsSysCountEN.con_CountId:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.countId.localeCompare(a.countId);
}
case clsSysCountEN.con_CountTypeId:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (b.countTypeId == null) return -1;
if (a.countTypeId == null) return 1;
return b.countTypeId.localeCompare(a.countTypeId);
}
case clsSysCountEN.con_PaperRWCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.paperRWCount-a.paperRWCount;
}
case clsSysCountEN.con_OkCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.okCount-a.okCount;
}
case clsSysCountEN.con_CollectionCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.collectionCount-a.collectionCount;
}
case clsSysCountEN.con_DownloadCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.downloadCount-a.downloadCount;
}
case clsSysCountEN.con_AttachmentCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.attachmentCount-a.attachmentCount;
}
case clsSysCountEN.con_CommentCount:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.commentCount-a.commentCount;
}
case clsSysCountEN.con_Score:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.score-a.score;
}
case clsSysCountEN.con_StuScore:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.stuScore-a.stuScore;
}
case clsSysCountEN.con_TeaScore:
return (a: clsSysCountEN, b: clsSysCountEN) => {
return b.teaScore-a.teaScore;
}
case clsSysCountEN.con_TableKey:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (b.tableKey == null) return -1;
if (a.tableKey == null) return 1;
return b.tableKey.localeCompare(a.tableKey);
}
case clsSysCountEN.con_ParentId:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (b.parentId == null) return -1;
if (a.parentId == null) return 1;
return b.parentId.localeCompare(a.parentId);
}
case clsSysCountEN.con_UpdUser:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsSysCountEN.con_UpdDate:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsSysCountEN.con_Memo:
return (a: clsSysCountEN, b: clsSysCountEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysCount]中不存在!(in ${ sysCount_ConstructorName}.${ strThisFuncName})`;
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
export  async function SysCount_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsSysCountEN.con_CountId:
return (obj: clsSysCountEN) => {
return obj.countId === value;
}
case clsSysCountEN.con_CountTypeId:
return (obj: clsSysCountEN) => {
return obj.countTypeId === value;
}
case clsSysCountEN.con_PaperRWCount:
return (obj: clsSysCountEN) => {
return obj.paperRWCount === value;
}
case clsSysCountEN.con_OkCount:
return (obj: clsSysCountEN) => {
return obj.okCount === value;
}
case clsSysCountEN.con_CollectionCount:
return (obj: clsSysCountEN) => {
return obj.collectionCount === value;
}
case clsSysCountEN.con_DownloadCount:
return (obj: clsSysCountEN) => {
return obj.downloadCount === value;
}
case clsSysCountEN.con_AttachmentCount:
return (obj: clsSysCountEN) => {
return obj.attachmentCount === value;
}
case clsSysCountEN.con_CommentCount:
return (obj: clsSysCountEN) => {
return obj.commentCount === value;
}
case clsSysCountEN.con_Score:
return (obj: clsSysCountEN) => {
return obj.score === value;
}
case clsSysCountEN.con_StuScore:
return (obj: clsSysCountEN) => {
return obj.stuScore === value;
}
case clsSysCountEN.con_TeaScore:
return (obj: clsSysCountEN) => {
return obj.teaScore === value;
}
case clsSysCountEN.con_TableKey:
return (obj: clsSysCountEN) => {
return obj.tableKey === value;
}
case clsSysCountEN.con_ParentId:
return (obj: clsSysCountEN) => {
return obj.parentId === value;
}
case clsSysCountEN.con_UpdUser:
return (obj: clsSysCountEN) => {
return obj.updUser === value;
}
case clsSysCountEN.con_UpdDate:
return (obj: clsSysCountEN) => {
return obj.updDate === value;
}
case clsSysCountEN.con_Memo:
return (obj: clsSysCountEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysCount]中不存在!(in ${ sysCount_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[SysCount__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysCount_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_GetFirstObjAsync(strWhereCond: string): Promise<clsSysCountEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const objSysCount = SysCount_GetObjFromJsonObj(returnObj);
return objSysCount;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSysCountEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
 * @param arrCountId:关键字列表
 * @returns 对象列表
 **/
export  async function SysCount_GetObjLstByCountIdLstAsync(arrCountId: Array<string>): Promise<Array<clsSysCountEN>>  
{
const strThisFuncName = "GetObjLstByCountIdLstAsync";
const strAction = "GetObjLstByCountIdLst";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCountId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByCountIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function SysCount_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSysCountEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsSysCountEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsSysCountEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsSysCountEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
 * @param strCountId:关键字
 * @returns 获取删除的结果
 **/
export  async function SysCount_DelRecordAsync(strCountId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(sysCount_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strCountId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
 * @param arrCountId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function SysCount_DelSysCountsAsync(arrCountId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelSysCountsAsync";
const strAction = "DelSysCounts";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCountId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_DelSysCountsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelSysCountsByCondAsync";
const strAction = "DelSysCountsByCond";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
 * @param objSysCountEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SysCount_AddNewRecordAsync(objSysCountEN: clsSysCountEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objSysCountEN);
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCountEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
 * @param objSysCountEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SysCount_AddNewRecordWithMaxIdAsync(objSysCountEN: clsSysCountEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCountEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
 * @param objSysCountEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function SysCount_AddNewRecordWithReturnKeyAsync(objSysCountEN: clsSysCountEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCountEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
 * @param objSysCountEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SysCount_UpdateRecordAsync(objSysCountEN: clsSysCountEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objSysCountEN.sfUpdFldSetStr === undefined || objSysCountEN.sfUpdFldSetStr === null || objSysCountEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysCountEN.countId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCountEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
 * @param objSysCountEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysCount_UpdateWithConditionAsync(objSysCountEN: clsSysCountEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objSysCountEN.sfUpdFldSetStr === undefined || objSysCountEN.sfUpdFldSetStr === null || objSysCountEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysCountEN.countId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);
objSysCountEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCountEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
 * @param strCountId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function SysCount_IsExistAsync(strCountId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCountId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  async function SysCount_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(sysCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysCount_ConstructorName, strThisFuncName);
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
export  function SysCount_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function SysCount_CheckPropertyNew(pobjSysCountEN: clsSysCountEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysCountEN.countId) == false && GetStrLen(pobjSysCountEN.countId) > 10)
{
 throw new Error("(errid:Watl000413)字段[CountId(countId)]的长度不能超过10(In 统计数据(SysCount))!值:$(pobjSysCountEN.countId)(clsSysCountBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysCountEN.countTypeId) == false && GetStrLen(pobjSysCountEN.countTypeId) > 2)
{
 throw new Error("(errid:Watl000413)字段[CountTypeId(countTypeId)]的长度不能超过2(In 统计数据(SysCount))!值:$(pobjSysCountEN.countTypeId)(clsSysCountBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysCountEN.tableKey) == false && GetStrLen(pobjSysCountEN.tableKey) > 20)
{
 throw new Error("(errid:Watl000413)字段[表主键(tableKey)]的长度不能超过20(In 统计数据(SysCount))!值:$(pobjSysCountEN.tableKey)(clsSysCountBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysCountEN.parentId) == false && GetStrLen(pobjSysCountEN.parentId) > 20)
{
 throw new Error("(errid:Watl000413)字段[父Id(parentId)]的长度不能超过20(In 统计数据(SysCount))!值:$(pobjSysCountEN.parentId)(clsSysCountBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysCountEN.updUser) == false && GetStrLen(pobjSysCountEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 统计数据(SysCount))!值:$(pobjSysCountEN.updUser)(clsSysCountBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysCountEN.updDate) == false && GetStrLen(pobjSysCountEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 统计数据(SysCount))!值:$(pobjSysCountEN.updDate)(clsSysCountBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysCountEN.memo) == false && GetStrLen(pobjSysCountEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 统计数据(SysCount))!值:$(pobjSysCountEN.memo)(clsSysCountBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSysCountEN.countId) == false && undefined !== pobjSysCountEN.countId && tzDataType.isString(pobjSysCountEN.countId) === false)
{
 throw new Error("(errid:Watl000414)字段[CountId(countId)]的值:[$(pobjSysCountEN.countId)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysCountEN.countTypeId) == false && undefined !== pobjSysCountEN.countTypeId && tzDataType.isString(pobjSysCountEN.countTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[CountTypeId(countTypeId)]的值:[$(pobjSysCountEN.countTypeId)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (null != pobjSysCountEN.paperRWCount && undefined !== pobjSysCountEN.paperRWCount && tzDataType.isNumber(pobjSysCountEN.paperRWCount) === false)
{
 throw new Error("(errid:Watl000414)字段[PaperRWCount(paperRWCount)]的值:[$(pobjSysCountEN.paperRWCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (null != pobjSysCountEN.okCount && undefined !== pobjSysCountEN.okCount && tzDataType.isNumber(pobjSysCountEN.okCount) === false)
{
 throw new Error("(errid:Watl000414)字段[点赞统计(okCount)]的值:[$(pobjSysCountEN.okCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (null != pobjSysCountEN.collectionCount && undefined !== pobjSysCountEN.collectionCount && tzDataType.isNumber(pobjSysCountEN.collectionCount) === false)
{
 throw new Error("(errid:Watl000414)字段[收藏数量(collectionCount)]的值:[$(pobjSysCountEN.collectionCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (null != pobjSysCountEN.downloadCount && undefined !== pobjSysCountEN.downloadCount && tzDataType.isNumber(pobjSysCountEN.downloadCount) === false)
{
 throw new Error("(errid:Watl000414)字段[下载数(downloadCount)]的值:[$(pobjSysCountEN.downloadCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (null != pobjSysCountEN.attachmentCount && undefined !== pobjSysCountEN.attachmentCount && tzDataType.isNumber(pobjSysCountEN.attachmentCount) === false)
{
 throw new Error("(errid:Watl000414)字段[附件计数(attachmentCount)]的值:[$(pobjSysCountEN.attachmentCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (null != pobjSysCountEN.commentCount && undefined !== pobjSysCountEN.commentCount && tzDataType.isNumber(pobjSysCountEN.commentCount) === false)
{
 throw new Error("(errid:Watl000414)字段[评论数(commentCount)]的值:[$(pobjSysCountEN.commentCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (null != pobjSysCountEN.score && undefined !== pobjSysCountEN.score && tzDataType.isNumber(pobjSysCountEN.score) === false)
{
 throw new Error("(errid:Watl000414)字段[评分(score)]的值:[$(pobjSysCountEN.score)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (null != pobjSysCountEN.stuScore && undefined !== pobjSysCountEN.stuScore && tzDataType.isNumber(pobjSysCountEN.stuScore) === false)
{
 throw new Error("(errid:Watl000414)字段[学生平均分(stuScore)]的值:[$(pobjSysCountEN.stuScore)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (null != pobjSysCountEN.teaScore && undefined !== pobjSysCountEN.teaScore && tzDataType.isNumber(pobjSysCountEN.teaScore) === false)
{
 throw new Error("(errid:Watl000414)字段[教师评分(teaScore)]的值:[$(pobjSysCountEN.teaScore)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysCountEN.tableKey) == false && undefined !== pobjSysCountEN.tableKey && tzDataType.isString(pobjSysCountEN.tableKey) === false)
{
 throw new Error("(errid:Watl000414)字段[表主键(tableKey)]的值:[$(pobjSysCountEN.tableKey)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysCountEN.parentId) == false && undefined !== pobjSysCountEN.parentId && tzDataType.isString(pobjSysCountEN.parentId) === false)
{
 throw new Error("(errid:Watl000414)字段[父Id(parentId)]的值:[$(pobjSysCountEN.parentId)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysCountEN.updUser) == false && undefined !== pobjSysCountEN.updUser && tzDataType.isString(pobjSysCountEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjSysCountEN.updUser)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysCountEN.updDate) == false && undefined !== pobjSysCountEN.updDate && tzDataType.isString(pobjSysCountEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSysCountEN.updDate)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysCountEN.memo) == false && undefined !== pobjSysCountEN.memo && tzDataType.isString(pobjSysCountEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSysCountEN.memo)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SysCount_CheckProperty4Update(pobjSysCountEN: clsSysCountEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysCountEN.countId) == false && GetStrLen(pobjSysCountEN.countId) > 10)
{
 throw new Error("(errid:Watl000416)字段[CountId(countId)]的长度不能超过10(In 统计数据(SysCount))!值:$(pobjSysCountEN.countId)(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.countTypeId) == false && GetStrLen(pobjSysCountEN.countTypeId) > 2)
{
 throw new Error("(errid:Watl000416)字段[CountTypeId(countTypeId)]的长度不能超过2(In 统计数据(SysCount))!值:$(pobjSysCountEN.countTypeId)(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.tableKey) == false && GetStrLen(pobjSysCountEN.tableKey) > 20)
{
 throw new Error("(errid:Watl000416)字段[表主键(tableKey)]的长度不能超过20(In 统计数据(SysCount))!值:$(pobjSysCountEN.tableKey)(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.parentId) == false && GetStrLen(pobjSysCountEN.parentId) > 20)
{
 throw new Error("(errid:Watl000416)字段[父Id(parentId)]的长度不能超过20(In 统计数据(SysCount))!值:$(pobjSysCountEN.parentId)(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.updUser) == false && GetStrLen(pobjSysCountEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 统计数据(SysCount))!值:$(pobjSysCountEN.updUser)(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.updDate) == false && GetStrLen(pobjSysCountEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 统计数据(SysCount))!值:$(pobjSysCountEN.updDate)(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.memo) == false && GetStrLen(pobjSysCountEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 统计数据(SysCount))!值:$(pobjSysCountEN.memo)(clsSysCountBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSysCountEN.countId) == false && undefined !== pobjSysCountEN.countId && tzDataType.isString(pobjSysCountEN.countId) === false)
{
 throw new Error("(errid:Watl000417)字段[CountId(countId)]的值:[$(pobjSysCountEN.countId)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.countTypeId) == false && undefined !== pobjSysCountEN.countTypeId && tzDataType.isString(pobjSysCountEN.countTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[CountTypeId(countTypeId)]的值:[$(pobjSysCountEN.countTypeId)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (null != pobjSysCountEN.paperRWCount && undefined !== pobjSysCountEN.paperRWCount && tzDataType.isNumber(pobjSysCountEN.paperRWCount) === false)
{
 throw new Error("(errid:Watl000417)字段[PaperRWCount(paperRWCount)]的值:[$(pobjSysCountEN.paperRWCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (null != pobjSysCountEN.okCount && undefined !== pobjSysCountEN.okCount && tzDataType.isNumber(pobjSysCountEN.okCount) === false)
{
 throw new Error("(errid:Watl000417)字段[点赞统计(okCount)]的值:[$(pobjSysCountEN.okCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (null != pobjSysCountEN.collectionCount && undefined !== pobjSysCountEN.collectionCount && tzDataType.isNumber(pobjSysCountEN.collectionCount) === false)
{
 throw new Error("(errid:Watl000417)字段[收藏数量(collectionCount)]的值:[$(pobjSysCountEN.collectionCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (null != pobjSysCountEN.downloadCount && undefined !== pobjSysCountEN.downloadCount && tzDataType.isNumber(pobjSysCountEN.downloadCount) === false)
{
 throw new Error("(errid:Watl000417)字段[下载数(downloadCount)]的值:[$(pobjSysCountEN.downloadCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (null != pobjSysCountEN.attachmentCount && undefined !== pobjSysCountEN.attachmentCount && tzDataType.isNumber(pobjSysCountEN.attachmentCount) === false)
{
 throw new Error("(errid:Watl000417)字段[附件计数(attachmentCount)]的值:[$(pobjSysCountEN.attachmentCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (null != pobjSysCountEN.commentCount && undefined !== pobjSysCountEN.commentCount && tzDataType.isNumber(pobjSysCountEN.commentCount) === false)
{
 throw new Error("(errid:Watl000417)字段[评论数(commentCount)]的值:[$(pobjSysCountEN.commentCount)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (null != pobjSysCountEN.score && undefined !== pobjSysCountEN.score && tzDataType.isNumber(pobjSysCountEN.score) === false)
{
 throw new Error("(errid:Watl000417)字段[评分(score)]的值:[$(pobjSysCountEN.score)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (null != pobjSysCountEN.stuScore && undefined !== pobjSysCountEN.stuScore && tzDataType.isNumber(pobjSysCountEN.stuScore) === false)
{
 throw new Error("(errid:Watl000417)字段[学生平均分(stuScore)]的值:[$(pobjSysCountEN.stuScore)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (null != pobjSysCountEN.teaScore && undefined !== pobjSysCountEN.teaScore && tzDataType.isNumber(pobjSysCountEN.teaScore) === false)
{
 throw new Error("(errid:Watl000417)字段[教师评分(teaScore)]的值:[$(pobjSysCountEN.teaScore)], 非法,应该为数值型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.tableKey) == false && undefined !== pobjSysCountEN.tableKey && tzDataType.isString(pobjSysCountEN.tableKey) === false)
{
 throw new Error("(errid:Watl000417)字段[表主键(tableKey)]的值:[$(pobjSysCountEN.tableKey)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.parentId) == false && undefined !== pobjSysCountEN.parentId && tzDataType.isString(pobjSysCountEN.parentId) === false)
{
 throw new Error("(errid:Watl000417)字段[父Id(parentId)]的值:[$(pobjSysCountEN.parentId)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.updUser) == false && undefined !== pobjSysCountEN.updUser && tzDataType.isString(pobjSysCountEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjSysCountEN.updUser)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.updDate) == false && undefined !== pobjSysCountEN.updDate && tzDataType.isString(pobjSysCountEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSysCountEN.updDate)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysCountEN.memo) == false && undefined !== pobjSysCountEN.memo && tzDataType.isString(pobjSysCountEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSysCountEN.memo)], 非法,应该为字符型(In 统计数据(SysCount))!(clsSysCountBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
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
export  function SysCount_GetJSONStrByObj (pobjSysCountEN: clsSysCountEN): string
{
pobjSysCountEN.sfUpdFldSetStr = pobjSysCountEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjSysCountEN);
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
export  function SysCount_GetObjLstByJSONStr (strJSON: string): Array<clsSysCountEN>
{
let arrSysCountObjLst = new Array<clsSysCountEN>();
if (strJSON === "")
{
return arrSysCountObjLst;
}
try
{
arrSysCountObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrSysCountObjLst;
}
return arrSysCountObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysCountObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function SysCount_GetObjLstByJSONObjLst (arrSysCountObjLstS: Array<clsSysCountEN>): Array<clsSysCountEN>
{
const arrSysCountObjLst = new Array<clsSysCountEN>();
for (const objInFor of arrSysCountObjLstS) {
const obj1 = SysCount_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrSysCountObjLst.push(obj1);
}
return arrSysCountObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SysCount_GetObjByJSONStr (strJSON: string): clsSysCountEN
{
let pobjSysCountEN = new clsSysCountEN();
if (strJSON === "")
{
return pobjSysCountEN;
}
try
{
pobjSysCountEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjSysCountEN;
}
return pobjSysCountEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function SysCount_GetCombineCondition(objSysCountCond: clsSysCountEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_CountId) == true)
{
const strComparisonOpCountId:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_CountId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCountEN.con_CountId, objSysCountCond.countId, strComparisonOpCountId);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_CountTypeId) == true)
{
const strComparisonOpCountTypeId:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_CountTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCountEN.con_CountTypeId, objSysCountCond.countTypeId, strComparisonOpCountTypeId);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_PaperRWCount) == true)
{
const strComparisonOpPaperRWCount:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_PaperRWCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysCountEN.con_PaperRWCount, objSysCountCond.paperRWCount, strComparisonOpPaperRWCount);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysCountEN.con_OkCount, objSysCountCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_CollectionCount) == true)
{
const strComparisonOpCollectionCount:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_CollectionCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysCountEN.con_CollectionCount, objSysCountCond.collectionCount, strComparisonOpCollectionCount);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_DownloadCount) == true)
{
const strComparisonOpDownloadCount:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_DownloadCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysCountEN.con_DownloadCount, objSysCountCond.downloadCount, strComparisonOpDownloadCount);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_AttachmentCount) == true)
{
const strComparisonOpAttachmentCount:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_AttachmentCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysCountEN.con_AttachmentCount, objSysCountCond.attachmentCount, strComparisonOpAttachmentCount);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_CommentCount) == true)
{
const strComparisonOpCommentCount:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_CommentCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysCountEN.con_CommentCount, objSysCountCond.commentCount, strComparisonOpCommentCount);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_Score) == true)
{
const strComparisonOpScore:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsSysCountEN.con_Score, objSysCountCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsSysCountEN.con_StuScore, objSysCountCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsSysCountEN.con_TeaScore, objSysCountCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_TableKey) == true)
{
const strComparisonOpTableKey:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_TableKey];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCountEN.con_TableKey, objSysCountCond.tableKey, strComparisonOpTableKey);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_ParentId) == true)
{
const strComparisonOpParentId:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_ParentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCountEN.con_ParentId, objSysCountCond.parentId, strComparisonOpParentId);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCountEN.con_UpdUser, objSysCountCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCountEN.con_UpdDate, objSysCountCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objSysCountCond.dicFldComparisonOp, clsSysCountEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objSysCountCond.dicFldComparisonOp[clsSysCountEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCountEN.con_Memo, objSysCountCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysCount(统计数据),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCountTypeId: CountTypeId(要求唯一的字段)
 * @param strTableKey: 表主键(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysCount_GetUniCondStr(objSysCountEN: clsSysCountEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CountTypeId = '{0}'", objSysCountEN.countTypeId);
 strWhereCond +=  Format(" and TableKey = '{0}'", objSysCountEN.tableKey);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysCount(统计数据),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCountTypeId: CountTypeId(要求唯一的字段)
 * @param strTableKey: 表主键(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysCount_GetUniCondStr4Update(objSysCountEN: clsSysCountEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and CountId <> '{0}'", objSysCountEN.countId);
 strWhereCond +=  Format(" and CountTypeId = '{0}'", objSysCountEN.countTypeId);
 strWhereCond +=  Format(" and TableKey = '{0}'", objSysCountEN.tableKey);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysCountENS:源对象
 * @param objSysCountENT:目标对象
*/
export  function SysCount_CopyObjTo(objSysCountENS: clsSysCountEN , objSysCountENT: clsSysCountEN ): void 
{
objSysCountENT.countId = objSysCountENS.countId; //CountId
objSysCountENT.countTypeId = objSysCountENS.countTypeId; //CountTypeId
objSysCountENT.paperRWCount = objSysCountENS.paperRWCount; //PaperRWCount
objSysCountENT.okCount = objSysCountENS.okCount; //点赞统计
objSysCountENT.collectionCount = objSysCountENS.collectionCount; //收藏数量
objSysCountENT.downloadCount = objSysCountENS.downloadCount; //下载数
objSysCountENT.attachmentCount = objSysCountENS.attachmentCount; //附件计数
objSysCountENT.commentCount = objSysCountENS.commentCount; //评论数
objSysCountENT.score = objSysCountENS.score; //评分
objSysCountENT.stuScore = objSysCountENS.stuScore; //学生平均分
objSysCountENT.teaScore = objSysCountENS.teaScore; //教师评分
objSysCountENT.tableKey = objSysCountENS.tableKey; //表主键
objSysCountENT.parentId = objSysCountENS.parentId; //父Id
objSysCountENT.updUser = objSysCountENS.updUser; //修改人
objSysCountENT.updDate = objSysCountENS.updDate; //修改日期
objSysCountENT.memo = objSysCountENS.memo; //备注
objSysCountENT.sfUpdFldSetStr = objSysCountENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysCountENS:源对象
 * @param objSysCountENT:目标对象
*/
export  function SysCount_GetObjFromJsonObj(objSysCountENS: clsSysCountEN): clsSysCountEN 
{
 const objSysCountENT: clsSysCountEN = new clsSysCountEN();
ObjectAssign(objSysCountENT, objSysCountENS);
 return objSysCountENT;
}