
 /**
 * 类名:clsvPlatDefaRoleWApi
 * 表名:vPlatDefaRole(01120232)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:14
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v平台默认角色(vPlatDefaRole)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvPlatDefaRoleEN } from "@/ts/L0Entity/SysPara/clsvPlatDefaRoleEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vPlatDefaRole_Controller = "vPlatDefaRoleApi";
 export const vPlatDefaRole_ConstructorName = "vPlatDefaRole";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vPlatDefaRole_GetObjBymIdAsync(lngmId: number): Promise<clsvPlatDefaRoleEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvPlatDefaRoleWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const objvPlatDefaRole = vPlatDefaRole_GetObjFromJsonObj(returnObj);
return objvPlatDefaRole;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  function vPlatDefaRole_SortFunDefa(a:clsvPlatDefaRoleEN , b:clsvPlatDefaRoleEN): number 
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
export  function vPlatDefaRole_SortFunDefa2Fld(a:clsvPlatDefaRoleEN , b:clsvPlatDefaRoleEN): number 
{
if (a.idSchool == b.idSchool) return a.schoolId.localeCompare(b.schoolId);
else return a.idSchool.localeCompare(b.idSchool);
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
export  function vPlatDefaRole_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvPlatDefaRoleEN.con_mId:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return a.mId-b.mId;
}
case clsvPlatDefaRoleEN.con_IdSchool:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsvPlatDefaRoleEN.con_SchoolId:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return a.schoolId.localeCompare(b.schoolId);
}
case clsvPlatDefaRoleEN.con_IsCurrentUse:
return (a: clsvPlatDefaRoleEN) => {
if (a.isCurrentUse == true) return 1;
else return -1
}
case clsvPlatDefaRoleEN.con_SchoolName:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return a.schoolName.localeCompare(b.schoolName);
}
case clsvPlatDefaRoleEN.con_PersonType:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return a.personType.localeCompare(b.personType);
}
case clsvPlatDefaRoleEN.con_PrjId:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
if (a.prjId == null) return -1;
if (b.prjId == null) return 1;
return a.prjId.localeCompare(b.prjId);
}
case clsvPlatDefaRoleEN.con_RoleId:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return a.roleId.localeCompare(b.roleId);
}
case clsvPlatDefaRoleEN.con_Memo:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPlatDefaRole]中不存在!(in ${ vPlatDefaRole_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvPlatDefaRoleEN.con_mId:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return b.mId-a.mId;
}
case clsvPlatDefaRoleEN.con_IdSchool:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsvPlatDefaRoleEN.con_SchoolId:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return b.schoolId.localeCompare(a.schoolId);
}
case clsvPlatDefaRoleEN.con_IsCurrentUse:
return (b: clsvPlatDefaRoleEN) => {
if (b.isCurrentUse == true) return 1;
else return -1
}
case clsvPlatDefaRoleEN.con_SchoolName:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return b.schoolName.localeCompare(a.schoolName);
}
case clsvPlatDefaRoleEN.con_PersonType:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return b.personType.localeCompare(a.personType);
}
case clsvPlatDefaRoleEN.con_PrjId:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
if (b.prjId == null) return -1;
if (a.prjId == null) return 1;
return b.prjId.localeCompare(a.prjId);
}
case clsvPlatDefaRoleEN.con_RoleId:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
return b.roleId.localeCompare(a.roleId);
}
case clsvPlatDefaRoleEN.con_Memo:
return (a: clsvPlatDefaRoleEN, b: clsvPlatDefaRoleEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPlatDefaRole]中不存在!(in ${ vPlatDefaRole_ConstructorName}.${ strThisFuncName})`;
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
export  async function vPlatDefaRole_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvPlatDefaRoleEN.con_mId:
return (obj: clsvPlatDefaRoleEN) => {
return obj.mId === value;
}
case clsvPlatDefaRoleEN.con_IdSchool:
return (obj: clsvPlatDefaRoleEN) => {
return obj.idSchool === value;
}
case clsvPlatDefaRoleEN.con_SchoolId:
return (obj: clsvPlatDefaRoleEN) => {
return obj.schoolId === value;
}
case clsvPlatDefaRoleEN.con_IsCurrentUse:
return (obj: clsvPlatDefaRoleEN) => {
return obj.isCurrentUse === value;
}
case clsvPlatDefaRoleEN.con_SchoolName:
return (obj: clsvPlatDefaRoleEN) => {
return obj.schoolName === value;
}
case clsvPlatDefaRoleEN.con_PersonType:
return (obj: clsvPlatDefaRoleEN) => {
return obj.personType === value;
}
case clsvPlatDefaRoleEN.con_PrjId:
return (obj: clsvPlatDefaRoleEN) => {
return obj.prjId === value;
}
case clsvPlatDefaRoleEN.con_RoleId:
return (obj: clsvPlatDefaRoleEN) => {
return obj.roleId === value;
}
case clsvPlatDefaRoleEN.con_Memo:
return (obj: clsvPlatDefaRoleEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPlatDefaRole]中不存在!(in ${ vPlatDefaRole_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vPlatDefaRole__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vPlatDefaRole_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_GetFirstObjAsync(strWhereCond: string): Promise<clsvPlatDefaRoleEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const objvPlatDefaRole = vPlatDefaRole_GetObjFromJsonObj(returnObj);
return objvPlatDefaRole;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvPlatDefaRoleEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPlatDefaRole_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvPlatDefaRoleEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPlatDefaRole_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvPlatDefaRoleEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPlatDefaRole_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvPlatDefaRoleEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPlatDefaRole_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvPlatDefaRoleEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvPlatDefaRoleEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPlatDefaRole_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  async function vPlatDefaRole_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vPlatDefaRole_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPlatDefaRole_ConstructorName, strThisFuncName);
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
export  function vPlatDefaRole_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vPlatDefaRole_GetJSONStrByObj (pobjvPlatDefaRoleEN: clsvPlatDefaRoleEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvPlatDefaRoleEN);
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
export  function vPlatDefaRole_GetObjLstByJSONStr (strJSON: string): Array<clsvPlatDefaRoleEN>
{
let arrvPlatDefaRoleObjLst = new Array<clsvPlatDefaRoleEN>();
if (strJSON === "")
{
return arrvPlatDefaRoleObjLst;
}
try
{
arrvPlatDefaRoleObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvPlatDefaRoleObjLst;
}
return arrvPlatDefaRoleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPlatDefaRoleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vPlatDefaRole_GetObjLstByJSONObjLst (arrvPlatDefaRoleObjLstS: Array<clsvPlatDefaRoleEN>): Array<clsvPlatDefaRoleEN>
{
const arrvPlatDefaRoleObjLst = new Array<clsvPlatDefaRoleEN>();
for (const objInFor of arrvPlatDefaRoleObjLstS) {
const obj1 = vPlatDefaRole_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvPlatDefaRoleObjLst.push(obj1);
}
return arrvPlatDefaRoleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vPlatDefaRole_GetObjByJSONStr (strJSON: string): clsvPlatDefaRoleEN
{
let pobjvPlatDefaRoleEN = new clsvPlatDefaRoleEN();
if (strJSON === "")
{
return pobjvPlatDefaRoleEN;
}
try
{
pobjvPlatDefaRoleEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvPlatDefaRoleEN;
}
return pobjvPlatDefaRoleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vPlatDefaRole_GetCombineCondition(objvPlatDefaRoleCond: clsvPlatDefaRoleEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvPlatDefaRoleCond.dicFldComparisonOp, clsvPlatDefaRoleEN.con_mId) == true)
{
const strComparisonOpmId:string = objvPlatDefaRoleCond.dicFldComparisonOp[clsvPlatDefaRoleEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvPlatDefaRoleEN.con_mId, objvPlatDefaRoleCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvPlatDefaRoleCond.dicFldComparisonOp, clsvPlatDefaRoleEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objvPlatDefaRoleCond.dicFldComparisonOp[clsvPlatDefaRoleEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPlatDefaRoleEN.con_IdSchool, objvPlatDefaRoleCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objvPlatDefaRoleCond.dicFldComparisonOp, clsvPlatDefaRoleEN.con_SchoolId) == true)
{
const strComparisonOpSchoolId:string = objvPlatDefaRoleCond.dicFldComparisonOp[clsvPlatDefaRoleEN.con_SchoolId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPlatDefaRoleEN.con_SchoolId, objvPlatDefaRoleCond.schoolId, strComparisonOpSchoolId);
}
if (Object.prototype.hasOwnProperty.call(objvPlatDefaRoleCond.dicFldComparisonOp, clsvPlatDefaRoleEN.con_IsCurrentUse) == true)
{
if (objvPlatDefaRoleCond.isCurrentUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvPlatDefaRoleEN.con_IsCurrentUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvPlatDefaRoleEN.con_IsCurrentUse);
}
}
if (Object.prototype.hasOwnProperty.call(objvPlatDefaRoleCond.dicFldComparisonOp, clsvPlatDefaRoleEN.con_SchoolName) == true)
{
const strComparisonOpSchoolName:string = objvPlatDefaRoleCond.dicFldComparisonOp[clsvPlatDefaRoleEN.con_SchoolName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPlatDefaRoleEN.con_SchoolName, objvPlatDefaRoleCond.schoolName, strComparisonOpSchoolName);
}
if (Object.prototype.hasOwnProperty.call(objvPlatDefaRoleCond.dicFldComparisonOp, clsvPlatDefaRoleEN.con_PersonType) == true)
{
const strComparisonOpPersonType:string = objvPlatDefaRoleCond.dicFldComparisonOp[clsvPlatDefaRoleEN.con_PersonType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPlatDefaRoleEN.con_PersonType, objvPlatDefaRoleCond.personType, strComparisonOpPersonType);
}
if (Object.prototype.hasOwnProperty.call(objvPlatDefaRoleCond.dicFldComparisonOp, clsvPlatDefaRoleEN.con_PrjId) == true)
{
const strComparisonOpPrjId:string = objvPlatDefaRoleCond.dicFldComparisonOp[clsvPlatDefaRoleEN.con_PrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPlatDefaRoleEN.con_PrjId, objvPlatDefaRoleCond.prjId, strComparisonOpPrjId);
}
if (Object.prototype.hasOwnProperty.call(objvPlatDefaRoleCond.dicFldComparisonOp, clsvPlatDefaRoleEN.con_RoleId) == true)
{
const strComparisonOpRoleId:string = objvPlatDefaRoleCond.dicFldComparisonOp[clsvPlatDefaRoleEN.con_RoleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPlatDefaRoleEN.con_RoleId, objvPlatDefaRoleCond.roleId, strComparisonOpRoleId);
}
if (Object.prototype.hasOwnProperty.call(objvPlatDefaRoleCond.dicFldComparisonOp, clsvPlatDefaRoleEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvPlatDefaRoleCond.dicFldComparisonOp[clsvPlatDefaRoleEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPlatDefaRoleEN.con_Memo, objvPlatDefaRoleCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvPlatDefaRoleENS:源对象
 * @param objvPlatDefaRoleENT:目标对象
*/
export  function vPlatDefaRole_CopyObjTo(objvPlatDefaRoleENS: clsvPlatDefaRoleEN , objvPlatDefaRoleENT: clsvPlatDefaRoleEN ): void 
{
objvPlatDefaRoleENT.mId = objvPlatDefaRoleENS.mId; //mId
objvPlatDefaRoleENT.idSchool = objvPlatDefaRoleENS.idSchool; //学校流水号
objvPlatDefaRoleENT.schoolId = objvPlatDefaRoleENS.schoolId; //学校编号
objvPlatDefaRoleENT.isCurrentUse = objvPlatDefaRoleENS.isCurrentUse; //是否当前使用
objvPlatDefaRoleENT.schoolName = objvPlatDefaRoleENS.schoolName; //学校名称
objvPlatDefaRoleENT.personType = objvPlatDefaRoleENS.personType; //人员类别
objvPlatDefaRoleENT.prjId = objvPlatDefaRoleENS.prjId; //PrjId
objvPlatDefaRoleENT.roleId = objvPlatDefaRoleENS.roleId; //角色Id
objvPlatDefaRoleENT.memo = objvPlatDefaRoleENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPlatDefaRoleENS:源对象
 * @param objvPlatDefaRoleENT:目标对象
*/
export  function vPlatDefaRole_GetObjFromJsonObj(objvPlatDefaRoleENS: clsvPlatDefaRoleEN): clsvPlatDefaRoleEN 
{
 const objvPlatDefaRoleENT: clsvPlatDefaRoleEN = new clsvPlatDefaRoleEN();
ObjectAssign(objvPlatDefaRoleENT, objvPlatDefaRoleENS);
 return objvPlatDefaRoleENT;
}