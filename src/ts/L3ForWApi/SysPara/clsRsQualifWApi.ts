
 /**
 * 类名:clsRsQualifWApi
 * 表名:RsQualif(01120109)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:27
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
 * 学历(RsQualif)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsRsQualifEN } from "@/ts/L0Entity/SysPara/clsRsQualifEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const rsQualif_Controller = "RsQualifApi";
 export const rsQualif_ConstructorName = "rsQualif";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdQualif:关键字
 * @returns 对象
 **/
export  async function RsQualif_GetObjByIdQualifAsync(strIdQualif: string): Promise<clsRsQualifEN|null>  
{
const strThisFuncName = "GetObjByIdQualifAsync";

if (IsNullOrEmpty(strIdQualif) == true)
{
  const strMsg = Format("参数:[strIdQualif]不能为空!(In clsRsQualifWApi.GetObjByIdQualifAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdQualif.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdQualif]的长度:[{0}]不正确!(clsRsQualifWApi.GetObjByIdQualifAsync)", strIdQualif.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdQualif";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdQualif,
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
const objRsQualif = RsQualif_GetObjFromJsonObj(returnObj);
return objRsQualif;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdQualifCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByIdQualiflocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByIdQualifCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function RsQualif_SortFunDefa(a:clsRsQualifEN , b:clsRsQualifEN): number 
{
return a.idQualif.localeCompare(b.idQualif);
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
export  function RsQualif_SortFunDefa2Fld(a:clsRsQualifEN , b:clsRsQualifEN): number 
{
if (a.qualifID == b.qualifID) return a.qualifDesc.localeCompare(b.qualifDesc);
else return a.qualifID.localeCompare(b.qualifID);
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
export  function RsQualif_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRsQualifEN.con_IdQualif:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
return a.idQualif.localeCompare(b.idQualif);
}
case clsRsQualifEN.con_QualifID:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
return a.qualifID.localeCompare(b.qualifID);
}
case clsRsQualifEN.con_QualifDesc:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
return a.qualifDesc.localeCompare(b.qualifDesc);
}
case clsRsQualifEN.con_ModifyDate:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsRsQualifEN.con_ModifyUserId:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsQualif]中不存在!(in ${ rsQualif_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRsQualifEN.con_IdQualif:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
return b.idQualif.localeCompare(a.idQualif);
}
case clsRsQualifEN.con_QualifID:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
return b.qualifID.localeCompare(a.qualifID);
}
case clsRsQualifEN.con_QualifDesc:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
return b.qualifDesc.localeCompare(a.qualifDesc);
}
case clsRsQualifEN.con_ModifyDate:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsRsQualifEN.con_ModifyUserId:
return (a: clsRsQualifEN, b: clsRsQualifEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsQualif]中不存在!(in ${ rsQualif_ConstructorName}.${ strThisFuncName})`;
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
export  async function RsQualif_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRsQualifEN.con_IdQualif:
return (obj: clsRsQualifEN) => {
return obj.idQualif === value;
}
case clsRsQualifEN.con_QualifID:
return (obj: clsRsQualifEN) => {
return obj.qualifID === value;
}
case clsRsQualifEN.con_QualifDesc:
return (obj: clsRsQualifEN) => {
return obj.qualifDesc === value;
}
case clsRsQualifEN.con_ModifyDate:
return (obj: clsRsQualifEN) => {
return obj.modifyDate === value;
}
case clsRsQualifEN.con_ModifyUserId:
return (obj: clsRsQualifEN) => {
return obj.modifyUserId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RsQualif]中不存在!(in ${ rsQualif_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[RsQualif__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsQualif_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  async function RsQualif_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  async function RsQualif_GetFirstObjAsync(strWhereCond: string): Promise<clsRsQualifEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const objRsQualif = RsQualif_GetObjFromJsonObj(returnObj);
return objRsQualif;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  async function RsQualif_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRsQualifEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsQualif_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsQualif_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
 * @param arrIdQualif:关键字列表
 * @returns 对象列表
 **/
export  async function RsQualif_GetObjLstByIdQualifLstAsync(arrIdQualif: Array<string>): Promise<Array<clsRsQualifEN>>  
{
const strThisFuncName = "GetObjLstByIdQualifLstAsync";
const strAction = "GetObjLstByIdQualifLst";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdQualif, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsQualif_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsQualif_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdQualifLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function RsQualif_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRsQualifEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsQualif_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsQualif_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  async function RsQualif_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRsQualifEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsQualif_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsQualif_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  async function RsQualif_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRsQualifEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRsQualifEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rsQualif_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RsQualif_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
 * @param strIdQualif:关键字
 * @returns 获取删除的结果
 **/
export  async function RsQualif_DelRecordAsync(strIdQualif: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(rsQualif_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdQualif);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
 * @param arrIdQualif:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function RsQualif_DelRsQualifsAsync(arrIdQualif: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRsQualifsAsync";
const strAction = "DelRsQualifs";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdQualif, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  async function RsQualif_DelRsQualifsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRsQualifsByCondAsync";
const strAction = "DelRsQualifsByCond";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
 * @param objRsQualifEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsQualif_AddNewRecordAsync(objRsQualifEN: clsRsQualifEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRsQualifEN.idQualif === null || objRsQualifEN.idQualif === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRsQualifEN);
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsQualifEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
 * @param objRsQualifEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RsQualif_AddNewRecordWithMaxIdAsync(objRsQualifEN: clsRsQualifEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsQualifEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
 * @param objRsQualifEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RsQualif_AddNewRecordWithReturnKeyAsync(objRsQualifEN: clsRsQualifEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsQualifEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
 * @param objRsQualifEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RsQualif_UpdateRecordAsync(objRsQualifEN: clsRsQualifEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRsQualifEN.sfUpdFldSetStr === undefined || objRsQualifEN.sfUpdFldSetStr === null || objRsQualifEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsQualifEN.idQualif);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsQualifEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
 * @param objRsQualifEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RsQualif_UpdateWithConditionAsync(objRsQualifEN: clsRsQualifEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRsQualifEN.sfUpdFldSetStr === undefined || objRsQualifEN.sfUpdFldSetStr === null || objRsQualifEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRsQualifEN.idQualif);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);
objRsQualifEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRsQualifEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  async function RsQualif_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
 * @param strIdQualif:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RsQualif_IsExistAsync(strIdQualif: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdQualif
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  async function RsQualif_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  async function RsQualif_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(rsQualif_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rsQualif_ConstructorName, strThisFuncName);
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
export  function RsQualif_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function RsQualif_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await RsQualif_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsRsQualifEN.con_IdQualif, clsRsQualifEN.con_QualifDesc, "学历");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsQualif_CheckPropertyNew(pobjRsQualifEN: clsRsQualifEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRsQualifEN.qualifID) === true )
{
 throw new Error("(errid:Watl000411)字段[学历]不能为空(In 学历)!(clsRsQualifBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsQualifEN.qualifDesc) === true )
{
 throw new Error("(errid:Watl000411)字段[QualifDesc]不能为空(In 学历)!(clsRsQualifBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsQualifEN.idQualif) == false && GetStrLen(pobjRsQualifEN.idQualif) > 4)
{
 throw new Error("(errid:Watl000413)字段[学历流水号(idQualif)]的长度不能超过4(In 学历(RsQualif))!值:$(pobjRsQualifEN.idQualif)(clsRsQualifBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsQualifEN.qualifID) == false && GetStrLen(pobjRsQualifEN.qualifID) > 4)
{
 throw new Error("(errid:Watl000413)字段[学历(qualifID)]的长度不能超过4(In 学历(RsQualif))!值:$(pobjRsQualifEN.qualifID)(clsRsQualifBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsQualifEN.qualifDesc) == false && GetStrLen(pobjRsQualifEN.qualifDesc) > 30)
{
 throw new Error("(errid:Watl000413)字段[QualifDesc(qualifDesc)]的长度不能超过30(In 学历(RsQualif))!值:$(pobjRsQualifEN.qualifDesc)(clsRsQualifBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsQualifEN.modifyDate) == false && GetStrLen(pobjRsQualifEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 学历(RsQualif))!值:$(pobjRsQualifEN.modifyDate)(clsRsQualifBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjRsQualifEN.modifyUserId) == false && GetStrLen(pobjRsQualifEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 学历(RsQualif))!值:$(pobjRsQualifEN.modifyUserId)(clsRsQualifBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsQualifEN.idQualif) == false && undefined !== pobjRsQualifEN.idQualif && tzDataType.isString(pobjRsQualifEN.idQualif) === false)
{
 throw new Error("(errid:Watl000414)字段[学历流水号(idQualif)]的值:[$(pobjRsQualifEN.idQualif)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsQualifEN.qualifID) == false && undefined !== pobjRsQualifEN.qualifID && tzDataType.isString(pobjRsQualifEN.qualifID) === false)
{
 throw new Error("(errid:Watl000414)字段[学历(qualifID)]的值:[$(pobjRsQualifEN.qualifID)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsQualifEN.qualifDesc) == false && undefined !== pobjRsQualifEN.qualifDesc && tzDataType.isString(pobjRsQualifEN.qualifDesc) === false)
{
 throw new Error("(errid:Watl000414)字段[QualifDesc(qualifDesc)]的值:[$(pobjRsQualifEN.qualifDesc)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsQualifEN.modifyDate) == false && undefined !== pobjRsQualifEN.modifyDate && tzDataType.isString(pobjRsQualifEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjRsQualifEN.modifyDate)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjRsQualifEN.modifyUserId) == false && undefined !== pobjRsQualifEN.modifyUserId && tzDataType.isString(pobjRsQualifEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjRsQualifEN.modifyUserId)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RsQualif_CheckProperty4Update(pobjRsQualifEN: clsRsQualifEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRsQualifEN.idQualif) == false && GetStrLen(pobjRsQualifEN.idQualif) > 4)
{
 throw new Error("(errid:Watl000416)字段[学历流水号(idQualif)]的长度不能超过4(In 学历(RsQualif))!值:$(pobjRsQualifEN.idQualif)(clsRsQualifBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsQualifEN.qualifID) == false && GetStrLen(pobjRsQualifEN.qualifID) > 4)
{
 throw new Error("(errid:Watl000416)字段[学历(qualifID)]的长度不能超过4(In 学历(RsQualif))!值:$(pobjRsQualifEN.qualifID)(clsRsQualifBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsQualifEN.qualifDesc) == false && GetStrLen(pobjRsQualifEN.qualifDesc) > 30)
{
 throw new Error("(errid:Watl000416)字段[QualifDesc(qualifDesc)]的长度不能超过30(In 学历(RsQualif))!值:$(pobjRsQualifEN.qualifDesc)(clsRsQualifBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsQualifEN.modifyDate) == false && GetStrLen(pobjRsQualifEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 学历(RsQualif))!值:$(pobjRsQualifEN.modifyDate)(clsRsQualifBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsQualifEN.modifyUserId) == false && GetStrLen(pobjRsQualifEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 学历(RsQualif))!值:$(pobjRsQualifEN.modifyUserId)(clsRsQualifBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRsQualifEN.idQualif) == false && undefined !== pobjRsQualifEN.idQualif && tzDataType.isString(pobjRsQualifEN.idQualif) === false)
{
 throw new Error("(errid:Watl000417)字段[学历流水号(idQualif)]的值:[$(pobjRsQualifEN.idQualif)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsQualifEN.qualifID) == false && undefined !== pobjRsQualifEN.qualifID && tzDataType.isString(pobjRsQualifEN.qualifID) === false)
{
 throw new Error("(errid:Watl000417)字段[学历(qualifID)]的值:[$(pobjRsQualifEN.qualifID)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsQualifEN.qualifDesc) == false && undefined !== pobjRsQualifEN.qualifDesc && tzDataType.isString(pobjRsQualifEN.qualifDesc) === false)
{
 throw new Error("(errid:Watl000417)字段[QualifDesc(qualifDesc)]的值:[$(pobjRsQualifEN.qualifDesc)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsQualifEN.modifyDate) == false && undefined !== pobjRsQualifEN.modifyDate && tzDataType.isString(pobjRsQualifEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjRsQualifEN.modifyDate)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjRsQualifEN.modifyUserId) == false && undefined !== pobjRsQualifEN.modifyUserId && tzDataType.isString(pobjRsQualifEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjRsQualifEN.modifyUserId)], 非法,应该为字符型(In 学历(RsQualif))!(clsRsQualifBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRsQualifEN.idQualif) === true )
{
 throw new Error("(errid:Watl000064)字段[学历流水号]不能为空(In 学历)!(clsRsQualifBL:CheckProperty4Update)");
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
export  function RsQualif_GetJSONStrByObj (pobjRsQualifEN: clsRsQualifEN): string
{
pobjRsQualifEN.sfUpdFldSetStr = pobjRsQualifEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRsQualifEN);
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
export  function RsQualif_GetObjLstByJSONStr (strJSON: string): Array<clsRsQualifEN>
{
let arrRsQualifObjLst = new Array<clsRsQualifEN>();
if (strJSON === "")
{
return arrRsQualifObjLst;
}
try
{
arrRsQualifObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRsQualifObjLst;
}
return arrRsQualifObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRsQualifObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RsQualif_GetObjLstByJSONObjLst (arrRsQualifObjLstS: Array<clsRsQualifEN>): Array<clsRsQualifEN>
{
const arrRsQualifObjLst = new Array<clsRsQualifEN>();
for (const objInFor of arrRsQualifObjLstS) {
const obj1 = RsQualif_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRsQualifObjLst.push(obj1);
}
return arrRsQualifObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RsQualif_GetObjByJSONStr (strJSON: string): clsRsQualifEN
{
let pobjRsQualifEN = new clsRsQualifEN();
if (strJSON === "")
{
return pobjRsQualifEN;
}
try
{
pobjRsQualifEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRsQualifEN;
}
return pobjRsQualifEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RsQualif_GetCombineCondition(objRsQualifCond: clsRsQualifEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRsQualifCond.dicFldComparisonOp, clsRsQualifEN.con_IdQualif) == true)
{
const strComparisonOpIdQualif:string = objRsQualifCond.dicFldComparisonOp[clsRsQualifEN.con_IdQualif];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsQualifEN.con_IdQualif, objRsQualifCond.idQualif, strComparisonOpIdQualif);
}
if (Object.prototype.hasOwnProperty.call(objRsQualifCond.dicFldComparisonOp, clsRsQualifEN.con_QualifID) == true)
{
const strComparisonOpQualifID:string = objRsQualifCond.dicFldComparisonOp[clsRsQualifEN.con_QualifID];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsQualifEN.con_QualifID, objRsQualifCond.qualifID, strComparisonOpQualifID);
}
if (Object.prototype.hasOwnProperty.call(objRsQualifCond.dicFldComparisonOp, clsRsQualifEN.con_QualifDesc) == true)
{
const strComparisonOpQualifDesc:string = objRsQualifCond.dicFldComparisonOp[clsRsQualifEN.con_QualifDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsQualifEN.con_QualifDesc, objRsQualifCond.qualifDesc, strComparisonOpQualifDesc);
}
if (Object.prototype.hasOwnProperty.call(objRsQualifCond.dicFldComparisonOp, clsRsQualifEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objRsQualifCond.dicFldComparisonOp[clsRsQualifEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsQualifEN.con_ModifyDate, objRsQualifCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objRsQualifCond.dicFldComparisonOp, clsRsQualifEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objRsQualifCond.dicFldComparisonOp[clsRsQualifEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRsQualifEN.con_ModifyUserId, objRsQualifCond.modifyUserId, strComparisonOpModifyUserId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRsQualifENS:源对象
 * @param objRsQualifENT:目标对象
*/
export  function RsQualif_CopyObjTo(objRsQualifENS: clsRsQualifEN , objRsQualifENT: clsRsQualifEN ): void 
{
objRsQualifENT.idQualif = objRsQualifENS.idQualif; //学历流水号
objRsQualifENT.qualifID = objRsQualifENS.qualifID; //学历
objRsQualifENT.qualifDesc = objRsQualifENS.qualifDesc; //QualifDesc
objRsQualifENT.modifyDate = objRsQualifENS.modifyDate; //修改日期
objRsQualifENT.modifyUserId = objRsQualifENS.modifyUserId; //修改人
objRsQualifENT.sfUpdFldSetStr = objRsQualifENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRsQualifENS:源对象
 * @param objRsQualifENT:目标对象
*/
export  function RsQualif_GetObjFromJsonObj(objRsQualifENS: clsRsQualifEN): clsRsQualifEN 
{
 const objRsQualifENT: clsRsQualifEN = new clsRsQualifEN();
ObjectAssign(objRsQualifENT, objRsQualifENS);
 return objRsQualifENT;
}