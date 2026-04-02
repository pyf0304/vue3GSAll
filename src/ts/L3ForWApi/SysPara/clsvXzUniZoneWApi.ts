
 /**
 * 类名:clsvXzUniZoneWApi
 * 表名:vXzUniZone(01120332)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:57
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
 * v校区(vXzUniZone)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvXzUniZoneEN } from "@/ts/L0Entity/SysPara/clsvXzUniZoneEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vXzUniZone_Controller = "vXzUniZoneApi";
 export const vXzUniZone_ConstructorName = "vXzUniZone";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdUniZone:关键字
 * @returns 对象
 **/
export  async function vXzUniZone_GetObjByIdUniZoneAsync(strIdUniZone: string): Promise<clsvXzUniZoneEN|null>  
{
const strThisFuncName = "GetObjByIdUniZoneAsync";

if (IsNullOrEmpty(strIdUniZone) == true)
{
  const strMsg = Format("参数:[strIdUniZone]不能为空!(In clsvXzUniZoneWApi.GetObjByIdUniZoneAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdUniZone.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdUniZone]的长度:[{0}]不正确!(clsvXzUniZoneWApi.GetObjByIdUniZoneAsync)", strIdUniZone.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdUniZone";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdUniZone,
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
const objvXzUniZone = vXzUniZone_GetObjFromJsonObj(returnObj);
return objvXzUniZone;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdUniZoneCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByIdUniZonelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByIdUniZoneCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vXzUniZone_SortFunDefa(a:clsvXzUniZoneEN , b:clsvXzUniZoneEN): number 
{
return a.idUniZone.localeCompare(b.idUniZone);
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
export  function vXzUniZone_SortFunDefa2Fld(a:clsvXzUniZoneEN , b:clsvXzUniZoneEN): number 
{
if (a.uniZoneID == b.uniZoneID) return a.uniZoneDesc.localeCompare(b.uniZoneDesc);
else return a.uniZoneID.localeCompare(b.uniZoneID);
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
export  function vXzUniZone_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvXzUniZoneEN.con_IdUniZone:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
return a.idUniZone.localeCompare(b.idUniZone);
}
case clsvXzUniZoneEN.con_UniZoneID:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
return a.uniZoneID.localeCompare(b.uniZoneID);
}
case clsvXzUniZoneEN.con_UniZoneDesc:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
return a.uniZoneDesc.localeCompare(b.uniZoneDesc);
}
case clsvXzUniZoneEN.con_UniZoneDescA:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (a.uniZoneDescA == null) return -1;
if (b.uniZoneDescA == null) return 1;
return a.uniZoneDescA.localeCompare(b.uniZoneDescA);
}
case clsvXzUniZoneEN.con_IdSchool:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsvXzUniZoneEN.con_SchoolId:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (a.schoolId == null) return -1;
if (b.schoolId == null) return 1;
return a.schoolId.localeCompare(b.schoolId);
}
case clsvXzUniZoneEN.con_SchoolName:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (a.schoolName == null) return -1;
if (b.schoolName == null) return 1;
return a.schoolName.localeCompare(b.schoolName);
}
case clsvXzUniZoneEN.con_SchoolNameA:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (a.schoolNameA == null) return -1;
if (b.schoolNameA == null) return 1;
return a.schoolNameA.localeCompare(b.schoolNameA);
}
case clsvXzUniZoneEN.con_IdUni:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (a.idUni == null) return -1;
if (b.idUni == null) return 1;
return a.idUni.localeCompare(b.idUni);
}
case clsvXzUniZoneEN.con_ModifyDate:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsvXzUniZoneEN.con_ModifyUserId:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsvXzUniZoneEN.con_Memo:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vXzUniZone]中不存在!(in ${ vXzUniZone_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvXzUniZoneEN.con_IdUniZone:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
return b.idUniZone.localeCompare(a.idUniZone);
}
case clsvXzUniZoneEN.con_UniZoneID:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
return b.uniZoneID.localeCompare(a.uniZoneID);
}
case clsvXzUniZoneEN.con_UniZoneDesc:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
return b.uniZoneDesc.localeCompare(a.uniZoneDesc);
}
case clsvXzUniZoneEN.con_UniZoneDescA:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (b.uniZoneDescA == null) return -1;
if (a.uniZoneDescA == null) return 1;
return b.uniZoneDescA.localeCompare(a.uniZoneDescA);
}
case clsvXzUniZoneEN.con_IdSchool:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsvXzUniZoneEN.con_SchoolId:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (b.schoolId == null) return -1;
if (a.schoolId == null) return 1;
return b.schoolId.localeCompare(a.schoolId);
}
case clsvXzUniZoneEN.con_SchoolName:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (b.schoolName == null) return -1;
if (a.schoolName == null) return 1;
return b.schoolName.localeCompare(a.schoolName);
}
case clsvXzUniZoneEN.con_SchoolNameA:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (b.schoolNameA == null) return -1;
if (a.schoolNameA == null) return 1;
return b.schoolNameA.localeCompare(a.schoolNameA);
}
case clsvXzUniZoneEN.con_IdUni:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (b.idUni == null) return -1;
if (a.idUni == null) return 1;
return b.idUni.localeCompare(a.idUni);
}
case clsvXzUniZoneEN.con_ModifyDate:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsvXzUniZoneEN.con_ModifyUserId:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsvXzUniZoneEN.con_Memo:
return (a: clsvXzUniZoneEN, b: clsvXzUniZoneEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vXzUniZone]中不存在!(in ${ vXzUniZone_ConstructorName}.${ strThisFuncName})`;
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
export  async function vXzUniZone_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvXzUniZoneEN.con_IdUniZone:
return (obj: clsvXzUniZoneEN) => {
return obj.idUniZone === value;
}
case clsvXzUniZoneEN.con_UniZoneID:
return (obj: clsvXzUniZoneEN) => {
return obj.uniZoneID === value;
}
case clsvXzUniZoneEN.con_UniZoneDesc:
return (obj: clsvXzUniZoneEN) => {
return obj.uniZoneDesc === value;
}
case clsvXzUniZoneEN.con_UniZoneDescA:
return (obj: clsvXzUniZoneEN) => {
return obj.uniZoneDescA === value;
}
case clsvXzUniZoneEN.con_IdSchool:
return (obj: clsvXzUniZoneEN) => {
return obj.idSchool === value;
}
case clsvXzUniZoneEN.con_SchoolId:
return (obj: clsvXzUniZoneEN) => {
return obj.schoolId === value;
}
case clsvXzUniZoneEN.con_SchoolName:
return (obj: clsvXzUniZoneEN) => {
return obj.schoolName === value;
}
case clsvXzUniZoneEN.con_SchoolNameA:
return (obj: clsvXzUniZoneEN) => {
return obj.schoolNameA === value;
}
case clsvXzUniZoneEN.con_IdUni:
return (obj: clsvXzUniZoneEN) => {
return obj.idUni === value;
}
case clsvXzUniZoneEN.con_ModifyDate:
return (obj: clsvXzUniZoneEN) => {
return obj.modifyDate === value;
}
case clsvXzUniZoneEN.con_ModifyUserId:
return (obj: clsvXzUniZoneEN) => {
return obj.modifyUserId === value;
}
case clsvXzUniZoneEN.con_Memo:
return (obj: clsvXzUniZoneEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vXzUniZone]中不存在!(in ${ vXzUniZone_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vXzUniZone__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vXzUniZone_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
export  async function vXzUniZone_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
export  async function vXzUniZone_GetFirstObjAsync(strWhereCond: string): Promise<clsvXzUniZoneEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

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
const objvXzUniZone = vXzUniZone_GetObjFromJsonObj(returnObj);
return objvXzUniZone;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
export  async function vXzUniZone_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvXzUniZoneEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzUniZone_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
 * @param arrIdUniZone:关键字列表
 * @returns 对象列表
 **/
export  async function vXzUniZone_GetObjLstByIdUniZoneLstAsync(arrIdUniZone: Array<string>): Promise<Array<clsvXzUniZoneEN>>  
{
const strThisFuncName = "GetObjLstByIdUniZoneLstAsync";
const strAction = "GetObjLstByIdUniZoneLst";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdUniZone, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzUniZone_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdUniZoneLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vXzUniZone_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvXzUniZoneEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzUniZone_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
export  async function vXzUniZone_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvXzUniZoneEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzUniZone_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
export  async function vXzUniZone_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvXzUniZoneEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvXzUniZoneEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzUniZone_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
export  async function vXzUniZone_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
 * @param strIdUniZone:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vXzUniZone_IsExistAsync(strIdUniZone: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdUniZone
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
export  async function vXzUniZone_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vXzUniZone_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzUniZone_ConstructorName, strThisFuncName);
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
export  function vXzUniZone_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vXzUniZone_(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const strCondition = `1=1`;
const arrObjLstSel = await vXzUniZone_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvXzUniZoneEN.con_IdUniZone, clsvXzUniZoneEN.con_UniZoneDesc, "v校区");
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vXzUniZone_GetJSONStrByObj (pobjvXzUniZoneEN: clsvXzUniZoneEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvXzUniZoneEN);
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
export  function vXzUniZone_GetObjLstByJSONStr (strJSON: string): Array<clsvXzUniZoneEN>
{
let arrvXzUniZoneObjLst = new Array<clsvXzUniZoneEN>();
if (strJSON === "")
{
return arrvXzUniZoneObjLst;
}
try
{
arrvXzUniZoneObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvXzUniZoneObjLst;
}
return arrvXzUniZoneObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvXzUniZoneObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vXzUniZone_GetObjLstByJSONObjLst (arrvXzUniZoneObjLstS: Array<clsvXzUniZoneEN>): Array<clsvXzUniZoneEN>
{
const arrvXzUniZoneObjLst = new Array<clsvXzUniZoneEN>();
for (const objInFor of arrvXzUniZoneObjLstS) {
const obj1 = vXzUniZone_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvXzUniZoneObjLst.push(obj1);
}
return arrvXzUniZoneObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vXzUniZone_GetObjByJSONStr (strJSON: string): clsvXzUniZoneEN
{
let pobjvXzUniZoneEN = new clsvXzUniZoneEN();
if (strJSON === "")
{
return pobjvXzUniZoneEN;
}
try
{
pobjvXzUniZoneEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvXzUniZoneEN;
}
return pobjvXzUniZoneEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vXzUniZone_GetCombineCondition(objvXzUniZoneCond: clsvXzUniZoneEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_IdUniZone) == true)
{
const strComparisonOpIdUniZone:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_IdUniZone];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_IdUniZone, objvXzUniZoneCond.idUniZone, strComparisonOpIdUniZone);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_UniZoneID) == true)
{
const strComparisonOpUniZoneID:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_UniZoneID];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_UniZoneID, objvXzUniZoneCond.uniZoneID, strComparisonOpUniZoneID);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_UniZoneDesc) == true)
{
const strComparisonOpUniZoneDesc:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_UniZoneDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_UniZoneDesc, objvXzUniZoneCond.uniZoneDesc, strComparisonOpUniZoneDesc);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_UniZoneDescA) == true)
{
const strComparisonOpUniZoneDescA:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_UniZoneDescA];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_UniZoneDescA, objvXzUniZoneCond.uniZoneDescA, strComparisonOpUniZoneDescA);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_IdSchool, objvXzUniZoneCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_SchoolId) == true)
{
const strComparisonOpSchoolId:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_SchoolId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_SchoolId, objvXzUniZoneCond.schoolId, strComparisonOpSchoolId);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_SchoolName) == true)
{
const strComparisonOpSchoolName:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_SchoolName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_SchoolName, objvXzUniZoneCond.schoolName, strComparisonOpSchoolName);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_SchoolNameA) == true)
{
const strComparisonOpSchoolNameA:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_SchoolNameA];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_SchoolNameA, objvXzUniZoneCond.schoolNameA, strComparisonOpSchoolNameA);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_IdUni) == true)
{
const strComparisonOpIdUni:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_IdUni];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_IdUni, objvXzUniZoneCond.idUni, strComparisonOpIdUni);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_ModifyDate, objvXzUniZoneCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_ModifyUserId, objvXzUniZoneCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objvXzUniZoneCond.dicFldComparisonOp, clsvXzUniZoneEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvXzUniZoneCond.dicFldComparisonOp[clsvXzUniZoneEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzUniZoneEN.con_Memo, objvXzUniZoneCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvXzUniZoneENS:源对象
 * @param objvXzUniZoneENT:目标对象
*/
export  function vXzUniZone_CopyObjTo(objvXzUniZoneENS: clsvXzUniZoneEN , objvXzUniZoneENT: clsvXzUniZoneEN ): void 
{
objvXzUniZoneENT.idUniZone = objvXzUniZoneENS.idUniZone; //校区流水号
objvXzUniZoneENT.uniZoneID = objvXzUniZoneENS.uniZoneID; //校区编号
objvXzUniZoneENT.uniZoneDesc = objvXzUniZoneENS.uniZoneDesc; //校区名称
objvXzUniZoneENT.uniZoneDescA = objvXzUniZoneENS.uniZoneDescA; //UniZoneDescA
objvXzUniZoneENT.idSchool = objvXzUniZoneENS.idSchool; //学校流水号
objvXzUniZoneENT.schoolId = objvXzUniZoneENS.schoolId; //学校编号
objvXzUniZoneENT.schoolName = objvXzUniZoneENS.schoolName; //学校名称
objvXzUniZoneENT.schoolNameA = objvXzUniZoneENS.schoolNameA; //学校简称
objvXzUniZoneENT.idUni = objvXzUniZoneENS.idUni; //id_Uni
objvXzUniZoneENT.modifyDate = objvXzUniZoneENS.modifyDate; //修改日期
objvXzUniZoneENT.modifyUserId = objvXzUniZoneENS.modifyUserId; //修改人
objvXzUniZoneENT.memo = objvXzUniZoneENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvXzUniZoneENS:源对象
 * @param objvXzUniZoneENT:目标对象
*/
export  function vXzUniZone_GetObjFromJsonObj(objvXzUniZoneENS: clsvXzUniZoneEN): clsvXzUniZoneEN 
{
 const objvXzUniZoneENT: clsvXzUniZoneEN = new clsvXzUniZoneEN();
ObjectAssign(objvXzUniZoneENT, objvXzUniZoneENS);
 return objvXzUniZoneENT;
}